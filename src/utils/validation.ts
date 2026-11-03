import { PagePath, EventItem } from './schoolData';

export interface AdmissionFormData {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  campus: string;
  previousSchool: string;
  message: string;
}

export interface ContactFormData {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactSubject: string;
  contactMessage: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const VALID_PATHS: PagePath[] = ['/', '/about', '/admissions', '/campuses', '/events', '/contact'];

export function normalizePagePath(rawPath: string): PagePath {
  const cleaned = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  if (cleaned === '/index.html' || cleaned === '') return '/';
  const withoutHtml = cleaned.replace(/\.html$/, '');
  if (VALID_PATHS.includes(withoutHtml as PagePath)) {
    return withoutHtml as PagePath;
  }
  return '/';
}

export function formatStatCounter(value: number, target: number): string {
  const clamped = Math.min(Math.max(0, Math.floor(value)), target);
  return `${clamped}${target >= 1000 ? '+' : ''}`;
}

export function getNextBannerIndex(currentIndex: number, direction: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex + direction + total) % total;
}

export function filterEventsByCategory(events: EventItem[], category: string | null): EventItem[] {
  if (!category || category === 'All') return events;
  return events.filter((ev) => ev.category.toLowerCase() === category.toLowerCase());
}

export function validateAdmissionForm(data: AdmissionFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.program || data.program.trim() === '') {
    errors.program = 'Please select a program of interest.';
  }
  if (!data.campus || data.campus.trim() === '') {
    errors.campus = 'Please select a preferred campus.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.contactName || data.contactName.trim().length < 2) {
    errors.contactName = 'Please enter your full name.';
  }
  if (!data.contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail.trim())) {
    errors.contactEmail = 'Please enter a valid email address.';
  }
  if (!data.contactSubject || data.contactSubject.trim() === '') {
    errors.contactSubject = 'Please select a subject.';
  }
  if (!data.contactMessage || data.contactMessage.trim().length < 5) {
    errors.contactMessage = 'Please enter your message.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

import { PagePath, EventItem } from './schoolData';

export interface AdmissionFormData {
  fullName?: string;
  studentName?: string;
  email: string;
  phone: string;
  program?: string;
  campus?: string;
  campusPreference?: string;
  gradeApplying?: string;
  previousSchool?: string;
  message?: string;
  dob?: string;
  gender?: string;
  parentName?: string;
  relationship?: string;
  address?: string;
  additionalInfo?: string;
  termsAccepted?: boolean;
}

export type AdmissionFormInput = AdmissionFormData;

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

  const name = data.studentName || data.fullName || '';
  if (!name || name.trim().length < 2) {
    const err = 'Please enter student full name.';
    errors.fullName = err;
    errors.studentName = err;
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }
  const prog = data.program || data.gradeApplying || '';
  if (!prog || prog.trim() === '') {
    const err = 'Please select a program or grade.';
    errors.program = err;
    errors.gradeApplying = err;
  }
  const camp = data.campus || data.campusPreference || '';
  if (!camp || camp.trim() === '') {
    const err = 'Please select a preferred campus.';
    errors.campus = err;
    errors.campusPreference = err;
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

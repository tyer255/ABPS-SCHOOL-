import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizePagePath,
  formatStatCounter,
  getNextBannerIndex,
  filterEventsByCategory,
  validateAdmissionForm,
  validateContactForm,
} from './validation';
import { UPCOMING_EVENTS, CAMPUSES, PROGRAMS, NAV_LINKS } from './schoolData';

test('normalizePagePath resolves valid ABPS routes and fallbacks', () => {
  assert.equal(normalizePagePath('/'), '/');
  assert.equal(normalizePagePath('/about'), '/about');
  assert.equal(normalizePagePath('/admissions/'), '/admissions');
  assert.equal(normalizePagePath('/campuses.html'), '/campuses');
  assert.equal(normalizePagePath('/events?cat=Sports'), '/events');
  assert.equal(normalizePagePath('/contact#form'), '/contact');
  assert.equal(normalizePagePath('/unknown-route'), '/');
});

test('formatStatCounter appends + for targets >= 1000 matching script.js', () => {
  assert.equal(formatStatCounter(10000, 10000), '10000+');
  assert.equal(formatStatCounter(500, 500), '500');
  assert.equal(formatStatCounter(25, 25), '25');
  assert.equal(formatStatCounter(3, 3), '3');
});

test('getNextBannerIndex wraps around forward and backward', () => {
  assert.equal(getNextBannerIndex(0, 1, 2), 1);
  assert.equal(getNextBannerIndex(1, 1, 2), 0);
  assert.equal(getNextBannerIndex(0, -1, 2), 1);
});

test('filterEventsByCategory filters upcoming events accurately', () => {
  const all = filterEventsByCategory(UPCOMING_EVENTS, null);
  assert.equal(all.length, 6);
  const academic = filterEventsByCategory(UPCOMING_EVENTS, 'Academic');
  assert.equal(academic.length, 2);
  const sports = filterEventsByCategory(UPCOMING_EVENTS, 'Sports');
  assert.equal(sports.length, 1);
});

test('validateAdmissionForm enforces required fields and accepts valid input', () => {
  const invalid = validateAdmissionForm({
    fullName: '',
    email: 'bad-email',
    phone: '123',
    program: '',
    campus: '',
    previousSchool: '',
    message: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.program);
  assert.ok(invalid.errors.campus);

  const valid = validateAdmissionForm({
    fullName: 'Ali Raza',
    email: 'ali@example.com',
    phone: '03017243663',
    program: 'high',
    campus: 'boys',
    previousSchool: 'City School',
    message: 'Looking forward to joining.',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('validateContactForm enforces required fields and accepts valid input', () => {
  const invalid = validateContactForm({
    contactName: '',
    contactEmail: 'invalid',
    contactPhone: '',
    contactSubject: '',
    contactMessage: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.contactName);
  assert.ok(invalid.errors.contactEmail);
  assert.ok(invalid.errors.contactSubject);
  assert.ok(invalid.errors.contactMessage);

  const valid = validateContactForm({
    contactName: 'Fatima Noor',
    contactEmail: 'fatima@example.com',
    contactPhone: '03017243663',
    contactSubject: 'admissions',
    contactMessage: 'Please share Fall 2024 prospectus details.',
  });
  assert.equal(valid.valid, true);
});

test('schoolData integrity matches abps.edu.pk structure', () => {
  assert.equal(NAV_LINKS.length, 6);
  assert.equal(CAMPUSES.length, 3);
  assert.equal(PROGRAMS.length, 4);
  assert.equal(UPCOMING_EVENTS.length, 6);
});

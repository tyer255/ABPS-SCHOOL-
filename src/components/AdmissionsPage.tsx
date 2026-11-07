import React, { useState } from 'react';
import {
  ADMISSION_REQUIREMENTS,
  ADMISSION_STEPS,
  CAMPUSES,
  PagePath,
  PROGRAMS,
  SCHOOL_IDENTITY,
} from '../utils/schoolData';
import { AdmissionFormInput, validateAdmissionForm } from '../utils/validation';

interface AdmissionsPageProps {
  onNavigate: (path: PagePath) => void;
}

const initialForm: AdmissionFormInput = {
  studentName: '',
  dob: '',
  gender: '',
  gradeApplying: '',
  parentName: '',
  relationship: '',
  email: '',
  phone: '',
  address: '',
  previousSchool: '',
  campusPreference: '',
  additionalInfo: '',
  termsAccepted: false,
};

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
  const [openStepIdx, setOpenStepIdx] = useState<number>(0);
  const [activeProgramIdx, setActiveProgramIdx] = useState<number>(0);
  const [formData, setFormData] = useState<AdmissionFormInput>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionFormInput, string>>>({});
  const [submittedApplication, setSubmittedApplication] = useState<{
    referenceId: string;
    studentName: string;
    gradeApplying: string;
    campusPreference: string;
  } | null>(null);

  const handleNav = (e: React.MouseEvent, path: PagePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev: AdmissionFormInput) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof AdmissionFormInput]) {
      setErrors((prev: Partial<Record<keyof AdmissionFormInput, string>>) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateAdmissionForm(formData);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmittedApplication({
      referenceId: `ABPS-${Math.floor(100000 + Math.random() * 900000)}`,
      studentName: (formData.studentName || '').trim(),
      gradeApplying: formData.gradeApplying || '',
      campusPreference: formData.campusPreference || '',
    });
    setFormData(initialForm);
  };

  const prevProgramIdx = (activeProgramIdx - 1 + PROGRAMS.length) % PROGRAMS.length;
  const nextProgramIdx = (activeProgramIdx + 1) % PROGRAMS.length;

  return (
    <div className="fsPageLayout fsLayout fsOneColumnLayout fsStyleAutoclear" id="fsEl_11727" data-use-new="true">
      <div className="fsDiv fsStyleAutoclear" id="fsEl_11728">
        {/* 1. Briarcrest White Outlined Lead-In Panel */}
        <div
          className="fsElement fsContainer panel-white panel-outline logo-top panel-full-padding panel-full-width panel-full-boundary"
          id="fsEl_16809"
          data-use-new="true"
          updated=""
        >
          <div className="panel-logo" />
          <div className="panel-background">
            <div>
              <div />
            </div>
          </div>
          <div className="fsElementContent">
            <div className="fsElement fsContent" data-use-new="true">
              <div className="fsElementContent">
                <h6 style={{ textAlign: 'center' }}>
                  <span className="lead-in">
                    Welcome to Admissions at {SCHOOL_IDENTITY.name}. We invite families across Pakpattan to join our tradition of academic excellence, character development, and lifelong achievement.
                  </span>
                </h6>
                <h6 style={{ textAlign: 'center', padding: '0 0 12px 0' }}>
                  <span className="lead-in">
                    Admissions are open across our Boys Campus, Girls Campus, and Choti Dunya Campus from Pre-School through Grade 12 (Intermediate).
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Briarcrest Two-Column Wide Left Admissions Welcome & Important Dates */}
        <div className="fsElement fsContent featured-title-left" id="fsEl_16260" data-use-new="true" shown="" style={{ marginTop: '40px' }}>
          <header>
            <div className="fsElementHeaderContent">
              <p>Start Your Journey at ABPS</p>
            </div>
          </header>
          <div className="fsElementContent words splitting">
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '64px', color: '#004415', lineHeight: 1 }}>
              ADMISSIONS <strong>PROCESS &amp;</strong> REQUIREMENTS
            </p>
          </div>
        </div>

        <div className="fsElement fsLayout fsTwoColumnWideLeftLayout fsStyleAutoclear" id="fsEl_16261" data-use-new="true">
          <div className="fsDiv fsStyleTwoThirds fsStyleColumn fsStyleColumn-1 fsStyleAutoclear">
            <div className="fsElement fsContent" id="fsEl_16264" data-use-new="true">
              <div className="fsElementContent">
                <p style={{ fontSize: '18px', lineHeight: 1.75 }}>
                  Choosing the right school is one of the most important investments a family makes. At {SCHOOL_IDENTITY.name}, our admissions process is designed to be welcoming, transparent, and supportive for both parents and students.
                </p>
                <p style={{ fontSize: '18px', lineHeight: 1.75 }}>
                  Whether your child is taking their first steps in our specialized <strong>Choti Dunya Campus</strong> or preparing for board examinations and university entrance in our <strong>Boys &amp; Girls High School and Intermediate</strong> streams, our admissions team at <strong>{SCHOOL_IDENTITY.address}</strong> is ready to guide you every step of the way.
                </p>
                <p style={{ marginTop: '24px' }}>
                  <a
                    className="button-yellow-solid"
                    href="#online-admission-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('online-admission-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Complete Online Application Form
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="fsDiv fsStyleOneThird fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" id="fsEl_16265" data-use-new="true">
              <header>
                <h2 className="fsElementTitle">Important Dates</h2>
              </header>
              <div className="fsElementContent">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {ADMISSION_REQUIREMENTS.importantDates.map((d) => (
                    <li
                      key={d.label}
                      style={{
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(255, 193, 17, 0.3)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        color: '#ffffff',
                      }}
                    >
                      <strong style={{ color: '#ffc111' }}>{d.label}</strong>
                      <span>{d.value}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '20px', color: '#faf7f3', fontSize: '14px' }}>
                  Admissions Office: <strong>{SCHOOL_IDENTITY.phone}</strong> | <strong>{SCHOOL_IDENTITY.emails.admissions}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Briarcrest White Outlined Panel with 4-Step Admissions Accordion (fsEl_16276) */}
        <div
          className="fsElement fsContainer panel-white panel-outline logo-bottom panel-thick-padding panel-full-width panel-full-boundary"
          id="fsEl_16276"
          data-use-new="true"
          updated=""
        >
          <div className="panel-logo" />
          <div className="panel-background">
            <div>
              <div />
            </div>
          </div>
          <div className="fsElementContent">
            <div className="fsElement fsContent" id="fsEl_16269" data-use-new="true">
              <div className="fsElementContent">
                <h3 style={{ textAlign: 'center' }}>
                  <span className="alternate-heading">How to Apply — 4 Simple Steps</span>
                </h3>
              </div>
            </div>

            <div className="fsElement fsPanelGroup fsAccordion fsPanelIconBefore" id="fsEl_16266" data-use-new="true">
              <div className="fsElementContent">
                {ADMISSION_STEPS.map((s, idx) => {
                  const isOpen = openStepIdx === idx;
                  return (
                    <section
                      key={s.step}
                      className={`fsElement fsPanel fsStyleAutoclear ${isOpen ? 'fsStateOpen' : ''}`}
                      data-use-new="true"
                      role="tabpanel"
                    >
                      <header>
                        <h2 className="fsElementTitle">
                          <a
                            role="button"
                            aria-expanded={isOpen}
                            href={`#step-${s.step}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenStepIdx(isOpen ? -1 : idx);
                            }}
                          >
                            Step {s.step}: {s.title}
                          </a>
                        </h2>
                      </header>
                      {isOpen && (
                        <div className="fsElementContent" aria-hidden={!isOpen}>
                          <div className="fsElement fsContent" data-use-new="true">
                            <div className="fsElementContent">
                              <p style={{ fontSize: '18px', lineHeight: 1.7 }}>{s.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Briarcrest 3-Column Card-Green-1 Requirements & Eligibility */}
        <div className="fsElement fsContent featured-title-center" id="fsEl_16327" data-use-new="true" shown="" style={{ marginTop: '60px', marginBottom: '40px' }}>
          <header>
            <div className="fsElementHeaderContent">
              <p>What You Need to Enroll</p>
            </div>
          </header>
          <div className="fsElementContent words splitting">
            <p style={{ textAlign: 'center', fontFamily: '"Bebas Neue", sans-serif', fontSize: '64px', color: '#004415', lineHeight: 1 }}>
              REQUIRED <strong>DOCUMENTS &amp;</strong> CRITERIA
            </p>
          </div>
        </div>

        <div className="fsElement fsLayout fsThreeColumnLayout fsStyleAutoclear" id="fsEl_20824" data-use-new="true">
          <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" id="fsEl_20826" data-use-new="true">
              <header>
                <h2 className="fsElementTitle">Required Documents</h2>
              </header>
              <div className="fsElementContent">
                <ul>
                  {ADMISSION_REQUIREMENTS.documents.map((doc) => (
                    <li key={doc} style={{ color: '#ffffff', marginBottom: '8px' }}>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" id="fsEl_20828" data-use-new="true">
              <header>
                <h2 className="fsElementTitle">Academic Criteria</h2>
              </header>
              <div className="fsElementContent">
                <ul>
                  {ADMISSION_REQUIREMENTS.academicCriteria.map((crit) => (
                    <li key={crit} style={{ color: '#ffffff', marginBottom: '8px' }}>
                      {crit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="fsDiv fsStyleColumn fsStyleColumn-3 fsStyleColumn-last fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" id="fsEl_20830" data-use-new="true">
              <header>
                <h2 className="fsElementTitle">3 Specialized Campuses</h2>
              </header>
              <div className="fsElementContent">
                {CAMPUSES.map((c) => (
                  <p key={c.id} style={{ color: '#ffffff', marginBottom: '12px' }}>
                    <strong style={{ color: '#ffc111' }}>{c.name}:</strong> {c.programs} ({c.studentsCount})
                  </p>
                ))}
                <p>
                  <a
                    className="button-white-yellow-outline"
                    href="/campuses"
                    onClick={(e) => handleNav(e, '/campuses')}
                  >
                    Explore Campuses
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Briarcrest Horizontal Timeline for Academic Programs (Grades 1-12) */}
        <div
          className="fsElement fsPostElement fsSlideshow timeline fsThumbnailOriginal fsThumbnailXLarge fsItemCount_0 fsSlideshowHorizontal"
          id="fsEl_16325"
          data-use-new="true"
          shown=""
          style={{ marginTop: '60px', marginBottom: '60px' }}
        >
          <div className="fsElementContent">
            <div className="slideshow-index">
              <div className="slideshow-index-inner">
                <ul className="slick-initialized slick-slider">
                  <div className="slick-list draggable" style={{ padding: 0 }}>
                    <div className="slick-track" style={{ opacity: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                      {PROGRAMS.map((prog, idx) => (
                        <li
                          key={prog.id}
                          className={`slick-slide ${idx === activeProgramIdx ? 'slick-current slick-active slick-center' : 'slick-active'}`}
                          style={{ width: '230px' }}
                        >
                          <button type="button" onClick={() => setActiveProgramIdx(idx)}>
                            <span>{prog.title}</span>
                          </button>
                          <span />
                        </li>
                      ))}
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="fsElementSlideshow slick-initialized slick-slider" aria-label="Academic Programs" initialized="">
              <div className="slick-list draggable" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="abps-timeline-track">
                  {[prevProgramIdx, activeProgramIdx, nextProgramIdx].map((pIdx, pos) => {
                    const prog = PROGRAMS[pIdx];
                    const isCenter = pos === 1;
                    const imgSrc = pIdx % 2 === 0 ? '/assets/banners/banner_1.jpg' : '/assets/banners/banner_2.jpg';
                    return (
                      <article
                        key={`${prog.id}-${pos}`}
                        className={`fsStyleAutoclear fsBoard-31 slick-slide ${isCenter ? 'slick-current slick-active' : ''}`}
                        style={{ width: isCenter ? '980px' : '600px' }}
                      >
                        <div className="fsThumbnail fsPostLink">
                          <img src={imgSrc} alt={prog.title} loading="lazy" />
                        </div>
                        <div className="article-text">
                          <div className="fsTitle">
                            {prog.title} ({prog.grade})
                          </div>
                          <div className="fsSummary">
                            <p>{prog.description}</p>
                            <p style={{ marginTop: '12px', fontWeight: 600, color: '#006225' }}>
                              Key Focus: {prog.features.map((f) => f.label).join(' • ')}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Briarcrest Gradient Panel with Online Admission Application Form */}
        <div
          id="online-admission-form"
          className="fsElement fsContainer panel-gradient panel-outline panel-thick-padding panel-full-boundary"
          data-use-new="true"
          updated=""
        >
          <div className="panel-background">
            <div>
              <div />
            </div>
          </div>
          <div className="fsElementContent">
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '42px',
                fontWeight: 700,
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '12px',
              }}
            >
              Online Admission Application Form
            </h2>
            <p style={{ textAlign: 'center', color: '#faf7f3', maxWidth: '680px', margin: '0 auto 36px' }}>
              Complete the form below to apply for admission at {SCHOOL_IDENTITY.name}. Our admissions committee will review your application and contact you within 5–7 business days.
            </p>

            {submittedApplication ? (
              <div
                style={{
                  background: '#ffffff',
                  color: '#00350d',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px solid #ffc111',
                  maxWidth: '720px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '34px', color: '#006225', marginBottom: '12px' }}>
                  Application Submitted Successfully!
                </h3>
                <p style={{ fontSize: '18px', marginBottom: '16px' }}>
                  Thank you! We have received the admission application for <strong>{submittedApplication.studentName}</strong> ({submittedApplication.gradeApplying} — {submittedApplication.campusPreference}).
                </p>
                <p style={{ fontSize: '16px', background: '#faf7f3', padding: '12px 20px', borderRadius: '8px', display: 'inline-block', border: '1px solid #cb9c0c' }}>
                  Application Reference ID: <strong>{submittedApplication.referenceId}</strong>
                </p>
                <div style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className="button-yellow-solid"
                    onClick={() => setSubmittedApplication(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  background: '#faf7f3',
                  color: '#252524',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '1px solid #cb9c0c',
                  maxWidth: '920px',
                  margin: '0 auto',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                  <div>
                    <label htmlFor="studentName" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Student Full Name *
                    </label>
                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student's full name"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    />
                    {errors.studentName && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.studentName}</p>}
                  </div>

                  <div>
                    <label htmlFor="dob" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Date of Birth *
                    </label>
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    />
                    {errors.dob && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.dob}</p>}
                  </div>

                  <div>
                    <label htmlFor="gender" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.gender}</p>}
                  </div>

                  <div>
                    <label htmlFor="gradeApplying" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Grade Applying For *
                    </label>
                    <select
                      id="gradeApplying"
                      name="gradeApplying"
                      value={formData.gradeApplying}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    >
                      <option value="">Select Grade</option>
                      <option value="Primary (Grades 1-5)">Primary (Grades 1-5)</option>
                      <option value="Middle (Grades 6-8)">Middle (Grades 6-8)</option>
                      <option value="High School (Grades 9-10)">High School (Grades 9-10)</option>
                      <option value="Intermediate (Grades 11-12)">Intermediate (Grades 11-12)</option>
                    </select>
                    {errors.gradeApplying && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.gradeApplying}</p>}
                  </div>

                  <div>
                    <label htmlFor="parentName" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Parent or Guardian full name"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    />
                    {errors.parentName && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.parentName}</p>}
                  </div>

                  <div>
                    <label htmlFor="relationship" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Relationship *
                    </label>
                    <select
                      id="relationship"
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    >
                      <option value="">Select Relationship</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                    {errors.relationship && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.relationship}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    />
                    {errors.email && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0300 1234567"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    />
                    {errors.phone && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="campusPreference" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Preferred Campus *
                    </label>
                    <select
                      id="campusPreference"
                      name="campusPreference"
                      value={formData.campusPreference}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    >
                      <option value="">Select Campus</option>
                      <option value="Boys Campus">Boys Campus</option>
                      <option value="Girls Campus">Girls Campus</option>
                      <option value="Choti Dunya Campus">Choti Dunya Campus</option>
                    </select>
                    {errors.campusPreference && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.campusPreference}</p>}
                  </div>

                  <div>
                    <label htmlFor="previousSchool" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                      Previous School (Optional)
                    </label>
                    <input
                      id="previousSchool"
                      name="previousSchool"
                      type="text"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="Name of previous school"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <label htmlFor="address" style={{ display: 'block', fontWeight: 700, color: '#004415', marginBottom: '6px' }}>
                    Residential Address *
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address, Mohallah / Colony, Pakpattan"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #a09e9b', background: '#fff' }}
                  />
                  {errors.address && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.address}</p>}
                </div>

                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    id="termsAccepted"
                    name="termsAccepted"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="termsAccepted" style={{ fontWeight: 600, color: '#004415' }}>
                    I confirm that the information provided is accurate and agree to the admissions policy of {SCHOOL_IDENTITY.name}. *
                  </label>
                </div>
                {errors.termsAccepted && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '4px' }}>{errors.termsAccepted}</p>}

                <div style={{ marginTop: '28px', textAlign: 'center' }}>
                  <button type="submit" className="button-yellow-solid" style={{ cursor: 'pointer', minWidth: '260px' }}>
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

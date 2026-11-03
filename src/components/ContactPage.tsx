import React, { useState } from 'react';
import { CAMPUSES, PagePath, SCHOOL_IDENTITY } from '../utils/schoolData';
import { ContactFormData, validateContactForm } from '../utils/validation';

interface ContactPageProps {
  onNavigate: (path: PagePath) => void;
}

const CONTACT_FAQS_LEFT = [
  {
    id: 'faq-hours',
    question: 'What are the school office and visiting hours at AL BADAR PUBLIC HIGH SCHOOL?',
    answer: `Our main administration and admissions offices at ${SCHOOL_IDENTITY.address} are open ${SCHOOL_IDENTITY.officeHours.join(
      ' | '
    )}. Parents may schedule a guided campus tour by calling ${SCHOOL_IDENTITY.phone}.`,
  },
  {
    id: 'faq-campuses',
    question: 'How can I contact the Boys Campus, Girls Campus, or Choti Dunya Campus directly?',
    answer: `All three campuses—Boys Campus, Girls Campus, and Choti Dunya Campus—are reachable through our central helpline at ${SCHOOL_IDENTITY.phone} or via email at ${SCHOOL_IDENTITY.emails.general} and ${SCHOOL_IDENTITY.emails.admissions}.`,
  },
];

const CONTACT_FAQS_RIGHT = [
  {
    id: 'faq-portal',
    question: 'Where can parents and students access the ABPS Online Portal and Student App?',
    answer: `Registered students and parents can access academic records, attendance, and announcements through the Web Portal (${SCHOOL_IDENTITY.portalUrl}) or download the official Al-Badar Student App on Google Play. For technical support, email ${SCHOOL_IDENTITY.emails.support}.`,
  },
  {
    id: 'faq-admissions',
    question: 'How do I inquire about admissions and entrance test dates?',
    answer: `You can apply online on our Admissions page, email ${SCHOOL_IDENTITY.emails.admissions}, or visit our Admissions Office near Alhamra Chowk, 37/SP Road, Pakpattan.`,
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactSubject: '',
    contactMessage: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>(CONTACT_FAQS_LEFT[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    setErrors(result.errors);
    if (result.valid) {
      setSubmitted(true);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: PagePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="fsPageLayout fsLayout fsOneColumnLayout fsStyleAutoclear" id="fsEl_19655" data-use-new="true">
      <div className="fsDiv fsStyleAutoclear" id="fsEl_19656">
        {/* 1. Briarcrest Outlined Lead-In Panel with Top Circular Emblem */}
        <div
          className="fsElement fsContainer panel-white panel-outline logo-top panel-full-padding panel-full-width panel-full-boundary"
          id="fsEl_19660"
          data-use-new="true"
          {...({ updated: '', shown: '' } as any)}
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
                <p style={{ textAlign: 'center' }}>
                  <span className="lead-in">
                    Whether you have questions about admissions, academic programs across our Boys, Girls, and Choti Dunya
                    Campuses, or scheduling a campus tour in Pakpattan, our team at {SCHOOL_IDENTITY.name} is ready to
                    assist your family.
                  </span>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <span className="lead-in">
                    Visit us at <strong>{SCHOOL_IDENTITY.address}</strong>, call{' '}
                    <a href={`tel:${SCHOOL_IDENTITY.phone.replace(/\s+/g, '')}`}>{SCHOOL_IDENTITY.phone}</a>, or send us a
                    direct message below.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Three-Column Briarcrest Card-Green-1 Contact Cards */}
        <div className="fsElement fsLayout fsThreeColumnLayout fsStyleAutoclear" id="fsEl_26030" data-use-new="true" style={{ marginBottom: '64px' }}>
          <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" data-use-new="true" {...({ updated: '', shown: '' } as any)}>
              <header>
                <h2 className="fsElementTitle">Campus Location</h2>
              </header>
              <div className="fsElementContent">
                <p>
                  <strong style={{ color: '#ffc111' }}>{SCHOOL_IDENTITY.name}</strong>
                </p>
                <p>{SCHOOL_IDENTITY.streetAddress}</p>
                <p>{SCHOOL_IDENTITY.cityCountry}</p>
                <p style={{ marginTop: '1rem' }}>
                  Serving students across our <strong>Boys Campus</strong>, <strong>Girls Campus</strong>, and{' '}
                  <strong>Choti Dunya Campus</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" data-use-new="true" {...({ updated: '', shown: '' } as any)}>
              <header>
                <h2 className="fsElementTitle">Phone &amp; Office Hours</h2>
              </header>
              <div className="fsElementContent">
                <p>
                  <strong style={{ color: '#ffc111' }}>Main Helpline:</strong>{' '}
                  <a href={`tel:${SCHOOL_IDENTITY.phone.replace(/\s+/g, '')}`} style={{ color: '#ffffff' }}>
                    {SCHOOL_IDENTITY.phone}
                  </a>
                </p>
                <ul>
                  {SCHOOL_IDENTITY.officeHours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="fsDiv fsStyleColumn fsStyleColumn-3 fsStyleColumn-last fsStyleAutoclear">
            <div className="fsElement fsContent card-green-1 equal-height" data-use-new="true" {...({ updated: '', shown: '' } as any)}>
              <header>
                <h2 className="fsElementTitle">Email Directory</h2>
              </header>
              <div className="fsElementContent">
                <ul>
                  <li>
                    <strong style={{ color: '#ffc111' }}>General Inquiries:</strong>{' '}
                    <a href={`mailto:${SCHOOL_IDENTITY.emails.general}`} style={{ color: '#ffffff' }}>
                      {SCHOOL_IDENTITY.emails.general}
                    </a>
                  </li>
                  <li>
                    <strong style={{ color: '#ffc111' }}>Admissions Office:</strong>{' '}
                    <a href={`mailto:${SCHOOL_IDENTITY.emails.admissions}`} style={{ color: '#ffffff' }}>
                      {SCHOOL_IDENTITY.emails.admissions}
                    </a>
                  </li>
                  <li>
                    <strong style={{ color: '#ffc111' }}>Portal &amp; Student Support:</strong>{' '}
                    <a href={`mailto:${SCHOOL_IDENTITY.emails.support}`} style={{ color: '#ffffff' }}>
                      {SCHOOL_IDENTITY.emails.support}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Briarcrest Dark-Green Gradient Panel with Contact Form & Google Map */}
        <div
          className="fsElement fsContainer panel-gradient panel-outline panel-thick-padding panel-full-boundary"
          id="fsEl_26060"
          data-use-new="true"
          {...({ updated: '', shown: '' } as any)}
        >
          <div className="panel-background">
            <div>
              <div />
            </div>
          </div>
          <div className="fsElementContent">
            <div className="fsElement fsContent" data-use-new="true">
              <header>
                <h2 className="fsElementTitle" style={{ color: '#ffffff', textAlign: 'center', fontSize: '42px', marginBottom: '28px' }}>
                  Send Us a Message &amp; Directions
                </h2>
              </header>
              <div className="fsElementContent">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Left: Validated Contact Form */}
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      padding: '2rem',
                      color: '#1b2e21',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
                    }}
                  >
                    <h3 style={{ color: '#006225', marginTop: 0, marginBottom: '0.5rem' }}>Direct Inquiry Form</h3>
                    <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', color: '#425448' }}>
                      Complete the form below and our administration office will respond promptly.
                    </p>

                    {submitted ? (
                      <div
                        role="status"
                        style={{
                          background: '#e8f5e9',
                          border: '2px solid #006225',
                          borderRadius: '10px',
                          padding: '1.5rem',
                          color: '#00491c',
                        }}
                      >
                        <h4 style={{ marginTop: 0, color: '#006225' }}>Message Received!</h4>
                        <p style={{ marginBottom: '1rem' }}>
                          Thank you, <strong>{formData.contactName}</strong>. Your inquiry regarding{' '}
                          <strong>{formData.contactSubject}</strong> has been sent to {SCHOOL_IDENTITY.name} (
                          {SCHOOL_IDENTITY.emails.general}).
                        </p>
                        <button
                          type="button"
                          className="button-small button-green-solid"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              contactName: '',
                              contactEmail: '',
                              contactPhone: '',
                              contactSubject: '',
                              contactMessage: '',
                            });
                          }}
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate>
                        <div style={{ marginBottom: '1rem' }}>
                          <label
                            htmlFor="contactName"
                            style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem', color: '#1b2e21' }}
                          >
                            Full Name *
                          </label>
                          <input
                            id="contactName"
                            name="contactName"
                            type="text"
                            value={formData.contactName}
                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                            placeholder="Enter your full name"
                            style={{
                              width: '100%',
                              padding: '0.7rem 0.9rem',
                              borderRadius: '6px',
                              border: errors.contactName ? '2px solid #c62828' : '1px solid #cbd5ce',
                              color: '#1b2e21',
                            }}
                          />
                          {errors.contactName && (
                            <p role="alert" style={{ color: '#c62828', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                              {errors.contactName}
                            </p>
                          )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                          <div>
                            <label
                              htmlFor="contactEmail"
                              style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem', color: '#1b2e21' }}
                            >
                              Email Address *
                            </label>
                            <input
                              id="contactEmail"
                              name="contactEmail"
                              type="email"
                              value={formData.contactEmail}
                              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                              placeholder="you@example.com"
                              style={{
                                width: '100%',
                                padding: '0.7rem 0.9rem',
                                borderRadius: '6px',
                                border: errors.contactEmail ? '2px solid #c62828' : '1px solid #cbd5ce',
                                color: '#1b2e21',
                              }}
                            />
                            {errors.contactEmail && (
                              <p role="alert" style={{ color: '#c62828', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                                {errors.contactEmail}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="contactPhone"
                              style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem', color: '#1b2e21' }}
                            >
                              Phone Number
                            </label>
                            <input
                              id="contactPhone"
                              name="contactPhone"
                              type="tel"
                              value={formData.contactPhone}
                              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                              placeholder="0301 7243663"
                              style={{
                                width: '100%',
                                padding: '0.7rem 0.9rem',
                                borderRadius: '6px',
                                border: '1px solid #cbd5ce',
                                color: '#1b2e21',
                              }}
                            />
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                          <label
                            htmlFor="contactSubject"
                            style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem', color: '#1b2e21' }}
                          >
                            Inquiry Subject *
                          </label>
                          <select
                            id="contactSubject"
                            name="contactSubject"
                            value={formData.contactSubject}
                            onChange={(e) => setFormData({ ...formData, contactSubject: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '0.7rem 0.9rem',
                              borderRadius: '6px',
                              border: errors.contactSubject ? '2px solid #c62828' : '1px solid #cbd5ce',
                              background: '#ffffff',
                              color: '#1b2e21',
                            }}
                          >
                            <option value="">Select a subject...</option>
                            <option value="Admissions Inquiry">Admissions Inquiry</option>
                            <option value="Schedule a Campus Tour">Schedule a Campus Tour</option>
                            <option value="Academic Programs">
                              Academic Programs ({CAMPUSES.map((c) => c.name).join(', ')})
                            </option>
                            <option value="Student Portal / App Support">Student Portal / App Support</option>
                            <option value="General Question">General Question</option>
                          </select>
                          {errors.contactSubject && (
                            <p role="alert" style={{ color: '#c62828', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                              {errors.contactSubject}
                            </p>
                          )}
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                          <label
                            htmlFor="contactMessage"
                            style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem', color: '#1b2e21' }}
                          >
                            Message *
                          </label>
                          <textarea
                            id="contactMessage"
                            name="contactMessage"
                            rows={4}
                            value={formData.contactMessage}
                            onChange={(e) => setFormData({ ...formData, contactMessage: e.target.value })}
                            placeholder="How can we help your family?"
                            style={{
                              width: '100%',
                              padding: '0.7rem 0.9rem',
                              borderRadius: '6px',
                              border: errors.contactMessage ? '2px solid #c62828' : '1px solid #cbd5ce',
                              color: '#1b2e21',
                            }}
                          />
                          {errors.contactMessage && (
                            <p role="alert" style={{ color: '#c62828', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                              {errors.contactMessage}
                            </p>
                          )}
                        </div>

                        <button type="submit" className="button-small button-green-solid" style={{ width: '100%' }}>
                          Submit Inquiry
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Right: Interactive Map & Digital Portals */}
                  <div>
                    <div
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '3px solid #ffc111',
                        boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                        background: '#003a16',
                      }}
                    >
                      <iframe
                        title={`${SCHOOL_IDENTITY.name} Location Map`}
                        src={SCHOOL_IDENTITY.mapEmbedUrl}
                        width="100%"
                        height="360"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    <div
                      style={{
                        marginTop: '1.5rem',
                        background: 'rgba(0, 46, 17, 0.7)',
                        border: '1px solid #ffc111',
                        borderRadius: '10px',
                        padding: '1.5rem',
                        color: '#ffffff',
                      }}
                    >
                      <h4 style={{ color: '#ffc111', marginTop: 0, marginBottom: '0.5rem' }}>
                        ABPS Digital Portals &amp; Social Channels
                      </h4>
                      <p style={{ fontSize: '0.94rem', marginBottom: '1rem', color: '#ffffff' }}>
                        Access parent/student portals or connect with {SCHOOL_IDENTITY.name} on social media:
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <a
                          href={SCHOOL_IDENTITY.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-small button-yellow-solid"
                        >
                          Web Portal
                        </a>
                        <a
                          href={SCHOOL_IDENTITY.studentAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-small button-white-yellow-outline"
                        >
                          Student Android App
                        </a>
                        <a
                          href="/admissions"
                          className="button-small button-white-yellow-outline"
                          onClick={(e) => handleLinkClick(e, '/admissions')}
                        >
                          Online Admissions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Briarcrest Two-Column Accordion Panel for Frequently Asked Questions */}
          <div
            className="fsElement fsContainer panel-gradient panel-outline panel-thick-padding panel-full-boundary"
            id="fsEl_26070"
            data-use-new="true"
            {...({ updated: '', shown: '' } as any)}
            style={{ marginTop: '60px' }}
          >
            <div className="panel-background">
              <div>
                <div />
              </div>
            </div>
            <div className="fsElementContent">
              <section className="fsElement fsLayout fsTwoColumnLayout fsStyleAutoclear" data-use-new="true">
                <header>
                  <h2 className="fsElementTitle">Frequently Asked Questions</h2>
                </header>
                <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear">
                  <div className="fsElement fsPanelGroup fsAccordion fsPanelIconAfter" data-use-new="true">
                    <div className="fsElementContent">
                      {CONTACT_FAQS_LEFT.map((faq) => {
                        const isOpen = openFaqId === faq.id;
                        return (
                          <section
                            key={faq.id}
                            className={`fsElement fsPanel fsStyleAutoclear ${isOpen ? 'fsStateOpen' : ''}`}
                            data-use-new="true"
                            role="tabpanel"
                          >
                            <header>
                              <h2 className="fsElementTitle">
                                <a
                                  role="button"
                                  aria-expanded={isOpen}
                                  href={`#${faq.id}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setOpenFaqId(isOpen ? '' : faq.id);
                                  }}
                                >
                                  {faq.question}
                                </a>
                              </h2>
                            </header>
                            {isOpen && (
                              <div className="fsElementContent" aria-hidden={!isOpen}>
                                <div className="fsElement fsContent" data-use-new="true">
                                  <div className="fsElementContent">
                                    <p>{faq.answer}</p>
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

                <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear">
                  <div className="fsElement fsPanelGroup fsAccordion fsPanelIconAfter" data-use-new="true">
                    <div className="fsElementContent">
                      {CONTACT_FAQS_RIGHT.map((faq) => {
                        const isOpen = openFaqId === faq.id;
                        return (
                          <section
                            key={faq.id}
                            className={`fsElement fsPanel fsStyleAutoclear ${isOpen ? 'fsStateOpen' : ''}`}
                            data-use-new="true"
                            role="tabpanel"
                          >
                            <header>
                              <h2 className="fsElementTitle">
                                <a
                                  role="button"
                                  aria-expanded={isOpen}
                                  href={`#${faq.id}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setOpenFaqId(isOpen ? '' : faq.id);
                                  }}
                                >
                                  {faq.question}
                                </a>
                              </h2>
                            </header>
                            {isOpen && (
                              <div className="fsElementContent" aria-hidden={!isOpen}>
                                <div className="fsElement fsContent" data-use-new="true">
                                  <div className="fsElementContent">
                                    <p>{faq.answer}</p>
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
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

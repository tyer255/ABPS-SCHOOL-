import React, { useState } from 'react';
import {
  CAMPUSES,
  CAMPUS_FACILITIES,
  CampusItem,
  PagePath,
  PROGRAMS,
  SCHOOL_IDENTITY,
} from '../utils/schoolData';

interface CampusesPageProps {
  onNavigate: (path: PagePath) => void;
}

const FACILITY_ICONS: Record<string, string> = {
  Libraries: 'icon-graduate',
  'Science Labs': 'icon-microscope',
  'Computer Labs': 'icon-globe',
  'Sports Complex': 'icon-trophy',
  Cafeteria: 'icon-star',
  Security: 'icon-cross',
};

export const CampusesPage: React.FC<CampusesPageProps> = ({ onNavigate }) => {
  const [selectedCampus, setSelectedCampus] = useState<CampusItem | null>(null);
  const [selectedFacilityCategory, setSelectedFacilityCategory] = useState<'All' | 'Facilities' | 'Programs'>('All');

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
                    {SCHOOL_IDENTITY.name} operates three dedicated campuses in {SCHOOL_IDENTITY.cityCountry}—the{' '}
                    <strong>Boys Campus</strong>, <strong>Girls Campus</strong>, and <strong>Choti Dunya Campus</strong>—each
                    thoughtfully designed to support age-appropriate academic excellence, character formation, and student
                    safety.
                  </span>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <span className="lead-in">
                    Conveniently located at <strong>{SCHOOL_IDENTITY.address}</strong>, our campuses combine modern science
                    and computer laboratories, libraries, digital classrooms, and sports facilities with a caring faculty of
                    over 500 educators.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Two-Column Expandable Gold CTA Bar */}
        <div className="fsElement fsLayout fsTwoColumnLayout fsStyleAutoclear" data-use-new="true">
          <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear">
            <div className="fsElement fsContent" data-use-new="true">
              <div className="fsElementContent">
                <p style={{ textAlign: 'center' }}>
                  <a
                    className="button-expand button-yellow-solid"
                    href="/admissions"
                    onClick={(e) => handleLinkClick(e, '/admissions')}
                  >
                    Apply to Any ABPS Campus
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear">
            <div className="fsElement fsContent" data-use-new="true">
              <div className="fsElementContent">
                <p style={{ textAlign: 'center' }}>
                  <a
                    className="button-expand button-yellow-solid"
                    href="/contact"
                    onClick={(e) => handleLinkClick(e, '/contact')}
                  >
                    Schedule a Guided Campus Tour
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Three-Column Briarcrest Card-Green-1 Campus Cards */}
        <div className="fsElement fsContent featured-title-center" data-use-new="true" {...({ shown: '' } as any)} style={{ marginTop: '40px', marginBottom: '36px' }}>
          <header>
            <div className="fsElementHeaderContent">
              <p>Three Campuses • One Standard of Excellence</p>
            </div>
          </header>
          <div className="fsElementContent words splitting">
            <p style={{ textAlign: 'center', fontFamily: '"Bebas Neue", sans-serif', fontSize: '64px', color: '#004415', lineHeight: 1 }}>
              OUR <strong>PAKPATTAN</strong> CAMPUSES
            </p>
          </div>
        </div>

        <div className="fsElement fsLayout fsThreeColumnLayout fsStyleAutoclear" id="fsEl_26010" data-use-new="true" style={{ marginBottom: '64px' }}>
          {CAMPUSES.map((campus, idx) => (
            <div
              key={campus.id}
              className={`fsDiv fsStyleColumn fsStyleColumn-${idx + 1} ${idx === 2 ? 'fsStyleColumn-last' : ''} fsStyleAutoclear`}
            >
              <div className="fsElement fsContent card-green-1 equal-height" data-use-new="true" {...({ updated: '', shown: '' } as any)}>
                <header>
                  <div className="fsElementHeaderContent">
                    <figure className="fsImage">
                      <picture>
                        <img
                          alt={campus.homeImageAlt}
                          src={campus.homeImage}
                          style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
                        />
                      </picture>
                    </figure>
                  </div>
                  <h2 className="fsElementTitle">{campus.name}</h2>
                </header>
                <div className="fsElementContent">
                  <p>
                    <strong style={{ color: '#ffc111' }}>
                      {campus.studentsCount} &bull; {campus.facultyCount}
                    </strong>
                  </p>
                  <p>{campus.fullDescription}</p>
                  <ul>
                    <li>
                      <strong>Academic Levels:</strong> {campus.programs}
                    </li>
                    <li>
                      <strong>Key Facilities:</strong> {campus.facilities}
                    </li>
                    <li>
                      <strong>Address:</strong> {campus.address}
                    </li>
                    <li>
                      <strong>Phone:</strong> {campus.phone}
                    </li>
                  </ul>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                    <button
                      type="button"
                      className="button-small button-yellow-solid"
                      onClick={() => setSelectedCampus(campus)}
                    >
                      Inspect Campus
                    </button>
                    <a
                      href="/admissions"
                      className="button-small button-white-yellow-outline"
                      onClick={(e) => handleLinkClick(e, '/admissions')}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Briarcrest "Filter By Interest" Sidebar + Dark-Green Infographic Grid for Facilities & Programs */}
        <div className="fsElement fsLayout fsTwoColumnWideRightLayout fsStyleAutoclear" id="fsEl_22546" data-use-new="true">
          <div className="fsDiv fsStyleOneThird fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_22547">
            <div className="fsElement fsContainer right-column-elements-container" data-use-new="true">
              <div className="fsElement fsContainer filter-elements-container" data-use-new="true">
                <div className="fsElementContent">
                  <section
                    className="fsElement fsPostToolsElement fsCategoryFilter bpa-post-filter-1 fsToolsElement"
                    id="fsEl_22548"
                    data-use-new="true"
                  >
                    <header>
                      <h2 className="fsElementTitle">Filter Campus Resources</h2>
                    </header>
                    <div className="fsElementContent">
                      <ul className="fsToolsList fsStyleSelectList">
                        {(
                          [
                            { key: 'All', label: 'All Facilities & Divisions' },
                            { key: 'Facilities', label: 'Campus Facilities (6)' },
                            { key: 'Programs', label: 'Academic Divisions (4)' },
                          ] as const
                        ).map((item) => (
                          <li
                            key={item.key}
                            className={selectedFacilityCategory === item.key ? 'fsStateSelected' : ''}
                          >
                            <a
                              href={`#filter-${item.key.toLowerCase()}`}
                              className="fsCategoryLink fsStyleDefaultButton"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedFacilityCategory(item.key);
                              }}
                            >
                              <span>{item.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="fsDiv fsStyleTwoThirds fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_22549">
            <div
              className="fsElement fsPostElement fsGrid bpa-post-filter-1 dark fsThumbnailOriginal fsThumbnailFull fsItemCount_15"
              id="fsEl_22550"
              data-use-new="true"
            >
              <div className="fsElementContent">
                <div className="fsListItems fsStyleFourColumns">
                  {(selectedFacilityCategory === 'All' || selectedFacilityCategory === 'Facilities') &&
                    CAMPUS_FACILITIES.map((facility) => (
                      <article
                        key={facility.title}
                        className={`fsStyleAutoclear fsBoard-22 fsCategory-9 ${
                          FACILITY_ICONS[facility.title] || 'icon-star'
                        } has-summary`}
                      >
                        <div className="fsTitle">
                          <span>{facility.title}</span>
                        </div>
                        <div className="fsSummary is-truncated" style={{ overflowWrap: 'break-word' }}>
                          <p>{facility.description}</p>
                        </div>
                        <a
                          className="fsPostLink fsReadMoreLink"
                          href="/contact"
                          onClick={(e) => handleLinkClick(e, '/contact')}
                        >
                          Schedule Tour <span className="fsStyleSROnly">of {facility.title}</span>
                        </a>
                      </article>
                    ))}

                  {(selectedFacilityCategory === 'All' || selectedFacilityCategory === 'Programs') &&
                    PROGRAMS.map((program) => (
                      <article
                        key={program.id}
                        className="fsStyleAutoclear fsBoard-22 fsCategory-10 icon-graduate has-summary"
                      >
                        <div className="fsTitle">
                          <span>
                            {program.title} ({program.grade})
                          </span>
                        </div>
                        <div className="fsSummary is-truncated" style={{ overflowWrap: 'break-word' }}>
                          <p>
                            {program.description} — {program.features.map((f) => f.label).join(' • ')}
                          </p>
                        </div>
                        <a
                          className="fsPostLink fsReadMoreLink"
                          href="/admissions"
                          onClick={(e) => handleLinkClick(e, '/admissions')}
                        >
                          Apply Now <span className="fsStyleSROnly">for {program.title}</span>
                        </a>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Briarcrest Dark-Green Gradient Outline Panel for Campus Tour CTA */}
        <div
          className="fsElement fsContainer panel-gradient panel-outline panel-thick-padding panel-full-boundary"
          id="fsEl_26040"
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
            <div className="fsElement fsContent" data-use-new="true" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
              <header>
                <h2 className="fsElementTitle" style={{ color: '#ffffff', fontSize: '42px', marginBottom: '16px' }}>
                  Schedule a Campus Visit in Pakpattan
                </h2>
              </header>
              <div className="fsElementContent">
                <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: 1.7 }}>
                  We welcome parents and prospective students to tour our Boys Campus, Girls Campus, and Choti Dunya Campus
                  at <strong>{SCHOOL_IDENTITY.address}</strong> during school hours ({SCHOOL_IDENTITY.officeHours[0]}).
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '28px' }}>
                  <a
                    href="/contact"
                    className="button-small button-yellow-solid"
                    onClick={(e) => handleLinkClick(e, '/contact')}
                  >
                    Schedule a Tour
                  </a>
                  <a
                    href="/admissions"
                    className="button-small button-white-yellow-outline"
                    onClick={(e) => handleLinkClick(e, '/admissions')}
                  >
                    Apply for Admission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briarcrest Side-Load Dialog for Campus Detail */}
      {selectedCampus && (
        <div
          className="abps-dialog-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCampus.name}
          onClick={() => setSelectedCampus(null)}
        >
          <div className="abps-dialog-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="bpa-side-load-close"
              aria-label="Close dialog"
              onClick={() => setSelectedCampus(null)}
            >
              ×
            </button>
            <div className="bpa-side-load-body">
              <img
                src={selectedCampus.homeImage}
                alt={selectedCampus.homeImageAlt}
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }}
              />
              <span className="bpa-side-load-kicker">{SCHOOL_IDENTITY.name}</span>
              <h2>{selectedCampus.name}</h2>
              <p>{selectedCampus.fullDescription}</p>
              <ul style={{ margin: '1rem 0 1.5rem', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>
                  <strong>Students Enrolled:</strong> {selectedCampus.studentsCount}
                </li>
                <li>
                  <strong>Dedicated Faculty:</strong> {selectedCampus.facultyCount}
                </li>
                <li>
                  <strong>Programs Offered:</strong> {selectedCampus.programs}
                </li>
                <li>
                  <strong>Facilities:</strong> {selectedCampus.facilities}
                </li>
                <li>
                  <strong>Location:</strong> {selectedCampus.address}
                </li>
                <li>
                  <strong>Contact Number:</strong> {selectedCampus.phone}
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="/admissions"
                  className="button-small button-yellow-solid"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCampus(null);
                    onNavigate('/admissions');
                  }}
                >
                  Apply to {selectedCampus.name}
                </a>
                <a
                  href="/contact"
                  className="button-small button-white-yellow-outline"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCampus(null);
                    onNavigate('/contact');
                  }}
                >
                  Contact Campus Office
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

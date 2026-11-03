import React, { useState } from 'react';
import {
  ABOUT_STORY,
  CAMPUSES,
  CAMPUS_FACILITIES,
  CORE_VALUES,
  LEADERSHIP,
  MISSION_VISION,
  PagePath,
  PROGRAMS,
  SCHOOL_IDENTITY,
} from '../utils/schoolData';

interface AboutPageProps {
  onNavigate: (path: PagePath) => void;
}

interface GlanceCard {
  id: string;
  category: 'Academics' | 'Leadership' | 'Campuses' | 'Values';
  categoryId: string;
  iconClass: string;
  title: string;
  shortSummary: string;
  fullDetails: string[];
}

const GLANCE_CARDS: GlanceCard[] = [
  {
    id: 'students-10k',
    category: 'Academics',
    categoryId: '10',
    iconClass: 'icon-graduate',
    title: '10,000+ Students Empowered Across Pakpattan',
    shortSummary: 'Over 10,000 students educated with academic rigor and moral integrity...',
    fullDetails: [
      'AL BADAR PUBLIC HIGH SCHOOL has proudly educated and mentored more than 10,000+ students across Pakpattan over the past 25 years.',
      'Our graduates excel in board examinations, higher education, medical and engineering universities, and civic leadership.',
    ],
  },
  {
    id: 'faculty-500',
    category: 'Leadership',
    categoryId: '8',
    iconClass: 'icon-teacher',
    title: '500+ Dedicated Faculty & Subject Specialists',
    shortSummary: 'Experienced teachers and subject specialists committed to student growth...',
    fullDetails: [
      'With 500+ qualified teachers and academic mentors across our 3 campuses, every student receives personal guidance and structured academic support.',
      'Regular faculty development workshops ensure modern pedagogical practices in every classroom.',
    ],
  },
  {
    id: 'years-25',
    category: 'Leadership',
    categoryId: '8',
    iconClass: 'icon-star',
    title: '25 Years of Educational Excellence Since 1999',
    shortSummary: 'A quarter-century legacy of transforming lives through quality education...',
    fullDetails: ABOUT_STORY.paragraphs,
  },
  {
    id: 'campuses-3',
    category: 'Campuses',
    categoryId: '9',
    iconClass: 'icon-school',
    title: '3 Purpose-Built Campuses in Pakpattan',
    shortSummary: 'Boys Campus, Girls Campus, and Choti Dunya Campus at 37/SP Road...',
    fullDetails: CAMPUSES.map((c) => `${c.name} (${c.studentsCount}, ${c.facultyCount}): ${c.fullDescription}`),
  },
  {
    id: 'programs-all',
    category: 'Academics',
    categoryId: '10',
    iconClass: 'icon-book',
    title: 'Pre-School to Intermediate (Grades 1–12)',
    shortSummary: 'Comprehensive academic progression from Primary to Pre-Medical & ICS...',
    fullDetails: PROGRAMS.map((p) => `${p.title} (${p.grade}): ${p.description}`),
  },
  {
    id: 'science-labs',
    category: 'Campuses',
    categoryId: '9',
    iconClass: 'icon-robot',
    title: 'Physics, Chemistry, Biology & Computer Labs',
    shortSummary: 'Hands-on scientific inquiry and high-speed digital learning...',
    fullDetails: CAMPUS_FACILITIES.slice(0, 3).map((f) => `${f.title}: ${f.description}`),
  },
  {
    id: 'sports-security',
    category: 'Campuses',
    categoryId: '9',
    iconClass: 'icon-security',
    title: 'Sports Complex, Libraries & 24/7 Security',
    shortSummary: 'Safe, disciplined, and well-resourced campuses for holistic growth...',
    fullDetails: CAMPUS_FACILITIES.slice(3).map((f) => `${f.title}: ${f.description}`),
  },
  {
    id: 'core-values',
    category: 'Values',
    categoryId: '7',
    iconClass: 'icon-ratio',
    title: '6 Core Pillars of Character & Integrity',
    shortSummary: 'Excellence, Integrity, Innovation, Respect, Collaboration, and Growth...',
    fullDetails: CORE_VALUES.map((v) => `${v.title}: ${v.description}`),
  },
  {
    id: 'mission-vision',
    category: 'Values',
    categoryId: '7',
    iconClass: 'icon-raise-hand',
    title: 'Mission-Driven Holistic Development',
    shortSummary: MISSION_VISION.mission.description.slice(0, 80) + '...',
    fullDetails: [
      `Our Mission: ${MISSION_VISION.mission.description}`,
      `Our Vision: ${MISSION_VISION.vision.description}`,
    ],
  },
];

const QUICK_FACTS_LEFT = [
  {
    id: 'qf-story',
    title: 'Our 25-Year Story & Heritage',
    paragraphs: ABOUT_STORY.paragraphs,
  },
  {
    id: 'qf-mission',
    title: 'Our Mission & Vision',
    paragraphs: [
      `Mission: ${MISSION_VISION.mission.description}`,
      `Vision: ${MISSION_VISION.vision.description}`,
    ],
  },
  {
    id: 'qf-director',
    title: "School Director's Message",
    paragraphs: LEADERSHIP.director.paragraphs,
  },
  {
    id: 'qf-deputy',
    title: "Deputy Director's Message",
    paragraphs: LEADERSHIP.deputyDirector.paragraphs,
  },
];

const QUICK_FACTS_RIGHT = [
  {
    id: 'qf-boys',
    title: 'Boys Campus (2,000+ Students)',
    paragraphs: [
      CAMPUSES[0].fullDescription,
      `Programs: ${CAMPUSES[0].programs} | Faculty: ${CAMPUSES[0].facultyCount} | Facilities: ${CAMPUSES[0].facilities}.`,
    ],
  },
  {
    id: 'qf-girls',
    title: 'Girls Campus (1,800+ Students)',
    paragraphs: [
      CAMPUSES[1].fullDescription,
      `Programs: ${CAMPUSES[1].programs} | Faculty: ${CAMPUSES[1].facultyCount} | Facilities: ${CAMPUSES[1].facilities}.`,
    ],
  },
  {
    id: 'qf-choti',
    title: 'Choti Dunya Campus (1,500+ Students)',
    paragraphs: [
      CAMPUSES[2].fullDescription,
      `Programs: ${CAMPUSES[2].programs} | Faculty: ${CAMPUSES[2].facultyCount} | Facilities: ${CAMPUSES[2].facilities}.`,
    ],
  },
  {
    id: 'qf-values',
    title: 'Core Values & Student Code',
    paragraphs: CORE_VALUES.map((v) => `${v.title}: ${v.description}`),
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Academics' | 'Leadership' | 'Campuses' | 'Values'>('All');
  const [openAccordionId, setOpenAccordionId] = useState<string>('qf-story');
  const [activeCardModal, setActiveCardModal] = useState<GlanceCard | null>(null);

  const filteredCards =
    selectedCategory === 'All'
      ? GLANCE_CARDS
      : GLANCE_CARDS.filter((c) => c.category === selectedCategory);

  const handleNav = (e: React.MouseEvent, path: PagePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="fsPageLayout fsLayout fsOneColumnLayout fsStyleAutoclear" id="fsEl_11727" data-use-new="true">
      <div className="fsDiv fsStyleAutoclear" id="fsEl_11728">
        {/* 1. Briarcrest Outlined Lead-In Panel with Top Circular Emblem */}
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
            <div className="fsElement fsContent" id="fsEl_16824" data-use-new="true">
              <div className="fsElementContent">
                <div style={{ textAlign: 'center' }}>&nbsp;</div>
                <h6 style={{ textAlign: 'center' }}>
                  <span className="lead-in">
                    {SCHOOL_IDENTITY.name} is a premier educational institution in Pakpattan serving more than 10,000+ students across 3 specialized campuses from Pre-School to Intermediate.
                  </span>
                </h6>
                <h6 style={{ textAlign: 'center', padding: '0 0 20px 0' }}>
                  <span className="lead-in">
                    {ABOUT_STORY.paragraphs[0]}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Briarcrest Alternate Heading + Two Gold Expand Buttons */}
        <div className="fsElement fsContent" id="fsEl_16750" data-use-new="true">
          <div className="fsElementContent">
            <h3 style={{ textAlign: 'center', marginBottom: '0px' }}>
              <span className="alternate-heading">Interested in Joining {SCHOOL_IDENTITY.name}?</span>
            </h3>
          </div>
        </div>

        <div className="fsElement fsLayout fsTwoColumnLayout fsStyleAutoclear" id="fsEl_17492" data-use-new="true">
          <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_17493">
            <div className="fsElement fsContent" id="fsEl_17495" data-use-new="true">
              <div className="fsElementContent">
                <p style={{ textAlign: 'center' }}>
                  <a
                    className="button-expand button-yellow-solid"
                    href="/admissions"
                    onClick={(e) => handleNav(e, '/admissions')}
                  >
                    Apply for Admission
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_17494">
            <div className="fsElement fsContent" id="fsEl_17500" data-use-new="true">
              <div className="fsElementContent">
                <p style={{ textAlign: 'center' }}>
                  <a
                    className="button-expand button-yellow-solid"
                    href="/contact"
                    onClick={(e) => handleNav(e, '/contact')}
                  >
                    Schedule A Campus Visit
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Briarcrest "Filter By Interest" Sidebar + Dark-Green Infographic Grid */}
        <div className="fsElement fsLayout fsTwoColumnWideRightLayout fsStyleAutoclear" id="fsEl_16752" data-use-new="true">
          <div className="fsDiv fsStyleOneThird fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_16753">
            <div className="fsElement fsContainer right-column-elements-container" id="fsEl_16754" data-use-new="true">
              <div className="fsElement fsContainer filter-elements-container" id="fsEl_16755" data-use-new="true">
                <div className="fsElementContent">
                  <section
                    className="fsElement fsPostToolsElement fsCategoryFilter bpa-post-filter-1 fsToolsElement"
                    id="fsEl_16756"
                    data-use-new="true"
                  >
                    <header>
                      <h2 className="fsElementTitle" id="fsElementTitle_16756">
                        Filter By Interest
                      </h2>
                    </header>
                    <div className="fsElementContent">
                      <ul className="fsToolsList fsStyleSelectList">
                        {(['All', 'Academics', 'Leadership', 'Campuses', 'Values'] as const).map((cat) => (
                          <li
                            key={cat}
                            className={selectedCategory === cat ? 'fsStateSelected' : ''}
                          >
                            <a
                              href={`#filter-${cat.toLowerCase()}`}
                              className="fsCategoryLink fsStyleDefaultButton"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedCategory(cat);
                              }}
                            >
                              <span>{cat}</span>
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

          <div className="fsDiv fsStyleTwoThirds fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_16757">
            <div
              className="fsElement fsPostElement fsGrid bpa-post-filter-1 dark fsThumbnailOriginal fsThumbnailFull fsItemCount_15"
              id="fsEl_16758"
              data-use-new="true"
            >
              <div className="fsElementContent">
                <div className="fsListItems fsStyleFourColumns">
                  {filteredCards.map((card) => (
                    <article
                      key={card.id}
                      className={`fsStyleAutoclear fsBoard-22 fsCategory-${card.categoryId} ${card.iconClass} has-summary`}
                      onClick={() => setActiveCardModal(card)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="fsTitle">
                        <span>{card.title}</span>
                      </div>
                      <div className="fsSummary is-truncated" style={{ overflowWrap: 'break-word' }}>
                        <p>{card.shortSummary}</p>
                      </div>
                      <a
                        className="fsPostLink fsReadMoreLink"
                        href={`#card-${card.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveCardModal(card);
                        }}
                      >
                        Read More <span className="fsStyleSROnly">about {card.title}</span>
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. School Leadership Messages (Briarcrest Card-Green-1 Layout) */}
        <div className="fsElement fsContent featured-title-center" data-use-new="true" shown="" style={{ marginTop: '60px', marginBottom: '40px' }}>
          <header>
            <div className="fsElementHeaderContent">
              <p>Guiding Our Vision</p>
            </div>
          </header>
          <div className="fsElementContent words splitting">
            <p style={{ textAlign: 'center', fontFamily: '"Bebas Neue", sans-serif', fontSize: '64px', color: '#004415', lineHeight: 1 }}>
              SCHOOL <strong>LEADERSHIP</strong> MESSAGES
            </p>
          </div>
        </div>

        <div className="fsElement fsLayout fsTwoColumnLayout fsStyleAutoclear" data-use-new="true" style={{ marginBottom: '70px' }}>
          {[LEADERSHIP.director, LEADERSHIP.deputyDirector].map((leader, idx) => (
            <div
              key={leader.role}
              className={`fsDiv fsStyleColumn fsStyleColumn-${idx + 1} ${idx === 1 ? 'fsStyleColumn-last' : ''} fsStyleAutoclear`}
            >
              <div className="fsElement fsContent card-green-1 equal-height" data-use-new="true">
                <header>
                  <h2 className="fsElementTitle">{leader.role}</h2>
                  <div className="fsElementHeaderContent">
                    <p style={{ color: '#ffc111', fontWeight: 700 }}>{leader.institution}</p>
                  </div>
                </header>
                <div className="fsElementContent">
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                    <img
                      src={leader.image}
                      alt={leader.imageAlt}
                      style={{
                        width: '96px',
                        height: '96px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #ffc111',
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ margin: 0, fontStyle: 'italic', color: '#ffffff' }}>{leader.shortDesc}</p>
                  </div>
                  {leader.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} style={{ color: 'rgba(255,255,255,0.92)', fontSize: '16px', lineHeight: 1.65 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Briarcrest Dark-Green Gradient Panel with Two-Column Quick Facts Accordions */}
        <div
          className="fsElement fsContainer panel-gradient panel-outline panel-thick-padding panel-full-boundary"
          id="fsEl_17524"
          data-use-new="true"
          updated=""
        >
          <div className="panel-background">
            <div>
              <div />
            </div>
          </div>
          <div className="fsElementContent">
            <section className="fsElement fsLayout fsTwoColumnLayout fsStyleAutoclear" id="fsEl_16774" data-use-new="true">
              <header>
                <h2 className="fsElementTitle" id="fsElementTitle_16774">
                  Quick Facts & Institutional Pillars
                </h2>
              </header>

              {/* Left Column Accordion */}
              <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_16775">
                <div className="fsElement fsPanelGroup fsAccordion fsPanelIconAfter" id="fsEl_16776" data-use-new="true">
                  <div className="fsElementContent">
                    {QUICK_FACTS_LEFT.map((item) => {
                      const isOpen = openAccordionId === item.id;
                      return (
                        <section
                          key={item.id}
                          className={`fsElement fsPanel fsStyleAutoclear ${isOpen ? 'fsStateOpen' : ''}`}
                          data-use-new="true"
                          role="tabpanel"
                        >
                          <header>
                            <h2 className="fsElementTitle">
                              <a
                                role="button"
                                aria-expanded={isOpen}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenAccordionId(isOpen ? '' : item.id);
                                }}
                              >
                                {item.title}
                              </a>
                            </h2>
                          </header>
                          {isOpen && (
                            <div className="fsElementContent" aria-hidden={!isOpen}>
                              <div className="fsElement fsContent" data-use-new="true">
                                <div className="fsElementContent">
                                  {item.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                  ))}
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

              {/* Right Column Accordion */}
              <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_16793">
                <div className="fsElement fsPanelGroup fsAccordion fsPanelIconAfter" id="fsEl_16794" data-use-new="true">
                  <div className="fsElementContent">
                    {QUICK_FACTS_RIGHT.map((item) => {
                      const isOpen = openAccordionId === item.id;
                      return (
                        <section
                          key={item.id}
                          className={`fsElement fsPanel fsStyleAutoclear ${isOpen ? 'fsStateOpen' : ''}`}
                          data-use-new="true"
                          role="tabpanel"
                        >
                          <header>
                            <h2 className="fsElementTitle">
                              <a
                                role="button"
                                aria-expanded={isOpen}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenAccordionId(isOpen ? '' : item.id);
                                }}
                              >
                                {item.title}
                              </a>
                            </h2>
                          </header>
                          {isOpen && (
                            <div className="fsElementContent" aria-hidden={!isOpen}>
                              <div className="fsElement fsContent" data-use-new="true">
                                <div className="fsElementContent">
                                  {item.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                  ))}
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

      {/* Briarcrest Side-Load Dialog for Glance Card Details */}
      {activeCardModal && (
        <div
          className="abps-dialog-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeCardModal.title}
          onClick={() => setActiveCardModal(null)}
        >
          <div className="abps-dialog-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setActiveCardModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '44px',
                height: '44px',
                borderRadius: '6px',
                border: '1px solid #ffc111',
                background: 'rgba(0, 34, 13, 0.7)',
                color: '#ffc111',
                fontSize: '20px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
            <header style={{ paddingBottom: '16px', borderBottom: '1px solid #ffc111', marginBottom: '24px' }}>
              <div style={{ color: '#ffc111', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                {activeCardModal.category} • {SCHOOL_IDENTITY.name}
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '34px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                {activeCardModal.title}
              </h3>
            </header>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
              {activeCardModal.fullDetails.map((p, idx) => (
                <p key={idx} style={{ color: '#faf7f3', fontSize: '17px', lineHeight: 1.7, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
            <p>
              <a
                className="button-white-yellow-outline"
                href="/admissions"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCardModal(null);
                  onNavigate('/admissions');
                }}
              >
                Inquire About Admissions
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

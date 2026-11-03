import React, { useState } from 'react';
import {
  CAMPUSES,
  HOME_FEATURES,
  LATEST_NEWS,
  LEADERSHIP,
  PagePath,
  PROGRAMS,
  SCHOOL_IDENTITY,
  TESTIMONIALS,
  UPCOMING_EVENTS,
} from '../utils/schoolData';

interface HomePageProps {
  onNavigate: (path: PagePath) => void;
}

interface StoryProfile {
  id: string;
  tag: string;
  name: string;
  quote: string;
  image: string;
  fullRole: string;
  paragraphs: string[];
}

const STORY_PROFILES: StoryProfile[] = [
  {
    id: 'director',
    tag: 'Leadership',
    name: 'School Director',
    quote: 'For over 25 years, we have empowered students to achieve their full potential.',
    image: LEADERSHIP.director.image,
    fullRole: `${LEADERSHIP.director.role} — ${SCHOOL_IDENTITY.name}`,
    paragraphs: LEADERSHIP.director.paragraphs,
  },
  {
    id: 'deputy-director',
    tag: 'Faculty & Admin',
    name: 'Deputy Director',
    quote: 'Our goal is to prepare students not just for examinations, but for life itself.',
    image: LEADERSHIP.deputyDirector.image,
    fullRole: `${LEADERSHIP.deputyDirector.role} — ${SCHOOL_IDENTITY.name}`,
    paragraphs: LEADERSHIP.deputyDirector.paragraphs,
  },
  {
    id: 'parent',
    tag: 'Parent',
    name: 'ABPS Parent Family',
    quote: 'The teachers are dedicated, character-focused, and the facilities are outstanding.',
    image: '/assets/banners/banner_1.jpg',
    fullRole: TESTIMONIALS[0].authorRole,
    paragraphs: [
      TESTIMONIALS[0].quote,
      TESTIMONIALS[2].quote,
      'Families across Pakpattan trust AL BADAR PUBLIC HIGH SCHOOL for a safe, disciplined, and academically rigorous environment from Choti Dunya Pre-School through Intermediate.',
    ],
  },
  {
    id: 'alumni',
    tag: 'Alumni',
    name: 'ABPS Graduate',
    quote: 'The quality education and mentorship I received prepared me for university and beyond.',
    image: '/assets/banners/banner_2.jpg',
    fullRole: TESTIMONIALS[1].authorRole,
    paragraphs: [
      TESTIMONIALS[1].quote,
      'With over 10,000+ students and alumni shaped over 25 years of excellence, AL BADAR PUBLIC HIGH SCHOOL graduates excel in medicine, engineering, computer science, and public leadership.',
    ],
  },
];

const TIMELINE_SLIDES = [
  {
    id: 'boys-campus',
    tab: 'Boys Campus',
    title: 'Boys Campus',
    summary: CAMPUSES[0].fullDescription,
    image: CAMPUSES[0].homeImage,
    details: [
      CAMPUSES[0].fullDescription,
      `Enrollment & Faculty: ${CAMPUSES[0].studentsCount} supported by ${CAMPUSES[0].facultyCount}.`,
      `Programs: ${CAMPUSES[0].programs}. Facilities: ${CAMPUSES[0].facilities}.`,
      `Location: ${CAMPUSES[0].address} | Phone: ${CAMPUSES[0].phone}.`,
    ],
    targetPath: '/campuses' as PagePath,
  },
  {
    id: 'girls-campus',
    tab: 'Girls Campus',
    title: 'Girls Campus',
    summary: CAMPUSES[1].fullDescription,
    image: CAMPUSES[1].homeImage,
    details: [
      CAMPUSES[1].fullDescription,
      `Enrollment & Faculty: ${CAMPUSES[1].studentsCount} supported by ${CAMPUSES[1].facultyCount}.`,
      `Programs: ${CAMPUSES[1].programs}. Facilities: ${CAMPUSES[1].facilities}.`,
      `Location: ${CAMPUSES[1].address} | Phone: ${CAMPUSES[1].phone}.`,
    ],
    targetPath: '/campuses' as PagePath,
  },
  {
    id: 'choti-dunya',
    tab: 'Choti Dunya',
    title: 'Choti Dunya Campus',
    summary: CAMPUSES[2].fullDescription,
    image: CAMPUSES[2].homeImage,
    details: [
      CAMPUSES[2].fullDescription,
      `Enrollment & Faculty: ${CAMPUSES[2].studentsCount} supported by ${CAMPUSES[2].facultyCount}.`,
      `Programs: ${CAMPUSES[2].programs}. Facilities: ${CAMPUSES[2].facilities}.`,
      `Location: ${CAMPUSES[2].address} | Phone: ${CAMPUSES[2].phone}.`,
    ],
    targetPath: '/campuses' as PagePath,
  },
  {
    id: 'academics',
    tab: 'Academics',
    title: 'Primary to Intermediate',
    summary:
      'From foundational literacy in Grades 1-5 to specialized Pre-Medical, Pre-Engineering, Commerce, and Arts streams in Grades 11-12, our curriculum brings learning to life.',
    image: '/assets/bread.jpg',
    details: PROGRAMS.map((p) => `${p.title} (${p.grade}): ${p.description}.`),
    targetPath: '/admissions' as PagePath,
  },
  {
    id: 'facilities',
    tab: 'Facilities',
    title: 'Modern Campus Facilities',
    summary:
      'Fully equipped Physics, Chemistry, Biology, and Computer Labs, well-stocked libraries, sports complexes, hygienic cafeterias, and 24/7 campus security.',
    image: '/assets/banners/banner_1.jpg',
    details: [
      'Libraries: Well-stocked libraries with thousands of books and digital resources.',
      'Science & Computer Labs: Dedicated laboratories for hands-on experimentation and digital literacy.',
      'Sports & Safety: Comprehensive sports fields and 24/7 CCTV surveillance across all 3 campuses.',
    ],
    targetPath: '/campuses' as PagePath,
  },
  {
    id: 'co-curricular',
    tab: 'Student Life',
    title: 'Science, Sports & Culture',
    summary:
      'Annual Science Fairs, Inter-Campus Sports Championships, Cultural Festivals, Debate Competitions, and Community Service Days build confident leaders.',
    image: '/assets/banners/banner_2.jpg',
    details: UPCOMING_EVENTS.slice(0, 4).map(
      (ev) => `${ev.title} (${ev.month} ${ev.day} • ${ev.location}): ${ev.description}`
    ),
    targetPath: '/events' as PagePath,
  },
];

const ADVANTAGE_ITEMS = [
  {
    id: 'primary-wing',
    navLabel: 'Choti Dunya & Primary',
    statBadge: '1,500+ Young Learners',
    cardTitle: 'Early Childhood & Primary Foundation at Choti Dunya Campus',
    drawerHeading: 'Nurturing Curiosity & Character (Pre-School to Grade 5)',
    image: '/assets/banners/banner_1.jpg',
    paragraphs: [
      'At our specialized Choti Dunya Campus in Pakpattan, early childhood and primary education is built on interactive activity rooms, digital classrooms, and caring mentorship.',
      'With 1,500+ students and 75+ dedicated early-education faculty members, children build strong foundations in English, Urdu, Mathematics, General Science, and Islamic & Moral Values.',
      'Playgrounds, storytelling sessions, and hands-on discovery inspire a lifelong love of learning from the very first day of school.',
    ],
    ctaLabel: 'Explore Primary Programs',
    ctaPath: '/campuses' as PagePath,
  },
  {
    id: 'middle-high',
    navLabel: 'Boys & Girls High School',
    statBadge: '500+ Expert Faculty',
    cardTitle: 'Dedicated Boys & Girls Campuses with Science & Computer Labs',
    drawerHeading: 'Academic Rigor & Board Exam Preparation (Grades 6 to 10)',
    image: '/assets/banners/banner_2.jpg',
    paragraphs: [
      'Our purpose-built Boys Campus (2,000+ students, 100+ faculty) and Girls Campus (1,800+ students, 90+ faculty) at 37/SP Road near Alhamra Chowk provide tailored, focused learning environments.',
      'Students engage in practical experimentation inside our Physics, Chemistry, Biology, and high-speed Computer Laboratories, supported by comprehensive libraries and sports facilities.',
      'Debate competitions, annual science fairs, and inter-campus sports championships cultivate discipline, teamwork, and confidence.',
    ],
    ctaLabel: 'Explore Boys & Girls Campuses',
    ctaPath: '/campuses' as PagePath,
  },
  {
    id: 'intermediate-college',
    navLabel: 'Intermediate & Future Readiness',
    statBadge: '10,000+ Students & Alumni',
    cardTitle: '25 Years of Excellence Across Pre-Medical, Pre-Engineering & Commerce',
    drawerHeading: 'Shaping Tomorrow’s Leaders (Grades 11–12 & Career Guidance)',
    image: '/assets/bread.jpg',
    paragraphs: [
      'AL BADAR PUBLIC HIGH SCHOOL offers specialized Intermediate streams in Pre-Medical, Pre-Engineering, Commerce, and Arts to prepare students for top universities and professional careers.',
      'Through career guidance workshops, guest lecture series, and national academic competitions, our students consistently earn top distinctions across the region.',
      'Join a legacy of 25 years of educational excellence and over 10,000+ students empowered in Pakpattan.',
    ],
    ctaLabel: 'Apply for Admission',
    ctaPath: '/admissions' as PagePath,
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeProfileIdx, setActiveProfileIdx] = useState(0);
  const [profileFlipped, setProfileFlipped] = useState(false);
  const [flippedPillars, setFlippedPillars] = useState<Record<number, boolean>>({});
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [activeAdvantageIdx, setActiveAdvantageIdx] = useState(0);
  const [dialogContent, setDialogContent] = useState<{
    title: string;
    subtitle?: string;
    image: string;
    paragraphs: string[];
    ctaLabel?: string;
    ctaPath?: PagePath;
  } | null>(null);

  const activeProfile = STORY_PROFILES[activeProfileIdx];

  const handleNav = (e: React.MouseEvent, path: PagePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  const togglePillar = (idx: number) => {
    setFlippedPillars((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const prevTimelineIdx = (activeTimelineIdx - 1 + TIMELINE_SLIDES.length) % TIMELINE_SLIDES.length;
  const nextTimelineIdx = (activeTimelineIdx + 1) % TIMELINE_SLIDES.length;

  const socialFeedItems = [
    ...UPCOMING_EVENTS.slice(0, 3).map((ev) => ({
      id: ev.id,
      title: ev.title,
      message: `${ev.description} Join us on ${ev.month} ${ev.day} (${ev.time}) at ${ev.location}.`,
      dateLabel: `${ev.month} ${ev.day}`,
      image: ev.image,
      targetPath: '/events' as PagePath,
    })),
    ...LATEST_NEWS.map((news) => ({
      id: news.id,
      title: news.title,
      message: `${news.title} — ${news.excerpt}`,
      dateLabel: news.date,
      image: news.image,
      targetPath: news.targetPath,
    })),
  ];

  return (
    <div className="fsPageLayout fsLayout fsOneColumnLayout fsStyleAutoclear" id="fsEl_11583" data-use-new="true">
      <div className="fsDiv fsStyleAutoclear" id="fsEl_11584">
        {/* =====================================================================
            PANEL 1: BRIARCREST FEATURED TESTIMONIALS & STAGGERED EDITORIAL TITLE
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-testimonials panel-full-width panel-full-boundary"
          id="fsEl_11951"
          data-use-new="true"
        >
          <div className="fsElementContent">
            <div
              className="fsElement fsContent featured-title-left"
              id="fsEl_11958"
              data-use-new="true"
              shown=""
            >
              <div className="fsElementContent words splitting" style={{ '--word-total': 6 } as React.CSSProperties}>
                <p>
                  <span className="word" data-word="Educating" style={{ '--word-index': 0 } as React.CSSProperties}>
                    <span>Educating</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Minds." style={{ '--word-index': 1 } as React.CSSProperties}>
                      <span>Minds.</span>
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: 'right' }}>
                  <span className="word" data-word="Building" style={{ '--word-index': 2 } as React.CSSProperties}>
                    <span>Building</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Character." style={{ '--word-index': 3 } as React.CSSProperties}>
                      <span>Character.</span>
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <span className="word" data-word="Shaping" style={{ '--word-index': 4 } as React.CSSProperties}>
                    <span>Shaping</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Futures." style={{ '--word-index': 5 } as React.CSSProperties}>
                      <span>Futures.</span>
                    </span>
                  </strong>
                </p>
              </div>
              <footer>
                <div className="fsElementFooterContent">
                  <p>
                    {SCHOOL_IDENTITY.tagline} At {SCHOOL_IDENTITY.name}, every student is valued, supported, and inspired to reach their highest aspirations.
                  </p>
                </div>
              </footer>
            </div>

            <div
              className="fsElement fsLayout fsFourColumnLayout featured-testimonials featured-testimonials-low fsStyleAutoclear"
              id="fsEl_12022"
              data-use-new="true"
              updated=""
              shown=""
            >
              <header>
                <div className="fsElementHeaderContent">
                  <p>
                    Hear inspiring messages and stories about quality education at {SCHOOL_IDENTITY.name} from our school leadership, parents, and alumni in Pakpattan.
                  </p>
                </div>
              </header>

              <div className="fsElementContent slick-initialized slick-slider slick-dotted">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ opacity: 1, width: '100%' }}>
                    <div
                      className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear slick-slide slick-current slick-active"
                      style={{
                        width: '100%',
                        position: 'relative',
                        left: '0px',
                        top: '0px',
                        zIndex: 999,
                        opacity: 1,
                      }}
                      role="tabpanel"
                    >
                      <div className="fsElement fsPostElement fsList fsThumbnailOriginal fsThumbnailXLarge fsItemCount_5">
                        <div className="fsElementContent">
                          <div className="fsListItems">
                            <article
                              className={`fsStyleAutoclear fsBoard-33 ${profileFlipped ? 'active' : 'inactive'}`}
                              updated=""
                            >
                              <div className="shadow" />
                              <button
                                type="button"
                                className="article-toggle"
                                aria-label="Flip story card"
                                onClick={() => setProfileFlipped((prev) => !prev)}
                              >
                                <span>
                                  <span>{profileFlipped ? 'Flip to front' : 'Flip to back'}</span>
                                </span>
                              </button>
                              <div className="article-wrapper">
                                <div className="article-inner">
                                  <div className="article-front">
                                    <div className="article-image">
                                      <img src={activeProfile.image} alt={activeProfile.name} loading="eager" />
                                    </div>
                                    <ul className="fsTags fsStyleInlineList">
                                      <li className="fsTag">{activeProfile.tag}</li>
                                    </ul>
                                    <div className="fsTitle">{activeProfile.name}</div>
                                  </div>
                                  <div className="article-back">
                                    <div className="article-image">
                                      <img src={activeProfile.image} alt={activeProfile.name} loading="eager" />
                                    </div>
                                    <ul className="fsTags fsStyleInlineList">
                                      <li className="fsTag">{activeProfile.tag}</li>
                                    </ul>
                                    <div className="fsTitle">{activeProfile.name}</div>
                                    <div className="summary-wrap">
                                      <div className="fsSummary" style={{ overflowWrap: 'break-word' }}>
                                        <p>{activeProfile.quote}</p>
                                      </div>
                                    </div>
                                    <a
                                      className="fsPostLink fsReadMoreLink"
                                      href="#read-story"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setDialogContent({
                                          title: activeProfile.name,
                                          subtitle: activeProfile.fullRole,
                                          image: activeProfile.image,
                                          paragraphs: activeProfile.paragraphs,
                                          ctaLabel: 'Learn More About ABPS',
                                          ctaPath: '/about',
                                        });
                                      }}
                                    >
                                      <span className="link-icon" />
                                      <span>
                                        Read Full Message{' '}
                                        <span className="fsStyleSROnly">from {activeProfile.name}</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slideshow-index">
                <ul className="slick-dots" role="tablist">
                  {STORY_PROFILES.map((profile, idx) => {
                    const isSelected = idx === activeProfileIdx;
                    return (
                      <li key={profile.id} className={isSelected ? 'slick-active' : ''} role="presentation">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => {
                            setActiveProfileIdx(idx);
                            setProfileFlipped(false);
                          }}
                        >
                          <div className="dot-thumbnail">
                            <img src={profile.image} alt={profile.name} loading="lazy" />
                          </div>
                          <span>{profile.tag}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <footer>
                <div className="fsElementFooterContent">
                  <p>
                    <a
                      className="button-yellow-solid"
                      href="/about"
                      onClick={(e) => handleNav(e, '/about')}
                    >
                      Explore Leadership & Stories
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANEL 2: BRIARCREST 4-COLUMN FLIPPABLE VALUE BUTTON CARDS
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-buttons panel-full-width panel-full-boundary"
          id="fsEl_11952"
          data-use-new="true"
        >
          <div className="fsElementContent">
            <div
              className="fsElement fsContent featured-title-left"
              id="fsEl_11959"
              data-use-new="true"
              shown=""
            >
              <header>
                <div className="fsElementHeaderContent">
                  <p>25 Years of Excellence in Pakpattan</p>
                </div>
              </header>
              <div className="fsElementContent words splitting" style={{ '--word-total': 4 } as React.CSSProperties}>
                <p>
                  <span className="word" data-word="Al Badar's" style={{ '--word-index': 0 } as React.CSSProperties}>
                    <span>Al Badar&apos;s</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Core" style={{ '--word-index': 1 } as React.CSSProperties}>
                      <span>Core</span>
                    </span>
                    <br />
                    <span className="word" data-word="Educational" style={{ '--word-index': 2 } as React.CSSProperties}>
                      <span>Educational</span>
                    </span>
                  </strong>{' '}
                  <span className="word" data-word="Pillars" style={{ '--word-index': 3 } as React.CSSProperties}>
                    <span>Pillars</span>
                  </span>
                </p>
              </div>
              <footer>
                <div className="fsElementFooterContent">
                  <p>
                    Serving over 10,000+ students with 500+ dedicated faculty members across 3 purpose-built campuses in Pakpattan — nurturing academic excellence, character, and leadership.
                  </p>
                </div>
              </footer>
            </div>

            <div className="fsElement fsContainer featured-buttons" id="fsEl_12012" data-use-new="true" shown="">
              <div className="fsElementContent">
                <div className="fsElement fsLayout fsFourColumnLayout fsStyleAutoclear" id="fsEl_12013" data-use-new="true">
                  {HOME_FEATURES.map((feat, idx) => {
                    const isFlipped = !!flippedPillars[idx];
                    return (
                      <div
                        key={feat.title}
                        className={`fsDiv fsStyleColumn fsStyleColumn-${idx + 1} ${idx === 3 ? 'fsStyleColumn-last' : ''} fsStyleAutoclear`}
                      >
                        <section
                          className={`fsElement fsContent image-button image-button-low ${isFlipped ? 'active' : ''}`}
                          tabIndex={0}
                          onClick={() => togglePillar(idx)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              togglePillar(idx);
                            }
                          }}
                        >
                          <button
                            type="button"
                            className="image-button-toggle"
                            aria-label={`Flip ${feat.title} card`}
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePillar(idx);
                            }}
                          >
                            <span />
                          </button>
                          <div className="image-button-wrapper">
                            <div className="image-button-inner">
                              <div className="image-button-front">
                                <div
                                  className="image-button-image"
                                  style={{ backgroundImage: `url("${feat.image}")` }}
                                />
                                <header>
                                  <h2 className="fsElementTitle">{feat.title.toUpperCase()}</h2>
                                </header>
                              </div>
                              <div className="image-button-back">
                                <div
                                  className="image-button-image"
                                  style={{ backgroundImage: `url("${feat.image}")` }}
                                />
                                <header>
                                  <h2 className="fsElementTitle">{feat.title.toUpperCase()}</h2>
                                </header>
                                <div className="fsElementContent">
                                  <p>{feat.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANEL 3: BRIARCREST HORIZONTAL TIMELINE / CAMPUS & PROGRAM SLIDESHOW
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-timeline panel-full-width panel-full-boundary"
          id="fsEl_11953"
          data-use-new="true"
        >
          <div className="fsElementContent">
            <div
              className="fsElement fsContent featured-title-center"
              id="fsEl_11960"
              data-use-new="true"
              shown=""
            >
              <header>
                <div className="fsElementHeaderContent">
                  <p>Growing Toward Excellence</p>
                </div>
              </header>
              <div className="fsElementContent words splitting" style={{ '--word-total': 3 } as React.CSSProperties}>
                <p>
                  <span className="word" data-word="Explore" style={{ '--word-index': 0 } as React.CSSProperties}>
                    <span>Explore</span>
                  </span>{' '}
                  <span className="word" data-word="Al" style={{ '--word-index': 1 } as React.CSSProperties}>
                    <span>Al</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Badar" style={{ '--word-index': 2 } as React.CSSProperties}>
                      <span>Badar</span>
                    </span>
                  </strong>
                </p>
              </div>
            </div>

            <div
              className="fsElement fsPostElement fsSlideshow timeline fsThumbnailOriginal fsThumbnailXLarge fsItemCount_0 fsSlideshowHorizontal"
              id="fsEl_12074"
              data-use-new="true"
              shown=""
            >
              <div className="fsElementContent">
                {/* Category Tabs Bar */}
                <div className="slideshow-index">
                  <div className="slideshow-index-inner">
                    <ul className="slick-initialized slick-slider">
                      <div className="slick-list draggable" style={{ padding: 0 }}>
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'nowrap',
                            width: '100%',
                          }}
                        >
                          {TIMELINE_SLIDES.map((slide, idx) => {
                            const isCurrent = idx === activeTimelineIdx;
                            return (
                              <li
                                key={slide.id}
                                className={`slick-slide ${isCurrent ? 'slick-current slick-active slick-center' : 'slick-active'}`}
                                style={{ width: '175px' }}
                              >
                                <button
                                  type="button"
                                  onClick={() => setActiveTimelineIdx(idx)}
                                >
                                  <span>{slide.tab}</span>
                                </button>
                                <span />
                              </li>
                            );
                          })}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                {/* Horizontal Split Card Track with Peeking Neighbors */}
                <div
                  className="fsElementSlideshow slick-initialized slick-slider"
                  aria-label="Campus and Program Slideshow"
                  initialized=""
                >
                  <div className="slick-list draggable" style={{ padding: '0px', overflow: 'hidden' }}>
                    <div className="abps-timeline-track">
                      {[prevTimelineIdx, activeTimelineIdx, nextTimelineIdx].map((slideIdx, pos) => {
                        const slide = TIMELINE_SLIDES[slideIdx];
                        const isCenter = pos === 1;
                        return (
                          <article
                            key={`${slide.id}-${pos}`}
                            className={`fsStyleAutoclear fsBoard-31 slick-slide ${isCenter ? 'slick-current slick-active' : ''}`}
                            style={{ width: isCenter ? '980px' : '600px', cursor: isCenter ? 'default' : 'pointer' }}
                            onClick={() => {
                              if (!isCenter) setActiveTimelineIdx(slideIdx);
                            }}
                          >
                            <div className="fsThumbnail fsPostLink">
                              <img src={slide.image} alt={slide.title} loading="eager" />
                            </div>
                            <div className="article-text">
                              <div className="fsTitle">{slide.title}</div>
                              <div className="fsSummary" style={{ overflowWrap: 'break-word' }}>
                                <p>{slide.summary}</p>
                              </div>
                              <a
                                className="fsPostLink fsReadMoreLink"
                                href={slide.targetPath}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setDialogContent({
                                    title: slide.title,
                                    subtitle: `${SCHOOL_IDENTITY.name} • Pakpattan`,
                                    image: slide.image,
                                    paragraphs: slide.details,
                                    ctaLabel: `Visit ${slide.tab} Page`,
                                    ctaPath: slide.targetPath,
                                  });
                                }}
                              >
                                <span className="link-icon" />
                                <span>
                                  Learn More <span className="fsStyleSROnly">about {slide.title}</span>
                                </span>
                              </a>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Prev / Next Green Square Arrow Controls */}
                <div className="slideshow-controls">
                  <div className="slideshow-arrows">
                    <button
                      type="button"
                      className="fsPrevButton fsLeftArrow slick-arrow"
                      onClick={() => setActiveTimelineIdx(prevTimelineIdx)}
                    >
                      <span>Previous</span>
                    </button>
                    <button
                      type="button"
                      className="fsNextButton fsRightArrow slick-arrow"
                      onClick={() => setActiveTimelineIdx(nextTimelineIdx)}
                    >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANEL 4: BRIARCREST FULL-WIDTH GREEN BANNER WITH CREST LOGO AT BOTTOM
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-banner panel-image panel-outline logo-bottom panel-thick-padding panel-full-width panel-full-boundary"
          id="fsEl_13390"
          data-use-new="true"
          updated=""
          shown=""
        >
          <div className="panel-logo" />
          <div className="panel-background">
            <div>
              <div style={{ backgroundImage: 'url("/assets/banners/banner_1.jpg")' }} />
            </div>
          </div>
          <div className="fsElementContent">
            <div className="fsElement fsContent" id="fsEl_13397" data-use-new="true">
              <div className="fsElementContent">
                <h4 style={{ textAlign: 'center' }}>
                  <span className="alternate-heading">
                    Trusted by Over 10,000+ Students and Families Across Pakpattan for 25 Years of Academic Excellence
                  </span>
                </h4>
                <p>&nbsp;</p>
              </div>
              <footer>
                <div className="fsElementFooterContent">
                  <p style={{ textAlign: 'center' }}>
                    <a
                      className="button-white-yellow-outline"
                      href="/contact"
                      onClick={(e) => handleNav(e, '/contact')}
                    >
                      Learn Why On A Personal Visit To Our Campus
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANEL 5: BRIARCREST FEATURED SCROLLER ("THE AL BADAR ADVANTAGE")
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-scroller panel-full-width panel-full-boundary"
          id="fsEl_11955"
          data-use-new="true"
        >
          <div className="fsElementContent">
            <div
              className="fsElement fsContent featured-title-center"
              id="fsEl_11961"
              data-use-new="true"
              shown=""
            >
              <header>
                <div className="fsElementHeaderContent">
                  <p>Results That Endure</p>
                </div>
              </header>
              <div className="fsElementContent words splitting" style={{ '--word-total': 3 } as React.CSSProperties}>
                <p>
                  <span className="word" data-word="The" style={{ '--word-index': 0 } as React.CSSProperties}>
                    <span>The</span>
                  </span>{' '}
                  <span className="word" data-word="Al Badar" style={{ '--word-index': 1 } as React.CSSProperties}>
                    <span>Al Badar</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Advantage" style={{ '--word-index': 2 } as React.CSSProperties}>
                      <span>Advantage</span>
                    </span>
                  </strong>
                </p>
              </div>
            </div>

            <div
              className="fsElement fsContainer featured-scroller featured-scroller-low"
              id="fsEl_13610"
              data-use-new="true"
              updated=""
              shown=""
            >
              <div className="fsElementContent abps-scroller-layout">
                {/* Left Sticky Navigation Column */}
                <div className="abps-scroller-nav-col">
                  <div className="featured-scroller-navigation">
                    <ul>
                      {ADVANTAGE_ITEMS.map((item, idx) => {
                        const isActive = idx === activeAdvantageIdx;
                        const isPast = idx < activeAdvantageIdx;
                        return (
                          <li
                            key={item.id}
                            className={`${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setActiveAdvantageIdx(idx);
                                const el = document.getElementById(`abps-advantage-card-${idx}`);
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                              }}
                            >
                              <span className="btn-icon">
                                <span />
                              </span>
                              <span>{item.navLabel}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Right Cards Column */}
                <div className="abps-scroller-cards-col">
                  {ADVANTAGE_ITEMS.map((item, idx) => (
                    <section
                      key={item.id}
                      id={`abps-advantage-card-${idx}`}
                      className="fsElement fsContainer active"
                      data-use-new="true"
                      section-index={String(idx + 1)}
                      onMouseEnter={() => setActiveAdvantageIdx(idx)}
                      style={{ marginBottom: idx === ADVANTAGE_ITEMS.length - 1 ? 0 : '80px' }}
                    >
                      <div className="fsElementContent">
                        <section className="fsElement fsResourceElement fsSingleItem fsResourcesCombined">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveAdvantageIdx(idx);
                              setDialogContent({
                                title: item.drawerHeading,
                                subtitle: `${item.statBadge} • ${SCHOOL_IDENTITY.name}`,
                                image: item.image,
                                paragraphs: item.paragraphs,
                                ctaLabel: item.ctaLabel,
                                ctaPath: item.ctaPath,
                              });
                            }}
                          >
                            <header>
                              <div
                                style={{
                                  display: 'inline-block',
                                  padding: '6px 14px',
                                  borderRadius: '4px',
                                  background: '#ffc111',
                                  color: '#00350d',
                                  fontWeight: 800,
                                  fontSize: '13px',
                                  letterSpacing: '1.5px',
                                  textTransform: 'uppercase',
                                  marginBottom: '12px',
                                }}
                              >
                                {item.statBadge}
                              </div>
                              <h2 className="fsElementTitle">{item.cardTitle}</h2>
                            </header>
                            <div className="fsElementContent">
                              <article className="fsResource fsResourceTypeImage">
                                <figure>
                                  <picture style={{ backgroundImage: `url("${item.image}")` }}>
                                    <img src={item.image} alt={item.cardTitle} loading="lazy" />
                                  </picture>
                                </figure>
                              </article>
                            </div>
                            <div className="item-toggle">
                              <span>Explore</span>
                              <span className="btn-icon" />
                            </div>
                          </button>
                        </section>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANEL 6: BRIARCREST SOCIAL & CAMPUS FEED ("LIFE @ AL BADAR")
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-social panel-gradient panel-outline panel-full-width panel-full-boundary"
          id="fsEl_11956"
          data-use-new="true"
          updated=""
          shown=""
        >
          <div className="panel-background">
            <div>
              <div />
            </div>
          </div>
          <div className="fsElementContent">
            <div
              className="fsElement fsContent featured-title-left"
              id="fsEl_11962"
              data-use-new="true"
              shown=""
            >
              <header>
                <div className="fsElementHeaderContent">
                  <p>Life @ Al Badar</p>
                </div>
              </header>
              <div className="fsElementContent words splitting" style={{ '--word-total': 4 } as React.CSSProperties}>
                <p>
                  <span className="word" data-word="Campus" style={{ '--word-index': 0 } as React.CSSProperties}>
                    <span>Campus</span>
                  </span>{' '}
                  <span className="word" data-word="News" style={{ '--word-index': 1 } as React.CSSProperties}>
                    <span>News</span>
                  </span>{' '}
                  <span className="word" data-word="&" style={{ '--word-index': 2 } as React.CSSProperties}>
                    <span>&amp;</span>
                  </span>{' '}
                  <strong>
                    <span className="word" data-word="Events" style={{ '--word-index': 3 } as React.CSSProperties}>
                      <span>Events</span>
                    </span>
                  </strong>
                </p>
              </div>
            </div>

            <div className="fsElement fsFeeds fsCustom featured-social" id="fsEl_13551" data-use-new="true">
              <div className="fsElementContent">
                {socialFeedItems.map((post) => (
                  <article key={post.id} className="fsFeeds-post">
                    <a
                      className="post-wrapper"
                      href={post.targetPath}
                      onClick={(e) => handleNav(e, post.targetPath)}
                    >
                      <div className="post-image">
                        <div
                          className="post-image-inner"
                          style={{ backgroundImage: `url("${post.image}")` }}
                        >
                          <img src={post.image} className="post-image-inline" alt={post.title} />
                        </div>
                        <div className="post-image-overlay" />
                      </div>
                      <div className="post-link-overlay">
                        <div className="post-byline">
                          <div className="post-author">{SCHOOL_IDENTITY.name}</div>
                          <div className="post-user">@albadarschools.pk</div>
                        </div>
                        <div className="post-message is-truncated" style={{ overflowWrap: 'break-word' }}>
                          {post.message}
                        </div>
                        <div className="post-date-from">{post.dateLabel}</div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="fsElement fsNavigation fsList nav-social-featured nav-social" id="fsEl_13552" data-use-new="true">
              <div className="fsElementContent">
                <nav aria-label="Social Media Channels">
                  <ul className="fsNavLevel1">
                    <li>
                      <a href={SCHOOL_IDENTITY.socialLinks.facebook} target="_blank" rel="noreferrer">
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href={SCHOOL_IDENTITY.socialLinks.instagram} target="_blank" rel="noreferrer">
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href={SCHOOL_IDENTITY.socialLinks.twitter} target="_blank" rel="noreferrer">
                        <span>Twitter</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANEL 7: BRIARCREST CLOSING CTA PANEL (INQUIRE / VISIT / APPLY)
           ===================================================================== */}
        <div
          className="fsElement fsContainer panel-featured-cta panel-full-width panel-full-boundary"
          id="fsEl_11957"
          data-use-new="true"
          updated=""
          shown=""
        >
          <div className="panel-background">
            <div>
              <div style={{ backgroundImage: 'url("/assets/banners/banner_1.jpg")' }} />
            </div>
          </div>
          <div className="fsElementContent">
            <div
              className="fsElement fsContent featured-title-left"
              id="fsEl_13631"
              data-use-new="true"
              shown=""
            >
              <header>
                <div className="fsElementHeaderContent">
                  <p>All In One Place</p>
                </div>
              </header>
              <div className="fsElementContent words splitting" style={{ '--word-total': 3 } as React.CSSProperties}>
                <p>
                  <strong>
                    <span className="word" data-word="Excellence." style={{ '--word-index': 0 } as React.CSSProperties}>
                      <span>Excellence.</span>
                    </span>
                  </strong>{' '}
                  <span className="word" data-word="Integrity." style={{ '--word-index': 1 } as React.CSSProperties}>
                    <span>Integrity.</span>
                  </span>{' '}
                  <span className="word" data-word="Community." style={{ '--word-index': 2 } as React.CSSProperties}>
                    <span>Community.</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="fsElement fsNavigation fsList nav-cta-featured" id="fsEl_13630" data-use-new="true">
              <div className="fsElementContent">
                <nav aria-label="Admissions Actions">
                  <ul className="fsNavLevel1">
                    <li>
                      <a href="/admissions" onClick={(e) => handleNav(e, '/admissions')}>
                        Inquire
                      </a>
                    </li>
                    <li>
                      <a href="/contact" onClick={(e) => handleNav(e, '/contact')}>
                        Visit
                      </a>
                    </li>
                    <li>
                      <a href="/admissions" onClick={(e) => handleNav(e, '/admissions')}>
                        Apply
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briarcrest Side-Load Dialog Drawer for Story / Timeline / Advantage Details */}
      {dialogContent && (
        <div
          className="abps-dialog-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={dialogContent.title}
          onClick={() => setDialogContent(null)}
        >
          <div className="abps-dialog-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setDialogContent(null)}
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

            <header
              style={{
                paddingBottom: '16px',
                borderBottom: '1px solid #ffc111',
                marginBottom: '24px',
              }}
            >
              {dialogContent.subtitle && (
                <div
                  style={{
                    color: '#ffc111',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {dialogContent.subtitle}
                </div>
              )}
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                {dialogContent.title}
              </h3>
            </header>

            <div style={{ marginBottom: '24px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,193,17,0.4)' }}>
              <img
                src={dialogContent.image}
                alt={dialogContent.title}
                style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {dialogContent.paragraphs.map((p, i) => (
                <p key={i} style={{ color: '#faf7f3', fontSize: '17px', lineHeight: 1.7, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>

            {dialogContent.ctaLabel && dialogContent.ctaPath && (
              <p>
                <a
                  className="button-white-yellow-outline"
                  href={dialogContent.ctaPath}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = dialogContent.ctaPath!;
                    setDialogContent(null);
                    onNavigate(target);
                  }}
                >
                  {dialogContent.ctaLabel}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

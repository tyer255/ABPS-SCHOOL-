import React, { useState } from 'react';
import {
  EVENT_CATEGORIES,
  EventItem,
  LATEST_NEWS,
  PAST_EVENTS,
  PagePath,
  SCHOOL_IDENTITY,
  UPCOMING_EVENTS,
} from '../utils/schoolData';
import { filterEventsByCategory } from '../utils/validation';

interface EventsPageProps {
  onNavigate: (path: PagePath) => void;
}

const CATEGORY_ICONS: Record<string, string> = {
  Academic: 'icon-microscope',
  Sports: 'icon-trophy',
  Cultural: 'icon-star',
  Workshop: 'icon-graduate',
  Community: 'icon-globe',
};

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpSubmittedId, setRsvpSubmittedId] = useState<string | null>(null);

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Workshop', 'Community'];

  const categoryFiltered = filterEventsByCategory(UPCOMING_EVENTS, selectedCategory);
  const filteredEvents = categoryFiltered.filter((ev) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      ev.title.toLowerCase().includes(q) ||
      ev.description.toLowerCase().includes(q) ||
      ev.location.toLowerCase().includes(q) ||
      ev.category.toLowerCase().includes(q)
    );
  });

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
                    Life at {SCHOOL_IDENTITY.name} extends far beyond the classroom. Throughout the academic year, our Boys,
                    Girls, and Choti Dunya Campuses come alive with science fairs, inter-campus sports championships,
                    cultural festivals, debate tournaments, and community service initiatives.
                  </span>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <span className="lead-in">
                    Explore upcoming school events below, filter by interest area, or inspect recent student achievements
                    and announcements across Pakpattan.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Two-Column Briarcrest Filter Sidebar + Dark-Green Event Grid */}
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
                      <h2 className="fsElementTitle">Filter Events By Interest</h2>
                    </header>
                    <div className="fsElementContent">
                      <div style={{ marginBottom: '18px' }}>
                        <label
                          htmlFor="events-search-input"
                          style={{
                            display: 'block',
                            fontWeight: 700,
                            fontSize: '13px',
                            marginBottom: '6px',
                            color: '#006225',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                          }}
                        >
                          Search Events
                        </label>
                        <input
                          id="events-search-input"
                          type="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search title or venue..."
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '6px',
                            border: '1px solid #b68400',
                            background: '#ffffff',
                            color: '#1b2e21',
                            fontSize: '15px',
                          }}
                        />
                      </div>
                      <ul className="fsToolsList fsStyleSelectList">
                        {categories.map((cat) => (
                          <li key={cat} className={selectedCategory === cat ? 'fsStateSelected' : ''}>
                            <a
                              href={`#filter-${cat.toLowerCase()}`}
                              className="fsCategoryLink fsStyleDefaultButton"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedCategory(cat);
                              }}
                            >
                              <span>{cat === 'All' ? 'All Upcoming Events' : cat}</span>
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
                {filteredEvents.length === 0 ? (
                  <div
                    style={{
                      background: '#004415',
                      color: '#ffffff',
                      padding: '2.5rem',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <h3 style={{ color: '#ffc111', marginBottom: '0.5rem' }}>No Matching Events Found</h3>
                    <p style={{ marginBottom: '1.25rem' }}>
                      No upcoming events match your current filter or search criteria.
                    </p>
                    <button
                      type="button"
                      className="button-small button-yellow-solid"
                      onClick={() => {
                        setSelectedCategory('All');
                        setSearchQuery('');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="fsListItems fsStyleFourColumns">
                    {filteredEvents.map((ev) => (
                      <article
                        key={ev.id}
                        className={`fsStyleAutoclear fsBoard-22 fsCategory-10 ${
                          CATEGORY_ICONS[ev.category] || 'icon-star'
                        } has-summary`}
                        onClick={() => setSelectedEvent(ev)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="fsTitle">
                          <span>
                            {ev.month} {ev.day} — {ev.title}
                          </span>
                        </div>
                        <div className="fsSummary is-truncated" style={{ overflowWrap: 'break-word' }}>
                          <p>
                            {ev.description} ({ev.time} • {ev.location})
                          </p>
                        </div>
                        <a
                          className="fsPostLink fsReadMoreLink"
                          href={`#event-${ev.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedEvent(ev);
                          }}
                        >
                          Read More <span className="fsStyleSROnly">about {ev.title}</span>
                        </a>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Three-Column Briarcrest Card-Green-1 Recent Highlights & Past Events */}
        <div
          className="fsElement fsContent featured-title-center"
          data-use-new="true"
          {...({ shown: '' } as any)}
          style={{ marginTop: '60px', marginBottom: '36px' }}
        >
          <header>
            <div className="fsElementHeaderContent">
              <p>Celebrating Student Achievement</p>
            </div>
          </header>
          <div className="fsElementContent words splitting">
            <p style={{ textAlign: 'center', fontFamily: '"Bebas Neue", sans-serif', fontSize: '64px', color: '#004415', lineHeight: 1 }}>
              RECENT <strong>HIGHLIGHTS</strong> &amp; PAST EVENTS
            </p>
          </div>
        </div>

        <div className="fsElement fsLayout fsThreeColumnLayout fsStyleAutoclear" id="fsEl_26020" data-use-new="true" style={{ marginBottom: '64px' }}>
          {PAST_EVENTS.map((past, idx) => {
            const newsMatch = LATEST_NEWS[idx] || LATEST_NEWS[0];
            return (
              <div
                key={past.id}
                className={`fsDiv fsStyleColumn fsStyleColumn-${idx + 1} ${idx === 2 ? 'fsStyleColumn-last' : ''} fsStyleAutoclear`}
              >
                <div className="fsElement fsContent card-green-1 equal-height" data-use-new="true" {...({ updated: '', shown: '' } as any)}>
                  <header>
                    <div className="fsElementHeaderContent">
                      <figure className="fsImage">
                        <picture>
                          <img
                            alt={newsMatch.imageAlt}
                            src={newsMatch.image}
                            style={{ width: '100%', height: '210px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
                          />
                        </picture>
                      </figure>
                    </div>
                    <h2 className="fsElementTitle">{past.title}</h2>
                  </header>
                  <div className="fsElementContent">
                    <p>
                      <strong style={{ color: '#ffc111' }}>{past.date}</strong>
                    </p>
                    <p>{past.description}</p>
                    <p style={{ marginTop: '1.25rem' }}>
                      <a
                        href="/contact"
                        className="button-small button-yellow-solid"
                        onClick={(e) => handleLinkClick(e, '/contact')}
                      >
                        Inquire About Co-Curriculars
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Event Categories Overview in Briarcrest Gradient Panel */}
        <div
          className="fsElement fsContainer panel-gradient panel-outline panel-thick-padding panel-full-boundary"
          id="fsEl_26050"
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
                <h2 className="fsElementTitle" style={{ color: '#ffffff', textAlign: 'center', fontSize: '42px', marginBottom: '24px' }}>
                  Co-Curricular Pillars at {SCHOOL_IDENTITY.name}
                </h2>
              </header>
              <div className="fsElementContent">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {EVENT_CATEGORIES.map((cat) => (
                    <div
                      key={cat.name}
                      style={{
                        background: 'rgba(0, 46, 17, 0.65)',
                        border: '1px solid #ffc111',
                        borderRadius: '10px',
                        padding: '1.5rem',
                        color: '#ffffff',
                      }}
                    >
                      <h3 style={{ color: '#ffc111', fontSize: '1.35rem', marginTop: 0, marginBottom: '0.5rem' }}>{cat.name}</h3>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0, color: '#ffffff' }}>{cat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briarcrest Side-Load Dialog for Event Details & RSVP */}
      {selectedEvent && (
        <div
          className="abps-dialog-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={selectedEvent.title}
          onClick={() => setSelectedEvent(null)}
        >
          <div className="abps-dialog-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="bpa-side-load-close"
              aria-label="Close dialog"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <div className="bpa-side-load-body">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.imageAlt}
                style={{ width: '100%', height: '230px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.25rem' }}
              />
              <span className="bpa-side-load-kicker">
                {selectedEvent.month} {selectedEvent.day}, 2024 &bull; {selectedEvent.category}
              </span>
              <h2>{selectedEvent.title}</h2>
              <p>{selectedEvent.description}</p>
              <ul style={{ margin: '1rem 0 1.5rem', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>
                  <strong>Date:</strong> {selectedEvent.month} {selectedEvent.day}, 2024
                </li>
                <li>
                  <strong>Time:</strong> {selectedEvent.time}
                </li>
                <li>
                  <strong>Venue:</strong> {selectedEvent.location}
                </li>
                <li>
                  <strong>Organizer:</strong> {SCHOOL_IDENTITY.name} ({SCHOOL_IDENTITY.phone})
                </li>
              </ul>

              {rsvpSubmittedId === selectedEvent.id ? (
                <div
                  style={{
                    background: 'rgba(0, 53, 13, 0.85)',
                    border: '1px solid #ffc111',
                    borderRadius: '8px',
                    padding: '1rem 1.25rem',
                    color: '#ffffff',
                    fontWeight: 600,
                  }}
                >
                  Thank you! Your RSVP for <strong style={{ color: '#ffc111' }}>{selectedEvent.title}</strong> has been
                  registered with the ABPS Campus Events Office.
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="button-small button-yellow-solid"
                    onClick={() => setRsvpSubmittedId(selectedEvent.id)}
                  >
                    Confirm Attendance / RSVP
                  </button>
                  <a
                    href="/contact"
                    className="button-small button-white-yellow-outline"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedEvent(null);
                      onNavigate('/contact');
                    }}
                  >
                    Ask a Question
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { PagePath, SCHOOL_IDENTITY } from '../utils/schoolData';

interface FooterProps {
  onNavigate: (path: PagePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: PagePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer id="fsFooter" className="fsFooter">
      <div className="fsBanner fsStyleAutoclear" id="fsEl_11247" data-settings-id="11245" data-use-new="true">
        {/* Briarcrest Footer Top: Campus Image Cutout + 3 CTA Buttons */}
        <div className="fsElement fsContainer footer-top" id="fsEl_11680" data-use-new="true">
          <div className="footer-top-wrapper">
            <div className="fsElementContent">
              <div className="fsElement fsLayout fsTwoColumnLayout fsStyleAutoclear" id="fsEl_11681" data-use-new="true">
                <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_11682">
                  <div
                    className="fsElement fsResourceElement fsSingleItem footer-cutout fsResourcesCombined"
                    id="fsEl_11684"
                    data-use-new="true"
                  >
                    <div className="fsElementContent">
                      <article className="fsResource fsResourceTypeImage">
                        <figure>
                          <picture style={{ backgroundImage: 'url("/uploaded/themes/default_26/images/hr-logo.svg")', backgroundSize: '220px 220px' }}>
                            <img
                              alt="AL BADAR PUBLIC HIGH SCHOOL Pakpattan Crest"
                              loading="lazy"
                              src="/uploaded/themes/default_26/images/hr-logo.svg"
                            />
                          </picture>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_11683">
                  <div className="fsElement fsContainer footer-buttons" id="fsEl_20690" data-use-new="true">
                    <div className="fsElementContent">
                      <section className="fsElement fsContent footer-button" id="fsEl_20691" data-use-new="true">
                        <a href="/admissions" onClick={(e) => handleNav(e, '/admissions')}>
                          Inquire
                        </a>
                      </section>
                      <section className="fsElement fsContent footer-button" id="fsEl_20692" data-use-new="true">
                        <a href="/contact" onClick={(e) => handleNav(e, '/contact')}>
                          Visit
                        </a>
                      </section>
                      <section className="fsElement fsContent footer-button" id="fsEl_20693" data-use-new="true">
                        <a href="/admissions" onClick={(e) => handleNav(e, '/admissions')}>
                          Apply
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Briarcrest Dark-Green Grain Footer Container */}
        <div className="fsElement fsSharedContainer footer-container" id="fsEl_11676">
          <div className="footer-wrapper">
            <div className="fsElement fsContainer" id="fsEl_11665_11676" data-use-new="true">
              <div className="fsElementContent">
                {/* Top Row: School Wordmark & Social Icons */}
                <div
                  className="fsElement fsLayout fsTwoColumnLayout footer-top-columns fsStyleAutoclear"
                  id="fsEl_11666_11676"
                  data-use-new="true"
                >
                  <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_11667_11676">
                    <div
                      className="fsElement fsLocationElement fsSingleItem footer-logo fsThumbnailOriginal fsThumbnailSmall"
                      id="fsEl_13691_11676"
                      data-use-new="true"
                    >
                      <div className="fsElementContent">
                        <article className="fsLocationSingleItem">
                          <div className="fsThumbnail fsThumbnailLogo">
                            <a
                              className="fsLocationLink"
                              href="/"
                              onClick={(e) => handleNav(e, '/')}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '16px',
                                textDecoration: 'none',
                              }}
                            >
                              <img
                                alt={SCHOOL_IDENTITY.name}
                                src={SCHOOL_IDENTITY.logoUrl}
                                style={{
                                  width: '64px',
                                  height: '64px',
                                  borderRadius: '50%',
                                  objectFit: 'cover',
                                  border: '2px solid #ffc111',
                                }}
                              />
                              <div style={{ textAlign: 'left' }}>
                                <div
                                  style={{
                                    fontFamily: '"Cinzel", "Cormorant Garamond", serif',
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: '#ffffff',
                                    letterSpacing: '2px',
                                    lineHeight: 1.1,
                                  }}
                                >
                                  AL BADAR
                                </div>
                                <div
                                  style={{
                                    fontFamily: '"Cinzel", "Cormorant Garamond", serif',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: '#ffc111',
                                    letterSpacing: '2.4px',
                                    marginTop: '4px',
                                  }}
                                >
                                  PUBLIC HIGH SCHOOL • PAKPATTAN
                                </div>
                              </div>
                            </a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>

                  <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_11669_11676">
                    <div
                      className="fsElement fsNavigation fsList nav-social nav-social-footer"
                      id="fsEl_11670_11676"
                      data-use-new="true"
                    >
                      <div className="fsElementContent">
                        <nav aria-label="Social Media">
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
                            <li>
                              <a href={SCHOOL_IDENTITY.socialLinks.youtube} target="_blank" rel="noreferrer">
                                <span>Vimeo</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Contact Us & Quick Links */}
                <div
                  className="fsElement fsLayout fsTwoColumnLayout footer-bottom-columns fsStyleAutoclear"
                  id="fsEl_11671_11676"
                  data-use-new="true"
                >
                  <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_11672_11676">
                    <div
                      className="fsElement fsLocationElement fsSingleItem footer-location-details"
                      id="fsEl_11673_11676"
                      data-use-new="true"
                    >
                      <header>
                        <h2 className="fsElementTitle" id="fsElementTitle_11673_11676">
                          Contact Us
                        </h2>
                      </header>
                      <div className="fsElementContent">
                        <article className="fsLocationSingleItem">
                          <div className="fsLocationAddress">
                            <div className="fsLocationAddress1">{SCHOOL_IDENTITY.streetAddress}</div>
                            <div className="fsLocationCity">Pakpattan,</div>
                            <div className="fsLocationState">Punjab</div>
                            <div className="fsLocationZip">Pakistan</div>
                          </div>
                          <div className="fsLocationPhoneNumber">
                            <a href={`tel:${SCHOOL_IDENTITY.phone.replace(/\s+/g, '')}`}>{SCHOOL_IDENTITY.phone}</a>
                          </div>
                          <div className="fsLocationEmail">
                            <a href={`mailto:${SCHOOL_IDENTITY.emails.general}`}>{SCHOOL_IDENTITY.emails.general}</a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>

                  <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_11674_11676">
                    <div
                      className="fsElement fsNavigation fsList nav-utility-footer"
                      id="fsEl_11675_11676"
                      data-use-new="true"
                    >
                      <header>
                        <h2 className="fsElementTitle" id="fsElementTitle_11675_11676">
                          Quick Links
                        </h2>
                      </header>
                      <div className="fsElementContent">
                        <nav aria-label="Footer Quick Links">
                          <ul className="fsNavLevel1">
                            <li>
                              <a href="/events" onClick={(e) => handleNav(e, '/events')}>
                                <span>School Calendar & Events</span>
                              </a>
                            </li>
                            <li>
                              <a href="/admissions" onClick={(e) => handleNav(e, '/admissions')}>
                                <span>Admissions & Requirements</span>
                              </a>
                            </li>
                            <li>
                              <a href="/campuses" onClick={(e) => handleNav(e, '/campuses')}>
                                <span>Our 3 Campuses (Boys, Girls & Choti Dunya)</span>
                              </a>
                            </li>
                            <li>
                              <a href="/about" onClick={(e) => handleNav(e, '/about')}>
                                <span>At A Glance & Leadership</span>
                              </a>
                            </li>
                            <li>
                              <a href="/contact" onClick={(e) => handleNav(e, '/contact')}>
                                <span>Contact & Location Map</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="fsWatermark" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>
              <span>{SCHOOL_IDENTITY.copyright}</span>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};

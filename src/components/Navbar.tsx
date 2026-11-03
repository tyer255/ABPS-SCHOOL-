import React, { useEffect, useState } from 'react';
import { BANNERS, PagePath, SCHOOL_IDENTITY } from '../utils/schoolData';

interface NavbarProps {
  currentPath: PagePath;
  onNavigate: (path: PagePath) => void;
}

interface MenuGroup {
  label: string;
  path: PagePath;
  thumbnail: string;
  thumbnailAlt: string;
  subLinks: { label: string; path: PagePath }[];
}

const MENU_GROUPS: MenuGroup[] = [
  {
    label: 'Engage',
    path: '/admissions',
    thumbnail: '/assets/banners/banner_1.jpg',
    thumbnailAlt: 'Admissions at AL BADAR PUBLIC HIGH SCHOOL',
    subLinks: [
      { label: 'Visit Al Badar', path: '/contact' },
      { label: 'Admissions Information', path: '/admissions' },
      { label: 'Application Process & Requirements', path: '/admissions' },
      { label: 'Online Admission Form', path: '/admissions' },
    ],
  },
  {
    label: 'Explore',
    path: '/about',
    thumbnail: '/assets/bread.jpg',
    thumbnailAlt: 'Explore AL BADAR PUBLIC HIGH SCHOOL',
    subLinks: [
      { label: 'At A Glance', path: '/about' },
      { label: 'Mission, Vision & Core Values', path: '/about' },
      { label: 'School Leadership Messages', path: '/about' },
      { label: 'Our 25-Year History', path: '/about' },
      { label: 'Our Campuses in Pakpattan', path: '/campuses' },
    ],
  },
  {
    label: 'Learn',
    path: '/campuses',
    thumbnail: '/assets/banners/banner_2.jpg',
    thumbnailAlt: 'Academic Programs at AL BADAR PUBLIC HIGH SCHOOL',
    subLinks: [
      { label: 'Choti Dunya (Pre-School & Primary)', path: '/campuses' },
      { label: 'Middle School (Grades 6-8)', path: '/campuses' },
      { label: 'High School (Grades 9-10)', path: '/campuses' },
      { label: 'Intermediate (Pre-Medical, Pre-Eng, ICS)', path: '/campuses' },
    ],
  },
  {
    label: 'Campuses',
    path: '/campuses',
    thumbnail: '/assets/banners/banner_1.jpg',
    thumbnailAlt: 'AL BADAR PUBLIC HIGH SCHOOL Campuses',
    subLinks: [
      { label: 'Boys Campus (37/SP Road)', path: '/campuses' },
      { label: 'Girls Campus (37/SP Road)', path: '/campuses' },
      { label: 'Choti Dunya Campus', path: '/campuses' },
      { label: 'Labs, Library & Sports Complex', path: '/campuses' },
    ],
  },
  {
    label: 'Experience',
    path: '/events',
    thumbnail: '/assets/banners/banner_2.jpg',
    thumbnailAlt: 'Student Life and Events at AL BADAR PUBLIC HIGH SCHOOL',
    subLinks: [
      { label: 'School Calendar & Upcoming Events', path: '/events' },
      { label: 'Annual Science Fair 2024', path: '/events' },
      { label: 'Inter-Campus Sports Championship', path: '/events' },
      { label: 'Cultural Festival & Debates', path: '/events' },
    ],
  },
  {
    label: 'Connect',
    path: '/contact',
    thumbnail: '/assets/director.jpg',
    thumbnailAlt: 'Connect with AL BADAR PUBLIC HIGH SCHOOL',
    subLinks: [
      { label: 'Contact Directory & Map', path: '/contact' },
      { label: 'Schedule A Campus Visit', path: '/contact' },
      { label: 'Admissions Office', path: '/admissions' },
      { label: 'Parent & Student Portal', path: '/contact' },
    ],
  },
];

const INTERNAL_HERO_CONFIG: Record<
  Exclude<PagePath, '/'>,
  {
    title: string;
    centerImage: string;
    leftImage: string;
    rightImage: string;
  }
> = {
  '/about': {
    title: 'At A Glance',
    centerImage: '/assets/bread.jpg',
    leftImage: '/assets/banners/banner_1.jpg',
    rightImage: '/assets/banners/banner_2.jpg',
  },
  '/admissions': {
    title: 'Admissions Information',
    centerImage: '/assets/banners/banner_1.jpg',
    leftImage: '/assets/bread.jpg',
    rightImage: '/assets/banners/banner_2.jpg',
  },
  '/campuses': {
    title: 'Our Campuses',
    centerImage: '/assets/banners/banner_2.jpg',
    leftImage: '/assets/banners/banner_1.jpg',
    rightImage: '/assets/bread.jpg',
  },
  '/events': {
    title: 'Events & Calendar',
    centerImage: '/assets/banners/banner_1.jpg',
    leftImage: '/assets/banners/banner_2.jpg',
    rightImage: '/assets/bread.jpg',
  },
  '/contact': {
    title: 'Visit & Connect',
    centerImage: '/assets/bread.jpg',
    leftImage: '/assets/banners/banner_2.jpg',
    rightImage: '/assets/banners/banner_1.jpg',
  },
};

const SECONDARY_NAV_ITEMS: { label: string; path: PagePath }[] = [
  { label: 'At A Glance', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Our Campuses', path: '/campuses' },
  { label: 'Events & News', path: '/events' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Home', path: '/' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const isHome = currentPath === '/';

  // Sync Briarcrest classes on <html> and <body>
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const htmlClasses = [
      'js',
      'svg',
      'audio',
      'pointerevents',
      'no-touchevents',
      'no-forcetouch',
      'objectfit',
      'object-fit',
      'flexbox',
      'has-hero',
      'hero-check',
      'hero-loaded',
      'hero-animate',
    ];
    if (!isHome) {
      htmlClasses.push('has-secondary');
    }
    if (menuOpen) {
      htmlClasses.push('off-canvas-active', 'off-canvas-menu');
    }
    if (searchOpen) {
      htmlClasses.push('off-canvas-active', 'off-canvas-search');
    }
    html.className = htmlClasses.join(' ');

    const bodyClasses = [
      'public-DraftStyleDefault-block',
      'fsLiveMode',
      'fsHasHeader',
      'fsHasMenu',
      'fsHasFooter',
      'fsHasOneColumnLayout',
      'fsLocation1',
      'fsAccountBarTop',
      'fsHasTheme4',
    ];
    if (isHome) {
      bodyClasses.push('home');
    } else {
      bodyClasses.push('fsSection933');
    }
    body.className = bodyClasses.join(' ');
    body.setAttribute('loaded', '');
  }, [isHome, menuOpen, searchOpen]);

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Autoplay hero banner slides on homepage
  useEffect(() => {
    if (!isHome || !isPlaying) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isHome, isPlaying]);

  const handleLinkClick = (e: React.MouseEvent, path: PagePath) => {
    e.preventDefault();
    setMenuOpen(false);
    setSearchOpen(false);
    onNavigate(path);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    setMenuOpen(false);
    setSearchOpen(false);
    if (q.includes('admis') || q.includes('apply') || q.includes('fee')) {
      onNavigate('/admissions');
    } else if (q.includes('campus') || q.includes('boy') || q.includes('girl') || q.includes('choti')) {
      onNavigate('/campuses');
    } else if (q.includes('event') || q.includes('science') || q.includes('sport') || q.includes('news')) {
      onNavigate('/events');
    } else if (q.includes('contact') || q.includes('phone') || q.includes('visit') || q.includes('map')) {
      onNavigate('/contact');
    } else {
      onNavigate('/about');
    }
  };

  const activeBanner = BANNERS[currentSlide] || BANNERS[0];
  const internalHero = !isHome ? INTERNAL_HERO_CONFIG[currentPath] : null;

  return (
    <>
      {/* Briarcrest Off-Canvas Menu & Search (#fsMenu) */}
      <div id="fsMenu">
        <div className="fsMenu fsStyleAutoclear" id="fsEl_11256" data-settings-id="11254" data-use-new="true">
          <div
            className="off-canvas-overlay"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(false);
            }}
          />
          <div className="fsElement fsContainer off-canvas-container" id="fsEl_11897" data-use-new="true">
            <div className="fsElementContent">
              {activeSubMenu !== null && (
                <div
                  className="off-canvas-image"
                  style={{ backgroundImage: `url("${MENU_GROUPS[activeSubMenu]?.thumbnail}")` }}
                />
              )}

              {/* Off-Canvas Main Menu Block */}
              <div className="fsElement fsContainer off-canvas-block off-canvas-menu" id="fsEl_11898" data-use-new="true">
                <div className="fsElementContent">
                  <div className="fsElement fsContainer mobile-top" id="fsEl_11899" data-use-new="true">
                    <div className="fsElementContent">
                      <div className="fsElement fsLayout fsTwoColumnLayout mobile-top-columns fsStyleAutoclear" id="fsEl_11921" data-use-new="true">
                        <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_11922">
                          <div className="fsElement fsEmbed mobile-toggle-menu-close" id="fsEl_11900" data-use-new="true">
                            <div className="fsElementContent">
                              <button
                                type="button"
                                className="toggle-off-canvas-menu"
                                onClick={() => setMenuOpen(false)}
                              >
                                <div className="toggle-off-canvas-icon">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                                <span>
                                  Close<span> Menu</span>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="fsElement fsEmbed mobile-toggle-search" id="fsEl_11919" data-use-new="true">
                            <div className="fsElementContent">
                              <button
                                type="button"
                                className="toggle-search"
                                onClick={() => setSearchOpen(true)}
                              >
                                <span>Search</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleColumn-last fsStyleAutoclear" id="fsEl_11923">
                          <div className="fsElement fsContent header-button" id="fsEl_11920" data-use-new="true">
                            <div className="fsElementContent">
                              <p>
                                <a href={SCHOOL_IDENTITY.portalUrl} target="_blank" rel="noreferrer">
                                  Portal Login
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop & Mobile Navigation Lists */}
                  <div className="fsElement fsContainer mobile-middle" id="fsEl_11901" data-use-new="true">
                    <div className="fsElementContent">
                      <div className="fsElement fsNavigation fsList nav-main-desktop" id="fsEl_11902" data-use-new="true">
                        <div className="fsElementContent">
                          <nav aria-label="Primary Menu">
                            <ul className="fsNavLevel1" role="menubar">
                              {MENU_GROUPS.map((group, idx) => {
                                const isExpanded = activeSubMenu === idx;
                                return (
                                  <li
                                    key={group.label}
                                    className={`fsNavParentPage ${isExpanded ? 'active' : ''}`}
                                    aria-haspopup="true"
                                    onMouseEnter={() => setActiveSubMenu(idx)}
                                  >
                                    <a
                                      href={group.path}
                                      role="menuitem"
                                      onClick={(e) => handleLinkClick(e, group.path)}
                                    >
                                      <span>{group.label}</span>
                                    </a>
                                    <div className="fsNavPageInfo" aria-hidden={!isExpanded}>
                                      <div className="fsNavPageThumbnail">
                                        <img src={group.thumbnail} alt={group.thumbnailAlt} loading="lazy" />
                                      </div>
                                      <ul className="fsNavLevel2" role="menu">
                                        {group.subLinks.map((sub) => (
                                          <li key={sub.label}>
                                            <a
                                              href={sub.path}
                                              role="menuitem"
                                              onClick={(e) => handleLinkClick(e, sub.path)}
                                            >
                                              <span>{sub.label}</span>
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </nav>
                        </div>
                      </div>

                      <div className="fsElement fsNavigation fsList nav-main-mobile" id="fsEl_11903" data-use-new="true">
                        <div className="fsElementContent">
                          <nav aria-label="Mobile Navigation">
                            <ul className="fsNavLevel1">
                              {MENU_GROUPS.map((group) => (
                                <li key={group.label} className="fsNavParentPage">
                                  <a href={group.path} onClick={(e) => handleLinkClick(e, group.path)}>
                                    <span>{group.label}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>
                      </div>

                      <div className="fsElement fsNavigation fsList nav-utility-mobile-desktop" id="fsEl_11918" data-use-new="true">
                        <div className="fsElementContent">
                          <nav aria-label="Utility Navigation">
                            <ul className="fsNavLevel1">
                              <li>
                                <a href="/events" onClick={(e) => handleLinkClick(e, '/events')}>
                                  <span>School Calendar</span>
                                </a>
                              </li>
                              <li>
                                <a href="/campuses" onClick={(e) => handleLinkClick(e, '/campuses')}>
                                  <span>Our 3 Campuses</span>
                                </a>
                              </li>
                              <li>
                                <a href={SCHOOL_IDENTITY.studentAppUrl} target="_blank" rel="noreferrer">
                                  <span>Student Mobile App</span>
                                </a>
                              </li>
                              <li>
                                <a href={`tel:${SCHOOL_IDENTITY.phone.replace(/\s+/g, '')}`}>
                                  <span>Call: {SCHOOL_IDENTITY.phone}</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gold Bottom CTA Bar inside Off-Canvas Menu */}
                  <div className="fsElement fsContainer mobile-bottom" id="fsEl_11904" data-use-new="true">
                    <div className="fsElementContent">
                      <div className="fsElement fsNavigation fsList nav-cta-mobile" id="fsEl_11917" data-use-new="true">
                        <div className="fsElementContent">
                          <nav aria-label="Menu Call to Action">
                            <ul className="fsNavLevel1">
                              <li className="icon-inquire">
                                <a href="/admissions" onClick={(e) => handleLinkClick(e, '/admissions')}>
                                  <span>Inquire</span>
                                </a>
                              </li>
                              <li className="icon-visit">
                                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>
                                  <span>Visit</span>
                                </a>
                              </li>
                              <li className="icon-apply">
                                <a href="/admissions" onClick={(e) => handleLinkClick(e, '/admissions')}>
                                  <span>Apply</span>
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

              {/* Off-Canvas Search Block */}
              <div className="fsElement fsContainer off-canvas-block off-canvas-search" id="fsEl_11925" data-use-new="true">
                <div className="fsElementContent">
                  <div className="fsElement fsEmbed mobile-toggle-search-close" id="fsEl_11926" data-use-new="true">
                    <div className="fsElementContent">
                      <button
                        type="button"
                        className="toggle-search-close"
                        onClick={() => setSearchOpen(false)}
                      >
                        <div className="toggle-off-canvas-icon" />
                        <span>Close Search</span>
                      </button>
                    </div>
                  </div>
                  <div className="fsElement fsSearchElement fsSearchForm site-search-off-canvas" id="fsEl_11927" data-use-new="true">
                    <div className="fsElementContent">
                      <form onSubmit={handleSearchSubmit} role="search" aria-label="Site Search">
                        <label htmlFor="abps-off-canvas-search" className="fsStyleSROnly">
                          Search AL BADAR PUBLIC HIGH SCHOOL
                        </label>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <input
                            id="abps-off-canvas-search"
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search Admissions, Campuses, Events, Leadership..."
                            style={{
                              flex: 1,
                              padding: '16px 22px',
                              borderRadius: '8px',
                              border: '2px solid #006225',
                              background: '#ffffff',
                              color: '#00350d',
                              fontSize: '18px',
                            }}
                          />
                          <button type="submit" className="button-yellow-solid" style={{ cursor: 'pointer' }}>
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briarcrest Main Header & Hero (#fsHeader) */}
      <header id="fsHeader" className="fsHeader">
        <div className="fsBanner fsStyleAutoclear" id="fsEl_11246" data-settings-id="11244" data-use-new="true">
          {/* Static Top Header */}
          {isHome ? (
            <div className="fsElement fsContainer header-top header-top-static" id="fsEl_13660" data-use-new="true">
              <div className="fsElementContent">
                <div className="fsElement fsLayout fsThreeColumnLayout header-top-columns fsStyleAutoclear" id="fsEl_13661" data-use-new="true">
                  <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_13662">
                    <div className="fsElement fsContent header-logo" id="fsEl_13663" data-use-new="true">
                      <div className="fsElementContent">
                        <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
                          <span>{SCHOOL_IDENTITY.name}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleAutoclear" id="fsEl_13664">
                    <div className="fsElement fsContent header-button" id="fsEl_13689" data-use-new="true">
                      <div className="fsElementContent">
                        <p>
                          <a href={SCHOOL_IDENTITY.portalUrl} target="_blank" rel="noreferrer">
                            Portal Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="fsDiv fsStyleColumn fsStyleColumn-3 fsStyleColumn-last fsStyleAutoclear" id="fsEl_13666">
                    <div className="fsElement fsEmbed header-toggle-menu" id="fsEl_13667" data-use-new="true">
                      <div className="fsElementContent">
                        <button
                          type="button"
                          className="toggle-off-canvas-menu"
                          onClick={() => setMenuOpen(true)}
                        >
                          <div className="toggle-off-canvas-icon">
                            <span />
                            <span />
                            <span />
                          </div>
                          <span>
                            Menu<span> Open</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="fsElement fsContainer header-top" id="fsEl_11697" data-use-new="true">
              <div className="fsElementContent">
                <div className="fsElement fsLayout fsThreeColumnLayout header-top-columns fsStyleAutoclear" id="fsEl_11698" data-use-new="true">
                  <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_11699">
                    <div className="fsElement fsContent header-button" id="fsEl_11881" data-use-new="true">
                      <div className="fsElementContent">
                        <p>
                          <a href={SCHOOL_IDENTITY.portalUrl} target="_blank" rel="noreferrer">
                            Portal Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleAutoclear" id="fsEl_11700">
                    <div className="fsElement fsContent header-logo" id="fsEl_11880" data-use-new="true">
                      <div className="fsElementContent">
                        <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
                          <span>{SCHOOL_IDENTITY.name}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="fsDiv fsStyleColumn fsStyleColumn-3 fsStyleColumn-last fsStyleAutoclear" id="fsEl_11701">
                    <div className="fsElement fsEmbed header-toggle-menu" id="fsEl_11702" data-use-new="true">
                      <div className="fsElementContent">
                        <button
                          type="button"
                          className="toggle-off-canvas-menu"
                          onClick={() => setMenuOpen(true)}
                        >
                          <div className="toggle-off-canvas-icon">
                            <span />
                            <span />
                            <span />
                          </div>
                          <span>
                            Menu<span> Open</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sticky Fixed Header on Scroll */}
          <div
            className={`fsElement fsContainer header-top header-top-fixed ${isSticky ? 'is-sticky-visible' : ''}`}
            id="fsEl_13680"
            data-use-new="true"
          >
            <div className="fsElementContent">
              <div className="fsElement fsLayout fsThreeColumnLayout header-top-columns fsStyleAutoclear" id="fsEl_13681" data-use-new="true">
                <div className="fsDiv fsStyleColumn fsStyleColumn-1 fsStyleAutoclear" id="fsEl_13682">
                  <div className="fsElement fsContent header-button" id="fsEl_13683" data-use-new="true">
                    <div className="fsElementContent">
                      <p>
                        <a href={SCHOOL_IDENTITY.portalUrl} target="_blank" rel="noreferrer">
                          Portal Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fsDiv fsStyleColumn fsStyleColumn-2 fsStyleAutoclear" id="fsEl_13684">
                  <div className="fsElement fsContent header-logo" id="fsEl_13685" data-use-new="true">
                    <div className="fsElementContent">
                      <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
                        <span>{SCHOOL_IDENTITY.name}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fsDiv fsStyleColumn fsStyleColumn-3 fsStyleColumn-last fsStyleAutoclear" id="fsEl_13686">
                  <div className="fsElement fsEmbed header-toggle-menu" id="fsEl_13687" data-use-new="true">
                    <div className="fsElementContent">
                      <button
                        type="button"
                        className="toggle-off-canvas-menu"
                        onClick={() => setMenuOpen(true)}
                      >
                        <div className="toggle-off-canvas-icon">
                          <span />
                          <span />
                          <span />
                        </div>
                        <span>
                          Menu<span> Open</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section: Homepage vs Internal 3-Image Framed Hero */}
          {isHome ? (
            <section
              className={`fsElement fsResourceElement fsSingleItem hero ${isPlaying ? 'fsStatePlaying' : 'fsStatePaused'} fsResourcesCombined element-loaded is-video muted`}
              id="fsEl_13632"
              data-use-new="true"
              has-controls=""
              has-caption-override=""
            >
              <div
                className="hero-background"
                style={{ backgroundImage: `url("${activeBanner.src}")` }}
              />
              <div className="caption-wrapper caption-wrapper-override">
                <div className="caption">
                  <div className="caption-title">
                    <div className="caption-title-inner">
                      <span>Three Campuses</span>
                    </div>
                  </div>
                  <div className="caption-description">
                    <div className="caption-description-inner">
                      <p>Limitless Possibilities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fsElementContent">
                <div className="caption-wrapper caption-wrapper-override">
                  <div className="caption">
                    <div className="caption-title">
                      <div className="caption-title-inner">
                        <span>Three Campuses</span>
                      </div>
                    </div>
                    <div className="caption-description">
                      <div className="caption-description-inner">
                        <p>Limitless Possibilities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-outer">
                  <div className="hero-inner">
                    <article className="fsResource fsResourceTypeVideo">
                      <div className="slide-overlay">
                        <div className="slide-overlay-inner">
                          <div className="slide-media-wrapper">
                            <div
                              className="slide-media"
                              style={{
                                backgroundImage: `url("${activeBanner.src}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                            >
                              <img
                                src={activeBanner.src}
                                alt={activeBanner.alt}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  display: 'block',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <div className="hero-slideshow-controls-container">
                      <div className="slideshow-controls">
                        <div className="slideshow-controls-inner">
                          <div className="slideshow-controls-row">
                            <div className="slideshow-controls-row-inner">
                              <fieldset aria-label="slideshow controls" className="fsElementSlideshowControls">
                                <button
                                  type="button"
                                  className="video-toggle"
                                  onClick={() => {
                                    setIsPlaying((prev) => !prev);
                                    setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
                                  }}
                                >
                                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                                </button>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            internalHero && (
              <>
                <section
                  className="fsElement fsResourceElement fsSingleItem hero fsResourcesCombined element-loaded is-image"
                  id="fsEl_19569"
                  data-use-new="true"
                  has-caption-override=""
                >
                  <div className="fsElementContent">
                    <header>
                      <h2 className="fsElementTitle" id="fsElementTitle_19569">
                        {internalHero.title}
                      </h2>
                      <div className="fsElementHeaderContent">
                        <figure className="fsImage">
                          <picture style={{ backgroundImage: `url("${internalHero.leftImage}")` }}>
                            <img src={internalHero.leftImage} alt="AL BADAR PUBLIC HIGH SCHOOL Campus" loading="lazy" />
                          </picture>
                        </figure>
                      </div>
                    </header>
                    <footer>
                      <div className="fsElementFooterContent">
                        <figure className="fsImage">
                          <picture style={{ backgroundImage: `url("${internalHero.rightImage}")` }}>
                            <img src={internalHero.rightImage} alt="AL BADAR PUBLIC HIGH SCHOOL Students" loading="lazy" />
                          </picture>
                        </figure>
                      </div>
                    </footer>
                    <div className="hero-inner">
                      <article className="fsResource fsResourceTypeImage">
                        <div className="slide-overlay">
                          <div className="slide-overlay-inner">
                            <div className="slide-media-wrapper">
                              <div
                                className="slide-media"
                                style={{ backgroundImage: `url("${internalHero.centerImage}")` }}
                              >
                                <img src={internalHero.centerImage} alt={internalHero.title} loading="eager" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>

                {/* Briarcrest Overlapping Internal Sub-Navigation Card */}
                <div className="fsElement fsContainer header-secondary" id="fsEl_11704" data-use-new="true" updated="">
                  <div className="fsElementContent">
                    <div className="fsElement fsNavigation fsList nav-secondary-header" id="fsEl_11707" data-use-new="true">
                      <div className="fsElementContent">
                        <nav aria-label="Section Navigation">
                          <ul className="fsNavLevel1">
                            {SECONDARY_NAV_ITEMS.map((item) => {
                              const isCurrent = currentPath === item.path;
                              return (
                                <li key={item.path} className={isCurrent ? 'fsNavCurrentPage' : ''}>
                                  <a href={item.path} onClick={(e) => handleLinkClick(e, item.path)}>
                                    <span>{item.label}</span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </header>
    </>
  );
};

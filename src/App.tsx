import { useEffect, useState } from 'react';
import { AboutPage } from './components/AboutPage';
import { AdmissionsPage } from './components/AdmissionsPage';
import { CampusesPage } from './components/CampusesPage';
import { ContactPage } from './components/ContactPage';
import { EventsPage } from './components/EventsPage';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { PagePath } from './utils/schoolData';
import { normalizePagePath } from './utils/validation';

const PAGE_TITLES: Record<PagePath, string> = {
  '/': 'AL BADAR PUBLIC HIGH SCHOOL - Home | Leading Educational Institution in Pakpattan',
  '/about': 'At A Glance - AL BADAR PUBLIC HIGH SCHOOL | Our Mission, Vision & Leadership',
  '/admissions': 'Admissions Information - AL BADAR PUBLIC HIGH SCHOOL | Apply Now',
  '/campuses': 'Our Campuses - AL BADAR PUBLIC HIGH SCHOOL | Boys, Girls & Choti Dunya Campus',
  '/events': 'Events & Activities - AL BADAR PUBLIC HIGH SCHOOL | School Calendar & News',
  '/contact': 'Contact Us - AL BADAR PUBLIC HIGH SCHOOL | Visit & Inquire',
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<PagePath>(() =>
    normalizePagePath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePagePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPath] || PAGE_TITLES['/'];
  }, [currentPath]);

  const handleNavigate = (path: PagePath) => {
    const normalized = normalizePagePath(path);
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="fsPageWrapper">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      <div id="fsPageBodyWrapper" className="fsPageBodyWrapper">
        <div id="fsPageBody" className="fsStyleAutoclear fsPageBody">
          <main id="fsPageContent" className="fsPageContent">
            {currentPath === '/' && <HomePage onNavigate={handleNavigate} />}
            {currentPath === '/about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPath === '/admissions' && <AdmissionsPage onNavigate={handleNavigate} />}
            {currentPath === '/campuses' && <CampusesPage onNavigate={handleNavigate} />}
            {currentPath === '/events' && <EventsPage onNavigate={handleNavigate} />}
            {currentPath === '/contact' && <ContactPage onNavigate={handleNavigate} />}
          </main>
        </div>
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

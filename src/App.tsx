import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Hero from './components/Hero';
import CurvedLoop from './components/CurvedLoop';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CaseStudyDetail from './components/CaseStudyDetail';
import LiquidEther from './components/LiquidEther';
import ScrollReveal from './components/ScrollReveal';
import TargetCursor from './components/TargetCursor';

const NavLink: React.FC<{ to: string; scrollTo?: string; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ to, scrollTo, children, onClick, className = '' }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome && scrollTo) {
    return (
      <ScrollLink to={scrollTo} smooth duration={800} onClick={onClick} className={className}>
        {children}
      </ScrollLink>
    );
  }
  return (
    <RouterLink to={to} onClick={onClick} className={className}>
      {children}
    </RouterLink>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinkClass = 'cursor-pointer cursor-target text-white hover:text-stone-300 font-bold tracking-wide transition-colors duration-300';
  const navLinkClassMobile = 'block w-full text-center cursor-pointer cursor-target text-white hover:text-orange-500 font-bold tracking-wide transition-colors duration-300 py-2';

  return (
    <div style={{ fontFamily: 'Figtree, sans-serif', position: 'relative' }}>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {isHome && (
        <div
            style={{
              width: '100%',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 0,
              pointerEvents: 'none',
            }}
          >
            <LiquidEther
              colors={['#FD6F00', '#FF8C42', '#FFD580']}
              mouseForce={10}
              cursorSize={100}
              isViscous={false}
              viscous={20}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={1}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>
      )}

      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200" ref={navRef}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {isHome ? (
            <ScrollLink to="hero" smooth duration={800} onClick={closeMenu} className="logo-container">
              <div className="logo">
                L<span className="logo-m">G</span>
              </div>
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={closeMenu} className="logo-container">
              <div className="logo">
                L<span className="logo-m">G</span>
              </div>
            </RouterLink>
          )}

          <div className="desktop-nav flex items-center space-x-8">
            <NavLink to="/" scrollTo="case-study" onClick={closeMenu} className={navLinkClass}>CASE STUDIES</NavLink>
            <NavLink to="/" scrollTo="about" onClick={closeMenu} className={navLinkClass}>ABOUT</NavLink>
            <NavLink to="/" scrollTo="projects" onClick={closeMenu} className={navLinkClass}>GALLERY</NavLink>
            <NavLink to="/" scrollTo="contact" onClick={closeMenu} className={navLinkClass}>CONTACT</NavLink>
          </div>

          <div className="mobile-nav-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-stone-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col items-center space-y-2">
            <NavLink to="/" scrollTo="case-study" onClick={closeMenu} className={navLinkClassMobile}>CASE STUDIES</NavLink>
            <NavLink to="/" scrollTo="about" onClick={closeMenu} className={navLinkClassMobile}>ABOUT</NavLink>
            <NavLink to="/" scrollTo="projects" onClick={closeMenu} className={navLinkClassMobile}>GALLERY</NavLink>
            <NavLink to="/" scrollTo="contact" onClick={closeMenu} className={navLinkClassMobile}>CONTACT</NavLink>
          </div>
        </div>
      </nav>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero"><Hero /></section>
                <ScrollReveal>
                  <section aria-label="Marquee">
                    <CurvedLoop
                      marqueeText="UI/UX DESIGN ✦ GRAPHIC DESIGN ✦ FRONTEND DEVELOPMENT ✦  "
                      speed={1.5}
                      curveAmount={280}
                      direction="left"
                      interactive={true}
                    />
                  </section>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <CaseStudy />
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <About />
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <Projects />
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <Contact />
                </ScrollReveal>
              </>
            }
          />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

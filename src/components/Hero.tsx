import React from 'react';
import ShinyText from './ShinyText';

const Hero: React.FC = () => {
  const waveKeyframes = `
    @keyframes wave {
      0%, 100% { transform: rotate(0deg); }
      10%, 30% { transform: rotate(14deg); }
      20% { transform: rotate(-8deg); }
      40% { transform: rotate(-4deg); }
      50% { transform: rotate(10deg); }
    }
  `;

  return (
    <section className="flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-8" style={{ fontFamily: 'Figtree, sans-serif', minHeight: '100vh', paddingBottom: '5rem' }}>
      <style>{waveKeyframes}</style>
      {/* Abstract Animated Squares - Randomly Scattered */}
    {/*  */}
      {/* Main Content */}

      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6">
        <h2 className="hero-greeting text-white mb-0 font-light" style={{ fontFamily: 'Figtree, sans-serif', margin: 0 }}>
          Hi, I'm Lovely! <span style={{ display: 'inline-block', animation: 'wave 2.5s ease-in-out infinite', transformOrigin: '70% 70%' }}>👋</span>
        </h2>
        <h3
          className="hero-title-fluid font-medium tracking-wide mb-0 hero-title"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: '450',
            margin: 0,
            lineHeight: '1.1'
          }}
        >
          <span className="cursor-target">
            <ShinyText
              text="UI/UX DEVELOPER"
              speed={2.5}
              delay={0}
              color="#e4e4e4"
              shineColor="#c9885c"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={true}
            />
          </span>
        </h3>
        <p className="hero-tagline text-white font-light leading-relaxed" style={{ fontFamily: 'Figtree, sans-serif', margin: 0, color: 'rgba(255, 255, 255, 0.8)' }}>
          Less noise. <span className="cursor-target">More meaning.</span> Better design.
        </p>
        <a
          href="#projects"
          className="curtain-btn group cursor-target px-8 py-4"
          style={{
            backgroundColor: '#FD6F00',
            color: '#fff',
            border: '2px solid #FD6F00',
            fontWeight: 300,
            letterSpacing: '0.05em',
            fontSize: '1rem',
            transition: 'all 0.5s',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px'
          }}
        >
          <span className="font-bold">EXPLORE GALLERY</span>
          <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
          </svg>
        </a>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://github.com/Lablydaby"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300 cursor-target"
            style={{ padding: '4px' }}
          >
            <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/lovely-shane-gucor-94a1071b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300 cursor-target"
            style={{ padding: '4px' }}
          >
            <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:gucorlovely@gmail.com"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300 cursor-target"
            style={{ padding: '4px' }}
          >
            <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

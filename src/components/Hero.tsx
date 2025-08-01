import React, { useEffect, useState, useMemo } from 'react';

const NUM_SQUARES = 10;

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // More scattered, lively arrangement for 9 squares
  const squares = [
    { top: '4%', left: '8%', size: '6rem', border: 4, color: '#FD6F00', opacity: 0.08, zIndex: 0, spinFactor: 0.5 },
    { top: '12%', right: '5%', size: '5rem', border: 4, color: '#FF8C42', opacity: 0.07, zIndex: 0, spinFactor: -0.3 },
    { top: '22%', left: '12%', size: '5.5rem', border: 4, color: '#FFD580', opacity: 0.1, zIndex: 0, spinFactor: 0.4 },
    { top: '30%', right: '10%', size: '6.5rem', border: 4, color: '#FFB347', opacity: 0.09, zIndex: 0, spinFactor: -0.6 },
    { top: '40%', left: '6%', size: '5.2rem', border: 4, color: '#FD6F00', opacity: 0.1, zIndex: 0, spinFactor: 0.2 },
    { bottom: '40%', right: '12%', size: '5.8rem', border: 4, color: '#FF6F00', opacity: 0.08, zIndex: 0, spinFactor: -0.5 },
    { bottom: '32%', left: '15%', size: '6.2rem', border: 4, color: '#FF8C42', opacity: 0.09, zIndex: 0, spinFactor: 0.3 },
    { bottom: '24%', right: '8%', size: '5rem', border: 4, color: '#FFD580', opacity: 0.07, zIndex: 0, spinFactor: -0.4 },
    { bottom: '15%', left: '10%', size: '5.4rem', border: 4, color: '#FFB347', opacity: 0.1, zIndex: 0, spinFactor: 0.6 },
    { bottom: '6%', right: '6%', size: '6rem', border: 4, color: '#FD6F00', opacity: 0.08, zIndex: 0, spinFactor: -0.2 },
  ];
  

  // Calculate transforms for shapes
  const spin = (factor: number) => `rotate(${scrollY * factor}deg)`;
  const bounce = (factor: number, offset: number = 0) => `translateY(${Math.sin((scrollY + offset) * 0.02) * factor}px)`;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {/* Abstract Animated Squares - Randomly Scattered */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {squares.map((sq, i) => (
          <div
            key={i}
            className={`absolute rounded-md shadow-lg`}
            style={{
              top: sq.top,
              left: sq.left,
              right: sq.right,
              bottom: sq.bottom,
              width: sq.size,
              height: sq.size,
              borderWidth: `${sq.border}px`,
              borderStyle: 'solid',
              borderColor: sq.color,
              background: 'transparent',
              opacity: sq.opacity,
              zIndex: sq.zIndex,
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
              transform: spin(sq.spinFactor),
              transition: 'box-shadow 0.3s',
            }}
          ></div>
        ))}
      </div>
      {/* Main Content */}

      <div className="relative z-10 max-w-5xl mx-auto">
      <h2
        className="text-5xl md:text-6xl font-medium tracking-wide mb-1 hero-title"
        style={{
          fontFamily: 'Quicksand, sans-serif',
          fontWeight: '450'
        }}
      >
        LOVELY SHANE C. GUCOR
      </h2>
      
        <p className="text-lg md:text-xl text-white mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Where form meets function — a collection of digital designs crafted with purpose, beauty, and precision.
        </p>

        <div className="flex justify-center items-center">
          <a 
            href="#projects" 
            className="curtain-btn group px-8 py-4" style={{ backgroundColor: '#FD6F00', color: '#fff', border: '2px solid #FD6F00', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1rem', transition: 'all 0.5s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className='font-bold'>EXPLORE GALLERY</span>
            <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
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
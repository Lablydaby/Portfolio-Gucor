import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="py-32 relative overflow-hidden" style={{ fontFamily: 'Quicksand, sans-serif', backgroundColor: 'transparent', color: '#fff' }}>
    {/* Artistic Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 border border-stone-200 rotate-45 opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-stone-200 rounded-full opacity-15"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="section-title" style={{ color: '#fff' }}>
          <strong>
            <span className="title-highlight">C</span>ONTACT
          </strong>
        </h2>
        <p className="text-xl text-white max-w-2xl mx-auto font-light leading-relaxed">
          Let's discuss your next creative project and bring your vision to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Contact Form */}
        <div>
          <h3 className="text-2xl font-light text-white tracking-wide mb-8">
            Send a Message
          </h3>
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="form-input" 
                required 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="form-input" 
                required 
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                className="form-input resize-none" 
                rows={6} 
                required 
              />
            </div>
            <button 
              type="submit" 
              style={{ backgroundColor: '#fd6f00' }}
              className="curtain-btn contact-button w-full px-8 py-4 bg-stone-800 text-white font-light tracking-wide relative overflow-hidden"
              disabled
              title="Backend not yet implemented"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Column - Contact Information */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-light text-white tracking-wide mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-stone-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-light text-white tracking-wide mb-1">Email</div>
                  <div className="text-white font-light">gucorlovely@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-stone-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-light text-white tracking-wide mb-1">Location</div>
                  <div className="text-white font-light">Cebu City, Philippines</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-stone-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-light text-white tracking-wide mb-1">Response Time</div>
                  <div className="text-white font-light">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-light text-white tracking-wide mb-8">
              Connect With Me
            </h3>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Lablydaby" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/lovely-shane-gucor-94a1071b5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/gucorlovely01/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/lablydaby/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-600 hover:bg-stone-50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.45.425 20.277.131 19 .072 17.721.013 17.312 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 
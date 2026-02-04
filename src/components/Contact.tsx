import React, { useState } from 'react';

const FORMSPREE_FORM_ID = 'mnjzwvkg';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
  <section id="contact" className="py-32 relative overflow-hidden" style={{ fontFamily: 'Figtree, sans-serif', backgroundColor: 'transparent', color: '#fff' }}>
    {/* Artistic Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 border border-stone-200 rotate-45 opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-stone-200 rounded-full opacity-15"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="section-title" style={{ color: '#fff' }}>
          <strong>
            <span className="cursor-target">
              <span className="title-highlight">C</span>ONTACT
            </span>
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-input resize-none"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                required
                disabled={status === 'sending'}
              />
            </div>
            {status === 'success' && (
              <p className="text-green-400 text-sm font-light">Thanks! Your message was sent. I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-light">Something went wrong. Please try again or email gucorlovely@gmail.com directly.</p>
            )}
            <button
              type="submit"
              style={{ backgroundColor: '#fd6f00' }}
              className="curtain-btn contact-button w-full px-8 py-4 bg-stone-800 text-white font-light tracking-wide relative overflow-hidden cursor-target"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
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
                  <a href="mailto:gucorlovely@gmail.com" className="text-white font-light hover:text-[#FD6F00] transition-colors cursor-target">gucorlovely@gmail.com</a>
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

          {/* Social Links - same as Hero: GitHub, LinkedIn, Email */}
          <div>
            <h3 className="text-2xl font-light text-white tracking-wide mb-8">
              Connect With Me
            </h3>
            <div className="flex space-x-6">
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
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact; 
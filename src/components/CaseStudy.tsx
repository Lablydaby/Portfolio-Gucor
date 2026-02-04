import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import SpotlightCard from './SpotlightCard';
import { caseStudiesData } from '../data/caseStudies';
import './CaseStudy.css';

const CaseStudy: React.FC = () => {
  const navigate = useNavigate();

  // Document-level click: use coordinates to find if click was over a case study card.
  // elementsFromPoint returns all elements at (x,y) so we find the card even if an overlay got the click.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const card = Array.from(elements).find((el) => el.hasAttribute?.('data-case-study-slug'));
      if (!card) return;
      const slug = card.getAttribute('data-case-study-slug');
      if (slug) {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/case-study/${slug}`);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [navigate]);

  return (
    <section id="case-study" className="case-study-section" style={{ position: 'relative', zIndex: 10, minHeight: '100vh', background: '#181818', overflow: 'hidden', fontFamily: 'Figtree, sans-serif', isolation: 'isolate' }}>
      <div className="case-study-bg-art">
        <div className="case-study-blob case-study-blob-1" />
        <div className="case-study-blob case-study-blob-2" />
        <div className="case-study-blob case-study-blob-3" />
        <div className="case-study-blob case-study-blob-4" />
        <div className="case-study-blob case-study-blob-5" />
        <div className="case-study-blob case-study-blob-6" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        <div className="case-study-header-row case-study-header-centered">
          <div className="case-study-header-text">
            <h2 className="section-title cursor-target" style={{ color: '#fff' }}>
              <strong>
                <span className="title-highlight">C</span>ASE STUDIES
              </strong>
            </h2>
            <p className="case-study-subtitle text-white/80 max-w-xl mt-4">
              Selected projects: problem, approach, and impact.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {caseStudiesData.map((item, index) => (
            <ScrollReveal key={item.slug} delay={index * 0.08}>
            <div
              className="case-study-card-wrapper case-study-link"
              data-case-study-slug={item.slug}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/case-study/${item.slug}`);
                }
              }}
              aria-label={`View case study: ${item.title}`}
            >
              <SpotlightCard spotlightColor="rgba(253, 111, 0, 0.2)">
                <div className="case-study-card-layout">
                  <div className="case-study-card-left">
                    <div className="case-study-card-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="case-study-card-title">{item.title}</h3>
                    <p className="case-study-card-tagline">{item.tagline}</p>
                    {item.tools && item.tools.length > 0 && (
                      <div className="case-study-card-tags">
                        {item.tools.map((tool, i) => (
                          <span key={i} className="case-study-card-tag">{tool}</span>
                        ))}
                      </div>
                    )}
                    <div className="case-study-cta">
                      <span className="case-study-cta-text">View full case study</span>
                      <span className="case-study-cta-arrow">→</span>
                    </div>
                  </div>
                  <div className="case-study-card-right">
                    {item.images.length > 0 && (
                      <div className="case-study-card-image">
                        <img
                          src={item.images[0].src}
                          alt={item.images[0].alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

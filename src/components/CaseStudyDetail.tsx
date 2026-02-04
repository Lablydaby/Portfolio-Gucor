import React, { useMemo, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { getCaseStudyBySlug } from '../data/caseStudies';
import Carousel from './Carousel';
import ScrollReveal from './ScrollReveal';
import ShinyText from './ShinyText';
import Stepper, { Step } from './Stepper';
import './CaseStudyDetail.css';
import './Carousel.css';
import './Stepper.css';

/** Parses body text: supports \n\n for paragraphs and **text** for highlights. */
function renderBodyText(text: string): React.ReactNode {
  if (!text) return null;
  const paragraphs = text.split(/\n\n/).filter(Boolean);
  return (
    <>
      {paragraphs.map((para, i) => {
        const segments: React.ReactNode[] = [];
        const re = /\*\*(.+?)\*\*/g;
        let lastIndex = 0;
        let match;
        let keyIdx = 0;
        while ((match = re.exec(para)) !== null) {
          segments.push(para.slice(lastIndex, match.index));
          segments.push(
            <span key={`h-${i}-${keyIdx++}`} className="case-study-detail__highlight">
              {match[1]}
            </span>
          );
          lastIndex = re.lastIndex;
        }
        segments.push(para.slice(lastIndex));
        return (
          <p key={i} className="case-study-detail__body">
            {segments}
          </p>
        );
      })}
    </>
  );
}

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  const allImages = useMemo(
    () => (caseStudy ? [...caseStudy.images, ...(caseStudy.carouselImages || [])] : []),
    [caseStudy]
  );
  const galleryCarouselItems = useMemo(
    () =>
      allImages.slice(1).map((img, i) => ({
        id: i,
        src: (img as { src: string }).src,
        alt: (img as { alt?: string }).alt ?? `Image ${i + 1}`,
      })),
    [allImages]
  );
  type LightboxState = { index: number; rangeStart: number; rangeEnd: number };
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  useEffect(() => {
    if (lightboxState === null) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxState(null);
        return;
      }
      const { index, rangeStart, rangeEnd } = lightboxState;
      const canPrev = index > rangeStart;
      const canNext = index < rangeEnd;
      if (e.key === 'ArrowLeft' && canPrev) {
        e.preventDefault();
        setLightboxState((s) => s ? { ...s, index: s.index - 1 } : null);
      } else if (e.key === 'ArrowRight' && canNext) {
        e.preventDefault();
        setLightboxState((s) => s ? { ...s, index: s.index + 1 } : null);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [lightboxState]);

  if (!caseStudy) {
    return (
      <div className="case-study-detail case-study-detail--error" style={{ background: '#181818', minHeight: '100vh', fontFamily: 'Figtree, sans-serif' }}>
        <div className="case-study-detail__container">
          <h1 className="case-study-detail__error-title">Case study not found</h1>
          <Link to="/" className="case-study-detail__back">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const { title, client, year, tagline, overview, challenge, solution, results, role, duration, team, tools, process, images, carouselImages, videoUrl } = caseStudy;
  const useImageGalleryOnly = caseStudy.slug === 'datastructar-ar-learning' || caseStudy.slug === 'certifi-brand-identity';

  return (
    <article className="case-study-detail" style={{ background: '#181818', fontFamily: 'Figtree, sans-serif' }}>
      <div className="case-study-detail__container">
        <ScrollReveal>
          <Link to="/" className="case-study-detail__back cursor-target">
            ← Back to home
          </Link>

          {/* Hero */}
          <header className="case-study-detail__hero">
          <span className="case-study-detail__year">{year}</span>
          <h1 className="case-study-detail__title cursor-target">
            <ShinyText
              text={title}
              speed={2.5}
              delay={0}
              color="#e4e4e4"
              shineColor="#c9885c"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover
            />
          </h1>
          <p className="case-study-detail__client">{client}</p>
          <p className="case-study-detail__tagline">{tagline}</p>
          {(role || duration || team) && (
            <ul className="case-study-detail__meta">
              {role && <li><strong>Role</strong> {role}</li>}
              {duration && <li><strong>Duration</strong> {duration}</li>}
              {team && <li><strong>Team</strong> {team}</li>}
              {tools && tools.length > 0 && <li><strong>Tools</strong> {tools.join(', ')}</li>}
            </ul>
          )}
          </header>
        </ScrollReveal>

        {/* Hero image */}
        {images.length > 0 && (
          <ScrollReveal>
          <figure
            className="case-study-detail__hero-image case-study-detail__image--clickable"
            role="button"
            tabIndex={0}
            onClick={() => setLightboxState({ index: 0, rangeStart: 0, rangeEnd: 0 })}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); setLightboxState({ index: 0, rangeStart: 0, rangeEnd: 0 }); } }}
            aria-label="View full size"
          >
            <img src={images[0].src} alt={images[0].alt} />
            {images[0].caption && <figcaption>{images[0].caption}</figcaption>}
          </figure>
          </ScrollReveal>
        )}

        {/* Overview */}
        {overview && (
          <ScrollReveal>
          <section className="case-study-detail__section">
            <h2 className="case-study-detail__section-title"><span className="cursor-target">Overview</span></h2>
            <div className="case-study-detail__body-wrap">{renderBodyText(overview)}</div>
          </section>
          </ScrollReveal>
        )}

        {/* Challenge */}
        <ScrollReveal>
        <section className="case-study-detail__section">
          <h2 className="case-study-detail__section-title"><span className="cursor-target">Challenge</span></h2>
          <div className="case-study-detail__body-wrap">{renderBodyText(challenge)}</div>
        </section>
        </ScrollReveal>

        {/* Solution */}
        <ScrollReveal>
        <section className="case-study-detail__section">
          <h2 className="case-study-detail__section-title"><span className="cursor-target">Solution</span></h2>
          <div className="case-study-detail__body-wrap">{renderBodyText(solution)}</div>
        </section>
        </ScrollReveal>

        {/* Process */}
        {process && process.length > 0 && (
          <ScrollReveal>
          <section className="case-study-detail__section">
            <h2 className="case-study-detail__section-title"><span className="cursor-target">Process</span></h2>
            <Stepper
              initialStep={1}
              backButtonText="Previous"
              nextButtonText="Next"
              className="case-study-detail__stepper"
            >
              {process.map((step, i) => (
                <Step key={i}>
                  <strong>{step.title}</strong>
                  <div className="case-study-detail__process-body">{renderBodyText(step.body)}</div>
                </Step>
              ))}
            </Stepper>
          </section>
          </ScrollReveal>
        )}

        {/* Gallery: first case study = TABLE VIEW + DETAIL VIEW; second = single Image gallery carousel */}
        {useImageGalleryOnly ? (
          galleryCarouselItems.length > 0 && (
            <ScrollReveal>
            <section className="case-study-detail__section case-study-detail__section--gallery">
              <h2 className="case-study-detail__section-title case-study-detail__section-title--centered"><span className="cursor-target">Image gallery</span></h2>
              <div className="case-study-detail__carousel-group">
                <div className="case-study-detail__carousel-wrap">
                  <Carousel
                    items={galleryCarouselItems}
                    baseWidth={720}
                    defaultHeight={420}
                    autoplay={false}
                    pauseOnHover={true}
                    loop={true}
                    hideIndicators
                    onImageClickExternal={(carouselIndex) =>
                      setLightboxState({
                        index: carouselIndex + 1,
                        rangeStart: 0,
                        rangeEnd: allImages.length - 1,
                      })
                    }
                  />
                </div>
              </div>
            </section>
            </ScrollReveal>
          )
        ) : (
          images.length > 1 && (
            <ScrollReveal>
            <section className="case-study-detail__section">
              <div className="case-study-detail__gallery">
                {(() => {
                  const rest = images.slice(1);
                  const pairs: typeof rest[] = [];
                  for (let i = 0; i < rest.length; i += 2) {
                    pairs.push(rest.slice(i, i + 2));
                  }
                  const pairLabels =
                    pairs.length === 2 ? ['TABLE VIEW', 'DETAIL VIEW'] : pairs.length === 1 ? ['TABLE VIEW'] : null;
                  return pairs.map((pair, rowIndex) => {
                    const label = pairLabels ? pairLabels[rowIndex] : null;
                    const idx0 = 1 + rowIndex * 2;
                    const idx1 = 2 + rowIndex * 2;
                    const rangeStart = idx0;
                    const rangeEnd = idx0 + pair.length - 1;
                    const row =
                      pair.length === 2 ? (
                        <div className="case-study-detail__gallery-row">
                          <figure
                            className="case-study-detail__gallery-item case-study-detail__image--clickable"
                            role="button"
                            tabIndex={0}
                            onClick={() => setLightboxState({ index: idx0, rangeStart, rangeEnd })}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); setLightboxState({ index: idx0, rangeStart, rangeEnd }); } }}
                            aria-label="View full size"
                          >
                            <img src={pair[0].src} alt={pair[0].alt} loading="lazy" />
                            {pair[0].caption && <figcaption>{pair[0].caption}</figcaption>}
                          </figure>
                          <figure
                            className="case-study-detail__gallery-item case-study-detail__image--clickable"
                            role="button"
                            tabIndex={0}
                            onClick={() => setLightboxState({ index: idx1, rangeStart, rangeEnd })}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); setLightboxState({ index: idx1, rangeStart, rangeEnd }); } }}
                            aria-label="View full size"
                          >
                            <img src={pair[1].src} alt={pair[1].alt} loading="lazy" />
                            {pair[1].caption && <figcaption>{pair[1].caption}</figcaption>}
                          </figure>
                        </div>
                      ) : (
                        <figure
                          className="case-study-detail__gallery-item case-study-detail__gallery-item--full case-study-detail__image--clickable"
                          role="button"
                          tabIndex={0}
                          onClick={() => setLightboxState({ index: idx0, rangeStart, rangeEnd })}
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); setLightboxState({ index: idx0, rangeStart, rangeEnd }); } }}
                          aria-label="View full size"
                        >
                          <img src={pair[0].src} alt={pair[0].alt} loading="lazy" />
                          {pair[0].caption && <figcaption>{pair[0].caption}</figcaption>}
                        </figure>
                      );
                    return (
                      <div key={rowIndex} className="case-study-detail__gallery-group">
                        {label && <h3 className="case-study-detail__gallery-label"><span className="cursor-target">{label}</span></h3>}
                        {row}
                      </div>
                    );
                  });
                })()}
              </div>
              {carouselImages && carouselImages.length > 0 && (
                <div className="case-study-detail__carousel-group">
                  <h3 className="case-study-detail__gallery-label"><span className="cursor-target">DETAIL VIEW</span></h3>
                  <div className="case-study-detail__carousel-wrap">
                    <Carousel
                      items={carouselImages}
                      baseWidth={720}
                      autoplay={false}
                      pauseOnHover={true}
                      loop={true}
                      onImageClickExternal={(carouselIndex) =>
                        setLightboxState({
                          index: images.length + carouselIndex,
                          rangeStart: images.length,
                          rangeEnd: allImages.length - 1,
                        })
                      }
                    />
                  </div>
                </div>
              )}
            </section>
            </ScrollReveal>
          )
        )}

        {/* Video showcase */}
        {videoUrl?.trim() && (
          <ScrollReveal>
          <section className="case-study-detail__section case-study-detail__section--video">
            <h2 className="case-study-detail__section-title case-study-detail__section-title--centered"><span className="cursor-target">Video showcase</span></h2>
            <div className="case-study-detail__video-wrap">
              <iframe
                src={videoUrl.trim().startsWith('http') ? videoUrl.trim() : `https://www.youtube.com/embed/${videoUrl.trim()}`}
                title="Case study video"
                className="case-study-detail__video-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
          </ScrollReveal>
        )}

        {/* Results */}
        <ScrollReveal>
        <section className="case-study-detail__section">
          <h2 className="case-study-detail__section-title"><span className="cursor-target">Results</span></h2>
          <ul className="case-study-detail__results">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <footer className="case-study-detail__footer">
          <Link to="/" className="case-study-detail__back cursor-target">
            ← Back to home
          </Link>
        </footer>
        </ScrollReveal>
      </div>

      {createPortal(
        <AnimatePresence>
          {lightboxState !== null && allImages[lightboxState.index] && (
            <motion.div
              className="case-study-carousel-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Image full size view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightboxState(null)}
            >
              <button
                type="button"
                className="case-study-carousel-lightbox-close cursor-target"
                onClick={(e) => { e.stopPropagation(); setLightboxState(null); }}
                aria-label="Close"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <motion.div
                className="case-study-carousel-lightbox-content"
                key={lightboxState.index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="case-study-carousel-lightbox-image-wrap">
                  {lightboxState.rangeStart < lightboxState.rangeEnd && (
                    <>
                      {lightboxState.index > lightboxState.rangeStart && (
                        <button
                          type="button"
                          className="case-study-carousel-lightbox-nav case-study-carousel-lightbox-nav--prev cursor-target"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxState((s) => s ? { ...s, index: s.index - 1 } : null);
                          }}
                          aria-label="Previous image"
                        >
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      )}
                      {lightboxState.index < lightboxState.rangeEnd && (
                        <button
                          type="button"
                          className="case-study-carousel-lightbox-nav case-study-carousel-lightbox-nav--next cursor-target"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxState((s) => s ? { ...s, index: s.index + 1 } : null);
                          }}
                          aria-label="Next image"
                        >
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </>
                  )}
                  <img src={allImages[lightboxState.index].src} alt={allImages[lightboxState.index].alt ?? 'Full size'} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </article>
  );
};

export default CaseStudyDetail;

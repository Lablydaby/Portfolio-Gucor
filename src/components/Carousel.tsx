import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import './Carousel.css';

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

export type CarouselImageItem = {
  id: number | string;
  src: string;
  alt?: string;
};

function CarouselItem({
  item,
  index,
  itemWidth,
  itemHeight,
  trackItemOffset,
  x,
  transition,
  fullPage,
  onImageClick,
}: {
  item: CarouselImageItem;
  index: number;
  itemWidth: number;
  itemHeight: number | null;
  trackItemOffset: number;
  x: ReturnType<typeof useMotionValue<number>>;
  transition: object;
  fullPage: boolean;
  onImageClick?: (item: CarouselImageItem) => void;
}) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageClick?.(item);
  };

  return (
    <motion.div
      className={`carousel-item carousel-item--image ${fullPage ? 'carousel-item--fullpage' : ''}`}
      style={{
        width: itemWidth,
        ...(itemHeight !== null && { height: itemHeight }),
        rotateY,
      }}
      transition={transition}
    >
      <div
        className="carousel-item-image-wrap"
        role={onImageClick ? 'button' : undefined}
        tabIndex={onImageClick ? 0 : undefined}
        onClick={onImageClick ? handleClick : undefined}
        onKeyDown={onImageClick ? (e) => { if (e.key === 'Enter') { e.preventDefault(); onImageClick?.(item); } } : undefined}
        aria-label={onImageClick ? `View full size: ${item.alt ?? `Slide ${index + 1}`}` : undefined}
      >
        <img src={item.src} alt={item.alt ?? `Slide ${index + 1}`} loading="lazy" draggable={false} />
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items,
  baseWidth = 320,
  fullPage = false,
  defaultHeight,
  autoplay = false,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
  onImageClickExternal,
  hideIndicators = false,
}: {
  items: CarouselImageItem[];
  baseWidth?: number;
  fullPage?: boolean;
  /** Fixed height for carousel items when not fullPage (e.g. for image gallery) */
  defaultHeight?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  /** When set, image click reports index to parent instead of opening internal lightbox */
  onImageClickExternal?: (carouselIndex: number) => void;
  /** Hide the dot indicators below the carousel */
  hideIndicators?: boolean;
}) {
  const containerPadding = fullPage ? 24 : 16;
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemWidth =
    fullPage && containerWidth > 0
      ? containerWidth - containerPadding * 2
      : baseWidth - containerPadding * 2;
  const itemHeight = fullPage && viewportHeight > 0 ? viewportHeight * 0.85 : defaultHeight ?? null;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop || items.length === 0) return items;
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!fullPage) return;
    const updateSize = () => {
      setViewportHeight(window.innerHeight);
      if (containerRef.current) setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    if (containerRef.current) {
      const ro = new ResizeObserver(updateSize);
      ro.observe(containerRef.current);
      return () => {
        ro.disconnect();
        window.removeEventListener('resize', updateSize);
      };
    }
    return () => window.removeEventListener('resize', updateSize);
  }, [fullPage]);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;
    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => setIsAnimating(true);

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;
    if (position === lastCloneIndex) {
      setIsJumping(true);
      setPosition(1);
      x.set(-1 * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }
    if (position === 0) {
      setIsJumping(true);
      setPosition(items.length);
      x.set(-items.length * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }
    setIsAnimating(false);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;
    if (direction === 0) return;
    setPosition((prev) => {
      const next = prev + direction;
      return Math.max(0, Math.min(next, itemsForRender.length - 1));
    });
  };

  const goToPrev = () => {
    if (isAnimating || itemsForRender.length <= 1) return;
    if (position > 0) {
      setPosition(position - 1);
    } else if (loop) {
      setIsJumping(true);
      setPosition(items.length);
      x.set(-items.length * trackItemOffset);
      requestAnimationFrame(() => setIsJumping(false));
    }
  };

  const goToNext = () => {
    if (isAnimating || itemsForRender.length <= 1) return;
    if (position < itemsForRender.length - 1) {
      setPosition(position + 1);
    } else if (loop) {
      setIsJumping(true);
      setPosition(1);
      x.set(-1 * trackItemOffset);
      requestAnimationFrame(() => setIsJumping(false));
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  useEffect(() => {
    if (fullscreenIndex === null) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenIndex(null);
        return;
      }
      if (items.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setFullscreenIndex((i) => (i! - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setFullscreenIndex((i) => (i! + 1) % items.length);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [fullscreenIndex, items.length]);

  if (items.length === 0) return null;

  const ready = !fullPage || (containerWidth > 0 && viewportHeight > 0);

  return (
    <div
      ref={containerRef}
      className={`case-study-carousel-container ${fullPage ? 'case-study-carousel-container--fullpage' : ''} ${defaultHeight != null ? 'case-study-carousel-container--fixed-height' : ''}`}
      style={
        fullPage
          ? { width: '100%', minHeight: itemHeight ? itemHeight + 60 : 400 }
          : { width: '100%', maxWidth: baseWidth + 32, margin: '0 auto' }
      }
    >
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="case-study-carousel-arrow case-study-carousel-arrow--left cursor-target"
            onClick={goToPrev}
            disabled={!loop && position === 0}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="case-study-carousel-arrow case-study-carousel-arrow--right cursor-target"
            onClick={goToNext}
            disabled={!loop && position === itemsForRender.length - 1}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
      {ready && (
        <motion.div
          className="case-study-carousel-track"
          drag={isAnimating ? false : 'x'}
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${item.id}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              itemHeight={itemHeight}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
              fullPage={fullPage}
              onImageClick={onImageClickExternal ? () => onImageClickExternal(activeIndex) : () => setFullscreenIndex(activeIndex)}
            />
          ))}
        </motion.div>
      )}
      {!onImageClickExternal && createPortal(
        <AnimatePresence>
          {fullscreenIndex !== null && items[fullscreenIndex] && (
            <motion.div
              className="case-study-carousel-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Image full size view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setFullscreenIndex(null)}
            >
              <button
                type="button"
                className="case-study-carousel-lightbox-close cursor-target"
                onClick={(e) => { e.stopPropagation(); setFullscreenIndex(null); }}
                aria-label="Close"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <motion.div
                className="case-study-carousel-lightbox-content"
                key={fullscreenIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="case-study-carousel-lightbox-image-wrap">
                  {items.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="case-study-carousel-lightbox-nav case-study-carousel-lightbox-nav--prev cursor-target"
                        onClick={(e) => { e.stopPropagation(); setFullscreenIndex((fullscreenIndex - 1 + items.length) % items.length); }}
                        aria-label="Previous image"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="case-study-carousel-lightbox-nav case-study-carousel-lightbox-nav--next cursor-target"
                        onClick={(e) => { e.stopPropagation(); setFullscreenIndex((fullscreenIndex + 1) % items.length); }}
                        aria-label="Next image"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  <img src={items[fullscreenIndex].src} alt={items[fullscreenIndex].alt ?? 'Full size'} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      {!hideIndicators && (
        <div className="case-study-carousel-indicators">
          {items.map((_, index) => (
            <motion.button
              key={index}
              type="button"
              className={`case-study-carousel-indicator cursor-target ${activeIndex === index ? 'active' : 'inactive'}`}
              animate={{ scale: activeIndex === index ? 1.2 : 1 }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

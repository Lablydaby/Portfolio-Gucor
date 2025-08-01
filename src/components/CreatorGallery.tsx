import React, { CSSProperties, FC, ReactElement } from 'react';
import Lably1 from '../imgs/Lably1.jpg';
import Lably2 from '../imgs/Lably2.jpg';
import Lably3 from '../imgs/Lably3.jpg';

// Simple SVG blob shapes
const blobs: ReactElement[] = [
  //pdated Blob 0: Orange-Pink
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255, 105, 97, 0.16)', filter: 'blur(80px)' }} />,
  // Blob 1: Orange
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(253, 111, 0, 0.18)', filter: 'blur(150px)' }} />,
  // Blob 2: Yellow-Orange
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255, 184, 76, 0.15)', filter: 'blur(80px)' }} />,
  // Blob 3: Gold
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255, 215, 0, 0.13)', filter: 'blur(80px)' }} />,
];

const images = [Lably2,Lably1,Lably3];

type FloatingItem =
  | { type: 'blob'; content: ReactElement; style: CSSProperties; anim: string; size: { width: number; height: number } }
  | { type: 'image'; content: string; style: CSSProperties; anim: string; size: { width: number; height: number } };

const floatingItems: FloatingItem[] = [
  { type: 'blob', content: blobs[0], style: { top: '1%', left: '60%', transform: 'rotate(-18deg)' }, anim: 'float1', size: { width: 420, height: 350 } },
  { type: 'image', content: images[0], style: { top: '8%', right: '26%', transform: 'rotate(14deg)' }, anim: 'float2', size: { width: 300, height: 350 } },
  { type: 'blob', content: blobs[1], style: { top: '30%', left: '-10%', transform: 'rotate(8deg)' }, anim: 'float3', size: { width: 400, height: 480 } },
  // { type: 'blob', content: blobs[0], style: { top: '1%', left: '35%', transform: 'rotate(-18deg)' }, anim: 'float1', size: { width: 420, height: 350 } },
  { type: 'image', content: images[2], style: { bottom: '12%', right: '28%', transform: 'rotate(-12deg)' }, anim: 'float4', size: { width: 300, height: 350 } },
  { type: 'blob', content: blobs[2], style: { top: '70%', right: '18%', transform: 'rotate(-6deg)' }, anim: 'float5', size: { width: 500, height: 420 } },
  { type: 'image', content: images[1], style: { bottom: '25%', right: '12%', transform: 'rotate(10deg)' }, anim: 'float6', size: { width: 300, height: 350 } },
];

const floatKeyframes = `
@keyframes float1 { 0%{transform:translateY(0) rotate(-18deg);} 50%{transform:translateY(-24px) rotate(-18deg);} 100%{transform:translateY(0) rotate(-18deg);} }
@keyframes float2 { 0%{transform:translateY(0) rotate(12deg);} 50%{transform:translateY(18px) rotate(12deg);} 100%{transform:translateY(0) rotate(12deg);} }
@keyframes float3 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(-18px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
@keyframes float4 { 0%{transform:translateY(0) rotate(-10deg);} 50%{transform:translateY(20px) rotate(-10deg);} 100%{transform:translateY(0) rotate(-10deg);} }
@keyframes float5 { 0%{transform:translateY(0) rotate(-6deg);} 50%{transform:translateY(-16px) rotate(-6deg);} 100%{transform:translateY(0) rotate(-6deg);} }
@keyframes float6 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(22px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
`;

const CreatorGallery: FC = () => {
  return (
    <section id="creator-gallery" style={{ position: 'relative', minHeight: '100vh', background: '#8B8078', overflow: 'hidden', fontFamily: 'Quicksand, sans-serif' }}>
      <style>{floatKeyframes}</style>
      {/* Floating Blobs and Images */}
      {/* Render blobs first for background */}
      {floatingItems.filter(item => item.type === 'blob').map((item, idx) => (
        <div
          key={`blob-${idx}`}
          style={{
            position: 'absolute',
            width: item.size.width,
            height: item.size.height,
            ...item.style,
            zIndex: 1,
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${item.anim} ${5.5 + idx * 0.7}s ease-in-out infinite`,
            animationDelay: `${idx * 0.9 + (idx % 2 === 0 ? 0.2 : 0.5)}s`,
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>{item.content}</div>
        </div>
      ))}
      {/* Render images above blobs */}
      {floatingItems.filter(item => item.type === 'image').map((item, idx) => (
        <div
          key={`img-${idx}`}
          style={{
            position: 'absolute',
            width: item.size.width,
            height: item.size.height,
            ...item.style,
            zIndex: 2,
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${item.anim} ${5.5 + (idx + 3) * 0.7}s ease-in-out infinite`,
            animationDelay: `${(idx + 3) * 0.9 + ((idx + 3) % 2 === 0 ? 0.2 : 0.5)}s`,
          }}
        >
          {typeof item.content === 'string' ? (
            <img src={item.content} alt="gallery object" style={{ width: item.size.width, height: item.size.height, objectFit: 'cover', borderRadius: 32, background: '#E2CBAA' }} />
          ) : null}
        </div>
      ))}
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="creator-typography-grid">
          {['G','E','T',' ','T','O',' ','K','N','O','W',' ','M','E'].map((char, i) => (
            <span key={i} className={`creator-letter creator-letter-${i} ${char === ' ' ? 'creator-space' : ''}`}>{char}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorGallery; 
import React, { CSSProperties, ReactElement } from 'react';
import ProfileCard from './ProfileCard';
import SpotlightCard from './SpotlightCard';
import profileImage from '../imgs/profile.png';
import Lably1 from '../imgs/Lably1.jpg';
import './Profile.css';

// Simple SVG blob shapes
const blobs: ReactElement[] = [
  // Blob 0: Orange-Pink
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255, 105, 97, 0.16)', filter: 'blur(80px)' }} />,
  // Blob 1: Orange
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(253, 111, 0, 0.18)', filter: 'blur(150px)' }} />,
  // Blob 2: Yellow-Orange
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255, 184, 76, 0.15)', filter: 'blur(80px)' }} />,
  // Blob 3: Gold
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255, 215, 0, 0.13)', filter: 'blur(80px)' }} />,
];

type FloatingBlob = {
  type: 'blob';
  content: ReactElement;
  style: CSSProperties;
  anim: string;
  size: { width: number; height: number };
};

const floatingBlobs: FloatingBlob[] = [
  { type: 'blob', content: blobs[0], style: { top: '1%', left: '60%', transform: 'rotate(-18deg)' }, anim: 'float1', size: { width: 420, height: 350 } },
  { type: 'blob', content: blobs[1], style: { top: '30%', left: '-10%', transform: 'rotate(8deg)' }, anim: 'float3', size: { width: 400, height: 480 } },
  { type: 'blob', content: blobs[2], style: { top: '70%', right: '18%', transform: 'rotate(-6deg)' }, anim: 'float5', size: { width: 500, height: 420 } },
];

const floatKeyframes = `
@keyframes float1 { 0%{transform:translateY(0) rotate(-18deg);} 50%{transform:translateY(-24px) rotate(-18deg);} 100%{transform:translateY(0) rotate(-18deg);} }
@keyframes float3 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(-18px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
@keyframes float5 { 0%{transform:translateY(0) rotate(-6deg);} 50%{transform:translateY(-16px) rotate(-6deg);} 100%{transform:translateY(0) rotate(-6deg);} }
`;

const Profile: React.FC = () => {
  return (
    <section id="profile" className="profile-section" style={{ position: 'relative', minHeight: '100vh', background: '#181818', overflow: 'hidden', fontFamily: 'Figtree, sans-serif' }}>
      <style>{floatKeyframes}</style>
      {/* Floating Blobs */}
      {floatingBlobs.map((item, idx) => (
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
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <SpotlightCard spotlightColor="rgba(253, 111, 0, 0.2)">
              <h3 className="text-2xl font-medium text-white tracking-wide mb-4">
                The Artist Behind the Code
              </h3>
              <p className="about-description text-lg text-white leading-relaxed font-light">
                I'm a developer and designer with over 5 years of experience in UI/UX and graphic design. I blend aesthetics with functionality—crafting interfaces that look good, feel intuitive, and solve real problems.
              </p>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(253, 111, 0, 0.2)">
              <h3 className="text-2xl font-medium text-white tracking-wide mb-4">
                Design Philosophy
              </h3>
              <p className="about-description text-lg text-white leading-relaxed font-light">
                I design with intention: understand the challenge, know the users, and iterate with purpose. Every solution is human-centered, tested, and refined to create experiences that are aligned, intuitive, and genuinely useful.
              </p>
            </SpotlightCard>

            {/* Signature */}
            <div className="mt-10">
              <span className="block text-3xl font-signature text-white tracking-widest">— Lovely</span>
            </div>
          </div>
          
          {/* Right Column - Profile Card */}
          <div className="space-y-12">
            <div className="flex justify-center items-center">
              <ProfileCard
                name="Lovely Shane Gucor"
                title="Software Engineer"
                handle="lably"
                status="Online"
                contactText="Contact Me"
                avatarUrl={profileImage}
                miniAvatarUrl={Lably1}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  // Scroll to contact section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;


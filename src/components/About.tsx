import React from 'react';
import { SiReact, SiTypescript, SiTailwindcss, SiFigma, SiGithub, SiHtml5, SiCss3, SiCanva } from 'react-icons/si';
import type { IconType } from 'react-icons';
import ProfileCard from './ProfileCard';
import LogoLoop from './LogoLoop';
import type { LogoItem } from './LogoLoop';
import profileImage from '../imgs/profile.png';
import Lably1 from '../imgs/Lably1.jpg';
import './About.css';

/** Renders a react-icons IconType as a ReactElement for use with createElement (avoids IconType/ReactNode strict typing). */
function iconNode(Icon: IconType): React.ReactNode {
  return React.createElement(Icon as React.ComponentType<Record<string, unknown>>);
}

const techLogos: LogoItem[] = [
  { node: iconNode(SiReact), title: 'React', href: 'https://react.dev' },
  { node: iconNode(SiTypescript), title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: iconNode(SiTailwindcss), title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: iconNode(SiHtml5), title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: iconNode(SiCss3), title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: iconNode(SiFigma), title: 'Figma', href: 'https://figma.com' },
  { node: iconNode(SiGithub), title: 'GitHub', href: 'https://github.com' },
  { node: iconNode(SiCanva), title: 'Canva', href: 'https://canva.com' },
];

const About: React.FC = () => (
  <section id="about" className="py-32 sm:py-16 relative overflow-hidden" style={{ fontFamily: 'Figtree, sans-serif', backgroundColor: 'transparent', color: '#fff' }}>
    {/* Multiple Scattered Gray Blobs Background */}
    <div className="absolute inset-0 -z-10">
      <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#6B7280" />
          </linearGradient>
          <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
        </defs>

        Blob 1 - Upper Left Corner (Aesthetic Organic Shape)
        <path fill="url(#blob1)" fillOpacity="0.08" d="M-220,100Q-165,45,-110,150Q-55,255,0,110Q55,-35,110,130Q165,295,220,90Q165,-15,110,170Q55,355,0,190Q-55,25,-110,210Q-165,395,-220,150Q-165,5,-220,100Z">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M-220,100Q-165,45,-110,150Q-55,255,0,110Q55,-35,110,130Q165,295,220,90Q165,-15,110,170Q55,355,0,190Q-55,25,-110,210Q-165,395,-220,150Q-165,5,-220,100Z;
                    M-220,150Q-165,95,-110,200Q-55,305,0,160Q55,15,110,180Q165,345,220,140Q165,30,110,220Q55,405,0,240Q-55,75,-110,260Q-165,445,-220,200Q-165,55,-220,150Z;
                    M-220,100Q-165,45,-110,150Q-55,255,0,110Q55,-35,110,130Q165,295,220,90Q165,-15,110,170Q55,355,0,190Q-55,25,-110,210Q-165,395,-220,150Q-165,5,-220,100Z" />
        </path>

        {/* Blob 2 - Lower Right Corner (Aesthetic Flowing Shape) */}
        <path fill="url(#blob2)" fillOpacity="0.12" d="M600,400Q800,300,900,500Q1000,700,800,700Q600,700,500,500Q400,300,600,400Z">
          <animate attributeName="d" dur="10s" repeatCount="indefinite"
            values="M600,400Q800,300,900,500Q1000,700,800,700Q600,700,500,500Q400,300,600,400Z;
                    M600,450Q800,350,900,550Q1000,750,800,750Q600,750,500,550Q400,350,600,450Z;
                    M600,400Q800,300,900,500Q1000,700,800,700Q600,700,500,500Q400,300,600,400Z" />
        </path>
      </svg>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 about-inner">
      <div className="flex flex-col items-center mb-20">
        <h2 className="section-title cursor-target" style={{ color: '#fff'}}>
          <strong>
            <span className="title-highlight">A</span>BOUT
          </strong>
        </h2>
        <div className="flex justify-center items-center">
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 items-start">
        {/* Left Column - Text Content (from Profile + About) */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-white tracking-wide mb-4">
              The Artist Behind the Code
            </h3>
            <p className="about-description text-lg text-white leading-relaxed font-light">
              Hey, I'm Lovely — a Designer-Developer blending code and creativity. With over 5 years of experience in UI/UX and graphic design, I craft clean, intuitive, and purposeful digital experiences that don't just look good, but solve real problems and feel human.
            </p>
          </div>

          {/* Technical Palette - logo loop */}
          <div className="mt-10 about-tech-loop">
            <h3 className="text-2xl font-medium text-white tracking-wide mb-4">
              Technical Palette
            </h3>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={48}
                gap={48}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#1E1E1E"
                ariaLabel="Technology stack"
              />
            </div>
            <div className="flex justify-start items-center mt-15">
              <a 
                href="/Resume_Gucor.pdf" 
                download
                className="group cursor-target px-6 py-3 border-2 inline-flex items-center justify-center transition-all duration-500"
                style={{
                  backgroundColor: '#FD6F00',
                  color: '#fff',
                  borderColor: '#FD6F00',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  fontSize: '1rem',
                  borderRadius: '20px',
                  width: 'fit-content',
                }}
              >
                <span className="font-bold">DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="space-y-12">
          <div className="flex justify-center items-center">
            <ProfileCard
              name="Lovely"
              title="UI/UX Designer"
              handle="lably"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileImage}
              miniAvatarUrl={Lably1}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
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

export default About;
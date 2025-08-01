import React, { useState, useEffect, useRef } from 'react';

// Project thumbnails
import simplyfiImage from '../imgs/simplyfi.png';
import aiImage from '../imgs/ai.png';
import pathfinderImage from '../imgs/pathviz.png';
import blogImage from '../imgs/blog.png';
import datastructarImage from '../imgs/datastructar.jpg';
import babyImage from '../imgs/baby.png';
import baby1 from '../imgs/baby1.png';
import honeyImage from '../imgs/honey.png';
import uppaImage from '../imgs/uppa.png';
import gameImage from '../imgs/game.png';
import smImage from '../imgs/sm.png';
import lechownImage from '../imgs/lechown.png';
import logoImage from '../imgs/logo.png';

// Project gallery images
import blog1 from '../imgs/blog1.png';
import blog2 from '../imgs/blog2.png';
import blog3 from '../imgs/blog3.png';
import ai1 from '../imgs/ai1.png';
import ai2 from '../imgs/ai2.png';
import ai3 from '../imgs/ai3.png';
import simplyfi1 from '../imgs/simplyfi1.png';
import simplyfi2 from '../imgs/simplyfi2.png';
import simplyfi3 from '../imgs/simplyfi3.png';
import honey1 from '../imgs/honey1.png';
import honey2 from '../imgs/honey2.png';
import ar1 from '../imgs/ar1.jpg';
import ar2 from '../imgs/ar2.jpg';
import ar3 from '../imgs/ar3.jpg';
import ar4 from '../imgs/ar4.jpg';
import ar5 from '../imgs/ar5.jpg';
import uppa1 from '../imgs/uppa1.png';
import uppa2 from '../imgs/uppa2.png';
import uppa3 from '../imgs/uppa3.png';
import uppa4 from '../imgs/uppa4.png';
import game1 from '../imgs/game1.png';
import game2 from '../imgs/game2.png';
import game3 from '../imgs/game3.png';
import game4 from '../imgs/game4.png';
import sm2 from '../imgs/sm2.png';
import sm3 from '../imgs/sm3.png';
import sm4 from '../imgs/sm4.png';
import sm5 from '../imgs/sm5.png';
import sm6 from '../imgs/sm6.png';
import sm7 from '../imgs/sm7.png';
import sm8 from '../imgs/sm8.png';
import sm9 from '../imgs/sm9.png';
import sm10 from '../imgs/sm10.png';
import sm11 from '../imgs/sm11.png';
import lechown1 from '../imgs/lechown1.png';
import lechown2 from '../imgs/lechown2.png';
import logo1 from '../imgs/logo1.png';
import logo2 from '../imgs/logo2.png';
import logo3 from '../imgs/logo3.png';
import pathviz from '../imgs/pathviz.png';

interface Project {
  title: string;
  description: string;
  image: string;
  gallery: string[];
  link: string;
  technologies: string[];
  category: string;
  featured: boolean;
  role: string;
}

const projects: Project[] = [
  {
    title: 'AI Think So!',
    description: 'Host a Quiz lets you generate smart, topic-based quizzes in seconds using AI. Whether testing knowledge, hosting a trivia night, or just having fun, this tool makes it effortless to create, share, and play quizzes with anyone, anywhere.',
    image: aiImage,
    gallery: [ai1, ai2, ai3],
    link: 'https://one26finalproj-nhp7.onrender.com/?fbclid=IwY2xjawL5VSNleHRuA2FlbQIxMABicmlkETFFZnJmWjlYUWRnektuNUQ2AR7S5i6qbytrAn6z2mUyq5oWVdNN_uPNKqd8Grn2CFvQ99p4V5eupYufudACew_aem_paV2kYuu8D_EOsbYItVGiA er.com',
    technologies: ['Django', 'React', 'Tailwind CSS'],
    category: 'Website',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'DatastructAR',
    description: 'DataStructAR is a marker-based augmented reality learning app that uses interactive 3D models to visualize and manipulate data structures like arrays, linked lists, stacks, and queues. Designed for Android, it supports hands-on, visual learning to make complex computer science concepts easier to understand.',
    image: datastructarImage,
    gallery: [ar1, ar2, ar3, ar4, ar5],
    link: 'https://github.com/nikkamendoza/ExerGuide',
    technologies: ['Unity', 'Vuforia', 'C#', 'Blender'],
    category: 'Mobile App',
    featured: false,
    role: 'Full Stack Developer'
  },
  {
    title: 'Cybersecurity',
    description: 'This website is an educational cybersecurity platform designed to teach users how to identify and protect against phishing attacks. Through interactive simulations and real-world examples, users learn to spot malicious emails, fake websites, and other social engineering tactics.',
    image: blogImage,
    gallery: [blog1, blog2, blog3],
    link: 'https://one34-cybersecurity-blog.onrender.com/',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'PathViz',
    description: 'A web-based tool that visually demonstrates how Dijkstra Algorithm and A Search find the shortest path between two points on a customizable grid.',
    image: pathfinderImage,
    gallery: [pathviz],
    link: 'https://indiv-labs.vercel.app',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'SimplyFi',
    description: 'SimplyFi is a budgeting dashboard that helps users manage income and expenses with AI-generated financial insights. It features responsive design and real-time data visualization.',
    image: simplyfiImage,
    gallery: [simplyfi1, simplyfi2, simplyfi3],
    link: 'https://github.com/Fake1prog/CMSC-126_Long-Exam-2_Personal-Budget-Tracker?fbclid=IwY2xjawL5XFJleHRuA2FlbQIxMABicmlkETFFZnJmWjlYUWRnektuNUQ2AR5qfpPWIrLSwtkLb7ChspfHHYs7oMMChSOahEEZE8laU1XqaUOdQ8UC0R6e_Q_aem_nDPgvlda1ZWnEAKK8YAqVg',
    technologies: ['Django', 'JavaScript', 'Tailwind CSS'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'Honey OS',
    description: 'Honey OS is a desktop interface concept featuring voice command integration and basic file management utilities like a notepad, with the goal of simplifying everyday computing tasks.',
    image: honeyImage,
    gallery: [honey1,honey2],
    link: '#',
    technologies: ['Java', 'NetBeans'],
    category: 'Web App',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'Baby IDE',
    description: 'A custom integrated development environment tailored for the Sisiw programming language, complete with run, compile, file I/O features, and syntax highlighting.',
    image: babyImage,
    gallery: [baby1],
    link: '#',
    technologies: ['Java', 'NetBeans'],
    category: 'Web App',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },

  {
    title: '1081',
    description: 'A top-down educational stealth game set in Cebu, Philippines during Former President Ferdinand Marcos Sr. regime.',
    image: gameImage,
    gallery: [game1,game2,game3,game4],
    link: 'https://liaminaki.itch.io/1081?fbclid=IwY2xjawL5ZDhleHRuA2FlbQIxMABicmlkETFFZnJmWjlYUWRnektuNUQ2AR6sKPpTwmp_3qV0lcG7OqBozjotC7uI-eFLxFY0q2nuUInHjdfl7TYN6QVIXA_aem__ySgjnmbprLdKZnUBaosRg',
    technologies: ['Unity'],
    category: 'Web App',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },

  {
    title: 'Uppa',
    description: 'Uppa is a location-based mobile app that connects renters with nearby accommodations—boarding houses, apartments, and condos—making it easy to find and manage rentals. Landlords benefit from organized property management and marketing tools.',
    image: uppaImage,
    gallery: [uppa1, uppa2, uppa3, uppa4],
    link: 'https://www.figma.com/design/pyQu6tbID1cLzZuaLdq9Cy/UPPA?node-id=0-1&p=f&t=7HOfgVNloKhwxqe0-0',
    technologies: ['Figma'],
    category: 'Mobile App',
    featured: true,
    role: 'UI/UX Designer'
  },
  // Graphic Design Projects
  {
    title: 'Social Media Campaign',
    description: 'A comprehensive social media campaign featuring engaging posts, stories, and carousel designs for brand awareness and audience engagement. Includes platform-specific optimizations for Instagram, Facebook, and Twitter.',
    image: smImage,
    gallery: [sm2,sm3,sm4,sm5,sm6,sm7,sm8,sm9,sm10,sm11],
    link: '#',
    technologies: ['Adobe Photoshop', 'Canva', 'Illustrator'],
    category: 'Graphic Design',
    featured: false,
    role: 'Graphic Designer'
  },
  {
    title: 'Gaming Visual Assets',
    description: 'A collection of gaming-related graphic designs including character concepts, UI elements and game interface mockups. Features vibrant colors and dynamic compositions.',
    image: lechownImage,
    gallery:[lechown1,lechown2],
    link: 'https://github.com/liaminaki/lechown',
    technologies: ['Adobe Photoshop', 'Illustrator', 'Procreate'],
    category: 'Graphic Design',
    featured: false,
    role: 'Game Artist'
  },
  {
    title: 'Logo Design Portfolio',
    description: 'A diverse collection of logo designs for various industries. Each logo is crafted with attention to scalability, memorability, and brand identity.',
    image: logoImage,
    gallery: [logo1,logo2,logo3],
    link: '#',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    category: 'Graphic Design',
    featured: false,
    role: 'Logo Designer'
  },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(null);

  // Determine number of pages (2 for most, 3 for ExerGuide AR)
  const isAR = selectedProject?.title === 'DatastructAR';
  const totalPages = isAR ? 3 : 2;

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleImageClick = (index: number) => {
    setPreviewImageIndex(index);
  };

  const closeImagePreview = () => {
    setPreviewImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedProject && previewImageIndex !== null) {
      setPreviewImageIndex((previewImageIndex + 1) % selectedProject.gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && previewImageIndex !== null) {
      setPreviewImageIndex((previewImageIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <div className="projects-and-featured-wrapper">
      <div className="projects-bg-art">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
      </div>

      <section
        ref={sectionRef}
        id="projects"
        className="projects-section"
      >
        <div className="projects-container">
          <div className="projects-header">
          <h2 className="projects-title">
          <strong>
            <span className="title-highlight">P</span>ROJECT <span className="title-highlight">G</span>ALLERY
          </strong>
        </h2>
            <p className="projects-subtitle">
              A collection of creative digital experiences that showcase the intersection of art and technology
            </p>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="card-overlay"></div>

                <div className="card-content">
                  <div className="card-title-container">
                    <h3 className="project-title-text">{project.title}</h3>
                    <p className="project-category-text">{project.category}</p>
                  </div>

                  <div className="card-hover-content">
                    <p className="project-description-text">{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Project</span>
                      <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div
            className="modal-backdrop"
            onClick={closeModal}
          >
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
              style={{ fontFamily: "'Cutive Mono', 'Courier New', monospace" }}
            >
              <button onClick={closeModal} className="modal-close-button">
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="modal-page-container">
                <div className={`modal-page ${currentPage === 0 ? 'visible' : ''}`}> {/* Frontpage */}
                  <span className="modal-project-category">{selectedProject.category}</span>
                  <h2 className="modal-project-title">{selectedProject.title}</h2>
                  <div style={{ margin: '0 0 0.5rem 0', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-website-link modal-link-small">
                      <span>{selectedProject.title === 'Uppa' ? 'Visit Design' : selectedProject.title === 'ExerGuide AR' ? 'GitHub Link' : 'Visit Website'}</span>
                      <svg style={{marginLeft: '0.3em', width: '1.1em', height: '1.1em', verticalAlign: 'middle', opacity: 0.8}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
                        <path d="M10 14L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 4h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    {selectedProject.title === 'ExerGuide AR' && (
                      <a href="https://drive.google.com/drive/u/0/folders/1xQN5uzOku0qNGzQwqFNX_hSV_-TypQfD" target="_blank" rel="noopener noreferrer" className="modal-website-link modal-link-small">
                        <span>APK Link</span>
                        <svg style={{marginLeft: '0.3em', width: '1.1em', height: '1.1em', verticalAlign: 'middle', opacity: 0.8}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
                          <path d="M10 14L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 4h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="modal-divider"></div>
                  <p className="modal-project-description">{selectedProject.description}</p>
                  <div className="modal-role-section">
                    <span className="modal-role-title">Role</span>
                    <div className="modal-tag-list">
                      {selectedProject.role.split(',').map(role => (
                        <span key={role.trim()} className="modal-tag">{role.trim()}</span>
                      ))}
                    </div>
                  </div>
                  <h4 className="modal-tech-title">Technologies Used</h4>
                  <div className="modal-tag-list">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="modal-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className={`modal-page ${currentPage === 1 ? 'visible' : ''}`}> {/* Gallery */}
                  <h2 className="modal-gallery-title">Image Gallery</h2>
                  {selectedProject.gallery.length > 1 ? (
                    <div className="modal-image-grid">
                      {selectedProject.gallery.map((img, index) => (
                        <div key={index} className="modal-image-container" onClick={() => handleImageClick(index)}>
                          <img src={img} alt={`${selectedProject.title} gallery image ${index + 1}`} className="modal-gallery-image" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="modal-single-image-container" onClick={() => handleImageClick(0)}>
                      <img src={selectedProject.gallery[0]} alt={`${selectedProject.title} gallery image 1`} className="modal-single-image" />
                    </div>
                  )}
                </div>

                {/* AR Video Page */}
                {isAR && (
                  <div className={`modal-page ${currentPage === 2 ? 'visible' : ''}`}> {/* Video */}
                    <h2 className="modal-gallery-title">Demo Video</h2>
                    <div className="featured-video-wrapper" style={{marginTop: '2rem'}}>
                      <iframe
                        className="featured-video"
                        src="https://www.youtube.com/embed/GwXIXIdi_8E"
                        title="DatastructAR Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer" style={{justifyContent: 'center', gap: '1.5rem'}}>
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="modal-nav-btn-modern"
                    aria-label="Previous"
                  >
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <div className="modal-page-pill">Page {currentPage + 1} of {totalPages}</div>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                    className="modal-nav-btn-modern"
                    aria-label="Next"
                  >
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                  </button>
              </div>
            </div>
          </div>
        )}

        {previewImageIndex !== null && selectedProject && (
          <div className="image-preview-backdrop" onClick={closeImagePreview}>
            <button className="image-preview-close" onClick={closeImagePreview} aria-label="Close">
              <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button className="image-preview-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
              <svg width="2em" height="2em" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedProject.gallery[previewImageIndex]}
                alt={`${selectedProject.title} preview ${previewImageIndex + 1}`}
                className="image-preview-large"
              />
            </div>

            <button className="image-preview-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
              <svg width="2em" height="2em" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <h3 className="featured-title-v2 text-center" style={{ fontWeight: 500 }}>
        FEATURED SHOWCASE
      </h3>

      <section className="featured-section">
        <div className="featured-container artistic" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', justifyContent: 'center'}}>
            <div className="featured-video-card-v2">
              <iframe
                src="https://www.youtube.com/embed/GwXIXIdi_8E"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          <div className="featured-column-right" style={{flex: '2 1 320px', minWidth: '280px', maxWidth: '600px', margin: '0 auto'}}>
            <div className="featured-details-v2">
              <h3 className="featured-details-title-v2" style={{ fontWeight: 450 }}>DatastructAR: Data Structures Education through an Augmented Reality Application
              </h3>
              <p className="featured-details-text-v2">
              An AR-powered learning tool for CS students. Data structures come to life through interactive 3D visualizations.
              </p>
              <ul className="featured-details-list-v2">
                <li>- Real-time AR manipulation of data structures</li>
                <li>- Interactive 3D models for active learning</li>
                <li>- Supports arrays, linked lists, stacks, and queues</li>
                <li>- Grounded in Constructivist Learning Theory and TAM</li>
              </ul>
            </div>
          </div>

          <div className="featured-video-card-v2">
              <iframe
                src="https://www.youtube.com/embed/fqfxjSRFJx0"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          <div className="featured-column-right" style={{flex: '2 1 320px', minWidth: '280px', maxWidth: '600px', margin: '0 auto'}}>
            <div className="featured-details-v2">
              <h3 className="featured-details-title-v2" style={{ fontWeight: 450 }}> 1081
              </h3>
              <p className="featured-details-text-v2">
              A top-down educational stealth game set in Cebu, Philippines during  Former President Ferdinand Marcos Sr.'s regime. Players, as student activists, evade military forces, save key figures, and restore democracy, blending stealth gameplay with historical education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 
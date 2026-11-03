import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JarvisNeuralMind from './components/JarvisNeuralMind';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import WorkProcess from './components/WorkProcess';
import EducationSkills from './components/EducationSkills';
import PresidentFeature from './components/PresidentFeature';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PhotoLightbox from './components/PhotoLightbox';
import CustomCursor from './components/CustomCursor';
import ThemeFontCustomizer from './components/ThemeFontCustomizer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '', caption: '' });

  const handleOpenLightbox = (src, caption) => {
    setLightboxData({ isOpen: true, src: src || '', caption: caption || '' });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, src: '', caption: '' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-[#D71930] selection:text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-x-hidden">
      {/* Custom Trailing Glow Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Typography & Theme Preset Customizer */}
      <ThemeFontCustomizer />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section with Giant SOFTWARE DEVELOPER typography and Ansh Dubey portrait */}
        <Hero onOpenLightbox={handleOpenLightbox} />

        {/* JARVIS Neural Mind & Interactive Cognitive Game */}
        <JarvisNeuralMind onOpenLightbox={handleOpenLightbox} />

        {/* Selected Projects Showcase (Matching 3-column reference + Deep dive specs) */}
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)} 
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Professional Experience (Career progression: SDE Intern ➔ Full-time SDE at CONORG + PESA Project) */}
        <Experience onOpenLightbox={handleOpenLightbox} />

        {/* Work Process (Vertical 5-Step timeline + Crimson Quote Card) */}
        <WorkProcess />

        {/* Education & Technical Skills (Split layout matching reference + Verified Certificates) */}
        <EducationSkills onOpenLightbox={handleOpenLightbox} />

        {/* College President & Institutional Leadership Spotlight (SVPC Diploma CSE + IAS Madan Vibhishan Nagargoje Award) */}
        <PresidentFeature onOpenLightbox={handleOpenLightbox} />

        {/* Contact & 3D Laptop Workspace Showcase */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* Archival Photo Lightbox Modal */}
      {lightboxData.isOpen && (
        <PhotoLightbox
          imageSrc={lightboxData.src}
          caption={lightboxData.caption}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}

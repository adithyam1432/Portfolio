import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Code-split modals loaded on-demand to reduce initial JavaScript execution bundle
const ProjectModal = lazy(() => import('./components/ProjectModal').then(module => ({ default: module.ProjectModal })));
const ResumeModal = lazy(() => import('./components/ResumeModal').then(module => ({ default: module.ResumeModal })));

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // ScrollSpy to update active section in navbar
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];
          const scrollPosition = window.scrollY + 200;

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col text-[#0F172A] selection:bg-[#0F766E]/20 selection:text-[#0F766E]">
      
      {/* Ambient Liquid Fluid Mesh Canvas */}
      <div className="liquid-mesh-canvas" aria-hidden="true">
        <div className="liquid-orb liquid-orb-1" />
        <div className="liquid-orb liquid-orb-2" />
        <div className="liquid-orb liquid-orb-3" />
        <div className="liquid-orb liquid-orb-4" />
        <div className="liquid-orb liquid-orb-5" />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Sticky Navigation Header */}
        <Navbar
          activeSection={activeSection}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Achievements />
        <Education />
        <ResumeCTA onOpenResumeModal={() => setResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      </div>

      {/* Interactive Modals (Lazy-loaded chunks deferred until user interaction) */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {resumeModalOpen && (
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />
        )}
      </Suspense>

    </div>
  );
}

export default App;

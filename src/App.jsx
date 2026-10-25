import React, { useState, useEffect } from 'react';
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
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // ScrollSpy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;

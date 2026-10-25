import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ activeSection, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', num: '01' },
    { id: 'skills', label: 'Skills', num: '02' },
    { id: 'projects', label: 'Projects', num: '03' },
    { id: 'experience', label: 'Experience', num: '04' },
    { id: 'achievements', label: 'Achievements', num: '05' },
    { id: 'education', label: 'Education', num: '06' },
    { id: 'contact', label: 'Contact', num: '07' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F766E] focus:text-white focus:rounded-lg focus:shadow-xl focus:font-semibold focus:text-xs"
      >
        Skip to main content
      </a>

      <header
        className={`liquid-glass-nav transition-all duration-300 ${
          isScrolled
            ? 'is-scrolled py-2 sm:py-2.5'
            : 'py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-slate-900 transition-all"
            aria-label="Adithya Menashinakai Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm group-hover:bg-[#0F766E] group-hover:scale-105 transition-all">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 tracking-tight group-hover:text-[#0F766E] transition-colors">
                {portfolioData.personal.displayName}
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase hidden xs:inline-block">
                Frontend & Software
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Desktop Primary Navigation" className="hidden md:flex items-center gap-1 liquid-glass-nav-pill p-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-teal-400' : 'text-slate-400'}`}>
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800 liquid-glass-nav-pill hover:bg-white/70 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Preview Resume</span>
            </button>

            <a
              href={portfolioData.personal.resumePdf}
              download="Adithya_Menashinakai_Resume.pdf"
              aria-label="Download resume PDF - Adithya Menashinakai"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0F766E] hover:bg-teal-700 shadow-sm transition-all hover:shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 bg-white border border-slate-200 shadow-2xs hover:bg-slate-100"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Over Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-nav-drawer" className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-2xl border-b border-white/60 shadow-2xl p-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'liquid-glass-pill text-slate-700 hover:text-slate-950 hover:bg-white'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-teal-500">{item.num}</span>
                    <span className="font-bold">{item.label}</span>
                    <span>→</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                aria-label="Preview Resume Online in interactive modal"
                className="w-full py-2.5 px-4 liquid-glass-pill text-slate-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:text-slate-950 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#0F766E]" />
                Preview Resume Online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

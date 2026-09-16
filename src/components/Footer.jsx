import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-slate-200/80 py-12 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Title */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
              AM
            </span>
            <div>
              <p className="font-heading font-bold text-slate-900 text-sm">
                {portfolioData.personal.name}
              </p>
              <p className="text-slate-500 font-mono text-[11px]">
                {portfolioData.personal.title}
              </p>
            </div>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-[#0F766E] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-100 hover:border-slate-300 transition-all shadow-2xs"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Adithya Ashok Menashinakai. All rights reserved.
          </div>
          <div>
            Built with React, Vite & Tailwind CSS • Deployable on GitHub Pages
          </div>
        </div>

      </div>
    </footer>
  );
};

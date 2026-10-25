import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-slate-200/60 py-12 text-slate-600 text-xs backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Title */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
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
          <div className="flex items-center gap-3 text-slate-600">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl liquid-glass-pill hover:text-slate-950 transition-colors"
              aria-label="GitHub Profile - Adithya Menashinakai (opens in new tab)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl liquid-glass-pill hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn Profile - Adithya Menashinakai (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-xl liquid-glass-pill hover:text-[#0F766E] transition-colors"
              aria-label="Send email to Adithya Menashinakai"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl liquid-glass-pill text-slate-700 font-medium hover:text-slate-950 hover:border-teal-500/40 transition-all shadow-xs"
            aria-label="Back to Top — Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Adithya Ashok Menashinakai. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

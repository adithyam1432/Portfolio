import React from 'react';
import { Download, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeCTA = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section className="py-16 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="liquid-glass-dark rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-200 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <FileText className="w-3.5 h-3.5 text-teal-300" />
              <span>Recruiter Resource</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to Review Full Resume & Credential Verification?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Download the official, single-source PDF resume containing full academic history, enterprise SQL & AWS analytics internship details, and technical stack matrix.
            </p>

            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-mono text-slate-200">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                Format: Clean PDF (227 KB)
              </span>
              <span>•</span>
              <span>Updated September 2026</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            
            <a
              href={personal.resumePdf}
              download="Adithya_Menashinakai_Resume.pdf"
              aria-label="Download Adithya Menashinakai's PDF Resume"
              className="px-6 py-3.5 rounded-xl bg-[#0F766E] text-white font-semibold text-sm hover:bg-teal-600 transition-all flex items-center justify-center gap-2.5 shadow-lg focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              aria-label="Preview resume online in interactive modal"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-teal-300" />
              <span>Preview Online</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

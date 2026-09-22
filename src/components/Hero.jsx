import React from 'react';
import { Mail, Linkedin, Github, Download, ArrowDown, MapPin, CheckCircle2, FileText, ExternalLink, Sparkles, Database, Code, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]">
      
      {/* Background Decorative Accent Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Index Tag & Pulsing Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white font-mono text-[11px] font-bold tracking-widest uppercase shadow-xs">
                00 / PORTFOLIO
              </span>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold shadow-2xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0F766E]"></span>
                </span>
                <span>{personal.availability}</span>
              </div>
            </div>

            {/* Name & Role */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                {personal.name}
              </h1>
              <div className="flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-mono font-bold text-[#0F766E]">
                <Code className="w-5 h-5 text-[#0F766E] shrink-0" />
                <span>{personal.title}</span>
              </div>
            </div>

            {/* Concise Recruiter Value Proposition */}
            <div className="space-y-2">
              <p className="text-[#0F766E] font-semibold text-sm sm:text-base font-mono">
                {personal.greeting}
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                {personal.summary}
              </p>
            </div>

            {/* Recruiter Quick Info Grid */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium pt-1">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#0F766E]" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-2xs font-mono">
                <Mail className="w-4 h-4 text-[#0F766E]" />
                <a href={`mailto:${personal.email}`} className="hover:underline hover:text-[#0F766E] transition-colors">
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={personal.resumePdf}
                download="Adithya_Menashinakai_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-[#0F766E] transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-slate-900 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4 text-[#0F766E]" />
                <span>Online Resume Preview</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-bold font-mono text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Social Proof Links */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Connect:</span>
              
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all shadow-2xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:border-slate-900 hover:text-slate-900 transition-all shadow-2xs"
              >
                <Github className="w-3.5 h-3.5 text-slate-900" />
                <span>GitHub Repos</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo Card with Floating Tech Pills */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Floating Pill Top Right */}
              <div className="absolute -top-4 -right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md flex items-center gap-2 text-xs font-mono font-bold text-slate-800 animate-bounce duration-1000">
                <Database className="w-4 h-4 text-[#0F766E]" />
                <span>Oracle SQL & AWS S3</span>
              </div>

              {/* Floating Pill Bottom Left */}
              <div className="absolute -bottom-4 -left-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md flex items-center gap-2 text-xs font-mono font-bold text-slate-800">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Pandas & Power BI</span>
              </div>

              {/* Profile Image Container */}
              <div className="relative bg-white p-3.5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-100 border border-slate-200/80">
                  <img
                    src={personal.profilePhoto}
                    onError={(e) => {
                      if (!e.target.dataset.fallbackTried) {
                        e.target.dataset.fallbackTried = 'true';
                        e.target.src = './assets/profile.jpg';
                      }
                    }}
                    alt="Adithya Ashok Menashinakai Profile Photo"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 flex flex-col justify-end text-white">
                    <p className="font-heading font-extrabold text-base tracking-wide">
                      Adithya Menashinakai
                    </p>
                    <p className="text-xs text-slate-300 font-mono">
                      MCA Pursuing (2025–2027) • Chetan Business School
                    </p>
                  </div>
                </div>


              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

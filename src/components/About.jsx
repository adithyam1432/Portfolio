import React from 'react';
import { Award, GraduationCap, Database, Briefcase, FileCheck, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 border-b border-slate-200/60 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md liquid-glass-pill text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <FileCheck className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {about.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-600">
                {p}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl liquid-glass-card space-y-1.5">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                  <div className="p-1.5 rounded-xl liquid-glass-pill">
                    <GraduationCap className="w-4 h-4 text-[#0F766E]" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm">Academic Foundation</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Master of Computer Applications (Pursuing) & BCA graduate with <strong>8.3 CGPA</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass-card space-y-1.5">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                  <div className="p-1.5 rounded-xl liquid-glass-pill">
                    <Database className="w-4 h-4 text-[#0F766E]" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm">Enterprise Experience</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data Analytics Intern at Vistaar Financial Services optimizing SQL extractions from Oracle & AWS S3.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics / Summary Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl liquid-glass-card space-y-2 group"
              >
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                  {item.label}
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0F766E] transition-colors">
                  {item.value}
                </div>
              </div>
            ))}

            {/* Target Role Card spanning 2 cols */}
            <div className="col-span-2 p-6 sm:p-7 rounded-3xl liquid-glass-dark text-white space-y-3 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300 font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-teal-300" />
                <h3 className="text-xs font-mono text-teal-300 font-bold uppercase tracking-wider">Target Opportunities</h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {about.targetOpportunities || "Seeking Frontend Developer, Software Engineer, React Developer, Full-Stack Developer, or Associate Software Engineer roles."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

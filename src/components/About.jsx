import React from 'react';
import { Award, GraduationCap, Database, Briefcase, FileCheck, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 border-b border-slate-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
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
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-[#0F766E]" />
                  <span>Academic Foundation</span>
                </div>
                <p className="text-xs text-slate-600">
                  Master of Computer Applications (Pursuing) & BCA graduate with <strong>8.3 CGPA</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Database className="w-4 h-4 text-[#0F766E]" />
                  <span>Enterprise Experience</span>
                </div>
                <p className="text-xs text-slate-600">
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
                className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200/80 hover:border-slate-300 transition-all space-y-2 group"
              >
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  {item.label}
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0F766E] transition-colors">
                  {item.value}
                </div>
              </div>
            ))}

            {/* Target Role Card spanning 2 cols */}
            <div className="col-span-2 p-5 rounded-xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Target Opportunities</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                Seeking Junior / Associate Data Analyst, Business Intelligence Analyst, SQL Analytics Specialist, or Entry Software Developer roles.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

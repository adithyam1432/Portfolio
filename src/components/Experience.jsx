import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, professionalDevelopment } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-slate-200/60 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md liquid-glass-pill text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <Briefcase className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Professional Work & Simulation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Industry Analytics & Engineering Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Verified corporate internship and simulated technical consulting projects.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200/80 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          
          {/* Work Internship Item */}
          {experience.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0F766E] border-4 border-white shadow-xs group-hover:scale-125 transition-transform"></div>

              <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/70 pb-4">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full liquid-glass-pill text-teal-800 text-[11px] font-mono font-bold uppercase">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-600" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-700 font-semibold gap-1">
                    <div className="flex items-center gap-1.5 liquid-glass-pill px-3 py-1 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 text-slate-600" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 pt-2">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/70 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono font-bold text-slate-700 mr-2">Tools & Tech:</span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl liquid-glass-pill text-slate-700 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

          {/* Professional Development / Job Simulation */}
          {professionalDevelopment.map((sim) => (
            <div key={sim.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-white shadow-xs group-hover:scale-125 transition-transform"></div>

              <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/70 pb-4">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full liquid-glass-pill text-slate-800 text-[11px] font-mono font-bold uppercase">
                      Professional Development
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {sim.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700 font-mono">
                      Issued via {sim.issuer}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-slate-700 font-semibold liquid-glass-pill px-3 py-1 rounded-xl self-start sm:self-auto">
                    {sim.date}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {sim.description}
                </p>

                <div className="pt-3 border-t border-white/70 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono font-bold text-slate-700 mr-2">Competencies Applied:</span>
                  {sim.skillsApplied.map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1 rounded-xl liquid-glass-pill text-slate-700 text-xs font-mono"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

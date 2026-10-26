import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-slate-200/60 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md liquid-glass-pill text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Formal Computer Science Education
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Verified academic qualifications from Chetan Business School, KLE Society's College, and Karnataka Science College.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="liquid-glass-card rounded-3xl p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Status & Period */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase ${
                      item.status === 'Pursuing'
                        ? 'bg-[#0F766E] text-white shadow-xs'
                        : 'liquid-glass-pill text-slate-700'
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 font-semibold liquid-glass-pill px-3 py-1 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Performance Metric Pill (CGPA) */}
                {item.score && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass-pill text-teal-800 text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.score}</span>
                  </div>
                )}

                <p className="text-xs text-slate-700 leading-relaxed">
                  {item.detail}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Trophy, Award, Calendar, Building, Sparkles, CheckCircle2, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  const { achievements } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 border-b border-slate-200/60 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md liquid-glass-pill text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Honors & Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            National Hackathon Recognition
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Tested under intense 24-hour sprint conditions, competing against top university teams to build and pitch innovative tech solutions.
          </p>
        </div>

        {/* Achievement Showcase Cards */}
        <div className="space-y-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="liquid-glass-card rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Photo Column */}
                <div className="lg:col-span-6 relative bg-slate-900 overflow-hidden min-h-[280px] sm:min-h-[360px] flex items-center justify-center group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Winner Banner Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg">
                      <Trophy className="w-4 h-4 fill-slate-950" />
                      {item.award}
                    </span>
                  </div>

                  {/* Expand Image Button */}
                  <button
                    onClick={() => setSelectedImage(item.image)}
                    className="absolute bottom-4 right-4 z-10 p-2.5 rounded-xl liquid-glass-pill text-slate-900 shadow-md transition-transform active:scale-95 flex items-center gap-1.5 text-xs font-semibold"
                    title="View Full Resolution Photo"
                    aria-label="View Photo - Expand full resolution ceremony image"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </button>

                  <div className="absolute bottom-4 left-4 z-10 text-white font-mono text-xs hidden sm:block">
                    <span>Moodlakatte Institute of Technology</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Badge & Year */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/70 pb-3">
                      <span className="px-3 py-1 rounded-full liquid-glass-pill text-[#0F766E] text-[11px] font-mono font-bold uppercase tracking-wider">
                        National Level Competition
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Year {item.year}</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                        <Building className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    {/* Humanized Narrative Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-900 font-mono uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Key Achievement Facts</span>
                      </div>
                      <ul className="space-y-1 text-xs text-amber-950 font-medium leading-relaxed">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>Secured First Prize with cash award of <strong>₹25,000</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>Delivered working project prototype in a non-stop <strong>24-hour</strong> sprint</span>
                        </li>
                      </ul>
                    </div>

                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Photo */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Hackathon Winner Ceremony"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
            <div className="p-3 text-center text-xs font-mono text-slate-600">
              MITK AI Vision National Level 24-Hour Hackathon • First Prize Winner (₹25,000)
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

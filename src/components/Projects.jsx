import React from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-b border-slate-200/60 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md liquid-glass-pill text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <Layers className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Featured Portfolio Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Demonstrated Data Engineering & Full-Stack Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Selected projects built with Python data pipelines, market data clustering algorithms, Next.js full-stack features, and relational database architectures.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="liquid-glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Information Area */}
                <div className="lg:col-span-8 space-y-5">
                  
                  {/* Category Pill & Metrics */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full liquid-glass-pill text-[#0F766E] text-xs font-semibold uppercase font-mono tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Project #{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Contribution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 sm:p-5 rounded-2xl liquid-glass space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
                        Problem Addressed
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl liquid-glass space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0F766E] shadow-[0_0_8px_rgba(15,118,110,0.6)]"></span>
                        My Contribution
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-slate-400 font-semibold mr-1">Stack:</span>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-xl liquid-glass-pill text-slate-800 text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Action & Quick Summary Box */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full liquid-glass-card p-5 sm:p-6 rounded-3xl space-y-6">
                  
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400">
                      Key Impact / Feature
                    </h4>
                    <div className="p-3.5 liquid-glass rounded-2xl text-xs text-slate-700 font-medium leading-relaxed flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-4 border-t border-white/70">
                    
                    {/* Live Demo Link (Only render if liveUrl exists!) */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#0F766E] transition-all shadow-md active:scale-95"
                      >
                        <span>Launch Live Application</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="w-full py-2.5 px-4 liquid-glass text-slate-500 rounded-xl text-xs font-medium text-center">
                        Live Demo Private / Local Database
                      </div>
                    )}

                    {/* GitHub Code Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 liquid-glass-pill text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:text-slate-950 transition-all shadow-xs active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-900" />
                        <span>Inspect GitHub Repository</span>
                      </a>
                    )}

                    {/* Detailed View Button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full text-center text-xs font-mono font-semibold text-[#0F766E] hover:underline pt-1 block"
                    >
                      Read Technical Breakdown →
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

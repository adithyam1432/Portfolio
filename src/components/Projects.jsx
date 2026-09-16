import React from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-b border-slate-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
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
              className={`rounded-2xl border transition-all duration-200 p-6 sm:p-8 bg-white ${
                project.featured
                  ? 'border-slate-300 shadow-sm hover:border-[#0F766E]/50 hover:shadow-md'
                  : 'border-slate-200 shadow-2xs'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Information Area */}
                <div className="lg:col-span-8 space-y-5">
                  
                  {/* Category Pill & Metrics */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-semibold uppercase font-mono tracking-wider">
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
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <span className="text-xs font-bold text-slate-900 uppercase font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Problem Addressed
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <span className="text-xs font-bold text-slate-900 uppercase font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0F766E]"></span>
                        My Contribution
                      </span>
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
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Action & Quick Summary Box */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full bg-[#FAF9F6] p-5 rounded-xl border border-slate-200/80 space-y-6">
                  
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400">
                      Key Impact / Feature
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-medium leading-relaxed flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    
                    {/* Live Demo Link (Only render if liveUrl exists!) */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#0F766E] transition-colors shadow-xs"
                      >
                        <span>Launch Live Application</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="w-full py-2.5 px-4 bg-slate-100 text-slate-500 rounded-lg text-xs font-medium text-center border border-slate-200">
                        Live Demo Private / Local Database
                      </div>
                    )}

                    {/* GitHub Code Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-900" />
                        <span>Inspect GitHub Repository</span>
                      </a>
                    )}

                    {/* Detailed View Button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full text-center text-xs font-mono text-[#0F766E] hover:underline pt-1 block"
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

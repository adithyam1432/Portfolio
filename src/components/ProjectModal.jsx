import React from 'react';
import { X, ExternalLink, Github, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-mono font-semibold uppercase">
            {project.category}
          </span>
          <h2 id="modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-slate-500">
            {project.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Project Overview
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Contribution */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-xs font-bold text-slate-900 font-mono">Problem Solved:</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-xs font-bold text-slate-900 font-mono">My Specific Contribution:</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs flex items-center gap-2 hover:bg-[#0F766E] transition-colors"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-xs flex items-center gap-2 hover:bg-slate-50 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 text-xs text-slate-500 font-medium hover:text-slate-900"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

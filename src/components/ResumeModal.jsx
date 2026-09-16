import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ExternalLink, GraduationCap, Briefcase, Code, Database, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' or 'document'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, about, skills, experience, projects, education, professionalDevelopment } = portfolioData;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col border border-slate-200 shadow-2xl relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Topbar */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#0F766E] text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base font-bold tracking-tight">
                {personal.name} — Resume
              </h2>
              <p className="text-xs text-slate-300 font-mono">
                {personal.title} • Verified Document
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs & Actions */}
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'pdf' ? 'bg-[#0F766E] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('document')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'document' ? 'bg-[#0F766E] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Text Resume
              </button>
            </div>

            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs font-semibold hidden sm:flex items-center gap-1"
              title="Open PDF in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={personal.resumePdf}
              download="Adithya_Menashinakai_Resume.pdf"
              className="px-3 py-2 rounded-lg bg-[#0F766E] hover:bg-teal-600 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 bg-slate-100 overflow-y-auto">
          {activeTab === 'pdf' ? (
            <div className="w-full h-full min-h-[500px] relative">
              <iframe
                src={`${personal.resumePdf}#toolbar=1&navpanes=0`}
                title="Adithya Menashinakai Resume PDF Viewer"
                className="w-full h-full border-none min-h-[500px]"
              >
                <div className="p-8 text-center space-y-4">
                  <p className="text-slate-700 text-sm font-medium">
                    Inline PDF preview is loading or restricted by your browser.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={personal.resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open PDF in New Tab
                    </a>
                    <button
                      onClick={() => setActiveTab('document')}
                      className="px-4 py-2 bg-[#0F766E] text-white text-xs font-bold rounded-lg"
                    >
                      Switch to Text View
                    </button>
                  </div>
                </div>
              </iframe>
            </div>
          ) : (
            <div className="p-6 sm:p-10 max-w-3xl mx-auto bg-white my-4 sm:my-6 rounded-2xl border border-slate-200 shadow-md space-y-8 text-slate-800">
              
              {/* Document Header */}
              <div className="border-b border-slate-200 pb-6 text-center space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-sm font-mono text-[#0F766E] font-bold">
                  {personal.email} • {personal.phone} • {personal.location}
                </p>
                <div className="flex justify-center gap-4 text-xs font-mono text-slate-500 pt-1">
                  <a href={personal.linkedIn} target="_blank" rel="noreferrer" className="underline hover:text-[#0F766E]">LinkedIn</a>
                  <span>•</span>
                  <a href={personal.github} target="_blank" rel="noreferrer" className="underline hover:text-slate-900">GitHub</a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest border-b pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {personal.summary}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest border-b pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skills.categories.map((cat) => (
                    <div key={cat.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
                      <span className="font-bold text-slate-900 block font-mono">{cat.name}:</span>
                      <span className="text-slate-600 font-mono">{cat.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest border-b pb-1">
                  INTERNSHIP / WORK EXPERIENCE
                </h2>
                {experience.map((exp) => (
                  <div key={exp.id} className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{exp.role} | {exp.company}</span>
                      <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500">{exp.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest border-b pb-1">
                  PROJECTS
                </h2>
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{proj.title}</span>
                      <span className="font-mono text-xs text-[#0F766E]">{proj.tech.join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{proj.description}</p>
                    {proj.liveUrl && (
                      <p className="text-xs font-mono text-[#0F766E] pt-0.5">Link: {proj.liveUrl}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest border-b pb-1">
                  EDUCATION
                </h2>
                {education.map((edu) => (
                  <div key={edu.id} className="flex justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 block">{edu.degree}</span>
                      <span className="text-xs text-slate-600">{edu.institution}</span>
                    </div>
                    <div className="text-right font-mono text-xs text-slate-500">
                      <div>{edu.period}</div>
                      <div className="font-bold text-[#0F766E]">{edu.status} {edu.score ? `| ${edu.score}` : ''}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-3.5 px-6 bg-slate-900 text-white flex items-center justify-between text-xs shrink-0 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>Single Source of Truth Resume PDF</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 text-xs font-bold"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};

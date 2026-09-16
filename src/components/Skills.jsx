import React, { useState } from 'react';
import { Code, Database, BarChart3, Cpu, Wrench, TrendingUp, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getIcon = (name) => {
    switch (name) {
      case 'Code': return <Code className="w-4 h-4 text-[#0F766E]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#0F766E]" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-[#0F766E]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#0F766E]" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-[#0F766E]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#0F766E]" />;
      default: return <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 border-b border-slate-200/70 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
              <span>Technical Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Verified Technical Stack & Competencies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Organized directly from verified resume experience in data analytics, database management, and software tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-200/60 p-1 rounded-xl border border-slate-300/50">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all hover:border-slate-300 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-teal-50 border border-teal-100">
                      {getIcon(cat.icon)}
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-base">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {cat.skills.length} item{cat.skills.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-800 text-xs font-mono font-medium hover:border-[#0F766E] hover:text-[#0F766E] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                Source: Verified Resume Skill Matrix
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

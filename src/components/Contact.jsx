import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <Mail className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Recruiter Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Open for Data Analytics, Data Engineering, SQL Database Management, and Software Engineering positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Communication Card */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                Direct Recruiter Outreach
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reach out via email or phone to discuss interview scheduling, job requisitions, or full-time / internship opportunities.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Email Row with Copy Shortcut */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-100 shrink-0">
                    <Mail className="w-5 h-5 text-[#0F766E]" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-[#0F766E] truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                    aria-label="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-600" />
                        <span className="text-teal-700 font-semibold hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2 rounded-lg bg-[#0F766E] text-white hover:bg-teal-700 transition-colors text-xs font-semibold flex items-center gap-1"
                    aria-label="Send Email"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Row */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 shrink-0">
                    <Phone className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Phone Number</div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-sm font-semibold text-slate-900 hover:text-[#0F766E]"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personal.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Location Row */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 shrink-0">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Location</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {personal.location}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Social Profiles & Quick Response Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-heading font-bold text-slate-900 text-base">
                Professional Network
              </h4>
              
              <div className="space-y-3">
                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#0A66C2] bg-white flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-[#0A66C2]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0A66C2] transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        adithya-menashinakai-2656b7302
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0A66C2]" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-900 bg-white flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-900">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-slate-900 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        adithyam1432
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                </a>
              </div>
            </div>

            {/* Recruiter Guarantee Card */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">
                Response SLA
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                I monitor email continuously and respond to all recruiter inquiries within 24 business hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

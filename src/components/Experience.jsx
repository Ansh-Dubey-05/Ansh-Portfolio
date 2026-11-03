import React, { useState } from 'react';
import { CAREER_PROGRESSION, OTHER_INTERNSHIPS } from '../data/portfolioData';
import { Briefcase, ArrowRight, ShieldCheck, FileText, ChevronDown, ChevronUp, CheckCircle, Sparkles, Building2 } from 'lucide-react';

export default function Experience() {
  const [showOtherInternships, setShowOtherInternships] = useState(false);

  return (
    <section id="experience" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
            <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold">
              CAREER PATH & EXPERIENCE
            </span>
          </div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
            PROFESSIONAL EXPERIENCE
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-2xl">
            Demonstrated career progression from SDE Intern to Full-Time Software Development Engineer at CONORG.
          </p>
        </div>

        {/* PRIMARY CAREER PROGRESSION: CONORG */}
        <div className="relative border-l-2 border-[#D71930]/50 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          
          {CAREER_PROGRESSION.map((role, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div 
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  role.isCurrent 
                    ? 'bg-[#D71930] border-white shadow-[0_0_15px_rgba(215,25,48,0.8)]' 
                    : 'bg-[#111111] border-[#D71930]'
                }`}
              />

              {/* Card Container */}
              <div className="rounded-2xl bg-[#0c0c0c] border border-white/10 hover:border-[#D71930]/50 p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#D71930]/10">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-white/5 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['Syne',sans-serif] font-black text-2xl sm:text-3xl text-white tracking-wide">
                        {role.company}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-bold tracking-wider ${
                        role.isCurrent 
                          ? 'bg-[#D71930] text-white shadow-sm' 
                          : 'bg-white/10 text-white/80'
                      }`}>
                        {role.badge}
                      </span>
                    </div>

                    <h3 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-[#D71930]">
                      {role.role}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs font-mono text-white/90 font-medium">
                      {role.period}
                    </div>
                    {role.stipend && (
                      <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                        Paid Stipend: {role.stipend}
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  {role.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#c5c5c5] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#D71930] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags and Certificate Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#a0a0a0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {role.certificateLink && (
                    <a
                      href={role.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/5 hover:bg-[#D71930] border border-white/10 hover:border-[#D71930] text-white text-xs font-mono transition-all group/cert"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#D71930] group-hover/cert:text-white" />
                      <span>View Official Certificate (PDF)</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Career Progression Flow Banner */}
        <div className="mt-12 p-5 rounded-xl bg-gradient-to-r from-[#D71930]/15 via-[#111111] to-[#0c0c0c] border border-[#D71930]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D71930] flex items-center justify-center shrink-0 shadow-lg shadow-[#D71930]/40">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#D71930] uppercase font-bold tracking-wider">
                CAREER PROGRESSION ACCELERATION
              </div>
              <div className="text-sm font-['Syne',sans-serif] text-white font-semibold">
                SDE Intern (CONORG) ➔ Promoted to Software Development Engineer (Full-Time)
              </div>
            </div>
          </div>
          <span className="text-xs font-mono text-[#888888] px-3 py-1 rounded bg-black/40 border border-white/5">
            Verified Employment Record
          </span>
        </div>

        {/* EXPANDABLE SECTION: Additional Internships & Professional Engagements */}
        <div className="mt-12">
          <button
            onClick={() => setShowOtherInternships(!showOtherInternships)}
            className="w-full py-4 px-6 rounded-xl bg-[#0e0e0e] hover:bg-[#141414] border border-white/10 hover:border-white/20 flex items-center justify-between text-left transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-[#D71930]" />
              <div>
                <span className="text-sm font-mono text-white font-semibold">
                  ADDITIONAL INTERNSHIPS & TECHNICAL EXPERIENCES ({OTHER_INTERNSHIPS.length})
                </span>
                <p className="text-[11px] font-mono text-[#777777]">
                  Govt. of MP (Stipend ₹1 Lakh), IBM SkillsBuild, Codec Technologies, Next24tech, CRISP
                </p>
              </div>
            </div>
            {showOtherInternships ? (
              <ChevronUp className="w-5 h-5 text-[#D71930]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#888888]" />
            )}
          </button>

          {showOtherInternships && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {OTHER_INTERNSHIPS.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between hover:border-[#D71930]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-['Syne',sans-serif] font-bold text-white text-base">
                        {item.role}
                      </h4>
                      <span className="text-[10px] font-mono text-[#D71930] px-2 py-0.5 rounded bg-[#D71930]/10 border border-[#D71930]/20 shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#a0a0a0] mb-2 font-medium">
                      {item.organization}
                    </div>

                    {item.honorarium && (
                      <div className="text-xs font-mono text-emerald-400 font-semibold mb-2">
                        {item.honorarium}
                      </div>
                    )}

                    {item.badge && (
                      <div className="text-[10px] font-mono text-amber-300/90 mb-3">
                        ✦ {item.badge}
                      </div>
                    )}

                    <ul className="space-y-1.5 mb-3 text-xs text-[#b0b0b0]">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#D71930] mt-1.5 shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}


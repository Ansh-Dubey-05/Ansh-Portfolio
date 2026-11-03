import React, { useState } from 'react';
import { EDUCATION_LIST, SCHOLASTIC_ACHIEVEMENTS, SKILL_CATEGORIES, VERIFIED_CERTIFICATES } from '../data/portfolioData';
import { GraduationCap, Award, Code2, Trophy, CheckCircle, ExternalLink, ChevronRight, FileCheck, Maximize2 } from 'lucide-react';

export default function EducationSkills({ onOpenLightbox }) {
  const [selectedCertFilter, setSelectedCertFilter] = useState('All');

  const filteredCerts = selectedCertFilter === 'All'
    ? VERIFIED_CERTIFICATES
    : VERIFIED_CERTIFICATES.filter(c => c.category.includes(selectedCertFilter));

  return (
    <section id="skills-education" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="mb-14 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
            <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold">
              ACADEMIC MERIT & CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
            EDUCATION & SKILLS
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2">
            Solid Computer Science fundamentals, state merit distinctions, verified IIT Kanpur & CRISP certificates, and modern full-stack technologies.
          </p>
        </div>

        {/* 2-Column Split matching reference layout: LEFT is Education & Honors, RIGHT is Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start mb-16">
          
          {/* LEFT COLUMN: Education & Scholastic Achievements (Col 1-6) */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* EDUCATION SUBSECTION */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-[#D71930]" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#D71930] font-bold">
                  FORMAL EDUCATION
                </h3>
              </div>

              <div className="space-y-6">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-[#D71930]/40 transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="font-['Syne',sans-serif] font-bold text-white text-base sm:text-lg group-hover:text-[#D71930] transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-[#D71930] font-semibold shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-[#b0b0b0] font-medium mb-1">
                      {edu.institution}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-white/5 text-xs font-mono">
                      <span className="text-[#888888]">
                        Affiliation: {edu.affiliation}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                          {edu.score}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[#d0d0d0]">
                          {edu.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCHOLASTIC HONORS & AWARDS SUBSECTION */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-[#D71930]" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#D71930] font-bold">
                  SCHOLASTIC HONORS & AWARDS
                </h3>
              </div>

              {/* Highlight Plaque & Stage Ceremony */}
              <a
                href="#leadership"
                className="mb-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#0e0e0e] to-black border border-amber-500/30 hover:border-amber-500/60 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-amber-400/30 shrink-0 bg-black">
                    <img 
                      src="/assets/ansh_president_award_plaque.jpg" 
                      alt="President Plaque" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span>Official Presidential Memento Plaque</span>
                      <span className="text-[#D71930]">✦</span>
                    </div>
                    <div className="text-xs sm:text-sm font-['Syne',sans-serif] text-white font-bold">
                      Student Council President 2023-24 • SVPC Bhopal
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-300 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
                  Inspect Award →
                </span>
              </a>

              <div className="grid grid-cols-1 gap-3">
                {SCHOLASTIC_ACHIEVEMENTS.map((ach, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-[#D71930]/10 text-[#D71930] shrink-0 group-hover:bg-[#D71930] group-hover:text-white transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-['Syne',sans-serif] text-sm text-white font-bold leading-snug">
                        {ach.title}
                      </h5>
                      <div className="text-[11px] font-mono text-[#D71930] my-0.5">
                        {ach.organization}
                      </div>
                      <p className="text-xs text-[#888888] font-light leading-relaxed">
                        {ach.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Technical Skills (Compact Outlined Tags) (Col 7-12) */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4">
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#D71930]" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#D71930] font-bold">
                    TECHNICAL SKILLS & TOOLKIT
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#666666]">
                  Tag-Based Proficiency
                </span>
              </div>

              {/* Categorized Compact Outlined Skills */}
              <div className="space-y-6">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-['Syne',sans-serif] text-sm font-bold text-white uppercase tracking-wider">
                        {cat.name}
                      </h4>
                      <span className="text-[10px] font-mono text-[#777777]">
                        {cat.skills.length} items
                      </span>
                    </div>

                    {/* Outlined Tags matching reference */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium tracking-wide bg-black/60 text-[#d8d8d8] border border-white/15 hover:border-[#D71930] hover:text-white hover:bg-[#D71930]/10 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#D71930]/30 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D71930] uppercase font-bold tracking-widest mb-3">
                <CheckCircle className="w-4 h-4" /> Engineering Philosophy
              </div>
              <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed">
                Prioritizing clean modular architectures, type safety, deterministic testing, asymptotic algorithm efficiency, and production observability over superficial complexity.
              </p>
            </div>

          </div>

        </div>

        {/* VERIFIED OFFICIAL CERTIFICATES & CREDENTIALS SHOWCASE (Newly added from zip) */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="w-4 h-4 text-[#D71930]" />
                <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-bold">
                  VERIFIED DOCUMENTATION & CERTIFICATES
                </span>
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl text-white tracking-wider uppercase">
                OFFICIAL CERTIFICATIONS & OFFERS ({VERIFIED_CERTIFICATES.length})
              </h3>
            </div>
            <span className="text-xs font-mono text-[#777777]">
              Click any certificate to inspect in full HD
            </span>
          </div>

          {/* Grid of Verified Certificate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {VERIFIED_CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                onClick={() => onOpenLightbox && onOpenLightbox(cert.src, `${cert.title} — ${cert.issuer}`)}
                className="group relative rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-[#D71930]/60 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D71930]/10 cursor-pointer flex flex-col justify-between"
              >
                {/* Certificate Thumbnail Preview */}
                <div className="relative rounded-lg overflow-hidden bg-white/5 h-44 mb-3 flex items-center justify-center border border-white/5">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1 rounded bg-[#D71930] text-white text-[11px] font-mono font-bold flex items-center gap-1 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" /> View Certificate
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D71930] mb-1">
                    <span className="font-bold">{cert.category}</span>
                    <span className="text-[#777777]">{cert.date}</span>
                  </div>
                  <h4 className="font-['Syne',sans-serif] text-xs sm:text-sm font-bold text-white group-hover:text-[#D71930] transition-colors leading-snug line-clamp-2 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#888888] truncate mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-[10px] text-[#aaaaaa] line-clamp-2 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { PRESIDENT_LEADERSHIP } from '../data/portfolioData';
import { Award, ShieldCheck, Users, Crown, Mic, Flag, Sparkles, Maximize2, Newspaper, Trophy } from 'lucide-react';

export default function PresidentFeature({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('plaque');

  const selectedItem = PRESIDENT_LEADERSHIP.gallery.find(g => g.id === activeTab) || PRESIDENT_LEADERSHIP.gallery[0];

  return (
    <section id="leadership" className="py-24 bg-[#080808] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
            <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold">
              INSTITUTIONAL LEADERSHIP & VERIFIED AWARDS
            </span>
          </div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
            COLLEGE PRESIDENT & AWARDS
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-3xl">
            Elected to the highest student office as College President at Sardar Vallabh Bhai Polytechnic College, Bhopal during Diploma in Computer Science & Engineering (2021–2024), verified by official memento plaque and state press media.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* LEFT: Featured Artifact Viewer with Interactive Tabs (Col 1-7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage / Image Viewer */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto object-contain max-h-[500px] transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050505]/90 border border-amber-500/40 text-amber-300 text-xs font-mono backdrop-blur-md">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-bold">{selectedItem.tag}</span>
              </div>

              {/* Inspect / Zoom Button */}
              <button
                onClick={() => onOpenLightbox(selectedItem.src, `${selectedItem.title} — ${selectedItem.subtitle}`)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 hover:bg-[#D71930] border border-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                title="View Full Resolution Image"
                aria-label="View Full Resolution Image"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Inspect Full HD</span>
              </button>

              {/* Bottom Caption Box */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-['Syne',sans-serif] text-white font-bold">
                    {selectedItem.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#D71930] uppercase">
                    SVPC Bhopal
                  </span>
                </div>
                <p className="text-xs font-mono text-[#a0a0a0]">
                  {selectedItem.desc}
                </p>
              </div>
            </div>

            {/* Gallery Selector Thumbnails */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              {PRESIDENT_LEADERSHIP.gallery.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-1.5 rounded-xl border text-left transition-all flex flex-col items-center gap-1.5 ${
                    activeTab === item.id
                      ? 'border-[#D71930] bg-[#D71930]/10 shadow-lg shadow-[#D71930]/20'
                      : 'border-white/10 bg-[#0c0c0c] hover:border-white/20'
                  }`}
                >
                  <div className="w-full h-14 rounded-lg overflow-hidden bg-black/60 relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {activeTab === item.id && (
                      <div className="absolute inset-0 border-2 border-[#D71930] rounded-lg pointer-events-none" />
                    )}
                  </div>
                  <span className={`text-[10px] font-mono truncate w-full text-center ${
                    activeTab === item.id ? 'text-white font-bold' : 'text-[#777777]'
                  }`}>
                    {item.tag}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: Credentials, Newspaper Report & Responsibilities (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Presidential Tenure Card */}
            <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-400" />
                  <h3 className="font-['Syne',sans-serif] text-xl font-black text-white">
                    Presidential Tenure & Honor
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 font-bold">
                  2023 - 2024
                </span>
              </div>

              <div className="text-xs font-mono text-[#D71930] font-semibold">
                Basis of Election: Top Academic Position (5 Semesters #1 & AIR 05)
              </div>

              <p className="text-xs sm:text-sm text-[#b0b0b0] font-light leading-relaxed">
                {PRESIDENT_LEADERSHIP.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-[11px] font-mono text-white/80 uppercase tracking-widest font-bold block">
                  Key Institutional Impacts:
                </span>
                {PRESIDENT_LEADERSHIP.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#a5a5a5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71930] mt-1.5 shrink-0"></span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newspaper Press Highlights Box */}
            <div 
              onClick={() => onOpenLightbox('/assets/ansh_newspaper_president.jpg', 'Madhya Swadesh Press Coverage — Oath Ceremony')}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0c0c0c] border border-white/10 hover:border-[#D71930]/40 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-[#D71930]" />
                  <span className="text-xs font-mono text-white uppercase font-bold tracking-wider">
                    PRESS COVERAGE: MADHYA SWADESH
                  </span>
                </div>
                <Maximize2 className="w-3.5 h-3.5 text-[#777777] group-hover:text-white transition-colors" />
              </div>

              <blockquote className="text-xs text-[#cccccc] italic pl-3 border-l-2 border-[#D71930] my-2">
                "सरदार वल्लभभाई पॉलिटेक्निक महाविद्यालय की छात्र-परिषद का शपथ ग्रहण समारोह आयोजित... कंप्यूटर साइंस एंड इंजीनियरिंग के छात्र अंश दुबे ने अध्यक्ष के रूप में शपथ ग्रहण की।"
              </blockquote>

              <div className="text-[11px] font-mono text-[#888888] flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                <span>Madhya Swadesh Dainik • Bhopal</span>
                <span className="text-[#D71930] group-hover:underline">Click to read clipping →</span>
              </div>
            </div>

            {/* Co-Curricular & Leadership Badges */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block font-semibold">
                CO-CURRICULAR COMPETITIVE RECORD
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRESIDENT_LEADERSHIP.coCurricular.slice(0, 4).map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="text-xs font-['Syne',sans-serif] font-bold text-white mb-0.5">
                      {item.role}
                    </div>
                    <div className="text-[10px] font-mono text-[#D71930] mb-0.5">
                      {item.org}
                    </div>
                    <p className="text-[11px] text-[#777777] leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

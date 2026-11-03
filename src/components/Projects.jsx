import React, { useState } from 'react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Layers, Terminal, Sparkles, Filter, ChevronRight, Maximize2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectProject, onOpenLightbox }) {
  const [selectedFilter, setSelectedFilter] = useState('featured');

  const allProjects = [...FEATURED_PROJECTS, ...ADDITIONAL_PROJECTS];

  const displayedProjects = selectedFilter === 'featured' 
    ? FEATURED_PROJECTS 
    : selectedFilter === 'all'
    ? allProjects
    : selectedFilter === 'ai'
    ? allProjects.filter(p => p.category.includes('ML') || p.category.includes('AI') || p.category.includes('Document AI'))
    : selectedFilter === 'iot'
    ? allProjects.filter(p => p.category.includes('IoT') || p.category.includes('Hardware'))
    : allProjects.filter(p => p.category.includes('Full-Stack') || p.category.includes('Web') || p.category.includes('Govt'));

  return (
    <section id="projects" className="py-24 bg-[#080808] relative border-t border-b border-white/5">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
              <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold">
                ENGINEERING SHOWCASE
              </span>
            </div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              SELECTED PROJECTS
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-2xl">
              Govt-scale enterprise solutions, AI document intelligence engines, full-stack systems, and IoT microcontrollers.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a0a0a0] hover:text-white group transition-colors px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20"
            >
              <GithubIcon className="w-4 h-4 text-[#D71930]" />
              <span>VIEW ALL ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4 text-[#D71930] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono text-[#666666] mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#D71930]" /> FILTER:
          </span>
          {[
            { id: 'featured', label: 'Primary Showcase (01 - 03)' },
            { id: 'all', label: `All Systems (${allProjects.length})` },
            { id: 'fullstack', label: 'Govt & Full-Stack' },
            { id: 'ai', label: 'AI & Document Intelligence' },
            { id: 'iot', label: 'IoT & Embedded Hardware' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#D71930] text-white font-semibold shadow-md shadow-[#D71930]/30'
                  : 'bg-white/5 text-[#999999] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative flex flex-col justify-between rounded-xl bg-[#0d0d0d] border border-white/10 hover:border-[#D71930]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D71930]/15 cursor-pointer overflow-hidden"
            >
              {/* Preview Graphic / Image Showcase Frame */}
              {project.previewImage ? (
                <div className="relative h-56 sm:h-64 bg-black overflow-hidden group/img border-b border-white/10">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/35 to-black/20" />
                  
                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#D71930] animate-pulse"></span>
                      <span className="text-[10px] font-mono text-white uppercase font-bold tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-black/80 border border-emerald-500/30 font-semibold backdrop-blur-md">
                      VERIFIED CONORG
                    </span>
                  </div>

                  {/* Bottom hover bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 z-10">
                    <span className="flex items-center gap-1 text-xs">
                      <Layers className="w-3.5 h-3.5 text-[#D71930]" /> Live Platform
                    </span>
                    <span className="text-xs text-[#D71930] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect Specs <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative h-56 sm:h-64 bg-gradient-to-br from-[#161616] to-[#0a0a0a] border-b border-white/10 p-5 overflow-hidden flex flex-col justify-between">
                  {/* Top window controls */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      {project.category}
                    </span>
                  </div>

                  {/* Technical Graphic / Code in card */}
                  <div className="my-auto py-2 relative z-10">
                    {project.id === 'docforge' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#a0a0a0] bg-black/50 p-2 rounded border border-white/5">
                          <span className="text-sky-400 font-bold">OCR ENGINE</span>
                          <span className="text-white/80">PDF ➔ Markdown Tokenizer</span>
                          <span className="text-emerald-400">99.4%</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/70 border border-white/10 font-mono text-[10px] text-[#888888]">
                          <span className="text-sky-400">table_matrix</span> = extract_columns(pdf_stream)<br/>
                          token_efficient_md = format_for_rag(table_matrix)
                        </div>
                      </div>
                    )}

                    {project.id === 'mailflows' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#a0a0a0] bg-black/50 p-2 rounded border border-white/5">
                          <span className="text-[#D71930] font-bold">POST</span>
                          <span className="text-white/80">/api/campaign/dispatch</span>
                          <span className="text-emerald-400">200 OK</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/70 border border-white/10 font-mono text-[10px] text-[#888888]">
                          <span className="text-[#D71930]">const</span> mailQueue = <span className="text-amber-400">parseCSV</span>(recipients);<br/>
                          dispatchBulkCampaign(template, mailQueue);
                        </div>
                      </div>
                    )}

                    {project.id === 'smartdustbin' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#a0a0a0] bg-black/50 p-2 rounded border border-white/5">
                          <span className="text-amber-400 font-bold">ARDUINO / ESP</span>
                          <span className="text-white/80">Proximity & Fill Sensor</span>
                          <span className="text-emerald-400">ACTIVE</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/70 border border-white/10 font-mono text-[10px] text-[#888888]">
                          <span className="text-amber-400">if</span> (distance &lt; 30) servo.write(90);<br/>
                          check_capacity_threshold(ultrasonic_pin);
                        </div>
                      </div>
                    )}

                    {project.id === 'heartguard' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#a0a0a0] bg-black/50 p-2 rounded border border-white/5">
                          <span className="text-[#D71930] font-bold">ML CLASSIFIER</span>
                          <span className="text-white/80">Cardiovascular Risk Eval</span>
                          <span className="text-emerald-400">Scikit</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/70 border border-white/10 font-mono text-[10px] text-[#888888]">
                          model = RandomForestClassifier(n_estimators=100)<br/>
                          accuracy = evaluate_metrics(X_test, y_test)
                        </div>
                      </div>
                    )}

                    {project.id !== 'docforge' && project.id !== 'mailflows' && project.id !== 'smartdustbin' && project.id !== 'heartguard' && (
                      <div className="p-3 rounded bg-black/60 border border-white/10 font-mono text-[11px] text-[#a0a0a0]">
                        <div className="text-[#D71930] font-semibold mb-1">// {project.title} Core Architecture</div>
                        <div className="text-white/70 truncate">{project.features[0]}</div>
                      </div>
                    )}
                  </div>

                  {/* Subtitle tag overlay */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] z-10">
                    <span className="flex items-center gap-1 text-white/70">
                      <Terminal className="w-3 h-3 text-[#D71930]" /> Architecture Ready
                    </span>
                    <span className="text-[10px] text-[#D71930] group-hover:underline flex items-center gap-1">
                      Inspect Specs <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Ambient red hover glow */}
                  <div className="absolute inset-0 bg-[#D71930]/0 group-hover:bg-[#D71930]/5 transition-colors duration-300 pointer-events-none" />
                </div>
              )}

              {/* Bottom Card Content matching reference typography */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  {/* Card Number + Title + Arrow Row matching reference */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl text-[#D71930] leading-none">
                        {project.number}
                      </span>
                      <div>
                        <h3 className="font-['Syne',sans-serif] font-bold text-lg sm:text-xl text-white group-hover:text-[#D71930] transition-colors uppercase tracking-wide">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-[#888888] tracking-tight">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#D71930] group-hover:border-[#D71930] text-white/70 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#a0a0a0] font-light leading-relaxed my-3 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-[#cccccc]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-[#777777]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

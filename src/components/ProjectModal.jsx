import React from 'react';
import { X, ExternalLink, Layers, CheckCircle2, Terminal, Code2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-white space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-5xl text-[#D71930] leading-none">
              {project.number}
            </span>
            <div>
              <div className="text-[11px] font-mono text-[#D71930] uppercase tracking-widest font-semibold">
                {project.category}
              </div>
              <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#888888]">
                {project.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-[#D71930] text-[#a0a0a0] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#a0a0a0] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#D71930]" /> System Overview
          </h4>
          <p className="text-sm text-[#d0d0d0] font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture Note if available */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-black/60 border border-white/10">
            <div className="text-xs font-mono text-[#D71930] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Technical Architecture
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#a0a0a0]">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#a0a0a0] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D71930]" /> Key Engineering Features
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.features.map((feat, i) => (
              <div 
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-[#cccccc]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71930] mt-2 shrink-0"></span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#a0a0a0] flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#D71930]" /> Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Links & Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-[#777777]">
            {project.hasVerifiedRepo ? (
              <span className="text-emerald-400">✓ Verified Public Repository</span>
            ) : (
              <span>Codebase: Available via GitHub profile / private repo</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#D71930] hover:bg-[#b81428] text-white text-xs font-mono font-semibold tracking-wider transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW GITHUB REPO</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

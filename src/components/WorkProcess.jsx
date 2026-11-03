import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';
import { Search, Compass, Code, CheckSquare, Rocket, Sparkles, Quote } from 'lucide-react';

const ICONS = [Search, Compass, Code, CheckSquare, Rocket];

export default function WorkProcess() {
  return (
    <section id="process" className="py-24 bg-[#080808] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
            <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold">
              ENGINEERING METHODOLOGY
            </span>
          </div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
            WORK PROCESS
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2">
            A disciplined 5-stage software engineering lifecycle ensuring reliability from requirements to deployment.
          </p>
        </div>

        {/* 2-Column Layout: Left Vertical Timeline (Col 1-7) / Right Red Quote Container (Col 8-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* LEFT: 5-Step Vertical Timeline */}
          <div className="lg:col-span-7 relative">

            {/* Connecting Vertical Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#D71930] via-[#D71930]/40 to-white/10 hidden sm:block" />

            <div className="space-y-8 sm:space-y-10">
              {WORK_PROCESS_STEPS.map((step, idx) => {
                const IconComponent = ICONS[idx] || Code;

                return (
                  <div key={step.step} className="relative flex items-start gap-4 sm:gap-6 group">

                    {/* Numbered Circular Icon Badge */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#111111] border-2 border-[#D71930] group-hover:bg-[#D71930] flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg shadow-[#D71930]/20 group-hover:shadow-[#D71930]/50 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 text-[#D71930] group-hover:text-white transition-colors" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1 bg-[#0c0c0c]/80 border border-white/5 group-hover:border-white/15 p-5 rounded-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-['Bebas_Neue',sans-serif] text-xl text-[#D71930] tracking-wider">
                          {step.step}
                        </span>
                        <span className="text-white/20 font-mono text-xs">•</span>
                        <h3 className="font-['Syne',sans-serif] font-black text-white text-lg tracking-wider uppercase group-hover:text-[#D71930] transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <div className="text-xs font-mono text-[#D71930]/90 mb-2 font-medium">
                        {step.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-[#a8a8a8] font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT: Iconic Editorial Quote Container matching reference */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#8F0E1E]/40 via-[#26050a] to-[#0d0d0d] border border-[#D71930]/40 p-8 sm:p-10 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px]">

              {/* Subtle crimson radial glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D71930]/20 blur-3xl pointer-events-none" />

              <div>
                {/* Large Crimson Quote Mark */}
                <div className="mb-6">
                  <span className="font-serif text-6xl sm:text-7xl text-[#D71930] leading-none select-none">
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="font-['Syne',sans-serif] text-xl sm:text-2xl text-white font-medium leading-snug mb-8">
                  Good engineering is not just how it looks, but how reliably, cleanly, and scalably it works.
                </blockquote>

                {/* Signature */}
                <div className="mb-8">
                  <span className="font-['Caveat',cursive] text-4xl sm:text-5xl text-white block -rotate-3 tracking-wide">
                    Ansh Dubey
                  </span>
                  <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest mt-1 block">
                    Software Development Engineer
                  </span>
                </div>
              </div>

              {/* Bottom Callout matching reference */}
              <div className="pt-6 border-t border-[#D71930]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#d0d0d0] uppercase font-bold block">
                    LET'S CREATE
                  </span>
                  <span className="text-xs font-mono tracking-widest text-white uppercase font-bold block">
                    SOMETHING GREAT TOGETHER.
                  </span>
                </div>
                <span className="text-[#D71930] text-xl animate-sparkle">✦</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


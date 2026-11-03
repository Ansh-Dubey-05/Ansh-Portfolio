import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, VERIFIED_STATS } from '../data/portfolioData';
import { ArrowDownRight, Sparkles, Download, ArrowRight, ShieldCheck, Mail, Award, Check, Crown, Terminal, Maximize2, Image as ImageIcon } from 'lucide-react';
import { WhatsappIcon } from './Icons';
import confetti from 'canvas-confetti';

const PORTRAITS = [
  { 
    id: 'cutout', 
    label: 'Dark Cutout (Black Shirt)', 
    src: '/assets/ansh_hero_transparent.png', 
    raw: '/assets/ansh_portrait_couch.jpg',
    isCutout: true,
    tag: 'SDE @ CONORG'
  },
  { 
    id: 'couch', 
    label: 'Full Studio Photo', 
    src: '/assets/ansh_hero_full_visible.jpg', 
    raw: '/assets/ansh_portrait_couch.jpg',
    isCutout: false,
    tag: 'SDE @ CONORG'
  },
  { 
    id: 'suit', 
    label: 'Formal Suit (SVPC)', 
    src: '/assets/ansh_award.jpg', 
    raw: '/assets/ansh_award.jpg',
    isCutout: false,
    tag: 'Academic Distinction'
  },
  { 
    id: 'lounge', 
    label: 'Casual Lounge', 
    src: '/assets/ansh_portrait_lounge.jpg', 
    raw: '/assets/ansh_portrait_lounge.jpg',
    isCutout: false,
    tag: 'Software Engineer'
  },
];

export default function Hero({ onOpenLightbox }) {
  const [activePortraitIndex, setActivePortraitIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const currentPortrait = PORTRAITS[activePortraitIndex];

  // Animated rotating roles in headline
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D71930', '#ffffff', '#25D366']
    });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-20 flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      {/* Background Radial Glows with Breathing Animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[500px] bg-[#D71930]/15 blur-[140px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-[#D71930]/10 blur-[110px] pointer-events-none rounded-full" />

      {/* Top Banner Row matching reference */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-2 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#888888] uppercase tracking-widest border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-[#D71930] font-semibold">SOFTWARE DEVELOPMENT ENGINEER</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <span className="hidden sm:inline">FULL-STACK SYSTEMS BUILDER</span>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <a 
            href={PERSONAL_INFO.whatsapp} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] hover:bg-emerald-500/25 transition-all shadow-sm"
          >
            <WhatsappIcon className="w-3.5 h-3.5" />
            <span>9755319058</span>
          </a>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D71930] animate-ping"></span>
            <span className="text-[10px] sm:text-[11px]">AVAILABLE FOR OPPORTUNITIES</span>
            <span className="text-[#D71930] animate-sparkle">✦</span>
          </div>
        </div>
      </div>

      {/* Main Composition Container */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        
        {/* GIANT CONDENSED BACKDROP TYPOGRAPHY: "SOFTWARE DEVELOPER" - Positioned High & Distinct (No Overlap) */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-0 sm:top-2 lg:top-4 text-center select-none pointer-events-none z-0 overflow-hidden px-2 sm:px-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center font-['Bebas_Neue',sans-serif] text-[14vw] sm:text-[12.5vw] lg:text-[9.8vw] text-[#D71930] leading-[0.85] lg:leading-none tracking-tight font-black select-none animate-sde-glow">
            <span className="block drop-shadow-[0_0_35px_rgba(215,25,48,0.5)]">
              SOFTWARE
            </span>
            <span className="block lg:ml-6 drop-shadow-[0_0_35px_rgba(215,25,48,0.5)]">
              DEVELOPER
            </span>
          </div>
        </div>

        {/* 3-Column Hero Grid: Left Content / Center-Right Portrait / Right Stats - Positioned Comfortably Below Backdrop (Zero Overlap) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center pt-24 sm:pt-32 lg:pt-36 xl:pt-40">
          
          {/* LEFT COLUMN: Identity, Animated Title, Actions (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Script "Hello, I'm" with subtle tilt */}
            <div className="mb-1 flex items-center gap-2">
              <span className="font-['Caveat',cursive] text-3xl sm:text-4xl text-[#eaeaea] inline-block -rotate-3 tracking-wide">
                Hello, I'm
              </span>
              <span className="text-[#D71930] text-sm animate-sparkle">✦</span>
            </div>

            {/* Giant Condensed Name */}
            <h1 className="font-['Bebas_Neue',sans-serif] text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl text-white tracking-tight uppercase leading-[0.88] mb-3">
              <span className="block">{PERSONAL_INFO.firstName}</span>
              <span className="block text-white/95">{PERSONAL_INFO.lastName}</span>
            </h1>

            {/* Dynamic Animated Role Subtitle */}
            <div className="mb-4">
              <div className="h-6 flex items-center overflow-hidden">
                <span 
                  key={roleIndex}
                  className="inline-block text-[#D71930] font-['Syne',sans-serif] font-bold text-sm sm:text-base tracking-[0.15em] uppercase animate-in slide-in-from-bottom-2 duration-300"
                >
                  {PERSONAL_INFO.roles[roleIndex]}
                </span>
              </div>
              <p className="text-xs font-mono text-[#a0a0a0] tracking-wider mt-1">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-[#b5b5b5] font-light leading-relaxed max-w-md mb-6">
              {PERSONAL_INFO.heroSummary}
            </p>

            {/* CTA Action Buttons with WhatsApp & Direct Email */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#D71930] hover:bg-[#ba1427] text-white text-xs sm:text-sm font-mono font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-[#D71930]/30 hover:shadow-[#D71930]/50 hover:-translate-y-0.5 group"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-mono font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:-translate-y-0.5"
                title="Connect on WhatsApp (9755319058)"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#D71930] text-xs sm:text-sm font-mono tracking-wider transition-all duration-300"
                title={`Email: ${PERSONAL_INFO.email}`}
              >
                <Mail className="w-4 h-4 text-[#D71930]" />
                <span className="hidden sm:inline">EMAIL</span>
              </a>

              {/* Resume download */}
              <a
                href={PERSONAL_INFO.resumePath}
                download="Ansh_Dubey_Resume.pdf"
                onClick={triggerConfetti}
                className="inline-flex items-center justify-center p-3 rounded-lg bg-white/5 hover:bg-[#D71930] text-white border border-white/15 hover:border-[#D71930] transition-all duration-300 group"
                title="Download Resume (PDF)"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/5 text-xs font-mono text-[#888888]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5"></span>
                <span className="text-white/90 font-medium">CONORG SDE</span>
              </div>
              <span className="text-white/20">•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#a0a0a0] hover:text-white transition-colors underline decoration-white/20">
                {PERSONAL_INFO.email}
              </a>
              <span className="text-white/20">•</span>
              <span className="text-[#a0a0a0]">{PERSONAL_INFO.phone}</span>
            </div>
          </div>

          {/* CENTER-RIGHT: Ansh Dubey's FULLY VISIBLE & ANIMATED PORTRAIT (Col 6-9) */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2 relative mt-4 lg:mt-0">
            
            {/* Glowing Backlight Aura */}
            <div className="absolute inset-0 bg-radial from-[#D71930]/35 via-[#D71930]/15 to-transparent blur-3xl transform scale-110 pointer-events-none animate-pulse" />

            {/* Floating Portrait Container with animate-float */}
            <div className="relative group max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] w-full flex flex-col items-center animate-float">
              
              {/* Floating Tech Badge (Top-Right) */}
              <div className="absolute -top-3 -right-3 z-30 px-3 py-1.5 rounded-full bg-[#0d0d0d]/95 border border-[#D71930]/50 text-white text-[11px] font-mono shadow-xl backdrop-blur-md flex items-center gap-1.5 animate-float-badge">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D71930]" />
                <span className="font-bold">Full-Time SDE</span>
              </div>

              {/* Portrait Frame Container: Seamless for Cutout, Bordered for Photos */}
              <div 
                className={`relative z-10 overflow-hidden transition-all duration-500 w-full flex items-center justify-center ${
                  currentPortrait.isCutout
                    ? 'rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]'
                    : 'rounded-2xl border-2 border-white/15 hover:border-[#D71930]/80 bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
                }`}
              >
                {/* Photo or Cutout */}
                <img
                  src={currentPortrait.src}
                  alt="Ansh Dubey — Software Development Engineer"
                  className={`w-full h-auto object-contain max-h-[540px] filter contrast-105 brightness-105 transition-transform duration-750 group-hover:scale-[1.02] ${
                    currentPortrait.isCutout ? 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]' : ''
                  }`}
                />

                {/* Corner Crosshairs for Framed Photos */}
                {!currentPortrait.isCutout && (
                  <>
                    <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D71930] pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D71930] pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D71930] pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D71930] pointer-events-none" />
                  </>
                )}

                {/* Quick Expand Button on Image */}
                <button
                  onClick={() => onOpenLightbox && onOpenLightbox(currentPortrait.raw, 'Ansh Dubey — Software Development Engineer')}
                  className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/80 hover:bg-[#D71930] border border-white/20 text-white text-[10px] font-mono transition-colors flex items-center gap-1 shadow-md cursor-pointer backdrop-blur-md"
                  title="Inspect Full Resolution Image"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Full HD View</span>
                </button>
              </div>

              {/* Centered Institutional Leadership Badge (Below Photo, Centered & Clean) */}
              <div className="mt-3 flex items-center justify-center z-20">
                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c0c0c]/95 hover:bg-[#181818] border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-white text-xs font-mono shadow-xl backdrop-blur-md transition-all group/badge"
                  title="View College President Tenure & IAS Nagargoje Felicitation"
                >
                  <Crown className="w-3.5 h-3.5 text-amber-400 group-hover/badge:scale-110 transition-transform" />
                  <span className="font-bold tracking-wide">College President • SVPC Bhopal</span>
                  <span className="text-[10px] text-amber-400/70 border-l border-white/10 pl-2">2023–24</span>
                </a>
              </div>

              {/* Interactive Portrait Switcher Pills */}
              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full bg-[#111111] border border-white/10 z-20 shadow-lg">
                {PORTRAITS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePortraitIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all cursor-pointer ${
                      activePortraitIndex === idx
                        ? 'bg-[#D71930] text-white font-bold shadow-md shadow-[#D71930]/40'
                        : 'text-[#888888] hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sparkle Quote & Verified Stats (Col 10-12) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full order-3 space-y-8 lg:space-y-12 lg:pl-4">
            
            {/* Sparkle Quote matching reference */}
            <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-[#D71930]/30 transition-colors">
              <span className="text-[#D71930] text-xl animate-sparkle">✦</span>
              <p className="text-xs sm:text-sm font-['Syne',sans-serif] text-[#d0d0d0] leading-snug">
                "{PERSONAL_INFO.heroQuote}"
              </p>
            </div>

            {/* Vertical Stack of Verified Stats matching reference */}
            <div className="flex flex-col space-y-6 sm:space-y-8">
              {VERIFIED_STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group border-l-2 border-[#D71930]/40 hover:border-[#D71930] pl-4 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl xl:text-5xl text-white tracking-wider group-hover:text-[#D71930] transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-[#D71930] font-black text-sm sm:text-base">✦</span>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#777777] mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Link to Leadership & Award Plaque */}
            <div className="pt-2">
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#a0a0a0] hover:text-white group"
              >
                <Award className="w-3.5 h-3.5 text-[#D71930]" />
                <span className="underline decoration-white/20 group-hover:decoration-[#D71930]">
                  Elected College President (SVPC)
                </span>
                <ArrowRight className="w-3 h-3 text-[#D71930] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-4 flex items-center justify-between text-[11px] font-mono text-[#666666] border-t border-white/5">
        <span className="hidden sm:inline">ENGINEERING PORTFOLIO 2026</span>
        <a 
          href="#projects" 
          className="flex items-center gap-2 text-[#999999] hover:text-white transition-colors group mx-auto sm:mx-0"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDownRight className="w-3.5 h-3.5 text-[#D71930] transition-transform group-hover:translate-y-0.5" />
        </a>
        <span className="hidden sm:inline">ANSH DUBEY — SDE</span>
      </div>
    </section>
  );
}

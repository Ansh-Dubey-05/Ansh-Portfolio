import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Download, Sparkles, ExternalLink, ArrowRight, Cpu } from 'lucide-react';
import { WhatsappIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'neural-mind', 'projects', 'experience', 'process', 'skills-education', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#D71930', '#ffffff', '#8F0E1E']
    });
  };

  const navLinks = [
    { label: 'JARVIS Mind', href: '#neural-mind', isJarvis: true },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Process', href: '#process' },
    { label: 'Skills & Edu', href: '#skills-education' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="group flex flex-col items-start focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="font-['Syne',sans-serif] font-black tracking-wider text-xl sm:text-2xl text-white group-hover:text-[#D71930] transition-colors">
              ANSH DUBEY
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#D71930] animate-pulse"></span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#888888] group-hover:text-white transition-colors">
            Software Development Engineer
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#0d0d0d]/80 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-[#D71930] text-white font-semibold shadow-md shadow-[#D71930]/30'
                  : link.isJarvis
                  ? 'text-[#D71930] hover:text-white hover:bg-[#D71930]/15'
                  : 'text-[#a0a0a0] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.isJarvis && <Cpu className="w-3 h-3 text-[#D71930]" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action: WhatsApp & Resume */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-400 hover:text-white text-xs font-mono font-semibold tracking-wider transition-all duration-200"
            title="Chat on WhatsApp (9755319058)"
          >
            <WhatsappIcon className="w-3.5 h-3.5" />
            <span>WHATSAPP</span>
          </a>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Ansh_Dubey_Resume.pdf"
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#D71930] hover:bg-[#b51426] text-white text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-lg shadow-[#D71930]/20 hover:shadow-[#D71930]/40 group"
          >
            <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded bg-emerald-600 text-white text-xs"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Ansh_Dubey_Resume.pdf"
            onClick={handleResumeDownload}
            className="p-2 rounded bg-[#D71930] text-white text-xs font-mono"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#121212] border border-white/10 text-white hover:border-[#D71930] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D71930]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-b border-white/10 px-5 pt-3 pb-6 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-md text-sm font-mono tracking-wider text-[#d0d0d0] hover:text-white hover:bg-[#D71930]/20 hover:border-l-2 hover:border-[#D71930] transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isJarvis && <span className="text-[10px] font-mono text-[#D71930] px-1.5 py-0.5 rounded bg-[#D71930]/10 border border-[#D71930]/20">HUD</span>}
              </a>
            ))}
            
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-emerald-600 text-white text-xs font-mono font-bold"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>CHAT ON WHATSAPP (9755319058)</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Ansh_Dubey_Resume.pdf"
                onClick={() => {
                  handleResumeDownload();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#D71930] text-white text-xs font-mono font-bold"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white"
              >
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

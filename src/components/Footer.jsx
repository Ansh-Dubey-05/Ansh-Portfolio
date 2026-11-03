import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 text-[#888888]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-['Syne',sans-serif] font-black text-xl text-white tracking-wider">
                ANSH DUBEY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71930]"></span>
            </div>
            <p className="text-xs font-mono text-[#777777] mt-1">
              Software Development Engineer (Full-Time) • CONORG
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-colors"
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#D71930] hover:text-white text-[#a0a0a0] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#D71930] hover:text-white text-[#a0a0a0] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#D71930] hover:text-white text-[#a0a0a0] transition-colors"
              aria-label="Send Email"
              title={`Email: ${PERSONAL_INFO.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1 border border-white/10 hover:border-white/20 ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D71930]" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666666] text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D71930]" />
            <span>Built with precision: React 19 • Tailwind CSS • Vite • Production-Grade</span>
          </div>

          <div>
            © {new Date().getFullYear()} Ansh Dubey. Contact: {PERSONAL_INFO.email} • +91 {PERSONAL_INFO.rawPhone}
          </div>
        </div>

      </div>
    </footer>
  );
}

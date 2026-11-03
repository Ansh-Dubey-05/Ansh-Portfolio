import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Globe, Phone, MapPin, Send, Check, Copy, ArrowRight, Sparkles, Terminal, Code2, ExternalLink, MessageSquare } from 'lucide-react';
import { WhatsappIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#D71930', '#25D366', '#ffffff']
    });

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Project Collaboration with ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D71930]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 3-Column Layout matching reference footer layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16">
          
          {/* LEFT: Heading & Pitch (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
                <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold">
                  START A CONVERSATION
                </span>
              </div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl text-white tracking-tight uppercase leading-none">
                LET'S WORK<br />
                <span className="text-white">TOGETHER</span>
                <span className="text-[#D71930] ml-2 animate-sparkle">✦</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#a8a8a8] font-light leading-relaxed">
              Open to meaningful engineering challenges, full-stack systems building, high-impact collaborations, and technical opportunities. Connect directly via WhatsApp or Email.
            </p>

            {/* Action Buttons: WhatsApp & Available for roles */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow-lg shadow-emerald-600/25 group font-bold"
              >
                <WhatsappIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#111111] hover:bg-[#D71930] border border-white/10 hover:border-[#D71930] text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group shadow-lg"
              >
                <Mail className="w-4 h-4 text-[#D71930] group-hover:text-white" />
                <span>SEND DIRECT EMAIL</span>
              </a>
            </div>

            {/* Quick social links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#888888]">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors underline decoration-white/20 hover:decoration-[#D71930]"
              >
                LinkedIn Profile
              </a>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors underline decoration-white/20 hover:decoration-[#D71930]"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* CENTER: Contact Details Cards (Col 5-7) */}
          <div className="lg:col-span-4 space-y-3.5">
            
            {/* WHATSAPP CARD (User Requested) */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-between group shadow-lg shadow-emerald-500/5">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                  <WhatsappIcon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    <span>WhatsApp Contact</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <a 
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors truncate block font-bold"
                  >
                    +91 9755319058
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.rawPhone, 'whatsapp')}
                  className="p-2 rounded hover:bg-white/10 text-[#888888] hover:text-white transition-colors shrink-0"
                  title="Copy number to clipboard"
                  aria-label="Copy number to clipboard"
                >
                  {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                  title="Open in WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* EMAIL CARD (Updated: dubeyansh578@gmail.com) */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-[#D71930]/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-[#D71930]/10 text-[#D71930] group-hover:bg-[#D71930] group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider">
                    Official Email
                  </div>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#D71930] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded hover:bg-white/10 text-[#888888] hover:text-white transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* PHONE CARD (9755319058) */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-[#D71930]/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#a0a0a0] group-hover:bg-[#D71930] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider">
                    Direct Phone
                  </div>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#D71930] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.rawPhone, 'phone')}
                className="p-2 rounded hover:bg-white/10 text-[#888888] hover:text-white transition-colors shrink-0"
                title="Copy phone to clipboard"
                aria-label="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LOCATION CARD */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/5 text-[#a0a0a0] shrink-0">
                <MapPin className="w-4 h-4 text-[#D71930]" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider">
                  Location & Availability
                </div>
                <div className="text-xs sm:text-sm font-mono text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: 3D Laptop / Product Showcase Visual matching reference (Col 8-12) */}
          <div className="lg:col-span-4 relative flex flex-col justify-center">
            
            {/* 3D Angled Laptop Shell */}
            <div className="relative group rounded-2xl bg-[#0a0a0a] border border-white/15 p-4 shadow-2xl shadow-black overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Laptop Screen Bezel */}
              <div className="rounded-xl bg-[#111111] border border-white/10 p-3 shadow-inner">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-[#777777]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-white/60">ansh-dubey // workspace</span>
                </div>

                {/* Simulated IDE / Terminal inside screen */}
                <div className="pt-3 font-mono text-[11px] leading-relaxed space-y-1 text-[#a0a0a0]">
                  <div className="text-[#D71930] font-bold">
                    // ANSH DUBEY — SDE
                  </div>
                  <div>
                    <span className="text-purple-400">const</span> engineer = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">"Ansh Dubey"</span>,
                  </div>
                  <div className="pl-4">
                    role: <span className="text-emerald-300">"SDE @ CONORG"</span>,
                  </div>
                  <div className="pl-4">
                    email: <span className="text-cyan-300">"{PERSONAL_INFO.email}"</span>,
                  </div>
                  <div className="pl-4">
                    phone: <span className="text-cyan-300">"{PERSONAL_INFO.rawPhone}"</span>,
                  </div>
                  <div className="pl-4">
                    whatsapp: <span className="text-emerald-400">"AVAILABLE"</span>,
                  </div>
                  <div className="pl-4">
                    collegePresident: <span className="text-amber-400">true</span>,
                  </div>
                  <div className="pl-4">
                    status: <span className="text-emerald-400">"READY_TO_BUILD"</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="text-white/90 pt-1 flex items-center gap-1">
                    <span className="text-[#D71930]">&gt;</span> engineer.collaborate(); <span className="inline-block w-1.5 h-3.5 bg-[#D71930] animate-pulse"></span>
                  </div>
                </div>

              </div>

              {/* Laptop Keyboard Base & Hinge visual */}
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#666666]">
                <span>CONORG SDE WORKSTATION</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ACTIVE
                </span>
              </div>
            </div>

            {/* Coffee mug / accessory accent simulation */}
            <div className="mt-4 flex items-center justify-end gap-2 text-[10px] font-mono text-[#555555]">
              <span>TERMINAL READY</span>
              <span className="text-[#D71930]">✦</span>
            </div>

          </div>

        </div>

        {/* Interactive Direct Message Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-white/10 max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Send className="w-4 h-4 text-[#D71930]" />
            <h3 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-white">
              Send a Direct Message
            </h3>
          </div>
          <p className="text-xs font-mono text-[#888888] mb-6">
            Leave a note regarding full-time roles, engineering discussions, or software collaborations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#a0a0a0] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D71930] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#a0a0a0] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D71930] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#a0a0a0] mb-1">
                Your Message / Opportunity Details
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Ansh, I reviewed your work and would like to discuss..."
                className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D71930] focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] font-mono text-[#666666]">
                Direct inbox dispatch to {PERSONAL_INFO.email}
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs font-mono font-bold transition-all"
                >
                  <WhatsappIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Instead</span>
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D71930] hover:bg-[#ba1427] text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 shadow-lg shadow-[#D71930]/30 hover:shadow-[#D71930]/50"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {submitted && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                ✓ Message client opened! Thank you for reaching out. Ansh will reply promptly.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

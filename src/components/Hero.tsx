import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Cpu, ShieldCheck, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0F17] text-white">
      {/* Background Silicon Microchip Grid Pattern */}
      <div className="absolute inset-0 silicon-grid-pattern opacity-20 pointer-events-none" />

      {/* Full-Height Unboxed Left Portrait Image (Mirrored & Seamlessly Blended) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
        <img
          src="/avinash_maurya.jpg"
          alt="Avinash Maurya"
          className="w-full h-full object-cover object-top scale-x-[-1] opacity-85 lg:opacity-95"
        />
        {/* Soft Radial & Linear Gradients for Seamless Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0F17]/70 to-[#0B0F17]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/80" />
      </div>

      {/* Decorative Alignment Overlay Marks */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-slate-700 pointer-events-none hidden md:block">
        [GDSII DIE ORIGIN X:000.00 Y:000.00]
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-slate-700 pointer-events-none hidden md:block">
        [EUV MASK BOUNDARY: CLEAN]
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Spacer for Left Image Alignment on Desktop */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none h-full" />

          {/* Right Hero Copy Column (Overlaid cleanly) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Semiconductor R&D Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F62FE]/20 border border-[#0F62FE]/40 text-[#60A5FA] text-xs font-mono font-semibold mb-6 backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Samsung Semiconductor India R&D Centre</span>
            </div>

            {/* Large Name Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Designation Subheading */}
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#3B82F6] mb-6 flex flex-wrap items-center gap-2">
              <span>{PERSONAL_INFO.title}</span>
              <span className="text-slate-600 font-normal">|</span>
              <span className="text-slate-300 font-normal text-lg sm:text-xl">Standard Cells & Physical Layout Architecture</span>
            </h2>

            {/* Core Value Proposition Paragraph */}
            <div className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-3xl space-y-4">
              <p>
                Avinash Maurya is a Staff Engineer in Layout Design at Samsung Semiconductor India R&D Centre in Bengaluru, possessing over 8 years of specialized expertise in standard cell library layout development and physical verification methodology.
              </p>
              <p className="text-slate-400">
                Having completed his M.Tech in Microelectronics from the prestigious BITS Pilani and having spent nearly 6 years at Synopsys
              </p>
            </div>

            {/* Key Quick Badge Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-10 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                Bengaluru R&D Centre
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
                M.Tech Microelectronics (BITS Pilani)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                DRC / LVS / DFM / ICV
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F62FE] rounded-2xl hover:bg-[#0353E9] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/40 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-700 cursor-pointer backdrop-blur-md"
              >
                <svg className="w-4 h-4 fill-[#60A5FA]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.36-2.54 1.96-2.54 1.57 0 1.59 1.47 1.59 2.62v4.85h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

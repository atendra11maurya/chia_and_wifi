import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Cpu, ShieldCheck, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background Microchip Substrate Grid Pattern */}
      <div className="absolute inset-0 silicon-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Microchip Corner IC Alignment Targets */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-gray-300 pointer-events-none hidden md:block">
        [GDSII DIE ORIGIN X:000.00 Y:000.00]
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-gray-300 pointer-events-none hidden md:block">
        [EUV MASK BOUNDARY: CLEAN]
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Hero Image Column (5 cols) - Mirrored Facing Right */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-start items-center relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden border border-gray-200/90 shadow-2xl bg-[#090D16] group">
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Portrait Image (Mirrored horizontally scale-x-[-1]) */}
              <img
                src="/avinash_maurya.jpg"
                alt="Avinash Maurya - Staff Engineer"
                className="w-full h-full object-cover object-top scale-x-[-1] transition-transform duration-500 ease-out"
              />

              {/* Floating Profile Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-gray-900">Avinash Maurya</div>
                  <div className="text-[11px] font-mono text-[#0F62FE]">Staff Engineer @ Samsung R&D</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Active R&D" />
              </div>
            </div>
          </motion.div>

          {/* Right Hero Copy Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Semiconductor R&D Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF4FE] border border-[#0F62FE]/30 text-[#0F62FE] text-xs font-mono font-semibold mb-6">
              <Cpu className="w-3.5 h-3.5 text-[#0F62FE]" />
              <span>Samsung Semiconductor India R&D Centre</span>
            </div>

            {/* Large Name Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Designation Subheading */}
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#0F62FE] mb-6 flex flex-wrap items-center gap-2">
              <span>{PERSONAL_INFO.title}</span>
              <span className="text-gray-300 font-normal">|</span>
              <span className="text-gray-700 font-normal text-lg sm:text-xl">Standard Cells & Physical Layout Architecture</span>
            </h2>

            {/* Core Value Proposition Paragraph */}
            <div className="text-gray-900 text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-3xl space-y-4">
              <p>
                Avinash Maurya is a Staff Engineer in Layout Design at Samsung Semiconductor India R&D Centre in Bengaluru, possessing over 8 years of specialized expertise in standard cell library layout development and physical verification methodology.
              </p>
              <p>
                Having completed his M.Tech in Microelectronics from the prestigious BITS Pilani and having spent nearly 6 years at Synopsys
              </p>
            </div>

            {/* Key Quick Badge Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-10 text-xs font-mono text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F9FB] border border-gray-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#0F62FE]" />
                Bengaluru R&D Centre
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F9FB] border border-gray-200 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#0F62FE]" />
                M.Tech Microelectronics (BITS Pilani)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F9FB] border border-gray-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                DRC / LVS / DFM / ICV
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F62FE] rounded-2xl hover:bg-[#0353E9] transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#0077B5]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.36-2.54 1.96-2.54 1.57 0 1.59 1.47 1.59 2.62v4.85h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

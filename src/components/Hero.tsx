import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Cpu, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* Main Light Hero Section (Vertically Lengthened & Centered) */}
      <section id="hero" className="relative min-h-[96vh] lg:min-h-[980px] flex flex-col justify-center pt-36 pb-28 md:pt-52 md:pb-44 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-[#F0F4F8] text-slate-900">
        {/* Background Silicon Microchip Grid Pattern */}
        <div className="absolute inset-0 silicon-grid-pattern opacity-60 pointer-events-none" />

        {/* ========== DESKTOP: Full-Height Left Portrait (hidden on mobile) ========== */}
        <div className="absolute top-8 md:top-12 bottom-0 left-0 w-1/2 max-w-[750px] pointer-events-none z-0 overflow-hidden hidden lg:block">
          <img
            src="/avinash_maurya.jpg"
            alt="Avinash Maurya"
            className="w-full h-full object-cover object-[center_10%] opacity-100"
          />
          {/* Soft Right Edge Blend for Smooth Section Transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F0F4F8]" />
        </div>


        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 w-full">

          {/* ========== MOBILE: Centered Portrait Image (visible only on mobile) ========== */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-center mb-10 lg:hidden"
          >
            <div className="relative w-[220px] h-[280px] rounded-[24px] overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src="/avinash_maurya.jpg"
                alt="Avinash Maurya"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Spacer for Left Image Alignment on Desktop */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none h-full" />

            {/* Right Hero Copy Column (Vertically Centered) */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >

              {/* Large Name Headline with Subtle Metallic Gradient & Dynamic Tracking */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-4">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Professional Designation Subheading with Premium Blue Accent & Pill Divider */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0F62FE] via-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent tracking-tight">
                  {PERSONAL_INFO.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:inline-block" />
                <span className="text-slate-500 font-medium text-lg sm:text-xl md:text-2xl tracking-tight hidden md:inline-block">
                  Standard Cells
                </span>
              </div>

              {/* Core Value Proposition Paragraph with Enhanced Font Weight, Size & Line-Height */}
              <div className="max-w-[95%] md:max-w-3xl mb-8">
                <p className="text-slate-600 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed md:leading-[1.6] tracking-normal">
                  Engineering high-performance standard cell libraries with a strong focus on layout precision, physical verification, and manufacturable silicon design.
                </p>
              </div>

              {/* Key Quick Badge Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5 text-base md:text-lg lg:text-xl font-bold text-slate-800 mt-2">
                <span className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/95 border border-white/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out">
                  <Cpu className="w-6 h-6 md:w-7 md:h-7 text-blue-600 shrink-0" />
                  <span className="tracking-tight">{PERSONAL_INFO.company}, Bengaluru</span>
                </span>
                <span className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/95 border border-white/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-blue-600 shrink-0" />
                  <span className="tracking-tight">M.Tech – Microelectronics | BITS Pilani</span>
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Dedicated High-Impact Gradient CTA Section (Big, Popping Buttons) */}
      <section className="bg-gradient-to-br from-[#F8F9FB] via-blue-50/30 to-[#F8F9FB] py-12 sm:py-16 px-6 relative z-20 overflow-hidden border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Get In Touch Button */}
          <button
            onClick={onOpenContact}
            className="group w-full sm:w-auto min-w-[260px] sm:min-w-[300px] inline-flex items-center justify-center gap-3.5 px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-[#0F62FE] to-[#1D4ED8] rounded-2xl sm:rounded-[20px] shadow-[0_14px_32px_-6px_rgba(15,98,254,0.45)] hover:shadow-[0_22px_44px_-6px_rgba(15,98,254,0.65)] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#0F62FE]/30 cursor-pointer"
          >
            <Send className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
            <span>Get In Touch</span>
          </button>

          {/* LinkedIn Profile Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[260px] sm:min-w-[300px] inline-flex items-center justify-center gap-3.5 px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-bold text-gray-900 bg-white border-2 border-gray-900 rounded-2xl sm:rounded-[20px] shadow-[0_14px_32px_-6px_rgba(15,23,42,0.18)] hover:shadow-[0_22px_44px_-6px_rgba(15,23,42,0.35)] hover:bg-gray-900 hover:text-white hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-gray-900/20 cursor-pointer group"
          >
            <svg className="w-6 h-6 fill-current text-[#0077B5] group-hover:text-white transition-colors" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.36-2.54 1.96-2.54 1.57 0 1.59 1.47 1.59 2.62v4.85h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-out" />
          </a>
        </div>
      </section>
    </>
  );
};

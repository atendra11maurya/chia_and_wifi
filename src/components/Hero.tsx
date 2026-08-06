import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Award, Cpu, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Hero Copy Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
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
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Specialized in sub-5nm silicon physical layout architecture, custom cell library design, and automated DRC/DFM verification. Over 8 years of deep sub-micron R&D experience spanning <span className="font-mono text-gray-900 font-semibold bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded">4nm</span> down to <span className="font-mono text-gray-900 font-semibold bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded">22nm</span> process nodes, Cadence Virtuoso & Synopsys Custom Compiler tool mastery.
            </p>

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
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F62FE] rounded-2xl hover:bg-[#0353E9] transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
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

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-gray-600 hover:text-[#0F62FE] transition-colors cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Silicon Chip Die Layout Interactive Graphic (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-gray-950 border border-gray-800 rounded-[24px] p-6 sm:p-7 relative shadow-xl text-white overflow-hidden">

              {/* Outer Microchip IC Pin Pads Graphic */}
              <div className="absolute top-0 left-12 right-12 h-2 flex justify-between">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-gray-700 rounded-b"></span>
                ))}
              </div>
              <div className="absolute bottom-0 left-12 right-12 h-2 flex justify-between">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-gray-700 rounded-t"></span>
                ))}
              </div>

              {/* Top Silicon Die Status */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-800 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-gray-200 font-bold">SILICON DIE: SUB-5NM</span>
                </div>
                <div className="text-[11px] text-[#60A5FA] bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/80">
                  GDSII PASS
                </div>
              </div>

              {/* Central Semiconductor Die Floorplan SVG Illustration */}
              <div className="relative aspect-square rounded-2xl bg-gray-900 border border-gray-800 p-5 flex flex-col items-center justify-center text-center mb-5 overflow-hidden">

                {/* Silicon Circuit Track Background Vector Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 200 200" fill="none">
                  <path d="M0 20 H200 M0 40 H200 M0 60 H200 M0 80 H200 M0 100 H200 M0 120 H200 M0 140 H200 M0 160 H200 M0 180 H200" stroke="#0F62FE" strokeWidth="0.8" strokeDasharray="4 4" />
                  <path d="M20 0 V200 M40 0 V200 M60 0 V200 M80 0 V200 M100 0 V200 M120 0 V200 M140 0 V200 M160 0 V200 M180 0 V200" stroke="#0F62FE" strokeWidth="0.8" strokeDasharray="4 4" />

                  {/* Standard Cell Power Rails */}
                  <line x1="0" y1="30" x2="200" y2="30" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="0" y1="170" x2="200" y2="170" stroke="#60A5FA" strokeWidth="2" />

                  {/* Poly Gates */}
                  <rect x="40" y="25" width="6" height="150" fill="#EF4444" opacity="0.8" />
                  <rect x="80" y="25" width="6" height="150" fill="#EF4444" opacity="0.8" />
                  <rect x="120" y="25" width="6" height="150" fill="#EF4444" opacity="0.8" />
                  <rect x="160" y="25" width="6" height="150" fill="#EF4444" opacity="0.8" />

                  {/* Via Contact Points */}
                  <circle cx="43" cy="50" r="3" fill="#10B981" />
                  <circle cx="83" cy="90" r="3" fill="#10B981" />
                  <circle cx="123" cy="130" r="3" fill="#10B981" />
                  <circle cx="163" cy="150" r="3" fill="#10B981" />
                </svg>

                {/* Microchip Silicon Core Badge */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#0F62FE]/20 border border-[#0F62FE]/60 text-[#60A5FA] flex items-center justify-center mb-3 shadow-lg">
                  <Cpu className="w-10 h-10" />
                </div>

                <div className="relative z-10 font-heading font-bold text-white text-lg">
                  Avinash Maurya
                </div>
                <div className="relative z-10 text-xs font-mono text-gray-400 mt-0.5">
                  Samsung Semiconductor R&D
                </div>

                {/* Sub-5nm EUV Node Pill */}
                <div className="relative z-10 inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-md bg-gray-800 border border-gray-700 text-[11px] font-mono text-emerald-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>4nm EUV Standard Cells</span>
                </div>
              </div>

              {/* Silicon Metric Stats */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-[#60A5FA]">8+ Years</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Layout R&D</div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-emerald-400">4nm - 22nm</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Nodes Shipped</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

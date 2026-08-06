import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, GitBranch, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Standard Cell Architecture",
      description: "Exploration and layout design of high-density combinational, sequential, level shifter, and power-gating cell topologies.",
      icon: Cpu
    },
    {
      title: "Physical Verification & QA",
      description: "Rigorous DRC, LVS, DFM, ERC, and ICV sign-off pipelines to guarantee zero-defect silicon yields across complex sub-micron nodes.",
      icon: ShieldCheck
    },
    {
      title: "Deep Sub-Micron Physics",
      description: "Expert navigation of nanometer lithography trade-offs including SRAF placement, EUV mask decomposition, and EM/IR constraints.",
      icon: Layers
    },
    {
      title: "Flow & Scripting Automation",
      description: "Developing robust Shell and Tcl automation scripts to standardize layout QA checklists and accelerate turnaround times.",
      icon: GitBranch
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F9FB] border-y border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>01 // EXECUTIVE SUMMARY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Engineering Precision in Sub-Micron Silicon
          </h2>
        </div>

        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

          {/* Main Copy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-5 text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            <p className="text-gray-900 font-medium text-lg sm:text-xl leading-snug">
              Avinash Maurya is a Staff Engineer in Layout Design at <span className="text-[#0F62FE]">Samsung Semiconductor India R&D Centre</span> in Bengaluru, possessing over 8 years of specialized expertise in standard cell library layout development and physical verification methodology.
            </p>
            <p>
              Having completed his M.Tech in Microelectronics from the prestigious <strong className="text-gray-900 font-semibold">BITS Pilani</strong> and having spent nearly 6 years at <strong className="text-gray-900 font-semibold">Synopsys Inc</strong> prior to joining Samsung, Avinash possesses an end-to-end understanding of standard cell topology, place-and-route grid compatibility, and sub-micron DRC/DFM compliance.
            </p>

          </motion.div>

          {/* Quick Highlight Box (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <Award className="w-5 h-5 text-[#0F62FE]" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg">Key Professional Metrics</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">8+ Years Experience</span>
                  <p className="text-xs text-gray-500">Dedicated to Standard Cell Layout & Physical Design</p>
                </div>
              </div>



              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">M.Tech in Microelectronics</span>
                  <p className="text-xs text-gray-500">Birla Institute of Technology & Science (BITS), Pilani</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">EDA Tool Mastery</span>
                  <p className="text-xs text-gray-500">Cadence Virtuoso, Synopsys Custom Compiler & ICC II</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 hover:border-[#0F62FE]/40 transition-all hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EFF4FE] text-[#0F62FE] flex items-center justify-center mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, GitBranch } from 'lucide-react';

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
    <section id="about" className="py-24 bg-white border-t border-gray-200/80">
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

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F8F9FB] border border-gray-200/80 rounded-2xl p-6 hover:border-[#0F62FE]/40 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer"
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

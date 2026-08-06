import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wrench, ShieldCheck, Layers, Code2, Users } from 'lucide-react';
import { TECHNICAL_EXPERTISE } from '../data/profileData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  Wrench,
  ShieldCheck,
  Layers,
  Code2,
  Users
};

export const TechnicalExpertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>04 // TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Core Competencies & Capabilities
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            A comprehensive matrix of technical domains, specialized EDA toolsuites, and layout verification skills.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_EXPERTISE.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Cpu;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#F8F9FB] border border-gray-200/90 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#0F62FE]/40 hover:shadow-sm transition-all group"
              >
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-[#0F62FE] flex items-center justify-center shadow-2xs group-hover:bg-[#0F62FE] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
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

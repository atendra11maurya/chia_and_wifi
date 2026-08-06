import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/profileData';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-white border-t border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>03 // CAREER PROGRESSION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Professional Trajectory
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Over 8 years of continuous progression from Graduate Engineering Intern to Staff Engineer at Samsung Semiconductor India R&D Centre.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className="bg-[#F8F9FB] border border-gray-200/90 rounded-[20px] p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[#0F62FE]/40 transition-all duration-300 ease-out">

                {/* Top Row Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="font-heading text-base font-semibold text-[#0F62FE]">
                      {item.company}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                  {item.summary}
                </p>

                {/* Bottom Tags */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">

                  {/* Tools */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-gray-400 uppercase">Key Tools:</span>
                    {item.keyTools.map(tool => (
                      <span key={tool} className="px-2.5 py-1 bg-[#F8F9FB] border border-gray-200 rounded-md text-xs font-mono text-gray-700">
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

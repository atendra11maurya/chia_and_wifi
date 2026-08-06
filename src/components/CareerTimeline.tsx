import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/profileData';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-[#F8F9FB] border-t border-gray-200/80">
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
        <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 space-y-12">
          {EXPERIENCE_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Circle Icon */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 transition-colors flex items-center justify-center ${item.isCurrent
                ? 'border-white bg-[#0F62FE] ring-4 ring-[#0F62FE]/20'
                : 'border-white bg-gray-400 group-hover:bg-[#0F62FE]'
                }`} />

              {/* Card Container */}
              <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">

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

                  <div className="flex flex-col sm:items-end font-mono text-xs text-gray-500 gap-1">
                    <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {item.period}
                    </span>
                    <span className="text-gray-400 font-medium">({item.duration})</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-700 text-sm sm:text-base mb-5 leading-relaxed">
                  {item.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  {item.highlights.map((point, pointIdx) => (
                    <div key={pointIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-[#0F62FE] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

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

                  {/* Nodes */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-gray-400 uppercase">Nodes:</span>
                    {item.keyNodes.map(node => (
                      <span key={node} className="px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#0F62FE] rounded text-xs font-mono font-bold">
                        {node}
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

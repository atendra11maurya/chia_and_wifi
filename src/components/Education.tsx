import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/profileData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#F8F9FB] border-t border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>07 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Education & Academic Credentials
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Post-graduate degree in Microelectronics from BITS Pilani paired with foundational Electronics & Communication engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.slice(0, 2).map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                {/* Header Icon & Degree */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF4FE] text-[#0F62FE] flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-xl leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="font-heading text-[#0F62FE] font-semibold text-base">
                      {edu.field}
                    </div>
                  </div>
                </div>

                {/* Institution & Dates */}
                <div className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                  <div className="font-semibold text-gray-900">{edu.institution}</div>
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {edu.period}
                    </span>
                    {edu.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {edu.location}
                      </span>
                    )}
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

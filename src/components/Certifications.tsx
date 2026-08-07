import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/profileData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-white border-t border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Certifications & Vocational Training
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Verified certifications in semiconductor engineering, custom ASIC layout design, and analytical domain competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#F8F9FB] border border-gray-200/90 rounded-[24px] p-8 sm:p-10 flex flex-col justify-between hover:border-[#0F62FE]/50 hover:shadow-lg transition-all duration-300 ease-out cursor-pointer"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 text-[#0F62FE] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 ease-out">
                    <Award className="w-7 h-7 group-hover:rotate-6 transition-transform duration-300 ease-out" />
                  </div>
                  {cert.badge && (
                    <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0F62FE] text-xs sm:text-sm font-mono font-bold border border-blue-200">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-gray-900 text-xl sm:text-2xl mb-3 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-600 text-sm sm:text-base font-medium mb-6">
                  Issued by <span className="text-gray-900 font-semibold">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs sm:text-sm font-mono text-gray-500">
                <span>{cert.category}</span>
                {cert.date && <span className="font-semibold text-gray-700">{cert.date}</span>}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

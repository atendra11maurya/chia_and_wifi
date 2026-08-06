import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/profileData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>08 // CERTIFICATIONS & CREDENTIALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Certifications & Vocational Training
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Verified certifications in semiconductor engineering, custom ASIC layout design, and analytical domain competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#F8F9FB] border border-gray-200/90 rounded-[20px] p-6 flex flex-col justify-between hover:border-[#0F62FE]/40 transition-all hover:shadow-xs"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#0F62FE] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0F62FE] text-[11px] font-mono font-bold border border-blue-200">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-gray-900 text-base mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-600 text-xs font-medium mb-4">
                  Issued by <span className="text-gray-900 font-semibold">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>{cert.category}</span>
                {cert.date && <span>{cert.date}</span>}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

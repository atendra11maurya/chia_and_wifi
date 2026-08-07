import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/profileData';

export const Experience: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("samsung");

  const activeExp = EXPERIENCE_DATA.find(e => e.id === selectedCompany) || EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="py-24 bg-[#F8F9FB] border-t border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Role Architecture & Deliverables
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Detailed breakdown of key responsibilities, physical verification ownership, and EDA toolflows across each position.
          </p>
        </div>

        {/* Company Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-200 pb-4">
          {EXPERIENCE_DATA.map((item) => {
            const isSelected = item.id === selectedCompany;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCompany(item.id)}
                className={`px-4 py-2.5 rounded-xl font-heading text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${isSelected
                    ? 'bg-[#0F62FE] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                  }`}
              >
                <Building2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#0F62FE]'}`} />
                <span>{item.company}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-10 shadow-sm"
          >
            <div className="flex flex-col gap-6">

              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                    {activeExp.role}
                  </h3>
                  <div className="font-heading text-lg font-semibold text-[#0F62FE]">
                    {activeExp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-600">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
                    <Calendar className="w-3.5 h-3.5 text-[#0F62FE]" />
                    {activeExp.period} ({activeExp.duration})
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {activeExp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                {activeExp.summary}
              </p>

              {/* Core Deliverables Grid */}
              <div className="space-y-3">
                <h4 className="font-heading text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Key Technical Ownership & Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeExp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#F8F9FB] border border-gray-200/80 p-3.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-[#0F62FE] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environment / Tools */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-mono text-gray-400 uppercase">Tools & Environment:</span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.keyTools.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs font-mono font-semibold text-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

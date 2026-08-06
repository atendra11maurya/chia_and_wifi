import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-[24px] border border-gray-200 shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#F8F9FB]">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0F62FE]" />
              <span className="font-heading font-bold text-gray-900 text-base">
                Avinash_Maurya_Staff_Engineer_Resume.pdf
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-gray-500" />
                <span>Print / Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-8 sm:p-12 overflow-y-auto font-sans space-y-8 bg-white" id="printable-resume">
            
            {/* Document Header */}
            <div className="border-b border-gray-200 pb-6">
              <h1 className="font-heading text-3xl font-bold text-gray-900 mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <div className="font-heading text-lg font-semibold text-[#0F62FE] mb-2">
                {PERSONAL_INFO.title} | {PERSONAL_INFO.company}
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-600">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span>✉️ {PERSONAL_INFO.email}</span>
                <span>📞 {PERSONAL_INFO.phone}</span>
                <span>🎓 M.Tech Microelectronics (BITS Pilani)</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="font-heading text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0F62FE]" />
                Professional Summary
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Core Capabilities */}
            <div>
              <h2 className="font-heading text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0F62FE]" />
                Technical Competencies & Process Nodes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-700">
                <div className="bg-[#F8F9FB] p-3 rounded-lg border border-gray-200/80">
                  <strong className="text-gray-900">Process Nodes:</strong> 4nm, 5nm, 6nm, 7nm, 8nm, 10nm, 12nm, 22nm
                </div>
                <div className="bg-[#F8F9FB] p-3 rounded-lg border border-gray-200/80">
                  <strong className="text-gray-900">EDA Tools:</strong> Cadence Virtuoso, Custom Compiler, ICC II, Calibre
                </div>
                <div className="bg-[#F8F9FB] p-3 rounded-lg border border-gray-200/80">
                  <strong className="text-gray-900">Physical Verification:</strong> DRC, LVS, DFM, ERC, ICV, Antenna Checks
                </div>
                <div className="bg-[#F8F9FB] p-3 rounded-lg border border-gray-200/80">
                  <strong className="text-gray-900">Scripting & OS:</strong> Shell, Bash, Tcl, Linux RHEL
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="font-heading text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#0F62FE]" />
                Professional Work Experience
              </h2>
              <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-4 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading font-bold text-gray-900 text-base">
                        {exp.role} — <span className="text-[#0F62FE]">{exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{exp.summary}</p>
                    <ul className="space-y-1 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <span className="text-[#0F62FE] font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="font-heading text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0F62FE]" />
                Education Credentials
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start text-xs">
                    <div>
                      <strong className="font-heading font-bold text-gray-900">{edu.degree} ({edu.field})</strong>
                      <div className="text-gray-600">{edu.institution}</div>
                    </div>
                    <span className="font-mono text-gray-500">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-gray-200 bg-[#F8F9FB] flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-[#0F62FE] text-white rounded-xl text-xs font-semibold hover:bg-[#0353E9] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Print</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Cpu, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-[24px] border border-gray-200 shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#F8F9FB]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF4FE] text-[#0F62FE] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#0F62FE] font-bold uppercase">{project.codename}</span>
                <h3 className="font-heading text-lg font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-[#0F62FE] font-bold rounded-lg">
                {project.node}
              </span>
              <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {project.status}
              </span>
              {project.isConfidential && (
                <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 font-medium rounded-lg flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                  NDA Confidential Project
                </span>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Project Overview</h4>
              <p className="text-gray-700 text-sm leading-relaxed font-medium bg-[#F8F9FB] border border-gray-200/80 p-4 rounded-xl">
                {project.overview}
              </p>
            </div>

            {/* Technical Challenge */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Technical Challenge</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Layout Methodology */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Layout Methodology & Architecture</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {project.methodology}
              </p>
            </div>

            {/* Silicon Impact */}
            <div className="bg-[#EFF4FE] border border-[#0F62FE]/20 rounded-xl p-4">
              <h4 className="text-xs font-mono text-[#0F62FE] font-bold uppercase tracking-wider mb-1">Silicon & P&R Impact</h4>
              <p className="text-gray-900 font-semibold text-sm">
                {project.impact}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Toolsuite & Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-800 rounded-lg text-xs font-mono font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-gray-200 bg-[#F8F9FB] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

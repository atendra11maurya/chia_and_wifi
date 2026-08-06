import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowUpRight } from 'lucide-react';
import { CONFIDENTIAL_PROJECTS } from '../data/profileData';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const SelectedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>06 // SELECTED PROJECTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Confidential Semiconductor Projects
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Demonstrated layout architectural engineering across production commercial silicon blocks. Specific netlists and proprietary specs protected under NDA.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONFIDENTIAL_PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F8F9FB] border border-gray-200 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#0F62FE]/50 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 ease-out group cursor-pointer"
            >
              <div>
                {/* Top Badges Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-[#0F62FE] bg-white px-3 py-1 rounded-lg border border-gray-200">
                    {proj.node}
                  </span>
                  {proj.isConfidential && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-mono font-medium border border-amber-200">
                      <Lock className="w-3 h-3" />
                      Confidential NDA
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-3 group-hover:text-[#0F62FE] transition-colors duration-300">
                  {proj.title}
                </h3>

                {/* Overview */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {proj.overview}
                </p>

                {/* Impact Highlight Box */}
                <div className="bg-white border border-gray-200/90 rounded-xl p-4 mb-6 group-hover:border-gray-300 transition-colors duration-300">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                    Key Silicon Metric Impact
                  </span>
                  <span className="text-gray-900 text-sm font-semibold">
                    {proj.impact}
                  </span>
                </div>
              </div>

              {/* Action Button & Tech tags */}
              <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {proj.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[11px] font-mono">
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded text-[11px] font-mono">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F62FE] group-hover:text-[#0353E9] transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

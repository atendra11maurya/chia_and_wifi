import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, CheckCircle2, Zap, Cpu } from 'lucide-react';
import { TECH_NODES } from '../data/profileData';
import { GdsiiVisualizer } from './GdsiiVisualizer';
import { TransistorArchitecture } from './TransistorArchitecture';

export const TechNodes: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("4nm");

  const activeNode = TECH_NODES.find(n => n.id === selectedNodeId) || TECH_NODES[0];

  return (
    <section id="tech-nodes" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // SEMICONDUCTOR NODES & GDSII LAYOUT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Sub-Micron Technology & GDSII Inspection
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Hands-on layout development, standard cell library exploration, and physical verification experience across 8 advanced process nodes.
          </p>
        </div>

        {/* Interactive Node Selector Pills Row */}
        <div className="flex flex-wrap items-center gap-2.5 pb-6 mb-8 border-b border-gray-100">
          {TECH_NODES.map((item) => {
            const isSelected = item.id === selectedNodeId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedNodeId(item.id)}
                className={`relative px-5 py-3 rounded-2xl font-mono text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${isSelected
                    ? 'bg-[#0F62FE] text-white shadow-sm'
                    : 'bg-[#F8F9FB] text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                  }`}
              >
                <span>{item.node}</span>
                {item.category === 'EUV' && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-semibold ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#0F62FE]'
                    }`}>
                    EUV
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Node Details Display Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F8F9FB] border border-gray-200 rounded-[20px] p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">

                {/* Node Title Header */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0F62FE]">
                    {activeNode.node}
                  </span>
                  <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
                  <span className="font-heading text-xl font-bold text-gray-900">
                    {activeNode.name}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-gray-200 text-xs font-mono font-medium text-gray-700">
                    {activeNode.category} Process
                  </span>
                </div>

                {/* Node Overview */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {activeNode.description}
                </p>

                {/* Scaling Factor */}
                <div className="bg-white border border-gray-200/90 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#0F62FE]" />
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Density Metrics</span>
                  </div>
                  <span className="font-mono font-bold text-gray-900 text-sm">{activeNode.transistorDensityRelative}</span>
                </div>

                {/* Verification Scope Tags */}
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Physical Verification Jobs Executed</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.verificationScope.map(v => (
                      <span
                        key={v}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-mono font-semibold text-gray-800 shadow-2xs"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Challenges & Solutions (5 cols) */}
              <div className="lg:col-span-5 bg-white border border-gray-200/90 rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <h4 className="font-heading font-semibold text-gray-900 text-sm">
                    Key Layout Challenges & Trade-offs
                  </h4>
                </div>

                <ul className="space-y-3">
                  {activeNode.keyChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-[#0F62FE] shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* 1. Cadence Virtuoso Style GDSII Layer Inspector Component */}
        <GdsiiVisualizer />

        {/* 2. Transistor Architecture & Track Height Scaling Cross-Section */}
        <TransistorArchitecture />

      </div>
    </section>
  );
};

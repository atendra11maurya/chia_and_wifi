import React, { useState } from 'react';
import { ShieldCheck, Layers } from 'lucide-react';

interface ArchItem {
  id: string;
  node: string;
  name: string;
  gateType: string;
  finPitch: string;
  trackHeight: string;
  lithography: string;
  description: string;
  transistorSvg: React.ReactNode;
}

export const TransistorArchitecture: React.FC = () => {
  const [selectedArch, setSelectedArch] = useState<string>("4nm");

  const architectures: ArchItem[] = [
    {
      id: "4nm",
      node: "4nm / 5nm EUV",
      name: "Extreme Ultraviolet FinFET / GAA",
      gateType: "3D Multi-Fin / EUV Gate Cut",
      finPitch: "27nm Fin Pitch",
      trackHeight: "5.5 Track (165nm)",
      lithography: "Single Exposure EUV (High NA)",
      description: "Sub-5nm EUV FinFET standard cell layout featuring extreme track height reduction (5.5T), sub-resolution assist features (SRAF), and continuous diffusion rules (CNP/CPB).",
      transistorSvg: (
        <svg className="w-full h-44" viewBox="0 0 320 160" fill="none">
          {/* Substrate */}
          <rect x="20" y="110" width="280" height="40" fill="#1E293B" rx="4" />
          <text x="120" y="135" fill="#94A3B8" fontSize="10" fontFamily="monospace">Silicon Substrate (FinFET)</text>

          {/* 3D Vertical FinFET Fins */}
          <rect x="60" y="50" width="16" height="65" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />
          <rect x="110" y="50" width="16" height="65" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />
          <rect x="160" y="50" width="16" height="65" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />
          <rect x="210" y="50" width="16" height="65" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />

          {/* Wraparound Gate (Poly/HKMG) */}
          <rect x="40" y="30" width="210" height="35" fill="rgba(239, 68, 68, 0.75)" stroke="#EF4444" strokeWidth="1.5" rx="4" />
          <text x="75" y="52" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">EUV HKMG GATE WRAP</text>

          {/* Contact Via */}
          <rect x="135" y="10" width="20" height="20" fill="#0F62FE" stroke="#60A5FA" strokeWidth="1" />
          <text x="140" y="24" fill="#FFF" fontSize="9" fontStyle="monospace">V0</text>
        </svg>
      )
    },
    {
      id: "7nm",
      node: "7nm FinFET",
      name: "SADP Multi-Patterning FinFET",
      gateType: "3D FinFET (Self-Aligned)",
      finPitch: "34nm Fin Pitch",
      trackHeight: "7.5 Track (225nm)",
      lithography: "193i Immersion DUV + SADP",
      description: "Production 7nm FinFET layout utilizing Self-Aligned Double Patterning (SADP) for Metal 1 and Poly gate pitch assignment with strict coloring rules.",
      transistorSvg: (
        <svg className="w-full h-44" viewBox="0 0 320 160" fill="none">
          {/* Substrate */}
          <rect x="20" y="110" width="280" height="40" fill="#1E293B" rx="4" />
          <text x="120" y="135" fill="#94A3B8" fontSize="10" fontFamily="monospace">Substrate</text>

          {/* FinFET Fins */}
          <rect x="80" y="60" width="22" height="55" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />
          <rect x="150" y="60" width="22" height="55" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />
          <rect x="220" y="60" width="22" height="55" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" rx="2" />

          {/* Gate */}
          <rect x="60" y="35" width="200" height="35" fill="rgba(239, 68, 68, 0.75)" stroke="#EF4444" strokeWidth="1.5" rx="4" />
          <text x="100" y="56" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">SADP POLY GATE</text>
        </svg>
      )
    },
    {
      id: "22nm",
      node: "22nm Planar",
      name: "Planar Bulk CMOS",
      gateType: "Planar Top Gate",
      finPitch: "Planar Channel",
      trackHeight: "9.0 Track (360nm)",
      lithography: "193i Single Exposure DUV",
      description: "Classic planar CMOS cell topology with wide channel widths, oxide isolation STI regions, and conservative metal routing rules.",
      transistorSvg: (
        <svg className="w-full h-44" viewBox="0 0 320 160" fill="none">
          {/* Planar Substrate */}
          <rect x="20" y="80" width="280" height="70" fill="#1E293B" rx="4" />
          <text x="120" y="125" fill="#94A3B8" fontSize="10" fontFamily="monospace">Planar Bulk Oxide</text>

          {/* Planar Diffusion Channel */}
          <rect x="50" y="80" width="220" height="15" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
          <text x="100" y="92" fill="#1E293B" fontSize="9" fontFamily="monospace" fontWeight="bold">PLANAR CHANNEL</text>

          {/* Flat Top Gate */}
          <rect x="110" y="45" width="100" height="35" fill="rgba(239, 68, 68, 0.75)" stroke="#EF4444" strokeWidth="1.5" rx="2" />
          <text x="130" y="66" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">PLANAR GATE</text>
        </svg>
      )
    }
  ];

  const activeArch = architectures.find(a => a.id === selectedArch) || architectures[0];

  return (
    <div className="bg-[#F8F9FB] border border-gray-200 rounded-[24px] p-6 sm:p-8 my-12 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-bold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>TRANSISTOR ARCHITECTURE EVOLUTION</span>
          </div>
          <h3 className="font-heading font-bold text-gray-900 text-xl">
            Physical Transistor & Track Height Scaling
          </h3>
        </div>

        {/* Arch Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {architectures.map(arch => (
            <button
              key={arch.id}
              onClick={() => setSelectedArch(arch.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedArch === arch.id
                  ? 'bg-[#0F62FE] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {arch.node}
            </button>
          ))}
        </div>
      </div>

      {/* Main Arch Graphic & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Interactive SVG Render (6 cols) */}
        <div className="lg:col-span-6 bg-gray-900 border border-gray-800 rounded-2xl p-6 text-white shadow-inner flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-gray-800 pb-3 mb-4">
            <span className="text-[#0F62FE] font-bold">{activeArch.name}</span>
            <span>SUB-MICRON CROSS-SECTION</span>
          </div>

          <div className="my-2">
            {activeArch.transistorSvg}
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-gray-800 pt-3">
            <span>FIN PITCH: <strong className="text-white">{activeArch.finPitch}</strong></span>
            <span>TRACK: <strong className="text-[#0F62FE]">{activeArch.trackHeight}</strong></span>
          </div>
        </div>

        {/* Right Architectural Specs (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-[#0F62FE]">{activeArch.node}</span>
            <span className="font-heading font-semibold text-gray-900 text-lg">({activeArch.gateType})</span>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            {activeArch.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-white border border-gray-200 p-3.5 rounded-xl">
              <span className="text-[11px] font-mono text-gray-400 uppercase block mb-1">Standard Cell Track</span>
              <span className="font-mono font-bold text-gray-900 text-sm">{activeArch.trackHeight}</span>
            </div>

            <div className="bg-white border border-gray-200 p-3.5 rounded-xl">
              <span className="text-[11px] font-mono text-gray-400 uppercase block mb-1">Lithography Layer</span>
              <span className="font-mono font-bold text-[#0F62FE] text-sm">{activeArch.lithography}</span>
            </div>
          </div>

          <div className="p-3.5 bg-blue-50 border border-blue-200/80 rounded-xl flex items-center gap-3 text-xs font-mono text-blue-950 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#0F62FE] shrink-0" />
            <span>Silicon proven layout topology optimized for Synopsys ICC II place & route routability.</span>
          </div>
        </div>

      </div>

    </div>
  );
};

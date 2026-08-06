import React, { useState } from 'react';
import { Layers, Eye, EyeOff, Cpu, ShieldCheck } from 'lucide-react';

interface LayerState {
  id: string;
  name: string;
  gdsNumber: string;
  color: string;
  strokeColor: string;
  visible: boolean;
}

export const GdsiiVisualizer: React.FC = () => {
  const [layers, setLayers] = useState<LayerState[]>([
    { id: 'nwell', name: 'N-Well (NW)', gdsNumber: 'GDS: 1/0', color: 'rgba(239, 246, 255, 0.7)', strokeColor: '#93C5FD', visible: true },
    { id: 'active', name: 'Active Diffusion (RX)', gdsNumber: 'GDS: 3/0', color: 'rgba(254, 243, 199, 0.8)', strokeColor: '#F59E0B', visible: true },
    { id: 'poly', name: 'Poly Gate (PC)', gdsNumber: 'GDS: 5/0', color: 'rgba(252, 165, 165, 0.85)', strokeColor: '#EF4444', visible: true },
    { id: 'via0', name: 'Contact Via (V0)', gdsNumber: 'GDS: 6/0', color: 'rgba(17, 24, 39, 0.9)', strokeColor: '#111827', visible: true },
    { id: 'm1', name: 'Metal 1 Rail (M1)', gdsNumber: 'GDS: 7/0', color: 'rgba(15, 98, 254, 0.85)', strokeColor: '#0F62FE', visible: true },
    { id: 'm2', name: 'Metal 2 Pin (M2)', gdsNumber: 'GDS: 9/0', color: 'rgba(16, 185, 129, 0.85)', strokeColor: '#10B981', visible: true },
  ]);

  const [activeCellType, setActiveCellType] = useState<'NAND2' | 'DFF' | 'LEVEL_SHIFTER'>('NAND2');
  const [showDrcOverlay, setShowDrcOverlay] = useState(true);

  const toggleLayer = (id: string) => {
    setLayers(prev => prev.map(l => l.id === id ? { ...l, visible: !l.visible } : l));
  };

  const isVisible = (id: string) => layers.find(l => l.id === id)?.visible ?? true;

  return (
    <div className="bg-white border border-gray-200 rounded-[24px] p-6 sm:p-8 shadow-sm my-12">
      
      {/* Visualizer Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-bold mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>CADENCE VIRTUOSO GDSII LAYOUT ENGINE</span>
          </div>
          <h3 className="font-heading font-bold text-gray-900 text-xl">
            Interactive Standard Cell GDSII Layer Inspector
          </h3>
        </div>

        {/* Cell Topology Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCellType('NAND2')}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeCellType === 'NAND2'
                ? 'bg-[#0F62FE] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            NAND2_X1 (4nm EUV)
          </button>
          <button
            onClick={() => setActiveCellType('DFF')}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeCellType === 'DFF'
                ? 'bg-[#0F62FE] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            DFF_HQ_X2 (5nm)
          </button>
          <button
            onClick={() => setActiveCellType('LEVEL_SHIFTER')}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeCellType === 'LEVEL_SHIFTER'
                ? 'bg-[#0F62FE] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            LSHF_ISO (7nm)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Layer Visibility Control Panel (4 cols) */}
        <div className="lg:col-span-4 bg-[#F8F9FB] border border-gray-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <span className="font-mono text-xs font-bold uppercase text-gray-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0F62FE]" />
              GDSII Layer Stack
            </span>
            <button
              onClick={() => setShowDrcOverlay(!showDrcOverlay)}
              className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                showDrcOverlay
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : 'bg-gray-100 border-gray-200 text-gray-500'
              }`}
            >
              DRC Overlay: {showDrcOverlay ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="space-y-2">
            {layers.map((layer) => (
              <div
                key={layer.id}
                onClick={() => toggleLayer(layer.id)}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                  layer.visible
                    ? 'bg-white border-gray-200 shadow-2xs'
                    : 'bg-gray-50 border-gray-200 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-md border"
                    style={{ backgroundColor: layer.color, borderColor: layer.strokeColor }}
                  />
                  <div>
                    <div className="text-xs font-semibold text-gray-900">{layer.name}</div>
                    <div className="text-[10px] font-mono text-gray-400">{layer.gdsNumber}</div>
                  </div>
                </div>

                {layer.visible ? (
                  <Eye className="w-4 h-4 text-[#0F62FE]" />
                ) : (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1.5 text-xs font-mono text-gray-600">
            <div className="flex justify-between">
              <span className="text-gray-400">Cell Height:</span>
              <span className="font-bold text-gray-900">5.5 Track (165nm)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">CPP (Contacted Poly Pitch):</span>
              <span className="font-bold text-gray-900">45nm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Fin Pitch:</span>
              <span className="font-bold text-[#0F62FE]">27nm</span>
            </div>
          </div>
        </div>

        {/* Interactive Vector GDSII Layout Canvas (8 cols) */}
        <div className="lg:col-span-8 bg-gray-950 rounded-2xl p-6 relative overflow-hidden border border-gray-800 shadow-inner flex flex-col justify-between min-h-[380px]">
          
          {/* Top Canvas Status */}
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-gray-800 pb-3 mb-4 z-10">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              CALIBRE DRC: 0 ERRORS [CLEAN]
            </span>
            <span>CELL: {activeCellType}_STD_4NM</span>
            <span>SCALE: 1nm : 4px</span>
          </div>

          {/* Canvas Standard Cell Layout Render SVG */}
          <div className="relative w-full h-[260px] flex items-center justify-center">
            
            <svg className="w-full h-full" viewBox="0 0 500 240" fill="none">
              
              {/* Background Grid Lines (10nm grid) */}
              <defs>
                <pattern id="gdsGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="2 2" />
                </pattern>
              </defs>
              <rect width="500" height="240" fill="url(#gdsGrid)" />

              {/* 5.5T Track Boundary Guide Lines */}
              <line x1="0" y1="20" x2="500" y2="20" stroke="#0F62FE" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="0" y1="220" x2="500" y2="220" stroke="#0F62FE" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

              {/* 1. N-Well Layer */}
              {isVisible('nwell') && (
                <rect x="10" y="20" width="480" height="100" fill="rgba(30, 58, 138, 0.4)" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 2" />
              )}

              {/* 2. Active Diffusion (RX Fins) */}
              {isVisible('active') && (
                <>
                  {/* PMOS Fins (Top) */}
                  <rect x="40" y="40" width="420" height="16" fill="#D97706" fillOpacity="0.7" stroke="#F59E0B" strokeWidth="1" />
                  <rect x="40" y="70" width="420" height="16" fill="#D97706" fillOpacity="0.7" stroke="#F59E0B" strokeWidth="1" />
                  {/* NMOS Fins (Bottom) */}
                  <rect x="40" y="150" width="420" height="16" fill="#D97706" fillOpacity="0.7" stroke="#F59E0B" strokeWidth="1" />
                  <rect x="40" y="180" width="420" height="16" fill="#D97706" fillOpacity="0.7" stroke="#F59E0B" strokeWidth="1" />
                </>
              )}

              {/* 3. Poly Gates (PC) */}
              {isVisible('poly') && (
                <>
                  <rect x="80" y="10" width="14" height="220" fill="#EF4444" fillOpacity="0.8" stroke="#F87171" strokeWidth="1" />
                  <rect x="160" y="10" width="14" height="220" fill="#EF4444" fillOpacity="0.8" stroke="#F87171" strokeWidth="1" />
                  <rect x="240" y="10" width="14" height="220" fill="#EF4444" fillOpacity="0.8" stroke="#F87171" strokeWidth="1" />
                  <rect x="320" y="10" width="14" height="220" fill="#EF4444" fillOpacity="0.8" stroke="#F87171" strokeWidth="1" />
                  <rect x="400" y="10" width="14" height="220" fill="#EF4444" fillOpacity="0.8" stroke="#F87171" strokeWidth="1" />
                </>
              )}

              {/* 4. Metal 1 Interconnect & Power Rails */}
              {isVisible('m1') && (
                <>
                  {/* VDD Top Power Rail */}
                  <rect x="10" y="10" width="480" height="20" fill="#0F62FE" fillOpacity="0.9" stroke="#60A5FA" strokeWidth="1.5" />
                  {/* VSS Bottom Power Rail */}
                  <rect x="10" y="210" width="480" height="20" fill="#0F62FE" fillOpacity="0.9" stroke="#60A5FA" strokeWidth="1.5" />
                  
                  {/* Internal Metal 1 Signal Traces */}
                  <rect x="75" y="80" width="100" height="14" fill="#0F62FE" fillOpacity="0.85" stroke="#93C5FD" strokeWidth="1" />
                  <rect x="235" y="145" width="100" height="14" fill="#0F62FE" fillOpacity="0.85" stroke="#93C5FD" strokeWidth="1" />
                  <rect x="315" y="80" width="100" height="14" fill="#0F62FE" fillOpacity="0.85" stroke="#93C5FD" strokeWidth="1" />
                </>
              )}

              {/* 5. Contact Vias (V0) */}
              {isVisible('via0') && (
                <>
                  <rect x="82" y="13" width="10" height="14" fill="#F8FAFC" stroke="#000" strokeWidth="1" />
                  <rect x="82" y="213" width="10" height="14" fill="#F8FAFC" stroke="#000" strokeWidth="1" />
                  <rect x="162" y="42" width="10" height="12" fill="#F8FAFC" stroke="#000" strokeWidth="1" />
                  <rect x="242" y="146" width="10" height="12" fill="#F8FAFC" stroke="#000" strokeWidth="1" />
                  <rect x="322" y="81" width="10" height="12" fill="#F8FAFC" stroke="#000" strokeWidth="1" />
                  <rect x="402" y="182" width="10" height="12" fill="#F8FAFC" stroke="#000" strokeWidth="1" />
                </>
              )}

              {/* 6. Metal 2 Pins (M2) */}
              {isVisible('m2') && (
                <>
                  <rect x="155" y="30" width="24" height="110" fill="#10B981" fillOpacity="0.85" stroke="#6EE7B7" strokeWidth="1.5" />
                  <rect x="315" y="100" width="24" height="110" fill="#10B981" fillOpacity="0.85" stroke="#6EE7B7" strokeWidth="1.5" />
                  
                  {/* Pin Terminal Labels */}
                  <text x="160" y="70" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">A</text>
                  <text x="320" y="160" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">Y</text>
                </>
              )}

              {/* DRC Rules Measurements Overlay */}
              {showDrcOverlay && (
                <>
                  {/* CPP Measurement */}
                  <line x1="87" y1="230" x2="167" y2="230" stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="110" y="238" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">CPP: 45nm</text>
                  
                  {/* Metal Tip-to-Tip Measurement */}
                  <line x1="178" y1="87" x2="232" y2="87" stroke="#38BDF8" strokeWidth="1.5" />
                  <text x="182" y="80" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">T2T: 18nm</text>
                </>
              )}

            </svg>
          </div>

          {/* Canvas Bottom Legend */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-400 border-t border-gray-800 pt-3 z-10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#0F62FE]"></span> VDD/VSS M1</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#EF4444]"></span> Poly Gate</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#10B981]"></span> M2 Pin</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#F59E0B]"></span> FinFET RX</span>
            </div>
            <div className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% DRC/LVS PASSED
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

import React from 'react';
import { Cpu, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#EFF4FE] text-[#0F62FE] flex items-center justify-center mb-6">
        <Cpu className="w-8 h-8" />
      </div>
      <h1 className="font-mono text-6xl font-extrabold text-[#0F62FE] mb-2">404</h1>
      <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
        Sub-Micron Layout Address Not Found
      </h2>
      <p className="text-gray-600 text-sm max-w-md mb-8">
        The specified component routing parameter does not match any valid address in the semiconductor design hierarchy.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F62FE] text-white rounded-2xl text-sm font-semibold hover:bg-[#0353E9] transition-all shadow-sm"
      >
        <Home className="w-4 h-4" />
        <span>Return to Primary Website</span>
      </a>
    </div>
  );
};

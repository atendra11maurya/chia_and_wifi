import React, { useState, useEffect } from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  const [bengaluruTime, setBengaluruTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setBengaluruTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-gray-100">

          {/* Brand Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F62FE] text-white flex items-center justify-center font-mono font-bold text-xl">
              AM
            </div>
            <div>
              <div className="font-heading font-bold text-gray-900 text-lg">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-gray-500 font-mono">
                Staff Layout Design Engineer | Samsung Semiconductor
              </div>
            </div>
          </div>

          {/* Bengaluru Clock Widget */}
          <div className="bg-[#F8F9FB] border border-gray-200/80 rounded-2xl px-5 py-3 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#0F62FE]" />
                Bengaluru, India (IST)
              </div>
              <div className="font-mono text-sm font-bold text-gray-900">
                {bengaluruTime || '01:10:16 AM'}
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} Avinash Maurya. All rights reserved. Proprietary semiconductor work protected under NDA.
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with React, TypeScript, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Career', href: '#career' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll progress bar */}
      <div className="h-0.5 bg-gray-100 w-full">
        <div
          className="h-full bg-[#0F62FE] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`w-full transition-all duration-200 ${isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200/80 shadow-sm py-3'
          : 'bg-white py-5 border-b border-gray-100'
          }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Desktop Navigation Links (Pill-Style Navigation) */}
          <div className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-6 py-2.5 text-base md:text-lg font-bold rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0F62FE] text-white shadow-sm hover:bg-[#0353E9] scale-105'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action Buttons (Far Right Corner) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm md:text-base font-bold text-white bg-[#0F62FE] rounded-2xl hover:bg-[#0353E9] hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out shadow-sm focus:outline-none focus:ring-4 focus:ring-[#0F62FE]/30 cursor-pointer"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-5 mt-3 shadow-lg flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-[#0F62FE] py-1 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0F62FE] rounded-xl"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

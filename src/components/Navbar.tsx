import React, { useState, useEffect } from 'react';
import { FileText, Send, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact, activeSection }) => {
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
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/20 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F62FE] text-white flex items-center justify-center font-mono font-bold text-lg shadow-sm group-hover:bg-[#0353E9] transition-colors">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-gray-900 text-base leading-tight group-hover:text-[#0F62FE] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Staff Engineer @ Samsung
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0F62FE] ${isActive ? 'text-[#0F62FE] font-semibold' : 'text-gray-600'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/20 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#0F62FE]" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0F62FE] rounded-xl hover:bg-[#0353E9] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <FileText className="w-4 h-4 text-[#0F62FE]" />
                <span>View Resume</span>
              </button>

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

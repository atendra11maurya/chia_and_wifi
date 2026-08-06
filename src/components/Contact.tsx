import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

export const Contact: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'location' | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (message: string, field: 'email' | 'location') => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setCopiedField(field);
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
      setCopiedField(null);
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    showToast('Email copied', 'email');
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F9FB] border-t border-gray-200/80 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-mono font-semibold mb-4">
            <span>06 // CONNECT & COLLABORATE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Interested in VLSI design, physical design, or collaboration? I'd love to hear from you.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Left Column: Contact Information Outer Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-gray-200/90 rounded-[20px] p-6 sm:p-10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between gap-6"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 tracking-tight mb-3">
                Contact Details
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Primary contact channels for direct communication, technical inquiries, and professional location base.
              </p>

              <div className="flex flex-col gap-5">
                {/* Row 1: Email */}
                <div className="p-4 sm:p-5 bg-[#F8F9FB] border border-gray-200/80 rounded-2xl flex items-center justify-between group hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-0.5">Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm sm:text-base font-semibold text-gray-900 hover:text-[#2563EB] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email to clipboard"
                    className="p-2.5 rounded-xl text-gray-400 hover:text-[#2563EB] hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    <motion.div
                      key={copiedField === 'email' ? 'check' : 'copy'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.div>
                  </button>
                </div>

                {/* Row 2: Location */}
                <div className="p-4 sm:p-5 bg-[#F8F9FB] border border-gray-200/80 rounded-2xl flex items-center justify-between group hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-0.5">Location</div>
                      <a
                        href="https://maps.google.com/?q=Bengaluru,+Karnataka,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-gray-900 hover:text-[#2563EB] transition-colors"
                      >
                        {PERSONAL_INFO.location}
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Bengaluru,+Karnataka,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open location on Google Maps"
                    className="p-2.5 rounded-xl text-gray-400 hover:text-[#2563EB] hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer shrink-0 ml-2"
                    title="Open on Google Maps"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white border border-gray-200/90 rounded-[20px] p-6 sm:p-10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 tracking-tight mb-3">
                Ready to discuss an opportunity?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Whether you have a technical inquiry or a potential project, feel free to reach out via email or connect professionally on LinkedIn.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              {/* Primary Button (Blue) */}
              <a
                href="mailto:pine.avinash@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Avinash,%0A%0AI%20came%20across%20your%20portfolio..."
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white bg-[#2563EB] rounded-2xl hover:bg-[#1d4ed8] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
              >
                <Mail className="w-6 h-6" />
                <span>Email Me</span>
              </a>

              {/* Secondary Button (White) */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 sm:py-6 text-lg sm:text-xl font-bold text-[#2563EB] bg-white border-2 border-[#2563EB] rounded-2xl hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
              >
                <svg className="w-6 h-6 fill-[#2563EB]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.36-2.54 1.96-2.54 1.57 0 1.59 1.47 1.59 2.62v4.85h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-5 h-5 text-[#2563EB]" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating Bottom-Right Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 bg-gray-900 text-white rounded-2xl shadow-xl text-sm font-medium border border-gray-800 pointer-events-none"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

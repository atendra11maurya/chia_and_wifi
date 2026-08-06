import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/profileData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F9FB] border-t border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF4FE] text-[#0F62FE] text-xs font-mono font-medium mb-3">
            <span>09 // CONNECT & COLLABORATE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Initiate Professional Dialogue
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Interested in sub-micron layout architecture, standard cell methodology collaboration, or semiconductor technical inquiry? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Direct Details (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-[24px] p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-5">
                {/* Email Box */}
                <div className="p-4 bg-[#F8F9FB] border border-gray-200/80 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#0F62FE] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase">Primary Email</div>
                      <div className="text-sm font-semibold text-gray-900">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-gray-500 hover:text-[#0F62FE] hover:bg-white transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 bg-[#F8F9FB] border border-gray-200/80 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#0F62FE] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Primary Base</div>
                    <div className="text-sm font-semibold text-gray-900">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* LinkedIn Link */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#F8F9FB] border border-gray-200/80 rounded-2xl flex items-center justify-between hover:border-[#0077B5]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#0077B5] flex items-center justify-center">
                      <svg className="w-5 h-5 fill-[#0077B5]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.36-2.54 1.96-2.54 1.57 0 1.59 1.47 1.59 2.62v4.85h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase">Professional Network</div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0077B5] transition-colors">
                        LinkedIn Profile
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0077B5] transition-colors" />
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#0F62FE]" />
              <span>Preview & Download Resume</span>
            </button>

          </div>

          {/* Right Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-[24px] p-6 sm:p-8 shadow-sm">
            <h3 className="font-heading font-bold text-gray-900 text-xl mb-6">
              Send a Professional Inquiry
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#EFF4FE] border border-[#0F62FE]/30 rounded-2xl p-8 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#0F62FE] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 text-lg">Inquiry Sent Successfully</h4>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Your message has been received and will be reviewed promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-gray-600 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sarah Chen"
                    className="w-full px-4 py-3 bg-[#F8F9FB] border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 focus:border-[#0F62FE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-600 uppercase mb-2">Corporate / Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah.chen@semiconductor.com"
                    className="w-full px-4 py-3 bg-[#F8F9FB] border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 focus:border-[#0F62FE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-600 uppercase mb-2">Inquiry / Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your inquiry or collaboration proposal..."
                    className="w-full px-4 py-3 bg-[#F8F9FB] border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 focus:border-[#0F62FE]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F62FE] rounded-2xl hover:bg-[#0353E9] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/30 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

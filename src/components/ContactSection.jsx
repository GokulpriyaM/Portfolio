import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  FileText, 
  Sparkles, 
  MessageSquare,
  Globe 
} from 'lucide-react';

export default function ContactSection({ onOpenResume }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect & <span className="github-gradient-text">Hire Gokulpriya M.</span>
          </h2>
          <p className="text-[#c9d1d9] text-sm sm:text-base">
            Open to Senior Business Analyst, Product Delivery Lead, and Agile Governance roles (Remote & On-site). Notice period: 30 Days.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="gh-card p-6 sm:p-7 border-[#30363d] bg-[#161b22] space-y-5">
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2 border-b border-[#30363d] pb-3">
                <Sparkles className="w-4 h-4 text-[#8957e5]" />
                <span>Verified Direct Contact Info</span>
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <div className="bg-[#010409] border border-[#30363d] rounded-lg p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#161b22] text-[#58a6ff]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#8b949e] font-mono">PRIMARY EMAIL</div>
                      <a href="mailto:gokulpriya1996@gmail.com" className="text-xs font-bold text-white font-mono hover:text-[#58a6ff]">
                        gokulpriya1996@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('gokulpriya1996@gmail.com', 'email')}
                    className="p-1.5 rounded bg-[#21262d] text-[#8b949e] hover:text-white"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-[#3fb950]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="bg-[#010409] border border-[#30363d] rounded-lg p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#161b22] text-[#3fb950]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#8b949e] font-mono">PHONE / WHATSAPP</div>
                      <a href="tel:9566886585" className="text-xs font-bold text-white font-mono hover:text-[#3fb950]">
                        +91 9566886585
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+919566886585', 'phone')}
                    className="p-1.5 rounded bg-[#21262d] text-[#8b949e] hover:text-white"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#3fb950]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="bg-[#010409] border border-[#30363d] rounded-lg p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#161b22] text-[#58a6ff]">
                      <svg className="w-4 h-4 fill-current text-[#58a6ff]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#8b949e] font-mono">LINKEDIN PROFILE</div>
                      <a 
                        href="https://www.linkedin.com/in/gokulpriya-m-589864125" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-bold text-white font-mono hover:text-[#58a6ff] truncate block max-w-[180px]"
                      >
                        gokulpriya-m-589864125
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/gokulpriya-m-589864125"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded bg-[#21262d] text-[#8b949e] hover:text-white"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#30363d] space-y-2 text-xs font-mono text-[#8b949e]">
                <div className="flex justify-between bg-[#010409] p-2.5 rounded border border-[#30363d]">
                  <span>LOCATION:</span>
                  <span className="text-white font-bold">Coimbatore (Remote & On-site)</span>
                </div>
                <div className="flex justify-between bg-[#010409] p-2.5 rounded border border-[#30363d]">
                  <span>NOTICE PERIOD:</span>
                  <span className="text-[#3fb950] font-bold">30 Days</span>
                </div>
              </div>

              <button
                onClick={onOpenResume}
                className="btn-gh-secondary w-full justify-center text-xs py-2.5"
              >
                <FileText className="w-4 h-4 text-[#58a6ff]" />
                <span>Open Full Printable Resume</span>
              </button>

            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="gh-card p-6 sm:p-8 border-[#30363d] bg-[#161b22]">
              
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0e4429] border border-[#006d32] text-[#3fb950] flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">Message Transmitted Successfully!</h3>
                  <p className="text-[#8b949e] text-xs max-w-md mx-auto font-light">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Gokulpriya will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="btn-gh-secondary text-xs py-2 px-4"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div className="flex items-center gap-3 border-b border-[#30363d] pb-3 mb-2">
                    <div className="p-2 rounded bg-[#010409] text-[#a371f7] border border-[#30363d]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Send Message</h3>
                      <p className="text-xs text-[#8b949e]">Direct dispatch to Gokulpriya's inbox</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] text-[#8b949e]">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#010409] border border-[#30363d] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-[#8b949e]">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#010409] border border-[#30363d] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-[#8b949e]">COMPANY / ORGANIZATION</label>
                    <input
                      type="text"
                      placeholder="Acme Corp / Tech Solutions"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#010409] border border-[#30363d] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-[#8b949e]">MESSAGE / INQUIRY DETAILS *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Hello Gokulpriya, we are looking for a Senior Business Analyst for our Industrial IoT / SaaS platform..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#010409] border border-[#30363d] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-gh-primary w-full justify-center text-xs py-3"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message & Confetti 🎉</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

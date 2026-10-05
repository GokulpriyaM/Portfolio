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

    // Trigger celebration confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-600/30 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title text-white">
            Initiate Conversation or <span className="gradient-text-primary">Hire Gokulpriya</span>
          </h2>
          <p className="text-slate-400 text-base">
            Open to Senior Business Analyst, Product Delivery Lead, and Agile Governance roles (Remote & On-Site). Available on 30 days notice.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-8 border-indigo-500/30 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">EMAIL ADDRESS</div>
                      <a href="mailto:gokulpriya1996@gmail.com" className="text-sm font-bold text-white hover:text-indigo-300 transition-colors">
                        gokulpriya1996@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('gokulpriya1996@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">PHONE NUMBER</div>
                      <a href="tel:9566886585" className="text-sm font-bold text-white hover:text-emerald-300 transition-colors">
                        +91 9566886585
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+919566886585', 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">LINKEDIN PROFILE</div>
                      <a 
                        href="https://www.linkedin.com/in/gokulpriya-m-589864125" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-sm font-bold text-white hover:text-blue-300 transition-colors truncate block max-w-[200px]"
                      >
                        gokulpriya-m-589864125
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/gokulpriya-m-589864125"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Status Chips */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono bg-indigo-950/40 p-3 rounded-xl border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span>Location: Coimbatore, India</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Remote & On-site</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 font-mono bg-purple-950/40 p-3 rounded-xl border border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Notice Period:</span>
                  </div>
                  <span className="text-cyan-300 font-bold">30 Days</span>
                </div>
              </div>

              <button
                onClick={onOpenResume}
                className="btn-secondary w-full justify-center text-sm py-3"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Open Full Resume Preview</span>
              </button>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 border-indigo-500/30 relative">
              
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto font-light">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Gokulpriya will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="btn-secondary text-xs py-2.5 px-4"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-2">
                    <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
                      <p className="text-xs text-slate-400">Fill out the form below to reach out directly</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">COMPANY / ORGANIZATION</label>
                    <input
                      type="text"
                      placeholder="Acme Corp / Tech Solutions"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">PROJECT DETAILS / MESSAGE *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Hello Gokulpriya, we are looking for a Senior Business Analyst for our IoT / SaaS platform..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-sm py-3.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Trigger Confetti 🎉</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

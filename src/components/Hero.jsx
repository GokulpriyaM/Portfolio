import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GitBranch, 
  Zap,
  MapPin,
  FileText
} from 'lucide-react';
import LiveGoogleDoc from './LiveGoogleDoc';

export default function Hero({ onOpenResume }) {
  const headlineRef = useRef(null);

  useEffect(() => {
    // Anime.js text reveal effect
    if (headlineRef.current) {
      headlineRef.current.innerHTML = headlineRef.current.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      anime({
        targets: '.letter',
        translateY: [25, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => 200 + i * 25
      });
    }
  }, []);

  return (
    <section id="about" className="relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center bg-transparent">
      
      {/* GitHub Glowing Background Orbs */}
      <div className="gh-glow-purple -top-20 -left-40 animate-pulse" />
      <div className="gh-glow-blue top-40 -right-20" />
      <div className="gh-glow-green bottom-10 left-1/3" />

      {/* GitHub Signature Vertical Beam Branch Line */}
      <div className="gh-branch-line hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pl-6 sm:pl-14">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Badge Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#21262d] text-[#58a6ff] border border-[#30363d]">
                <GitBranch className="w-3.5 h-3.5 text-[#8957e5]" />
                <span>Notice: 30 Days</span>
                <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-ping" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8b949e] bg-[#161b22] border border-[#30363d]">
                <MapPin className="w-3.5 h-3.5 text-[#d2a8ff]" />
                <span>Coimbatore, India (Remote & On-site)</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs font-mono text-[#8957e5] font-bold uppercase tracking-widest block mb-2">
                Senior Business Analyst & Product Delivery Lead
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Build business value like GitHub builds{' '}
                <span ref={headlineRef} className="github-gradient-text block">
                  Gokulpriya M.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#8b949e] text-sm sm:text-base leading-relaxed font-light max-w-xl">
              Architecting requirements engineering, Agile backlog delivery, and ISO 9001 governance for{' '}
              <strong className="text-white font-semibold">Industrial IoT (MES, WMS, QMS, AMM)</strong>,{' '}
              <strong className="text-[#58a6ff] font-semibold">SaaS platforms</strong> & Enterprise ERPs.
            </p>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-2.5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#58a6ff]">50+</div>
                <div className="text-[11px] text-[#8b949e] mt-0.5">Stakeholder Workshops</div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-2.5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#a371f7]">35%</div>
                <div className="text-[11px] text-[#8b949e] mt-0.5">Faster Sprint Starts</div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-2.5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#3fb950]">40%</div>
                <div className="text-[11px] text-[#8b949e] mt-0.5">Rework Reduction</div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-2.5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#f0883e]">98%</div>
                <div className="text-[11px] text-[#8b949e] mt-0.5">User Adoption Rate</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#products" className="btn-gh-primary">
                <span>Explore Products & Repos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#calculator" className="btn-gh-purple">
                <Zap className="w-4 h-4 text-[#d2a8ff]" />
                <span>BA Impact Calculator</span>
              </a>

              <button onClick={onOpenResume} className="btn-gh-secondary">
                <FileText className="w-4 h-4 text-[#58a6ff]" />
                <span>View Resume</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Live Google Docs Collaborative Deliverable */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <LiveGoogleDoc />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

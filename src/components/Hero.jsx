import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Zap, 
  FileCheck, 
  Download,
  Users
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const nameRef = useRef(null);

  useEffect(() => {
    // Anime.js text reveal for title
    if (nameRef.current) {
      nameRef.current.innerHTML = nameRef.current.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          translateY: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: (el, i) => 300 + 40 * i
        });
    }
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-600/30 top-10 -left-40 animate-pulse" />
      <div className="glow-orb w-[450px] h-[450px] bg-purple-600/25 top-40 right-0" />
      <div className="glow-orb w-[350px] h-[350px] bg-pink-600/20 bottom-10 left-1/3" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="glass-pill text-indigo-300 border-indigo-500/30 bg-indigo-500/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-xs font-semibold text-emerald-300">Notice: 30 Days</span>
              </div>
              <div className="glass-pill text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>Coimbatore, India (Remote & On-Site)</span>
              </div>
              <div className="glass-pill text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>6+ Years BA Experience</span>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <span className="section-tag mb-3">Senior Business Analyst & Product Delivery Lead</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mt-2">
                Hi, I'm{' '}
                <span ref={nameRef} className="gradient-text-primary block mt-1">
                  Gokulpriya M.
                </span>
              </h1>
            </div>

            {/* Professional Summary Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Bridging complex business challenges and scalable tech solutions. Specializing in{' '}
              <strong className="text-white font-semibold">Requirements Engineering</strong>,{' '}
              <strong className="text-indigo-300 font-semibold">Agile Product Delivery</strong>, and{' '}
              <strong className="text-cyan-300 font-semibold">Industrial IoT (MES, WMS, QMS, AMM)</strong> & Enterprise ERP implementations.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                <div className="text-2xl font-bold font-mono text-indigo-400">50+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Stakeholder Workshops</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                <div className="text-2xl font-bold font-mono text-purple-400">35%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Faster Sprint Starts</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                <div className="text-2xl font-bold font-mono text-pink-400">40%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Rework Reduction</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                <div className="text-2xl font-bold font-mono text-emerald-400">98%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">User Adoption Rate</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#products" className="btn-primary">
                <span>View Products & Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#calculator" className="btn-secondary">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>BA Impact Calculator</span>
              </a>

              <button onClick={onOpenResume} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 text-slate-300 hover:text-white transition-all">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 relative overflow-hidden group border-indigo-500/30">
              {/* Glowing Background Overlay */}
              <div className="absolute -right-16 -top-16 w-60 h-60 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Current Impact Lead</h3>
                    <p className="text-xs text-slate-400 font-mono">Aagnia Technologies</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ACTIVE ROLE
                </span>
              </div>

              {/* Active Product Highlight: IOT3Sixty */}
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Active Product Domain</span>
                    <span className="text-[10px] text-slate-400">Industrial IoT</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">IOT3Sixty Platform</h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/20 text-indigo-300">MES</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/20 text-cyan-300">WMS</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-500/20 text-purple-300">QMS</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-pink-500/20 text-pink-300">AMM</span>
                  </div>
                </div>

                {/* ISO 9001 Framework Highlight */}
                <div className="bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border border-indigo-500/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold font-mono uppercase">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>ISO 9001 Governance Framework</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Engineered an 11-phase project governance framework with 15+ standardized BA templates, steering a 20-member cross-functional delivery team.
                  </p>
                </div>

                {/* Key Skills Chip List */}
                <div className="pt-2">
                  <span className="text-xs text-slate-400 block mb-2 font-mono">CORE CAPABILITIES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Requirements Engineering', 'BRD / FRD / SRS', 'User Stories & AC', 'Fit-Gap Analysis', 'Agile / Scrum', 'UAT Delivery', 'JIRA & Confluence', 'Postman / SQL'].map((sk) => (
                      <span key={sk} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

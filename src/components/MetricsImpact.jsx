import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  Layers, 
  Zap,
  Target
} from 'lucide-react';

export default function MetricsImpact() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Anime.js counter animation when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targets = entry.target.querySelectorAll('.counter-val');
          targets.forEach(el => {
            const finalVal = parseInt(el.getAttribute('data-value') || '0', 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';

            anime({
              targets: el,
              innerHTML: [0, finalVal],
              easing: 'easeOutExpo',
              round: 1,
              duration: 2500,
              update: (anim) => {
                const val = anim.animations[0].currentValue;
                el.innerHTML = `${prefix}${Math.round(val)}${suffix}`;
              }
            });
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      label: 'Requirement Cycle Time',
      value: 35,
      prefix: '',
      suffix: '%',
      tag: '35% Faster Clarification',
      desc: 'Reduced requirement clarification loops, enabling engineering teams to kick off sprints 2–3 days earlier.',
      icon: Clock,
      gradient: 'from-indigo-500 to-purple-500',
      color: 'text-indigo-400'
    },
    {
      label: 'Rework Reduction',
      value: 40,
      prefix: '',
      suffix: '%',
      tag: 'ISO 9001 Governance',
      desc: 'Formulated 11-phase project governance framework with 15+ templates, significantly reducing sprint rework.',
      icon: ShieldCheck,
      gradient: 'from-pink-500 to-rose-500',
      color: 'text-pink-400'
    },
    {
      label: 'Stakeholder Workshops',
      value: 50,
      prefix: '',
      suffix: '+',
      tag: 'Elicitation Excellence',
      desc: 'Led structured workshops across industrial IoT, healthcare, SaaS, and manufacturing business owners.',
      icon: Users,
      gradient: 'from-cyan-500 to-blue-500',
      color: 'text-cyan-400'
    },
    {
      label: 'UAT Defect Detection',
      value: 95,
      prefix: '',
      suffix: '%',
      tag: 'Quality Gatekeeping',
      desc: 'Achieved 95% pre-release defect detection rate with zero critical production incidents across 4+ releases.',
      icon: Target,
      gradient: 'from-emerald-500 to-teal-500',
      color: 'text-emerald-400'
    },
    {
      label: 'Go-Live User Adoption',
      value: 98,
      prefix: '',
      suffix: '%',
      tag: 'Go-Live + 7 Days',
      desc: 'Driven by end-user training, change management, and 30-day dedicated hypercare support.',
      icon: CheckCircle,
      gradient: 'from-amber-500 to-orange-500',
      color: 'text-amber-400'
    },
    {
      label: 'Agile Backlog Items',
      value: 200,
      prefix: '',
      suffix: '+',
      tag: '3 Concurrent Teams',
      desc: 'Managed 200+ detailed backlog items with acceptance criteria, user flows, and RTM traceability.',
      icon: Layers,
      gradient: 'from-violet-500 to-indigo-500',
      color: 'text-violet-400'
    }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="container-custom" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Quantifiable Business Value</span>
          <h2 className="section-title text-white">
            Proven Track Record & <span className="gradient-text-primary">Measurable ROI</span>
          </h2>
          <p className="text-slate-400 text-base">
            Every requirement documented and process designed is focused on accelerating delivery speed, ensuring software quality, and driving business adoption.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 relative group border-white/10 hover:border-indigo-500/50"
              >
                {/* Glow Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full group-hover:opacity-25 transition-opacity`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-extrabold font-mono text-white tracking-tight flex items-baseline gap-1">
                    <span
                      className="counter-val gradient-text-primary"
                      data-value={item.value}
                      data-prefix={item.prefix}
                      data-suffix={item.suffix}
                    >
                      {item.prefix}0{item.suffix}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{item.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

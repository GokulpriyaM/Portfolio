import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Building2, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: 'Aagnia Technologies',
      role: 'Senior Business Analyst',
      period: 'May 2023 – Present',
      location: 'Coimbatore, India',
      type: 'Full-Time',
      isCurrent: true,
      accent: 'from-indigo-500 to-purple-500',
      highlights: [
        'Conducted 50+ stakeholder workshops and translated business needs into user stories, acceptance criteria, functional requirements, process flows, and RTM; reduced requirement clarification cycles by 35%.',
        'Designed an ISO 9001-aligned 11-phase project governance framework with 15+ standardized templates; led a 20-member cross-functional team and reduced rework by 40%.',
        'Managed 200+ backlog items across 3 engineering teams and facilitated sprint planning, daily stand-ups, backlog refinement, sprint reviews, and retrospectives.',
        'Coordinated UAT and go-live activities across 4+ production releases, achieving 95% defect detection, zero critical production incidents, and 98% user adoption by Go-Live +7.'
      ]
    },
    {
      company: 'LP Career Solution',
      role: 'HR Manager',
      period: 'Mar 2019 – Sep 2020',
      location: 'Coimbatore, India',
      type: 'Full-Time',
      isCurrent: false,
      accent: 'from-purple-500 to-pink-500',
      highlights: [
        'Managed candidate support throughout the immigration service lifecycle, from initial job application through visa acceptance.',
        'Coordinated with candidates, recruiters, employers, and stakeholders to track requirements, application progress, documentation, and follow-ups.',
        'Prepared and maintained visa-related documentation and candidate records while resolving issues and ensuring timely completion of application activities.'
      ]
    },
    {
      company: 'Personiv Pvt Ltd',
      role: 'Quality Controller',
      period: 'Dec 2017 – Feb 2019',
      location: 'Coimbatore, India',
      type: 'Full-Time',
      isCurrent: false,
      award: 'Awarded Best Performer',
      accent: 'from-amber-500 to-orange-500',
      highlights: [
        'Validated 100+ daily records for YellowPages.com (Salesforce backend) at 99.5% accuracy.',
        'Led an 8-member QC team: achieved +20% productivity, -15% rework, and +10% client satisfaction.',
        'Recognized with the Best Performer Award for quality and delivery excellence.'
      ]
    },
    {
      company: 'Koni Ameri Tech Pvt Ltd',
      role: 'Testing Support Specialist',
      period: 'Mar 2017 – Dec 2017',
      location: 'Coimbatore, India',
      type: 'Full-Time',
      isCurrent: false,
      accent: 'from-cyan-500 to-blue-500',
      highlights: [
        'Conducted functional and integration testing for Medaz healthcare desktop/web applications - drug/pharmacy database validation, client invoicing, NIST testing.',
        'Defined medical billing software testing scripts and medical code structure/format definitions foundational to current ERP UAT delivery approach.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background Orbs */}
      <div className="glow-orb w-[450px] h-[450px] bg-purple-600/15 top-1/3 left-0" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title text-white">
            Professional <span className="gradient-text-secondary">Work Experience</span>
          </h2>
          <p className="text-slate-400 text-base">
            6+ years of progressive growth across business analysis, project governance, quality engineering, and cross-functional team leadership.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-white/10 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot Icon */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1 w-10 h-10 rounded-full bg-gradient-to-br ${exp.accent} border-4 border-[#080c14] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-card p-6 sm:p-8 border-white/10 hover:border-indigo-500/40 relative">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          PRESENT
                        </span>
                      )}
                      {exp.award && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>{exp.award}</span>
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-indigo-400 flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5 justify-end text-purple-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

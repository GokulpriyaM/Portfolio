import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Building2, 
  GitCommit 
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
      badgeColor: 'border-[#006d32] text-[#3fb950] bg-[#0e4429]/40',
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
      badgeColor: 'border-[#30363d] text-[#58a6ff] bg-[#161b22]',
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
      badgeColor: 'border-[#30363d] text-[#e3b341] bg-[#161b22]',
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
      badgeColor: 'border-[#30363d] text-[#8b949e] bg-[#161b22]',
      highlights: [
        'Conducted functional and integration testing for Medaz healthcare desktop/web applications - drug/pharmacy database validation, client invoicing, NIST testing.',
        'Defined medical billing software testing scripts and medical code structure/format definitions foundational to current ERP UAT delivery approach.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono text-[#58a6ff] font-bold uppercase tracking-widest">
            GitHub Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="github-blue-gradient">Work Experience</span>
          </h2>
          <p className="text-[#8b949e] text-sm">
            6+ years of progressive growth across business analysis, project governance, quality engineering, and cross-functional team leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-[#30363d] pl-6 sm:pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Branch Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-10 h-10 rounded-full bg-[#161b22] border-2 border-[#58a6ff] flex items-center justify-center text-[#58a6ff] shadow-lg group-hover:scale-110 transition-transform">
                <GitCommit className="w-4 h-4 text-[#8957e5]" />
              </div>

              {/* Experience Card */}
              <div className="gh-card p-6 sm:p-7 border-[#30363d] bg-[#161b22] relative">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#30363d]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white font-mono">{exp.role}</h3>
                      {exp.isCurrent && (
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${exp.badgeColor}`}>
                          PRESENT
                        </span>
                      )}
                      {exp.award && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#21262d] text-[#e3b341] border border-[#30363d] flex items-center gap-1">
                          <Award className="w-3 h-3 text-[#e3b341]" />
                          <span>{exp.award}</span>
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-[#58a6ff] font-mono flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-[#8b949e] space-y-0.5">
                    <div className="flex items-center gap-1.5 justify-end text-[#a371f7]">
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
                <div className="space-y-2">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#c9d1d9] leading-relaxed font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
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

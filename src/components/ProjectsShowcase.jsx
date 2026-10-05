import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  FileText, 
  ShieldCheck, 
  Award,
  BookOpen,
  Radio,
  DollarSign
} from 'lucide-react';

export default function ProjectsShowcase() {
  const projects = [
    {
      title: 'ERPNext Manufacturing ERP Implementation',
      domain: 'Manufacturing · Inventory · Finance · Sales',
      period: '3 Months',
      role: 'Lead Business Analyst & Implementation Lead',
      icon: Building,
      accent: 'from-amber-500 to-orange-500',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
      highlights: [
        'Led requirements elicitation with 15+ plant stakeholders',
        'Executed Fit-Gap Analysis covering 20 standard configs & 8 custom modules',
        'Authored BRD & FRD with 25+ user stories traced via RTM',
        'Managed UAT achieving 95% defect detection & zero critical go-live issues'
      ],
      metrics: [
        { val: '-40%', label: 'Manual Data Entry' },
        { val: '87%→98%', label: 'Inventory Accuracy' },
        { val: '2.25 Days', label: 'Order Processing (was 3d)' }
      ]
    },
    {
      title: 'Microsoft Dynamics 365 Business Central',
      domain: 'Finance · Project Accounting · Workflow Automation',
      period: '5 Months',
      role: 'Business Analyst / ERP Functional Consultant',
      icon: DollarSign,
      accent: 'from-blue-500 to-indigo-500',
      badgeColor: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
      highlights: [
        'Conducted 8 interactive workshops with 12 finance stakeholders',
        'Streamlined invoice approval workflow automation from 5 steps down to 2 steps',
        'Formulated functional configuration specifications for D365 ERP',
        'Orchestrated full financial UAT and user adoption strategy'
      ],
      metrics: [
        { val: '-30%', label: 'Approval Cycle Time' },
        { val: '90%', label: 'User Adoption in 2 Weeks' },
        { val: '100%', label: 'Automated Invoice Accuracy' }
      ]
    },
    {
      title: 'Vehicle Management System (ANPR & RFID)',
      domain: 'Fleet Logistics · Real-Time Tracking · IoT Integration',
      period: '3 Months',
      role: 'Senior Business Analyst',
      icon: Radio,
      accent: 'from-cyan-500 to-emerald-500',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      highlights: [
        'Authored 12 comprehensive user stories with detailed specs for IoT hardware triggers',
        'Coordinated with stakeholders across 3 geographic logistics sites',
        'Designed real-time vehicle entry/exit process flows & use cases',
        'Supervised field UAT testing RFID gates & automatic plate recognition'
      ],
      metrics: [
        { val: '-90%', label: 'Manual Fleet Tracking' },
        { val: 'Zero', label: 'Go-Live Incident Rate' },
        { val: '3 Sites', label: 'Concurrent Deployment' }
      ]
    },
    {
      title: 'Everest Tutoring Platform – SaaS EdTech LMS',
      domain: 'EdTech · SaaS LMS · Australia Educator CRM',
      period: '2 Years',
      role: 'Business Analyst Lead',
      icon: BookOpen,
      accent: 'from-purple-500 to-pink-500',
      badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
      highlights: [
        'Engineered 150+ user stories with acceptance criteria across 3 educator groups',
        'Designed Question Bank, Booklet Management, Tutor Portal & CRM workflows',
        'Prepared wireframes, lesson-planning logic, and coordinated international UAT',
        'Integrated automated Google Sheets synchronization for lesson plans'
      ],
      metrics: [
        { val: '500+', label: 'Educators Onboarded' },
        { val: '4.8 / 5', label: 'User Satisfaction' },
        { val: '10 hrs/wk', label: 'Saved Per Instructor' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="glow-orb w-[400px] h-[400px] bg-pink-600/15 top-1/2 right-0" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Key Enterprise Projects</span>
          <h2 className="section-title text-white">
            High-Impact <span className="gradient-text-accent">Project Case Studies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdown of key enterprise initiatives delivered with strict Agile governance, measurable business impact, and zero critical production issues.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const IconComp = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 relative flex flex-col justify-between group border-white/10 hover:border-indigo-500/40"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Domain */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.accent} text-white shrink-0 shadow-lg`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{project.domain}</p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">Key Deliverables</h4>
                    <div className="space-y-1.5">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center bg-white/5 rounded-xl p-3">
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-base font-extrabold font-mono text-white">{m.val}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  DollarSign, 
  Radio, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  GitPullRequest, 
  Award,
  Zap
} from 'lucide-react';

export default function ProjectsShowcase() {
  const projects = [
    {
      repoName: 'gokulpriya/erpnext-manufacturing-implementation',
      title: 'ERPNext Manufacturing ERP Implementation',
      domain: 'Manufacturing · Inventory · Finance · Sales',
      period: '3 Months',
      role: 'Lead Business Analyst & ERP Implementation Lead',
      icon: Building,
      badgeColor: 'border-[#006d32] text-[#3fb950] bg-[#0e4429]/40',
      highlights: [
        'Led requirements elicitation with 15+ plant stakeholders',
        'Executed Fit-Gap Analysis covering 20 standard configs & 8 custom modules',
        'Authored BRD & FRD with 25+ user stories traced via RTM',
        'Managed UAT achieving 95% defect detection & zero critical go-live issues'
      ],
      metrics: [
        { val: '-40%', label: 'Manual Data Entry' },
        { val: '87%→98%', label: 'Inventory Accuracy' },
        { val: '2.25 Days', label: 'Order Processing Time' }
      ]
    },
    {
      repoName: 'gokulpriya/dynamics-365-finance-automation',
      title: 'Microsoft Dynamics 365 Business Central',
      domain: 'Finance · Project Accounting · Workflow Automation',
      period: '5 Months',
      role: 'Business Analyst / ERP Functional Consultant',
      icon: DollarSign,
      badgeColor: 'border-[#30363d] text-[#58a6ff] bg-[#161b22]',
      highlights: [
        'Conducted 8 interactive workshops with 12 finance stakeholders',
        'Streamlined invoice approval workflow automation from 5 steps down to 2 steps',
        'Formulated functional configuration specifications for D365 ERP',
        'Orchestrated full financial UAT and user adoption strategy'
      ],
      metrics: [
        { val: '-30%', label: 'Approval Cycle Time' },
        { val: '90%', label: 'User Adoption 2 Weeks' },
        { val: '100%', label: 'Automated Invoice Accuracy' }
      ]
    },
    {
      repoName: 'gokulpriya/vehicle-management-anpr-rfid',
      title: 'Vehicle Management System (ANPR & RFID)',
      domain: 'Fleet Logistics · Real-Time Tracking · IoT Integration',
      period: '3 Months',
      role: 'Senior Business Analyst',
      icon: Radio,
      badgeColor: 'border-[#30363d] text-[#a371f7] bg-[#161b22]',
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
      repoName: 'gokulpriya/everest-tutoring-edtech-lms',
      title: 'Everest Tutoring Platform – SaaS EdTech LMS',
      domain: 'EdTech · SaaS LMS · Australia Educator CRM',
      period: '2 Years',
      role: 'Business Analyst Lead',
      icon: BookOpen,
      badgeColor: 'border-[#30363d] text-[#d2a8ff] bg-[#161b22]',
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
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono text-[#a371f7] font-bold uppercase tracking-widest">
            Key Enterprise Implementations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise <span className="github-purple-gradient">Project Case Studies</span>
          </h2>
          <p className="text-[#8b949e] text-sm">
            High-impact business initiatives delivered with strict Agile governance, measurable ROI, and zero critical production issues.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((proj, idx) => {
            const IconComp = proj.icon;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="gh-card p-6 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3 border-b border-[#30363d] pb-3">
                    <span className="text-xs font-mono text-[#58a6ff] hover:underline cursor-pointer flex items-center gap-1.5">
                      <GitPullRequest className="w-4 h-4 text-[#8957e5]" />
                      <span>{proj.repoName}</span>
                    </span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${proj.badgeColor}`}>
                      {proj.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-xs font-mono text-[#8b949e] mb-4">{proj.domain}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-[11px] font-mono text-[#a371f7] uppercase font-bold tracking-wider">Key Deliverables</h4>
                    <div className="space-y-1.5">
                      {proj.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#c9d1d9] font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Box */}
                <div className="grid grid-cols-3 gap-2 text-center bg-[#010409] border border-[#30363d] p-3 rounded-lg">
                  {proj.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-base font-extrabold font-mono text-white">{m.val}</div>
                      <div className="text-[10px] text-[#8b949e] mt-0.5">{m.label}</div>
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

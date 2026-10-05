import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, FileText, CheckCircle2, Award, GraduationCap, Building2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0d1117] border border-[#30363d] rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        >
          {/* GitHub File Viewer Header */}
          <div className="px-5 py-3 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between shrink-0 font-mono">
            <div className="flex items-center gap-2 text-xs text-[#c9d1d9]">
              <FileText className="w-4 h-4 text-[#58a6ff]" />
              <span className="font-bold">Gokulpriya_Senior_Business_Analyst_DETAILED.md</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="btn-gh-secondary text-xs py-1 px-3 flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-[#58a6ff]" />
                <span>Print PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1 rounded bg-[#21262d] text-[#8b949e] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Markdown Content Body */}
          <div className="p-8 overflow-y-auto space-y-6 font-sans text-[#c9d1d9] custom-scrollbar bg-[#0d1117]">
            
            {/* Header Info */}
            <div className="border-b border-[#30363d] pb-6">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">GOKULPRIYA MARUTHACHALAM</h1>
              <p className="text-sm font-semibold text-[#58a6ff] mt-1 font-mono">
                Senior Business Analyst | Product & Project Delivery | Requirements Engineering | Agile
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#8b949e] mt-3">
                <span>📧 gokulpriya1996@gmail.com</span>
                <span>📞 +91 9566886585</span>
                <span>🔗 linkedin.com/in/gokulpriya-m-589864125</span>
                <span>📍 Coimbatore, India (Remote & On-site)</span>
                <span className="text-[#3fb950] font-bold">Notice: 30 Days</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a371f7] border-b border-[#30363d] pb-1 mb-2">
                # PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-[#c9d1d9] leading-relaxed font-light">
                Senior Business Analyst with 6+ years of experience across business analysis, product and project delivery, requirements engineering, and Agile environments. Experienced in translating business needs into user stories, functional requirements, process flows, and UAT scenarios while coordinating with cross-functional teams. Experience across SaaS, Industrial IoT, Manufacturing, Education Technology, Project Management, Healthcare, and e-commerce products. Currently working on IOT3Sixty across MES, WMS, QMS, and AMM modules, with earlier experience in HR management and QA.
              </p>
            </div>

            {/* Core Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a371f7] border-b border-[#30363d] pb-1 mb-2">
                # CORE SKILLS
              </h2>
              <div className="grid md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#161b22] p-3 rounded border border-[#30363d]">
                  <strong className="text-white block mb-1">Business Analysis:</strong>
                  <span className="text-[#8b949e]">Requirements Elicitation | BRD | FRD | SRS | User Stories | Acceptance Criteria | Use Cases | Functional Specifications | Business Rules | RTM</span>
                </div>
                <div className="bg-[#161b22] p-3 rounded border border-[#30363d]">
                  <strong className="text-white block mb-1">Product & Project Delivery:</strong>
                  <span className="text-[#8b949e]">Product Requirements | Backlog Management | Requirement Prioritization | Sprint Planning | Release Planning | Project Coordination | Stakeholder Management | UAT | Go-Live</span>
                </div>
                <div className="bg-[#161b22] p-3 rounded border border-[#30363d]">
                  <strong className="text-white block mb-1">Process & Agile:</strong>
                  <span className="text-[#8b949e]">Agile | Scrum | SDLC | AS-IS / TO-BE | Process Mapping | GAP Analysis | Fit-Gap Analysis | BPMN | UML | Wireframing | Process Improvement</span>
                </div>
                <div className="bg-[#161b22] p-3 rounded border border-[#30363d]">
                  <strong className="text-white block mb-1">Technology & Tools:</strong>
                  <span className="text-[#8b949e]">Industrial IoT | MES | WMS | QMS | AMM | SaaS | JIRA | Confluence | SQL | Postman | Selenium | Salesforce</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a371f7] border-b border-[#30363d] pb-1 mb-3">
                # PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-white text-sm font-mono">
                    <span>Senior Business Analyst | Aagnia Technologies</span>
                    <span className="text-[#58a6ff]">May 2023 – Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#8b949e] mt-1 font-light">
                    <li>Conducted 50+ stakeholder workshops; reduced clarification cycles by 35% and enabled teams to start sprints 2–3 days earlier.</li>
                    <li>Designed an ISO 9001-aligned 11-phase project governance framework with 15+ standardized templates; led a 20-member cross-functional team and reduced rework by 40%.</li>
                    <li>Managed 200+ backlog items across 3 teams; facilitated sprint planning, daily stand-ups, backlog refinement, and retrospectives.</li>
                    <li>Coordinated UAT and go-live activities across 4+ production releases, achieving 95% defect detection and 98% user adoption by Go-Live +7.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-white text-sm font-mono">
                    <span>HR Manager | LP Career Solution</span>
                    <span className="text-[#58a6ff]">Mar 2019 – Sep 2020</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#8b949e] mt-1 font-light">
                    <li>Managed candidate support throughout immigration lifecycle from job application through visa acceptance.</li>
                    <li>Coordinated requirement tracking, documentation, application progress, and follow-ups.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-white text-sm font-mono">
                    <span>Quality Controller | Personiv Pvt Ltd</span>
                    <span className="text-[#58a6ff]">Dec 2017 – Feb 2019</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#8b949e] mt-1 font-light">
                    <li>Validated 100+ daily records for YellowPages.com (Salesforce backend) at 99.5% accuracy. Led 8-member QC team (+20% productivity, -15% rework).</li>
                    <li>Awarded Best Performer for quality and delivery excellence.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-white text-sm font-mono">
                    <span>Testing Support | Koni Ameri Tech Pvt Ltd</span>
                    <span className="text-[#58a6ff]">Mar 2017 – Dec 2017</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#8b949e] mt-1 font-light">
                    <li>Conducted functional and integration testing for Medaz healthcare applications - drug/pharmacy DB, invoicing, NIST testing.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Award */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a371f7] border-b border-[#30363d] pb-1 mb-2">
                # EDUCATION & CERTIFICATIONS
              </h2>
              <div className="text-xs space-y-1 text-[#8b949e] font-mono">
                <p><strong className="text-white">B.E. – Electronics & Communication Engineering</strong> | Sri Ramakrishna Institute of Technology (2013–2017) | CGPA: 7.1</p>
                <p><strong className="text-white">Certifications:</strong> Automation Testing with Selenium Java (Qtree Technologies) · Scrum & Agile Methodology · Quality Assurance Best Practices</p>
                <p><strong className="text-[#e3b341]">Award:</strong> Best Performer - Personiv Pvt Ltd</p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-[#161b22] border-t border-[#30363d] flex items-center justify-between shrink-0 font-mono">
            <span className="text-xs text-[#8b949e]">Verified GitHub Portfolio Document</span>
            <button
              onClick={onClose}
              className="btn-gh-primary text-xs py-1.5 px-3"
            >
              Close Preview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

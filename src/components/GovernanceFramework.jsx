import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitPullRequest, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileSpreadsheet, 
  Award, 
  Users, 
  GitBranch 
} from 'lucide-react';

export default function GovernanceFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: '01', title: 'Stakeholder Elicitation', desc: 'Conduct structured workshops (50+) to capture business goals, user personas, and constraints.' },
    { num: '02', title: 'AS-IS Process Mapping', desc: 'Map existing operational bottlenecks using BPMN 2.0 swimlane diagrams to pinpoint inefficiencies.' },
    { num: '03', title: 'Fit-Gap Analysis', desc: 'Evaluate standard out-of-the-box system features versus custom development requirements.' },
    { num: '04', title: 'BRD / FRD Engineering', desc: 'Author detailed functional requirement documents (25+) with business rules and system boundaries.' },
    { num: '05', title: 'User Story Deconstruction', desc: 'Break down requirements into INVEST-compliant user stories with Gherkin Given-When-Then AC.' },
    { num: '06', title: 'RTM Traceability', desc: 'Build Requirement Traceability Matrix connecting business needs to sprint backlog & test scripts.' },
    { num: '07', title: 'Cross-Functional Review', desc: 'Align 20-member cross-functional team (Devs, QA, POs) to ensure technical feasibility.' },
    { num: '08', title: 'Sprint Backlog Refinement', desc: 'Prioritize 200+ backlog items using MoSCoW methodology for predictable sprint velocities.' },
    { num: '09', title: 'UAT Scenario Execution', desc: 'Execute end-to-end UAT test scripts achieving 95% defect detection prior to release.' },
    { num: '10', title: 'Go-Live & Cutover Control', desc: 'Manage production cutover checklists, data migration validation, and operational handoff.' },
    { num: '11', title: '30-Day Hypercare', desc: 'Provide 30 days post-go-live hypercare support ensuring 98% user adoption by Day 7.' }
  ];

  const templates = [
    'BRD & FRD Master Template',
    'User Story & AC Specification Sheet',
    'Fit-Gap Evaluation Matrix',
    'Requirement Traceability Matrix (RTM)',
    'UAT Sign-off & Defect Log',
    'BPMN Process Flow Guidelines',
    'Sprint Refinement Checklist',
    'Change Request Impact Analysis'
  ];

  return (
    <section id="governance" className="py-24 relative overflow-hidden bg-transparent border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono text-[#3fb950] font-bold uppercase tracking-widest">
            GitHub Agile Governance Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ISO 9001-Aligned <span className="github-gradient-text">11-Phase Governance</span>
          </h2>
          <p className="text-[#8b949e] text-sm">
            Standardized project governance framework with 15+ templates that steered a 20-member cross-functional team and reduced sprint rework by 40%.
          </p>
        </div>

        {/* Governance Metrics Summary Banner */}
        <div className="gh-card p-6 mb-12 bg-[#161b22] border-[#30363d]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-[#010409] border border-[#30363d] rounded-lg">
              <div className="text-2xl font-bold font-mono text-[#3fb950]">40%</div>
              <div className="text-xs text-[#8b949e] mt-1 font-mono">Rework Saved</div>
            </div>
            <div className="p-3 bg-[#010409] border border-[#30363d] rounded-lg">
              <div className="text-2xl font-bold font-mono text-[#58a6ff]">20 Team</div>
              <div className="text-xs text-[#8b949e] mt-1 font-mono">Members Led</div>
            </div>
            <div className="p-3 bg-[#010409] border border-[#30363d] rounded-lg">
              <div className="text-2xl font-bold font-mono text-[#a371f7]">15+ BA</div>
              <div className="text-xs text-[#8b949e] mt-1 font-mono">Standard Templates</div>
            </div>
            <div className="p-3 bg-[#010409] border border-[#30363d] rounded-lg">
              <div className="text-2xl font-bold font-mono text-[#f0883e]">98%</div>
              <div className="text-xs text-[#8b949e] mt-1 font-mono">User Adoption Day 7</div>
            </div>
          </div>
        </div>

        {/* Stepper Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Stepper List */}
          <div className="lg:col-span-5 space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between font-mono ${
                  activeStep === idx
                    ? 'bg-[#161b22] border-[#58a6ff] text-white shadow-md'
                    : 'bg-[#161b22]/40 hover:bg-[#161b22] border-[#30363d] text-[#8b949e]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${activeStep === idx ? 'bg-[#58a6ff] text-[#0d1117] font-bold' : 'bg-[#21262d] text-[#8b949e]'}`}>
                    PHASE {s.num}
                  </span>
                  <span className="text-xs font-semibold text-white">{s.title}</span>
                </div>
                <ArrowRight className={`w-4 h-4 ${activeStep === idx ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} />
              </button>
            ))}
          </div>

          {/* Active Step Content Box */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="gh-card p-8 border-[#58a6ff]/40 bg-[#161b22] relative"
            >
              <div className="flex items-center justify-between border-b border-[#30363d] pb-4 mb-4">
                <span className="text-xs font-mono text-[#58a6ff] font-bold uppercase">
                  GOVERNANCE PIPELINE STAGE {steps[activeStep].num} / 11
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#0e4429] text-[#3fb950] border border-[#006d32]">
                  ISO 9001 VERIFIED
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{steps[activeStep].title}</h3>
              <p className="text-sm text-[#c9d1d9] leading-relaxed font-light mb-6">
                {steps[activeStep].desc}
              </p>

              {/* Standard Templates Checklist */}
              <div className="pt-4 border-t border-[#30363d]">
                <h4 className="text-xs font-mono font-bold text-[#8b949e] uppercase mb-3">
                  ISO 9001 Standardized BA Artifact Templates
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#c9d1d9]">
                  {templates.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#010409] border border-[#30363d] p-2 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0" />
                      <span className="truncate">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

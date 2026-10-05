import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  Layers, 
  Workflow, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  Sparkles,
  FileSpreadsheet,
  Award
} from 'lucide-react';

export default function GovernanceFramework() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
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
    <section id="governance" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Background glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-600/20 top-20 left-10" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Delivery Standardization</span>
          <h2 className="section-title text-white">
            ISO 9001-Aligned <span className="gradient-text-primary">11-Phase Governance</span>
          </h2>
          <p className="text-slate-400 text-base">
            Engineered a standardized 11-phase project governance framework with 15+ templates that steered a 20-member team and reduced sprint rework by 40%.
          </p>
        </div>

        {/* Top Summary Banner */}
        <div className="glass-card p-6 mb-12 border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900/60">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-emerald-400">40% Rework Saved</div>
                <div className="text-xs text-slate-400">Zero ambiguity in sprints</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-indigo-400">20 Team Members</div>
                <div className="text-xs text-slate-400">Guided cross-functionally</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-pink-400">15+ BA Templates</div>
                <div className="text-xs text-slate-400">ISO 9001 standardized</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-amber-400">98% Adoption</div>
                <div className="text-xs text-slate-400">By Go-Live +7 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* 11-Phase Interactive Grid / Stepper */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Phase Selector Column */}
          <div className="lg:col-span-5 space-y-2 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
            {phases.map((p, idx) => (
              <button
                key={p.num}
                onClick={() => setActivePhase(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  activePhase === idx
                    ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border-indigo-400 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${activePhase === idx ? 'bg-indigo-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {p.num}
                  </span>
                  <span className="text-sm font-bold">{p.title}</span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${activePhase === idx ? 'text-indigo-400 translate-x-1' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>

          {/* Active Phase Display Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 border-indigo-500/40 relative"
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                  PHASE {phases[activePhase].num} OF 11
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ISO 9001 COMPLIANT
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                {phases[activePhase].title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                {phases[activePhase].desc}
              </p>

              {/* Standardized BA Templates Section */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider mb-3">
                  Standardized BA Artifact Templates
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {templates.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 p-2 rounded-lg">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  ArrowDown,
  FileText, 
  Cloud, 
  HelpCircle, 
  Star, 
  Users, 
  Calendar, 
  GitBranch, 
  PlayCircle, 
  Check, 
  ExternalLink,
  Layers,
  ChevronRight,
  Workflow,
  LayoutGrid,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Info,
  X,
  Sparkles
} from 'lucide-react';

export default function GovernanceFramework() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [viewMode, setViewMode] = useState('diagram'); // 'diagram' | 'stepper'
  const [zoomLevel, setZoomLevel] = useState(100); // 75, 85, 100
  const [selectedNode, setSelectedNode] = useState(null);

  const lifecyclePhases = [
    {
      id: 'P1',
      phaseNum: 'Phase 1',
      name: 'Project Initiation',
      stepCount: '10 steps',
      color: '#1f6feb',
      headerBg: 'bg-[#1f6feb]',
      borderCol: 'border-[#1f6feb]',
      badgeClass: 'bg-[#1f6feb]/10 text-[#58a6ff] border-[#1f6feb]/30',
      activeTabClass: 'border-[#1f6feb] text-white bg-[#1f6feb]/15',
      summary: 'Foundational project setup, risk assessment, requirement baselining, architecture approval, design sign-off, and team onboarding.',
      milestone: {
        code: 'PROJECT CONFIRMED',
        desc: 'Customer sign-off received · Teams formed · Environments ready',
        nextPhase: 'Phase 2'
      },
      steps: [
        {
          id: '1.1',
          title: 'Project Setup (Drive creation, Access control, RACI matrix)',
          desc: 'Name, Dates, Team Planning, Type of project → Project Creation',
          hasTemplate: true,
          hasWork3sixty: true,
          badge: 'Setup'
        },
        {
          id: '1.2',
          title: 'Risk Assessment',
          desc: 'Identify project risks.',
          hasTemplate: true,
          badge: 'Assessment'
        },
        {
          id: '1.3',
          title: 'Requirements Documentation',
          desc: 'Functional, Non-functional, Technical, Integrations, Dependencies, Training plan, Deliverables',
          hasTemplate: true,
          badge: 'Documentation'
        },
        {
          id: 'decision-1',
          isDecision: true,
          title: 'Customer Review of Requirements',
          question: 'Approve / Rework?'
        },
        {
          id: '1.4',
          title: 'Architecture & Estimation Documentation',
          desc: 'Resource/flow diagrams, Sequence diagrams, Work-breakdown estimation',
          hasTemplate: true,
          badge: 'Architecture'
        },
        {
          id: 'decision-2',
          isDecision: true,
          title: 'Approve Architecture?',
          question: 'Yes → Proceed / No → Rework'
        },
        {
          id: '1.5',
          title: 'Initial UI Design Mockup',
          desc: 'Initial concept based on requirements — Designer',
          hasTemplate: true,
          badge: 'Design'
        },
        {
          id: '1.6',
          title: 'Project Process Explanation & Customer Design Approval',
          desc: 'Figma — Project process and design approval on concepts [Approval]',
          isApproval: true,
          hasTemplate: true,
          badge: 'Figma Approval'
        },
        {
          id: '1.7',
          title: 'Approval & Customer Sign-off',
          desc: 'Formal agreement on scope — T&C document [Approval]',
          isApproval: true,
          hasTemplate: true,
          badge: 'Formal Sign-off'
        },
        {
          id: '1.8',
          title: 'Customer Required Details',
          desc: 'Gather requirements, assets, credentials',
          hasTemplate: true,
          badge: 'Assets'
        },
        {
          id: '1.9',
          title: 'Team Onboarding — Project Kickoff',
          desc: 'Assign team, roles, and Kickoff meeting — [Meeting]',
          isMeeting: true,
          hasTemplate: true,
          badge: 'Meeting'
        },
        {
          id: '1.10',
          title: 'Development Environment Setup',
          desc: 'CI/CD pipeline, Coding standards, Branching conventions',
          hasTemplate: true,
          badge: 'DevOps'
        }
      ]
    },
    {
      id: 'P2',
      phaseNum: 'Phase 2',
      name: 'Product Backlog',
      stepCount: '4 steps',
      color: '#238636',
      headerBg: 'bg-[#238636]',
      borderCol: 'border-[#238636]',
      badgeClass: 'bg-[#238636]/10 text-[#3fb950] border-[#238636]/30',
      activeTabClass: 'border-[#238636] text-white bg-[#238636]/15',
      summary: 'Requirement clarification resolution, user story specification, sprint prioritization, and UI/UX scope sign-offs.',
      milestone: {
        code: 'BACKLOG READY',
        desc: 'Sprint 0 complete · Planned team agreed · Ready for Sprint 1',
        nextPhase: 'Phase 3'
      },
      steps: [
        {
          id: '2.1',
          title: 'Project Clarifications — Customer Confirmation',
          desc: 'Review and assign project clarifications',
          badge: 'Clarification'
        },
        {
          id: '2.2',
          title: 'Write User Stories / Use Cases',
          desc: 'Structure use cases with documentation templates — WorkDaily',
          hasWork3sixty: true,
          badge: 'User Stories'
        },
        {
          id: '2.3',
          title: 'Sprint Confirmation Meeting / Backlog Prioritization',
          desc: 'Confirm Backlog — Review & confirm priorities, Finalize sprint [Meeting], Gantt Chart',
          isMeeting: true,
          hasTemplate: true,
          badge: 'Meeting'
        },
        {
          id: '2.4',
          title: 'UI/UX update (Optional)',
          desc: 'Wireframes reviewed and update reviewed and approved',
          isApproval: true,
          badge: 'Approval'
        }
      ]
    },
    {
      id: 'P3',
      phaseNum: 'Phase 3',
      name: 'Sprint Planning (Repeats each sprint)',
      stepCount: '4 steps',
      color: '#9e6a03',
      headerBg: 'bg-[#9e6a03]',
      borderCol: 'border-[#9e6a03]',
      badgeClass: 'bg-[#9e6a03]/10 text-[#d29922] border-[#9e6a03]/30',
      activeTabClass: 'border-[#9e6a03] text-white bg-[#9e6a03]/15',
      summary: 'Recurring sprint planning ceremony, use case breakdown, acceptance criteria definition, and forecast tracking.',
      milestone: {
        code: 'SPRINT COMMITTED',
        desc: 'Sprint backlog locked · Tasks assigned to engineers · Acceptance criteria agreed',
        nextPhase: 'Phase 4'
      },
      steps: [
        {
          id: '3.1',
          title: 'Sprint Planning Meeting',
          desc: 'Team lead selects use cases from backlog for sprint [Meeting]',
          isMeeting: true,
          badge: 'Meeting'
        },
        {
          id: '3.2',
          title: 'Task Planning & Acceptance Testing',
          desc: 'Define acceptance criteria from use cases',
          hasTemplate: true,
          badge: 'Testing Spec'
        },
        {
          id: '3.3',
          title: 'Task Assignment',
          desc: 'Tasks distributed — team commits to sprint acceptance',
          badge: 'Assignment'
        },
        {
          id: '3.4',
          title: 'Sprint-wise Status Reporting & Forecast to Actuals',
          desc: 'Report sprint status and progress — track actuals',
          hasTemplate: true,
          badge: 'Reporting'
        }
      ]
    },
    {
      id: 'P4',
      phaseNum: 'Phase 4',
      name: 'Sprint Execution (daily, repeats)',
      stepCount: '8 steps',
      color: '#bd2c00',
      headerBg: 'bg-[#bd2c00]',
      borderCol: 'border-[#bd2c00]',
      badgeClass: 'bg-[#bd2c00]/10 text-[#ff7b72] border-[#bd2c00]/30',
      activeTabClass: 'border-[#bd2c00] text-white bg-[#bd2c00]/15',
      summary: 'Daily standups, coding against acceptance criteria, peer code reviews, unit testing, PR merges, internal QA, and sprint demos.',
      milestone: {
        code: 'SPRINT COMPLETED',
        desc: 'Potentially shippable increment ready',
        nextPhase: 'Phase 5'
      },
      steps: [
        {
          id: '4.1',
          title: 'Daily Standup',
          desc: '15 min — done / doing / blockers — all devs, all roles active [Meeting]',
          isMeeting: true,
          badge: 'Daily Meeting'
        },
        {
          id: '4.2',
          title: 'Use Case Against Development',
          desc: 'Perform tasks against the sprint acceptance criteria',
          badge: 'Development'
        },
        {
          id: '4.3',
          title: 'Code Review',
          desc: 'Peer review — Team Lead does code analysis',
          badge: 'Code Quality'
        },
        {
          id: '4.4',
          title: 'Unit Testing',
          desc: 'Dev team writes and executes unit tests [Testing]',
          isTesting: true,
          hasTemplate: true,
          badge: 'Testing'
        },
        {
          id: '4.5',
          title: 'Release Notes per Build',
          desc: 'What was built in sprint',
          hasWork3sixty: true,
          badge: 'Release Notes'
        },
        {
          id: '4.6',
          title: 'Code Checkin & Merge Request',
          desc: 'Commit → Merge request → Review (Branch → Codelist)',
          badge: 'Git Flow'
        },
        {
          id: '4.7',
          title: 'Internal Testing',
          desc: 'Team lead tests at inline intervals [Testing]',
          isTesting: true,
          hasTemplate: true,
          badge: 'Testing'
        },
        {
          id: '4.8',
          title: 'Sprint Testing',
          desc: 'Show build to stakeholders, collect feedback [Testing]',
          isTesting: true,
          badge: 'Demo Testing'
        },
        {
          id: '4.9',
          title: 'Backlog Updating',
          desc: 'Adjust remaining work, re-estimate based on sprint progress',
          hasWork3sixty: true,
          badge: 'Velocity Update'
        }
      ]
    },
    {
      id: 'P5',
      phaseNum: 'Phase 5',
      name: 'Sprint Review & Retrospective (end of each sprint)',
      stepCount: '8 steps',
      color: '#6e40c9',
      headerBg: 'bg-[#6e40c9]',
      borderCol: 'border-[#6e40c9]',
      badgeClass: 'bg-[#6e40c9]/10 text-[#d2a8ff] border-[#6e40c9]/30',
      activeTabClass: 'border-[#6e40c9] text-white bg-[#6e40c9]/15',
      summary: 'Sprint reviews, customer acceptance testing, change request triage, retrospectives, defect resolution, and automated smoke testing.',
      milestone: {
        code: 'RELEASE GATE',
        desc: 'All defects accepted · Quality assured · Go/No-Go decision',
        nextPhase: 'Phase 6'
      },
      steps: [
        {
          id: '5.1',
          title: 'Sprint Review Meeting',
          desc: '1h per sprint — UC duration, scope, actions Monthly, Sprint-wise report',
          isMeeting: true,
          hasTemplate: true,
          badge: 'Review Meeting'
        },
        {
          id: '5.2',
          title: 'Customer Testing',
          desc: 'Customer validates build against acceptance criteria [Testing]',
          isTesting: true,
          hasTemplate: true,
          badge: 'Customer UAT'
        },
        {
          id: '5.3',
          title: 'Change Requests Management',
          desc: 'Log and assess changes, impacts, risks',
          badge: 'CR Control'
        },
        {
          id: 'decision-3',
          isDecision: true,
          title: 'Request a Quote Change?',
          question: 'Inside scope / New task flow?'
        },
        {
          id: '5.4',
          title: 'Management Approval',
          desc: 'Change approval and management of work (1h per sprint) [Approval]',
          isApproval: true,
          badge: 'Approval'
        },
        {
          id: 'decision-4',
          isDecision: true,
          title: 'Sprint Event Closed?',
          question: 'Ceremony & approval sign-off'
        },
        {
          id: '5.5',
          title: 'Lessons Learnt — Root Cause',
          desc: 'Analyse sprint lessons — Root Cause',
          hasTemplate: true,
          badge: 'Retrospective'
        },
        {
          id: '5.6',
          title: 'Monitor & Control Status',
          desc: 'Update risk records & progress.',
          hasTemplate: true,
          badge: 'Control Status'
        },
        {
          id: '5.7',
          title: 'Defect / Testing Work (if Test)',
          desc: 'Test Environment — pre-prod function and customer testing [Testing]',
          isTesting: true,
          badge: 'Defect Triage'
        },
        {
          id: '5.8',
          title: 'Smoke & Regression Tests',
          desc: 'Smoke and customer testing → Automation Testing [Testing][Automated]',
          isTesting: true,
          isAutomated: true,
          badge: 'Automated Test'
        }
      ]
    },
    {
      id: 'P6',
      phaseNum: 'Phase 6',
      name: 'Release & Closing',
      stepCount: '7 steps',
      color: '#b04318',
      headerBg: 'bg-[#b04318]',
      borderCol: 'border-[#b04318]',
      badgeClass: 'bg-[#b04318]/10 text-[#ffa198] border-[#b04318]/30',
      activeTabClass: 'border-[#b04318] text-white bg-[#b04318]/15',
      summary: 'Closure documentation, user manuals, client acceptance, technical handbooks, server setup, and production deployment.',
      milestone: {
        code: 'PROJECT LIVE',
        desc: 'Monitoring active · Manual period image',
        nextPhase: 'Phase 7'
      },
      steps: [
        {
          id: '6.1',
          title: 'Project Closure Documentation',
          desc: 'Stakeholders, Changes Analysis, Lessons & Scope',
          hasTemplate: true,
          badge: 'Documentation'
        },
        {
          id: '6.2',
          title: 'Project Training Documentation',
          desc: 'User manual, Training',
          hasTemplate: true,
          badge: 'Training Manual'
        },
        {
          id: '6.3',
          title: 'Deliverables Acceptance',
          desc: 'Display app to client — SM Approval',
          isApproval: true,
          badge: 'Approval'
        },
        {
          id: '6.4',
          title: 'Technical Documentation',
          desc: 'Architecture, API docs, System diagrams',
          hasTemplate: true,
          badge: 'Technical Docs'
        },
        {
          id: '6.5',
          title: 'Live Server Setup',
          desc: 'Production setup, load and configures — MG Approval [Approval]',
          isApproval: true,
          badge: 'Infrastructure'
        },
        {
          id: 'external-deploy',
          isExternalRef: true,
          title: '(Production Deploy)',
          desc: 'Final deployment to production environment'
        },
        {
          id: '6.6',
          title: 'Approval for Live Server Setup',
          desc: 'Perform final deployment and environment configurations [Approval]',
          isApproval: true,
          badge: 'Approval'
        },
        {
          id: '6.7',
          title: 'Live Server Setup Procedures',
          desc: 'Checklist: pre-setup coding and configurations',
          hasTemplate: true,
          badge: 'Checklist'
        }
      ]
    },
    {
      id: 'P7',
      phaseNum: 'Phase 7',
      name: 'Handover & Support',
      stepCount: '7 steps',
      color: '#006d64',
      headerBg: 'bg-[#006d64]',
      borderCol: 'border-[#006d64]',
      badgeClass: 'bg-[#006d64]/10 text-[#7ee787] border-[#006d64]/30',
      activeTabClass: 'border-[#006d64] text-white bg-[#006d64]/15',
      summary: 'After-care managed support, KPI monitoring, SLA governance, customer feedback loops, patch releases, and 24/7 server monitoring.',
      milestone: {
        code: 'PROJECT CLOSED',
        desc: 'Handover complete — Support contract active',
        nextPhase: null
      },
      steps: [
        {
          id: '7.1',
          title: 'After-care / Managed Support',
          desc: 'Maintain and improve system post-launch',
          badge: 'Support'
        },
        {
          id: '7.2',
          title: 'Track and Monitor Performance',
          desc: 'Monitor KPIs, performance metrics, uptime',
          badge: 'Performance'
        },
        {
          id: '7.3',
          title: 'SLA Monitoring',
          desc: 'Confirm SLA commitments are fulfilled',
          badge: 'SLA Governance'
        },
        {
          id: '7.4',
          title: 'Customer Feedback Collection',
          desc: 'Confirm performance and stability from customer feedback',
          hasTemplate: true,
          badge: 'Feedback'
        },
        {
          id: '7.5',
          title: 'Defect Testing',
          desc: 'Identify and address defects, assess impact [Testing]',
          isTesting: true,
          badge: 'Defect Triage'
        },
        {
          id: '7.6',
          title: 'Defect Testing — Reports & Releases',
          desc: 'Defect report template, release documentation [Testing][Doc]',
          hasTemplate: true,
          badge: 'Release Patch'
        },
        {
          id: '7.7',
          title: 'Server Monitoring',
          desc: '24/7 uptime monitoring, on-call, and alert handling [Automated]',
          isAutomated: true,
          badge: '24/7 Automated'
        }
      ]
    }
  ];

  const currentPhase = lifecyclePhases[activePhaseIndex];

  // Helper for rendering step node in the Diagram canvas
  const renderDiagramNode = (step, phase) => {
    // 1. Decision Checkpoint (Diamond style)
    if (step.isDecision) {
      return (
        <div key={step.id} className="relative my-2.5 flex flex-col items-center">
          <div 
            onClick={() => setSelectedNode({ ...step, phaseName: phase.name, phaseColor: phase.color })}
            className="w-full max-w-[270px] p-2.5 rounded-lg bg-[#2e1d08]/90 border border-[#f0883e] text-center shadow-md hover:border-[#f0883e] hover:shadow-[#f0883e]/20 hover:scale-[1.02] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#f0883e] font-bold">
              <span className="w-2.5 h-2.5 rotate-45 border border-[#f0883e] inline-block bg-[#f0883e]/20" />
              <span>DECISION CHECKPOINT</span>
            </div>
            <div className="text-[11px] font-bold text-white mt-1 group-hover:text-[#f0883e] transition-colors leading-snug">
              ◇ {step.title}
            </div>
            <div className="text-[9.5px] font-mono text-[#d29922] mt-0.5">
              {step.question}
            </div>
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-[#8b949e] my-1 shrink-0" />
        </div>
      );
    }

    // 2. External Reference
    if (step.isExternalRef) {
      return (
        <div key={step.id} className="relative my-2.5 flex flex-col items-center">
          <div 
            onClick={() => setSelectedNode({ ...step, phaseName: phase.name, phaseColor: phase.color })}
            className="w-full max-w-[270px] p-2.5 rounded-lg bg-[#3a181c] border border-[#ff7b72] text-center shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
          >
            <div className="text-[11px] font-bold text-[#ff7b72] font-mono leading-snug">
              ⇒ {step.title}
            </div>
            <div className="text-[9.5px] text-[#ffa198] font-mono mt-0.5">
              {step.desc}
            </div>
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-[#8b949e] my-1 shrink-0" />
        </div>
      );
    }

    // 3. Regular Process Step Card
    return (
      <div key={step.id} className="relative my-1 flex flex-col items-center">
        <div 
          onClick={() => setSelectedNode({ ...step, phaseName: phase.name, phaseColor: phase.color })}
          className="w-full p-2.5 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:bg-[#1c2129] shadow-sm hover:shadow-md transition-all cursor-pointer group text-left relative"
        >
          <div className="flex items-start justify-between gap-1.5">
            <div className="flex items-start gap-1.5">
              <span 
                className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 leading-tight"
                style={{ 
                  backgroundColor: `${phase.color}25`, 
                  color: phase.color,
                  border: `1px solid ${phase.color}50`
                }}
              >
                {step.id}
              </span>
              <h5 className="text-[11px] font-semibold text-white group-hover:text-[#58a6ff] transition-colors leading-snug">
                {step.title}
              </h5>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-1 shrink-0">
              {step.hasTemplate && (
                <span title="Document Template" className="text-[#f85149]">
                  <FileText className="w-3.5 h-3.5" />
                </span>
              )}
              {step.hasWork3sixty && (
                <span title="Work3sixty" className="text-[#3fb950]">
                  <Cloud className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          </div>

          {step.desc && (
            <p className="text-[9.5px] text-[#8b949e] font-light mt-1 line-clamp-2 leading-relaxed">
              {step.desc}
            </p>
          )}

          {/* Micro Tags */}
          <div className="flex flex-wrap items-center gap-1 mt-1.5">
            {step.isApproval && (
              <span className="px-1 py-0.2 rounded text-[8.5px] font-mono bg-[#8957e5]/20 text-[#d2a8ff] border border-[#8957e5]/40">
                [Approval]
              </span>
            )}
            {step.isMeeting && (
              <span className="px-1 py-0.2 rounded text-[8.5px] font-mono bg-[#d29922]/20 text-[#f0883e] border border-[#d29922]/40">
                [Meeting]
              </span>
            )}
            {step.isTesting && (
              <span className="px-1 py-0.2 rounded text-[8.5px] font-mono bg-[#1f6feb]/20 text-[#79c0ff] border border-[#1f6feb]/40">
                [Testing]
              </span>
            )}
            {step.isAutomated && (
              <span className="px-1 py-0.2 rounded text-[8.5px] font-mono bg-[#238636]/20 text-[#56d364] border border-[#238636]/40">
                [Automated]
              </span>
            )}
          </div>
        </div>

        <ArrowDown className="w-3.5 h-3.5 text-[#8b949e]/60 my-0.5 shrink-0" />
      </div>
    );
  };

  // Helper for rendering milestone block
  const renderMilestoneBlock = (milestone, nextPhaseLabel) => {
    if (!milestone) return null;
    return (
      <div className="mt-2 p-2.5 rounded-lg bg-gradient-to-r from-[#0e4429] via-[#005a24] to-[#0e4429] border border-[#2ea043] text-center shadow-md">
        <div className="flex items-center justify-center gap-1.5 text-white font-mono font-bold text-[11px] uppercase tracking-wide">
          <Star className="w-3 h-3 text-[#3fb950] fill-[#3fb950]" />
          <span>★ {milestone.code}</span>
        </div>
        <p className="text-[9px] text-[#7ee787] font-mono mt-0.5 leading-snug">
          {milestone.desc}
        </p>
        {nextPhaseLabel && (
          <div className="text-[9px] font-mono text-[#3fb950] font-bold mt-1.5 flex items-center justify-center gap-1">
            <span>→ {nextPhaseLabel}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="governance" className="py-24 relative overflow-hidden bg-transparent border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#238636]/15 border border-[#238636]/30 text-[#3fb950] text-xs font-mono font-bold">
            <Workflow className="w-3.5 h-3.5" />
            <span>Process Flow Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Project Lifecycle <span className="github-gradient-text">Process Diagram</span>
          </h2>
          <p className="text-[#c9d1d9] text-sm sm:text-base leading-relaxed">
            Exact operational process architecture (P1–P7) designed by Gokulpriya, spanning 49 verified steps, 4 formal decision checkpoints, and 6 milestone release gates.
          </p>
        </motion.div>

        {/* View Controls & Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="gh-card p-4 mb-6 bg-[#161b22] border-[#30363d] flex flex-wrap items-center justify-between gap-4"
        >
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 bg-[#010409] p-1 rounded-xl border border-[#30363d]">
            <button
              onClick={() => setViewMode('diagram')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'diagram'
                  ? 'bg-[#1f6feb] text-white shadow-md'
                  : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#21262d]'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Full Flowchart Diagram View</span>
            </button>
            <button
              onClick={() => setViewMode('stepper')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'stepper'
                  ? 'bg-[#1f6feb] text-white shadow-md'
                  : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#21262d]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Phase Step-by-Step View</span>
            </button>
          </div>

          {/* Diagram Scale & Stats */}
          <div className="flex items-center gap-3">
            {viewMode === 'diagram' && (
              <div className="hidden sm:flex items-center gap-1 bg-[#010409] px-2 py-1 rounded-lg border border-[#30363d] text-xs font-mono text-[#8b949e]">
                <span>Zoom:</span>
                <button 
                  onClick={() => setZoomLevel(prev => Math.max(75, prev - 10))}
                  className="p-1 hover:text-white"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-white">{zoomLevel}%</span>
                <button 
                  onClick={() => setZoomLevel(prev => Math.min(110, prev + 10))}
                  className="p-1 hover:text-white"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e]">
              <span className="px-2 py-1 rounded bg-[#010409] border border-[#30363d] text-[#58a6ff] font-bold">7 Phases</span>
              <span className="px-2 py-1 rounded bg-[#010409] border border-[#30363d] text-[#3fb950] font-bold">49 Steps</span>
              <span className="px-2 py-1 rounded bg-[#010409] border border-[#30363d] text-[#f0883e] font-bold">4 Decisions</span>
              <span className="px-2 py-1 rounded bg-[#010409] border border-[#30363d] text-[#a371f7] font-bold">6 Milestones</span>
            </div>
          </div>
        </motion.div>

        {/* Process Diagram Legend matching original sheet */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 p-3 bg-[#0d1117] border border-[#30363d] rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8b949e]"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">Legend:</span>
            <span className="flex items-center gap-1.5 text-[#ff7b72]">
              <FileText className="w-3.5 h-3.5" />
              <span>Document Template</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#3fb950]">
              <Cloud className="w-3.5 h-3.5" />
              <span>Work3sixty</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#f0883e]">
              <span className="w-2.5 h-2.5 rotate-45 border border-[#f0883e] inline-block bg-[#f0883e]/20" />
              <span>Decision</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#2ea043]">
              <Star className="w-3.5 h-3.5 fill-[#3fb950]" />
              <span>Milestone</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#ff7b72]">
              <span className="font-bold">⇒</span>
              <span>External Ref</span>
            </span>
          </div>

          <div className="text-[11px] text-[#58a6ff] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Click any node to view details</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* VIEW 1: FULL PROCESS FLOWCHART DIAGRAM (EXACT LAYOUT FROM DOCUMENT) */}
        {/* ========================================================================= */}
        {viewMode === 'diagram' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-x-auto pb-6 custom-scrollbar border border-[#30363d] rounded-2xl bg-[#090d13] p-4 sm:p-6 shadow-2xl relative"
          >
            {/* Scroll Hint for Mobile/Tablets */}
            <div className="sm:hidden mb-3 text-center text-xs font-mono text-[#58a6ff] bg-[#1f6feb]/10 py-1.5 rounded-lg border border-[#1f6feb]/30">
              👈 Scroll horizontally to explore all 4 columns / 7 phases 👉
            </div>

            <div 
              className="grid grid-cols-1 md:grid-cols-4 gap-5 min-w-[1100px] transition-all"
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top left' }}
            >
              
              {/* ---------------- COLUMN 1: P1 ---------------- */}
              <div className="flex flex-col space-y-4 bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                <div className="p-3 rounded-lg bg-[#1f6feb] text-white shadow-md text-center">
                  <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                    P1 — Phase 1: Project Initiation
                  </h4>
                  <span className="text-[10px] opacity-90 font-mono">(10 steps)</span>
                </div>

                <div className="flex flex-col flex-grow">
                  {lifecyclePhases[0].steps.map(step => renderDiagramNode(step, lifecyclePhases[0]))}
                  {renderMilestoneBlock(lifecyclePhases[0].milestone, 'Phase 2')}
                </div>
              </div>

              {/* ---------------- COLUMN 2: P2 & P3 ---------------- */}
              <div className="flex flex-col space-y-5">
                {/* P2: Product Backlog */}
                <div className="flex flex-col bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                  <div className="p-3 rounded-lg bg-[#238636] text-white shadow-md text-center">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                      P2 — Phase 2: Product Backlog
                    </h4>
                    <span className="text-[10px] opacity-90 font-mono">(4 steps)</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    {lifecyclePhases[1].steps.map(step => renderDiagramNode(step, lifecyclePhases[1]))}
                    {renderMilestoneBlock(lifecyclePhases[1].milestone, 'Phase 3')}
                  </div>
                </div>

                {/* Connecting arrow from P2 to P3 */}
                <div className="flex items-center justify-center -my-2">
                  <div className="px-3 py-1 rounded-full bg-[#30363d] text-[#c9d1d9] text-[10px] font-mono flex items-center gap-1 shadow">
                    <span>Flows into Phase 3</span>
                    <ArrowDown className="w-3 h-3 text-[#58a6ff]" />
                  </div>
                </div>

                {/* P3: Sprint Planning */}
                <div className="flex flex-col bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                  <div className="p-3 rounded-lg bg-[#9e6a03] text-white shadow-md text-center">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                      P3 — Phase 3: Sprint Planning
                    </h4>
                    <span className="text-[10px] opacity-90 font-mono">(Repeats each sprint) — (4 steps)</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    {lifecyclePhases[2].steps.map(step => renderDiagramNode(step, lifecyclePhases[2]))}
                    <div className="mt-2 text-center text-[10px] font-mono text-[#d29922] bg-[#9e6a03]/20 py-1 rounded border border-[#9e6a03]/40">
                      → Feeds into Phase 4 (Sprint Execution)
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- COLUMN 3: P4 & P5 ---------------- */}
              <div className="flex flex-col space-y-5">
                {/* P4: Sprint Execution */}
                <div className="flex flex-col bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                  <div className="p-3 rounded-lg bg-[#bd2c00] text-white shadow-md text-center">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                      P4 — Phase 4: Sprint Execution
                    </h4>
                    <span className="text-[10px] opacity-90 font-mono">(daily, repeats) (8 steps)</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    {lifecyclePhases[3].steps.map(step => renderDiagramNode(step, lifecyclePhases[3]))}
                    {renderMilestoneBlock(lifecyclePhases[3].milestone, 'Phase 5')}
                  </div>
                </div>

                {/* Connecting arrow from P4 to P5 */}
                <div className="flex items-center justify-center -my-2">
                  <div className="px-3 py-1 rounded-full bg-[#30363d] text-[#c9d1d9] text-[10px] font-mono flex items-center gap-1 shadow">
                    <span>Sprint Cycle Ends</span>
                    <ArrowDown className="w-3 h-3 text-[#58a6ff]" />
                  </div>
                </div>

                {/* P5: Sprint Review & Retrospective */}
                <div className="flex flex-col bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                  <div className="p-3 rounded-lg bg-[#6e40c9] text-white shadow-md text-center">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                      P5 — Phase 5: Sprint Review & Retrospective
                    </h4>
                    <span className="text-[10px] opacity-90 font-mono">(end of each sprint) - (8 steps)</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    {lifecyclePhases[4].steps.map(step => renderDiagramNode(step, lifecyclePhases[4]))}
                    {renderMilestoneBlock(lifecyclePhases[4].milestone, 'Phase 6')}
                  </div>
                </div>
              </div>

              {/* ---------------- COLUMN 4: P6 & P7 ---------------- */}
              <div className="flex flex-col space-y-5">
                {/* P6: Release & Closing */}
                <div className="flex flex-col bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                  <div className="p-3 rounded-lg bg-[#b04318] text-white shadow-md text-center">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                      P6 — Phase 6: Release & Closing
                    </h4>
                    <span className="text-[10px] opacity-90 font-mono">(7 steps)</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    {lifecyclePhases[5].steps.map(step => renderDiagramNode(step, lifecyclePhases[5]))}
                    {renderMilestoneBlock(lifecyclePhases[5].milestone, 'Phase 7')}
                  </div>
                </div>

                {/* Connecting arrow from P6 to P7 */}
                <div className="flex items-center justify-center -my-2">
                  <div className="px-3 py-1 rounded-full bg-[#30363d] text-[#c9d1d9] text-[10px] font-mono flex items-center gap-1 shadow">
                    <span>Go-Live & Transition</span>
                    <ArrowDown className="w-3 h-3 text-[#3fb950]" />
                  </div>
                </div>

                {/* P7: Handover & Support */}
                <div className="flex flex-col bg-[#0d1117] p-3.5 rounded-xl border border-[#30363d] shadow-lg">
                  <div className="p-3 rounded-lg bg-[#006d64] text-white shadow-md text-center">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider">
                      P7 — Phase 7: Handover & Support
                    </h4>
                    <span className="text-[10px] opacity-90 font-mono">(7 steps)</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    {lifecyclePhases[6].steps.map(step => renderDiagramNode(step, lifecyclePhases[6]))}
                    {renderMilestoneBlock(lifecyclePhases[6].milestone, null)}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: STEP-BY-STEP TABBED VIEW (DETAILED DEEP DIVE) */}
        {/* ========================================================================= */}
        {viewMode === 'stepper' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Phase Selector Tabs (P1 to P7) */}
            <div className="mb-8 overflow-x-auto pb-2 custom-scrollbar">
              <div className="flex items-center gap-2 min-w-max">
                {lifecyclePhases.map((phase, idx) => {
                  const isActive = activePhaseIndex === idx;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhaseIndex(idx)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-mono font-semibold transition-all ${
                        isActive 
                          ? `${phase.activeTabClass} shadow-lg ring-1 ring-white/20`
                          : 'bg-[#161b22]/60 hover:bg-[#161b22] text-[#8b949e] hover:text-[#c9d1d9] border-[#30363d]'
                      }`}
                    >
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: phase.color }} 
                      />
                      <span>{phase.id} — {phase.name}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#21262d] text-[#8b949e]'
                      }`}>
                        {phase.stepCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Phase Details Container */}
            <div className="space-y-6">
              {/* Phase Header Card */}
              <div className="gh-card p-6 bg-[#161b22] border-[#30363d] relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{ backgroundColor: currentPhase.color }}
                />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span 
                        className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${currentPhase.badgeClass}`}
                      >
                        {currentPhase.id} · {currentPhase.phaseNum}
                      </span>
                      <span className="text-xs font-mono text-[#8b949e]">• {currentPhase.stepCount}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{currentPhase.name}</h3>
                    <p className="text-sm text-[#c9d1d9] max-w-3xl font-light">
                      {currentPhase.summary}
                    </p>
                  </div>

                  {/* Phase Navigation Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActivePhaseIndex((prev) => (prev > 0 ? prev - 1 : lifecyclePhases.length - 1))}
                      className="btn-gh-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
                      title="Previous Phase"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Prev</span>
                    </button>
                    <button
                      onClick={() => setActivePhaseIndex((prev) => (prev < lifecyclePhases.length - 1 ? prev + 1 : 0))}
                      className="btn-gh-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
                      title="Next Phase"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Steps & Decision Flow */}
              <div className="space-y-3">
                {currentPhase.steps.map((step, sIdx) => {
                  if (step.isDecision) {
                    return (
                      <div
                        key={step.id}
                        className="p-4 rounded-xl bg-gradient-to-r from-[#2e1d08] via-[#1c1409] to-[#2e1d08] border-2 border-[#f0883e]/60 text-center relative shadow-lg my-4"
                      >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0883e]/20 text-[#f0883e] text-xs font-mono font-bold mb-1">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>DECISION GATEWAY</span>
                        </div>
                        <h4 className="text-base font-bold text-white">◇ {step.title}</h4>
                        <p className="text-xs text-[#d29922] font-mono mt-1">{step.question}</p>
                      </div>
                    );
                  }

                  if (step.isExternalRef) {
                    return (
                      <div
                        key={step.id}
                        className="p-4 rounded-xl bg-[#2d1214] border-2 border-[#ff7b72]/60 text-center relative shadow-lg my-4"
                      >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7b72]/20 text-[#ff7b72] text-xs font-mono font-bold mb-1">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>EXTERNAL REFERENCE</span>
                        </div>
                        <h4 className="text-base font-bold text-white">{step.title}</h4>
                        <p className="text-xs text-[#ffa198] font-mono mt-1">{step.desc}</p>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={step.id}
                      className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5"
                          style={{ 
                            backgroundColor: `${currentPhase.color}15`, 
                            color: currentPhase.color,
                            border: `1px solid ${currentPhase.color}40`
                          }}
                        >
                          {step.id}
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#58a6ff] transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-xs text-[#c9d1d9] font-light leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 sm:self-center shrink-0">
                        {step.hasTemplate && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#21262d] text-[#58a6ff] border border-[#30363d]">
                            <FileText className="w-3 h-3 text-[#58a6ff]" />
                            <span>Template</span>
                          </span>
                        )}
                        {step.hasWork3sixty && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#0e4429] text-[#3fb950] border border-[#006d32]">
                            <Cloud className="w-3 h-3 text-[#3fb950]" />
                            <span>Work3sixty</span>
                          </span>
                        )}
                        {step.isApproval && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#2d1537] text-[#d2a8ff] border border-[#8957e5]">
                            <CheckCircle2 className="w-3 h-3 text-[#d2a8ff]" />
                            <span>Approval</span>
                          </span>
                        )}
                        {step.isMeeting && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#261c11] text-[#f0883e] border border-[#bd561d]">
                            <Users className="w-3 h-3 text-[#f0883e]" />
                            <span>Meeting</span>
                          </span>
                        )}
                        {step.isTesting && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#162a3f] text-[#79c0ff] border border-[#1f6feb]">
                            <Check className="w-3 h-3 text-[#79c0ff]" />
                            <span>Testing</span>
                          </span>
                        )}
                        {step.isAutomated && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#0e4429] text-[#56d364] border border-[#238636]">
                            <span>⚡ Automated</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Milestone Gate */}
              {currentPhase.milestone && (
                <div className="p-5 rounded-xl bg-gradient-to-r from-[#0e4429] via-[#092b1a] to-[#0e4429] border-2 border-[#2ea043] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2ea043]/30 border border-[#2ea043] flex items-center justify-center text-[#3fb950] shrink-0">
                      <Star className="w-5 h-5 fill-[#3fb950]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3fb950]">
                        PHASE MILESTONE GATE
                      </span>
                      <h4 className="text-lg font-bold text-white font-mono mt-0.5">
                        ★ {currentPhase.milestone.code}
                      </h4>
                      <p className="text-xs text-[#7ee787] font-light mt-0.5">
                        {currentPhase.milestone.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {activePhaseIndex < lifecyclePhases.length - 1 ? (
                      <button
                        onClick={() => setActivePhaseIndex(prev => prev + 1)}
                        className="px-4 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-md"
                      >
                        <span>Proceed to {lifecyclePhases[activePhaseIndex + 1].id}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <span className="px-3 py-1.5 rounded-lg bg-[#238636]/30 text-[#3fb950] border border-[#238636] text-xs font-mono font-bold">
                        ✓ Lifecycle Completed
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Node Inspection Modal */}
        <AnimatePresence>
          {selectedNode && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-2xl relative space-y-4"
              >
                <button
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#21262d] text-[#8b949e] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <span 
                    className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${selectedNode.phaseColor}25`, color: selectedNode.phaseColor }}
                  >
                    {selectedNode.phaseName}
                  </span>
                  {selectedNode.id && !selectedNode.isDecision && (
                    <span className="text-xs font-mono text-[#8b949e]">Step {selectedNode.id}</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {selectedNode.title}
                </h3>

                <p className="text-sm text-[#c9d1d9] leading-relaxed">
                  {selectedNode.desc || selectedNode.question}
                </p>

                <div className="pt-3 border-t border-[#30363d] flex flex-wrap gap-2 text-xs font-mono">
                  {selectedNode.hasTemplate && (
                    <span className="px-2 py-1 rounded bg-[#21262d] text-[#58a6ff] border border-[#30363d] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#58a6ff]" />
                      <span>Document Template Included</span>
                    </span>
                  )}
                  {selectedNode.hasWork3sixty && (
                    <span className="px-2 py-1 rounded bg-[#0e4429] text-[#3fb950] border border-[#006d32] flex items-center gap-1.5">
                      <Cloud className="w-3.5 h-3.5 text-[#3fb950]" />
                      <span>Work3sixty Integration</span>
                    </span>
                  )}
                  {selectedNode.isApproval && (
                    <span className="px-2 py-1 rounded bg-[#2d1537] text-[#d2a8ff] border border-[#8957e5] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d2a8ff]" />
                      <span>Formal Stakeholder Approval</span>
                    </span>
                  )}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="btn-gh-secondary text-xs px-4 py-2"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

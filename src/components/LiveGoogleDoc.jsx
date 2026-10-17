import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Lock, 
  Cloud, 
  Check, 
  Star, 
  RotateCcw, 
  RotateCw, 
  Printer, 
  Bold, 
  Italic, 
  Underline, 
  Highlighter, 
  MessageSquare, 
  Link2, 
  ChevronDown, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckSquare,
  Workflow,
  Cpu,
  Zap,
  Activity,
  Layers,
  FileCheck
} from 'lucide-react';

export default function LiveGoogleDoc() {
  const [activeTab, setActiveTab] = useState('brd');
  const [commentResolved, setCommentResolved] = useState(false);
  const [checklist, setChecklist] = useState({
    item1: true,
    item2: true,
    item3: true,
    item4: false
  });
  const [liveTypeIndex, setLiveTypeIndex] = useState(0);

  const typingSentence = " • Telemetry verified against ISO 9001 Clause 8.2 & INVEST standard.";

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTypeIndex(prev => (prev < typingSentence.length ? prev + 1 : prev));
    }, 55);
    return () => clearInterval(timer);
  }, []);

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative group w-full select-none">
      
      {/* Radiant Ambient Backlight Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8957e5]/30 via-[#2f81f7]/25 to-[#3fb950]/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Google Docs Window Shell */}
      <div className="relative rounded-2xl overflow-hidden border border-[#30363d] bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#010409] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(47,129,247,0.15)] text-[#c9d1d9]">
        
        {/* 1. Google Docs App Bar */}
        <div className="px-4 py-3 bg-[#161b22]/90 backdrop-blur-xl border-b border-[#30363d] flex items-center justify-between gap-3">
          
          {/* Left: Google Docs Logo + Doc Title + Status */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Google Docs Blue Sheet Icon with Subtle Glow */}
            <div className="w-9 h-9 rounded-lg bg-[#1a73e8]/15 border border-[#1a73e8]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(26,115,232,0.3)]">
              <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm tracking-tight truncate max-w-[180px] sm:max-w-[280px]">
                  PRD: Shopfloor MES & Telemetry
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#238636]/20 text-[#3fb950] border border-[#238636]/30 shrink-0">
                  v2.4 Approved
                </span>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0 cursor-pointer hover:scale-110 transition-transform" />
              </div>

              {/* Status & Menus Row */}
              <div className="flex items-center gap-2 text-[11px] text-[#8b949e] font-sans mt-0.5">
                <span className="text-[#3fb950] flex items-center gap-1 font-medium">
                  <Cloud className="w-3 h-3 text-[#3fb950]" />
                  Saved to Drive
                </span>
                <span className="text-[#484f58]">•</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">File</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Edit</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">View</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Insert</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Format</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Tools</span>
              </div>
            </div>
          </div>

          {/* Right: Collaborators & Google Docs Share CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Active Collaborators Presence */}
            <div className="hidden sm:flex items-center -space-x-2" title="Active Collaborators">
              {/* Gokulpriya (Owner) */}
              <div className="relative">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#8957e5] to-[#d2a8ff] text-white flex items-center justify-center text-[10px] font-bold border-2 border-[#161b22] shadow-md">
                  GM
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#3fb950] border-2 border-[#161b22]" />
              </div>

              {/* VP Operations */}
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#1f6feb] to-[#58a6ff] text-white flex items-center justify-center text-[10px] font-bold border-2 border-[#161b22] shadow-md" title="Srinivas R. (VP Operations)">
                SR
              </div>

              {/* Lead Architect */}
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#238636] to-[#3fb950] text-white flex items-center justify-center text-[10px] font-bold border-2 border-[#161b22] shadow-md" title="Rahul K. (Lead Architect)">
                RK
              </div>
            </div>

            {/* Google Docs Signature Blue Share Button */}
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-[0_0_15px_rgba(26,115,232,0.4)] transition-all hover:scale-105 active:scale-95">
              <Lock className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

        </div>

        {/* 2. Streamlined Modern Formatting Ribbon */}
        <div className="px-3 py-1.5 bg-[#12161f] border-b border-[#30363d] flex items-center justify-between gap-2 text-xs text-[#8b949e]">
          
          <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar py-0.5">
            <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Undo"><RotateCcw className="w-3.5 h-3.5" /></button>
            <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Redo"><RotateCw className="w-3.5 h-3.5" /></button>
            <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Print"><Printer className="w-3.5 h-3.5" /></button>

            <div className="h-3.5 w-px bg-[#30363d] mx-1" />

            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#21262d] text-white text-[11px] font-medium border border-[#30363d]">
              <span>Heading 1</span>
              <ChevronDown className="w-3 h-3 text-[#8b949e]" />
            </div>

            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#21262d] text-white text-[11px] font-mono border border-[#30363d]">
              <span>Roboto</span>
              <ChevronDown className="w-3 h-3 text-[#8b949e]" />
            </div>

            <div className="h-3.5 w-px bg-[#30363d] mx-1" />

            <button className="p-1 px-1.5 rounded hover:bg-[#21262d] text-white font-bold" title="Bold">B</button>
            <button className="p-1 px-1.5 rounded hover:bg-[#21262d] hover:text-white italic font-serif" title="Italic">I</button>
            <button className="p-1 px-1.5 rounded hover:bg-[#21262d] hover:text-white underline" title="Underline">U</button>
            <button className="p-1 rounded hover:bg-[#21262d] text-[#58a6ff]" title="Text Color"><Highlighter className="w-3.5 h-3.5" /></button>
            <button className="p-1 rounded hover:bg-[#21262d] text-amber-400" title="Comment"><MessageSquare className="w-3.5 h-3.5" /></button>
          </div>

          {/* Real-time Collaboration Live Badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#a371f7] bg-[#a371f7]/10 px-2.5 py-0.5 rounded-full border border-[#a371f7]/20 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a371f7] animate-ping" />
            <span>Gokulpriya M. (Lead BA) Live</span>
          </div>

        </div>

        {/* 3. Segmented Deliverable Switcher (Sleek Pills) */}
        <div className="px-4 py-2 bg-[#0d1117] border-b border-[#30363d] flex items-center gap-2 overflow-x-auto custom-scrollbar">
          {[
            { id: 'brd', label: '1. BRD Specification', code: 'BRD-204', icon: FileText, color: '#58a6ff' },
            { id: 'invest', label: '2. INVEST User Story', code: 'US-204', icon: Zap, color: '#a371f7' },
            { id: 'rtm', label: '3. ISO 9001 Traceability', code: 'RTM Matrix', icon: ShieldCheck, color: '#3fb950' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'text-white bg-[#21262d] border border-[#58a6ff]/40 shadow-sm'
                    : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isActive ? tab.color : '#8b949e' }} />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-[#58a6ff]/20 text-[#58a6ff]' : 'bg-[#161b22] text-[#8b949e]'
                }`}>
                  {tab.code}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-lg border-2 border-[#58a6ff]/40 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 4. Document Canvas Sheet */}
        <div className="p-4 sm:p-5 overflow-y-auto max-h-[460px] custom-scrollbar bg-[#0d1117]/60 space-y-4">
          
          {/* TAB 1: BRD SPECIFICATION */}
          {activeTab === 'brd' && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Document Metadata Card */}
              <div className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d] shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#30363d]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e] block font-semibold">
                      Enterprise Product Deliverable
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2 mt-0.5">
                      <span>Shopfloor MES Telemetry Integration</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#8957e5]/20 text-[#d2a8ff] border border-[#8957e5]/30">
                        IOT3Sixty™ Suite
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-[#238636]/20 text-[#3fb950] border border-[#238636]/30 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      ISO 9001 Compliant
                    </span>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2.5 text-[11px] font-mono text-[#8b949e]">
                  <div>
                    <span className="text-[#6e7681] block text-[9px] uppercase">Author / Lead BA</span>
                    <span className="text-[#f0f6fc] font-semibold">Gokulpriya M.</span>
                  </div>
                  <div>
                    <span className="text-[#6e7681] block text-[9px] uppercase">Target Scope</span>
                    <span className="text-[#58a6ff]">MES · WMS · QMS · AMM</span>
                  </div>
                  <div>
                    <span className="text-[#6e7681] block text-[9px] uppercase">Deployment</span>
                    <span className="text-[#3fb950]">Sprint 14 Cutover</span>
                  </div>
                  <div>
                    <span className="text-[#6e7681] block text-[9px] uppercase">Sign-off</span>
                    <span className="text-[#a371f7]">VP Operations Approved</span>
                  </div>
                </div>
              </div>

              {/* Visual BA Architecture Pipeline */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#161b22] to-[#1a202c] border border-[#30363d]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase font-mono">
                    <Workflow className="w-3.5 h-3.5 text-[#58a6ff]" />
                    Architected Automated Anomaly Flow
                  </span>
                  <span className="text-[10px] font-mono text-[#3fb950] bg-[#238636]/15 px-2 py-0.5 rounded border border-[#238636]/25">
                    &lt;1.2s Dispatch Latency
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2 rounded bg-[#0d1117] border border-[#30363d]">
                    <span className="text-[9px] text-[#8b949e] block font-sans">Step 1</span>
                    <span className="font-semibold text-[#58a6ff]">IoT Edge Ingestion</span>
                    <span className="text-[10px] text-[#6e7681] block mt-0.5">500ms MQTT cycle poll</span>
                  </div>
                  <div className="p-2 rounded bg-[#0d1117] border border-[#30363d]">
                    <span className="text-[9px] text-[#8b949e] block font-sans">Step 2</span>
                    <span className="font-semibold text-amber-400">Drift Check (&gt;15%)</span>
                    <span className="text-[10px] text-[#6e7681] block mt-0.5">Threshold evaluation</span>
                  </div>
                  <div className="p-2 rounded bg-[#0d1117] border border-[#30363d]">
                    <span className="text-[9px] text-[#8b949e] block font-sans">Step 3</span>
                    <span className="font-semibold text-[#a371f7]">QMS Non-Conformance</span>
                    <span className="text-[10px] text-[#6e7681] block mt-0.5">Auto-generate NCR</span>
                  </div>
                  <div className="p-2 rounded bg-[#0d1117] border border-[#30363d]">
                    <span className="text-[9px] text-[#8b949e] block font-sans">Step 4</span>
                    <span className="font-semibold text-[#3fb950]">AMM Work Order</span>
                    <span className="text-[10px] text-[#6e7681] block mt-0.5">Preventive maintenance</span>
                  </div>
                </div>
              </div>

              {/* Live Editable Text Clause with Collaborator Typing Cursor */}
              <div className="p-3 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
                <span className="text-[10px] font-mono text-[#8b949e] uppercase font-bold block">
                  Clause 2.3 — Automated Work Order Failover Trigger
                </span>
                <p className="text-xs text-[#c9d1d9] leading-relaxed">
                  Upon receiving machine cycle variance exceeding 15% across 3 consecutive cycles, the system must bypass manual shift supervisor logging and trigger an immediate preventive maintenance order in AMM.
                  <span className="text-[#a371f7] font-mono font-medium">
                    {typingSentence.slice(0, liveTypeIndex)}
                  </span>
                  <span className="inline-block w-2 h-4 bg-[#a371f7] ml-1 animate-pulse align-middle" />
                </p>
              </div>

              {/* Interactive Acceptance Criteria Checklist */}
              <div className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase font-mono">
                    <CheckSquare className="w-3.5 h-3.5 text-[#3fb950]" />
                    INVEST Acceptance Criteria Checklist
                  </span>
                  <span className="text-[10px] font-mono text-[#8b949e]">Click item to toggle</span>
                </div>

                <div className="space-y-2">
                  {[
                    { key: 'item1', text: 'Telemetry packets ingested via MQTT gateway within < 500ms latency.' },
                    { key: 'item2', text: 'Auto-generate Non-Conformance Report (NCR) in QMS with sensor log telemetry.' },
                    { key: 'item3', text: 'Preventive maintenance work order ticket created in AMM in under 1.2s.' },
                    { key: 'item4', text: 'Supervisor push notification dispatched via Work3Sixty instant alert.' }
                  ].map((ci) => (
                    <div
                      key={ci.key}
                      onClick={() => toggleCheck(ci.key)}
                      className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-all border ${
                        checklist[ci.key]
                          ? 'bg-[#238636]/10 border-[#238636]/30 text-white'
                          : 'bg-[#0d1117] border-[#30363d] text-[#8b949e] hover:border-[#484f58]'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                        checklist[ci.key] ? 'bg-[#238636] text-white' : 'border border-[#484f58]'
                      }`}>
                        {checklist[ci.key] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`text-xs ${checklist[ci.key] ? 'text-[#f0f6fc]' : 'line-through text-[#6e7681]'}`}>
                        {ci.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: INVEST USER STORY */}
          {activeTab === 'invest' && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* User Story Hero Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#161b22] to-[#1f242c] border border-[#30363d]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#a371f7] uppercase tracking-wider">
                    User Story US-204 · Backlog Ready
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#3fb950]/20 text-[#3fb950] border border-[#3fb950]/30 font-bold">
                    INVEST VERIFIED: 100% PASS
                  </span>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm text-[#f0f6fc] font-medium leading-relaxed bg-[#0d1117] p-3 rounded-lg border border-[#30363d]">
                  <p><span className="text-[#58a6ff] font-bold font-mono">AS A:</span> Shopfloor Plant Operator / Maintenance Lead</p>
                  <p><span className="text-[#a371f7] font-bold font-mono">I WANT:</span> Machine cycle times to automatically trigger preventive work orders upon anomaly</p>
                  <p><span className="text-[#3fb950] font-bold font-mono">SO THAT:</span> Downstream rework and unexpected machine downtime are reduced by 40%.</p>
                </div>
              </div>

              {/* 6-Point INVEST Radar Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
                {[
                  { letter: 'I', word: 'Independent', stat: 'PASS' },
                  { letter: 'N', word: 'Negotiable', stat: 'PASS' },
                  { letter: 'V', word: 'Valuable', stat: 'PASS' },
                  { letter: 'E', word: 'Estimable', stat: 'PASS' },
                  { letter: 'S', word: 'Small', stat: 'PASS' },
                  { letter: 'T', word: 'Testable', stat: 'PASS' }
                ].map((inv) => (
                  <div key={inv.word} className="p-2 rounded-lg bg-[#161b22] border border-[#238636]/40 shadow-sm">
                    <span className="text-base font-black text-[#3fb950] block">{inv.letter}</span>
                    <span className="text-[10px] text-[#c9d1d9] block mt-0.5">{inv.word}</span>
                    <span className="text-[9px] text-[#3fb950] font-bold font-mono mt-1 block">✓ {inv.stat}</span>
                  </div>
                ))}
              </div>

              {/* Gherkin Acceptance Criteria */}
              <div className="p-3.5 rounded-xl bg-[#010409] border border-[#30363d] font-mono text-xs space-y-1.5">
                <span className="text-[10px] text-[#8b949e] uppercase font-bold block mb-1">
                  Gherkin BDD Syntax (Given-When-Then)
                </span>
                <p><span className="text-[#58a6ff] font-bold">GIVEN</span> IoT sensor records machine cycle time drift &gt; 15%</p>
                <p><span className="text-amber-400 font-bold">WHEN</span> Operator or Edge telemetry submits Non-Conformance in QMS</p>
                <p><span className="text-[#3fb950] font-bold">THEN</span> Auto-schedule preventive maintenance work order in AMM</p>
                <p><span className="text-[#a371f7] font-bold">AND</span> Broadcast instant priority alert via Work3Sixty notification queue</p>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ISO 9001 RTM TRACEABILITY */}
          {activeTab === 'rtm' && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-1">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">
                    Requirement Traceability Matrix (RTM)
                  </h4>
                  <span className="text-[11px] text-[#8b949e]">
                    ISO 9001 Clause 8.2 & 8.3 Bi-Directional Engineering Coverage
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#238636]/20 text-[#3fb950] border border-[#238636]/30 font-bold">
                  100% Backlog Coverage
                </span>
              </div>

              {/* Matrix Table */}
              <div className="rounded-xl overflow-hidden border border-[#30363d] bg-[#161b22] text-xs font-mono">
                <table className="w-full text-left">
                  <thead className="bg-[#0d1117] text-[#8b949e] text-[10px] uppercase border-b border-[#30363d]">
                    <tr>
                      <th className="p-2.5">Req ID</th>
                      <th className="p-2.5">Module</th>
                      <th className="p-2.5">Story ID</th>
                      <th className="p-2.5">UAT Test Case</th>
                      <th className="p-2.5 text-right">Sign-Off</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#30363d] text-[11px] text-[#c9d1d9]">
                    <tr className="hover:bg-[#21262d]/50 transition-colors">
                      <td className="p-2.5 font-bold text-[#58a6ff]">REQ-MES-01</td>
                      <td className="p-2.5">Telemetry Ingestion</td>
                      <td className="p-2.5 text-[#a371f7]">US-204</td>
                      <td className="p-2.5 text-[#8b949e]">TC-MES-104</td>
                      <td className="p-2.5 text-right font-bold text-[#3fb950]">PASSED ✓</td>
                    </tr>
                    <tr className="hover:bg-[#21262d]/50 transition-colors">
                      <td className="p-2.5 font-bold text-[#58a6ff]">REQ-WMS-04</td>
                      <td className="p-2.5">FIFO Bin Allocation</td>
                      <td className="p-2.5 text-[#a371f7]">US-118</td>
                      <td className="p-2.5 text-[#8b949e]">TC-WMS-089</td>
                      <td className="p-2.5 text-right font-bold text-[#3fb950]">PASSED ✓</td>
                    </tr>
                    <tr className="hover:bg-[#21262d]/50 transition-colors">
                      <td className="p-2.5 font-bold text-[#58a6ff]">REQ-QMS-12</td>
                      <td className="p-2.5">NCR Defect Logging</td>
                      <td className="p-2.5 text-[#a371f7]">US-076</td>
                      <td className="p-2.5 text-[#8b949e]">TC-QMS-034</td>
                      <td className="p-2.5 text-right font-bold text-[#3fb950]">PASSED ✓</td>
                    </tr>
                    <tr className="hover:bg-[#21262d]/50 transition-colors">
                      <td className="p-2.5 font-bold text-[#58a6ff]">REQ-AMM-08</td>
                      <td className="p-2.5">Preventive Work Order</td>
                      <td className="p-2.5 text-[#a371f7]">US-211</td>
                      <td className="p-2.5 text-[#8b949e]">TC-AMM-052</td>
                      <td className="p-2.5 text-right font-bold text-[#3fb950]">PASSED ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* 5. Google Docs Real-time Collaborative Floating Comment */}
          <div className="p-3 rounded-xl bg-[#1e232b] border border-amber-500/30 shadow-lg">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#1f6feb] to-[#58a6ff] text-white font-bold text-[10px] flex items-center justify-center shadow">
                  SR
                </div>
                <div>
                  <span className="font-semibold text-white text-xs block leading-tight">
                    Srinivas R. (VP Operations)
                  </span>
                  <span className="text-[10px] text-[#8b949e] font-mono">10 minutes ago</span>
                </div>
              </div>

              <button
                onClick={() => setCommentResolved(!commentResolved)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  commentResolved
                    ? 'bg-[#238636] text-white shadow-[0_0_10px_rgba(46,160,67,0.4)]'
                    : 'bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d]'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{commentResolved ? 'Resolved ✓' : 'Resolve'}</span>
              </button>
            </div>

            <p className="text-xs text-[#c9d1d9] leading-relaxed pl-8">
              "Gokulpriya, brilliant edge-case handling on the AMM failover. Approved for sprint refinement!"
            </p>

            {/* Author Response Thread */}
            <div className="mt-2 ml-8 pl-3 border-l-2 border-[#a371f7] text-[11px] text-[#d2a8ff] bg-[#a371f7]/10 p-2 rounded-r-lg">
              <span className="font-bold text-[#f0f6fc] block text-[10px]">Gokulpriya M. (Author):</span>
              <span>Updated RTM matrix & tagged QA lead for automation test suite generation.</span>
            </div>
          </div>

        </div>

        {/* 6. Google Docs Bottom Document Status Bar */}
        <div className="px-4 py-2 bg-[#161b22] border-t border-[#30363d] flex items-center justify-between text-[11px] font-mono text-[#8b949e]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
            <span className="text-[#3fb950] font-semibold">Live Google Docs Sync Active</span>
            <span className="hidden sm:inline text-[#484f58]">|</span>
            <span className="hidden sm:inline text-[#8b949e]">ISO 9001 Clause 8.2 & INVEST Verified</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8b949e] hidden sm:inline">Page 1 of 4 • 2,410 Words</span>
            <span className="bg-[#21262d] px-2 py-0.5 rounded text-[10px] text-white border border-[#30363d] font-semibold">
              Edit Mode
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Share2, 
  Lock, 
  Cloud, 
  Check, 
  Star, 
  FolderPlus, 
  RotateCcw, 
  RotateCw, 
  Printer, 
  CheckCheck, 
  Bold, 
  Italic, 
  Underline, 
  Highlighter, 
  AlignLeft, 
  List, 
  ListOrdered, 
  CheckSquare, 
  MessageSquare, 
  Link2, 
  Image as ImageIcon, 
  ChevronDown, 
  Sparkles,
  UserCheck,
  Clock,
  Eye,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function LiveGoogleDoc() {
  const [activeDocTab, setActiveDocTab] = useState('brd');
  const [commentResolved, setCommentResolved] = useState(false);
  const [checklistState, setChecklistState] = useState({
    item1: true,
    item2: true,
    item3: true,
    item4: false
  });
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Simulated live typing effect for real-time collaboration feel
  useEffect(() => {
    const fullAddition = ' (Verified against ISO 9001 Clause 8.2.2 requirements)';
    let currentIndex = 0;
    setTypingText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (currentIndex <= fullAddition.length) {
        setTypingText(fullAddition.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [activeDocTab]);

  const toggleCheck = (key) => {
    setChecklistState(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#30363d] bg-[#161b22] text-[#c9d1d9] transition-all">
      
      {/* 1. Google Docs App Bar */}
      <div className="bg-[#1e232b] px-3 sm:px-4 py-2 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Google Docs Logo & Document Info */}
        <div className="flex items-center gap-2.5">
          {/* Authentic Google Docs Blue Sheet Icon */}
          <div className="w-8 h-8 rounded bg-[#1a73e8]/15 border border-[#1a73e8]/30 flex items-center justify-center shrink-0 shadow-sm" title="Google Docs">
            <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-tight truncate max-w-[200px] sm:max-w-[320px]">
                BRD_Shopfloor_MES_Telemetry_v2.4
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#238636]/20 text-[#3fb950] border border-[#238636]/30">
                .docx
              </span>
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 cursor-pointer hover:scale-110 transition-transform" />
              <FolderPlus className="w-3.5 h-3.5 text-[#8b949e] cursor-pointer hover:text-white transition-colors" />
            </div>

            {/* Google Docs Menus */}
            <div className="hidden sm:flex items-center gap-2.5 text-[11px] text-[#8b949e] font-sans mt-0.5">
              <span className="hover:text-white cursor-pointer transition-colors">File</span>
              <span className="hover:text-white cursor-pointer transition-colors">Edit</span>
              <span className="hover:text-white cursor-pointer transition-colors">View</span>
              <span className="hover:text-white cursor-pointer transition-colors">Insert</span>
              <span className="hover:text-white cursor-pointer transition-colors">Format</span>
              <span className="hover:text-white cursor-pointer transition-colors">Tools</span>
              <span className="hover:text-white cursor-pointer transition-colors">Extensions</span>
              <span className="hover:text-white cursor-pointer transition-colors">Help</span>
              <span className="text-[#3fb950] flex items-center gap-1 ml-1 text-[10px]">
                <Cloud className="w-3 h-3 text-[#3fb950]" />
                Saved to Drive
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Collaborators & Share Button */}
        <div className="flex items-center gap-2.5 shrink-0 ml-auto">
          
          {/* Active Collaborators Stack */}
          <div className="flex items-center -space-x-1.5" title="Live Collaborators">
            {/* Gokulpriya (Owner) */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#8957e5] to-[#a371f7] text-white flex items-center justify-center text-[10px] font-bold border-2 border-[#1e232b] shadow-sm relative group cursor-pointer">
              GM
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#3fb950] border border-[#1e232b] animate-ping" />
            </div>
            {/* Srinivas (VP Tech) */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#1f6feb] to-[#58a6ff] text-white flex items-center justify-center text-[10px] font-bold border-2 border-[#1e232b] shadow-sm cursor-pointer" title="Srinivas R. (VP Operations)">
              SR
            </div>
            {/* Rahul (Architect) */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#238636] to-[#3fb950] text-white flex items-center justify-center text-[10px] font-bold border-2 border-[#1e232b] shadow-sm cursor-pointer" title="Rahul K. (Lead Architect)">
              RK
            </div>
            <div className="w-6 h-6 rounded-full bg-[#30363d] text-[#8b949e] flex items-center justify-center text-[9px] font-mono border-2 border-[#1e232b]">
              +2
            </div>
          </div>

          {/* Google Docs Blue Share Button */}
          <button 
            onClick={() => alert("Simulated Google Docs BRD: Verified by Gokulpriya M. for Industrial IoT & ISO 9001 delivery.")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-sm transition-all hover:shadow-[0_0_12px_rgba(26,115,232,0.4)] active:scale-95"
          >
            <Lock className="w-3 h-3" />
            <span>Share</span>
          </button>
        </div>

      </div>

      {/* 2. Google Docs Formatting Toolbar */}
      <div className="bg-[#161b22] px-3 py-1.5 border-b border-[#30363d] flex items-center gap-1.5 overflow-x-auto text-[#8b949e] text-xs custom-scrollbar">
        <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Undo"><RotateCcw className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Redo"><RotateCw className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Print"><Printer className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] hover:text-white transition-colors" title="Spell Check"><CheckCheck className="w-3.5 h-3.5" /></button>

        <div className="h-4 w-px bg-[#30363d] mx-1" />

        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#21262d] text-white text-[11px] font-mono cursor-pointer hover:bg-[#30363d]">
          <span>100%</span>
          <ChevronDown className="w-3 h-3 text-[#8b949e]" />
        </div>

        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#21262d] text-white text-[11px] font-medium cursor-pointer hover:bg-[#30363d] truncate">
          <span>Heading 1</span>
          <ChevronDown className="w-3 h-3 text-[#8b949e]" />
        </div>

        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#21262d] text-white text-[11px] font-medium cursor-pointer hover:bg-[#30363d]">
          <span>Roboto</span>
          <ChevronDown className="w-3 h-3 text-[#8b949e]" />
        </div>

        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#21262d] text-white text-[11px] font-mono">
          <span>11</span>
        </div>

        <div className="h-4 w-px bg-[#30363d] mx-1" />

        {/* Styling buttons */}
        <button className="p-1 rounded font-bold hover:bg-[#21262d] text-white" title="Bold">B</button>
        <button className="p-1 rounded italic hover:bg-[#21262d] hover:text-white" title="Italic">I</button>
        <button className="p-1 rounded underline hover:bg-[#21262d] hover:text-white" title="Underline">U</button>
        <button className="p-1 rounded hover:bg-[#21262d] text-[#58a6ff] font-bold" title="Text Color">A</button>
        <button className="p-1 rounded hover:bg-[#21262d] text-yellow-400" title="Highlight"><Highlighter className="w-3.5 h-3.5" /></button>

        <div className="h-4 w-px bg-[#30363d] mx-1" />

        <button className="p-1 rounded hover:bg-[#21262d] text-[#58a6ff]" title="Insert Link"><Link2 className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] text-amber-400" title="Add Comment"><MessageSquare className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] hover:text-white" title="Align Left"><AlignLeft className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] text-[#3fb950]" title="Checklist"><CheckSquare className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded hover:bg-[#21262d] hover:text-white" title="Bulleted List"><List className="w-3.5 h-3.5" /></button>
      </div>

      {/* 3. Google Docs Horizontal Margin Ruler */}
      <div className="bg-[#0d1117] px-4 py-1 border-b border-[#30363d] flex items-center justify-between text-[9px] font-mono text-[#6e7681] select-none">
        <div className="flex items-center gap-6 sm:gap-10 pl-6 relative w-full">
          {/* Blue Google Docs margin slider stop */}
          <div className="absolute left-6 -top-1 text-[#1a73e8] cursor-ew-resize">▼</div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <div className="absolute right-8 -top-1 text-[#1a73e8] cursor-ew-resize">▼</div>
        </div>
        <span className="text-[10px] text-[#8957e5] font-semibold shrink-0 hidden sm:inline-block">
          ● Live Collab Mode
        </span>
      </div>

      {/* 4. Switchable Document Deliverable Tabs */}
      <div className="bg-[#12161f] px-3 pt-2 border-b border-[#30363d] flex items-center gap-1 overflow-x-auto text-xs custom-scrollbar">
        {[
          { id: 'brd', label: 'BRD: MES Telemetry', tag: 'BRD-204' },
          { id: 'userstory', label: 'User Story & INVEST', tag: 'US-Shopfloor' },
          { id: 'rtm', label: 'ISO 9001 Traceability', tag: 'RTM-Matrix' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveDocTab(tab.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-t-md text-xs font-medium transition-all ${
              activeDocTab === tab.id
                ? 'bg-[#ffffff] text-[#1f2937] font-semibold shadow-sm border-t-2 border-[#1a73e8]'
                : 'text-[#8b949e] hover:text-white hover:bg-[#161b22]'
            }`}
          >
            <FileText className={`w-3.5 h-3.5 ${activeDocTab === tab.id ? 'text-[#1a73e8]' : 'text-[#8b949e]'}`} />
            <span>{tab.label}</span>
            <span className={`text-[10px] px-1 rounded font-mono ${
              activeDocTab === tab.id ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'bg-[#21262d] text-[#8b949e]'
            }`}>
              {tab.tag}
            </span>
          </button>
        ))}
      </div>

      {/* 5. Google Docs White Paper Sheet Canvas */}
      <div className="p-3 sm:p-5 bg-[#090d13]/70 overflow-y-auto max-h-[460px] custom-scrollbar flex justify-center">
        
        {/* Document Sheet (Realistic Google Docs Paper Look) */}
        <div className="w-full bg-[#ffffff] text-[#1f2937] p-5 sm:p-6 rounded-sm shadow-xl font-sans text-xs leading-relaxed border border-gray-200 relative">
          
          {/* Real-time Collaborator Floating Tag */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#8957e5]/10 border border-[#8957e5]/30 px-2 py-0.5 rounded-full text-[10px] font-medium text-[#7932e6] shadow-sm select-none">
            <span className="w-2 h-2 rounded-full bg-[#8957e5] animate-pulse" />
            <span>Gokulpriya M. is editing live</span>
          </div>

          {/* Document Content Tab 1: BRD Telemetry */}
          {activeDocTab === 'brd' && (
            <div className="space-y-4">
              
              {/* Document Header Table */}
              <div className="border border-gray-300 rounded p-2.5 bg-gray-50/80 text-[11px] font-mono grid grid-cols-2 sm:grid-cols-4 gap-2 text-gray-700">
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase font-bold">Document Type</span>
                  <span className="font-semibold text-blue-700">BRD / FSD Suite</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase font-bold">Document ID</span>
                  <span className="font-semibold text-gray-900">BRD-MES-204</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase font-bold">Approval Status</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    APPROVED
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase font-bold">Lead Analyst</span>
                  <span className="font-semibold text-purple-800">Gokulpriya M.</span>
                </div>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
                  <span>1.0 Shopfloor MES Telemetry Integration</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-purple-100 text-purple-800 border border-purple-200">
                    IoT 3Sixty™ Suite
                  </span>
                </h2>
                <p className="text-gray-600 text-[11px] mt-1">
                  Bridging machine-level PLC cycle time variances directly to Quality Management (QMS) and Asset Maintenance (AMM).
                </p>
              </div>

              {/* Business Problem & Value Statement */}
              <div className="p-3 bg-blue-50/60 border-l-4 border-[#1a73e8] rounded-r text-gray-800">
                <span className="font-bold text-blue-900 block text-[11px] mb-1">
                  Business Objective & ROI Metric:
                </span>
                <p className="text-[11.5px] leading-relaxed">
                  Eliminate 40% downstream rework and manual logging delays by capturing IoT machine cycle times at 500ms intervals, auto-triggering preventive maintenance work orders in AMM upon anomalous drift (&gt;15%).
                </p>
              </div>

              {/* Functional Requirements with Highlighted Text & Attached Comment */}
              <div>
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">
                  2.0 Core Functional Specifications
                </h3>

                <div className="space-y-2 text-[11.5px]">
                  <div className="p-2 bg-gray-50 border border-gray-200 rounded">
                    <strong className="text-gray-900">FR-01: Anomaly Ingestion: </strong>
                    <span>Edge IoT gateway polls Modbus/OPC-UA tags. If cycle variance exceeds 15% threshold for 3 consecutive strokes, flag as Priority-1 non-conformance.</span>
                  </div>

                  {/* Highlighted text with Google Docs Comment Anchor */}
                  <div className="p-2 bg-amber-50/60 border border-amber-300 rounded relative">
                    <strong className="text-gray-900">FR-02: Automated AMM Trigger: </strong>
                    <mark className="bg-yellow-200 text-gray-900 px-1 py-0.5 rounded cursor-pointer font-medium">
                      Auto-trigger preventive maintenance work order in AMM
                    </mark>
                    <span> and dispatch instant alert to line supervisor via Work3Sixty instant notification queue.</span>
                    <span className="text-purple-700 font-mono text-[10.5px]">
                      {typingText}
                    </span>
                    {isTyping && (
                      <span className="inline-block w-1.5 h-3.5 bg-purple-600 ml-0.5 animate-pulse align-middle" />
                    )}
                  </div>
                </div>
              </div>

              {/* Interactive Acceptance Criteria Checklist */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
                    3.0 INVEST Acceptance Criteria (Interactive)
                  </h3>
                  <span className="text-[10px] text-gray-500 font-mono">Click to toggle test state</span>
                </div>

                <div className="space-y-1.5 bg-gray-50/80 border border-gray-200 rounded p-2.5">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checklistState.item1}
                      onChange={() => toggleCheck('item1')}
                      className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-0"
                    />
                    <span className={`text-[11.5px] ${checklistState.item1 ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      Telemetry packets ingested via MQTT within &lt; 500ms latency without queue backpressure.
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checklistState.item2}
                      onChange={() => toggleCheck('item2')}
                      className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-0"
                    />
                    <span className={`text-[11.5px] ${checklistState.item2 ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      Auto-generate Non-Conformance Report (NCR) in QMS with pre-populated sensor telemetry logs.
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checklistState.item3}
                      onChange={() => toggleCheck('item3')}
                      className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-0"
                    />
                    <span className={`text-[11.5px] ${checklistState.item3 ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      AMM preventive maintenance ticket status linked bi-directionally to ERP work orders.
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checklistState.item4}
                      onChange={() => toggleCheck('item4')}
                      className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-0"
                    />
                    <span className={`text-[11.5px] ${checklistState.item4 ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      Failover alert sent to Plant Manager if operator acknowledgement is not received in 5 mins.
                    </span>
                  </label>
                </div>
              </div>

              {/* Realistic Google Docs Floating Comment Box */}
              <div className="border border-amber-300 bg-amber-50/90 rounded-lg p-3 shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">
                      SR
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 text-[11px] block leading-none">
                        Srinivas R. (VP Operations)
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono">14 minutes ago</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCommentResolved(!commentResolved)}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                      commentResolved 
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'
                    }`}
                  >
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>{commentResolved ? 'Resolved' : 'Resolve'}</span>
                  </button>
                </div>

                <p className="text-[11.5px] text-gray-800 leading-snug">
                  "Gokulpriya, the INVEST criteria and AMM trigger workflow look solid. Approved for Sprint 14."
                </p>

                {/* Lead BA Reply */}
                <div className="mt-2 pl-3 border-l-2 border-purple-400 text-[11px] text-purple-900 bg-purple-50/60 p-1.5 rounded-r">
                  <span className="font-bold block text-[10px] text-purple-950">Gokulpriya M. (Author):</span>
                  <span>Updated RTM matrix and tagged QA lead for automation test script creation.</span>
                </div>
              </div>

            </div>
          )}

          {/* Document Content Tab 2: User Story & Acceptance */}
          {activeDocTab === 'userstory' && (
            <div className="space-y-4">
              <div className="border border-blue-200 bg-blue-50/50 rounded p-2.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-700 font-bold">User Story Card</span>
                  <h3 className="font-bold text-gray-900 text-sm">US-204: Shopfloor MES Telemetry Integration</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                  VERIFIED INVEST PASS
                </span>
              </div>

              {/* Agile User Story Narrative */}
              <div className="bg-gray-50 border border-gray-200 rounded p-3 text-[12px] space-y-1.5">
                <p><strong className="text-gray-900">AS A:</strong> Plant Operator / Shift Supervisor</p>
                <p><strong className="text-gray-900">I WANT:</strong> IoT machine telemetry to automatically trigger maintenance non-conformance records</p>
                <p><strong className="text-gray-900">SO THAT:</strong> Unscheduled equipment downtime is minimized without requiring manual paper logbook entries.</p>
              </div>

              {/* INVEST Checklist Scorecard */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center font-mono text-[10px]">
                <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-800">
                  <span className="font-bold block text-emerald-900">I</span> Independent
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-800">
                  <span className="font-bold block text-emerald-900">N</span> Negotiable
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-800">
                  <span className="font-bold block text-emerald-900">V</span> Valuable
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-800">
                  <span className="font-bold block text-emerald-900">E</span> Estimable
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-800">
                  <span className="font-bold block text-emerald-900">S</span> Small
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-800">
                  <span className="font-bold block text-emerald-900">T</span> Testable
                </div>
              </div>

              {/* Gherkin Scenario */}
              <div className="border border-purple-200 bg-purple-50/40 rounded p-3 font-mono text-[11px] text-gray-800 leading-relaxed">
                <span className="text-purple-800 font-bold block mb-1">Scenario: Machine Cycle-Time Variance Exceeds Threshold</span>
                <p><span className="text-purple-700 font-semibold">GIVEN</span> IoT sensor records cycle time anomaly &gt; 15%</p>
                <p><span className="text-purple-700 font-semibold">WHEN</span> Operator submits non-conformance ticket in QMS</p>
                <p><span className="text-purple-700 font-semibold">THEN</span> Auto-trigger preventive maintenance work order in AMM</p>
                <p><span className="text-purple-700 font-semibold">AND</span> Notify plant supervisor via Work3Sixty instant alert queue</p>
              </div>
            </div>
          )}

          {/* Document Content Tab 3: ISO 9001 RTM Matrix */}
          {activeDocTab === 'rtm' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
                    Requirement Traceability Matrix (RTM)
                  </h3>
                  <p className="text-[10px] text-gray-500">ISO 9001 Clause 8.2 & 8.3 Compliant Bi-directional Trace</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold">
                  100% Backlog Trace
                </span>
              </div>

              {/* Matrix Table */}
              <div className="border border-gray-300 rounded overflow-hidden text-[10.5px]">
                <table className="w-full text-left font-mono">
                  <thead className="bg-gray-100 text-gray-700 border-b border-gray-300 text-[10px] uppercase">
                    <tr>
                      <th className="p-1.5">Req ID</th>
                      <th className="p-1.5">Module</th>
                      <th className="p-1.5">Story</th>
                      <th className="p-1.5">UAT Test</th>
                      <th className="p-1.5 text-right">Sign-off</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-800">
                    <tr className="hover:bg-gray-50">
                      <td className="p-1.5 font-bold text-blue-700">REQ-MES-01</td>
                      <td className="p-1.5">Telemetry Ingestion</td>
                      <td className="p-1.5">US-204</td>
                      <td className="p-1.5 text-purple-700">TC-MES-104</td>
                      <td className="p-1.5 text-right text-emerald-600 font-bold">PASS ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-1.5 font-bold text-blue-700">REQ-WMS-04</td>
                      <td className="p-1.5">FIFO Bin Alloc</td>
                      <td className="p-1.5">US-118</td>
                      <td className="p-1.5 text-purple-700">TC-WMS-089</td>
                      <td className="p-1.5 text-right text-emerald-600 font-bold">PASS ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-1.5 font-bold text-blue-700">REQ-QMS-12</td>
                      <td className="p-1.5">NCR Defect Log</td>
                      <td className="p-1.5">US-076</td>
                      <td className="p-1.5 text-purple-700">TC-QMS-034</td>
                      <td className="p-1.5 text-right text-emerald-600 font-bold">PASS ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-1.5 font-bold text-blue-700">REQ-AMM-08</td>
                      <td className="p-1.5">Preventive Work Order</td>
                      <td className="p-1.5">US-211</td>
                      <td className="p-1.5 text-purple-700">TC-AMM-052</td>
                      <td className="p-1.5 text-right text-emerald-600 font-bold">PASS ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Bottom Live Cursor Indicator */}
          <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[10px] text-gray-500 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Document Mode: Live Collaborative Review</span>
            </span>
            <span>Page 1 of 4 • 2,410 Words</span>
          </div>

        </div>

      </div>

      {/* 6. Google Docs Bottom Status Bar */}
      <div className="bg-[#161b22] px-4 py-2 border-t border-[#30363d] flex items-center justify-between text-[11px] font-mono text-[#8b949e]">
        <div className="flex items-center gap-2">
          <span className="text-[#3fb950] font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#3fb950]" />
            Live Sync: Active
          </span>
          <span className="hidden sm:inline-block text-[#6e7681]">|</span>
          <span className="hidden sm:inline-block text-[#c9d1d9]">ISO 9001 Quality Standard Approved</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#a371f7] font-medium hidden sm:inline-block">Gokulpriya M. (Owner)</span>
          <span className="bg-[#21262d] px-2 py-0.5 rounded text-[10px] text-white border border-[#30363d]">
            Edit Access
          </span>
        </div>
      </div>

    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  FileCode, 
  Play, 
  Copy, 
  Check, 
  ArrowRight, 
  GitBranch, 
  GitPullRequest, 
  ShieldCheck,
  CheckCircle2,
  Zap,
  MapPin,
  Clock
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('userstory');
  const [copied, setCopied] = useState(false);
  const headlineRef = useRef(null);

  useEffect(() => {
    // Anime.js text reveal effect
    if (headlineRef.current) {
      headlineRef.current.innerHTML = headlineRef.current.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      anime({
        targets: '.letter',
        translateY: [25, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => 200 + i * 25
      });
    }
  }, []);

  const snippets = {
    userstory: `{
  "story_id": "US-204",
  "title": "Shopfloor MES Telemetry Integration",
  "actor": "Plant Operator",
  "invest_status": "VERIFIED_PASS",
  "given_when_then": {
    "given": "IoT sensor records cycle time anomaly > 15%",
    "when": "Operator submits non-conformance ticket in QMS",
    "then": "Auto-trigger preventive maintenance work order in AMM",
    "and": "Notify supervisor via Work3Sixty instant alert"
  },
  "acceptance_criteria_count": 5
}`,
    governance: `<!-- ISO 9001 11-Phase Governance Workflow -->
<process id="BA_Governance_Engine">
  <phase step="1" name="Elicitation">50+ Stakeholder Workshops</phase>
  <phase step="2" name="AS_IS_Mapping">BPMN 2.0 Swimlane Flow</phase>
  <phase step="3" name="Fit_Gap">Standard vs Custom Modules</phase>
  <phase step="4" name="BRD_FRD">25+ Signed Specifications</phase>
  <phase step="5" name="RTM_Traceability">100% Backlog Trace</phase>
  <result metric="Rework_Reduction">40% Decrease</result>
</process>`,
    sql: `-- Data Validation Query for YellowPages Backend
SELECT 
    vendor_id, 
    company_name, 
    record_accuracy_pct,
    qc_approved_date
FROM salesforce_crm_data
WHERE qc_status = 'APPROVED'
  AND accuracy >= 99.5
ORDER BY qc_approved_date DESC
LIMIT 100;`,
    selenium: `// Selenium Java Test Automation Case
@Test
public void verifyUATOrderToDispatchLifecycle() {
    LoginPage login = new LoginPage(driver);
    login.authenticate("gokulpriya.ba", "SecurePass123!");
    
    WMSDashboard wms = new WMSDashboard(driver);
    wms.verifyBinAllocation("SKU-99482");
    Assert.assertEquals(wms.getDefectRate(), 0.05);
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center bg-[#0d1117]">
      
      {/* GitHub Glowing Background Orbs */}
      <div className="gh-glow-purple -top-20 -left-40 animate-pulse" />
      <div className="gh-glow-blue top-40 -right-20" />
      <div className="gh-glow-green bottom-10 left-1/3" />

      {/* GitHub Signature Vertical Beam Branch Line */}
      <div className="gh-branch-line hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pl-8 sm:pl-16">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: GitHub-Style Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* GitHub Badge Header */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#21262d] text-[#58a6ff] border border-[#30363d]">
                <GitBranch className="w-3.5 h-3.5 text-[#8957e5]" />
                <span>Notice: 30 Days</span>
                <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-ping" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8b949e] bg-[#161b22] border border-[#30363d]">
                <MapPin className="w-3.5 h-3.5 text-[#d2a8ff]" />
                <span>Coimbatore, India (Remote & On-site)</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs font-mono text-[#8957e5] font-bold uppercase tracking-widest block mb-2">
                Senior Business Analyst & Product Delivery Lead
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Build business value like GitHub builds{' '}
                <span ref={headlineRef} className="github-gradient-text block">
                  Gokulpriya M.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#8b949e] text-base sm:text-lg leading-relaxed font-light max-w-2xl">
              Architecting requirements engineering, Agile backlog delivery, and ISO 9001 governance for{' '}
              <strong className="text-white font-semibold">Industrial IoT (MES, WMS, QMS, AMM)</strong>,{' '}
              <strong className="text-[#58a6ff] font-semibold">SaaS platforms</strong> & Enterprise ERPs.
            </p>

            {/* GitHub Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
                <div className="text-2xl font-bold font-mono text-[#58a6ff]">50+</div>
                <div className="text-xs text-[#8b949e] mt-0.5">Stakeholder Workshops</div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
                <div className="text-2xl font-bold font-mono text-[#a371f7]">35%</div>
                <div className="text-xs text-[#8b949e] mt-0.5">Faster Sprint Starts</div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
                <div className="text-2xl font-bold font-mono text-[#3fb950]">40%</div>
                <div className="text-xs text-[#8b949e] mt-0.5">Rework Reduction</div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
                <div className="text-2xl font-bold font-mono text-[#f0883e]">98%</div>
                <div className="text-xs text-[#8b949e] mt-0.5">User Adoption Rate</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#products" className="btn-gh-primary">
                <span>Explore Products & Repos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#calculator" className="btn-gh-purple">
                <Zap className="w-4 h-4 text-[#d2a8ff]" />
                <span>BA Impact Calculator</span>
              </a>

              <button onClick={onOpenResume} className="btn-gh-secondary">
                <Code2 className="w-4 h-4 text-[#58a6ff]" />
                <span>View Resume</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: GitHub Code Snippet Terminal Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="gh-editor relative shadow-2xl">
              
              {/* Header Tabs */}
              <div className="gh-editor-header">
                <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
                  {[
                    { id: 'userstory', label: 'UserStory.json', icon: FileCode },
                    { id: 'governance', label: 'Governance.bpmn', icon: GitPullRequest },
                    { id: 'sql', label: 'Query.sql', icon: Terminal },
                    { id: 'selenium', label: 'Test.java', icon: ShieldCheck }
                  ].map((tab) => {
                    const IconComp = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                          activeTab === tab.id
                            ? 'bg-[#0d1117] text-[#58a6ff] border border-[#30363d]'
                            : 'text-[#8b949e] hover:text-[#c9d1d9]'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="p-1 rounded text-[#8b949e] hover:text-white transition-colors"
                  title="Copy Snippet"
                >
                  {copied ? <Check className="w-4 h-4 text-[#3fb950]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 text-xs font-mono text-[#c9d1d9] overflow-x-auto min-h-[260px] leading-relaxed">
                <pre>
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>

              {/* Footer Status */}
              <div className="bg-[#161b22] border-t border-[#30363d] p-3 text-[11px] font-mono text-[#8b949e] flex items-center justify-between border-b-left-radius-0.75rem border-b-right-radius-0.75rem">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3fb950]" />
                  <span>Verified BA Deliverable Schema</span>
                </span>
                <span className="text-[#a371f7]">INVEST & ISO 9001 Compliant</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCode2, 
  Layers, 
  Workflow, 
  Wrench, 
  Building2, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Compass 
} from 'lucide-react';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('ba');

  const categories = [
    { id: 'ba', name: 'Business Analysis', icon: FileCode2, count: 10 },
    { id: 'delivery', name: 'Product & Delivery', icon: Layers, count: 9 },
    { id: 'agile', name: 'Process & Agile', icon: Workflow, count: 11 },
    { id: 'tools', name: 'Tech & Tools', icon: Wrench, count: 12 },
    { id: 'domains', name: 'Industry Domains', icon: Building2, count: 7 }
  ];

  const skillData = {
    ba: [
      { name: 'Requirements Elicitation', level: 95, desc: 'Conducted 50+ stakeholder workshops to unearth core functional & non-functional requirements.' },
      { name: 'BRD / FRD / SRS Authoring', level: 95, desc: 'Created 25+ detailed BRD/FRDs with unambiguous technical specifications and workflows.' },
      { name: 'User Stories & Acceptance Criteria', level: 98, desc: 'Authored 500+ sprint-ready user stories with INVEST principles and Gherkin Given-When-Then AC.' },
      { name: 'Requirement Traceability Matrix (RTM)', level: 92, desc: 'Ensured 100% test coverage and requirement alignment from sprint backlog to production release.' },
      { name: 'Use Cases & Functional Specs', level: 94, desc: 'Mapped detailed actor interactions, system boundaries, and alternative exception flows.' },
      { name: 'Business Rules Definition', level: 90, desc: 'Formulated complex pricing, approval matrix, and authorization rules for SaaS & ERP platforms.' }
    ],
    delivery: [
      { name: 'Backlog Refinement & Management', level: 96, desc: 'Managed 200+ backlog items across 3 concurrent engineering teams in JIRA.' },
      { name: 'Sprint & Release Planning', level: 94, desc: 'Facilitated sprint planning, story point estimations, and quarterly release roadmaps.' },
      { name: 'Stakeholder Management & Alignment', level: 92, desc: 'Bridged communication between C-suite executives, Product Owners, Developers, and QA.' },
      { name: 'User Acceptance Testing (UAT)', level: 95, desc: 'Designed UAT test scenarios achieving 95% pre-production defect identification.' },
      { name: 'Go-Live & Hypercare Support', level: 90, desc: 'Coordinated 4+ production releases with zero critical go-live incidents and 30-day hypercare.' },
      { name: 'Requirement Prioritization (MoSCoW)', level: 95, desc: 'Balanced client feature requests with technical feasibility to optimize MVP scope.' }
    ],
    agile: [
      { name: 'Agile & Scrum Framework', level: 95, desc: 'Facilitated daily standups, backlog grooming, sprint reviews, and retrospectives.' },
      { name: 'AS-IS / TO-BE Process Mapping', level: 94, desc: 'Visualized existing operational bottlenecks and engineered optimized TO-BE workflows.' },
      { name: 'Fit-Gap Analysis', level: 92, desc: 'Executed Fit-Gap analysis for ERPNext & D365 ERP (20 config items, 8 custom modules).' },
      { name: 'BPMN & UML Diagramming', level: 90, desc: 'Created BPMN activity diagrams, sequence diagrams, and data flow diagrams in Lucidchart/Draw.io.' },
      { name: 'Wireframing & UI Prototyping', level: 88, desc: 'Designed low-fidelity wireframes and user interaction flows for web and desktop products.' },
      { name: 'ISO 9001 Project Governance', level: 92, desc: 'Designed 11-phase project governance framework with 15+ standardized BA templates.' }
    ],
    tools: [
      { name: 'Industrial IoT (MES / WMS / QMS / AMM)', level: 92, desc: 'Mapped shopfloor equipment integration, warehouse inventory, and quality inspection workflows.' },
      { name: 'JIRA & Confluence', level: 98, desc: 'Power user creating custom JIRA workflows, story templates, RTM dashboards, and Confluence docs.' },
      { name: 'Postman API Testing', level: 85, desc: 'Validated REST API endpoints, JSON request/response payloads, and HTTP status codes.' },
      { name: 'SQL Querying', level: 85, desc: 'Written SELECT queries, joins, and aggregations for backend data validation & reporting requirements.' },
      { name: 'Salesforce Backend (YellowPages)', level: 88, desc: 'Validated 100+ daily record entries in Salesforce CRM backend with 99.5% precision.' },
      { name: 'Selenium Java Automation', level: 82, desc: 'Certified in Selenium, Java, TestNG, Jenkins, supporting automated test script validation.' }
    ],
    domains: [
      { name: 'Industrial IoT & Manufacturing', level: 95, desc: 'Deep expertise in IOT3Sixty MES, WMS, Quality Management, and Asset Maintenance.' },
      { name: 'SaaS & EdTech LMS', level: 92, desc: '2 years on Everest Tutoring Platform (Australia) for 500+ educators and CRM integration.' },
      { name: 'Enterprise ERP (ERPNext / D365)', level: 94, desc: 'Manufacturing ERP, finance approval workflows, order-to-dispatch supply chain.' },
      { name: 'Project & HR Management SaaS', level: 90, desc: 'Work3Sixty product for employee profiles, leave, attendance, timesheets, and performance KPIs.' },
      { name: 'Healthcare & Medical Systems', level: 88, desc: 'Medaz healthcare platform - drug/pharmacy database validation and billing structures.' },
      { name: 'Logistics & ANPR/RFID Fleet Tracking', level: 88, desc: 'Real-time vehicle tracking with RFID & Automatic Number Plate Recognition integration.' }
    ]
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="glow-orb w-96 h-96 bg-purple-600/20 top-20 right-10" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title text-white">
            Skills & <span className="gradient-text-secondary">Technical Proficiency</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill set refined across 6+ years of end-to-end software product delivery, Agile governance, and multi-domain engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105 border border-indigo-400/40'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                <span>{cat.name}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillData[activeTab].map((skill, idx) => (
              <div
                key={skill.name}
                className="glass-card p-5 relative flex flex-col justify-between hover:border-indigo-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{skill.name}</span>
                    </h3>
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                    />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">{skill.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

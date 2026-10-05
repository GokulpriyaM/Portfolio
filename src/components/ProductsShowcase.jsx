import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Star, 
  GitFork, 
  ShieldCheck, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  FileText,
  ChevronRight,
  Cpu,
  Users,
  Truck
} from 'lucide-react';

export default function ProductsShowcase() {
  const [selectedRepo, setSelectedRepo] = useState(0);

  const repositories = [
    {
      id: 'iot3sixty',
      name: 'IOT3Sixty-Industrial-IoT-Platform',
      badge: 'ACTIVE PRODUCT',
      lang: 'Industrial IoT (MES/WMS)',
      langColor: '#8957e5',
      stars: 284,
      forks: 48,
      subtitle: 'Shopfloor MES, Warehouse, Quality & Asset Maintenance Suite',
      domain: 'MES · WMS · QMS · AMM',
      role: 'Lead Business Analyst & Implementation Support',
      period: 'May 2023 – Present',
      summary: 'Delivering end-to-end requirements analysis, process flows, user stories, and functional specifications across MES, WMS, QMS, and AMM modules for smart manufacturing.',
      modules: [
        { name: 'MES (Manufacturing Execution)', desc: 'Shopfloor production order tracking, machine data telemetry, shift planning, and cycle-time analytics.' },
        { name: 'WMS (Warehouse Management)', desc: 'Raw material inwarding, bin allocation, pick-and-pack routing, FIFO batch tracking, and dispatch control.' },
        { name: 'QMS (Quality Management)', desc: 'In-line quality inspection checklists, non-conformance reporting (NCR), defect logging, and CAPA workflows.' },
        { name: 'AMM (Asset Maintenance)', desc: 'Preventive maintenance scheduling, downtime logging, spare parts inventory, and MTBF tracking.' }
      ],
      deliverables: [
        '50+ Stakeholder requirement workshops with factory managers & IT leaders',
        'Functional Specification Documents (FSD) for cross-module IoT sensor data integration',
        'Comprehensive Process Flow Diagrams (AS-IS & TO-BE) for shopfloor operations',
        'Backlog prioritization and sprint refinement for 3 engineering sub-teams'
      ],
      impact: 'Reduced shopfloor requirement clarification cycle by 35%, enabling 2–3 days earlier sprint commencement.'
    },
    {
      id: 'work3sixty',
      name: 'Work3Sixty-Project-HR-SaaS-Suite',
      badge: 'ENTERPRISE SAAS',
      lang: 'Project & HR SaaS',
      langColor: '#2f81f7',
      stars: 196,
      forks: 32,
      subtitle: 'Configurable All-in-One Employee & Project Management Suite',
      domain: 'Project Mgmt · HR Tech · SaaS',
      role: 'Business Analyst Lead',
      period: '1 Year',
      summary: 'Architected functional workflows for a highly configurable enterprise SaaS platform unifying employee lifecycle management, project execution, timesheets, and performance KPIs.',
      modules: [
        { name: 'HR & Employee Profiles', desc: 'Customizable employee onboarding, leave management, attendance policies, and document repository.' },
        { name: 'Sprint & Task Management', desc: 'Kanban boards, sprint backlogs, task dependency mapping, and automated notification triggers.' },
        { name: 'Timesheets & Client Portal', desc: 'Billable hours logging, client project billing, milestone tracking, and invoicing exports.' },
        { name: 'Performance KPI Engine', desc: 'Custom key performance indicator math, appraisal scorecards, and manager review workflows.' }
      ],
      deliverables: [
        'Detailed user flows for multi-tenant organizational hierarchy & role-based permissions',
        'Defined 100+ user stories with INVEST criteria and edge-case acceptance rules',
        'Wireframed dashboard interfaces for project health and resource allocation'
      ],
      impact: 'Delivered a unified SaaS product enabling clients to eliminate 3 fragmented third-party software subscriptions.'
    },
    {
      id: 'erp3sixty',
      name: 'ERP3Sixty-Manufacturing-Suite',
      badge: 'ENTERPRISE ERP',
      lang: 'ERPNext Manufacturing',
      langColor: '#f0883e',
      stars: 165,
      forks: 24,
      subtitle: 'ERPNext Custom Manufacturing Business Suite',
      domain: 'Manufacturing · Sales · Vendor · Finance',
      role: 'Business Analyst & ERP Lead',
      period: 'Completed',
      summary: 'Gathered and documented end-to-end business management requirements covering manufacturing operations, vendor management, customer lifecycle, and financial reporting.',
      modules: [
        { name: 'Manufacturing Operations', desc: 'BOM management, work order generation, material request planning (MRP), and scrap tracking.' },
        { name: 'Vendor & Customer CRM', desc: 'Supplier quotation comparison, purchase order workflows, customer CRM, and dispatch logs.' },
        { name: 'Finance & General Ledger', desc: 'Automated invoice generation, accounts payable/receivable, and automated P&L statement generation.' }
      ],
      deliverables: [
        'Gap Analysis between vanilla ERPNext capabilities and client-specific business rules',
        'Maintained end-to-end Requirement Traceability Matrix (RTM) across 25+ features',
        'Formulated UAT scenarios ensuring 95% defect detection prior to cutover'
      ],
      impact: 'Achieved 40% reduction in manual data entry and improved inventory accuracy from 87% to 98%.'
    },
    {
      id: 'supplychain',
      name: 'SupplyChain-Order-To-Dispatch-Platform',
      badge: 'LOGISTICS PLATFORM',
      lang: 'Supply Chain & Logistics',
      langColor: '#3fb950',
      stars: 142,
      forks: 18,
      subtitle: 'Configurable Order-to-Dispatch Ecosystem',
      domain: 'Supply Chain · Order Mgmt · Dispatch Tracking',
      role: 'Business Analyst Specialist',
      period: 'Completed',
      summary: 'Designed workflows supporting the complete customer order-to-dispatch lifecycle with customizable product fields based on client-specific supply chain needs.',
      modules: [
        { name: 'Order Processing Engine', desc: 'Customer order confirmation, SKU allocation, and dynamic inventory lock mechanisms.' },
        { name: 'Delivery Planning', desc: 'Route optimization planning, vehicle load assignment, and dispatch schedule management.' },
        { name: 'Dispatch & Real-time Tracking', desc: 'Proof of delivery (POD) capture, live status updates, and milestone alert notifications.' }
      ],
      deliverables: [
        'End-to-end process maps for Post-Order -> Planning -> Dispatch -> Delivery Tracking',
        'Configurable custom field schema documentation for flexible multi-industry deployment',
        'Stakeholder alignment across logistics operations, warehouse managers, and IT delivery'
      ],
      impact: 'Accelerated order processing time by 25% and provided 100% real-time order visibility.'
    }
  ];

  const currentRepo = repositories[selectedRepo];

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-transparent border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono text-[#58a6ff] font-bold uppercase tracking-widest">
            GitHub Repository Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="github-blue-gradient">Product Repositories</span>
          </h2>
          <p className="text-[#8b949e] text-sm">
            Core enterprise software products where Gokulpriya led requirement engineering, process mapping, and implementation governance.
          </p>
        </div>

        {/* Repository Grid Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {repositories.map((repo, idx) => {
            const isSelected = selectedRepo === idx;
            return (
              <button
                key={repo.id}
                onClick={() => setSelectedRepo(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#161b22] border-[#58a6ff] shadow-lg shadow-[#58a6ff]/10 ring-1 ring-[#58a6ff]'
                    : 'bg-[#161b22]/60 hover:bg-[#161b22] border-[#30363d] text-[#c9d1d9]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#58a6ff] font-mono">
                    <FolderGit2 className="w-4 h-4 text-[#8957e5]" />
                    <span className="hover:underline">{repo.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                    {repo.badge}
                  </span>
                </div>

                <p className="text-xs text-[#8b949e] font-light mb-3 line-clamp-2">{repo.subtitle}</p>

                <div className="flex items-center justify-between text-xs font-mono text-[#8b949e]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: repo.langColor }} />
                    <span>{repo.lang}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-[#e3b341]">
                      <Star className="w-3.5 h-3.5 fill-current" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Repository Detailed Drawer Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRepo.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="gh-card p-6 sm:p-8 border-[#58a6ff]/40 bg-[#161b22] relative"
          >
            {/* Header info */}
            <div className="border-b border-[#30363d] pb-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-[#21262d] border border-[#30363d] text-[#58a6ff]">
                    <FolderGit2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold font-mono text-white">{currentRepo.name}</h3>
                    <p className="text-xs font-mono text-[#a371f7]">{currentRepo.subtitle}</p>
                  </div>
                </div>

                <div className="text-right text-xs font-mono text-[#8b949e]">
                  <div>Role: <span className="text-white font-bold">{currentRepo.role}</span></div>
                  <div>Period: <span className="text-[#3fb950]">{currentRepo.period}</span></div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#c9d1d9] leading-relaxed font-light mt-3">
                {currentRepo.summary}
              </p>
            </div>

            {/* Modules Grid */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8957e5]" />
                <span>Module Architecture & Requirements Scope</span>
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {currentRepo.modules.map((mod) => (
                  <div key={mod.name} className="bg-[#010409] border border-[#30363d] rounded-lg p-3.5">
                    <h5 className="text-xs font-bold text-[#58a6ff] font-mono mb-1">{mod.name}</h5>
                    <p className="text-xs text-[#8b949e] leading-relaxed font-light">{mod.desc}</p>
                  </div>
                ))}
              </div>

              {/* Deliverables & Business Impact */}
              <div className="grid md:grid-cols-12 gap-6 pt-4 border-t border-[#30363d]">
                <div className="md:col-span-8 space-y-2">
                  <h4 className="text-xs font-bold font-mono text-[#c9d1d9] uppercase tracking-wider">Gokulpriya's Key Deliverables</h4>
                  <div className="space-y-1.5">
                    {currentRepo.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#c9d1d9]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 bg-[#010409] border border-[#006d32] rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#3fb950] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>BUSINESS IMPACT</span>
                  </div>
                  <p className="text-xs text-[#c9d1d9] leading-relaxed font-medium">
                    "{currentRepo.impact}"
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

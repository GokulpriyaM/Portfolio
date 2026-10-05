import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Cpu, 
  Users, 
  Layers, 
  Truck, 
  CheckCircle, 
  ExternalLink, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

export default function ProductsShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      id: 'iot3sixty',
      name: 'IOT3Sixty Platform',
      badge: 'ACTIVE PRODUCT',
      subtitle: 'Industrial IoT Enterprise Platform',
      domain: 'MES · WMS · QMS · AMM',
      role: 'Lead Business Analyst & Implementation Support',
      period: 'Present',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: Cpu,
      summary: 'Delivering end-to-end requirements analysis, process flows, user stories, and functional specifications across MES, WMS, QMS, and AMM modules for smart manufacturing.',
      modules: [
        { name: 'MES (Manufacturing Execution)', desc: 'Shopfloor production order tracking, machine data telemetry, shift planning, and cycle-time analytics.' },
        { name: 'WMS (Warehouse Management)', desc: 'Raw material inwarding, bin allocation, pick-and-pack routing, FIFO batch tracking, and dispatch control.' },
        { name: 'QMS (Quality Management)', desc: 'In-line quality inspection checklists, non-conformance reporting (NCR), defect logging, and CAPA workflows.' },
        { name: 'AMM (Asset Maintenance)', desc: 'Preventive maintenance scheduling, downtime logging, spare parts inventory, and mean time between failures (MTBF).' }
      ],
      deliverables: [
        '50+ Stakeholder requirement workshops with factory managers & IT leaders',
        'Functional Specification Documents (FSD) for cross-module IoT sensor data integration',
        'Comprehensive Process Flow Diagrams (AS-IS & TO-BE) for shopfloor operations',
        'Backlog prioritization and sprint refinement for 3 engineering sub-teams'
      ],
      impact: 'Reduced shopfloor requirement clarification cycle by 35%, enabling 2-3 days earlier sprint commencement.'
    },
    {
      id: 'work3sixty',
      name: 'Work3Sixty Platform',
      badge: 'SAAS PRODUCT',
      subtitle: 'All-in-One Project & HR Management Suite',
      domain: 'Project Management · HR Tech · SaaS',
      role: 'Business Analyst',
      period: '1 Year',
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      icon: Users,
      summary: 'Architected functional workflows for a highly configurable enterprise SaaS platform unifying employee lifecycle management, project execution, and performance KPIs.',
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
      name: 'ERP3Sixty Manufacturing',
      badge: 'ENTERPRISE ERP',
      subtitle: 'ERPNext Custom Manufacturing Business Suite',
      domain: 'Manufacturing · Sales · Vendor · Finance',
      role: 'Business Analyst Lead',
      period: 'Completed',
      gradient: 'from-amber-500 via-orange-600 to-red-600',
      icon: Layers,
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
      name: 'Supply Chain & Delivery Platform',
      badge: 'LOGISTICS SAAS',
      subtitle: 'Configurable Order-to-Dispatch Ecosystem',
      domain: 'Supply Chain · Order Mgmt · Dispatch Tracking',
      role: 'Business Analyst',
      period: 'Completed',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      icon: Truck,
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

  const current = products[selectedProduct];

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Orbs */}
      <div className="glow-orb w-[450px] h-[450px] bg-indigo-600/20 top-40 left-0" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Key Product Engineering</span>
          <h2 className="section-title text-white">
            Core Products & <span className="gradient-text-primary">Enterprise Solutions</span>
          </h2>
          <p className="text-slate-400 text-base">
            Detailed walkthrough of flagship products where Gokulpriya led business analysis, requirement engineering, and implementation governance.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {products.map((p, idx) => {
            const IconComp = p.icon;
            const isSelected = selectedProduct === idx;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(idx)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-r ${p.gradient} text-white shadow-xl shadow-indigo-500/20 border border-white/30 scale-105`
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <IconComp className="w-5 h-5" />
                <span>{p.name}</span>
                {p.badge && (
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-indigo-500/20 text-indigo-300'}`}>
                    {p.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Product Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 lg:p-10 relative overflow-hidden border-indigo-500/30"
          >
            {/* Top Banner Info */}
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-white/10">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {current.domain}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Role: {current.role}</span>
                </div>
                
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{current.name}</h3>
                <p className="text-sm font-mono text-purple-300">{current.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed pt-1 font-light">{current.summary}</p>
              </div>

              {/* Impact Callout Box */}
              <div className="lg:col-span-4 bg-gradient-to-br from-indigo-950/80 to-purple-950/80 border border-indigo-500/40 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold font-mono uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Business Impact Highlight</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  "{current.impact}"
                </p>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-pink-400" />
                <span>Key Modules & Workflow Coverage</span>
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {current.modules.map((m) => (
                  <div key={m.name} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
                    <h5 className="text-sm font-bold text-indigo-300 mb-1">{m.name}</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Gokulpriya's Key BA Deliverables & Contributions</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {current.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

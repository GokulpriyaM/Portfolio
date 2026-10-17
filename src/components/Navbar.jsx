import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  BarChart3, 
  FolderGit2, 
  ShieldCheck, 
  Cpu, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  FileText
} from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const leaveTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleSubItemClick = () => {
    setActiveMenu(null);
  };

  const navItems = [
    {
      name: 'Product & IoT',
      href: '#products',
      icon: Layers,
      accentColor: '#8957e5',
      badge: '4 Suites',
      items: [
        {
          title: 'IOT3Sixty Platform',
          desc: 'Smart Shopfloor MES, Warehouse WMS, Quality QMS & Asset AMM Suite',
          tag: 'Industrial IoT',
          tagColor: 'text-[#8957e5] bg-[#8957e5]/10 border-[#8957e5]/20',
          href: '#products'
        },
        {
          title: 'Work3Sixty Enterprise SaaS',
          desc: 'Configurable Employee Lifecycle, Agile Backlogs & Timesheet Invoicing',
          tag: 'HR Tech & SaaS',
          tagColor: 'text-[#2f81f7] bg-[#2f81f7]/10 border-[#2f81f7]/20',
          href: '#products'
        },
        {
          title: 'ERP3Sixty Manufacturing',
          desc: 'ERPNext Custom Manufacturing, BOM, MRP & Vendor/Customer CRM',
          tag: 'Enterprise ERP',
          tagColor: 'text-[#f0883e] bg-[#f0883e]/10 border-[#f0883e]/20',
          href: '#products'
        },
        {
          title: 'Order-to-Dispatch Ecosystem',
          desc: 'Dynamic SKU Allocation, Route Planning & Real-Time Logistics Tracking',
          tag: 'Supply Chain',
          tagColor: 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20',
          href: '#products'
        }
      ],
      footerLink: {
        label: 'View all 4 enterprise product architectures',
        href: '#products'
      }
    },
    {
      name: 'Impact Matrix',
      href: '#impact',
      icon: BarChart3,
      accentColor: '#58a6ff',
      badge: 'Metrics',
      items: [
        {
          title: '+35% Faster Sprint Starts',
          desc: 'INVEST-ready user stories & edge-case acceptance criteria ready on Day 1',
          tag: 'Velocity',
          tagColor: 'text-[#58a6ff] bg-[#58a6ff]/10 border-[#58a6ff]/20',
          href: '#impact'
        },
        {
          title: '-40% Rework Reduction',
          desc: 'ISO 9001 governance & early defect discovery during AS-IS/TO-BE mapping',
          tag: 'Quality',
          tagColor: 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20',
          href: '#impact'
        },
        {
          title: '50+ Stakeholder Workshops',
          desc: 'Collaborative alignment across plant operators, engineers, and C-Suite',
          tag: 'Alignment',
          tagColor: 'text-[#d2a8ff] bg-[#d2a8ff]/10 border-[#d2a8ff]/20',
          href: '#impact'
        },
        {
          title: '98% End-User Adoption',
          desc: 'Change management, comprehensive user guides, and hands-on UAT sign-offs',
          tag: 'Adoption',
          tagColor: 'text-[#f0883e] bg-[#f0883e]/10 border-[#f0883e]/20',
          href: '#impact'
        }
      ],
      footerLink: {
        label: 'Launch Interactive BA ROI Calculator',
        href: '#calculator'
      }
    },
    {
      name: 'Repositories',
      href: '#projects',
      icon: FolderGit2,
      accentColor: '#3fb950',
      badge: 'Case Studies',
      items: [
        {
          title: 'Salesforce CRM Migration',
          desc: 'YellowPages 100k+ business records validation, ETL queries & QC approval',
          tag: 'Data Migration',
          tagColor: 'text-[#58a6ff] bg-[#58a6ff]/10 border-[#58a6ff]/20',
          href: '#projects'
        },
        {
          title: 'Automated Test Validation',
          desc: 'Selenium Java regression test suites ensuring defect-free UAT releases',
          tag: 'QA Automation',
          tagColor: 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20',
          href: '#projects'
        },
        {
          title: 'BA Deliverable Schemas',
          desc: 'Production-ready UserStory.json, BPMN process models & SQL validation scripts',
          tag: 'Specifications',
          tagColor: 'text-[#8957e5] bg-[#8957e5]/10 border-[#8957e5]/20',
          href: '#projects'
        }
      ],
      footerLink: {
        label: 'Explore featured delivery repositories',
        href: '#projects'
      }
    },
    {
      name: 'Governance',
      href: '#governance',
      icon: ShieldCheck,
      accentColor: '#f0883e',
      badge: 'ISO 9001',
      items: [
        {
          title: 'ISO 9001 11-Phase Workflow',
          desc: 'Standardized BA lifecycle from elicitation to closure with zero compliance gaps',
          tag: 'Standard',
          tagColor: 'text-[#58a6ff] bg-[#58a6ff]/10 border-[#58a6ff]/20',
          href: '#governance'
        },
        {
          title: 'BRD & FRD Specifications',
          desc: '25+ signed formal documentation packages bridging business and tech',
          tag: 'Documentation',
          tagColor: 'text-[#8957e5] bg-[#8957e5]/10 border-[#8957e5]/20',
          href: '#governance'
        },
        {
          title: 'BPMN 2.0 Process Swimlanes',
          desc: 'Clear visual mapping of AS-IS bottlenecks and optimized TO-BE pathways',
          tag: 'Modeling',
          tagColor: 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20',
          href: '#governance'
        },
        {
          title: 'Requirement Traceability (RTM)',
          desc: 'Bi-directional coverage connecting business epics directly to test cases',
          tag: 'Traceability',
          tagColor: 'text-[#f0883e] bg-[#f0883e]/10 border-[#f0883e]/20',
          href: '#governance'
        }
      ],
      footerLink: {
        label: 'Inspect 11-Phase BA Governance Framework',
        href: '#governance'
      }
    },
    {
      name: 'Skills & Tech',
      href: '#skills',
      icon: Cpu,
      accentColor: '#a371f7',
      badge: 'Radar',
      items: [
        {
          title: 'Requirements Engineering',
          desc: 'Agile/Scrum, Waterfall, INVEST User Stories, Gap Analysis, UAT Sign-off',
          tag: 'Core BA',
          tagColor: 'text-[#8957e5] bg-[#8957e5]/10 border-[#8957e5]/20',
          href: '#skills'
        },
        {
          title: 'Tools & Ecosystem',
          desc: 'JIRA, Confluence, Draw.io, Postman API, Git, Selenium, SQL Workbench',
          tag: 'Technical Tools',
          tagColor: 'text-[#58a6ff] bg-[#58a6ff]/10 border-[#58a6ff]/20',
          href: '#skills'
        },
        {
          title: 'Domain Expertise',
          desc: 'Smart Manufacturing, Industrial IoT Telemetry, Supply Chain & Enterprise SaaS',
          tag: 'Domains',
          tagColor: 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20',
          href: '#skills'
        }
      ],
      footerLink: {
        label: 'Explore full competency breakdown',
        href: '#skills'
      }
    },
    {
      name: 'Experience',
      href: '#experience',
      icon: Briefcase,
      accentColor: '#d2a8ff',
      badge: 'Journey',
      items: [
        {
          title: 'Lead Business Analyst',
          desc: 'iWave Systems / Innowell (May 2023 – Present) · Smart Manufacturing & IoT',
          tag: 'Current Role',
          tagColor: 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20',
          href: '#experience'
        },
        {
          title: 'Enterprise Product Delivery',
          desc: 'Delivered 4 comprehensive platform suites with cross-functional teams',
          tag: 'Delivery Lead',
          tagColor: 'text-[#58a6ff] bg-[#58a6ff]/10 border-[#58a6ff]/20',
          href: '#experience'
        },
        {
          title: 'Education & Certifications',
          desc: 'B.E. Electronics & Communication Engineering · ISO 9001 Certified Auditor',
          tag: 'Credentials',
          tagColor: 'text-[#d2a8ff] bg-[#d2a8ff]/10 border-[#d2a8ff]/20',
          href: '#experience'
        }
      ],
      footerLink: {
        label: 'View full career timeline and milestones',
        href: '#experience'
      }
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#010409]/95 backdrop-blur-xl border-b border-[#30363d] py-2.5 shadow-2xl' : 'bg-[#010409]/80 backdrop-blur-md py-3.5 border-b border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Identity (GitHub Octocat Removed) */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 group text-decoration-none">
            <div>
              <span className="text-white font-bold text-base leading-tight block tracking-tight group-hover:text-[#58a6ff] transition-colors">
                Gokulpriya M.
              </span>
              <span className="text-[11px] font-mono text-[#8b949e] block font-medium">
                Senior BA & Product Lead
              </span>
            </div>
          </a>

          {/* Desktop Nav Items with Rich Hover Menus */}
          <nav className="hidden lg:flex items-center gap-1 relative" onMouseLeave={handleMouseLeave}>
            {navItems.map((item) => {
              const isOpen = activeMenu === item.name;
              return (
                <div 
                  key={item.name} 
                  className="relative py-1"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                >
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                      isOpen 
                        ? 'text-white bg-[#21262d]' 
                        : 'text-[#c9d1d9] hover:text-white hover:bg-[#21262d]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3 h-3 text-[#8b949e] transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                  </a>

                  {/* Glassmorphic Hover Menu Dropdown */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-[380px] sm:w-[440px] bg-[#161b22]/95 backdrop-blur-2xl border border-[#30363d] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] p-3 z-50 text-left"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#30363d] px-1">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#8b949e] font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accentColor }} />
                            {item.name}
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#21262d] text-[#c9d1d9] border border-[#30363d]">
                            {item.badge}
                          </span>
                        </div>

                        {/* Dropdown Items List */}
                        <div className="space-y-1">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              onClick={handleSubItemClick}
                              className="group block p-2 rounded-lg hover:bg-[#21262d] transition-all border border-transparent hover:border-[#30363d]"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-xs font-semibold text-[#f0f6fc] group-hover:text-[#58a6ff] transition-colors">
                                  {subItem.title}
                                </span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded border font-mono ${subItem.tagColor}`}>
                                  {subItem.tag}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#8b949e] group-hover:text-[#c9d1d9] leading-tight">
                                {subItem.desc}
                              </p>
                            </a>
                          ))}
                        </div>

                        {/* Dropdown Footer Link */}
                        {item.footerLink && (
                          <div className="pt-2 mt-2 border-t border-[#30363d] px-1">
                            <a
                              href={item.footerLink.href}
                              onClick={handleSubItemClick}
                              className="inline-flex items-center gap-1.5 text-[11px] text-[#58a6ff] hover:text-[#79c0ff] font-medium transition-colors group"
                            >
                              <span>{item.footerLink.label}</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Button (Search & View Resume removed, Hire button made smaller) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-semibold shadow-sm transition-all hover:shadow-[0_0_12px_rgba(46,160,67,0.4)] active:scale-95"
          >
            <Send className="w-3 h-3" />
            <span>Hire Gokulpriya</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#21262d] text-[#c9d1d9] hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-[#30363d] px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-[#c9d1d9] hover:text-white p-2.5 rounded-md bg-[#161b22] hover:bg-[#21262d] flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-[10px] text-[#8b949e] font-mono">{item.badge}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#30363d] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-gh-secondary w-full justify-center text-xs py-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#58a6ff]" />
              <span>View Printable Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch / Hire</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}

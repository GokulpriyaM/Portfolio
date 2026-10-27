import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitCommit, 
  GitPullRequest, 
  ShieldCheck, 
  Activity, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Flame,
  Award
} from 'lucide-react';

export default function BentoGrid() {
  // Generate pseudo GitHub contribution heatmap grid (52 weeks x 7 days)
  const generateHeatmap = () => {
    const tiles = [];
    for (let i = 0; i < 112; i++) {
      const rand = Math.random();
      const level = rand > 0.7 ? 4 : rand > 0.5 ? 3 : rand > 0.3 ? 2 : rand > 0.15 ? 1 : 0;
      tiles.push(level);
    }
    return tiles;
  };

  const heatmapTiles = generateHeatmap();

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Gokulpriya Drives <span className="github-gradient-text">Delivery Speed</span>
          </h2>
          <p className="text-[#c9d1d9] text-sm sm:text-base">
            Interactive breakdown of Agile metrics, sprint pull request acceleration, and ISO governance safeguards.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: GitHub Contribution Heatmap (Col-Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 gh-card gh-card-purple p-6 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#a371f7] font-bold uppercase">
                  <GitCommit className="w-4 h-4 text-[#8957e5]" />
                  <span>200+ Sprint Backlog & Elicitation Commit Graph</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#21262d] text-[#3fb950] border border-[#30363d]">
                  50+ Workshops Logged
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">High-Velocity Delivery Track</h3>
              <p className="text-xs text-[#8b949e] mb-5 font-light">
                Continuous backlog refinement across 3 engineering teams, ensuring unambiguous user stories and INVEST criteria.
              </p>

              {/* GitHub Contribution Heatmap Simulation */}
              <div className="bg-[#010409] border border-[#30363d] rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8b949e] mb-2">
                  <span>520 Requirements Elicited & Mapped</span>
                  <span className="flex items-center gap-1">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 bg-[#161b22] inline-block rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-[#0e4429] inline-block rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-[#006d32] inline-block rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-[#26a641] inline-block rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-[#39d353] inline-block rounded-xs" />
                    <span>More</span>
                  </span>
                </div>

                <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-1">
                  {heatmapTiles.map((lvl, i) => (
                    <div
                      key={i}
                      className={`gh-contrib-cell gh-contrib-${lvl}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#8b949e] pt-2 border-t border-[#30363d]">
              <span>Active Sprint Backlog Coverage</span>
              <span className="text-[#3fb950] font-bold">100% Traceability via RTM</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Pull Request Sprint Kickoff (Col-Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 gh-card gh-card-blue p-6 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#58a6ff] font-bold uppercase">
                  <GitPullRequest className="w-4 h-4 text-[#58a6ff]" />
                  <span>Requirement PR Flow</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#21262d] text-[#58a6ff] border border-[#30363d]">
                  PR #42 MERGED
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">35% Faster Sprint Kickoffs</h3>
              <p className="text-xs text-[#8b949e] mb-4 font-light">
                Requirement clarification loops eliminated before sprint planning, enabling engineering teams to code 2–3 days earlier.
              </p>

              {/* GitHub PR Widget Box */}
              <div className="bg-[#010409] border border-[#30363d] rounded-lg p-3 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[#3fb950] bg-[#0e4429]/40 p-2 rounded border border-[#006d32]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Merged into main branch</span>
                  </span>
                  <span className="text-[#8b949e]">2.5 days ahead</span>
                </div>
                <div className="text-[#c9d1d9] pl-2 border-l-2 border-[#58a6ff]">
                  <span className="text-[#8957e5]">feature/user-story-signoff</span> → <span className="text-[#58a6ff]">release/v4.2</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#30363d] text-xs font-mono text-[#58a6ff] flex justify-between">
              <span>Sprint Kickoff Velocity</span>
              <span className="font-bold text-white">+2.5 Days Saved / Sprint</span>
            </div>
          </motion.div>

          {/* Bento Card 3: ISO 9001 Compliance Matrix (Col-Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 gh-card gh-card-green p-6 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#3fb950] font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-[#3fb950]" />
                <span>ISO 9001 Governance Shield</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e4429] text-[#3fb950] border border-[#006d32]">
                40% REWORK REDUCTION
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">7-Phase Project Lifecycle</h3>
            <p className="text-xs text-[#8b949e] mb-4 font-light">
              Steered a 20-member cross-functional team with 15+ standardized BA templates, eliminating rework and scope drift.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#c9d1d9]">
              <div className="bg-[#010409] border border-[#30363d] p-2.5 rounded flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950]" />
                <span>BRD & FRD Templates</span>
              </div>
              <div className="bg-[#010409] border border-[#30363d] p-2.5 rounded flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950]" />
                <span>RTM Matrix Control</span>
              </div>
              <div className="bg-[#010409] border border-[#30363d] p-2.5 rounded flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950]" />
                <span>INVEST User Stories</span>
              </div>
              <div className="bg-[#010409] border border-[#30363d] p-2.5 rounded flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950]" />
                <span>30-Day Hypercare</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: UAT Release Quality (Col-Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 gh-card p-6 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#d2a8ff] font-bold uppercase">
                  <Activity className="w-4 h-4 text-[#d2a8ff]" />
                  <span>Production Release Quality</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#21262d] text-[#d2a8ff] border border-[#30363d]">
                  95% DEFECT DETECTION
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Zero Critical Go-Live Incidents</h3>
              <p className="text-xs text-[#8b949e] mb-4 font-light">
                Coordinated UAT across 4+ production enterprise releases with 98% user adoption achieved by Day +7.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#010409] border border-[#30363d] p-3 rounded-lg">
                  <div className="text-lg font-bold font-mono text-[#3fb950]">95%</div>
                  <div className="text-[10px] text-[#8b949e] mt-0.5">UAT Defect Pre-Detect</div>
                </div>
                <div className="bg-[#010409] border border-[#30363d] p-3 rounded-lg">
                  <div className="text-lg font-bold font-mono text-[#58a6ff]">0</div>
                  <div className="text-[10px] text-[#8b949e] mt-0.5">Critical Incidents</div>
                </div>
                <div className="bg-[#010409] border border-[#30363d] p-3 rounded-lg">
                  <div className="text-lg font-bold font-mono text-[#d2a8ff]">98%</div>
                  <div className="text-[10px] text-[#8b949e] mt-0.5">User Adoption Day 7</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

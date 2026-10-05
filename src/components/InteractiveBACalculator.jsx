import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Sparkles, 
  RotateCcw,
  Zap
} from 'lucide-react';

export default function InteractiveBACalculator() {
  const [teamSize, setTeamSize] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [sprintWeeks, setSprintWeeks] = useState(2);
  const [sprintsPerYear, setSprintsPerYear] = useState(24);

  // Calculations based on Gokulpriya's proven metrics:
  // 35% clarification cycle reduction = saves ~2.5 days (20 hours) per sprint of dev wait time
  // 40% rework reduction = saves ~15% total sprint dev capacity wasted on rewrite
  const hoursPerSprintSaved = (teamSize * 15 * (sprintWeeks / 2)); 
  const annualHoursSaved = Math.round(hoursPerSprintSaved * sprintsPerYear);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);
  const daysKickoffAccelerated = Math.round(2.5 * sprintsPerYear);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="glow-orb w-[450px] h-[450px] bg-indigo-600/20 bottom-10 right-10" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Interactive Value Estimator</span>
          <h2 className="section-title text-white">
            BA Delivery <span className="gradient-text-primary">ROI & Efficiency Calculator</span>
          </h2>
          <p className="text-slate-400 text-base">
            Simulate the financial and time-saving impact Gokulpriya brings to engineering teams using her 11-phase governance framework and 35% clarification cycle reduction.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="glass-card p-8 lg:p-10 border-indigo-500/40 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Team Parameters</h3>
                  <p className="text-xs text-slate-400">Adjust parameters to reflect your engineering organization</p>
                </div>
              </div>

              {/* Slider 1: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Cross-Functional Team Size:</span>
                  </label>
                  <span className="font-mono font-bold text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded border border-indigo-500/30">
                    {teamSize} Members
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Avg Blended Hourly Rate:</span>
                  </label>
                  <span className="font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Slider 3: Sprint Duration */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Sprint Cycle Length:</span>
                  </label>
                  <span className="font-mono font-bold text-purple-300 bg-purple-500/20 px-2.5 py-0.5 rounded border border-purple-500/30">
                    {sprintWeeks} Weeks
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={sprintWeeks}
                  onChange={(e) => setSprintWeeks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Reset Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setTeamSize(12);
                    setHourlyRate(45);
                    setSprintWeeks(2);
                    setSprintsPerYear(24);
                  }}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default Parameters</span>
                </button>
              </div>
            </div>

            {/* Right Output ROI Cards */}
            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/90 to-purple-950/90 border border-indigo-500/50 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="text-xs font-mono text-indigo-300 uppercase tracking-wider font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Estimated Annual Efficiency Impact</span>
              </div>

              {/* Big Metric: Annual Savings */}
              <div>
                <div className="text-4xl font-extrabold font-mono gradient-text-primary tracking-tight">
                  ${annualCostSaved.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300 mt-1">Annual Engineering Budget Saved</div>
              </div>

              {/* Secondary Output Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-xl font-bold font-mono text-cyan-400">{annualHoursSaved.toLocaleString()} hrs</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rework Hours Saved</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-xl font-bold font-mono text-emerald-400">{daysKickoffAccelerated} Days</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Faster Sprint Kickoffs</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed italic border-t border-white/10 pt-4">
                *Calculated using Gokulpriya’s empirical track record: 35% reduction in requirement clarification cycles & 40% reduction in rework.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

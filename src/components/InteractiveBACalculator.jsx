import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Users, 
  DollarSign, 
  Clock, 
  RotateCcw, 
  Zap, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';

export default function InteractiveBACalculator() {
  const [teamSize, setTeamSize] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [sprintWeeks, setSprintWeeks] = useState(2);
  const [sprintsPerYear, setSprintsPerYear] = useState(24);

  const hoursPerSprintSaved = (teamSize * 15 * (sprintWeeks / 2)); 
  const annualHoursSaved = Math.round(hoursPerSprintSaved * sprintsPerYear);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);
  const daysKickoffAccelerated = Math.round(2.5 * sprintsPerYear);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono text-[#58a6ff] font-bold uppercase tracking-widest">
            GitHub Enterprise ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            BA Delivery <span className="github-blue-gradient">Cost & Efficiency Estimator</span>
          </h2>
          <p className="text-[#8b949e] text-sm">
            Simulate the financial and time-saving impact Gokulpriya brings to engineering teams using her 11-phase governance framework and 35% clarification cycle reduction.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="gh-card p-8 border-[#30363d] bg-[#161b22] max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
                <div className="p-2.5 rounded-md bg-[#010409] border border-[#30363d] text-[#58a6ff]">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono">Team Engineering Parameters</h3>
                  <p className="text-xs text-[#8b949e]">Adjust sliders to reflect your team size & sprint cycle</p>
                </div>
              </div>

              {/* Slider 1: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <label className="text-[#c9d1d9] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#58a6ff]" />
                    <span>Cross-Functional Team Size:</span>
                  </label>
                  <span className="font-bold text-[#58a6ff] bg-[#010409] px-2.5 py-0.5 rounded border border-[#30363d]">
                    {teamSize} Members
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-[#010409] rounded-lg appearance-none cursor-pointer accent-[#58a6ff]"
                />
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <label className="text-[#c9d1d9] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#3fb950]" />
                    <span>Avg Blended Hourly Rate:</span>
                  </label>
                  <span className="font-bold text-[#3fb950] bg-[#010409] px-2.5 py-0.5 rounded border border-[#30363d]">
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
                  className="w-full h-2 bg-[#010409] rounded-lg appearance-none cursor-pointer accent-[#3fb950]"
                />
              </div>

              {/* Slider 3: Sprint Duration */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <label className="text-[#c9d1d9] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#a371f7]" />
                    <span>Sprint Length:</span>
                  </label>
                  <span className="font-bold text-[#a371f7] bg-[#010409] px-2.5 py-0.5 rounded border border-[#30363d]">
                    {sprintWeeks} Weeks
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={sprintWeeks}
                  onChange={(e) => setSprintWeeks(Number(e.target.value))}
                  className="w-full h-2 bg-[#010409] rounded-lg appearance-none cursor-pointer accent-[#a371f7]"
                />
              </div>

              <button
                onClick={() => {
                  setTeamSize(12);
                  setHourlyRate(45);
                  setSprintWeeks(2);
                  setSprintsPerYear(24);
                }}
                className="text-xs text-[#8b949e] hover:text-white flex items-center gap-1 font-mono transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Parameters</span>
              </button>
            </div>

            {/* Right Output ROI Cards */}
            <div className="lg:col-span-5 bg-[#010409] border border-[#30363d] rounded-xl p-6 space-y-5">
              <div className="text-xs font-mono text-[#58a6ff] uppercase font-bold flex items-center gap-2 border-b border-[#30363d] pb-3">
                <Zap className="w-4 h-4 text-[#e3b341]" />
                <span>Annual Cost & Time Savings Output</span>
              </div>

              <div>
                <div className="text-4xl font-extrabold font-mono text-[#3fb950]">
                  ${annualCostSaved.toLocaleString()}
                </div>
                <div className="text-xs text-[#8b949e] mt-1 font-mono">Annual Engineering Budget Saved</div>
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="bg-[#161b22] border border-[#30363d] p-3 rounded">
                  <div className="text-lg font-bold text-[#58a6ff]">{annualHoursSaved.toLocaleString()} hrs</div>
                  <div className="text-[10px] text-[#8b949e] mt-0.5">Rework Hours Saved</div>
                </div>

                <div className="bg-[#161b22] border border-[#30363d] p-3 rounded">
                  <div className="text-lg font-bold text-[#3fb950]">{daysKickoffAccelerated} Days</div>
                  <div className="text-[10px] text-[#8b949e] mt-0.5">Faster Kickoffs</div>
                </div>
              </div>

              <p className="text-[10px] text-[#8b949e] leading-relaxed font-mono border-t border-[#30363d] pt-3 italic">
                *Empirically calculated using Gokulpriya’s track record: 35% reduction in requirement clarification cycles & 40% reduction in rework.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

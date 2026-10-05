import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  CheckCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';

export default function EducationCertifications() {
  const certifications = [
    {
      title: 'Automation Testing with Selenium Java',
      issuer: 'Qtree Technologies',
      skills: ['Selenium WebDriver', 'Java', 'TestNG', 'Jenkins CI/CD', 'Test Case Design', 'Agile & SDLC'],
      gradient: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Scrum & Agile Methodology Certification',
      issuer: 'Agile Delivery Practice',
      skills: ['Sprint Facilitation', 'Backlog Grooming', 'INVEST Criteria', 'JIRA Agile Framework'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quality Assurance & Governance Best Practices',
      issuer: 'ISO 9001 Alignment',
      skills: ['RTM Control', 'UAT Defect Management', '11-Phase Governance', 'Hypercare Protocols'],
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="section-tag">Academic & Industry Training</span>
          <h2 className="section-title text-white">
            Education, <span className="gradient-text-accent">Certifications & Awards</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Education & Award Spotlight Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Degree Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 border-indigo-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">BACHELOR OF ENGINEERING (B.E.)</span>
                  <h3 className="text-xl font-bold text-white">Electronics & Communication Engineering</h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white">Sri Ramakrishna Institute of Technology</span>
                  <span className="font-mono text-indigo-300">2013 – 2017</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>Coimbatore, India</span>
                  <span className="text-emerald-400 font-bold">CGPA: 7.1</span>
                </div>
              </div>
            </motion.div>

            {/* Best Performer Award Spotlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 sm:p-8 border-amber-500/40 bg-gradient-to-br from-amber-950/40 via-slate-900/60 to-purple-950/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider">HONOR & RECOGNITION</span>
                  <h3 className="text-lg font-bold text-white">Best Performer Award</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                Awarded <strong className="text-white">Best Performer at Personiv Pvt Ltd</strong> for exceptional data quality, client delivery excellence, leading an 8-member QC team to +20% productivity and 99.5% accuracy.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Recognized for Quality, Dedication & Delivery Excellence</span>
              </div>
            </motion.div>

          </div>

          {/* Right: Certifications Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>Professional Certifications</span>
            </h3>

            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-5 relative border-white/10 hover:border-indigo-500/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white">{cert.title}</h4>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                    {cert.issuer}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {cert.skills.map((s) => (
                    <span key={s} className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

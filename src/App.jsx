import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsImpact from './components/MetricsImpact';
import SkillsMatrix from './components/SkillsMatrix';
import ProductsShowcase from './components/ProductsShowcase';
import ProjectsShowcase from './components/ProjectsShowcase';
import GovernanceFramework from './components/GovernanceFramework';
import InteractiveBACalculator from './components/InteractiveBACalculator';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('cyber-aurora');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Anime.js Background Canvas */}
      <BackgroundCanvas />

      {/* Header Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        currentTheme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <MetricsImpact />
        <SkillsMatrix />
        <ProductsShowcase />
        <ProjectsShowcase />
        <GovernanceFramework />
        <InteractiveBACalculator />
        <ExperienceTimeline />
        <EducationCertifications />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050810] py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold">
              GM
            </div>
            <div>
              <p className="text-white font-bold">Gokulpriya Maruthachalam</p>
              <p className="text-[11px] text-slate-400 font-mono">Senior Business Analyst & Product Delivery Lead</p>
            </div>
          </div>

          <p className="flex items-center gap-1 font-mono">
            Designed with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for Enterprise Excellence & IoT Products
          </p>

          <p className="font-mono text-[11px]">
            © {new Date().getFullYear()} Gokulpriya M. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-2xl hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

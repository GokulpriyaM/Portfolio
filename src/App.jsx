import React, { useState, useEffect } from 'react';
import RibbonGlow from './components/RibbonGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import SkillsMatrix from './components/SkillsMatrix';
import ProductsShowcase from './components/ProductsShowcase';
import ProjectsShowcase from './components/ProjectsShowcase';
import GovernanceFramework from './components/GovernanceFramework';
import InteractiveBACalculator from './components/InteractiveBACalculator';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import { ArrowUp, Heart } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <div className="relative min-h-screen text-[#f0f6fc] selection:bg-[#8957e5] selection:text-white font-sans bg-[#0d1117]/30">
      {/* WebGL2 Ribbon Glow Background */}
      <RibbonGlow
        background="#090d14"
        color1="#7000ff"
        color2="#0070f3"
        speed={25}
        size={95}
        angle={-180}
        reach={250}
      />

      {/* GitHub Header Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Homepage Layout */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <BentoGrid />
        <ProductsShowcase />
        <ProjectsShowcase />
        <GovernanceFramework />
        <SkillsMatrix />
        <InteractiveBACalculator />
        <ExperienceTimeline />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* GitHub Footer */}
      <footer className="relative z-10 border-t border-[#30363d] bg-[#010409] py-10 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8b949e]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#8957e5] to-[#2f81f7] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              GM
            </div>
            <div>
              <p className="text-white font-bold">Gokulpriya Maruthachalam</p>
              <p className="text-[11px] text-[#8b949e]">Senior Business Analyst & Product Lead</p>
            </div>
          </div>

          <p className="flex items-center gap-1">
            Built with Modern High-Performance Design & <Heart className="w-3.5 h-3.5 text-[#f85149] fill-[#f85149]" />
          </p>

          <p className="text-[11px]">
            © {new Date().getFullYear()} Gokulpriya M. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Floating Scroll Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-md bg-[#21262d] border border-[#30363d] text-white shadow-2xl hover:border-[#58a6ff] hover:scale-105 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#58a6ff]" />
        </button>
      )}

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

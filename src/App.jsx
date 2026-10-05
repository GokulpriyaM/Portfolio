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
            <div className="w-7 h-7 rounded-full bg-white text-[#0d1117] flex items-center justify-center font-bold">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold">Gokulpriya Maruthachalam</p>
              <p className="text-[11px] text-[#8b949e]">Senior Business Analyst & Product Lead</p>
            </div>
          </div>

          <p className="flex items-center gap-1">
            Built with GitHub Homepage Aesthetic & <Heart className="w-3.5 h-3.5 text-[#f85149] fill-[#f85149]" />
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

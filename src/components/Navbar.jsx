import React, { useState, useEffect } from 'react';
import { FileText, Send, Menu, X, Search, ChevronDown, Sparkles, Command } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Product & IoT', href: '#products' },
    { name: 'Impact Matrix', href: '#impact' },
    { name: 'Repositories', href: '#projects' },
    { name: 'Governance', href: '#governance' },
    { name: 'Skills & Tech', href: '#skills' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#010409]/90 backdrop-blur-xl border-b border-[#30363d] py-3 shadow-xl' : 'bg-transparent py-4 border-b border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left GitHub Brand Logo */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            {/* GitHub Octocat SVG */}
            <div className="w-9 h-9 rounded-full bg-white text-[#0d1117] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-base leading-tight block tracking-tight">Gokulpriya M.</span>
              <span className="text-[11px] font-mono text-[#8b949e] block font-medium">Senior BA & Product Lead</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-[#c9d1d9] hover:text-white px-3 py-1.5 rounded-md transition-colors hover:bg-[#21262d]"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* GitHub Search Bar & CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* GitHub Search Bar Simulation */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-[#8b949e] absolute left-3 pointer-events-none" />
            <input
              type="text"
              readOnly
              placeholder="Search or type Ctrl + K"
              className="bg-[#161b22] border border-[#30363d] rounded-md pl-8 pr-12 py-1.5 text-xs text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none w-52 cursor-pointer hover:border-[#8b949e] transition-colors"
              onClick={onOpenResume}
            />
            <span className="absolute right-2 px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#21262d] text-[#8b949e] border border-[#30363d]">
              Ctrl K
            </span>
          </div>

          {/* View Resume Button (GitHub Sign In Style) */}
          <button
            onClick={onOpenResume}
            className="btn-gh-secondary text-xs py-1.5 px-3.5"
          >
            <FileText className="w-4 h-4 text-[#58a6ff]" />
            <span>View Resume</span>
          </button>

          {/* Hire Button (GitHub Green Sign Up Style) */}
          <a href="#contact" className="btn-gh-primary text-xs py-1.5 px-4">
            <Send className="w-3.5 h-3.5" />
            <span>Hire Gokulpriya</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#21262d] text-[#c9d1d9]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className="text-xs font-medium text-[#c9d1d9] hover:text-white p-2.5 rounded-md bg-[#161b22] hover:bg-[#21262d]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#30363d] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-gh-secondary w-full justify-center text-xs py-2.5"
            >
              <FileText className="w-4 h-4 text-[#58a6ff]" />
              View Printable Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gh-primary w-full justify-center text-xs py-2.5"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}

    </header>
  );
}

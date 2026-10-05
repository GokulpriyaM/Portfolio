import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Send, Menu, X, Sun, Moon, Palette } from 'lucide-react';

export default function Navbar({ onOpenResume, currentTheme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Skills', href: '#skills' },
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'Governance', href: '#governance' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const cycleTheme = () => {
    const themes = ['cyber-aurora', 'neon-cyber', 'midnight-gold'];
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080c14]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-white font-bold text-xl tracking-tight text-decoration-none group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <span className="font-mono text-lg font-black">GM</span>
          </div>
          <div>
            <span className="block text-base leading-tight font-extrabold tracking-wide">Gokulpriya M.</span>
            <span className="block text-xs text-indigo-400 font-mono font-medium">Sr. Business Analyst</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={cycleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
            title="Switch Visual Theme"
          >
            <Palette className="w-4 h-4 text-purple-400" />
            <span className="font-mono capitalize hidden xl:inline">{currentTheme.replace('-', ' ')}</span>
          </button>

          {/* Resume Modal Button */}
          <button
            onClick={onOpenResume}
            className="btn-secondary text-xs py-2 px-3.5"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>View Resume</span>
          </button>

          {/* Contact CTA */}
          <a href="#contact" className="btn-primary text-xs py-2 px-4">
            <Send className="w-3.5 h-3.5" />
            <span>Hire Gokulpriya</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={cycleTheme}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
          >
            <Palette className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080c14]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-indigo-400 p-2.5 rounded-lg bg-white/5 hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-secondary w-full justify-center text-sm py-2.5"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              View Full Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full justify-center text-sm py-2.5"
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

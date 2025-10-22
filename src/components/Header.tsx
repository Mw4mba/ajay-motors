'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 animate-slide-down ${
      scrolled ? 'top-2' : 'top-4'
    }`}>
      <nav className={`container mx-auto rounded-2xl shadow-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-red-600 py-3' 
          : 'bg-red-600/95 backdrop-blur-md py-4'
      }`}>
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg">
              <span className="text-red-600 font-bold text-xl">AM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Ajay Motors</h1>
              <p className="text-xs text-red-100 italic hidden sm:block">Connecting You With Cars You Love</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#home" className="text-white hover:text-red-100 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              Home
            </a>
            <a href="#inventory" className="text-white hover:text-red-100 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              Inventory
            </a>
            <a href="#finance" className="text-white hover:text-red-100 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              Finance
            </a>
            <a href="#sell" className="text-white hover:text-red-100 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              Sell
            </a>
            <a href="#faq" className="text-white hover:text-red-100 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              FAQ
            </a>
            <button className="bg-white text-red-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 px-6 pb-4 space-y-2 animate-fade-in border-t border-white/20 pt-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-red-100 font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Home
            </a>
            <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-red-100 font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Inventory
            </a>
            <a href="#finance" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-red-100 font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Finance
            </a>
            <a href="#sell" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-red-100 font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Sell
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-red-100 font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              FAQ
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors mt-4">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

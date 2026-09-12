import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ProfileInfo } from '../types';

interface NavbarProps {
  profile: ProfileInfo;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Over mij', href: '#over-mij' },
    { name: 'Projecten', href: '#projecten' },
    { name: 'Vaardigheden', href: '#vaardigheden' },
    { name: 'Ervaring', href: '#ervaring' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-neutral-900/90 text-white backdrop-blur-md border-b border-neutral-800 shadow-xs py-3'
          : 'bg-neutral-900 text-white py-4 border-b border-neutral-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          id="nav-logo"
          className="group flex items-center gap-2.5 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center font-display font-bold text-white group-hover:bg-neutral-700 transition-colors">
            {profile.name.charAt(0) || 'P'}
          </div>
          <div>
            <span className="font-display font-bold text-base tracking-tight text-white block leading-tight">
              {profile.name}
            </span>
            <span className="text-xs text-neutral-400 font-medium block leading-none">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-md hover:bg-neutral-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-customizer-btn"
            type="button"
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
            title="Pas teksten en gegevens live aan"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span>Pas inhoud aan</span>
          </button>

          <a
            id="nav-contact-cta"
            href="#contact"
            className="flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-lg bg-white text-neutral-900 hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <span>Neem contact op</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenCustomizer}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800"
            aria-label="Inhoud aanpassen"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-hidden"
            aria-label="Navigatiemenu openen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden border-t border-neutral-800 bg-neutral-900 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-neutral-900 font-semibold text-sm"
            >
              <span>Neem contact op</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { ProfileInfo } from '../types';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-display font-bold text-base">
            {profile.name}
          </div>
          <p className="text-xs text-neutral-400">
            © {currentYear} {profile.name}. Alle rechten voorbehouden.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
          <a href="#over-mij" className="hover:text-white transition-colors">Over mij</a>
          <a href="#projecten" className="hover:text-white transition-colors">Projecten</a>
          <a href="#vaardigheden" className="hover:text-white transition-colors">Vaardigheden</a>
          <a href="#ervaring" className="hover:text-white transition-colors">Ervaring</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
            aria-label="Naar boven"
          >
            <span>Terug naar boven</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

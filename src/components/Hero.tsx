import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { ProfileInfo } from '../types';

interface HeroProps {
  profile: ProfileInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-800">
              <span className="relative flex h-2.5 w-2.5">
                {profile.availableForWork && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${profile.availableForWork ? 'bg-emerald-500' : 'bg-neutral-400'}`}></span>
              </span>
              <span>{profile.availabilityText}</span>
            </div>

            {/* Main title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.1]">
                {profile.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-neutral-700 font-display">
                {profile.role}
              </p>
            </div>

            {/* Tagline & bio */}
            <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
              {profile.tagline} {profile.shortBio}
            </p>

            {/* Meta details & socials */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-neutral-500 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 border-l border-neutral-300 pl-6">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 hover:text-neutral-950 transition-colors"
                    aria-label="GitHub profiel"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 hover:text-neutral-950 transition-colors"
                    aria-label="LinkedIn profiel"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-neutral-600 hover:text-neutral-950 transition-colors"
                    aria-label="Stuur een e-mail"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                id="hero-projects-cta"
                href="#projecten"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <span>Bekijk projecten</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-cta"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium border border-neutral-300 transition-colors"
              >
                <span>Contact opnemen</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Side Info Box / Profile card */}
          <div className="lg:col-span-4">
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Kernfocus</span>
                <span className="text-xs px-2 py-0.5 rounded-sm bg-neutral-800 text-neutral-300 font-mono">TypeScript & React</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white font-medium">Prestaties & Snelheid:</strong> Snelle laadtijden, schone bundels en optimale Core Web Vitals.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white font-medium">Toegankelijkheid:</strong> Volledig responsive interfaces met semantische HTML en WCAG compliance.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white font-medium">Onderhoudbaarheid:</strong> Duidelijke typen, herbruikbare componenten en testbare architectuur.
                  </p>
                </div>
              </div>

              {/* Direct email quick action */}
              <div className="pt-2">
                <div className="text-xs text-neutral-400 mb-1.5">Direct bereikbaar via:</div>
                <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700 font-mono text-xs text-neutral-200 truncate select-all">
                  {profile.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {profile.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

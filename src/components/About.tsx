import React from 'react';
import { Layers, Palette, Cpu, Check } from 'lucide-react';
import { ProfileInfo } from '../types';

interface AboutProps {
  profile: ProfileInfo;
  services: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
}

export const About: React.FC<AboutProps> = ({ profile, services }) => {
  const serviceIcons = [
    <Layers key="layers" className="w-6 h-6 text-neutral-900" />,
    <Palette key="palette" className="w-6 h-6 text-neutral-900" />,
    <Cpu key="cpu" className="w-6 h-6 text-neutral-900" />,
  ];

  return (
    <section id="over-mij" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            Over mij & werkwijze
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight">
            Ontwerpen en programmeren met oog voor detail en lange termijn kwaliteit.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            {profile.fullBio}
          </p>
        </div>

        {/* Pillars / Services Grid */}
        <div className="space-y-6">
          <div className="border-b border-neutral-200 pb-3">
            <h3 className="text-lg font-semibold font-display text-neutral-800">
              Wat ik doe & hoe ik waarde toevoeg
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 sm:p-7 border border-neutral-200 hover:border-neutral-300 shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>
                  <h4 className="text-xl font-bold font-display text-neutral-900">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-3">
                    Belangrijkste opleveringen
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology / Quote */}
        <div className="bg-white rounded-xl p-8 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg font-bold font-display text-neutral-900">
              Samenwerken of advies nodig over je technologie-keuze?
            </h4>
            <p className="text-sm text-neutral-600">
              Ik help graag bij het selecteren van de juiste tech stack, het auditen van bestaande webapps of het bouwen van een complete MVP vanaf scratch.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-colors"
          >
            Plan een vrijblijvend gesprek
          </a>
        </div>
      </div>
    </section>
  );
};

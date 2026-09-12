import React from 'react';
import { Briefcase, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { SkillCategory, ExperienceItem } from '../types';

interface SkillsExperienceProps {
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
}

export const SkillsExperience: React.FC<SkillsExperienceProps> = ({
  skillCategories,
  experience,
}) => {
  return (
    <section id="vaardigheden" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: Skills Section */}
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              Technologische expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight">
              Vaardigheden & Tech Stack
            </h2>
            <p className="text-neutral-600 text-base">
              Een overzicht van de programmeertalen, frameworks, tooling en methodologieën waarmee ik dagelijks werk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl p-6 sm:p-7 border border-neutral-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="border-b border-neutral-100 pb-4 mb-4">
                    <h3 className="text-lg font-bold font-display text-neutral-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      {cat.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              skill.highlight ? 'text-neutral-950' : 'text-neutral-400'
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              skill.highlight
                                ? 'font-semibold text-neutral-900'
                                : 'font-medium text-neutral-700'
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-sm bg-neutral-100 text-neutral-600 font-mono">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-neutral-500">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Actief bijgehouden met recente best practices</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Experience / Timeline Section */}
        <div id="ervaring" className="pt-8 border-t border-neutral-200 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              Loopbaan & Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight">
              Werkervaring & Prestaties
            </h2>
            <p className="text-neutral-600 text-base">
              Mijn professionele reis van softwareontwikkelaar tot lead en architect.
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-200 ml-3 sm:ml-4 space-y-10 pl-6 sm:pl-8">
            {experience.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 group-hover:bg-neutral-900 transition-colors" />

                <div className="bg-white rounded-xl p-6 sm:p-7 border border-neutral-200 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold font-display text-neutral-900">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.company}</span>
                        <span>•</span>
                        <span className="text-neutral-500">{item.location}</span>
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 self-start sm:self-auto font-mono">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                      Kernresultaten
                    </span>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                          <Award className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

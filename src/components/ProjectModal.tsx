import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-200 text-neutral-800 uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                Uitgelicht project
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
            aria-label="Sluit modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
              {project.title}
            </h3>
            <p className="text-base text-neutral-600 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image Preview */}
          <div className="rounded-xl overflow-hidden border border-neutral-200 aspect-video bg-neutral-100 relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <p className="text-neutral-700 leading-relaxed text-base">
            {project.description}
          </p>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm">
                <Target className="w-4 h-4 text-rose-500" />
                <span>De Uitdaging</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>De Oplossing</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-700 font-display">
              Belangrijkste Functionaliteiten
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide block">
                  Meetbaar resultaat
                </span>
                <span className="text-sm font-bold text-emerald-900">
                  {project.metrics}
                </span>
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
              Gebruikte technologieën
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar with Links */}
        <div className="flex items-center justify-between p-4 sm:px-8 border-t border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-900 text-xs sm:text-sm font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Broncode</span>
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};

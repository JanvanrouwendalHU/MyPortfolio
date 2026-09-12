import React, { useState, useMemo } from 'react';
import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Alle Projecten' },
    { id: 'web', label: 'Webapplicaties' },
    { id: 'design', label: 'Design Systems' },
    { id: 'mobile', label: 'Mobile & PWA' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section id="projecten" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              Geselecteerd werk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight">
              Recente projecten & case studies
            </h2>
            <p className="text-neutral-600 text-base">
              Een selectie van afgeronde projecten waarin designkwaliteit, schone architectuur en meetbare resultaten samenkomen.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-neutral-100 border border-neutral-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col overflow-hidden shadow-xs hover:shadow-md"
            >
              {/* Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-xs text-white text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-medium shadow-xs">
                      Uitgelicht
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 bg-neutral-900/0 hover:bg-neutral-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer text-white font-medium text-sm gap-2"
                  aria-label={`Bekijk case study voor ${project.title}`}
                >
                  <span className="px-4 py-2 rounded-lg bg-neutral-900/90 backdrop-blur-xs shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>Bekijk details</span>
                  </span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold font-display text-neutral-950 group-hover:text-neutral-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-700 text-xs font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-400 text-xs font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>Lees case study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors"
                        title="Open live website"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

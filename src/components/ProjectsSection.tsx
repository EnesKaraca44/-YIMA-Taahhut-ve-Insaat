import React, { useState } from 'react';
import { MapPin, ArrowUpRight, FolderKanban } from 'lucide-react';
import { projectsData, projectCategories } from '../data/siteContent';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onNavigateContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigateContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === "Tümü"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full py-2 text-slate-900">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B48C36] text-xs font-bold tracking-wider uppercase mb-2">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Proje & Portföy Mimarisi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Örnek Proje Yapısı ve Portföy.
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group transition-all duration-200 flex flex-col cursor-pointer"
          >
            <div className="h-48 relative overflow-hidden bg-slate-100 rounded-3xl">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                style={{
                  backgroundImage: `url('${project.imagePlaceholderUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'}')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C89D4B] text-white uppercase tracking-wide shadow-sm">
                  {project.statusPlaceholder}
                </span>
              </div>
            </div>

            <div className="py-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#B48C36] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                  <MapPin className="w-3 h-3 text-[#C89D4B]" />
                  <span>{project.locationPlaceholder}</span>
                </div>
                <div className="inline-flex items-center gap-0.5 font-bold text-[#B48C36]">
                  <span>İncele</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={onNavigateContact}
      />
    </div>
  );
};

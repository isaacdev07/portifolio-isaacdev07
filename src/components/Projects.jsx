import React from 'react';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/info';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Título da Seção (Adicionei animação fade-right) */}
        <div className="flex items-center gap-3 mb-12" data-aos="fade-right">
          <FolderGit2 className="text-blue-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Projetos em Destaque</h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // AQUI ESTÃO AS ANIMAÇÕES:
              data-aos="zoom-in" 
              data-aos-delay={index * 100} // Efeito cascata (um por um)
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.link} target="_blank" className="hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  {/* Se tiver link de demo, pode adicionar aqui */}
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags de Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
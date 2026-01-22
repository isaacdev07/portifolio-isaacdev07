import React from 'react';
// Adicionei o ícone 'Globe' caso queira usar para demo no futuro
import { FolderGit2, Github, Globe } from 'lucide-react';
import { projects } from '../data/info';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Título da Seção */}
        <div className="flex items-center gap-3 mb-12" data-aos="fade-right">
          <FolderGit2 className="text-blue-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Projetos em Destaque</h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Área dos Botões de Repositório (Back e Front) */}
              <div className="flex flex-wrap gap-3 mb-6">
                
                {/* Verifica se tem link do Backend */}
                {project.links?.back && (
                    <a 
                      href={project.links.back} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-white transition-colors border border-slate-600 hover:border-blue-500/30"
                    >
                      <Github size={16} />
                      Back-end Repo
                    </a>
                )}
                
                {/* Verifica se tem link do Frontend */}
                {project.links?.front && (
                    <a 
                      href={project.links.front} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-white transition-colors border border-slate-600 hover:border-blue-500/30"
                    >
                      <Github size={16} />
                      Front-end Repo
                    </a>
                )}

                {/* Fallback para projetos antigos que usam apenas 'link' */}
                {project.link && !project.links && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-white transition-colors border border-slate-600"
                    >
                      <Github size={16} />
                      Repositório
                    </a>
                )}
              </div>

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
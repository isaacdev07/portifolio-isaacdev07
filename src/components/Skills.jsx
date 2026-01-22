import React, { useState } from 'react';
// Adicionei 'Languages' nos imports
import { Terminal, Database, Layout, Cpu, Coffee, Globe, X, Server, Languages } from 'lucide-react';
import { skills } from '../data/info';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getIcon = (skill) => {
    // Se o nome tiver Java, prioriza o café
    if (skill.name.includes("Java")) return <Coffee size={24} />;
    
    switch (skill.type) {
        case 'Back-end': return <Terminal size={24} />;
        case 'Database': return <Database size={24} />;
        case 'Front-end': return <Layout size={24} />;
        case 'Infra': return <Server size={24} />;
        case 'Fullstack': return <Globe size={24} />;
        case 'Idioma': return <Languages size={24} />; // <--- Ícone novo aqui
        default: return <Cpu size={24} />;
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-800/50 border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-slate-400">
            Clique nos cards para ver detalhes da minha experiência
          </p>
        </div>

        {/* Grid ajustado para lg:grid-cols-6 para caber o item novo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <button 
              key={index}
              onClick={() => setSelectedSkill(skill)}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center gap-3 hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-pointer text-center h-full justify-center"
            >
              <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300 bg-blue-500/10 p-3 rounded-lg">
                {getIcon(skill)}
              </div>
              <span className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors text-sm">
                {skill.name}
              </span>
              {/* Badgezinha opcional para identificar o tipo visualmente */}
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                {skill.type}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* --- MODAL --- */}
      {selectedSkill && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all"
            onClick={() => setSelectedSkill(null)}
        >
            <div 
                className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl shadow-blue-500/10 animate-[fadeIn_0.3s_ease-out]"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedSkill(null)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                        {getIcon(selectedSkill)}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                        <p className="text-blue-400 text-sm">{selectedSkill.type}</p>
                    </div>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 mb-4">
                    <p className="text-slate-300 leading-relaxed text-left">
                        {selectedSkill.description}
                    </p>
                </div>

                <div className="text-xs text-slate-500 text-center mt-6">
                    Clique fora para fechar
                </div>
            </div>
        </div>
      )}

    </section>
  );
}
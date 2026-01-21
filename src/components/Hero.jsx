import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, Server } from 'lucide-react';
import { personalInfo } from '../data/info';
import profileImg from '../assets/profile.jpg'; // Certifique-se que a foto está lá!

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Texto */}
        <div data-aos="fade-right"> {/* Animação vindo da direita */}
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para Estágio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Olá, eu sou <br/> 
            <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Isaac Santos
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
            {personalInfo.role}
          </h2>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
            {personalInfo.about}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            
            <a 
              href={personalInfo.social.linkedin} 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="relative flex justify-center md:justify-end" data-aos="fade-left">
            {/* Efeito de brilho atrás da foto */}
            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
            
            <img 
              src={profileImg} 
              alt="Foto de Isaac" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-slate-700 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 z-10"
            />

            {/* Ícones flutuantes decorativos */}
            <div className="absolute -top-4 -right-4 bg-slate-800 p-3 rounded-lg border border-slate-700 animate-bounce delay-100 z-20">
                <Database className="text-blue-400" size={24} />
            </div>
            <div className="absolute bottom-10 -left-8 bg-slate-800 p-3 rounded-lg border border-slate-700 animate-bounce delay-700 z-20">
                <Server className="text-green-400" size={24} />
            </div>
        </div>

      </div>
    </section>
  );
}
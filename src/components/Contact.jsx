import React from 'react';
import { Mail, Linkedin, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/info';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título */}
        <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vamos conversar?
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              Estou ativamente procurando oportunidades de estágio em Back-end. 
              Se você tem uma vaga ou quer trocar uma ideia sobre tecnologia, minha caixa de entrada está aberta!
            </p>
        </div>

        {/* Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* Card Email */}
          <div 
            data-aos="fade-right"
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail size={100} />
            </div>
            
            <div className="flex flex-col items-center relative z-10">
                <div className="bg-blue-500/10 p-4 rounded-full text-blue-400 mb-4">
                    <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-slate-400 text-sm mb-6">{personalInfo.social.email}</p>
                
                <div className="flex gap-2 w-full">
                    <a 
                        href={`mailto:${personalInfo.social.email}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                        Enviar Email
                    </a>
                    <button 
                        onClick={handleCopyEmail}
                        className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors border border-slate-600"
                        title="Copiar email"
                    >
                        {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                    </button>
                </div>
            </div>
          </div>

          {/* Card LinkedIn */}
          <div 
            data-aos="fade-left"
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Linkedin size={100} />
            </div>

            <div className="flex flex-col items-center relative z-10">
                <div className="bg-blue-500/10 p-4 rounded-full text-blue-400 mb-4">
                    <Linkedin size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-slate-400 text-sm mb-6">Conecte-se comigo profissionalmente</p>
                
                <a 
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                    Acessar Perfil
                </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
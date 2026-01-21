import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <h1 className="text-xl font-bold text-blue-500 font-mono">
          &lt;Isaac /&gt;
        </h1>

        {/* Links de navegação */}
        <nav>
          <ul className="flex gap-6 text-sm font-medium text-slate-300">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projetos</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
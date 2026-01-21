import React from 'react';

export default function Footer() {
  return (
    // Removi o id="contact" daqui
    <footer className="py-8 bg-slate-950 text-center border-t border-slate-900">
      <p className="text-slate-500 text-sm">
        Desenvolvido por <span className="text-blue-500">Isaac Santos</span> © {new Date().getFullYear()}
      </p>
      <p className="text-slate-600 text-xs mt-2">
        React + Tailwind + Vite
      </p>
    </footer>
  );
}
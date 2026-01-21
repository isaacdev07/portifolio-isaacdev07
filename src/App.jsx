import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <--- Importe aqui
import Footer from './components/Footer';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact /> {/* <--- Adicione aqui */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
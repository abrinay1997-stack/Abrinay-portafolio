
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Catalog from './components/Catalog';
import PressArchive from './components/PressArchive';
import Credits from './components/Credits';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import WatermarkLab from './components/WatermarkLab';
import LatestNews from './components/LatestNews';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#888] selection:bg-[#cc4e00] selection:text-black">
      <Navbar isScrolled={scrolled} />
      
      <main>
        {/* Secciones con ID único para anclaje */}
        <section id="hero">
          <Hero />
        </section>
        
        <section id="bio" className="bg-[#020202] border-b border-white/5">
          <Biography />
        </section>

        <section id="work" className="py-32 bg-black">
          <Catalog />
        </section>

        <section id="spotify-showcase">
          <SocialProof />
        </section>

        <section id="lab" className="py-32 bg-[#050505] border-y border-white/5">
           <WatermarkLab />
        </section>

        <section id="press" className="py-32 bg-[#020202]">
          <LatestNews />
          <PressArchive />
        </section>

        <section id="credits" className="py-32 bg-[#050505] border-t border-white/5">
          <Credits />
        </section>
      </main>

      {/* El Footer tiene el ID #contact interno */}
      <Footer />
    </div>
  );
};

export default App;

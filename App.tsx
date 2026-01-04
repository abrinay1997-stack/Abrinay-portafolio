
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

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'biography'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'biography') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#888] selection:bg-[#cc4e00] selection:text-black">
      <Navbar isScrolled={scrolled} onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="transition-all duration-1000">
        {currentPage === 'home' ? (
          <>
            <section id="hero">
              <Hero />
            </section>
            
            <section id="work" className="py-32 bg-black">
              <Catalog />
            </section>

            <section id="spotify-showcase">
              <SocialProof />
            </section>

            <section id="security" className="bg-[#050505]">
              <WatermarkLab />
            </section>

            <section id="press" className="py-32 bg-[#020202]">
              <PressArchive />
            </section>

            <section id="credits" className="py-32 bg-[#050505] border-t border-white/5">
              <Credits />
            </section>
          </>
        ) : (
          <section id="biography-page" className="pt-24 min-h-screen bg-[#020202]">
            <Biography />
          </section>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;

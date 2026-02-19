
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.1]">
        <div className="absolute bottom-0 left-0 w-full h-64 flex items-end justify-around px-4 gap-[4px]">
          {[...Array(60)].map((_, i) => (
            <div 
              key={i} 
              className="w-full bg-[#cc4e00]/40" 
              style={{ 
                height: `${Math.random() * 80}%`,
                animation: reduceMotion ? 'none' : `sound-wave ${2 + Math.random()}s infinite ease-in-out`,
                animationDelay: reduceMotion ? '0s' : `${i * 0.05}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmosphere" 
          className="w-full h-full object-cover grayscale opacity-10 transition-transform duration-[30s] hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-12 opacity-50 flex items-center justify-center gap-4">
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
           <span className="text-[11px] tracking-[0.5em] text-white uppercase font-mono">Master</span>
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
        </div>
        
        <h1 className="font-cinematic text-5xl md:text-8xl font-bold mb-8 glitch-text tracking-[0.1em] text-white" data-text="ABRINAY VOID">
          ABRINAY VOID
        </h1>
        
        <p className="text-white/70 text-[12px] md:text-[13px] tracking-[0.2em] uppercase max-w-3xl mx-auto leading-relaxed font-bold">
          Música original y diseño sonoro para cine, marcas y artistas.
          <span className="block mt-2 text-white/50 tracking-[0.3em]">Diseño Sonoro | Composición | Grabación | Mezcla | Mastering</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#cc4e00] text-black text-[12px] tracking-[0.2em] uppercase font-black hover:bg-white transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Solicitar propuesta
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-white/20 text-white text-[12px] tracking-[0.2em] uppercase font-black hover:border-[#cc4e00] hover:text-[#cc4e00] transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc4e00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Ver catálogo
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-40">
        <div className="audio-bars h-4">
          <div className="bar w-[1px] bg-[#cc4e00]" style={{ animationDuration: reduceMotion ? '0s' : '0.5s' }}></div>
          <div className="bar w-[1px] bg-[#cc4e00]" style={{ animationDuration: reduceMotion ? '0s' : '0.9s' }}></div>
          <div className="bar w-[1px] bg-[#cc4e00]" style={{ animationDuration: reduceMotion ? '0s' : '0.6s' }}></div>
        </div>
        <div className="text-[11px] text-white/80 font-mono tracking-[0.25em] uppercase">Estudio Independiente / Bogotá - PTY</div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';

const Hero: React.FC = () => {
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
                animation: `sound-wave ${2 + Math.random()}s infinite ease-in-out`,
                animationDelay: `${i * 0.05}s`
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
          className="w-full h-full object-cover grayscale opacity-10 transition-transform duration-[30s] hover:scale-110"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-12 opacity-50 flex items-center justify-center gap-4">
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
           <span className="text-[8px] tracking-[1.2em] text-white uppercase font-mono">Master</span>
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
        </div>
        
        <h1 className="font-cinematic text-5xl md:text-8xl font-bold mb-8 glitch-text tracking-[0.1em] text-white" data-text="ABRINAY VOID">
          ABRINAY VOID
        </h1>
        
        <p className="text-white/40 text-[10px] md:text-[12px] tracking-[0.8em] uppercase mb-20 max-w-2xl mx-auto leading-relaxed font-bold">
          Diseño Sonoro | Composición | Grabacion | Mezcla | Mastering
        </p>
        
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <a 
            href="#work" 
            className="group relative border border-white/5 text-white/80 px-16 py-5 text-[10px] font-bold tracking-[0.6em] uppercase transition-all duration-700 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-black">Catálogo Selecto</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a 
            href="https://www.youtube.com/@Abrinay_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#cc4e00] text-[10px] font-bold tracking-[0.6em] uppercase transition-all duration-500 underline-offset-8 hover:underline"
          >
            Reel 2026
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-40">
        <div className="audio-bars h-4">
          <div className="bar w-[1px] bg-[#cc4e00]" style={{animationDuration: '0.5s'}}></div>
          <div className="bar w-[1px] bg-[#cc4e00]" style={{animationDuration: '0.9s'}}></div>
          <div className="bar w-[1px] bg-[#cc4e00]" style={{animationDuration: '0.6s'}}></div>
        </div>
        <div className="text-[8px] text-white font-mono tracking-[0.6em] uppercase">Estudio Independiente / Bogotá - PTY</div>
      </div>
    </div>
  );
};

export default Hero;

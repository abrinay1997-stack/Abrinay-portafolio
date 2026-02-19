
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
           <span className="text-[11px] tracking-[0.5em] text-white uppercase font-mono">Master</span>
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
        </div>
        
        <h1 className="font-cinematic text-5xl md:text-8xl font-bold mb-8 glitch-text tracking-[0.1em] text-white" data-text="ABRINAY VOID">
          ABRINAY VOID
        </h1>
        
        <p className="text-white/50 text-[12px] md:text-[13px] tracking-[0.35em] uppercase max-w-2xl mx-auto leading-relaxed font-bold">
          Diseño Sonoro | Composición | Grabacion | Mezcla | Mastering
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-40">
        <div className="audio-bars h-4">
          <div className="bar w-[1px] bg-[#cc4e00]" style={{animationDuration: '0.5s'}}></div>
          <div className="bar w-[1px] bg-[#cc4e00]" style={{animationDuration: '0.9s'}}></div>
          <div className="bar w-[1px] bg-[#cc4e00]" style={{animationDuration: '0.6s'}}></div>
        </div>
        <div className="text-[11px] text-white/80 font-mono tracking-[0.25em] uppercase">Estudio Independiente / Bogotá - PTY</div>
      </div>
    </div>
  );
};

export default Hero;

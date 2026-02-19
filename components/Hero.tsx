
import React from 'react';
import { HERO_CONTENT } from '../content/siteContent';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-[0.15]">
        <div className="absolute bottom-0 left-0 w-full h-64 flex items-end justify-around px-4 gap-[2px] md:gap-[4px]">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="w-full bg-[#cc4e00]/60 will-change-transform origin-bottom"
              style={{ 
                height: `${20 + Math.random() * 60}%`,
                animation: `sound-wave-hero ${1.5 + Math.random() * 2}s infinite ease-in-out`,
                animationDelay: `${i * 0.08}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmosphere" 
          className="w-full h-full object-cover grayscale opacity-20 transition-transform duration-[30s]"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-12 opacity-50 flex items-center justify-center gap-4">
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
           <span className="text-[11px] tracking-[0.5em] text-white uppercase font-mono">Master</span>
           <div className="w-8 h-[1px] bg-[#cc4e00]"></div>
        </div>
        
        <h1 data-text={HERO_CONTENT.title} className="text-display font-cinematic brand-reveal mb-8">
          {HERO_CONTENT.title.split('').map((char, i) => (
            <span
              key={i}
              className="char-span"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p className="text-white/40 font-mono text-[10px] md:text-[12px] tracking-[0.4em] uppercase max-w-2xl mx-auto leading-relaxed mb-12">
          {HERO_CONTENT.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <a
            href={HERO_CONTENT.ctaPrimary.href}
            className="px-10 py-4 bg-[#cc4e00] text-black text-[12px] tracking-[0.2em] uppercase font-black hover:bg-white transition-all duration-500 w-full md:w-auto"
          >
            {HERO_CONTENT.ctaPrimary.text}
          </a>
          <a
            href={HERO_CONTENT.ctaSecondary.href}
            className="px-10 py-4 border border-white/20 text-white text-[12px] tracking-[0.2em] uppercase font-black hover:border-[#cc4e00] hover:text-[#cc4e00] transition-all duration-500 w-full md:w-auto backdrop-blur-sm"
          >
            {HERO_CONTENT.ctaSecondary.text}
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
        <div className="text-[10px] text-white/30 font-mono tracking-[0.3em] uppercase">{HERO_CONTENT.location}</div>
      </div>
    </div>
  );
};

export default Hero;

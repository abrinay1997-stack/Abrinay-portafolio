
import React from 'react';
import { CREDITS } from '../content/siteContent';

const Credits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="font-cinematic text-2xl md:text-3xl font-bold mb-20 text-center uppercase tracking-[0.25em] text-white/90">Créditos de Producción</h2>
      
      <div className="space-y-0 border-t border-white/5">
        {CREDITS.map((credit, idx) => (
          <div 
            key={idx}
            className="group grid grid-cols-1 md:grid-cols-[100px_200px_1fr] items-center py-10 border-b border-white/5 hover:bg-[#050505] px-6 transition-all duration-700"
          >
            <span className="text-[12px] font-bold text-[#cc4e00]/70 tracking-[0.15em] font-mono group-hover:text-[#cc4e00] transition-colors">{credit.year}</span>
            <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-white/50 group-hover:text-white/40 transition-colors">
              {credit.role}
            </span>
            <span className="text-base md:text-lg font-light text-white/75 group-hover:text-white group-hover:translate-x-6 transition-all duration-700 uppercase tracking-[0.2em]">
              {credit.project}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;

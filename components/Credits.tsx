
import React from 'react';
import { CREDITS } from '../content/siteContent';

const Credits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-h2 font-bold mb-20 text-center uppercase tracking-[0.4em] text-white/90">Créditos de Producción</h2>
      
      <div className="space-y-0 border-t border-white/5">
        {CREDITS.map((credit, idx) => (
          <div 
            key={idx}
            className="group grid grid-cols-1 md:grid-cols-[100px_200px_1fr] items-center py-10 border-b border-white/5 hover:bg-white/[0.02] px-6 transition-all duration-700"
          >
            <span className="text-[10px] text-[#cc4e00] tracking-[0.2em] font-mono group-hover:tracking-[0.4em] transition-all">[{credit.year}]</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors font-mono">
              {credit.role}
            </span>
            <span className="text-sm md:text-base font-light text-white/50 group-hover:text-white group-hover:translate-x-4 transition-all duration-700 uppercase tracking-[0.2em]">
              {credit.project}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;

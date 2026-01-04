
import React from 'react';
import { Credit } from '../types';

const CREDITS: Credit[] = [
  { year: 2025, role: 'Score Original', project: '"Peter: ni soldado, ni civil, ni traidor" (Largometraje)' },
  { year: 2024, role: 'Score / Diseño Sonoro', project: '"Cuando Florezcan los Guayacanes" (Cine)' },
  { year: 2024, role: 'Sync & Distribution', project: 'Sony Music / The Orchard (Global Catalog)' },
  { year: 2024, role: 'Catalog Management', project: 'Symphonic Distribution (Master Records)' },
  { year: 2024, role: 'Paisajes Sonoros', project: '"Dos Estaciones" (Documental)' },
  { year: 2022, role: 'Ganador / Productor', project: 'Manda tu Pista (Reality Telemetro)' },
];

const Credits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="font-cinematic text-2xl md:text-3xl font-bold mb-20 text-center uppercase tracking-[0.6em] text-white/90">Créditos de Producción</h2>
      
      <div className="space-y-0 border-t border-white/5">
        {CREDITS.map((credit, idx) => (
          <div 
            key={idx}
            className="group grid grid-cols-1 md:grid-cols-[100px_200px_1fr] items-center py-10 border-b border-white/5 hover:bg-[#050505] px-6 transition-all duration-700"
          >
            <span className="text-[10px] font-bold text-[#cc4e00]/40 tracking-[0.3em] font-mono group-hover:text-[#cc4e00] transition-colors">{credit.year}</span>
            <span className="text-[9px] uppercase font-bold tracking-[0.5em] text-white/10 group-hover:text-white/40 transition-colors">
              {credit.role}
            </span>
            <span className="text-sm md:text-base font-light text-white/30 group-hover:text-white group-hover:translate-x-6 transition-all duration-700 uppercase tracking-[0.2em]">
              {credit.project}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;

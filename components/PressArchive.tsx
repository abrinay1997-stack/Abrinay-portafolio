
import React from 'react';
import { PRESS_ITEMS } from '../content/siteContent';

const PressArchive: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-l border-white/10 pl-8">
        <div>
          <h2 className="text-h2 font-bold text-white uppercase tracking-[0.3em]">Prensa</h2>
          <p className="text-[10px] text-white/30 tracking-[0.5em] uppercase mt-4 font-mono">Media // Coverage_Archive</p>
        </div>
        <div className="text-[10px] text-white/20 tracking-[0.3em] uppercase font-mono">
          REF_INDEX: PRESS_2026
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
        {PRESS_ITEMS.map((item, idx) => (
          <a 
            key={idx} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col glass-card p-6 rounded-sm overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6 border border-white/5 transition-all duration-500 group-hover:border-white/20">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-colors duration-500"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-black/90 px-3 py-1 text-[11px] text-white tracking-[0.15em] font-bold border border-white/10 uppercase">
                  {item.source}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-white/30 uppercase font-mono">
                <span>{item.date}</span>
                <span className="group-hover:text-white transition-colors">ACCESS_REPORT //</span>
              </div>
              <h3 className="text-sm font-bold text-white/60 group-hover:text-white uppercase tracking-[0.15em] leading-relaxed transition-colors line-clamp-3">
                {item.title}
              </h3>
            </div>
            
            <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-[#cc4e00] transition-all duration-700"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PressArchive;

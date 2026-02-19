
import React, { useState } from 'react';
import { Category } from '../types';
import { PROJECTS, SPOTIFY_LINKS } from '../content/siteContent';

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-l-4 border-[#cc4e00] pl-8 gap-6">
        <div>
          <h2 className="font-cinematic text-3xl md:text-5xl font-bold text-white uppercase tracking-[0.2em]">Obras & Catálogo</h2>
          <p className="text-xs text-[#cc4e00] tracking-[0.4em] uppercase mt-2 font-bold">Producción Discográfica y Cine</p>
        </div>
        <div className="flex gap-8 text-[12px] tracking-[0.12em] uppercase text-white/70 mb-2 font-bold">
          <button onClick={() => setFilter('all')} className={`${filter === 'all' ? 'text-[#cc4e00]' : ''} hover:text-white transition-colors`}>Todo</button>
          <button onClick={() => setFilter('film')} className={`${filter === 'film' ? 'text-[#cc4e00]' : ''} hover:text-white transition-colors`}>Cine & Documental</button>
          <button onClick={() => setFilter('prod')} className={`${filter === 'prod' ? 'text-[#cc4e00]' : ''} hover:text-white transition-colors`}>Producción / EP</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PROJECTS.filter(p => filter === 'all' || p.category === filter).map((project) => (
          <article 
            key={project.id}
            className="group relative flex flex-col bg-transparent"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl transition-all duration-700 group-hover:shadow-[#cc4e00]/20 group-hover:-translate-y-2">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/80 px-2 py-1 text-[11px] text-white/70 border border-white/5 font-mono">CODE: {project.id}</span>
                <span className="bg-black/80 px-2 py-1 text-[11px] text-[#cc4e00] border border-[#cc4e00]/10 font-mono">MASTER</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href={SPOTIFY_LINKS[project.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md hover:border-[#cc4e00] hover:scale-110 transition-all group/btn"
                >
                   <svg className="w-6 h-6 text-white group-hover/btn:text-[#cc4e00] fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </a>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <span className="text-[11px] text-[#cc4e00] font-bold tracking-[0.2em] mb-3 uppercase">
                  {project.genre}
                </span>
                <h3 className="text-base font-bold text-white tracking-[0.05em] uppercase leading-tight mb-4">
                  {project.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                  <p className="text-[13px] text-white/70 tracking-[0.08em] leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

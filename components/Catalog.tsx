
import React, { useState, useRef, MouseEvent } from 'react';
import { Category } from '../types';
import { PROJECTS, SPOTIFY_LINKS } from '../content/siteContent';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      key={project.id}
      className="group relative flex flex-col glass-card p-4 rounded-sm reveal overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 78, 0, 0.08), transparent 40%)`
        }}
      ></div>

      <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm transition-all duration-700 group-hover:-translate-y-2">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <span className="bg-black/90 px-2 py-1 text-[9px] text-white/40 border border-white/5 font-mono tracking-tighter uppercase">ID_{project.id}</span>
          <span className="bg-[#cc4e00]/10 px-2 py-1 text-[9px] text-[#cc4e00] border border-[#cc4e00]/20 font-mono tracking-tighter uppercase">Digital_Master</span>
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

        <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none z-10">
          <span className="text-[10px] text-[#cc4e00] font-mono tracking-[0.3em] mb-3 uppercase">
            // {project.genre}
          </span>
          <h3 className="text-lg font-bold text-white tracking-[0.1em] uppercase leading-tight mb-4">
            {project.title}
          </h3>
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 ease-in-out">
            <p className="text-[11px] text-white/40 tracking-[0.05em] leading-relaxed font-mono">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-l border-white/10 pl-8 gap-6">
        <div>
          <h2 className="text-h2 font-bold text-white uppercase tracking-[0.3em]">Obras & Catálogo</h2>
          <p className="text-[10px] text-white/30 tracking-[0.5em] uppercase mt-4 font-mono">Archive // Production_Index</p>
        </div>
        <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 font-mono">
          <button onClick={() => setFilter('all')} className={`${filter === 'all' ? 'text-white border-b border-[#cc4e00]' : ''} hover:text-white transition-colors pb-1`}>All_Units</button>
          <button onClick={() => setFilter('film')} className={`${filter === 'film' ? 'text-white border-b border-[#cc4e00]' : ''} hover:text-white transition-colors pb-1`}>Cinema</button>
          <button onClick={() => setFilter('prod')} className={`${filter === 'prod' ? 'text-white border-b border-[#cc4e00]' : ''} hover:text-white transition-colors pb-1`}>Audio_Prod</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PROJECTS.filter(p => filter === 'all' || p.category === filter).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

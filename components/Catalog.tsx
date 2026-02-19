
import React, { useState } from 'react';
import { Project, Category } from '../types';

const PROJECTS: Project[] = [
  // Film & Series
  {
    id: 'f1',
    title: 'Peter: Ni soldado, ni civil, ni traidor',
    genre: 'Original Score / Documentary',
    description: 'Banda sonora original para el largometraje documental sobre la invasión a Panamá.',
    category: 'film',
    imageUrl: 'https://cdn.myportfolio.com/2d2135c2-cc3b-4c97-8e3e-ba235dd00230/d9b7d24a-cf34-4286-b101-42eb1b574dcd_rw_1200.png?h=2b603ec46503ef64d59885837fd0934b'
  },
  {
    id: 'f2',
    title: 'Cuando Florezcan los Guayacanes',
    genre: 'Film Score / Drama',
    description: 'Composición integral y diseño sonoro para la pieza cinematográfica panameña.',
    category: 'film',
    imageUrl: 'https://elsiglo.com.pa/binrepository/600x384/0c0/0d0/none/275766432/IHJJ/6132bf4a1adc1_ES24184296_MG281493175.jpg'
  },
  {
    id: 'f3',
    title: 'Memorial',
    genre: 'Original Score / Atmosphere',
    description: 'Pieza conmemorativa de profunda carga emocional y diseño sonoro inmersivo.',
    category: 'film',
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d4/b5/33/d4b5335d-c79c-ac17-1e9d-f7c1dee67a96/199257827093_cover.jpg/600x600cc.webp'
  },
  // Selected Production Works (Singles)
  {
    id: 'p1',
    title: 'Manda Tu Pista',
    genre: 'Urban / Winner Single',
    description: 'Producción ganadora de la primera temporada del reality de Telemetro.',
    category: 'prod',
    imageUrl: 'https://media.telemetro.com/p/7609770dd3515f41f77001a8d63d9b02/adjuntos/311/imagenes/016/603/0016603507/captura-pantalla-931png.png'
  },
  {
    id: 'p2',
    title: 'Dos Estaciones',
    genre: 'Ambient / Experimental',
    description: 'Paisajes sonoros de la obra "Diálogos entre el clima y la humanidad".',
    category: 'film',
    imageUrl: 'https://elsiglo.com.pa/binrepository/700x466/0c36/700d393/none/275766432/CFFD/danza1_181-11206189_20250905134932.jpg'
  },
  {
    id: 'p3',
    title: 'The Orchard Selection',
    genre: 'Production / Distribution',
    description: 'Curaduría y distribución global bajo el sello de Sony Music / The Orchard.',
    category: 'prod',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273676c89697960377045939221'
  }
];

const SPOTIFY_LINKS: Record<string, string> = {
  'f1': 'https://open.spotify.com/intl-es/album/3ro7kOlve8NELlySdBVpIR',
  'f2': 'https://open.spotify.com/intl-es/album/45oY2EKuZvN0uujVbckYkw',
  'f3': 'https://music.apple.com/pa/album/memorial-single/1792578270',
  'p1': 'https://open.spotify.com/intl-es/track/1y9mnArBtexJx9WUuoVKKK',
  'p2': 'https://elsiglo.com.pa/farandula/dos-estaciones-dialogos-entre-el-clima-y-la-humanidad-MK15792259',
  'p3': 'https://open.spotify.com/intl-es/track/5tuxq8IrJspC0eCeB3aOTm'
};

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
                  <p className="text-[13px] text-white/70 tracking-[0.08em] uppercase leading-relaxed font-light">
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

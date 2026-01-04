
import React from 'react';

const PRESS_ITEMS = [
  {
    source: 'MEDIUM',
    title: 'PETER: NI SOLDADO, NI CIVIL, NI TRAIDOR: UN CORTO QUE REVIVE LA MEMORIA DEL 20 DE DICIEMBRE',
    date: 'MEMORIA HISTÓRICA',
    url: 'https://medium.com/@Culturizandote/peter-ni-soldado-ni-civil-ni-traidor-un-corto-que-revive-la-memoria-del-20-de-diciembre-95f91dd06108',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*SI6Yg7z7wYeX_xHvT5axSg.jpeg'
  },
  {
    source: 'METRO LIBRE',
    title: 'ASAMBLEA RINDE HOMENAJE A LAS VÍCTIMAS DEL 20 DE DICIEMBRE',
    date: 'NOTICIA / CINE',
    url: 'https://www.metrolibre.com/nacionales/asamblea-rinde-homenaje-a-las-victimas-del-20-de-diciembre-MM18502538',
    image: 'https://www.metrolibre.com/binrepository/855x570/0c0/855d550/none/83989904/QFYX/img-20251219-wa0012_101-12130895_20251219173811.jpg'
  },
  {
    source: 'TELEMETRO',
    title: 'GANADOR MANDA TU PISTA: PRIMERA TEMPORADA',
    date: 'RECONOCIMIENTO',
    url: 'https://www.telemetro.com/manda-tu-pista/programas/manda-tu-pista-abrinay-es-el-ganador-la-1era-temporda-n5336498',
    image: 'https://media.telemetro.com/p/7609770dd3515f41f77001a8d63d9b02/adjuntos/311/imagenes/016/603/0016603507/captura-pantalla-931png.png'
  },
  {
    source: 'TELEMETRO',
    title: 'PERFIL: 100% DEDICADO A LA MÚSICA',
    date: 'ENTREVISTA',
    url: 'https://www.telemetro.com/manda-tu-pista/programas/manda-tu-pista-abrinay-100-dedicado-la-musica-n5266487',
    image: 'https://media.telemetro.com/p/177113a49019670cdbc4ac328086c69f/adjuntos/311/imagenes/014/456/0014456882/210548699_917136485516520_1723299160106766237_n-1jpg.jpg'
  },
  {
    source: 'EL SIGLO',
    title: 'DOS ESTACIONES: DIÁLOGOS ENTRE EL CLIMA Y LA HUMANIDAD',
    date: 'REPORTAJE',
    url: 'https://elsiglo.com.pa/farandula/dos-estaciones-dialogos-entre-el-clima-y-la-humanidad-MK15792259',
    image: 'https://elsiglo.com.pa/binrepository/700x466/0c36/700d393/none/275766432/CFFD/danza1_181-11206189_20250905134932.jpg'
  }
];

const PressArchive: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="border-l-4 border-[#cc4e00] pl-8">
          <h2 className="font-cinematic text-3xl md:text-5xl font-bold text-white uppercase tracking-[0.2em]">Prensa</h2>
          <p className="text-xs text-[#cc4e00] tracking-[0.4em] uppercase mt-2 font-bold">Archivo de Medios & Cobertura</p>
        </div>
        <div className="text-[10px] text-white/20 tracking-[0.5em] uppercase font-mono">
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
            className="group relative flex flex-col bg-transparent overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6 border border-white/5 transition-all duration-500 group-hover:border-[#cc4e00]/30">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-colors duration-500"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-black/90 px-3 py-1 text-[8px] text-white tracking-[0.3em] font-bold border border-white/10 uppercase">
                  {item.source}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[8px] tracking-[0.4em] text-white/30 uppercase font-mono">
                <span>{item.date}</span>
                <span className="group-hover:text-[#cc4e00] transition-colors">VER ARTÍCULO</span>
              </div>
              <h3 className="text-xs font-bold text-white/70 group-hover:text-white uppercase tracking-widest leading-relaxed transition-colors line-clamp-3">
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

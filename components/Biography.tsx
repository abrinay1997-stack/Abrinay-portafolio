
import React from 'react';

const Biography: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <div className="flex items-start gap-8">
            <div className="inline-block border-l-4 border-[#cc4e00] pl-10">
              <h2 className="font-cinematic text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none">
                ABRINAY<br />
              </h2>
              <p className="text-xs text-[#cc4e00] tracking-[0.6em] uppercase mt-6 font-mono font-bold">Productor & Diseñador Sonoro</p>
            </div>
            <div className="text-[9px] text-white/10 font-mono pt-2 hidden md:block">
              LOG_INDEX: AB_2009
            </div>
          </div>

          <div className="space-y-10 text-white/50 text-[14px] leading-[2] tracking-wider uppercase font-mono">
            <p>
              Brian Joel Carvajal Mahecha (Abrinay) es el arquitecto sonoro detrás de una visión que fusiona el rap, la poesía y el diseño de audio para cine. Su carrera despegó en 2009 en Bogotá, evolucionando rápidamente hacia la independencia técnica.
            </p>
            <p>
              En 2014 fundó <span className="text-white italic font-bold">BukoFlow</span>, especializándose en el licenciamiento de música para proyectos comerciales y cine, alcanzando un impacto de más de 90,000 descargas globales.
            </p>
            <p>
              Desde 2022, su alianza con <span className="text-[#cc4e00] font-bold">The Orchard (Sony Music)</span> y Symphonic Distribution ha consolidado su posición como una pieza clave en la distribución y producción de audio de alta fidelidad.
            </p>
          </div>

          <div className="pt-12 border-t border-white/5 grid grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute -left-6 top-0 w-1 h-full bg-[#cc4e00]/0 group-hover:bg-[#cc4e00] transition-all"></div>
              <span className="block text-[10px] text-white/20 tracking-[0.4em] uppercase mb-3">Establecimiento</span>
              <span className="text-2xl text-white font-mono font-bold tracking-tighter">EST_2011</span>
            </div>
            <div className="relative group">
              <div className="absolute -left-6 top-0 w-1 h-full bg-[#cc4e00]/0 group-hover:bg-[#cc4e00] transition-all"></div>
              <span className="block text-[10px] text-white/20 tracking-[0.4em] uppercase mb-3">Audiencia Global</span>
              <span className="text-2xl text-white font-mono font-bold tracking-tighter">+90K_STRM</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -top-10 -right-10 text-[9px] text-white/10 font-mono uppercase vertical-text tracking-[1.2em] group-hover:text-[#cc4e00]/40 transition-colors">
            SYST_MONITOR_ACTIVE
          </div>
          <div className="glass p-12 md:p-16 relative z-10 space-y-16 border border-white/10 shadow-2xl">
            <h3 className="text-xs text-white/80 tracking-[0.5em] uppercase font-bold border-b border-white/10 pb-6 flex justify-between items-center">
              <span>HITOS CINEMATOGRÁFICOS</span>
              <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#cc4e00] animate-pulse"></div>
                 <span className="text-[8px] text-[#cc4e00]">SIGNAL</span>
              </div>
            </h3>
            
            <div className="space-y-12">
              <div className="flex gap-10 items-start group/item">
                <span className="text-[#cc4e00] text-sm font-bold font-mono pt-1">2014</span>
                <div>
                  <h4 className="text-white text-base tracking-[0.2em] uppercase mb-3 group-hover/item:text-[#cc4e00] transition-colors">BukoFlow Records</h4>
                  <p className="text-[11px] text-white/30 uppercase tracking-[0.15em] leading-[1.8]">Estructuración de licencias comerciales y sync licensing para medios digitales.</p>
                </div>
              </div>

              <div className="flex gap-10 items-start group/item">
                <span className="text-[#cc4e00] text-sm font-bold font-mono pt-1">2022</span>
                <div>
                  <h4 className="text-white text-base tracking-[0.2em] uppercase mb-3 group-hover/item:text-[#cc4e00] transition-colors">Sony Music / Orchard</h4>
                  <p className="text-[11px] text-white/30 uppercase tracking-[0.15em] leading-[1.8]">Expansión de catálogo maestro y sincronización global de obras originales.</p>
                </div>
              </div>

              <div className="flex gap-10 items-start group/item">
                <span className="text-[#cc4e00] text-sm font-bold font-mono pt-1">2024</span>
                <div>
                  <h4 className="text-white text-base tracking-[0.2em] uppercase mb-3 group-hover/item:text-[#cc4e00] transition-colors">Peter (Cine)</h4>
                  <p className="text-[11px] text-white/30 uppercase tracking-[0.15em] leading-[1.8]">Composición original para el largometraje documental sobre la soberanía.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

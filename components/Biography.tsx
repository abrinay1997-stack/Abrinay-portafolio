
import React from 'react';
import { BIOGRAPHY_CONTENT } from '../content/siteContent';

const Biography: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <div className="flex items-start gap-8">
            <div className="inline-block border-l border-white/20 pl-10">
              <h1 className="text-display font-bold text-white uppercase mb-4">
                {BIOGRAPHY_CONTENT.name}<br />
              </h1>
              <p className="text-[10px] text-[#cc4e00] tracking-[0.4em] uppercase mt-4 font-mono">{BIOGRAPHY_CONTENT.role}</p>
            </div>
            <div className="text-[10px] text-white/20 font-mono pt-2 hidden md:block tracking-widest">
              {BIOGRAPHY_CONTENT.authIndex}
            </div>
          </div>

          <div className="space-y-12 text-white/40 text-[14px] md:text-[16px] leading-[1.8] tracking-[0.05em] font-mono">
            {BIOGRAPHY_CONTENT.paragraphs.map((p, i) => (
              <p key={i} className={`animate-in slide-in-from-bottom duration-700 ${i === 2 ? 'border-l border-white/10 pl-8 italic text-white/60' : ''}`} style={{ animationDelay: `${(i+1)*100}ms` }}>
                {p}
              </p>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 grid grid-cols-2 gap-12">
            {BIOGRAPHY_CONTENT.stats.map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-[#cc4e00]/0 group-hover:bg-[#cc4e00] transition-all"></div>
                <span className="block text-[12px] text-white/50 tracking-[0.15em] uppercase mb-3">{stat.label}</span>
                <span className="text-2xl text-white font-mono font-bold tracking-tighter">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -top-10 -right-10 text-[12px] text-white/35 font-mono uppercase vertical-text tracking-[1.2em] group-hover:text-[#cc4e00]/40 transition-colors">
            SYST_MONITOR_ACTIVE
          </div>
          <div className="glass-card p-12 md:p-16 relative z-10 space-y-16 rounded-sm">
            <h3 className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-mono border-b border-white/5 pb-6 flex justify-between items-center">
              <span>HITOS_CINEMATOGRÁFICOS //</span>
              <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#cc4e00] animate-pulse"></div>
                 <span className="text-[11px] text-[#cc4e00]">SIGNAL</span>
              </div>
            </h3>
            
            <div className="space-y-12">
              {BIOGRAPHY_CONTENT.milestones.map((m, i) => (
                <div key={i} className="flex gap-10 items-start group/item">
                  <span className="text-[#cc4e00] text-xs font-mono pt-1 tracking-tighter">[{m.year}]</span>
                  <div>
                    <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-3 group-hover/item:text-[#cc4e00] transition-colors">{m.title}</h4>
                    <p className="text-[12px] text-white/40 tracking-[0.02em] leading-[1.8] font-mono">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;


import React, { useState } from 'react';

interface AudioInterfaceProps {
  onOpenLufs?: () => void;
}

const AudioInterface: React.FC<AudioInterfaceProps> = ({ onOpenLufs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full border border-[#cc4e00]/40 flex items-center justify-center hover:bg-[#cc4e00] hover:text-black transition-all group"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>
        
        <div className="hidden md:block">
          <div className="text-[9px] text-[#cc4e00] font-black tracking-[0.4em] uppercase mb-1">Genesis_Master_2026</div>
          <div className="flex items-center gap-3">
            <div className="audio-bars h-3 gap-[1.5px]">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-[2px] bg-[#cc4e00] transition-all duration-300 ${isPlaying ? 'animate-[sound-wave_1s_infinite_ease-in-out]' : ''}`} 
                  style={{
                    animationDelay: `${i * 0.1}s`, 
                    height: isPlaying ? `${20 + Math.random() * 80}%` : '2px',
                    opacity: isPlaying ? 1 : 0.2
                  }}
                ></div>
              ))}
            </div>
            <span className="text-[8px] text-white/30 font-mono tracking-widest font-bold">LOSSLESS_24B</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        {onOpenLufs && (
          <button 
            onClick={onOpenLufs}
            className="group flex items-center gap-3 px-6 py-2 border border-white/5 bg-white/5 hover:border-[#cc4e00]/40 transition-all rounded-sm"
          >
            <div className="audio-bars h-2 opacity-40 group-hover:opacity-100">
               <div className="bar w-[1px] bg-[#cc4e00]"></div>
               <div className="bar w-[1px] bg-[#cc4e00]"></div>
               <div className="bar w-[1px] bg-[#cc4e00]"></div>
            </div>
            <span className="text-[9px] font-mono text-white/40 group-hover:text-[#cc4e00] uppercase tracking-[0.4em] font-black">Pro_Lufs</span>
          </button>
        )}

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-[8px] text-white/20 tracking-[0.4em] uppercase font-bold">Vol</span>
          <div className="w-24 h-[1px] bg-white/10 relative">
            <div className="absolute top-0 left-0 h-full bg-[#cc4e00]" style={{width: `${volume}%`}}></div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg cursor-pointer hover:scale-150 transition-transform" 
              style={{left: `${volume}%`}}
              onMouseDown={(e) => {
                // Lógica de volumen simplificada
              }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 border-l border-white/5 pl-8">
          <div className="text-right hidden sm:block">
            <div className="text-[8px] text-white/20 font-mono leading-none tracking-widest uppercase">Signal_Link</div>
            <div className="text-[8px] text-[#cc4e00] font-mono leading-none mt-1 font-black">ACTIVE_NODE</div>
          </div>
          <div className="w-8 h-8 rounded border border-white/5 flex items-center justify-center text-white/20 hover:text-[#cc4e00] cursor-pointer transition-colors group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioInterface;

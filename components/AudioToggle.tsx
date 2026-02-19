
import React from 'react';
import { useAudio } from './AudioManager';

const AudioToggle: React.FC = () => {
  const { isMuted, setIsMuted } = useAudio();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
      }}
      className={`flex items-center gap-3 px-4 py-2 border transition-all duration-500 rounded-sm group ${
        isMuted
          ? 'border-white/10 bg-white/5 opacity-50 hover:opacity-100'
          : 'border-[#cc4e00] bg-[#cc4e00]/10'
      }`}
      aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
    >
      <div className="flex items-end gap-[2px] h-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-[1px] bg-white transition-all duration-300 ${
              isMuted ? 'h-1' : 'animate-pulse'
            }`}
            style={{
              height: isMuted ? '2px' : `${4 + Math.random() * 8}px`,
              animationDuration: `${0.5 + i * 0.2}s`,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>
      <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white">
        {isMuted ? 'Audio_Off' : 'Audio_Live'}
      </span>
    </button>
  );
};

export default AudioToggle;

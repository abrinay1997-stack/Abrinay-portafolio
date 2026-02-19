
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
      className={`flex items-center justify-center w-10 h-10 border transition-all duration-500 rounded-sm group ${
        isMuted
          ? 'border-white/10 bg-white/5 opacity-50 hover:opacity-100'
          : 'border-[#cc4e00] bg-[#cc4e00]/10'
      }`}
      aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
      title={isMuted ? "Activar sonido" : "Desactivar sonido"}
    >
      <div className="flex items-end gap-[2px] h-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-[1.5px] bg-white transition-all duration-300 ${
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
    </button>
  );
};

export default AudioToggle;

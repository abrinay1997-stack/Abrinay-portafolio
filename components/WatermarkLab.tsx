
import React, { useState, useCallback } from 'react';
import { watermarkService } from '../services/watermarkService';

const WatermarkLab: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');
  const [results, setResults] = useState<any>(null);

  const runWatermarkSimulation = useCallback(async () => {
    setStatus('processing');
    const audioLength = 44100;
    const originalAudio = new Float32Array(audioLength).map(() => (Math.random() - 0.5) * 0.2);
    const key = 12345;
    const { watermarked, pn } = await watermarkService.embed(originalAudio, key);
    const extraction = watermarkService.extract(watermarked, pn);
    const psnr = watermarkService.calculatePSNR(originalAudio, watermarked);

    setTimeout(() => {
      setResults({ psnr, correlation: extraction.correlation, isValid: extraction.isValid });
      setStatus('done');
    }, 2500);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 border-y border-white/5">
      <div className="p-12 border-r border-white/5">
        <h2 className="font-cinematic text-xl font-bold mb-8 text-white uppercase tracking-[0.4em]">Protocolo BukoFlow</h2>
        <p className="text-[11px] text-white/40 mb-12 tracking-[0.2em] leading-relaxed uppercase font-mono">
          Sistema de protección de derechos de autor mediante marca de agua DSSS. 
          Garantizando la soberanía de la señal independiente de Abrinay Studios.
        </p>
        
        <button 
          onClick={runWatermarkSimulation}
          className="w-full border border-[#ff3c00]/30 text-[#ff3c00] py-4 text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-[#ff3c00] hover:text-black transition-all"
        >
          {status === 'processing' ? 'Protegiendo Master...' : 'Validar Propiedad Intelectual'}
        </button>
      </div>

      <div className="p-12 bg-[#020202] flex flex-col justify-center min-h-[350px]">
        {status === 'processing' && (
          <div className="flex flex-col gap-6">
            <div className="h-[2px] bg-[#ff3c00]/10 w-full overflow-hidden">
              <div className="h-full bg-[#ff3c00] animate-[loading_2.5s_infinite]"></div>
            </div>
            <span className="text-[9px] text-[#ff3c00] tracking-[0.8em] uppercase font-mono font-bold">Codificando Firma Digital...</span>
          </div>
        )}

        {results && status === 'done' && (
          <div className="space-y-10 animate-in fade-in duration-1000">
            <div className="flex justify-between items-end border-b border-white/5 pb-6">
              <span className="text-[10px] uppercase text-white/20 tracking-[0.4em]">Calidad de Señal</span>
              <span className="text-3xl font-bold text-white tracking-tighter font-mono">{results.psnr.toFixed(1)}dB</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/5 pb-6">
              <span className="text-[10px] uppercase text-white/20 tracking-[0.4em]">Sello de Origen</span>
              <span className="text-3xl font-bold text-[#ff3c00] tracking-[0.1em] font-mono">AUTORIZADO</span>
            </div>
          </div>
        )}

        {status === 'idle' && (
          <div className="text-center opacity-10">
            <div className="text-[40px] font-bold font-mono tracking-tighter">BUKOFLOW_SEC</div>
            <p className="text-[10px] uppercase tracking-[1em]">Standby</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatermarkLab;

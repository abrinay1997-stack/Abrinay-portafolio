
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const LatestNews: React.FC = () => {
  const [news, setNews] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchLatestUpdates = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Genera un boletín extremadamente breve (3 puntos) sobre la actualidad de Abrinay (Brian Joel Carvajal). Destaca su rol como rapero, productor colombiano y sus hitos con Sony Music (The Orchard) y Symphonic. Usa un tono profesional, minimalista y audaz. Máximo 50 palabras en total.",
        config: { tools: [{ googleSearch: {} }] },
      });
      setNews(response.text || 'LA SEÑAL ES ESTABLE.');
    } catch (e) {
      setNews("CONEXIÓN INTERRUMPIDA: REINTENTANDO VÍNCULO CON EL SATÉLITE.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLatestUpdates(); }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="border border-white/5 p-8 md:p-12 relative overflow-hidden bg-black">
        <div className="absolute top-0 right-0 p-4 text-[9px] text-[#ff3c00] uppercase tracking-tighter font-mono font-bold">INFO_ACTUALIZADA_BUKOFLOW</div>
        
        <div className="mb-12">
          <h2 className="text-white/80 text-[12px] font-bold tracking-[0.6em] uppercase mb-4">Monitor de Trayectoria</h2>
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {loading ? (
          <div className="text-[10px] text-[#ff3c00] animate-pulse tracking-[0.4em] font-mono uppercase">Consultando Archivos de Sony/Symphonic...</div>
        ) : (
          <div className="text-[11px] text-white/50 leading-loose tracking-[0.2em] uppercase font-mono italic">
            {news}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNews;

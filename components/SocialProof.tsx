
import React, { useState, useEffect } from 'react';

// --- Sub-componentes de Iconos ---
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

// Define SectionTitle with optional children to avoid strict TS errors in certain environments
const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-wider uppercase bg-gradient-to-r from-white via-[#cc4e00] to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite] text-center font-cinematic">
        {children}
    </h2>
);

// --- Datos de los testimonios ---
const spotifyTracks = [
    { id: "5tuxq8IrJspC0eCeB3aOTm", artist: "RichardLove / Prod. Abrinay" },
    { id: "1y9mnArBtexJx9WUuoVKKK", artist: "Avalon Davies / Prod. Abrinay" },
    { id: "6jnSWHSPerX58A6Rs7U7tJ", artist: "RichardLove / Sync. Abrinay" },
    { id: "14anQ0yuu7PLwakdzleVsh", artist: "Abrinay Studios" },
    { id: "6oykdY0Ra3JsgSQjsytYpn", artist: "Abrinay - Original Master" },
    { id: "7exDUiOuHPt51xdldD5Eql", artist: "Abrinay - Atmospheric" },
    { id: "4sfCjMiXfz29zzA9Vdcnvc", artist: "Urban Archives" },
    { id: "42YcC0seZbUwcejQu0166M", artist: "Production Selection" },
    { id: "1Ej6ek0BCh8lmLVrldyGXf", artist: "Independent Works" },
    { id: "6twwPRrrY6L20ifK0zi8hm", artist: "BukoFlow Sessions" },
    { id: "0x8FCr0F2ariTYXvh8UlYN", artist: "The Orchard Master" },
    { id: "42kyjeRgca5cVN6y36SVUA", artist: "Sync Library" },
    { id: "1v1imOjDTa0fW9CTVpLG9k", artist: "High Fidelity Archives" },
    { id: "1IgaDmiim7i6eKSyJsdz7e", artist: "Abrinay - Ending" }
];

export const SocialProof = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = spotifyTracks.length;

    // Defined before useEffect for clarity
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + length) % length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000); 
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section id="spotify-showcase" className="w-full pt-32 pb-40 overflow-hidden bg-black border-y border-white/5">
            <div className="max-w-6xl mx-auto px-5">
                <SectionTitle>Sincronización Digital</SectionTitle>
                <p className="text-center text-[10px] tracking-[0.8em] uppercase text-white/20 mb-16 font-mono">Archive_Access // Global_Distribution</p>
                
                <div className="relative w-full h-[400px] flex items-center justify-center mt-10" style={{ perspective: '1200px' }}>
                    
                    <div className="relative w-full h-full flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
                         {spotifyTracks.map((item, index) => {
                             let offset = (index - currentIndex + length) % length;
                             if (offset > length / 2) {
                                 offset -= length;
                             } else if (offset < -length / 2) {
                                 offset += length;
                             }

                             const absOffset = Math.abs(offset);
                             const isVisible = absOffset <= 3; 

                             const translateX = offset * 180; 
                             const translateZ = -absOffset * 220; 
                             const rotateY = -offset * 25; 
                             const scale = 1 - (absOffset * 0.12); 
                             const opacity = isVisible ? 1 - (absOffset * 0.25) : 0; 
                             const zIndex = 100 - absOffset; 

                             return (
                                <div
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className="absolute w-[280px] sm:w-[320px] h-[352px] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer"
                                    style={{
                                        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        pointerEvents: offset === 0 ? 'auto' : 'none', 
                                    }}
                                >
                                    {/* Contenedor con radio de 12px para coincidir con Spotify */}
                                    <div className={`w-full h-full rounded-[12px] overflow-hidden bg-black shadow-2xl transition-all duration-500 ${offset === 0 ? 'shadow-[#cc4e00]/20 ring-1 ring-[#cc4e00]/40' : 'shadow-black/80 grayscale opacity-40'}`}>
                                        <iframe
                                            className="block w-full h-full bg-transparent"
                                            src={`https://open.spotify.com/embed/track/${item.id}?utm_source=generator&theme=0`}
                                            style={{ border: '0', display: 'block', borderRadius: '12px', background: 'transparent' }}
                                            frameBorder="0"
                                            allowFullScreen={true}
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy">
                                        </iframe>
                                        
                                        {offset !== 0 && (
                                            <div className="absolute inset-0 bg-black/70 z-10 transition-opacity duration-500"></div>
                                        )}
                                    </div>
                                    
                                    <p className={`text-center font-mono font-bold text-[9px] tracking-[0.5em] uppercase mt-8 transition-all duration-500 ${offset === 0 ? 'text-[#cc4e00] translate-y-0 opacity-100' : 'text-zinc-800 translate-y-4 opacity-0'}`}>
                                        {item.artist}
                                    </p>
                                </div>
                             );
                         })}
                    </div>
                    
                    <button 
                        onClick={prevSlide} 
                        className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 z-[110] p-4 bg-black/40 backdrop-blur-md border border-white/5 rounded-full text-white/50 hover:text-[#cc4e00] hover:border-[#cc4e00]/30 hover:scale-110 transition-all duration-300 shadow-xl" 
                        aria-label="Anterior"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 z-[110] p-4 bg-black/40 backdrop-blur-md border border-white/5 rounded-full text-white/50 hover:text-[#cc4e00] hover:border-[#cc4e00]/30 hover:scale-110 transition-all duration-300 shadow-xl" 
                        aria-label="Siguiente"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

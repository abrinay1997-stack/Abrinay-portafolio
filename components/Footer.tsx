
import React, { useState } from 'react';

const SOCIAL_LINKS = [
  { 
    name: 'Email', 
    url: 'mailto:abrinay1997@gmail.com',
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@Abrinay_',
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/abrinay_/',
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  },
  { 
    name: 'Spotify', 
    url: 'https://app.chartmetric.com/es/artist/731787',
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.303c-.215.353-.674.464-1.026.25-2.85-1.742-6.438-2.136-10.665-1.168-.403.093-.81-.158-.903-.561-.093-.403.158-.81.561-.903 4.622-1.057 8.583-.611 11.782 1.343.352.214.463.674.251 1.039zm1.468-3.26c-.27.439-.848.582-1.287.312-3.263-2.004-8.237-2.585-12.095-1.413-.496.15-.1.02-.25-.347-.15-.496.136-1.02.632-1.17 4.401-1.336 9.882-.686 13.639 1.62.439.27.583.848.311 1.288zm.127-3.414c-3.913-2.324-10.364-2.539-14.127-1.396-.6.183-1.23-.163-1.413-.763-.183-.6.163-1.23.763-1.413 4.316-1.311 11.439-1.056 15.918 1.604.54.32.714 1.015.394 1.555-.32.54-1.015.714-1.555.394z"/></svg>
  },
  { 
    name: 'TikTok', 
    url: 'https://www.tiktok.com/@abrinay',
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.312 0 2.61.51 3.75 1.56.08.07.15.14.22.21.54.56 1.01 1.21 1.39 1.92.14.27.27.55.38.84.11.29.21.58.29.88.11.29.21.58.29.88.08.3.14.6.18.91.04.31.06.62.06.94v.01c0 2.15-1.22 4.02-3 4.96.11-.29.21-.58.29-.88.08-.3.14-.6.18-.91.04-.31.06-.62.06-.94v-.01c0-2.15-1.22-4.02-3-4.96.1-.03.21-.05.32-.08.11-.03.21-.05.32-.08.5-.12.98-.31 1.41-.56.43-.25.82-.55 1.15-.9.33-.35.61-.74.83-1.17.22-.43.38-.89.47-1.37.09-.48.11-.97.07-1.46-.04-.49-.15-.97-.33-1.43-.18-.46-.43-.89-.74-1.28-.31-.39-.68-.74-1.1-1.04-.42-.3-.89-.54-1.39-.71-.5-.17-1.02-.27-1.55-.3zm-1.02 5.98v13.5c0 2.48-2.02 4.5-4.5 4.5S2.5 21.98 2.5 19.5 4.52 15 7 15c.34 0 .67.04 1 .11v2.03c-.32-.09-.65-.14-1-.14-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5v-13.5h3z"/></svg>
  },
  { 
    name: 'X', 
    url: 'https://x.com/abrinaystudios',
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  }
];

const LEGAL_TEXTS: Record<string, { title: string, content: string }> = {
  legal: {
    title: "Aviso Legal",
    content: "Abrinay Studios es una marca de producción independiente con operaciones en Bogotá y Panamá. Todo el material sonoro y visual aquí presentado está protegido por derechos de autor internacionales."
  },
  privacy: {
    title: "Política de Privacidad",
    content: "No recolectamos datos personales más allá de los necesarios para la comunicación profesional directa vía abrinay1997@gmail.com."
  },
  index: {
    title: "Índice de Master 2026",
    content: "Registro de Obras: Peter Doc Score, Cuando Florezcan OST, Catálogo Sony Orchard, Distribución Symphonic."
  }
};

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer id="contact" className="py-32 border-t border-white/10 bg-[#050505] relative z-40">
      {/* Modal Overlay */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-[#0a0a0a] border border-[#cc4e00]/20 p-12 max-w-lg w-full rounded-sm shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-white/40 hover:text-[#cc4e00] transition-colors uppercase text-[10px] font-mono tracking-widest"
            >
              Cerrar [X]
            </button>
            <h3 className="font-cinematic text-lg text-white mb-8 tracking-[0.3em] uppercase border-l-2 border-[#cc4e00] pl-6">
              {LEGAL_TEXTS[activeModal].title}
            </h3>
            <p className="text-[11px] text-white/60 leading-loose tracking-[0.1em] uppercase font-mono">
              {LEGAL_TEXTS[activeModal].content}
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-cinematic text-3xl md:text-5xl font-bold mb-16 uppercase tracking-[0.2em] text-white">CONECTAR</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-32 max-w-4xl mx-auto">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target={link.name === 'Email' ? undefined : "_blank"}
              rel={link.name === 'Email' ? undefined : "noopener noreferrer"}
              className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/0 hover:bg-white/5 hover:border-[#cc4e00]/60 transition-all duration-500 transform hover:scale-110"
              title={link.name}
            >
              <span className="text-white/40 group-hover:text-[#cc4e00] transition-colors duration-500">
                {link.svg}
              </span>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[7px] font-mono tracking-[0.4em] text-[#cc4e00] opacity-0 group-hover:opacity-100 transition-all duration-500 uppercase whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-white/40 uppercase tracking-[0.8em] gap-12 pt-20 border-t border-white/10">
          <p className="font-bold tracking-widest">© 2026 ABRINAY | BUKOFLOW LLC.</p>
          <div className="flex gap-12 md:gap-16 font-bold">
            <button onClick={() => setActiveModal('legal')} className="hover:text-[#cc4e00] transition-colors duration-300">Aviso Legal</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-[#cc4e00] transition-colors duration-300">Privacidad</button>
            <button onClick={() => setActiveModal('index')} className="hover:text-[#cc4e00] transition-colors duration-300">Índice</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

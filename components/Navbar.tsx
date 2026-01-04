
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Perfil', href: '#bio' },
    { name: 'Catálogo', href: '#work' },
    { name: 'Sincronización', href: '#spotify-showcase' },
    { name: 'Laboratorio', href: '#lab' },
    { name: 'Prensa', href: '#press' },
    { name: 'Créditos', href: '#credits' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    // Permitimos el comportamiento por defecto del ancla, ya que tenemos scroll-behavior: smooth
  };

  return (
    <nav className={`fixed top-0 w-full z-[150] transition-all duration-700 px-6 md:px-12 ${
      isScrolled ? 'py-4 bg-[#050505]/95 border-b border-white/5 backdrop-blur-xl' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Logo oficial */}
        <div className="flex items-center gap-4 group">
          <a href="#hero" className="relative block">
            <img 
              src="https://hostedimages-cdn.aweber-static.com/MjM0MTQ0NQ==/thumbnail/188302f5ca5241bd9111d44862883f63.png" 
              alt="ABRINAY LOGO" 
              className="h-10 md:h-12 w-auto object-contain brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(204,78,0,0.5)] transition-all duration-500"
            />
          </a>
          <div className="hidden sm:flex audio-bars h-4 opacity-10 group-hover:opacity-100 transition-opacity">
            <div className="bar w-[1.5px] bg-[#cc4e00]" style={{animationDuration: '0.8s'}}></div>
            <div className="bar w-[1.5px] bg-[#cc4e00]" style={{animationDuration: '1.2s'}}></div>
            <div className="bar w-[1.5px] bg-[#cc4e00]" style={{animationDuration: '0.6s'}}></div>
          </div>
        </div>

        {/* Action Center */}
        <div className="flex items-center gap-6" ref={menuRef}>
          <div className="hidden lg:flex items-center gap-3 border-r border-white/5 pr-6 opacity-30">
            <span className="text-[7px] text-white tracking-[0.4em] uppercase font-mono font-bold">Protocolo: Activo</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#cc4e00] animate-pulse"></div>
          </div>

          {/* Trigger Dropdown */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:border-[#cc4e00]/40 transition-all duration-500 z-[160]"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'w-5 rotate-45 translate-y-[3.5px]' : 'w-6'}`}></span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0 w-0' : 'w-4'}`}></span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'w-5 -rotate-45 -translate-y-[3.5px]' : 'w-5'}`}></span>
            </div>
          </button>

          {/* Menú Real y Funcional */}
          <div className={`absolute top-16 right-0 w-64 bg-[#0a0a0a]/98 border border-[#cc4e00]/20 backdrop-blur-3xl p-8 rounded-sm shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-top-right ${
            isMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}>
            <div className="flex flex-col gap-8">
              <div className="text-[7px] text-[#cc4e00] tracking-[0.6em] uppercase font-mono border-b border-white/5 pb-4">Navegación_Maestra</div>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block text-[10px] tracking-[0.5em] text-white/40 hover:text-[#cc4e00] hover:translate-x-2 transition-all uppercase font-bold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/5">
                <a 
                  href="mailto:abrinay1997@gmail.com"
                  className="block text-center text-[9px] bg-[#cc4e00] text-black py-3 tracking-[0.4em] uppercase font-black hover:bg-white transition-colors"
                >
                  Mensaje_Directo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

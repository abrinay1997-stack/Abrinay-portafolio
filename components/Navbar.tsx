
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

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
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

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-[200] transition-all duration-700 px-6 md:px-12 ${
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
        </div>

        {/* Action Center */}
        <div className="flex items-center gap-6" ref={menuRef}>
          {/* Trigger Dropdown */}
          <button 
            onClick={toggleMenu}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 z-[210] ${
              isMenuOpen ? 'border-[#cc4e00] bg-[#cc4e00]/10' : 'border-white/10 bg-white/5'
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1.5 items-center">
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'w-5 rotate-45 translate-y-[3.5px]' : 'w-6'}`}></span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0 w-0' : 'w-4'}`}></span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'w-5 -rotate-45 -translate-y-[3.5px]' : 'w-5'}`}></span>
            </div>
          </button>

          {/* Menú Dropdown */}
          <div className={`absolute top-16 right-0 w-72 bg-[#0a0a0a] border border-[#cc4e00]/30 backdrop-blur-3xl p-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-top-right z-[200] ${
            isMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="text-[7px] text-[#cc4e00] tracking-[0.6em] uppercase font-mono font-black">Navegación_Maestra</div>
                <div className="text-[7px] text-white/20 font-mono tracking-widest">v2.1.0</div>
              </div>
              
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group/link flex items-center justify-between text-[10px] tracking-[0.5em] text-white/40 hover:text-white transition-all uppercase font-bold"
                    >
                      <span>{link.name}</span>
                      <span className="w-0 group-hover/link:w-4 h-[1px] bg-[#cc4e00] transition-all"></span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5">
                <a 
                  href="mailto:abrinay1997@gmail.com"
                  className="block text-center text-[9px] bg-[#cc4e00] text-black py-4 tracking-[0.4em] uppercase font-black hover:bg-white transition-all shadow-lg hover:shadow-[#cc4e00]/20"
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

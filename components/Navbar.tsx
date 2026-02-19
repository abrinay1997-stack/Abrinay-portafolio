import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (page: 'home' | 'biography') => void;
  currentPage: 'home' | 'biography';
}

type NavLink =
  | { name: string; type: 'page'; page: 'home' | 'biography'; href: string }
  | { name: string; type: 'anchor'; href: string };

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = 'main-navigation-menu';

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const navLinks: NavLink[] = [
    { name: 'Inicio', type: 'page', page: 'home', href: '#hero' },
    { name: 'Biografía', type: 'page', page: 'biography', href: '#bio' },
    { name: 'Catálogo', type: 'anchor', href: '#work' },
    { name: 'Sincronización', type: 'anchor', href: '#spotify-showcase' },
    { name: 'Prensa', type: 'anchor', href: '#press' },
    { name: 'Créditos', type: 'anchor', href: '#credits' },
    { name: 'Contacto', type: 'anchor', href: '#contact' },
  ];

  const scrollToAnchor = (selector: string) => {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = (link: NavLink) => {
    setIsMenuOpen(false);

    if (link.type === 'page') {
      onNavigate(link.page);
      return;
    }

    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToAnchor(link.href), 100);
      return;
    }

    scrollToAnchor(link.href);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const goToContact = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToAnchor('#contact'), 100);
      return;
    }

    scrollToAnchor('#contact');
  };

  return (
    <nav className={`fixed top-0 w-full z-[200] transition-all duration-700 px-6 md:px-12 ${
      isScrolled ? 'py-4 bg-[#050505]/95 border-b border-white/5 backdrop-blur-xl' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <div className="flex items-center gap-4 group">
          <button
            onClick={() => onNavigate('home')}
            className="relative block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc4e00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            aria-label="Ir al inicio"
          >
            <img
              src="https://hostedimages-cdn.aweber-static.com/MjM0MTQ0NQ==/thumbnail/188302f5ca5241bd9111d44862883f63.png"
              alt="ABRINAY LOGO"
              className="h-10 md:h-12 w-auto object-contain brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(204,78,0,0.5)] transition-all duration-500"
            />
          </button>
        </div>

        <div className="flex items-center gap-4" ref={menuRef}>
          <button
            onClick={goToContact}
            className="hidden md:block px-5 py-3 bg-[#cc4e00] text-black text-[11px] tracking-[0.18em] uppercase font-black hover:bg-white transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Solicitar propuesta
          </button>
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 z-[210] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc4e00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
              isMenuOpen ? 'border-[#cc4e00] bg-[#cc4e00]/10' : 'border-white/10 bg-white/5'
            }`}
          >
            <div className="flex flex-col gap-1.5 items-center">
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'w-5 rotate-45 translate-y-[3.5px]' : 'w-6'}`}></span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0 w-0' : 'w-4'}`}></span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'w-5 -rotate-45 -translate-y-[3.5px]' : 'w-5'}`}></span>
            </div>
          </button>

          <div
            id={menuId}
            role="menu"
            aria-hidden={!isMenuOpen}
            className={`absolute top-16 right-0 w-72 bg-[#0a0a0a] border border-[#cc4e00]/30 backdrop-blur-3xl p-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-top-right z-[200] ${
              isMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="text-[11px] text-[#cc4e00] tracking-[0.3em] uppercase font-mono font-black">Navegación</div>
                <div className="text-[11px] text-white/30 font-mono tracking-[0.2em]">v2.1.5</div>
              </div>

              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="group/link flex items-center justify-between w-full text-left text-[12px] tracking-[0.22em] text-white/70 hover:text-white transition-all uppercase font-bold"
                    >
                      <span>{link.name}</span>
                      <span className="w-0 group-hover/link:w-4 h-[1px] bg-[#cc4e00] transition-all"></span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="mailto:abrinay1997@gmail.com"
                  className="block text-center text-[12px] bg-[#cc4e00] text-black py-4 tracking-[0.2em] uppercase font-black hover:bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  Solicitar_Propuesta
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

import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', value: 'home' },
    { label: 'Sobre mí', value: 'about' },
    { label: 'Servicios', value: 'services' },
    { label: 'Talleres', value: 'workshops' },
    { label: 'Contacto', value: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-stone-50/95 backdrop-blur-sm py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]' : 'bg-transparent py-6 md:py-10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-4 group text-left">
          <div className="relative w-14 h-14 flex items-center justify-center rounded-full border border-hoja-300 group-hover:border-teja-500 transition-all duration-500 bg-stone-50/50">
            {/* Minimal Leaf Icon + Initials composition */}
            <Leaf strokeWidth={1.5} size={16} className="absolute top-2 right-3 text-hoja-500 group-hover:text-teja-400 transition-colors" />
            <div className="relative top-[2px] left-[1px]">
              <span className="font-serif italic text-teja-700 text-2xl absolute -translate-x-2 -translate-y-2 group-hover:text-teja-600 transition-colors">Z</span>
              <span className="font-serif italic text-hoja-600 text-2xl absolute translate-x-0 -translate-y-0 group-hover:text-hoja-500 transition-colors">L</span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-serif text-2xl md:text-3xl text-earth-800 tracking-wide font-medium group-hover:text-teja-700 transition-colors">
              Cocina y Alma
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-hoja-600 font-medium">
              por Zahira León
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNavClick(link.value)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium pt-2 border-b-2 ${
                currentPage === link.value 
                  ? 'text-teja-600 border-hoja-400' 
                  : 'text-earth-800 border-transparent hover:text-hoja-600 hover:border-hoja-200'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-earth-800 hover:text-teja-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-stone-50 p-8 md:hidden z-50 border-t border-stone-100">
          <div className="flex flex-col space-y-8 items-center pt-10">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`text-3xl font-serif italic transition-colors ${
                  currentPage === link.value ? 'text-teja-600' : 'text-earth-800 hover:text-hoja-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
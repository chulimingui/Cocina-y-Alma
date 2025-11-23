import React from 'react';
import { Instagram, Mail, Mountain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 py-16 border-t border-earth-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand & Philosophy */}
        <div className="md:w-1/3 text-center md:text-left">
          <h4 className="font-serif text-2xl text-stone-100 mb-1">Cocina y Alma</h4>
          <p className="font-serif italic text-teja-300 mb-4">por Zahira León</p>
          <p className="text-xs text-stone-400 font-light max-w-xs mx-auto md:mx-0">
            Acompañamiento nutricional desde la calma, la consciencia y el disfrute.
          </p>
        </div>

        {/* Local Area SEO Block */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
             <div className="flex items-center gap-2 mb-3 text-stone-300">
                <Mountain size={16} className="text-teja-400" />
                <span className="text-xs uppercase tracking-widest font-medium">Área de Servicio</span>
             </div>
             <div className="text-xs text-stone-500 font-light leading-loose text-center md:text-left">
                <p>Sierra Noroeste de Madrid</p>
                <p>Torrelodones • Collado Villalba</p>
                <p>San Lorenzo de El Escorial • Galapagar</p>
                <p>Alpedrete • Guadarrama • Hoyo de Manzanares</p>
                <p className="mt-1 text-[10px] opacity-60">* Otras zonas consultar disponibilidad</p>
             </div>
        </div>

        {/* Contact & Social */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
                <a href="#" className="text-stone-300 hover:text-white transition-colors flex items-center gap-2">
                    <Instagram size={20} strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest hidden md:block">Instagram</span>
                </a>
                <a href="#contacto" className="text-stone-300 hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={20} strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest hidden md:block">Contacto</span>
                </a>
            </div>
            <p className="text-[10px] text-earth-600 font-light mt-2">
                © {new Date().getFullYear()} Zahira León. Todos los derechos reservados.
            </p>
        </div>
      </div>

      {/* Legal Links - Mandatory in Spain/EU */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-earth-800/50 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-[10px] text-earth-700 uppercase tracking-widest">
        <div className="flex gap-6">
             <a href="#" className="hover:text-teja-400 transition-colors">Aviso Legal</a>
             <a href="#" className="hover:text-teja-400 transition-colors">Política de Privacidad</a>
             <a href="#" className="hover:text-teja-400 transition-colors">Política de Cookies</a>
        </div>
        <div className="opacity-50">
            Diseñado con ♡ en la Sierra
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { SERVICES } from '../constants';
import { MapPin } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="py-32 bg-stone-100 relative">
      {/* Visual Separator Top (useful if preceding section is light) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 flex items-center justify-center gap-4">
        <div className="h-[1px] w-full bg-stone-300"></div>
        <div className="w-2 h-2 rotate-45 border border-stone-400 bg-stone-100"></div>
        <div className="h-[1px] w-full bg-stone-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl text-earth-900 mb-6">
            Servicios en tu Propia Cocina
          </h2>
          <div className="w-12 h-[1px] bg-hoja-500 mx-auto mb-6"></div>
          <p className="text-earth-800/70 font-light text-lg max-w-2xl mx-auto">
            La nutrición real no ocurre en un despacho. <br/>
            Zahira León se desplaza a tu hogar para transformar tus hábitos donde realmente importan.
          </p>
        </div>

        {/* Updated Grid to 2 columns for 4 items - More balanced */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col items-center text-center p-8 md:p-10 rounded-sm bg-stone-50 border border-transparent hover:border-hoja-400 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(124,138,103,0.1)] cursor-default relative overflow-hidden"
            >
              {/* Badge Presencial */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-hoja-600 bg-hoja-50 px-2 py-1 rounded-full">
                    <MapPin size={10} />
                    <span>In Situ</span>
                 </div>
              </div>

              <div className="mb-8 p-4 bg-hoja-50 rounded-full text-hoja-600 group-hover:bg-teja-50 group-hover:text-teja-600 transition-colors duration-500">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-2xl text-earth-900 mb-4 italic">
                {service.title}
              </h3>
              
              <p className="text-earth-800/80 text-sm leading-relaxed font-light mb-8 line-clamp-4">
                {service.description}
              </p>

              <button 
                onClick={() => onNavigate('services')}
                className="mt-auto text-xs text-earth-900 uppercase tracking-widest border-b border-hoja-300 pb-1 hover:border-teja-500 hover:text-teja-600 transition-all"
              >
                Ver experiencia
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

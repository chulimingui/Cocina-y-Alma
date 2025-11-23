
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-32 bg-teja-700 text-stone-100 relative overflow-hidden">
       {/* Decoración sutil de fondo */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-teja-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-teja-600/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-stone-200 text-xs font-bold tracking-[0.2em] uppercase block mb-6 opacity-80">
            Beneficios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-50 mb-8">
            Lo que cultivamos juntos
          </h2>
          <p className="text-teja-100 font-light max-w-lg">
            Más allá del plato, buscamos transformar tu día a día con amabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item, idx) => (
            <div 
                key={idx} 
                className="group relative flex flex-col items-center text-center p-8 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Elegant Border Container */}
              <div className="absolute inset-0 border border-white/20 rounded-sm transition-colors duration-500 group-hover:border-white/60 group-hover:bg-white/5"></div>
              
              {/* Decorative Corner (Top Right) */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-white/80"></div>
              
              {/* Decorative Corner (Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-white/80"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 font-serif text-3xl italic text-teja-200 group-hover:text-white transition-colors duration-500">
                    0{idx + 1}
                </div>
                <h3 className="font-serif text-xl text-stone-50 mb-4 group-hover:text-white tracking-wide">
                    {item.title}
                </h3>
                <div className="w-8 h-[1px] bg-teja-300 mx-auto mb-4 opacity-50 group-hover:opacity-100 group-hover:w-12 transition-all"></div>
                <p className="text-teja-100/90 font-light leading-relaxed text-sm">
                    {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

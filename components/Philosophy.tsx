import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-32 bg-hoja-800 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2000&auto=format&fit=crop" 
            alt="Textura natural de hojas y cocina"
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-hoja-800/80 mix-blend-multiply"></div>
      </div>

      {/* Visual Separator Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 flex items-center justify-center gap-4 z-10">
        <div className="h-[1px] w-full bg-hoja-400/50"></div>
        <div className="w-2 h-2 rotate-45 border border-hoja-400 bg-hoja-800"></div>
        <div className="h-[1px] w-full bg-hoja-400/50"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="text-hoja-200 text-xs font-bold tracking-[0.2em] uppercase block mb-6 opacity-80">
          Nuestra Esencia
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-stone-50 mb-16 leading-tight">
          ¿Qué es conciencia nutricia?
        </h2>
        
        <div className="space-y-8 text-hoja-50/90 font-light leading-loose text-lg md:text-xl">
          <p>
            No es una dieta más, ni una lista de alimentos prohibidos. 
            Es el camino de regreso a escuchar lo que tu cuerpo necesita, 
            lejos del ruido de la exigencia externa.
          </p>
          <p>
            Entendemos la alimentación como un acto integral: es emoción, 
            es rutina, es autocuidado y es organización. Buscamos la paz 
            en el plato y la practicidad en el día a día.
          </p>
          <p className="font-serif italic text-2xl text-teja-200 pt-4">
            "Aquí no perseguimos la perfección, cultivamos la presencia."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-20 bg-stone-50 min-h-screen relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-hoja-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Intro Section */}
        <div className="text-center mb-20 fade-in-up">
           <span className="text-hoja-600 text-xs font-bold tracking-[0.2em] uppercase block mb-6">
            Sobre Mí
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-earth-900 mb-8 leading-tight">
            Soy Zahira León
          </h1>
        </div>

        {/* Grid Layout: Photo & Story */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Photo Column - Usando altura fija/minima en lugar de aspect-ratio complejo */}
            <div className="md:col-span-5 relative fade-in-up delay-100 flex justify-center md:block">
                <div className="relative w-full max-w-sm h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                        src="https://cdn.beacons.ai/user_content/4WW2O3GWZvNgNmYVYrmenEJrBNi2/profile_zahira.leon.png?t=1754407679935&q=80&w=800&auto=format&fit=crop" 
                        alt="Zahira León en la cocina" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teja-100 rounded-full -z-10 mix-blend-multiply opacity-60"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-hoja-100 rounded-full -z-10 mix-blend-multiply opacity-60"></div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 prose prose-stone prose-lg font-light text-earth-800 leading-loose fade-in-up delay-200">
                <p className="font-serif text-2xl md:text-3xl text-teja-600 italic mb-8 leading-snug">
                    "Cocina y Alma nace para que cocinar sea tu refugio, no tu carga."
                </p>

                <p>
                    Durante mucho tiempo, entendí la nutrición como una serie de reglas matemáticas. 
                    Calorías que entran, calorías que salen. Sin embargo, la vida real —con sus prisas, 
                    sus emociones y sus imprevistos— me enseñó que la salud no cabe en una hoja de cálculo.
                </p>
                <p>
                    Creé <strong>Cocina y Alma</strong> para ofrecer lo que yo misma y muchas personas necesitamos: un espacio donde 
                    la comida deje de ser una fuente de estrés y se convierta en un acto de autocuidado. 
                </p>
                
                <div className="my-10 border-l-4 border-hoja-400 pl-8 py-4 bg-hoja-50/50 rounded-r-lg">
                    <h3 className="font-serif text-2xl text-earth-900 mb-2 mt-0">Mi Filosofía</h3>
                    <p className="italic text-lg text-earth-700 m-0">
                    No creo en la perfección, creo en la consciencia. No prescribo dietas restrictivas, 
                    acompaño procesos de cambio amables y sostenibles.
                    </p>
                </div>

                <p>
                    Mi trabajo es unir dos mundos que a menudo parecen opuestos: la <strong>organización práctica</strong> 
                    (el "qué cenamos hoy") y la <strong>profundidad emocional</strong> (el "cómo me siento al comer").
                </p>
                <p>
                    Aquí encontrarás tonos hoja, madera, lino y barro. Encontrarás tiempo. Encontrarás una mano amiga 
                    que te ayuda a ordenar tu despensa y tu mente, para que puedas sentarte a la mesa y, simplemente, disfrutar.
                </p>
            </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center my-20">
            <div className="w-1 h-24 bg-gradient-to-b from-hoja-400 to-teja-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
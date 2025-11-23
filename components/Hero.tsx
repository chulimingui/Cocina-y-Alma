import React from 'react';
import { Mountain, ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <header className="relative w-full min-h-screen bg-stone-50 overflow-hidden flex flex-col items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d6d3d1' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-50 via-stone-50/80 to-transparent"></div>

      {/* Main Content Container - Increased Top Padding to clear fixed menu */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-48 pb-20 text-center">
        
        {/* Badge with Location Keywords */}
        <div className="inline-flex items-center gap-2 border border-hoja-200 bg-hoja-50/80 px-4 py-1.5 rounded-full mb-10 backdrop-blur-sm fade-in-up">
            <Mountain size={14} className="text-hoja-600" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest text-hoja-800 font-medium">
              Chef a Domicilio · Sierra de Madrid
            </span>
        </div>

        {/* Title Block with Adjusted Wordplay: C lighter, no parentheses */}
        <div className="fade-in-up delay-100">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-earth-900 mb-6 leading-[1.1]">
              Alimenta tu vida <br/>
              <span className="relative inline-block mt-2">
                 con 
                 <span className="inline-flex items-baseline ml-3">
                    {/* La C mucho más clara, sutil */}
                    <span className="italic text-teja-300 font-serif mr-[2px]">
                        C
                    </span>
                    <span className="text-teja-700">alma</span>
                 </span>
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-earth-800/80 max-w-xl mx-auto leading-relaxed font-light mb-12">
              Cocina honesta, <strong>batch cooking</strong> y organización consciente en <span className="text-teja-700 font-medium">Torrelodones, Villalba y El Escorial</span>. 
              Recupera el placer de cuidarte.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-earth-900 text-stone-50 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-teja-600 transition-colors duration-500 rounded-sm shadow-lg"
              >
                Empezar ahora
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="text-earth-900 px-8 py-4 text-xs uppercase tracking-[0.2em] border border-earth-200 hover:border-teja-400 hover:text-teja-700 transition-colors duration-500 rounded-sm bg-white/50"
              >
                Mi filosofía
              </button>
            </div>
        </div>

        {/* Central Image Composition (Triptych) - Updated Reliable URLs with SEO ALT TEXT */}
        <div className="relative max-w-4xl mx-auto h-[300px] md:h-[400px] fade-in-up delay-300 hidden md:block">
            {/* Left Image - Ingredients/Fresh */}
            <div className="absolute left-10 top-10 w-64 h-80 rounded-[4rem] overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-700 z-10 border-4 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop" 
                    alt="Ingredientes frescos de temporada y saludables en mesa de cocina" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="256"
                    height="320"
                />
            </div>

            {/* Center Image - Cooking/Hands (Dominant) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-72 h-96 rounded-t-full rounded-b-[10rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
                 <img 
                    src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=800&auto=format&fit=crop" 
                    alt="Zahira León chef cocinando de forma artesanal en cocina luminosa" 
                    className="w-full h-full object-cover"
                    loading="eager" 
                    width="288"
                    height="384"
                />
            </div>

            {/* Right Image - Calm Atmosphere/Table */}
            <div className="absolute right-10 top-16 w-64 h-72 rounded-[3rem] overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-700 z-10 border-4 border-white">
                 <img 
                    src="https://images.unsplash.com/photo-1501959915551-4e8d30928317?q=80&w=800&auto=format&fit=crop" 
                    alt="Mesa puesta con calma y estilo en la Sierra de Madrid" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="256"
                    height="288"
                />
            </div>
        </div>

        {/* Mobile Image (Single) */}
        <div className="md:hidden w-full h-64 rounded-[3rem] overflow-hidden shadow-xl mb-12 border-4 border-white fade-in-up delay-200">
             <img 
                src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=800&auto=format&fit=crop" 
                alt="Manos cocinando recetas saludables" 
                className="w-full h-full object-cover"
                loading="eager"
            />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-earth-300 opacity-60">
           <ArrowDown size={24} strokeWidth={1} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
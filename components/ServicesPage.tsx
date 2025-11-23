import React, { useEffect } from 'react';
import { Home, ShoppingBag, ArrowRight, Sparkles, ChefHat, MapPin, Wine, CheckCircle2, Mountain } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="flex items-center justify-center gap-2 text-hoja-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
             <Mountain size={14} />
             <span>Sierra Noroeste · Madrid</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-earth-900 leading-tight mb-6">
            Chef en tu casa, <br/>
            <span className="italic text-teja-600">mano a mano.</span>
          </h1>
          <p className="text-earth-800/70 font-light max-w-2xl mx-auto leading-relaxed text-lg">
             Olvídate de las consultas frías. Me desplazo a tu hogar en <span className="text-earth-900 font-medium">Torrelodones, Villalba, Galapagar o El Escorial</span>. Arremanguémonos para crear salud desde tu propia cocina, llenando el espacio de aromas y soluciones reales.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Service 1: Cocina Compartida */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row group">
            {/* Columna Visual con Imagen */}
            <div className="md:w-1/2 relative h-64 md:h-auto min-h-[400px]">
               <img 
                  src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Servicio de Batch Cooking a domicilio en Madrid"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
               />
               <div className="absolute inset-0 bg-earth-900/10 group-hover:bg-earth-900/5 transition-colors duration-500"></div>
               
               <div className="absolute top-0 left-0 w-full p-8 md:p-10 flex justify-between items-start z-10 pointer-events-none">
                     <span className="font-serif text-6xl md:text-8xl text-white/60 font-bold leading-none mix-blend-overlay">01</span>
                     <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-earth-900 font-medium flex items-center gap-2 shadow-sm">
                        <MapPin size={12} className="text-teja-600" /> En tu Domicilio
                     </div>
               </div>
            </div>

            {/* Columna Contenido */}
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                <div className="w-14 h-14 bg-hoja-50 rounded-2xl flex items-center justify-center text-hoja-600 mb-6">
                    <ChefHat size={28} strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-earth-900 mb-6">Cocina Compartida (Batch Cooking)</h2>
                <p className="text-earth-700 font-light text-lg leading-relaxed mb-8">
                  Yo pongo la guía, tú pones la cocina. Prepararemos juntas tu menú semanal en una sesión intensiva. Te enseño técnicas de corte, conservación y cocción usando ingredientes naturales y de temporada.
                </p>
                
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-500 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">5-7 platos listos en 3 horas</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-500 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Técnicas con tus utensilios reales</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-500 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Nevera llena, organizada y etiquetada</span>
                   </div>
                </div>
            </div>
          </div>

          {/* Service 2: Organización */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row group">
             {/* Imagen a la derecha en desktop */}
             <div className="md:w-1/2 relative h-64 md:h-auto min-h-[400px] md:order-2">
               <img 
                  src="https://images.unsplash.com/photo-1576325782957-363cfe40a6d6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Organización de despensa saludable y sin plásticos"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
               />
               <div className="absolute inset-0 bg-earth-800/10 group-hover:bg-earth-800/5 transition-colors duration-500"></div>

               <div className="absolute top-0 left-0 w-full p-8 md:p-10 flex justify-between items-start z-10 pointer-events-none">
                     <span className="font-serif text-6xl md:text-8xl text-white/60 font-bold leading-none mix-blend-overlay">02</span>
                     <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-earth-900 font-medium flex items-center gap-2 shadow-sm">
                        <MapPin size={12} className="text-teja-600"/> En tu Domicilio
                     </div>
               </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center md:order-1 bg-white">
                <div className="w-14 h-14 bg-teja-50 rounded-2xl flex items-center justify-center text-teja-600 mb-6">
                    <Home size={28} strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-earth-900 mb-6">Organización de Despensa</h2>
                <p className="text-earth-700 font-light text-lg leading-relaxed mb-8">
                  Una cocina caótica invita a comer mal. Entro en tu espacio para analizar despensa y nevera. Desechamos plásticos innecesarios, organizamos en tarros de cristal y creamos un sistema lógico y sostenible.
                </p>
                
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-hoja-500 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Limpieza profunda de alacena</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-hoja-500 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Sistemas de almacenaje lógico</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-hoja-500 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Lista de básicos naturales personalizada</span>
                   </div>
                </div>
            </div>
          </div>

          {/* Service 3: Ruta de Mercado */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row group">
             <div className="md:w-1/2 relative h-64 md:h-auto min-h-[400px]">
               <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Compra en mercado local de Torrelodones"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
               />
               <div className="absolute inset-0 bg-earth-900/10 transition-colors duration-500"></div>

               <div className="absolute top-0 left-0 w-full p-8 md:p-10 flex justify-between items-start z-10 pointer-events-none">
                     <span className="font-serif text-6xl md:text-8xl text-white/60 font-bold leading-none mix-blend-overlay">03</span>
                     <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-earth-900 font-medium flex items-center gap-2 shadow-sm">
                        <MapPin size={12} className="text-teja-600"/> Mercado Local
                     </div>
               </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                <div className="w-14 h-14 bg-earth-100 rounded-2xl flex items-center justify-center text-earth-600 mb-6">
                    <ShoppingBag size={28} strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-earth-900 mb-6">Ruta de Mercado</h2>
                <p className="text-earth-700 font-light text-lg leading-relaxed mb-8">
                   Te acompaño a hacer la compra real. Visitamos tu mercado de barrio (Torrelodones, Villalba...). Te enseño a leer etiquetas "in situ", a priorizar producto fresco de cercanía y a evitar ultraprocesados.
                </p>
                
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-600 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Lectura de etiquetado real</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-600 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Gestión inteligente del presupuesto</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-600 shrink-0 mt-1" size={20} />
                      <span className="text-earth-800">Descubrimiento de producto local</span>
                   </div>
                </div>
            </div>
          </div>

          {/* Service 4: Eventos Privados */}
          <div className="bg-earth-900 text-stone-100 rounded-[2rem] overflow-hidden shadow-xl border border-earth-800 flex flex-col md:flex-row group">
             <div className="md:w-1/2 relative h-64 md:h-auto min-h-[400px] order-1 md:order-2">
               <img 
                  src="https://images.unsplash.com/photo-1549900120-857de1d9e64e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cena privada saludable en la Sierra de Madrid"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-earth-900 via-transparent to-transparent"></div>

               <div className="absolute top-0 left-0 w-full p-8 md:p-10 flex justify-between items-start z-10 pointer-events-none">
                     <span className="font-serif text-6xl md:text-8xl text-stone-100/10 font-bold leading-none">04</span>
                     <div className="bg-earth-950/60 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-stone-300 font-medium flex items-center gap-2 border border-earth-700">
                        <MapPin size={12} /> Eventos Sierra
                     </div>
               </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                <div className="w-14 h-14 bg-earth-800 rounded-2xl flex items-center justify-center text-teja-300 mb-6 border border-earth-700">
                    <Wine size={28} strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-6">Chef para Eventos</h2>
                <p className="text-stone-300 font-light text-lg leading-relaxed mb-8">
                  Servicio de cocina privada en la Sierra de Madrid para retiros de bienestar, círculos de mujeres o cenas íntimas. Yo me encargo de nutrir a tus invitados con menús vibrantes, estéticos y naturales.
                </p>
                
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-400 shrink-0 mt-1" size={20} />
                      <span className="text-stone-300">Menús 100% personalizados</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-400 shrink-0 mt-1" size={20} />
                      <span className="text-stone-300">Gestión integral (compra y cocina)</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-teja-400 shrink-0 mt-1" size={20} />
                      <span className="text-stone-300">Adaptaciones para intolerancias y alergias</span>
                   </div>
                </div>
            </div>
          </div>

        </div>

        {/* Pricing Compact Block */}
        <div className="mt-24 max-w-3xl mx-auto">
             <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-stone-200 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <Sparkles className="absolute top-8 left-8 text-teja-200 w-8 h-8 animate-pulse" />
                <Sparkles className="absolute bottom-8 right-8 text-hoja-200 w-6 h-6 animate-pulse delay-300" />
                
                <h3 className="font-serif text-3xl text-earth-900 mb-2">Inversión en ti</h3>
                <p className="text-earth-600 font-light mb-8">Tarifa única para sesiones individuales</p>

                <div className="flex flex-col items-center justify-center gap-2 mb-8">
                    <span className="font-serif text-6xl text-earth-900">100€</span>
                    <span className="text-xs uppercase tracking-widest text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Por sesión presencial</span>
                </div>
                
                <div className="text-sm text-earth-700 font-light max-w-md mx-auto leading-relaxed space-y-1">
                    <p>• Incluye desplazamiento en la <strong>Sierra Noroeste</strong> (Torrelodones, Villalba, Escorial, Galapagar...)</p>
                    <p>• Duración aproximada: 90 - 120 minutos.</p>
                    <p>• Otras zonas de Madrid: consultar suplemento.</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-stone-100">
                    <p className="text-xs text-stone-400 italic">
                        * Para eventos privados, consultar presupuesto a medida.
                    </p>
                </div>
             </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
            <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 bg-earth-900 text-stone-50 px-8 py-4 hover:bg-teja-600 transition-colors duration-500 rounded-sm shadow-lg text-xs uppercase tracking-widest font-medium group"
            >
                Agendar mi sesión ahora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
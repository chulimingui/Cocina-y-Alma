import React, { useEffect } from 'react';
import { Users, Calendar, Clock, Star, ArrowRight, Sparkles, Coffee, Gift } from 'lucide-react';

interface WorkshopsPageProps {
  onNavigate: (page: string) => void;
}

const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper para fechas dinámicas (siempre el mes siguiente)
  const getNextMonthDate = (day: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const monthName = date.toLocaleString('es-ES', { month: 'long' });
    const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    return `${day} de ${capitalizedMonth}`;
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teja-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center mb-24 fade-in-up">
          <span className="text-hoja-600 text-xs font-bold tracking-[0.2em] uppercase block mb-6">
            Encuentros Sensoriales
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-earth-900 mb-8 leading-tight">
            Talleres de <br/>
            <span className="italic text-teja-600">Cocina Viva.</span>
          </h1>
          <p className="font-light text-earth-800/70 text-lg max-w-2xl mx-auto leading-relaxed">
            La cocina es un lenguaje que se aprende practicando. <br/>
            Sesiones presenciales en grupos muy reducidos (máx. 8 personas) para recuperar el placer de cocinar, compartir mesa y nutrir el alma.
          </p>
        </div>

        {/* Aviso de Plazas */}
        <div className="bg-earth-900 text-stone-50 p-6 rounded-sm text-center mb-20 shadow-lg mx-auto max-w-3xl border border-earth-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                <div className="bg-teja-600 p-2 rounded-full text-white animate-pulse">
                    <Star size={20} fill="currentColor" />
                </div>
                <p className="font-serif text-xl tracking-wide">
                    Atención: Los grupos son íntimos y las plazas vuelan.
                </p>
             </div>
             <p className="text-stone-400 text-sm mt-2 font-light relative z-10">
                 Priorizo la calidad de la enseñanza y la cercanía sobre la cantidad.
             </p>
        </div>

        {/* Listado de Talleres */}
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Taller 1 */}
            <div className="bg-white border border-stone-200 p-8 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col relative group">
                <div className="absolute top-4 right-4 bg-stone-100 text-earth-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                    <Users size={12} />
                    <span>Quedan 3 plazas</span>
                </div>
                
                <div className="mb-6 text-teja-500 bg-teja-50 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-teja-600 group-hover:text-white transition-colors duration-500">
                    <Coffee size={28} strokeWidth={1.5}/>
                </div>

                <h3 className="font-serif text-2xl text-earth-900 mb-3 group-hover:text-teja-600 transition-colors">
                    Desayunos Lentos
                </h3>
                <p className="text-earth-600 font-light text-sm mb-6 flex-grow leading-relaxed">
                    Olvida las prisas matutinas. Aprenderemos 5 recetas que puedes dejar listas la noche anterior para empezar el día con calma y energía real.
                </p>

                <div className="space-y-3 border-t border-stone-100 pt-6 text-xs uppercase tracking-wider text-earth-500 font-medium">
                    <div className="flex items-center gap-3">
                        <Calendar size={14} className="text-hoja-600"/>
                        <span>Sábado, {getNextMonthDate(12)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock size={14} className="text-hoja-600"/>
                        <span>10:00 - 13:00h</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Users size={14} className="text-hoja-600"/>
                        <span>Máximo 8 personas</span>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <span className="font-serif text-2xl text-earth-900">45€</span>
                    <button onClick={() => onNavigate('contact')} className="text-xs font-bold uppercase tracking-widest text-teja-600 hover:text-teja-700 underline underline-offset-4 decoration-1">
                        Reservar plaza
                    </button>
                </div>
            </div>

            {/* Taller 2 */}
            <div className="bg-white border border-stone-200 p-8 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col relative group">
                 <div className="absolute top-4 right-4 bg-stone-100 text-earth-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                    <Users size={12} />
                    <span>Quedan 2 plazas</span>
                </div>

                <div className="mb-6 text-hoja-600 bg-hoja-50 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-hoja-600 group-hover:text-white transition-colors duration-500">
                    <Clock size={28} strokeWidth={1.5}/>
                </div>

                <h3 className="font-serif text-2xl text-earth-900 mb-3 group-hover:text-hoja-600 transition-colors">
                    Batch Cooking Otoñal
                </h3>
                <p className="text-earth-600 font-light text-sm mb-6 flex-grow leading-relaxed">
                    La calabaza y las setas como protagonistas. Cocinaremos tu menú semanal en 3 horas, optimizando tiempos y recursos. Te llevarás tuppers a casa.
                </p>

                 <div className="space-y-3 border-t border-stone-100 pt-6 text-xs uppercase tracking-wider text-earth-500 font-medium">
                    <div className="flex items-center gap-3">
                        <Calendar size={14} className="text-hoja-600"/>
                        <span>Domingo, {getNextMonthDate(13)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock size={14} className="text-hoja-600"/>
                        <span>10:00 - 13:30h</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Users size={14} className="text-hoja-600"/>
                        <span>Máximo 6 personas</span>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <span className="font-serif text-2xl text-earth-900">55€</span>
                    <button onClick={() => onNavigate('contact')} className="text-xs font-bold uppercase tracking-widest text-teja-600 hover:text-teja-700 underline underline-offset-4 decoration-1">
                        Reservar plaza
                    </button>
                </div>
            </div>

            {/* Taller 3 - Especial Navidad */}
            <div className="bg-earth-900 text-stone-50 border border-earth-800 p-8 rounded-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col relative overflow-hidden group">
                {/* Decoración Dorada Sutil */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teja-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                 <div className="absolute top-4 right-4 bg-teja-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
                    <Sparkles size={12} />
                    <span>Edición Especial</span>
                </div>

                <div className="mb-6 text-teja-200 bg-white/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-teja-600 group-hover:text-white transition-colors duration-500 backdrop-blur-sm">
                    <Gift size={28} strokeWidth={1.5}/>
                </div>

                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-teja-300 transition-colors">
                    Navidad en Calma
                </h3>
                <p className="text-stone-300 font-light text-sm mb-6 flex-grow leading-relaxed">
                    Diseñaremos un menú festivo que te permita disfrutar de tus invitados sin vivir en la cocina. Platos que lucen, nutren y se pueden dejar listos con antelación.
                </p>

                 <div className="space-y-3 border-t border-earth-700 pt-6 text-xs uppercase tracking-wider text-stone-400 font-medium">
                    <div className="flex items-center gap-3">
                        <Calendar size={14} className="text-teja-400"/>
                        <span>Sábado, {getNextMonthDate(20)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock size={14} className="text-teja-400"/>
                        <span>17:00 - 20:30h</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Users size={14} className="text-teja-400"/>
                        <span>Solo 8 plazas</span>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <span className="font-serif text-2xl text-teja-300">65€</span>
                    <button onClick={() => onNavigate('contact')} className="bg-stone-50 text-earth-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-teja-200 transition-colors rounded-sm">
                        Quiero mi plaza
                    </button>
                </div>
            </div>

        </div>

        {/* CTA General */}
        <div className="mt-24 text-center">
            <h3 className="font-serif text-3xl text-earth-800 mb-6">¿Te has quedado sin hueco?</h3>
            <p className="text-earth-600 font-light max-w-lg mx-auto mb-8">
                Abro lista de espera prioritaria cada mes. Escríbeme para ser la primera en enterarte de las nuevas fechas antes de que las publique en Instagram.
            </p>
            <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 text-earth-900 border-b border-earth-900 pb-1 hover:text-teja-600 hover:border-teja-600 transition-all uppercase tracking-widest text-xs font-medium"
            >
                Apuntarme a la lista de espera
                <ArrowRight size={14} />
            </button>
        </div>

      </div>
    </div>
  );
};

export default WorkshopsPage;
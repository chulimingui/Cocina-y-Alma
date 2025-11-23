import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw } from 'lucide-react';

const Calculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<{title: string, text: string} | null>(null);
  
  const [formData, setFormData] = useState({
    budget: 80,
    age: '',
    workLocation: 'fuera', // 'casa' | 'fuera'
    preference: 'rapido' // 'rapido' | 'sabor' | 'salud'
  });

  const handleCalculate = () => {
    let title = "";
    let text = "";
    const budget = Number(formData.budget);
    
    // Lógica sencilla para la recomendación
    if (formData.workLocation === 'fuera') {
        title = "Estrategia: Energía Sostenible";
        text = "Al trabajar fuera, tu prioridad debe ser evitar el bajón de energía de la tarde. ";
        if (budget < 70) {
            text += "Con tu presupuesto, nos centraremos en 'Batch Cooking' de legumbres y verduras de temporada para fiambreras nutritivas y económicas.";
        } else {
            text += "Tu presupuesto permite incluir proteínas de calidad y snacks funcionales (frutos secos, kéfir) para mantener tu concentración estable.";
        }
    } else {
        title = "Estrategia: Alacena Inteligente";
        text = "Trabajar en casa tiene la trampa del picoteo constante. ";
        if (formData.preference === 'rapido') {
            text += "Diseñaremos ensamblajes de 10 minutos: bases de cereales listas en la nevera y toppings rápidos para no interrumpir tu flujo de trabajo.";
        } else {
            text += "Aprovecharemos tus pausas para cocciones lentas que aromaticen la casa, convirtiendo la cocina en un espacio de desconexión mental.";
        }
    }

    setResult({ title, text });
    setStep(2);
  };

  const reset = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <section className="py-24 bg-stone-100 relative overflow-hidden">
       {/* Decoración de fondo sutil */}
       <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

       {/* Visual Separator Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 flex items-center justify-center gap-4">
        <div className="h-[1px] w-full bg-stone-300"></div>
        <div className="w-2 h-2 rotate-45 border border-stone-400 bg-stone-100"></div>
        <div className="h-[1px] w-full bg-stone-300"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-hoja-600 text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Herramienta Interactiva
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-earth-900 mb-4">
            Tu Brújula Nutricional
          </h2>
          <p className="text-earth-800/70 font-light max-w-lg mx-auto">
            Descubre qué tipo de organización encaja contigo hoy. 
            Introduce tus datos para recibir una pequeña semilla de consejo.
          </p>
        </div>

        {/* Card Container - White with shadow to pop against stone-100 */}
        <div className="bg-white rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] border border-stone-200 p-8 md:p-12 transition-all duration-500">
          
          {step === 1 && (
            <div className="space-y-10 fade-in-up">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                
                {/* Presupuesto */}
                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest text-earth-800 font-medium flex justify-between">
                    <span>Presupuesto Semanal (€)</span>
                    <span className="text-teja-600 font-serif text-lg">{formData.budget}€</span>
                  </label>
                  <input 
                    type="range" 
                    min="40" 
                    max="250" 
                    step="10"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: Number(e.target.value)})}
                    className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-hoja-600"
                  />
                  <p className="text-[10px] text-stone-400">Desliza para ajustar tu presupuesto aproximado para comida.</p>
                </div>

                {/* Edad */}
                <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-earth-800 font-medium">
                        Tu Edad
                    </label>
                    <input 
                        type="number" 
                        placeholder="Ej: 34"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full bg-transparent border-b border-stone-300 py-2 text-earth-900 outline-none focus:border-teja-500 transition-colors font-serif text-lg placeholder-stone-300"
                    />
                </div>

                {/* Trabajo */}
                <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-earth-800 font-medium">
                        ¿Dónde trabajas habitualmente?
                    </label>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setFormData({...formData, workLocation: 'casa'})}
                            className={`flex-1 py-3 px-2 rounded border text-sm transition-all duration-300 ${formData.workLocation === 'casa' ? 'bg-hoja-50 border-hoja-500 text-hoja-800 font-medium' : 'border-stone-200 text-stone-400 hover:border-stone-300'}`}
                        >
                            En Casa
                        </button>
                        <button 
                            onClick={() => setFormData({...formData, workLocation: 'fuera'})}
                            className={`flex-1 py-3 px-2 rounded border text-sm transition-all duration-300 ${formData.workLocation === 'fuera' ? 'bg-hoja-50 border-hoja-500 text-hoja-800 font-medium' : 'border-stone-200 text-stone-400 hover:border-stone-300'}`}
                        >
                            Fuera / Oficina
                        </button>
                    </div>
                </div>

                {/* Preferencia */}
                <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-earth-800 font-medium">
                        Tu prioridad hoy
                    </label>
                    <div className="relative">
                        <select 
                            value={formData.preference}
                            onChange={(e) => setFormData({...formData, preference: e.target.value})}
                            className="w-full bg-transparent border-b border-stone-300 py-2 text-earth-900 outline-none focus:border-teja-500 cursor-pointer appearance-none font-serif text-lg"
                        >
                            <option value="rapido">Rapidez (Poco tiempo)</option>
                            <option value="sabor">Disfrute (Soy foodie)</option>
                            <option value="salud">Digestión (Me siento pesada)</option>
                        </select>
                        <div className="absolute right-0 top-3 pointer-events-none text-stone-400 text-xs">▼</div>
                    </div>
                </div>

              </div>

              <div className="pt-6 flex justify-center">
                <button 
                    onClick={handleCalculate}
                    className="bg-earth-900 text-stone-50 px-10 py-4 flex items-center gap-3 hover:bg-teja-600 transition-colors duration-500 rounded-sm shadow-md group"
                >
                    <CalcIcon size={18} className="group-hover:rotate-12 transition-transform"/>
                    <span className="tracking-wide">Ver mi recomendación</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && result && (
            <div className="text-center space-y-8 fade-in-up py-4">
                <div className="w-16 h-16 mx-auto bg-hoja-50 rounded-full flex items-center justify-center text-hoja-600 mb-6 border border-hoja-200">
                    <CalcIcon size={24} strokeWidth={1.5} />
                </div>
                
                <div>
                    <span className="text-xs uppercase tracking-widest text-hoja-600 mb-2 block">Tu resultado</span>
                    <h3 className="font-serif text-3xl text-teja-600 italic mb-6">
                        {result.title}
                    </h3>
                    <p className="text-earth-800 font-light leading-relaxed text-lg max-w-2xl mx-auto border-l-2 border-teja-200 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        {result.text}
                    </p>
                </div>

                <div className="bg-stone-50 p-6 rounded border border-stone-200 inline-block max-w-lg mx-auto">
                    <p className="text-sm text-earth-700 font-light">
                        <span className="font-medium text-teja-600 block mb-1">¿Pasamos a la acción?</span>
                        Con el acompañamiento presencial (<strong>100€/sesión</strong>), iré a tu domicilio para transformar este consejo en una despensa real y platos listos en tu nevera.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                    <button 
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
                        className="bg-hoja-600 text-stone-50 px-8 py-3 hover:bg-hoja-700 transition-colors w-full md:w-auto tracking-wide shadow-sm"
                    >
                        Agendar cita en casa
                    </button>
                    <button 
                        onClick={reset}
                        className="flex items-center gap-2 text-stone-400 hover:text-teja-600 transition-colors text-xs uppercase tracking-widest px-4 py-3"
                    >
                        <RefreshCw size={14} />
                        Calcular de nuevo
                    </button>
                </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Calculator;
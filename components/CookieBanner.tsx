import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobamos si ya aceptó las cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Pequeño retardo para no agobiar nada más entrar (calma)
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // En una implementación real, aquí bloquearíamos scripts de terceros
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 fade-in-up">
      <div className="max-w-4xl mx-auto bg-stone-50/95 backdrop-blur-md border border-stone-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-sm p-6 md:flex items-center justify-between gap-8">
        
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center gap-3 mb-2 text-teja-600">
            <Cookie size={18} strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest font-bold">Transparencia</span>
          </div>
          <p className="text-earth-800 font-light text-sm leading-relaxed">
            Utilizamos cookies propias y de terceros para que la web funcione con calma y fluidez, y para entender cómo navegas por ella. 
            Sin rastreos agresivos. <a href="#" className="underline decoration-stone-300 underline-offset-4 hover:text-teja-600 transition-colors">Leer política de cookies</a>.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={handleDecline}
            className="text-xs text-stone-400 hover:text-earth-900 uppercase tracking-wider transition-colors"
          >
            Solo necesarias
          </button>
          <button 
            onClick={handleAccept}
            className="bg-earth-900 text-stone-50 px-6 py-3 text-xs uppercase tracking-widest hover:bg-teja-600 transition-colors duration-300 rounded-sm shadow-sm"
          >
            Aceptar
          </button>
        </div>

        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-2 right-2 p-2 text-stone-400 hover:text-teja-600 md:hidden"
        >
          <X size={16} />
        </button>

      </div>
    </div>
  );
};

export default CookieBanner;
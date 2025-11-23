import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    alert('Gracias por tu mensaje. Te responderé con calma pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-32 bg-stone-100 relative">
      {/* Visual Separator Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 flex items-center justify-center gap-4">
        <div className="h-[1px] w-full bg-stone-300"></div>
        <div className="w-2 h-2 rotate-45 border border-stone-400 bg-stone-100"></div>
        <div className="h-[1px] w-full bg-stone-300"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-900 mb-6 leading-tight">
              Empecemos <br/>
              <span className="italic text-teja-600">despacio.</span>
            </h2>
            <p className="text-earth-800 font-light text-lg mb-8 leading-relaxed">
              Si sientes que es momento de reconciliarte con tu alimentación o simplemente necesitas poner orden en tu cocina con amabilidad, estoy aquí.
            </p>
            <p className="text-sm text-earth-800/60 font-light mb-8">
              Sin presiones. Responderé cuando el ritmo lo permita, normalmente en 24-48 horas.
            </p>
            <div className="text-earth-900 font-serif text-xl hover:text-teja-600 transition-colors cursor-pointer">
              hola@cocinayalma.com
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-stone-50 p-8 md:p-10 shadow-sm border border-stone-200">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-earth-800 mb-2">Nombre</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-stone-300 py-2 text-earth-900 focus:border-teja-500 outline-none transition-colors placeholder-stone-400"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-earth-800 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-stone-300 py-2 text-earth-900 focus:border-teja-500 outline-none transition-colors placeholder-stone-400"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-earth-800 mb-2">Mensaje</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-stone-300 py-2 text-earth-900 focus:border-teja-500 outline-none transition-colors placeholder-stone-400 resize-none"
                placeholder="Cuéntame brevemente qué necesitas..."
              />
            </div>

            <button 
              type="submit"
              className="group flex items-center justify-between w-full bg-earth-900 text-stone-50 px-6 py-4 hover:bg-teja-600 transition-colors duration-500"
            >
              <span className="font-medium tracking-wide">Enviar mensaje</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
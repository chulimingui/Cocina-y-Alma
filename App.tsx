import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import WorkshopsPage from './components/WorkshopsPage';
import CookieBanner from './components/CookieBanner';

// SEO Configuration for each view
const SEO_METADATA: Record<string, { title: string; description: string }> = {
  home: {
    title: "Cocina y Alma | Chef a Domicilio y Nutrición en Sierra de Madrid",
    description: "Zahira León: Cocina honesta, batch cooking a domicilio y talleres de cocina en Torrelodones, Villalba y El Escorial."
  },
  about: {
    title: "Sobre Zahira León | Cocina y Alma",
    description: "Conoce a Zahira León. Mi filosofía une organización práctica y profundidad emocional para reconciliarte con tu alimentación."
  },
  services: {
    title: "Servicios de Chef Privado y Organización | Cocina y Alma",
    description: "Batch Cooking a domicilio, organización de despensas y rutas de mercado en la Sierra Noroeste de Madrid."
  },
  workshops: {
    title: "Talleres de Cocina en la Sierra de Madrid | Cocina y Alma",
    description: "Cursos de cocina presenciales en grupos reducidos. Desayunos saludables, menús festivos y cocina de temporada."
  },
  contact: {
    title: "Contacto | Reserva tu sesión con Cocina y Alma",
    description: "Escríbeme para agendar tu sesión de cocina a domicilio o reservar plaza en los talleres. Sierra de Madrid."
  }
};

const App: React.FC = () => {
  // Simple view state router: 'home' | 'about' | 'services' | 'workshops' | 'contact'
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO Title & Description Update
  useEffect(() => {
    const metadata = SEO_METADATA[currentPage] || SEO_METADATA['home'];
    
    // Update Document Title
    document.title = metadata.title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    } else {
      // Create if it doesn't exist (fallback)
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'workshops':
        return <WorkshopsPage onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <>
             {/* Render Contact cleanly if selected specifically. */}
             <div className="pt-20 min-h-[60vh] flex flex-col justify-center">
                <Contact />
             </div>
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Philosophy />
            <Services onNavigate={handleNavigate} />
            <Calculator />
            <Benefits />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-earth-900 font-sans antialiased selection:bg-teja-200 selection:text-teja-700">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
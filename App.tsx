
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Concierge from './components/Concierge';
import { Page } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial luxury loading screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home />;
      case Page.About: return <About />;
      case Page.Contact: return <Contact />;
      default: return <Home />;
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-24 h-24 bg-scuderia-red flex items-center justify-center rounded-sm rotate-45"
        >
          <span className="text-white font-bold -rotate-45 text-4xl">S</span>
        </motion.div>
        <div className="w-48 h-0.5 bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-scuderia-red"
          />
        </div>
        <span className="text-xs tracking-[1em] text-white/50 uppercase font-bold animate-pulse">SCUDERIA VISION</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Concierge />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-scuderia-red flex items-center justify-center rounded-sm rotate-45">
                    <span className="text-white font-bold -rotate-45 text-lg">S</span>
                </div>
                <span className="text-xl font-serif font-black tracking-tighter">SCUDERIA<span className="text-scuderia-red">VISION</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              Concessionnaire agréé Ferrari. L'excellence automobile au service de vos rêves les plus audacieux.
            </p>
          </div>
          
          <div className="flex space-x-12">
            <div>
              <h5 className="text-white text-[10px] tracking-widest font-bold uppercase mb-6">Navigation</h5>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="hover:text-scuderia-red cursor-pointer" onClick={() => setCurrentPage(Page.Home)}>Accueil</li>
                <li className="hover:text-scuderia-red cursor-pointer" onClick={() => setCurrentPage(Page.About)}>Héritage</li>
                <li className="hover:text-scuderia-red cursor-pointer" onClick={() => setCurrentPage(Page.Contact)}>Privilège</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-[10px] tracking-widest font-bold uppercase mb-6">Légal</h5>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="hover:text-scuderia-red cursor-pointer">Confidentialité</li>
                <li className="hover:text-scuderia-red cursor-pointer">Mentions Légales</li>
                <li className="hover:text-scuderia-red cursor-pointer">Cookies</li>
              </ul>
            </div>
          </div>

          <div className="text-right">
             <span className="block text-[10px] text-gray-600 font-bold tracking-[0.3em] uppercase mb-2">MARANELLO EXPERIENCE</span>
             <p className="text-scuderia-red font-serif italic text-2xl">Vivre la Légende</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-gray-600 tracking-widest">
            © 2024 SCUDERIA VISION. TOUS DROITS RÉSERVÉS. LES LOGOS FERRARI ET LE CHEVAL CABRÉ SONT DES MARQUES DÉPOSÉES DE FERRARI S.P.A.
        </div>
      </footer>
    </div>
  );
};

export default App;

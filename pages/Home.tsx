
import React from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import ScrollScrub3D from '../components/ScrollScrub3D';
import { FERRARI_MODELS } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#050505]">
      <Hero />

      {/* NEW: Scroll-Driven 3D Experience */}
      <section>
        <div className="py-20 text-center bg-black">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic font-black uppercase mb-4">L'IMMERSION <span className="text-scuderia-red">TOTALE</span></h2>
            <p className="text-gray-500 font-accent tracking-widest text-xs uppercase">Chaque détail est une obsession</p>
          </motion.div>
        </div>
        <ScrollScrub3D />
      </section>
      
      {/* Featured Models Gallery */}
      <section className="py-40 px-6 bg-black relative z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <span className="text-scuderia-red font-accent tracking-[0.5em] text-xs mb-6 block uppercase">Catalogue d'exception</span>
            <h2 className="text-6xl md:text-8xl font-serif italic font-black uppercase tracking-tighter">LE GARAGE <span className="text-white/20">VIRTUEL</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {FERRARI_MODELS.map((car, idx) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="relative py-60 overflow-hidden bg-black border-y border-white/5">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
             <div className="whitespace-nowrap flex animate-drift">
                <span className="text-[20rem] font-serif italic font-black text-white/5 mr-20">PERFORMANCE • PASSION • INNOVATION • MARANELLO • SCUDERIA •</span>
                <span className="text-[20rem] font-serif italic font-black text-white/5">PERFORMANCE • PASSION • INNOVATION • MARANELLO • SCUDERIA •</span>
             </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-serif italic font-black mb-12 leading-none uppercase">LA PUISSANCE <br /><span className="text-scuderia-red">SCULPTÉE</span></h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-16 max-w-lg">
                Au-delà de la vitesse, nous créons des chefs-d'œuvre mécaniques. Chaque moteur est une symphonie, chaque châssis une promesse.
              </p>
              
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <h4 className="text-scuderia-red text-4xl font-serif italic font-black mb-3">V12</h4>
                  <p className="text-[10px] font-accent tracking-[0.3em] text-gray-500 uppercase font-bold">L'Héritage Pur</p>
                </div>
                <div>
                  <h4 className="text-scuderia-red text-4xl font-serif italic font-black mb-3">2.5s</h4>
                  <p className="text-[10px] font-accent tracking-[0.3em] text-gray-500 uppercase font-bold">L'Instant Zéro</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative aspect-square glass-morphism rounded-full flex items-center justify-center p-20"
            >
                <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover rounded-full mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Detail"
                />
                <div className="absolute inset-0 border-[40px] border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

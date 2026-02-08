
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_STORY } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <span className="text-scuderia-red tracking-[0.5em] font-bold text-xs mb-4 block">{BRAND_STORY.subtitle}</span>
          <h1 className="text-6xl md:text-9xl font-serif italic font-black mb-8">{BRAND_STORY.title}</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-scuderia-red/30 z-0 translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 w-full h-[600px] object-cover grayscale"
              alt="Classic Ferrari"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif italic mb-8">"L'homme, puis la voiture."</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Enzo Ferrari a bâti son empire sur un principe simple : la poursuite incessante de l'excellence. 
              Maranello n'est pas seulement une usine, c'est un sanctuaire où la performance brute rencontre l'esthétique pure.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Chaque moteur qui quitte nos ateliers porte en lui l'âme de milliers de victoires en Grand Prix. 
              Posséder une Ferrari, c'est posséder une part de l'histoire du sport automobile.
            </p>
            <button className="px-10 py-5 bg-white text-black font-bold tracking-widest text-sm hover:bg-scuderia-red hover:text-white transition-all duration-500">
              DÉCOUVRIR NOS VALEURS
            </button>
          </motion.div>
        </div>

        {/* Heritage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[400px] bg-white/5 p-12 flex flex-col justify-end group hover:bg-scuderia-red transition-all duration-700">
                <span className="text-scuderia-red group-hover:text-white text-5xl font-serif italic mb-4">01</span>
                <h3 className="text-2xl font-bold mb-4">INGÉNIERIE</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80">L'innovation au service de l'émotion pure.</p>
            </div>
            <div className="h-[400px] bg-white/5 p-12 flex flex-col justify-end group hover:bg-scuderia-red transition-all duration-700">
                <span className="text-scuderia-red group-hover:text-white text-5xl font-serif italic mb-4">02</span>
                <h3 className="text-2xl font-bold mb-4">DESIGN</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80">Des courbes sculptées par le vent et la passion.</p>
            </div>
            <div className="h-[400px] bg-white/5 p-12 flex flex-col justify-end group hover:bg-scuderia-red transition-all duration-700">
                <span className="text-scuderia-red group-hover:text-white text-5xl font-serif italic mb-4">03</span>
                <h3 className="text-2xl font-bold mb-4">HÉRITAGE</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80">Plus de 75 ans de légende sur tous les circuits.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

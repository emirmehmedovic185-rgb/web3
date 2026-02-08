
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover animate-subtle-zoom brightness-50 opacity-60"
          alt="Ferrari SF90"
        />
      </div>

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-scuderia-red font-accent tracking-[0.6em] text-xs md:text-sm mb-6 block font-bold uppercase">Maranello • Italy • Est. 1947</span>
          <h1 className="text-7xl md:text-[11rem] font-serif italic font-black leading-[0.85] mb-10 tracking-tighter uppercase overflow-hidden">
            L'ÂME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white">ITALIENNE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed mb-16 tracking-wide">
            Chaque courbe, chaque son, chaque milliseconde. Plongez dans un univers où la performance devient un art de vivre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12"
        >
          <button className="px-12 py-6 bg-scuderia-red text-white text-[11px] font-accent tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-500 group relative uppercase">
            <span className="relative z-10">L'EXCELLENCE 3D</span>
            <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
          </button>
          <button className="px-12 py-6 border border-white/10 text-white text-[11px] font-accent tracking-[0.4em] font-bold hover:bg-white/5 transition-all duration-500 uppercase">
            Notre Héritage
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <span className="text-[10px] font-accent tracking-[0.5em] mb-4">SCROLL</span>
        <div className="w-px h-24 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="absolute -left-60 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-scuderia-red/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -right-60 bottom-0 w-[500px] h-[500px] bg-scuderia-red/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;

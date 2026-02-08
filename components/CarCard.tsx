
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car } from '../types';
import { ArrowRight, Gauge, Zap, Wind, Box } from 'lucide-react';
import Car3DViewer from './Car3DViewer';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [show3D, setShow3D] = useState(false);

  return (
    <div className="relative w-full h-[650px] bg-[#0d0d0d] overflow-hidden group border border-white/5 hover:border-scuderia-red/30 transition-colors duration-500">
      <AnimatePresence mode="wait">
        {!show3D ? (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            <img 
              src={car.imageUrl} 
              alt={car.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        ) : (
          <motion.div
            key="3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20"
          >
            <Car3DViewer glbUrl={car.glbUrl} poster={car.imageUrl} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-6 left-6 z-30">
          <button 
            onClick={() => setShow3D(!show3D)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-[10px] font-accent tracking-widest transition-all ${show3D ? 'bg-scuderia-red border-scuderia-red text-white' : 'bg-black/50 border-white/10 text-white hover:bg-white hover:text-black'}`}
          >
            <Box size={14} />
            <span>{show3D ? 'QUITTER 3D' : 'EXPLORER EN 3D'}</span>
          </button>
      </div>

      <div className="absolute inset-0 p-10 flex flex-col justify-end z-20 pointer-events-none">
        <motion.div
          animate={show3D ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          className="transition-all duration-500"
        >
          <span className="text-scuderia-red font-accent tracking-[0.4em] text-xs mb-3 block">{car.year} • {car.model}</span>
          <h3 className="text-4xl md:text-5xl font-serif italic font-black mb-6 tracking-tighter uppercase">{car.name}</h3>
          
          <div className="flex space-x-8 mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-accent tracking-widest mb-1 uppercase">Power</span>
              <div className="flex items-center space-x-2">
                <Zap size={14} className="text-scuderia-red" />
                <span className="text-sm font-bold tracking-tighter">{car.power}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-accent tracking-widest mb-1 uppercase">Top Speed</span>
              <div className="flex items-center space-x-2">
                <Gauge size={14} className="text-scuderia-red" />
                <span className="text-sm font-bold tracking-tighter">{car.topSpeed}</span>
              </div>
            </div>
          </div>

          <button className="flex items-center space-x-4 text-white font-accent tracking-[0.3em] text-[10px] group-hover:text-scuderia-red transition-colors pointer-events-auto uppercase">
            <span>Configurer l'exception</span>
            <div className="w-10 h-px bg-current group-hover:w-16 transition-all duration-500" />
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CarCard;

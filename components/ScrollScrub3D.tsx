
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollScrub3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<any>(null);
  
  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll value for buttery smooth rotation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map 0-1 scroll progress to 0-360 degrees
  // We use string interpolation for model-viewer's camera-orbit: "Xdeg Ydeg Z%"
  const [orbit, setOrbit] = useState("0deg 75deg 105%");

  useEffect(() => {
    return smoothProgress.onChange((v) => {
      const degrees = v * 360;
      setOrbit(`${degrees}deg 75deg 105%`);
      if (modelRef.current) {
        modelRef.current.cameraOrbit = `${degrees}deg 75deg 105%`;
      }
    });
  }, [smoothProgress]);

  // Opacity for technical details based on scroll position
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-scuderia-red/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Technical Callouts */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.div style={{ opacity: text1Opacity }} className="absolute top-1/4 left-20">
            <h4 className="text-scuderia-red font-accent tracking-widest text-sm mb-2">AERODYNAMICA</h4>
            <p className="font-serif italic text-4xl uppercase max-w-xs">Le flux d'air parfait</p>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity }} className="absolute top-1/2 right-20">
            <h4 className="text-scuderia-red font-accent tracking-widest text-sm mb-2">PERFORMANZA</h4>
            <p className="font-serif italic text-4xl uppercase max-w-xs">1000 CV de puissance pure</p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }} className="absolute bottom-1/4 left-1/3">
            <h4 className="text-scuderia-red font-accent tracking-widest text-sm mb-2">HERITAGE</h4>
            <p className="font-serif italic text-4xl uppercase max-w-xs">L'âme de Maranello</p>
          </motion.div>
        </div>

        {/* 3D Model Wrapper */}
        <div className="w-full h-full max-w-6xl mx-auto flex items-center justify-center z-10">
          <model-viewer
            ref={modelRef}
            src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/SheenChair/glTF-Binary/SheenChair.glb" 
            alt="Ferrari flagship model"
            camera-orbit={orbit}
            interaction-prompt="none"
            shadow-intensity="2"
            exposure="1.2"
            environment-image="neutral"
            className="w-full h-full"
          >
            <div slot="poster" className="w-full h-full flex items-center justify-center bg-black">
               <span className="font-accent tracking-[1em] text-white/20">PREPARING SHOWROOM...</span>
            </div>
          </model-viewer>
        </div>

        {/* Scroll Progress Bar (Vertical) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-64 w-px bg-white/10">
          <motion.div 
            style={{ scaleY: scrollYProgress }} 
            className="w-full bg-scuderia-red origin-top h-full shadow-[0_0_10px_#e30613]" 
          />
        </div>
        
        {/* Instruction */}
        <div className="absolute bottom-10 w-full text-center">
            <motion.p 
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] font-accent tracking-[0.5em] text-white/50"
            >
                CONTINUEZ DE DÉFILER POUR EXPLORER
            </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ScrollScrub3D;

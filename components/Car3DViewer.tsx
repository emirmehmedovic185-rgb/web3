
import React from 'react';

interface Car3DViewerProps {
  glbUrl: string;
  poster: string;
}

const Car3DViewer: React.FC<Car3DViewerProps> = ({ glbUrl, poster }) => {
  return (
    <div className="w-full h-full relative group">
      <model-viewer
        src={glbUrl}
        poster={poster}
        alt="Ferrari 3D Model"
        auto-rotate
        camera-controls
        touch-action="pan-y"
        shadow-intensity="2"
        environment-image="neutral"
        exposure="1"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-orbit="45deg 75deg 105%"
        interaction-prompt="auto"
        className="cursor-grab active:cursor-grabbing"
      >
        <div slot="progress-bar" className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-30">
             <div className="w-24 h-1 bg-white/10 overflow-hidden">
                <div className="h-full bg-scuderia-red animate-[drift_2s_linear_infinite]" style={{width: '30%'}} />
             </div>
        </div>
      </model-viewer>
      
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-accent tracking-[0.3em] bg-black/50 px-3 py-1 rounded-full border border-white/10 uppercase">
          Interact 3D
        </span>
      </div>
    </div>
  );
};

export default Car3DViewer;

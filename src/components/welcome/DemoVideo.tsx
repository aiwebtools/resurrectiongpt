
import React from "react";
import { Youtube } from "lucide-react";

const DemoVideo: React.FC = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Youtube className="text-resurrection-accent" size={20} />
        <h4 className="font-medium text-resurrection-foreground/80">
          See Resurrection GPT in Action
        </h4>
      </div>
      <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-lg border border-resurrection-primary/30 dark-glow">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/nEuxdGO-RZ4?start=4&autoplay=1&mute=0&hd=1&vq=hd1080" 
          title="Resurrection GPT Demo" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DemoVideo;

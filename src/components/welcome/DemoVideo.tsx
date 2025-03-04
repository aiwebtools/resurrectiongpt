
import React, { useState } from "react";
import { Youtube, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoVideo: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handleLoadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="mt-6 mb-6 sm:mt-8 sm:mb-8 px-2 sm:px-0">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Youtube className="text-resurrection-accent" size={18} />
        <h4 className="font-medium text-resurrection-foreground/80 text-sm sm:text-base">
          See Resurrection GPT in Action
        </h4>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-resurrection-primary/30 dark-glow">
        {!videoLoaded ? (
          <div className="relative pb-[56.25%] bg-resurrection-background/80 flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Button 
                onClick={handleLoadVideo}
                className="bg-resurrection-primary/80 hover:bg-resurrection-primary text-white rounded-full p-3 mb-2"
              >
                <Play size={28} />
              </Button>
              <p className="text-sm text-resurrection-foreground/70">Click to load video</p>
            </div>
            <img 
              src="/placeholder.svg" 
              alt="Video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
        ) : (
          <div className="pb-[56.25%] h-0 relative">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/nEuxdGO-RZ4?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1" 
              title="Resurrection GPT Demo" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoVideo;

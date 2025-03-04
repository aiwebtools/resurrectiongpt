
import React, { useState } from "react";
import { Youtube, Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const DemoVideo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setLoadProgress(100);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Simulate loading progress
  React.useEffect(() => {
    if (isLoading && loadProgress < 90) {
      const interval = setInterval(() => {
        setLoadProgress(prev => Math.min(prev + 10, 90));
      }, 300);
      
      return () => clearInterval(interval);
    }
  }, [isLoading, loadProgress]);

  return (
    <div className="mt-8 mb-8">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Youtube className="text-resurrection-accent" size={20} />
        <h4 className="font-medium text-resurrection-foreground/80">
          See Resurrection GPT in Action
        </h4>
      </div>
      <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-lg border border-resurrection-primary/30 dark-glow">
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-resurrection-background/90 z-10">
            <p className="text-resurrection-foreground/70 mb-2">Loading video...</p>
            <div className="w-full max-w-xs px-4">
              <Progress value={loadProgress} className="h-1 bg-resurrection-primary/20" />
            </div>
          </div>
        )}
        
        {!isPlaying ? (
          <div 
            onClick={handlePlayClick}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-resurrection-background/50 z-10 cursor-pointer group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-resurrection-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play 
                size={30} 
                className="text-white ml-1" 
                fill="white"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center text-white bg-resurrection-primary/70 px-3 py-2 rounded-md backdrop-blur-sm">
              <p className="text-sm">Click to load video (external content)</p>
            </div>
          </div>
        ) : (
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/nEuxdGO-RZ4?start=4&autoplay=1&rel=0&modestbranding=1" 
            title="Resurrection GPT Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            onLoad={handleIframeLoad}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default DemoVideo;


import React from "react";
import { Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const DemoVideo: React.FC = () => {
  return (
    <div className="mt-6 mb-6 md:mt-8 md:mb-8 px-2 md:px-0">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Youtube className="text-resurrection-accent" size={20} />
        <h4 className="font-medium text-resurrection-foreground/80">
          See Resurrection GPT in Action
        </h4>
      </div>
      <div className={cn(
        "relative overflow-hidden rounded-lg shadow-lg",
        "border border-resurrection-primary/30 dark-glow",
        "pb-[56.25%] h-0 w-full max-w-full"
      )}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/xPQMsNdD51k?si=YZp3h5AY3KFgH7n4&amp;start=4&amp;autoplay=1&amp;mute=0&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;rel=0&amp;hd=1&amp;vq=hd1080&amp;showinfo=0" 
          title="Resurrection GPT Demo" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DemoVideo;

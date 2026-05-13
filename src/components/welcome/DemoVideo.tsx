
import React from "react";
import { Youtube, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const DemoVideo: React.FC = () => {
  const handleResurrectionClick = () => {
    window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank");
  };

  return (
    <div className="mt-6 mb-6 md:mt-8 md:mb-8 px-2 md:px-0">
      {/* Giant circular CTA — prominent on mobile, also visible on desktop */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleResurrectionClick}
          aria-label="Use Resurrection GPT Now"
          className={cn(
            "relative flex flex-col items-center justify-center text-center",
            "rounded-full font-bold text-white uppercase tracking-wide",
            "h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56",
            "px-4 leading-tight",
            "bg-gradient-to-br from-resurrection-primary via-resurrection-secondary to-resurrection-accent",
            "shadow-[0_0_40px_rgba(138,43,226,0.8),0_0_80px_rgba(0,191,255,0.5)]",
            "border-4 border-yellow-400",
            "active:scale-95 hover:scale-105 transition-transform duration-300",
            "animate-pulse-slow"
          )}
        >
          <ExternalLink className="h-6 w-6 mb-2" />
          <span className="text-base sm:text-lg md:text-xl">USE</span>
          <span className="text-lg sm:text-xl md:text-2xl">Resurrection</span>
          <span className="text-lg sm:text-xl md:text-2xl">GPT NOW</span>
        </button>
      </div>

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
          src="https://www.youtube.com/embed/xPQMsNdD51k?si=YZp3h5AY3KFgH7n4&amp;start=4&amp;autoplay=0&amp;mute=0&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;rel=0&amp;hd=1&amp;vq=hd1080&amp;showinfo=0"
          title="Resurrection GPT Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DemoVideo;

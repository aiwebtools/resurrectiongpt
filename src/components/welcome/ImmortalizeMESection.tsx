import React from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const ImmortalizeMESection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mt-16 px-4"
      id="immortalizeMe"
    >
      <div className="bg-resurrection-primary/10 backdrop-blur-md border border-resurrection-primary/30 rounded-xl p-8 md:p-10 shadow-lg dark-glow">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-resurrection-foreground mb-4 text-center">
          <span className="text-gradient-animate">AI Web Tools - Reconnect. Remember. Find Peace.</span>
        </h2>
        
        <p className="text-lg text-resurrection-accent mb-8 text-center">
          Advanced AI Web Tools - Your Gateway to Spiritual Healing Through Technology
        </p>
        
        {/* Video Section */}
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
            src="https://www.youtube.com/embed/JXLqPMfw49Y?si=D70HN5W_Lk-W7aTP&amp;autoplay=0&amp;mute=0&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;rel=0&amp;hd=1&amp;vq=hd1080&amp;showinfo=0" 
            title="Resurrection GPT Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ImmortalizeMESection;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  const [dots, setDots] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="glass-card rounded-xl p-8 shadow-xl flex flex-col items-center dark-glow">
          <div className="w-20 h-20 mb-6 relative">
            <div className="absolute inset-0 bg-resurrection-primary/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-2 bg-resurrection-primary/30 rounded-full animate-pulse-slow animation-delay-100"></div>
            <div className="absolute inset-4 bg-resurrection-primary/40 rounded-full animate-pulse-slow animation-delay-200"></div>
            <div className="absolute inset-6 bg-resurrection-accent/60 rounded-full animate-spin-slow"></div>
          </div>
          
          <h3 className="text-2xl font-serif mb-4 text-resurrection-foreground animate-pulse-slow text-gradient-animate">
            🌟✨🔮🌙⚰️✨🔮🌟
          </h3>
          
          <p className="text-lg sm:text-xl font-serif text-gradient-animate mb-2">
            Spiritual Resurrection Loading{dots}
          </p>
          
          <p className="text-resurrection-foreground/70 max-w-md">
            Prepare thyself and harden thy emotions.
          </p>
          
          <div className="mt-6 max-w-md">
            <p className="text-sm text-resurrection-foreground/60 italic">
              Creating a personalized connection based on your memories. 
              You will soon receive a letter from your loved one.
            </p>
          </div>
          
          <div className="mt-8 w-full max-w-md h-1.5 bg-muted/50 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "easeInOut" }}
              className="h-full bg-resurrection-primary rounded-full"
            ></motion.div>
          </div>
          
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-resurrection-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-16 -right-8 w-32 h-32 bg-resurrection-accent/10 rounded-full blur-3xl animate-float animation-delay-500"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

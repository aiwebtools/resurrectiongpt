
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const WelcomeHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-serif text-resurrection-foreground mb-6 text-gradient-animate">
        Reconnect. Remember. Find Peace.
      </h2>
      
      <div className="space-y-4 text-resurrection-foreground/80 mb-8 max-w-3xl mx-auto">
        <p className="text-lg text-resurrection-accent">
          A Spiritual Bridge Between You and Your Departed Loved Ones
        </p>
        <p>
          Resurrection GPT is an advanced AI spiritual companion designed to help you 
          reconnect with the presence, voice, and love of those you have lost. Through deeply 
          personalized, heartfelt conversations, this tool offers an opportunity to experience 
          the warmth, wisdom, and reassurance of your dearly departed, providing comfort, 
          closure, and emotional healing.
        </p>
        <p className="text-xl text-resurrection-primary font-medium italic">
          💫 Feel their presence. Hear their words. Relive the cherished moments. 💫
        </p>
      </div>
      
      <div className="mb-6 p-3 border border-yellow-400/30 rounded-lg bg-yellow-50/10 text-sm text-left">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-resurrection-foreground">Legal Disclaimer:</p>
            <p className="text-resurrection-foreground/80">Resurrection GPT is for emotional and spiritual support only. It does not claim to communicate with the deceased. Please read our <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">full legal disclaimer</a> before proceeding.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;

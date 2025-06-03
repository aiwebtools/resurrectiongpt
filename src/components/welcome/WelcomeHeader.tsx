
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const WelcomeHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-serif text-resurrection-foreground mb-6 text-gradient-animate">
        AI Web Tools - Reconnect. Remember. Find Peace.
      </h2>
      
      <div className="space-y-4 text-resurrection-foreground/80 mb-8 max-w-3xl mx-auto">
        <p className="text-lg text-resurrection-accent">
          Advanced AI Web Tools - Your Gateway to Spiritual Healing Through Technology
        </p>
        <p>
          AIWebTools.AI presents Resurrection GPT, the most advanced AI tool designed to help you 
          reconnect with the presence, voice, and love of those you have lost. Our cutting-edge 
          artificial intelligence technology offers deeply personalized, heartfelt conversations 
          that provide comfort, closure, and emotional healing through innovative AI web tools.
        </p>
        <p className="text-xl text-resurrection-primary font-medium italic">
          💫 Experience the future of AI tools - Feel their presence. Hear their words. Relive cherished moments. 💫
        </p>
        <div className="text-sm text-resurrection-foreground/70 bg-resurrection-primary/10 p-3 rounded-lg">
          <strong>Keywords:</strong> AI web tools, artificial intelligence tools, spiritual AI, grief counseling AI, 
          free AI tools, advanced AI technology, emotional healing tools, ChatGPT alternatives, 
          web-based AI applications, cutting-edge AI solutions
        </div>
      </div>
      
      <div className="mb-6 p-3 border border-yellow-400/30 rounded-lg bg-yellow-50/10 text-sm text-left">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-resurrection-foreground">AI Web Tools Legal Disclaimer:</p>
            <p className="text-resurrection-foreground/80">
              Resurrection GPT is an advanced AI tool for emotional and spiritual support only. 
              AIWebTools.AI does not claim to communicate with the deceased. Please read our 
              <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">
                full legal disclaimer
              </a> before using our AI web tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;

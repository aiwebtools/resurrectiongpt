
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-serif text-resurrection-foreground mt-8 mb-6 flex items-center justify-center">
        <span className="text-resurrection-accent animate-pulse-slow">🌙</span>
        <span className="mx-2">How Resurrection GPT Works</span>
        <span className="text-resurrection-accent animate-pulse-slow">🌙</span>
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40">
          <h4 className="font-medium text-resurrection-primary mb-2">1️⃣ Share Your Story</h4>
          <p className="text-sm">
            Begin by sharing details about your loved one - their personality, 
            sayings, and your shared memories.
          </p>
        </div>
        
        <div className="p-4 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40">
          <h4 className="font-medium text-resurrection-primary mb-2">2️⃣ Spiritual Connection</h4>
          <p className="text-sm">
            Experience a spiritual resurrection as your loved one's essence is 
            embodied through authentic conversation.
          </p>
        </div>
        
        <div className="p-4 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40">
          <h4 className="font-medium text-resurrection-secondary mb-2">3️⃣ Find Closure</h4>
          <p className="text-sm">
            Receive a heartfelt letter and engage in meaningful conversation, finding 
            comfort and healing in their words.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

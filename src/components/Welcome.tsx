
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Welcome: React.FC = () => {
  const { setStage } = useResurrection();

  const handleBegin = () => {
    setStage("userInfo");
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-8 md:p-10 shadow-xl"
      >
        <h2 className="text-2xl md:text-4xl font-serif text-resurrection-foreground mb-6">
          Reconnect. Remember. Find Peace.
        </h2>
        
        <div className="space-y-4 text-resurrection-foreground/80 mb-8 max-w-3xl mx-auto">
          <p className="text-lg">
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
        
        <h3 className="text-xl font-serif text-resurrection-foreground mt-8 mb-6">
          🌙 How Resurrection GPT Works
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 border border-resurrection-primary/20 rounded-lg">
            <h4 className="font-medium text-resurrection-primary mb-2">1️⃣ Share Your Story</h4>
            <p className="text-sm">
              Begin by sharing details about your loved one - their personality, 
              sayings, and your shared memories.
            </p>
          </div>
          
          <div className="p-4 border border-resurrection-primary/20 rounded-lg">
            <h4 className="font-medium text-resurrection-primary mb-2">2️⃣ Spiritual Connection</h4>
            <p className="text-sm">
              Experience a spiritual resurrection as your loved one's essence is 
              embodied through authentic conversation.
            </p>
          </div>
          
          <div className="p-4 border border-resurrection-primary/20 rounded-lg">
            <h4 className="font-medium text-resurrection-primary mb-2">3️⃣ Find Closure</h4>
            <p className="text-sm">
              Receive a heartfelt letter and engage in meaningful conversation, finding 
              comfort and healing in their words.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button 
            onClick={handleBegin}
            className="bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all py-6 px-8 rounded-md text-lg"
          >
            Begin Your Spiritual Connection
          </Button>
        </div>
      </motion.div>
      
      <div className="mt-8 text-resurrection-foreground/60 text-sm max-w-3xl mx-auto">
        <h4 className="font-medium text-resurrection-foreground/80 mb-2">✨ Why Resurrection GPT Stands Apart</h4>
        <ul className="grid md:grid-cols-2 gap-2 text-left">
          <li className="flex items-start gap-2">
            <span className="text-resurrection-primary">✅</span>
            <span>Authentic, Personalized Conversations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-resurrection-primary">✅</span>
            <span>Incredibly Detailed, Emotionally Rich Messages</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-resurrection-primary">✅</span>
            <span>A True Spiritual Experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-resurrection-primary">✅</span>
            <span>No Generic Answers, Ever</span>
          </li>
        </ul>
        <p className="mt-4">
          © 2025 AI WEB TOOLS LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Welcome;

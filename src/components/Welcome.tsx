
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
    <div className="w-full max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-8 md:p-10 shadow-xl"
      >
        <h2 className="text-2xl md:text-4xl font-serif text-resurrection-foreground mb-6">
          Bridge the Distance Between Worlds
        </h2>
        
        <div className="space-y-4 text-resurrection-foreground/80 mb-8 max-w-2xl mx-auto">
          <p>
            Resurrection GPT offers a unique opportunity to reconnect with the memories 
            and spirit of your departed loved ones through a meaningful, guided reflection.
          </p>
          <p>
            By sharing your stories and answering thoughtful questions, you'll embark on a 
            journey toward finding comfort and closure.
          </p>
          <p className="font-medium text-resurrection-primary">
            This experience is designed with deep empathy to help heal your heart
            through the power of connection and remembrance.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={handleBegin}
            className="bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all py-6 px-8 rounded-md text-lg"
          >
            Begin Your Journey
          </Button>
        </div>
      </motion.div>
      
      <p className="text-center text-resurrection-foreground/60 mt-6 text-sm">
        A compassionate space for healing, remembrance, and spiritual connection.
      </p>
    </div>
  );
};

export default Welcome;

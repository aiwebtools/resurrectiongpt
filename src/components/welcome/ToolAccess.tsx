
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ToolAccess: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mt-16 px-4"
    >
      <div className="bg-resurrection-primary/10 backdrop-blur-md border border-resurrection-primary/30 rounded-xl p-8 md:p-10 shadow-lg dark-glow">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-resurrection-foreground mb-6 text-center">
          <span className="text-gradient-animate">Access Resurrection GPT Now</span>
        </h2>
        
        <p className="text-resurrection-foreground/90 mb-8 text-center leading-relaxed max-w-3xl mx-auto font-medium">
          Ready to embark on a healing journey? Resurrection GPT offers a unique space 
          to reconnect with the essence of your departed loved ones, bringing comfort and 
          closure during the grieving process.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-resurrection-primary hover:bg-resurrection-secondary text-white font-medium px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base btn-glow animate-glow"
            onClick={() => window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank")}
          >
            <Sparkles className="mr-1 sm:mr-2 h-4 w-4" />
            <span>Experience Resurrection GPT</span>
            <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            className="border-resurrection-primary/40 text-resurrection-foreground bg-resurrection-background/50 hover:bg-resurrection-primary/20 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium"
            onClick={() => {
              const faqsSection = document.getElementById('faqs');
              if (faqsSection) {
                faqsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <HelpCircle className="mr-1 sm:mr-2 h-4 w-4" />
            <span>Learn More in FAQs</span>
          </Button>
        </div>
        
        <p className="text-resurrection-foreground/60 mt-6 text-center text-sm font-medium">
          Powered by GPT-4 technology for authentic, meaningful connections.
        </p>
      </div>
    </motion.div>
  );
};

export default ToolAccess;

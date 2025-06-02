
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
      className="w-full max-w-6xl mx-auto mt-20 px-6"
    >
      <div className="bg-gradient-to-br from-resurrection-primary/15 to-resurrection-accent/15 backdrop-blur-xl border border-resurrection-primary/40 rounded-2xl divine-padding shadow-2xl dark-glow ethereal-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-resurrection-foreground mb-8 text-center">
            <span className="text-gradient-animate">Access Resurrection GPT Now</span>
          </h2>
          
          <p className="text-resurrection-foreground/90 mb-12 text-center leading-relaxed max-w-4xl mx-auto font-medium text-lg">
            Ready to embark on a healing journey? Resurrection GPT offers a unique space 
            to reconnect with the essence of your departed loved ones, bringing comfort and 
            closure during the grieving process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-gradient-to-r from-resurrection-primary to-resurrection-secondary hover:from-resurrection-secondary hover:to-resurrection-accent text-white font-semibold px-8 py-6 text-lg btn-glow"
              onClick={() => window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank")}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              <span>Experience Resurrection GPT</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-resurrection-accent/90 to-resurrection-secondary text-white font-semibold px-8 py-6 text-lg"
              onClick={() => window.open("https://immortalizeme.lovable.app/?via=aiwebtools", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              <span>ImmortalizeME</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              className="border-resurrection-primary/50 text-resurrection-foreground bg-resurrection-background/30 hover:bg-resurrection-primary/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={() => {
                const faqsSection = document.getElementById('faqs');
                if (faqsSection) {
                  faqsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              <span>Learn More in FAQs</span>
            </Button>
          </div>
          
          <p className="text-resurrection-foreground/70 mt-8 text-center text-base font-medium">
            ✨ Powered by GPT-4 technology for authentic, meaningful connections ✨
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolAccess;

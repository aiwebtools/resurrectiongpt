
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Cross, HelpCircle, ExternalLink } from "lucide-react";

const Welcome: React.FC = () => {
  const { setStage } = useResurrection();

  const handleBegin = () => {
    setStage("userInfo");
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:support@ai-webtools.com";
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+14758008096";
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow"
      >
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button 
            onClick={handleBegin}
            className="bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all py-6 px-8 rounded-md text-lg btn-glow animate-glow"
          >
            Begin Your Spiritual Connection
            <ArrowRight className="ml-2" />
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.location.hash = '#faq'}
            className="border-resurrection-primary/30 text-resurrection-foreground hover:bg-resurrection-primary/20 py-6 px-8 rounded-md text-lg"
          >
            <HelpCircle className="mr-2" />
            Have Questions? See FAQ
          </Button>
        </div>
      </motion.div>
      
      <div className="mt-8 text-resurrection-foreground/60 text-sm max-w-3xl mx-auto">
        <h4 className="font-medium text-resurrection-foreground/80 mb-2 flex items-center justify-center">
          <span className="text-resurrection-accent">✨</span>
          <span className="mx-2">Why Resurrection GPT Stands Apart</span>
          <span className="text-resurrection-accent">✨</span>
        </h4>
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
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="mb-2 text-resurrection-foreground/70">
            Contact Us
          </p>
          <div className="flex justify-center gap-4 items-center">
            <a 
              href="mailto:support@ai-webtools.com" 
              onClick={handleEmailClick}
              className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <Mail size={16} />
              <span>support@ai-webtools.com</span>
            </a>
            <span className="text-resurrection-foreground/30">|</span>
            <a 
              href="tel:+14758008096" 
              onClick={handlePhoneClick}
              className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <Phone size={16} />
              <span>(475) 800-8096</span>
            </a>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <ExternalLink size={14} />
              <span>Privacy Policy</span>
            </a>
            <span className="text-resurrection-foreground/30">|</span>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <ExternalLink size={14} />
              <span>Terms of Service</span>
            </a>
            <span className="text-resurrection-foreground/30">|</span>
            <a 
              href="#faq"
              className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <HelpCircle size={14} />
              <span>FAQ</span>
            </a>
          </div>
          <p className="mt-4">
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

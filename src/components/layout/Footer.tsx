
import React from "react";
import { Mail, Phone, Cross, ExternalLink, FileText, HelpCircle, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:support@ai-webtools.com";
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+14758008096";
  };

  return (
    <footer className="w-full py-4 px-4 text-resurrection-foreground/50 text-xs relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <h2 className="text-xl font-serif font-light tracking-wide text-resurrection-foreground flex items-center">
                <span className="text-gradient-animate mr-2">🔮</span> 
                Resurrection
                <Cross className="mx-2 text-resurrection-accent h-5 w-5 animate-pulse-slow" />
                <span className="text-resurrection-primary font-normal">GPT</span>
              </h2>
            </div>
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-resurrection-foreground/60 hover:text-resurrection-primary transition-colors duration-300 mt-1 inline-block"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>
          
          <div className="flex justify-center gap-4">
            <a 
              href="#disclaimer" 
              className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
            >
              <FileText size={12} className="mr-1 group-hover:animate-pulse-slow" />
              <span className="group-hover:underline">Full Disclaimer</span>
            </a>
            <span>|</span>
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 group"
            >
              <span className="group-hover:underline">Privacy Policy</span>
            </a>
            <span>|</span>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 group"
            >
              <span className="group-hover:underline">Terms of Service</span>
            </a>
            <span>|</span>
            <a 
              href="#faq" 
              className="hover:text-resurrection-primary transition-colors duration-300 group"
            >
              <span className="group-hover:underline">FAQ</span>
            </a>
            <span>|</span>
            <a 
              href="https://www.AiWebTools.Ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
            >
              <ExternalLink size={12} className="mr-1 group-hover:rotate-45 transition-transform duration-300" />
              <span className="group-hover:underline">More AI Tools</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-resurrection-primary transition-colors duration-300"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <div className="mt-3 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-resurrection-primary/10 border-resurrection-primary/30 hover:bg-resurrection-primary/20 text-resurrection-foreground"
              >
                <Server className="mr-2 h-4 w-4" />
                AI TOOL MAINFRAME
              </Button>
            </a>
          </div>
        </div>
        
        <p className="mt-3 flex items-center justify-center gap-4">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
          >
            <Mail size={12} className="mr-1 group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span className="group-hover:underline">support@ai-webtools.com</span>
          </a> 
          <span>|</span>
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
          >
            <Phone size={12} className="mr-1 group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:underline">(475) 800-8096</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

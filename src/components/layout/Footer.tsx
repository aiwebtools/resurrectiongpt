
import React from "react";
import { Mail, Phone, Cross, ExternalLink, FileText, HelpCircle, Server, MessageSquareQuote } from "lucide-react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-6 px-4 text-resurrection-foreground/50 text-xs relative z-10">
      <div className="container mx-auto max-w-lg md:max-w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="text-xl font-serif font-medium tracking-wide text-resurrection-foreground flex items-center">
                <span className="text-gradient-animate mr-2">🔮</span> 
                Resurrection
                <Cross className="mx-2 text-resurrection-accent h-5 w-5 animate-pulse-slow" />
                <span className="text-resurrection-primary font-semibold">GPT</span>
              </h2>
            </div>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-resurrection-foreground/70 hover:text-resurrection-primary transition-colors duration-300 mt-1 inline-block font-medium"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6 md:mb-0">
            <a 
              href="#disclaimer" 
              className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group font-medium"
            >
              <FileText size={12} className="mr-1.5 group-hover:animate-pulse-slow" />
              <span className="group-hover:underline">Full Disclaimer</span>
            </a>
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 group flex items-center font-medium"
            >
              <ExternalLink size={12} className="mr-1.5 group-hover:rotate-45 transition-transform duration-300" />
              <span className="group-hover:underline">Privacy Policy</span>
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 group flex items-center font-medium"
            >
              <ExternalLink size={12} className="mr-1.5 group-hover:rotate-45 transition-transform duration-300" />
              <span className="group-hover:underline">Terms of Service</span>
            </a>
            <Button 
              variant="ghost"
              size="sm"
              className="hover:text-resurrection-primary hover:bg-resurrection-primary/10 transition-colors duration-300 text-xs h-auto p-0 pl-0 font-medium"
              onClick={() => window.location.hash = 'faq'}
            >
              <HelpCircle size={12} className="mr-1.5 animate-pulse-slow" />
              <span className="group-hover:underline">Full FAQ</span>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-resurrection-primary transition-colors duration-300 text-center md:text-left mb-4 md:mb-0 font-medium"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-resurrection-primary/10 border-resurrection-primary/30 hover:bg-resurrection-primary/20 text-resurrection-foreground font-medium"
              >
                <Server className="mr-2 h-4 w-4" />
                AI TOOL MAINFRAME
              </Button>
            </a>
            
            <Button
              variant="outline"
              size="sm"
              className="bg-resurrection-primary/10 border-resurrection-primary/30 hover:bg-resurrection-primary/20 text-resurrection-foreground font-medium"
              onClick={() => scrollToSection('testimonials')}
            >
              <MessageSquareQuote className="mr-2 h-4 w-4" />
              Testimonials
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group font-medium"
          >
            <Mail size={12} className="mr-1.5 group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span className="group-hover:underline">support@ai-webtools.com</span>
          </a> 
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group font-medium"
          >
            <Phone size={12} className="mr-1.5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:underline">(475) 800-8096</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

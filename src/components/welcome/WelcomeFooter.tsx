
import React from "react";
import { Mail, Phone, ExternalLink, HelpCircle, FileText, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeFooter: React.FC = () => {
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
    <div className="mt-8 pt-6 border-t border-white/10 text-center">
      <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-300/20 backdrop-blur-sm">
        <p className="text-xs text-resurrection-foreground/80 font-medium">
          ✨ For informational, educational, and research purposes only ✨
        </p>
      </div>
      
      <div className="mb-6">
        <p className="mb-3 text-resurrection-foreground/70 text-sm font-medium">
          Contact Us
        </p>
        <div className="flex flex-col gap-3">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-sm font-medium"
          >
            <Mail size={14} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span className="group-hover:underline">support@ai-webtools.com</span>
          </a>
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-sm font-medium"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:underline">(475) 800-8096</span>
          </a>
        </div>
      </div>
      
      <div className="mb-8 flex flex-col gap-3">
        <a 
          href="#disclaimer"
          className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm font-medium"
        >
          <FileText size={12} className="group-hover:animate-pulse-slow" />
          <span className="group-hover:underline">Full Disclaimer</span>
        </a>
        <a 
          href="https://openai.com/policies/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm font-medium"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Privacy Policy</span>
        </a>
        <a 
          href="https://aiwebtools.lovable.app/disclaimers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm font-medium"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Terms of Service</span>
        </a>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <Button 
            variant="outline"
            size="sm"
            className="bg-resurrection-primary/10 border-resurrection-primary/30 hover:bg-resurrection-primary/20 text-resurrection-foreground font-medium text-xs py-1 px-2 h-auto"
            onClick={() => window.location.hash = 'faq'}
          >
            <HelpCircle size={10} className="mr-1 animate-pulse-slow" />
            <span>Full FAQ</span>
          </Button>
          
          <Button 
            variant="outline"
            size="sm"
            className="bg-resurrection-primary/10 border-resurrection-primary/30 hover:bg-resurrection-primary/20 text-resurrection-foreground font-medium text-xs py-1 px-2 h-auto"
            onClick={() => scrollToSection('testimonials')}
          >
            <MessageSquareQuote size={10} className="mr-1 animate-pulse-slow" />
            <span>Testimonials</span>
          </Button>
        </div>
      </div>
      
      <p className="text-xs text-resurrection-foreground/60 font-medium">
        © 2025 AI WEB TOOLS LLC. All rights reserved.
      </p>
    </div>
  );
};

export default WelcomeFooter;

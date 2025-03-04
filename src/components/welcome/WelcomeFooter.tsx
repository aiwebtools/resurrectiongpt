
import React from "react";
import { Mail, Phone, ExternalLink, HelpCircle, FileText } from "lucide-react";

const WelcomeFooter: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:support@ai-webtools.com";
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+14758008096";
  };

  return (
    <div className="mt-6 pt-6 border-t border-white/10">
      <p className="mb-4 text-resurrection-foreground/70 text-sm sm:text-base">
        Contact Us
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center">
        <a 
          href="mailto:support@ai-webtools.com" 
          onClick={handleEmailClick}
          className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm"
        >
          <Mail size={14} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
          <span className="group-hover:underline">support@ai-webtools.com</span>
        </a>
        <span className="hidden sm:inline text-resurrection-foreground/30">|</span>
        <a 
          href="tel:+14758008096" 
          onClick={handlePhoneClick}
          className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm"
        >
          <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="group-hover:underline">(475) 800-8096</span>
        </a>
      </div>
      
      <div className="mt-6 grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 text-xs">
        <a 
          href="#disclaimer"
          className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <FileText size={12} className="group-hover:animate-pulse-slow" />
          <span className="group-hover:underline">Full Disclaimer</span>
        </a>
        <a 
          href="https://openai.com/policies/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Privacy Policy</span>
        </a>
        <a 
          href="https://aiwebtools.ai/terms-of-services" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Terms of Service</span>
        </a>
        <a 
          href="#faq"
          className="flex items-center gap-1 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <HelpCircle size={12} className="group-hover:animate-pulse-slow" />
          <span className="group-hover:underline">FAQ</span>
        </a>
      </div>
      
      <div className="mt-6 text-xs sm:text-sm text-resurrection-foreground/70">
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-resurrection-primary transition-colors duration-300"
        >
          © 2025 AI WEB TOOLS LLC. All rights reserved.
        </a>
      </div>
    </div>
  );
};

export default WelcomeFooter;

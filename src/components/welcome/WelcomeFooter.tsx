
import React from "react";
import { Mail, Phone, ExternalLink, HelpCircle } from "lucide-react";

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
  );
};

export default WelcomeFooter;


import React from "react";
import { Mail, Phone, ExternalLink, HelpCircle, FileText } from "lucide-react";
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

  return (
    <div className="mt-8 pt-6 border-t border-white/10 text-center">
      <div className="mb-6">
        <p className="mb-3 text-resurrection-foreground/70 text-sm">
          Contact Us
        </p>
        <div className="flex flex-col gap-3">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-sm"
          >
            <Mail size={14} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span className="group-hover:underline">support@ai-webtools.com</span>
          </a>
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-sm"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:underline">(475) 800-8096</span>
          </a>
        </div>
      </div>
      
      <div className="mb-8 flex flex-col gap-3">
        <a 
          href="#disclaimer"
          className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm"
        >
          <FileText size={12} className="group-hover:animate-pulse-slow" />
          <span className="group-hover:underline">Full Disclaimer</span>
        </a>
        <a 
          href="https://openai.com/policies/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Privacy Policy</span>
        </a>
        <a 
          href="https://aiwebtools.ai/terms-of-services" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-xs sm:text-sm"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Terms of Service</span>
        </a>

        <Button 
          variant="outline"
          size="sm"
          className="mx-auto bg-resurrection-primary/10 border-resurrection-primary/30 hover:bg-resurrection-primary/20 text-resurrection-foreground font-normal px-6"
          onClick={() => window.location.hash = 'faq'}
        >
          <HelpCircle size={12} className="mr-2 animate-pulse-slow" />
          Frequently Asked Questions
        </Button>
      </div>
      
      <p className="text-xs text-resurrection-foreground/60">
        © 2025 AI WEB TOOLS LLC. All rights reserved.
      </p>
    </div>
  );
};

export default WelcomeFooter;

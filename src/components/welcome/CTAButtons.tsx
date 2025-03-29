
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Sparkles, ExternalLink } from "lucide-react";

interface CTAButtonsProps {
  handleBegin: () => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ handleBegin }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
      <Button 
        onClick={handleBegin}
        className="bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all py-5 px-4 sm:px-8 rounded-md text-sm sm:text-lg btn-glow animate-glow font-medium"
      >
        <Sparkles className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base">Begin Your Spiritual Connection</span>
        <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
      
      <Button
        variant="outline"
        onClick={() => window.location.hash = '#faqs'}
        className="border-resurrection-primary/30 text-resurrection-foreground hover:bg-resurrection-primary/20 py-5 px-4 sm:px-8 rounded-md text-sm sm:text-lg font-medium"
      >
        <HelpCircle className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base">Have Questions? See FAQ</span>
      </Button>
      
      <Button
        variant="secondary"
        onClick={() => window.open("https://immortalizeme.lovable.app/?via=aiwebtools", "_blank")}
        className="bg-resurrection-accent/80 hover:bg-resurrection-accent text-white transition-all py-5 px-4 sm:px-8 rounded-md text-sm sm:text-lg font-medium"
      >
        <ExternalLink className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base">ImmortalizeME</span>
        <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
};

export default CTAButtons;

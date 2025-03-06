
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";

interface CTAButtonsProps {
  handleBegin: () => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ handleBegin }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
      <Button 
        onClick={handleBegin}
        className="bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all py-6 px-8 rounded-md text-lg btn-glow animate-glow font-medium"
      >
        <Sparkles className="mr-2" />
        Begin Your Spiritual Connection
        <ArrowRight className="ml-2" />
      </Button>
      
      <Button
        variant="outline"
        onClick={() => window.location.hash = '#faqs'}
        className="border-resurrection-primary/30 text-resurrection-foreground hover:bg-resurrection-primary/20 py-6 px-8 rounded-md text-lg font-medium"
      >
        <HelpCircle className="mr-2" />
        Have Questions? See FAQ
      </Button>
    </div>
  );
};

export default CTAButtons;

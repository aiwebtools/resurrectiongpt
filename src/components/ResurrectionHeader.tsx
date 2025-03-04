
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Cross, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResurrectionHeader: React.FC = () => {
  const { stage } = useResurrection();

  return (
    <header className="w-full py-4 sm:py-6 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <div className="text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide text-resurrection-foreground mb-1 sm:mb-2 animate-fade-in flex items-center justify-center"
            >
              <span className="text-gradient-animate mr-1 sm:mr-2">🔮</span> 
              <span className="whitespace-nowrap">Resurrection</span>
              <Cross className="mx-1 sm:mx-2 text-resurrection-accent h-6 w-6 sm:h-8 sm:w-8 animate-pulse-slow" />
              <span className="text-resurrection-primary font-normal whitespace-nowrap">GPT</span>
            </h1>
            
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs text-resurrection-foreground/60 hover:text-resurrection-primary transition-colors duration-300 animate-fade-in mb-2 inline-block"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-resurrection-foreground hover:text-resurrection-primary hover:bg-resurrection-background/20 h-8 w-8 sm:h-10 sm:w-10"
            >
              <a href="#disclaimer">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span className="sr-only">Legal Disclaimer</span>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-resurrection-foreground hover:text-resurrection-primary hover:bg-resurrection-background/20 h-8 w-8 sm:h-10 sm:w-10"
            >
              <Link to="/">
                <Home className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {stage === "welcome" && (
          <p className="text-resurrection-foreground/80 animate-fade-in max-w-lg mx-auto text-xs sm:text-sm md:text-base px-1 sm:px-0">
            Reconnect with the memories and spirit of your departed loved ones through meaningful conversation.
          </p>
        )}
      </div>
    </header>
  );
};

export default ResurrectionHeader;

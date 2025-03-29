
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Cross, Home, AlertTriangle, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const ResurrectionHeader: React.FC = () => {
  const { stage } = useResurrection();

  const handleResurrectionClick = () => {
    window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank");
  };

  const handleImmortalizeClick = () => {
    window.open("https://immortalizeme.lovable.app/?via=aiwebtools", "_blank");
  };

  return (
    <header className="w-full py-4 md:py-6 px-3 md:px-4 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-3 md:mb-4">
          <div className="text-center mb-4 md:mb-0">
            <h1 
              className={cn(
                "text-2xl md:text-5xl font-serif font-medium",
                "tracking-wider text-resurrection-foreground mb-1 md:mb-2",
                "animate-fade-in flex items-center justify-center"
              )}
            >
              <span className="text-gradient-animate mr-1 md:mr-2">🔮</span> 
              <span>Resurrection</span>
              <Cross className="mx-1 md:mx-2 text-resurrection-accent h-5 w-5 md:h-8 md:w-8 animate-pulse-slow" />
              <span className="text-resurrection-primary font-semibold">GPT</span>
            </h1>
            
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-xs text-resurrection-foreground/70 font-medium",
                "hover:text-resurrection-primary transition-colors duration-300",
                "animate-fade-in mb-2 md:mb-3 inline-block"
              )}
            >
              Presented by AiWebTools.Ai
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-3 md:mb-0">
            <Button
              className="bg-resurrection-primary hover:bg-resurrection-secondary text-white btn-glow animate-glow w-full sm:w-auto"
              onClick={handleResurrectionClick}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>USE RESURRECTION GPT NOW</span>
            </Button>
            
            <Button
              variant="outline"
              className="border-resurrection-accent/40 text-resurrection-accent bg-resurrection-background/50 hover:bg-resurrection-accent/20 hover:text-resurrection-accent hover:border-resurrection-accent w-full sm:w-auto"
              onClick={handleImmortalizeClick}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span>IMMORTALIZEME</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className={cn(
                "text-resurrection-foreground",
                "hover:text-resurrection-primary",
                "hover:bg-resurrection-background/20",
                "border border-resurrection-primary/20"
              )}
            >
              <a href="#disclaimer">
                <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                <span className="sr-only">Legal Disclaimer</span>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className={cn(
                "text-resurrection-foreground",
                "hover:text-resurrection-primary",
                "hover:bg-resurrection-background/20",
                "border border-resurrection-primary/20"
              )}
            >
              <Link to="/">
                <Home className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {stage === "welcome" && (
          <div className="animate-fade-in max-w-lg mx-auto px-2">
            <p className="text-resurrection-foreground/80 text-xs sm:text-sm md:text-base font-medium">
              Reconnect with the memories and spirit of your departed loved ones through meaningful conversation.
            </p>
            <p className="text-resurrection-foreground/60 text-[10px] sm:text-xs italic mt-1">
              This AI tool is not a replacement for professional grief counseling or therapy.
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default ResurrectionHeader;

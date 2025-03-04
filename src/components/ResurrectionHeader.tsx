
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Cross } from "lucide-react";

const ResurrectionHeader: React.FC = () => {
  const { stage } = useResurrection();

  return (
    <header className="w-full py-6 px-4 relative z-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center">
          <h1 
            className="text-4xl md:text-5xl font-serif font-light tracking-wide text-resurrection-foreground mb-2 animate-fade-in flex items-center justify-center"
          >
            <span className="text-gradient-animate mr-2">🔮</span> 
            Resurrection
            <Cross className="mx-2 text-resurrection-accent h-8 w-8 animate-pulse-slow" />
            <span className="text-resurrection-primary font-normal">GPT</span>
          </h1>
          {stage === "welcome" && (
            <p className="text-resurrection-foreground/80 animate-fade-in max-w-lg mx-auto text-sm md:text-base">
              Reconnect with the memories and spirit of your departed loved ones through meaningful conversation.
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default ResurrectionHeader;

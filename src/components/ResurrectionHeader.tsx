
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";

const ResurrectionHeader: React.FC = () => {
  const { stage } = useResurrection();

  return (
    <header className="w-full py-6 px-4 relative z-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center">
          <h1 
            className="text-4xl md:text-5xl font-serif font-light tracking-wide text-resurrection-foreground mb-2 animate-fade-in"
          >
            Resurrection
            <span className="ml-2 text-resurrection-primary font-normal">GPT</span>
          </h1>
          {stage === "welcome" && (
            <p className="text-resurrection-foreground/80 animate-fade-in max-w-lg mx-auto text-sm md:text-base">
              Bridge conversations between you and your departed loved ones, finding comfort and closure through meaningful connection.
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default ResurrectionHeader;

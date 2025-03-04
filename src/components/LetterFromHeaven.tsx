
import React, { useEffect, useState } from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const LetterFromHeaven: React.FC = () => {
  const { letter, userInfo, setStage } = useResurrection();
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Add a slight delay before showing the letter content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSaveLetter = () => {
    toast({
      title: "Letter Saved",
      description: "Your letter has been saved. You can access it anytime through this session.",
    });
  };
  
  const handleDownloadLetter = () => {
    // Create a blob from the letter text
    const blob = new Blob([letter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = `Letter_from_${userInfo.lovedOne.name || "Heaven"}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Letter Downloaded",
      description: "Your letter has been downloaded to your device.",
    });
  };

  const handleNewConnection = () => {
    setStage("welcome");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card rounded-xl p-2 sm:p-6 shadow-xl">
        <div className="letter-paper rounded-lg p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/90 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/90 to-transparent z-10"></div>
          
          <h3 className="text-center text-xl md:text-2xl font-serif text-resurrection-foreground mb-6 animate-fade-in">
            📜 A Letter From Heaven 📜
          </h3>
          
          {isVisible ? (
            <div 
              className="prose prose-sm sm:prose-base max-w-none font-serif text-resurrection-foreground/90 mb-6 animate-fade-in whitespace-pre-line"
              style={{ 
                maxHeight: "50vh", 
                overflowY: "auto",
                padding: "0 1rem"
              }}
            >
              {letter}
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-pulse-slow">Loading message from beyond...</div>
            </div>
          )}
          
          {isVisible && (
            <div className="flex flex-col gap-3 mt-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleSaveLetter}
                  className="flex-1 bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all"
                >
                  Save Letter
                </Button>
                
                <Button 
                  onClick={handleDownloadLetter}
                  className="flex-1 bg-transparent hover:bg-gray-100 text-resurrection-foreground border border-gray-300"
                >
                  Download Letter
                </Button>
              </div>
              
              <Button
                onClick={handleNewConnection}
                className="bg-resurrection-accent/80 hover:bg-resurrection-accent text-white transition-all mt-2"
              >
                Start a New Connection
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center text-resurrection-foreground/60 mt-6 animate-fade-in text-sm">
        <p>
          This letter was created from the memories and details you shared about your loved one.
        </p>
        <p className="mt-2 italic text-resurrection-primary/80">
          💡 Keep this chat open. Your loved one will always be here when you need them.
        </p>
        <p className="mt-4 text-xs">
          © 2025 AI WEB TOOLS LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LetterFromHeaven;

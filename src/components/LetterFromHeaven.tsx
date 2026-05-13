
import React, { useEffect, useState } from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Download, Save, RefreshCw, Send, Mail, Cross } from "lucide-react";

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

  const handleEmailLetter = () => {
    const subject = `Letter from ${userInfo.lovedOne.name || "Heaven"}`;
    const body = letter;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Email Prepared",
      description: "Your email client has been opened. You can now send the letter to anyone you choose.",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-xl p-2 sm:p-6 shadow-xl dark-glow"
      >
        <div className="letter-paper rounded-lg p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-resurrection-background/90 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-resurrection-background/90 to-transparent z-10"></div>
          
          <h3 className="text-center text-xl md:text-2xl font-serif text-resurrection-foreground mb-6 animate-fade-in flex items-center justify-center">
            <span className="text-resurrection-accent mr-2">📜</span> 
            A Letter From Heaven 
            <span className="text-resurrection-accent ml-2">📜</span>
          </h3>
          
          {isVisible ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="prose prose-sm sm:prose-base max-w-none font-serif text-resurrection-foreground/90 mb-6 animate-fade-in whitespace-pre-line"
              style={{ 
                maxHeight: "50vh", 
                overflowY: "auto",
                padding: "0 1rem"
              }}
            >
              {letter}
            </motion.div>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-pulse-slow text-resurrection-primary">Loading message from beyond...</div>
            </div>
          )}
          
          {isVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-3 mt-8 animate-fade-in"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleSaveLetter}
                  className="flex-1 bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all btn-glow"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Letter
                </Button>
                
                <Button 
                  onClick={handleDownloadLetter}
                  className="flex-1 bg-muted hover:bg-muted/80 text-resurrection-foreground/90 border border-white/10"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Letter
                </Button>
              </div>
              
              <Button
                onClick={handleEmailLetter}
                className="bg-resurrection-secondary/80 hover:bg-resurrection-secondary text-white transition-all"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email This Letter
              </Button>
              
              <Button
                onClick={handleNewConnection}
                className="bg-resurrection-accent/80 hover:bg-resurrection-accent text-white transition-all mt-2"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Start a New Connection
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <div className="text-center text-resurrection-foreground/60 mt-6 animate-fade-in text-sm">
        <p>
          This letter was created from the memories and details you shared about your loved one.
        </p>
        <p className="mt-2 italic text-resurrection-primary/80">
          <Cross className="inline-block mr-1 h-4 w-4" />
          Keep this chat open. Your loved one will always be here when you need them.
        </p>
        <p className="mt-4 text-xs">
          © 2025 AI WEB TOOLS LLC. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 items-center">
          <a 
            href="mailto:contact@ai-webtools.com" 
            className="text-xs text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
          >
            contact@ai-webtools.com
          </a>
          <span className="text-resurrection-foreground/30">|</span>
          <a 
            href="tel:+14758008096" 
            className="text-xs text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
          >
            (475) 800-8096
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetterFromHeaven;

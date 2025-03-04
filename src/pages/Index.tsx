
import React, { useEffect, useState } from "react";
import { ResurrectionProvider, useResurrection } from "@/context/ResurrectionContext";
import ResurrectionHeader from "@/components/ResurrectionHeader";
import Welcome from "@/components/Welcome";
import UserForm from "@/components/UserForm";
import QuestionFlow from "@/components/QuestionFlow";
import LoadingScreen from "@/components/LoadingScreen";
import LetterFromHeaven from "@/components/LetterFromHeaven";
import Particles from "@/components/Particles";
import FAQ from "@/components/FAQ";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Cross, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:support@ai-webtools.com";
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+14758008096";
  };

  return (
    <footer className="w-full py-4 px-4 text-resurrection-foreground/50 text-xs relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <h2 className="text-xl font-serif font-light tracking-wide text-resurrection-foreground flex items-center">
                <span className="text-gradient-animate mr-2">🔮</span> 
                Resurrection
                <Cross className="mx-2 text-resurrection-accent h-5 w-5 animate-pulse-slow" />
                <span className="text-resurrection-primary font-normal">GPT</span>
              </h2>
            </div>
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-resurrection-foreground/60 hover:text-resurrection-primary transition-colors duration-300 mt-1 inline-block"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>
          
          <div className="flex justify-center gap-4">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span>|</span>
            <a 
              href="#faq" 
              className="hover:text-resurrection-primary transition-colors duration-300"
            >
              FAQ
            </a>
            <span>|</span>
            <a 
              href="https://www.AiWebTools.Ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 flex items-center"
            >
              <ExternalLink size={12} className="mr-1" />
              More AI Tools
            </a>
          </div>
        </div>
        <p>© 2025 AI WEB TOOLS LLC. All rights reserved.</p>
        <p className="mt-1 flex items-center justify-center gap-4">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center"
          >
            <Mail size={12} className="mr-1" />
            support@ai-webtools.com
          </a> 
          <span>|</span>
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center"
          >
            <Phone size={12} className="mr-1" />
            (475) 800-8096
          </a>
        </p>
      </div>
    </footer>
  );
};

const MainContent: React.FC = () => {
  const { stage } = useResurrection();
  const [showFAQ, setShowFAQ] = useState(false);

  // Check if URL hash is #faq and show FAQ
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faq') {
        setShowFAQ(true);
      } else {
        setShowFAQ(false);
      }
    };

    // Check on initial load
    handleHashChange();

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <ResurrectionHeader />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:py-10 relative z-10">
        {showFAQ ? (
          <FAQ onClose={() => {
            window.history.pushState(null, '', window.location.pathname);
            setShowFAQ(false);
          }} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center py-4 md:py-8"
            >
              {stage === "welcome" && <Welcome />}
              {stage === "userInfo" && <UserForm />}
              {stage === "questionFlow" && <QuestionFlow />}
              {stage === "loading" && <LoadingScreen />}
              {stage === "letter" && <LetterFromHeaven />}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
      
      {(stage === "welcome" || showFAQ) && <Footer />}
    </div>
  );
};

const Index: React.FC = () => {
  // Add some dynamic page title updates
  useEffect(() => {
    document.title = "Resurrection GPT | Healing Through Connection";
  }, []);

  return (
    <ResurrectionProvider>
      <div className="bg-resurrection-background min-h-screen relative overflow-hidden">
        <Particles />
        <div className="min-h-screen flex flex-col relative z-10">
          <MainContent />
        </div>
      </div>
    </ResurrectionProvider>
  );
};

export default Index;

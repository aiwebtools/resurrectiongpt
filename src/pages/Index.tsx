
import React, { useEffect } from "react";
import { ResurrectionProvider, useResurrection } from "@/context/ResurrectionContext";
import ResurrectionHeader from "@/components/ResurrectionHeader";
import Welcome from "@/components/Welcome";
import UserForm from "@/components/UserForm";
import QuestionFlow from "@/components/QuestionFlow";
import LoadingScreen from "@/components/LoadingScreen";
import LetterFromHeaven from "@/components/LetterFromHeaven";
import Particles from "@/components/Particles";
import { motion, AnimatePresence } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 px-4 text-center text-resurrection-foreground/50 text-xs">
      <div className="container mx-auto">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:text-resurrection-primary">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-resurrection-primary">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-resurrection-primary">FAQ</a>
        </div>
        <p>© 2025 AI WEB TOOLS LLC. All rights reserved.</p>
        <p className="mt-1">
          <a href="mailto:support@ai-webtools.com" className="hover:text-resurrection-primary">support@ai-webtools.com</a> | 
          <a href="tel:+14758008096" className="ml-1 hover:text-resurrection-primary">(475) 800-8096</a>
        </p>
      </div>
    </footer>
  );
};

const MainContent: React.FC = () => {
  const { stage } = useResurrection();

  return (
    <div className="min-h-screen flex flex-col">
      <ResurrectionHeader />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:py-10 relative z-10">
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
      </main>
      
      {stage === "welcome" && <Footer />}
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

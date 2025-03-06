
import React, { useState, useEffect } from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "@/components/Welcome";
import UserForm from "@/components/UserForm";
import QuestionFlow from "@/components/QuestionFlow";
import LoadingScreen from "@/components/LoadingScreen";
import LetterFromHeaven from "@/components/LetterFromHeaven";
import FAQ from "@/components/FAQ";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import Footer from "./Footer";

const MainContent: React.FC = () => {
  const { stage } = useResurrection();
  const [showFAQ, setShowFAQ] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Check if URL hash is #faq or #disclaimer and show corresponding component
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faq') {
        setShowFAQ(true);
        setShowDisclaimer(false);
        // Scroll to top when opening full FAQ
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#disclaimer') {
        setShowFAQ(false);
        setShowDisclaimer(true);
        // Scroll to top when opening disclaimer
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#faqs') {
        // Scroll to FAQ section
        const faqSection = document.getElementById('faqs');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
        setShowFAQ(false);
        setShowDisclaimer(false);
      } else {
        setShowFAQ(false);
        setShowDisclaimer(false);
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
      <main className="flex-1 container mx-auto px-4 py-6 md:py-10 relative z-10">
        {showFAQ ? (
          <FAQ onClose={() => {
            window.history.pushState(null, '', window.location.pathname);
            setShowFAQ(false);
          }} />
        ) : showDisclaimer ? (
          <LegalDisclaimer onClose={() => {
            window.history.pushState(null, '', window.location.pathname);
            setShowDisclaimer(false);
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
      
      {(stage === "welcome" || showFAQ || showDisclaimer) && <Footer />}
    </div>
  );
};

export default MainContent;

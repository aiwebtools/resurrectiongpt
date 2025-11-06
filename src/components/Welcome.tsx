
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { motion } from "framer-motion";

// Import components
import WelcomeHeader from "./welcome/WelcomeHeader";
import HowItWorks from "./welcome/HowItWorks";
import CTAButtons from "./welcome/CTAButtons";
import FeatureList from "./welcome/FeatureList";
import DemoVideo from "./welcome/DemoVideo";
import Testimonials from "./Testimonials";
import ToolAccess from "./welcome/ToolAccess";
import FAQSection from "./FAQSection";
import WelcomeFooter from "./welcome/WelcomeFooter";
import ImmortalizeMESection from "./welcome/ImmortalizeMESection";

const Welcome: React.FC = () => {
  const { setStage } = useResurrection();

  const handleBegin = () => {
    window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank");
  };

  return (
    <div className="w-full max-w-6xl mx-auto text-center divine-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card rounded-2xl divine-padding shadow-2xl dark-glow ethereal-border"
      >
        <WelcomeHeader />
        <HowItWorks />
        <CTAButtons handleBegin={handleBegin} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <DemoVideo />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FeatureList />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Testimonials />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ImmortalizeMESection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <ToolAccess />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <FAQSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <WelcomeFooter />
      </motion.div>
    </div>
  );
};

export default Welcome;

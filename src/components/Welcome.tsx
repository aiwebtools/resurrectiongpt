
import React from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { motion } from "framer-motion";

// Import new components
import WelcomeHeader from "./welcome/WelcomeHeader";
import HowItWorks from "./welcome/HowItWorks";
import CTAButtons from "./welcome/CTAButtons";
import FeatureList from "./welcome/FeatureList";
import DemoVideo from "./welcome/DemoVideo";
import WelcomeFooter from "./welcome/WelcomeFooter";

const Welcome: React.FC = () => {
  const { setStage } = useResurrection();

  const handleBegin = () => {
    window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow"
      >
        <WelcomeHeader />
        <HowItWorks />
        <CTAButtons handleBegin={handleBegin} />
      </motion.div>
      
      <FeatureList />
      <DemoVideo />
      <WelcomeFooter />
    </div>
  );
};

export default Welcome;

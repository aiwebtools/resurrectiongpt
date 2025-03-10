
import React, { useEffect, useState } from "react";
import { ResurrectionProvider } from "@/context/ResurrectionContext";
import ResurrectionHeader from "@/components/ResurrectionHeader";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index: React.FC = () => {
  // Update the page title to better reflect the tool's name
  useEffect(() => {
    document.title = "Spirit Bridge | Connect With Loved Ones Beyond";
  }, []);

  // State for disclaimer popup
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  // Check if it's first visit when component mounts
  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem("spiritbridge_disclaimer_accepted");
    
    if (!hasSeenDisclaimer) {
      // Show disclaimer after a small delay for better UX
      setTimeout(() => {
        setShowDisclaimer(true);
      }, 800);
    }
  }, []);

  // Function to handle disclaimer acceptance
  const handleAcceptDisclaimer = () => {
    localStorage.setItem("spiritbridge_disclaimer_accepted", "true");
    setShowDisclaimer(false);
  };

  // Function to handle disclaimer close without accepting
  const handleCloseDisclaimer = () => {
    // We still close the popup but don't save to localStorage
    // so it will show again on next visit
    setShowDisclaimer(false);
  };

  return (
    <ResurrectionProvider>
      <div className="bg-resurrection-background min-h-screen relative overflow-hidden">
        <Particles />
        <div className="min-h-screen flex flex-col relative z-10">
          <ResurrectionHeader />
          <MainContent />
        </div>
        
        {/* Disclaimer Popup */}
        <DisclaimerPopup 
          isOpen={showDisclaimer}
          onAccept={handleAcceptDisclaimer}
          onClose={handleCloseDisclaimer}
        />
      </div>
    </ResurrectionProvider>
  );
};

export default Index;

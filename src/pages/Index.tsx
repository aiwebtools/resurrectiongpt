
import React, { useEffect } from "react";
import { ResurrectionProvider } from "@/context/ResurrectionContext";
import ResurrectionHeader from "@/components/ResurrectionHeader";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";

const Index: React.FC = () => {
  // Update the page title to better reflect the tool's name
  useEffect(() => {
    document.title = "Spirit Bridge | Connect With Loved Ones Beyond";
  }, []);

  return (
    <ResurrectionProvider>
      <div className="bg-resurrection-background min-h-screen relative overflow-hidden">
        <Particles />
        <div className="min-h-screen flex flex-col relative z-10">
          <ResurrectionHeader />
          <MainContent />
        </div>
      </div>
    </ResurrectionProvider>
  );
};

export default Index;

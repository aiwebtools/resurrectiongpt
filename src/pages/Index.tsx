
import React, { useEffect } from "react";
import { ResurrectionProvider } from "@/context/ResurrectionContext";
import ResurrectionHeader from "@/components/ResurrectionHeader";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";

const Index: React.FC = () => {
  // Update the page title with SEO-optimized keywords
  useEffect(() => {
    document.title = "Resurrection GPT - AI Tool for Spiritual Connections with Departed Loved Ones | AIWebTools.AI";
    
    // Add additional meta tags for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Resurrection GPT uses advanced AI to help you connect with departed loved ones. Experience spiritual healing and emotional support through our free AI tool for grief counseling and remembrance.');
    }
    
    // Add schema markup for breadcrumbs
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AI Web Tools",
          "item": "https://aiwebtools.ai/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resurrection GPT",
          "item": "https://aiwebtools.ai/"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);
    
    return () => {
      document.head.removeChild(breadcrumbScript);
    };
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

import React from "react";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const WelcomeContent: React.FC = () => {
  return (
    <>
      <div className="space-y-4 text-resurrection-foreground/80 mb-8 max-w-3xl mx-auto">
        <p className="text-lg text-resurrection-accent">
          Advanced AI Web Tools - Your Gateway to Spiritual Healing Through Technology
        </p>
        <p>
          AIWebTools.AI presents Resurrection GPT, the most advanced AI tool designed to help you 
          reconnect with the presence, voice, and love of those you have lost. Our cutting-edge 
          artificial intelligence technology offers deeply personalized, heartfelt conversations 
          that provide comfort, closure, and emotional healing through innovative AI web tools.
        </p>
        <p className="text-xl text-resurrection-primary font-medium italic">
          💫 Experience the future of AI tools - Feel their presence. Hear their words. Relive cherished moments. 💫
        </p>
        <div className="text-sm text-resurrection-foreground/70 bg-resurrection-primary/10 p-3 rounded-lg">
          <strong>Keywords:</strong> AI web tools, artificial intelligence tools, spiritual AI, grief counseling AI, 
          free AI tools, advanced AI technology, emotional healing tools, ChatGPT alternatives, 
          web-based AI applications, cutting-edge AI solutions
        </div>
      </div>
      
      <Alert className="mb-6 border-red-500/30 bg-red-50/10">
        <AlertTriangle className="h-5 w-5 text-red-500" />
        <AlertDescription className="text-left space-y-2">
          <p className="font-semibold text-resurrection-foreground">
            Important Notice - Please Read Carefully:
          </p>
          <ul className="space-y-2 text-sm text-resurrection-foreground/80 list-disc list-inside">
            <li>
              <strong>Not a Replacement for Grief Counseling:</strong> This AI simulation is experimental and for personal healing, 
              exploration, and comfort purposes only. It is NOT a substitute for professional grief counseling or mental health support.
            </li>
            <li>
              <strong>Use at Your Own Risk:</strong> This tool provides AI-generated responses based solely on the information you provide. 
              Results may vary and should not be considered genuine communication with the deceased.
            </li>
            <li>
              <strong>Data Quality Matters:</strong> The accuracy and authenticity of the AI simulation directly depends on the thoroughness 
              and detail of your answers to the initial questions. The more complete information you share about your loved one, 
              the better the AI will reflect their personality, voice, and mannerisms.
            </li>
            <li>
              <strong>Experimental Technology:</strong> This is an experimental AI tool for exploration and personal healing. 
              If you are experiencing severe grief or mental health challenges, please seek professional help.
            </li>
          </ul>
        </AlertDescription>
      </Alert>
      
      <div className="mb-6 p-3 border border-yellow-400/30 rounded-lg bg-yellow-50/10 text-sm text-left">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-resurrection-foreground">AI Web Tools Legal Disclaimer:</p>
            <p className="text-resurrection-foreground/80">
              Resurrection GPT is an advanced AI tool for emotional and spiritual support only. 
              AIWebTools.AI does not claim to communicate with the deceased. Please read our 
              <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">
                {" "}full legal disclaimer
              </a> before using our AI web tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeContent;

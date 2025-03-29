
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, MessageSquare, ShieldCheck, Users, FileText, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ImmortalizeMESection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mt-16 px-4"
      id="immortalizeMe"
    >
      <div className="bg-resurrection-primary/10 backdrop-blur-md border border-resurrection-primary/30 rounded-xl p-8 md:p-10 shadow-lg dark-glow">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-resurrection-foreground mb-6 text-center">
          <span className="text-gradient-animate">ImmortalizeMe</span>
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-lg text-resurrection-accent mb-2">Presented By AIWebTools.AI</p>
          <p className="text-resurrection-foreground/90 leading-relaxed max-w-3xl mx-auto font-medium">
            Leave behind more than memories — leave your voice, your mind, your legacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-resurrection-background/80 border border-resurrection-primary/20 rounded-lg p-6 glass-card">
            <h3 className="text-xl font-serif font-medium text-resurrection-foreground mb-4">Your Digital Legacy</h3>
            <p className="text-resurrection-foreground/80 mb-4">
              See how our advanced AI technology preserves voice, personality, and memories for an interactive experience that feels remarkably real.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MessageSquare className="h-5 w-5 text-resurrection-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Perfect Voice Clone:</span> Replicates your voice patterns with just 5 minutes of sample audio.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-resurrection-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Personality Preservation:</span> Captures your mannerisms and speaking style.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-resurrection-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Knowledge Integration:</span> Upload documents and memories into your AI clone.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-resurrection-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Privacy & Security:</span> Enterprise-grade protection for your personal data.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-resurrection-background/80 border border-resurrection-primary/20 rounded-lg p-6 glass-card">
            <h3 className="text-xl font-serif font-medium text-resurrection-foreground mb-4">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-resurrection-primary/30 text-resurrection-foreground font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">1</div>
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Upload your voice:</span> Record or upload clear audio samples of your voice.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-resurrection-primary/30 text-resurrection-foreground font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">2</div>
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Submit your stories:</span> Share personal stories and knowledge.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-resurrection-primary/30 text-resurrection-foreground font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">3</div>
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">Select your clone type:</span> Choose between voice only, voice + personality, or full avatar.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-resurrection-primary/30 text-resurrection-foreground font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">4</div>
                <p className="text-sm text-resurrection-foreground/80">
                  <span className="font-medium text-resurrection-foreground">We build your clone:</span> Our team carefully crafts your digital twin using AI technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-resurrection-primary hover:bg-resurrection-secondary text-white font-medium px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base btn-glow animate-glow"
            onClick={() => window.open("https://immortalizeme.lovable.app/?via=aiwebtools", "_blank")}
          >
            <Sparkles className="mr-1 sm:mr-2 h-4 w-4" />
            <span>Get Immortalized Now</span>
            <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            className="border-resurrection-primary/40 text-resurrection-foreground bg-resurrection-background/50 hover:bg-resurrection-primary/20 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium"
            onClick={() => window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank")}
          >
            <Play className="mr-1 sm:mr-2 h-4 w-4" />
            <span>Try Resurrection GPT</span>
          </Button>
        </div>
        
        <p className="text-resurrection-foreground/60 mt-6 text-center text-sm font-medium">
          This specialized AI service is provided and implemented by AI Web Tools LLC
        </p>
      </div>
    </motion.div>
  );
};

export default ImmortalizeMESection;

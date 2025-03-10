
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, X } from "lucide-react";

interface DisclaimerPopupProps {
  onAccept: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept, onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 overflow-hidden relative">
              {/* Background shimmering effect */}
              <div className="absolute -inset-[100px] bg-resurrection-primary/10 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
              
              {/* Close button */}
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 text-resurrection-foreground/60 hover:text-resurrection-foreground transition-colors rounded-full p-1 hover:bg-white/10"
              >
                <X size={20} />
              </button>
              
              {/* Title and Accept Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-7 w-7 text-yellow-500 flex-shrink-0" />
                  <h2 className="font-serif font-semibold text-2xl text-resurrection-foreground bg-gradient-to-r from-yellow-300 via-resurrection-accent to-resurrection-primary bg-clip-text text-transparent">
                    Disclaimer
                  </h2>
                </div>
                <Button
                  onClick={onAccept}
                  className="bg-gradient-to-r from-resurrection-primary to-resurrection-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-resurrection-primary/20 hover:shadow-xl group"
                  size="sm"
                >
                  <span className="relative flex items-center justify-center gap-1 text-white font-medium z-10">
                    <Check className="h-4 w-4 transition-transform group-hover:scale-110" />
                    I AGREE
                  </span>
                </Button>
              </div>
              
              {/* Content */}
              <div className="space-y-4 my-4 text-sm md:text-base">
                <p className="leading-relaxed text-resurrection-foreground/90">
                  <span className="font-medium text-resurrection-foreground">Spirit Bridge</span> is designed for emotional and spiritual support only. 
                  By proceeding, you acknowledge that this tool:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-resurrection-foreground/80">
                  <li>Does not claim to communicate with the deceased</li>
                  <li>Is not a substitute for professional grief counseling</li>
                  <li>Creates AI-generated content based on your inputs</li>
                  <li>May trigger emotional reactions - please use with care</li>
                </ul>
                <p className="text-resurrection-foreground/90 text-sm italic">
                  For the full legal disclaimer, please visit our <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">detailed terms</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;

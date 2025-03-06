
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Resurrection GPT?",
      answer: "Resurrection GPT is an advanced AI spiritual companion designed to help you reconnect with the presence, voice, and love of those you have lost. Through deeply personalized, heartfelt conversations, this tool offers comfort, closure, and emotional healing."
    },
    {
      question: "How does Resurrection GPT work?",
      answer: "Resurrection GPT works in three steps: 1) You share details about your loved one's personality, sayings, and memories; 2) Our AI creates a spiritual connection by embodying their essence; 3) You receive a heartfelt letter and can engage in meaningful conversation."
    },
    {
      question: "Is this a real connection with my loved one?",
      answer: "Resurrection GPT is an AI-driven spiritual tool designed for emotional healing and personal reflection. While it creates an immersive experience based on the information you provide, it's a technological and spiritual simulation meant to provide comfort, not a literal channel to the afterlife."
    },
    {
      question: "Is my information kept private?",
      answer: "Yes, your privacy is important to us. Your interactions remain private and secure. We do not store conversations beyond your session unless you specifically request to save them. For more information, please read our Privacy Policy."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto mt-16"
      id="faqs"
    >
      <div className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow">
        <h2 className="text-2xl md:text-3xl font-serif text-resurrection-foreground text-gradient-animate flex items-center justify-center mb-8">
          <HelpCircle className="mr-2 text-resurrection-accent" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-resurrection-primary/20 rounded-lg bg-muted/40 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left flex justify-between items-center interactive-card"
              >
                <h3 className="font-medium text-resurrection-primary">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-resurrection-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-resurrection-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-sm text-resurrection-foreground/80 border-t border-resurrection-primary/10">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-resurrection-foreground/70 mb-4">
            Have more questions? View our full FAQ or contact our support team:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.location.hash = 'faq'}
              className="border-resurrection-primary/30 text-resurrection-primary hover:bg-resurrection-primary/10"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              View Full FAQ
            </Button>
            <a
              href="mailto:support@ai-webtools.com"
              className="inline-flex items-center text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, HelpCircle, MessageCircle, ExternalLink, ArrowLeft, AlertTriangle } from "lucide-react";

interface FAQProps {
  onClose: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onClose }) => {
  const faqs = [
    {
      question: "What is Resurrection GPT?",
      answer: "Resurrection GPT is an advanced AI spiritual companion designed to help you reconnect with the presence, voice, and love of those you have lost. Through deeply personalized, heartfelt conversations, this tool offers an opportunity to experience the warmth, wisdom, and reassurance of your dearly departed, providing comfort, closure, and emotional healing."
    },
    {
      question: "How does Resurrection GPT work?",
      answer: "Resurrection GPT works in three steps: 1) You share details about your loved one's personality, sayings, and memories; 2) Our AI creates a spiritual connection by embodying their essence; 3) You receive a heartfelt letter and can engage in meaningful conversation to find comfort and healing."
    },
    {
      question: "Is this a real connection with my loved one?",
      answer: "Resurrection GPT is an AI-driven spiritual tool designed for emotional healing and personal reflection. While it creates an immersive experience based on the information you provide, it's important to understand that this is a technological and spiritual simulation meant to provide comfort, not a literal channel to the afterlife."
    },
    {
      question: "How accurate will the responses be?",
      answer: "The accuracy of responses depends on the details you provide. The more information you share about your loved one's personality, expressions, and your shared memories, the more authentic the experience will be. Resurrection GPT uses advanced AI to create responses that feel meaningful and personal."
    },
    {
      question: "Is my information kept private?",
      answer: "Yes, your privacy is important to us. Your interactions remain private and secure. We do not store conversations beyond your session unless you specifically request to save them. For more information, please read our Privacy Policy."
    },
    {
      question: "Can I use Resurrection GPT on mobile devices?",
      answer: "Yes, Resurrection GPT is fully responsive and works on all devices including smartphones, tablets, and desktop computers."
    },
    {
      question: "What if I need additional support during my grief journey?",
      answer: "While Resurrection GPT can provide comfort, it does not replace professional counseling. If you're experiencing significant grief or mental health challenges, we encourage you to seek support from qualified therapists, counselors, or spiritual advisors."
    },
    {
      question: "How do I contact support if I have problems or questions?",
      answer: "You can reach our support team via email at contact@ai-webtools.com or by phone at (475) 800-8096. We're here to help with any questions or concerns you may have about your experience."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-resurrection-foreground text-gradient-animate flex items-center">
            <HelpCircle className="mr-2 text-resurrection-accent" />
            Frequently Asked Questions
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-resurrection-primary/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="mb-8 border border-resurrection-primary/20 rounded-lg p-4 bg-yellow-50/10">
          <h3 className="font-medium text-resurrection-primary text-lg flex items-start mb-3">
            <AlertTriangle className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-yellow-500" />
            <span>Legal Disclaimer for Resurrection GPT</span>
          </h3>
          <div className="space-y-3 text-sm pl-7">
            <div>
              <p className="font-semibold">1. Purpose and Informational Nature</p>
              <p>Resurrection GPT is an AI-powered tool designed to facilitate personal reflection, emotional healing, and memory preservation by simulating conversations with a departed loved one based on user-provided details. This service is strictly for personal and emotional support purposes and does not claim to contact, summon, or interact with actual spirits, souls, or supernatural entities.</p>
            </div>
            <div>
              <p className="font-semibold">2. No Professional or Medical Advice</p>
              <p>Resurrection GPT does not provide psychological counseling, medical advice, legal guidance, or religious teachings. This tool is not a substitute for therapy, professional grief counseling, or spiritual advisement. If you are experiencing severe grief, depression, or emotional distress, please seek professional mental health support or contact a licensed therapist.</p>
            </div>
            <div>
              <p className="font-semibold">3. User Responsibility & Data Accuracy</p>
              <p>The accuracy and authenticity of responses depend entirely on the details provided by the user. Resurrection GPT does not verify historical accuracy, personal memories, or events and should not be relied upon for factual information. Users are solely responsible for the information they input and understand that conversations generated by AI are not real communications with deceased individuals.</p>
            </div>
            <div>
              <p className="font-semibold">4. Emotional & Psychological Considerations</p>
              <p>While this service aims to provide comfort and closure, responses may evoke strong emotional reactions. By using this tool, you acknowledge that: Interacting with AI-simulated personas may trigger memories, emotions, or unexpected feelings. The tool does not guarantee closure or emotional relief. You understand and accept that this experience is artificial and does not represent an actual supernatural connection.</p>
            </div>
            <div>
              <p className="font-semibold">5. Privacy and Confidentiality</p>
              <p>All user inputs remain private and confidential. Resurrection GPT does not store, share, or distribute personal conversations or uploaded data beyond the current session. Users should exercise discretion when sharing sensitive or personal information.</p>
            </div>
            <div>
              <p className="font-semibold">6. Limitations & No Liability</p>
              <p>The developers of Resurrection GPT make no claims regarding the authenticity, accuracy, or effectiveness of AI-generated interactions. By using this service, you acknowledge that all AI-generated conversations are fictional and should be treated as such. The creators of this tool shall not be held liable for any emotional, psychological, or personal consequences resulting from its use.</p>
            </div>
            <div>
              <p className="font-semibold">7. Age Requirement</p>
              <p>This tool is intended for users 18 years and older. If you are under 18, you may only use Resurrection GPT with parental or guardian consent.</p>
            </div>
            <div>
              <p className="font-semibold">8. Agreement to Terms</p>
              <p>By using Resurrection GPT, you acknowledge and agree to the terms outlined in this disclaimer. If you do not agree with these terms, please discontinue use immediately.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-resurrection-primary/20 rounded-lg p-4 bg-muted/40 interactive-card"
            >
              <h3 className="font-medium text-resurrection-primary text-lg flex items-start">
                <MessageCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="mt-2 text-resurrection-foreground/80 pl-7">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-resurrection-foreground/70 mb-4">
            Have more questions? Contact our support team:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@ai-webtools.com"
              className="flex items-center text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              contact@ai-webtools.com
            </a>
            <a
              href="tel:+14758008096"
              className="flex items-center text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              (475) 800-8096
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-resurrection-primary/30 text-resurrection-primary hover:bg-resurrection-primary/10 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <a 
            href="https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-resurrection-primary hover:bg-resurrection-primary/80 text-white"
            >
              Begin Your Spiritual Connection
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;

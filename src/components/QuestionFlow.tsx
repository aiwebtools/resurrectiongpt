
import React, { useState } from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

const QuestionFlow: React.FC = () => {
  const { 
    questions, 
    questionIndex, 
    updateQuestionAnswer,
    progressQuestionFlow,
    progressToLoading
  } = useResurrection();
  
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  const currentQuestion = questions[questionIndex];
  const progressPercentage = ((questionIndex + 1) / questions.length) * 100;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentAnswer.trim()) {
      setError("Please provide an answer before continuing.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    // Update the answer for the current question
    updateQuestionAnswer(currentQuestion.id, currentAnswer);
    
    // Simulate a slight delay for animation purposes
    setTimeout(() => {
      setCurrentAnswer("");
      setIsSubmitting(false);
      
      if (questionIndex === questions.length - 1) {
        progressToLoading();
      } else {
        progressQuestionFlow();
      }
    }, 500);
  };
  
  const handleSkip = () => {
    setIsSubmitting(true);
    updateQuestionAnswer(currentQuestion.id, "");
    
    // Simulate a slight delay for animation purposes
    setTimeout(() => {
      setCurrentAnswer("");
      setIsSubmitting(false);
      
      if (questionIndex === questions.length - 1) {
        progressToLoading();
      } else {
        progressQuestionFlow();
      }
    }, 300);
  };

  // Function to determine the category display text
  const getCategoryDescription = (category: string) => {
    switch(category) {
      case "personal":
        return "About Their Personality";
      case "relationship":
        return "About Your Relationship";
      case "memories":
        return "About Your Memories";
      case "details":
        return "About Their Life";
      default:
        return "";
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="glass-card rounded-xl p-6 md:p-8 shadow-xl">
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm text-resurrection-foreground/70 mb-2">
            <span>Question {questionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-gray-200/50" />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-3">
              <span className="text-xs uppercase tracking-wider px-2 py-1 bg-resurrection-primary/10 text-resurrection-primary rounded-full">
                {getCategoryDescription(currentQuestion.category)}
              </span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif text-resurrection-foreground">
                  {currentQuestion.text}
                </h3>
                <p className="text-xs text-resurrection-foreground/60 italic">
                  The more details you share, the more meaningful your spiritual connection will be.
                </p>
                <Textarea
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  placeholder="Share your thoughts and memories..."
                  className="bg-white/50 border-resurrection-primary/20 focus:border-resurrection-primary/50 transition-all min-h-[120px]"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  type="submit" 
                  className="flex-1 bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Continue"}
                </Button>
                
                <Button 
                  type="button" 
                  onClick={handleSkip}
                  className="bg-transparent hover:bg-gray-100 text-resurrection-foreground/70 border border-gray-300"
                  disabled={isSubmitting}
                >
                  Skip this question
                </Button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <p className="text-center text-resurrection-foreground/60 mt-3 text-xs px-4">
        Each answer helps create a more authentic connection with your loved one.
      </p>
    </div>
  );
};

export default QuestionFlow;

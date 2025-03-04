
import React, { useState } from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserForm: React.FC = () => {
  const { setStage, userInfo, setUserInfo } = useResurrection();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!userInfo.name.trim()) {
      setError("Please tell us your name before continuing.");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate a slight delay for animation purposes
    setTimeout(() => {
      setStage("questionFlow");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in shadow-xl">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-6 text-resurrection-foreground">
          Welcome to your journey
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="user-name" className="text-resurrection-foreground/80">
              What is your name?
            </Label>
            <Input
              id="user-name"
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
              placeholder="Enter your name"
              className="bg-white/50 border-resurrection-primary/20 focus:border-resurrection-primary/50 transition-all duration-300"
              autoComplete="off"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all duration-300 py-6 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg 
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  ></circle>
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Continuing
              </span>
            ) : "Begin Your Connection"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

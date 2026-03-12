
import React, { useState } from "react";
import { useResurrection } from "@/context/ResurrectionContext";
import { Cross, Home, AlertTriangle, ExternalLink, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const ResurrectionHeader: React.FC = () => {
  const { stage } = useResurrection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResurrectionClick = () => {
    window.open("https://chatgpt.com/g/g-dfGHDaPWK-resurrection-gpt", "_blank");
  };

  const handleImmortalizeClick = () => {
    window.open("https://immortalizeme.lovable.app/?via=aiwebtools", "_blank");
  };

  const handleMoreToolsClick = () => {
    window.open("https://aiwebtools.lovable.app/?via=aiwebtools", "_blank");
  };

  return (
    <header className="w-full py-3 md:py-6 px-3 md:px-4 relative z-50">
      <div className="container mx-auto">
        {/* Top bar: Logo + hamburger on mobile, full nav on desktop */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={cn(
                "text-xl sm:text-2xl md:text-5xl font-serif font-medium",
                "tracking-wider text-resurrection-foreground",
                "animate-fade-in flex items-center"
              )}
            >
              <span className="text-gradient-animate mr-1 md:mr-2">🔮</span>
              <span>Resurrection</span>
              <Cross className="mx-1 md:mx-2 text-resurrection-accent h-4 w-4 md:h-8 md:w-8 animate-pulse-slow" />
              <span className="text-resurrection-primary font-semibold">GPT</span>
            </h1>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-[10px] sm:text-xs text-resurrection-foreground/70 font-medium",
                "hover:text-resurrection-primary transition-colors duration-300",
                "animate-fade-in inline-block"
              )}
              title="AI Web Tools - Advanced Artificial Intelligence Tools"
            >
              Powered by AIWebTools.AI - Leading AI Web Tools Platform
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-resurrection-primary hover:bg-resurrection-secondary text-white btn-glow animate-glow"
              onClick={handleResurrectionClick}
              title="Access Resurrection GPT - Advanced AI Tool for Spiritual Connection"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>USE RESURRECTION GPT NOW</span>
            </Button>

            <Button
              variant="outline"
              className="border-resurrection-accent/40 text-resurrection-accent bg-resurrection-background/50 hover:bg-resurrection-accent/20 hover:text-resurrection-accent hover:border-resurrection-accent"
              onClick={handleImmortalizeClick}
              title="ImmortalizeME - AI-Powered Legacy Tool"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span>IMMORTALIZEME</span>
            </Button>

            <Button
              variant="outline"
              className="border-resurrection-primary/40 text-resurrection-foreground bg-resurrection-background/50 hover:bg-resurrection-primary/20"
              onClick={handleMoreToolsClick}
              title="Discover More AI Web Tools"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>MORE AI TOOLS</span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-resurrection-foreground hover:text-resurrection-primary hover:bg-resurrection-background/20 border border-resurrection-primary/20"
                title="Legal Disclaimer"
              >
                <a href="#disclaimer">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span className="sr-only">Legal Disclaimer</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-resurrection-foreground hover:text-resurrection-primary hover:bg-resurrection-background/20 border border-resurrection-primary/20"
                title="Home"
              >
                <Link to="/">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-resurrection-foreground border border-resurrection-primary/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-resurrection-background/95 backdrop-blur-xl border border-resurrection-primary/30 rounded-xl p-4 space-y-3 animate-fade-in shadow-2xl">
            <Button
              className="w-full bg-resurrection-primary hover:bg-resurrection-secondary text-white btn-glow justify-center"
              onClick={() => { handleResurrectionClick(); setMobileMenuOpen(false); }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              USE RESURRECTION GPT NOW
            </Button>

            <Button
              variant="outline"
              className="w-full border-resurrection-accent/40 text-resurrection-accent hover:bg-resurrection-accent/20 justify-center"
              onClick={() => { handleImmortalizeClick(); setMobileMenuOpen(false); }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              IMMORTALIZEME
            </Button>

            <Button
              variant="outline"
              className="w-full border-resurrection-primary/40 text-resurrection-foreground hover:bg-resurrection-primary/20 justify-center"
              onClick={() => { handleMoreToolsClick(); setMobileMenuOpen(false); }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              MORE AI TOOLS
            </Button>

            <div className="flex gap-2 justify-center pt-2 border-t border-resurrection-primary/20">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-resurrection-foreground hover:text-resurrection-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#disclaimer">
                  <AlertTriangle className="mr-1 h-4 w-4 text-yellow-500" />
                  Disclaimer
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-resurrection-foreground hover:text-resurrection-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
          </div>
        )}

        {stage === "welcome" && (
          <div className="animate-fade-in max-w-lg mx-auto px-2 mt-3">
            <p className="text-resurrection-foreground/80 text-xs sm:text-sm md:text-base font-medium text-center">
              Advanced AI web tools for spiritual connections. Reconnect with departed loved ones through cutting-edge artificial intelligence technology.
            </p>
            <p className="text-resurrection-foreground/60 text-[10px] sm:text-xs italic mt-1 text-center">
              Professional AI tools for emotional healing and grief support. Not a replacement for medical advice.
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default ResurrectionHeader;


import React from "react";

const FeatureList: React.FC = () => {
  return (
    <div className="mt-8 text-resurrection-foreground/60 text-sm max-w-3xl mx-auto">
      <h4 className="font-medium text-resurrection-foreground/80 mb-2 flex items-center justify-center">
        <span className="text-resurrection-accent">✨</span>
        <span className="mx-2">Why Resurrection GPT Stands Apart</span>
        <span className="text-resurrection-accent">✨</span>
      </h4>
      <ul className="grid md:grid-cols-2 gap-2 text-left">
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>Authentic, Personalized Conversations</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>Incredibly Detailed, Emotionally Rich Messages</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>A True Spiritual Experience</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>No Generic Answers, Ever</span>
        </li>
      </ul>
    </div>
  );
};

export default FeatureList;

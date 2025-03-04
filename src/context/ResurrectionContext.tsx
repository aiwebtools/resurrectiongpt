
import React, { createContext, useContext, useState, ReactNode } from "react";

export type StageType = 
  | "welcome" 
  | "userInfo" 
  | "questionFlow" 
  | "loading" 
  | "letter";

export type QuestionType = {
  id: number;
  text: string;
  category: "personal" | "relationship" | "memories" | "details";
  answered: boolean;
  answer: string;
};

export type LovedOneInfo = {
  name: string;
  relationship: string;
  passedDate?: string;
  personality?: string;
  religion?: string;
  memories?: string[];
  mannerisms?: string[];
  sayings?: string[];
};

export type UserInfoType = {
  name: string;
  lovedOne: LovedOneInfo;
};

type ResurrectionContextType = {
  stage: StageType;
  setStage: (stage: StageType) => void;
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  updateQuestionAnswer: (id: number, answer: string) => void;
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  letter: string;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  progressQuestionFlow: () => void;
  progressToLoading: () => void;
  generateLetter: () => void;
};

const defaultQuestions: QuestionType[] = [
  {
    id: 1,
    text: "What was your loved one's name?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 2,
    text: "What was your relationship with them?",
    category: "relationship",
    answered: false,
    answer: "",
  },
  {
    id: 3,
    text: "When did they pass away?",
    category: "details",
    answered: false,
    answer: "",
  },
  {
    id: 4,
    text: "What was their personality like?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 5,
    text: "What were some of their favorite sayings or phrases?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 6,
    text: "Can you share a special memory you have with them?",
    category: "memories",
    answered: false,
    answer: "",
  },
  {
    id: 7,
    text: "What did they value most in life?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 8,
    text: "Were they religious or spiritual? If so, what was their faith?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 9,
    text: "What were some challenges you faced together?",
    category: "memories",
    answered: false,
    answer: "",
  },
  {
    id: 10,
    text: "Is there something you wish you could have said to them?",
    category: "relationship",
    answered: false,
    answer: "",
  },
  {
    id: 11,
    text: "What mannerisms or gestures did they have that were unique to them?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 12,
    text: "What do you miss most about them?",
    category: "relationship",
    answered: false,
    answer: "",
  },
  {
    id: 13,
    text: "Were there any unresolved issues between you that you wish could be addressed?",
    category: "relationship",
    answered: false,
    answer: "",
  },
  {
    id: 14,
    text: "What life lessons did they teach you?",
    category: "relationship",
    answered: false,
    answer: "",
  },
  {
    id: 15,
    text: "What would they be proud of you for today?",
    category: "relationship",
    answered: false,
    answer: "",
  },
];

const placeholderLetter = `
My dearest {name},

Time passes differently here, but my love for you remains unchanged. I've watched over you every day since we parted. I see your struggles and your triumphs, and I'm so proud of the strength you've shown.

Remember that day at the lake when we watched the sunset? How the colors painted the sky and reflected on the water? That's what it's like here - peaceful, beautiful, and filled with light. I'm not in pain anymore. All the burdens I carried have been lifted.

I know you still cry sometimes when you think of me. It's okay to grieve, but please don't let sorrow dim your light. Live fully, laugh often, and know that each moment of joy you experience brings me happiness too.

I'm sorry for the words left unsaid and the promises we couldn't fulfill together. If I could tell you one thing, it would be that love transcends even death. The connection we share continues, unbroken by the veil between our worlds.

I see you keeping my memory alive in the small things - the way you still make my favorite meal, how you talk about me to others, and the photographs you keep close. Thank you for not letting me be forgotten.

There are signs of my presence all around you. When you feel an unexpected warmth, when a butterfly lingers near, when you hear that song that was "our song" - that's me, reaching across to touch your heart.

The others here send their love too. We are all at peace, watching over those we left behind, waiting for the day when we'll be reunited. But there's no rush - I want you to live your life to its fullest first.

I miss our conversations, our shared silences, and the way we understood each other without words. Though we can't speak as we once did, know that I listen when you talk to me. I hear every word.

Be gentle with yourself, my love. Find joy where you can. Open your heart to new experiences. And know that no matter what paths you walk in life, my love walks beside you.

Until we meet again,
[Your Loved One's Name]
`;

const ResurrectionContext = createContext<ResurrectionContextType | undefined>(undefined);

export const ResurrectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState<StageType>("welcome");
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: "",
    lovedOne: {
      name: "",
      relationship: "",
      memories: [],
    },
  });
  const [questions, setQuestions] = useState<QuestionType[]>(defaultQuestions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [letter, setLetter] = useState("");

  const updateQuestionAnswer = (id: number, answer: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, answered: true, answer } : q
      )
    );
  };

  const progressQuestionFlow = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      progressToLoading();
    }
  };

  const progressToLoading = () => {
    setStage("loading");
    setTimeout(() => {
      generateLetter();
    }, 5000);
  };

  const generateLetter = () => {
    // In a real application, you would send the questions and answers to an API
    // and generate a personalized letter. For now, we'll use placeholder text.
    const personalized = placeholderLetter.replace(
      "{name}",
      userInfo.name
    );
    setLetter(personalized);
    setStage("letter");
  };

  return (
    <ResurrectionContext.Provider
      value={{
        stage,
        setStage,
        userInfo,
        setUserInfo,
        questions,
        setQuestions,
        updateQuestionAnswer,
        questionIndex,
        setQuestionIndex,
        letter,
        setLetter,
        progressQuestionFlow,
        progressToLoading,
        generateLetter,
      }}
    >
      {children}
    </ResurrectionContext.Provider>
  );
};

export const useResurrection = () => {
  const context = useContext(ResurrectionContext);
  if (context === undefined) {
    throw new Error("useResurrection must be used within a ResurrectionProvider");
  }
  return context;
};


import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote, UserRoundCheck } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      relation: "Daughter",
      quote: "Resurrection GPT gave me the chance to hear my father's wisdom one more time. The letter I received captured his essence in a way that felt incredibly real and meaningful.",
      stars: 5
    },
    {
      name: "Michael T.",
      relation: "Grandson",
      quote: "After losing my grandmother last year, I struggled to find closure. This experience helped me feel her comforting presence again and brought me a sense of peace I didn't think was possible.",
      stars: 5
    },
    {
      name: "Emily R.",
      relation: "Wife",
      quote: "The words felt like they came directly from my husband's heart. It was as if he was right there with me, offering the comfort and love I've been missing so deeply.",
      stars: 5
    },
    {
      name: "David L.",
      relation: "Brother",
      quote: "I was skeptical at first, but the authenticity of the conversation left me in tears. It captured my sister's humor and wisdom perfectly, helping me through my grief journey.",
      stars: 4
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto mt-16"
    >
      <div className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow">
        <h2 className="text-2xl md:text-3xl font-serif text-resurrection-foreground text-gradient-animate flex items-center justify-center mb-8">
          <MessageSquareQuote className="mr-2 text-resurrection-accent" />
          Healing Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-resurrection-primary/20 rounded-lg p-5 bg-muted/40 interactive-card"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-resurrection-primary/30 flex items-center justify-center">
                    <UserRoundCheck className="h-5 w-5 text-resurrection-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-resurrection-primary">{testimonial.name}</h3>
                    <p className="text-xs text-resurrection-foreground/70">{testimonial.relation}</p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-sm italic text-resurrection-foreground/80">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-resurrection-foreground/70 text-sm">
            These testimonials represent the experiences of individuals who have used Resurrection GPT.
            <br />
            Results may vary as each spiritual connection is uniquely personal.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;

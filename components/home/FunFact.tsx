"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { funFacts } from "@/content/fun-facts";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function getRandomIndex(exclude: number): number {
  let next: number;
  do {
    next = Math.floor(Math.random() * funFacts.length);
  } while (next === exclude && funFacts.length > 1);
  return next;
}

export function FunFact() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * funFacts.length)
  );

  const shuffle = useCallback(() => {
    setIndex((prev) => getRandomIndex(prev));
  }, []);

  return (
    <section className="py-20 bg-white">
      <ScrollReveal>
        <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
          {/* Titre */}
          <h2 className="font-display text-2xl font-bold text-anthracite mb-8">
            Le Saviez-Chevelu ?
          </h2>

          {/* Anecdote */}
          <div className="relative min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="border-l-4 border-or pl-5 text-left"
              >
                <p className="font-body text-base leading-7 text-anthracite">
                  {funFacts[index]}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Bouton */}
          <button
            onClick={shuffle}
            className="mt-6 font-body text-sm text-lac hover:underline cursor-pointer transition-colors"
          >
            Une autre ? 🎲
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}

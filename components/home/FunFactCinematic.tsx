"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shuffle } from "lucide-react";
import { funFacts } from "@/content/fun-facts";

export function FunFactCinematic() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const shuffle = useCallback(() => {
    setDirection(1);
    setIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * funFacts.length);
      } while (next === prev && funFacts.length > 1);
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 px-6 md:px-12">
      <p className="font-display italic text-sm text-anthracite/40 mb-8">
        Le Saviez-Chevelu ?
      </p>

      <div className="relative w-full max-w-2xl min-h-[120px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={index}
            custom={direction}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-lg md:text-xl text-anthracite/80 text-center leading-relaxed italic"
            style={{ perspective: 1000 }}
          >
            &ldquo;{funFacts[index]}&rdquo;
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <button
        onClick={shuffle}
        className="mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-anthracite/5 hover:bg-anthracite/10 text-anthracite/60 hover:text-anthracite font-body text-sm transition-colors"
        aria-label="Voir une autre anecdote"
      >
        <Shuffle size={14} />
        Une autre ?
      </button>
    </div>
  );
}

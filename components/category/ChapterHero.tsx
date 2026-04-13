"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface ChapterHeroProps {
  titre: string;
  accroche: string;
  description: string;
  iconElement: ReactNode;
  accentColor: string;
  heroGradient: string;
}

export function ChapterHero({
  titre,
  accroche,
  description,
  iconElement,
  accentColor,
  heroGradient,
}: ChapterHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${heroGradient}`}
    >
      {/* Ambient decorative element */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            backgroundColor: accentColor,
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-8 max-w-3xl"
        style={prefersReducedMotion ? {} : { y: titleY, opacity: titleOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-white/50 mx-auto mb-6 flex justify-center">
            {iconElement}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          {titre}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display italic text-lg text-white/60 mt-3"
        >
          {accroche}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-[15px] text-white/70 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}

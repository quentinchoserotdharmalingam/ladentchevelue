"use client";

import { motion, useScroll, useReducedMotion } from "motion/react";

interface ReadingProgressProps {
  color?: string;
}

export function ReadingProgress({ color = "var(--color-sapin)" }: ReadingProgressProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: color,
      }}
    />
  );
}

"use client";

import { motion, useTransform, useReducedMotion, type MotionValue } from "motion/react";

interface AltitudeCounterProps {
  scrollProgress: MotionValue<number>;
}

export function AltitudeCounter({ scrollProgress }: AltitudeCounterProps) {
  const prefersReducedMotion = useReducedMotion();
  const altitude = useTransform(scrollProgress, [0, 0.7], [1393, 310]);
  const display = useTransform(altitude, (v) => `${Math.round(v)} m`);
  const opacity = useTransform(scrollProgress, [0, 0.05, 0.65, 0.75], [0, 1, 1, 0]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-6 right-6 z-30 font-body text-sm tracking-widest text-white/60 mix-blend-difference pointer-events-none"
      aria-hidden="true"
    >
      <motion.span>{display}</motion.span>
    </motion.div>
  );
}

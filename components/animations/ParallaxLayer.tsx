"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  direction = "vertical",
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const x = useTransform(scrollYProgress, [0, 1], [range, -range]);

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={direction === "vertical" ? { y } : { x }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

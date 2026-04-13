"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
  mode?: "triggered" | "continuous";
}

const directionOffset = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className,
  once = true,
  mode = "triggered",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffset[direction];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const continuousOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const continuousY = useTransform(
    scrollYProgress,
    [0, 1],
    [offset.y, 0]
  );
  const continuousX = useTransform(
    scrollYProgress,
    [0, 1],
    [offset.x, 0]
  );

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  if (mode === "continuous") {
    return (
      <div ref={ref}>
        <motion.div
          style={{
            opacity: continuousOpacity,
            x: continuousX,
            y: continuousY,
          }}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

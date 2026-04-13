"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface PathDrawProps {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  viewBox?: string;
  width?: string | number;
  height?: string | number;
  trigger?: "scroll" | "inView";
  duration?: number;
  fill?: string;
}

export function PathDraw({
  d,
  stroke = "currentColor",
  strokeWidth = 2,
  className,
  viewBox = "0 0 100 100",
  width = "100%",
  height = "100%",
  trigger = "scroll",
  duration = 1.5,
  fill = "none",
}: PathDrawProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        <svg viewBox={viewBox} width={width} height={height} aria-hidden="true">
          <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <svg viewBox={viewBox} width={width} height={height} aria-hidden="true">
        {trigger === "scroll" ? (
          <motion.path
            d={d}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={fill}
            style={{ pathLength }}
            strokeLinecap="round"
          />
        ) : (
          <motion.path
            d={d}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={fill}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}

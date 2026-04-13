"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ScrollTextProps {
  text: string;
  className?: string;
  mode?: "words" | "lines";
  tag?: "p" | "h1" | "h2" | "h3" | "span";
}

export function ScrollText({
  text,
  className,
  mode = "words",
  tag: Tag = "p",
}: ScrollTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const units = mode === "words" ? text.split(/\s+/) : text.split(/\n/);

  return (
    <div ref={ref}>
      <Tag className={className}>
        {units.map((unit, i) => (
          <Word key={i} index={i} total={units.length} progress={scrollYProgress}>
            {unit}
          </Word>
        ))}
      </Tag>
    </div>
  );
}

function Word({
  children,
  index,
  total,
  progress,
}: {
  children: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  );
}

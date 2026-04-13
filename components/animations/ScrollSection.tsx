"use client";

import { useRef, createContext, useContext, type ReactNode } from "react";
import { useScroll, type MotionValue } from "motion/react";

interface ScrollSectionContextValue {
  progress: MotionValue<number>;
}

const ScrollSectionContext = createContext<ScrollSectionContextValue | null>(null);

export function useScrollSection() {
  const ctx = useContext(ScrollSectionContext);
  if (!ctx) throw new Error("useScrollSection must be used within a ScrollSection");
  return ctx;
}

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function ScrollSection({ children, className, id }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <ScrollSectionContext.Provider value={{ progress: scrollYProgress }}>
      <section ref={ref} id={id} className={`relative min-h-screen ${className ?? ""}`}>
        {children}
      </section>
    </ScrollSectionContext.Provider>
  );
}

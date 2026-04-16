"use client";

import { motion, useReducedMotion } from "motion/react";
import { MountainRange } from "@/components/illustrations/MountainRange";
import { ForestLine } from "@/components/illustrations/ForestLine";
import { CatSilhouette } from "@/components/illustrations/CatSilhouette";

export function HeroCompact() {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      className="relative h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #87CEEB, #b4d7e8, var(--color-lac))",
      }}
    >
      {/* Mountains anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <MountainRange
          className="w-full h-[30vh]"
          colors={{
            back: "rgba(45, 80, 22, 0.25)",
            mid: "rgba(45, 80, 22, 0.5)",
            front: "rgba(45, 80, 22, 0.8)",
          }}
        />
      </div>

      {/* Forest line in front of mountains */}
      <div className="absolute bottom-0 left-0 right-0">
        <ForestLine
          className="w-full h-16 md:h-24"
          color="rgba(45, 80, 22, 0.6)"
          density="normal"
        />
      </div>

      {/* Cat on mountain ridge */}
      <div className="absolute bottom-[22vh] left-1/2 -translate-x-1/2 z-[1] opacity-30">
        <CatSilhouette pose="sitting" size={24} color="white" />
      </div>

      {/* Title */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={initial}
        animate={animate}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
          La Dent Chevelue
        </h1>
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display italic text-lg md:text-xl text-white/70 mt-3"
        >
          Saint-Jean-de-Chevelu · Savoie
        </motion.p>
      </motion.div>
    </section>
  );
}

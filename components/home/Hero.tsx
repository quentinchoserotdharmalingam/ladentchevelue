"use client";

import { motion } from "motion/react";

function MountainSVG() {
  return (
    <svg
      width="160"
      height="60"
      viewBox="0 0 160 60"
      fill="none"
      className="text-sapin/20"
      aria-hidden="true"
    >
      <path
        d="M0 55 L25 20 L40 35 L55 10 L70 30 L85 5 L100 25 L115 15 L130 30 L145 20 L160 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Hero() {
  const scrollToContent = () => {
    const target = document.getElementById("record-banner");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-creme pt-16">
      <div className="text-center px-5 max-w-2xl mx-auto">
        {/* Illustration montagne */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <MountainSVG />
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-anthracite"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          La Dent Chevelue
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display italic text-anthracite/60 mt-4"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          Entre lac et montagne, un village savoyard a decouvrir
        </motion.p>

        {/* Bouton Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={scrollToContent}
            className="
              inline-flex items-center gap-2
              px-8 py-3 border-2 border-sapin text-sapin
              rounded-lg font-body font-medium text-sm
              hover:bg-sapin hover:text-white
              transition-all duration-200
            "
          >
            Explorer
            <span aria-hidden="true">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

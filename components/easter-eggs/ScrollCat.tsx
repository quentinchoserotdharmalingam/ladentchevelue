"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CatSilhouette } from "@/components/illustrations/CatSilhouette";

export function ScrollCat() {
  const [show, setShow] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let scrollCount = 0;
    let lastScrollY = 0;
    let triggered = false;

    const handleScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta > 200) {
        scrollCount++;
        lastScrollY = window.scrollY;
      }

      // Trigger after ~20 significant scroll events (ref to legend: 1 in 20)
      if (scrollCount >= 20 && !triggered) {
        triggered = true;
        setShow(true);
        setTimeout(() => {
          setShow(false);
          // Reset for next trigger
          setTimeout(() => {
            scrollCount = 0;
            triggered = false;
          }, 5000);
        }, 2500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-20 left-0 z-40 pointer-events-none"
          aria-hidden="true"
        >
          <CatSilhouette pose="prowling" size={60} color="var(--color-anthracite)" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

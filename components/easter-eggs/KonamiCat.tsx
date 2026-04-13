"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CatSilhouette } from "@/components/illustrations/CatSilhouette";

const SEQUENCE = ["c", "h", "a", "t"];

export function KonamiCat() {
  const [show, setShow] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const bufferRef = useRef<string[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      bufferRef.current.push(e.key.toLowerCase());
      if (bufferRef.current.length > SEQUENCE.length) {
        bufferRef.current.shift();
      }
      if (bufferRef.current.join("") === SEQUENCE.join("")) {
        bufferRef.current = [];
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "110vw", y: "60vh" }}
          animate={{ x: "-100px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "linear" }}
          className="fixed top-0 left-0 z-50 pointer-events-none"
          aria-hidden="true"
        >
          <CatSilhouette pose="leaping" size={80} color="var(--color-anthracite)" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

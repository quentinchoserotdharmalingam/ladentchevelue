"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface DetailHeroProps {
  title: string;
  subtitle?: string;
  categoryTitle: string;
  categorySlug: string;
  accentColor: string;
  heroGradient: string;
}

export function DetailHero({
  title,
  subtitle,
  categoryTitle,
  categorySlug,
  accentColor,
  heroGradient,
}: DetailHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${heroGradient}`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{
            backgroundColor: accentColor,
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-8 max-w-3xl"
        style={prefersReducedMotion ? {} : { y, opacity }}
      >
        {/* Category link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            href={`/${categorySlug}`}
            className="inline-block font-body text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors mb-6"
          >
            {categoryTitle}
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold text-white"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display italic text-lg text-white/55 mt-4 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

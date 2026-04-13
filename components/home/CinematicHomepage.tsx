"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ChevronDown } from "lucide-react";
import { MountainRange } from "@/components/illustrations/MountainRange";
import { ForestLine } from "@/components/illustrations/ForestLine";
import { VineyardPattern } from "@/components/illustrations/VineyardPattern";
import { LakeReflection } from "@/components/illustrations/LakeReflection";
import { ScrollText } from "@/components/animations/ScrollText";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { AltitudeCounter } from "./AltitudeCounter";
import { LandscapeNav } from "./LandscapeNav";
import { FunFactCinematic } from "./FunFactCinematic";

export function CinematicHomepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef}>
      <AltitudeCounter scrollProgress={scrollYProgress} />

      {/* ═══ Section 0 — Le Sommet (1393m) ═══ */}
      <SommetSection prefersReducedMotion={!!prefersReducedMotion} />

      <SectionTransition type="wave" fromColor="var(--color-lac)" toColor="transparent" />

      {/* ═══ Section 1 — Les Cretes / Histoire (~1200m) ═══ */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-anthracite/90 to-anthracite/70 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <MountainRange
            className="w-full h-full"
            colors={{
              back: "rgba(91,143,168,0.15)",
              mid: "rgba(91,143,168,0.25)",
              front: "rgba(91,143,168,0.35)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-24 text-center">
          <ScrollText
            text="Chaque montagne a son secret. Celle-ci a un chat. Un chat monstrueux qui dechirait les entrailles des voyageurs au col, ne laissant la vie sauve qu'a dix-neuf sur vingt."
            className="font-display italic text-xl md:text-2xl text-white/80 leading-relaxed"
            tag="p"
          />
          <ScrollReveal delay={0.3} className="mt-12">
            <Link
              href="/histoire"
              className="inline-block font-body text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
            >
              Explorer l&apos;histoire
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition type="diagonal" fromColor="rgba(44,44,44,0.7)" />

      {/* ═══ Section 2 — La Foret / Nature (~900m) ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(to bottom, #1a3409, #2D5016)" }}>
        <div className="absolute bottom-0 left-0 right-0">
          <ForestLine className="w-full h-32 md:h-48" color="rgba(0,0,0,0.3)" density="dense" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <ForestLine className="w-full h-24 md:h-36" color="rgba(0,0,0,0.2)" density="normal" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-24 text-center">
          <ScrollReveal>
            <p className="font-display italic text-sm text-white/40 mb-6">Nature & Paysages</p>
            <p className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
              Du sommet aux lacs
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mb-10">
              Du sommet a 1 393 m aux lacs a 310 m, 1 083 metres de verticalite.
              Falaises calcaires, forets de hetres, vignobles en terrasses, marais proteges.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <CountUp target={1083} suffix=" m" className="font-display text-3xl md:text-4xl text-white font-bold" />
                <p className="font-body text-xs text-white/40 mt-1">de denivele</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <CountUp target={12000} className="font-display text-3xl md:text-4xl text-white font-bold" />
                <p className="font-body text-xs text-white/40 mt-1">ans d&apos;histoire</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.5}>
            <Link
              href="/nature"
              className="inline-block font-body text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
            >
              Explorer la nature
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition type="wave" fromColor="#2D5016" />

      {/* ═══ Section 3 — Les Vignes / Terroir (~600m) ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(to bottom, #8B6F47, #C4943A)" }}>
        <div className="absolute bottom-0 left-0 right-0 opacity-40">
          <VineyardPattern className="w-full h-48" color="rgba(255,255,255,0.2)" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-24 text-center">
          <ScrollReveal>
            <p className="font-display italic text-sm text-white/40 mb-6">Terroir & Gastronomie</p>
            <p className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
              Les vignes de Chevelu
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mb-10">
              Roussette de Savoie, Jacquere, Mondeuse. Des vignes en terrasses exposees plein sud,
              et les sartos des Grangeons — temoins d&apos;un savoir-faire seculaire.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="/terroir"
              className="inline-block font-body text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
            >
              Explorer le terroir
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition type="diagonal" fromColor="#C4943A" flip />

      {/* ═══ Section 4 — Les Pierres / Patrimoine (~450m) ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-anthracite to-bois/80">
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-24 text-center">
          <ScrollReveal>
            <p className="font-display italic text-sm text-white/40 mb-6">Patrimoine</p>
            <p className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
              Les pierres de Chevelu
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <CountUp target={10} className="font-display text-5xl md:text-6xl text-or font-bold" />
                <p className="font-body text-sm text-white/50 mt-2">maisons fortes medievales</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-white/60 text-base leading-relaxed mb-10">
              Baties entre le XIIIe et le XVe siecle pour controler la route de Yenne.
              Certaines sont encore debout, d&apos;autres vivent dans la memoire des pierres.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link
              href="/patrimoine"
              className="inline-block font-body text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
            >
              Explorer le patrimoine
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition type="fade" fromColor="rgba(139,111,71,0.8)" toColor="var(--color-creme)" />

      {/* ═══ Section 5 — Le Village (310m) ═══ */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center bg-creme py-20">
        <ScrollReveal>
          <p className="font-display italic text-sm text-anthracite/30 mb-3 text-center">310 m</p>
          <h2 className="font-display text-2xl md:text-3xl text-anthracite font-bold mb-2 text-center">
            Saint-Jean-de-Chevelu
          </h2>
          <p className="font-body text-sm text-anthracite/50 mb-12 text-center">
            840 habitants · 12 hameaux · entre lac et montagne
          </p>
        </ScrollReveal>
        <LandscapeNav />
      </section>

      {/* ═══ Section 6 — Les Lacs / Record ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(to bottom, var(--color-creme), #3a6f8a)" }}>
        <div className="absolute bottom-0 left-0 right-0">
          <LakeReflection className="w-full h-48" color="rgba(255,255,255,0.15)" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-24 text-center">
          <ScrollReveal>
            <p className="font-display italic text-sm text-white/40 mb-6">Le Record de la Dent Chevelue</p>
            <p className="font-display text-xl md:text-2xl text-white/80 mb-8">
              Eglise → Sommet → Eglise
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-6 md:gap-12 mb-10">
              <div className="text-center">
                <CountUp target={1083} suffix=" m" className="font-display text-2xl md:text-3xl text-white font-bold" />
                <p className="font-body text-xs text-white/40 mt-1">D+</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl text-or font-bold">1h53</p>
                <p className="font-body text-xs text-white/40 mt-1">record</p>
              </div>
              <div className="text-center">
                <CountUp target={16} className="font-display text-2xl md:text-3xl text-white font-bold" />
                <p className="font-body text-xs text-white/40 mt-1">participants</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="/record"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-sm font-medium backdrop-blur-sm transition-colors border border-white/15"
            >
              Relever le defi
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition type="wave" fromColor="#3a6f8a" toColor="var(--color-creme)" flip />

      {/* ═══ Section 7 — Le Saviez-Chevelu? ═══ */}
      <section className="bg-creme py-12">
        <FunFactCinematic />
      </section>
    </div>
  );
}

/* ════════════════════════════════════════════════ */
/* Section 0 — Le Sommet                          */
/* ════════════════════════════════════════════════ */

function SommetSection({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const mountainScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #87CEEB, #b4d7e8, var(--color-lac))" }}
    >
      {/* Mountains with parallax */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={prefersReducedMotion ? {} : { y: mountainY, scale: mountainScale }}
      >
        <MountainRange
          className="w-full h-[60vh]"
          colors={{
            back: "rgba(45, 80, 22, 0.25)",
            mid: "rgba(45, 80, 22, 0.5)",
            front: "rgba(45, 80, 22, 0.8)",
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={prefersReducedMotion ? {} : { y: titleY, opacity: titleOpacity }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
        >
          La Dent Chevelue
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display italic text-lg md:text-xl text-white/70 mt-4"
        >
          Saint-Jean-de-Chevelu · Savoie
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

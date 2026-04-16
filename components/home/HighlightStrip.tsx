"use client";

import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stats = [
  { target: 1393, suffix: "", label: "m d'altitude" },
  { target: 12000, suffix: "", label: "ans d'histoire" },
  { target: 10, suffix: "", label: "maisons fortes" },
  { target: 29, suffix: "", label: "pages a decouvrir" },
];

export function HighlightStrip() {
  return (
    <section className="bg-anthracite py-10 md:py-12">
      <div className="max-w-4xl mx-auto px-5 md:px-8 grid grid-cols-2 md:flex md:justify-around gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
            <div className="text-center">
              <CountUp
                target={stat.target}
                suffix={stat.suffix}
                className="font-display text-2xl md:text-3xl font-bold text-white"
              />
              <p className="font-body text-[11px] text-white/50 mt-1">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

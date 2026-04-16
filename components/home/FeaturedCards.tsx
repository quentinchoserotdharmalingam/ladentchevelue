"use client";

import Link from "next/link";
import { Trophy, HelpCircle, Map } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MountainRange } from "@/components/illustrations/MountainRange";

export function FeaturedCards() {
  return (
    <section className="bg-creme py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-anthracite/35 text-center mb-8">
          A ne pas manquer
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Record Challenge */}
          <ScrollReveal delay={0}>
            <Link
              href="/record"
              className="group block rounded-2xl p-6 md:p-8 bg-gradient-to-br from-sapin to-lac text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <Trophy
                size={32}
                strokeWidth={1.5}
                className="opacity-70 mb-4"
              />
              <h3 className="font-display text-xl font-bold">Le Record</h3>
              <p className="font-body text-sm text-white/60 mt-2">
                Eglise → Sommet → Eglise
              </p>
              <p className="font-display text-3xl font-bold mt-4 text-or">
                1h53
              </p>
              <span className="inline-block mt-4 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 font-body text-sm transition-colors">
                Relever le defi
              </span>
            </Link>
          </ScrollReveal>

          {/* Quiz */}
          <ScrollReveal delay={0.1}>
            <Link
              href="/quiz"
              className="group block rounded-2xl p-6 md:p-8 bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <HelpCircle
                size={32}
                strokeWidth={1.5}
                className="text-lac opacity-60 mb-4"
              />
              <h3 className="font-display text-xl font-bold text-anthracite">
                Connaissez-vous Chevelu ?
              </h3>
              <p className="font-body text-sm text-anthracite/50 mt-2">
                10 questions du lac au sommet
              </p>
              <span className="inline-block mt-6 font-body text-sm text-lac font-medium group-hover:underline">
                Tester ses connaissances →
              </span>
            </Link>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={0.2}>
            <Link
              href="/carte"
              className="group block rounded-2xl p-6 md:p-8 bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden relative"
            >
              <Map
                size={32}
                strokeWidth={1.5}
                className="text-sapin opacity-60 mb-4 relative z-10"
              />
              <h3 className="font-display text-xl font-bold text-anthracite relative z-10">
                La Carte Vivante
              </h3>
              <p className="font-body text-sm text-anthracite/50 mt-2 relative z-10">
                Points d'interet, sentiers, patrimoine
              </p>
              <span className="inline-block mt-6 font-body text-sm text-sapin font-medium group-hover:underline relative z-10">
                Explorer la carte →
              </span>
              {/* Decorative mini mountain */}
              <div className="absolute bottom-0 left-0 right-0 opacity-10">
                <MountainRange
                  className="w-full h-20"
                  colors={{
                    back: "rgba(45, 80, 22, 0.4)",
                    mid: "rgba(45, 80, 22, 0.6)",
                    front: "rgba(45, 80, 22, 0.8)",
                  }}
                />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

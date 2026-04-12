"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function RecordBanner() {
  return (
    <section
      id="record-banner"
      className="bg-gradient-to-br from-sapin to-lac py-16 md:py-20"
    >
      <ScrollReveal>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center text-white">
          {/* Label */}
          <p className="font-body text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
            Le defi
          </p>

          {/* Titre */}
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Le Record de la Dent Chevelue
          </h2>

          {/* Parcours */}
          <p className="font-body text-lg text-white/90 mt-4">
            Eglise → Sommet → Eglise
          </p>

          {/* Chiffres */}
          <p className="font-body text-base text-white/80 mt-2">
            1 178m D+ · ~12km · Record : 1h53
          </p>

          {/* Phrase fun */}
          <p className="font-display italic text-sm text-white/50 mt-2">
            Perruque obligatoire au sommet.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/record"
              className="
                inline-flex items-center gap-2
                px-7 py-3 bg-white text-sapin
                rounded-lg font-body font-semibold text-sm
                hover:bg-white/90 transition-colors
              "
            >
              Relever le defi
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  Mountain,
  Route,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { PathDraw } from "@/components/animations/PathDraw";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Le Record de la Dent Chevelue",
  description:
    "Le defi trail de Saint-Jean-de-Chevelu : eglise -> sommet de la Dent du Chat -> eglise. 1 178m D+, ~12km. Record actuel : 1h53.",
};

export default function RecordPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sapin via-sapin to-lac">
        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl">
          <ScrollReveal>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Le defi
            </p>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Le Record de la Dent Chevelue
            </h1>
            <p className="font-display text-xl text-white/70 mb-2">
              Eglise → Sommet → Eglise
            </p>
            <p className="font-display italic text-sm text-white/35">
              Perruque obligatoire au sommet.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Elevation profile */}
      <section className="bg-creme py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-xl font-bold text-anthracite text-center mb-8">Le parcours</h2>
          </ScrollReveal>
          <PathDraw
            d="M10,90 L15,88 L25,80 L35,65 L45,45 L55,25 L60,15 L65,10 L70,15 L75,25 L80,45 L85,65 L90,80 L95,88"
            viewBox="0 0 100 100"
            stroke="var(--color-sapin)"
            strokeWidth={1.5}
            className="w-full h-32 md:h-48"
            trigger="inView"
            duration={2}
          />
          <div className="flex justify-between px-2 mt-2">
            <span className="font-body text-xs text-anthracite/40">Eglise (310 m)</span>
            <span className="font-body text-xs text-sapin font-semibold">Sommet (1 393 m)</span>
            <span className="font-body text-xs text-anthracite/40">Eglise (310 m)</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <TrendingUp size={20} className="text-sapin/50 mx-auto mb-3" />
                <CountUp target={1178} suffix=" m" className="font-display text-2xl md:text-3xl font-bold text-anthracite" />
                <p className="font-body text-xs text-anthracite/40 mt-1">D+</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <Route size={20} className="text-sapin/50 mx-auto mb-3" />
                <p className="font-display text-2xl md:text-3xl font-bold text-anthracite">~12 km</p>
                <p className="font-body text-xs text-anthracite/40 mt-1">Distance</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <Mountain size={20} className="text-sapin/50 mx-auto mb-3" />
                <CountUp target={1393} suffix=" m" className="font-display text-2xl md:text-3xl font-bold text-anthracite" />
                <p className="font-body text-xs text-anthracite/40 mt-1">Altitude max</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <Trophy size={20} className="text-or mx-auto mb-3" />
                <p className="font-display text-2xl md:text-3xl font-bold text-or">1h53</p>
                <p className="font-body text-xs text-anthracite/40 mt-1">Record</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-creme py-16">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-xl font-bold text-anthracite text-center mb-10">
              Les regles
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              "Depart et arrivee a l'eglise de Saint-Jean-de-Chevelu",
              "Couloir nord interdit — pour la securite des randonneurs",
              "Photo preuve au sommet avec perruque ou couvre-chef obligatoire",
              "Preuve du chrono : Strava ou temoin accredite",
            ].map((rule, i) => (
              <ScrollReveal key={i} delay={i * 0.08} mode="continuous">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border">
                  <span className="font-display text-2xl font-bold text-sapin/20 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-sm text-anthracite/75 leading-relaxed pt-1">
                    {rule}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-creme to-sapin/5 py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="font-body text-sm text-anthracite/40 mb-6">
              16 temeraires ont deja releve le defi
            </p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/record/classement"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-sapin text-white rounded-full font-body font-semibold text-sm hover:bg-sapin-light transition-colors"
            >
              Voir le classement
            </Link>
            <Link
              href="/record/soumettre"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-sapin text-sapin rounded-full font-body font-semibold text-sm hover:bg-sapin hover:text-white transition-colors"
            >
              Soumettre mon temps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  Mountain,
  Timer,
  Route,
  TrendingUp,
  Camera,
  Trophy,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RecordNav } from "@/components/record/RecordNav";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Le Record de la Dent Chevelue",
  description:
    "Le defi trail de Saint-Jean-de-Chevelu : eglise -> sommet de la Dent du Chat -> eglise. 1 178m D+, ~12km. Record actuel : 1h53.",
};

const rules = [
  {
    icon: Mountain,
    title: "Depart & arrivee",
    desc: "Eglise de Saint-Jean-de-Chevelu",
  },
  {
    icon: Route,
    title: "Couloir nord interdit",
    desc: "Pour la securite des coureurs et des randonneurs en dessous",
  },
  {
    icon: Camera,
    title: "Photo preuve au sommet",
    desc: "Avec perruque ou couvre-chef obligatoire",
  },
  {
    icon: Timer,
    title: "Preuve du chrono",
    desc: "Strava ou temoin accredite",
  },
];

const stats = [
  { label: "D+", value: "1 178 m", icon: TrendingUp },
  { label: "Distance", value: "~12 km", icon: Route },
  { label: "Altitude max", value: "1 393 m", icon: Mountain },
  { label: "Record", value: "1h53", icon: Trophy },
];

export default function RecordPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sapin to-lac pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center text-white">
          <ScrollReveal>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
              Le defi
            </p>
            <h1
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Le Record de la Dent Chevelue
            </h1>
            <p className="font-body text-lg text-white/80 mt-4">
              Eglise → Sommet → Eglise
            </p>
            <p className="font-display italic text-sm text-white/45 mt-2">
              Perruque obligatoire au sommet.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation */}
      <RecordNav />

      <Breadcrumb items={[{ label: "Le Record" }]} />

      {/* Stats */}
      <section className="bg-creme py-12">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="bg-white border border-border rounded-[var(--radius-card)] p-5 text-center">
                  <stat.icon
                    size={22}
                    className="text-sapin/60 mx-auto mb-2"
                  />
                  <p className="font-display text-2xl font-bold text-anthracite">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-anthracite/50 mt-1">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regles */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-2xl font-bold text-anthracite text-center mb-10">
            Les regles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rules.map((rule, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-5 bg-creme rounded-[var(--radius-card)]">
                  <rule.icon
                    size={22}
                    className="text-sapin/60 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-body font-semibold text-sm text-anthracite">
                      {rule.title}
                    </h3>
                    <p className="font-body text-sm text-anthracite/60 mt-1">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-creme py-12">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="font-body text-sm text-anthracite/50 mb-4">
            16 temeraires ont deja releve le defi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/record/classement"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3 bg-sapin text-white
                rounded-lg font-body font-semibold text-sm
                hover:bg-sapin-light transition-colors
              "
            >
              Voir le classement
            </Link>
            <Link
              href="/record/soumettre"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3 border-2 border-sapin text-sapin
                rounded-lg font-body font-semibold text-sm
                hover:bg-sapin hover:text-white transition-colors
              "
            >
              Soumettre mon temps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

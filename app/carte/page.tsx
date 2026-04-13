import type { Metadata } from "next";
import { InteractiveMap } from "@/components/map/InteractiveMap";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Carte interactive",
  description:
    "Carte interactive de Saint-Jean-de-Chevelu : points d'interet, sentiers, patrimoine et nature.",
};

export default function CartePage() {
  return (
    <section className="bg-creme min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-anthracite/40 mb-3">
              Explorer
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-anthracite mb-3">
              La Carte Vivante
            </h1>
            <p className="font-body text-sm text-anthracite/60 max-w-md mx-auto">
              Points d&apos;interet, sentiers, patrimoine et sites naturels
              de Saint-Jean-de-Chevelu.
            </p>
          </div>
        </ScrollReveal>

        <InteractiveMap />
      </div>
    </section>
  );
}

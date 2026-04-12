import type { Metadata } from "next";
import { Construction } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Carte interactive",
  description:
    "Carte interactive de Saint-Jean-de-Chevelu : points d'interet, sentiers, patrimoine et nature.",
};

export default function CartePage() {
  return (
    <section className="bg-creme pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[{ label: "Carte" }]} />

        <div className="mt-16 text-center">
          <Construction size={48} className="text-or/50 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-anthracite mb-3">
            Carte interactive — Bientot disponible
          </h1>
          <p className="font-body text-sm text-anthracite/60 max-w-md mx-auto">
            Une carte interactive avec les points d&apos;interet, sentiers, patrimoine
            et sites naturels de Saint-Jean-de-Chevelu.
          </p>
        </div>
      </div>
    </section>
  );
}

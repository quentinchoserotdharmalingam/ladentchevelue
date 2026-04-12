import type { Metadata } from "next";
import { Construction } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Quiz — Connaissez-vous Chevelu ?",
  description:
    "Testez vos connaissances sur Saint-Jean-de-Chevelu, la Dent du Chat et le patrimoine savoyard.",
};

export default function QuizPage() {
  return (
    <section className="bg-creme pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[{ label: "Quiz" }]} />

        <div className="mt-16 text-center">
          <Construction size={48} className="text-or/50 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-anthracite mb-3">
            Quiz — Bientot disponible
          </h1>
          <p className="font-body text-sm text-anthracite/60 max-w-md mx-auto">
            Testez vos connaissances sur le village, la nature, le patrimoine et
            les legendes de Saint-Jean-de-Chevelu.
          </p>
        </div>
      </div>
    </section>
  );
}

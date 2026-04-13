import type { Metadata } from "next";
import { QuizJourney } from "@/components/quiz/QuizJourney";

export const metadata: Metadata = {
  title: "Quiz — Connaissez-vous Chevelu ?",
  description:
    "Testez vos connaissances sur Saint-Jean-de-Chevelu, la Dent du Chat et le patrimoine savoyard. 15 questions du lac au sommet.",
};

export default function QuizPage() {
  return (
    <section className="bg-creme min-h-screen">
      <QuizJourney />
    </section>
  );
}

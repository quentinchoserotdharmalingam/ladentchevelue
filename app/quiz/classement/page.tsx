import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Classement Quiz",
  description: "Classement des meilleurs scores au quiz de La Dent Chevelue.",
};

export default function QuizClassementPage() {
  return (
    <section className="bg-creme pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-anthracite transition-colors"
        >
          <ArrowLeft size={16} />
          Quiz
        </Link>

        <div className="mt-16 text-center">
          <Construction size={48} className="text-or/50 mx-auto mb-6" />
          <h1 className="font-display text-2xl font-bold text-anthracite mb-3">
            Classement — Bientot disponible
          </h1>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Soumettre son temps — Le Record",
  description:
    "Soumettez votre temps pour le Record de la Dent Chevelue. Photo preuve avec couvre-chef obligatoire !",
};

export default function SoumettreRecordPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sapin to-lac pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center text-white">
          <h1 className="font-display text-2xl font-bold text-white">
            Soumettre son temps
          </h1>
        </div>
      </section>

      <section className="bg-creme py-16">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <Link
            href="/record"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-anthracite transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Le Record
          </Link>
          <div className="text-center">
            <Construction size={48} className="text-or/50 mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold text-anthracite mb-3">
              Bientot disponible
            </h2>
            <p className="font-body text-sm text-anthracite/60 max-w-md mx-auto">
              Le formulaire de soumission sera bientot disponible. En attendant,
              contactez-nous directement pour soumettre votre temps.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

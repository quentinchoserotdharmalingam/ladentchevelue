import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-nous pour toute question sur Saint-Jean-de-Chevelu, le village, ou le Record de la Dent Chevelue.",
};

export default function ContactPage() {
  return (
    <section className="bg-creme pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="mt-6">
          <h1 className="font-display text-3xl font-bold text-anthracite">
            Contact
          </h1>
          <p className="font-display italic text-lg text-anthracite/50 mt-2">
            Une question, une idee, une anecdote a partager ?
          </p>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

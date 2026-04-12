"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simule l'envoi — sera connecté à Supabase Server Action plus tard
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-sapin/5 border border-sapin/15 rounded-[var(--radius-card)] p-8 text-center">
        <CheckCircle size={40} className="text-sapin mx-auto mb-4" />
        <h2 className="font-display text-xl font-bold text-anthracite mb-2">
          Message envoye !
        </h2>
        <p className="font-body text-sm text-anthracite/60">
          Merci pour votre message. Nous vous repondrons des que possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nom */}
      <div>
        <label
          htmlFor="nom"
          className="block font-body text-sm font-medium text-anthracite mb-1.5"
        >
          Nom
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          required
          className="
            w-full px-4 py-3 bg-white border border-border rounded-[var(--radius-btn)]
            font-body text-sm text-anthracite
            focus:outline-none focus:ring-2 focus:ring-lac/30 focus:border-lac
            transition-colors
          "
          placeholder="Votre nom"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-body text-sm font-medium text-anthracite mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="
            w-full px-4 py-3 bg-white border border-border rounded-[var(--radius-btn)]
            font-body text-sm text-anthracite
            focus:outline-none focus:ring-2 focus:ring-lac/30 focus:border-lac
            transition-colors
          "
          placeholder="votre@email.com"
        />
      </div>

      {/* Sujet */}
      <div>
        <label
          htmlFor="sujet"
          className="block font-body text-sm font-medium text-anthracite mb-1.5"
        >
          Sujet
        </label>
        <input
          id="sujet"
          name="sujet"
          type="text"
          required
          className="
            w-full px-4 py-3 bg-white border border-border rounded-[var(--radius-btn)]
            font-body text-sm text-anthracite
            focus:outline-none focus:ring-2 focus:ring-lac/30 focus:border-lac
            transition-colors
          "
          placeholder="Le sujet de votre message"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-anthracite mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="
            w-full px-4 py-3 bg-white border border-border rounded-[var(--radius-btn)]
            font-body text-sm text-anthracite resize-y
            focus:outline-none focus:ring-2 focus:ring-lac/30 focus:border-lac
            transition-colors
          "
          placeholder="Votre message..."
        />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={loading}
        className="
          inline-flex items-center gap-2
          px-6 py-3 bg-sapin text-white
          rounded-lg font-body font-semibold text-sm
          hover:bg-sapin-light transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? (
          "Envoi en cours..."
        ) : (
          <>
            Envoyer
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

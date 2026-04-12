import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-footer text-creme">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Colonne 1 — Marque */}
          <div>
            <h3 className="font-display text-xl font-bold mb-3">
              La Dent Chevelue
            </h3>
            <p className="text-creme/70 text-sm leading-relaxed">
              Un site dedie a Saint-Jean-de-Chevelu, village savoyard entre lac
              et montagne.
            </p>
          </div>

          {/* Colonne 2 — Liens utiles */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-creme/50 mb-4">
              Liens utiles
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://explore.dentduchat.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-creme/70 hover:text-creme text-sm transition-colors"
                >
                  Office de tourisme
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-creme/70 hover:text-creme text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — Explorer */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-creme/50 mb-4">
              Explorer
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/village"
                  className="text-creme/70 hover:text-creme text-sm transition-colors"
                >
                  Le village
                </Link>
              </li>
              <li>
                <Link
                  href="/nature"
                  className="text-creme/70 hover:text-creme text-sm transition-colors"
                >
                  Nature
                </Link>
              </li>
              <li>
                <Link
                  href="/patrimoine"
                  className="text-creme/70 hover:text-creme text-sm transition-colors"
                >
                  Patrimoine
                </Link>
              </li>
              <li>
                <Link
                  href="/record"
                  className="text-creme/70 hover:text-or text-sm transition-colors"
                >
                  Le Record
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separateur + credit */}
        <div className="mt-12 pt-6 border-t border-creme/10">
          <p className="text-center text-creme/40 text-xs font-body">
            Fait avec ❤️ depuis Saint-Jean-de-Chevelu
          </p>
        </div>
      </div>
    </footer>
  );
}

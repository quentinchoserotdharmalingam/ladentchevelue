import Link from "next/link";
import { MountainRange } from "@/components/illustrations/MountainRange";

export function Footer() {
  return (
    <footer className="relative">
      {/* Gradient fade into footer */}
      <div
        className="h-32 md:h-48"
        style={{
          background: "linear-gradient(to bottom, var(--color-creme), var(--color-footer))",
        }}
        aria-hidden="true"
      />

      {/* Mountain silhouette */}
      <div className="relative -mt-1 bg-footer">
        <MountainRange
          className="w-full h-16 md:h-24 opacity-20"
          colors={{
            back: "rgba(248,246,240,0.05)",
            mid: "rgba(248,246,240,0.08)",
            front: "rgba(248,246,240,0.12)",
          }}
        />
      </div>

      {/* Content */}
      <div className="bg-footer text-creme">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-12">
          {/* Minimal centered layout */}
          <div className="text-center mb-10">
            <h3 className="font-display text-lg font-bold mb-2">
              La Dent Chevelue
            </h3>
            <p className="text-creme/50 text-sm font-body">
              Saint-Jean-de-Chevelu · Savoie · 310 m
            </p>
          </div>

          {/* Links as a flowing row */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10" aria-label="Pied de page">
            <Link href="/village" className="text-creme/60 hover:text-creme text-sm transition-colors">Village</Link>
            <Link href="/patrimoine" className="text-creme/60 hover:text-creme text-sm transition-colors">Patrimoine</Link>
            <Link href="/nature" className="text-creme/60 hover:text-creme text-sm transition-colors">Nature</Link>
            <Link href="/terroir" className="text-creme/60 hover:text-creme text-sm transition-colors">Terroir</Link>
            <Link href="/histoire" className="text-creme/60 hover:text-creme text-sm transition-colors">Histoire</Link>
            <Link href="/sports" className="text-creme/60 hover:text-creme text-sm transition-colors">Sports</Link>
            <span className="text-creme/20">·</span>
            <Link href="/record" className="text-creme/60 hover:text-or text-sm transition-colors">Record</Link>
            <Link href="/carte" className="text-creme/60 hover:text-creme text-sm transition-colors">Carte</Link>
            <Link href="/quiz" className="text-creme/60 hover:text-creme text-sm transition-colors">Quiz</Link>
            <Link href="/contact" className="text-creme/60 hover:text-creme text-sm transition-colors">Contact</Link>
          </nav>

          {/* Credit */}
          <p className="text-center text-creme/30 text-xs font-body">
            Fait avec soin depuis Saint-Jean-de-Chevelu
          </p>
        </div>
      </div>
    </footer>
  );
}

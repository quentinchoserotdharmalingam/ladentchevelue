import Link from "next/link";
import { TreePine } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-creme pt-16">
      <div className="text-center px-5 max-w-md">
        <TreePine size={48} className="text-sapin/30 mx-auto mb-6" />
        <h1 className="font-display text-4xl font-bold text-anthracite mb-3">
          404
        </h1>
        <p className="font-display italic text-lg text-anthracite/50 mb-6">
          Vous vous etes perdu dans la foret du Mont du Chat...
        </p>
        <p className="font-body text-sm text-anthracite/60 mb-8">
          La page que vous cherchez n&apos;existe pas ou a ete deplacee.
        </p>
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            px-6 py-3 bg-sapin text-white
            rounded-lg font-body font-medium text-sm
            hover:bg-sapin-light transition-colors
          "
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

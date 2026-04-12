import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PageLink } from "@/content/types";

interface PageNavigationProps {
  prevPage?: PageLink | null;
  nextPage?: PageLink | null;
}

export function PageNavigation({ prevPage, nextPage }: PageNavigationProps) {
  if (!prevPage && !nextPage) return null;

  return (
    <nav
      className="flex flex-col sm:flex-row gap-3 mt-12 pt-8 border-t border-border"
      aria-label="Navigation entre les pages"
    >
      {prevPage ? (
        <Link
          href={`/${prevPage.categorySlug}/${prevPage.slug}`}
          className="
            group flex items-center gap-3 flex-1 p-4
            bg-white border border-border rounded-[var(--radius-card)]
            hover:border-sapin/20 hover:shadow-sm transition-all
          "
        >
          <ArrowLeft
            size={16}
            className="text-anthracite/30 group-hover:-translate-x-1 transition-transform flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="font-body text-xs text-anthracite/40 uppercase tracking-wider">
              Precedent
            </p>
            <p className="font-body font-medium text-sm text-anthracite truncate">
              {prevPage.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPage ? (
        <Link
          href={`/${nextPage.categorySlug}/${nextPage.slug}`}
          className="
            group flex items-center justify-end gap-3 flex-1 p-4
            bg-white border border-border rounded-[var(--radius-card)]
            hover:border-sapin/20 hover:shadow-sm transition-all
            text-right
          "
        >
          <div className="min-w-0">
            <p className="font-body text-xs text-anthracite/40 uppercase tracking-wider">
              Suivant
            </p>
            <p className="font-body font-medium text-sm text-anthracite truncate">
              {nextPage.title}
            </p>
          </div>
          <ArrowRight
            size={16}
            className="text-anthracite/30 group-hover:translate-x-1 transition-transform flex-shrink-0"
          />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}

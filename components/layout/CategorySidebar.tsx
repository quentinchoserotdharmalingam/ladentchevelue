"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { SubPage } from "@/content/categories";

interface CategorySidebarProps {
  pages: SubPage[];
  categorySlug: string;
  currentSlug: string;
  accentColor: string;
}

export function CategorySidebar({
  pages,
  categorySlug,
  currentSlug,
  accentColor,
}: CategorySidebarProps) {
  return (
    <nav
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
      aria-label="Pages de la categorie"
    >
      {pages.map((page) => {
        const isActive = page.slug === currentSlug;
        return (
          <Link
            key={page.slug}
            href={`/${categorySlug}/${page.slug}`}
            className="group relative flex items-center"
            aria-current={isActive ? "page" : undefined}
          >
            {/* Dot */}
            <motion.div
              className="w-2.5 h-2.5 rounded-full border-2 transition-colors"
              style={{
                borderColor: isActive ? accentColor : "rgba(44,44,44,0.15)",
                backgroundColor: isActive ? accentColor : "transparent",
              }}
              whileHover={{ scale: 1.3 }}
            />

            {/* Tooltip */}
            <span className="absolute left-6 whitespace-nowrap px-3 py-1.5 rounded-lg bg-anthracite text-white text-xs font-body opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {page.titre}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

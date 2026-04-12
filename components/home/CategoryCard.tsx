"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { Category } from "@/content/categories";

interface CategoryCardProps {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}

export function CategoryCard({ category, isOpen, onToggle }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <div
      className={`
        bg-white border rounded-[var(--radius-card)] transition-all duration-200
        ${isOpen ? "border-border shadow-md" : "border-border hover:shadow-md hover:-translate-y-0.5"}
      `}
    >
      {/* En-tete cliquable */}
      <button
        onClick={onToggle}
        className="w-full text-left p-7 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col items-center text-center">
          <Icon
            size={28}
            className="text-sapin/80"
            strokeWidth={1.5}
          />
          <h3 className="font-body font-semibold text-lg text-anthracite mt-4">
            {category.titre}
          </h3>
          <p className="font-display italic text-sm text-anthracite/50 mt-2">
            {category.accroche}
          </p>
          <ChevronDown
            size={16}
            className={`
              text-anthracite/30 mt-4 transition-transform duration-300
              ${isOpen ? "rotate-180" : ""}
            `}
          />
        </div>
      </button>

      {/* Contenu accordeon */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="border-t border-border-light pt-3">
                {category.sousPages.map((page, i) => (
                  <Link
                    key={page.slug}
                    href={`/${category.slug}/${page.slug}`}
                    className="
                      group flex items-center justify-between py-3 px-2
                      hover:bg-creme rounded-lg transition-colors
                    "
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-body font-semibold text-[15px] text-anthracite">
                        {page.titre}
                      </p>
                      <p className="font-display italic text-[13px] text-anthracite/45 mt-0.5">
                        {page.accroche}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-anthracite/30 ml-3 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

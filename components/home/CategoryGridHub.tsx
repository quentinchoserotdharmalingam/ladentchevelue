"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { categories } from "@/content/categories";
import {
  StaggerContainer,
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";

export function CategoryGridHub() {
  return (
    <section className="bg-creme py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-anthracite/35 text-center mb-8">
          Explorer
        </p>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.id} variants={staggerItemVariants}>
                <Link
                  href={`/${cat.slug}`}
                  className="group block bg-white border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div
                    className="w-8 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-12"
                    style={{ backgroundColor: cat.accentColor }}
                  />
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 opacity-60"
                    style={{ color: cat.accentColor }}
                  />
                  <h2 className="font-display text-base md:text-lg font-bold text-anthracite">
                    {cat.titre}
                  </h2>
                  <p className="font-display italic text-xs text-anthracite/45 mt-1 line-clamp-2">
                    {cat.accroche}
                  </p>
                  <p className="font-body text-[11px] text-anthracite/30 mt-3">
                    {cat.sousPages.length} pages
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

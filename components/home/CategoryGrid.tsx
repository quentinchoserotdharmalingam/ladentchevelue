"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { categories } from "@/content/categories";
import { CategoryCard } from "./CategoryCard";
import {
  StaggerContainer,
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";

export function CategoryGrid() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-creme py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-anthracite">
            Explorer le village
          </h2>
          <p className="font-body text-sm text-anthracite/45 mt-2">
            Cliquez sur une thematique pour decouvrir ses pages
          </p>
        </div>

        {/* Grille */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={staggerItemVariants}>
              <CategoryCard
                category={cat}
                isOpen={openId === cat.id}
                onToggle={() => toggle(cat.id)}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

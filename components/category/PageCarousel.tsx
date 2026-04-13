"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import type { SubPage } from "@/content/categories";

interface PageCarouselProps {
  pages: SubPage[];
  categorySlug: string;
  accentColor: string;
}

export function PageCarousel({ pages, categorySlug, accentColor }: PageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 400;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrow buttons (desktop) */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md items-center justify-center text-anthracite/60 hover:text-anthracite transition-colors"
          aria-label="Precedent"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md items-center justify-center text-anthracite/60 hover:text-anthracite transition-colors"
          aria-label="Suivant"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 md:px-8 pb-4"
      >
        {pages.map((page, i) => (
          <motion.div
            key={page.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="snap-start shrink-0"
          >
            <Link
              href={`/${categorySlug}/${page.slug}`}
              className="group block w-[300px] md:w-[360px] bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Accent bar */}
              <div
                className="w-8 h-1 rounded-full mb-5 transition-all group-hover:w-12"
                style={{ backgroundColor: accentColor }}
              />

              <h3 className="font-display text-lg font-bold text-anthracite mb-2">
                {page.titre}
              </h3>
              <p className="font-display italic text-sm text-anthracite/45 mb-4">
                {page.accroche}
              </p>
              <p className="font-body text-sm text-anthracite/60 leading-relaxed mb-6 line-clamp-3">
                {page.description}
              </p>

              <span className="flex items-center gap-1.5 font-body text-[13px] font-semibold" style={{ color: accentColor }}>
                Decouvrir
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

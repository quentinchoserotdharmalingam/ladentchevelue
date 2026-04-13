"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { mapPOIs, categoryColors, categoryLabels, type MapPOI } from "@/content/map-pois";
import { MountainRange } from "@/components/illustrations/MountainRange";
import { ForestLine } from "@/components/illustrations/ForestLine";

const allCategories = Object.keys(categoryLabels) as MapPOI["category"][];

export function InteractiveMap() {
  const [activePOI, setActivePOI] = useState<MapPOI | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<MapPOI["category"]>>(
    new Set(allCategories)
  );

  const toggleCategory = useCallback((cat: MapPOI["category"]) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }, []);

  const visiblePOIs = mapPOIs.filter((poi) => activeCategories.has(poi.category));

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Layer toggles */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all border ${
              activeCategories.has(cat)
                ? "text-white border-transparent"
                : "bg-white text-anthracite/50 border-border"
            }`}
            style={activeCategories.has(cat) ? { backgroundColor: categoryColors[cat] } : {}}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-sky-100 via-green-50 to-blue-50 rounded-2xl overflow-hidden border border-border shadow-sm">
        {/* Background layers */}
        <div className="absolute top-0 left-0 right-0">
          <MountainRange
            className="w-full h-[40%]"
            colors={{
              back: "rgba(45,80,22,0.08)",
              mid: "rgba(45,80,22,0.12)",
              front: "rgba(45,80,22,0.18)",
            }}
          />
        </div>
        <div className="absolute top-[25%] left-0 right-0">
          <ForestLine className="w-full h-[15%]" color="rgba(45,80,22,0.1)" density="sparse" />
        </div>

        {/* Water area (lakes) */}
        <div className="absolute bottom-[15%] left-[35%] w-[15%] h-[12%] bg-lac/15 rounded-full blur-sm" />
        <div className="absolute bottom-[10%] left-[38%] w-[12%] h-[8%] bg-lac/15 rounded-full blur-sm" />

        {/* POIs */}
        {visiblePOIs.map((poi) => (
          <motion.button
            key={poi.id}
            className="absolute z-10 group"
            style={{ left: `${poi.x}%`, top: `${poi.y}%`, transform: "translate(-50%, -50%)" }}
            onClick={() => setActivePOI(poi)}
            whileHover={{ scale: 1.3 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            aria-label={poi.name}
          >
            {/* Pulse ring */}
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ backgroundColor: categoryColors[poi.category] }}
            />
            {/* Dot */}
            <div
              className="relative w-3 h-3 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: categoryColors[poi.category] }}
            />
            {/* Hover label */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap px-2 py-1 rounded-md bg-anthracite text-white text-[10px] font-body opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {poi.name}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {activePOI && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-72 bg-white rounded-xl shadow-xl border border-border p-5 z-20"
          >
            <button
              onClick={() => setActivePOI(null)}
              className="absolute top-3 right-3 text-anthracite/30 hover:text-anthracite transition-colors"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>

            <div
              className="w-2 h-2 rounded-full mb-3"
              style={{ backgroundColor: categoryColors[activePOI.category] }}
            />
            <h3 className="font-display text-lg font-bold text-anthracite mb-1">
              {activePOI.name}
            </h3>
            <p className="font-body text-sm text-anthracite/60 mb-4">
              {activePOI.description}
            </p>

            {activePOI.link && (
              <Link
                href={activePOI.link}
                className="flex items-center gap-1.5 text-sm font-body font-semibold transition-colors"
                style={{ color: categoryColors[activePOI.category] }}
              >
                En savoir plus
                <ArrowRight size={14} />
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

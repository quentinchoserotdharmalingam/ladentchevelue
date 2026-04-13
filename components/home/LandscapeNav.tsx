"use client";

import Link from "next/link";
import {
  Home as HomeIcon,
  Landmark,
  Mountain,
  Wine,
  BookOpen,
  Footprints,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const places = [
  { href: "/village", label: "Village", icon: HomeIcon, color: "#C4943A" },
  { href: "/patrimoine", label: "Patrimoine", icon: Landmark, color: "#8B6F47" },
  { href: "/nature", label: "Nature", icon: Mountain, color: "#2D5016" },
  { href: "/terroir", label: "Terroir", icon: Wine, color: "#C4943A" },
  { href: "/histoire", label: "Histoire", icon: BookOpen, color: "#5B8FA8" },
  { href: "/sports", label: "Sports", icon: Footprints, color: "#2D5016" },
];

export function LandscapeNav() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex items-end justify-center gap-8 md:gap-14 min-w-max px-8 py-4">
        {places.map((place, i) => {
          const Icon = place.icon;
          return (
            <ScrollReveal key={place.href} delay={i * 0.1} direction="up">
              <Link
                href={place.href}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{ backgroundColor: `${place.color}15`, color: place.color }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-body text-xs md:text-sm font-medium text-anthracite/70 group-hover:text-anthracite transition-colors">
                  {place.label}
                </span>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Ground line */}
      <div className="h-px bg-anthracite/10 mx-8 mt-2" aria-hidden="true" />
    </div>
  );
}

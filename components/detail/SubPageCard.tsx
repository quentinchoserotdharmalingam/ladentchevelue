"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface SubPageCardProps {
  href: string;
  titre: string;
  accroche: string;
  description: string;
  accentColor: string;
  delay: number;
}

export function SubPageCard({
  href,
  titre,
  accroche,
  description,
  accentColor,
  delay,
}: SubPageCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        href={href}
        className="
          group block bg-white border border-border rounded-[var(--radius-card)]
          p-6 shadow-[var(--shadow-card)]
          hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5
          transition-all duration-200
        "
        style={{
          borderLeftColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderLeftColor = accentColor;
          e.currentTarget.style.borderLeftWidth = "3px";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderLeftColor = "transparent";
          e.currentTarget.style.borderLeftWidth = "1px";
        }}
      >
        <h3 className="font-body font-semibold text-[17px] text-anthracite">
          {titre}
        </h3>
        <p className="font-display italic text-sm text-anthracite/50 mt-1.5">
          {accroche}
        </p>
        <p className="font-body text-sm text-anthracite/60 mt-3 leading-relaxed">
          {description}
        </p>
        <p className="flex items-center gap-1 font-body text-[13px] font-semibold text-sapin mt-4">
          Decouvrir
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </p>
      </Link>
    </ScrollReveal>
  );
}

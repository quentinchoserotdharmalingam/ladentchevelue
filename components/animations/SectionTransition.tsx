"use client";

interface SectionTransitionProps {
  type?: "fade" | "wave" | "diagonal";
  fromColor?: string;
  toColor?: string;
  className?: string;
  flip?: boolean;
}

export function SectionTransition({
  type = "fade",
  fromColor = "var(--color-creme)",
  toColor = "transparent",
  className,
  flip = false,
}: SectionTransitionProps) {
  if (type === "wave") {
    return (
      <div className={`relative w-full overflow-hidden ${className ?? ""}`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={`w-full h-16 md:h-24 block ${flip ? "rotate-180" : ""}`}
          fill={fromColor}
        >
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    );
  }

  if (type === "diagonal") {
    return (
      <div className={`relative w-full overflow-hidden ${className ?? ""}`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className={`w-full h-12 md:h-20 block ${flip ? "rotate-180" : ""}`}
          fill={fromColor}
        >
          <polygon points="0,0 1440,80 0,80" />
        </svg>
      </div>
    );
  }

  // Default: gradient fade
  return (
    <div
      className={`w-full h-24 md:h-32 ${className ?? ""}`}
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
      aria-hidden="true"
    />
  );
}

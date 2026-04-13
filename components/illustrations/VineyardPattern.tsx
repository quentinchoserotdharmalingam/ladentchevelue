"use client";

interface VineyardPatternProps {
  className?: string;
  color?: string;
  rows?: number;
}

export function VineyardPattern({
  className,
  color = "rgba(196, 148, 58, 0.4)",
  rows = 8,
}: VineyardPatternProps) {
  const rowHeight = 200 / rows;

  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: rows }, (_, i) => {
        const y = i * rowHeight + rowHeight * 0.5;
        const skew = i * 2;
        const opacity = 0.3 + (i / rows) * 0.4;
        return (
          <g key={i} opacity={opacity}>
            {/* Terrace line */}
            <line
              x1={skew}
              y1={y}
              x2={1440 + skew}
              y2={y + 3}
              stroke={color}
              strokeWidth="1.5"
            />
            {/* Vine dots along the row */}
            {Array.from({ length: 24 }, (_, j) => (
              <circle
                key={j}
                cx={j * 60 + 30 + skew + Math.sin(j * 1.7) * 8}
                cy={y - 4 + Math.sin(j * 2.3) * 2}
                r={2.5 + Math.sin(j * 3.1) * 0.8}
                fill={color}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

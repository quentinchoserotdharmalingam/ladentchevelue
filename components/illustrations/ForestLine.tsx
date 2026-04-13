"use client";

interface ForestLineProps {
  className?: string;
  color?: string;
  density?: "sparse" | "normal" | "dense";
  height?: number;
}

export function ForestLine({
  className,
  color = "rgba(45, 80, 22, 0.6)",
  density = "normal",
  height = 120,
}: ForestLineProps) {
  const counts = { sparse: 12, normal: 20, dense: 30 };
  const count = counts[density];
  const spacing = 1440 / count;

  const trees = Array.from({ length: count }, (_, i) => {
    const x = i * spacing + spacing / 2 + (Math.sin(i * 7.3) * spacing * 0.3);
    const h = height * (0.6 + Math.abs(Math.sin(i * 3.7)) * 0.4);
    const w = h * 0.35;
    return { x, h, w };
  });

  return (
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      {trees.map((tree, i) => (
        <polygon
          key={i}
          points={`${tree.x},${height} ${tree.x - tree.w},${height} ${tree.x},${height - tree.h}`}
          fill={color}
          opacity={0.7 + Math.sin(i * 2.1) * 0.3}
        />
      ))}
      {/* Mirror trees for denser look */}
      {trees.map((tree, i) => (
        <polygon
          key={`m${i}`}
          points={`${tree.x},${height} ${tree.x + tree.w * 0.8},${height} ${tree.x},${height - tree.h * 0.85}`}
          fill={color}
          opacity={0.5 + Math.sin(i * 4.3) * 0.2}
        />
      ))}
    </svg>
  );
}

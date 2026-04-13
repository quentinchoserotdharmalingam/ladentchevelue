"use client";

interface MountainRangeProps {
  className?: string;
  colors?: {
    back?: string;
    mid?: string;
    front?: string;
    sky?: string;
  };
}

export function MountainRange({
  className,
  colors = {},
}: MountainRangeProps) {
  const {
    back = "rgba(45, 80, 22, 0.2)",
    mid = "rgba(45, 80, 22, 0.4)",
    front = "rgba(45, 80, 22, 0.7)",
    sky = "none",
  } = colors;

  return (
    <svg
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      {/* Sky fill */}
      {sky !== "none" && <rect width="1440" height="600" fill={sky} />}

      {/* Back range — distant, soft */}
      <path
        d="M0,450 L120,380 L240,420 L360,340 L440,300 L520,250 L600,200 L680,170 L720,150 L760,170 L840,220 L920,260 L1000,300 L1080,280 L1160,320 L1240,360 L1320,390 L1440,420 L1440,600 L0,600 Z"
        fill={back}
      />

      {/* Mid range — La Dent du Chat silhouette */}
      <path
        d="M0,500 L100,460 L200,480 L300,430 L400,380 L480,320 L540,280 L600,240 L650,210 L680,180 L700,140 L710,120 L720,100 L730,120 L740,145 L770,190 L820,250 L900,310 L980,350 L1060,380 L1140,400 L1220,430 L1300,450 L1440,470 L1440,600 L0,600 Z"
        fill={mid}
      />

      {/* Front range — closest, darkest */}
      <path
        d="M0,550 L80,530 L160,540 L240,510 L320,480 L400,460 L480,440 L560,420 L640,400 L700,390 L760,400 L840,430 L920,450 L1000,460 L1080,470 L1160,480 L1240,500 L1320,520 L1440,530 L1440,600 L0,600 Z"
        fill={front}
      />
    </svg>
  );
}

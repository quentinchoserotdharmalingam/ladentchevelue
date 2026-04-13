"use client";

interface LakeReflectionProps {
  className?: string;
  color?: string;
}

export function LakeReflection({
  className,
  color = "rgba(91, 143, 168, 0.3)",
}: LakeReflectionProps) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lake-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="1440" height="200" fill="url(#lake-grad)" />
        {/* Animated wave lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M0,${40 + i * 35} Q360,${25 + i * 35} 720,${45 + i * 35} T1440,${35 + i * 35}`}
            stroke={color}
            strokeWidth="1"
            fill="none"
            opacity={0.4 - i * 0.06}
            className="animate-wave"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

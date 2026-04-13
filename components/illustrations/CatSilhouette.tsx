"use client";

interface CatSilhouetteProps {
  pose?: "sitting" | "prowling" | "leaping";
  className?: string;
  color?: string;
  size?: number;
}

export function CatSilhouette({
  pose = "sitting",
  className,
  color = "currentColor",
  size = 80,
}: CatSilhouetteProps) {
  const paths: Record<string, string> = {
    sitting:
      // Cat sitting with tail curled, ears up
      "M50,85 C50,85 48,70 48,65 C48,55 45,50 42,48 C39,46 38,42 38,38 C38,34 40,30 40,28 C40,24 38,22 36,20 L38,14 L42,18 L44,12 L47,18 C48,16 50,14 52,14 C54,14 56,16 57,18 L60,12 L62,18 L66,14 L64,20 C62,22 60,24 60,28 C60,30 62,34 62,38 C62,42 61,46 58,48 C55,50 52,55 52,65 C52,70 50,85 50,85 Z M42,85 C42,85 30,82 25,78 C22,76 24,74 28,75 C34,77 42,78 42,78 Z",
    prowling:
      // Cat walking/prowling, body stretched
      "M15,55 C15,55 18,48 22,45 C26,42 30,40 35,38 C38,37 40,35 42,33 L40,26 L44,30 L46,24 L48,30 C50,28 52,28 54,30 L56,24 L58,30 L62,26 L60,33 C62,35 65,37 68,38 C72,39 78,42 82,50 C82,50 84,55 84,60 L80,70 L78,60 L76,55 C76,55 72,52 68,52 C64,52 56,55 50,55 C44,55 36,52 32,52 C28,52 24,55 24,55 L22,60 L20,70 L16,60 C16,60 15,57 15,55 Z M82,60 C84,58 88,56 90,58 C92,60 90,62 88,62 C86,62 84,62 82,60 Z",
    leaping:
      // Cat leaping through the air
      "M20,60 C20,60 25,48 32,42 C36,39 40,36 45,34 L43,26 L47,30 L49,24 L51,30 C53,28 55,28 57,30 L59,24 L61,30 L65,26 L63,34 C68,36 72,38 76,42 C80,46 85,55 85,58 L82,65 L78,55 C75,50 72,48 68,47 C64,46 58,48 52,50 C46,52 40,54 36,52 C32,50 28,48 25,50 L22,58 L18,68 Z M12,72 C12,72 16,66 20,64 Z M80,72 C80,72 84,66 88,64 Z",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d={paths[pose]} fill={color} />
    </svg>
  );
}

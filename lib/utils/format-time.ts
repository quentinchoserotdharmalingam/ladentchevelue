/**
 * Convertit un temps en minutes en format lisible
 * 113 -> "1h53"
 * 60 -> "1h00"
 * 45 -> "45min"
 */
export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${m.toString().padStart(2, "0")}`;
}

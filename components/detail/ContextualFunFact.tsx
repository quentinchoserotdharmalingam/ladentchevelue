import { Lightbulb } from "lucide-react";

interface ContextualFunFactProps {
  fact: string;
}

export function ContextualFunFact({ fact }: ContextualFunFactProps) {
  return (
    <div className="bg-or/5 border border-or/15 rounded-[var(--radius-card)] p-5 mt-8">
      <div className="flex gap-3">
        <Lightbulb size={18} className="text-or flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-body font-semibold text-sm text-anthracite mb-1">
            Le saviez-vous ?
          </p>
          <p className="font-body text-sm text-anthracite/70 leading-relaxed">
            {fact}
          </p>
        </div>
      </div>
    </div>
  );
}

import type { InfoBox as InfoBoxType } from "@/content/types";
import { Info } from "lucide-react";

interface InfoBoxProps {
  infoBox: InfoBoxType;
}

export function InfoBox({ infoBox }: InfoBoxProps) {
  return (
    <div className="bg-lac/5 border border-lac/15 rounded-[var(--radius-card)] p-6">
      <div className="flex items-center gap-2 mb-4">
        <Info size={18} className="text-lac" />
        <h3 className="font-body font-semibold text-base text-anthracite">
          {infoBox.title}
        </h3>
      </div>
      <dl className="space-y-2">
        {infoBox.items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <dt className="font-body font-semibold text-sm text-anthracite min-w-[100px]">
              {item.label}
            </dt>
            <dd className="font-body text-sm text-anthracite/70">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

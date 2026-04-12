"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/record", label: "Le defi" },
  { href: "/record/classement", label: "Classement" },
  { href: "/record/soumettre", label: "Soumettre" },
];

export function RecordNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-1 py-3 bg-white/80 backdrop-blur-sm border-b border-border">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`
              px-5 py-2.5 rounded-lg font-body text-sm font-medium transition-colors
              ${
                isActive
                  ? "bg-sapin text-white"
                  : "text-anthracite/60 hover:bg-creme hover:text-anthracite"
              }
            `}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}

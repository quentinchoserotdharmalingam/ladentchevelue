import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="max-w-7xl mx-auto px-5 md:px-8 py-4"
    >
      <ol className="flex items-center gap-1 text-sm font-body">
        <li>
          <Link
            href="/"
            className="text-anthracite/50 hover:text-sapin transition-colors"
          >
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={14} className="text-anthracite/30" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-anthracite/50 hover:text-sapin transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-anthracite/80 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

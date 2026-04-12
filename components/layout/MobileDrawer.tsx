"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  accent?: boolean;
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  isActive: (href: string) => boolean;
}

export function MobileDrawer({
  open,
  onClose,
  links,
  isActive,
}: MobileDrawerProps) {
  // Empêcher le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-creme shadow-xl
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={onClose}
            className="p-2 text-anthracite/60 hover:text-anthracite transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-6 pb-8">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`
                    block px-4 py-3 text-lg font-body rounded-lg transition-colors
                    ${
                      link.accent
                        ? isActive(link.href)
                          ? "text-or font-semibold bg-or/5"
                          : "text-or hover:bg-or/5"
                        : isActive(link.href)
                          ? "text-sapin font-semibold bg-sapin/5"
                          : "text-anthracite/80 hover:text-sapin hover:bg-sapin/5"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer du drawer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-border">
          <p className="font-display italic text-sm text-muted text-center">
            Saint-Jean-de-Chevelu, Savoie
          </p>
        </div>
      </div>
    </>
  );
}

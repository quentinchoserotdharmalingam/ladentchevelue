"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileDrawer } from "./MobileDrawer";

const navLinks = [
  { href: "/village", label: "Le village" },
  { href: "/patrimoine", label: "Patrimoine" },
  { href: "/nature", label: "Nature" },
  { href: "/terroir", label: "Terroir" },
  { href: "/histoire", label: "Histoire" },
  { href: "/sports", label: "Sports" },
  { href: "/record", label: "Le Record", accent: true },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le drawer quand on change de page
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const headerBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-creme/95 backdrop-blur-md shadow-sm";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-anthracite hover:text-sapin transition-colors"
          >
            La Dent Chevelue
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-2 text-sm font-body font-medium rounded-md transition-colors
                  ${
                    link.accent
                      ? isActive(link.href)
                        ? "text-or font-semibold"
                        : "text-or hover:text-or/80"
                      : isActive(link.href)
                        ? "text-sapin font-semibold"
                        : "text-anthracite/75 hover:text-sapin"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Burger button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden p-2 text-anthracite hover:text-sapin transition-colors"
            aria-label="Ouvrir le menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={navLinks}
        isActive={isActive}
      />
    </>
  );
}

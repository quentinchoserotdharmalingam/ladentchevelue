"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  X,
  Home as HomeIcon,
  Landmark,
  Mountain,
  Wine,
  BookOpen,
  Footprints,
  Map,
  Trophy,
  HelpCircle,
  Mail,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/village", label: "Village", icon: HomeIcon },
  { href: "/patrimoine", label: "Patrimoine", icon: Landmark },
  { href: "/nature", label: "Nature", icon: Mountain },
  { href: "/terroir", label: "Terroir", icon: Wine },
  { href: "/histoire", label: "Histoire", icon: BookOpen },
  { href: "/sports", label: "Sports", icon: Footprints },
  { href: "/carte", label: "Carte", icon: Map },
  { href: "/record", label: "Record", icon: Trophy },
  { href: "/quiz", label: "Quiz", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show nav after scrolling past ~70% of viewport height * 5 sections
      const threshold = window.innerHeight * 3.5;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-anthracite/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Expanded menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-20 right-5 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-border p-4 w-56"
            aria-label="Navigation principale"
          >
            <ul className="space-y-0.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body transition-colors ${
                        isActive
                          ? "bg-sapin/10 text-sapin font-semibold"
                          : "text-anthracite/70 hover:bg-creme hover:text-anthracite"
                      }`}
                    >
                      <Icon size={16} strokeWidth={isActive ? 2.5 : 1.5} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <AnimatePresence>
        {(isVisible || isOpen) && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-sapin text-white shadow-lg hover:shadow-xl hover:bg-sapin-light transition-all flex items-center justify-center"
            aria-label={isOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="compass"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Compass size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

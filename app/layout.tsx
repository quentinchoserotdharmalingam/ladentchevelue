import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollCat } from "@/components/easter-eggs/ScrollCat";
import { KonamiCat } from "@/components/easter-eggs/KonamiCat";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "La Dent Chevelue — Saint-Jean-de-Chevelu, Savoie",
    template: "%s — La Dent Chevelue",
  },
  description:
    "Decouvrez Saint-Jean-de-Chevelu, village savoyard au pied de la Dent du Chat. Patrimoine, nature, histoire, terroir et le Record de la Dent Chevelue.",
  metadataBase: new URL("https://ladentchevelue.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Dent Chevelue",
    title: "La Dent Chevelue — Saint-Jean-de-Chevelu, Savoie",
    description:
      "Entre lac et montagne, un village savoyard a decouvrir. Patrimoine, nature, randonnees, terroir et le defi trail de la Dent Chevelue.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingNav />
        <ScrollCat />
        <KonamiCat />
      </body>
    </html>
  );
}

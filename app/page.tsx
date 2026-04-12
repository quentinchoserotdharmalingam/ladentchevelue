import { Hero } from "@/components/home/Hero";
import { RecordBanner } from "@/components/home/RecordBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FunFact } from "@/components/home/FunFact";

export default function Home() {
  return (
    <>
      <Hero />
      <RecordBanner />
      <CategoryGrid />
      <FunFact />

      {/* Signature lieu */}
      <div className="py-12 text-center">
        <p className="font-display italic text-base text-anthracite/25">
          Saint-Jean-de-Chevelu · Savoie · 310 m
        </p>
      </div>
    </>
  );
}

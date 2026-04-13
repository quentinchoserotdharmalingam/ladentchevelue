import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/content/categories";
import { ChapterHero } from "@/components/category/ChapterHero";
import { PageCarousel } from "@/components/category/PageCarousel";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.titre,
    description: category.description,
    openGraph: {
      title: `${category.titre} — La Dent Chevelue`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const Icon = category.icon;

  return (
    <>
      <ChapterHero
        titre={category.titre}
        accroche={category.accroche}
        description={category.description}
        iconElement={<Icon size={40} strokeWidth={1.5} />}
        accentColor={category.accentColor}
        heroGradient={category.heroGradient}
      />

      {/* Pages carousel */}
      <section className="bg-creme py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-sm text-anthracite/35 text-center mb-10">
            {category.sousPages.length} pages a decouvrir
          </p>
          <PageCarousel
            pages={category.sousPages}
            categorySlug={category.slug}
            accentColor={category.accentColor}
          />
        </div>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/content/categories";
import { getPageContent } from "@/content";
import { DetailHero } from "@/components/detail/DetailHero";
import { ImmersiveSectionRenderer } from "@/components/detail/ImmersiveSectionRenderer";
import { ReadingProgress } from "@/components/detail/ReadingProgress";
import { CategorySidebar } from "@/components/layout/CategorySidebar";
import { InfoBox } from "@/components/detail/InfoBox";
import { PageNavigation } from "@/components/detail/PageNavigation";
import { ContextualFunFact } from "@/components/detail/ContextualFunFact";

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const cat of categories) {
    for (const page of cat.sousPages) {
      params.push({ category: cat.slug, slug: page.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category: catSlug, slug } = await params;
  const content = getPageContent(catSlug, slug);
  const category = getCategoryBySlug(catSlug);
  if (!content || !category) return {};

  const description =
    content.subtitle ||
    (content.sections[0]?.type === "text"
      ? content.sections[0].content.slice(0, 155) + "..."
      : category.description);

  return {
    title: content.title,
    description,
    openGraph: {
      title: `${content.title} — La Dent Chevelue`,
      description,
    },
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: catSlug, slug } = await params;
  const content = getPageContent(catSlug, slug);
  const category = getCategoryBySlug(catSlug);

  if (!content || !category) notFound();

  return (
    <>
      <ReadingProgress color={category.accentColor} />
      <CategorySidebar
        pages={category.sousPages}
        categorySlug={category.slug}
        currentSlug={slug}
        accentColor={category.accentColor}
      />

      {/* Hero */}
      <DetailHero
        title={content.title}
        subtitle={content.subtitle}
        categoryTitle={category.titre}
        categorySlug={category.slug}
        accentColor={category.accentColor}
        heroGradient={category.heroGradient}
      />

      {/* Content */}
      <section className="bg-creme py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <article>
            <ImmersiveSectionRenderer
              sections={content.sections}
              accentColor={category.accentColor}
            />
          </article>

          {content.infoBox && (
            <div className="mt-16">
              <InfoBox infoBox={content.infoBox} />
            </div>
          )}

          {content.funFact && (
            <ContextualFunFact fact={content.funFact} />
          )}

          <PageNavigation
            prevPage={content.prevPage}
            nextPage={content.nextPage}
          />
        </div>
      </section>
    </>
  );
}

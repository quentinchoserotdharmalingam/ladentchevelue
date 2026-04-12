import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/content/categories";
import { getPageContent, getAllPages } from "@/content";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionRenderer } from "@/components/detail/SectionRenderer";
import { InfoBox } from "@/components/detail/InfoBox";
import { PageNavigation } from "@/components/detail/PageNavigation";
import { ContextualFunFact } from "@/components/detail/ContextualFunFact";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

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
      {/* Hero */}
      <section className="bg-creme pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: category.titre, href: `/${category.slug}` },
              { label: content.title },
            ]}
          />

          <ScrollReveal>
            <div className="mt-6">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-anthracite">
                {content.title}
              </h1>
              {content.subtitle && (
                <p className="font-display italic text-lg text-anthracite/55 mt-3">
                  {content.subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-creme pb-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal delay={0.15}>
            <article className="mt-8">
              <SectionRenderer sections={content.sections} />
            </article>

            {/* Info box */}
            {content.infoBox && (
              <div className="mt-10">
                <InfoBox infoBox={content.infoBox} />
              </div>
            )}

            {/* Fun fact contextuel */}
            {content.funFact && (
              <ContextualFunFact fact={content.funFact} />
            )}

            {/* Navigation prev/next */}
            <PageNavigation
              prevPage={content.prevPage}
              nextPage={content.nextPage}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

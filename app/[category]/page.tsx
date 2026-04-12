import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/content/categories";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SubPageCard } from "@/components/detail/SubPageCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

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
      {/* Hero gradient */}
      <section
        className={`bg-gradient-to-br ${category.heroGradient} pt-24 pb-16 md:pb-20`}
      >
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center text-white">
          <ScrollReveal>
            <Icon
              size={40}
              className="text-white/70 mx-auto mb-4"
              strokeWidth={1.5}
            />
            <h1
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              {category.titre}
            </h1>
            <p className="font-display italic text-lg text-white/65 mt-2">
              {category.accroche}
            </p>
            <p className="font-body text-[15px] text-white/75 mt-4 max-w-xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: category.titre }]} />

      {/* Grille de sous-pages */}
      <section className="bg-creme py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="font-body text-sm text-anthracite/40 text-center mb-8">
            {category.sousPages.length} pages a decouvrir
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.sousPages.map((page, i) => (
              <SubPageCard
                key={page.slug}
                href={`/${category.slug}/${page.slug}`}
                titre={page.titre}
                accroche={page.accroche}
                description={page.description}
                accentColor={category.accentColor}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

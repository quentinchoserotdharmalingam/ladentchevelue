import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ladentchevelue.fr";

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/record`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/record/classement`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/record/soumettre`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/quiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/carte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  // Pages categories
  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Pages detail
  const detailPages: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.sousPages.map((p) => ({
      url: `${baseUrl}/${c.slug}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...categoryPages, ...detailPages];
}

import type { PageContent } from "../types";

export const painDeMayouContent: PageContent = {
  slug: "pain-de-mayou",
  title: "Le pain de Mayou",
  subtitle: "Recette, tradition, four a bois",
  category: "terroir",
  sections: [
    {
      type: "text",
      content: "Contenu en cours de redaction.",
    },
  ],
  prevPage: {
    title: "Les vins de Chevelu",
    slug: "vins",
    categorySlug: "terroir",
  },
  nextPage: {
    title: "La cooperative de Yenne",
    slug: "cooperative",
    categorySlug: "terroir",
  },
};

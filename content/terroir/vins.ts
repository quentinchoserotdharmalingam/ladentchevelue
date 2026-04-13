import type { PageContent } from "../types";

export const vinsContent: PageContent = {
  slug: "vins",
  title: "Les vins de Chevelu",
  subtitle: "Vignobles au pied de la Dent",
  category: "terroir",
  sections: [
    {
      type: "text",
      content: "Contenu en cours de redaction.",
    },
  ],
  prevPage: null,
  nextPage: {
    title: "Le pain de Mayou",
    slug: "pain-de-mayou",
    categorySlug: "terroir",
  },
};

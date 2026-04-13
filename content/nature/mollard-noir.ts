import type { PageContent } from "../types";

export const mollardNoirContent: PageContent = {
  slug: "mollard-noir",
  title: "Mollard Noir",
  subtitle: "Le voisin discret de la Dent",
  category: "nature",
  sections: [
    {
      type: "text",
      content: "Contenu en cours de redaction.",
    },
  ],
  prevPage: {
    title: "Le Cret de Monthoux",
    slug: "cret-monthoux",
    categorySlug: "nature",
  },
  nextPage: {
    title: "Les vignobles",
    slug: "vignobles",
    categorySlug: "nature",
  },
};

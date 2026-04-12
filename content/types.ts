export interface InfoBox {
  title: string;
  items: { label: string; value: string }[];
}

export type Section =
  | { type: "text"; title?: string; content: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "highlight"; text: string }
  | { type: "table"; title?: string; rows: [string, string][] }
  | { type: "list"; title?: string; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "separator" }
  | { type: "subsection"; title: string; content: string };

export interface PageLink {
  title: string;
  slug: string;
  categorySlug: string;
}

export interface PageContent {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  heroImage?: string;
  sections: Section[];
  infoBox?: InfoBox;
  funFact?: string;
  prevPage?: PageLink | null;
  nextPage?: PageLink | null;
}

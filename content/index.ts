import type { PageContent } from "./types";
import { categories } from "./categories";

// Import toutes les pages de contenu
// Les pages sans contenu reel auront un placeholder auto-genere

// Histoire
import { legendeContent } from "./histoire/legende";
import { colDuChatContent } from "./histoire/col-du-chat";

// Nature
import { lacsContent } from "./nature/lacs";
import { dentDuChatContent } from "./nature/dent-du-chat";
import { vignoblesContent } from "./nature/vignobles";
import { fauneFlorContent } from "./nature/faune-flore";
import { geologieContent } from "./nature/geologie";

// Sports
import { randonneesContent } from "./sports/randonnees";

const contentMap: Record<string, PageContent> = {};

// Enregistrer les pages avec contenu
function register(content: PageContent) {
  contentMap[`${content.category}/${content.slug}`] = content;
}

register(legendeContent);
register(colDuChatContent);
register(lacsContent);
register(dentDuChatContent);
register(vignoblesContent);
register(fauneFlorContent);
register(geologieContent);
register(randonneesContent);

/**
 * Genere un placeholder pour les pages sans contenu
 */
function generatePlaceholder(
  categorySlug: string,
  pageSlug: string
): PageContent | undefined {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return undefined;

  const pageIndex = category.sousPages.findIndex((p) => p.slug === pageSlug);
  const page = category.sousPages[pageIndex];
  if (!page) return undefined;

  const prevPage =
    pageIndex > 0
      ? {
          title: category.sousPages[pageIndex - 1].titre,
          slug: category.sousPages[pageIndex - 1].slug,
          categorySlug: category.slug,
        }
      : null;

  const nextPage =
    pageIndex < category.sousPages.length - 1
      ? {
          title: category.sousPages[pageIndex + 1].titre,
          slug: category.sousPages[pageIndex + 1].slug,
          categorySlug: category.slug,
        }
      : null;

  return {
    slug: pageSlug,
    title: page.titre,
    subtitle: page.accroche,
    category: categorySlug,
    sections: [
      {
        type: "text",
        content:
          "Cette page est en cours de redaction. Le contenu sera bientot disponible.",
      },
      {
        type: "highlight",
        text: "Vous avez des informations, des anecdotes ou des photos a partager sur ce sujet ? Contactez-nous !",
      },
    ],
    prevPage,
    nextPage,
  };
}

/**
 * Recuperer le contenu d'une page (contenu reel ou placeholder)
 */
export function getPageContent(
  categorySlug: string,
  pageSlug: string
): PageContent | undefined {
  const key = `${categorySlug}/${pageSlug}`;
  return contentMap[key] || generatePlaceholder(categorySlug, pageSlug);
}

/**
 * Recuperer toutes les pages avec contenu reel
 */
export function getAllPages(): PageContent[] {
  return Object.values(contentMap);
}

/**
 * Verifier si une page a du contenu reel (pas un placeholder)
 */
export function hasRealContent(
  categorySlug: string,
  pageSlug: string
): boolean {
  return `${categorySlug}/${pageSlug}` in contentMap;
}

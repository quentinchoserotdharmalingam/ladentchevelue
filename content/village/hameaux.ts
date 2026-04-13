import type { PageContent } from "../types";

export const hameauxContent: PageContent = {
  slug: "hameaux",
  title: "Les hameaux de Saint-Jean-de-Chevelu",
  subtitle:
    "Saint-Jean-de-Chevelu n'est pas un village. C'est une douzaine de villages qui se sont mis d'accord pour n'en former qu'un.",
  category: "village",
  sections: [
    {
      type: "text",
      title: "Une constellation",
      content:
        "Pas de centre unique. Pas de grand-place. Pas de rue principale. Saint-Jean-de-Chevelu est une commune dispersée : ses douze hameaux s'égrènent entre les lacs, les vignobles et les premiers contreforts du Mont du Chat, entre 295 et 600 mètres d'altitude.\n\nChaque hameau a son caractère, son patrimoine, parfois sa maison forte, sa fontaine ou sa chapelle. Les relier à pied, c'est le meilleur moyen de comprendre le village. Le tour des lacs passe par la plupart d'entre eux.",
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "Saint-Jean-d'en-Bas (~310 m)",
      content:
        "Le hameau du bas, celui par lequel on arrive. C'est ici que se trouvent l'école, la salle communale, et la route qui mène à la base de loisirs des lacs. Le sentier du marais part de là. C'est le hameau de la vie quotidienne.",
    },
    {
      type: "subsection",
      title: "Saint-Jean-d'en-Haut (~380 m)",
      content:
        "Le cœur historique. C'est ici que se dresse l'**église Saint-Jean-Baptiste** (1845), avec son œuvre d'art contemporain monumentale de 75 m² dans le chœur, réalisée entre 1993 et 1996. Le clocher a été refait en 2019. Depuis le parvis, la vue plonge sur les deux lacs et le marais.",
    },
    {
      type: "subsection",
      title: "Les Grangeons (~470 m)",
      content:
        "L'un des hameaux les plus remarquables. Les Grangeons tire son nom des **sartos** — ces petits bâtiments de pierre, mi-celliers mi-dortoirs, où les vignerons de La Chapelle-du-Mont-du-Chat venaient dormir quand ils traversaient la montagne pour travailler les vignes du versant ouest. Le hameau a été joliment restauré. Une fontaine-bassin permet de se rafraîchir.",
    },
    {
      type: "subsection",
      title: "Monthoux (~540 m)",
      content:
        "Le plus complet, le plus photographié. Monthoux possède une **chapelle** (avec sa piétà en bois peint du XVIe siècle, classée Monument Historique), une **tour**, une **maison forte** médiévale, et le **Crêt de Monthoux** — un promontoire à 5 minutes qui offre un panorama à 360°. C'est aussi le cru viticole star de la commune : l'AOC **Roussette de Savoie cru Monthoux**.",
    },
    {
      type: "subsection",
      title: "Vernatel (~450 m)",
      content:
        "Le hameau de la montée. C'est par là que passent les randonneurs qui attaquent l'ascension de la Dent du Chat. On y trouve le dernier point d'eau avant le col. À proximité se trouve la **maison forte de Champrovent**, où le peintre Balthus a séjourné en 1941-1942.",
    },
    {
      type: "subsection",
      title: "Montmaire, Gerbaz, La Platière, Pré-Magnin, Champrond, Taba",
      content:
        "**Montmaire** (~400 m) — hameau de transition entre les lacs et le vignoble, murs de pierre et belles bâtisses.\n\n**Gerbaz** (~400 m) — en lisière de forêt, croix en bois à l'entrée, oratoire, départ vers la Charvaz.\n\n**La Platière** (~380 m) — maison forte médiévale avec tourelle carrée, sur le tour des lacs.\n\n**Pré-Magnin** (~350 m) — accès à la route du col du Chat.\n\n**Champrond** (~380 m) — ancien château dont les tours furent rasées par la Révolution en 1794.\n\n**Taba** (~500 m) — petit hameau perché avec vue sur la vallée.",
    },
    { type: "separator" },
    {
      type: "table",
      title: "Petit guide pour se perdre",
      rows: [
        ["Saint-Jean-d'en-Bas", "École, base loisirs — ✅ Tour des lacs"],
        ["Saint-Jean-d'en-Haut", "Église & œuvre d'art — ✅ Tour des lacs"],
        ["Les Grangeons", "Sartos, fontaine — ✅ Tour des lacs"],
        ["Monthoux", "Chapelle, panorama, cru AOC — ✅ Tour des lacs"],
        ["Vernatel", "Point d'eau, Dent du Chat — ❌"],
        ["Gerbaz", "Forêt, oratoire — ✅ Tour des lacs"],
        ["La Platière", "Maison forte — ✅ Tour des lacs"],
        ["Montmaire", "Vignobles — ✅ Tour des lacs"],
        ["Pré-Magnin", "Route du col — ❌"],
        ["Champrond", "Ancien château — ❌"],
        ["Taba", "Hauteurs, vue — ❌"],
      ],
    },
    {
      type: "quote",
      text: "Douze hameaux, douze manières de regarder le même paysage. Depuis Saint-Jean-d'en-Bas, on voit les lacs. Depuis Monthoux, les vignes. Depuis Gerbaz, la forêt. Et depuis le Crêt, on voit tout en même temps.",
    },
  ],
  funFact:
    "Les sartos des Grangeons étaient les dortoirs des vignerons de La Chapelle-du-Mont-du-Chat, qui traversaient la montagne à pied pour venir travailler les vignes du versant ouest.",
  prevPage: {
    title: "Le village en bref",
    slug: "en-bref",
    categorySlug: "village",
  },
  nextPage: {
    title: "Les saisons",
    slug: "saisons",
    categorySlug: "village",
  },
};

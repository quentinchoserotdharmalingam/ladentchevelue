import type { PageContent } from "../types";

export const dentDuChatContent: PageContent = {
  slug: "dent-du-chat",
  title: "La Dent du Chat",
  subtitle:
    "1 393 mètres de roche, de légende et de vertige. Le sommet qui veille sur Chevelu.",
  category: "nature",
  sections: [
    {
      type: "text",
      title: "Un sommet, un symbole",
      content:
        "On la voit de partout. Depuis les vignobles, depuis les lacs, depuis la terrasse de n'importe quelle maison du village. Cette pointe de calcaire qui perce la ligne de crête comme une canine plantée dans le ciel — c'est la Dent du Chat.\n\nÀ 1 393 mètres d'altitude, elle domine le lac du Bourget à l'est et l'avant-pays savoyard à l'ouest. Son nom vient d'une légende vieille de plusieurs siècles : la canine perdue d'un chat monstrueux qui terrorisait les voyageurs au col.",
    },
    {
      type: "text",
      title: "Ce qu'on voit depuis le sommet",
      content:
        "Vers l'est, le lac du Bourget s'étire en contrebas — le plus grand lac naturel de France. Au-delà, Aix-les-Bains, la Chartreuse, Belledonne, parfois le Mont Blanc.\n\nVers l'ouest, l'avant-pays savoyard déroule ses collines, ses vignobles. On devine Yenne, les méandres du Rhône, les reliefs du Bugey.\n\nOn est assis entre deux mondes. Le vertige n'est pas seulement dans la hauteur — il est dans l'immensité de ce qu'on embrasse du regard.",
    },
    {
      type: "table",
      title: "La montée depuis Saint-Jean-de-Chevelu",
      rows: [
        ["Départ", "Base de loisirs (~310 m) ou Église"],
        ["Sommet", "Dent du Chat (1 393 m)"],
        ["Dénivelé", "~1 080 à 1 178 m D+"],
        ["Distance", "~6 km (montée)"],
        ["Durée", "3h à 4h de montée, 6h A/R"],
        ["Difficulté", "Difficile — passages câblés"],
        ["Balisage", "Marques jaunes"],
      ],
    },
    {
      type: "text",
      content:
        "L'itinéraire passe par le hameau de Vernatel, traverse la forêt jusqu'à Sur la Balme (panorama), rejoint l'hôtel-restaurant de la Source au-dessus du col, puis monte au Col de la Vacherie avant l'assaut final. Les derniers mètres sont aériens : barres rocheuses, passages équipés de câbles, technique et exposé.",
    },
    {
      type: "highlight",
      text: "⚠️ Randonnée réservée aux marcheurs expérimentés et bien équipés. Chaussures de randonnée obligatoires. Vérifier la météo. Les passages câblés sont sous la responsabilité de chacun.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "La géologie d'une dent",
      content:
        "La Dent est le résultat de millions d'années de tectonique et d'érosion. Le Mont du Chat est un anticlinal — un pli de couches calcaires poussé vers le haut. L'érosion a creusé les roches tendres et laissé debout les plus dures. La Dent, c'est ce qui reste : un éperon de **calcaire urgonien**, résistant, vertical, spectaculaire.\n\nLes glaciers du Würm, il y a environ 20 000 ans, ont aussi façonné ce paysage. En se retirant, ils ont provoqué l'effondrement qui a créé les lacs de Chevelu.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "La Dent du Chat et le Tour de France",
      content:
        "Le Mont du Chat est un col mythique du cyclisme, classé hors catégorie. Le Tour de France ne l'a emprunté que deux fois — en 1974 et en 2017 — mais chaque passage a marqué les mémoires.\n\nEn 1974, Poulidor attaque Merckx à quatre kilomètres du sommet. En 2017, Warren Barguil passe en tête mais dans la descente, **Richie Porte** chute lourdement — clavicule et bassin fracturés.",
    },
    {
      type: "text",
      title: "La Dent au fil des saisons",
      content:
        "**Au printemps**, la neige s'accroche encore au sommet quand les cerisiers fleurissent en bas. **En été**, c'est la saison des Cheveuliers qui chronométrent leur aller-retour. **À l'automne**, la forêt sur ses flancs prend des couleurs flamboyantes. **En hiver**, elle se couvre de blanc et de brume.",
    },
    {
      type: "quote",
      text: "On raconte que les jours d'orage, quand les nuages s'accrochent à la Dent du Chat, c'est le vieux chat du lac qui gronde encore. Les gens de Chevelu haussent les épaules. Ils vivent avec cette montagne depuis toujours.",
    },
  ],
  funFact:
    "La Dent du Chat est visible depuis Aix-les-Bains, à plus de 10 km. Son nom viendrait de la canine d'un chat monstrueux de la légende savoyarde.",
  prevPage: null,
  nextPage: {
    title: "Les lacs de Chevelu",
    slug: "lacs",
    categorySlug: "nature",
  },
};

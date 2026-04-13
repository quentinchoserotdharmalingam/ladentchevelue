import type { PageContent } from "../types";

export const fourAPainContent: PageContent = {
  slug: "four-a-pain",
  title: "Les fours à pain & Le Pain de Mayou",
  subtitle:
    "Du four communal au levain naturel : à Chevelu, le pain a traversé les siècles sans perdre son âme.",
  category: "patrimoine",
  sections: [
    {
      type: "text",
      title: "Une tradition savoyarde",
      content:
        "En Savoie, le four à pain n'était pas un accessoire — c'était un lieu de vie. Chaque hameau avait le sien, souvent communal, partagé entre les familles. On y cuisait le pain, mais aussi les tartes, les gratins, parfois les gâteaux de fête. On s'y retrouvait, on y discutait, on y attendait que la croûte prenne.\n\nLe fonctionnement n'a pas changé depuis des siècles : un feu dans l'enceinte de pierre pendant une à deux heures, on retire les braises, on enfourne, et le four restitue sa chaleur lentement. C'est cette cuisson douce et longue qui donne au pain de four son goût inimitable.",
    },
    {
      type: "text",
      title: "Les fours de Chevelu",
      content:
        "La commune compte plusieurs fours à pain répartis dans ses hameaux. Construits en pierre locale avec des voûtes en briques réfractaires, ils témoignent d'un temps où chaque quartier du village était autonome pour l'essentiel : le pain, le vin, l'eau.\n\nEn Savoie, de nombreuses associations se sont mobilisées pour restaurer les fours communaux et les faire revivre. C'est un patrimoine fragile — les charpentes pourrissent, les toitures s'effondrent. Mais quand un four est remis en état et qu'on y cuit à nouveau du pain, quelque chose de l'ancien village reprend vie.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le Pain de Mayou",
      content:
        "Au lieu-dit Les 4 Chemins, sur la route principale, une boulangerie a ouvert en 2019. Elle s'appelle **Le Pain de Mayou**, et elle est vite devenue un repère pour les habitants, les randonneurs et les cyclistes.\n\nIci, tout est fait maison. Les pains sont pétris au levain naturel, façonnés et cuits sur place. Pas de procédé industriel, pas de pâte congelée. L'établissement est certifié bio et travaille avec des producteurs locaux.",
    },
    {
      type: "list",
      title: "Ce qu'on y trouve",
      items: [
        "Pains au levain naturel : tradition, semi-complet, complet, nordique, nutrition",
        "Viennoiseries pur beurre, fabriquées et cuites chaque jour",
        "Pâtisseries artisanales (les gâteaux d'anniversaire sont une spécialité)",
        "Snacking chaud et froid : sandwichs, quiches, pizzas, bagnat",
        "Plat du jour le midi, salon de thé, coin enfants",
        "Épicerie de produits locaux, café à partir de 1€",
      ],
    },
    { type: "separator" },
    {
      type: "text",
      title: "Du four communal à la boulangerie artisanale",
      content:
        "Il y a un siècle, chaque hameau de Chevelu avait son four. Les familles pétrissaient leur pâte chez elles et venaient la cuire au four communal. Aujourd'hui, il y a Le Pain de Mayou, avec son levain naturel et ses pains cuits sur place. Le geste a changé, le lieu a changé, mais l'idée reste la même : du bon pain, fait ici.",
    },
    {
      type: "quote",
      text: "L'accord parfait de Chevelu : un morceau de pain de Mayou, un verre de Roussette cru Monthoux, et les pieds dans l'herbe face aux lacs. Vérifiable sur place.",
    },
  ],
  infoBox: {
    title: "Le Pain de Mayou — Infos pratiques",
    items: [
      {
        label: "Adresse",
        value: "Les 4 Chemins, RD 1504, 73170 Saint-Jean-de-Chevelu",
      },
      { label: "Téléphone", value: "04 56 64 81 36" },
      { label: "Horaires", value: "Tous les jours sauf dimanche" },
      { label: "Sur place", value: "Salon de thé, terrasse, espace enfants" },
      { label: "Prix", value: "Plat du jour ~12-14€ · Café 1€" },
      { label: "Instagram", value: "@lepaindemayou" },
    ],
  },
  funFact:
    "Le Pain de Mayou, boulangerie bio au levain naturel, est devenue le point de rendez-vous des randonneurs après la descente de la Dent du Chat.",
  prevPage: {
    title: "Châteaux et maisons fortes",
    slug: "chateaux",
    categorySlug: "patrimoine",
  },
  nextPage: {
    title: "La chapelle de Monthoux",
    slug: "chapelle-monthoux",
    categorySlug: "patrimoine",
  },
};

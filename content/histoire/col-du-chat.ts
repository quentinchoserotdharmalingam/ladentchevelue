import type { PageContent } from "../types";

export const colDuChatContent: PageContent = {
  slug: "col-du-chat",
  title: "Le col du Chat & le Mont du Chat à vélo",
  subtitle:
    "Le col à 638 m, c'est 2 000 ans d'histoire. Le sommet à 1 504 m, c'est l'un des cols les plus durs de France. Les deux sont à Chevelu.",
  category: "histoire",
  sections: [
    {
      type: "text",
      title: "Un passage millénaire",
      content:
        "Le col du Chat (638 m) est une cassure naturelle dans la barrière du Mont du Chat. Il sépare deux mondes : à l'est, le lac du Bourget ; à l'ouest, l'avant-pays savoyard. Depuis la préhistoire, c'est un point de passage obligé.",
    },
    {
      type: "subsection",
      title: "Le chemin gaulois et la route romaine",
      content:
        "Un chemin gaulois traversait le col avant les Romains. Ceux-ci l'ont aménagé en route vicinale d'environ quatre mètres de large. Des vestiges étaient encore visibles au col jusqu'au XIXe siècle. Un tronçon de voie romaine, le « chemin des Romains », est encore identifiable.",
    },
    {
      type: "subsection",
      title: "Le Moyen Âge et les maisons fortes",
      content:
        "Le col devient un axe commercial majeur du duché de Savoie. Les maisons fortes de Chevelu — La Forest, Champrovent, le château de Chevelu — sont construites pour contrôler le passage. Commerce du sel, du vin et des marchandises.",
    },
    {
      type: "subsection",
      title: "La route de 1823",
      content:
        "Après des siècles de déclin, une vraie route est construite en **1823** par les ingénieurs Melano et Negretti. Pentes douces, remarquables murs de soutènement en pierres sèches. Opérationnelle en **1848**, c'est l'époque des diligences. Le **restaurant Michaud** ouvre au col en 1859 — halte des voyageurs, les jeunes venaient y danser.",
    },
    {
      type: "subsection",
      title: "Les voyageurs célèbres",
      content:
        "Montaigne l'emprunta au retour d'Italie. La mère de Lamartine, Balzac et George Sand l'ont aussi parcouru.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le tunnel du Chat (1932)",
      content:
        "L'ouverture du **tunnel du Chat** en 1932 change tout. Long de 1,5 km, il perce la montagne sous le col. La route du col perd son trafic du jour au lendemain. Aujourd'hui, l'ancien tunnel est converti en **voie piétonne et cyclable** — une expérience originale et fraîche en été.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le Mont du Chat à vélo — un tout autre animal",
      content:
        "Ne pas confondre le **col du Chat** (638 m) avec le **Signal du Mont du Chat** (1 504 m). Le col est un passage ; le Signal est le point culminant, 870 mètres plus haut. Classé **hors catégorie**, c'est l'un des cols les plus durs de France.",
    },
    {
      type: "table",
      title: "Versant est — depuis Le Bourget-du-Lac",
      rows: [
        ["Distance", "13,7 km"],
        ["Pente moyenne", "9 %"],
        ["Pente max", "14-15 %"],
        ["Classement", "Hors catégorie"],
      ],
    },
    {
      type: "table",
      title: "Versant ouest — depuis Meyrieux-Trouet",
      rows: [
        ["Distance", "8,7 km"],
        ["Pente moyenne", "10,3 %"],
        ["Pente max", "14 %"],
        ["Classement", "Hors catégorie"],
      ],
    },
    {
      type: "highlight",
      text: "Pour comparaison : l'Alpe d'Huez, c'est 8 % de moyenne. Le Mont du Chat, c'est un cran au-dessus.",
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "1974 — Poulidor attaque Merckx",
      content:
        "Étape Gaillard – Aix-les-Bains. **Raymond Poulidor** attaque Eddy Merckx à quatre kilomètres du sommet et prend plus d'une minute. Mais le Cannibale se déchaîne dans la descente, revient et gagne l'étape au sprint. C'est le cinquième et dernier Tour de Merckx.",
    },
    {
      type: "subsection",
      title: "2017 — L'étape monstre",
      content:
        "9e étape, Nantua – Chambéry. 182 km, 4 600 m D+. Trois cols hors catégorie enchaînés. **Warren Barguil** passe en tête au Mont du Chat. Dans la descente, **Richie Porte** chute lourdement — clavicule et bassin fracturés. Rigoberto Urán remporte l'étape.",
    },
    { type: "separator" },
    {
      type: "quote",
      text: "Poulidor a pris une minute à Merckx dans la montée. Merckx l'a reprise dans la descente. Quarante-trois ans plus tard, Porte s'y est brisé la clavicule. Le Mont du Chat ne fait pas de cadeaux.",
    },
  ],
  infoBox: {
    title: "Infos pratiques",
    items: [
      { label: "Col du Chat", value: "638 m — D1504, ~15 min depuis Chevelu" },
      { label: "Mont du Chat", value: "1 504 m — D42 (hors catégorie)" },
      {
        label: "Tunnel du Chat",
        value: "Piéton et cyclable, 1,5 km, accès libre",
      },
      {
        label: "Randonnées depuis le col",
        value: "Dent du Chat, Mollard Noir, Charvaz, GR9",
      },
      { label: "Vélo", value: "Hors catégorie par les deux versants" },
    ],
  },
  funFact:
    "Le Tour de France n'a grimpé le Mont du Chat que deux fois en 50 ans. Les deux étapes sont entrées dans la légende.",
  prevPage: {
    title: "La légende du Mont du Chat",
    slug: "legende",
    categorySlug: "histoire",
  },
  nextPage: null,
};

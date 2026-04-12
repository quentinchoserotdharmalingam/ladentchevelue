import type { PageContent } from "../types";

export const randonneesContent: PageContent = {
  slug: "randonnees",
  title: "Randonnées",
  subtitle:
    "Des lacs au sommet, des vignobles aux crêtes — ici, chaque sentier raconte un bout du village.",
  category: "sports",
  sections: [
    {
      type: "text",
      content:
        "Saint-Jean-de-Chevelu est un point de départ idéal pour la randonnée. Entre 295 et 1 443 mètres d'altitude, la commune offre un éventail rare : balades familiales au bord des lacs, circuits à travers les vignobles et les hameaux, montées forestières vers les crêtes, et ascension technique jusqu'au sommet de la Dent du Chat.\n\nLe départ se fait presque toujours depuis le même endroit : le parking de la base de loisirs des lacs. De là, tout est accessible à pied.",
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "🟢 Sentier des lacs et du marais — La balade familiale",
      content:
        "Le tour des deux lacs par le marais. Un sentier pédagogique ponctué de panneaux qui racontent la naissance des lacs, la vie du marais et l'histoire des vignes. On longe les roseaux, on observe les libellules, on passe entre le grand lac et le petit lac.\n\nC'est la balade parfaite pour une première découverte du village, un après-midi tranquille, ou un matin brumeux quand les lacs fument.",
    },
    {
      type: "table",
      rows: [
        ["Départ", "Parking base de loisirs"],
        ["Durée", "1h30 à 2h"],
        ["Distance", "~4 km"],
        ["Dénivelé", "Quasi nul"],
        ["Difficulté", "Très facile"],
        ["Pour qui", "Familles, poussettes tout-terrain"],
      ],
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "🟡 Tour des lacs de Chevelu — La boucle complète",
      content:
        "La grande boucle qui fait le tour complet des deux lacs en passant par les hameaux, les vignobles et les hauteurs. On traverse les Grangeons et leurs sartos, on monte vers Monthoux pour le panorama au Crêt, on redescend par les bois.\n\nC'est le meilleur moyen de comprendre le territoire dans son ensemble : lacs, marais, vignes, forêt, hameaux — tout y est.",
    },
    {
      type: "table",
      rows: [
        ["Départ", "Parking base de loisirs"],
        ["Durée", "4h à 4h30"],
        ["Distance", "~10 km"],
        ["Dénivelé", "~150 m"],
        ["Difficulté", "Facile"],
        ["Points forts", "Crêt de Monthoux, vignobles, hameaux"],
      ],
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "🔴 La Dent du Chat depuis Chevelu — L'ascension",
      content:
        "L'itinéraire le plus engagé : du parking des lacs jusqu'au sommet de la Dent du Chat à 1 393 m, puis retour. C'est le même parcours que le Record de la Dent Chevelue, mais sans le chrono (enfin, sauf si vous voulez…).\n\nLa montée traverse la forêt de hêtres, rejoint les crêtes, puis attaque les passages techniques avec câbles avant le sommet. Le panorama final sur le lac du Bourget vaut chaque goutte de sueur.",
    },
    {
      type: "table",
      rows: [
        ["Départ", "Parking base de loisirs (~310 m)"],
        ["Sommet", "Dent du Chat (1 393 m)"],
        ["Durée", "5h30 à 6h30 (aller-retour)"],
        ["Distance", "~12 km A/R"],
        ["Dénivelé", "1 178 m D+"],
        ["Difficulté", "Difficile — passages câblés"],
        ["Équipement", "Chaussures de rando montagne, eau, bâtons recommandés"],
      ],
    },
    {
      type: "highlight",
      text: "La montée à la Dent du Chat comporte des passages câblés et techniques. Elle n'est pas adaptée aux enfants en bas âge ni aux personnes sujettes au vertige. Vérifiez la météo avant de partir.",
    },
  ],
  infoBox: {
    title: "Infos pratiques",
    items: [
      {
        label: "Départ commun",
        value: "Parking base de loisirs des lacs (gratuit)",
      },
      { label: "Balisage", value: "Marques jaunes, panneaux directionnels" },
      { label: "Carte IGN", value: "3232 OT — Chambéry" },
      { label: "Eau", value: "Pas de point d'eau en montagne, prévoir" },
      {
        label: "Période",
        value: "Avril à novembre (crêtes déconseillées en hiver)",
      },
    ],
  },
  funFact:
    "La Dent du Chat culmine à 1 393 m, soit 1 083 m au-dessus des lacs du village. Le record aller-retour depuis l'église est de 1h53.",
  prevPage: null,
  nextPage: {
    title: "Le Mont du Chat à vélo",
    slug: "velo",
    categorySlug: "sports",
  },
};

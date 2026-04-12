import type { LucideIcon } from "lucide-react";
import {
  Home,
  Landmark,
  Mountain,
  Wine,
  BookOpen,
  Footprints,
} from "lucide-react";

export interface SubPage {
  titre: string;
  accroche: string;
  slug: string;
  description: string;
}

export interface Category {
  id: string;
  titre: string;
  accroche: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  heroGradient: string;
  accentColor: string;
  sousPages: SubPage[];
}

export const categories: Category[] = [
  {
    id: "village",
    titre: "Le village",
    accroche: "Un hameau, une histoire",
    description:
      "Saint-Jean-de-Chevelu, 840 habitants, niche entre la Dent du Chat et ses lacs. Douze hameaux, chacun avec son caractere, ses pierres et ses histoires. Un village qui vit au rythme des saisons.",
    icon: Home,
    slug: "village",
    heroGradient: "from-bois to-or",
    accentColor: "#C4943A",
    sousPages: [
      {
        titre: "Le village en bref",
        accroche: "840 habitants, 12 hameaux, entre lac et montagne",
        slug: "en-bref",
        description:
          "Situation, acces, communes voisines, altitude. Tout ce qu'il faut savoir pour situer ce village savoyard au pied de la Dent du Chat.",
      },
      {
        titre: "Les hameaux",
        accroche: "Monthoux, Grangeons, Gerbaz... chacun son caractere",
        slug: "hameaux",
        description:
          "De Saint-Jean-d'en-Bas a Montmaire, en passant par les Grangeons et leurs sartos : portrait de chaque hameau et de son identite.",
      },
      {
        titre: "Saisons a Chevelu",
        accroche: "Le village au fil des mois",
        slug: "saisons",
        description:
          "Perce-neiges de fevrier, orchidees de mai, vendanges de septembre, hetraies flamboyantes d'octobre : douze mois au rythme du village.",
      },
    ],
  },
  {
    id: "patrimoine",
    titre: "Patrimoine",
    accroche: "Pierres et memoire",
    description:
      "Dix maisons fortes medievales, une eglise gardienne d'art contemporain, un four a pain restaure, une chapelle perchee et un tunnel sous la montagne. Les pierres de Chevelu racontent des siecles d'histoire.",
    icon: Landmark,
    slug: "patrimoine",
    heroGradient: "from-anthracite to-bois",
    accentColor: "#8B6F47",
    sousPages: [
      {
        titre: "L'eglise & ses oeuvres",
        accroche: "Coeur du village, gardienne d'art",
        slug: "eglise",
        description:
          "Une eglise de village qui abrite une surprenante oeuvre d'art contemporain dans son choeur : vitraux et mobilier liturgique signes par des artistes modernes.",
      },
      {
        titre: "Chateaux et maisons fortes",
        accroche: "10 forteresses pour un seul village",
        slug: "chateaux",
        description:
          "Dix maisons fortes baties entre le XIIIe et le XVe siecle pour controler la route de Yenne. Certaines sont encore debout, d'autres vivent dans la memoire des pierres.",
      },
      {
        titre: "Le four a pain & le Mayou",
        accroche: "Pierre chaude et tradition",
        slug: "four-a-pain",
        description:
          "Le four communal restaure et le pain de Mayou, specialite de Savoie cuite sur place. Histoire d'un patrimoine vivant.",
      },
      {
        titre: "La chapelle de Monthoux",
        accroche: "Un hameau, une chapelle, un panorama",
        slug: "chapelle-monthoux",
        description:
          "Une chapelle du XVIe siecle qui abrite une Pieta en noyer classee Monument Historique, au coeur d'un hameau perche sur les hauteurs du village.",
      },
      {
        titre: "Le tunnel du Chat",
        accroche: "L'histoire sous la montagne",
        slug: "tunnel",
        description:
          "Perce en 1932, le tunnel du Chat a transforme les communications entre Chambery et la vallee du Rhone. Aujourd'hui voie verte pour pietons et cyclistes.",
      },
    ],
  },
  {
    id: "nature",
    titre: "Nature & Paysages",
    accroche: "Du lac au sommet",
    description:
      "De la Dent du Chat a 1 393 m jusqu'aux lacs glaciaires a 310 m, le territoire de Chevelu condense un monde de paysages : falaises calcaires, vignobles en terrasses, forets de hetres, marais proteges.",
    icon: Mountain,
    slug: "nature",
    heroGradient: "from-sapin to-lac",
    accentColor: "#2D5016",
    sousPages: [
      {
        titre: "La Dent du Chat",
        accroche: "1 393 m de roche et de legende",
        slug: "dent-du-chat",
        description:
          "Le sommet emblematique qui domine le village et le lac du Bourget. Passages cables, panorama a 360 degres, et la legende du chat qui veille.",
      },
      {
        titre: "Les lacs de Chevelu",
        accroche: "Deux miroirs d'eau d'origine glaciaire",
        slug: "lacs",
        description:
          "Deux lacs nes de l'effondrement post-glaciaire de la montagne. Baignade surveillee l'ete, peche, plongeoir, et un ecrin de nature protegee.",
      },
      {
        titre: "Le Cret de Monthoux",
        accroche: "5 minutes de marche, un panorama infini",
        slug: "cret-monthoux",
        description:
          "Un promontoire accessible en quelques minutes depuis le hameau de Monthoux, avec une vue a 360 degres sur les lacs, la Dent du Chat et la vallee du Rhone.",
      },
      {
        titre: "Mollard Noir",
        accroche: "Le voisin discret de la Dent",
        slug: "mollard-noir",
        description:
          "A 1 452 m, le Mollard Noir est le sommet le plus haut de la chaine, mais le moins connu. Une randonnee sauvage loin des sentiers battus.",
      },
      {
        titre: "Les vignobles",
        accroche: "Roussette, Jacquere et soleil",
        slug: "vignobles",
        description:
          "Des vignes en terrasses exposees plein sud, des cepages savoyards d'exception, et les sartos des Grangeons : petits batiments en pierre temoins d'un savoir-faire ancien.",
      },
      {
        titre: "Faune & Flore",
        accroche: "La vie sauvage entre lac et sommet",
        slug: "faune-flore",
        description:
          "Chamois sur les cretes, grenouilles rousses au marais, orchidees sauvages en sous-bois, rapaces au-dessus des falaises : un territoire riche en biodiversite.",
      },
      {
        titre: "Geologie",
        accroche: "200 millions d'annees en un regard",
        slug: "geologie",
        description:
          "De la mer du Cretace aux glaciers du Wurm, comment les forces geologiques ont sculpte la Dent du Chat, creuse le lac du Bourget et fait naitre les lacs de Chevelu.",
      },
    ],
  },
  {
    id: "terroir",
    titre: "Terroir & Gastronomie",
    accroche: "Les saveurs de Chevelu",
    description:
      "Roussette de Savoie, Jacquere, pain de Mayou cuit au four a bois... Le terroir de Chevelu se goute autant qu'il se contemple. Un savoir-faire transmis entre les vignes et les hameaux.",
    icon: Wine,
    slug: "terroir",
    heroGradient: "from-or to-bois",
    accentColor: "#C4943A",
    sousPages: [
      {
        titre: "Les vins de Chevelu",
        accroche: "Vignobles au pied de la Dent",
        slug: "vins",
        description:
          "Roussette de Savoie, Jacquere, Mondeuse... Les cepages qui prosperent sur les eboulis calcaires du Mont du Chat, entre 300 et 450 m d'altitude.",
      },
      {
        titre: "Le pain de Mayou",
        accroche: "Recette, tradition, four a bois",
        slug: "pain-de-mayou",
        description:
          "Un pain de Savoie a la croute epaisse, cuit au four communal. Recette, histoire et lien avec la vie du village.",
      },
      {
        titre: "La cooperative de Yenne",
        accroche: "Le vin des deux versants",
        slug: "cooperative",
        description:
          "La cave cooperative qui vinifie les raisins des vignerons du Mont du Chat, entre Avant-Pays savoyard et vallee du Rhone.",
      },
    ],
  },
  {
    id: "histoire",
    titre: "Histoire & Legendes",
    accroche: "Les recits de la montagne",
    description:
      "Du chat monstrueux de la legende aux glaciers qui ont sculpte le paysage, des routes romaines du col aux seigneurs qui fortifiaient le passage : ici, chaque lieu a son recit.",
    icon: BookOpen,
    slug: "histoire",
    heroGradient: "from-lac to-anthracite",
    accentColor: "#5B8FA8",
    sousPages: [
      {
        titre: "La legende du Mont du Chat",
        accroche: "Le chat, le pecheur et la dent de pierre",
        slug: "legende",
        description:
          "Un chat monstrueux au col, un soldat courageux, un fusil beni par le cure... La legende qui a donne son nom a toute une montagne.",
      },
      {
        titre: "Histoire geologique",
        accroche: "Quand les glaciers ont sculpte le paysage",
        slug: "histoire-geologique",
        description:
          "L'histoire du paysage en quatre actes : la mer, le plissement, les glaciers et la naissance des lacs. 200 millions d'annees resumees.",
      },
      {
        titre: "Le col du Chat",
        accroche: "Un passage millenaire entre Savoie et Bugey",
        slug: "col-du-chat",
        description:
          "Route romaine, diligences, restaurant Michaud et son piano mecanique, tunnel de 1932... Le col du Chat a vu passer Montaigne, Balzac et George Sand.",
      },
    ],
  },
  {
    id: "sports",
    titre: "Sports & Plein air",
    accroche: "Sentiers et aventures",
    description:
      "Randonnee, trail, velo, baignade... Le terrain de jeu de Chevelu va du tour tranquille des lacs a l'ascension sportive de la Dent du Chat. Chacun trouvera son sentier.",
    icon: Footprints,
    slug: "sports",
    heroGradient: "from-sapin to-or",
    accentColor: "#2D5016",
    sousPages: [
      {
        titre: "Randonnees",
        accroche: "Du tour des lacs au sommet de la Dent",
        slug: "randonnees",
        description:
          "Trois itineraires balises : le tour des lacs (facile, 4h30), le sentier des lacs et marais (familial, 3h), et la montee a la Dent du Chat (technique, 6h).",
      },
      {
        titre: "Le Mont du Chat a velo",
        accroche: "Hors categorie, deux versants",
        slug: "velo",
        description:
          "Le Mont du Chat a 1 504 m : un col hors categorie gravi par le Tour de France en 1974 et 2017. Deux versants, deux ambiances, un sommet mythique.",
      },
      {
        titre: "Venir & sejourner",
        accroche: "Acces, parking, hebergements",
        slug: "venir",
        description:
          "Comment venir a Chevelu, ou se garer, ou dormir. Toutes les informations pratiques pour preparer sa visite.",
      },
    ],
  },
];

/** Trouver une categorie par son slug */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Trouver une sous-page par category slug + page slug */
export function getSubPage(
  categorySlug: string,
  pageSlug: string
): { category: Category; page: SubPage } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const page = category.sousPages.find((p) => p.slug === pageSlug);
  if (!page) return undefined;
  return { category, page };
}

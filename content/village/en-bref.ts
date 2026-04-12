import type { PageContent } from "../types";

export const enBrefContent: PageContent = {
  slug: "en-bref",
  title: "Le village en bref",
  subtitle:
    "840 habitants, 12 hameaux, 10 maisons fortes, 2 lacs, 1 dent et une montagne de caractère.",
  category: "village",
  sections: [
    {
      type: "text",
      title: "Saint-Jean-de-Chevelu",
      content:
        "Un village savoyard posé entre lac et montagne, dans l'avant-pays savoyard. Pas sur la route principale, pas sur les circuits touristiques classiques. Un peu à l'écart, un peu caché. C'est justement ce qui fait qu'on s'y sent bien.\n\nIci, la Dent du Chat veille au-dessus des toits. Les vignes montent sur les coteaux. Deux petits lacs dorment au creux d'un ancien effondrement glaciaire. Et les hameaux s'égrènent le long des chemins comme s'ils avaient toujours été là — ce qui est à peu près le cas.",
    },
    {
      type: "table",
      title: "Les chiffres",
      rows: [
        ["Commune", "Saint-Jean-de-Chevelu"],
        ["Département", "Savoie (73)"],
        ["Région", "Auvergne-Rhône-Alpes"],
        ["Code postal", "73170"],
        ["Population", "~840 habitants (les Chevelans et Chevelannes)"],
        ["Superficie", "12,7 km²"],
        ["Altitude", "De 295 m (point bas) à 1 443 m (crêtes)"],
        ["Communauté de communes", "Yenne"],
      ],
    },
    { type: "separator" },
    {
      type: "text",
      title: "Où c'est",
      content:
        "Saint-Jean-de-Chevelu se trouve au pied du versant ouest du Mont du Chat, à 16 km au nord-ouest de Chambéry. Le village est entouré par La Chapelle-du-Mont-du-Chat au sud-est, Billième au nord, et Bourdeau à l'est.\n\nOn est ici dans l'avant-pays savoyard : un pays de collines, de vignes et de petites vallées, coincé entre le Rhône à l'ouest et les premiers reliefs alpins à l'est. Le lac du Bourget n'est qu'à quelques kilomètres à vol d'oiseau — mais il faut passer par-dessus la montagne ou contourner par Yenne.\n\nC'est un entre-deux. Ni tout à fait plaine, ni tout à fait montagne. Un pays de transition, doux et vallonné, avec une dent de calcaire qui dépasse au-dessus de tout.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Comment venir",
      content:
        "**En voiture :** Depuis Chambéry (~25 min) : prendre la D1504 direction Yenne, puis la D210e vers les lacs de Chevelu. Depuis Aix-les-Bains (~20 min) : passer par le col du Chat (D914a). Depuis Lyon (~1h30) : A43 direction Chambéry, sortie Yenne/Saint-Genix.\n\n**En bus :** Ligne S02 173 (Chambéry — Yenne — Belley). Arrêt « La Place » à Saint-Jean-de-Chevelu, puis ~10 min à pied vers les lacs.\n\n**En train :** Gare de Chambéry (TGV), puis bus ou voiture.\n\n**Parking :** Gratuit à la base de loisirs des lacs.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Les hameaux",
      content:
        "Saint-Jean-de-Chevelu n'est pas un village-rue. C'est une constellation de hameaux dispersés entre les lacs, les vignobles et la montagne. Chacun a son caractère, son histoire, et souvent sa maison forte : Saint-Jean-d'en-Bas (école, lacs), Saint-Jean-d'en-Haut (église, cœur historique), Montmaire (vignes), Les Grangeons (sartos des vignerons), Monthoux (chapelle, panorama, cru AOC), Vernatel (départ Dent du Chat), Gerbaz, La Platière, Pré-Magnin, Champrond, Taba.",
    },
    { type: "separator" },
    {
      type: "table",
      title: "Ce qu'on trouve au village",
      rows: [
        ["🏫 École", "Une école primaire"],
        ["🍽️ Restaurant", "Oui"],
        ["🛒 Commerce", "Épicerie"],
        ["⛺ Camping", "Camping des Lacs (au bord du grand lac)"],
        ["🏖️ Base de loisirs", "Plage, plongeoir, aire de pique-nique"],
        ["⛪ Église", "Église de Saint-Jean-de-Chevelu"],
      ],
    },
    { type: "separator" },
    {
      type: "text",
      title: "Un village qui grandit",
      content:
        "Saint-Jean-de-Chevelu était un tout petit village : 307 habitants en 1982. En quarante ans, la population a presque triplé. Le cadre de vie y est pour beaucoup : entre lacs et montagne, au calme mais pas isolé, à vingt minutes de Chambéry.\n\nLe village a su garder son caractère rural. Pas de lotissement à perte de vue, pas de zone commerciale. Des hameaux, des chemins, des vignes, et la montagne en toile de fond.",
    },
    {
      type: "table",
      title: "Évolution de la population",
      rows: [
        ["1968", "366"],
        ["1982", "307"],
        ["1999", "584"],
        ["2007", "706"],
        ["2021", "841"],
      ],
    },
    { type: "separator" },
    {
      type: "quote",
      text: "Les habitants s'appellent les Chevelans et les Chevelannes. Le nom du village viendrait de « Chavelu » — le chat velu — ce qui nous ramène encore et toujours à cette histoire de félin géant qui hante la montagne.",
    },
  ],
  funFact:
    "Saint-Jean-de-Chevelu comptait seulement 307 habitants en 1982. En 40 ans, la population a presque triplé.",
  prevPage: null,
  nextPage: {
    title: "Les hameaux",
    slug: "hameaux",
    categorySlug: "village",
  },
};

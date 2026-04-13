import type { PageContent } from "../types";

export const chapelleMonthouxContent: PageContent = {
  slug: "chapelle-monthoux",
  title: "La chapelle de Monthoux & le Crêt",
  subtitle:
    "Une piétà du XVIe siècle taillée dans un seul bloc de noyer, classée Monument Historique. Et à cinq minutes de marche, l'un des plus beaux panoramas de l'avant-pays savoyard.",
  category: "patrimoine",
  sections: [
    {
      type: "text",
      title: "Le hameau de Monthoux",
      content:
        "Monthoux est perché à 540 mètres, au-dessus des vignobles. C'est peut-être le hameau le plus complet de la commune : une chapelle, une tour, une maison forte médiévale, une fontaine-bassin, des vignes AOC, et un belvédère naturel à cinq minutes de marche. On arrive par la petite route qui monte à travers les vignes, ou par la D44. C'est une étape incontournable du Tour des Lacs.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "La chapelle — un trésor à l'intérieur",
      content:
        "La chapelle date du **XVIe siècle**, transformée au XIXe, rénovée récemment. De l'extérieur, rien de particulier. C'est à l'intérieur que tout change.",
    },
    {
      type: "text",
      title: "Notre-Dame de la Piété",
      content:
        "En poussant la porte, on découvre **« Notre-Dame de la Piété »** — une piétà anonyme du XVIe siècle, sculptée dans un seul bloc de noyer.\n\nCe n'est pas une piétà classique à deux figures. C'est un **groupe de quatre personnages** : Marie assise, portant le corps du Christ sur ses genoux. À gauche, Saint Jean maintient la tête. À droite, Marie-Madeleine accomplit un geste saisissant : **elle retire le clou de la main du Christ**. Ce détail, rare dans l'iconographie, ancre la scène dans un réalisme concret et bouleversant.\n\nLes formes sont frustes, volontairement approximatives. Les mains du Christ sont plus grandes que ses pieds. Ce n'est pas de la maladresse — c'est de l'art populaire. L'artiste ne cherchait pas l'anatomie correcte : il cherchait l'émotion juste.",
    },
    {
      type: "highlight",
      text: "La piétà de Monthoux est classée à l'inventaire des Monuments Historiques depuis le 1er mars 1956. C'est l'un des rares objets d'art de la commune à bénéficier de cette protection nationale.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le Crêt de Monthoux — cinq minutes pour un panorama à 360°",
      content:
        "Depuis la chapelle, on continue à pied. Un petit sentier monte entre les arbres. Cinq minutes plus tard, on débouche sur le **Crêt de Monthoux** — un promontoire rocheux qui offre l'un des panoramas les plus complets de l'avant-pays savoyard.\n\n**Au sud et à l'est** — la Dent du Chat, massive, toute proche. Par temps clair, les Bauges et la Chartreuse en arrière-plan.\n**En contrebas** — les vignobles AOC de Monthoux, les sartos des Grangeons.\n**À l'ouest** — les lacs de Chevelu, la plaine, la vallée du Rhône, les crêtes du Bugey.\n**Au nord** — le Mont de la Charvaz et la forêt.\n\nC'est un de ces endroits où l'on comprend toute la géographie du village d'un seul regard.",
    },
    {
      type: "quote",
      text: "On vient à Monthoux pour la vue. On repart en pensant à la piétà. Marie-Madeleine qui retire le clou de la main du Christ, taillée dans un bloc de noyer il y a cinq cents ans par un sculpteur dont personne ne connaît le nom — dans une chapelle dont on pousse simplement la porte.",
    },
  ],
  infoBox: {
    title: "Infos pratiques",
    items: [
      { label: "Altitude", value: "~540 m (hameau), ~560 m (Crêt)" },
      {
        label: "Accès",
        value: "Tour des Lacs (~1h30 de marche) ou voiture par D44",
      },
      { label: "Chapelle", value: "Accès libre, pousser la porte" },
      {
        label: "Piétà",
        value: "Classée MH (1956), bois de noyer, XVIe siècle",
      },
      { label: "Crêt", value: "5 min à pied depuis la chapelle" },
      {
        label: "Pique-nique",
        value: "2 tables, lisière de forêt, vue sur les lacs",
      },
    ],
  },
  funFact:
    "La piétà de Monthoux a même voyagé : elle a été prêtée pour une exposition à Annecy. Mais elle est bien revenue dans sa chapelle.",
  prevPage: {
    title: "Les fours à pain",
    slug: "four-a-pain",
    categorySlug: "patrimoine",
  },
  nextPage: {
    title: "Le tunnel du Chat",
    slug: "tunnel",
    categorySlug: "patrimoine",
  },
};

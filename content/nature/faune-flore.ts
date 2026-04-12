import type { PageContent } from "../types";

export const fauneFlorContent: PageContent = {
  slug: "faune-flore",
  title: "Faune & flore",
  subtitle:
    "Des libellules du marais aux chamois des crêtes, 1 000 mètres de dénivelé et autant de mondes différents.",
  category: "nature",
  sections: [
    {
      type: "text",
      title: "Un territoire, trois milieux",
      content:
        "Saint-Jean-de-Chevelu s'étend de 295 à 1 443 mètres d'altitude. Trois grands milieux naturels se succèdent : les **zones humides** (lacs, marais), la **forêt** (chênaies, hêtraies, sapinières), et les **crêtes calcaires** (pelouses sèches, falaises). Le territoire fait partie du **site Natura 2000 de l'Avant-Pays Savoyard**.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le marais — Le monde d'en bas",
      content:
        "Les lacs et marais sont protégés depuis 1990 par un **APPB** (renouvelé en 2021). Depuis 1992, le **CEN Savoie** gère le site : fauche annuelle de la blache (roseau), suivi scientifique, maîtrise foncière. Cette fauche se fait en partenariat avec des éleveurs laitiers locaux qui valorisent leur production au sein de la Coopérative laitière de Yenne.\n\n**Flore** — roselières, prairies à laîches, iris des marais, salicaires, nénuphars, et surtout le **liparis de Loesel** (*Liparis loeselii*), une orchidée protégée extrêmement rare.\n**Oiseaux** — hérons cendrés, **râle d'eau** (oiseau discret des roselières), martin-pêcheur, canards colverts, rapaces.\n**Amphibiens** — grenouilles rousses, crapauds, tritons.\n**Insectes** — libellules dont l'**aeschne isocèle** (espèce patrimoniale), papillons dans les prairies.\n**Crustacés** — l'**écrevisse à pieds blancs**, emblème du site, espèce devenue rare en France et indicatrice de la qualité des eaux.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "La forêt — Le monde du milieu",
      content:
        "En montant depuis les lacs, on traverse des **étages de végétation** successifs :\n\n**300-500 m** — Chênaie pubescente et buis. Forêt des coteaux chauds, châtaigniers.\n**500-900 m** — Hêtraie-chênaie mixte. Sous-bois frais, sentier de la Charvaz.\n**900-1 400 m** — Hêtraie-sapinière. Forêt d'altitude, mousses, fougères, myrtilles.\n\n**Mammifères** — chevreuils, renards, sangliers, écureuils, chauves-souris.\n**Oiseaux** — pic noir, pic épeiche, chouette hulotte, coucou.\n**Flore** — pervenches, anémones, muguet sauvage au printemps ; hêtraies flamboyantes en automne.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Les crêtes — Le monde d'en haut",
      content:
        "Au-dessus de 1 200 m, la forêt s'ouvre sur les crêtes calcaires. Le calcaire urgonien affleure en grandes dalles.\n\n**Chamois** — bien présents sur les pentes de la Dent. On les observe dans les passages câblés tôt le matin.\n**Rapaces** — buses, faucons crécerelles, et avec de la chance, circaètes et aigles royaux.\n**Flore** — joubarbes, saxifrages, gentianes, flore calcicole spécialisée.\n**Le lynx ?** — le massif fait partie de l'aire de présence potentielle du lynx boréal. Extrêmement discret, le croiser relève de l'extraordinaire.",
    },
    {
      type: "highlight",
      text: "Le vrai félin du Mont du Chat n'est pas le chat monstrueux de la légende — c'est peut-être le lynx boréal, fantôme silencieux de la hêtraie.",
    },
    {
      type: "highlight",
      text: "Trois espèces emblématiques des lacs de Chevelu à retenir : l'écrevisse à pieds blancs (crustacé rare, emblème du site), le liparis de Loesel (orchidée protégée) et l'aeschne isocèle (libellule patrimoniale). Leur présence témoigne de la qualité exceptionnelle du milieu.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Observer sans déranger",
      content:
        "**Marais** — rester sur les sentiers, chiens en laisse dans le périmètre APPB.\n**Forêt** — discrétion en période de nidification (avril-juillet).\n**Crêtes** — ne pas s'approcher des chamois (50 m minimum), attention aux chutes de pierres dans les passages câblés.",
    },
    {
      type: "quote",
      text: "Le marais bruisse, la forêt craque, les crêtes sifflent. On croit monter une montagne. En réalité, on traverse trois mondes.",
    },
  ],
  funFact:
    "Les chamois de la Dent du Chat s'observent régulièrement dans les passages câblés — parfois à quelques mètres des randonneurs.",
  prevPage: {
    title: "Les vignobles",
    slug: "vignobles",
    categorySlug: "nature",
  },
  nextPage: {
    title: "Géologie",
    slug: "geologie",
    categorySlug: "nature",
  },
};

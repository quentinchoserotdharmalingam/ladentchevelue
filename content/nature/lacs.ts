import type { PageContent } from "../types";

export const lacsContent: PageContent = {
  slug: "lacs",
  title: "Les lacs de Chevelu",
  subtitle: "Deux miroirs d'eau nés de l'effondrement d'une montagne.",
  category: "nature",
  sections: [
    {
      type: "text",
      content:
        "Il y a environ 12 000 ans, à la fin de la dernière glaciation, un pan entier du versant ouest de la Dent du Chat s'effondre. Des millions de tonnes de roche dévalent la pente et viennent barrer la vallée en contrebas. Derrière ce barrage naturel, l'eau s'accumule. Un lac se forme.\n\nAvec le temps, les sédiments et la tourbe envahissent le centre du lac. Le plan d'eau unique se divise en deux : le grand lac et le petit lac. C'est l'histoire — géologique et lente — des lacs de Chevelu.",
    },
    {
      type: "table",
      title: "Les chiffres",
      rows: [
        ["Grand lac", "6,4 hectares"],
        ["Petit lac", "4,4 hectares"],
        ["Profondeur maximale", "8 mètres"],
        ["Altitude", "~295 mètres"],
        ["Origine", "Effondrement post-glaciaire"],
        ["Protection", "APPB depuis 1990"],
        ["Gestion", "CEN Savoie depuis 1992"],
      ],
    },
    { type: "separator" },
    {
      type: "text",
      title: "La base de loisirs",
      content:
        "Le grand lac accueille chaque été une base de loisirs municipale. Plage aménagée, baignade surveillée en juillet-août, plongeoir, aire de pique-nique ombragée. L'eau se réchauffe vite — c'est l'un des premiers lacs de Savoie où l'on peut se baigner dès juin.\n\nLa pêche est autorisée sur les deux lacs (carte de pêche obligatoire). On y trouve du brochet, de la perche, de la tanche et du gardon.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le marais — un trésor de biodiversité",
      content:
        "Entre les deux lacs et autour d'eux, un marais s'est développé. Roselières, cariçaies, prairies humides : c'est un habitat rare et fragile, protégé par un arrêté préfectoral de protection de biotope (APPB) depuis 1990.\n\nLe Conservatoire des espaces naturels de Savoie (CEN Savoie) gère le site depuis 1992. Chaque été, la blache (végétation de marais) est fauchée pour ralentir le comblement naturel du lac — un processus inéluctable, mais qu'on peut freiner.\n\nLe marais abrite des espèces remarquables : grenouilles rousses, libellules, hérons, martins-pêcheurs, et une flore de zone humide de plus en plus rare en Savoie.",
    },
    {
      type: "text",
      title: "Une histoire en trois époques",
      content:
        "Les panneaux pédagogiques du sentier des lacs racontent cette histoire en trois temps.\n\n**Il y a 20 000 ans** — les glaciers recouvrent la vallée. Le Mont du Chat et le Mont de Lierre encadrent une cuvette glaciaire. Le « décoiffement de Chevelu » — un effondrement massif du versant — crée une digue naturelle de retenue des eaux dans le vallon de la Méline. Un paléo-lac se forme.\n\n**Jusque dans les années 1960** — les habitants sont des paysans. Les prairies humides autour des lacs sont fauchées à la main pour fournir du foin, de la litière pour les vaches, de l'engrais, du paillage pour les vignes et de la matière pour empailler les chaises. Le chanvre est cultivé dans la commune et roui (trempé) dans le marais pour fabriquer des cordes — le lieu-dit « Les Cordiers » en garde la mémoire.\n\n**Depuis les années 1990** — la fin de l'économie paysanne entraîne l'abandon de la fauche traditionnelle. Le CEN Savoie prend le relais avec une fauche mécanique spécifique, dont l'objectif n'est plus agricole mais écologique : préserver les zones humides et leur biodiversité devenue rare. Cette fauche se fait en partenariat avec des éleveurs laitiers locaux qui valorisent leur production au sein de la Coopérative laitière de Yenne.",
    },
    {
      type: "text",
      title: "L'écrevisse à pieds blancs — emblème du site",
      content:
        "L'**écrevisse à pieds blancs** (*Austropotamobius pallipes*) est l'espèce emblématique des lacs et marais de Chevelu. Devenue rare en France, elle témoigne de la qualité des eaux du site. C'est elle qui figure sur les panneaux de sensibilisation du sentier, avec ce message simple : « Prenons-en soin ! »",
    },
    {
      type: "text",
      title: "Quatre fonctions, un seul site",
      content:
        "Les lacs et marais remplissent quatre fonctions complémentaires, comme le rappellent les panneaux du sentier :\n\n**Biodiversité** — habitat pour les amphibiens, les libellules, les oiseaux d'eau et les plantes de zones humides.\n**Paysage et loisirs** — baignade, pêche, promenade, contemplation.\n**Usages agricoles** — fauche des prairies humides en partenariat avec les éleveurs locaux.\n**Régulation du climat** — les tourbières stockent le carbone, les zones humides régulent les crues et l'évaporation tempère les chaleurs estivales.",
    },
    {
      type: "highlight",
      text: "Les lacs de Chevelu sont un site naturel protégé. Merci de rester sur les sentiers balisés, de ne pas cueillir les plantes, et de remporter vos déchets.",
    },
  ],
  infoBox: {
    title: "Infos pratiques",
    items: [
      { label: "Accès", value: "Parking gratuit à la base de loisirs" },
      { label: "Baignade", value: "Surveillée en juillet-août" },
      { label: "Pêche", value: "Autorisée (carte obligatoire)" },
      { label: "Sentier", value: "Tour des lacs ~4 km, 1h30-2h" },
      { label: "Pique-nique", value: "Aires ombragées sur place" },
      { label: "Chiens", value: "Tenus en laisse" },
    ],
  },
  funFact:
    "L'écrevisse à pieds blancs, espèce devenue rare en France, est l'emblème des lacs et marais de Chevelu. Le lieu-dit « Les Cordiers » rappelle que le chanvre y était cultivé et roui dans le marais pour fabriquer des cordes.",
  prevPage: {
    title: "La Dent du Chat",
    slug: "dent-du-chat",
    categorySlug: "nature",
  },
  nextPage: {
    title: "Les vignobles",
    slug: "vignobles",
    categorySlug: "nature",
  },
};

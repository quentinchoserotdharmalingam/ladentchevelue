import type { PageContent } from "../types";

export const chateauxContent: PageContent = {
  slug: "chateaux",
  title: "Châteaux et maisons fortes",
  subtitle:
    "Dix forteresses pour un seul village. Au Moyen Âge, Chevelu gardait les routes de Savoie.",
  category: "patrimoine",
  sections: [
    {
      type: "text",
      title: "Un village fortifié",
      content:
        "C'est l'un des faits les plus surprenants de Saint-Jean-de-Chevelu : ce petit village de 840 habitants compte pas moins de **dix maisons fortes et châteaux** sur son territoire. Ce n'est pas un hasard. Au Moyen Âge, Saint-Jean-de-Chevelu se trouvait à un carrefour stratégique. Le col du Chat, juste au-dessus, était l'un des principaux passages entre la Savoie et le Bugey. Les seigneurs locaux ont construit ces maisons fortes pour contrôler les routes et protéger le commerce.",
    },
    {
      type: "highlight",
      text: "Le canton de Yenne comptait à lui seul 41 maisons fortes et châteaux. Saint-Jean-de-Chevelu en concentrait un nombre exceptionnel — dix pour une seule commune.",
    },
    {
      type: "text",
      title: "Qu'est-ce qu'une maison forte ?",
      content:
        "Ce n'est ni un château, ni une simple maison. La maison forte est un entre-deux : une demeure seigneuriale fortifiée, construite entre le XIIe et le XVIe siècle. Plus modeste qu'un château mais plus solide qu'une ferme. Des murs épais, souvent une ou plusieurs tours, des meurtrières, parfois un fossé. En Savoie, elles sont très nombreuses et se fondent dans le paysage.",
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "Le château de La Forest (La Grande Forêt)",
      content:
        "Le plus imposant et le mieux documenté. Remonte au XIIIe siècle. Plan carré, cinq tours talutées, herse, hourdis, barbacane et meurtrières. La Révolution a découronné ses tours, mais l'ensemble a subi étonnamment peu de modifications depuis sa construction. Un **projet de restauration** est en cours, soutenu par la Fondation du patrimoine et la Mission Patrimoine de Stéphane Bern.",
    },
    {
      type: "subsection",
      title: "La maison forte de Champrovent",
      content:
        "Citée depuis le XIIe siècle (1140), remaniée aux XVe et XVIe siècles. Elle domine la vallée depuis son promontoire. En juin 1941, le peintre **Balthus** s'y installe avec sa femme Antoinette. Il y peint *Paysage de Champrovent* et deux versions du *Salon*, dont l'une se trouve au MoMA de New York et l'autre au Minneapolis Institute of Arts.",
    },
    {
      type: "subsection",
      title: "La maison forte de Prélian (Tour des Chevelu)",
      content:
        "Maison forte du XIVe siècle. Tour-résidence avec un décor intérieur remarquable de **faux appareil** (motifs peints imitant la pierre), une porte romane murée, et des éléments du XVIe siècle dont une fenêtre à meneaux. Un incendie en 1979 a détruit une aile.",
    },
    {
      type: "subsection",
      title: "Les autres maisons fortes",
      content:
        "**La Platière** — petite maison forte avec tourelle carrée, sur le tour des lacs.\n**Monthoux** — associée au hameau, sur l'ancienne route gauloise du sel.\n**Bergin** et **Gimilieu** — également sur l'ancienne route du sel.\n**Château de Chevelu** — siège de la seigneurie, puis baronnie.\n**Château de Champrond** — avait encore ses tours en 1794.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Deux routes, deux systèmes",
      content:
        "Les sources distinguent deux groupes de maisons fortes :\n\n**Sur la route du col du Chat** (route médiévale) : les châteaux de Chevelu, de Champrovent et de La Forest. Ils contrôlaient l'accès au col.\n\n**Sur l'ancienne route gauloise du sel** : Bergin, Gimilieu, Monthoux, Prélian et La Platière. Cette route plus ancienne passait par les hameaux du bas.\n\nCes deux lignes de fortification racontent une géographie du pouvoir : qui tenait Chevelu tenait les routes.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Les voir aujourd'hui",
      content:
        "La plupart sont des propriétés privées. On ne peut pas les visiter librement, mais on les aperçoit en se promenant dans les hameaux. Lors des **Journées du Patrimoine** (septembre), certaines ouvrent exceptionnellement. L'association **« La Défense du Chat »** organise des visites et des animations.",
    },
    {
      type: "quote",
      text: "En 1794, le commissaire révolutionnaire est à Chevelu. On lui dit que les tours et créneaux sont démolis — sauf trois châteaux. Il ordonne de finir le travail. Les tours sont tombées, mais les murs sont restés. Sept siècles plus tard, ils sont toujours là.",
    },
  ],
  funFact:
    "Le peintre Balthus a séjourné à la maison forte de Champrovent en 1941-42. L'une des toiles qu'il y a peintes est aujourd'hui au MoMA de New York.",
  prevPage: {
    title: "L'église & son œuvre",
    slug: "eglise",
    categorySlug: "patrimoine",
  },
  nextPage: {
    title: "Les fours à pain & Le Pain de Mayou",
    slug: "four-a-pain",
    categorySlug: "patrimoine",
  },
};

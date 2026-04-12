import type { PageContent } from "../types";

export const geologieContent: PageContent = {
  slug: "geologie",
  title: "Histoire géologique",
  subtitle:
    "Il y a 130 millions d'années, ici, c'était le fond de la mer. Puis la montagne s'est pliée, les glaciers l'ont sculptée, et un pan entier s'est effondré.",
  category: "nature",
  sections: [
    {
      type: "text",
      title: "Pourquoi une page géologie ?",
      content:
        "On peut randonner à Chevelu sans rien connaître à la géologie. Mais si on sait lire les roches, chaque sentier raconte une histoire. Le calcaire blanc de la Dent du Chat, c'est un ancien récif marin. Les lacs, c'est un effondrement. Le vignoble pousse sur des éboulis mêlés à des moraines glaciaires. Tout est relié.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Acte I — Le fond de la mer (200 à 100 millions d'années)",
      content:
        "Pendant le Jurassique et le Crétacé, la région est le fond d'une mer chaude et peu profonde — la **Téthys**. Des sédiments s'accumulent pendant des dizaines de millions d'années et se transforment en calcaire.\n\nLa roche la plus visible est le **calcaire urgonien** (Crétacé inférieur, ~130 Ma) : blanc, massif, extrêmement dur. C'est lui qui forme les falaises de la Dent du Chat, les crêtes, les lapiaz, et les réseaux karstiques souterrains.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Acte II — Le plissement (25 à 5 millions d'années)",
      content:
        "La plaque africaine entre en collision avec l'européenne. Les forces de compression créent les Alpes, puis se propagent vers l'ouest et plissent les couches sédimentaires. Ainsi naît le **Jura** — une succession de plis parallèles : anticlinaux (voûtes) et synclinaux (gouttières).\n\nLe Mont du Chat est un **anticlinal déversé vers l'ouest** : son flanc oriental plonge vers le lac du Bourget, son flanc occidental est rompu par le **chevauchement du Mont du Chat**. Le **col du Chat** (638 m) correspond à une faille transversale dans cet anticlinal.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Acte III — Les glaciers (110 000 à 12 000 ans)",
      content:
        "Lors du **Würm**, un immense glacier remplit la vallée de Chambéry et le sillon du lac du Bourget. La glace atteint plusieurs centaines de mètres d'épaisseur et monte jusque vers 1 080 m sur le versant ouest (moraines visibles au plateau de Vacheresse).\n\nLe glacier **surcreuse** le lac du Bourget jusqu'à 150 m sous le niveau actuel. Au retrait, les roches fragilisées perdent leur appui : un **pan entier du versant ouest de la Dent du Chat s'effondre** — c'est le « décoiffement de Chevelu », une digue naturelle de retenue des eaux qui se forme dans le vallon de la Méline, entre le **Mont du Chat** à l'ouest et le **Mont de Lierre** à l'est. Un paléo-lac unique se forme dans la cuvette glaciaire.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Acte IV — Les lacs de Chevelu (12 000 dernières années)",
      content:
        "Derrière le barrage de roches, l'eau s'accumule. Un lac unique se forme dans la cuvette glaciaire. Au fil des millénaires, les sédiments et la tourbe comblent le centre : le lac se divise en deux — le Grand Lac (6,4 ha) et le Petit Lac (4,4 ha).\n\nLe comblement continue. Jusque dans les années 1960, les habitants — paysans avant tout — fauchaient les prairies humides pour le foin, la litière, le paillage des vignes. Le chanvre était cultivé et roui dans le marais pour fabriquer des cordes. Depuis les années 1990, le CEN Savoie a pris le relais avec une fauche mécanique écologique. Sans cette gestion, les lacs deviendraient une zone marécageuse, puis une prairie humide. C'est une catastrophe géologique vue au ralenti — mais que l'homme peut freiner.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Ce qu'on voit sur le terrain",
      content:
        "**Dans les vignobles** — le sol est fait d'éboulis calcaires mêlés à des moraines glaciaires. Le terroir AOC Roussette cru Monthoux doit tout à la géologie.\n**Sur les crêtes** — dalles de calcaire urgonien striées (lapiaz), réseau karstique invisible en dessous.\n**Dans les passages câblés** — les mains agrippent du calcaire vieux de 130 millions d'années.\n**Au col du Chat** — la route coupe les couches géologiques : un cours de géologie à ciel ouvert.\n**Aux lacs** — la topographie bosselée trahit l'ancien éboulement masqué par la végétation.",
    },
    {
      type: "table",
      title: "L'échelle du temps",
      rows: [
        ["-200 à -130 Ma", "Mer peu profonde → calcaires du Jurassique et Crétacé"],
        ["-130 Ma", "Calcaire urgonien → falaises, Dent du Chat, lapiaz"],
        ["-25 à -5 Ma", "Plissement alpin → anticlinal du Mont du Chat, col"],
        ["-110 000 à -12 000", "Glaciation du Würm → moraines, lac du Bourget"],
        ["~-12 000", "Effondrement → barrage naturel → lacs de Chevelu"],
        ["-12 000 à aujourd'hui", "Comblement → deux lacs, marais, roselières"],
        ["Jusqu'aux années 1960", "Fauche paysanne des prairies humides, culture du chanvre"],
        ["Depuis 1990", "Gestion écologique CEN Savoie, protection APPB"],
      ],
    },
    {
      type: "quote",
      text: "Cent trente millions d'années de patience pour construire la montagne. Vingt mille ans de glace pour la sculpter. Un instant géologique pour l'effondrer. Et douze mille ans de roseaux pour commencer à la combler.",
    },
  ],
  funFact:
    "Les lacs de Chevelu se comblent naturellement : sans la fauche annuelle des roseaux par le CEN Savoie, ils disparaîtraient en quelques siècles.",
  prevPage: {
    title: "Faune & flore",
    slug: "faune-flore",
    categorySlug: "nature",
  },
  nextPage: null,
};

import type { PageContent } from "../types";

export const legendeContent: PageContent = {
  slug: "legende",
  title: "La légende du Mont du Chat",
  subtitle: "Chaque montagne a son secret. Celle-ci a un chat.",
  category: "histoire",
  sections: [
    {
      type: "text",
      title: "Le récit",
      content:
        "Il était une fois, sur les rives du lac du Bourget, un pêcheur nommé Antoine. Il vivait là avec sa femme et ses cinq enfants, dans une maison simple où l'on ne mangeait que ce que le lac voulait bien donner. Et certains jours, le lac ne donnait rien.\n\nUn matin de disette, Antoine lança sa ligne avec le désespoir des hommes qui n'ont plus que la chance pour nourrir les leurs. Il fit alors un vœu au ciel : si un poisson mordait, il relâcherait le premier en offrande. Le ciel entendit. Un poisson mordit — énorme, magnifique. Antoine le regarda, pensa à ses enfants qui avaient faim, et oublia sa promesse. Il le garda. Un deuxième suivit. Il le garda aussi.\n\nAu troisième coup de filet, ce n'est pas un poisson qui remonta des eaux sombres du lac. C'était un chat. Petit, noir, trempé. Antoine le ramena chez lui. Les enfants furent ravis.\n\nMais le chat grandit. Plus vite qu'il n'aurait dû. Plus gros qu'aucun chat ne devrait l'être. Ses yeux brillaient d'un éclat qui n'avait rien d'animal. Antoine tenta de s'en débarrasser, sans succès. Le chat devint panther, puis monstre. Un matin, on retrouva la maison silencieuse. Antoine et sa famille ne se réveillèrent jamais.\n\nLa bête, libre, prit la montagne pour royaume. Elle se réfugia dans une grotte près du col, là où passaient les voyageurs qui reliaient la Savoie au Bugey. Et elle attendait. On dit qu'elle laissait passer dix-neuf personnes — mais dévorait toujours la vingtième.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le combat",
      content:
        "Les voyageurs se mirent à éviter le col. Les marchands prirent d'autres routes. La montagne devint un lieu de terreur.\n\nSelon les versions qui se sont transmises de génération en génération, c'est un chevalier — ou un soldat revenant d'Italie — qui décida d'en finir. Certains racontent qu'il eut la sagesse de faire bénir son arme par le curé de la paroisse avant de gravir la montagne. D'autres disent qu'ils étaient deux frères, armés d'une machine de guerre et d'un coutelas.\n\nLe combat fut terrible. La bête, touchée en plein cœur, roula dans les eaux du lac. Mais dans la bataille, elle perdit une canine. Une dent immense qui alla se planter dans la roche, au sommet de la montagne.\n\nCette dent, c'est elle que l'on voit encore aujourd'hui. Ce rocher qui pointe vers le ciel, visible depuis Aix-les-Bains, depuis le lac, depuis les vignobles de Chevelu. La Dent du Chat.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Et le chat ?",
      content:
        "On dit qu'il n'est pas mort. Qu'il dort au fond du lac du Bourget, prisonnier des eaux noires. Et que les jours d'orage, quand le vent se lève sans prévenir et que les vagues secouent les barques, c'est sa colère qui remonte à la surface.\n\nLes pêcheurs du lac le savent. Ils ne le disent pas toujours. Mais quand le ciel s'assombrit d'un coup au-dessus de la Dent du Chat, ils rentrent au port un peu plus vite que d'habitude.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Les sources de la légende",
      content:
        "La légende du chat du Mont du Chat est ancienne — on la retrouve dans plusieurs recueils savoyards du XIXᵉ siècle, notamment chez Charles Buet et dans les traditions orales collectées par les folkloristes alpins.\n\nLe nom « Mont du Chat » est attesté depuis le Moyen Âge. Son origine réelle est probablement antérieure à la légende : certains linguistes le rattachent au gaulois *Caturix* (roi des combats), d'autres à une racine pré-celtique *car/cat* désignant la roche. La légende est venue après, pour expliquer un nom que l'on ne comprenait plus.",
    },
    {
      type: "highlight",
      text: "Le texte ci-dessus est une version littéraire librement adaptée des récits traditionnels savoyards. Comme toute légende, il en existe des dizaines de variantes — c'est ce qui fait sa richesse.",
    },
  ],
  funFact:
    "Dans la légende, le chat monstrueux du col laissait passer 19 voyageurs… mais dévorait toujours le vingtième.",
  prevPage: null,
  nextPage: {
    title: "Le col du Chat & le Mont du Chat à vélo",
    slug: "col-du-chat",
    categorySlug: "histoire",
  },
};

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "A quelle altitude culmine la Dent du Chat ?",
    options: ["1 293 m", "1 393 m", "1 493 m", "1 193 m"],
    correct: 1,
    explanation: "La Dent du Chat culmine a 1 393 m, soit 1 083 m au-dessus des lacs du village.",
  },
  {
    question: "Combien de maisons fortes medievales compte Saint-Jean-de-Chevelu ?",
    options: ["5", "8", "10", "12"],
    correct: 2,
    explanation: "Le village compte 10 maisons fortes, baties entre le XIIIe et le XVe siecle.",
  },
  {
    question: "Dans la legende, combien de voyageurs le chat laissait-il passer avant d'en devorer un ?",
    options: ["9", "14", "19", "29"],
    correct: 2,
    explanation: "Le chat monstrueux laissait passer 19 voyageurs et devorait le vingtieme.",
  },
  {
    question: "Quelle est l'origine des lacs de Chevelu ?",
    options: ["Volcanisme", "Effondrement post-glaciaire", "Barrage naturel", "Creusement humain"],
    correct: 1,
    explanation: "Les lacs sont nes de l'effondrement d'un pan de la Dent du Chat apres le retrait des glaciers, il y a 12 000 ans.",
  },
  {
    question: "Quel celebre cycliste a attaque dans le Mont du Chat lors du Tour de France 1974 ?",
    options: ["Jacques Anquetil", "Bernard Hinault", "Raymond Poulidor", "Eddy Merckx"],
    correct: 2,
    explanation: "Poulidor a attaque Merckx et pris une minute au sommet... avant d'etre repris dans la descente.",
  },
  {
    question: "Combien d'habitants compte Saint-Jean-de-Chevelu ?",
    options: ["420", "640", "840", "1 200"],
    correct: 2,
    explanation: "Le village compte environ 840 habitants, repartis dans 12 hameaux.",
  },
  {
    question: "Qu'est-ce qu'un 'sarto' aux Grangeons ?",
    options: ["Un type de vin", "Un petit batiment en pierre dans les vignes", "Un outil agricole", "Un plat local"],
    correct: 1,
    explanation: "Les sartos sont de petits batiments en pierre dans les vignes qui servaient de dortoirs aux vignerons venus de l'autre versant.",
  },
  {
    question: "En quelle annee le tunnel du Chat a-t-il ete perce ?",
    options: ["1905", "1920", "1932", "1945"],
    correct: 2,
    explanation: "Perce en 1932, le tunnel a transforme les communications entre Chambery et la vallee du Rhone.",
  },
  {
    question: "Quel vin blanc AOC est produit sur les pentes du Mont du Chat ?",
    options: ["Chardonnay", "Roussette de Savoie", "Viognier", "Riesling"],
    correct: 1,
    explanation: "La Roussette de Savoie est le cepage phare des vignobles du Mont du Chat, cultive en terrasses.",
  },
  {
    question: "Quel est le record du defi 'Eglise-Sommet-Eglise' ?",
    options: ["1h32", "1h45", "1h53", "2h07"],
    correct: 2,
    explanation: "Le record est de 1h53, pour un parcours de ~12 km et 1 178 m de D+.",
  },
  {
    question: "Quel age a le calcaire qui forme la Dent du Chat ?",
    options: ["50 millions d'annees", "130 millions d'annees", "250 millions d'annees", "500 millions d'annees"],
    correct: 1,
    explanation: "Le calcaire urgonien s'est depose au fond d'une mer chaude il y a 130 millions d'annees.",
  },
  {
    question: "Quel objet est obligatoire au sommet pour valider le Record ?",
    options: ["Un drapeau", "Une perruque", "Un selfie", "Une corde"],
    correct: 1,
    explanation: "Photo preuve au sommet avec perruque ou couvre-chef obligatoire !",
  },
  {
    question: "Quel ecrivain celebre est passe par le col du Chat ?",
    options: ["Victor Hugo", "Honore de Balzac", "Emile Zola", "Gustave Flaubert"],
    correct: 1,
    explanation: "Balzac est passe par le col du Chat, tout comme Montaigne et George Sand.",
  },
  {
    question: "Qu'est-ce que le pain de Mayou ?",
    options: ["Un pain au mais", "Un pain de Savoie cuit au four communal", "Un gateau sucre", "Un pain aux noix"],
    correct: 1,
    explanation: "Le pain de Mayou est une specialite de Savoie a la croute epaisse, cuite au four communal.",
  },
  {
    question: "Depuis quand le marais des lacs est-il gere par le Conservatoire ?",
    options: ["1978", "1985", "1992", "2001"],
    correct: 2,
    explanation: "Le marais est gere par le Conservatoire des espaces naturels de Savoie depuis 1992.",
  },
];

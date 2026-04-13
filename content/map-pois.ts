export interface MapPOI {
  id: string;
  name: string;
  description: string;
  category: "nature" | "patrimoine" | "sports" | "terroir" | "village";
  x: number; // 0-100 percentage position
  y: number; // 0-100 percentage position
  link?: string;
}

export const mapPOIs: MapPOI[] = [
  // Nature
  { id: "dent-du-chat", name: "Dent du Chat", description: "1 393 m — Sommet emblematique", category: "nature", x: 45, y: 8, link: "/nature/dent-du-chat" },
  { id: "mollard-noir", name: "Mollard Noir", description: "1 452 m — Sommet le plus haut", category: "nature", x: 55, y: 5, link: "/nature/mollard-noir" },
  { id: "lac-nord", name: "Lac de Chevelu Nord", description: "Lac d'origine glaciaire", category: "nature", x: 40, y: 70, link: "/nature/lacs" },
  { id: "lac-sud", name: "Lac de Chevelu Sud", description: "Baignade surveillee en ete", category: "nature", x: 45, y: 78, link: "/nature/lacs" },
  { id: "marais", name: "Marais des lacs", description: "Zone protegee depuis 1992", category: "nature", x: 42, y: 74, link: "/nature/faune-flore" },
  { id: "cret-monthoux", name: "Cret de Monthoux", description: "Panorama 360° a 5 min de marche", category: "nature", x: 35, y: 45, link: "/nature/cret-monthoux" },

  // Patrimoine
  { id: "eglise", name: "Eglise Saint-Jean", description: "Art contemporain dans le choeur", category: "patrimoine", x: 50, y: 60, link: "/patrimoine/eglise" },
  { id: "chapelle", name: "Chapelle de Monthoux", description: "Pieta XVIe classee MH", category: "patrimoine", x: 33, y: 48, link: "/patrimoine/chapelle-monthoux" },
  { id: "four", name: "Four a pain", description: "Four communal restaure", category: "patrimoine", x: 52, y: 55, link: "/patrimoine/four-a-pain" },
  { id: "tunnel", name: "Tunnel du Chat", description: "Perce en 1932, voie verte", category: "patrimoine", x: 60, y: 25, link: "/patrimoine/tunnel" },

  // Sports
  { id: "depart-record", name: "Depart Record", description: "Eglise — depart et arrivee du defi", category: "sports", x: 50, y: 60, link: "/record" },
  { id: "col-du-chat", name: "Col du Chat", description: "638 m — Passage millenaire", category: "sports", x: 58, y: 22, link: "/histoire/col-du-chat" },

  // Terroir
  { id: "vignobles", name: "Vignobles", description: "Roussette, Jacquere en terrasses", category: "terroir", x: 38, y: 50, link: "/nature/vignobles" },
  { id: "sartos", name: "Les Sartos", description: "Batiments en pierre des Grangeons", category: "terroir", x: 42, y: 52, link: "/terroir/cooperative" },

  // Village
  { id: "monthoux", name: "Monthoux", description: "Hameau perche, chapelle et panorama", category: "village", x: 33, y: 48, link: "/village/hameaux" },
  { id: "grangeons", name: "Les Grangeons", description: "Hameau viticole et ses sartos", category: "village", x: 42, y: 52, link: "/village/hameaux" },
  { id: "saint-jean", name: "Saint-Jean-d'en-Bas", description: "Centre du village, eglise", category: "village", x: 50, y: 60, link: "/village/en-bref" },
];

export const categoryColors: Record<MapPOI["category"], string> = {
  nature: "#2D5016",
  patrimoine: "#8B6F47",
  sports: "#C4943A",
  terroir: "#C4943A",
  village: "#5B8FA8",
};

export const categoryLabels: Record<MapPOI["category"], string> = {
  nature: "Nature",
  patrimoine: "Patrimoine",
  sports: "Sports",
  terroir: "Terroir",
  village: "Village",
};

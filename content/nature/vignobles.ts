import type { PageContent } from "../types";

export const vignoblesContent: PageContent = {
  slug: "vignobles",
  title: "Les vignobles",
  subtitle:
    "Des ceps accrochés à la montagne, du soleil plein sud, et des vins qu'on ne trouve nulle part ailleurs.",
  category: "nature",
  sections: [
    {
      type: "text",
      title: "Un vignoble entre lac et montagne",
      content:
        "À Saint-Jean-de-Chevelu, la vigne fait partie du paysage comme la Dent du Chat fait partie du ciel. Plantée sur les coteaux exposés plein sud, entre 300 et 500 mètres d'altitude, elle occupe les meilleures places — celles que le soleil touche en premier et quitte en dernier — et laisse le reste à la montagne.\n\nC'est un vignoble de poche, discret et précieux, comme les lacs en contrebas.",
    },
    {
      type: "text",
      title: "L'appellation",
      content:
        "Saint-Jean-de-Chevelu fait partie de l'aire **AOC Vin de Savoie** et **AOC Roussette de Savoie**. Les vignes du hameau de Monthoux bénéficient de la dénomination **Roussette de Savoie cru Monthoux** — l'un des quatre seuls crus de la Roussette de Savoie, avec Frangy, Marestel et Monterminod.",
    },
    { type: "separator" },
    {
      type: "subsection",
      title: "Les cépages blancs",
      content:
        "L'**Altesse** (Roussette) est le cépage noble : un vin blanc fin et aromatique, notes de miel, de noisette et de fruits secs. Cépage autochtone savoyard.\n\nLa **Jacquère** est le plus planté de Savoie — vins blancs vifs, frais et légers, parfaits pour la raclette ou l'apéro face aux lacs.",
    },
    {
      type: "subsection",
      title: "Les cépages rouges",
      content:
        "La **Mondeuse** — le grand cépage rouge de Savoie. Coloré, tannique, épicé, arômes de poivre blanc et de cassis. Un vin de garde.\n\nLe **Gamay** — venu de Bourgogne, adapté aux sols savoyards. Rouges légers, fruités, à boire jeunes et frais.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Le terroir",
      content:
        "**Le sol** — éboulis calcaires du Mont du Chat mêlés à des moraines glaciaires. Caillouteux, drainant, minéral.\n**L'exposition** — plein sud, face à la vallée. Le Mont du Chat protège des vents du nord.\n**L'altitude** — 300-500 m. Fraîcheur nocturne + maturité diurne = vivacité caractéristique.\n**Les lacs** — régulation du microclimat, humidité le matin, chaleur le soir.",
    },
    {
      type: "text",
      title: "Les sartos des Grangeons",
      content:
        "Au hameau des Grangeons, les **sartos** — anciens dortoirs de vignerons — racontent un autre temps. Les vignerons de La Chapelle-du-Mont-du-Chat traversaient la montagne à pied pour venir travailler leurs parcelles sur le versant de Chevelu. Ils dormaient dans ces petits bâtiments de pierre, mi-celliers mi-dortoirs.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Où goûter",
      content:
        "Les vins se retrouvent chez les vignerons de la commune et à la **coopérative de Yenne**. Pour une dégustation authentique, rien ne vaut un passage directement chez un vigneron du village. Demandez aux habitants — ici, tout le monde connaît quelqu'un qui fait du vin.",
    },
    {
      type: "list",
      title: "Ce qu'on boit avec",
      items: [
        "Roussette cru Monthoux → poissons de lac, fromages d'alpage, volaille à la crème",
        "Jacquère → raclette, fondue, tartiflette, crozets au Beaufort, apéro",
        "Mondeuse → diots au vin blanc, longeole, viande rouge, tomme de Savoie",
        "Gamay → charcuterie, pique-nique au bord des lacs, grillades d'été",
      ],
    },
    {
      type: "quote",
      text: "La vigne est arrivée ici avec les Romains, ou peut-être avant. Elle a survécu au phylloxéra, aux guerres, à l'exode rural. Et chaque automne, on vendange encore, au pied de la Dent du Chat.",
    },
  ],
  funFact:
    "Le cru Monthoux est l'un des quatre seuls crus de l'AOC Roussette de Savoie — un privilège rare pour un hameau de quelques maisons.",
  prevPage: {
    title: "Les lacs de Chevelu",
    slug: "lacs",
    categorySlug: "nature",
  },
  nextPage: {
    title: "Faune & flore",
    slug: "faune-flore",
    categorySlug: "nature",
  },
};

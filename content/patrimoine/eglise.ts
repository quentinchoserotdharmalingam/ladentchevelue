import type { PageContent } from "../types";

export const egliseContent: PageContent = {
  slug: "eglise",
  title: "L'église Saint-Jean-Baptiste & son œuvre",
  subtitle:
    "Une église de village, une œuvre monumentale. Quand l'art contemporain s'installe dans le chœur.",
  category: "patrimoine",
  sections: [
    {
      type: "text",
      title: "L'église",
      content:
        "L'église Saint-Jean-Baptiste se dresse à Saint-Jean-d'en-Haut, sur le coteau qui surplombe les lacs de Chevelu. Le bâtiment actuel date de **1845-1846**. Il succède à un édifice plus ancien construit en 1614. L'architecture est sobre, typique des églises rurales savoyardes du XIXe siècle : une nef simple, des murs épais, un clocher refait en 2019.\n\nDe l'extérieur, rien ne laisse deviner ce qui se trouve à l'intérieur.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "L'œuvre",
      content:
        "En 1993, plutôt que de simplement rafraîchir les murs, un choix audacieux est fait : confier la conception d'une œuvre complète pour le chœur à deux artistes régionaux, **Béatrice Signorelli** et **Etienne Voulhoux**. Membres fondateurs de l'**Atelier Tardieu** (association créée en 1987 en hommage au poète André Tardieu), les deux peintres travaillent trois ans. L'œuvre est inaugurée en **juin 1996**.",
    },
    {
      type: "text",
      title: "Ce qu'on voit en entrant",
      content:
        "L'ensemble est résolument contemporain, monumental, et organisé autour d'une idée forte : **une croix dans l'espace**.",
    },
    {
      type: "subsection",
      title: "La croix horizontale — six tableaux du baptême",
      content:
        "À quatre mètres de hauteur, une structure relie les absides latérales. Six tableaux traitent de la symbolique de l'eau et du rite du baptême — l'église est dédiée à Jean-Baptiste. Au centre, un carré évidé symbolise le passage.",
    },
    {
      type: "subsection",
      title: "La croix verticale — les cornières d'inox",
      content:
        "Six cornières en inox de tailles variables se dressent dans le fond du chœur, la plus haute atteignant **huit mètres**. Elles naissent dans une cavité octogonale. C'est la dimension verticale de la croix : l'élan vers le haut.",
    },
    {
      type: "subsection",
      title: "La « Forêt d'errances »",
      content:
        "Dans les absides, quatre tentures de 2 mètres de large par 7,5 mètres de haut représentent une forêt profonde et sombre. Au-delà de leur rôle esthétique, elles expriment les ténèbres et les errances qui jalonnent le chemin de tout homme.",
    },
    {
      type: "subsection",
      title: "Les toiles monumentales du chœur — 75 m²",
      content:
        "C'est le cœur de l'œuvre. Cinq panneaux d'une envergure totale de **75 m²** représentent une vision de l'éternel inspirée de l'Apocalypse de saint Jean. Au centre, une ouverture lumineuse symbolise l'homme christique. Autour gravitent **douze sphères** représentant les douze miracles accomplis par Jésus — des noces de Cana (la plus grande) à l'envoi en mission (la plus petite). De la plus grande à la plus petite, les sphères dessinent un chemin — du miracle spectaculaire à l'envoi silencieux dans le monde.",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Arts en Chœur",
      content:
        "En **2010**, l'association **Arts en Chœur** est créée pour préserver et faire découvrir cette œuvre. Reconnue d'intérêt général depuis 2011, elle organise des ouvertures estivales en juillet-août (entrée libre), des visites commentées gratuites toute l'année sur rendez-vous, des concerts dans l'église, et une présence aux Journées du Patrimoine chaque septembre.\n\n📧 Contact et rendez-vous : artsenchoeur.org",
    },
    { type: "separator" },
    {
      type: "text",
      title: "Et aussi : la piétà de Monthoux",
      content:
        "À quelques kilomètres, dans le hameau de Monthoux, la petite chapelle abrite une autre surprise : **« Notre-Dame de la Piété »**, une piétà anonyme du XVIe siècle. Sculptée en bois peint, elle représente la Vierge tenant le corps du Christ. On la découvre en poussant simplement la porte de la chapelle.",
    },
    {
      type: "quote",
      text: "On entre dans une église de village. On s'attend à du bois sombre et des statues de plâtre. Et on tombe sur 75 m² de toiles monumentales, des cornières d'inox de huit mètres, une forêt peinte et douze sphères qui gravitent autour de la lumière. C'est la bonne surprise de Chevelu.",
    },
  ],
  infoBox: {
    title: "Infos pratiques",
    items: [
      { label: "Lieu", value: "Saint-Jean-d'en-Haut, sur le coteau" },
      {
        label: "Visites",
        value: "Ouvertures estivales (juil-août) ou sur rendez-vous",
      },
      { label: "Tarif", value: "Gratuit" },
      {
        label: "Contact",
        value: "Association Arts en Chœur — artsenchoeur.org",
      },
      { label: "Parking", value: "Base de loisirs (10 min à pied)" },
    ],
  },
  funFact:
    "L'église de Saint-Jean-de-Chevelu abrite 75 m² de toiles contemporaines et des cornières d'inox de 8 mètres — et on ne s'y attend absolument pas.",
  prevPage: null,
  nextPage: {
    title: "Châteaux et maisons fortes",
    slug: "chateaux",
    categorySlug: "patrimoine",
  },
};

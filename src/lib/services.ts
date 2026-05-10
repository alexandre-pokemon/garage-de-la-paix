export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "vidange",
    title: "Vidange & entretien",
    short: "Vidange moteur, filtres et révision constructeur.",
    long:
      "Nous réalisons la vidange et l'entretien périodique de votre véhicule selon les préconisations du constructeur. Huiles de qualité, contrôle visuel complet et conseils sur l'état général.",
    bullets: [
      "Vidange huile moteur",
      "Remplacement filtres (huile, air, habitacle, carburant)",
      "Contrôle des niveaux et fuites",
      "Révision selon carnet d'entretien",
    ],
  },
  {
    slug: "freins",
    title: "Freinage",
    short: "Plaquettes, disques, étriers et liquide de frein.",
    long:
      "Le freinage, c'est votre sécurité. Nous diagnostiquons l'usure de vos plaquettes et disques, remplaçons les pièces fatiguées et purgeons le circuit hydraulique.",
    bullets: [
      "Remplacement plaquettes avant et arrière",
      "Disques et tambours",
      "Purge du liquide de frein",
      "Contrôle ABS et étriers",
    ],
  },
  {
    slug: "controle-technique",
    title: "Contrôle technique",
    short: "Préparation et passage à la contre-visite si besoin.",
    long:
      "Avant ou après votre contrôle technique, nous identifions les points à corriger et nous nous occupons des réparations nécessaires pour valider la contre-visite.",
    bullets: [
      "Pré-contrôle technique gratuit",
      "Réparation des points défaillants",
      "Suivi de la contre-visite",
      "Conseils avant passage",
    ],
  },
  {
    slug: "pneus",
    title: "Pneus & géométrie",
    short: "Montage, équilibrage et parallélisme.",
    long:
      "Nous proposons toutes les marques de pneus, le montage, l'équilibrage et le réglage du parallélisme pour une tenue de route optimale et une usure régulière.",
    bullets: [
      "Vente et montage toutes marques",
      "Équilibrage 4 roues",
      "Parallélisme / géométrie",
      "Permutation et stockage saisonnier",
    ],
  },
  {
    slug: "climatisation",
    title: "Climatisation",
    short: "Recharge, diagnostic et désinfection.",
    long:
      "Climatisation qui souffle moins fort ou qui sent mauvais ? Nous recherchons les fuites, rechargeons le circuit et désinfectons l'évaporateur pour un air sain.",
    bullets: [
      "Recharge gaz R134a et R1234yf",
      "Détection de fuites",
      "Désinfection de l'évaporateur",
      "Remplacement filtre habitacle",
    ],
  },
  {
    slug: "mecanique-generale",
    title: "Mécanique générale",
    short: "Embrayage, distribution, suspension, échappement.",
    long:
      "Du remplacement d'un kit de distribution à la réfection d'un embrayage, notre atelier est équipé pour la grande mécanique sur toutes marques européennes et asiatiques.",
    bullets: [
      "Kit de distribution & courroies",
      "Embrayage et boîte de vitesses",
      "Amortisseurs et suspension",
      "Ligne d'échappement complète",
    ],
  },
  {
    slug: "diagnostic-electronique",
    title: "Diagnostic électronique",
    short: "Lecture des codes défauts toutes marques.",
    long:
      "Voyant moteur allumé ? Notre valise multimarque lit les codes défauts du calculateur, identifie l'origine du problème et propose la réparation adaptée.",
    bullets: [
      "Lecture multi-marques (OBD)",
      "Diagnostic capteurs et calculateurs",
      "Reset des défauts après réparation",
      "Conseils sur la suite à donner",
    ],
  },
  {
    slug: "echappement",
    title: "Échappement",
    short: "Silencieux, catalyseur et FAP.",
    long:
      "Bruit anormal, perte de puissance ou voyant FAP ? Nous diagnostiquons et remplaçons les éléments de la ligne d'échappement, du collecteur au silencieux arrière.",
    bullets: [
      "Silencieux avant et arrière",
      "Catalyseur",
      "Filtre à particules (FAP)",
      "Soudure et fixations",
    ],
  },
];

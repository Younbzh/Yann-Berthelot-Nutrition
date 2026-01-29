export const siteConfig = {
  // IDENTITÉ
  salonName: "Suzanne Ongles",
  owner: "Suzanne Foulfoin",
  title: "Prothésiste Ongulaire",
  tagline: "Sublimez vos ongles",
  slogan: "Un espace cocooning rien que pour vous",
  city: "Loudéac",
  region: "Côtes-d'Armor, Bretagne",
  
  // HERO
  hero: {
    title: "Suzanne Ongles",
    subtitle: "Prothésiste Ongulaire à Loudéac",
    description: "Bienvenue dans mon univers dédié à la beauté de vos mains. Je vous accueille dans un espace chaleureux et cocooning pour sublimer vos ongles et vous offrir un vrai moment de détente.",
    opening: "Ouvert depuis octobre 2025",
    cta: "Prendre rendez-vous",
    rating: "5.0/5 (31 avis)"
  },

  // SUZANNE
  suzanne: {
    name: "Suzanne Foulfoin",
    title: "Prothésiste Ongulaire Passionnée",
    bio: "Passionnée par mon métier, je propose une large gamme de prestations allant du stylisme ongulaire et nail art à la pose d'ongles en gel, en passant par le vernis semi-permanent. Mon expérience et mon savoir-faire me permettent d'offrir un service minutieux et perfectionné.",
    expertise: "Spécialiste de la beauté des mains reconnue pour la qualité de son travail et sa créativité",
    passion: "Je suis une artiste de l'ongle, et mon objectif est de faire pétiller votre beauté jusqu'au bout des doigts !",
    values: [
      "Qualité & minutie",
      "Créativité & nail art",
      "Accueil chaleureux",
      "Espace cocooning",
      "Professionnalisme"
    ]
  },

  // LE SALON
  salon: {
    title: "Le Salon",
    description: "Un espace chaleureux et accueillant avec une décoration moderne aux nuances subtiles. Chaque détail a été pensé pour que vous vous sentiez à l'aise et profitiez d'un moment de pure détente.",
    atmosphere: "Ambiance cocooning et intimiste pour un moment rien qu'à vous",
    features: [
      "Décoration moderne et féminine",
      "Espace cocooning et relaxant",
      "Matériel professionnel de qualité",
      "Produits haut de gamme",
      "Intimité garantie"
    ]
  },

  // PRESTATIONS & TARIFS
  services: {
    title: "Mes Prestations",
    subtitle: "Des mains sublimées selon vos envies",
    note: "Je ne propose pas de remplissage extérieur. Si vos ongles ont été faits ailleurs, merci d'ajouter une dépose extérieure puis la prestation souhaitée.",
    categories: [
      {
        name: "Semi-Permanent",
        icon: "💅",
        description: "Vernis longue tenue sur ongle naturel (pas de nail art)",
        prestations: [
          {
            name: "Semi-permanent",
            duration: "1h",
            price: "30€",
            details: "Vernis longue tenue appliqué sur l'ongle naturel. Idéal pour un rendu net et soigné. Tient 2 à 3 semaines."
          },
          {
            name: "Dépose + Repose Semi-permanent",
            duration: "1h10",
            price: "35€",
            details: "Dépose de votre ancien semi-permanent + nouvelle pose"
          },
          {
            name: "Dépose semi-permanent",
            duration: "20min",
            price: "10€",
            details: "Retrait soigneux de votre vernis semi-permanent"
          }
        ]
      },
      {
        name: "Gainage",
        icon: "✨",
        description: "Renforcement des ongles fragiles",
        prestations: [
          {
            name: "Gainage - couleur simple",
            duration: "1h30",
            price: "45€",
            details: "Renforcement des ongles fragiles grâce au gel ou rubber base. Pour garder une longueur naturelle tout en solidifiant. Tient 4 semaines."
          },
          {
            name: "Gainage + rallongement - couleur simple",
            duration: "1h45",
            price: "48€",
            details: "Gainage + réparation de 1 à 3 ongles cassés (rallongement). Tient 4 semaines."
          }
        ]
      },
      {
        name: "Nail Art",
        icon: "🎨",
        description: "Personnalisez vos ongles selon vos envies",
        note: "Merci de me transmettre vos idées avant le RDV pour un tarif adapté. PAS DE NAIL ART SUR LE SEMI-PERMANENT.",
        prestations: [
          {
            name: "Effet chrome",
            duration: "5min",
            price: "2€",
            details: "Effet miroir élégant"
          },
          {
            name: "French manucure / Baby boomer",
            duration: "15min",
            price: "5€",
            details: "Classique intemporel"
          },
          {
            name: "Nail art niveau 1",
            duration: "15min",
            price: "5€",
            details: "Petites décorations discrètes : traits fins, pois, paillettes sur quelques doigts"
          },
          {
            name: "Nail art niveau 2",
            duration: "20min",
            price: "10€",
            details: "Techniques élaborées : blooming, dégradés, dessins détaillés, chrome"
          },
          {
            name: "Nail art niveau 3",
            duration: "30min",
            price: "15€",
            details: "Mélange de techniques : blooming, dégradé, chrome, french..."
          }
        ]
      }
    ]
  },

  // POURQUOI ME CHOISIR
  whyChoose: {
    title: "Pourquoi choisir Suzanne Ongles ?",
    reasons: [
      {
        icon: "⭐",
        title: "Note 5/5",
        description: "31 clientes satisfaites avec une note parfaite sur tous les critères"
      },
      {
        icon: "💎",
        title: "Qualité professionnelle",
        description: "Matériel et produits haut de gamme pour un résultat impeccable"
      },
      {
        icon: "🎨",
        title: "Créativité",
        description: "Du nail art sur-mesure pour des ongles uniques"
      },
      {
        icon: "🏠",
        title: "Ambiance cocooning",
        description: "Un espace intimiste et relaxant rien que pour vous"
      },
      {
        icon: "⏱️",
        title: "Tenue longue durée",
        description: "Vos ongles restent parfaits pendant 2 à 4 semaines"
      },
      {
        icon: "💝",
        title: "Service personnalisé",
        description: "À l'écoute de vos envies pour un résultat qui vous ressemble"
      }
    ]
  },

  // AVIS CLIENTS
  reviews: {
    title: "Vos Avis",
    rating: 5.0,
    totalReviews: 31,
    breakdown: {
      accueil: 5.0,
      proprete: 5.0,
      cadre: 5.0,
      qualite: 5.0
    },
    testimonials: [
      {
        rating: 5,
        text: "Rien à dire, travail soigné qui tient bien dans le temps. Accueil au top. Je recommence !",
        date: "Janvier 2026"
      },
      {
        rating: 5,
        text: "Tout était parfait! Suzanne est très gentille et les ongles sont très réussis je suis vraiment contente du résultat !!",
        date: "Janvier 2026"
      },
      {
        rating: 5,
        text: "Suzanne est une personne très agréable. J'ai passé un très bon moment.",
        date: "Janvier 2026"
      },
      {
        rating: 5,
        text: "Je recommande Suzanne, elle m'a fait passer un joli moment auprès d'elle ! Première fois pour mes ongles, et je recommencerai !!",
        date: "Janvier 2026"
      },
      {
        rating: 5,
        text: "Toujours ravie des prestations et de l'accueil de Suzanne !",
        date: "Janvier 2026"
      }
    ]
  },

  // PROCESSUS
  process: {
    title: "Comment ça se passe ?",
    steps: [
      {
        number: "01",
        title: "Réservation",
        description: "Prenez rendez-vous en ligne sur Planity, 24h/24"
      },
      {
        number: "02",
        title: "Accueil",
        description: "Je vous accueille dans mon espace cocooning"
      },
      {
        number: "03",
        title: "Conseil",
        description: "Nous discutons de vos envies et je vous conseille"
      },
      {
        number: "04",
        title: "Réalisation",
        description: "Je sublime vos ongles avec soin et minutie"
      },
      {
        number: "05",
        title: "Détente",
        description: "Profitez d'un moment de pure relaxation"
      }
    ]
  },

  // INFOS PRATIQUES
  infos: {
    title: "Informations Pratiques",
    address: {
      street: "10 Avenue des Combattants",
      city: "22600 Loudéac",
      region: "Côtes-d'Armor, Bretagne"
    },
    hours: {
      monday: "08:00 - 19:00",
      tuesday: "08:00 - 19:00",
      wednesday: "08:00 - 19:00",
      thursday: "08:00 - 19:00",
      friday: "08:00 - 18:00",
      saturday: "Fermé",
      sunday: "Fermé"
    },
    booking: {
      platform: "Planity",
      url: "https://www.planity.com/suzanne-ongles-22600-loudeac",
      features: [
        "Réservation 24h/24",
        "Gratuit",
        "Confirmation immédiate",
        "Choix de la prestation",
        "Sélection de la date et l'heure"
      ]
    },
    parking: "Stationnement facile à proximité",
    opening: "Ouvert depuis octobre 2025"
  },

  // CONSEILS
  tips: {
    title: "Mes Conseils",
    items: [
      {
        icon: "💡",
        title: "Avant le RDV",
        advice: "Envoyez-moi vos inspirations nail art pour que je puisse préparer votre prestation"
      },
      {
        icon: "🚫",
        title: "Ongles faits ailleurs",
        advice: "Pensez à réserver une dépose extérieure en plus de votre prestation souhaitée"
      },
      {
        icon: "⏱️",
        title: "Durée de tenue",
        advice: "Semi-permanent : 2-3 semaines • Gainage : 4 semaines"
      },
      {
        icon: "🎨",
        title: "Nail art",
        advice: "Le nail art n'est pas réalisé sur le semi-permanent, uniquement sur le gel/gainage"
      }
    ]
  },

  // FAQ
  faq: [
    {
      question: "Puis-je venir pour un remplissage si mes ongles ont été faits ailleurs ?",
      answer: "Je ne propose pas de remplissage extérieur. Si vos ongles ont été réalisés ailleurs, il faudra d'abord réserver une dépose extérieure, puis la prestation souhaitée."
    },
    {
      question: "Peut-on faire du nail art sur du semi-permanent ?",
      answer: "Non, le nail art n'est pas réalisé sur le semi-permanent. Il est uniquement possible sur les poses en gel et le gainage."
    },
    {
      question: "Combien de temps tiennent les ongles ?",
      answer: "Le semi-permanent tient environ 2 à 3 semaines. Le gainage tient environ 4 semaines."
    },
    {
      question: "Comment réserver un rendez-vous ?",
      answer: "Vous pouvez réserver directement en ligne sur Planity 24h/24. La réservation est gratuite et vous recevez une confirmation immédiate."
    },
    {
      question: "Dois-je apporter mes inspirations nail art ?",
      answer: "Oui, merci de me transmettre vos idées ou inspirations avant le rendez-vous, afin que je puisse déterminer le niveau de nail art et vous proposer un tarif adapté."
    },
    {
      question: "Y a-t-il un parking ?",
      answer: "Oui, vous pouvez vous garer facilement à proximité du salon, avenue des Combattants."
    }
  ],

  // SEO
  seo: {
    title: "Suzanne Ongles - Prothésiste Ongulaire Loudéac | Nail Art & Manucure",
    description: "Suzanne Ongles, prothésiste ongulaire à Loudéac. Semi-permanent, gainage, nail art, manucure. Note 5/5 • Espace cocooning • RDV en ligne sur Planity. 10 av. des Combattants, 22600 Loudéac.",
    keywords: "Suzanne Ongles, prothésiste ongulaire Loudéac, nail art Loudéac, manucure Loudéac, semi-permanent, gainage ongles, pose ongles gel, onglerie Côtes-d'Armor, 22600, Suzanne Foulfoin"
  },

  // THÈME
  theme: {
    primary: "pink", // Rose élégant
    secondary: "purple", // Violet doux
    accent: "rose", // Rose poudré
    light: "pink", // Fond clair rosé
    mode: "light" // Mode clair et féminin
  }
};
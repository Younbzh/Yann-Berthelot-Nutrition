export const siteConfig = {
  // IDENTITÉ
  storeName: "Maison Exotique",
  slogan: "Mariziki Nema Na Baraka",
  sloganTranslation: "(Swahili : Avec amour et bénédiction)",
  tagline: "Épicerie du Monde",
  city: "Loudéac",
  region: "Côtes-d'Armor, Bretagne",
  
  // HERO
  hero: {
    title: "Maison Exotique",
    subtitle: "Votre épicerie du monde à Loudéac",
    slogan: "Mariziki Nema Na Baraka",
    description: "Découvrez les saveurs du monde entier dans notre épicerie à Loudéac. Des produits d'Afrique, des Antilles, du Brésil, d'Asie et bien plus encore. Fruits, légumes, surgelés, conserves, épices... tout pour voyager à travers vos assiettes !",
    opening: "Ouvert depuis octobre 2025",
    cta: "Découvrez nos produits"
  },

  // GÉRANTE
  manager: {
    name: "Moinecha Oiziri",
    age: 42,
    title: "Gérante",
    experience: "Anciennement sur les marchés autour de Rennes",
    story: "Après avoir sillonné les marchés de la région rennaise, Moinecha a décidé d'ouvrir une boutique fixe à Loudéac. Beaucoup de clients venaient de Loudéac mais n'avaient pas toujours les moyens de transport pour se déplacer. C'est ainsi qu'est née la Maison Exotique !",
    passion: "Faire découvrir les saveurs du monde et rendre accessible des produits parfois difficiles à trouver."
  },

  // CONCEPT
  concept: {
    title: "Notre Concept",
    subtitle: "Les saveurs du monde à Loudéac",
    mission: "Proposer des produits exotiques de qualité, introuvables ailleurs dans la région, pour permettre à chacun de cuisiner les plats de son pays ou de découvrir de nouvelles saveurs.",
    engagement: "Certains produits, nous allons les chercher nous-même une fois par semaine à Paris pour garantir leur fraîcheur et leur authenticité.",
    atmosphere: "Une ambiance chaleureuse et familiale où chacun est accueilli avec le sourire. Nous prenons le temps de conseiller nos clients et de partager nos connaissances."
  },

  // ORIGINES DES PRODUITS
  origins: {
    title: "D'où viennent nos produits ?",
    subtitle: "Un tour du monde sans quitter Loudéac",
    regions: [
      {
        icon: "🌍",
        name: "Côte d'Ivoire",
        description: "Attiéké, igname, bananes plantain, manioc, épices..."
      },
      {
        icon: "🏝️",
        name: "La Réunion",
        description: "Épices créoles, achards, rougail, rhum arrangé..."
      },
      {
        icon: "🇧🇷",
        name: "Brésil",
        description: "Produits brésiliens authentiques"
      },
      {
        icon: "🥢",
        name: "Asie",
        description: "Nouilles, sauces, épices asiatiques, produits frais..."
      },
      {
        icon: "🌴",
        name: "Antilles",
        description: "Produits des îles, fruits exotiques, spécialités créoles..."
      },
      {
        icon: "🌍",
        name: "Afrique",
        description: "Sénégal, Mali, Cameroun, Congo... Produits typiques de chaque pays"
      }
    ]
  },

  // GAMME DE PRODUITS
  products: {
    title: "Nos Produits",
    subtitle: "Du sucré au salé, tout pour cuisiner le monde",
    categories: [
      {
        icon: "🥩",
        title: "Viandes & Poissons",
        description: "Viandes fumées, séchées, surgelées",
        items: [
          "Poissons africains (tilapia, capitaine...)",
          "Viandes fumées",
          "Poulet, bœuf, mouton halal",
          "Produits de la mer surgelés"
        ]
      },
      {
        icon: "🥕",
        title: "Fruits & Légumes",
        description: "Frais et exotiques",
        items: [
          "Bananes plantain",
          "Igname, manioc, patates douces",
          "Gombo, feuilles de manioc",
          "Fruits exotiques de saison"
        ]
      },
      {
        icon: "🌶️",
        title: "Épices & Condiments",
        description: "Pour relever tous vos plats",
        items: [
          "Piments frais et séchés",
          "Épices africaines et asiatiques",
          "Bouillons (Maggi, Jumbo, Adja...)",
          "Huiles (palme, arachide...)"
        ]
      },
      {
        icon: "🍚",
        title: "Féculents & Céréales",
        description: "Base de nombreux plats",
        items: [
          "Riz (basmati, jasmin, thaï...)",
          "Farine de manioc, maïs",
          "Semoule, couscous",
          "Légumes secs (haricots, lentilles...)"
        ]
      },
      {
        icon: "🥫",
        title: "Conserves",
        description: "Pratiques et longue conservation",
        items: [
          "Tomates, concentrés",
          "Légumes en conserve",
          "Sauces préparées",
          "Produits prêts à consommer"
        ]
      },
      {
        icon: "❄️",
        title: "Surgelés",
        description: "Qualité et fraîcheur garanties",
        items: [
          "Viandes et poissons",
          "Légumes préparés",
          "Plats cuisinés",
          "Produits de la mer"
        ]
      },
      {
        icon: "🍬",
        title: "Sucré & Boissons",
        description: "Gourmandises du monde",
        items: [
          "Jus exotiques (bissap, gingembre...)",
          "Bonbons et confiseries",
          "Biscuits importés",
          "Chocolats et pâtisseries"
        ]
      },
      {
        icon: "💆‍♀️",
        title: "Cosmétiques Afro",
        description: "Soins capillaires et beauté",
        items: [
          "Beurre de karité",
          "Huiles capillaires",
          "Produits de beauté afro",
          "Savons traditionnels"
        ]
      }
    ]
  },

  // POURQUOI NOUS
  whyUs: {
    title: "Pourquoi la Maison Exotique ?",
    reasons: [
      {
        icon: "🌍",
        title: "Large choix",
        description: "Des produits d'Afrique, Asie, Antilles, Brésil, Réunion..."
      },
      {
        icon: "✈️",
        title: "Fraîcheur garantie",
        description: "Approvisionnement hebdomadaire à Paris pour certains produits"
      },
      {
        icon: "💰",
        title: "Prix accessibles",
        description: "Des tarifs compétitifs pour rendre l'exotisme accessible à tous"
      },
      {
        icon: "🤝",
        title: "Conseil personnalisé",
        description: "On vous aide à choisir et on partage nos recettes"
      },
      {
        icon: "📍",
        title: "Proximité",
        description: "Plus besoin d'aller loin, tout est à Loudéac !"
      },
      {
        icon: "❤️",
        title: "Accueil chaleureux",
        description: "Une ambiance familiale et conviviale"
      }
    ]
  },

  // HISTOIRE
  story: {
    title: "Notre Histoire",
    content: "La Maison Exotique est née d'une constatation simple : beaucoup de clients qui venaient sur les marchés autour de Rennes habitaient Loudéac, mais n'avaient pas toujours les moyens de transport pour faire le déplacement. Moinecha Oiziri, qui tenait un stand de produits exotiques, a décidé de franchir le pas et d'ouvrir une boutique fixe à Loudéac. Depuis octobre 2025, la Maison Exotique accueille ses clients au 7 boulevard de la Gare. L'aventure continue également à Merdrignac où une seconde boutique reste ouverte. Chaque semaine, Moinecha se rend à Paris pour s'approvisionner en produits rares et garantir la fraîcheur de certains articles. C'est ce dévouement et cette passion qui font de la Maison Exotique un lieu unique dans la région."
  },

  // POUR QUI
  target: {
    title: "La Maison Exotique, c'est pour qui ?",
    profiles: [
      {
        icon: "🏠",
        title: "Les expatriés",
        description: "Retrouvez les saveurs de votre pays"
      },
      {
        icon: "👨‍🍳",
        title: "Les cuisiniers aventureux",
        description: "Découvrez de nouvelles recettes du monde"
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Les familles",
        description: "Faites voyager vos enfants à travers la cuisine"
      },
      {
        icon: "🌱",
        title: "Les végétariens",
        description: "Large choix de légumes secs, épices et céréales"
      },
      {
        icon: "🎓",
        title: "Les étudiants",
        description: "Produits à prix accessibles pour cuisiner chez soi"
      },
      {
        icon: "🍽️",
        title: "Les restaurants",
        description: "Approvisionnement professionnel en produits authentiques"
      }
    ]
  },

  // RECETTES & CONSEILS
  recipes: {
    title: "Besoin d'inspiration ?",
    subtitle: "On vous aide à cuisiner",
    description: "Vous ne savez pas comment utiliser un produit ? Vous cherchez une recette ? N'hésitez pas à nous demander ! Nous partageons volontiers nos conseils et nos recettes favorites.",
    examples: [
      "Poulet Yassa (Sénégal)",
      "Mafé (sauce arachide)",
      "Attiéké avec poisson grillé",
      "Dombré (Antilles)",
      "Bobotie (Afrique du Sud)",
      "Curry de légumes (Réunion)"
    ]
  },

  // INFORMATIONS PRATIQUES
  infos: {
    title: "Informations Pratiques",
    address: {
      street: "7 boulevard de la Gare",
      city: "22600 Loudéac",
      region: "Côtes-d'Armor, Bretagne"
    },
    hours: {
      current: "Du lundi au dimanche : 10h - 19h30",
      closed: "Fermé le mardi",
      note: "Évolution possible des horaires du dimanche prochainement",
      weekdays: {
        monday: "10h00 - 19h30",
        tuesday: "Fermé",
        wednesday: "10h00 - 19h30",
        thursday: "10h00 - 19h30",
        friday: "10h00 - 19h30",
        saturday: "10h00 - 19h30",
        sunday: "10h00 - 19h30"
      }
    },
    contact: {
      phone: "06 50 07 18 69",
      email: "contact@maison-exotique-loudeac.fr"
    },
    otherLocation: {
      name: "Maison Exotique Merdrignac",
      note: "Nous gardons également notre boutique de Merdrignac"
    }
  },

  // ACTUALITÉS
  news: {
    title: "Actualités",
    latest: {
      date: "Octobre 2025",
      title: "Ouverture à Loudéac !",
      content: "Après le succès sur les marchés, la Maison Exotique ouvre ses portes au 7 boulevard de la Gare à Loudéac. Venez découvrir notre large gamme de produits exotiques !"
    }
  },

  // FAQ
  faq: [
    {
      question: "Où vous approvisionnez-vous ?",
      answer: "Nous nous approvisionnons auprès de fournisseurs spécialisés et nous allons nous-même une fois par semaine à Paris pour certains produits frais et rares."
    },
    {
      question: "Avez-vous des produits halal ?",
      answer: "Oui, nous proposons une sélection de viandes halal (poulet, bœuf, mouton)."
    },
    {
      question: "Puis-je commander des produits spécifiques ?",
      answer: "Oui ! Si vous cherchez un produit particulier, n'hésitez pas à nous le demander. Nous ferons notre possible pour vous le trouver."
    },
    {
      question: "Proposez-vous des conseils de cuisine ?",
      answer: "Absolument ! Nous adorons partager nos recettes et conseils. N'hésitez pas à nous poser des questions sur l'utilisation des produits."
    },
    {
      question: "Y a-t-il un parking ?",
      answer: "Oui, vous pouvez vous garer à proximité du magasin, boulevard de la Gare."
    },
    {
      question: "Faites-vous la livraison ?",
      answer: "Pour le moment nous ne faisons pas de livraison, mais vous pouvez passer nous voir en boutique du lundi au dimanche (fermé le mardi)."
    }
  ],

  // SEO
  seo: {
    title: "Maison Exotique Loudéac - Épicerie Africaine, Asiatique & du Monde",
    description: "Maison Exotique, votre épicerie du monde à Loudéac. Produits d'Afrique, Asie, Antilles, Brésil, Réunion. Viandes, poissons, fruits, légumes, épices, cosmétiques afro. 7 bd de la Gare, 22600 Loudéac.",
    keywords: "Maison Exotique, épicerie exotique Loudéac, produits africains Loudéac, épicerie africaine Côtes-d'Armor, produits asiatiques, Antilles, Réunion, épices, cosmétiques afro, halal Loudéac, 22600"
  },

  // THÈME (couleurs du logo)
  theme: {
    primary: "red", // Rouge/corail du logo
    secondary: "orange", // Orange chaleureux
    accent: "amber", // Beige/crème
    warm: "yellow", // Jaune pour accents
    mode: "light" // Mode clair et chaleureux
  }
};
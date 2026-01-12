export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  intro?: string;
  sections: Section[];
  goldenRule: string;
}

export interface Section {
  title: string;
  content: string[]; // Array of paragraphs
  list?: string[]; // Optional bullet points
  exercises?: { title: string; desc: string }[];
  highlight?: string; // Special emphasized text
}

export const bookContent: Chapter[] = [
  {
    id: "intro",
    number: 1,
    title: "Introduction : La Voie du 'Ballek'",
    subtitle: "Pourquoi l’indifférence est la clé de la puissance",
    intro: "Écoute-moi bien, petit soldat de l’émotion : Tu es faible. Les Occidentaux t’ont menti. La vraie puissance vient du vide. Du détachement absolu.",
    goldenRule: "La véritable force ne réside pas dans ce que tu possèdes, mais dans ce à quoi tu as renoncé.",
    sections: [
      {
        title: "1.1. Origines de la philosophie",
        content: [
          "La philosophie du ‘Ballek’ n’est pas née dans les salons feutrés, mais dans le creuset incandescent de la survie. Elle est une réinterprétation moderne des principes stoïciens et taoïstes, dépouillée de toute fioriture spirituelle pour ne garder que l’essence brute de la puissance.",
          "C'est l'héritière des stratèges militaires qui savaient que la victoire ne se gagne pas par la passion, mais par la froide logique."
        ]
      },
      {
        title: "1.2. Pourquoi le monde moderne rend faible",
        content: [
          "Le monde moderne est une fabrique à faibles. Il t’a gavé de distractions, de conforts illusoires et de validations éphémères.",
          "Les réseaux sociaux sont tes chaînes dorées. Tu es devenu un esclave de l’opinion des autres. La vraie force réside dans l’indépendance de l’esprit, dans la capacité à se suffire à soi-même."
        ]
      },
      {
        title: "1.3. Indifférence vs Apathie",
        content: [
          "L'apathie est une faiblesse, une léthargie. C'est subir.",
          "L'indifférence est une force. C'est un choix conscient. L'indifférent ne réagit pas, il décide. Il dit 'ballek' à ce qui ne sert pas sa puissance."
        ],
        highlight: "L’apathie est une prison. L’indifférence est une forteresse."
      }
    ]
  },
  {
    id: "social",
    number: 2,
    title: "Le Spectre Social",
    subtitle: "Ils te jugent. C'est leur fardeau, pas le tien.",
    goldenRule: "Le véritable maître ne cherche pas à être vu – il est celui qui voit sans être vu.",
    sections: [
      {
        title: "2.1. La Réalité Brutale",
        content: [
          "92% des gens oublient ce que tu as dit ou fait après 48 heures. Le reste ? Ils mentent.",
          "Dans le film de TA vie, les autres ne sont que des extras. Leur opinion n’a aucune conséquence sur ton salaire."
        ]
      },
      {
        title: "2.2. Exercices de Détachement",
        content: ["Le détachement est un muscle. Voici comment l'entraîner :"],
        exercises: [
          { title: "L'entraînement du regard", desc: "Fixe droit devant toi. Ne détourne pas les yeux jusqu'à ce que l'autre baisse les siens." },
          { title: "Le défi de l'humiliation contrôlée", desc: "Porte un vêtement ridicule pendant 24h. Prouve que leur réaction ne peut pas te détruire." },
          { title: "La technique du miroir brisé", desc: "Quand on te critique, demande-toi mentalement : 'Pourquoi cette personne ressent-elle le besoin de dire cela ?' Creuse leur insécurité." },
          { title: "Le journal de l'indifférence", desc: "Note chaque soir trois émotions fortes dues aux autres, et comment tu aurais pu réagir avec indifférence." },
          { title: "La marche du détachement", desc: "Marche seul, sans but, dans un environnement inconnu. Laisse tes pensées vagabonder sans t'y attacher." }
        ]
      },
      {
        title: "2.3. Le Cercle des Parasites",
        content: [
          "Il y a les prédateurs, les proies, et les parasites. Les parasites se nourrissent de ton énergie.",
          "Identifie-les : ils ne te contactent que par besoin, ne s'intéressent qu'à tes problèmes, te critiquent sous couvert de 'conseils'.",
          "Solution : Élimination. Pas de pitié."
        ]
      },
      {
        title: "2.4. L'Art de l'Invisibilité",
        content: [
          "Le bruit attire les mouches. Le silence attire la puissance.",
          "Le guerrier ne cherche pas les projecteurs. Il agit avec discrétion. Sois le fantôme qui réalise ses objectifs sans que personne ne sache comment."
        ]
      }
    ]
  },
  {
    id: "abondance",
    number: 3,
    title: "La Stratégie de l'Abondance",
    goldenRule: "Le besoin est une chaîne. Le non-besoin est une aile.",
    sections: [
      {
        title: "3.1. La Mathématique du Succès",
        content: [
          "Le succès n'est pas de la chance, c'est des probabilités. 50 propositions = 1 contrat. Les 49 autres sont des échauffements.",
          "Chaque 'non' est un filtre. Les faibles voient des portes fermées. Les forts voient des portes triées."
        ]
      },
      {
        title: "3.2. L'État d'Esprit du Prédateur",
        content: [
          "Le monde est une jungle : prédateur ou proie. Les proies attendent. Les prédateurs chassent.",
          "Avant chaque approche : 'Si ça passe, je gagne. Si ça rate, j'ai rien perdu. Je récupère simplement mon temps.'"
        ]
      },
      {
        title: "3.3. La Loi du Non-Besoin",
        content: [
          "Moins tu as besoin, plus tu obtiens. Le besoin pue la faiblesse.",
          "Le guerrier n'a besoin de rien. Il désire, il veut, mais il est complet en lui-même. C'est la différence entre la supplication et la proposition."
        ]
      },
      {
        title: "3.4. Gestion de l'Échec",
        content: [
          "L'échec n'existe pas. Seules existent les leçons.",
          "Ceux qui n'échouent jamais sont ceux qui ne tentent jamais rien. Transforme chaque revers en tremplin."
        ]
      }
    ]
  },
  {
    id: "stoicisme",
    number: 4,
    title: "Stoïcisme Moderne",
    goldenRule: "Ta paix intérieure est ton bien le plus précieux. Ne la confie à personne.",
    sections: [
      {
        title: "4.1. Les Techniques du Guerrier Immuable",
        content: [],
        exercises: [
          { title: "La technique des 10 secondes", desc: "Compte jusqu'à 10. Demande-toi si cela importera dans 5 ans." },
          { title: "Le mantra froid", desc: "“Ceci n’est pas mon problème. Ceci ne change pas ma mission.”" },
          { title: "La visualisation de la citadelle", desc: "Imagine-toi dans une citadelle imprenable. Les critiques sont des flèches qui rebondissent sur les murs." }
        ]
      },
      {
        title: "4.2. Tableau des Réactions",
        content: ["Les faibles réagissent. Les guerriers choisissent leur réponse."],
        // Note: The actual table data will be handled by the specialized component
      },
      {
        title: "4.3. La Citadelle Intérieure",
        content: [
          "C’est ton sanctuaire inviolable. Le monde peut être chaotique, mais à l’intérieur règne l’ordre.",
          "Personne ne peut y pénétrer sans ta permission."
        ]
      },
      {
        title: "4.4. Le Silence comme Arme",
        content: [
          "Le faible parle pour se rassurer. Le guerrier utilise le silence pour déstabiliser.",
          "Le silence n'est pas une absence, c'est une présence forte."
        ]
      }
    ]
  },
  {
    id: "action",
    number: 5,
    title: "Le Guide de l'Action Pure",
    goldenRule: "L’action sans attente est la seule action véritable.",
    sections: [
      {
        title: "5.1. La Méthode en 4 Étapes",
        list: [
          "1. Détection : Repère l’opportunité.",
          "2. Décision : En moins de 3 secondes.",
          "3. Exécution : Calme et assurance. Chirurgical.",
          "4. Détachement : Libère-toi du résultat. Une fois l'action faite, lâche prise."
        ],
        content: []
      },
      {
        title: "5.2. Le Défi des 21 Jours",
        content: [
          "Jour 1-7 : Action audacieuse (Demande une augmentation, parle à un inconnu).",
          "Jour 8-14 : Élimination (Coupe un lien toxique, investis en toi).",
          "Jour 15-21 : Libération totale (Partage une opinion impopulaire, fais quelque chose de ridicule)."
        ]
      },
      {
        title: "5.3. Élimination de la Procrastination",
        content: [
          "La procrastination est une trahison. La règle des 5 minutes : si ça prend moins de 5 min, fais-le maintenant.",
          "Agis. La procrastination est une illusion, l'action est la seule réalité."
        ]
      }
    ]
  },
  {
    id: "energie",
    number: 6,
    title: "La Maîtrise de l'Énergie",
    goldenRule: "Ton corps est ton véhicule. Ne le remplis pas de mauvais carburant.",
    sections: [
      {
        title: "6.1. Le Sommeil du Guerrier",
        content: ["Le sommeil n'est pas un luxe, c'est une arme. Dors pour régénérer, pas pour fuir."]
      },
      {
        title: "6.2. Nutrition et Clarté Mentale",
        content: ["Ce que tu manges définit ta pensée. Le sucre et le transformé sont des poisons pour l'esprit."]
      },
      {
        title: "6.3. L'Économie de l'Attention",
        content: ["Ton attention est ton trésor. Ne la laisse pas être pillée par les notifications et le bruit."]
      }
    ]
  },
  {
    id: "conclusion",
    number: 7,
    title: "Conclusion : Devenir Le Mur",
    goldenRule: "Deviens si fort que même ton ombre a peur de te suivre.",
    sections: [
      {
        title: "7.1. Les 4 Piliers du Mur",
        list: [
          "1. Le Détachement Absolu (Fondation)",
          "2. L'Action Implacable (Structure)",
          "3. La Maîtrise de Soi (Blindage)",
          "4. La Vision Claire (Phare)"
        ],
        content: []
      },
      {
        title: "7.2. L'Immuable",
        content: ["L’Immuable n’est pas un état, c’est un processus. Tu es le calme au milieu de la tempête."]
      },
      {
        title: "7.3. Le Serment du Silence",
        content: ["Le guerrier parle peu, mais ses actions résonnent éternellement. Fais ce serment."]
      }
    ]
  }
];

export const reactionData = [
  { situation: "Insulte publique", weak: "Colère, défense", strong: "Sourire, silence, départ" },
  { situation: "Échec pro", weak: "Procrastination, Panique", strong: "Analyse, Solution" },
  { situation: "Problème technique", weak: "Critique, Plainte", strong: "Note et décide, Agit" },
  { situation: "Retard d'un ami", weak: "Frustration, Reproche", strong: "Utilise le temps pour soi" },
  { situation: "Critique injuste", weak: "Justification, Vengeance", strong: "Écoute, puis ignore" },
  { situation: "Perte d'argent", weak: "Désespoir", strong: "Planifie la récupération" },
  { situation: "Rumeur malveillante", weak: "Colère, Démenti", strong: "Silence, Vérité éclate" },
  { situation: "Déception amoureuse", weak: "Douleur, Vengeance", strong: "Acceptation, Apprentissage" },
  { situation: "Pression sociale", weak: "Conformisme", strong: "Indépendance" }
];

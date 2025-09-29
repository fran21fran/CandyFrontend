export const professions = {
  healthcare: [
    {
      french: "médecin",
      spanish: "médico",
      pronunciation: "[medsɛ̃]",
      gender: "masculino/femenino",
      feminine_form: "médecin (invariable) ou femme médecin",
      definition: "Profesional de la salud que diagnostica y trata enfermedades",
      workplace: "hôpital, clinique, cabinet médical",
      studies: "Études de médecine (6-11 ans)",
      specializations: ["généraliste", "cardiologue", "pédiatre", "chirurgien"],
      examples: [
        { french: "Je vais chez le médecin", spanish: "Voy al médico", context: "consulta" },
        { french: "Elle est médecin", spanish: "Es médica", context: "profesión" },
        { french: "Un bon médecin", spanish: "Un buen médico", context: "calidad" }
      ],
      responsibilities: ["Diagnostiquer", "Prescrire", "Soigner", "Prévenir"],
      cultural_status: "Profession très respectée en France"
    },
    {
      french: "infirmier/infirmière",
      spanish: "enfermero/enfermera",
      pronunciation: "[ɛ̃firmje/ɛ̃firmjɛr]",
      gender: "infirmier (m.), infirmière (f.)",
      definition: "Profesional de salud que cuida directamente a los pacientes",
      workplace: "hôpital, clinique, EHPAD, domicile",
      studies: "Études d'infirmier (3 ans)",
      specializations: ["bloc opératoire", "réanimation", "pédiatrie", "psychiatrie"],
      examples: [
        { french: "L'infirmière prend la tension", spanish: "La enfermera toma la tensión", context: "soin" },
        { french: "Infirmier de nuit", spanish: "Enfermero de noche", context: "horaire" }
      ],
      responsibilities: ["Soins directs", "Surveillance", "Administration médicaments", "Éducation patient"],
      evolution: "Profession en voie de féminisation"
    },
    {
      french: "dentiste",
      spanish: "dentista",
      pronunciation: "[dɑ̃tist]",
      gender: "masculino/femenino invariable",
      definition: "Especialista en salud dental y bucal",
      workplace: "cabinet dentaire",
      studies: "Études d'odontologie (6 ans)",
      specializations: ["orthodontie", "chirurgie dentaire", "parodontologie"],
      examples: [
        { french: "Rendez-vous chez le dentiste", spanish: "Cita con el dentista", context: "consultation" },
        { french: "J'ai peur du dentiste", spanish: "Tengo miedo al dentista", context: "anxiété" }
      ],
      tools: ["fraise", "roulette", "bistouri", "radio"],
      cultural_note: "Souvent source d'anxiété pour les patients"
    }
  ],

  education: [
    {
      french: "professeur",
      spanish: "profesor",
      pronunciation: "[pʁɔfesœʁ]",
      gender: "masculino/femenino",
      feminine_form: "professeur (invariable) ou professeure",
      definition: "Educador que enseña en instituciones educativas",
      levels: ["école primaire", "collège", "lycée", "université"],
      studies: "CAPES, Agrégation, ou Master + concours",
      specializations: ["mathématiques", "français", "histoire", "sciences"],
      examples: [
        { french: "Mon professeur de français", spanish: "Mi profesor de francés", context: "matière" },
        { french: "Professeur des écoles", spanish: "Maestro de primaria", context: "niveau" },
        { french: "Elle veut être professeur", spanish: "Quiere ser profesora", context: "aspiration" }
      ],
      responsibilities: ["Enseigner", "Évaluer", "Éduquer", "Accompagner"],
      variations: ["prof (familier)", "enseignant", "instituteur (primaire)"]
    },
    {
      french: "directeur/directrice",
      spanish: "director/directora",
      pronunciation: "[diʁɛktœʁ/diʁɛktʁis]",
      gender: "directeur (m.), directrice (f.)",
      definition: "Responsable administrativo y pedagógico de institución",
      workplace: "école, collège, lycée, entreprise",
      studies: "Formation spécialisée + expérience",
      examples: [
        { french: "Directrice de l'école", spanish: "Directora de la escuela", context: "établissement" },
        { french: "Convoqué chez le directeur", spanish: "Convocado por el director", context: "discipline" }
      ],
      responsibilities: ["Administrer", "Coordonner", "Décider", "Représenter"],
      authority: "Autorité hiérarchique importante"
    }
  ],

  business: [
    {
      french: "avocat/avocate",
      spanish: "abogado/abogada",
      pronunciation: "[avɔka/avɔkat]",
      gender: "avocat (m.), avocate (f.)",
      definition: "Profesional del derecho que defiende y asesora clientes",
      workplace: "cabinet d'avocats, tribunal, étude",
      studies: "Droit (5 ans) + École du Barreau",
      specializations: ["pénal", "civil", "commercial", "social"],
      examples: [
        { french: "Consulter un avocat", spanish: "Consultar un abogado", context: "conseil" },
        { french: "Avocat de la défense", spanish: "Abogado defensor", context: "procès" }
      ],
      responsibilities: ["Défendre", "Conseiller", "Plaider", "Rédiger"],
      cultural_prestige: "Profession libérale prestigieuse"
    },
    {
      french: "comptable",
      spanish: "contable",
      pronunciation: "[kɔ̃tabl]",
      gender: "masculino/femenino invariable",
      definition: "Especialista en gestión financiera y contabilidad",
      workplace: "cabinet comptable, entreprise, administration",
      studies: "BTS/DUT Comptabilité + formations spécialisées",
      specializations: ["audit", "fiscalité", "social", "consolidation"],
      examples: [
        { french: "Le comptable fait les bilans", spanish: "El contable hace los balances", context: "travail" },
        { french: "Rendez-vous avec la comptable", spanish: "Cita con la contable", context: "consultation" }
      ],
      responsibilities: ["Tenir les comptes", "Déclarations fiscales", "Conseiller", "Auditer"],
      importance: "Essentiel pour la gestion d'entreprise"
    }
  ],

  services: [
    {
      french: "coiffeur/coiffeuse",
      spanish: "peluquero/peluquera",
      pronunciation: "[kwafœʁ/kwafœz]",
      gender: "coiffeur (m.), coiffeuse (f.)",
      definition: "Profesional que cuida y estiliza el cabello",
      workplace: "salon de coiffure",
      studies: "CAP Coiffure (2 ans)",
      specializations: ["coupe", "couleur", "permanente", "extensions"],
      examples: [
        { french: "Aller chez le coiffeur", spanish: "Ir a la peluquería", context: "rendez-vous" },
        { french: "Ma coiffeuse est douée", spanish: "Mi peluquera es hábil", context: "compétence" }
      ],
      services: ["Shampooing", "Coupe", "Brushing", "Coloration"],
      social_role: "Confident et conseiller en beauté"
    },
    {
      french: "serveur/serveuse",
      spanish: "camarero/camarera",
      pronunciation: "[sɛʁvœʁ/sɛʁvœz]",
      gender: "serveur (m.), serveuse (f.)",
      definition: "Profesional que atiende clientes en restauración",
      workplace: "restaurant, café, brasserie, hôtel",
      studies: "Formation courte ou sur le tas",
      specializations: ["sommelier", "barman", "chef de rang"],
      examples: [
        { french: "Le serveur prend la commande", spanish: "El camarero toma el pedido", context: "service" },
        { french: "Pourboire pour la serveuse", spanish: "Propina para la camarera", context: "gratification" }
      ],
      skills: ["Prise de commande", "Service", "Conseil", "Encaissement"],
      challenges: ["Horaires décalés", "Station debout", "Clientèle variée"]
    }
  ],

  technical: [
    {
      french: "ingénieur",
      spanish: "ingeniero",
      pronunciation: "[ɛ̃ʒenjœʁ]",
      gender: "masculino/femenino",
      feminine_form: "ingénieur (invariable) ou ingénieure",
      definition: "Profesional técnico que concibe y realiza proyectos",
      workplace: "entreprise, bureau d'études, chantier",
      studies: "École d'ingénieurs (5 ans)",
      specializations: ["informatique", "mécanique", "civil", "électronique"],
      examples: [
        { french: "Ingénieur informatique", spanish: "Ingeniero informático", context: "spécialité" },
        { french: "Elle est ingénieur", spanish: "Es ingeniera", context: "profession" }
      ],
      responsibilities: ["Concevoir", "Calculer", "Superviser", "Innover"],
      status: "Profession très valorisée en France"
    },
    {
      french: "électricien",
      spanish: "electricista",
      pronunciation: "[elɛktʁisjɛ̃]",
      gender: "masculino",
      feminine_form: "électricienne",
      definition: "Especialista en instalaciones eléctricas",
      workplace: "chantier, domicile, entreprise",
      studies: "CAP/BEP Électricité",
      specializations: ["bâtiment", "industriel", "automobile", "marine"],
      examples: [
        { french: "Appeler l'électricien", spanish: "Llamar al electricista", context: "dépannage" },
        { french: "Électricien du bâtiment", spanish: "Electricista de construcción", context: "spécialité" }
      ],
      tools: ["multimètre", "pince", "tournevis", "échelle"],
      safety: "Profession à risques, sécurité primordiale"
    }
  ],

  creative: [
    {
      french: "artiste",
      spanish: "artista",
      pronunciation: "[aʁtist]",
      gender: "masculino/femenino invariable",
      definition: "Creador en diversos campos artísticos",
      domains: ["peinture", "sculpture", "musique", "théâtre", "danse"],
      workplace: "atelier, scène, galerie, conservatoire",
      examples: [
        { french: "Artiste peintre", spanish: "Artista pintor", context: "spécialité" },
        { french: "Vie d'artiste", spanish: "Vida de artista", context: "mode de vie" }
      ],
      challenges: ["Précarité", "Reconnaissance", "Créativité constante"],
      support: "Subventions publiques à la culture"
    },
    {
      french: "écrivain",
      spanish: "escritor",
      pronunciation: "[ekʁivɛ̃]",
      gender: "masculino/femenino",
      feminine_form: "écrivain (invariable) ou écrivaine",
      definition: "Autor de obras literarias",
      genres: ["roman", "poésie", "théâtre", "essai"],
      workplace: "domicile, bibliothèque, café littéraire",
      examples: [
        { french: "Écrivain célèbre", spanish: "Escritor famoso", context: "notoriété" },
        { french: "Elle veut être écrivain", spanish: "Quiere ser escritora", context: "aspiration" }
      ],
      process: ["Inspiration", "Rédaction", "Révision", "Publication"],
      institutions: "Académie française, prix littéraires"
    }
  ],

  gender_evolution: [
    {
      trend: "Féminisation des noms",
      explanation: "Évolution récente vers la féminisation des professions",
      examples: [
        { traditional: "un professeur", modern: "une professeure", spanish: "profesora" },
        { traditional: "un médecin", modern: "une médecin/médecine", spanish: "médica" },
        { traditional: "un ingénieur", modern: "une ingénieure", spanish: "ingeniera" }
      ],
      resistance: "Certaines professions résistent encore à la féminisation",
      official_support: "Recommandations officielles pour la féminisation"
    }
  ],

  workplace_vocabulary: [
    {
      category: "Lieux de travail",
      terms: [
        { french: "bureau", spanish: "oficina", context: "administratif" },
        { french: "atelier", spanish: "taller", context: "artisanal" },
        { french: "chantier", spanish: "obra", context: "construction" },
        { french: "cabinet", spanish: "consulta", context: "libéral" },
        { french: "laboratoire", spanish: "laboratorio", context: "recherche" }
      ]
    },
    {
      category: "Horaires",
      terms: [
        { french: "temps plein", spanish: "tiempo completo", hours: "35-39h/semaine" },
        { french: "temps partiel", spanish: "tiempo parcial", hours: "moins de 35h" },
        { french: "horaires flexibles", spanish: "horarios flexibles", benefit: "adaptation" },
        { french: "télétravail", spanish: "teletrabajo", trend: "croissance post-Covid" }
      ]
    }
  ],

  professional_expressions: [
    {
      expression: "gagner sa vie",
      spanish: "ganarse la vida",
      meaning: "Subvenir à ses besoins par son travail",
      example: "Il gagne bien sa vie comme avocat"
    },
    {
      expression: "avoir du métier",
      spanish: "tener oficio",
      meaning: "Être expérimenté dans sa profession",
      example: "Ce menuisier a du métier"
    },
    {
      expression: "exercer une profession",
      spanish: "ejercer una profesión",
      meaning: "Pratiquer son métier",
      example: "Elle exerce la médecine depuis 20 ans"
    },
    {
      expression: "changer de voie",
      spanish: "cambiar de rumbo",
      meaning: "Changer de profession",
      example: "Il a changé de voie à 40 ans"
    }
  ],

  french_work_culture: [
    {
      aspect: "Code du travail",
      description: "Législation protectrice du salarié",
      features: ["35 heures", "5 semaines de congés", "protection sociale"],
      impact: "Équilibre vie professionnelle/personnelle valorisé"
    },
    {
      aspect: "Hiérarchie",
      description: "Structure souvent pyramidale",
      characteristics: ["Respect de l'autorité", "Formalisme", "Distance hiérarchique"],
      evolution: "Vers plus de flexibilité dans les nouvelles entreprises"
    },
    {
      aspect: "Formation continue",
      description: "Droit à la formation tout au long de la carrière",
      tools: ["CPF (Compte Personnel de Formation)", "VAE", "Formations internes"],
      philosophy: "Adaptation aux évolutions technologiques"
    }
  ]
};
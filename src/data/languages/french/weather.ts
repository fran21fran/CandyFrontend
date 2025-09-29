export const weather = {
  basic_conditions: [
    {
      french: "il fait beau",
      spanish: "hace buen tiempo",
      pronunciation: "[il fɛ bo]",
      definition: "Tiempo agradable, soleado y sin precipitaciones",
      context: "General good weather",
      examples: [
        { french: "Il fait beau aujourd'hui", spanish: "Hace buen tiempo hoy", context: "observation" },
        { french: "Il va faire beau demain", spanish: "Hará buen tiempo mañana", context: "prévision" },
        { french: "Quand il fait beau, nous sortons", spanish: "Cuando hace buen tiempo, salimos", context: "habitude" }
      ],
      associated_activities: ["pique-nique", "promenade", "jardinage", "sport extérieur"],
      mood_impact: "Moral positif, énergie"
    },
    {
      french: "il fait mauvais",
      spanish: "hace mal tiempo",
      pronunciation: "[il fɛ mo-VE]",
      definition: "Tiempo desagradable, con nubes, lluvia o viento",
      context: "General bad weather",
      examples: [
        { french: "Il fait mauvais ce matin", spanish: "Hace mal tiempo esta mañana", context: "observation" },
        { french: "Temps mauvais toute la semaine", spanish: "Mal tiempo toda la semana", context: "durée" },
        { french: "Rester à la maison quand il fait mauvais", spanish: "Quedarse en casa cuando hace mal tiempo", context: "adaptation" }
      ],
      associated_activities: ["lecture", "cinéma", "activités intérieures"],
      mood_impact: "Peut affecter le moral"
    },
    {
      french: "il pleut",
      spanish: "llueve",
      pronunciation: "[il plø]",
      definition: "Precipitación de agua desde las nubes",
      context: "Precipitation",
      examples: [
        { french: "Il pleut fort", spanish: "Llueve fuerte", context: "intensité" },
        { french: "Il pleut à verse", spanish: "Llueve a cántaros", context: "intensité forte" },
        { french: "Il ne pleut plus", spanish: "Ya no llueve", context: "fin" }
      ],
      accessories: ["parapluie", "imperméable", "bottes"],
      expressions: [
        { french: "pleuvoir comme vache qui pisse", spanish: "llover a cántaros", meaning: "lluvia muy intensa" },
        { french: "après la pluie le beau temps", spanish: "después de la tormenta viene la calma", meaning: "optimisme" }
      ],
      types: ["bruine", "averse", "déluge"]
    },
    {
      french: "il neige",
      spanish: "nieva",
      pronunciation: "[il nɛʒ]",
      definition: "Precipitación de cristales de hielo",
      context: "Winter precipitation",
      examples: [
        { french: "Il neige depuis ce matin", spanish: "Nieva desde esta mañana", context: "durée" },
        { french: "Il va neiger cette nuit", spanish: "Va a nevar esta noche", context: "prévision" },
        { french: "Il neige à gros flocons", spanish: "Nieva a copos grandes", context: "type" }
      ],
      activities: ["ski", "bonhomme de neige", "bataille de boules de neige"],
      precautions: ["conduite prudente", "vêtements chauds", "chaussures antidérapantes"],
      poetry: "Symbole de pureté et magie hivernale"
    },
    {
      french: "il y a du vent",
      spanish: "hay viento",
      pronunciation: "[il i a dy vɑ̃]",
      definition: "Movimiento del aire en la atmósfera",
      context: "Air movement",
      examples: [
        { french: "Il y a beaucoup de vent", spanish: "Hay mucho viento", context: "intensité" },
        { french: "Le vent souffle fort", spanish: "El viento sopla fuerte", context: "action" },
        { french: "Vent du nord", spanish: "Viento del norte", context: "direction" }
      ],
      intensity: ["brise légère", "vent modéré", "vent fort", "tempête"],
      effects: ["rafraîchit", "fait sécher", "peut déranger"],
      directions: ["vent du nord", "vent d'ouest", "vent marin"]
    }
  ],

  temperature: [
    {
      french: "il fait chaud",
      spanish: "hace calor",
      pronunciation: "[il fɛ ʃo]",
      temperature_range: "25°C et plus",
      definition: "Temperatura alta, sensación de calor",
      examples: [
        { french: "Il fait très chaud", spanish: "Hace mucho calor", context: "intensité" },
        { french: "Il commence à faire chaud", spanish: "Empieza a hacer calor", context: "progression" },
        { french: "Il fait chaud pour la saison", spanish: "Hace calor para la época", context: "comparaison" }
      ],
      clothing: ["t-shirt", "short", "robe légère", "sandales"],
      activities: ["plage", "piscine", "terrasse", "glace"],
      hydration: "Boire beaucoup d'eau",
      comfort: "Rechercher l'ombre et la fraîcheur"
    },
    {
      french: "il fait froid",
      spanish: "hace frío",
      pronunciation: "[il fɛ frwɑ]",
      temperature_range: "5°C et moins",
      definition: "Temperatura baja, sensación de frío",
      examples: [
        { french: "Il fait un froid de canard", spanish: "Hace un frío de muerte", context: "intensité" },
        { french: "Il fait froid dehors", spanish: "Hace frío afuera", context: "lieu" },
        { french: "J'ai froid aux mains", spanish: "Tengo frío en las manos", context: "personnel" }
      ],
      clothing: ["manteau", "écharpe", "gants", "bonnet"],
      activities: ["ski", "patinage", "chocolat chaud"],
      heating: "Chauffage indispensable",
      health: "Risque de rhume, se couvrir"
    },
    {
      french: "il fait bon",
      spanish: "hace buen tiempo/está agradable",
      pronunciation: "[il fɛ bɔ̃]",
      temperature_range: "18-24°C",
      definition: "Temperatura agradable, ni muy caliente ni muy fría",
      examples: [
        { french: "Il fait bon ce soir", spanish: "Está agradable esta noche", context: "moment" },
        { french: "Il fait bon se promener", spanish: "Da gusto pasear", context: "activité" },
        { french: "Il fait bon vivre ici", spanish: "Se vive bien aquí", context: "qualité de vie" }
      ],
      ideal_for: ["promenades", "terrasses", "activités extérieures"],
      seasonal: "Souvent au printemps et automne",
      comfort: "Température idéale pour l'homme"
    },
    {
      french: "il fait frais",
      spanish: "está fresco",
      pronunciation: "[il fɛ frɛ]",
      temperature_range: "10-18°C",
      definition: "Temperatura fresca, ligeramente fría pero agradable",
      examples: [
        { french: "Il fait frais le matin", spanish: "Está fresco por la mañana", context: "moment" },
        { french: "Il fait frais à l'ombre", spanish: "Está fresco a la sombra", context: "lieu" },
        { french: "Soirée fraîche", spanish: "Noche fresca", context: "description" }
      ],
      clothing: ["veste légère", "pull", "pantalon long"],
      pleasant: "Souvent agréable après la chaleur",
      seasonal: "Typique du printemps et automne"
    }
  ],

  sky_conditions: [
    {
      french: "le ciel est bleu",
      spanish: "el cielo está azul",
      pronunciation: "[lə sjɛl ɛ blø]",
      definition: "Cielo despejado sin nubes",
      examples: [
        { french: "Le ciel est d'un bleu magnifique", spanish: "El cielo está de un azul magnífico", context: "beauté" },
        { french: "Pas un nuage dans le ciel bleu", spanish: "Ni una nube en el cielo azul", context: "pureté" }
      ],
      associated: ["soleil", "beau temps", "visibilité parfaite"],
      mood: "Optimisme, joie de vivre"
    },
    {
      french: "il y a des nuages",
      spanish: "hay nubes",
      pronunciation: "[il i a de nɥaʒ]",
      definition: "Presencia de nubes en el cielo",
      examples: [
        { french: "Il y a quelques nuages", spanish: "Hay algunas nubes", context: "quantité" },
        { french: "Le ciel se couvre de nuages", spanish: "El cielo se cubre de nubes", context: "évolution" },
        { french: "Nuages menaçants", spanish: "Nubes amenazantes", context: "apparence" }
      ],
      types: ["nuages blancs", "nuages gris", "nuages noirs"],
      prediction: "Peut annoncer la pluie",
      beauty: "Peuvent être décoratifs"
    },
    {
      french: "le ciel est couvert",
      spanish: "el cielo está nublado",
      pronunciation: "[lə sjɛl ɛ ku-VER]",
      definition: "Cielo completamente cubierto de nubes",
      examples: [
        { french: "Le ciel est tout couvert", spanish: "El cielo está completamente nublado", context: "totalité" },
        { french: "Ciel couvert mais pas de pluie", spanish: "Cielo nublado pero sin lluvia", context: "distinction" }
      ],
      atmosphere: "Lumière tamisée, ambiance feutrée",
      probability: "Risque de précipitations",
      photography: "Lumière douce pour photos"
    },
    {
      french: "il y a du brouillard",
      spanish: "hay niebla",
      pronunciation: "[il i a dy bru-jaR]",
      definition: "Suspensión de gotitas de agua que reduce la visibilidad",
      examples: [
        { french: "Brouillard épais", spanish: "Niebla espesa", context: "densité" },
        { french: "Le brouillard se lève", spanish: "La niebla se levanta", context: "disparition" },
        { french: "Conduire dans le brouillard", spanish: "Conducir en la niebla", context: "difficulté" }
      ],
      seasons: "Fréquent en automne et hiver",
      precautions: "Conduite prudente, phares allumés",
      poetry: "Atmosphère mystérieuse et romantique"
    }
  ],

  extreme_weather: [
    {
      french: "orage",
      spanish: "tormenta",
      pronunciation: "[o-RAƷ]",
      definition: "Perturbación atmosférica con truenos, rayos y lluvia intensa",
      signs: ["nuages noirs", "éclairs", "tonnerre", "pluie forte"],
      examples: [
        { french: "Il y a un orage qui approche", spanish: "Hay una tormenta que se acerca", context: "prévision" },
        { french: "Orage violent", spanish: "Tormenta violenta", context: "intensité" },
        { french: "Après l'orage", spanish: "Después de la tormenta", context: "fin" }
      ],
      precautions: ["rester à l'intérieur", "débrancher appareils", "éviter grands arbres"],
      duration: "Généralement court mais intense",
      aftermath: "Air purifié, température plus fraîche"
    },
    {
      french: "tempête",
      spanish: "tempestad",
      pronunciation: "[tɑ̃-PƐIT]",
      definition: "Perturbación meteorológica intensa con vientos muy fuertes",
      characteristics: ["vents violents", "précipitations", "dégâts"],
      examples: [
        { french: "Tempête de neige", spanish: "Tempestad de nieve", context: "hiver" },
        { french: "Alerte tempête", spanish: "Alerta de tempestad", context: "prévention" },
        { french: "Dégâts de la tempête", spanish: "Daños de la tempestad", context: "conséquences" }
      ],
      safety: ["éviter sorties", "sécuriser objets", "provisions"],
      impact: "Perturbations transport, coupures électricité",
      media: "Couverture médiatique importante"
    },
    {
      french: "canicule",
      spanish: "ola de calor",
      pronunciation: "[ka-ni-KUL]",
      definition: "Período de calor intenso y prolongado",
      criteria: "Températures très élevées plusieurs jours consécutifs",
      examples: [
        { french: "Canicule exceptionnelle", spanish: "Ola de calor excepcional", context: "intensité" },
        { french: "Plan canicule activé", spanish: "Plan ola de calor activado", context: "prévention" },
        { french: "Souffrir de la canicule", spanish: "Sufrir la ola de calor", context: "impact" }
      ],
      health_risks: ["déshydratation", "coup de chaleur", "fatigue"],
      recommendations: ["boire beaucoup", "éviter soleil", "lieux frais"],
      vulnerable: "Personnes âgées, enfants, malades"
    },
    {
      french: "verglas",
      spanish: "hielo en el suelo",
      pronunciation: "[vɛr-gla]",
      definition: "Capa de hielo que se forma en el suelo y superficies",
      formation: "Pluie sur sol gelé",
      examples: [
        { french: "Attention au verglas", spanish: "Cuidado con el hielo", context: "prudence" },
        { french: "Route verglacée", spanish: "Carretera helada", context: "circulation" },
        { french: "Chute sur le verglas", spanish: "Caída sobre el hielo", context: "accident" }
      ],
      dangers: ["chutes", "accidents circulation", "immobilisation"],
      precautions: ["chaussures antidérapantes", "conduite très prudente", "sel sur routes"],
      duration: "Peut persister tant que températures négatives"
    }
  ],

  seasons_weather: [
    {
      season: "printemps",
      spanish: "primavera",
      typical_weather: ["doux", "pluvieux", "variable"],
      temperature: "10-20°C",
      characteristics: [
        "Temps changeant",
        "Averses fréquentes",
        "Journées qui rallongent",
        "Bourgeons et fleurs"
      ],
      clothing: ["veste mi-saison", "parapluie", "couches"],
      activities: ["jardinage", "promenades", "nettoyage de printemps"],
      mood: "Renouveau, optimisme",
      proverb: "En avril, ne te découvre pas d'un fil"
    },
    {
      season: "été",
      spanish: "verano",
      typical_weather: ["chaud", "sec", "ensoleillé"],
      temperature: "20-35°C",
      characteristics: [
        "Journées longues",
        "Chaleur",
        "Moins de pluie",
        "Orages ponctuels"
      ],
      clothing: ["vêtements légers", "chapeau", "crème solaire"],
      activities: ["plage", "piscine", "festivals", "vacances"],
      mood: "Énergie, vacances, liberté",
      challenges: "Canicule, sécheresse"
    },
    {
      season: "automne",
      spanish: "otoño",
      typical_weather: ["frais", "pluvieux", "brumeux"],
      temperature: "5-18°C",
      characteristics: [
        "Températures qui baissent",
        "Pluies fréquentes",
        "Brouillards matinaux",
        "Feuilles qui tombent"
      ],
      clothing: ["pull", "manteau léger", "bottes"],
      activities: ["randonnées", "cueillette", "lecture"],
      mood: "Mélancolie, cocooning",
      beauty: "Couleurs chaudes des feuillages"
    },
    {
      season: "hiver",
      spanish: "invierno",
      typical_weather: ["froid", "pluvieux", "neigeux"],
      temperature: "-5 à 10°C",
      characteristics: [
        "Journées courtes",
        "Froid",
        "Précipitations",
        "Gel matinal"
      ],
      clothing: ["manteau chaud", "écharpe", "gants"],
      activities: ["sports d'hiver", "veillées", "fêtes"],
      mood: "Intimité, chaleur du foyer",
      regional: "Varie selon les régions de France"
    }
  ],

  weather_expressions: [
    {
      expression: "après la pluie, le beau temps",
      spanish: "después de la tormenta viene la calma",
      meaning: "Les difficultés sont suivies de meilleures périodes",
      usage: "Consolation, espoir",
      context: "Encouragement dans les difficultés"
    },
    {
      expression: "il fait un temps de chien",
      spanish: "hace un tiempo de perros",
      meaning: "Il fait très mauvais temps",
      usage: "Décrire un temps détestable",
      intensity: "Très familier et expressif"
    },
    {
      expression: "un froid de canard",
      spanish: "un frío de muerte",
      meaning: "Il fait très froid",
      usage: "Exprimer un froid intense",
      origin: "Référence à la chasse aux canards par grand froid"
    },
    {
      expression: "pleuvoir des cordes",
      spanish: "llover a cántaros",
      meaning: "Pleuvoir très fort",
      usage: "Décrire une pluie intense",
      image: "Visualisation de la pluie comme des cordes"
    },
    {
      expression: "avoir le cafard",
      spanish: "estar deprimido",
      meaning: "Être triste, déprimé",
      weather_link: "Lié au mauvais temps",
      usage: "Exprimer la déprime, souvent liée au temps gris"
    }
  ],

  weather_conversation: [
    {
      situation: "Conversation quotidienne",
      starters: [
        { french: "Il fait beau aujourd'hui !", spanish: "¡Hace buen tiempo hoy!" },
        { french: "Quel temps pourri !", spanish: "¡Qué tiempo más malo!" },
        { french: "On annonce de la pluie", spanish: "Anuncian lluvia" }
      ],
      responses: [
        { french: "Oui, c'est agréable", spanish: "Sí, es agradable" },
        { french: "J'espère que ça va durer", spanish: "Espero que dure" },
        { french: "Il était temps !", spanish: "¡Ya era hora!" }
      ]
    },
    {
      situation: "Prévisions météo",
      questions: [
        { french: "Quel temps fait-il ?", spanish: "¿Qué tiempo hace?" },
        { french: "Il va pleuvoir ?", spanish: "¿Va a llover?" },
        { french: "Il fera beau demain ?", spanish: "¿Hará buen tiempo mañana?" }
      ],
      answers: [
        { french: "Il fait beau", spanish: "Hace buen tiempo" },
        { french: "Oui, dans l'après-midi", spanish: "Sí, por la tarde" },
        { french: "Non, il va faire nuageux", spanish: "No, va a estar nublado" }
      ]
    }
  ],

  regional_variations: [
    {
      region: "Nord de la France",
      characteristics: ["pluvieux", "venteux", "frais"],
      specificity: "Climat océanique, pluies fréquentes",
      vocabulary: ["crachin", "bruine", "temps maussade"],
      adaptation: "Vêtements imperméables indispensables"
    },
    {
      region: "Sud de la France",
      characteristics: ["ensoleillé", "sec", "chaud"],
      specificity: "Climat méditerranéen, soleil abondant",
      vocabulary: ["mistral", "canicule", "sécheresse"],
      adaptation: "Protection solaire importante"
    },
    {
      region: "Montagne",
      characteristics: ["froid", "neigeux", "variable"],
      specificity: "Altitude modifie le climat",
      vocabulary: ["avalanche", "poudreuse", "brouillard d'altitude"],
      dangers: "Changements rapides, risques naturels"
    }
  ]
};
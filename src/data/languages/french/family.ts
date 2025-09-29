export const family = {
  immediate: [
    {
      french: "père",
      spanish: "padre",
      pronunciation: "[pɛʁ]",
      gender: "masculino",
      definition: "Progenitor masculino, cabeza tradicional de familia",
      informal: "papa",
      formal: "père",
      examples: [
        { french: "Mon père travaille", spanish: "Mi padre trabaja", context: "formal" },
        { french: "Papa est à la maison", spanish: "Papá está en casa", context: "familiar" },
        { french: "C'est le père de famille", spanish: "Es el padre de familia", context: "rol social" }
      ],
      expressions: [
        { french: "de père en fils", spanish: "de padre a hijo", meaning: "tradición familiar" },
        { french: "tel père, tel fils", spanish: "de tal palo, tal astilla", meaning: "parecido hereditario" }
      ],
      cultural_role: "Tradicionalmente proveedor y autoridad"
    },
    {
      french: "mère",
      spanish: "madre",
      pronunciation: "[mɛʁ]",
      gender: "femenino",
      definition: "Progenitora femenina, centro emocional familiar",
      informal: "maman",
      formal: "mère",
      examples: [
        { french: "Ma mère cuisine bien", spanish: "Mi madre cocina bien", context: "habilidad" },
        { french: "Maman m'aide", spanish: "Mamá me ayuda", context: "cariño" },
        { french: "C'est une mère de famille", spanish: "Es una madre de familia", context: "rol social" }
      ],
      expressions: [
        { french: "langue maternelle", spanish: "lengua materna", meaning: "idioma nativo" },
        { french: "amour maternel", spanish: "amor maternal", meaning: "amor incondicional" }
      ],
      cultural_role: "Tradicionalmente cuidadora y educadora"
    },
    {
      french: "fils",
      spanish: "hijo",
      pronunciation: "[fis]",
      gender: "masculino",
      definition: "Descendiente masculino directo",
      examples: [
        { french: "Mon fils étudie", spanish: "Mi hijo estudia", context: "educación" },
        { french: "C'est un bon fils", spanish: "Es un buen hijo", context: "carácter" },
        { french: "Fils unique", spanish: "Hijo único", context: "familia pequeña" }
      ],
      expressions: [
        { french: "fils à papa", spanish: "niño de papá", meaning: "hijo privilegiado" },
        { french: "fils spirituel", spanish: "hijo espiritual", meaning: "discípulo" }
      ],
      diminutive: "fiston (cariñoso)"
    },
    {
      french: "fille",
      spanish: "hija",
      pronunciation: "[fij]",
      gender: "femenino",
      definition: "Descendiente femenina directa",
      examples: [
        { french: "Ma fille danse", spanish: "Mi hija baila", context: "actividad" },
        { french: "C'est ma petite fille", spanish: "Es mi niñita", context: "cariño" },
        { french: "Fille unique", spanish: "Hija única", context: "familia pequeña" }
      ],
      expressions: [
        { french: "fille à papa", spanish: "niña de papá", meaning: "hija consentida" },
        { french: "fille de joie", spanish: "mujer de la vida", meaning: "prostituta (anticuado)" }
      ],
      note: "También significa 'chica' en general"
    },
    {
      french: "frère",
      spanish: "hermano",
      pronunciation: "[frɛʁ]",
      gender: "masculino",
      definition: "Hijo varón de los mismos padres",
      examples: [
        { french: "Mon grand frère", spanish: "Mi hermano mayor", context: "edad" },
        { french: "Mon petit frère", spanish: "Mi hermano menor", context: "edad" },
        { french: "Frères jumeaux", spanish: "Hermanos gemelos", context: "nacimiento" }
      ],
      expressions: [
        { french: "faux frère", spanish: "falso hermano", meaning: "traidor" },
        { french: "frère d'armes", spanish: "hermano de armas", meaning: "compañero militar" }
      ],
      religious: "También 'hermano' religioso"
    },
    {
      french: "sœur",
      spanish: "hermana",
      pronunciation: "[sœʁ]",
      gender: "femenino",
      definition: "Hija mujer de los mismos padres",
      examples: [
        { french: "Ma grande sœur", spanish: "Mi hermana mayor", context: "edad" },
        { french: "Ma petite sœur", spanish: "Mi hermana menor", context: "edad" },
        { french: "Sœurs jumelles", spanish: "Hermanas gemelas", context: "nacimiento" }
      ],
      expressions: [
        { french: "âme sœur", spanish: "alma gemela", meaning: "pareja ideal" },
        { french: "fausse sœur", spanish: "falsa hermana", meaning: "amiga desleal" }
      ],
      religious: "También 'hermana' religiosa (monja)"
    }
  ],

  extended: [
    {
      french: "grand-père",
      spanish: "abuelo",
      pronunciation: "[grɑ̃-PɛR]",
      gender: "masculino",
      definition: "Padre del padre o de la madre",
      informal: "papy/papi",
      examples: [
        { french: "Grand-père raconte des histoires", spanish: "El abuelo cuenta historias", context: "tradición" },
        { french: "Papy est gentil", spanish: "El abuelo es bueno", context: "cariño" }
      ],
      role: "Transmisor de sabiduría y tradiciones",
      activities: "Contar historias, enseñar oficios tradicionales"
    },
    {
      french: "grand-mère",
      spanish: "abuela",
      pronunciation: "[grɑ̃-MɛR]",
      gender: "femenino",
      definition: "Madre del padre o de la madre",
      informal: "mamie/mémé",
      examples: [
        { french: "Grand-mère fait de la cuisine", spanish: "La abuela cocina", context: "tradición" },
        { french: "Mamie me gâte", spanish: "La abuela me consiente", context: "cariño" }
      ],
      role: "Guardiana de recetas y tradiciones familiares",
      stereotype: "Cocina tradicional, punto, dulces"
    },
    {
      french: "oncle",
      spanish: "tío",
      pronunciation: "[ɔ̃kl]",
      gender: "masculino",
      definition: "Hermano del padre o de la madre, esposo de la tía",
      informal: "tonton",
      examples: [
        { french: "Mon oncle habite loin", spanish: "Mi tío vive lejos", context: "geografía" },
        { french: "Tonton arrive demain", spanish: "El tío llega mañana", context: "familiar" }
      ],
      expressions: [
        { french: "oncle d'Amérique", spanish: "tío de América", meaning: "pariente rico lejano" }
      ],
      role: "Figura paterna secundaria, confidente"
    },
    {
      french: "tante",
      spanish: "tía",
      pronunciation: "[tɑ̃t]",
      gender: "femenino",
      definition: "Hermana del padre o de la madre, esposa del tío",
      informal: "tata/tatie",
      examples: [
        { french: "Ma tante est sympa", spanish: "Mi tía es simpática", context: "carácter" },
        { french: "Tatie nous visite", spanish: "La tía nos visita", context: "familiar" }
      ],
      role: "Figura materna secundaria, consejera",
      stereotype: "Cariñosa, regalos, consejos"
    },
    {
      french: "cousin/cousine",
      spanish: "primo/prima",
      pronunciation: "[ku-ZɛN/ku-ZIN]",
      gender: "cousin (m.), cousine (f.)",
      definition: "Hijo/a de los tíos",
      examples: [
        { french: "Mon cousin germain", spanish: "Mi primo hermano", context: "parentesco directo" },
        { french: "Cousine au second degré", spanish: "Prima segunda", context: "parentesco lejano" }
      ],
      degrees: [
        { french: "cousin germain", spanish: "primo hermano", relation: "hijo de tío/tía" },
        { french: "cousin au second degré", spanish: "primo segundo", relation: "nieto de tío-abuelo" }
      ],
      role: "Compañeros de juegos, confidentes de generación"
    },
    {
      french: "neveu",
      spanish: "sobrino",
      pronunciation: "[nə-VØ]",
      gender: "masculino",
      definition: "Hijo del hermano o hermana",
      examples: [
        { french: "Mon neveu a dix ans", spanish: "Mi sobrino tiene diez años", context: "edad" },
        { french: "C'est un neveu adorable", spanish: "Es un sobrino adorable", context: "cariño" }
      ],
      role: "Receptor de cuidados y enseñanzas de tíos"
    },
    {
      french: "nièce",
      spanish: "sobrina",
      pronunciation: "[njɛs]",
      gender: "femenino",
      definition: "Hija del hermano o hermana",
      examples: [
        { french: "Ma nièce étudie", spanish: "Mi sobrina estudia", context: "educación" },
        { french: "C'est une nièce charmante", spanish: "Es una sobrina encantadora", context: "carácter" }
      ],
      role: "Receptora de cuidados y consejos de tíos"
    }
  ],

  in_laws: [
    {
      french: "beau-père",
      spanish: "suegro/padrastro",
      pronunciation: "[bo-PɛR]",
      gender: "masculino",
      definition: "Padre del cónyuge o nuevo marido de la madre",
      double_meaning: [
        { context: "mariage", meaning: "suegro", example: "Le père de ma femme" },
        { context: "remariage", meaning: "padrastro", example: "Nouveau mari de maman" }
      ],
      relationship_dynamics: "Relación tradicionalmente compleja",
      examples: [
        { french: "Mon beau-père est médecin", spanish: "Mi suegro es médico", context: "profesión" },
        { french: "Il s'entend bien avec son beau-père", spanish: "Se lleva bien con su suegro", context: "relación" }
      ]
    },
    {
      french: "belle-mère",
      spanish: "suegra/madrastra",
      pronunciation: "[bɛl-MɛR]",
      gender: "femenino",
      definition: "Madre del cónyuge o nueva mujer del padre",
      double_meaning: [
        { context: "mariage", meaning: "suegra", example: "La mère de mon mari" },
        { context: "remariage", meaning: "madrastra", example: "Nouvelle femme de papa" }
      ],
      cultural_stereotype: "Relación tradicionalmente tensa (clichés)",
      examples: [
        { french: "Ma belle-mère cuisine bien", spanish: "Mi suegra cocina bien", context: "habilidad" },
        { french: "Problème de belle-mère", spanish: "Problema de suegra", context: "conflicto familiar" }
      ]
    },
    {
      french: "gendre",
      spanish: "yerno",
      pronunciation: "[ʒɑ̃dr]",
      gender: "masculino",
      definition: "Marido de la hija",
      examples: [
        { french: "Mon gendre est avocat", spanish: "Mi yerno es abogado", context: "profesión" },
        { french: "C'est un bon gendre", spanish: "Es un buen yerno", context: "aprobación" }
      ],
      expectations: "Debe ganar respeto y aceptación familiar",
      relationship: "Busca integración en la familia política"
    },
    {
      french: "bru/belle-fille",
      spanish: "nuera",
      pronunciation: "[bry/bɛl-FIJ]",
      gender: "femenino",
      definition: "Esposa del hijo",
      examples: [
        { french: "Ma belle-fille est charmante", spanish: "Mi nuera es encantadora", context: "aprobación" },
        { french: "La bru de la famille", spanish: "La nuera de la familia", context: "integración" }
      ],
      note: "Belle-fille también puede ser hijastra",
      challenges: "Integración en tradiciones familiares existentes"
    },
    {
      french: "beau-frère",
      spanish: "cuñado",
      pronunciation: "[bo-FRɛR]",
      gender: "masculino",
      definition: "Hermano del cónyuge o marido de la hermana",
      examples: [
        { french: "Mon beau-frère est sympa", spanish: "Mi cuñado es simpático", context: "relación cordial" },
        { french: "Sortir avec son beau-frère", spanish: "Salir con su cuñado", context: "amistad" }
      ],
      relationship: "Puede convertirse en amigo cercano"
    },
    {
      french: "belle-sœur",
      spanish: "cuñada",
      pronunciation: "[bɛl-SœR]",
      gender: "femenino",
      definition: "Hermana del cónyuge o mujer del hermano",
      examples: [
        { french: "Ma belle-sœur m'aide", spanish: "Mi cuñada me ayuda", context: "apoyo" },
        { french: "Relations avec la belle-sœur", spanish: "Relaciones con la cuñada", context: "familia política" }
      ],
      dynamics: "Relación que puede ser muy cercana o distante"
    }
  ],

  generations: [
    {
      french: "arrière-grand-père",
      spanish: "bisabuelo",
      pronunciation: "[a-ʁjɛʁ-grɑ̃-PɛR]",
      generation: 3,
      definition: "Padre del abuelo o abuela",
      examples: [{ french: "Histoire d'arrière-grand-père", spanish: "Historia del bisabuelo", context: "herencia familiar" }],
      cultural_role: "Guardián de historia familiar lejana"
    },
    {
      french: "arrière-grand-mère",
      spanish: "bisabuela",
      pronunciation: "[a-ʁjɛʁ-grɑ̃-MɛR]",
      generation: 3,
      definition: "Madre del abuelo o abuela",
      examples: [{ french: "Recettes d'arrière-grand-mère", spanish: "Recetas de la bisabuela", context: "tradición culinaria" }],
      cultural_role: "Transmisora de tradiciones ancestrales"
    },
    {
      french: "petit-fils",
      spanish: "nieto",
      pronunciation: "[pə-ti-FIS]",
      generation: -2,
      definition: "Hijo del hijo o hija",
      examples: [
        { french: "Mon petit-fils grandit", spanish: "Mi nieto crece", context: "desarrollo" },
        { french: "Fier de son petit-fils", spanish: "Orgulloso de su nieto", context: "orgullo" }
      ],
      role: "Continuidad del linaje familiar"
    },
    {
      french: "petite-fille",
      spanish: "nieta",
      pronunciation: "[pə-tit-FIJ]",
      generation: -2,
      definition: "Hija del hijo o hija",
      examples: [
        { french: "Ma petite-fille dessine", spanish: "Mi nieta dibuja", context: "actividad" },
        { french: "Câliner sa petite-fille", spanish: "Mimar a su nieta", context: "cariño" }
      ],
      role: "Alegría y continuidad de los abuelos"
    }
  ],

  family_structure: [
    {
      type: "Famille nucléaire",
      spanish: "Familia nuclear",
      composition: "Parents + enfants",
      description: "Estructura familiar básica moderna",
      characteristics: ["Indépendance", "Intimité", "Mobilité"],
      examples: [
        { french: "Une famille de quatre personnes", spanish: "Una familia de cuatro personas" }
      ]
    },
    {
      type: "Famille élargie",
      spanish: "Familia extendida",
      composition: "Parents + enfants + grands-parents + oncles/tantes",
      description: "Estructura tradicional multigeneracional",
      characteristics: ["Solidarité", "Traditions", "Entraide"],
      examples: [
        { french: "Réunion de famille élargie", spanish: "Reunión de familia extendida" }
      ]
    },
    {
      type: "Famille recomposée",
      spanish: "Familia reconstituida",
      composition: "Nouveaux couples avec enfants d'unions précédentes",
      description: "Familia moderna con hijos de relaciones anteriores",
      characteristics: ["Adaptation", "Complexité", "Nouvelles relations"],
      challenges: ["Intégration", "Rivalités", "Loyautés partagées"]
    },
    {
      type: "Famille monoparentale",
      spanish: "Familia monoparental",
      composition: "Un parent + enfants",
      description: "Familia dirigida por un solo progenitor",
      characteristics: ["Responsabilité unique", "Autonomie", "Défis économiques"],
      support: "Importance du réseau familial élargi"
    }
  ],

  relationships: [
    {
      relationship: "Parent-enfant",
      characteristics: ["Autorité", "Protection", "Éducation", "Amour inconditionnel"],
      evolution: "De la dépendance à l'autonomie",
      challenges: ["Adolescence", "Indépendance", "Respect mutuel"],
      expressions: [
        { french: "l'autorité parentale", spanish: "la autoridad parental" },
        { french: "amour filial", spanish: "amor filial" }
      ]
    },
    {
      relationship: "Fratrie",
      characteristics: ["Complicité", "Rivalité", "Solidarité", "Partage"],
      dynamics: ["Jalousie", "Competition", "Soutien mutuel"],
      lifelong: "Relation la plus longue de la vie",
      expressions: [
        { french: "rivalité fraternelle", spanish: "rivalidad fraternal" },
        { french: "amour fraternel", spanish: "amor fraternal" }
      ]
    },
    {
      relationship: "Grands-parents-petits-enfants",
      characteristics: ["Tendresse", "Transmission", "Patience", "Complicity"],
      role: "Transmission culturelle et affective sans responsabilité éducative",
      special_bond: "Relation privilégiée, moins de conflits",
      activities: ["Contes", "Jeux traditionnels", "Histoire familiale"]
    }
  ],

  celebrations: [
    {
      celebration: "Fête des Mères",
      date: "Dernier dimanche de mai",
      spanish: "Día de la Madre",
      tradition: "Cadeaux, fleurs, repas en famille",
      origin: "Tradition américaine adoptée en France",
      typical_gifts: ["Fleurs", "Bijoux", "Parfum", "Repas au restaurant"]
    },
    {
      celebration: "Fête des Pères",
      date: "Troisième dimanche de juin",
      spanish: "Día del Padre",
      tradition: "Cadeaux personnalisés, activités père-enfant",
      typical_gifts: ["Cravates", "Outils", "Livres", "Expériences partagées"]
    },
    {
      celebration: "Fête des Grands-Mères",
      date: "Premier dimanche de mars",
      spanish: "Día de las Abuelas",
      tradition: "Reconnaissance du rôle des grands-mères",
      activities: ["Visites", "Cartes", "Temps partagé"]
    }
  ],

  expressions: [
    {
      expression: "Il faut qu'une porte soit ouverte ou fermée",
      spanish: "Una puerta debe estar abierta o cerrada",
      meaning: "Il faut choisir, pas d'entre-deux",
      context: "Décisions familiales"
    },
    {
      expression: "Charité bien ordonnée commence par soi-même",
      spanish: "La caridad bien entendida empieza por uno mismo",
      meaning: "S'occuper d'abord de sa famille",
      context: "Priorités familiales"
    },
    {
      expression: "Les chiens ne font pas des chats",
      spanish: "De tal palo, tal astilla",
      meaning: "Les enfants ressemblent aux parents",
      context: "Hérédité comportementale"
    },
    {
      expression: "Il n'y a que la famille qui compte",
      spanish: "Solo la familia cuenta",
      meaning: "La famille avant tout",
      context: "Valeurs prioritaires"
    }
  ]
};
export const animals = {
  domestic: [
    {
      animal: "chien",
      spanish: "perro",
      pronunciation: "[ʃjɛ̃]",
      gender: "masculino",
      feminine: "chienne",
      definition: "Animal doméstico fiel, compañero del hombre",
      characteristics: "Leal, protector, inteligente",
      sounds: [{ french: "aboyer", spanish: "ladrar", sound: "ouaf ouaf" }],
      expressions: [
        { french: "fidèle comme un chien", spanish: "fiel como un perro", meaning: "muy leal" },
        { french: "avoir du chien", spanish: "tener atractivo", meaning: "ser atractivo" },
        { french: "temps de chien", spanish: "tiempo de perros", meaning: "mal tiempo" }
      ],
      breeds: ["caniche", "berger allemand", "labrador", "bouledogue"],
      cultural_notes: "Símbolo de fidelidad en la cultura francesa"
    },
    {
      animal: "chat",
      spanish: "gato",
      pronunciation: "[ʃa]",
      gender: "masculino",
      feminine: "chatte",
      definition: "Felino doméstico independiente y elegante",
      characteristics: "Independiente, elegante, misterioso",
      sounds: [{ french: "miauler", spanish: "maullar", sound: "miaou" }],
      expressions: [
        { french: "avoir un chat dans la gorge", spanish: "tener carraspera", meaning: "ronquera" },
        { french: "il n'y a pas un chat", spanish: "no hay ni un alma", meaning: "no hay nadie" },
        { french: "donner sa langue au chat", spanish: "darse por vencido", meaning: "rendirse" }
      ],
      behaviors: ["ronronner (ronronear)", "griffer (arañar)", "se lécher (lamerse)"],
      cultural_notes: "Asociado con la elegancia y el misterio"
    },
    {
      animal: "cheval",
      spanish: "caballo",
      pronunciation: "[ʃə-VAL]",
      gender: "masculino",
      feminine: "jument",
      definition: "Animal noble usado para transporte y deporte",
      characteristics: "Noble, fuerte, elegante",
      sounds: [{ french: "hennir", spanish: "relinchar", sound: "hi-han" }],
      expressions: [
        { french: "monter sur ses grands chevaux", spanish: "subirse a la parra", meaning: "enfadarse" },
        { french: "cheval de bataille", spanish: "tema favorito", meaning: "tema recurrente" },
        { french: "à cheval donné on ne regarde pas les dents", spanish: "a caballo regalado no le mires el diente", meaning: "no criticar regalos" }
      ],
      related_terms: ["cavalier", "équitation", "hippique", "galoper"],
      sports: "Équitation, courses hippiques"
    },
    {
      animal: "vache",
      spanish: "vaca",
      pronunciation: "[vaʃ]",
      gender: "femenino",
      masculine: "taureau/bœuf",
      definition: "Animal de granja que da leche y carne",
      characteristics: "Tranquila, productiva",
      sounds: [{ french: "meugler", spanish: "mugir", sound: "meuh" }],
      expressions: [
        { french: "vache à lait", spanish: "vaca lechera", meaning: "fuente de ingresos" },
        { french: "période de vaches maigres", spanish: "época de vacas flacas", meaning: "tiempos difíciles" },
        { french: "pleuvoir comme vache qui pisse", spanish: "llover a cántaros", meaning: "lluvia intensa" }
      ],
      products: ["lait", "fromage", "beurre", "viande"],
      cultural_importance: "Fundamental en la gastronomía francesa"
    }
  ],

  wild: [
    {
      animal: "lion",
      spanish: "león",
      pronunciation: "[ljɔ̃]",
      gender: "masculino",
      feminine: "lionne",
      definition: "Rey de la selva, símbolo de fuerza y courage",
      characteristics: "Majestuoso, fuerte, valiente",
      sounds: [{ french: "rugir", spanish: "rugir", sound: "grondement" }],
      expressions: [
        { french: "courage du lion", spanish: "valor de león", meaning: "gran valentía" },
        { french: "se battre comme un lion", spanish: "luchar como un león", meaning: "luchar con fuerza" },
        { french: "la part du lion", spanish: "la parte del león", meaning: "la mayor parte" }
      ],
      habitat: "Savane africaine",
      symbolism: "Courage, royauté, force"
    },
    {
      animal: "loup",
      spanish: "lobo",
      pronunciation: "[lu]",
      gender: "masculino",
      feminine: "louve",
      definition: "Canino salvaje que vive en manadas",
      characteristics: "Social, cazador, territorial",
      sounds: [{ french: "hurler", spanish: "aullar", sound: "hurlement" }],
      expressions: [
        { french: "avoir une faim de loup", spanish: "tener hambre de lobo", meaning: "mucha hambre" },
        { french: "se jeter dans la gueule du loup", spanish: "meterse en la boca del lobo", meaning: "ponerse en peligro" },
        { french: "crier au loup", spanish: "grita que viene el lobo", meaning: "dar falsas alarmas" }
      ],
      folklore: "Personaje de cuentos (Le Petit Chaperon Rouge)",
      habitat: "Forêts, montagnes"
    },
    {
      animal: "ours",
      spanish: "oso",
      pronunciation: "[urs]",
      gender: "masculino",
      feminine: "ourse",
      definition: "Gran mamífero omnívoro, símbolo de fuerza bruta",
      characteristics: "Fuerte, solitario, omnívoro",
      sounds: [{ french: "grogner", spanish: "gruñir", sound: "grognement" }],
      expressions: [
        { french: "ours mal léché", spanish: "oso mal lamido", meaning: "persona tosca" },
        { french: "vendre la peau de l'ours", spanish: "vender la piel del oso", meaning: "contar con algo incierto" }
      ],
      species: ["ours brun", "ours polaire", "ours noir"],
      hibernation: "Hibernent en hiver"
    },
    {
      animal: "renard",
      spanish: "zorro",
      pronunciation: "[rə-NAR]",
      gender: "masculino",
      feminine: "renarde",
      definition: "Canino astuto, símbolo de inteligencia y astucia",
      characteristics: "Astuto, adaptable, solitario",
      sounds: [{ french: "glapir", spanish: "gañir", sound: "glapissement" }],
      expressions: [
        { french: "rusé comme un renard", spanish: "astuto como un zorro", meaning: "muy astuto" },
        { french: "queue de renard", spanish: "cola de zorro", meaning: "planta/peinado" }
      ],
      folklore: "Personaje astuto en fábulas",
      habitat: "Forêts, campagnes"
    }
  ],

  farm: [
    {
      animal: "poule",
      spanish: "gallina",
      pronunciation: "[pul]",
      gender: "femenino",
      masculine: "coq",
      definition: "Ave de corral que pone huevos",
      characteristics: "Productiva, social, protectora",
      sounds: [{ french: "caqueter", spanish: "cacarear", sound: "cot cot" }],
      expressions: [
        { french: "poule mouillée", spanish: "gallina mojada", meaning: "cobarde" },
        { french: "avoir la chair de poule", spanish: "tener piel de gallina", meaning: "escalofríos" },
        { french: "se coucher avec les poules", spanish: "acostarse con las gallinas", meaning: "acostarse temprano" }
      ],
      products: ["œufs", "viande"],
      young: "poussin"
    },
    {
      animal: "cochon",
      spanish: "cerdo",
      pronunciation: "[ko-ʃɔ̃]",
      gender: "masculino",
      feminine: "truie",
      definition: "Animal de granja criado para carne",
      characteristics: "Inteligente, social, omnívoro",
      sounds: [{ french: "grogner", spanish: "gruñir", sound: "groin groin" }],
      expressions: [
        { french: "copains comme cochons", spanish: "amigos íntimos", meaning: "muy buenos amigos" },
        { french: "jeter des perles aux cochons", spanish: "echar margaritas a los cerdos", meaning: "desperdiciar algo valioso" },
        { french: "temps de cochon", spanish: "tiempo de perros", meaning: "mal tiempo" }
      ],
      products: "Charcuterie, jambon, saucisses",
      alternative_name: "porc (más formal)"
    },
    {
      animal: "mouton",
      spanish: "oveja/carnero",
      pronunciation: "[mu-TÔN]",
      gender: "masculino",
      feminine: "brebis",
      definition: "Animal lanudo criado por su lana y carne",
      characteristics: "Dócil, gregario, lanudo",
      sounds: [{ french: "bêler", spanish: "balar", sound: "bêê" }],
      expressions: [
        { french: "suivre comme un mouton", spanish: "seguir como borrego", meaning: "seguir sin pensar" },
        { french: "compter les moutons", spanish: "contar ovejas", meaning: "intentar dormir" },
        { french: "revenir à nos moutons", spanish: "volvamos al tema", meaning: "retomar el tema" }
      ],
      products: ["laine", "fromage de brebis", "agneau"],
      young: "agneau"
    }
  ],

  birds: [
    {
      animal: "oiseau",
      spanish: "pájaro",
      pronunciation: "[wa-ZO]",
      gender: "masculino",
      definition: "Animal volador con plumas, símbolo de libertad",
      characteristics: "Volador, melódico, libre",
      sounds: [{ french: "chanter", spanish: "cantar", sound: "cui-cui" }],
      expressions: [
        { french: "libre comme l'air", spanish: "libre como el aire", meaning: "completamente libre" },
        { french: "avoir une cervelle d'oiseau", spanish: "tener cabeza de chorlito", meaning: "ser olvidadizo" },
        { french: "petit à petit l'oiseau fait son nid", spanish: "poco a poco se hace el nido", meaning: "paciencia y perseverancia" }
      ],
      types: ["moineau", "merle", "rouge-gorge", "hirondelle"],
      migration: "Certains oiseaux migrent"
    },
    {
      animal: "aigle",
      spanish: "águila",
      pronunciation: "[ɛgl]",
      gender: "masculino",
      definition: "Ave rapaz majestuosa, símbolo de poder",
      characteristics: "Majestuoso, poderoso, cazador",
      sounds: [{ french: "crier", spanish: "graznar", sound: "cri perçant" }],
      expressions: [
        { french: "avoir un œil d'aigle", spanish: "tener vista de águila", meaning: "vista muy aguda" },
        { french: "nid d'aigle", spanish: "nido de águila", meaning: "lugar inaccesible" }
      ],
      symbolism: "Pouvoir, noblesse (Napoléon)",
      habitat: "Montagnes, falaises"
    }
  ],

  insects: [
    {
      animal: "abeille",
      spanish: "abeja",
      pronunciation: "[a-BEJ]",
      gender: "femenino",
      definition: "Insecto trabajador que produce miel",
      characteristics: "Trabajador, social, productivo",
      sounds: [{ french: "bourdonner", spanish: "zumbar", sound: "bzz" }],
      expressions: [
        { french: "avoir le bourdon", spanish: "estar triste", meaning: "melancolía" },
        { french: "fine comme une abeille", spanish: "fino como una abeja", meaning: "muy delicado" }
      ],
      products: ["miel", "cire", "gelée royale"],
      importance: "Polinisation des fleurs"
    },
    {
      animal: "papillon",
      spanish: "mariposa",
      pronunciation: "[pa-pi-JÔN]",
      gender: "masculino",
      definition: "Insecto con alas coloridas, símbolo de transformación",
      characteristics: "Colorido, ligero, transformador",
      sounds: [{ french: "voltiger", spanish: "revolotear", sound: "silencieux" }],
      expressions: [
        { french: "papillon de nuit", spanish: "mariposa nocturna", meaning: "persona nocturna" },
        { french: "minute papillon", spanish: "un momento", meaning: "espera" }
      ],
      metamorphosis: "Chenille → chrysalide → papillon",
      symbolism: "Transformation, beauté, fragilité"
    }
  ],

  sounds: [
    {
      category: "Mammifères",
      sounds: [
        { animal: "chien", french: "aboyer", sound: "ouaf ouaf", spanish: "ladrar" },
        { animal: "chat", french: "miauler", sound: "miaou", spanish: "maullar" },
        { animal: "vache", french: "meugler", sound: "meuh", spanish: "mugir" },
        { animal: "mouton", french: "bêler", sound: "bêê", spanish: "balar" },
        { animal: "cochon", french: "grogner", sound: "groin groin", spanish: "gruñir" },
        { animal: "cheval", french: "hennir", sound: "hi-han", spanish: "relinchar" }
      ]
    },
    {
      category: "Oiseaux",
      sounds: [
        { animal: "coq", french: "chanter", sound: "cocorico", spanish: "cacarear" },
        { animal: "poule", french: "caqueter", sound: "cot cot", spanish: "cacarear" },
        { animal: "oiseau", french: "chanter", sound: "cui-cui", spanish: "cantar" },
        { animal: "chouette", french: "hululer", sound: "hou-hou", spanish: "ulular" }
      ]
    }
  ],

  habitats: [
    {
      habitat: "forêt",
      spanish: "bosque",
      animals: ["cerf", "sanglier", "écureuil", "renard", "loup"],
      description: "Écosystème boisé riche en biodiversité"
    },
    {
      habitat: "ferme",
      spanish: "granja",
      animals: ["vache", "cochon", "poule", "mouton", "cheval"],
      description: "Élevage d'animaux domestiques"
    },
    {
      habitat: "savane",
      spanish: "sabana",
      animals: ["lion", "éléphant", "girafe", "zèbre"],
      description: "Plaines africaines avec herbivores et prédateurs"
    },
    {
      habitat: "océan",
      spanish: "océano",
      animals: ["baleine", "dauphin", "requin", "poisson"],
      description: "Écosystème marin vaste et profond"
    }
  ],

  cultural_significance: [
    {
      animal: "coq",
      significance: "Symbole de la France, fierté nationale",
      origin: "Jeu de mots latin : Gallus (coq/Gaulois)",
      usage: "Équipe de France de football"
    },
    {
      animal: "abeille",
      significance: "Symbole napoléonien, travail et royauté",
      origin: "Emblème des Mérovingiens",
      usage: "Décoration impériale"
    },
    {
      animal: "renard",
      significance: "Astuce et intelligence dans les fables",
      origin: "Roman de Renart médiéval",
      usage: "Personnage littéraire récurrent"
    }
  ]
};
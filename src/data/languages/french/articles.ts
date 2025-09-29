export const articles = {
  definite: [
    { 
      type: "Masculino singular", 
      form: "le", 
      example: "le livre", 
      usage: "antes de consonante o h aspirada",
      pronunciation: "[lə]",
      exceptions: ["le héros", "le huit"],
      elision: "l' devant voyelle ou h muette"
    },
    { 
      type: "Femenino singular", 
      form: "la", 
      example: "la maison", 
      usage: "antes de consonante o h aspirada",
      pronunciation: "[la]",
      exceptions: ["la hache", "la honte"],
      elision: "l' devant voyelle ou h muette"
    },
    { 
      type: "Elisión", 
      form: "l'", 
      example: "l'ami, l'école", 
      usage: "antes de vocal o h muda",
      pronunciation: "[l]",
      rule: "Obligatoire devant voyelle",
      examples_m: ["l'homme", "l'arbre", "l'oiseau"],
      examples_f: ["l'eau", "l'école", "l'histoire"]
    },
    { 
      type: "Plural", 
      form: "les", 
      example: "les livres, les maisons", 
      usage: "masculino y femenino plural",
      pronunciation: "[le] o [lez] con liaison",
      liaison: "les‿enfants [lez‿ãfã]"
    }
  ],

  indefinite: [
    { 
      type: "Masculino singular", 
      form: "un", 
      example: "un chat", 
      usage: "masculino singular",
      pronunciation: "[œ̃]",
      liaison: "un‿ami [œ̃n‿ami]"
    },
    { 
      type: "Femenino singular", 
      form: "une", 
      example: "une chaise", 
      usage: "femenino singular",
      pronunciation: "[yn]",
      liaison: "une‿amie [yn‿ami]"
    },
    { 
      type: "Plural", 
      form: "des", 
      example: "des livres", 
      usage: "masculino y femenino plural",
      pronunciation: "[de] o [dez] con liaison",
      liaison: "des‿enfants [dez‿ãfã]",
      note: "Equivalent à 'quelques' en espagnol"
    }
  ],

  contracted: [
    {
      type: "du (de + le)",
      usage: "preposición de + artículo masculino",
      examples: [
        { phrase: "Je viens du marché", spanish: "Vengo del mercado" },
        { phrase: "Le livre du professeur", spanish: "El libro del profesor" }
      ],
      pronunciation: "[dy]"
    },
    {
      type: "des (de + les)",
      usage: "preposición de + artículo plural",
      examples: [
        { phrase: "Je parle des enfants", spanish: "Hablo de los niños" },
        { phrase: "Le bruit des voitures", spanish: "El ruido de los coches" }
      ],
      pronunciation: "[de]"
    },
    {
      type: "au (à + le)",
      usage: "preposición à + artículo masculino",
      examples: [
        { phrase: "Je vais au cinéma", spanish: "Voy al cine" },
        { phrase: "Il pense au travail", spanish: "Piensa en el trabajo" }
      ],
      pronunciation: "[o]"
    },
    {
      type: "aux (à + les)",
      usage: "preposición à + artículo plural",
      examples: [
        { phrase: "Je parle aux étudiants", spanish: "Hablo a los estudiantes" },
        { phrase: "Il répond aux questions", spanish: "Responde a las preguntas" }
      ],
      pronunciation: "[o]"
    }
  ],

  partitive: [
    {
      type: "du (masculino singular)",
      usage: "cantidad indeterminada de sustancia masculina",
      examples: [
        { phrase: "Je mange du pain", spanish: "Como pan" },
        { phrase: "Il boit du café", spanish: "Bebe café" },
        { phrase: "Je veux du chocolat", spanish: "Quiero chocolate" }
      ],
      note: "No se traduce literalmente al español"
    },
    {
      type: "de la (femenino singular)",
      usage: "cantidad indeterminada de sustancia femenina",
      examples: [
        { phrase: "Je bois de la limonade", spanish: "Bebo limonada" },
        { phrase: "Elle mange de la salade", spanish: "Come ensalada" },
        { phrase: "Il faut de la patience", spanish: "Hace falta paciencia" }
      ],
      note: "Sustancias no contables femeninas"
    },
    {
      type: "de l' (elisión)",
      usage: "cantidad indeterminada antes de vocal",
      examples: [
        { phrase: "Je bois de l'eau", spanish: "Bebo agua" },
        { phrase: "Il mange de l'ail", spanish: "Come ajo" },
        { phrase: "Elle a de l'imagination", spanish: "Tiene imaginación" }
      ],
      note: "Elisión obligatoria antes de vocal"
    },
    {
      type: "des (plural)",
      usage: "cantidad indeterminada plural",
      examples: [
        { phrase: "Je mange des pommes", spanish: "Como manzanas" },
        { phrase: "Il y a des problèmes", spanish: "Hay problemas" },
        { phrase: "Elle a des idées", spanish: "Tiene ideas" }
      ],
      note: "Equivale a 'algunos/algunas'"
    }
  ],

  negation_articles: [
    {
      rule: "Articles indéfinis et partitifs → de/d'",
      examples: [
        { positive: "J'ai un chat", negative: "Je n'ai pas de chat", spanish: "No tengo gato" },
        { positive: "Je bois du café", negative: "Je ne bois pas de café", spanish: "No bebo café" },
        { positive: "Il y a des fleurs", negative: "Il n'y a pas de fleurs", spanish: "No hay flores" }
      ],
      exception: "Avec 'être', l'article ne change pas"
    },
    {
      rule: "Articles définis → restent inchangés",
      examples: [
        { positive: "J'aime le café", negative: "Je n'aime pas le café", spanish: "No me gusta el café" },
        { positive: "Je connais la vérité", negative: "Je ne connais pas la vérité", spanish: "No conozco la verdad" }
      ],
      note: "Les articles définis ne changent jamais"
    }
  ],

  usage_rules: [
    {
      rule: "Généralisation",
      usage: "Article défini pour concepts généraux",
      examples: [
        { phrase: "J'aime le chocolat", spanish: "Me gusta el chocolate (en general)" },
        { phrase: "Les chiens sont fidèles", spanish: "Los perros son fieles (todos)" }
      ]
    },
    {
      rule: "Première mention vs reprise",
      usage: "Indéfini pour introduire, défini pour reprendre",
      examples: [
        { phrase: "Il y a un chat dans le jardin. Le chat est noir.", spanish: "Hay un gato en el jardín. El gato es negro." }
      ]
    },
    {
      rule: "Parties du corps",
      usage: "Article défini avec possesseur évident",
      examples: [
        { phrase: "J'ai mal à la tête", spanish: "Me duele la cabeza" },
        { phrase: "Elle se lave les mains", spanish: "Se lava las manos" }
      ]
    }
  ]
};
export const alphabet = {
  letters: [
    {
      letter: "A",
      lowercase: "a",
      pronunciation: "[a]",
      spanish: "a",
      examples: [
        { word: "ami", spanish: "amigo", pronunciation: "[a-MI]" },
        { word: "animal", spanish: "animal", pronunciation: "[a-ni-MAL]" },
        { word: "arbre", spanish: "árbol", pronunciation: "[AR-br]" }
      ],
      position: 1,
      type: "vowel",
      description: "Vocal anterior abierta, similar a la 'a' española"
    },
    {
      letter: "B",
      lowercase: "b",
      pronunciation: "[be]",
      spanish: "be",
      examples: [
        { word: "bonjour", spanish: "buenos días", pronunciation: "[bon-ZHOOR]" },
        { word: "beau", spanish: "hermoso", pronunciation: "[bo]" },
        { word: "bleu", spanish: "azul", pronunciation: "[blø]" }
      ],
      position: 2,
      type: "consonant",
      description: "Consonante bilabial oclusiva sonora"
    },
    {
      letter: "C",
      lowercase: "c",
      pronunciation: "[se]",
      spanish: "ce",
      examples: [
        { word: "chat", spanish: "gato", pronunciation: "[ʃa]" },
        { word: "cinéma", spanish: "cine", pronunciation: "[si-ne-MA]" },
        { word: "ça", spanish: "eso", pronunciation: "[sa]" }
      ],
      position: 3,
      type: "consonant",
      description: "Puede ser [k] antes de a,o,u o [s] antes de e,i",
      rules: [
        { rule: "c + a,o,u = [k]", example: "chat, comme, cube" },
        { rule: "c + e,i = [s]", example: "ce, cinema" },
        { rule: "ç + a,o,u = [s]", example: "ça, leçon, reçu" }
      ]
    },
    {
      letter: "D",
      lowercase: "d",
      pronunciation: "[de]",
      spanish: "de",
      examples: [
        { word: "dire", spanish: "decir", pronunciation: "[diʁ]" },
        { word: "donner", spanish: "dar", pronunciation: "[do-NE]" },
        { word: "dedans", spanish: "dentro", pronunciation: "[də-DÃ]" }
      ],
      position: 4,
      type: "consonant",
      description: "Consonante dental oclusiva sonora"
    },
    {
      letter: "E",
      lowercase: "e",
      pronunciation: "[ə]",
      spanish: "e",
      examples: [
        { word: "le", spanish: "el", pronunciation: "[lə]" },
        { word: "être", spanish: "ser", pronunciation: "[ɛtr]" },
        { word: "éléphant", spanish: "elefante", pronunciation: "[e-le-FÃ]" }
      ],
      position: 5,
      type: "vowel",
      description: "Vocal central neutra, puede ser muda",
      variations: [
        { form: "é", sound: "[e]", description: "e cerrada", example: "café" },
        { form: "è", sound: "[ɛ]", description: "e abierta", example: "mère" },
        { form: "ê", sound: "[ɛ]", description: "e circunfleja", example: "être" },
        { form: "ë", sound: "[ɛ]", description: "e diéresis", example: "Noël" }
      ]
    },
    {
      letter: "F",
      lowercase: "f",
      pronunciation: "[ɛf]",
      spanish: "efe",
      examples: [
        { word: "faire", spanish: "hacer", pronunciation: "[fɛʁ]" },
        { word: "famille", spanish: "familia", pronunciation: "[fa-MIJ]" },
        { word: "français", spanish: "francés", pronunciation: "[frã-Sɛ]" }
      ],
      position: 6,
      type: "consonant",
      description: "Consonante labiodental fricativa sorda"
    },
    {
      letter: "G",
      lowercase: "g",
      pronunciation: "[ʒe]",
      spanish: "ge",
      examples: [
        { word: "garçon", spanish: "chico", pronunciation: "[gar-SÕ]" },
        { word: "gare", spanish: "estación", pronunciation: "[gaʁ]" },
        { word: "géométrie", spanish: "geometría", pronunciation: "[ʒe-o-me-TRI]" }
      ],
      position: 7,
      type: "consonant",
      description: "Puede ser [g] o [ʒ] según contexto",
      rules: [
        { rule: "g + a,o,u = [g]", example: "gare, gomme, guide" },
        { rule: "g + e,i = [ʒ]", example: "geste, girafe" },
        { rule: "gu + e,i = [g]", example: "guerre, guitare" }
      ]
    },
    {
      letter: "H",
      lowercase: "h",
      pronunciation: "[aʃ]",
      spanish: "hache",
      examples: [
        { word: "heure", spanish: "hora", pronunciation: "[œʁ]" },
        { word: "homme", spanish: "hombre", pronunciation: "[ɔm]" },
        { word: "hibou", spanish: "búho", pronunciation: "[i-BU]" }
      ],
      position: 8,
      type: "consonant",
      description: "Siempre muda en francés, pero afecta la liaison",
      types: [
        { type: "h muette", description: "permite liaison", example: "l'heure, les‿hommes" },
        { type: "h aspirée", description: "impide liaison", example: "le hibou, les | hiboux" }
      ]
    },
    {
      letter: "I",
      lowercase: "i",
      pronunciation: "[i]",
      spanish: "i",
      examples: [
        { word: "ici", spanish: "aquí", pronunciation: "[i-SI]" },
        { word: "livre", spanish: "libro", pronunciation: "[livr]" },
        { word: "île", spanish: "isla", pronunciation: "[il]" }
      ],
      position: 9,
      type: "vowel",
      description: "Vocal anterior cerrada, más cerrada que en español",
      variations: [
        { form: "î", sound: "[i]", description: "i circunfleja", example: "île" },
        { form: "ï", sound: "[i]", description: "i diéresis", example: "maïs" }
      ]
    },
    {
      letter: "J",
      lowercase: "j",
      pronunciation: "[ʒi]",
      spanish: "ji",
      examples: [
        { word: "je", spanish: "yo", pronunciation: "[ʒə]" },
        { word: "joli", spanish: "bonito", pronunciation: "[ʒo-LI]" },
        { word: "jardin", spanish: "jardín", pronunciation: "[ʒar-DɛÃ]" }
      ],
      position: 10,
      type: "consonant",
      description: "Consonante palatal fricativa sonora [ʒ]"
    },
    {
      letter: "K",
      lowercase: "k",
      pronunciation: "[ka]",
      spanish: "ka",
      examples: [
        { word: "kilo", spanish: "kilo", pronunciation: "[ki-LO]" },
        { word: "kimono", spanish: "kimono", pronunciation: "[ki-mo-NO]" },
        { word: "kayak", spanish: "kayak", pronunciation: "[ka-JAK]" }
      ],
      position: 11,
      type: "consonant",
      description: "Poco frecuente, principalmente en palabras extranjeras"
    },
    {
      letter: "L",
      lowercase: "l",
      pronunciation: "[ɛl]",
      spanish: "ele",
      examples: [
        { word: "lire", spanish: "leer", pronunciation: "[liʁ]" },
        { word: "livre", spanish: "libro", pronunciation: "[livr]" },
        { word: "lac", spanish: "lago", pronunciation: "[lak]" }
      ],
      position: 12,
      type: "consonant",
      description: "Consonante lateral alveolar"
    },
    {
      letter: "M",
      lowercase: "m",
      pronunciation: "[ɛm]",
      spanish: "eme",
      examples: [
        { word: "mère", spanish: "madre", pronunciation: "[mɛʁ]" },
        { word: "maison", spanish: "casa", pronunciation: "[me-ZÕ]" },
        { word: "ami", spanish: "amigo", pronunciation: "[a-MI]" }
      ],
      position: 13,
      type: "consonant",
      description: "Consonante bilabial nasal"
    },
    {
      letter: "N",
      lowercase: "n",
      pronunciation: "[ɛn]",
      spanish: "ene",
      examples: [
        { word: "non", spanish: "no", pronunciation: "[nõ]" },
        { word: "nature", spanish: "naturaleza", pronunciation: "[na-TYR]" },
        { word: "animal", spanish: "animal", pronunciation: "[a-ni-MAL]" }
      ],
      position: 14,
      type: "consonant",
      description: "Consonante alveolar nasal"
    },
    {
      letter: "O",
      lowercase: "o",
      pronunciation: "[o]",
      spanish: "o",
      examples: [
        { word: "mot", spanish: "palabra", pronunciation: "[mo]" },
        { word: "porte", spanish: "puerta", pronunciation: "[port]" },
        { word: "beau", spanish: "hermoso", pronunciation: "[bo]" }
      ],
      position: 15,
      type: "vowel",
      description: "Vocal posterior redondeada",
      variations: [
        { form: "ô", sound: "[o]", description: "o circunfleja", example: "hôtel" },
        { form: "ò", sound: "[ɔ]", description: "o grave (raro)", example: "où" }
      ]
    },
    {
      letter: "P",
      lowercase: "p",
      pronunciation: "[pe]",
      spanish: "pe",
      examples: [
        { word: "père", spanish: "padre", pronunciation: "[pɛʁ]" },
        { word: "petit", spanish: "pequeño", pronunciation: "[pə-TI]" },
        { word: "parler", spanish: "hablar", pronunciation: "[par-LE]" }
      ],
      position: 16,
      type: "consonant",
      description: "Consonante bilabial oclusiva sorda"
    },
    {
      letter: "Q",
      lowercase: "q",
      pronunciation: "[ky]",
      spanish: "cu",
      examples: [
        { word: "que", spanish: "que", pronunciation: "[kə]" },
        { word: "quoi", spanish: "qué", pronunciation: "[kwa]" },
        { word: "quatre", spanish: "cuatro", pronunciation: "[katr]" }
      ],
      position: 17,
      type: "consonant",
      description: "Siempre seguida de 'u', pronunciada [k]"
    },
    {
      letter: "R",
      lowercase: "r",
      pronunciation: "[ɛʁ]",
      spanish: "erre",
      examples: [
        { word: "rouge", spanish: "rojo", pronunciation: "[ruʒ]" },
        { word: "rire", spanish: "reír", pronunciation: "[riʁ]" },
        { word: "partir", spanish: "partir", pronunciation: "[par-TIR]" }
      ],
      position: 18,
      type: "consonant",
      description: "R francesa uvular [ʁ], muy diferente del español",
      learning_tip: "Se pronuncia con vibración en la úvula, no con la lengua"
    },
    {
      letter: "S",
      lowercase: "s",
      pronunciation: "[ɛs]",
      spanish: "ese",
      examples: [
        { word: "sur", spanish: "sobre", pronunciation: "[syʁ]" },
        { word: "silence", spanish: "silencio", pronunciation: "[si-LÃNS]" },
        { word: "maison", spanish: "casa", pronunciation: "[me-ZÕ]" }
      ],
      position: 19,
      type: "consonant",
      description: "Puede ser [s] o [z] según posición",
      rules: [
        { rule: "s inicial = [s]", example: "sur, silence" },
        { rule: "s entre vocales = [z]", example: "maison, rose" },
        { rule: "ss = [s]", example: "classe, passer" }
      ]
    },
    {
      letter: "T",
      lowercase: "t",
      pronunciation: "[te]",
      spanish: "te",
      examples: [
        { word: "table", spanish: "mesa", pronunciation: "[tabl]" },
        { word: "tu", spanish: "tú", pronunciation: "[ty]" },
        { word: "partir", spanish: "partir", pronunciation: "[par-TIR]" }
      ],
      position: 20,
      type: "consonant",
      description: "Consonante dental oclusiva sorda"
    },
    {
      letter: "U",
      lowercase: "u",
      pronunciation: "[y]",
      spanish: "u",
      examples: [
        { word: "tu", spanish: "tú", pronunciation: "[ty]" },
        { word: "sur", spanish: "sobre", pronunciation: "[syʁ]" },
        { word: "nu", spanish: "desnudo", pronunciation: "[ny]" }
      ],
      position: 21,
      type: "vowel",
      description: "Vocal anterior redondeada [y], única del francés",
      learning_tip: "Forma los labios para 'u' pero pronuncia 'i'",
      variations: [
        { form: "û", sound: "[y]", description: "u circunfleja", example: "sûr" },
        { form: "ù", sound: "[y]", description: "u grave", example: "où" }
      ]
    },
    {
      letter: "V",
      lowercase: "v",
      pronunciation: "[ve]",
      spanish: "ve",
      examples: [
        { word: "vous", spanish: "usted/vosotros", pronunciation: "[vu]" },
        { word: "ville", spanish: "ciudad", pronunciation: "[vil]" },
        { word: "avoir", spanish: "tener", pronunciation: "[a-VWAR]" }
      ],
      position: 22,
      type: "consonant",
      description: "Consonante labiodental fricativa sonora"
    },
    {
      letter: "W",
      lowercase: "w",
      pronunciation: "[dubləve]",
      spanish: "doble ve",
      examples: [
        { word: "week-end", spanish: "fin de semana", pronunciation: "[wi-KEND]" },
        { word: "web", spanish: "web", pronunciation: "[wɛb]" },
        { word: "wifi", spanish: "wifi", pronunciation: "[wi-FI]" }
      ],
      position: 23,
      type: "consonant",
      description: "Poco frecuente, principalmente en palabras extranjeras"
    },
    {
      letter: "X",
      lowercase: "x",
      pronunciation: "[iks]",
      spanish: "equis",
      examples: [
        { word: "exemple", spanish: "ejemplo", pronunciation: "[eg-ZÃPL]" },
        { word: "six", spanish: "seis", pronunciation: "[sis]" },
        { word: "dix", spanish: "diez", pronunciation: "[dis]" }
      ],
      position: 24,
      type: "consonant",
      description: "Pronunciación variable según contexto",
      rules: [
        { rule: "inicial: [gz]", example: "exemple, examen" },
        { rule: "final: [s]", example: "six, dix" },
        { rule: "silent en liaison", example: "dix ans [di-z‿ã]" }
      ]
    },
    {
      letter: "Y",
      lowercase: "y",
      pronunciation: "[igrɛk]",
      spanish: "i griega",
      examples: [
        { word: "yeux", spanish: "ojos", pronunciation: "[jø]" },
        { word: "pays", spanish: "país", pronunciation: "[pe-I]" },
        { word: "stylo", spanish: "bolígrafo", pronunciation: "[sti-LO]" }
      ],
      position: 25,
      type: "vowel/consonant",
      description: "Puede funcionar como vocal [i] o semivocal [j]",
      rules: [
        { rule: "como vocal: [i]", example: "stylo, gymnase" },
        { rule: "como semivocal: [j]", example: "yeux, voyage" }
      ]
    },
    {
      letter: "Z",
      lowercase: "z",
      pronunciation: "[zɛd]",
      spanish: "zeta",
      examples: [
        { word: "zéro", spanish: "cero", pronunciation: "[ze-RO]" },
        { word: "zone", spanish: "zona", pronunciation: "[zon]" },
        { word: "chez", spanish: "en casa de", pronunciation: "[ʃe]" }
      ],
      position: 26,
      type: "consonant",
      description: "Consonante alveolar fricativa sonora [z]"
    }
  ],
  
  learning_tips: [
    {
      tip: "La R francesa",
      description: "Se pronuncia con la úvula (parte posterior del paladar), no con la lengua como en español",
      practice: "Intenta hacer gárgaras suaves o imitar el ronroneo de un gato"
    },
    {
      tip: "La U francesa [y]",
      description: "Sonido único del francés, inexistente en español",
      practice: "Forma los labios para decir 'u' pero intenta pronunciar 'i'"
    },
    {
      tip: "H muda vs aspirada",
      description: "La H siempre es muda pero afecta la liaison",
      examples: [
        { type: "muette", example: "l'heure (liaison posible)" },
        { type: "aspirée", example: "le héros (no liaison)" }
      ]
    },
    {
      tip: "Letras finales",
      description: "Muchas consonantes finales no se pronuncian",
      examples: ["petit [pə-TI]", "grand [grã]", "beaucoup [bo-KU]"]
    }
  ],

  pronunciation_rules: [
    {
      rule: "Accent tónique",
      description: "En francés siempre recae en la última sílaba pronunciada",
      examples: ["ca-FÉ", "ma-GASIN", "té-lé-PHONE"]
    },
    {
      rule: "E final muda",
      description: "La 'e' al final de palabra generalmente no se pronuncia",
      examples: ["table [tabl]", "porte [port]", "classe [klas]"]
    },
    {
      rule: "Liaison",
      description: "Unión fonética entre palabras",
      examples: [
        { written: "les enfants", pronounced: "[lez‿ãfã]" },
        { written: "nous avons", pronounced: "[nuz‿avõ]" }
      ]
    }
  ],

  regional_variations: [
    {
      region: "Francia estándar",
      description: "Pronunciación de referencia, enseñada en escuelas",
      characteristics: ["R uvular", "Vocales nasales marcadas", "E caduca frecuente"]
    },
    {
      region: "Quebec",
      description: "Francés canadiense con particularidades",
      differences: ["Algunas vocales más cerradas", "Conservación de sonidos antiguos"]
    },
    {
      region: "Sur de Francia",
      description: "Acento meridional",
      characteristics: ["E final a veces pronunciada", "Entonación diferente"]
    }
  ],

  cultural_notes: [
    {
      aspect: "Alfabetización",
      note: "Francia tiene una tasa de alfabetización del 99%. El sistema educativo francés enfatiza mucho la ortografía correcta."
    },
    {
      aspect: "Dictées",
      note: "Los dictados son fundamentales en la educación francesa para dominar la ortografía compleja del idioma."
    },
    {
      aspect: "Académie française",
      note: "Institución que regula el idioma francés y su evolución, fundada en 1635."
    }
  ]
};
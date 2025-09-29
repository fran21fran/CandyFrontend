export const alphabet = {
  letters: [
    {
      letter: "A",
      lowercase: "a",
      pronunciation: "[a]",
      spanish: "a",
      examples: [
        { word: "amore", spanish: "amor", pronunciation: "[a-MO-re]" },
        { word: "albero", spanish: "árbol", pronunciation: "[AL-be-ro]" },
        { word: "acqua", spanish: "agua", pronunciation: "[AK-kwa]" }
      ],
      position: 1,
      type: "vowel",
      description: "Vocal central abierta, idéntica al español"
    },
    {
      letter: "B",
      lowercase: "b",
      pronunciation: "[bi]",
      spanish: "bi",
      examples: [
        { word: "bene", spanish: "bien", pronunciation: "[BE-ne]" },
        { word: "bambino", spanish: "niño", pronunciation: "[bam-BI-no]" },
        { word: "bello", spanish: "hermoso", pronunciation: "[BEL-lo]" }
      ],
      position: 2,
      type: "consonant",
      description: "Consonante bilabial oclusiva sonora"
    },
    {
      letter: "C",
      lowercase: "c",
      pronunciation: "[tʃi]",
      spanish: "chi",
      examples: [
        { word: "casa", spanish: "casa", pronunciation: "[KA-sa]" },
        { word: "ciao", spanish: "hola/adiós", pronunciation: "[TƩAO]" },
        { word: "centro", spanish: "centro", pronunciation: "[TƩEN-tro]" }
      ],
      position: 3,
      type: "consonant",
      description: "Pronunciación depende de la vocal siguiente",
      rules: [
        { rule: "c + a,o,u = [k]", example: "casa, come, cuore" },
        { rule: "c + e,i = [tʃ]", example: "centro, cinema" },
        { rule: "ch + e,i = [k]", example: "che, chi" },
        { rule: "ci + a,o,u = [tʃ]", example: "ciao, cioccolato" }
      ]
    },
    {
      letter: "D",
      lowercase: "d",
      pronunciation: "[di]",
      spanish: "di",
      examples: [
        { word: "dare", spanish: "dar", pronunciation: "[DA-re]" },
        { word: "dolce", spanish: "dulce", pronunciation: "[DOL-tʃe]" },
        { word: "dove", spanish: "dónde", pronunciation: "[DO-ve]" }
      ],
      position: 4,
      type: "consonant",
      description: "Consonante dental oclusiva sonora"
    },
    {
      letter: "E",
      lowercase: "e",
      pronunciation: "[e]",
      spanish: "e",
      examples: [
        { word: "essere", spanish: "ser", pronunciation: "[ES-se-re]" },
        { word: "bene", spanish: "bien", pronunciation: "[BE-ne]" },
        { word: "perché", spanish: "por qué", pronunciation: "[per-KE]" }
      ],
      position: 5,
      type: "vowel",
      description: "Vocal anterior media",
      variations: [
        { form: "é", sound: "[e]", description: "e cerrada con acento", example: "perché" },
        { form: "è", sound: "[ɛ]", description: "e abierta con acento", example: "caffè" }
      ]
    },
    {
      letter: "F",
      lowercase: "f",
      pronunciation: "[EF-fe]",
      spanish: "efe",
      examples: [
        { word: "fare", spanish: "hacer", pronunciation: "[FA-re]" },
        { word: "famiglia", spanish: "familia", pronunciation: "[fa-MI-ʎa]" },
        { word: "forte", spanish: "fuerte", pronunciation: "[FOR-te]" }
      ],
      position: 6,
      type: "consonant",
      description: "Consonante labiodental fricativa sorda"
    },
    {
      letter: "G",
      lowercase: "g",
      pronunciation: "[dʒi]",
      spanish: "yi",
      examples: [
        { word: "gatto", spanish: "gato", pronunciation: "[GAT-to]" },
        { word: "gente", spanish: "gente", pronunciation: "[DƷEN-te]" },
        { word: "giorno", spanish: "día", pronunciation: "[DƷOR-no]" }
      ],
      position: 7,
      type: "consonant",
      description: "Pronunciación depende de la vocal siguiente",
      rules: [
        { rule: "g + a,o,u = [g]", example: "gatto, gola, gusto" },
        { rule: "g + e,i = [dʒ]", example: "gente, giro" },
        { rule: "gh + e,i = [g]", example: "spaghetti, funghi" },
        { rule: "gi + a,o,u = [dʒ]", example: "giallo, gioco" }
      ]
    },
    {
      letter: "H",
      lowercase: "h",
      pronunciation: "[AK-ka]",
      spanish: "hache",
      examples: [
        { word: "ho", spanish: "tengo", pronunciation: "[o]" },
        { word: "hotel", spanish: "hotel", pronunciation: "[o-TEL]" },
        { word: "spaghetti", spanish: "espaguetis", pronunciation: "[spa-GET-ti]" }
      ],
      position: 8,
      type: "consonant",
      description: "Siempre muda, modifica pronunciación de c/g",
      note: "Solo se usa para modificar c y g ante e,i, o en palabras extranjeras"
    },
    {
      letter: "I",
      lowercase: "i",
      pronunciation: "[i]",
      spanish: "i",
      examples: [
        { word: "io", spanish: "yo", pronunciation: "[i-o]" },
        { word: "importante", spanish: "importante", pronunciation: "[im-por-TAN-te]" },
        { word: "sicilia", spanish: "Sicilia", pronunciation: "[si-TʃI-lja]" }
      ],
      position: 9,
      type: "vowel",
      description: "Vocal anterior cerrada, similar al español"
    },
    {
      letter: "L",
      lowercase: "l",
      pronunciation: "[EL-le]",
      spanish: "ele",
      examples: [
        { word: "latte", spanish: "leche", pronunciation: "[LAT-te]" },
        { word: "luna", spanish: "luna", pronunciation: "[LU-na]" },
        { word: "bello", spanish: "hermoso", pronunciation: "[BEL-lo]" }
      ],
      position: 10,
      type: "consonant",
      description: "Consonante lateral alveolar"
    },
    {
      letter: "M",
      lowercase: "m",
      pronunciation: "[EM-me]",
      spanish: "eme",
      examples: [
        { word: "mamma", spanish: "mamá", pronunciation: "[MAM-ma]" },
        { word: "molto", spanish: "muy", pronunciation: "[MOL-to]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TEM-po]" }
      ],
      position: 11,
      type: "consonant",
      description: "Consonante bilabial nasal"
    },
    {
      letter: "N",
      lowercase: "n",
      pronunciation: "[EN-ne]",
      spanish: "ene",
      examples: [
        { word: "nome", spanish: "nombre", pronunciation: "[NO-me]" },
        { word: "niente", spanish: "nada", pronunciation: "[NJEN-te]" },
        { word: "anna", spanish: "año", pronunciation: "[AN-no]" }
      ],
      position: 12,
      type: "consonant",
      description: "Consonante alveolar nasal"
    },
    {
      letter: "O",
      lowercase: "o",
      pronunciation: "[o]",
      spanish: "o",
      examples: [
        { word: "oggi", spanish: "hoy", pronunciation: "[OD-dʒi]" },
        { word: "come", spanish: "como", pronunciation: "[KO-me]" },
        { word: "amore", spanish: "amor", pronunciation: "[a-MO-re]" }
      ],
      position: 13,
      type: "vowel",
      description: "Vocal posterior media redondeada",
      variations: [
        { form: "ó", sound: "[o]", description: "o cerrada con acento", example: "però" },
        { form: "ò", sound: "[ɔ]", description: "o abierta con acento", example: "può" }
      ]
    },
    {
      letter: "P",
      lowercase: "p",
      pronunciation: "[pi]",
      spanish: "pi",
      examples: [
        { word: "padre", spanish: "padre", pronunciation: "[PA-dre]" },
        { word: "pane", spanish: "pan", pronunciation: "[PA-ne]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TEM-po]" }
      ],
      position: 14,
      type: "consonant",
      description: "Consonante bilabial oclusiva sorda"
    },
    {
      letter: "Q",
      lowercase: "q",
      pronunciation: "[ku]",
      spanish: "cu",
      examples: [
        { word: "quando", spanish: "cuando", pronunciation: "[KWAN-do]" },
        { word: "quattro", spanish: "cuatro", pronunciation: "[KWAT-tro]" },
        { word: "qualche", spanish: "algún", pronunciation: "[KWAL-ke]" }
      ],
      position: 15,
      type: "consonant",
      description: "Siempre seguida de 'u' + vocal, pronunciada [kw]"
    },
    {
      letter: "R",
      lowercase: "r",
      pronunciation: "[ER-re]",
      spanish: "erre",
      examples: [
        { word: "rosso", spanish: "rojo", pronunciation: "[ROS-so]" },
        { word: "terra", spanish: "tierra", pronunciation: "[TER-ra]" },
        { word: "bere", spanish: "beber", pronunciation: "[BE-re]" }
      ],
      position: 16,
      type: "consonant",
      description: "R vibrante múltiple, similar al español pero más marcada"
    },
    {
      letter: "S",
      lowercase: "s",
      pronunciation: "[ES-se]",
      spanish: "ese",
      examples: [
        { word: "sole", spanish: "sol", pronunciation: "[SO-le]" },
        { word: "casa", spanish: "casa", pronunciation: "[KA-sa]" },
        { word: "spesso", spanish: "a menudo", pronunciation: "[SPES-so]" }
      ],
      position: 17,
      type: "consonant",
      description: "Puede ser [s] o [z] según posición",
      rules: [
        { rule: "s inicial = [s]", example: "sole, stare" },
        { rule: "s entre vocales = [z]", example: "casa, rosa" },
        { rule: "ss = [s]", example: "rosso, basso" }
      ]
    },
    {
      letter: "T",
      lowercase: "t",
      pronunciation: "[ti]",
      spanish: "ti",
      examples: [
        { word: "tutto", spanish: "todo", pronunciation: "[TUT-to]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TEM-po]" },
        { word: "città", spanish: "ciudad", pronunciation: "[tʃit-TA]" }
      ],
      position: 18,
      type: "consonant",
      description: "Consonante dental oclusiva sorda"
    },
    {
      letter: "U",
      lowercase: "u",
      pronunciation: "[u]",
      spanish: "u",
      examples: [
        { word: "uno", spanish: "uno", pronunciation: "[U-no]" },
        { word: "ultimo", spanish: "último", pronunciation: "[UL-ti-mo]" },
        { word: "buono", spanish: "bueno", pronunciation: "[BWO-no]" }
      ],
      position: 19,
      type: "vowel",
      description: "Vocal posterior cerrada, similar al español"
    },
    {
      letter: "V",
      lowercase: "v",
      pronunciation: "[vu]",
      spanish: "vu",
      examples: [
        { word: "vero", spanish: "verdadero", pronunciation: "[VE-ro]" },
        { word: "vivere", spanish: "vivir", pronunciation: "[VI-ve-re]" },
        { word: "dove", spanish: "dónde", pronunciation: "[DO-ve]" }
      ],
      position: 20,
      type: "consonant",
      description: "Consonante labiodental fricativa sonora"
    },
    {
      letter: "Z",
      lowercase: "z",
      pronunciation: "[DZE-ta]",
      spanish: "zeta",
      examples: [
        { word: "zero", spanish: "cero", pronunciation: "[DZE-ro]" },
        { word: "zio", spanish: "tío", pronunciation: "[TSI-o]" },
        { word: "pizza", spanish: "pizza", pronunciation: "[PIT-tsa]" }
      ],
      position: 21,
      type: "consonant",
      description: "Puede ser [ts] o [dz] según la palabra",
      rules: [
        { rule: "z sorda [ts]", example: "pizza, forza" },
        { rule: "z sonora [dz]", example: "zero, zona" }
      ]
    }
  ],

  foreign_letters: [
    {
      letter: "J",
      pronunciation: "[i lunga]",
      usage: "Solo en palabras extranjeras",
      examples: ["jeans", "jazz", "junior"]
    },
    {
      letter: "K",
      pronunciation: "[kappa]",
      usage: "Solo en palabras extranjeras",
      examples: ["karate", "kiwi", "kg"]
    },
    {
      letter: "W",
      pronunciation: "[doppia vu]",
      usage: "Solo en palabras extranjeras",
      examples: ["weekend", "western", "whisky"]
    },
    {
      letter: "X",
      pronunciation: "[iks]",
      usage: "Solo en palabras extranjeras",
      examples: ["taxi", "extra", "box"]
    },
    {
      letter: "Y",
      pronunciation: "[ipsilon]",
      usage: "Solo en palabras extranjeras",
      examples: ["yoga", "yacht", "nylon"]
    }
  ],

  special_combinations: [
    {
      combination: "CH",
      pronunciation: "[k]",
      description: "C dura antes de e,i",
      examples: [
        { word: "che", spanish: "que", pronunciation: "[ke]" },
        { word: "chi", spanish: "quien", pronunciation: "[ki]" },
        { word: "chiaro", spanish: "claro", pronunciation: "[KJA-ro]" }
      ]
    },
    {
      combination: "GH",
      pronunciation: "[g]",
      description: "G dura antes de e,i",
      examples: [
        { word: "spaghetti", spanish: "espaguetis", pronunciation: "[spa-GET-ti]" },
        { word: "luoghi", spanish: "lugares", pronunciation: "[LWO-gi]" }
      ]
    },
    {
      combination: "SC",
      pronunciation: "[ʃ] o [sk]",
      description: "Depende de la vocal siguiente",
      examples: [
        { word: "pesce", spanish: "pez", pronunciation: "[PE-ʃe]" },
        { word: "scuola", spanish: "escuela", pronunciation: "[SKWO-la]" }
      ]
    },
    {
      combination: "GL",
      pronunciation: "[ʎ]",
      description: "Como 'll' española en 'llama'",
      examples: [
        { word: "famiglia", spanish: "familia", pronunciation: "[fa-MI-ʎa]" },
        { word: "figlio", spanish: "hijo", pronunciation: "[FI-ʎo]" }
      ]
    },
    {
      combination: "GN",
      pronunciation: "[ɲ]",
      description: "Como 'ñ' española",
      examples: [
        { word: "agnello", spanish: "cordero", pronunciation: "[a-ƝELL-lo]" },
        { word: "sogno", spanish: "sueño", pronunciation: "[SO-ɲo]" }
      ]
    }
  ],

  stress_patterns: [
    {
      type: "Parole piane",
      description: "Acento en penúltima sílaba (más común)",
      percentage: "80%",
      examples: ["ca-SA", "a-MO-re", "par-LA-re"],
      rule: "No llevan acento escrito"
    },
    {
      type: "Parole tronche",
      description: "Acento en última sílaba",
      percentage: "15%",
      examples: ["cit-TÀ", "per-CHÉ", "vir-TÙ"],
      rule: "Siempre llevan acento escrito"
    },
    {
      type: "Parole sdrucciole",
      description: "Acento en antepenúltima sílaba",
      percentage: "4%",
      examples: ["ME-di-co", "MU-si-ca", "TA-vo-lo"],
      rule: "No llevan acento escrito"
    },
    {
      type: "Parole bisdrucciole",
      description: "Acento en pre-antepenúltima sílaba",
      percentage: "1%",
      examples: ["TÈ-le-fo-na-mi", "A-bi-ta-no"],
      rule: "Muy raras, solo en formas verbales con pronombres"
    }
  ],

  pronunciation_tips: [
    {
      tip: "Vocales puras",
      description: "Las vocales italianas son puras y no cambian de sonido",
      practice: "Cada vocal se pronuncia siempre igual, sin diptongación"
    },
    {
      tip: "Consonantes dobles",
      description: "Las consonantes dobles se pronuncian más largas",
      examples: ["fatto vs fato", "notte vs note", "bello vs belo"],
      practice: "Mantén el sonido consonántico más tiempo"
    },
    {
      tip: "R vibrante",
      description: "La R italiana es vibrante múltiple, como en español",
      practice: "Vibra la lengua contra el paladar superior"
    },
    {
      tip: "Acento tónico",
      description: "El acento es importante para el significado",
      examples: [
        { word: "àncora", meaning: "ancla", stress: "primera sílaba" },
        { word: "ancóra", meaning: "todavía", stress: "segunda sílaba" }
      ]
    }
  ],

  regional_variations: [
    {
      region: "Norte de Italia",
      characteristics: ["E y O más cerradas", "Menos geminación", "Influencia del dialecto lombardo"],
      cities: ["Milano", "Torino", "Venezia"]
    },
    {
      region: "Centro de Italia",
      characteristics: ["Pronunciación estándar", "Base del italiano moderno", "Gorgia toscana (c,t,p aspiradas)"],
      cities: ["Roma", "Firenze", "Perugia"]
    },
    {
      region: "Sur de Italia",
      characteristics: ["E y O más abiertas", "Geminación más marcada", "Influencia dialectal fuerte"],
      cities: ["Napoli", "Bari", "Palermo"]
    }
  ],

  cultural_notes: [
    {
      aspect: "Historia",
      note: "El alfabeto italiano deriva del latín. Dante Alighieri estableció las bases del italiano moderno con 'La Divina Commedia' (1300)."
    },
    {
      aspect: "Dialectos",
      note: "Italia tiene muchos dialectos regionales. El italiano estándar se basa en el dialecto toscano florentino."
    },
    {
      aspect: "Educación",
      note: "La bella calligrafia (bella escritura) es muy valorada en la educación italiana tradicional."
    },
    {
      aspect: "Expresividad",
      note: "El italiano es conocido por su musicalidad y expresividad, reflejada en su sistema fonético claro."
    }
  ]
};
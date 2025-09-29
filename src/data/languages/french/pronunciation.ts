export const pronunciation = {
  alphabet: [
    { 
      letter: "A", 
      sound: "[a]", 
      example: "chat", 
      spanish: "a como en 'casa'",
      variations: ["à", "â"],
      rules: "Siempre se pronuncia [a], nunca varía"
    },
    { 
      letter: "E", 
      sound: "[ə], [e], [ɛ]", 
      example: "le, été, père", 
      spanish: "e neutra, e cerrada, e abierta",
      variations: ["é", "è", "ê", "ë"],
      rules: "é=[e], è/ê/ë=[ɛ], e final=[ə] o muda"
    },
    { 
      letter: "I", 
      sound: "[i]", 
      example: "lit", 
      spanish: "i como en 'sí'",
      variations: ["î", "ï"],
      rules: "Siempre [i], más cerrada que en español"
    },
    { 
      letter: "O", 
      sound: "[o], [ɔ]", 
      example: "dos, port", 
      spanish: "o cerrada, o abierta",
      variations: ["ô"],
      rules: "ô=[o], o en sílaba cerrada=[ɔ]"
    },
    { 
      letter: "U", 
      sound: "[y]", 
      example: "tu", 
      spanish: "u francesa (labios de 'u', lengua de 'i')",
      variations: ["û", "ü"],
      rules: "Sonido único del francés, no existe en español"
    },
    {
      letter: "Y",
      sound: "[i], [j]",
      example: "stylo, yeux",
      spanish: "i o semivocal j",
      variations: ["ÿ"],
      rules: "Como vocal=[i], como semivocal=[j]"
    }
  ],

  vowels: [
    {
      type: "Voyelles orales simples",
      vowels: [
        { vowel: "[a]", example: "patte", description: "a anterior" },
        { vowel: "[ɑ]", example: "pâte", description: "a posterior (raro)" },
        { vowel: "[e]", example: "été", description: "e cerrada" },
        { vowel: "[ɛ]", example: "père", description: "e abierta" },
        { vowel: "[i]", example: "lit", description: "i cerrada" },
        { vowel: "[o]", example: "dos", description: "o cerrada" },
        { vowel: "[ɔ]", example: "port", description: "o abierta" },
        { vowel: "[u]", example: "fou", description: "u posterior" },
        { vowel: "[y]", example: "tu", description: "u anterior francesa" }
      ]
    },
    {
      type: "Voyelles nasales",
      vowels: [
        { vowel: "[ã]", example: "tant", spelling: "an, am, en, em", description: "a nasal" },
        { vowel: "[ɛ̃]", example: "pain", spelling: "in, im, ain, ein, yn", description: "e nasal" },
        { vowel: "[ɔ̃]", example: "ton", spelling: "on, om", description: "o nasal" },
        { vowel: "[œ̃]", example: "un", spelling: "un, um", description: "œ nasal (en desuso)" }
      ]
    },
    {
      type: "Voyelles composées",
      vowels: [
        { vowel: "[ø]", example: "peu", spelling: "eu, œu", description: "e cerrada redondeada" },
        { vowel: "[œ]", example: "peur", spelling: "eu, œu", description: "e abierta redondeada" },
        { vowel: "[ə]", example: "le", spelling: "e", description: "e caduca/neutra" }
      ]
    }
  ],

  consonants: [
    { 
      consonant: "R", 
      sound: "[ʁ]", 
      position: "uvular fricativa", 
      example: "rouge",
      spanish: "r francesa (vibración en la úvula)",
      rules: "Se pronuncia en la garganta, no con la lengua"
    },
    { 
      consonant: "H", 
      sound: "muda/aspirada", 
      position: "inicial", 
      example: "heure vs hibou",
      spanish: "h muda (liaison) vs h aspirada (no liaison)",
      rules: "h muda permite elisión, h aspirada la impide"
    },
    { 
      consonant: "J", 
      sound: "[ʒ]", 
      position: "fricativa sonora", 
      example: "je",
      spanish: "y argentina suave",
      rules: "Como la 'y' de 'yo' pero más suave"
    },
    { 
      consonant: "CH", 
      sound: "[ʃ]", 
      position: "fricativa sorda", 
      example: "chat",
      spanish: "sh inglesa",
      rules: "Siempre [ʃ], nunca [tʃ] como en español"
    },
    {
      consonant: "GN",
      sound: "[ɲ]",
      position: "nasal palatal",
      example: "agneau",
      spanish: "ñ española",
      rules: "Exactamente como la ñ del español"
    },
    {
      consonant: "LL",
      sound: "[l] o [j]",
      position: "lateral o semivocal",
      example: "ville [l], fille [j]",
      spanish: "l normal o y suave",
      rules: "Depende de la etimología y región"
    }
  ],

  liaison: [
    {
      type: "Liaison obligatoire",
      examples: [
        { phrase: "les enfants", pronunciation: "[lez‿ãfã]", rule: "article + nom" },
        { phrase: "nous avons", pronunciation: "[nuz‿avɔ̃]", rule: "pronom + verbe" },
        { phrase: "deux ans", pronunciation: "[døz‿ã]", rule: "nombre + nom" }
      ],
      description: "Liaison que se debe hacer siempre"
    },
    {
      type: "Liaison interdite",
      examples: [
        { phrase: "les | haricots", pronunciation: "[le arikoǁ]", rule: "h aspirada" },
        { phrase: "Pierre et | Anne", pronunciation: "[pjɛʁ e ǁ an]", rule: "et + consonante" }
      ],
      description: "Liaison que nunca se debe hacer"
    },
    {
      type: "Liaison facultative",
      examples: [
        { phrase: "très important", pronunciation: "[tʁɛ‿ɛ̃pɔʁtã] ou [tʁɛ ǁ ɛ̃pɔʁtã]", rule: "adverbe + adjectif" },
        { phrase: "ils ont dit", pronunciation: "[ilz‿ɔ̃ di] ou [il ǁ ɔ̃ di]", rule: "contexte familier" }
      ],
      description: "Liaison optionnelle selon el registro"
    }
  ],

  elision: [
    {
      rule: "Articles définis",
      examples: [
        { full: "le ami", elided: "l'ami", context: "masculin devant voyelle" },
        { full: "la école", elided: "l'école", context: "féminin devant voyelle" }
      ]
    },
    {
      rule: "Pronoms",
      examples: [
        { full: "je ai", elided: "j'ai", context: "pronom personnel" },
        { full: "me appelle", elided: "m'appelle", context: "pronom réfléchi" }
      ]
    },
    {
      rule: "Mots composés",
      examples: [
        { full: "si il", elided: "s'il", context: "conjonction" },
        { full: "que elle", elided: "qu'elle", context: "relatif" }
      ]
    }
  ],

  accent: [
    {
      type: "Accent aigu (é)",
      sound: "[e]",
      examples: ["été", "café", "préférer"],
      usage: "Solo sobre e, sonido cerrado",
      rules: "Indica pronunciación [e] cerrada"
    },
    {
      type: "Accent grave (è, à, ù)",
      sound: "[ɛ], [a], [y]",
      examples: ["père", "à", "où"],
      usage: "è=[ɛ] abierta, à/ù=distinción gramatical",
      rules: "è cambia pronunciación, à/ù distinguen palabras"
    },
    {
      type: "Accent circonflexe (ê, â, î, ô, û)",
      sound: "variable",
      examples: ["être", "pâte", "île", "hôtel", "sûr"],
      usage: "Indica vocal larga histórica",
      rules: "A menudo indica s histórica perdida"
    },
    {
      type: "Cédille (ç)",
      sound: "[s]",
      examples: ["français", "leçon", "reçu"],
      usage: "c + a/o/u = [s] en lugar de [k]",
      rules: "Solo antes de a, o, u para mantener sonido [s]"
    }
  ]
};
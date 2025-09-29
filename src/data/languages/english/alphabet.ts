export const alphabet = {
  letters: [
    {
      letter: "A",
      lowercase: "a",
      pronunciation: "[eɪ]",
      spanish: "ei",
      examples: [
        { word: "apple", spanish: "manzana", pronunciation: "[ˈæp.əl]" },
        { word: "amazing", spanish: "increíble", pronunciation: "[əˈmeɪ.zɪŋ]" },
        { word: "table", spanish: "mesa", pronunciation: "[ˈteɪ.bəl]" }
      ],
      position: 1,
      type: "vowel",
      description: "Vocal que puede sonar como [æ], [eɪ], [ə] según contexto",
      sounds: [
        { sound: "[æ]", context: "palabras cortas", example: "cat, bat, hat" },
        { sound: "[eɪ]", context: "alfabeto y nombres", example: "A, name, cake" },
        { sound: "[ə]", context: "sílabas átonas", example: "about, sofa" }
      ]
    },
    {
      letter: "B",
      lowercase: "b",
      pronunciation: "[biː]",
      spanish: "bi",
      examples: [
        { word: "book", spanish: "libro", pronunciation: "[bʊk]" },
        { word: "beautiful", spanish: "hermoso", pronunciation: "[ˈbjuː.tɪ.fəl]" },
        { word: "job", spanish: "trabajo", pronunciation: "[dʒɒb]" }
      ],
      position: 2,
      type: "consonant",
      description: "Consonante bilabial oclusiva sonora",
      note: "Muda cuando sigue a 'm': lamb, thumb, comb"
    },
    {
      letter: "C",
      lowercase: "c",
      pronunciation: "[siː]",
      spanish: "si",
      examples: [
        { word: "cat", spanish: "gato", pronunciation: "[kæt]" },
        { word: "city", spanish: "ciudad", pronunciation: "[ˈsɪt.i]" },
        { word: "school", spanish: "escuela", pronunciation: "[skuːl]" }
      ],
      position: 3,
      type: "consonant",
      description: "Pronunciación variable según contexto",
      rules: [
        { rule: "c + a,o,u = [k]", example: "cat, come, cup" },
        { rule: "c + e,i,y = [s]", example: "city, cent, cycle" },
        { rule: "ch = [tʃ]", example: "chair, church" },
        { rule: "ck = [k]", example: "back, duck" }
      ]
    },
    {
      letter: "D",
      lowercase: "d",
      pronunciation: "[diː]",
      spanish: "di",
      examples: [
        { word: "dog", spanish: "perro", pronunciation: "[dɒg]" },
        { word: "wonderful", spanish: "maravilloso", pronunciation: "[ˈwʌn.də.fəl]" },
        { word: "red", spanish: "rojo", pronunciation: "[red]" }
      ],
      position: 4,
      type: "consonant",
      description: "Consonante dental oclusiva sonora",
      note: "Muda en algunas palabras: Wednesday, handsome"
    },
    {
      letter: "E",
      lowercase: "e",
      pronunciation: "[iː]",
      spanish: "i",
      examples: [
        { word: "elephant", spanish: "elefante", pronunciation: "[ˈel.ɪ.fənt]" },
        { word: "tree", spanish: "árbol", pronunciation: "[triː]" },
        { word: "house", spanish: "casa", pronunciation: "[haʊs]" }
      ],
      position: 5,
      type: "vowel",
      description: "Vocal muy variable en pronunciación",
      sounds: [
        { sound: "[iː]", context: "e larga", example: "me, see, tree" },
        { sound: "[e]", context: "e corta", example: "pet, red, best" },
        { sound: "[ə]", context: "e muda/átona", example: "house, table" },
        { sound: "muda", context: "final de palabra", example: "like, make, home" }
      ]
    },
    {
      letter: "F",
      lowercase: "f",
      pronunciation: "[ef]",
      spanish: "ef",
      examples: [
        { word: "fish", spanish: "pez", pronunciation: "[fɪʃ]" },
        { word: "family", spanish: "familia", pronunciation: "[ˈfæm.ə.li]" },
        { word: "coffee", spanish: "café", pronunciation: "[ˈkɒf.i]" }
      ],
      position: 6,
      type: "consonant",
      description: "Consonante labiodental fricativa sorda"
    },
    {
      letter: "G",
      lowercase: "g",
      pronunciation: "[dʒiː]",
      spanish: "yi",
      examples: [
        { word: "good", spanish: "bueno", pronunciation: "[gʊd]" },
        { word: "general", spanish: "general", pronunciation: "[ˈdʒen.ər.əl]" },
        { word: "night", spanish: "noche", pronunciation: "[naɪt]" }
      ],
      position: 7,
      type: "consonant",
      description: "Pronunciación variable según contexto",
      rules: [
        { rule: "g + a,o,u = [g]", example: "go, game, gun" },
        { rule: "g + e,i,y = [dʒ] (a veces)", example: "general, giant" },
        { rule: "g + e,i,y = [g] (a veces)", example: "get, give, girl" },
        { rule: "gh = [f] o muda", example: "laugh, night" }
      ]
    },
    {
      letter: "H",
      lowercase: "h",
      pronunciation: "[eɪtʃ]",
      spanish: "eich",
      examples: [
        { word: "house", spanish: "casa", pronunciation: "[haʊs]" },
        { word: "hello", spanish: "hola", pronunciation: "[həˈləʊ]" },
        { word: "hour", spanish: "hora", pronunciation: "[ˈaʊər]" }
      ],
      position: 8,
      type: "consonant",
      description: "Consonante aspirada, a veces muda",
      rules: [
        { rule: "h inicial = [h]", example: "house, help" },
        { rule: "h muda en algunas palabras", example: "hour, honest, honor" },
        { rule: "th = [θ] o [ð]", example: "think, this" },
        { rule: "sh = [ʃ]", example: "shoe, fish" }
      ]
    },
    {
      letter: "I",
      lowercase: "i",
      pronunciation: "[aɪ]",
      spanish: "ai",
      examples: [
        { word: "ice", spanish: "hielo", pronunciation: "[aɪs]" },
        { word: "sit", spanish: "sentarse", pronunciation: "[sɪt]" },
        { word: "machine", spanish: "máquina", pronunciation: "[məˈʃiːn]" }
      ],
      position: 9,
      type: "vowel",
      description: "Vocal con pronunciación variable",
      sounds: [
        { sound: "[aɪ]", context: "i larga/nombre", example: "ice, time, like" },
        { sound: "[ɪ]", context: "i corta", example: "sit, big, fish" },
        { sound: "[iː]", context: "en algunas palabras", example: "machine, police" }
      ]
    },
    {
      letter: "J",
      lowercase: "j",
      pronunciation: "[dʒeɪ]",
      spanish: "yei",
      examples: [
        { word: "jump", spanish: "saltar", pronunciation: "[dʒʌmp]" },
        { word: "juice", spanish: "jugo", pronunciation: "[dʒuːs]" },
        { word: "project", spanish: "proyecto", pronunciation: "[ˈprɒdʒ.ekt]" }
      ],
      position: 10,
      type: "consonant",
      description: "Consonante africada palatal sonora [dʒ]"
    },
    {
      letter: "K",
      lowercase: "k",
      pronunciation: "[keɪ]",
      spanish: "kei",
      examples: [
        { word: "key", spanish: "llave", pronunciation: "[kiː]" },
        { word: "know", spanish: "saber", pronunciation: "[nəʊ]" },
        { word: "kitchen", spanish: "cocina", pronunciation: "[ˈkɪtʃ.ən]" }
      ],
      position: 11,
      type: "consonant",
      description: "Consonante velar oclusiva sorda",
      note: "Muda antes de 'n': know, knife, knee"
    },
    {
      letter: "L",
      lowercase: "l",
      pronunciation: "[el]",
      spanish: "el",
      examples: [
        { word: "love", spanish: "amor", pronunciation: "[lʌv]" },
        { word: "table", spanish: "mesa", pronunciation: "[ˈteɪ.bəl]" },
        { word: "call", spanish: "llamar", pronunciation: "[kɔːl]" }
      ],
      position: 12,
      type: "consonant",
      description: "Consonante lateral alveolar",
      types: [
        { type: "clear L", context: "inicio de sílaba", example: "love, glass" },
        { type: "dark L", context: "final de sílaba", example: "call, wall" }
      ]
    },
    {
      letter: "M",
      lowercase: "m",
      pronunciation: "[em]",
      spanish: "em",
      examples: [
        { word: "mother", spanish: "madre", pronunciation: "[ˈmʌð.ər]" },
        { word: "important", spanish: "importante", pronunciation: "[ɪmˈpɔː.tənt]" },
        { word: "time", spanish: "tiempo", pronunciation: "[taɪm]" }
      ],
      position: 13,
      type: "consonant",
      description: "Consonante bilabial nasal"
    },
    {
      letter: "N",
      lowercase: "n",
      pronunciation: "[en]",
      spanish: "en",
      examples: [
        { word: "name", spanish: "nombre", pronunciation: "[neɪm]" },
        { word: "wonderful", spanish: "maravilloso", pronunciation: "[ˈwʌn.də.fəl]" },
        { word: "think", spanish: "pensar", pronunciation: "[θɪŋk]" }
      ],
      position: 14,
      type: "consonant",
      description: "Consonante alveolar nasal",
      note: "Cambia a [ŋ] antes de g/k: think, song"
    },
    {
      letter: "O",
      lowercase: "o",
      pronunciation: "[əʊ]",
      spanish: "ou",
      examples: [
        { word: "open", spanish: "abrir", pronunciation: "[ˈəʊ.pən]" },
        { word: "hot", spanish: "caliente", pronunciation: "[hɒt]" },
        { word: "book", spanish: "libro", pronunciation: "[bʊk]" }
      ],
      position: 15,
      type: "vowel",
      description: "Vocal con múltiples pronunciaciones",
      sounds: [
        { sound: "[əʊ]", context: "o larga", example: "open, home, go" },
        { sound: "[ɒ]", context: "o corta", example: "hot, dog, stop" },
        { sound: "[ʊ]", context: "en algunas palabras", example: "book, good, look" },
        { sound: "[ʌ]", context: "en algunas palabras", example: "love, money" }
      ]
    },
    {
      letter: "P",
      lowercase: "p",
      pronunciation: "[piː]",
      spanish: "pi",
      examples: [
        { word: "people", spanish: "gente", pronunciation: "[ˈpiː.pəl]" },
        { word: "happy", spanish: "feliz", pronunciation: "[ˈhæp.i]" },
        { word: "stop", spanish: "parar", pronunciation: "[stɒp]" }
      ],
      position: 16,
      type: "consonant",
      description: "Consonante bilabial oclusiva sorda",
      note: "Muda en algunas palabras: psychology, pneumonia"
    },
    {
      letter: "Q",
      lowercase: "q",
      pronunciation: "[kjuː]",
      spanish: "kiu",
      examples: [
        { word: "question", spanish: "pregunta", pronunciation: "[ˈkwes.tʃən]" },
        { word: "quick", spanish: "rápido", pronunciation: "[kwɪk]" },
        { word: "unique", spanish: "único", pronunciation: "[juːˈniːk]" }
      ],
      position: 17,
      type: "consonant",
      description: "Casi siempre seguida de 'u', pronunciada [kw]"
    },
    {
      letter: "R",
      lowercase: "r",
      pronunciation: "[ɑːr]",
      spanish: "ar",
      examples: [
        { word: "red", spanish: "rojo", pronunciation: "[red]" },
        { word: "important", spanish: "importante", pronunciation: "[ɪmˈpɔː.tənt]" },
        { word: "car", spanish: "coche", pronunciation: "[kɑːr]" }
      ],
      position: 18,
      type: "consonant",
      description: "R inglesa muy diferente a la española",
      types: [
        { type: "American R", description: "retrofleja", characteristic: "lengua curvada hacia atrás" },
        { type: "British R", description: "solo se pronuncia antes de vocal", characteristic: "muda al final" }
      ]
    },
    {
      letter: "S",
      lowercase: "s",
      pronunciation: "[es]",
      spanish: "es",
      examples: [
        { word: "school", spanish: "escuela", pronunciation: "[skuːl]" },
        { word: "music", spanish: "música", pronunciation: "[ˈmjuː.zɪk]" },
        { word: "house", spanish: "casa", pronunciation: "[haʊs]" }
      ],
      position: 19,
      type: "consonant",
      description: "Puede sonar [s] o [z] según contexto",
      rules: [
        { rule: "s inicial = [s]", example: "school, see" },
        { rule: "s entre vocales = [z] (a veces)", example: "music, rose" },
        { rule: "s final después de sonora = [z]", example: "dogs, beds" },
        { rule: "s final después de sorda = [s]", example: "cats, books" }
      ]
    },
    {
      letter: "T",
      lowercase: "t",
      pronunciation: "[tiː]",
      spanish: "ti",
      examples: [
        { word: "table", spanish: "mesa", pronunciation: "[ˈteɪ.bəl]" },
        { word: "water", spanish: "agua", pronunciation: "[ˈwɔː.tər]" },
        { word: "night", spanish: "noche", pronunciation: "[naɪt]" }
      ],
      position: 20,
      type: "consonant",
      description: "Consonante dental oclusiva sorda",
      variations: [
        { variation: "aspirated T", context: "inicio de sílaba tónica", example: "table, time" },
        { variation: "flap T", context: "entre vocales (americano)", example: "water, better" },
        { variation: "silent T", context: "algunas palabras", example: "castle, listen" }
      ]
    },
    {
      letter: "U",
      lowercase: "u",
      pronunciation: "[juː]",
      spanish: "iu",
      examples: [
        { word: "university", spanish: "universidad", pronunciation: "[ˌjuː.nɪˈvɜː.sə.ti]" },
        { word: "but", spanish: "pero", pronunciation: "[bʌt]" },
        { word: "put", spanish: "poner", pronunciation: "[pʊt]" }
      ],
      position: 21,
      type: "vowel",
      description: "Vocal con pronunciación muy variable",
      sounds: [
        { sound: "[juː]", context: "u larga", example: "use, music, cute" },
        { sound: "[ʌ]", context: "u corta", example: "but, sun, cup" },
        { sound: "[ʊ]", context: "en algunas palabras", example: "put, full, could" },
        { sound: "[ə]", context: "átona", example: "support, success" }
      ]
    },
    {
      letter: "V",
      lowercase: "v",
      pronunciation: "[viː]",
      spanish: "vi",
      examples: [
        { word: "very", spanish: "muy", pronunciation: "[ˈver.i]" },
        { word: "love", spanish: "amor", pronunciation: "[lʌv]" },
        { word: "river", spanish: "río", pronunciation: "[ˈrɪv.ər]" }
      ],
      position: 22,
      type: "consonant",
      description: "Consonante labiodental fricativa sonora"
    },
    {
      letter: "W",
      lowercase: "w",
      pronunciation: "[ˈdʌb.əl.juː]",
      spanish: "doble iu",
      examples: [
        { word: "water", spanish: "agua", pronunciation: "[ˈwɔː.tər]" },
        { word: "write", spanish: "escribir", pronunciation: "[raɪt]" },
        { word: "two", spanish: "dos", pronunciation: "[tuː]" }
      ],
      position: 23,
      type: "consonant",
      description: "Semivocal [w], a veces muda",
      note: "Muda antes de 'r': write, wrong, wrap"
    },
    {
      letter: "X",
      lowercase: "x",
      pronunciation: "[eks]",
      spanish: "eks",
      examples: [
        { word: "box", spanish: "caja", pronunciation: "[bɒks]" },
        { word: "example", spanish: "ejemplo", pronunciation: "[ɪgˈzɑːm.pəl]" },
        { word: "exist", spanish: "existir", pronunciation: "[ɪgˈzɪst]" }
      ],
      position: 24,
      type: "consonant",
      description: "Pronunciación variable",
      sounds: [
        { sound: "[ks]", context: "final de palabra", example: "box, six" },
        { sound: "[gz]", context: "antes de vocal tónica", example: "example, exist" },
        { sound: "[z]", context: "inicial (raro)", example: "xylophone" }
      ]
    },
    {
      letter: "Y",
      lowercase: "y",
      pronunciation: "[waɪ]",
      spanish: "uai",
      examples: [
        { word: "yes", spanish: "sí", pronunciation: "[jes]" },
        { word: "happy", spanish: "feliz", pronunciation: "[ˈhæp.i]" },
        { word: "my", spanish: "mi", pronunciation: "[maɪ]" }
      ],
      position: 25,
      type: "vowel/consonant",
      description: "Puede funcionar como vocal o consonante",
      sounds: [
        { sound: "[j]", context: "inicial", example: "yes, young" },
        { sound: "[i]", context: "final átona", example: "happy, funny" },
        { sound: "[aɪ]", context: "final tónica", example: "my, fly" }
      ]
    },
    {
      letter: "Z",
      lowercase: "z",
      pronunciation: "[zed] / [ziː]",
      spanish: "zed/zi",
      examples: [
        { word: "zero", spanish: "cero", pronunciation: "[ˈzɪə.rəʊ]" },
        { word: "amazing", spanish: "increíble", pronunciation: "[əˈmeɪ.zɪŋ]" },
        { word: "quiz", spanish: "cuestionario", pronunciation: "[kwɪz]" }
      ],
      position: 26,
      type: "consonant",
      description: "Consonante alveolar fricativa sonora [z]",
      note: "Pronunciación del nombre: [zed] en británico, [ziː] en americano"
    }
  ],

  vowel_sounds: [
    {
      type: "Short vowels",
      description: "Vocales cortas del inglés",
      vowels: [
        { symbol: "[æ]", letter: "a", examples: "cat, bat, hat", spanish: "entre 'a' y 'e'" },
        { symbol: "[e]", letter: "e", examples: "pet, red, bed", spanish: "e abierta" },
        { symbol: "[ɪ]", letter: "i", examples: "sit, big, hit", spanish: "i relajada" },
        { symbol: "[ɒ]", letter: "o", examples: "hot, dog, top", spanish: "o abierta" },
        { symbol: "[ʌ]", letter: "u", examples: "but, sun, cup", spanish: "a central" },
        { symbol: "[ʊ]", letter: "u", examples: "put, good, book", spanish: "u relajada" }
      ]
    },
    {
      type: "Long vowels",
      description: "Vocales largas del inglés",
      vowels: [
        { symbol: "[iː]", spelling: "ee, ea, e", examples: "see, meat, me", spanish: "i larga" },
        { symbol: "[ɑː]", spelling: "ar, a", examples: "car, father", spanish: "a posterior larga" },
        { symbol: "[ɔː]", spelling: "or, aw, au", examples: "for, saw, caught", spanish: "o larga" },
        { symbol: "[uː]", spelling: "oo, u, ew", examples: "too, tune, few", spanish: "u larga" },
        { symbol: "[ɜː]", spelling: "er, ur, ir", examples: "her, turn, bird", spanish: "vocal central" }
      ]
    },
    {
      type: "Diphthongs",
      description: "Diptongos del inglés",
      diphthongs: [
        { symbol: "[eɪ]", spelling: "a, ai, ay", examples: "name, rain, day", spanish: "ei" },
        { symbol: "[aɪ]", spelling: "i, y, ie", examples: "time, my, tie", spanish: "ai" },
        { symbol: "[ɔɪ]", spelling: "oi, oy", examples: "coin, boy", spanish: "oi" },
        { symbol: "[aʊ]", spelling: "ou, ow", examples: "house, now", spanish: "au" },
        { symbol: "[əʊ]", spelling: "o, oa, ow", examples: "go, boat, show", spanish: "ou" },
        { symbol: "[ɪə]", spelling: "ear, eer", examples: "hear, beer", spanish: "ia" },
        { symbol: "[eə]", spelling: "air, are", examples: "hair, care", spanish: "ea" },
        { symbol: "[ʊə]", spelling: "ure, oor", examples: "pure, poor", spanish: "ua" }
      ]
    }
  ],

  spelling_patterns: [
    {
      pattern: "Silent letters",
      description: "Letras que no se pronuncian",
      examples: [
        { letter: "b", context: "después de m", words: "lamb, thumb, comb" },
        { letter: "l", context: "en algunas palabras", words: "half, walk, talk" },
        { letter: "k", context: "antes de n", words: "know, knife, knee" },
        { letter: "w", context: "antes de r", words: "write, wrong, wrap" },
        { letter: "t", context: "en algunas palabras", words: "castle, listen, whistle" },
        { letter: "h", context: "en algunas palabras", words: "hour, honest, honor" }
      ]
    },
    {
      pattern: "Double letters",
      description: "Consonantes dobles",
      rule: "Generalmente indican vocal corta anterior",
      examples: [
        { single: "hoping", double: "hopping", difference: "vocal larga vs corta" },
        { single: "writing", double: "written", difference: "vocal larga vs corta" },
        { single: "later", double: "latter", difference: "vocal larga vs corta" }
      ]
    },
    {
      pattern: "Magic E",
      description: "E final que cambia la pronunciación",
      rule: "Hace que la vocal anterior sea larga",
      examples: [
        { without_e: "cap [æ]", with_e: "cape [eɪ]" },
        { without_e: "bit [ɪ]", with_e: "bite [aɪ]" },
        { without_e: "not [ɒ]", with_e: "note [əʊ]" },
        { without_e: "cut [ʌ]", with_e: "cute [juː]" }
      ]
    }
  ],

  pronunciation_challenges: [
    {
      challenge: "TH sounds",
      description: "Sonidos únicos del inglés",
      sounds: [
        { sound: "[θ]", description: "th sorda", examples: "think, thank, mouth", tip: "lengua entre dientes, sin voz" },
        { sound: "[ð]", description: "th sonora", examples: "this, that, mother", tip: "lengua entre dientes, con voz" }
      ]
    },
    {
      challenge: "R sound",
      description: "R inglesa muy diferente",
      varieties: [
        { type: "American R", description: "retroflex", tip: "lengua curvada hacia atrás" },
        { type: "British R", description: "solo antes de vocal", tip: "no pronunciar R final" }
      ]
    },
    {
      challenge: "Schwa [ə]",
      description: "Vocal más común del inglés",
      explanation: "Vocal neutra en sílabas átonas",
      examples: ["about [əˈbaʊt]", "sofa [ˈsəʊfə]", "support [səˈpɔːt]"]
    },
    {
      challenge: "Word stress",
      description: "Acento de palabra muy importante",
      importance: "Cambia el significado y la comprensión",
      examples: [
        { word: "REcord", pos: "noun", meaning: "registro" },
        { word: "reCORD", pos: "verb", meaning: "grabar" },
        { word: "PREsent", pos: "noun", meaning: "regalo" },
        { word: "preSENT", pos: "verb", meaning: "presentar" }
      ]
    }
  ],

  regional_varieties: [
    {
      variety: "British English (RP)",
      characteristics: [
        "R no rótica (solo antes de vocal)",
        "Vocales más claras",
        "T más pronunciada"
      ],
      examples: [
        { word: "car", pronunciation: "[kɑː]", note: "sin R final" },
        { word: "letter", pronunciation: "[ˈletə]", note: "T clara" }
      ]
    },
    {
      variety: "American English",
      characteristics: [
        "R rótica (siempre se pronuncia)",
        "Flap T entre vocales",
        "Vocal [æ] más abierta"
      ],
      examples: [
        { word: "car", pronunciation: "[kɑːr]", note: "con R final" },
        { word: "water", pronunciation: "[ˈwɔːɾər]", note: "T como flap" }
      ]
    },
    {
      variety: "Australian English",
      characteristics: [
        "Diptongos muy marcados",
        "Entonación ascendente",
        "R no rótica"
      ],
      examples: [
        { word: "day", pronunciation: "[dɑɪ]", note: "diptongo modificado" }
      ]
    }
  ],

  learning_tips: [
    {
      tip: "Listen and repeat",
      description: "La pronunciación inglesa es irregular",
      advice: "Memoriza palabras con su pronunciación, no solo ortografía"
    },
    {
      tip: "Stress patterns",
      description: "El acento es crucial en inglés",
      advice: "Aprende el acento de cada palabra, cambia el significado"
    },
    {
      tip: "Connected speech",
      description: "Las palabras se conectan al hablar",
      features: ["linking", "elision", "assimilation"],
      example: "What do you want? → Whadayawant?"
    },
    {
      tip: "Minimal pairs",
      description: "Practica sonidos similares",
      examples: ["ship/sheep", "bit/beat", "thought/taught"]
    }
  ],

  cultural_notes: [
    {
      aspect: "Global language",
      note: "El inglés es el idioma más estudiado del mundo, con múltiples variedades estándar."
    },
    {
      aspect: "Spelling complexity",
      note: "La ortografía inglesa refleja su historia compleja, con influencias del germánico, latín, francés y otros idiomas."
    },
    {
      aspect: "Phonetic alphabet",
      note: "El inglés usa el alfabeto fonético internacional (IPA) para representar sus 44+ sonidos con solo 26 letras."
    },
    {
      aspect: "Technology",
      note: "El inglés domina la tecnología e internet, siendo el idioma principal de programación y comunicación digital."
    }
  ]
};
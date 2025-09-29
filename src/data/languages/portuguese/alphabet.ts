export const alphabet = {
  letters: [
    {
      letter: "A",
      lowercase: "a",
      pronunciation: "[a]",
      spanish: "a",
      examples: [
        { word: "amor", spanish: "amor", pronunciation: "[a-MOR]" },
        { word: "água", spanish: "agua", pronunciation: "[Á-gwa]" },
        { word: "amigo", spanish: "amigo", pronunciation: "[a-MI-gu]" }
      ],
      position: 1,
      type: "vowel",
      description: "Vocal central abierta, similar al español",
      variations: [
        { form: "á", sound: "[a]", description: "a con acento agudo", example: "está" },
        { form: "à", sound: "[a]", description: "a con acento grave", example: "à medida" },
        { form: "â", sound: "[ɐ]", description: "a con acento circunflejo", example: "âmbar" },
        { form: "ã", sound: "[ɐ̃]", description: "a nasal", example: "mão" }
      ]
    },
    {
      letter: "B",
      lowercase: "b",
      pronunciation: "[be]",
      spanish: "be",
      examples: [
        { word: "bem", spanish: "bien", pronunciation: "[bẽj̃]" },
        { word: "beber", spanish: "beber", pronunciation: "[be-BER]" },
        { word: "brasil", spanish: "Brasil", pronunciation: "[bra-ZIL]" }
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
        { word: "casa", spanish: "casa", pronunciation: "[KA-za]" },
        { word: "cidade", spanish: "ciudad", pronunciation: "[si-DA-de]" },
        { word: "coração", spanish: "corazón", pronunciation: "[ko-ra-SÃW̃]" }
      ],
      position: 3,
      type: "consonant",
      description: "Pronunciación variable según contexto",
      rules: [
        { rule: "c + a,o,u = [k]", example: "casa, como, cubo" },
        { rule: "c + e,i = [s]", example: "centro, cinema" },
        { rule: "ç + a,o,u = [s]", example: "ação, coração" }
      ]
    },
    {
      letter: "D",
      lowercase: "d",
      pronunciation: "[de]",
      spanish: "de",
      examples: [
        { word: "dar", spanish: "dar", pronunciation: "[DAR]" },
        { word: "dia", spanish: "día", pronunciation: "[DI-a] o [ʤI-a]" },
        { word: "cidade", spanish: "ciudad", pronunciation: "[si-DA-de]" }
      ],
      position: 4,
      type: "consonant",
      description: "Puede palatalizarse antes de 'i'",
      regional: "En Brasil: di = [ʤi], en Portugal: di = [di]"
    },
    {
      letter: "E",
      lowercase: "e",
      pronunciation: "[e]",
      spanish: "e",
      examples: [
        { word: "ele", spanish: "él", pronunciation: "[E-le]" },
        { word: "pé", spanish: "pie", pronunciation: "[pɛ]" },
        { word: "mesa", spanish: "mesa", pronunciation: "[ME-za]" }
      ],
      position: 5,
      type: "vowel",
      description: "Vocal anterior media",
      variations: [
        { form: "é", sound: "[ɛ]", description: "e abierta con acento", example: "café" },
        { form: "ê", sound: "[e]", description: "e cerrada con acento", example: "você" },
        { form: "ë", sound: "[e]", description: "e con diéresis (raro)", example: "Müller" }
      ]
    },
    {
      letter: "F",
      lowercase: "f",
      pronunciation: "[ɛ-fe]",
      spanish: "efe",
      examples: [
        { word: "fazer", spanish: "hacer", pronunciation: "[fa-ZER]" },
        { word: "família", spanish: "familia", pronunciation: "[fa-MÍ-lja]" },
        { word: "café", spanish: "café", pronunciation: "[ka-FÉ]" }
      ],
      position: 6,
      type: "consonant",
      description: "Consonante labiodental fricativa sorda"
    },
    {
      letter: "G",
      lowercase: "g",
      pronunciation: "[ʒe]",
      spanish: "gue",
      examples: [
        { word: "gato", spanish: "gato", pronunciation: "[GA-tu]" },
        { word: "gente", spanish: "gente", pronunciation: "[ʒẽ-te]" },
        { word: "água", spanish: "agua", pronunciation: "[Á-gwa]" }
      ],
      position: 7,
      type: "consonant",
      description: "Pronunciación variable según contexto",
      rules: [
        { rule: "g + a,o,u = [g]", example: "gato, gola, gula" },
        { rule: "g + e,i = [ʒ]", example: "gente, girafa" },
        { rule: "gu + e,i = [g]", example: "guerra, guitarra" }
      ]
    },
    {
      letter: "H",
      lowercase: "h",
      pronunciation: "[a-GA]",
      spanish: "hache",
      examples: [
        { word: "homem", spanish: "hombre", pronunciation: "[O-mẽj̃]" },
        { word: "hora", spanish: "hora", pronunciation: "[O-ra]" },
        { word: "hospital", spanish: "hospital", pronunciation: "[os-pi-TAL]" }
      ],
      position: 8,
      type: "consonant",
      description: "Siempre muda en portugués",
      note: "Solo aparece al inicio de palabra o en dígrafos (ch, lh, nh)"
    },
    {
      letter: "I",
      lowercase: "i",
      pronunciation: "[i]",
      spanish: "i",
      examples: [
        { word: "ilha", spanish: "isla", pronunciation: "[I-ʎa]" },
        { word: "importante", spanish: "importante", pronunciation: "[ĩ-por-TÃ-te]" },
        { word: "Brasil", spanish: "Brasil", pronunciation: "[bra-ZIL]" }
      ],
      position: 9,
      type: "vowel",
      description: "Vocal anterior cerrada",
      variations: [
        { form: "í", sound: "[i]", description: "i con acento agudo", example: "aí" },
        { form: "ĩ", sound: "[ĩ]", description: "i nasal (no escrita)", example: "sim" }
      ]
    },
    {
      letter: "J",
      lowercase: "j",
      pronunciation: "[ʒo-ta]",
      spanish: "jota",
      examples: [
        { word: "já", spanish: "ya", pronunciation: "[ʒA]" },
        { word: "janeiro", spanish: "enero", pronunciation: "[ʒa-NEJ-ru]" },
        { word: "jogo", spanish: "juego", pronunciation: "[ʒO-gu]" }
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
        { word: "kilo", spanish: "kilo", pronunciation: "[KI-lu]" },
        { word: "karaokê", spanish: "karaoke", pronunciation: "[ka-ra-o-KE]" },
        { word: "kayak", spanish: "kayak", pronunciation: "[ka-JAK]" }
      ],
      position: 11,
      type: "consonant",
      description: "Poco frecuente, principalmente en palabras extranjeras"
    },
    {
      letter: "L",
      lowercase: "l",
      pronunciation: "[ɛ-le]",
      spanish: "ele",
      examples: [
        { word: "lua", spanish: "luna", pronunciation: "[LU-a]" },
        { word: "leite", spanish: "leche", pronunciation: "[LEJ-te]" },
        { word: "Brasil", spanish: "Brasil", pronunciation: "[bra-ZIL]" }
      ],
      position: 12,
      type: "consonant",
      description: "Consonante lateral alveolar",
      note: "En Brasil, 'l' final se pronuncia [w]: Brasil [bra-ZIW]"
    },
    {
      letter: "M",
      lowercase: "m",
      pronunciation: "[ɛ-me]",
      spanish: "eme",
      examples: [
        { word: "mãe", spanish: "madre", pronunciation: "[mɐ̃j̃]" },
        { word: "muito", spanish: "mucho", pronunciation: "[MUJ-tu]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TẽM-pu]" }
      ],
      position: 13,
      type: "consonant",
      description: "Consonante bilabial nasal, puede nasalizar vocales"
    },
    {
      letter: "N",
      lowercase: "n",
      pronunciation: "[ɛ-ne]",
      spanish: "ene",
      examples: [
        { word: "não", spanish: "no", pronunciation: "[nɐ̃w̃]" },
        { word: "nome", spanish: "nombre", pronunciation: "[NO-me]" },
        { word: "quando", spanish: "cuando", pronunciation: "[KWɐ̃-du]" }
      ],
      position: 14,
      type: "consonant",
      description: "Consonante alveolar nasal, puede nasalizar vocales"
    },
    {
      letter: "O",
      lowercase: "o",
      pronunciation: "[o]",
      spanish: "o",
      examples: [
        { word: "olá", spanish: "hola", pronunciation: "[o-LÁ]" },
        { word: "coração", spanish: "corazón", pronunciation: "[ko-ra-SÃW̃]" },
        { word: "novo", spanish: "nuevo", pronunciation: "[NO-vu]" }
      ],
      position: 15,
      type: "vowel",
      description: "Vocal posterior media redondeada",
      variations: [
        { form: "ó", sound: "[ɔ]", description: "o abierta con acento", example: "só" },
        { form: "ô", sound: "[o]", description: "o cerrada con acento", example: "avô" },
        { form: "õ", sound: "[õ]", description: "o nasal", example: "não" }
      ]
    },
    {
      letter: "P",
      lowercase: "p",
      pronunciation: "[pe]",
      spanish: "pe",
      examples: [
        { word: "pai", spanish: "padre", pronunciation: "[PAJ]" },
        { word: "português", spanish: "portugués", pronunciation: "[por-tu-GES]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TẽM-pu]" }
      ],
      position: 16,
      type: "consonant",
      description: "Consonante bilabial oclusiva sorda"
    },
    {
      letter: "Q",
      lowercase: "q",
      pronunciation: "[ke]",
      spanish: "cu",
      examples: [
        { word: "que", spanish: "que", pronunciation: "[ke]" },
        { word: "quando", spanish: "cuando", pronunciation: "[KWɐ̃-du]" },
        { word: "quatro", spanish: "cuatro", pronunciation: "[KWA-tru]" }
      ],
      position: 17,
      type: "consonant",
      description: "Siempre seguida de 'u', forma [k] o [kw]"
    },
    {
      letter: "R",
      lowercase: "r",
      pronunciation: "[ɛ-he]",
      spanish: "erre",
      examples: [
        { word: "rosa", spanish: "rosa", pronunciation: "[HO-za]" },
        { word: "carro", spanish: "coche", pronunciation: "[KA-hu]" },
        { word: "partir", spanish: "partir", pronunciation: "[par-TIR]" }
      ],
      position: 18,
      type: "consonant",
      description: "R múltiple inicial y RR = [h], R simple = [ɾ]",
      rules: [
        { rule: "r inicial = [h]", example: "rosa, rio" },
        { rule: "rr = [h]", example: "carro, terra" },
        { rule: "r simple = [ɾ]", example: "caro, partir" }
      ]
    },
    {
      letter: "S",
      lowercase: "s",
      pronunciation: "[ɛ-se]",
      spanish: "ese",
      examples: [
        { word: "sim", spanish: "sí", pronunciation: "[sĩ]" },
        { word: "casa", spanish: "casa", pronunciation: "[KA-za]" },
        { word: "português", spanish: "portugués", pronunciation: "[por-tu-GES]" }
      ],
      position: 19,
      type: "consonant",
      description: "Pronunciación variable según posición",
      rules: [
        { rule: "s inicial = [s]", example: "sim, sol" },
        { rule: "s entre vocales = [z]", example: "casa, rosa" },
        { rule: "s final = [s] o [ʃ]", example: "português [ʃ]" }
      ]
    },
    {
      letter: "T",
      lowercase: "t",
      pronunciation: "[te]",
      spanish: "te",
      examples: [
        { word: "tu", spanish: "tú", pronunciation: "[tu]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TẽM-pu]" },
        { word: "noite", spanish: "noche", pronunciation: "[NOJ-te] o [NOJ-ʧe]" }
      ],
      position: 20,
      type: "consonant",
      description: "Puede palatalizarse antes de 'i'",
      regional: "En Brasil: ti = [ʧi], en Portugal: ti = [ti]"
    },
    {
      letter: "U",
      lowercase: "u",
      pronunciation: "[u]",
      spanish: "u",
      examples: [
        { word: "uma", spanish: "una", pronunciation: "[U-ma]" },
        { word: "português", spanish: "portugués", pronunciation: "[por-tu-GES]" },
        { word: "lugar", spanish: "lugar", pronunciation: "[lu-GAR]" }
      ],
      position: 21,
      type: "vowel",
      description: "Vocal posterior cerrada redondeada",
      variations: [
        { form: "ú", sound: "[u]", description: "u con acento agudo", example: "saúde" },
        { form: "ü", sound: "[u]", description: "u con diéresis (raro)", example: "freqüente" }
      ]
    },
    {
      letter: "V",
      lowercase: "v",
      pronunciation: "[ve]",
      spanish: "ve",
      examples: [
        { word: "você", spanish: "usted/tú", pronunciation: "[vo-SE]" },
        { word: "vida", spanish: "vida", pronunciation: "[VI-da]" },
        { word: "novo", spanish: "nuevo", pronunciation: "[NO-vu]" }
      ],
      position: 22,
      type: "consonant",
      description: "Consonante labiodental fricativa sonora"
    },
    {
      letter: "W",
      lowercase: "w",
      pronunciation: "[da-bliu]",
      spanish: "doble u",
      examples: [
        { word: "web", spanish: "web", pronunciation: "[WEB]" },
        { word: "windsurfing", spanish: "windsurf", pronunciation: "[wind-SUR-fing]" },
        { word: "walkman", spanish: "walkman", pronunciation: "[WALK-man]" }
      ],
      position: 23,
      type: "consonant",
      description: "Poco frecuente, principalmente en palabras extranjeras"
    },
    {
      letter: "X",
      lowercase: "x",
      pronunciation: "[ʃis]",
      spanish: "equis",
      examples: [
        { word: "axé", spanish: "axé", pronunciation: "[a-ʃE]" },
        { word: "próximo", spanish: "próximo", pronunciation: "[PRÓ-ksi-mu]" },
        { word: "exame", spanish: "examen", pronunciation: "[e-ZÃ-me]" }
      ],
      position: 24,
      type: "consonant",
      description: "Pronunciación muy variable",
      rules: [
        { rule: "x inicial = [ʃ]", example: "xícara, xadrez" },
        { rule: "x entre vocales = [ʃ] o [ks]", example: "caixa [ʃ], táxi [ks]" },
        { rule: "ex + vocal = [z]", example: "exame, exemplo" }
      ]
    },
    {
      letter: "Y",
      lowercase: "y",
      pronunciation: "[íp-si-lon]",
      spanish: "i griega",
      examples: [
        { word: "yakisoba", spanish: "yakisoba", pronunciation: "[ja-ki-SO-ba]" },
        { word: "yoga", spanish: "yoga", pronunciation: "[IO-ga]" },
        { word: "nylon", spanish: "nailon", pronunciation: "[naj-LON]" }
      ],
      position: 25,
      type: "vowel",
      description: "Poco frecuente, principalmente en palabras extranjeras"
    },
    {
      letter: "Z",
      lowercase: "z",
      pronunciation: "[ze]",
      spanish: "zeta",
      examples: [
        { word: "zero", spanish: "cero", pronunciation: "[ZE-ru]" },
        { word: "fazer", spanish: "hacer", pronunciation: "[fa-ZER]" },
        { word: "feliz", spanish: "feliz", pronunciation: "[fe-LIS]" }
      ],
      position: 26,
      type: "consonant",
      description: "Consonante alveolar fricativa sonora [z]"
    }
  ],

  digraphs: [
    {
      digraph: "CH",
      pronunciation: "[ʃ]",
      description: "Como 'sh' inglesa",
      examples: [
        { word: "chá", spanish: "té", pronunciation: "[ʃA]" },
        { word: "chuva", spanish: "lluvia", pronunciation: "[ʃU-va]" },
        { word: "achar", spanish: "encontrar", pronunciation: "[a-ʃAR]" }
      ]
    },
    {
      digraph: "LH",
      pronunciation: "[ʎ]",
      description: "Como 'll' española en 'llama'",
      examples: [
        { word: "filho", spanish: "hijo", pronunciation: "[FI-ʎu]" },
        { word: "mulher", spanish: "mujer", pronunciation: "[mu-ʎER]" },
        { word: "trabalho", spanish: "trabajo", pronunciation: "[tra-BA-ʎu]" }
      ]
    },
    {
      digraph: "NH",
      pronunciation: "[ɲ]",
      description: "Como 'ñ' española",
      examples: [
        { word: "manhã", spanish: "mañana", pronunciation: "[ma-ɲÃ]" },
        { word: "sonho", spanish: "sueño", pronunciation: "[SO-ɲu]" },
        { word: "vinho", spanish: "vino", pronunciation: "[VI-ɲu]" }
      ]
    }
  ],

  nasal_vowels: [
    {
      vowel: "ã",
      pronunciation: "[ɐ̃]",
      description: "A nasal",
      examples: [
        { word: "mão", spanish: "mano", pronunciation: "[mɐ̃w̃]" },
        { word: "irmã", spanish: "hermana", pronunciation: "[ir-mɐ̃]" },
        { word: "manhã", spanish: "mañana", pronunciation: "[ma-ɲɐ̃]" }
      ]
    },
    {
      vowel: "ẽ",
      pronunciation: "[ẽ]",
      description: "E nasal",
      examples: [
        { word: "bem", spanish: "bien", pronunciation: "[bẽj̃]" },
        { word: "tempo", spanish: "tiempo", pronunciation: "[TẽM-pu]" },
        { word: "gente", spanish: "gente", pronunciation: "[ʒẽ-te]" }
      ]
    },
    {
      vowel: "ĩ",
      pronunciation: "[ĩ]",
      description: "I nasal",
      examples: [
        { word: "sim", spanish: "sí", pronunciation: "[sĩ]" },
        { word: "importante", spanish: "importante", pronunciation: "[ĩ-por-TÃ-te]" },
        { word: "jardim", spanish: "jardín", pronunciation: "[ʒar-DĨ]" }
      ]
    },
    {
      vowel: "õ",
      pronunciation: "[õ]",
      description: "O nasal",
      examples: [
        { word: "não", spanish: "no", pronunciation: "[nɐ̃w̃]" },
        { word: "coração", spanish: "corazón", pronunciation: "[ko-ra-SÃW̃]" },
        { word: "limão", spanish: "limón", pronunciation: "[li-MÃW̃]" }
      ]
    },
    {
      vowel: "ũ",
      pronunciation: "[ũ]",
      description: "U nasal",
      examples: [
        { word: "um", spanish: "un", pronunciation: "[ũ]" },
        { word: "algum", spanish: "algún", pronunciation: "[al-GŨ]" },
        { word: "comum", spanish: "común", pronunciation: "[ko-MŨ]" }
      ]
    }
  ],

  brazilian_vs_european: [
    {
      feature: "Pronunciación de 'R'",
      brazilian: "R inicial y RR = [h] (aspirada)",
      european: "R inicial y RR = [r] (vibrante múltiple)",
      examples: [
        { word: "rato", brazilian: "[HA-tu]", european: "[RA-tu]" },
        { word: "carro", brazilian: "[KA-hu]", european: "[KA-ru]" }
      ]
    },
    {
      feature: "Palatalizacion de T y D",
      brazilian: "Ti = [ʧi], Di = [ʤi]",
      european: "Ti = [ti], Di = [di]",
      examples: [
        { word: "tipo", brazilian: "[ʧI-pu]", european: "[TI-pu]" },
        { word: "dia", brazilian: "[ʤI-a]", european: "[DI-a]" }
      ]
    },
    {
      feature: "L final",
      brazilian: "L final = [w]",
      european: "L final = [l]",
      examples: [
        { word: "Brasil", brazilian: "[bra-ZIW]", european: "[bra-ZIL]" },
        { word: "final", brazilian: "[fi-NAW]", european: "[fi-NAL]" }
      ]
    },
    {
      feature: "S final",
      brazilian: "S final = [s]",
      european: "S final = [ʃ]",
      examples: [
        { word: "português", brazilian: "[por-tu-GES]", european: "[por-tu-GEʃ]" },
        { word: "mais", brazilian: "[majs]", european: "[majʃ]" }
      ]
    }
  ],

  accent_rules: [
    {
      rule: "Palavras oxítonas",
      description: "Acento en última sílaba",
      accent_when: "Terminan en a, e, o, em, ens",
      examples: ["Pa-rá", "vo-CÊ", "a-VÔ", "tam-BÉM", "pa-ra-BÉNS"]
    },
    {
      rule: "Palavras paroxítonas",
      description: "Acento en penúltima sílaba",
      accent_when: "NO terminan en a, e, o, em, ens",
      examples: ["Á-gua", "fá-CIL", "ú-TIL", "ÍM-peto"]
    },
    {
      rule: "Palavras proparoxítonas",
      description: "Acento en antepenúltima sílaba",
      accent_when: "Siempre llevan acento",
      examples: ["MÉ-di-co", "Á-to-mo", "prá-TI-co"]
    }
  ],

  learning_tips: [
    {
      tip: "Vocales nasales",
      description: "Únicas del portugués, se nasalizan por m/n siguientes",
      practice: "Pronuncia la vocal dejando salir aire por la nariz"
    },
    {
      tip: "R brasileña",
      description: "Suena como 'j' española en 'jamón'",
      practice: "Como hacer gárgaras suaves"
    },
    {
      tip: "X variable",
      description: "La X tiene 4 sonidos diferentes según contexto",
      practice: "Memorizar las reglas de posición: inicial [ʃ], ex- [z], etc."
    },
    {
      tip: "Consonantes finales",
      description: "Muchas consonantes finales se modifican o no se pronuncian",
      practice: "L final = [w], S final = [s] o [ʃ] según variante"
    }
  ],

  cultural_notes: [
    {
      aspect: "Variantes",
      note: "El portugués brasileño y europeo tienen diferencias significativas de pronunciación, pero la ortografía es similar."
    },
    {
      aspect: "Historia",
      note: "El portugués evolucionó del latín vulgar. El Acordo Ortográfico de 1990 unificó la ortografía entre países lusófonos."
    },
    {
      aspect: "PALOP",
      note: "Países Africanos de Língua Oficial Portuguesa: Angola, Cabo Verde, Guinea-Bissau, Mozambique, São Tomé e Príncipe."
    },
    {
      aspect: "Música",
      note: "La musicalidad del portugués, especialmente en el fado y la bossa nova, refleja su riqueza fonética con vocales nasales y consonantes suaves."
    }
  ]
};
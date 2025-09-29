export const alphabet = {
  letters: [
    {
      letter: "А",
      lowercase: "а",
      pronunciation: "[a]",
      spanish: "a",
      examples: [
        { word: "мама", spanish: "mamá", pronunciation: "[MA-ma]", transliteration: "mama" },
        { word: "астрономия", spanish: "astronomía", pronunciation: "[as-tro-NO-mi-ja]", transliteration: "astronomiya" },
        { word: "автобус", spanish: "autobús", pronunciation: "[af-TO-bus]", transliteration: "avtobus" }
      ],
      position: 1,
      type: "vowel",
      description: "Vocal central abierta, idéntica al español"
    },
    {
      letter: "Б",
      lowercase: "б",
      pronunciation: "[b]",
      spanish: "b",
      examples: [
        { word: "брат", spanish: "hermano", pronunciation: "[brat]", transliteration: "brat" },
        { word: "библиотека", spanish: "biblioteca", pronunciation: "[bib-li-o-TE-ka]", transliteration: "biblioteka" },
        { word: "работа", spanish: "trabajo", pronunciation: "[ra-BO-ta]", transliteration: "rabota" }
      ],
      position: 2,
      type: "consonant",
      description: "Consonante bilabial oclusiva sonora"
    },
    {
      letter: "В",
      lowercase: "в",
      pronunciation: "[v]",
      spanish: "v",
      examples: [
        { word: "вода", spanish: "agua", pronunciation: "[va-DA]", transliteration: "voda" },
        { word: "время", spanish: "tiempo", pronunciation: "[VRE-mja]", transliteration: "vremya" },
        { word: "восемь", spanish: "ocho", pronunciation: "[VO-sim']", transliteration: "vosem'" }
      ],
      position: 3,
      type: "consonant",
      description: "Consonante labiodental fricativa sonora"
    },
    {
      letter: "Г",
      lowercase: "г",
      pronunciation: "[g]",
      spanish: "g",
      examples: [
        { word: "город", spanish: "ciudad", pronunciation: "[GO-rat]", transliteration: "gorod" },
        { word: "география", spanish: "geografía", pronunciation: "[gi-a-GRA-fi-ja]", transliteration: "geografiya" },
        { word: "богатый", spanish: "rico", pronunciation: "[ba-GA-tïy]", transliteration: "bogatyy" }
      ],
      position: 4,
      type: "consonant",
      description: "Consonante velar oclusiva sonora",
      note: "Se ensordece a [k] al final de palabra"
    },
    {
      letter: "Д",
      lowercase: "д",
      pronunciation: "[d]",
      spanish: "d",
      examples: [
        { word: "дом", spanish: "casa", pronunciation: "[dom]", transliteration: "dom" },
        { word: "день", spanish: "día", pronunciation: "[den']", transliteration: "den'" },
        { word: "детство", spanish: "infancia", pronunciation: "[DET-stva]", transliteration: "detstvo" }
      ],
      position: 5,
      type: "consonant",
      description: "Consonante dental oclusiva sonora",
      note: "Se ensordece a [t] al final de palabra"
    },
    {
      letter: "Е",
      lowercase: "е",
      pronunciation: "[je] / [e]",
      spanish: "ie/e",
      examples: [
        { word: "есть", spanish: "comer/haber", pronunciation: "[jest']", transliteration: "yest'" },
        { word: "место", spanish: "lugar", pronunciation: "[MES-ta]", transliteration: "mesto" },
        { word: "зелёный", spanish: "verde", pronunciation: "[zi-LO-nïy]", transliteration: "zelyonyy" }
      ],
      position: 6,
      type: "vowel",
      description: "Vocal iotizada, puede palatizar consonantes anteriores"
    },
    {
      letter: "Ё",
      lowercase: "ё",
      pronunciation: "[jo] / [o]",
      spanish: "io/o",
      examples: [
        { word: "ёлка", spanish: "abeto", pronunciation: "[JOL-ka]", transliteration: "yolka" },
        { word: "всё", spanish: "todo", pronunciation: "[fso]", transliteration: "vsyo" },
        { word: "ёж", spanish: "erizo", pronunciation: "[josh]", transliteration: "yozh" }
      ],
      position: 7,
      type: "vowel",
      description: "Vocal iotizada, siempre acentuada",
      note: "A menudo se escribe como 'е' sin los puntos"
    },
    {
      letter: "Ж",
      lowercase: "ж",
      pronunciation: "[ʐ]",
      spanish: "zh",
      examples: [
        { word: "жить", spanish: "vivir", pronunciation: "[zhit']", transliteration: "zhit'" },
        { word: "жена", spanish: "esposa", pronunciation: "[zhi-NA]", transliteration: "zhena" },
        { word: "можно", spanish: "se puede", pronunciation: "[MOZH-na]", transliteration: "mozhno" }
      ],
      position: 8,
      type: "consonant",
      description: "Consonante fricativa retroflex sonora, siempre dura"
    },
    {
      letter: "З",
      lowercase: "з",
      pronunciation: "[z]",
      spanish: "z",
      examples: [
        { word: "здесь", spanish: "aquí", pronunciation: "[zdes']", transliteration: "zdes'" },
        { word: "зима", spanish: "invierno", pronunciation: "[zi-MA]", transliteration: "zima" },
        { word: "музыка", spanish: "música", pronunciation: "[MU-zï-ka]", transliteration: "muzyka" }
      ],
      position: 9,
      type: "consonant",
      description: "Consonante alveolar fricativa sonora",
      note: "Se ensordece a [s] al final de palabra"
    },
    {
      letter: "И",
      lowercase: "и",
      pronunciation: "[i]",
      spanish: "i",
      examples: [
        { word: "имя", spanish: "nombre", pronunciation: "[I-mja]", transliteration: "imya" },
        { word: "история", spanish: "historia", pronunciation: "[is-TO-ri-ja]", transliteration: "istoriya" },
        { word: "машина", spanish: "coche", pronunciation: "[ma-SHI-na]", transliteration: "mashina" }
      ],
      position: 10,
      type: "vowel",
      description: "Vocal anterior cerrada, palatiza consonantes anteriores"
    },
    {
      letter: "Й",
      lowercase: "й",
      pronunciation: "[j]",
      spanish: "i corta",
      examples: [
        { word: "мой", spanish: "mi", pronunciation: "[moy]", transliteration: "moy" },
        { word: "тайна", spanish: "secreto", pronunciation: "[TAY-na]", transliteration: "tayna" },
        { word: "музей", spanish: "museo", pronunciation: "[mu-ZEY]", transliteration: "muzey" }
      ],
      position: 11,
      type: "consonant",
      description: "Semivocal palatal, como 'y' inglesa"
    },
    {
      letter: "К",
      lowercase: "к",
      pronunciation: "[k]",
      spanish: "k",
      examples: [
        { word: "как", spanish: "cómo", pronunciation: "[kak]", transliteration: "kak" },
        { word: "книга", spanish: "libro", pronunciation: "[KNIGA]", transliteration: "kniga" },
        { word: "москва", spanish: "Moscú", pronunciation: "[mask-VA]", transliteration: "moskva" }
      ],
      position: 12,
      type: "consonant",
      description: "Consonante velar oclusiva sorda"
    },
    {
      letter: "Л",
      lowercase: "л",
      pronunciation: "[l] / [l']",
      spanish: "l",
      examples: [
        { word: "любить", spanish: "amar", pronunciation: "[lju-BIT']", transliteration: "lyubit'" },
        { word: "люди", spanish: "gente", pronunciation: "[LJU-di]", transliteration: "lyudi" },
        { word: "стол", spanish: "mesa", pronunciation: "[stol]", transliteration: "stol" }
      ],
      position: 13,
      type: "consonant",
      description: "Consonante lateral, puede ser dura [l] o blanda [l']"
    },
    {
      letter: "М",
      lowercase: "м",
      pronunciation: "[m]",
      spanish: "m",
      examples: [
        { word: "мама", spanish: "mamá", pronunciation: "[MA-ma]", transliteration: "mama" },
        { word: "молоко", spanish: "leche", pronunciation: "[ma-la-KO]", transliteration: "moloko" },
        { word: "месяц", spanish: "mes", pronunciation: "[ME-sjats]", transliteration: "mesyats" }
      ],
      position: 14,
      type: "consonant",
      description: "Consonante bilabial nasal"
    },
    {
      letter: "Н",
      lowercase: "н",
      pronunciation: "[n] / [n']",
      spanish: "n",
      examples: [
        { word: "нет", spanish: "no", pronunciation: "[net]", transliteration: "net" },
        { word: "ночь", spanish: "noche", pronunciation: "[noch']", transliteration: "noch'" },
        { word: "новый", spanish: "nuevo", pronunciation: "[NO-vïy]", transliteration: "novyy" }
      ],
      position: 15,
      type: "consonant",
      description: "Consonante alveolar nasal, puede ser dura [n] o blanda [n']"
    },
    {
      letter: "О",
      lowercase: "о",
      pronunciation: "[o] / [a]",
      spanish: "o/a",
      examples: [
        { word: "он", spanish: "él", pronunciation: "[on]", transliteration: "on" },
        { word: "молоко", spanish: "leche", pronunciation: "[ma-la-KO]", transliteration: "moloko" },
        { word: "хорошо", spanish: "bien", pronunciation: "[kha-ra-SHO]", transliteration: "khorosho" }
      ],
      position: 16,
      type: "vowel",
      description: "Vocal posterior redondeada, se reduce a [a] cuando no está acentuada"
    },
    {
      letter: "П",
      lowercase: "п",
      pronunciation: "[p]",
      spanish: "p",
      examples: [
        { word: "папа", spanish: "papá", pronunciation: "[PA-pa]", transliteration: "papa" },
        { word: "просто", spanish: "simplemente", pronunciation: "[PROS-ta]", transliteration: "prosto" },
        { word: "спасибо", spanish: "gracias", pronunciation: "[spa-SI-ba]", transliteration: "spasibo" }
      ],
      position: 17,
      type: "consonant",
      description: "Consonante bilabial oclusiva sorda"
    },
    {
      letter: "Р",
      lowercase: "р",
      pronunciation: "[r]",
      spanish: "r",
      examples: [
        { word: "русский", spanish: "ruso", pronunciation: "[RUS-kiy]", transliteration: "russkiy" },
        { word: "работа", spanish: "trabajo", pronunciation: "[ra-BO-ta]", transliteration: "rabota" },
        { word: "говорить", spanish: "hablar", pronunciation: "[ga-va-RIT']", transliteration: "govorit'" }
      ],
      position: 18,
      type: "consonant",
      description: "R vibrante múltiple, similar al español"
    },
    {
      letter: "С",
      lowercase: "с",
      pronunciation: "[s]",
      spanish: "s",
      examples: [
        { word: "слово", spanish: "palabra", pronunciation: "[SLO-va]", transliteration: "slovo" },
        { word: "сегодня", spanish: "hoy", pronunciation: "[si-VOD-nja]", transliteration: "segodnya" },
        { word: "спасибо", spanish: "gracias", pronunciation: "[spa-SI-ba]", transliteration: "spasibo" }
      ],
      position: 19,
      type: "consonant",
      description: "Consonante alveolar fricativa sorda"
    },
    {
      letter: "Т",
      lowercase: "т",
      pronunciation: "[t]",
      spanish: "t",
      examples: [
        { word: "там", spanish: "allí", pronunciation: "[tam]", transliteration: "tam" },
        { word: "только", spanish: "solo", pronunciation: "[TOL'-ka]", transliteration: "tol'ko" },
        { word: "работать", spanish: "trabajar", pronunciation: "[ra-BO-tat']", transliteration: "rabotat'" }
      ],
      position: 20,
      type: "consonant",
      description: "Consonante dental oclusiva sorda"
    },
    {
      letter: "У",
      lowercase: "у",
      pronunciation: "[u]",
      spanish: "u",
      examples: [
        { word: "утром", spanish: "por la mañana", pronunciation: "[UT-ram]", transliteration: "utrom" },
        { word: "русский", spanish: "ruso", pronunciation: "[RUS-kiy]", transliteration: "russkiy" },
        { word: "хочу", spanish: "quiero", pronunciation: "[kha-CHU]", transliteration: "khochu" }
      ],
      position: 21,
      type: "vowel",
      description: "Vocal posterior cerrada redondeada"
    },
    {
      letter: "Ф",
      lowercase: "ф",
      pronunciation: "[f]",
      spanish: "f",
      examples: [
        { word: "фильм", spanish: "película", pronunciation: "[fil'm]", transliteration: "fil'm" },
        { word: "философия", spanish: "filosofía", pronunciation: "[fi-la-SO-fi-ja]", transliteration: "filosofiya" },
        { word: "кафе", spanish: "café", pronunciation: "[ka-FE]", transliteration: "kafe" }
      ],
      position: 22,
      type: "consonant",
      description: "Consonante labiodental fricativa sorda"
    },
    {
      letter: "Х",
      lowercase: "х",
      pronunciation: "[x]",
      spanish: "j",
      examples: [
        { word: "хорошо", spanish: "bien", pronunciation: "[kha-ra-SHO]", transliteration: "khorosho" },
        { word: "хлеб", spanish: "pan", pronunciation: "[khleb]", transliteration: "khleb" },
        { word: "тихо", spanish: "silenciosamente", pronunciation: "[TI-kha]", transliteration: "tikho" }
      ],
      position: 23,
      type: "consonant",
      description: "Consonante velar fricativa sorda, como 'j' española"
    },
    {
      letter: "Ц",
      lowercase: "ц",
      pronunciation: "[ts]",
      spanish: "ts",
      examples: [
        { word: "цвет", spanish: "color", pronunciation: "[tsvet]", transliteration: "tsvet" },
        { word: "центр", spanish: "centro", pronunciation: "[tsentr]", transliteration: "tsentr" },
        { word: "отец", spanish: "padre", pronunciation: "[a-TETS]", transliteration: "otets" }
      ],
      position: 24,
      type: "consonant",
      description: "Consonante africada alveolar sorda, siempre dura"
    },
    {
      letter: "Ч",
      lowercase: "ч",
      pronunciation: "[tʃ]",
      spanish: "ch",
      examples: [
        { word: "час", spanish: "hora", pronunciation: "[chas]", transliteration: "chas" },
        { word: "человек", spanish: "persona", pronunciation: "[chi-la-VEK]", transliteration: "chelovek" },
        { word: "читать", spanish: "leer", pronunciation: "[chi-TAT']", transliteration: "chitat'" }
      ],
      position: 25,
      type: "consonant",
      description: "Consonante africada postalveolar sorda, siempre blanda"
    },
    {
      letter: "Ш",
      lowercase: "ш",
      pronunciation: "[ʃ]",
      spanish: "sh",
      examples: [
        { word: "школа", spanish: "escuela", pronunciation: "[SHKO-la]", transliteration: "shkola" },
        { word: "машина", spanish: "coche", pronunciation: "[ma-SHI-na]", transliteration: "mashina" },
        { word: "хорошо", spanish: "bien", pronunciation: "[kha-ra-SHO]", transliteration: "khorosho" }
      ],
      position: 26,
      type: "consonant",
      description: "Consonante fricativa postalveolar sorda, siempre dura"
    },
    {
      letter: "Щ",
      lowercase: "щ",
      pronunciation: "[ʃtʃ] / [ʃ:]",
      spanish: "shch",
      examples: [
        { word: "щи", spanish: "sopa de col", pronunciation: "[shchi]", transliteration: "shchi" },
        { word: "ещё", spanish: "aún/todavía", pronunciation: "[yish-CHO]", transliteration: "yeshchyo" },
        { word: "женщина", spanish: "mujer", pronunciation: "[ZHEN-shchi-na]", transliteration: "zhenshchina" }
      ],
      position: 27,
      type: "consonant",
      description: "Consonante fricativa larga, siempre blanda"
    },
    {
      letter: "Ъ",
      lowercase: "ъ",
      pronunciation: "[separación]",
      spanish: "signo duro",
      examples: [
        { word: "съесть", spanish: "comer", pronunciation: "[s'yest']", transliteration: "s'yest'" },
        { word: "объект", spanish: "objeto", pronunciation: "[ab'yekt]", transliteration: "ob'yekt" },
        { word: "подъём", spanish: "ascenso", pronunciation: "[pad'yom]", transliteration: "pod'yom" }
      ],
      position: 28,
      type: "sign",
      description: "Signo duro, separa consonante de vocal iotizada"
    },
    {
      letter: "Ы",
      lowercase: "ы",
      pronunciation: "[ɨ]",
      spanish: "i central",
      examples: [
        { word: "мы", spanish: "nosotros", pronunciation: "[mï]", transliteration: "my" },
        { word: "русский", spanish: "ruso", pronunciation: "[RUS-kiy]", transliteration: "russkiy" },
        { word: "красивый", spanish: "hermoso", pronunciation: "[kra-SI-vïy]", transliteration: "krasivyy" }
      ],
      position: 29,
      type: "vowel",
      description: "Vocal central alta, no existe en español"
    },
    {
      letter: "Ь",
      lowercase: "ь",
      pronunciation: "[palatización]",
      spanish: "signo blando",
      examples: [
        { word: "день", spanish: "día", pronunciation: "[den']", transliteration: "den'" },
        { word: "писать", spanish: "escribir", pronunciation: "[pi-SAT']", transliteration: "pisat'" },
        { word: "семья", spanish: "familia", pronunciation: "[sim-JA]", transliteration: "sem'ya" }
      ],
      position: 30,
      type: "sign",
      description: "Signo blando, palatiza la consonante anterior"
    },
    {
      letter: "Э",
      lowercase: "э",
      pronunciation: "[e]",
      spanish: "e",
      examples: [
        { word: "это", spanish: "esto", pronunciation: "[E-ta]", transliteration: "eto" },
        { word: "экзамен", spanish: "examen", pronunciation: "[eg-ZA-men]", transliteration: "ekzamen" },
        { word: "поэт", spanish: "poeta", pronunciation: "[pa-ET]", transliteration: "poet" }
      ],
      position: 31,
      type: "vowel",
      description: "Vocal anterior media, no palatiza consonantes anteriores"
    },
    {
      letter: "Ю",
      lowercase: "ю",
      pronunciation: "[ju] / [u]",
      spanish: "iu/u",
      examples: [
        { word: "юг", spanish: "sur", pronunciation: "[juk]", transliteration: "yug" },
        { word: "люблю", spanish: "amo", pronunciation: "[lju-BLJU]", transliteration: "lyublyu" },
        { word: "изучать", spanish: "estudiar", pronunciation: "[i-zu-CHAT']", transliteration: "izuchat'" }
      ],
      position: 32,
      type: "vowel",
      description: "Vocal iotizada, palatiza consonantes anteriores"
    },
    {
      letter: "Я",
      lowercase: "я",
      pronunciation: "[ja] / [a]",
      spanish: "ia/a",
      examples: [
        { word: "я", spanish: "yo", pronunciation: "[ja]", transliteration: "ya" },
        { word: "мясо", spanish: "carne", pronunciation: "[MJA-sa]", transliteration: "myaso" },
        { word: "тётя", spanish: "tía", pronunciation: "[TJO-tja]", transliteration: "tyotya" }
      ],
      position: 33,
      type: "vowel",
      description: "Vocal iotizada, palatiza consonantes anteriores"
    }
  ],

  hard_soft_consonants: [
    {
      concept: "Consonantes duras vs blandas",
      description: "Distinción fundamental del ruso",
      explanation: "Las consonantes pueden ser duras (твёрдые) o blandas (мягкие)",
      indicators: [
        { type: "hard", vowels: "а, о, у, ы, э", description: "después de consonante dura" },
        { type: "soft", vowels: "я, ё, ю, и, е", description: "después de consonante blanda" },
        { type: "soft", sign: "ь", description: "signo blando palatiza consonante" }
      ],
      examples: [
        { hard: "мат [mat]", soft: "мять [mjat']", meaning: "checkmate / arrugar" },
        { hard: "быть [bït']", soft: "бить [bit']", meaning: "ser / golpear" },
        { hard: "угол [U-gal]", soft: "уголь [U-gal']", meaning: "ángulo / carbón" }
      ]
    }
  ],

  stress_patterns: [
    {
      rule: "Acento libre",
      description: "El acento puede caer en cualquier sílaba",
      importance: "Cambia el significado de palabras",
      examples: [
        { word: "мука́", stress: "última", meaning: "harina", pronunciation: "[mu-KA]" },
        { word: "му́ка", stress: "primera", meaning: "tormento", pronunciation: "[MU-ka]" },
        { word: "замо́к", stress: "segunda", meaning: "castillo", pronunciation: "[za-MOK]" },
        { word: "за́мок", stress: "primera", meaning: "cerradura", pronunciation: "[ZA-mak]" }
      ]
    },
    {
      rule: "Reducción vocálica",
      description: "Las vocales no acentuadas se reducen",
      reductions: [
        { vowel: "о", unstressed: "[a]", example: "молоко́ [ma-la-KO]" },
        { vowel: "а", unstressed: "[a] (menos clara)", example: "мама́ [ma-MA]" },
        { vowel: "е", unstressed: "[i]", example: "везти́ [vis-TI]" },
        { vowel: "я", unstressed: "[i]", example: "язы́к [i-ZÏK]" }
      ]
    }
  ],

  pronunciation_challenges: [
    {
      challenge: "Consonantes duras vs blandas",
      description: "Distinción inexistente en español",
      tip: "Las blandas se pronuncian con la lengua más adelante",
      practice: [
        { pair: "ля [lja] vs ла [la]", tip: "lengua adelante vs atrás" },
        { pair: "нить [nit'] vs ныть [nït']", tip: "n palatizada vs normal" }
      ]
    },
    {
      challenge: "Vocal Ы [ɨ]",
      description: "Vocal inexistente en español",
      tip: "Entre 'i' e 'u', con lengua retraída",
      practice: "Desde [i], retrae la lengua manteniendo altura"
    },
    {
      challenge: "Consonantes siempre duras/blandas",
      description: "Algunas consonantes nunca cambian",
      always_hard: ["ж", "ш", "ц"],
      always_soft: ["ч", "щ", "й"],
      examples: [
        { word: "жить", note: "ж siempre dura aunque siga и" },
        { word: "часто", note: "ч siempre blanda" }
      ]
    }
  ],

  historical_notes: [
    {
      aspect: "Alfabeto cirílico",
      history: "Creado por Santos Cirilo y Metodio en el siglo IX",
      evolution: "Adaptado del alfabeto griego para lenguas eslavas",
      reforms: "Reformado por Pedro el Grande (1708) y después de la Revolución (1918)"
    },
    {
      aspect: "Letras eliminadas",
      description: "El ruso pre-revolucionario tenía más letras",
      removed: ["і", "ѣ", "ѳ", "ъ final"],
      reason: "Simplificación ortográfica de 1918"
    }
  ],

  learning_tips: [
    {
      tip: "Alfabeto por bloques",
      description: "Aprende grupos de letras similares al español primero",
      groups: [
        { group: "Idénticas", letters: "А, Е, К, М, О, Т", note: "mismo sonido y forma" },
        { group: "Falsas amigas", letters: "В, Н, Р, С, У, Х", note: "forma similar, sonido diferente" },
        { group: "Nuevas", letters: "Б, Г, Д, Ж, З, Л, П, Ф, Ц, Ч, Ш, Щ", note: "formas completamente nuevas" }
      ]
    },
    {
      tip: "Duro vs blando",
      description: "Fundamental para la pronunciación correcta",
      practice: "Memoriza las cinco vocales que ablandan: я, ё, ю, и, е"
    },
    {
      tip: "Escritura cursiva",
      description: "Los rusos escriben principalmente en cursiva",
      advice: "Aprende la cursiva rusa desde el principio"
    }
  ],

  transliteration_systems: [
    {
      system: "Sistema científico",
      description: "Usado en lingüística académica",
      examples: [
        { cyrillic: "Москва", scientific: "Moskva", pronunciation: "[mask-VA]" },
        { cyrillic: "Борщ", scientific: "boršč", pronunciation: "[borshch]" }
      ]
    },
    {
      system: "Sistema internacional",
      description: "Para pasaportes y documentos oficiales",
      examples: [
        { cyrillic: "Владимир", international: "Vladimir", pronunciation: "[vla-DI-mir]" },
        { cyrillic: "Екатерина", international: "Ekaterina", pronunciation: "[yi-ka-ti-RI-na]" }
      ]
    }
  ],

  cultural_notes: [
    {
      aspect: "Uso oficial",
      note: "El alfabeto cirílico es oficial en Rusia, Bulgaria, Serbia, Macedonia del Norte y otros países eslavos."
    },
    {
      aspect: "Literatura",
      note: "El ruso ha producido grandes escritores como Tolstói, Dostoyevski y Pushkin, considerado el padre de la literatura rusa moderna."
    },
    {
      aspect: "Ciencia",
      note: "El ruso es importante en ciencias espaciales, matemáticas y física. Muchos términos científicos provienen del ruso."
    },
    {
      aspect: "Internet",
      note: "El ruso es el segundo idioma más usado en internet después del inglés, con un dominio .рф (en cirílico)."
    }
  ]
};
export interface Language {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  color: string;
  description: string;
  vocabulary: Array<{ word: string; translation: string }>;
  grammar: {
    basic: string;
    intermediate: string;
    advanced: string;
    // Saludos y respuestas
    greetings: {
      formal: Array<{ target: string; spanish: string; context: string }>;
      informal: Array<{ target: string; spanish: string; context: string }>;
      responses: Array<{ greeting: string; response: string; spanish: string }>;
    };
    // Países y ciudades
    geography: {
      countries: Array<{ country: string; spanish: string; capital: string; demonym: string }>;
      cities: Array<{ city: string; spanish: string; country: string }>;
      nationalities: Array<{ nationality: string; spanish: string; masculine: string; feminine: string }>;
    };
    // Pronunciación
    pronunciation: {
      alphabet: Array<{ letter: string; sound: string; example: string; spanish: string }>;
      consonants: Array<{ consonant: string; sound: string; position: string; example: string }>;
      vowels: {
        oral: Array<{ vowel: string; sound: string; example: string; mouth_position: string }>;
        nasal: Array<{ vowel: string; sound: string; example: string; nasalization: string; mouth_position?: string }>;
      };
      semiconsonants: Array<{ sound: string; example: string; description: string }>;
      accents: Array<{ type: string; function?: string; example: string; rule: string }>;
    };
    // Artículos
    articles: {
      definite: Array<{ type: string; form: string; example: string; usage: string }>;
      indefinite: Array<{ type: string; form: string; example: string; usage: string }>;
      contracted: Array<{ contraction: string; components: string; example: string; usage: string }>;
      partitive: Array<{ form: string; usage: string; example: string; translation: string }>;
    };
    // Números, geometría, colores
    numbers: Array<{ number: number; word: string; ordinal: string; usage: string }>;
    geometry: Array<{ shape: string; spanish: string; properties: string }>;
    colors: Array<{ color: string; spanish: string; variations: string; usage: string }>;
    // Tiempo
    time: {
      months: Array<{ month: string; spanish: string; season: string; abbreviation: string }>;
      days: Array<{ day: string; spanish: string; abbreviation: string; position: number }>;
      seasons: Array<{ season: string; spanish: string; months: string; characteristics: string }>;
      telling_time: {
        formal: Array<{ time: string; target: string; spanish: string }>;
        colloquial: Array<{ time: string; target: string; spanish: string }>;
      };
    };
    // Seres vivos
    animals: Array<{ animal: string; spanish: string; category: string; sounds: string }>;
    plants: Array<{ plant: string; spanish: string; category: string; characteristics: string }>;
    // Familia y estado civil
    family: {
      members: Array<{ member: string; spanish: string; gender: string; generation: string }>;
      civil_status: Array<{ status: string; spanish: string; description: string }>;
    };
    // Verbos y conjugaciones
    verbs: {
      library: Array<{ infinitive: string; spanish: string; type: string; category: string }>;
      regular: Array<{ infinitive: string; type: string; example: string }>;
      irregular: Array<{ infinitive: string; conjugation: string; example: string }>;
      auxiliary: Array<{ verb: string; usage: string; example: string }>;
      imperative: Array<{ form: string; example: string; translation: string }>;
      modal: Array<{ verb: string; meaning: string; example: string }>;
    };
    // Tiempos verbales completos
    tenses: {
      present: Array<{ pronoun: string; conjugation: string; example: string }>;
      past_simple: Array<{ pronoun: string; conjugation: string; example: string }>;
      past_compound: Array<{ pronoun: string; conjugation: string; example: string }>;
      past_imperfect: Array<{ pronoun: string; conjugation: string; example: string }>;
      past_pluperfect: Array<{ pronoun: string; conjugation: string; example: string }>;
      future: Array<{ pronoun: string; conjugation: string; example: string }>;
      conditional: Array<{ pronoun: string; conjugation: string; example: string }>;
      subjunctive: Array<{ pronoun: string; conjugation: string; example: string }>;
    };
    // Pronombres completos
    pronouns: {
      subject: Array<{ spanish: string; target: string; example: string }>;
      tonic: Array<{ spanish: string; target: string; example: string; usage: string }>;
      reflexive: Array<{ spanish: string; target: string; example: string }>;
      invariable: Array<{ spanish: string; target: string; example: string; function?: string }>;
      direct_object: Array<{ spanish: string; target: string; example: string }>;
      indirect_object: Array<{ spanish: string; target: string; example: string }>;
    };
    // Profesiones
    professions: Array<{ profession: string; spanish: string; masculine: string; feminine: string; workplace: string }>;
    // Materiales y textiles
    materials: {
      school: Array<{ material: string; spanish: string; usage: string; characteristics: string }>;
      fabrics: Array<{ fabric: string; spanish: string; texture: string; usage: string }>;
    };
    // Preposiciones
    prepositions: {
      place: Array<{ spanish: string; target: string; example: string }>;
      time: Array<{ spanish: string; target: string; example: string }>;
      movement: Array<{ spanish: string; target: string; example: string }>;
      manner: Array<{ spanish: string; target: string; example: string }>;
    };
    // Adverbios
    adverbs: {
      frequency: Array<{ adverb: string; spanish: string; example: string; position: string }>;
      manner: Array<{ adverb: string; spanish: string; example: string }>;
      time: Array<{ adverb: string; spanish: string; example: string }>;
    };
    // Perifrases verbales
    verbal_periphrases: Array<{ structure: string; meaning: string; example: string; spanish: string }>;
    // Clima y comida
    weather: Array<{ condition: string; spanish: string; description: string; vocabulary: string }>;
    food: Array<{ food: string; spanish: string; category: string; preparation: string }>;
    // Cuerpo y descripción física
    body: {
      parts: Array<{ part: string; spanish: string; location: string; function?: string }>;
      physical_description: Array<{ trait: string; spanish: string; category: string; variations: string }>;
    };
    // Vestimenta y accesorios
    clothing: {
      garments: Array<{ garment: string; spanish: string; category: string; season: string }>;
      accessories: Array<{ accessory: string; spanish: string; usage: string; style: string }>;
    };
    // Descripción de carácter
    character: Array<{ trait: string; spanish: string; positive_negative: string; example: string }>;
    // Conectores
    connectors: Array<{ spanish: string; target: string; type: string; example: string }>;
    // Negación
    negation: {
      basic: Array<{ rule: string; example: string; translation: string }>;
      advanced: Array<{ rule: string; example: string; translation: string }>;
    };
    // Interrogación
    questions: {
      yesNo: Array<{ structure: string; example: string; translation: string }>;
      open: Array<{ word: string; example: string; translation: string }>;
      responses: Array<{ question_type: string; affirmative: string; negative: string; neutral: string }>;
    };
    // Estructura de oraciones
    sentenceStructure: {
      basic: string;
      questions: string;
      negations: string;
      imperatives: string;
    };
    // Notas culturales
    culturalNotes: Array<{ aspect: string; note: string; example: string }>;
    // Ejemplos
    examples: Array<{ rule: string; example: string; translation: string }>;
  };
}

export const languages: Language[] = [
  {
    id: "french",
    name: "Francés",
    nativeName: "Français", 
    flag: "🇫🇷",
    color: "from-blue-600 to-blue-800",
    description: "La langue de l'amour",
    vocabulary: [
      { word: "Bonjour", translation: "Hola" },
      { word: "Merci", translation: "Gracias" },
      { word: "Au revoir", translation: "Adiós" },
      { word: "S'il vous plaît", translation: "Por favor" }
    ],
    grammar: {
      basic: "Los artículos definidos: le (masculino), la (femenino), les (plural). Los verbos regulares terminan en -er, -ir, -re. El género es fundamental en francés.",
      intermediate: "Los tiempos compuestos se forman con avoir/être + participio pasado. Los pronombres COD/COI se colocan antes del verbo. La liaison conecta sonidos entre palabras.",
      advanced: "El subjuntivo expresa subjetividad, duda y emoción. El gérondif se forma con 'en' + participio presente. Los pronombres relativos composés: lequel, laquelle, lesquels, lesquelles.",
      
      greetings: {
        formal: [
          { target: "Bonjour", spanish: "Buenos días", context: "Mañana y tarde hasta las 18h" },
          { target: "Bonsoir", spanish: "Buenas noches", context: "Después de las 18h" },
          { target: "Monsieur/Madame", spanish: "Señor/Señora", context: "Tratamiento formal" },
          { target: "Comment allez-vous?", spanish: "¿Cómo está usted?", context: "Pregunta formal de cortesía" }
        ],
        informal: [
          { target: "Salut", spanish: "Hola", context: "Entre amigos y conocidos" },
          { target: "Coucou", spanish: "Hola (informal)", context: "Muy familiar, entre amigos íntimos" },
          { target: "Ça va?", spanish: "¿Qué tal?", context: "Pregunta informal casual" }
        ],
        responses: [
          { greeting: "Comment allez-vous?", response: "Je vais bien, merci", spanish: "Estoy bien, gracias" },
          { greeting: "Ça va?", response: "Ça va bien", spanish: "Va bien" },
          { greeting: "Bonjour", response: "Bonjour", spanish: "Buenos días" }
        ]
      },

      geography: {
        countries: [
          { country: "France", spanish: "Francia", capital: "Paris", demonym: "français(e)" },
          { country: "Belgique", spanish: "Bélgica", capital: "Bruxelles", demonym: "belge" },
          { country: "Suisse", spanish: "Suiza", capital: "Berne", demonym: "suisse" },
          { country: "Canada", spanish: "Canadá", capital: "Ottawa", demonym: "canadien(ne)" },
          { country: "Sénégal", spanish: "Senegal", capital: "Dakar", demonym: "sénégalais(e)" }
        ],
        cities: [
          { city: "Paris", spanish: "París", country: "France" },
          { city: "Lyon", spanish: "Lyon", country: "France" },
          { city: "Marseille", spanish: "Marsella", country: "France" },
          { city: "Québec", spanish: "Quebec", country: "Canada" },
          { city: "Genève", spanish: "Ginebra", country: "Suisse" }
        ],
        nationalities: [
          { nationality: "français", spanish: "francés", masculine: "français", feminine: "française" },
          { nationality: "belge", spanish: "belga", masculine: "belge", feminine: "belge" },
          { nationality: "suisse", spanish: "suizo", masculine: "suisse", feminine: "suisse" },
          { nationality: "canadien", spanish: "canadiense", masculine: "canadien", feminine: "canadienne" }
        ]
      },

      pronunciation: {
        alphabet: [
          { letter: "A", sound: "[a]", example: "chat", spanish: "a como en 'casa'" },
          { letter: "E", sound: "[ə]", example: "le", spanish: "e muda" },
          { letter: "É", sound: "[e]", example: "café", spanish: "e cerrada" },
          { letter: "È", sound: "[ɛ]", example: "mère", spanish: "e abierta" },
          { letter: "I", sound: "[i]", example: "ami", spanish: "i como en 'si'" },
          { letter: "O", sound: "[o]", example: "moto", spanish: "o cerrada" },
          { letter: "U", sound: "[y]", example: "tu", spanish: "u francesa (labios en u, lengua en i)" }
        ],
        consonants: [
          { consonant: "R", sound: "[ʁ]", position: "uvular", example: "rouge" },
          { consonant: "J", sound: "[ʒ]", position: "palatal", example: "je" },
          { consonant: "CH", sound: "[ʃ]", position: "palatal", example: "chat" },
          { consonant: "GN", sound: "[ɲ]", position: "palatal", example: "agneau" }
        ],
        vowels: {
          oral: [
            { vowel: "a", sound: "[a]", example: "chat", mouth_position: "boca muy abierta" },
            { vowel: "e", sound: "[ə]", example: "le", mouth_position: "boca semi-abierta" },
            { vowel: "i", sound: "[i]", example: "lit", mouth_position: "boca sonriente" },
            { vowel: "o", sound: "[o]", example: "mot", mouth_position: "labios redondeados" },
            { vowel: "u", sound: "[y]", example: "tu", mouth_position: "labios en u, lengua en i" }
          ],
          nasal: [
            { vowel: "an", sound: "[ã]", example: "dans", nasalization: "aire por la nariz" },
            { vowel: "in", sound: "[ɛ̃]", example: "main", nasalization: "nasalización frontal" },
            { vowel: "on", sound: "[ɔ̃]", example: "mon", nasalization: "nasalización posterior" },
            { vowel: "un", sound: "[œ̃]", example: "brun", nasalization: "nasalización redondeada" }
          ]
        },
        semiconsonants: [
          { sound: "[j]", example: "pied", description: "como y en 'yo'" },
          { sound: "[ɥ]", example: "lui", description: "u + i rápido" },
          { sound: "[w]", example: "oui", description: "como w inglesa" }
        ],
        accents: [
          { type: "Accent aigu (´)", function: "sonido [e]", example: "café", rule: "solo en la e" },
          { type: "Accent grave (`)", function: "sonido [ɛ]", example: "mère", rule: "en e, a, u" },
          { type: "Accent circonflexe (^)", function: "histórico", example: "hôtel", rule: "todas las vocales" },
          { type: "Cédille (ç)", function: "sonido [s]", example: "garçon", rule: "c antes de a, o, u" }
        ]
      },

      articles: {
        definite: [
          { type: "Masculino singular", form: "le", example: "le chat", usage: "antes de consonante" },
          { type: "Femenino singular", form: "la", example: "la maison", usage: "antes de consonante" },
          { type: "Plural", form: "les", example: "les enfants", usage: "masculino y femenino" },
          { type: "Elisión", form: "l'", example: "l'ami", usage: "antes de vocal o h muda" }
        ],
        indefinite: [
          { type: "Masculino singular", form: "un", example: "un livre", usage: "sustantivo masculino" },
          { type: "Femenino singular", form: "une", example: "une table", usage: "sustantivo femenino" },
          { type: "Plural", form: "des", example: "des amis", usage: "masculino y femenino plural" }
        ],
        contracted: [
          { contraction: "du", components: "de + le", example: "du pain", usage: "partitivo masculino" },
          { contraction: "des", components: "de + les", example: "des livres", usage: "partitivo plural" },
          { contraction: "au", components: "à + le", example: "au cinéma", usage: "preposición + definido" },
          { contraction: "aux", components: "à + les", example: "aux enfants", usage: "preposición + definido plural" }
        ],
        partitive: [
          { form: "du", usage: "masculino", example: "du fromage", translation: "algo de queso" },
          { form: "de la", usage: "femenino", example: "de la musique", translation: "algo de música" },
          { form: "de l'", usage: "elisión", example: "de l'eau", translation: "algo de agua" },
          { form: "des", usage: "plural", example: "des légumes", translation: "algunas verduras" }
        ]
      },

      numbers: [
        { number: 1, word: "un", ordinal: "premier", usage: "Cardinal y ordinal masculino" },
        { number: 2, word: "deux", ordinal: "deuxième", usage: "Cardinal básico" },
        { number: 10, word: "dix", ordinal: "dixième", usage: "Base decimal" },
        { number: 20, word: "vingt", ordinal: "vingtième", usage: "Base vigesimal" },
        { number: 100, word: "cent", ordinal: "centième", usage: "Centena" }
      ],

      geometry: [
        { shape: "cercle", spanish: "círculo", properties: "rayon, diamètre, circonférence" },
        { shape: "triangle", spanish: "triángulo", properties: "côtés, angles, hauteur" },
        { shape: "carré", spanish: "cuadrado", properties: "côtés égaux, angles droits" },
        { shape: "rectangle", spanish: "rectángulo", properties: "longueur, largeur, périmètre" }
      ],

      colors: [
        { color: "rouge", spanish: "rojo", variations: "rouge foncé, rouge clair", usage: "Adjetivo invariable" },
        { color: "bleu", spanish: "azul", variations: "bleu marine, bleu ciel", usage: "bleu/bleue/bleus/bleues" },
        { color: "vert", spanish: "verde", variations: "vert pomme, vert foncé", usage: "vert/verte/verts/vertes" },
        { color: "jaune", spanish: "amarillo", variations: "jaune citron, jaune pâle", usage: "Invariable" }
      ],

      time: {
        months: [
          { month: "janvier", spanish: "enero", season: "hiver", abbreviation: "janv." },
          { month: "février", spanish: "febrero", season: "hiver", abbreviation: "févr." },
          { month: "mars", spanish: "marzo", season: "printemps", abbreviation: "mars" },
          { month: "avril", spanish: "abril", season: "printemps", abbreviation: "avr." },
          { month: "mai", spanish: "mayo", season: "printemps", abbreviation: "mai" },
          { month: "juin", spanish: "junio", season: "été", abbreviation: "juin" }
        ],
        days: [
          { day: "lundi", spanish: "lunes", abbreviation: "lun.", position: 1 },
          { day: "mardi", spanish: "martes", abbreviation: "mar.", position: 2 },
          { day: "mercredi", spanish: "miércoles", abbreviation: "mer.", position: 3 },
          { day: "jeudi", spanish: "jueves", abbreviation: "jeu.", position: 4 },
          { day: "vendredi", spanish: "viernes", abbreviation: "ven.", position: 5 }
        ],
        seasons: [
          { season: "printemps", spanish: "primavera", months: "mars-avril-mai", characteristics: "renouveau, fleurs" },
          { season: "été", spanish: "verano", months: "juin-juillet-août", characteristics: "chaleur, vacances" },
          { season: "automne", spanish: "otoño", months: "septembre-octobre-novembre", characteristics: "feuilles, récolte" },
          { season: "hiver", spanish: "invierno", months: "décembre-janvier-février", characteristics: "froid, neige" }
        ],
        telling_time: {
          formal: [
            { time: "Il est quinze heures", target: "15:00", spanish: "Son las tres de la tarde" },
            { time: "Il est vingt heures trente", target: "20:30", spanish: "Son las ocho y media de la noche" }
          ],
          colloquial: [
            { time: "Il est trois heures", target: "15:00", spanish: "Son las tres" },
            { time: "Il est huit heures et demie", target: "20:30", spanish: "Son las ocho y media" }
          ]
        }
      },

      animals: [
        { animal: "chien", spanish: "perro", category: "mammifère domestique", sounds: "aboie (woof)" },
        { animal: "chat", spanish: "gato", category: "mammifère domestique", sounds: "miaule (meow)" },
        { animal: "oiseau", spanish: "pájaro", category: "animal volant", sounds: "chante, gazouille" },
        { animal: "poisson", spanish: "pez", category: "animal aquatique", sounds: "silencieux" }
      ],

      plants: [
        { plant: "arbre", spanish: "árbol", category: "végétal", characteristics: "tronc, branches, feuilles" },
        { plant: "fleur", spanish: "flor", category: "végétal", characteristics: "pétales, parfum, couleur" },
        { plant: "herbe", spanish: "hierba", category: "végétal", characteristics: "verte, pousse au sol" }
      ],

      family: {
        members: [
          { member: "père", spanish: "padre", gender: "masculin", generation: "parents" },
          { member: "mère", spanish: "madre", gender: "féminin", generation: "parents" },
          { member: "fils", spanish: "hijo", gender: "masculin", generation: "enfants" },
          { member: "fille", spanish: "hija", gender: "féminin", generation: "enfants" },
          { member: "grand-père", spanish: "abuelo", gender: "masculin", generation: "grands-parents" }
        ],
        civil_status: [
          { status: "célibataire", spanish: "soltero/a", description: "non marié(e)" },
          { status: "marié(e)", spanish: "casado/a", description: "uni(e) par le mariage" },
          { status: "divorcé(e)", spanish: "divorciado/a", description: "séparé(e) légalement" }
        ]
      },

      verbs: {
        library: [
          { infinitive: "parler", spanish: "hablar", type: "regular", category: "-er" },
          { infinitive: "finir", spanish: "terminar", type: "regular", category: "-ir" },
          { infinitive: "être", spanish: "ser/estar", type: "irregular", category: "auxiliary" },
          { infinitive: "avoir", spanish: "tener", type: "irregular", category: "auxiliary" },
          { infinitive: "aller", spanish: "ir", type: "irregular", category: "movement" },
          { infinitive: "faire", spanish: "hacer", type: "irregular", category: "action" }
        ],
        regular: [
          { infinitive: "parler", type: "-er", example: "je parle, tu parles, il parle" },
          { infinitive: "finir", type: "-ir", example: "je finis, tu finis, il finit" },
          { infinitive: "vendre", type: "-re", example: "je vends, tu vends, il vend" }
        ],
        irregular: [
          { infinitive: "être", conjugation: "je suis, tu es, il est", example: "Je suis étudiant" },
          { infinitive: "avoir", conjugation: "j'ai, tu as, il a", example: "J'ai faim" },
          { infinitive: "aller", conjugation: "je vais, tu vas, il va", example: "Je vais au cinéma" }
        ],
        auxiliary: [
          { verb: "être", usage: "verbos de movimiento y reflexivos", example: "Je suis allé" },
          { verb: "avoir", usage: "mayoría de verbos", example: "J'ai mangé" }
        ],
        imperative: [
          { form: "Parle!", example: "Parle français!", translation: "¡Habla francés!" },
          { form: "Parlons!", example: "Parlons ensemble!", translation: "¡Hablemos juntos!" },
          { form: "Parlez!", example: "Parlez plus fort!", translation: "¡Hablen más fuerte!" }
        ],
        modal: [
          { verb: "pouvoir", meaning: "poder", example: "Je peux venir" },
          { verb: "devoir", meaning: "deber", example: "Tu dois partir" },
          { verb: "vouloir", meaning: "querer", example: "Il veut manger" }
        ]
      },

      tenses: {
        present: [
          { pronoun: "Je", conjugation: "parle", example: "Je parle français" },
          { pronoun: "Tu", conjugation: "parles", example: "Tu parles bien" },
          { pronoun: "Il/Elle", conjugation: "parle", example: "Elle parle lentement" }
        ],
        past_simple: [
          { pronoun: "Je", conjugation: "parlai", example: "Je parlai hier" },
          { pronoun: "Tu", conjugation: "parlas", example: "Tu parlas avec Marie" },
          { pronoun: "Il/Elle", conjugation: "parla", example: "Il parla longtemps" }
        ],
        past_compound: [
          { pronoun: "J'", conjugation: "ai parlé", example: "J'ai parlé avec lui" },
          { pronoun: "Tu", conjugation: "as parlé", example: "Tu as parlé en français" },
          { pronoun: "Il/Elle", conjugation: "a parlé", example: "Elle a parlé clairement" }
        ],
        past_imperfect: [
          { pronoun: "Je", conjugation: "parlais", example: "Je parlais quand tu es arrivé" },
          { pronoun: "Tu", conjugation: "parlais", example: "Tu parlais souvent de cela" },
          { pronoun: "Il/Elle", conjugation: "parlait", example: "Elle parlait doucement" }
        ],
        past_pluperfect: [
          { pronoun: "J'", conjugation: "avais parlé", example: "J'avais parlé avant ton arrivée" },
          { pronoun: "Tu", conjugation: "avais parlé", example: "Tu avais parlé de ce problème" },
          { pronoun: "Il/Elle", conjugation: "avait parlé", example: "Il avait parlé avec le professeur" }
        ],
        future: [
          { pronoun: "Je", conjugation: "parlerai", example: "Je parlerai demain" },
          { pronoun: "Tu", conjugation: "parleras", example: "Tu parleras mieux" },
          { pronoun: "Il/Elle", conjugation: "parlera", example: "Elle parlera plus tard" }
        ],
        conditional: [
          { pronoun: "Je", conjugation: "parlerais", example: "Je parlerais si j'avais le temps" },
          { pronoun: "Tu", conjugation: "parlerais", example: "Tu parlerais français" },
          { pronoun: "Il/Elle", conjugation: "parlerait", example: "Il parlerait volontiers" }
        ],
        subjunctive: [
          { pronoun: "Que je", conjugation: "parle", example: "Il faut que je parle" },
          { pronoun: "Que tu", conjugation: "parles", example: "Je veux que tu parles" },
          { pronoun: "Qu'il/elle", conjugation: "parle", example: "Je doute qu'elle parle" }
        ]
      },

      pronouns: {
        subject: [
          { spanish: "Yo", target: "Je", example: "Je mange" },
          { spanish: "Tú", target: "Tu", example: "Tu chantes" },
          { spanish: "Él/Ella", target: "Il/Elle", example: "Il dort" }
        ],
        tonic: [
          { spanish: "Yo", target: "Moi", example: "C'est moi", usage: "énfasis" },
          { spanish: "Tú", target: "Toi", example: "Et toi?", usage: "énfasis" },
          { spanish: "Él/Ella", target: "Lui/Elle", example: "Avec lui", usage: "después de preposición" }
        ],
        reflexive: [
          { spanish: "Me", target: "Me", example: "Je me lave" },
          { spanish: "Te", target: "Te", example: "Tu te reposes" },
          { spanish: "Se", target: "Se", example: "Il se lève" }
        ],
        invariable: [
          { spanish: "Eso/Esto", target: "Cela/Ça", example: "Cela m'intéresse", function: "demostrativo neutro" },
          { spanish: "Ello/Lo", target: "Il", example: "Il pleut", function: "sujeto impersonal" }
        ],
        direct_object: [
          { spanish: "Me", target: "Me", example: "Il me voit" },
          { spanish: "Te", target: "Te", example: "Je te comprends" },
          { spanish: "Lo/La", target: "Le/La", example: "Je le connais" }
        ],
        indirect_object: [
          { spanish: "Me", target: "Me", example: "Il me parle" },
          { spanish: "Te", target: "Te", example: "Je te donne" },
          { spanish: "Le", target: "Lui", example: "Je lui écris" }
        ]
      },

      professions: [
        { profession: "médecin", spanish: "médico", masculine: "médecin", feminine: "médecin", workplace: "hôpital" },
        { profession: "professeur", spanish: "profesor", masculine: "professeur", feminine: "professeur", workplace: "école" },
        { profession: "ingénieur", spanish: "ingeniero", masculine: "ingénieur", feminine: "ingénieur", workplace: "bureau" },
        { profession: "avocat", spanish: "abogado", masculine: "avocat", feminine: "avocate", workplace: "tribunal" }
      ],

      materials: {
        school: [
          { material: "crayon", spanish: "lápiz", usage: "écrire", characteristics: "en bois, mine graphite" },
          { material: "stylo", spanish: "bolígrafo", usage: "écrire", characteristics: "encre bleue ou noire" },
          { material: "cahier", spanish: "cuaderno", usage: "écrire", characteristics: "pages lignées" },
          { material: "livre", spanish: "libro", usage: "lire", characteristics: "pages, couverture" }
        ],
        fabrics: [
          { fabric: "coton", spanish: "algodón", texture: "douce", usage: "vêtements d'été" },
          { fabric: "laine", spanish: "lana", texture: "chaude", usage: "vêtements d'hiver" },
          { fabric: "soie", spanish: "seda", texture: "lisse", usage: "vêtements élégants" },
          { fabric: "cuir", spanish: "cuero", texture: "résistante", usage: "chaussures, sacs" }
        ]
      },

      prepositions: {
        place: [
          { spanish: "en", target: "dans", example: "dans la maison" },
          { spanish: "sobre", target: "sur", example: "sur la table" },
          { spanish: "bajo", target: "sous", example: "sous le lit" },
          { spanish: "entre", target: "entre", example: "entre vous et moi" }
        ],
        time: [
          { spanish: "durante", target: "pendant", example: "pendant les vacances" },
          { spanish: "antes", target: "avant", example: "avant le dîner" },
          { spanish: "después", target: "après", example: "après le travail" }
        ],
        movement: [
          { spanish: "hacia", target: "vers", example: "vers la gare" },
          { spanish: "desde", target: "depuis", example: "depuis Paris" },
          { spanish: "a través de", target: "à travers", example: "à travers le parc" }
        ],
        manner: [
          { spanish: "con", target: "avec", example: "avec plaisir" },
          { spanish: "sin", target: "sans", example: "sans problème" },
          { spanish: "por", target: "par", example: "par exemple" }
        ]
      },

      adverbs: {
        frequency: [
          { adverb: "toujours", spanish: "siempre", example: "Je travaille toujours", position: "après le verbe" },
          { adverb: "souvent", spanish: "a menudo", example: "Il vient souvent", position: "après le verbe" },
          { adverb: "jamais", spanish: "nunca", example: "Je ne viens jamais", position: "avec ne" }
        ],
        manner: [
          { adverb: "bien", spanish: "bien", example: "Il parle bien français" },
          { adverb: "mal", spanish: "mal", example: "Elle chante mal" },
          { adverb: "vite", spanish: "rápido", example: "Tu marches vite" }
        ],
        time: [
          { adverb: "maintenant", spanish: "ahora", example: "Je pars maintenant" },
          { adverb: "hier", spanish: "ayer", example: "J'ai travaillé hier" },
          { adverb: "demain", spanish: "mañana", example: "Je viendrai demain" }
        ]
      },

      verbal_periphrases: [
        { structure: "aller + infinitive", meaning: "futuro próximo", example: "Je vais partir", spanish: "Voy a partir" },
        { structure: "être en train de + infinitive", meaning: "acción en curso", example: "Je suis en train de manger", spanish: "Estoy comiendo" },
        { structure: "venir de + infinitive", meaning: "pasado reciente", example: "Je viens de finir", spanish: "Acabo de terminar" }
      ],

      weather: [
        { condition: "il fait beau", spanish: "hace buen tiempo", description: "temps ensoleillé", vocabulary: "soleil, ciel bleu" },
        { condition: "il pleut", spanish: "llueve", description: "temps pluvieux", vocabulary: "pluie, nuages, parapluie" },
        { condition: "il fait froid", spanish: "hace frío", description: "basse température", vocabulary: "froid, gel, neige" }
      ],

      food: [
        { food: "pain", spanish: "pan", category: "boulangerie", preparation: "cuit au four" },
        { food: "fromage", spanish: "queso", category: "produits laitiers", preparation: "affiné" },
        { food: "viande", spanish: "carne", category: "protéines", preparation: "grillée, rôtie" }
      ],

      body: {
        parts: [
          { part: "tête", spanish: "cabeza", location: "partie supérieure", function: "penser, voir, entendre" },
          { part: "main", spanish: "mano", location: "extrémité du bras", function: "prendre, toucher" },
          { part: "pied", spanish: "pie", location: "extrémité de la jambe", function: "marcher, courir" }
        ],
        physical_description: [
          { trait: "grand", spanish: "alto", category: "taille", variations: "grand, grande, grands, grandes" },
          { trait: "blond", spanish: "rubio", category: "cheveux", variations: "blond, blonde, blonds, blondes" },
          { trait: "beau", spanish: "guapo", category: "apparence", variations: "beau, belle, beaux, belles" }
        ]
      },

      clothing: {
        garments: [
          { garment: "chemise", spanish: "camisa", category: "haut", season: "toute saison" },
          { garment: "pantalon", spanish: "pantalón", category: "bas", season: "toute saison" },
          { garment: "manteau", spanish: "abrigo", category: "extérieur", season: "hiver" }
        ],
        accessories: [
          { accessory: "chapeau", spanish: "sombrero", usage: "protection soleil", style: "élégant ou décontracté" },
          { accessory: "montre", spanish: "reloj", usage: "voir l'heure", style: "classique ou moderne" }
        ]
      },

      character: [
        { trait: "gentil", spanish: "amable", positive_negative: "positif", example: "Il est très gentil avec nous" },
        { trait: "intelligent", spanish: "inteligente", positive_negative: "positif", example: "Elle est intelligente en mathématiques" },
        { trait: "paresseux", spanish: "perezoso", positive_negative: "négatif", example: "Il est paresseux au travail" }
      ],

      connectors: [
        { spanish: "y", target: "et", type: "copulatif", example: "Pierre et Marie" },
        { spanish: "pero", target: "mais", type: "adversatif", example: "J'aime ça, mais c'est cher" },
        { spanish: "porque", target: "parce que", type: "causal", example: "Je reste parce qu'il pleut" }
      ],

      negation: {
        basic: [
          { rule: "ne...pas", example: "Je ne parle pas", translation: "No hablo" },
          { rule: "ne...jamais", example: "Je ne viens jamais", translation: "Nunca vengo" },
          { rule: "ne...rien", example: "Je ne fais rien", translation: "No hago nada" }
        ],
        advanced: [
          { rule: "ne...personne", example: "Je ne vois personne", translation: "No veo a nadie" },
          { rule: "ne...ni...ni", example: "Je n'aime ni le café ni le thé", translation: "No me gusta ni el café ni el té" }
        ]
      },

      questions: {
        yesNo: [
          { structure: "Est-ce que + phrase", example: "Est-ce que tu viens?", translation: "¿Vienes?" },
          { structure: "Inversion sujet-verbe", example: "Viens-tu?", translation: "¿Vienes?" },
          { structure: "Intonation montante", example: "Tu viens?", translation: "¿Vienes?" }
        ],
        open: [
          { word: "Qui", example: "Qui est-ce?", translation: "¿Quién es?" },
          { word: "Que", example: "Que fais-tu?", translation: "¿Qué haces?" },
          { word: "Où", example: "Où vas-tu?", translation: "¿Dónde vas?" },
          { word: "Quand", example: "Quand arrives-tu?", translation: "¿Cuándo llegas?" }
        ],
        responses: [
          { question_type: "oui/non", affirmative: "Oui", negative: "Non", neutral: "Peut-être" },
          { question_type: "choix", affirmative: "Le premier", negative: "Aucun", neutral: "Je ne sais pas" }
        ]
      },

      sentenceStructure: {
        basic: "Sujet + Verbe + Complément (Je mange une pomme)",
        questions: "Mot interrogatif + verbe + sujet (Où vas-tu?)",
        negations: "Sujet + ne + verbe + pas (Je ne comprends pas)",
        imperatives: "Verbe + complément (Parle français!)"
      },

      culturalNotes: [
        { aspect: "Politesse", note: "On utilise 'vous' avec les inconnus", example: "Comment allez-vous?" },
        { aspect: "Repas", note: "Le déjeuner est important en France", example: "pause déjeuner de 12h à 14h" },
        { aspect: "Bise", note: "On se fait la bise pour se saluer", example: "Bonjour + bise sur les joues" }
      ],

      examples: [
        { rule: "Accord des adjectifs", example: "Une grande maison", translation: "Una casa grande" },
        { rule: "Passé composé", example: "J'ai mangé", translation: "He comido" },
        { rule: "Subjonctif", example: "Il faut que tu viennes", translation: "Es necesario que vengas" }
      ]
    }
  },
  {
    id: "italian",
    name: "Italiano",
    nativeName: "Italiano",
    flag: "🇮🇹",
    color: "from-green-600 to-green-800",
    description: "La melodia della vita",
    vocabulary: [
      { word: "Ciao", translation: "Hola/Adiós" },
      { word: "Grazie", translation: "Gracias" },
      { word: "Prego", translation: "Por favor/De nada" },
      { word: "Scusi", translation: "Perdón" }
    ],
    grammar: {
      basic: "Los artículos definidos: il/lo (masculino), la (femenino), i/gli/le (plural). Los verbos regulares terminan en -are, -ere, -ire. La melodía italiana es crucial.",
      intermediate: "El passato prossimo se forma con essere/avere + participio. Los pronombres directos e indirectos se combinan. El gerundio expresa simultaneidad.", 
      advanced: "El congiuntivo tiene cuatro tiempos y expresa subjetividad. El condizionale expresa cortesía y hipótesis. La consecutio temporum regula las concordancias temporales.",
      
      greetings: {
        formal: [
          { target: "Buongiorno", spanish: "Buenos días", context: "Formal hasta las 17h" },
          { target: "Buonasera", spanish: "Buenas tardes/noches", context: "Después de las 17h" },
          { target: "Signore/Signora", spanish: "Señor/Señora", context: "Tratamiento formal" }
        ],
        informal: [
          { target: "Ciao", spanish: "Hola/Adiós", context: "Familiar e informal" },
          { target: "Come stai?", spanish: "¿Cómo estás?", context: "Entre amigos" }
        ],
        responses: [
          { greeting: "Come sta?", response: "Sto bene, grazie", spanish: "Estoy bien, gracias" },
          { greeting: "Come stai?", response: "Tutto bene", spanish: "Todo bien" }
        ]
      },

      geography: {
        countries: [
          { country: "Italia", spanish: "Italia", capital: "Roma", demonym: "italiano/a" },
          { country: "Svizzera", spanish: "Suiza", capital: "Berna", demonym: "svizzero/a" },
          { country: "San Marino", spanish: "San Marino", capital: "San Marino", demonym: "sanmarinese" }
        ],
        cities: [
          { city: "Roma", spanish: "Roma", country: "Italia" },
          { city: "Milano", spanish: "Milán", country: "Italia" },
          { city: "Venezia", spanish: "Venecia", country: "Italia" },
          { city: "Napoli", spanish: "Nápoles", country: "Italia" }
        ],
        nationalities: [
          { nationality: "italiano", spanish: "italiano", masculine: "italiano", feminine: "italiana" },
          { nationality: "romano", spanish: "romano", masculine: "romano", feminine: "romana" }
        ]
      },

      pronunciation: {
        alphabet: [
          { letter: "A", sound: "[a]", example: "casa", spanish: "a como en 'casa'" },
          { letter: "E", sound: "[e]", example: "bene", spanish: "e cerrada" },
          { letter: "I", sound: "[i]", example: "vino", spanish: "i como en 'si'" },
          { letter: "O", sound: "[o]", example: "solo", spanish: "o cerrada" },
          { letter: "U", sound: "[u]", example: "tutto", spanish: "u como en 'tú'" }
        ],
        consonants: [
          { consonant: "R", sound: "[r]", position: "vibrante múltiple", example: "carro" },
          { consonant: "GL", sound: "[ʎ]", position: "palatal lateral", example: "figlio" },
          { consonant: "GN", sound: "[ɲ]", position: "nasal palatal", example: "bagno" },
          { consonant: "SC", sound: "[ʃ]", position: "antes de e,i", example: "pesce" }
        ],
        vowels: {
          oral: [
            { vowel: "a", sound: "[a]", example: "casa", mouth_position: "abierta central" },
            { vowel: "e", sound: "[e]", example: "bene", mouth_position: "media anterior" },
            { vowel: "i", sound: "[i]", example: "vino", mouth_position: "cerrada anterior" },
            { vowel: "o", sound: "[o]", example: "solo", mouth_position: "media posterior" },
            { vowel: "u", sound: "[u]", example: "tutto", mouth_position: "cerrada posterior" }
          ],
          nasal: []
        },
        semiconsonants: [
          { sound: "j", example: "ieri", description: "[j] inicial" },
          { sound: "w", example: "uomo", description: "[w] inicial" }
        ],
        accents: [
          { type: "grave", function: "final stressed", example: "città", rule: "`" },
          { type: "acute", function: "final stressed", example: "perché", rule: "´" }
        ]
      },

      articles: {
        definite: [
          { type: "Masculino singular", form: "il", example: "il libro", usage: "antes de consonante" },
          { type: "Masculino (s+cons)", form: "lo", example: "lo studente", usage: "antes de s+consonante, z, gn, ps, x, y" },
          { type: "Femenino singular", form: "la", example: "la casa", usage: "antes de consonante" },
          { type: "Elisión", form: "l'", example: "l'amico", usage: "antes de vocal" }
        ],
        indefinite: [
          { type: "Masculino singular", form: "un", example: "un gatto", usage: "masculino general" },
          { type: "Masculino (s+cons)", form: "uno", example: "uno studente", usage: "antes de s+consonante, z, etc." },
          { type: "Femenino singular", form: "una", example: "una casa", usage: "femenino general" },
          { type: "Elisión femenino", form: "un'", example: "un'amica", usage: "femenino antes de vocal" }
        ],
        contracted: [
          { contraction: "del", components: "di + il", example: "del ragazzo", usage: "preposición + artículo masculino" },
          { contraction: "della", components: "di + la", example: "della ragazza", usage: "preposición + artículo femenino" }
        ],
        partitive: [
          { form: "del", usage: "masculino singular", example: "del pane", translation: "algo de pan" },
          { form: "della", usage: "femenino singular", example: "della pasta", translation: "algo de pasta" }
        ]
      },

      verbs: {
        library: [
          { infinitive: "parlare", spanish: "hablar", type: "regular", category: "-are" },
          { infinitive: "credere", spanish: "creer", type: "regular", category: "-ere" },
          { infinitive: "dormire", spanish: "dormir", type: "regular", category: "-ire" },
          { infinitive: "essere", spanish: "ser/estar", type: "irregular", category: "auxiliary" },
          { infinitive: "avere", spanish: "tener", type: "irregular", category: "auxiliary" }
        ],
        regular: [
          { infinitive: "parlare", type: "-are", example: "io parlo, tu parli, lui parla" },
          { infinitive: "credere", type: "-ere", example: "io credo, tu credi, lui crede" },
          { infinitive: "dormire", type: "-ire", example: "io dormo, tu dormi, lui dorme" }
        ],
        irregular: [
          { infinitive: "essere", conjugation: "io sono, tu sei, lui è", example: "Io sono italiano" },
          { infinitive: "avere", conjugation: "io ho, tu hai, lui ha", example: "Ho fame" },
          { infinitive: "fare", conjugation: "io faccio, tu fai, lui fa", example: "Faccio colazione" }
        ],
        auxiliary: [
          { verb: "essere", usage: "motion verbs", example: "sono andato" },
          { verb: "avere", usage: "transitive verbs", example: "ho mangiato" }
        ],
        imperative: [
          { form: "parla!", example: "Parla più forte!", translation: "¡Habla más fuerte!" },
          { form: "parli!", example: "Parli con il dottore", translation: "Hable con el doctor" }
        ],
        modal: [
          { verb: "dovere", meaning: "deber", example: "devo andare" },
          { verb: "potere", meaning: "poder", example: "posso parlare" },
          { verb: "volere", meaning: "querer", example: "voglio mangiare" }
        ]
      },

      pronouns: {
        subject: [
          { spanish: "Yo", target: "Io", example: "Io parlo" },
          { spanish: "Tú", target: "Tu", example: "Tu parli" },
          { spanish: "Él/Ella", target: "Lui/Lei", example: "Lei parla" },
          { spanish: "Nosotros", target: "Noi", example: "Noi parliamo" },
          { spanish: "Vosotros", target: "Voi", example: "Voi parlate" },
          { spanish: "Ellos/Ellas", target: "Loro", example: "Loro parlano" }
        ],
        tonic: [
          { spanish: "Mí", target: "me", example: "per me", usage: "después de preposición" },
          { spanish: "Ti", target: "te", example: "con te", usage: "después de preposición" },
          { spanish: "Él/Ella", target: "lui/lei", example: "da lui", usage: "después de preposición" }
        ],
        reflexive: [
          { spanish: "Me", target: "mi", example: "mi lavo" },
          { spanish: "Te", target: "ti", example: "ti lavi" },
          { spanish: "Se", target: "si", example: "si lava" }
        ],
        invariable: [
          { spanish: "Esto", target: "questo", example: "questo libro" },
          { spanish: "Eso", target: "quello", example: "quello casa" },
          { spanish: "Aquí", target: "qui", example: "qui presente" }
        ],
        direct_object: [
          { spanish: "Me", target: "mi", example: "mi vede" },
          { spanish: "Te", target: "ti", example: "ti chiamo" },
          { spanish: "Lo/La", target: "lo/la", example: "lo conosco" }
        ],
        indirect_object: [
          { spanish: "Me", target: "mi", example: "mi dà" },
          { spanish: "Te", target: "ti", example: "ti parlo" },
          { spanish: "Le", target: "gli/le", example: "gli dico" }
        ]
      },

      tenses: {
        present: [
          { pronoun: "Io", conjugation: "parlo", example: "Io parlo italiano" },
          { pronoun: "Tu", conjugation: "parli", example: "Tu parli bene" },
          { pronoun: "Lui/Lei", conjugation: "parla", example: "Lei parla piano" }
        ],
        past_simple: [
          { pronoun: "Io", conjugation: "parlai", example: "Parlai con lui ieri" },
          { pronoun: "Tu", conjugation: "parlasti", example: "Parlasti molto bene" },
          { pronoun: "Lui/Lei", conjugation: "parlò", example: "Parlò per un'ora" }
        ],
        past_compound: [
          { pronoun: "Io", conjugation: "ho parlato", example: "Ho parlato con Marco" },
          { pronoun: "Tu", conjugation: "hai parlato", example: "Hai parlato chiaramente" },
          { pronoun: "Lui/Lei", conjugation: "ha parlato", example: "Ha parlato di te" }
        ],
        past_imperfect: [
          { pronoun: "Io", conjugation: "parlavo", example: "Parlavo sempre italiano" },
          { pronoun: "Tu", conjugation: "parlavi", example: "Parlavi da bambino" },
          { pronoun: "Lui/Lei", conjugation: "parlava", example: "Parlava lentamente" }
        ],
        past_pluperfect: [
          { pronoun: "Io", conjugation: "avevo parlato", example: "Avevo parlato già" },
          { pronoun: "Tu", conjugation: "avevi parlato", example: "Avevi parlato prima" },
          { pronoun: "Lui/Lei", conjugation: "aveva parlato", example: "Aveva parlato chiaramente" }
        ],
        future: [
          { pronoun: "Io", conjugation: "parlerò", example: "Parlerò domani" },
          { pronoun: "Tu", conjugation: "parlerai", example: "Parlerai meglio" },
          { pronoun: "Lui/Lei", conjugation: "parlerà", example: "Parlerà più tardi" }
        ],
        conditional: [
          { pronoun: "Io", conjugation: "parlerei", example: "Parlerei volentieri" },
          { pronoun: "Tu", conjugation: "parleresti", example: "Parleresti meglio" },
          { pronoun: "Lui/Lei", conjugation: "parlerebbe", example: "Parlerebbe di più" }
        ],
        subjunctive: [
          { pronoun: "Io", conjugation: "parli", example: "Che io parli bene" },
          { pronoun: "Tu", conjugation: "parli", example: "Che tu parli forte" },
          { pronoun: "Lui/Lei", conjugation: "parli", example: "Che lei parli italiano" }
        ]
      },

      culturalNotes: [
        { aspect: "Gestos", note: "Los italianos usan las manos para expresarse", example: "Gesto de 'che cosa?'" },
        { aspect: "Cortesía", note: "Lei formal vs tu informal es importante", example: "Come sta? vs Come stai?" },
        { aspect: "Entonación", note: "La melodía es crucial en italiano", example: "Subir y bajar el tono" }
      ],

      // Missing required properties - placeholders
      numbers: [
        { number: 1, word: "uno", ordinal: "primo", usage: "masculine singular" }
      ],
      geometry: [
        { shape: "quadrato", spanish: "cuadrado", properties: "4 lados iguales" }
      ],
      colors: [
        { color: "rosso", spanish: "rojo", variations: "rosso/rossa", usage: "basic color" }
      ],
      time: {
        months: [{ month: "gennaio", spanish: "enero", season: "inverno", abbreviation: "gen" }],
        days: [{ day: "lunedì", spanish: "lunes", abbreviation: "lun", position: 1 }],
        seasons: [{ season: "estate", spanish: "verano", months: "giugno-agosto", characteristics: "caldo" }],
        telling_time: {
          formal: [{ time: "13:00", target: "tredici", spanish: "las trece" }],
          colloquial: [{ time: "1:00", target: "una", spanish: "la una" }]
        }
      },
      animals: [
        { animal: "gatto", spanish: "gato", category: "domestico", sounds: "miao" }
      ],
      plants: [
        { plant: "rosa", spanish: "rosa", category: "fiore", characteristics: "profumata" }
      ],
      family: {
        members: [{ member: "padre", spanish: "padre", gender: "maschile", generation: "genitore" }],
        civil_status: [{ status: "sposato", spanish: "casado", description: "married" }]
      },
      professions: [
        { profession: "dottore", spanish: "médico", masculine: "dottore", feminine: "dottoressa", workplace: "ospedale" }
      ],
      materials: {
        school: [{ material: "carta", spanish: "papel", usage: "scrivere", characteristics: "bianca" }],
        fabrics: [{ fabric: "cotone", spanish: "algodón", texture: "morbido", usage: "vestiti" }]
      },
      weather: [
        { condition: "sole", spanish: "sol", description: "bel tempo", vocabulary: "fa sole" }
      ],
      food: [
        { food: "pasta", spanish: "pasta", category: "primo", preparation: "bollita" }
      ],
      body: {
        parts: [{ part: "testa", spanish: "cabeza", location: "sopra", function: "pensare" }],
        physical_description: [{ trait: "alto", spanish: "alto", category: "statura", variations: "alto/alta" }]
      },
      clothing: {
        garments: [{ garment: "camicia", spanish: "camisa", category: "sopra", season: "sempre" }],
        accessories: [{ accessory: "orologio", spanish: "reloj", usage: "tempo", style: "classico" }]
      },
      connectors: [
        { spanish: "y", target: "e", type: "conjunción", example: "io e tu" }
      ],
      // Removed invalid interrogation property
      adverbs: {
        frequency: [{ adverb: "sempre", spanish: "siempre", example: "sempre bene", position: "después del verbo" }],
        manner: [{ adverb: "bene", spanish: "bien", example: "parlo bene" }],
        time: [{ adverb: "oggi", spanish: "hoy", example: "oggi è bello" }]
      },
      verbal_periphrases: [
        { structure: "stare + gerundio", meaning: "acción continua", example: "sto parlando", spanish: "estoy hablando" }
      ],
      prepositions: {
        place: [{ spanish: "en", target: "in", example: "in casa" }],
        time: [{ spanish: "a", target: "a", example: "alle tre" }],
        movement: [{ spanish: "a", target: "a", example: "vado a Roma" }],
        manner: [{ spanish: "con", target: "con", example: "con amore" }]
      },
      sentenceStructure: {
        basic: "Soggetto + Verbo + Oggetto",
        questions: "Parola interrogativa + verbo + soggetto",
        negations: "Soggetto + non + verbo",
        imperatives: "Verbo + complemento"
      },
      character: [
        { trait: "gentile", spanish: "amable", positive_negative: "positive", example: "persona gentile" }
      ],
      negation: {
        basic: [{ rule: "non + verbo", example: "non parlo", translation: "no hablo" }],
        advanced: [{ rule: "mai + verbo", example: "non parlo mai", translation: "nunca hablo" }]
      },
      questions: {
        yesNo: [{ structure: "Parli?", example: "Parli italiano?", translation: "¿Hablas italiano?" }],
        open: [{ word: "cosa", example: "Cosa è?", translation: "¿Qué es?" }],
        responses: [{ question_type: "sì/no", affirmative: "Sì", negative: "No", neutral: "Forse" }]
      },

      examples: [
        { rule: "Passato prossimo", example: "Ho mangiato la pizza", translation: "He comido pizza" },
        { rule: "Congiuntivo", example: "Penso che sia giusto", translation: "Creo que está bien" },
        { rule: "Condizionale", example: "Vorrei un caffè", translation: "Querría un café" }
      ]
    }
  },
  {
    id: "portuguese",
    name: "Portugués", 
    nativeName: "Português",
    flag: "🇵🇹",
    color: "from-yellow-600 to-yellow-800",
    description: "A língua do coração",
    vocabulary: [
      { word: "Olá", translation: "Hola" },
      { word: "Obrigado/a", translation: "Gracias" },
      { word: "Tchau", translation: "Adiós" },
      { word: "Por favor", translation: "Por favor" }
    ],
    grammar: {
      basic: "Los artículos definidos: o (masculino), a (femenino), os/as (plural). Los verbos regulares terminan en -ar, -er, -ir. El portugués tiene nasalización distintiva.",
      intermediate: "Los tiempos compuestos usan ter/haver + participio. Los pronombres oblíquos tienen colocación variable. El gerúndio expresa acción continua.",
      advanced: "El subjuntivo tiene múltiples usos modales. El infinitivo personal es único del portugués. La colocação pronominal depende del registro y la sintaxis.",

      greetings: {
        formal: [
          { target: "Bom dia", spanish: "Buenos días", context: "Hasta las 12h" },
          { target: "Boa tarde", spanish: "Buenas tardes", context: "12h-19h" },
          { target: "Boa noite", spanish: "Buenas noches", context: "Después de las 19h" }
        ],
        informal: [
          { target: "Olá", spanish: "Hola", context: "Cualquier momento del día" },
          { target: "Como está?", spanish: "¿Cómo está?", context: "Pregunta de cortesía" }
        ],
        responses: [
          { greeting: "Como está?", response: "Estou bem", spanish: "Estoy bien" },
          { greeting: "Tudo bem?", response: "Tudo bem", spanish: "Todo bien" }
        ]
      },

      geography: {
        countries: [
          { country: "Portugal", spanish: "Portugal", capital: "Lisboa", demonym: "português" },
          { country: "Brasil", spanish: "Brasil", capital: "Brasília", demonym: "brasileiro" },
          { country: "Cabo Verde", spanish: "Cabo Verde", capital: "Praia", demonym: "cabo-verdiano" }
        ],
        cities: [
          { city: "Lisboa", spanish: "Lisboa", country: "Portugal" },
          { city: "Porto", spanish: "Oporto", country: "Portugal" },
          { city: "São Paulo", spanish: "São Paulo", country: "Brasil" },
          { city: "Rio de Janeiro", spanish: "Río de Janeiro", country: "Brasil" }
        ],
        nationalities: [
          { nationality: "português", spanish: "portugués", masculine: "português", feminine: "portuguesa" },
          { nationality: "brasileiro", spanish: "brasileño", masculine: "brasileiro", feminine: "brasileira" }
        ]
      },

      pronunciation: {
        alphabet: [
          { letter: "A", sound: "[a]", example: "casa", spanish: "a como en 'casa'" },
          { letter: "Ã", sound: "[ã]", example: "mãe", spanish: "a nasal" },
          { letter: "E", sound: "[e]", example: "mesa", spanish: "e cerrada" },
          { letter: "Ê", sound: "[e]", example: "você", spanish: "e cerrada tónica" },
          { letter: "O", sound: "[o]", example: "bolo", spanish: "o cerrada" },
          { letter: "Õ", sound: "[õ]", example: "pão", spanish: "o nasal" }
        ],
        consonants: [
          { consonant: "R", sound: "[ʁ]", position: "fricativa uvular", example: "carro" },
          { consonant: "LH", sound: "[ʎ]", position: "lateral palatal", example: "filho" },
          { consonant: "NH", sound: "[ɲ]", position: "nasal palatal", example: "sonho" },
          { consonant: "CH", sound: "[ʃ]", position: "fricativa postalveolar", example: "chave" }
        ],
        vowels: {
          oral: [
            { vowel: "a", sound: "[a]", example: "casa", mouth_position: "abierta central" },
            { vowel: "e", sound: "[e]", example: "mesa", mouth_position: "media anterior" },
            { vowel: "i", sound: "[i]", example: "vida", mouth_position: "cerrada anterior" },
            { vowel: "o", sound: "[o]", example: "bolo", mouth_position: "media posterior" },
            { vowel: "u", sound: "[u]", example: "tudo", mouth_position: "cerrada posterior" }
          ],
          nasal: [
            { vowel: "ã", sound: "[ã]", example: "mãe", nasalization: "nasal", mouth_position: "abierta central nasal" },
            { vowel: "ẽ", sound: "[ẽ]", example: "tem", nasalization: "nasal", mouth_position: "media anterior nasal" },
            { vowel: "õ", sound: "[õ]", example: "pão", nasalization: "nasal", mouth_position: "media posterior nasal" }
          ]
        },
        semiconsonants: [
          { sound: "j", example: "maio", description: "[j] inicial/medial" },
          { sound: "w", example: "mau", description: "[w] final de diptongo" }
        ],
        accents: [
          { type: "acute", function: "stressed vowel", example: "café", rule: "´" },
          { type: "circumflex", function: "closed stressed", example: "você", rule: "^" },
          { type: "grave", function: "contraction", example: "à", rule: "`" },
          { type: "tilde", function: "nasalization", example: "ã", rule: "~" }
        ]
      },

      articles: {
        definite: [
          { type: "Masculino singular", form: "o", example: "o livro", usage: "masculino general" },
          { type: "Femenino singular", form: "a", example: "a casa", usage: "femenino general" },
          { type: "Masculino plural", form: "os", example: "os livros", usage: "masculino plural" },
          { type: "Femenino plural", form: "as", example: "as casas", usage: "femenino plural" }
        ],
        indefinite: [
          { type: "Masculino singular", form: "um", example: "um gato", usage: "masculino general" },
          { type: "Femenino singular", form: "uma", example: "uma casa", usage: "femenino general" },
          { type: "Masculino plural", form: "uns", example: "uns livros", usage: "masculino plural" },
          { type: "Femenino plural", form: "umas", example: "umas casas", usage: "femenino plural" }
        ],
        contracted: [
          { contraction: "do", components: "de + o", example: "do menino", usage: "preposición + artículo masculino" },
          { contraction: "da", components: "de + a", example: "da menina", usage: "preposición + artículo femenino" },
          { contraction: "no", components: "em + o", example: "no livro", usage: "en + artículo masculino" },
          { contraction: "na", components: "em + a", example: "na mesa", usage: "en + artículo femenino" }
        ],
        partitive: [
          { form: "algum", usage: "masculino singular", example: "algum pão", translation: "algo de pan" },
          { form: "alguma", usage: "femenino singular", example: "alguma água", translation: "algo de agua" }
        ]
      },

      verbs: {
        library: [
          { infinitive: "falar", spanish: "hablar", type: "regular", category: "-ar" },
          { infinitive: "comer", spanish: "comer", type: "regular", category: "-er" },
          { infinitive: "partir", spanish: "partir", type: "regular", category: "-ir" },
          { infinitive: "ser", spanish: "ser", type: "irregular", category: "auxiliary" },
          { infinitive: "ter", spanish: "tener", type: "irregular", category: "auxiliary" }
        ],
        regular: [
          { infinitive: "falar", type: "-ar", example: "eu falo, tu falas, ele fala" },
          { infinitive: "comer", type: "-er", example: "eu como, tu comes, ele come" },
          { infinitive: "partir", type: "-ir", example: "eu parto, tu partes, ele parte" }
        ],
        irregular: [
          { infinitive: "ser", conjugation: "eu sou, tu és, ele é", example: "Eu sou português" },
          { infinitive: "ter", conjugation: "eu tenho, tu tens, ele tem", example: "Tenho fome" },
          { infinitive: "ir", conjugation: "eu vou, tu vais, ele vai", example: "Vou ao cinema" }
        ],
        auxiliary: [
          { verb: "ter", usage: "perfect tenses", example: "tenho falado" },
          { verb: "haver", usage: "perfect tenses (formal)", example: "hei de falar" }
        ],
        imperative: [
          { form: "fala!", example: "Fala mais alto!", translation: "¡Habla más alto!" },
          { form: "fale!", example: "Fale com o médico", translation: "Hable con el médico" }
        ],
        modal: [
          { verb: "poder", meaning: "poder", example: "posso falar" },
          { verb: "dever", meaning: "deber", example: "devo ir" },
          { verb: "querer", meaning: "querer", example: "quero comer" }
        ]
      },

      pronouns: {
        subject: [
          { spanish: "Yo", target: "Eu", example: "Eu falo" },
          { spanish: "Tú", target: "Tu", example: "Tu falas" },
          { spanish: "Él/Ella", target: "Ele/Ela", example: "Ela fala" },
          { spanish: "Nosotros", target: "Nós", example: "Nós falamos" },
          { spanish: "Vosotros", target: "Vós", example: "Vós falais" },
          { spanish: "Ellos/Ellas", target: "Eles/Elas", example: "Eles falam" }
        ],
        tonic: [
          { spanish: "Mí", target: "mim", example: "para mim", usage: "después de preposición" },
          { spanish: "Ti", target: "ti", example: "para ti", usage: "después de preposición" },
          { spanish: "Él/Ella", target: "ele/ela", example: "para ele", usage: "después de preposición" }
        ],
        reflexive: [
          { spanish: "Me", target: "me", example: "eu me lavo" },
          { spanish: "Te", target: "te", example: "tu te lavas" },
          { spanish: "Se", target: "se", example: "ele se lava" }
        ],
        invariable: [
          { spanish: "Esto", target: "isto", example: "isto é bom" },
          { spanish: "Eso", target: "isso", example: "isso é legal" },
          { spanish: "Aquello", target: "aquilo", example: "aquilo é grande" }
        ],
        direct_object: [
          { spanish: "Me", target: "me", example: "ele me vê" },
          { spanish: "Te", target: "te", example: "eu te chamo" },
          { spanish: "Lo/La", target: "o/a", example: "eu o conheço" }
        ],
        indirect_object: [
          { spanish: "Me", target: "me", example: "ele me dá" },
          { spanish: "Te", target: "te", example: "eu te falo" },
          { spanish: "Le", target: "lhe", example: "eu lhe digo" }
        ]
      },

      tenses: {
        present: [
          { pronoun: "Eu", conjugation: "falo", example: "Eu falo português" },
          { pronoun: "Tu", conjugation: "falas", example: "Tu falas bem" },
          { pronoun: "Ele/Ela", conjugation: "fala", example: "Ela fala devagar" }
        ],
        past_simple: [
          { pronoun: "Eu", conjugation: "falei", example: "Eu falei com ele ontem" },
          { pronoun: "Tu", conjugation: "falaste", example: "Tu falaste muito bem" },
          { pronoun: "Ele/Ela", conjugation: "falou", example: "Ele falou por uma hora" }
        ],
        past_compound: [
          { pronoun: "Eu", conjugation: "tenho falado", example: "Tenho falado com o Marco" },
          { pronoun: "Tu", conjugation: "tens falado", example: "Tens falado claramente" },
          { pronoun: "Ele/Ela", conjugation: "tem falado", example: "Tem falado de ti" }
        ],
        past_imperfect: [
          { pronoun: "Eu", conjugation: "falava", example: "Falava sempre português" },
          { pronoun: "Tu", conjugation: "falavas", example: "Falavas quando eras pequeno" },
          { pronoun: "Ele/Ela", conjugation: "falava", example: "Falava devagar" }
        ],
        past_pluperfect: [
          { pronoun: "Eu", conjugation: "tinha falado", example: "Tinha falado já" },
          { pronoun: "Tu", conjugation: "tinhas falado", example: "Tinhas falado antes" },
          { pronoun: "Ele/Ela", conjugation: "tinha falado", example: "Tinha falado claramente" }
        ],
        future: [
          { pronoun: "Eu", conjugation: "falarei", example: "Falarei amanhã" },
          { pronoun: "Tu", conjugation: "falarás", example: "Falarás melhor" },
          { pronoun: "Ele/Ela", conjugation: "falará", example: "Falará mais tarde" }
        ],
        conditional: [
          { pronoun: "Eu", conjugation: "falaria", example: "Falaria com prazer" },
          { pronoun: "Tu", conjugation: "falarias", example: "Falarias melhor" },
          { pronoun: "Ele/Ela", conjugation: "falaria", example: "Falaria mais" }
        ],
        subjunctive: [
          { pronoun: "Eu", conjugation: "fale", example: "Que eu fale bem" },
          { pronoun: "Tu", conjugation: "fales", example: "Que tu fales forte" },
          { pronoun: "Ele/Ela", conjugation: "fale", example: "Que ela fale português" }
        ]
      },

      culturalNotes: [
        { aspect: "Formalidad", note: "Você vs tu varía según la región", example: "Brasil usa você, Portugal prefiere tu" },
        { aspect: "Nasalización", note: "Las vocales nasales son distintivas", example: "pão [pãw̃] vs pau [paw]" }
      ],

      character: [
        { trait: "simpático", spanish: "simpático", positive_negative: "positive", example: "pessoa simpática" }
      ],
      negation: {
        basic: [{ rule: "não + verbo", example: "não falo", translation: "no hablo" }],
        advanced: [{ rule: "nunca + verbo", example: "nunca falo", translation: "nunca hablo" }]
      },
      questions: {
        yesNo: [{ structure: "Falas?", example: "Falas português?", translation: "¿Hablas portugués?" }],
        open: [{ word: "que", example: "Que é isto?", translation: "¿Qué es esto?" }],
        responses: [{ question_type: "sim/não", affirmative: "Sim", negative: "Não", neutral: "Talvez" }]
      },

      // Missing required properties - placeholders
      numbers: [
        { number: 1, word: "um", ordinal: "primeiro", usage: "masculine" }
      ],
      geometry: [
        { shape: "quadrado", spanish: "cuadrado", properties: "4 lados iguais" }
      ],
      colors: [
        { color: "vermelho", spanish: "rojo", variations: "vermelho/vermelha", usage: "basic color" }
      ],
      time: {
        months: [{ month: "janeiro", spanish: "enero", season: "verão", abbreviation: "jan" }],
        days: [{ day: "segunda", spanish: "lunes", abbreviation: "seg", position: 1 }],
        seasons: [{ season: "verão", spanish: "verano", months: "dez-mar", characteristics: "quente" }],
        telling_time: {
          formal: [{ time: "13:00", target: "treze horas", spanish: "las trece" }],
          colloquial: [{ time: "1:00", target: "uma hora", spanish: "la una" }]
        }
      },
      animals: [
        { animal: "gato", spanish: "gato", category: "doméstico", sounds: "miau" }
      ],
      plants: [
        { plant: "rosa", spanish: "rosa", category: "flor", characteristics: "perfumada" }
      ],
      family: {
        members: [{ member: "pai", spanish: "padre", gender: "masculino", generation: "pais" }],
        civil_status: [{ status: "casado", spanish: "casado", description: "married" }]
      },
      professions: [
        { profession: "médico", spanish: "médico", masculine: "médico", feminine: "médica", workplace: "hospital" }
      ],
      materials: {
        school: [{ material: "papel", spanish: "papel", usage: "escrever", characteristics: "branco" }],
        fabrics: [{ fabric: "algodão", spanish: "algodón", texture: "macio", usage: "roupa" }]
      },
      weather: [
        { condition: "sol", spanish: "sol", description: "céu limpo", vocabulary: "está sol" }
      ],
      food: [
        { food: "pão", spanish: "pan", category: "básico", preparation: "assado" }
      ],
      body: {
        parts: [{ part: "cabeça", spanish: "cabeza", location: "topo", function: "pensar" }],
        physical_description: [{ trait: "alto", spanish: "alto", category: "altura", variations: "alto/alta" }]
      },
      clothing: {
        garments: [{ garment: "camisa", spanish: "camisa", category: "cima", season: "sempre" }],
        accessories: [{ accessory: "relógio", spanish: "reloj", usage: "tempo", style: "clássico" }]
      },
      connectors: [
        { spanish: "y", target: "e", type: "conjunção", example: "eu e tu" }
      ],
      adverbs: {
        frequency: [{ adverb: "sempre", spanish: "siempre", example: "sempre bem", position: "depois do verbo" }],
        manner: [{ adverb: "bem", spanish: "bien", example: "falo bem" }],
        time: [{ adverb: "hoje", spanish: "hoy", example: "hoje está bom" }]
      },
      verbal_periphrases: [
        { structure: "estar + gerúndio", meaning: "ação contínua", example: "estou falando", spanish: "estoy hablando" }
      ],
      prepositions: {
        place: [{ spanish: "en", target: "em", example: "em casa" }],
        time: [{ spanish: "a", target: "às", example: "às três" }],
        movement: [{ spanish: "a", target: "para", example: "vou para Lisboa" }],
        manner: [{ spanish: "con", target: "com", example: "com amor" }]
      },
      sentenceStructure: {
        basic: "Sujeito + Verbo + Objeto",
        questions: "Palavra interrogativa + verbo + sujeito",
        negations: "Sujeito + não + verbo",
        imperatives: "Verbo + complemento"
      },

      examples: [
        { rule: "Pretérito perfeito", example: "Eu falei com ele", translation: "Hablé con él" },
        { rule: "Subjuntivo", example: "Espero que venhas", translation: "Espero que vengas" }
      ]
    }
  },
  {
    id: "english", 
    name: "Inglés",
    nativeName: "English",
    flag: "🇺🇸",
    color: "from-blue-500 to-blue-700",
    description: "The global language",
    vocabulary: [
      { word: "Hello", translation: "Hola" },
      { word: "Thank you", translation: "Gracias" },
      { word: "Goodbye", translation: "Adiós" },
      { word: "Please", translation: "Por favor" }
    ],
    grammar: {
      basic: "Los artículos: the (definido), a/an (indefinido). Verbos regulares agregan -ed para pasado. El orden de palabras es SVO.",
      intermediate: "Tiempos perfectos usan have + participio pasado. Los modal verbs expresan habilidad, posibilidad, obligación. Los phrasal verbs son comunes.",
      advanced: "El subjuntivo es limitado en inglés moderno. Los conditional sentences tienen tres tipos. La voz pasiva se usa frecuentemente.",

      greetings: {
        formal: [
          { target: "Good morning", spanish: "Buenos días", context: "Hasta las 12h" },
          { target: "Good afternoon", spanish: "Buenas tardes", context: "12h-17h" },
          { target: "Good evening", spanish: "Buenas noches", context: "Después de las 17h" }
        ],
        informal: [
          { target: "Hello/Hi", spanish: "Hola", context: "Cualquier momento" },
          { target: "How are you?", spanish: "¿Cómo estás?", context: "Pregunta de cortesía" }
        ],
        responses: [
          { greeting: "How are you?", response: "I'm fine", spanish: "Estoy bien" },
          { greeting: "What's up?", response: "Not much", spanish: "No mucho" }
        ]
      },

      geography: {
        countries: [
          { country: "United States", spanish: "Estados Unidos", capital: "Washington D.C.", demonym: "American" },
          { country: "United Kingdom", spanish: "Reino Unido", capital: "London", demonym: "British" },
          { country: "Canada", spanish: "Canadá", capital: "Ottawa", demonym: "Canadian" },
          { country: "Australia", spanish: "Australia", capital: "Canberra", demonym: "Australian" }
        ],
        cities: [
          { city: "New York", spanish: "Nueva York", country: "United States" },
          { city: "London", spanish: "Londres", country: "United Kingdom" },
          { city: "Toronto", spanish: "Toronto", country: "Canada" },
          { city: "Sydney", spanish: "Sídney", country: "Australia" }
        ],
        nationalities: [
          { nationality: "American", spanish: "estadounidense", masculine: "American", feminine: "American" },
          { nationality: "British", spanish: "británico", masculine: "British", feminine: "British" }
        ]
      },

      pronunciation: {
        alphabet: [
          { letter: "A", sound: "[eɪ]", example: "name", spanish: "ei como diptongo" },
          { letter: "E", sound: "[i:]", example: "see", spanish: "i larga" },
          { letter: "I", sound: "[aɪ]", example: "time", spanish: "ai diptongo" },
          { letter: "O", sound: "[oʊ]", example: "hope", spanish: "ou diptongo" },
          { letter: "U", sound: "[ju:]", example: "use", spanish: "iu diptongo" }
        ],
        consonants: [
          { consonant: "TH", sound: "[θ]/[ð]", position: "fricativa dental", example: "think/this" },
          { consonant: "R", sound: "[ɹ]", position: "aproximante alveolar", example: "red" },
          { consonant: "W", sound: "[w]", position: "semiconsonante", example: "water" },
          { consonant: "H", sound: "[h]", position: "fricativa glotal", example: "house" }
        ],
        vowels: {
          oral: [
            { vowel: "i:", sound: "[i:]", example: "see", mouth_position: "cerrada anterior larga" },
            { vowel: "ɪ", sound: "[ɪ]", example: "sit", mouth_position: "semicerrada anterior corta" },
            { vowel: "æ", sound: "[æ]", example: "cat", mouth_position: "abierta anterior" },
            { vowel: "ʌ", sound: "[ʌ]", example: "cup", mouth_position: "media central" },
            { vowel: "u:", sound: "[u:]", example: "too", mouth_position: "cerrada posterior larga" }
          ],
          nasal: []
        },
        semiconsonants: [
          { sound: "j", example: "yes", description: "[j] inicial" },
          { sound: "w", example: "water", description: "[w] inicial" }
        ],
        accents: [
          { type: "stress", function: "primary stress", example: "ˈwater", rule: "ˈ" },
          { type: "secondary", function: "secondary stress", example: "ˌunderˈstand", rule: "ˌ" }
        ]
      },

      articles: {
        definite: [
          { type: "Definido", form: "the", example: "the book", usage: "único artículo definido" }
        ],
        indefinite: [
          { type: "Indefinido", form: "a", example: "a cat", usage: "antes de consonante" },
          { type: "Indefinido", form: "an", example: "an apple", usage: "antes de vocal" }
        ],
        contracted: [],
        partitive: [
          { form: "some", usage: "cantidades indefinidas", example: "some water", translation: "algo de agua" },
          { form: "any", usage: "negativos/interrogativos", example: "any questions", translation: "alguna pregunta" }
        ]
      },

      verbs: {
        library: [
          { infinitive: "to speak", spanish: "hablar", type: "regular", category: "regular" },
          { infinitive: "to eat", spanish: "comer", type: "irregular", category: "irregular" },
          { infinitive: "to go", spanish: "ir", type: "irregular", category: "irregular" },
          { infinitive: "to be", spanish: "ser/estar", type: "irregular", category: "auxiliary" },
          { infinitive: "to have", spanish: "tener", type: "irregular", category: "auxiliary" }
        ],
        regular: [
          { infinitive: "speak", type: "regular", example: "I speak, you speak, he speaks" },
          { infinitive: "walk", type: "regular", example: "I walk, you walk, she walks" },
          { infinitive: "work", type: "regular", example: "I work, you work, they work" }
        ],
        irregular: [
          { infinitive: "be", conjugation: "I am, you are, he is", example: "I am American" },
          { infinitive: "have", conjugation: "I have, you have, she has", example: "I have a car" },
          { infinitive: "go", conjugation: "I go, you go, he goes", example: "I go to work" }
        ],
        auxiliary: [
          { verb: "be", usage: "continuous tenses", example: "I am speaking" },
          { verb: "have", usage: "perfect tenses", example: "I have spoken" }
        ],
        imperative: [
          { form: "speak!", example: "Speak louder!", translation: "¡Habla más fuerte!" },
          { form: "don't speak!", example: "Don't speak!", translation: "¡No hables!" }
        ],
        modal: [
          { verb: "can", meaning: "poder", example: "I can speak" },
          { verb: "must", meaning: "deber", example: "I must go" },
          { verb: "will", meaning: "futuro", example: "I will speak" }
        ]
      },

      pronouns: {
        subject: [
          { spanish: "Yo", target: "I", example: "I speak" },
          { spanish: "Tú", target: "You", example: "You speak" },
          { spanish: "Él/Ella", target: "He/She", example: "She speaks" },
          { spanish: "Nosotros", target: "We", example: "We speak" },
          { spanish: "Vosotros", target: "You", example: "You speak" },
          { spanish: "Ellos/Ellas", target: "They", example: "They speak" }
        ],
        tonic: [
          { spanish: "Mí", target: "me", example: "for me", usage: "después de preposición" },
          { spanish: "Ti", target: "you", example: "for you", usage: "después de preposición" },
          { spanish: "Él/Ella", target: "him/her", example: "for him", usage: "después de preposición" }
        ],
        reflexive: [
          { spanish: "Me", target: "myself", example: "I wash myself" },
          { spanish: "Te", target: "yourself", example: "you wash yourself" },
          { spanish: "Se", target: "himself/herself", example: "he washes himself" }
        ],
        invariable: [
          { spanish: "Esto", target: "this", example: "this book" },
          { spanish: "Eso", target: "that", example: "that house" },
          { spanish: "Aquello", target: "that", example: "that over there" }
        ],
        direct_object: [
          { spanish: "Me", target: "me", example: "he sees me" },
          { spanish: "Te", target: "you", example: "I call you" },
          { spanish: "Lo/La", target: "him/her/it", example: "I know him" }
        ],
        indirect_object: [
          { spanish: "Me", target: "me", example: "he gives me" },
          { spanish: "Te", target: "you", example: "I tell you" },
          { spanish: "Le", target: "him/her", example: "I speak to him" }
        ]
      },

      tenses: {
        present: [
          { pronoun: "I", conjugation: "speak", example: "I speak English" },
          { pronoun: "You", conjugation: "speak", example: "You speak well" },
          { pronoun: "He/She", conjugation: "speaks", example: "She speaks slowly" }
        ],
        past_simple: [
          { pronoun: "I", conjugation: "spoke", example: "I spoke with him yesterday" },
          { pronoun: "You", conjugation: "spoke", example: "You spoke very well" },
          { pronoun: "He/She", conjugation: "spoke", example: "He spoke for an hour" }
        ],
        past_compound: [
          { pronoun: "I", conjugation: "have spoken", example: "I have spoken with Mark" },
          { pronoun: "You", conjugation: "have spoken", example: "You have spoken clearly" },
          { pronoun: "He/She", conjugation: "has spoken", example: "She has spoken about you" }
        ],
        past_imperfect: [
          { pronoun: "I", conjugation: "was speaking", example: "I was speaking English" },
          { pronoun: "You", conjugation: "were speaking", example: "You were speaking as a child" },
          { pronoun: "He/She", conjugation: "was speaking", example: "He was speaking slowly" }
        ],
        past_pluperfect: [
          { pronoun: "I", conjugation: "had spoken", example: "I had spoken already" },
          { pronoun: "You", conjugation: "had spoken", example: "You had spoken before" },
          { pronoun: "He/She", conjugation: "had spoken", example: "She had spoken clearly" }
        ],
        future: [
          { pronoun: "I", conjugation: "will speak", example: "I will speak tomorrow" },
          { pronoun: "You", conjugation: "will speak", example: "You will speak better" },
          { pronoun: "He/She", conjugation: "will speak", example: "She will speak later" }
        ],
        conditional: [
          { pronoun: "I", conjugation: "would speak", example: "I would speak gladly" },
          { pronoun: "You", conjugation: "would speak", example: "You would speak better" },
          { pronoun: "He/She", conjugation: "would speak", example: "She would speak more" }
        ],
        subjunctive: [
          { pronoun: "I", conjugation: "speak", example: "That I speak well" },
          { pronoun: "You", conjugation: "speak", example: "That you speak loudly" },
          { pronoun: "He/She", conjugation: "speak", example: "That she speak English" }
        ]
      },

      culturalNotes: [
        { aspect: "Formalidad", note: "Menos niveles formales que otros idiomas", example: "You para todos los contextos" },
        { aspect: "Phrasal verbs", note: "Verbos + preposiciones cambian el significado", example: "look up = buscar información" }
      ],

      // Missing required properties - placeholders
      numbers: [
        { number: 1, word: "one", ordinal: "first", usage: "singular" }
      ],
      geometry: [
        { shape: "square", spanish: "cuadrado", properties: "4 equal sides" }
      ],
      colors: [
        { color: "red", spanish: "rojo", variations: "red", usage: "basic color" }
      ],
      time: {
        months: [{ month: "January", spanish: "enero", season: "winter", abbreviation: "Jan" }],
        days: [{ day: "Monday", spanish: "lunes", abbreviation: "Mon", position: 1 }],
        seasons: [{ season: "summer", spanish: "verano", months: "Jun-Aug", characteristics: "hot" }],
        telling_time: {
          formal: [{ time: "13:00", target: "thirteen hundred", spanish: "las trece" }],
          colloquial: [{ time: "1:00", target: "one o'clock", spanish: "la una" }]
        }
      },
      animals: [
        { animal: "cat", spanish: "gato", category: "domestic", sounds: "meow" }
      ],
      plants: [
        { plant: "rose", spanish: "rosa", category: "flower", characteristics: "fragrant" }
      ],
      family: {
        members: [{ member: "father", spanish: "padre", gender: "male", generation: "parent" }],
        civil_status: [{ status: "married", spanish: "casado", description: "wed" }]
      },
      professions: [
        { profession: "doctor", spanish: "médico", masculine: "doctor", feminine: "doctor", workplace: "hospital" }
      ],
      materials: {
        school: [{ material: "paper", spanish: "papel", usage: "writing", characteristics: "white" }],
        fabrics: [{ fabric: "cotton", spanish: "algodón", texture: "soft", usage: "clothing" }]
      },
      weather: [
        { condition: "sunny", spanish: "soleado", description: "clear sky", vocabulary: "it's sunny" }
      ],
      food: [
        { food: "bread", spanish: "pan", category: "staple", preparation: "baked" }
      ],
      body: {
        parts: [{ part: "head", spanish: "cabeza", location: "top", function: "thinking" }],
        physical_description: [{ trait: "tall", spanish: "alto", category: "height", variations: "tall" }]
      },
      clothing: {
        garments: [{ garment: "shirt", spanish: "camisa", category: "top", season: "all" }],
        accessories: [{ accessory: "watch", spanish: "reloj", usage: "time", style: "classic" }]
      },
      connectors: [
        { spanish: "y", target: "and", type: "conjunction", example: "you and me" }
      ],
      adverbs: {
        frequency: [{ adverb: "always", spanish: "siempre", example: "always good", position: "before verb" }],
        manner: [{ adverb: "well", spanish: "bien", example: "speak well" }],
        time: [{ adverb: "today", spanish: "hoy", example: "today is good" }]
      },
      verbal_periphrases: [
        { structure: "be + -ing", meaning: "continuous action", example: "I am speaking", spanish: "estoy hablando" }
      ],
      prepositions: {
        place: [{ spanish: "en", target: "in", example: "in the house" }],
        time: [{ spanish: "a", target: "at", example: "at three" }],
        movement: [{ spanish: "a", target: "to", example: "go to London" }],
        manner: [{ spanish: "con", target: "with", example: "with love" }]
      },
      sentenceStructure: {
        basic: "Subject + Verb + Object",
        questions: "Question word + auxiliary + subject + verb",
        negations: "Subject + auxiliary + not + verb",
        imperatives: "Verb + complement"
      },
      character: [
        { trait: "kind", spanish: "amable", positive_negative: "positive", example: "kind person" }
      ],
      negation: {
        basic: [{ rule: "not + verb", example: "I do not speak", translation: "no hablo" }],
        advanced: [{ rule: "never + verb", example: "I never speak", translation: "nunca hablo" }]
      },
      questions: {
        yesNo: [{ structure: "Do you speak?", example: "Do you speak English?", translation: "¿Hablas inglés?" }],
        open: [{ word: "what", example: "What is this?", translation: "¿Qué es esto?" }],
        responses: [{ question_type: "yes/no", affirmative: "Yes", negative: "No", neutral: "Maybe" }]
      },

      examples: [
        { rule: "Present perfect", example: "I have studied English", translation: "He estudiado inglés" },
        { rule: "Passive voice", example: "The book was written", translation: "El libro fue escrito" }
      ]
    }
  },
  {
    id: "russian",
    name: "Ruso", 
    nativeName: "Русский",
    flag: "🇷🇺",
    color: "from-red-600 to-red-800", 
    description: "Язык великой литературы",
    vocabulary: [
      { word: "Привет", translation: "Hola" },
      { word: "Спасибо", translation: "Gracias" },
      { word: "До свидания", translation: "Adiós" },
      { word: "Пожалуйста", translation: "Por favor" }
    ],
    grammar: {
      basic: "El ruso tiene 6 casos: nominativo, acusativo, genitivo, dativo, instrumental, preposicional. No hay artículos. El orden de palabras es flexible.",
      intermediate: "Los verbos de movimiento tienen pares imperfectivos/perfectivos. El aspecto verbal es fundamental. Los números declinan según el caso.",
      advanced: "Los participios activos y pasivos funcionan como adjetivos. El gerundio es invariable. La voz pasiva es menos común que en español.",

      greetings: {
        formal: [
          { target: "Доброе утро", spanish: "Buenos días", context: "Hasta las 12h" },
          { target: "Добрый день", spanish: "Buenos días/tardes", context: "12h-18h" },
          { target: "Добрый вечер", spanish: "Buenas noches", context: "Después de las 18h" }
        ],
        informal: [
          { target: "Привет", spanish: "Hola", context: "Informal general" },
          { target: "Как дела?", spanish: "¿Cómo van las cosas?", context: "Entre amigos" }
        ],
        responses: [
          { greeting: "Как дела?", response: "Хорошо", spanish: "Bien" },
          { greeting: "Как поживаете?", response: "Спасибо, хорошо", spanish: "Gracias, bien" }
        ]
      },

      geography: {
        countries: [
          { country: "Россия", spanish: "Rusia", capital: "Москва", demonym: "русский" },
          { country: "Беларусь", spanish: "Bielorrusia", capital: "Минск", demonym: "белорус" },
          { country: "Украина", spanish: "Ucrania", capital: "Киев", demonym: "украинец" },
          { country: "Казахстан", spanish: "Kazajistán", capital: "Астана", demonym: "казах" }
        ],
        cities: [
          { city: "Москва", spanish: "Moscú", country: "Россия" },
          { city: "Санкт-Петербург", spanish: "San Petersburgo", country: "Россия" },
          { city: "Киев", spanish: "Kiev", country: "Украина" },
          { city: "Минск", spanish: "Minsk", country: "Беларусь" }
        ],
        nationalities: [
          { nationality: "русский", spanish: "ruso", masculine: "русский", feminine: "русская" },
          { nationality: "украинец", spanish: "ucraniano", masculine: "украинец", feminine: "украинка" }
        ]
      },

      pronunciation: {
        alphabet: [
          { letter: "А", sound: "[a]", example: "мама", spanish: "a como en 'mama'" },
          { letter: "Е", sound: "[jɛ]", example: "лес", spanish: "ye como en 'yeso'" },
          { letter: "И", sound: "[i]", example: "мир", spanish: "i como en 'mi'" },
          { letter: "О", sound: "[o]", example: "дом", spanish: "o como en 'sol'" },
          { letter: "У", sound: "[u]", example: "ум", spanish: "u como en 'tú'" },
          { letter: "Ы", sound: "[ɨ]", example: "сын", spanish: "sonido único del ruso" }
        ],
        consonants: [
          { consonant: "Р", sound: "[r]", position: "vibrante múltiple", example: "рука" },
          { consonant: "Х", sound: "[x]", position: "fricativa velar", example: "хорошо" },
          { consonant: "Ц", sound: "[ts]", position: "africada alveolar", example: "цифра" },
          { consonant: "Ч", sound: "[tʃ]", position: "africada postalveolar", example: "час" }
        ],
        vowels: {
          oral: [
            { vowel: "а", sound: "[a]", example: "мама", mouth_position: "abierta central" },
            { vowel: "е", sound: "[jɛ]", example: "лес", mouth_position: "media anterior palatalizada" },
            { vowel: "и", sound: "[i]", example: "мир", mouth_position: "cerrada anterior" },
            { vowel: "о", sound: "[o]", example: "дом", mouth_position: "media posterior" },
            { vowel: "у", sound: "[u]", example: "ум", mouth_position: "cerrada posterior" },
            { vowel: "ы", sound: "[ɨ]", example: "сын", mouth_position: "cerrada central" }
          ],
          nasal: []
        },
        semiconsonants: [
          { sound: "j", example: "май", description: "[j] final de diptongo" },
          { sound: "w", example: "буква", description: "[w] en préstamos" }
        ],
        accents: [
          { type: "stress", function: "acento tónico variable", example: "до́м", rule: "́" },
          { type: "reduction", function: "reducción vocálica", example: "молоко́ [məlɐˈko]", rule: "" }
        ]
      },

      articles: {
        definite: [],
        indefinite: [],
        contracted: [],
        partitive: [
          { form: "немного", usage: "un poco de", example: "немного хлеба", translation: "un poco de pan" },
          { form: "несколько", usage: "algunos/as", example: "несколько книг", translation: "algunos libros" }
        ]
      },

      verbs: {
        library: [
          { infinitive: "говорить", spanish: "hablar", type: "imperfective", category: "regular" },
          { infinitive: "сказать", spanish: "decir", type: "perfective", category: "regular" },
          { infinitive: "читать", spanish: "leer", type: "imperfective", category: "regular" },
          { infinitive: "быть", spanish: "ser/estar", type: "irregular", category: "auxiliary" },
          { infinitive: "иметь", spanish: "tener", type: "imperfective", category: "auxiliary" }
        ],
        regular: [
          { infinitive: "говорить", type: "imperfective", example: "я говорю, ты говоришь, он говорит" },
          { infinitive: "читать", type: "imperfective", example: "я читаю, ты читаешь, он читает" },
          { infinitive: "работать", type: "imperfective", example: "я работаю, ты работаешь, он работает" }
        ],
        irregular: [
          { infinitive: "быть", conjugation: "я есмь, ты еси, он есть", example: "Я русский" },
          { infinitive: "идти", conjugation: "я иду, ты идёшь, он идёт", example: "Иду домой" },
          { infinitive: "есть", conjugation: "я ем, ты ешь, он ест", example: "Ем суп" }
        ],
        auxiliary: [
          { verb: "быть", usage: "future tense", example: "буду говорить" },
          { verb: "иметь", usage: "possession (formal)", example: "имею книгу" }
        ],
        imperative: [
          { form: "говори!", example: "Говори громче!", translation: "¡Habla más fuerte!" },
          { form: "говорите!", example: "Говорите с врачом", translation: "Hablen con el médico" }
        ],
        modal: [
          { verb: "мочь", meaning: "poder", example: "могу говорить" },
          { verb: "должен", meaning: "deber", example: "должен идти" },
          { verb: "хотеть", meaning: "querer", example: "хочу есть" }
        ]
      },

      pronouns: {
        subject: [
          { spanish: "Yo", target: "Я", example: "Я говорю" },
          { spanish: "Tú", target: "Ты", example: "Ты говоришь" },
          { spanish: "Él/Ella", target: "Он/Она", example: "Она говорит" },
          { spanish: "Nosotros", target: "Мы", example: "Мы говорим" },
          { spanish: "Vosotros", target: "Вы", example: "Вы говорите" },
          { spanish: "Ellos/Ellas", target: "Они", example: "Они говорят" }
        ],
        tonic: [
          { spanish: "Mí", target: "меня", example: "у меня", usage: "caso genitivo" },
          { spanish: "Ti", target: "тебя", example: "у тебя", usage: "caso genitivo" },
          { spanish: "Él/Ella", target: "него/неё", example: "у него", usage: "caso genitivo" }
        ],
        reflexive: [
          { spanish: "Me", target: "себя", example: "вижу себя" },
          { spanish: "Te", target: "себя", example: "видишь себя" },
          { spanish: "Se", target: "себя", example: "видит себя" }
        ],
        invariable: [
          { spanish: "Esto", target: "это", example: "это хорошо" },
          { spanish: "Eso", target: "то", example: "то плохо" },
          { spanish: "Aquello", target: "вон то", example: "вон то далеко" }
        ],
        direct_object: [
          { spanish: "Me", target: "меня", example: "он видит меня" },
          { spanish: "Te", target: "тебя", example: "я зову тебя" },
          { spanish: "Lo/La", target: "его/её", example: "я знаю его" }
        ],
        indirect_object: [
          { spanish: "Me", target: "мне", example: "он даёт мне" },
          { spanish: "Te", target: "тебе", example: "я говорю тебе" },
          { spanish: "Le", target: "ему/ей", example: "я говорю ему" }
        ]
      },

      tenses: {
        present: [
          { pronoun: "Я", conjugation: "говорю", example: "Я говорю по-русски" },
          { pronoun: "Ты", conjugation: "говоришь", example: "Ты говоришь хорошо" },
          { pronoun: "Он/Она", conjugation: "говорит", example: "Она говорит медленно" }
        ],
        past_simple: [
          { pronoun: "Я", conjugation: "говорил/а", example: "Я говорил с ним вчера" },
          { pronoun: "Ты", conjugation: "говорил/а", example: "Ты говорил очень хорошо" },
          { pronoun: "Он/Она", conjugation: "говорил/а", example: "Он говорил час" }
        ],
        past_compound: [
          { pronoun: "Я", conjugation: "сказал/а", example: "Я сказал правду" },
          { pronoun: "Ты", conjugation: "сказал/а", example: "Ты сказал ясно" },
          { pronoun: "Он/Она", conjugation: "сказал/а", example: "Она сказала о тебе" }
        ],
        past_imperfect: [
          { pronoun: "Я", conjugation: "говорил/а", example: "Я всегда говорил по-русски" },
          { pronoun: "Ты", conjugation: "говорил/а", example: "Ты говорил в детстве" },
          { pronoun: "Он/Она", conjugation: "говорил/а", example: "Он говорил медленно" }
        ],
        past_pluperfect: [
          { pronoun: "Я", conjugation: "был/а сказал/а", example: "Я уже сказал" },
          { pronoun: "Ты", conjugation: "был/а сказал/а", example: "Ты уже сказал раньше" },
          { pronoun: "Он/Она", conjugation: "был/а сказал/а", example: "Она уже сказала ясно" }
        ],
        future: [
          { pronoun: "Я", conjugation: "буду говорить", example: "Буду говорить завтра" },
          { pronoun: "Ты", conjugation: "будешь говорить", example: "Будешь говорить лучше" },
          { pronoun: "Он/Она", conjugation: "будет говорить", example: "Она будет говорить позже" }
        ],
        conditional: [
          { pronoun: "Я", conjugation: "говорил/а бы", example: "Я бы говорил с удовольствием" },
          { pronoun: "Ты", conjugation: "говорил/а бы", example: "Ты бы говорил лучше" },
          { pronoun: "Он/Она", conjugation: "говорил/а бы", example: "Она бы говорила больше" }
        ],
        subjunctive: [
          { pronoun: "Я", conjugation: "чтобы говорил", example: "Чтобы я говорил хорошо" },
          { pronoun: "Ты", conjugation: "чтобы говорил", example: "Чтобы ты говорил громко" },
          { pronoun: "Он/Она", conjugation: "чтобы говорил/а", example: "Чтобы она говорила по-русски" }
        ]
      },

      culturalNotes: [
        { aspect: "Casos", note: "Los 6 casos cambian las terminaciones", example: "дом (casa) → дома (de la casa)" },
        { aspect: "Aspecto", note: "Perfectivo vs imperfectivo es crucial", example: "читать vs прочитать (leer)" }
      ],

      // Missing required properties - placeholders
      numbers: [
        { number: 1, word: "один", ordinal: "первый", usage: "masculine" }
      ],
      geometry: [
        { shape: "квадрат", spanish: "cuadrado", properties: "4 равные стороны" }
      ],
      colors: [
        { color: "красный", spanish: "rojo", variations: "красный/красная", usage: "basic color" }
      ],
      time: {
        months: [{ month: "январь", spanish: "enero", season: "зима", abbreviation: "янв" }],
        days: [{ day: "понедельник", spanish: "lunes", abbreviation: "пн", position: 1 }],
        seasons: [{ season: "лето", spanish: "verano", months: "июнь-август", characteristics: "жаркое" }],
        telling_time: {
          formal: [{ time: "13:00", target: "тринадцать часов", spanish: "las trece" }],
          colloquial: [{ time: "1:00", target: "час", spanish: "la una" }]
        }
      },
      animals: [
        { animal: "кот", spanish: "gato", category: "домашнее", sounds: "мяу" }
      ],
      plants: [
        { plant: "роза", spanish: "rosa", category: "цветок", characteristics: "ароматная" }
      ],
      family: {
        members: [{ member: "отец", spanish: "padre", gender: "мужской", generation: "родитель" }],
        civil_status: [{ status: "женат", spanish: "casado", description: "married" }]
      },
      professions: [
        { profession: "врач", spanish: "médico", masculine: "врач", feminine: "врач", workplace: "больница" }
      ],
      materials: {
        school: [{ material: "бумага", spanish: "papel", usage: "писать", characteristics: "белая" }],
        fabrics: [{ fabric: "хлопок", spanish: "algodón", texture: "мягкий", usage: "одежда" }]
      },
      weather: [
        { condition: "солнце", spanish: "sol", description: "ясно", vocabulary: "солнечно" }
      ],
      food: [
        { food: "хлеб", spanish: "pan", category: "основной", preparation: "печёный" }
      ],
      body: {
        parts: [{ part: "голова", spanish: "cabeza", location: "верх", function: "мышление" }],
        physical_description: [{ trait: "высокий", spanish: "alto", category: "рост", variations: "высокий/высокая" }]
      },
      clothing: {
        garments: [{ garment: "рубашка", spanish: "camisa", category: "верх", season: "всегда" }],
        accessories: [{ accessory: "часы", spanish: "reloj", usage: "время", style: "классические" }]
      },
      connectors: [
        { spanish: "y", target: "и", type: "союз", example: "ты и я" }
      ],
      character: [
        { trait: "добрый", spanish: "bueno", positive_negative: "positive", example: "добрый человек" }
      ],
      negation: {
        basic: [{ rule: "не + глагол", example: "не говорю", translation: "no hablo" }],
        advanced: [{ rule: "никогда не", example: "никогда не говорю", translation: "nunca hablo" }]
      },
      questions: {
        yesNo: [{ structure: "Ты говоришь?", example: "Ты говоришь по-русски?", translation: "¿Hablas ruso?" }],
        open: [{ word: "что", example: "Что это?", translation: "¿Qué es esto?" }],
        responses: [{ question_type: "да/нет", affirmative: "Да", negative: "Нет", neutral: "Может быть" }]
      },
      adverbs: {
        frequency: [{ adverb: "всегда", spanish: "siempre", example: "всегда хорошо", position: "before verb" }],
        manner: [{ adverb: "хорошо", spanish: "bien", example: "говорю хорошо" }],
        time: [{ adverb: "сегодня", spanish: "hoy", example: "сегодня хорошо" }]
      },
      verbal_periphrases: [
        { structure: "быть + infinitive", meaning: "future tense", example: "буду говорить", spanish: "voy a hablar" }
      ],
      prepositions: {
        place: [{ spanish: "en", target: "в", example: "в доме" }],
        time: [{ spanish: "a", target: "в", example: "в три часа" }],
        movement: [{ spanish: "a", target: "в", example: "иду в Москву" }],
        manner: [{ spanish: "con", target: "с", example: "с любовью" }]
      },
      sentenceStructure: {
        basic: "Подлежащее + Сказуемое + Дополнение",
        questions: "Вопросительное слово + глагол + подлежащее",
        negations: "Подлежащее + не + глагол",
        imperatives: "Глагол + дополнение"
      },

      examples: [
        { rule: "Caso genitivo", example: "у меня есть", translation: "Yo tengo" },
        { rule: "Aspecto perfectivo", example: "Я прочитал книгу", translation: "Leí el libro (completamente)" }
      ]
    }
  }
];

export default languages;

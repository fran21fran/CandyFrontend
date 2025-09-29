export const verbs = {
  library: [
    { 
      infinitive: "être", 
      spanish: "ser/estar", 
      type: "irregular", 
      category: "auxiliary",
      definition: "Verbo de estado que expresa identidad, cualidades permanentes o ubicación temporal",
      usage: "Auxiliar en tiempos compuestos con verbos de movimiento y pronominales",
      examples: [
        { french: "Je suis français", spanish: "Soy francés", context: "nacionalidad" },
        { french: "Elle est fatiguée", spanish: "Está cansada", context: "estado temporal" },
        { french: "Nous sommes à Paris", spanish: "Estamos en París", context: "ubicación" }
      ]
    },
    { 
      infinitive: "avoir", 
      spanish: "tener/haber", 
      type: "irregular", 
      category: "auxiliary",
      definition: "Verbo de posesión que también funciona como auxiliar principal",
      usage: "Auxiliar en la mayoría de tiempos compuestos, expresión de edad, sensaciones",
      examples: [
        { french: "J'ai un chien", spanish: "Tengo un perro", context: "posesión" },
        { french: "Il a vingt ans", spanish: "Tiene veinte años", context: "edad" },
        { french: "Nous avons faim", spanish: "Tenemos hambre", context: "sensación" }
      ]
    },
    { 
      infinitive: "aller", 
      spanish: "ir", 
      type: "irregular", 
      category: "movement",
      definition: "Verbo de movimiento hacia un destino, usado para futuro próximo",
      usage: "Futuro proche (aller + infinitif), movimiento direccional",
      examples: [
        { french: "Je vais au cinéma", spanish: "Voy al cine", context: "movimiento" },
        { french: "Il va partir", spanish: "Va a partir", context: "futuro próximo" },
        { french: "Nous allons bien", spanish: "Estamos bien", context: "estado de salud" }
      ]
    },
    { 
      infinitive: "faire", 
      spanish: "hacer", 
      type: "irregular", 
      category: "action",
      definition: "Verbo de acción general, usado en múltiples expresiones idiomáticas",
      usage: "Acciones, actividades, expresiones meteorológicas, deportes",
      examples: [
        { french: "Je fais mes devoirs", spanish: "Hago mis deberes", context: "actividad" },
        { french: "Il fait beau", spanish: "Hace buen tiempo", context: "meteorología" },
        { french: "Elle fait du piano", spanish: "Toca el piano", context: "actividad musical" }
      ]
    },
    { 
      infinitive: "parler", 
      spanish: "hablar", 
      type: "regular", 
      category: "-er",
      definition: "Verbo regular del primer grupo, modelo de conjugación -er",
      usage: "Comunicación verbal, idiomas, conversación",
      examples: [
        { french: "Je parle français", spanish: "Hablo francés", context: "idioma" },
        { french: "Tu parles trop", spanish: "Hablas demasiado", context: "cantidad" },
        { french: "Il parle de son travail", spanish: "Habla de su trabajo", context: "tema" }
      ]
    }
  ],

  regular: [
    {
      group: "Premier groupe (-er)",
      definition: "Verbos que terminan en -er (excepto aller), el grupo más numeroso",
      pattern: "Radical + terminaciones: -e, -es, -e, -ons, -ez, -ent",
      examples: [
        { 
          infinitive: "parler", 
          type: "-er", 
          conjugation: {
            present: ["je parle", "tu parles", "il/elle parle", "nous parlons", "vous parlez", "ils/elles parlent"],
            pronunciation: ["[paʁl]", "[paʁl]", "[paʁl]", "[paʁlɔ̃]", "[paʁle]", "[paʁl]"]
          },
          meaning: "hablar",
          usage: "Verbo modelo para todos los verbos en -er"
        },
        { 
          infinitive: "chanter", 
          type: "-er", 
          conjugation: {
            present: ["je chante", "tu chantes", "il/elle chante", "nous chantons", "vous chantez", "ils/elles chantent"]
          },
          meaning: "cantar",
          peculiarities: "Sin cambios ortográficos"
        },
        { 
          infinitive: "manger", 
          type: "-er", 
          conjugation: {
            present: ["je mange", "tu manges", "il/elle mange", "nous mangeons", "vous mangez", "ils/elles mangent"]
          },
          meaning: "comer",
          peculiarities: "Conserva la 'e' antes de 'o' (nous mangeons)"
        }
      ]
    },
    {
      group: "Deuxième groupe (-ir)",
      definition: "Verbos que terminan en -ir y forman el participio presente en -issant",
      pattern: "Radical + -iss- (plural) + terminaciones: -is, -is, -it, -issons, -issez, -issent",
      examples: [
        { 
          infinitive: "finir", 
          type: "-ir", 
          conjugation: {
            present: ["je finis", "tu finis", "il/elle finit", "nous finissons", "vous finissez", "ils/elles finissent"]
          },
          meaning: "terminar",
          usage: "Verbo modelo del segundo grupo"
        },
        { 
          infinitive: "choisir", 
          type: "-ir", 
          conjugation: {
            present: ["je choisis", "tu choisis", "il/elle choisit", "nous choisissons", "vous choisissez", "ils/elles choisissent"]
          },
          meaning: "elegir",
          note: "Alargamiento del radical en plural"
        }
      ]
    },
    {
      group: "Troisième groupe (-re et autres)",
      definition: "Verbos irregulares, incluye verbos en -re, -ir (sin -iss-), -oir",
      pattern: "Conjugaciones variadas, aprendizaje individual",
      examples: [
        { 
          infinitive: "vendre", 
          type: "-re", 
          conjugation: {
            present: ["je vends", "tu vends", "il/elle vend", "nous vendons", "vous vendez", "ils/elles vendent"]
          },
          meaning: "vender",
          note: "Pierde la 'd' en singular"
        }
      ]
    }
  ],

  irregular: [
    { 
      infinitive: "être", 
      definition: "Verbo copulativo fundamental, expresa existencia, identidad y estado",
      conjugation: {
        present: {
          forms: ["je suis", "tu es", "il/elle est", "nous sommes", "vous êtes", "ils/elles sont"],
          pronunciation: ["[sɥi]", "[ɛ]", "[ɛ]", "[som]", "[ɛt]", "[sɔ̃]"]
        },
        imperfect: {
          forms: ["j'étais", "tu étais", "il était", "nous étions", "vous étiez", "ils étaient"],
          usage: "Descripción en el pasado, acciones habituales"
        },
        future: {
          forms: ["je serai", "tu seras", "il sera", "nous serons", "vous serez", "ils seront"],
          usage: "Acciones futuras, predicciones"
        }
      },
      examples: [
        { context: "identidad", french: "Je suis médecin", spanish: "Soy médico" },
        { context: "estado temporal", french: "Il est malade", spanish: "Está enfermo" },
        { context: "ubicación", french: "Nous sommes chez nous", spanish: "Estamos en casa" }
      ]
    },
    { 
      infinitive: "avoir", 
      definition: "Verbo de posesión y auxiliar principal del francés",
      conjugation: {
        present: {
          forms: ["j'ai", "tu as", "il/elle a", "nous avons", "vous avez", "ils/elles ont"],
          pronunciation: ["[ɛ]", "[a]", "[a]", "[avɔ̃]", "[ave]", "[ɔ̃]"]
        },
        imperfect: {
          forms: ["j'avais", "tu avais", "il avait", "nous avions", "vous aviez", "ils avaient"],
          usage: "Posesión en el pasado"
        },
        future: {
          forms: ["j'aurai", "tu auras", "il aura", "nous aurons", "vous aurez", "ils auront"],
          usage: "Posesión futura"
        }
      },
      expressions: [
        { expression: "avoir faim", spanish: "tener hambre", type: "sensation" },
        { expression: "avoir soif", spanish: "tener sed", type: "sensation" },
        { expression: "avoir peur", spanish: "tener miedo", type: "sentiment" },
        { expression: "avoir raison", spanish: "tener razón", type: "jugement" },
        { expression: "avoir tort", spanish: "estar equivocado", type: "jugement" }
      ]
    }
  ],

  auxiliary: [
    { 
      verb: "être", 
      usage: "Verbos de movimiento, cambio de estado y pronominales",
      definition: "Auxiliar que forma tiempos compuestos con concordancia del participio pasado",
      verbs_list: [
        "aller/venir", "arriver/partir", "entrer/sortir", "monter/descendre", 
        "naître/mourir", "devenir", "rester", "tomber", "retourner"
      ],
      examples: [
        { verb: "aller", french: "Je suis allé(e)", spanish: "He ido", agreement: "Concuerda con el sujeto" },
        { verb: "se lever", french: "Elle s'est levée", spanish: "Se ha levantado", agreement: "Verbo pronominal" },
        { verb: "naître", french: "Il est né", spanish: "Ha nacido", agreement: "Verbo de cambio de estado" }
      ],
      agreement_rules: [
        { rule: "Concordancia obligatoria", example: "Marie est partie" },
        { rule: "Masculino plural", example: "Ils sont arrivés" },
        { rule: "Femenino plural", example: "Elles sont venues" }
      ]
    },
    { 
      verb: "avoir", 
      usage: "La mayoría de verbos transitivos e intransitivos",
      definition: "Auxiliar principal, sin concordancia excepto con COD antepuesto",
      examples: [
        { verb: "manger", french: "J'ai mangé", spanish: "He comido", agreement: "Sin concordancia" },
        { verb: "parler", french: "Tu as parlé", spanish: "Has hablado", agreement: "Sin concordancia" },
        { verb: "voir", french: "La fille que j'ai vue", spanish: "La chica que he visto", agreement: "COD antepuesto" }
      ],
      agreement_rules: [
        { rule: "Sin concordancia general", example: "Elle a mangé" },
        { rule: "COD antepuesto", example: "Les pommes qu'il a mangées" },
        { rule: "Pronombre COD", example: "Je les ai vues" }
      ]
    }
  ],

  tenses: {
    present: {
      name: "Présent de l'indicatif",
      definition: "Tiempo que expresa acciones actuales, verdades generales y hábitos",
      formation: "Radical + terminaciones específicas según grupo",
      uses: [
        { use: "Action actuelle", example: "Je mange maintenant", spanish: "Como ahora" },
        { use: "Vérité générale", example: "L'eau bout à 100°C", spanish: "El agua hierve a 100°C" },
        { use: "Habitude", example: "Je me lève à 7h", spanish: "Me levanto a las 7h" },
        { use: "Futur proche", example: "J'arrive dans 5 minutes", spanish: "Llego en 5 minutos" }
      ]
    },
    
    passe_compose: {
      name: "Passé composé",
      definition: "Tiempo compuesto que expresa acciones pasadas terminadas",
      formation: "Auxiliar (être/avoir) + participio pasado",
      uses: [
        { use: "Action accomplie", example: "J'ai fini mes devoirs", spanish: "He terminado mis deberes" },
        { use: "Action ponctuelle", example: "Il est arrivé hier", spanish: "Llegó ayer" },
        { use: "Résultat présent", example: "Elle a grandi", spanish: "Ha crecido (y es más alta ahora)" }
      ],
      formation_rules: [
        { auxiliary: "avoir", rule: "Mayoría de verbos", example: "J'ai mangé" },
        { auxiliary: "être", rule: "Verbos de movimiento", example: "Je suis parti" },
        { auxiliary: "être", rule: "Verbos pronominales", example: "Je me suis levé" }
      ]
    },

    imparfait: {
      name: "Imparfait",
      definition: "Tiempo que expresa acciones habituales, descripciones y circunstancias en el pasado",
      formation: "Radical de 'nous' (presente) + -ais, -ais, -ait, -ions, -iez, -aient",
      uses: [
        { use: "Action habituelle", example: "Quand j'étais petit, je jouais", spanish: "Cuando era pequeño, jugaba" },
        { use: "Description", example: "Il faisait beau", spanish: "Hacía buen tiempo" },
        { use: "Circonstance", example: "Pendant qu'il parlait...", spanish: "Mientras hablaba..." },
        { use: "Politesse", example: "Je voulais vous demander", spanish: "Quería pedirle" }
      ]
    },

    futur: {
      name: "Futur simple",
      definition: "Tiempo que expresa acciones futuras, promesas y predicciones",
      formation: "Infinitivo + -ai, -as, -a, -ons, -ez, -ont (verbos en -re pierden la 'e')",
      uses: [
        { use: "Action future", example: "Demain, je partirai", spanish: "Mañana, me iré" },
        { use: "Promesse", example: "Je t'aiderai", spanish: "Te ayudaré" },
        { use: "Hypothèse", example: "S'il pleut, nous resterons", spanish: "Si llueve, nos quedaremos" },
        { use: "Ordre atténué", example: "Vous ferez cet exercice", spanish: "Harán este ejercicio" }
      ]
    }
  }
};
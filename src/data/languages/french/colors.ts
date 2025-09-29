export const colors = {
  basic: [
    {
      french: "rouge",
      spanish: "rojo",
      pronunciation: "[ruʒ]",
      gender: "invariable",
      definition: "Color del fuego, la sangre, símbolo de pasión y energía",
      cultural_meaning: "Amor, pasión, revolución, peligro",
      examples: [
        { french: "Une voiture rouge", spanish: "Un coche rojo", context: "objeto" },
        { french: "Il devient rouge", spanish: "Se pone rojo", context: "emoción" },
        { french: "Le drapeau rouge", spanish: "La bandera roja", context: "político" }
      ],
      expressions: ["voir rouge", "rouge de colère", "rouge à lèvres"]
    },
    {
      french: "bleu/bleue",
      spanish: "azul",
      pronunciation: "[blø/blø]",
      gender: "bleu (m.), bleue (f.)",
      definition: "Color del cielo y del mar, símbolo de tranquilidad y frescura",
      cultural_meaning: "Tranquilidad, fidelidad, tristeza (avoir le blues)",
      examples: [
        { french: "Le ciel bleu", spanish: "El cielo azul", context: "naturaleza" },
        { french: "Une robe bleue", spanish: "Un vestido azul", context: "ropa" },
        { french: "Avoir le blues", spanish: "Estar triste", context: "emoción" }
      ],
      expressions: ["bleu marine", "avoir le blues", "cordon bleu"],
      shades: ["bleu clair", "bleu foncé", "bleu marine", "bleu ciel"]
    },
    {
      french: "vert/verte",
      spanish: "verde",
      pronunciation: "[vɛʁ/vɛʁt]",
      gender: "vert (m.), verte (f.)",
      definition: "Color de la naturaleza, plantas, símbolo de vida y esperanza",
      cultural_meaning: "Naturaleza, esperanza, écologie, inexperiencia",
      examples: [
        { french: "Les arbres verts", spanish: "Los árboles verdes", context: "naturaleza" },
        { french: "Une pomme verte", spanish: "Una manzana verde", context: "fruta" },
        { french: "Être vert de rage", spanish: "Estar verde de ira", context: "emoción intensa" }
      ],
      expressions: ["avoir la main verte", "vert de rage", "donner le feu vert"],
      environmental: "Símbolo del movimiento ecológico"
    },
    {
      french: "jaune",
      spanish: "amarillo",
      pronunciation: "[ʒon]",
      gender: "invariable",
      definition: "Color del sol, oro, símbolo de luminosidad y alegría",
      cultural_meaning: "Alegría, luminosidad, pero también traición, celos",
      examples: [
        { french: "Le soleil jaune", spanish: "El sol amarillo", context: "naturaleza" },
        { french: "Rire jaune", spanish: "Reír con amargura", context: "expresión" },
        { french: "Pages jaunes", spanish: "Páginas amarillas", context: "directorio" }
      ],
      expressions: ["rire jaune", "avoir les dents jaunes", "maillot jaune"],
      negative_connotations: "Traición (judas), celos, enfermedad"
    },
    {
      french: "noir/noire",
      spanish: "negro",
      pronunciation: "[nwaʁ/nwaʁ]",
      gender: "noir (m.), noire (f.)",
      definition: "Ausencia de color, símbolo de elegancia, misterio o luto",
      cultural_meaning: "Elegancia, luto, misterio, autoridad",
      examples: [
        { french: "Un costume noir", spanish: "Un traje negro", context: "elegancia" },
        { french: "Avoir des idées noires", spanish: "Tener ideas negras", context: "depresión" },
        { french: "Le marché noir", spanish: "El mercado negro", context: "ilegal" }
      ],
      expressions: ["voir tout en noir", "bête noire", "travail au noir"],
      cultural_uses: "Luto en Occidente, elegancia formal"
    },
    {
      french: "blanc/blanche",
      spanish: "blanco",
      pronunciation: "[blɑ̃/blɑ̃ʃ]",
      gender: "blanc (m.), blanche (f.)",
      definition: "Color de la nieve, pureza, símbolo de inocencia y limpieza",
      cultural_meaning: "Pureza, inocencia, paz, limpieza",
      examples: [
        { french: "La neige blanche", spanish: "La nieve blanca", context: "naturaleza" },
        { french: "Une robe blanche", spanish: "Un vestido blanco", context: "boda" },
        { french: "Nuit blanche", spanish: "Noche en blanco", context: "insomnio" }
      ],
      expressions: ["mariage en blanc", "nuit blanche", "arme blanche"],
      symbolism: "Bodas, paz (drapeau blanc), rendición"
    }
  ],

  secondary: [
    {
      french: "orange",
      spanish: "naranja",
      pronunciation: "[ɔ-RⱭNƷ]",
      gender: "invariable",
      definition: "Mezcla de rojo y amarillo, color cálido y energético",
      origin: "Del fruit 'orange'",
      examples: [
        { french: "Un coucher de soleil orange", spanish: "Un atardecer naranja", context: "naturaleza" },
        { french: "Les feuilles orange", spanish: "Las hojas naranjas", context: "otoño" }
      ],
      note: "Color invariable porque deriva del sustantivo"
    },
    {
      french: "violet/violette",
      spanish: "violeta/morado",
      pronunciation: "[vjo-LɛT/vjo-LɛT]",
      gender: "violet (m.), violette (f.)",
      definition: "Mezcla de rojo y azul, color de la realeza y espiritualidad",
      cultural_meaning: "Nobleza, espiritualidad, misterio",
      examples: [
        { french: "Des fleurs violettes", spanish: "Flores violetas", context: "jardín" },
        { french: "Un ciel violet", spanish: "Un cielo violáceo", context: "crepúsculo" }
      ]
    },
    {
      french: "rose",
      spanish: "rosa",
      pronunciation: "[roz]",
      gender: "invariable",
      definition: "Rojo claro, símbolo de ternura y feminidad",
      cultural_meaning: "Feminidad, ternura, romanticismo",
      examples: [
        { french: "Une chemise rose", spanish: "Una camisa rosa", context: "ropa" },
        { french: "Voir la vie en rose", spanish: "Ver la vida de color de rosa", context: "optimismo" }
      ],
      expressions: ["voir la vie en rose", "roman à l'eau de rose"]
    },
    {
      french: "marron",
      spanish: "marrón",
      pronunciation: "[ma-ƦÕŨ]",
      gender: "invariable",
      definition: "Color de la tierra, chocolate, símbolo de naturalidad",
      origin: "De 'châtaigne marron'",
      examples: [
        { french: "Des chaussures marron", spanish: "Zapatos marrones", context: "calzado" },
        { french: "Les cheveux marron", spanish: "El pelo castaño", context: "cabello" }
      ],
      vs_brun: "Marron para objetos, brun para cabello"
    },
    {
      french: "gris/grise",
      spanish: "gris",
      pronunciation: "[gʁi/gʁiz]",
      gender: "gris (m.), grise (f.)",
      definition: "Mezcla de blanco y negro, color neutro",
      cultural_meaning: "Neutralidad, tristeza, elegancia discreta",
      examples: [
        { french: "Le temps gris", spanish: "El tiempo gris", context: "meteorología" },
        { french: "Une souris grise", spanish: "Un ratón gris", context: "animal" }
      ],
      expressions: ["faire grise mine", "eminence grise"]
    }
  ],

  shades: [
    {
      category: "Claridad",
      variations: [
        { french: "clair", spanish: "claro", usage: "bleu clair", example: "azul claro" },
        { french: "foncé", spanish: "oscuro", usage: "vert foncé", example: "verde oscuro" },
        { french: "pâle", spanish: "pálido", usage: "rose pâle", example: "rosa pálido" },
        { french: "vif", spanish: "vivo/brillante", usage: "rouge vif", example: "rojo vivo" }
      ]
    },
    {
      category: "Intensidad",
      variations: [
        { french: "éclatant", spanish: "resplandeciente", usage: "blanc éclatant", example: "blanco resplandeciente" },
        { french: "terne", spanish: "apagado", usage: "gris terne", example: "gris apagado" },
        { french: "mat", spanish: "mate", usage: "noir mat", example: "negro mate" },
        { french: "brillant", spanish: "brillante", usage: "rouge brillant", example: "rojo brillante" }
      ]
    }
  ],

  specific_colors: [
    {
      french: "beige",
      spanish: "beige",
      pronunciation: "[bɛʒ]",
      definition: "Color crema, neutro y elegante",
      usage: "Decoración, moda clásica",
      examples: [{ french: "Un manteau beige", spanish: "Un abrigo beige" }]
    },
    {
      french: "turquoise",
      spanish: "turquesa",
      pronunciation: "[tyr-KWAZ]",
      definition: "Azul verdoso, color tropical",
      origin: "De la piedra turquoise",
      examples: [{ french: "La mer turquoise", spanish: "El mar turquesa" }]
    },
    {
      french: "bordeaux",
      spanish: "burdeos",
      pronunciation: "[bor-DO]",
      definition: "Rojo oscuro como el vino",
      origin: "De la región Bordeaux",
      examples: [{ french: "Une robe bordeaux", spanish: "Un vestido burdeos" }]
    },
    {
      french: "kaki",
      spanish: "caqui",
      pronunciation: "[ka-KI]",
      definition: "Verde amarillento, color militar",
      origin: "Del persa 'polvo'",
      examples: [{ french: "Un pantalon kaki", spanish: "Un pantalón caqui" }]
    }
  ],

  agreement: [
    {
      rule: "Adjetivos de color simples",
      explanation: "Concuerdan en género y número",
      examples: [
        { french: "Un mur blanc", spanish: "Una pared blanca", agreement: "masculino singular" },
        { french: "Une voiture blanche", spanish: "Un coche blanco", agreement: "femenino singular" },
        { french: "Des murs blancs", spanish: "Paredes blancas", agreement: "masculino plural" },
        { french: "Des voitures blanches", spanish: "Coches blancos", agreement: "femenino plural" }
      ]
    },
    {
      rule: "Colores invariables",
      explanation: "Colores de origen sustantivo no cambian",
      invariable_colors: ["orange", "marron", "rose", "bordeaux", "kaki", "turquoise"],
      examples: [
        { french: "Des fleurs orange", spanish: "Flores naranjas", note: "orange invariable" },
        { french: "Des yeux marron", spanish: "Ojos marrones", note: "marron invariable" }
      ]
    },
    {
      rule: "Colores compuestos",
      explanation: "Con adjetivo o sustantivo, ambos invariables",
      examples: [
        { french: "Des robes bleu marine", spanish: "Vestidos azul marino", note: "compuesto invariable" },
        { french: "Des cheveux châtain clair", spanish: "Cabello castaño claro", note: "ambos invariables" }
      ]
    }
  ],

  expressions: [
    {
      category: "Emociones con colores",
      expressions: [
        { french: "Voir rouge", spanish: "Ver rojo", meaning: "Enfurecerse", context: "ira" },
        { french: "Avoir le blues", spanish: "Tener tristeza", meaning: "Estar deprimido", context: "tristeza" },
        { french: "Être vert de rage", spanish: "Estar verde de ira", meaning: "Estar furioso", context: "cólera" },
        { french: "Voir la vie en rose", spanish: "Ver la vida de color rosa", meaning: "Ser optimista", context: "optimismo" }
      ]
    },
    {
      category: "Estados y situaciones",
      expressions: [
        { french: "Être dans le rouge", spanish: "Estar en números rojos", meaning: "Tener deudas", context: "finanzas" },
        { french: "Donner le feu vert", spanish: "Dar luz verde", meaning: "Autorizar", context: "permiso" },
        { french: "Avoir une peur bleue", spanish: "Tener mucho miedo", meaning: "Estar aterrado", context: "miedo" },
        { french: "Rire jaune", spanish: "Reír con amargura", meaning: "Reír forzadamente", context: "incomodidad" }
      ]
    },
    {
      category: "Descripciones",
      expressions: [
        { french: "Nuit blanche", spanish: "Noche en blanco", meaning: "Insomnio", context: "sueño" },
        { french: "Avoir la main verte", spanish: "Tener buena mano para las plantas", meaning: "Saber jardinería", context: "habilidad" },
        { french: "Voir tout en noir", spanish: "Verlo todo negro", meaning: "Ser pesimista", context: "pesimismo" }
      ]
    }
  ],

  cultural_symbolism: [
    {
      color: "Rouge",
      symbolism: [
        { context: "Politique", meaning: "Communisme, socialisme", example: "Le drapeau rouge" },
        { context: "Amour", meaning: "Passion, romance", example: "Roses rouges" },
        { context: "Danger", meaning: "Attention, interdiction", example: "Feu rouge" }
      ]
    },
    {
      color: "Bleu",
      symbolism: [
        { context: "France", meaning: "Couleur nationale", example: "Bleu-blanc-rouge" },
        { context: "Noblesse", meaning: "Sang bleu", example: "Aristocratie" },
        { context: "Travail", meaning: "Col bleu (ouvrier)", example: "Classe ouvrière" }
      ]
    },
    {
      color: "Blanc",
      symbolism: [
        { context: "Paix", meaning: "Reddition, trêve", example: "Drapeau blanc" },
        { context: "Pureté", meaning: "Innocence, virginité", example: "Robe de mariée" },
        { context: "Médical", meaning: "Hygiène, santé", example: "Blouse blanche" }
      ]
    }
  ]
};
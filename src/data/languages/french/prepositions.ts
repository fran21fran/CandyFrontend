export const prepositions = {
  place: [
    {
      preposition: "dans",
      spanish: "en/dentro de",
      definition: "Indica ubicación interior, contenido dentro de límites",
      usage: "Espacios cerrados, períodos de tiempo futuros",
      examples: [
        { french: "Je suis dans la maison", spanish: "Estoy en la casa", context: "interior" },
        { french: "Il arrive dans une heure", spanish: "Llega en una hora", context: "tiempo futuro" },
        { french: "Les clés sont dans le tiroir", spanish: "Las llaves están en el cajón", context: "contenedor" }
      ],
      contrasts: "en = superficie, dans = interior"
    },
    {
      preposition: "sur",
      spanish: "sobre/en",
      definition: "Indica posición encima de una superficie, contacto",
      usage: "Superficies, temas, proporciones",
      examples: [
        { french: "Le livre est sur la table", spanish: "El libro está sobre la mesa", context: "superficie" },
        { french: "Un film sur l'amour", spanish: "Una película sobre el amor", context: "tema" },
        { french: "Trois sur dix", spanish: "Tres de cada diez", context: "proporción" }
      ],
      expressions: ["sur le point de", "sur mesure", "sur place"]
    },
    {
      preposition: "sous",
      spanish: "bajo/debajo de",
      definition: "Indica posición inferior, subordinación, condición",
      usage: "Posición física, autoridad, circunstancias",
      examples: [
        { french: "Le chat est sous la table", spanish: "El gato está debajo de la mesa", context: "posición" },
        { french: "Sous la direction de...", spanish: "Bajo la dirección de...", context: "autoridad" },
        { french: "Sous la pluie", spanish: "Bajo la lluvia", context: "condición" }
      ],
      expressions: ["sous peu", "sous prétexte que", "sous réserve de"]
    },
    {
      preposition: "devant",
      spanish: "delante de/ante",
      definition: "Indica posición anterior, confrontación, presencia",
      usage: "Ubicación frontal, situaciones, tribunales",
      examples: [
        { french: "Il attend devant la porte", spanish: "Espera delante de la puerta", context: "ubicación" },
        { french: "Devant ce problème", spanish: "Ante este problema", context: "confrontación" },
        { french: "Comparaître devant le juge", spanish: "Comparecer ante el juez", context: "tribunal" }
      ],
      opposite: "derrière = detrás"
    },
    {
      preposition: "derrière",
      spanish: "detrás de",
      definition: "Indica posición posterior, ocultación, apoyo",
      usage: "Ubicación trasera, secreto, soporte moral",
      examples: [
        { french: "La voiture est derrière la maison", spanish: "El coche está detrás de la casa", context: "ubicación" },
        { french: "Il se cache derrière ses excuses", spanish: "Se esconde tras sus excusas", context: "ocultación" },
        { french: "Je suis derrière toi", spanish: "Te apoyo", context: "apoyo moral" }
      ]
    },
    {
      preposition: "entre",
      spanish: "entre",
      definition: "Indica posición intermedia, relación mutua, elección",
      usage: "Espacio intermedio, relaciones, alternativas",
      examples: [
        { french: "Entre Paris et Lyon", spanish: "Entre París y Lyon", context: "espacio" },
        { french: "Entre nous", spanish: "Entre nosotros", context: "confidencialidad" },
        { french: "Choisir entre deux options", spanish: "Elegir entre dos opciones", context: "elección" }
      ],
      expressions: ["entre autres", "entre temps", "entre guillemets"]
    },
    {
      preposition: "chez",
      spanish: "en casa de/donde",
      definition: "Indica lugar de residencia, trabajo, origen cultural",
      usage: "Domicilio, consulta, características grupales",
      examples: [
        { french: "Je vais chez Pierre", spanish: "Voy a casa de Pierre", context: "domicilio" },
        { french: "Chez le médecin", spanish: "En la consulta del médico", context: "profesional" },
        { french: "Chez les Français", spanish: "Entre los franceses", context: "cultura" }
      ],
      note: "Solo se usa con personas o grupos humanos"
    }
  ],

  time: [
    {
      preposition: "à",
      spanish: "a",
      definition: "Indica momento preciso, horas específicas",
      usage: "Horas, fechas precisas, momentos puntuales",
      examples: [
        { french: "À trois heures", spanish: "A las tres", context: "hora exacta" },
        { french: "À Noël", spanish: "En Navidad", context: "fecha precisa" },
        { french: "À mon arrivée", spanish: "A mi llegada", context: "momento puntual" }
      ],
      time_expressions: ["à l'heure", "à temps", "à l'avenir"]
    },
    {
      preposition: "en",
      spanish: "en",
      definition: "Indica duración para completar algo, estaciones, meses",
      usage: "Tiempo necesario, estaciones del año, meses",
      examples: [
        { french: "En deux heures", spanish: "En dos horas", context: "duración" },
        { french: "En été", spanish: "En verano", context: "estación" },
        { french: "En janvier", spanish: "En enero", context: "mes" }
      ],
      note: "En = tiempo necesario, dans = tiempo futuro"
    },
    {
      preposition: "depuis",
      spanish: "desde",
      definition: "Indica punto de partida temporal, duración continua",
      usage: "Inicio de una acción que continúa",
      examples: [
        { french: "Depuis 2020", spanish: "Desde 2020", context: "punto de partida" },
        { french: "Depuis une heure", spanish: "Desde hace una hora", context: "duración" },
        { french: "Depuis que tu es parti", spanish: "Desde que te fuiste", context: "subordinada temporal" }
      ],
      tenses: "Usado con presente para acciones que continúan"
    },
    {
      preposition: "pendant",
      spanish: "durante",
      definition: "Indica duración completa de una acción",
      usage: "Período específico de duración",
      examples: [
        { french: "Pendant les vacances", spanish: "Durante las vacaciones", context: "período" },
        { french: "Pendant deux heures", spanish: "Durante dos horas", context: "duración exacta" },
        { french: "Pendant que tu dormais", spanish: "Mientras dormías", context: "simultaneidad" }
      ]
    },
    {
      preposition: "pour",
      spanish: "por/para",
      definition: "Indica duración prevista, propósito temporal",
      usage: "Tiempo planificado, objetivo temporal",
      examples: [
        { french: "Je pars pour deux semaines", spanish: "Me voy por dos semanas", context: "duración prevista" },
        { french: "Pour le moment", spanish: "Por el momento", context: "temporalidad" },
        { french: "Pour toujours", spanish: "Para siempre", context: "permanencia" }
      ]
    }
  ],

  movement: [
    {
      preposition: "à",
      spanish: "a",
      definition: "Indica destino, dirección hacia un lugar",
      usage: "Ciudades, destinos precisos, actividades",
      examples: [
        { french: "Je vais à Paris", spanish: "Voy a París", context: "ciudad" },
        { french: "Il va à la piscine", spanish: "Va a la piscina", context: "lugar específico" },
        { french: "Aller à pied", spanish: "Ir a pie", context: "medio de locomoción" }
      ],
      contractions: ["au (à + le)", "aux (à + les)"]
    },
    {
      preposition: "de",
      spanish: "de/desde",
      definition: "Indica origen, punto de partida, alejamiento",
      usage: "Procedencia, separación, distanciamiento",
      examples: [
        { french: "Je viens de Paris", spanish: "Vengo de París", context: "origen" },
        { french: "Il sort de la maison", spanish: "Sale de la casa", context: "separación" },
        { french: "Loin de chez moi", spanish: "Lejos de mi casa", context: "distancia" }
      ],
      contractions: ["du (de + le)", "des (de + les)"]
    },
    {
      preposition: "vers",
      spanish: "hacia",
      definition: "Indica dirección aproximada, hora aproximada",
      usage: "Dirección general, tiempo aproximado",
      examples: [
        { french: "Nous marchons vers la gare", spanish: "Caminamos hacia la estación", context: "dirección" },
        { french: "Vers cinq heures", spanish: "Hacia las cinco", context: "tiempo aproximado" },
        { french: "Vers le nord", spanish: "Hacia el norte", context: "orientación" }
      ]
    },
    {
      preposition: "par",
      spanish: "por",
      definition: "Indica ruta, paso a través de, agente",
      usage: "Camino, atravesar, medio",
      examples: [
        { french: "Passer par Lyon", spanish: "Pasar por Lyon", context: "ruta" },
        { french: "Regarder par la fenêtre", spanish: "Mirar por la ventana", context: "a través" },
        { french: "Voyager par avion", spanish: "Viajar en avión", context: "medio de transporte" }
      ]
    }
  ],

  manner: [
    {
      preposition: "avec",
      spanish: "con",
      definition: "Indica acompañamiento, instrumento, manera",
      usage: "Compañía, herramienta, modalidad",
      examples: [
        { french: "Je viens avec Pierre", spanish: "Vengo con Pierre", context: "acompañamiento" },
        { french: "Écrire avec un stylo", spanish: "Escribir con un bolígrafo", context: "instrumento" },
        { french: "Avec plaisir", spanish: "Con mucho gusto", context: "manera" }
      ],
      expressions: ["avec soin", "avec attention", "avec difficulté"]
    },
    {
      preposition: "sans",
      spanish: "sin",
      definition: "Indica ausencia, carencia, falta de acompañamiento",
      usage: "Privación, exclusión, modalidad negativa",
      examples: [
        { french: "Sans argent", spanish: "Sin dinero", context: "carencia" },
        { french: "Sans lui", spanish: "Sin él", context: "ausencia" },
        { french: "Sans faire de bruit", spanish: "Sin hacer ruido", context: "modalidad" }
      ],
      expressions: ["sans doute", "sans cesse", "sans problème"]
    },
    {
      preposition: "selon",
      spanish: "según",
      definition: "Indica conformidad, punto de vista, dependencia",
      usage: "Opinión, criterio, condición",
      examples: [
        { french: "Selon moi", spanish: "Según yo/En mi opinión", context: "punto de vista" },
        { french: "Selon les règles", spanish: "Según las reglas", context: "conformidad" },
        { french: "Selon le temps", spanish: "Según el tiempo", context: "condición" }
      ]
    },
    {
      preposition: "malgré",
      spanish: "a pesar de",
      definition: "Indica oposición, obstáculo superado",
      usage: "Contraste, dificultad vencida",
      examples: [
        { french: "Malgré la pluie", spanish: "A pesar de la lluvia", context: "obstáculo meteorológico" },
        { french: "Malgré ses efforts", spanish: "A pesar de sus esfuerzos", context: "esfuerzo insuficiente" },
        { french: "Malgré tout", spanish: "A pesar de todo", context: "oposición general" }
      ]
    }
  ],

  cause_purpose: [
    {
      preposition: "pour",
      spanish: "para/por",
      definition: "Indica finalidad, beneficiario, causa",
      usage: "Objetivo, destinatario, razón",
      examples: [
        { french: "C'est pour toi", spanish: "Es para ti", context: "destinatario" },
        { french: "Pour réussir", spanish: "Para tener éxito", context: "finalidad" },
        { french: "Pour cette raison", spanish: "Por esta razón", context: "causa" }
      ],
      expressions: ["pour que", "pour de bon", "pour ainsi dire"]
    },
    {
      preposition: "grâce à",
      spanish: "gracias a",
      definition: "Indica causa positiva, medio favorable",
      usage: "Causa beneficiosa, ayuda recibida",
      examples: [
        { french: "Grâce à ton aide", spanish: "Gracias a tu ayuda", context: "ayuda recibida" },
        { french: "Grâce à ses efforts", spanish: "Gracias a sus esfuerzos", context: "causa positiva" },
        { french: "Grâce au beau temps", spanish: "Gracias al buen tiempo", context: "circunstancia favorable" }
      ]
    },
    {
      preposition: "à cause de",
      spanish: "a causa de/por culpa de",
      definition: "Indica causa negativa, responsabilidad",
      usage: "Causa perjudicial, culpabilidad",
      examples: [
        { french: "À cause de la pluie", spanish: "A causa de la lluvia", context: "causa negativa" },
        { french: "À cause de lui", spanish: "Por culpa suya", context: "responsabilidad" },
        { french: "À cause du retard", spanish: "A causa del retraso", context: "consecuencia negativa" }
      ]
    }
  ],

  complex_prepositions: [
    {
      preposition: "au lieu de",
      spanish: "en lugar de",
      definition: "Indica sustitución, alternativa no elegida",
      usage: "Reemplazo, opción alternativa",
      examples: [
        { french: "Au lieu de partir", spanish: "En lugar de irte", context: "alternativa" },
        { french: "Au lieu du café", spanish: "En lugar del café", context: "sustitución" }
      ]
    },
    {
      preposition: "en face de",
      spanish: "enfrente de",
      definition: "Indica oposición frontal, confrontación",
      usage: "Posición opuesta, enfrentamiento",
      examples: [
        { french: "En face de la gare", spanish: "Enfrente de la estación", context: "ubicación" },
        { french: "En face du problème", spanish: "Frente al problema", context: "confrontación" }
      ]
    },
    {
      preposition: "à côté de",
      spanish: "al lado de",
      definition: "Indica proximidad lateral, cercanía",
      usage: "Posición adyacente",
      examples: [
        { french: "À côté de l'école", spanish: "Al lado de la escuela", context: "proximidad" },
        { french: "À côté de la vérité", spanish: "Al margen de la verdad", context: "figurado" }
      ]
    }
  ],

  usage_notes: [
    {
      rule: "Contractions obligatoires",
      explanation: "à/de + le/les se contraen automáticamente",
      examples: [
        { wrong: "à le", correct: "au", context: "Je vais au cinéma" },
        { wrong: "de le", correct: "du", context: "Je viens du bureau" },
        { wrong: "à les", correct: "aux", context: "Il parle aux enfants" },
        { wrong: "de les", correct: "des", context: "Il sort des magasins" }
      ]
    },
    {
      rule: "Preposiciones con países",
      explanation: "en (femeninos/vocales), au (masculinos), aux (plurales)",
      examples: [
        { country: "France (f.)", preposition: "en France", spanish: "en Francia" },
        { country: "Japon (m.)", preposition: "au Japon", spanish: "en Japón" },
        { country: "États-Unis (m.pl.)", preposition: "aux États-Unis", spanish: "en Estados Unidos" }
      ]
    },
    {
      rule: "Preposiciones con medios de transporte",
      explanation: "en (interior), à (encima/exterior), par (medio general)",
      examples: [
        { transport: "voiture", preposition: "en voiture", spanish: "en coche" },
        { transport: "vélo", preposition: "à vélo", spanish: "en bicicleta" },
        { transport: "avion", preposition: "par avion", spanish: "por avión" }
      ]
    }
  ]
};
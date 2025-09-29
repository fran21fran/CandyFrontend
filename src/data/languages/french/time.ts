export const time = {
  hours: {
    basic: [
      { time: "1:00", french: "Il est une heure", spanish: "Es la una", note: "Singular con 'une'" },
      { time: "2:00", french: "Il est deux heures", spanish: "Son las dos" },
      { time: "12:00", french: "Il est midi", spanish: "Es mediodía", alternative: "douze heures" },
      { time: "0:00/24:00", french: "Il est minuit", spanish: "Es medianoche", alternative: "zéro heure" }
    ],
    
    formal_24h: [
      { time: "13:00", french: "Il est treize heures", spanish: "Son las trece horas" },
      { time: "15:30", french: "Il est quinze heures trente", spanish: "Son las quince treinta" },
      { time: "18:45", french: "Il est dix-huit heures quarante-cinq", spanish: "Son las dieciocho cuarenta y cinco" },
      { time: "21:15", french: "Il est vingt et une heures quinze", spanish: "Son las veintiuna quince" }
    ],

    informal_12h: [
      { time: "1:00 PM", french: "Il est une heure de l'après-midi", spanish: "Es la una de la tarde" },
      { time: "7:00 PM", french: "Il est sept heures du soir", spanish: "Son las siete de la tarde" },
      { time: "9:00 AM", french: "Il est neuf heures du matin", spanish: "Son las nueve de la mañana" },
      { time: "11:00 PM", french: "Il est onze heures du soir", spanish: "Son las once de la noche" }
    ]
  },

  minutes: {
    exact: [
      { time: "14:05", french: "Il est quatorze heures cinq", spanish: "Son las dos y cinco" },
      { time: "16:10", french: "Il est quatre heures dix", spanish: "Son las cuatro y diez" },
      { time: "19:20", french: "Il est sept heures vingt", spanish: "Son las siete y veinte" },
      { time: "22:35", french: "Il est dix heures trente-cinq", spanish: "Son las diez y treinta y cinco" }
    ],

    quarters: [
      { 
        time: "3:15", 
        french: "Il est trois heures et quart", 
        spanish: "Son las tres y cuarto",
        pronunciation: "[il ɛ trwa‿zœʁ e kaʁ]",
        note: "et quart = y cuarto"
      },
      { 
        time: "5:30", 
        french: "Il est cinq heures et demie", 
        spanish: "Son las cinco y media",
        pronunciation: "[il ɛ sɛ̃k‿œʁ e dəmi]",
        note: "et demie = y media"
      },
      { 
        time: "7:45", 
        french: "Il est huit heures moins le quart", 
        spanish: "Son las ocho menos cuarto",
        pronunciation: "[il ɛ ɥit‿œʁ mwɛ̃ lə kaʁ]",
        note: "moins le quart = menos cuarto",
        alternative: "Il est sept heures quarante-cinq"
      }
    ],

    approximate: [
      { french: "Il est environ trois heures", spanish: "Son aproximadamente las tres" },
      { french: "Il est à peu près midi", spanish: "Son más o menos las doce" },
      { french: "Il est presque cinq heures", spanish: "Son casi las cinco" },
      { french: "Il est plus de six heures", spanish: "Son más de las seis" }
    ]
  },

  days_of_week: [
    { 
      french: "lundi", 
      spanish: "lunes", 
      pronunciation: "[lœ̃-DI]",
      etymology: "Jour de la Lune",
      usage: "le lundi (tous les lundis), lundi (ce lundi)"
    },
    { 
      french: "mardi", 
      spanish: "martes", 
      pronunciation: "[mar-DI]",
      etymology: "Jour de Mars",
      usage: "le mardi, mardi prochain"
    },
    { 
      french: "mercredi", 
      spanish: "miércoles", 
      pronunciation: "[mɛr-krə-DI]",
      etymology: "Jour de Mercure",
      usage: "le mercredi, mercredi dernier"
    },
    { 
      french: "jeudi", 
      spanish: "jueves", 
      pronunciation: "[ʒø-DI]",
      etymology: "Jour de Jupiter",
      usage: "le jeudi, jeudi soir"
    },
    { 
      french: "vendredi", 
      spanish: "viernes", 
      pronunciation: "[vɑ̃-drə-DI]",
      etymology: "Jour de Vénus",
      usage: "le vendredi, vendredi matin"
    },
    { 
      french: "samedi", 
      spanish: "sábado", 
      pronunciation: "[sam-DI]",
      etymology: "Jour du Sabbat",
      usage: "le samedi, samedi après-midi"
    },
    { 
      french: "dimanche", 
      spanish: "domingo", 
      pronunciation: "[di-MⱭNSH]",
      etymology: "Jour du Seigneur (Dominus)",
      usage: "le dimanche, dimanche prochain"
    }
  ],

  months: [
    { 
      french: "janvier", 
      spanish: "enero", 
      pronunciation: "[ʒɑ̃-vje]",
      season: "hiver",
      days: 31,
      celebrations: ["Nouvel An", "Épiphanie"]
    },
    { 
      french: "février", 
      spanish: "febrero", 
      pronunciation: "[fe-vʁje]",
      season: "hiver",
      days: "28/29",
      celebrations: ["Saint-Valentin", "Chandeleur"]
    },
    { 
      french: "mars", 
      spanish: "marzo", 
      pronunciation: "[mars]",
      season: "printemps",
      days: 31,
      celebrations: ["Équinoxe de printemps"]
    },
    { 
      french: "avril", 
      spanish: "abril", 
      pronunciation: "[a-VRIL]",
      season: "printemps",
      days: 30,
      celebrations: ["Pâques", "Poisson d'avril"]
    },
    { 
      french: "mai", 
      spanish: "mayo", 
      pronunciation: "[mɛ]",
      season: "printemps",
      days: 31,
      celebrations: ["Fête du Travail", "Fête de la Victoire"]
    },
    { 
      french: "juin", 
      spanish: "junio", 
      pronunciation: "[ʒɥɛ̃]",
      season: "été",
      days: 30,
      celebrations: ["Solstice d'été", "Fête de la Musique"]
    },
    { 
      french: "juillet", 
      spanish: "julio", 
      pronunciation: "[ʒɥi-jɛ]",
      season: "été",
      days: 31,
      celebrations: ["Fête Nationale (14 juillet)"]
    },
    { 
      french: "août", 
      spanish: "agosto", 
      pronunciation: "[u]",
      season: "été",
      days: 31,
      celebrations: ["Assomption"],
      note: "Pronunciación especial [u]"
    },
    { 
      french: "septembre", 
      spanish: "septiembre", 
      pronunciation: "[sɛp-TⱭMBR]",
      season: "automne",
      days: 30,
      celebrations: ["Rentrée scolaire"]
    },
    { 
      french: "octobre", 
      spanish: "octubre", 
      pronunciation: "[ɔk-TOBR]",
      season: "automne",
      days: 31,
      celebrations: ["Toussaint"]
    },
    { 
      french: "novembre", 
      spanish: "noviembre", 
      pronunciation: "[no-VⱭMBR]",
      season: "automne",
      days: 30,
      celebrations: ["Armistice"]
    },
    { 
      french: "décembre", 
      spanish: "diciembre", 
      pronunciation: "[de-SⱭMBR]",
      season: "hiver",
      days: 31,
      celebrations: ["Noël", "Saint-Sylvestre"]
    }
  ],

  seasons: [
    { 
      french: "le printemps", 
      spanish: "la primavera", 
      pronunciation: "[lə prɛ̃-TÁN]",
      period: "mars-mai",
      characteristics: "Renouveau, fleurs, temps doux",
      expressions: ["au printemps", "le printemps arrive"]
    },
    { 
      french: "l'été", 
      spanish: "el verano", 
      pronunciation: "[le-TE]",
      period: "juin-août",
      characteristics: "Chaleur, vacances, soleil",
      expressions: ["en été", "les vacances d'été"]
    },
    { 
      french: "l'automne", 
      spanish: "el otoño", 
      pronunciation: "[lo-TON]",
      period: "septembre-novembre",
      characteristics: "Feuilles, rentrée, couleurs chaudes",
      expressions: ["en automne", "l'automne des feuilles"]
    },
    { 
      french: "l'hiver", 
      spanish: "el invierno", 
      pronunciation: "[li-VER]",
      period: "décembre-février",
      characteristics: "Froid, neige, fêtes de fin d'année",
      expressions: ["en hiver", "l'hiver rigoureux"]
    }
  ],

  time_expressions: [
    {
      category: "Moments de la journée",
      expressions: [
        { french: "le matin", spanish: "la mañana", time: "6h-12h", usage: "Je travaille le matin" },
        { french: "l'après-midi", spanish: "la tarde", time: "12h-18h", usage: "L'après-midi, je me repose" },
        { french: "le soir", spanish: "la tarde/noche", time: "18h-22h", usage: "Le soir, je regarde la TV" },
        { french: "la nuit", spanish: "la noche", time: "22h-6h", usage: "La nuit, je dors" },
        { french: "l'aube", spanish: "el amanecer", time: "vers 6h", usage: "Se lever à l'aube" },
        { french: "le crépuscule", spanish: "el crepúsculo", time: "vers 19h", usage: "Admirer le crépuscule" }
      ]
    },
    {
      category: "Fréquence",
      expressions: [
        { french: "toujours", spanish: "siempre", usage: "Je travaille toujours" },
        { french: "souvent", spanish: "a menudo", usage: "Il vient souvent" },
        { french: "parfois", spanish: "a veces", usage: "Parfois je sors" },
        { french: "rarement", spanish: "raramente", usage: "Elle sort rarement" },
        { french: "jamais", spanish: "nunca", usage: "Je ne fume jamais" },
        { french: "de temps en temps", spanish: "de vez en cuando", usage: "De temps en temps, on se voit" }
      ]
    },
    {
      category: "Durée",
      expressions: [
        { french: "pendant", spanish: "durante", usage: "Pendant deux heures", example: "J'ai étudié pendant trois heures" },
        { french: "depuis", spanish: "desde", usage: "Depuis quand?", example: "Je vis ici depuis 2020" },
        { french: "jusqu'à", spanish: "hasta", usage: "Jusqu'à quelle heure?", example: "Je travaille jusqu'à 18h" },
        { french: "il y a", spanish: "hace", usage: "Il y a combien de temps?", example: "Il y a deux ans" },
        { french: "dans", spanish: "en/dentro de", usage: "Dans combien de temps?", example: "Dans une semaine" }
      ]
    },
    {
      category: "Moments précis",
      expressions: [
        { french: "aujourd'hui", spanish: "hoy", usage: "Aujourd'hui, il fait beau" },
        { french: "hier", spanish: "ayer", usage: "Hier, j'ai travaillé" },
        { french: "demain", spanish: "mañana", usage: "Demain, je pars" },
        { french: "avant-hier", spanish: "anteayer", usage: "Avant-hier, il pleuvait" },
        { french: "après-demain", spanish: "pasado mañana", usage: "Après-demain, c'est dimanche" },
        { french: "maintenant", spanish: "ahora", usage: "Maintenant, je dois partir" },
        { french: "tout à l'heure", spanish: "hace un rato/dentro de un rato", usage: "Je l'ai vu tout à l'heure" }
      ]
    }
  ],

  asking_time: [
    {
      question: "Quelle heure est-il?",
      spanish: "¿Qué hora es?",
      usage: "Pregunta más común para la hora",
      responses: [
        { french: "Il est trois heures", spanish: "Son las tres" },
        { french: "Il est midi et demi", spanish: "Son las doce y media" }
      ]
    },
    {
      question: "Vous avez l'heure?",
      spanish: "¿Tiene la hora?",
      usage: "Forma cortés de preguntar",
      responses: [
        { french: "Oui, il est quinze heures", spanish: "Sí, son las tres" },
        { french: "Désolé, je n'ai pas de montre", spanish: "Lo siento, no tengo reloj" }
      ]
    },
    {
      question: "À quelle heure...?",
      spanish: "¿A qué hora...?",
      usage: "Para preguntar horarios específicos",
      examples: [
        { french: "À quelle heure tu arrives?", spanish: "¿A qué hora llegas?" },
        { french: "À quelle heure commence le film?", spanish: "¿A qué hora empieza la película?" }
      ]
    }
  ]
};
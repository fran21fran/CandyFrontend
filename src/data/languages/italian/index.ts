import { alphabet } from './alphabet';

export const italianGrammar = {
  basic: "El italiano tiene artículos definidos que cambian según género y número. Los verbos regulares se conjugan según tres terminaciones: -are, -ere, -ire. La pronunciación es muy regular y fonética.",
  intermediate: "Los verbos modales (dovere, potere, volere) son irregulares pero esenciales. El subjuntivo expresa duda, deseo y emoción. Los pronombres se colocan antes del verbo conjugado.",
  advanced: "El sistema verbal incluye el condizionale per cortesía, il congiuntivo per ipotesi, e il passato remoto per acciones históricas. La posición de los pronombres varía con infinitivos y gerundios.",
  
  alphabet,

  // Contenido adicional por implementar en futuras expansiones
  greetings: {
    basic: "Saludos italianos con distinción formal/informal, gestos culturales",
    categories: ["formali", "informali", "risposte", "cortesia"]
  },
  
  geography: {
    basic: "Geografía italiana con regiones, ciudades principales, gentilicios",
    categories: ["regioni", "città", "nazionalità", "paesi europei"]
  },
  
  pronunciation: {
    basic: "Fonética italiana clara con reglas de c/g, acento tónico, liaison",
    categories: ["consonanti", "vocali", "accento", "intonazione"]
  },
  
  articles: {
    basic: "Artículos definidos/indefinidos con concordancia de género y número",
    categories: ["definiti", "indefiniti", "contrazioni", "uso"]
  },
  
  verbs: {
    basic: "Conjugaciones -are/-ere/-ire, auxiliares essere/avere, tiempos principales",
    categories: ["regolari", "irregolari", "ausiliari", "tempi"]
  },
  
  pronouns: {
    basic: "Pronombres sujeto, complemento directo/indirecto, posesivos, reflexivos",
    categories: ["soggetto", "oggetto", "possessivi", "riflessivi"]
  },
  
  numbers: {
    basic: "Sistema numérico italiano con ordinales, fechas, horas",
    categories: ["cardinali", "ordinali", "tempo", "misure"]
  },
  
  time: {
    basic: "Expresiones temporales, días, meses, estaciones, horarios",
    categories: ["ore", "giorni", "mesi", "stagioni"]
  },
  
  prepositions: {
    basic: "Preposiciones simples y articuladas con sus usos específicos",
    categories: ["semplici", "articolate", "luogo", "tempo"]
  },
  
  colors: {
    basic: "Colores con concordancia de género, expresiones idiomáticas",
    categories: ["primari", "secondari", "sfumature", "espressioni"]
  }
};
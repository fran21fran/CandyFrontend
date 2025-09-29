import { alphabet } from './alphabet';

export const russianGrammar = {
  basic: "El ruso usa el alfabeto cirílico con 33 letras. No tiene artículos. Los sustantivos se declinan en 6 casos. Los verbos tienen aspectos perfectivo e imperfectivo. El orden de palabras es flexible.",
  intermediate: "El sistema de casos (nominativo, genitivo, dativo, acusativo, instrumental, prepositivo) determina la función de las palabras. Los verbos de movimiento son únicos del ruso.",
  advanced: "Los participios activos y pasivos, gerundios, y construcciones impersonales son complejas. La alternancia consonántica en conjugaciones requiere memorización. El subjuntivo usa частицы бы.",
  
  alphabet,

  // Contenido adicional por implementar en futuras expansiones
  greetings: {
    basic: "Saludos rusos con formalidad, uso de имя/отчество",
    categories: ["формальные", "неформальные", "ответы", "вежливость"]
  },
  
  geography: {
    basic: "Geografía rusa y países ex-soviéticos, ciudades principales",
    categories: ["страны", "города", "национальности", "регионы"]
  },
  
  pronunciation: {
    basic: "Fonética rusa con consonantes duras/blandas, reducción vocálica",
    categories: ["согласные", "гласные", "ударение", "редукция"]
  },
  
  cases: {
    basic: "Sistema de 6 casos con funciones sintácticas específicas",
    categories: ["именительный", "родительный", "дательный", "винительный", "творительный", "предложный"]
  },
  
  verbs: {
    basic: "Conjugaciones, aspectos perfectivo/imperfectivo, verbos de movimiento",
    categories: ["спряжения", "виды", "движения", "время"]
  },
  
  pronouns: {
    basic: "Pronombres personales que se declinan por casos",
    categories: ["личные", "притяжательные", "указательные", "возвратные"]
  },
  
  numbers: {
    basic: "Números cardinales/ordinales que se declinan, fechas, tiempo",
    categories: ["количественные", "порядковые", "время", "даты"]
  },
  
  time: {
    basic: "Expresiones temporales, días de la semana, meses, estaciones",
    categories: ["время", "дни", "месяцы", "сезоны"]
  },
  
  prepositions: {
    basic: "Preposiciones que rigen casos específicos, uso obligatorio",
    categories: ["с_родительным", "с_дательным", "с_винительным", "с_творительным", "с_предложным"]
  }
};
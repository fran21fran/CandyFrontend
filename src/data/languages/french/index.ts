import { alphabet } from './alphabet';
import { greetings } from './greetings';
import { geography } from './geography';
import { pronunciation } from './pronunciation';
import { articles } from './articles';
import { verbs } from './verbs';
import { pronouns } from './pronouns';
import { numbers } from './numbers';
import { time } from './time';
import { prepositions } from './prepositions';
import { colors } from './colors';
import { animals } from './animals';
import { family } from './family';
import { professions } from './professions';
import { materials } from './materials';
import { weather } from './weather';

export const frenchGrammar = {
  basic: "El francés tiene artículos definidos (le, la, les) e indefinidos (un, une, des). Los verbos regulares terminan en -er, -ir, -re. La pronunciación requiere atención especial a las vocales nasales y la elisión.",
  intermediate: "Los tiempos compuestos usan être o avoir como auxiliares. Los pronombres complemento se colocan antes del verbo conjugado. El subjuntivo expresa duda, emoción y voluntad.",
  advanced: "El sistema verbal francés incluye el gérondif, participe présent y concordancia del participio pasado. La negación compleja (ne...jamais, ne...personne) y el discurso indirecto requieren transformaciones específicas.",
  
  alphabet,
  greetings,
  geography,
  pronunciation,
  articles,
  verbs,
  pronouns,
  numbers,
  time,
  prepositions,
  colors,
  animals,
  family,
  professions,
  materials,
  weather,

  // Contenido adicional por implementar en futuras expansiones
  food: {
    basic: "Vocabulario gastronómico francés con platos tradicionales, ingredientes y expresiones culinarias",
    categories: ["entrées", "plats principaux", "desserts", "boissons"]
  },
  
  body: {
    basic: "Anatomía humana con terminología médica básica y expresiones corporales",
    categories: ["parties du corps", "organes", "sens", "mouvements"]
  },
  
  clothing: {
    basic: "Vestimenta y accesorios con contexto cultural y de moda francesa",
    categories: ["vêtements", "accessoires", "styles", "couleurs"]
  },
  
  connectors: {
    basic: "Conectores lógicos para estructurar el discurso y argumentación",
    categories: ["addition", "opposition", "cause", "conséquence"]
  },
  
  interrogation: {
    basic: "Formación de preguntas con palabras interrogativas y estructura",
    categories: ["mots interrogatifs", "inversion", "est-ce que", "intonation"]
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
};
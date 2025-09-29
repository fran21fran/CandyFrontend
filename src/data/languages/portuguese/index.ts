import { alphabet } from './alphabet';

export const portugueseGrammar = {
  basic: "El portugués tiene artículos definidos (o, a, os, as) e indefinidos (um, uma, uns, umas). Los verbos regulares terminan en -ar, -er, -ir. Las vocales nasales son únicas del portugués.",
  intermediate: "Los auxiliares ser/estar difieren en uso. El subjuntivo expresa hipótesis y emociones. Hay diferencias importantes entre portugués brasileño y europeo en pronunciación.",
  advanced: "El sistema verbal incluye o futuro do subjuntivo, mesóclise, e infinitivo pessoal. La colocación pronominal varía entre Brasil y Portugal. Verbos abundantes tienen múltiples participios.",
  
  alphabet,

  // Contenido adicional por implementar en futuras expansiones
  greetings: {
    basic: "Saludos lusófonos con variantes brasileñas y portuguesas",
    categories: ["formais", "informais", "respostas", "cortesia"]
  },
  
  geography: {
    basic: "Geografía de países lusófonos: Brasil, Portugal, PALOP",
    categories: ["países", "cidades", "nacionalidades", "regiões"]
  },
  
  pronunciation: {
    basic: "Fonética con vocales nasais, diferencias Brasil vs Portugal",
    categories: ["vogais", "consoantes", "nasalização", "sotaques"]
  },
  
  articles: {
    basic: "Artigos definidos/indefinidos, contrações obrigatórias",
    categories: ["definidos", "indefinidos", "contrações", "uso"]
  },
  
  verbs: {
    basic: "Conjugações regulares, auxiliares ser/estar/ter/haver, tempos",
    categories: ["regulares", "irregulares", "auxiliares", "tempos"]
  },
  
  pronouns: {
    basic: "Pronomes pessoais, objeto direto/indireto, possessivos, reflexivos",
    categories: ["pessoais", "objeto", "possessivos", "reflexivos"]
  },
  
  numbers: {
    basic: "Sistema numérico com ordinais, datas, horas, moeda",
    categories: ["cardinais", "ordinais", "tempo", "dinheiro"]
  },
  
  time: {
    basic: "Expressões temporais, dias da semana, meses, estações",
    categories: ["horas", "dias", "meses", "estações"]
  },
  
  prepositions: {
    basic: "Preposições simples e locuções prepositivas, regências verbais",
    categories: ["simples", "locuções", "lugar", "tempo"]
  }
};
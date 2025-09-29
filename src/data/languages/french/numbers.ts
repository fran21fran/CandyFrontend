export const numbers = {
  basic: [
    { number: 0, french: "zéro", spanish: "cero", pronunciation: "[ze-RO]" },
    { number: 1, french: "un/une", spanish: "uno/una", pronunciation: "[œ̃/yn]", note: "Concuerda en género" },
    { number: 2, french: "deux", spanish: "dos", pronunciation: "[dø]" },
    { number: 3, french: "trois", spanish: "tres", pronunciation: "[trwɑ]" },
    { number: 4, french: "quatre", spanish: "cuatro", pronunciation: "[katr]" },
    { number: 5, french: "cinq", spanish: "cinco", pronunciation: "[sɛ̃k]" },
    { number: 6, french: "six", spanish: "seis", pronunciation: "[sis]" },
    { number: 7, french: "sept", spanish: "siete", pronunciation: "[sɛt]" },
    { number: 8, french: "huit", spanish: "ocho", pronunciation: "[ɥit]", note: "h aspirada" },
    { number: 9, french: "neuf", spanish: "nueve", pronunciation: "[nœf]" },
    { number: 10, french: "dix", spanish: "diez", pronunciation: "[dis]" }
  ],

  teens: [
    { number: 11, french: "onze", spanish: "once", pronunciation: "[ɔ̃z]" },
    { number: 12, french: "douze", spanish: "doce", pronunciation: "[duz]" },
    { number: 13, french: "treize", spanish: "trece", pronunciation: "[trɛz]" },
    { number: 14, french: "quatorze", spanish: "catorce", pronunciation: "[ka-TORZ]" },
    { number: 15, french: "quinze", spanish: "quince", pronunciation: "[kɛ̃z]" },
    { number: 16, french: "seize", spanish: "dieciséis", pronunciation: "[sɛz]" },
    { number: 17, french: "dix-sept", spanish: "diecisiete", pronunciation: "[dis-SET]", formation: "dix + sept" },
    { number: 18, french: "dix-huit", spanish: "dieciocho", pronunciation: "[diz-ɥit]", formation: "dix + huit", note: "liaison con z" },
    { number: 19, french: "dix-neuf", spanish: "diecinueve", pronunciation: "[dis-nœf]", formation: "dix + neuf" }
  ],

  tens: [
    { number: 20, french: "vingt", spanish: "veinte", pronunciation: "[vɛ̃]" },
    { number: 30, french: "trente", spanish: "treinta", pronunciation: "[trɑ̃t]" },
    { number: 40, french: "quarante", spanish: "cuarenta", pronunciation: "[ka-RⱭNT]" },
    { number: 50, french: "cinquante", spanish: "cincuenta", pronunciation: "[sɛ̃-KⱭNT]" },
    { number: 60, french: "soixante", spanish: "sesenta", pronunciation: "[swa-SⱭNT]" },
    { 
      number: 70, 
      french: "soixante-dix", 
      spanish: "setenta", 
      pronunciation: "[swa-sɑ̃t-DIS]",
      system: "vigesimal",
      explanation: "Sistema de base 20: 60 + 10",
      variants: {
        belgium: "septante",
        switzerland: "septante"
      }
    },
    { 
      number: 80, 
      french: "quatre-vingts", 
      spanish: "ochenta", 
      pronunciation: "[katr-Vɛ̃]",
      system: "vigesimal", 
      explanation: "4 × 20 = 80",
      note: "Toma 's' cuando no es seguido de otro número",
      variants: {
        belgium: "octante",
        switzerland: "huitante"
      }
    },
    { 
      number: 90, 
      french: "quatre-vingt-dix", 
      spanish: "noventa", 
      pronunciation: "[katr-vɛ̃-DIS]",
      system: "vigesimal",
      explanation: "(4 × 20) + 10 = 90",
      variants: {
        belgium: "nonante",
        switzerland: "nonante"
      }
    }
  ],

  compound_numbers: [
    {
      range: "21-69",
      rule: "Unir con guión",
      examples: [
        { number: 21, french: "vingt et un", spanish: "veintiuno", note: "'et' solo con 1" },
        { number: 22, french: "vingt-deux", spanish: "veintidós" },
        { number: 31, french: "trente et un", spanish: "treinta y uno", note: "'et' solo con 1" },
        { number: 45, french: "quarante-cinq", spanish: "cuarenta y cinco" },
        { number: 68, french: "soixante-huit", spanish: "sesenta y ocho" }
      ]
    },
    {
      range: "70-79",
      rule: "soixante + 11-19",
      examples: [
        { number: 71, french: "soixante et onze", spanish: "setenta y uno", explanation: "60 + 11" },
        { number: 72, french: "soixante-douze", spanish: "setenta y dos", explanation: "60 + 12" },
        { number: 75, french: "soixante-quinze", spanish: "setenta y cinco", explanation: "60 + 15" },
        { number: 79, french: "soixante-dix-neuf", spanish: "setenta y nueve", explanation: "60 + 19" }
      ]
    },
    {
      range: "80-99",
      rule: "quatre-vingt(s) + 1-19",
      examples: [
        { number: 80, french: "quatre-vingts", spanish: "ochenta", note: "Con 's' al final" },
        { number: 81, french: "quatre-vingt-un", spanish: "ochenta y uno", note: "Sin 's' cuando sigue otro número" },
        { number: 85, french: "quatre-vingt-cinq", spanish: "ochenta y cinco" },
        { number: 91, french: "quatre-vingt-onze", spanish: "noventa y uno", explanation: "80 + 11" },
        { number: 99, french: "quatre-vingt-dix-neuf", spanish: "noventa y nueve", explanation: "80 + 19" }
      ]
    }
  ],

  hundreds: [
    { number: 100, french: "cent", spanish: "cien", pronunciation: "[sɑ̃]", note: "Sin artículo" },
    { number: 101, french: "cent un", spanish: "ciento uno", note: "Sin guión" },
    { number: 200, french: "deux cents", spanish: "doscientos", note: "Con 's' en cent" },
    { number: 201, french: "deux cent un", spanish: "doscientos uno", note: "Sin 's' cuando sigue otro número" },
    { number: 300, french: "trois cents", spanish: "trescientos" },
    { number: 1000, french: "mille", spanish: "mil", note: "Invariable, nunca lleva 's'" },
    { number: 1001, french: "mille un", spanish: "mil uno" },
    { number: 2000, french: "deux mille", spanish: "dos mil" },
    { number: 1000000, french: "un million", spanish: "un millón", note: "Es un sustantivo, lleva 'de'" }
  ],

  ordinals: [
    { number: 1, french: "premier/première", spanish: "primero/primera", abbreviation: "1er/1ère" },
    { number: 2, french: "deuxième/second(e)", spanish: "segundo/segunda", abbreviation: "2e" },
    { number: 3, french: "troisième", spanish: "tercero/tercera", abbreviation: "3e" },
    { number: 4, french: "quatrième", spanish: "cuarto/cuarta", abbreviation: "4e" },
    { number: 5, french: "cinquième", spanish: "quinto/quinta", abbreviation: "5e" },
    { number: 21, french: "vingt et unième", spanish: "vigésimo primero", abbreviation: "21e" },
    { number: 100, french: "centième", spanish: "centésimo", abbreviation: "100e" }
  ],

  fractions: [
    { fraction: "1/2", french: "un demi/une demie", spanish: "medio/media", usage: "une demi-heure" },
    { fraction: "1/3", french: "un tiers", spanish: "un tercio", usage: "un tiers de la population" },
    { fraction: "1/4", french: "un quart", spanish: "un cuarto", usage: "un quart d'heure" },
    { fraction: "3/4", french: "trois quarts", spanish: "tres cuartos", usage: "trois quarts d'heure" },
    { fraction: "2/3", french: "deux tiers", spanish: "dos tercios" }
  ],

  usage: [
    {
      context: "Dates",
      rule: "Premier para el día 1, cardinal para el resto",
      examples: [
        { french: "le premier janvier", spanish: "el primero de enero", date: "1 de enero" },
        { french: "le deux février", spanish: "el dos de febrero", date: "2 de febrero" },
        { french: "le vingt et un mars", spanish: "el veintiuno de marzo", date: "21 de marzo" }
      ]
    },
    {
      context: "Heure",
      rule: "Sistema de 24 horas o 12 horas con et demie, et quart",
      examples: [
        { french: "Il est trois heures", spanish: "Son las tres", time: "3:00" },
        { french: "Il est trois heures et demie", spanish: "Son las tres y media", time: "3:30" },
        { french: "Il est quatre heures moins le quart", spanish: "Son las cuatro menos cuarto", time: "3:45" },
        { french: "Il est quinze heures trente", spanish: "Son las tres y media (15:30)", time: "15:30" }
      ]
    },
    {
      context: "Âge",
      rule: "avoir + número + ans",
      examples: [
        { french: "J'ai vingt ans", spanish: "Tengo veinte años" },
        { french: "Elle a trente-cinq ans", spanish: "Tiene treinta y cinco años" },
        { french: "Il aura cinquante ans", spanish: "Cumplirá cincuenta años" }
      ]
    },
    {
      context: "Prix",
      rule: "Números con moneda",
      examples: [
        { french: "Ça coûte dix euros", spanish: "Cuesta diez euros" },
        { french: "C'est cinquante centimes", spanish: "Son cincuenta céntimos" },
        { french: "Le prix est de cent vingt euros", spanish: "El precio es de ciento veinte euros" }
      ]
    }
  ],

  pronunciation_notes: [
    {
      rule: "Liaison con números",
      examples: [
        { written: "six ans", pronounced: "[si-z‿ã]", note: "x se pronuncia z" },
        { written: "dix hommes", pronounced: "[di-z‿ɔm]", note: "x se pronuncia z" },
        { written: "huit ans", pronounced: "[ɥi-t‿ã]", note: "t final se pronuncia" },
        { written: "vingt ans", pronounced: "[vɛ̃-t‿ã]", note: "t final se pronuncia" }
      ]
    },
    {
      rule: "Pronunciación final",
      examples: [
        { number: "cinq", alone: "[sɛ̃k]", before_consonant: "[sɛ̃]", before_vowel: "[sɛ̃k]" },
        { number: "six", alone: "[sis]", before_consonant: "[si]", before_vowel: "[siz]" },
        { number: "huit", alone: "[ɥit]", before_consonant: "[ɥi]", before_vowel: "[ɥit]" },
        { number: "dix", alone: "[dis]", before_consonant: "[di]", before_vowel: "[diz]" }
      ]
    }
  ]
};
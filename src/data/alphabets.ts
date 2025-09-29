// Alfabetos centralizados para todos los idiomas de CandyWeb
export const alphabets = {
  french: {
    name: "Alfabeto Francés",
    nativeName: "Alphabet français", 
    totalLetters: 26,
    specialFeatures: ["Acentos (é, è, ê, ë)", "Cédille (ç)", "Liaison", "Élision", "Vocales nasales"],
    description: "26 letras latinas con acentos especiales y reglas de pronunciación únicas",
    script: undefined as string | undefined,
    totalSounds: undefined as string | undefined,
    foreignLetters: undefined as number | undefined,
    importPath: () => import('./languages/french/alphabet')
  },
  
  italian: {
    name: "Alfabeto Italiano", 
    nativeName: "Alfabeto italiano",
    totalLetters: 21,
    foreignLetters: 5,
    specialFeatures: ["Consonantes dobles", "Combinaciones ch/gh", "GL, GN", "Acento tónico libre"],
    description: "21 letras nativas + 5 extranjeras, pronunciación muy fonética",
    script: undefined as string | undefined,
    totalSounds: undefined as string | undefined,
    importPath: () => import('./languages/italian/alphabet')
  },
  
  portuguese: {
    name: "Alfabeto Portugués",
    nativeName: "Alfabeto português", 
    totalLetters: 26,
    specialFeatures: ["Vocales nasales (ã, õ)", "Dígrafos (ch, lh, nh)", "Diferencias Brasil/Portugal"],
    description: "26 letras con vocales nasales únicas y variaciones regionales",
    script: undefined as string | undefined,
    totalSounds: undefined as string | undefined,
    foreignLetters: undefined as number | undefined,
    importPath: () => import('./languages/portuguese/alphabet')
  },
  
  english: {
    name: "Alfabeto Inglés",
    nativeName: "English alphabet",
    totalLetters: 26, 
    totalSounds: "44+",
    specialFeatures: ["Silent letters", "Multiple pronunciations", "Spelling patterns", "Word stress"],
    description: "26 letras que representan 44+ sonidos, ortografía compleja",
    script: undefined as string | undefined,
    foreignLetters: undefined as number | undefined,
    importPath: () => import('./languages/english/alphabet')
  },
  
  russian: {
    name: "Alfabeto Ruso (Cirílico)",
    nativeName: "Русский алфавит",
    totalLetters: 33,
    script: "Cirílico",
    specialFeatures: ["Consonantes duras/blandas", "Signos ь/ъ", "Reducción vocálica", "Vocal Ы única"],
    description: "33 letras cirílicas con sistema único de consonantes duras/blandas",
    totalSounds: undefined as string | undefined,
    foreignLetters: undefined as number | undefined,
    importPath: () => import('./languages/russian/alphabet')
  }
};

export const getAlphabetInfo = (languageCode: string) => {
  const codes = {
    'fr': 'french', 'french': 'french',
    'it': 'italian', 'italian': 'italian', 
    'pt': 'portuguese', 'portuguese': 'portuguese',
    'en': 'english', 'english': 'english',
    'ru': 'russian', 'russian': 'russian'
  };
  
  const key = codes[languageCode as keyof typeof codes];
  return key ? alphabets[key as keyof typeof alphabets] : null;
};

export const loadAlphabet = async (languageCode: string) => {
  const info = getAlphabetInfo(languageCode);
  if (!info) return null;
  
  try {
    const module = await info.importPath();
    return module.alphabet;
  } catch (error) {
    console.error(`Error loading alphabet for ${languageCode}:`, error);
    return null;
  }
};
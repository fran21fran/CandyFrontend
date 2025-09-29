export interface Game {
  id: string;
  title: string;
  description: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  color: string;
  category: string;
  icon: string; // Emoji o nombre de ícono
  backgroundColor: string; // Color de fondo específico
  textColor: string; // Color del texto
  hasTimer?: boolean; // Si el juego tiene cronómetro
  timeLimit?: number; // Tiempo límite en segundos
  maxAttempts?: number; // Número máximo de intentos
  gameData?: any; // Para datos específicos del juego
}

export const games: Game[] = [
  {
    id: "football-words",
    title: "Fútbol de Palabras",
    description: "Dispara la pelota correcta al arco. Cada pelota tiene una palabra o verbo conjugado, solo una es correcta.",
    difficulty: "Principiante",
    color: "from-blue-600 to-purple-600",
    category: "Vocabulario",
    icon: "⚽",
    backgroundColor: "bg-gradient-to-br from-green-400 to-blue-500",
    textColor: "text-white",
    hasTimer: true,
    timeLimit: 120,
    maxAttempts: 3
  },
  {
    id: "vacation-routine",
    title: "Rutina de Vacaciones",
    description: "Ayuda a un niño de 8 años a completar su rutina de vacaciones en la computadora.",
    difficulty: "Principiante",
    color: "from-green-600 to-teal-600",
    category: "Escritura",
    icon: "🏖️",
    backgroundColor: "bg-gradient-to-br from-yellow-400 to-orange-400",
    textColor: "text-white"
  },
  {
    id: "image-association",
    title: "Asociación de Imágenes",
    description: "Asocia imágenes con las palabras correspondientes: animales, colores, telas, partes del cuerpo.",
    difficulty: "Principiante",
    color: "from-purple-600 to-pink-600",
    category: "Vocabulario",
    icon: "🎨",
    backgroundColor: "bg-gradient-to-br from-purple-400 to-pink-500",
    textColor: "text-white"
  },
  {
    id: "snoopy-path",
    title: "El Camino de Snoopy",
    description: "Ayuda a Snoopy por el camino correcto escribiendo nombres de números de operaciones matemáticas.",
    difficulty: "Intermedio",
    color: "from-yellow-600 to-orange-600",
    category: "Números",
    icon: "🐕",
    backgroundColor: "bg-gradient-to-br from-amber-400 to-yellow-500",
    textColor: "text-gray-800"
  },
  {
    id: "fashion-shopping",
    title: "Compras de Moda",
    description: "Acompaña a una chica de moda a comprarse ropa. Deberás conocer telas, ropas y colores.",
    difficulty: "Intermedio",
    color: "from-pink-600 to-red-600",
    category: "Vocabulario",
    icon: "👗",
    backgroundColor: "bg-gradient-to-br from-pink-400 to-rose-500",
    textColor: "text-white"
  },
  {
    id: "maria-shopping",
    title: "Compras con María",
    description: "Ayuda a María con las compras. Aprende nombres de tiendas, productos y números para pagar.",
    difficulty: "Intermedio",
    color: "from-indigo-600 to-blue-600",
    category: "Vida Cotidiana",
    icon: "🛒",
    backgroundColor: "bg-gradient-to-br from-indigo-400 to-blue-500",
    textColor: "text-white"
  },
  {
    id: "spiderman-train",
    title: "Spiderman y el Tren",
    description: "Salva a Spiderman desviando el tren al camino correcto. ¡Cuidado con las trampas ortográficas!",
    difficulty: "Avanzado",
    color: "from-red-600 to-pink-600",
    category: "Ortografía",
    icon: "🕷️",
    backgroundColor: "bg-gradient-to-br from-red-500 to-red-700",
    textColor: "text-white"
  },
  {
    id: "treasure-hunt",
    title: "Búsqueda del Tesoro",
    description: "Sigue las indicaciones de dirección en el mapa para encontrar el tesoro: un diploma y monedas.",
    difficulty: "Intermedio",
    color: "from-amber-600 to-yellow-600",
    category: "Direcciones",
    icon: "🗺️",
    backgroundColor: "bg-gradient-to-br from-amber-500 to-orange-600",
    textColor: "text-white",
    hasTimer: true,
    timeLimit: 120,
    maxAttempts: 5
  },
  {
    id: "word-soup",
    title: "Sopa de Letras Cultural",
    description: "Resuelve una sopa de letras con 10 palabras sobre regiones y cultura de cada idioma en 7 minutos.",
    difficulty: "Avanzado",
    color: "from-teal-600 to-green-600",
    category: "Cultura",
    icon: "🔤",
    backgroundColor: "bg-gradient-to-br from-teal-400 to-green-500",
    textColor: "text-white",
    hasTimer: true,
    timeLimit: 120,
    maxAttempts: 1
  },
  {
    id: "plant-care",
    title: "Cuidado de Plantas",
    description: "Cuida la margarita de tu vecina siguiendo las instrucciones según estación, clima y hora de riego.",
    difficulty: "Intermedio",
    color: "from-green-600 to-emerald-600",
    category: "Estaciones y Tiempo",
    icon: "🌻",
    backgroundColor: "bg-gradient-to-br from-green-400 to-emerald-500",
    textColor: "text-white"
  }
];

// Datos específicos para cada juego por idioma con frases variadas
export const gameData = {
  football: {
    french: [
      {
        question: "Je ____ au parc tous les jours",
        options: ["va", "vais", "aller"],
        correct: 1,
        explanation: "'Vais' es la conjugación correcta de 'aller' para 'je'"
      },
      {
        question: "Tu ____ du café le matin",
        options: ["bois", "boit", "boivent"],
        correct: 0,
        explanation: "'Bois' es la conjugación correcta de 'boire' para 'tu'"
      },
      {
        question: "Nous ____ français à l'école",
        options: ["apprend", "apprends", "apprenons"],
        correct: 2,
        explanation: "'Apprenons' es la conjugación correcta de 'apprendre' para 'nous'"
      },
      {
        question: "Elle ____ très bien",
        options: ["chantent", "chante", "chanter"],
        correct: 1,
        explanation: "'Chante' es la conjugación correcta de 'chanter' para 'elle'"
      },
      {
        question: "Ils ____ au cinéma ce soir",
        options: ["va", "vas", "vont"],
        correct: 2,
        explanation: "'Vont' es la conjugación correcta de 'aller' para 'ils'"
      }
    ],
    italian: [
      {
        question: "Io ____ la pizza",
        options: ["mangio", "mangia", "mangiano"],
        correct: 0,
        explanation: "'Mangio' es la conjugación correcta de 'mangiare' para 'io'"
      },
      {
        question: "Tu ____ molto bene l'italiano",
        options: ["parlo", "parli", "parlano"],
        correct: 1,
        explanation: "'Parli' es la conjugación correcta de 'parlare' para 'tu'"
      },
      {
        question: "Lei ____ un libro interessante",
        options: ["leggo", "leggi", "legge"],
        correct: 2,
        explanation: "'Legge' es la conjugación correcta de 'leggere' para 'lei'"
      },
      {
        question: "Noi ____ in Italia quest'estate",
        options: ["andiamo", "vai", "vanno"],
        correct: 0,
        explanation: "'Andiamo' es la conjugación correcta de 'andare' para 'noi'"
      },
      {
        question: "Loro ____ sempre felici",
        options: ["sono", "sei", "è"],
        correct: 0,
        explanation: "'Sono' es la conjugación correcta de 'essere' para 'loro'"
      }
    ],
    portuguese: [
      {
        question: "Eu ____ português",
        options: ["fala", "falo", "falamos"],
        correct: 1,
        explanation: "'Falo' es la conjugación correcta de 'falar' para 'eu'"
      },
      {
        question: "Você ____ muito bem",
        options: ["dança", "danças", "dançam"],
        correct: 0,
        explanation: "'Dança' es la conjugación correcta de 'dançar' para 'você'"
      },
      {
        question: "Nós ____ no Brasil",
        options: ["moro", "mora", "moramos"],
        correct: 2,
        explanation: "'Moramos' es la conjugación correcta de 'morar' para 'nós'"
      },
      {
        question: "Eles ____ futebol no parque",
        options: ["joga", "jogam", "jogo"],
        correct: 1,
        explanation: "'Jogam' es la conjugación correcta de 'jogar' para 'eles'"
      },
      {
        question: "Ela ____ música clássica",
        options: ["escuto", "escuta", "escutam"],
        correct: 1,
        explanation: "'Escuta' es la conjugación correcta de 'escutar' para 'ela'"
      }
    ],
    english: [
      {
        question: "I ____ to school every day",
        options: ["go", "goes", "going"],
        correct: 0,
        explanation: "'Go' is the correct form for 'I'"
      },
      {
        question: "She ____ beautiful songs",
        options: ["sing", "sings", "singing"],
        correct: 1,
        explanation: "'Sings' is the correct form for 'she'"
      },
      {
        question: "They ____ soccer on weekends",
        options: ["play", "plays", "playing"],
        correct: 0,
        explanation: "'Play' is the correct form for 'they'"
      },
      {
        question: "He ____ his homework every night",
        options: ["do", "does", "doing"],
        correct: 1,
        explanation: "'Does' is the correct form for 'he'"
      },
      {
        question: "We ____ English at home",
        options: ["speaks", "speak", "speaking"],
        correct: 1,
        explanation: "'Speak' is the correct form for 'we'"
      }
    ],
    russian: [
      {
        question: "Я ____ по-русски",
        options: ["говорю", "говорит", "говорим"],
        correct: 0,
        explanation: "'Говорю' es la conjugación correcta para 'я'"
      },
      {
        question: "Ты ____ в школу",
        options: ["иду", "идёшь", "идут"],
        correct: 1,
        explanation: "'Идёшь' es la conjugación correcta para 'ты'"
      },
      {
        question: "Он ____ книгу",
        options: ["читаю", "читает", "читаем"],
        correct: 1,
        explanation: "'Читает' es la conjugación correcta para 'он'"
      },
      {
        question: "Мы ____ дома",
        options: ["живёт", "живём", "живут"],
        correct: 1,
        explanation: "'Живём' es la conjugación correcta para 'мы'"
      },
      {
        question: "Они ____ музыку",
        options: ["слушают", "слушаю", "слушает"],
        correct: 0,
        explanation: "'Слушают' es la conjugación correcta para 'они'"
      }
    ]
  },
  vacation: {
    french: {
      routine: "Bonjour! Aide-moi à finir ma routine de vacances!",
      tasks: [
        { text: "Je me _____ à 9h", options: ["lève", "couche", "mange"], correct: 0 },
        { text: "Je _____ mes dents", options: ["lave", "brosse", "peigne"], correct: 1 },
        { text: "Je _____ le petit-déjeuner", options: ["dîne", "déjeune", "prends"], correct: 2 }
      ],
      thanks: "Merci beaucoup! Maintenant je peux profiter de mes vacances!"
    },
    italian: {
      routine: "Ciao! Aiutami a finire la mia routine delle vacanze!",
      tasks: [
        { text: "Mi _____ alle 9", options: ["sveglio", "dormo", "mangio"], correct: 0 },
        { text: "Mi _____ i denti", options: ["lavo", "spazzolo", "pettino"], correct: 1 },
        { text: "_____ la colazione", options: ["ceno", "pranzo", "faccio"], correct: 2 }
      ],
      thanks: "Grazie mille! Ora posso godermi le vacanze!"
    }
  },
  association: {
    french: {
      items: [
        { word: "Chat", image: "🐱", category: "animal" },
        { word: "Rouge", image: "🔴", category: "color" },
        { word: "Coton", image: "🧵", category: "fabric" },
        { word: "Main", image: "✋", category: "body" }
      ]
    },
    italian: {
      items: [
        { word: "Gatto", image: "🐱", category: "animal" },
        { word: "Rosso", image: "🔴", category: "color" },
        { word: "Cotone", image: "🧵", category: "fabric" },
        { word: "Mano", image: "✋", category: "body" }
      ]
    }
  }
};

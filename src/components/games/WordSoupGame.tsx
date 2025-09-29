import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Search, Target } from "lucide-react";

interface WordSoupGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

interface WordToFind {
  word: string;
  translation: string;
  found: boolean;
  positions?: { row: number; col: number; direction: string }[];
}

const wordsData = {
  french: [
    { word: "PARIS", translation: "París" },
    { word: "BAGUETTE", translation: "Baguette" },
    { word: "AMOUR", translation: "Amor" },
    { word: "CAFE", translation: "Café" },
    { word: "MUSEE", translation: "Museo" },
    { word: "SEINE", translation: "Sena" },
    { word: "CROISSANT", translation: "Croissant" },
    { word: "TOUR", translation: "Torre" },
    { word: "FROMAGE", translation: "Queso" },
    { word: "VIN", translation: "Vino" }
  ],
  italian: [
    { word: "ROMA", translation: "Roma" },
    { word: "PASTA", translation: "Pasta" },
    { word: "AMORE", translation: "Amor" },
    { word: "PIZZA", translation: "Pizza" },
    { word: "GELATO", translation: "Helado" },
    { word: "VENICE", translation: "Venecia" },
    { word: "OPERA", translation: "Ópera" },
    { word: "VINO", translation: "Vino" },
    { word: "MARE", translation: "Mar" },
    { word: "SOLE", translation: "Sol" }
  ],
  portuguese: [
    { word: "BRASIL", translation: "Brasil" },
    { word: "SAMBA", translation: "Samba" },
    { word: "PRAIA", translation: "Playa" },
    { word: "FUTEBOL", translation: "Fútbol" },
    { word: "CARNAVAL", translation: "Carnaval" },
    { word: "IPANEMA", translation: "Ipanema" },
    { word: "CAIPIRINHA", translation: "Caipirinha" },
    { word: "AMAZONIA", translation: "Amazonía" },
    { word: "FEIJOADA", translation: "Feijoada" },
    { word: "BOSSA", translation: "Bossa" }
  ],
  english: [
    { word: "LONDON", translation: "Londres" },
    { word: "TEA", translation: "Té" },
    { word: "FOOTBALL", translation: "Fútbol" },
    { word: "QUEEN", translation: "Reina" },
    { word: "BRIDGE", translation: "Puente" },
    { word: "CASTLE", translation: "Castillo" },
    { word: "GARDEN", translation: "Jardín" },
    { word: "MUSIC", translation: "Música" },
    { word: "HISTORY", translation: "Historia" },
    { word: "CULTURE", translation: "Cultura" }
  ],
  russian: [
    { word: "МОСКВА", translation: "Moscú" },
    { word: "ВОДКА", translation: "Vodka" },
    { word: "БОРЩ", translation: "Borsch" },
    { word: "БАЛЕТ", translation: "Ballet" },
    { word: "КРЕМЛЬ", translation: "Kremlin" },
    { word: "ТРОЙКА", translation: "Troika" },
    { word: "МАТРЁШКА", translation: "Matrioshka" },
    { word: "САМОВАР", translation: "Samovar" },
    { word: "ПУШКИН", translation: "Pushkin" },
    { word: "ЗИМА", translation: "Invierno" }
  ]
};

export default function WordSoupGame({ language, onComplete }: WordSoupGameProps) {
  const [grid, setGrid] = useState<string[][]>([]);
  const [wordsToFind, setWordsToFind] = useState<WordToFind[]>([]);
  const [selectedCells, setSelectedCells] = useState<{row: number, col: number}[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutos
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const GRID_SIZE = 15;

  // Temporizador
  useEffect(() => {
    if (!gameStarted || gameEnded || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameEnded(true);
          onComplete(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameEnded, timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Generar la sopa de letras
  const generateWordSoup = () => {
    const words = wordsData[language as keyof typeof wordsData].slice(0, 10);
    const newGrid: string[][] = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    const placedWords: WordToFind[] = [];

    // Direcciones: horizontal, vertical, diagonal
    const directions = [
      [0, 1],   // horizontal derecha
      [1, 0],   // vertical abajo
      [1, 1],   // diagonal abajo-derecha
      [0, -1],  // horizontal izquierda
      [-1, 0],  // vertical arriba
      [-1, -1], // diagonal arriba-izquierda
      [1, -1],  // diagonal abajo-izquierda
      [-1, 1]   // diagonal arriba-derecha
    ];

    // Colocar palabras
    words.forEach(({ word, translation }) => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 100) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const startRow = Math.floor(Math.random() * GRID_SIZE);
        const startCol = Math.floor(Math.random() * GRID_SIZE);

        // Verificar si la palabra cabe
        let canPlace = true;
        const positions: { row: number; col: number; direction: string }[] = [];

        for (let i = 0; i < word.length; i++) {
          const row = startRow + direction[0] * i;
          const col = startCol + direction[1] * i;

          if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) {
            canPlace = false;
            break;
          }

          if (newGrid[row][col] !== '' && newGrid[row][col] !== word[i]) {
            canPlace = false;
            break;
          }

          positions.push({ row, col, direction: direction.join(',') });
        }

        if (canPlace) {
          // Colocar la palabra
          for (let i = 0; i < word.length; i++) {
            const row = startRow + direction[0] * i;
            const col = startCol + direction[1] * i;
            newGrid[row][col] = word[i];
          }
          
          placedWords.push({ 
            word, 
            translation, 
            found: false, 
            positions 
          });
          placed = true;
        }

        attempts++;
      }
    });

    // Llenar espacios vacíos con letras aleatorias
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (newGrid[row][col] === '') {
          newGrid[row][col] = letters[Math.floor(Math.random() * letters.length)];
        }
      }
    }

    setGrid(newGrid);
    setWordsToFind(placedWords);
  };

  useEffect(() => {
    if (gameStarted) {
      generateWordSoup();
    }
  }, [gameStarted, language]);

  const handleCellMouseDown = (row: number, col: number) => {
    setIsDragging(true);
    setSelectedCells([{ row, col }]);
  };

  const handleCellMouseEnter = (row: number, col: number) => {
    if (isDragging) {
      setSelectedCells(prev => {
        const newSelection = [...prev];
        const lastCell = newSelection[newSelection.length - 1];
        
        // Solo permitir selección en línea recta
        if (newSelection.length === 1) {
          newSelection.push({ row, col });
        } else {
          // Calcular dirección y continuar en esa línea
          const deltaRow = lastCell.row - newSelection[0].row;
          const deltaCol = lastCell.col - newSelection[0].col;
          
          // Verificar si el nuevo punto está en la misma línea
          const newDeltaRow = row - newSelection[0].row;
          const newDeltaCol = col - newSelection[0].col;
          
          if (Math.abs(newDeltaRow) <= Math.abs(deltaRow) && Math.abs(newDeltaCol) <= Math.abs(deltaCol)) {
            return [newSelection[0], { row, col }];
          }
        }
        
        return newSelection;
      });
    }
  };

  const handleCellMouseUp = () => {
    if (selectedCells.length > 1) {
      checkSelectedWord();
    }
    setIsDragging(false);
    setSelectedCells([]);
  };

  const checkSelectedWord = () => {
    const selectedWord = selectedCells.map(({row, col}) => grid[row][col]).join('');
    const reversedWord = selectedWord.split('').reverse().join('');

    const foundWord = wordsToFind.find(word => 
      !word.found && (word.word === selectedWord || word.word === reversedWord)
    );

    if (foundWord) {
      setFoundWords(prev => [...prev, foundWord.word]);
      setWordsToFind(prev => 
        prev.map(word => 
          word.word === foundWord.word ? { ...word, found: true } : word
        )
      );

      // Verificar si se completó el juego
      const newFoundCount = foundWords.length + 1;
      if (newFoundCount === wordsToFind.length) {
        setGameEnded(true);
        onComplete(true);
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  // Pantalla inicial
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-400 to-green-600 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md shadow-2xl">
          <div className="text-6xl mb-6">🔤</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Sopa de Letras Cultural</h2>
          <p className="text-gray-600 mb-6">
            Tienes 2 minutos para encontrar 10 palabras culturales ocultas en la sopa de letras.
            ¡Arrastra para seleccionar las palabras!
          </p>
          <Button 
            onClick={startGame} 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
          >
            ¡Comenzar Búsqueda!
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-400 to-green-600 p-4">
      {/* HUD */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className={`font-bold ${timeLeft <= 30 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Search className="w-5 h-5 text-teal-600" />
          <span className="text-gray-800 font-semibold">{foundWords.length}/{wordsToFind.length}</span>
        </div>
      </div>

      <div className="flex gap-4 max-w-6xl mx-auto">
        {/* Sopa de letras */}
        <div className="flex-1">
          <div 
            className="grid gap-1 bg-white/90 p-4 rounded-xl shadow-lg"
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
          >
            {grid.map((row, rowIndex) =>
              row.map((letter, colIndex) => {
                const isSelected = selectedCells.some(cell => 
                  cell.row === rowIndex && cell.col === colIndex
                );
                const isFoundWord = wordsToFind.some(word => 
                  word.found && word.positions?.some(pos => 
                    pos.row === rowIndex && pos.col === colIndex
                  )
                );

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-bold border cursor-pointer select-none transition-all ${
                      isSelected ? 'bg-teal-200 border-teal-400' :
                      isFoundWord ? 'bg-green-200 border-green-400' :
                      'bg-white border-gray-300 hover:bg-gray-100'
                    }`}
                    onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                    onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                    onMouseUp={handleCellMouseUp}
                  >
                    {letter}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Lista de palabras */}
        <div className="w-64">
          <div className="bg-white/90 rounded-xl p-4 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Palabras a encontrar:
            </h3>
            <div className="space-y-2">
              {wordsToFind.map((wordObj, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg border transition-all ${
                    wordObj.found 
                      ? 'bg-green-100 border-green-300 text-green-800 line-through' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="font-semibold">{wordObj.word}</div>
                  <div className="text-sm text-gray-600">{wordObj.translation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
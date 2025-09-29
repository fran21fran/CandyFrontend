import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Map } from "lucide-react";
import GameScoreTracker from "@/components/GameScoreTracker";

interface TreasureHuntGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

const treasureData = {
  french: [
    {
      instruction: "Pour commencer, allez vers le ____",
      options: ["nord", "sud", "est"],
      correct: 0,
      icon: "🧭"
    },
    {
      instruction: "Maintenant, tournez à ____",
      options: ["gauche", "droite", "derrière"],
      correct: 1,
      icon: "↪️"
    },
    {
      instruction: "Continuez tout ____",
      options: ["droit", "courbe", "cercle"],
      correct: 0,
      icon: "⬆️"
    },
    {
      instruction: "Le trésor est ____ l'arbre",
      options: ["sur", "sous", "dans"],
      correct: 1,
      icon: "🌳"
    }
  ],
  italian: [
    {
      instruction: "Per iniziare, andate verso ____",
      options: ["nord", "sud", "ovest"],
      correct: 0,
      icon: "🧭"
    },
    {
      instruction: "Ora, girate a ____",
      options: ["sinistra", "destra", "dietro"],
      correct: 0,
      icon: "↪️"
    },
    {
      instruction: "Continuate ____",
      options: ["dritto", "curvo", "tondo"],
      correct: 0,
      icon: "⬆️"
    },
    {
      instruction: "Il tesoro è ____ la roccia",
      options: ["sopra", "sotto", "dentro"],
      correct: 1,
      icon: "🪨"
    }
  ],
  portuguese: [
    {
      instruction: "Para começar, vão para o ____",
      options: ["norte", "sul", "leste"],
      correct: 0,
      icon: "🧭"
    },
    {
      instruction: "Agora, virem à ____",
      options: ["esquerda", "direita", "trás"],
      correct: 1,
      icon: "↪️"
    },
    {
      instruction: "Continuem ____",
      options: ["reto", "curva", "círculo"],
      correct: 0,
      icon: "⬆️"
    },
    {
      instruction: "O tesouro está ____ da ponte",
      options: ["em cima", "embaixo", "dentro"],
      correct: 1,
      icon: "🌉"
    }
  ],
  english: [
    {
      instruction: "To start, go ____",
      options: ["north", "south", "west"],
      correct: 0,
      icon: "🧭"
    },
    {
      instruction: "Now, turn ____",
      options: ["left", "right", "back"],
      correct: 0,
      icon: "↪️"
    },
    {
      instruction: "Continue ____",
      options: ["straight", "curved", "round"],
      correct: 0,
      icon: "⬆️"
    },
    {
      instruction: "The treasure is ____ the cave",
      options: ["above", "inside", "outside"],
      correct: 1,
      icon: "🕳️"
    }
  ],
  russian: [
    {
      instruction: "Чтобы начать, идите на ____",
      options: ["север", "юг", "запад"],
      correct: 0,
      icon: "🧭"
    },
    {
      instruction: "Теперь поверните ____",
      options: ["налево", "направо", "назад"],
      correct: 0,
      icon: "↪️"
    },
    {
      instruction: "Продолжайте ____",
      options: ["прямо", "кривая", "круг"],
      correct: 0,
      icon: "⬆️"
    },
    {
      instruction: "Сокровище ____ дерева",
      options: ["над", "под", "в"],
      correct: 1,
      icon: "🌳"
    }
  ]
};

export default function TreasureHuntGame({ language, onComplete }: TreasureHuntGameProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutos
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);
  const [mapPosition, setMapPosition] = useState({ x: 50, y: 80 });

  const directions = treasureData[language as keyof typeof treasureData];
  const currentDirection = directions[currentStep];

  // Temporizador
  useEffect(() => {
    if (!gameStarted || gameEnded || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameEnded(true);
          setIsGameActive(false);
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

  const handleOptionClick = (optionIndex: number) => {
    if (showResult || gameEnded) return;
    setSelectedOption(optionIndex);
  };

  const confirmDirection = () => {
    if (selectedOption === null || gameEnded) return;
    
    setShowResult(true);
    const isCorrect = selectedOption === currentDirection.correct;
    
    if (isCorrect) {
      // Add points for correct direction
      const pointsEarned = 150 + (timeLeft * 3); // Base points + time bonus
      setScore(prev => prev + pointsEarned);
      
      // Update global score tracker
      if (window.updateGameScore) {
        window.updateGameScore(pointsEarned);
      }
      
      // Mover en el mapa
      const newPosition = { ...mapPosition };
      if (currentStep === 0) newPosition.y -= 15; // norte
      else if (currentStep === 1) newPosition.x += 15; // derecha
      else if (currentStep === 2) newPosition.y -= 10; // continuar
      
      setMapPosition(newPosition);
      
      setTimeout(() => {
        if (currentStep < directions.length - 1) {
          setCurrentStep(prev => prev + 1);
          setSelectedOption(null);
          setShowResult(false);
        } else {
          setGameEnded(true);
          setIsGameActive(false);
          onComplete(true);
        }
      }, 2000);
    } else {
      setAttempts(prev => {
        const newAttempts = prev - 1;
        if (newAttempts <= 0) {
          setTimeout(() => {
            setGameEnded(true);
            setIsGameActive(false);
            onComplete(false);
          }, 2000);
        } else {
          setTimeout(() => {
            setSelectedOption(null);
            setShowResult(false);
          }, 2000);
        }
        return newAttempts;
      });
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  // Pantalla inicial
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-400 to-orange-600 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md shadow-2xl">
          <div className="text-6xl mb-6">🗺️</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Búsqueda del Tesoro</h2>
          <p className="text-gray-600 mb-6">
            Tienes 2 minutos y 5 intentos para seguir las {directions.length} direcciones correctamente.
            ¡Encuentra el tesoro siguiendo las pistas en el mapa!
          </p>
          <Button 
            onClick={startGame} 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
          >
            ¡Comenzar Búsqueda!
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-400 to-orange-600 relative overflow-hidden">
      {/* HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className={`font-bold ${timeLeft <= 30 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Map className="w-5 h-5 text-amber-600" />
          <span className="text-gray-800 font-semibold">Paso {currentStep + 1}/{directions.length}</span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <span className="text-orange-600 font-bold">🏆 {score}</span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="font-bold text-gray-800">{attempts}</span>
        </div>
      </div>

      {/* Mapa del tesoro */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-60 bg-yellow-200 rounded-lg border-4 border-amber-800 shadow-lg">
        {/* Elementos del mapa */}
        <div className="absolute top-4 left-4 text-2xl">🏔️</div>
        <div className="absolute top-4 right-4 text-2xl">🌳</div>
        <div className="absolute bottom-4 left-4 text-2xl">🏞️</div>
        <div className="absolute bottom-4 right-4 text-2xl">🕳️</div>
        
        {/* Tesoro */}
        {currentStep === directions.length - 1 && showResult && selectedOption === currentDirection.correct && (
          <div className="absolute top-1/2 right-1/4 text-3xl animate-bounce">💰</div>
        )}
        
        {/* Posición del jugador */}
        <div 
          className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white transition-all duration-1000"
          style={{
            left: `${mapPosition.x}%`,
            top: `${mapPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
            👤
          </div>
        </div>
      </div>

      {/* Instrucción actual */}
      <div className="absolute top-96 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-lg p-6 text-center max-w-md">
        <div className="text-3xl mb-4">{currentDirection.icon}</div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Dirección:</h3>
        <p className="text-xl mb-4">{currentDirection.instruction}</p>
        
        {/* Opciones */}
        <div className="grid grid-cols-1 gap-3">
          {currentDirection.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`px-4 py-3 rounded-lg border-2 transition-all ${
                selectedOption === index
                  ? 'border-amber-500 bg-amber-100 text-amber-800'
                  : 'border-gray-300 bg-white hover:border-amber-300'
              }`}
              disabled={showResult || gameEnded}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Botón confirmar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={confirmDirection}
          disabled={selectedOption === null || showResult || gameEnded}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 text-lg shadow-lg disabled:opacity-50"
        >
          ¡Seguir Dirección! 🗺️
        </Button>
      </div>

      {/* Mensaje de resultado */}
      {showResult && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 rounded-xl p-6 text-center shadow-2xl z-30">
          <div className="text-4xl mb-2">
            {selectedOption === currentDirection.correct ? '✅' : '❌'}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {selectedOption === currentDirection.correct ? '¡Correcto!' : '¡Incorrecto!'}
          </h3>
          <p className="text-gray-600">
            {selectedOption === currentDirection.correct 
              ? currentStep === directions.length - 1 ? '¡Has encontrado el tesoro!' : 'Continúa siguiendo el mapa...'
              : attempts > 1 ? 'Inténtalo de nuevo...' : '¡Se acabaron los intentos!'
            }
          </p>
        </div>
      )}
      
      {/* Game Score Tracker */}
      {gameStarted && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
          <GameScoreTracker
            gameId="treasure-hunt"
            gameName="Búsqueda del Tesoro"
            difficulty="Avanzado"
            language={language}
            isGameActive={isGameActive}
            onGameStart={() => {
              setIsGameActive(true);
              setScore(0);
            }}
            onGameEnd={(finalScore, completionTime) => {
              console.log(`Treasure hunt completed with score: ${finalScore}, time: ${completionTime}s`);
            }}
          />
        </div>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { gameData } from "@/data/games";
import { Clock, Heart } from "lucide-react";
import GameScoreTracker from "@/components/GameScoreTracker";

interface FootballGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function FootballGame({ language, onComplete }: FootballGameProps) {
  const [selectedBall, setSelectedBall] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutos
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);
  const [ballPositions, setBallPositions] = useState([
    { x: 20, y: 60 },
    { x: 50, y: 70 },
    { x: 80, y: 65 }
  ]);

  const questions = gameData.football[language as keyof typeof gameData.football];
  const currentQuestion = questions[currentQuestionIndex];

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

  const handleBallClick = (ballIndex: number) => {
    if (showResult || gameEnded) return;
    setSelectedBall(ballIndex);
  };

  const shootBall = () => {
    if (selectedBall === null || gameEnded) return;
    
    setShowResult(true);
    const isCorrect = selectedBall === currentQuestion.correct;
    
    if (isCorrect) {
      // Add points for correct answer
      const pointsEarned = 100 + (timeLeft * 2); // Base points + time bonus
      setScore(prev => prev + pointsEarned);
      
      // Update global score tracker
      if (window.updateGameScore) {
        window.updateGameScore(pointsEarned);
      }
      
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          // Siguiente pregunta
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedBall(null);
          setShowResult(false);
          // Nuevas posiciones para las pelotas
          setBallPositions([
            { x: Math.random() * 20 + 10, y: Math.random() * 10 + 60 },
            { x: Math.random() * 20 + 40, y: Math.random() * 10 + 65 },
            { x: Math.random() * 20 + 70, y: Math.random() * 10 + 60 }
          ]);
        } else {
          // Juego completado exitosamente
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
            setSelectedBall(null);
            setShowResult(false);
          }, 2000);
        }
        return newAttempts;
      });
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setIsGameActive(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setAttempts(3);
    setTimeLeft(120);
    setGameEnded(false);
  };

  // Pantalla inicial
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md shadow-2xl">
          <div className="text-6xl mb-6">⚽</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Fútbol de Palabras</h2>
          <p className="text-gray-600 mb-6">
            Tienes 2 minutos y 3 intentos para completar {questions.length} frases correctamente.
            ¡Dispara la pelota con la respuesta correcta al arco!
          </p>
          <Button 
            onClick={startGame} 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            ¡Comenzar Juego!
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 relative overflow-hidden">
      {/* HUD - Temporizador, Intentos, Score */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className={`font-bold ${timeLeft <= 30 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <span className="text-gray-800 font-semibold">Pregunta {currentQuestionIndex + 1}/{questions.length}</span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <span className="text-orange-600 font-bold">🏆 {score}</span>
        </div>
        
        <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="font-bold text-gray-800">{attempts}</span>
        </div>
      </div>

      {/* Campo de fútbol */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 w-full h-32 bg-green-500"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-24 border-4 border-white rounded-t-3xl"></div>
      </div>

      {/* Arco */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-20 border-4 border-white border-b-0">
        <div className="absolute -top-2 -left-2 -right-2 h-2 bg-white"></div>
        {showResult && selectedBall === currentQuestion.correct && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-bounce">🎉</div>
          </div>
        )}
      </div>

      {/* Pregunta */}
      <div className="absolute top-44 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-lg p-4 text-black text-center max-w-md">
        <h3 className="text-lg font-bold mb-2">Completa la frase:</h3>
        <p className="text-xl mb-2">{currentQuestion.question}</p>
        {showResult && (
          <p className="text-sm text-green-600 font-medium">
            {currentQuestion.explanation}
          </p>
        )}
      </div>

      {/* Pelotas */}
      {currentQuestion.options.map((option, index) => (
        <div
          key={index}
          className={`absolute cursor-pointer transition-all duration-300 ${
            selectedBall === index ? 'scale-110 ring-4 ring-yellow-400' : 'hover:scale-105'
          }`}
          style={{
            left: `${ballPositions[index].x}%`,
            top: `${ballPositions[index].y}%`,
            transform: showResult && selectedBall === index ? 'translateY(-300px)' : 'none'
          }}
          onClick={() => handleBallClick(index)}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300">
              <span className="text-sm font-bold text-gray-800">{option}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Botón disparar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={shootBall}
          disabled={selectedBall === null || showResult || gameEnded}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg shadow-lg disabled:opacity-50"
        >
          ¡Disparar! ⚽
        </Button>
      </div>

      {/* Mensaje de resultado */}
      {showResult && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 rounded-xl p-6 text-center shadow-2xl z-30">
          <div className="text-4xl mb-2">
            {selectedBall === currentQuestion.correct ? '🎉' : '❌'}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {selectedBall === currentQuestion.correct ? '¡Correcto!' : '¡Incorrecto!'}
          </h3>
          <p className="text-gray-600">
            {selectedBall === currentQuestion.correct 
              ? '¡Buen disparo! Siguiente pregunta...' 
              : attempts > 1 ? 'Inténtalo de nuevo...' : '¡Se acabaron los intentos!'
            }
          </p>
        </div>
      )}
      
      {/* Game Score Tracker */}
      {gameStarted && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
          <GameScoreTracker
            gameId="football-words"
            gameName="Fútbol de Palabras"
            difficulty="Intermedio"
            language={language}
            isGameActive={isGameActive}
            onGameStart={() => {}}
            onGameEnd={(finalScore, completionTime) => {
              console.log(`Game completed with score: ${finalScore}, time: ${completionTime}s`);
            }}
          />
        </div>
      )}
    </div>
  );
}
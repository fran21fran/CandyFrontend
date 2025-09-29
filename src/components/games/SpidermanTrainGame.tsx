import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface SpidermanTrainGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function SpidermanTrainGame({ language, onComplete }: SpidermanTrainGameProps) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const directions = {
    french: [
      { correct: "À gauche", wrong: ["À gauce", "À gaushe"], trap: "Faltas de ortografía" },
      { correct: "À droite", wrong: ["À droitté", "À droit"], trap: "Doble consonante incorrecta" },
      { correct: "Tout droit", wrong: ["Tous droit", "Tout droi"], trap: "Concordancia incorrecta" },
      { correct: "En haut", wrong: ["En hauts", "En aut"], trap: "Pluralización incorrecta" },
      { correct: "En bas", wrong: ["En bass", "En ba"], trap: "Doble consonante" }
    ],
    italian: [
      { correct: "A sinistra", wrong: ["A sinisttra", "A sinistra"], trap: "Doble consonante" },
      { correct: "A destra", wrong: ["A desstra", "A desttra"], trap: "Consonantes dobles" },
      { correct: "Dritto", wrong: ["Drito", "Dritta"], trap: "Consonante faltante" },
      { correct: "In alto", wrong: ["In altto", "In altu"], trap: "Doble consonante" },
      { correct: "In basso", wrong: ["In baso", "In basso"], trap: "Consonante simple" }
    ],
    english: [
      { correct: "Left", wrong: ["Lef", "Leftt"], trap: "Letter missing/extra" },
      { correct: "Right", wrong: ["Rigth", "Rigt"], trap: "Letter order" },
      { correct: "Straight", wrong: ["Straigth", "Straigt"], trap: "Silent letters" },
      { correct: "Up", wrong: ["Upp", "Pu"], trap: "Double letters" },
      { correct: "Down", wrong: ["Donw", "Dwn"], trap: "Letter order" }
    ]
  };

  const currentData = directions[language as keyof typeof directions] || directions.english;
  const currentDirection = currentData[currentLevel];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete(false);
    }
  }, [timeLeft, onComplete]);

  const handleChoice = (choice: string) => {
    if (showFeedback) return;

    const correct = choice === currentDirection.correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setTimeout(() => {
        if (currentLevel < currentData.length - 1) {
          setCurrentLevel(currentLevel + 1);
          setShowFeedback(false);
          setAttempts(0);
          setTimeLeft(30);
        } else {
          onComplete(true);
        }
      }, 2000);
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 4) {
        setTimeout(() => onComplete(false), 2000);
      } else {
        setTimeout(() => setShowFeedback(false), 2000);
      }
    }
  };

  const allOptions = [currentDirection.correct, ...currentDirection.wrong].sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-pink-600 relative overflow-hidden">
      {/* Background city */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-gray-800 to-gray-600"></div>
        <div className="absolute bottom-32 left-10 w-16 h-32 bg-gray-700"></div>
        <div className="absolute bottom-32 left-32 w-20 h-40 bg-gray-700"></div>
        <div className="absolute bottom-32 right-10 w-16 h-28 bg-gray-700"></div>
        <div className="absolute bottom-32 right-32 w-18 h-36 bg-gray-700"></div>
      </div>

      {/* Spiderman */}
      <div className="absolute top-20 left-1/4 text-6xl animate-bounce">
        🕷️
      </div>

      {/* Train */}
      <div className="absolute bottom-40 right-10 text-6xl">
        🚂
      </div>

      {/* Danger zone */}
      <div className="absolute bottom-32 right-0 w-32 h-8 bg-red-800 opacity-80"></div>

      {/* Game panel */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">¡Salva a Spiderman!</h2>
          <p className="text-gray-600 text-sm">Elige la dirección correcta</p>
          <div className="mt-2 flex justify-between text-sm">
            <span>Tiempo: {timeLeft}s</span>
            <span>Intentos: {5 - attempts}/5</span>
          </div>
        </div>

        <div className="bg-red-100 rounded-lg p-4 mb-6 text-center">
          <div className="text-lg font-bold text-red-800 mb-2">
            "¡Ayúdame! ¿Hacia dónde debo ir?"
          </div>
          <div className="text-sm text-gray-600">
            ⚠️ {currentDirection.trap}
          </div>
        </div>

        {!showFeedback ? (
          <div className="space-y-3">
            {allOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(option)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
              >
                {option}
              </Button>
            ))}
          </div>
        ) : (
          <div className={`text-center p-4 rounded-lg ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <div className="text-4xl mb-2">
              {isCorrect ? "🎉" : "❌"}
            </div>
            <p className="font-bold">
              {isCorrect 
                ? "¡Correcto! Spiderman está a salvo!" 
                : `¡Incorrecto! La respuesta era: ${currentDirection.correct}`
              }
            </p>
          </div>
        )}

        <div className="mt-4 text-center text-sm text-gray-600">
          Nivel {currentLevel + 1} de {currentData.length}
        </div>
      </div>
    </div>
  );
}
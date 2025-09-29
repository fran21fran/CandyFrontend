import { useState } from "react";
import { Button } from "@/components/ui/button";
import { gameData } from "@/data/games";

interface VacationRoutineGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function VacationRoutineGame({ language, onComplete }: VacationRoutineGameProps) {
  const [currentTask, setCurrentTask] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const gameInfo = gameData.vacation[language as keyof typeof gameData.vacation];
  
  if (!gameInfo) {
    // Datos por defecto si el idioma no está configurado
    const defaultGame = {
      routine: "Hello! Help me finish my vacation routine!",
      tasks: [
        { text: "I _____ at 9am", options: ["wake up", "sleep", "eat"], correct: 0 },
        { text: "I brush my _____", options: ["hair", "teeth", "hands"], correct: 1 },
        { text: "I _____ breakfast", options: ["dinner", "lunch", "have"], correct: 2 }
      ],
      thanks: "Thank you so much! Now I can enjoy my vacation!"
    };
    
    const handleAnswer = (answerIndex: number) => {
      const newAnswers = [...selectedAnswers, answerIndex];
      setSelectedAnswers(newAnswers);

      if (currentTask < defaultGame.tasks.length - 1) {
        setTimeout(() => setCurrentTask(currentTask + 1), 1000);
      } else {
        setTimeout(() => {
          setShowThankYou(true);
          const allCorrect = newAnswers.every((answer, index) => answer === defaultGame.tasks[index].correct);
          setTimeout(() => onComplete(allCorrect), 2000);
        }, 1000);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full text-center shadow-2xl">
          {!showThankYou ? (
            <>
              <div className="text-6xl mb-4">👦</div>
              <h2 className="text-2xl font-bold mb-4 text-blue-800">{defaultGame.routine}</h2>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <div className="text-lg mb-4 text-gray-800">
                  {defaultGame.tasks[currentTask].text}
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {defaultGame.tasks[currentTask].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                Tarea {currentTask + 1} de {defaultGame.tasks.length}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">😊</div>
              <h2 className="text-2xl font-bold mb-4 text-green-600">{defaultGame.thanks}</h2>
              <div className="text-4xl">🎉</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers, answerIndex];
    setSelectedAnswers(newAnswers);

    if (currentTask < gameInfo.tasks.length - 1) {
      setTimeout(() => setCurrentTask(currentTask + 1), 1000);
    } else {
      setTimeout(() => {
        setShowThankYou(true);
        const allCorrect = newAnswers.every((answer, index) => answer === gameInfo.tasks[index].correct);
        setTimeout(() => onComplete(allCorrect), 2000);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full text-center shadow-2xl">
        {!showThankYou ? (
          <>
            <div className="text-6xl mb-4">👦</div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">{gameInfo.routine}</h2>
            
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <div className="text-lg mb-4 text-gray-800">
                {gameInfo.tasks[currentTask].text}
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {gameInfo.tasks[currentTask].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              Tarea {currentTask + 1} de {gameInfo.tasks.length}
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">😊</div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">{gameInfo.thanks}</h2>
            <div className="text-4xl">🎉</div>
          </div>
        )}
      </div>
    </div>
  );
}
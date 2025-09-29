import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FashionShoppingGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function FashionShoppingGame({ language, onComplete }: FashionShoppingGameProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const fashionData = {
    french: {
      character: "Bonjour! Je suis Sophie et j'adore la mode!",
      scenes: [
        {
          dialogue: "J'ai besoin d'une robe pour une fête. Quelle couleur recommandez-vous?",
          options: ["Rouge", "Vert", "Jaune"],
          correct: 0,
          feedback: "Parfait! Le rouge est élégant pour une fête!"
        },
        {
          dialogue: "Cette robe est en quelle matière?",
          options: ["Coton", "Soie", "Laine"],
          correct: 1,
          feedback: "Excellent! La soie est parfaite pour les robes de soirée!"
        },
        {
          dialogue: "J'ai aussi besoin de chaussures. Lesquelles vont avec ma robe?",
          options: ["Baskets", "Talons hauts", "Bottes"],
          correct: 1,
          feedback: "Très bien! Les talons hauts complètent parfaitement une robe de soirée!"
        }
      ],
      thanks: "Merci beaucoup! Maintenant je suis prête pour la fête! 💃"
    },
    italian: {
      character: "Ciao! Sono Sofia e amo la moda!",
      scenes: [
        {
          dialogue: "Ho bisogno di un vestito per una festa. Che colore consigli?",
          options: ["Rosso", "Verde", "Giallo"],
          correct: 0,
          feedback: "Perfetto! Il rosso è elegante per una festa!"
        },
        {
          dialogue: "Questo vestito è di che materiale?",
          options: ["Cotone", "Seta", "Lana"],
          correct: 1,
          feedback: "Eccellente! La seta è perfetta per i vestiti da sera!"
        },
        {
          dialogue: "Ho anche bisogno di scarpe. Quali vanno con il mio vestito?",
          options: ["Sneakers", "Tacchi alti", "Stivali"],
          correct: 1,
          feedback: "Molto bene! I tacchi alti completano perfettamente un vestito da sera!"
        }
      ],
      thanks: "Grazie mille! Ora sono pronta per la festa! 💃"
    },
    english: {
      character: "Hello! I'm Sophie and I love fashion!",
      scenes: [
        {
          dialogue: "I need a dress for a party. What color do you recommend?",
          options: ["Red", "Green", "Yellow"],
          correct: 0,
          feedback: "Perfect! Red is elegant for a party!"
        },
        {
          dialogue: "What material is this dress made of?",
          options: ["Cotton", "Silk", "Wool"],
          correct: 1,
          feedback: "Excellent! Silk is perfect for evening dresses!"
        },
        {
          dialogue: "I also need shoes. Which ones go with my dress?",
          options: ["Sneakers", "High heels", "Boots"],
          correct: 1,
          feedback: "Very good! High heels perfectly complement an evening dress!"
        }
      ],
      thanks: "Thank you so much! Now I'm ready for the party! 💃"
    }
  };

  const currentData = fashionData[language as keyof typeof fashionData] || fashionData.english;
  const currentSceneData = currentData.scenes[currentScene];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(currentSceneData.options[answerIndex]);
    
    setTimeout(() => {
      if (answerIndex === currentSceneData.correct) {
        setScore(score + 1);
      }
      
      if (currentScene < currentData.scenes.length - 1) {
        setCurrentScene(currentScene + 1);
        setSelectedAnswer(null);
      } else {
        const success = score >= 2; // Al menos 2 de 3 correctas
        onComplete(success);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-400 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personaje */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center text-8xl mb-4 shadow-2xl">
            👩‍🦱
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-2xl text-center">
            <h3 className="font-bold text-lg mb-2">Sophie</h3>
            <p className="text-gray-600 text-sm">{currentData.character}</p>
          </div>
        </div>

        {/* Diálogo y opciones */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {currentScene < currentData.scenes.length ? (
            <>
              <div className="bg-pink-100 rounded-lg p-4 mb-6">
                <p className="text-lg text-gray-800">{currentSceneData.dialogue}</p>
              </div>

              {!selectedAnswer ? (
                <div className="space-y-3">
                  {currentSceneData.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-4">
                    {selectedAnswer === currentSceneData.options[currentSceneData.correct] ? "✅" : "❌"}
                  </div>
                  <p className="text-lg font-semibold">
                    {selectedAnswer === currentSceneData.options[currentSceneData.correct] 
                      ? currentSceneData.feedback 
                      : `Respuesta correcta: ${currentSceneData.options[currentSceneData.correct]}`
                    }
                  </p>
                </div>
              )}

              <div className="mt-6 text-center text-sm text-gray-600">
                Escena {currentScene + 1} de {currentData.scenes.length} | Puntuación: {score}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-4 text-pink-600">{currentData.thanks}</h2>
              <p className="text-lg">Puntuación final: {score}/{currentData.scenes.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
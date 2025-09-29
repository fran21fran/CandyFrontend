import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MariaShoppingGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function MariaShoppingGame({ language, onComplete }: MariaShoppingGameProps) {
  const [currentTask, setCurrentTask] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const shoppingData = {
    french: {
      character: "Bonjour! Je suis Maria. Pouvez-vous m'aider avec mes courses?",
      tasks: [
        {
          question: "Où puis-je acheter du pain?",
          options: ["Boulangerie", "Pharmacie", "Banque"],
          correct: 0,
          price: 3
        },
        {
          question: "J'ai besoin de lait. Combien ça coûte?",
          options: ["5 euros", "2 euros", "10 euros"],
          correct: 1,
          price: 2
        },
        {
          question: "Pour acheter des médicaments, je vais à...",
          options: ["Boulangerie", "Pharmacie", "Épicerie"],
          correct: 1,
          price: 15
        }
      ],
      thanks: "Merci beaucoup! Vous m'avez aidée avec toutes mes courses!"
    },
    italian: {
      character: "Ciao! Sono Maria. Puoi aiutarmi con la spesa?",
      tasks: [
        {
          question: "Dove posso comprare il pane?",
          options: ["Panetteria", "Farmacia", "Banca"],
          correct: 0,
          price: 3
        },
        {
          question: "Ho bisogno di latte. Quanto costa?",
          options: ["5 euro", "2 euro", "10 euro"],
          correct: 1,
          price: 2
        },
        {
          question: "Per comprare medicine, vado in...",
          options: ["Panetteria", "Farmacia", "Negozio"],
          correct: 1,
          price: 15
        }
      ],
      thanks: "Grazie mille! Mi hai aiutato con tutta la spesa!"
    },
    english: {
      character: "Hello! I'm Maria. Can you help me with my shopping?",
      tasks: [
        {
          question: "Where can I buy bread?",
          options: ["Bakery", "Pharmacy", "Bank"],
          correct: 0,
          price: 3
        },
        {
          question: "I need milk. How much does it cost?",
          options: ["5 dollars", "2 dollars", "10 dollars"],
          correct: 1,
          price: 2
        },
        {
          question: "To buy medicine, I go to...",
          options: ["Bakery", "Pharmacy", "Grocery store"],
          correct: 1,
          price: 15
        }
      ],
      thanks: "Thank you so much! You helped me with all my shopping!"
    }
  };

  const currentData = shoppingData[language as keyof typeof shoppingData] || shoppingData.english;
  const currentTaskData = currentData.tasks[currentTask];

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === currentTaskData.correct) {
      setScore(score + 1);
      setTotal(total + currentTaskData.price);
    }

    setTimeout(() => {
      if (currentTask < currentData.tasks.length - 1) {
        setCurrentTask(currentTask + 1);
      } else {
        onComplete(score >= 2);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 to-blue-600 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Maria */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center text-8xl mb-4 shadow-2xl">
            👩‍🍳
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-2xl text-center">
            <h3 className="font-bold text-lg mb-2">Maria</h3>
            <p className="text-gray-600 text-sm">{currentData.character}</p>
            <div className="mt-4 p-3 bg-green-100 rounded-lg">
              <p className="text-sm font-semibold">Total gastado: {total} €</p>
            </div>
          </div>
        </div>

        {/* Shopping task */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {currentTask < currentData.tasks.length ? (
            <>
              <div className="bg-indigo-100 rounded-lg p-4 mb-6">
                <p className="text-lg text-gray-800">{currentTaskData.question}</p>
                <p className="text-sm text-gray-600 mt-2">Precio: {currentTaskData.price} €</p>
              </div>

              <div className="space-y-3">
                {currentTaskData.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 text-lg"
                  >
                    {option}
                  </Button>
                ))}
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                Tarea {currentTask + 1} de {currentData.tasks.length} | Puntuación: {score}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">{currentData.thanks}</h2>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-lg">Puntuación: {score}/{currentData.tasks.length}</p>
                <p className="text-lg">Total gastado: {total} €</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import confetti from "canvas-confetti";
// Usamos una imagen SVG de Snoopy directamente en línea
const snoopyImageSvg = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="40" r="25" fill="#FFFFFF" stroke="#000" stroke-width="2"/>
  <circle cx="42" cy="35" r="3" fill="#000"/>
  <circle cx="58" cy="35" r="3" fill="#000"/>
  <ellipse cx="50" cy="45" rx="2" ry="3" fill="#000"/>
  <path d="M 45 50 Q 50 55 55 50" stroke="#000" stroke-width="1.5" fill="none"/>
  <ellipse cx="30" cy="25" rx="8" ry="12" fill="#000"/>
  <ellipse cx="70" cy="25" rx="8" ry="12" fill="#000"/>
  <ellipse cx="50" cy="70" rx="15" ry="20" fill="#FFFFFF" stroke="#000" stroke-width="2"/>
  <circle cx="45" cy="75" r="2" fill="#000"/>
  <circle cx="55" cy="75" r="2" fill="#000"/>
</svg>
`)}`;

interface SnoopyPathGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function SnoopyPathGame({ language, onComplete }: SnoopyPathGameProps) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [snoopyPosition, setSnoopyPosition] = useState(10);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const mathProblems = [
    { problem: "3 + 4", answer: "seven", answerNum: 7 },
    { problem: "9 - 2", answer: "seven", answerNum: 7 },
    { problem: "2 × 5", answer: "ten", answerNum: 10 },
    { problem: "12 ÷ 3", answer: "four", answerNum: 4 },
    { problem: "6 + 5", answer: "eleven", answerNum: 11 },
    { problem: "15 - 3", answer: "twelve", answerNum: 12 },
    { problem: "3 × 4", answer: "twelve", answerNum: 12 },
    { problem: "20 ÷ 4", answer: "five", answerNum: 5 }
  ];

  // Números en diferentes idiomas
  const numbers = {
    spanish: {
      1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco",
      6: "seis", 7: "siete", 8: "ocho", 9: "nueve", 10: "diez",
      11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince",
      16: "dieciséis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve", 20: "veinte"
    },
    french: {
      1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq",
      6: "six", 7: "sept", 8: "huit", 9: "neuf", 10: "dix",
      11: "onze", 12: "douze", 13: "treize", 14: "quatorze", 15: "quinze",
      16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt"
    },
    italian: {
      1: "uno", 2: "due", 3: "tre", 4: "quattro", 5: "cinque",
      6: "sei", 7: "sette", 8: "otto", 9: "nove", 10: "dieci",
      11: "undici", 12: "dodici", 13: "tredici", 14: "quattordici", 15: "quindici",
      16: "sedici", 17: "diciassette", 18: "diciotto", 19: "diciannove", 20: "venti"
    },
    portuguese: {
      1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
      6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
      11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
      16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte"
    },
    english: {
      1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
      6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
      11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
      16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty"
    },
    russian: {
      1: "один", 2: "два", 3: "три", 4: "четыре", 5: "пять",
      6: "шесть", 7: "семь", 8: "восемь", 9: "девять", 10: "десять",
      11: "одиннадцать", 12: "двенадцать", 13: "тринадцать", 14: "четырнадцать", 15: "пятнадцать",
      16: "шестнадцать", 17: "семнадцать", 18: "восемнадцать", 19: "девятнадцать", 20: "двадцать"
    }
  };

  const currentProblem = mathProblems[currentLevel];
  const correctAnswer = numbers[language as keyof typeof numbers]?.[currentProblem.answerNum as keyof typeof numbers.english] || currentProblem.answer;

  const handleSubmit = () => {
    const correct = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      // Mover Snoopy hacia la meta
      setSnoopyPosition(snoopyPosition + 10);
      
      // Efecto de confetti para celebrar
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 500);

      setTimeout(() => {
        if (currentLevel < mathProblems.length - 1) {
          setCurrentLevel(currentLevel + 1);
          setUserAnswer("");
          setShowFeedback(false);
        } else {
          // Juego completado
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
          });
          onComplete(true);
        }
      }, 2500);
    } else {
      setTimeout(() => {
        setShowFeedback(false);
        setUserAnswer("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-green-300 to-yellow-400 relative overflow-hidden">
      {/* Camino */}
      <div className="absolute bottom-20 w-full h-32 bg-gradient-to-t from-amber-700 to-amber-500 border-t-4 border-amber-800"></div>
      
      {/* Obstáculos matemáticos en el camino */}
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
        ×
      </div>
      <div className="absolute bottom-32 left-1/2 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
        ÷
      </div>
      <div className="absolute bottom-32 left-3/4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
        +
      </div>

      {/* Snoopy personalizado */}
      <div 
        className="absolute bottom-24 transition-all duration-1000 transform hover:scale-110"
        style={{ left: `${snoopyPosition}%` }}
      >
        <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg bg-yellow-100 flex items-center justify-center overflow-hidden">
          <img 
            src={snoopyImageSvg} 
            alt="Snoopy" 
            className="w-12 h-12 object-contain"
          />
        </div>
        {/* Globo de diálogo */}
        <div className="absolute -top-12 -left-8 bg-white rounded-lg p-2 shadow-lg border-2 border-gray-300 text-xs font-bold text-gray-700">
          ¡Ayúdame!
          <div className="absolute -bottom-1 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      </div>

      {/* Meta */}
      <div className="absolute bottom-20 right-10 text-6xl">
        🏁
      </div>

      {/* Panel de juego */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 border-4 border-yellow-400">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">🐕 ¡Ayuda a Snoopy! 🛤️</h2>
          <p className="text-gray-700 font-medium">Snoopy necesita tu ayuda para encontrar el camino correcto.</p>
          <p className="text-sm text-gray-600 mt-2">Resuelve las operaciones matemáticas y escribe el resultado en palabras</p>
          <div className="text-xs text-orange-600 font-bold mt-1">
            Nivel {currentLevel + 1} de {mathProblems.length}
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 mb-6 text-center">
          <div className="text-3xl font-bold text-blue-800 mb-2">
            {currentProblem.problem} = ?
          </div>
          <div className="text-sm text-gray-600">
            Escribe la respuesta en {language === 'spanish' ? 'español' :
                                    language === 'french' ? 'francés' : 
                                    language === 'italian' ? 'italiano' : 
                                    language === 'portuguese' ? 'portugués' : 
                                    language === 'english' ? 'inglés' : 'ruso'}
          </div>
        </div>

        <div className="space-y-4">
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            className="text-center text-lg border-2 border-blue-300 focus:border-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          
          <Button 
            onClick={handleSubmit}
            disabled={!userAnswer.trim() || showFeedback}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            🎯 Ayudar a Snoopy
          </Button>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`mt-4 p-4 rounded-lg text-center font-bold ${
            isCorrect 
              ? 'bg-green-100 text-green-800 border-2 border-green-400' 
              : 'bg-red-100 text-red-800 border-2 border-red-400'
          }`}>
            {isCorrect ? (
              <div>
                <div className="text-2xl mb-2">🎉 ¡Excelente!</div>
                <div>Snoopy avanza por el camino correcto</div>
              </div>
            ) : (
              <div>
                <div className="text-2xl mb-2">❌ Intenta de nuevo</div>
                <div>La respuesta correcta es: <strong>{correctAnswer}</strong></div>
              </div>
            )}
          </div>
        )}

        {/* Barra de progreso */}
        <div className="mt-6">
          <div className="bg-gray-200 rounded-full h-4 shadow-inner">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-1000 shadow-lg"
              style={{ width: `${((currentLevel + 1) / mathProblems.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-center text-sm text-gray-600 mt-2">
            Progreso: {currentLevel + 1} / {mathProblems.length}
          </div>
        </div>
      </div>
    </div>
  );
}
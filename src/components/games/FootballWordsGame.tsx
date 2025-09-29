import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import GameScoreTracker from "@/components/GameScoreTracker";
import { useGameScore } from "@/hooks/useGameScore";
import { Trophy } from "lucide-react";

interface FootballWordsGameProps {
  language: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
}

const vocabularyData = {
  spanish: {
    Principiante: [
      { word: "balón", translation: "ball", points: 10 },
      { word: "gol", translation: "goal", points: 10 },
      { word: "portería", translation: "goalpost", points: 15 },
      { word: "jugador", translation: "player", points: 10 },
      { word: "árbitro", translation: "referee", points: 15 },
    ],
    Intermedio: [
      { word: "lateral", translation: "sideline", points: 20 },
      { word: "saque", translation: "throw-in", points: 20 },
      { word: "penal", translation: "penalty", points: 25 },
      { word: "córner", translation: "corner", points: 20 },
      { word: "defensa", translation: "defense", points: 20 },
    ],
    Avanzado: [
      { word: "contraataque", translation: "counterattack", points: 30 },
      { word: "estrategia", translation: "strategy", points: 30 },
      { word: "formación", translation: "formation", points: 35 },
      { word: "fuera de juego", translation: "offside", points: 40 },
      { word: "prórroga", translation: "overtime", points: 35 },
    ]
  },
  english: {
    Principiante: [
      { word: "football", translation: "fútbol", points: 10 },
      { word: "team", translation: "equipo", points: 10 },
      { word: "match", translation: "partido", points: 15 },
      { word: "field", translation: "campo", points: 10 },
      { word: "coach", translation: "entrenador", points: 15 },
    ],
    Intermedio: [
      { word: "striker", translation: "delantero", points: 20 },
      { word: "midfielder", translation: "centrocampista", points: 25 },
      { word: "goalkeeper", translation: "portero", points: 20 },
      { word: "substitute", translation: "suplente", points: 25 },
      { word: "tournament", translation: "torneo", points: 20 },
    ],
    Avanzado: [
      { word: "championship", translation: "campeonato", points: 30 },
      { word: "tactics", translation: "táctica", points: 30 },
      { word: "possession", translation: "posesión", points: 35 },
      { word: "relegation", translation: "descenso", points: 40 },
      { word: "promotion", translation: "ascenso", points: 35 },
    ]
  }
};

export default function FootballWordsGame({ language, difficulty }: FootballWordsGameProps) {
  const { isGameActive, startGame, endGame, addPoints } = useGameScore();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [gameWords, setGameWords] = useState<Array<{ word: string; translation: string; points: number }>>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    const words = vocabularyData[language as keyof typeof vocabularyData]?.[difficulty] || vocabularyData.spanish[difficulty];
    setGameWords([...words].sort(() => Math.random() - 0.5));
    setTotalWords(words.length);
  }, [language, difficulty]);

  const handleStartGame = () => {
    startGame();
    setCurrentWordIndex(0);
    setUserAnswer("");
    setFeedback("");
    setCorrectAnswers(0);
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim() || !isGameActive) return;

    const currentWord = gameWords[currentWordIndex];
    const isCorrect = userAnswer.toLowerCase().trim() === currentWord.translation.toLowerCase();

    if (isCorrect) {
      addPoints(currentWord.points);
      setCorrectAnswers(prev => prev + 1);
      setFeedback(`¡Correcto! +${currentWord.points} puntos`);
    } else {
      setFeedback(`Incorrecto. La respuesta correcta era: ${currentWord.translation}`);
    }

    setTimeout(() => {
      if (currentWordIndex + 1 >= gameWords.length) {
        endGame();
        setFeedback(`¡Juego completado! ${correctAnswers + (isCorrect ? 1 : 0)}/${totalWords} respuestas correctas`);
      } else {
        setCurrentWordIndex(prev => prev + 1);
        setUserAnswer("");
        setFeedback("");
      }
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmitAnswer();
    }
  };

  return (
    <div className="space-y-6">
      <GameScoreTracker
        gameId="football-words"
        gameName="Palabras de Fútbol"
        difficulty={difficulty}
        language={language}
        isGameActive={isGameActive}
        onGameStart={() => console.log("Game started")}
        onGameEnd={(finalScore, time) => console.log(`Game ended: ${finalScore} points in ${time}s`)}
      />

      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            ⚽ Palabras de Fútbol
            <div className="ml-auto text-sm">
              {isGameActive && (
                <span className="text-orange-400">
                  {currentWordIndex + 1}/{gameWords.length}
                </span>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isGameActive ? (
            <div className="text-center space-y-4">
              <div className="text-lg text-blue-200">
                Traduce las palabras de fútbol al {language === "spanish" ? "español" : "inglés"}
              </div>
              <div className="text-sm text-blue-300">
                Dificultad: {difficulty} | {gameWords.length} palabras
              </div>
              <Button
                onClick={handleStartGame}
                className="bg-orange-500 hover:bg-orange-600 text-white"
                size="lg"
              >
                <Trophy className="h-5 w-5 mr-2" />
                Comenzar Juego
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {gameWords[currentWordIndex]?.word}
                </div>
                <div className="text-blue-200">
                  Traduce esta palabra ({gameWords[currentWordIndex]?.points} puntos)
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu respuesta..."
                  className="bg-white/10 border-white/30 text-white placeholder:text-blue-300"
                  disabled={!!feedback}
                />

                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer.trim() || !!feedback}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Enviar Respuesta
                </Button>
              </div>

              {feedback && (
                <div className={`text-center p-4 rounded-lg ${
                  feedback.includes("Correcto") 
                    ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}>
                  {feedback}
                </div>
              )}

              <div className="text-center text-sm text-blue-300">
                Presiona Enter para enviar tu respuesta
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Timer, Share } from "lucide-react";
declare global {
  interface Window {
    triggerGameEnd?: (score: number, time: number) => void;
    updateGameScore?: (points: number) => void;
  }
}
interface GameScoreTrackerProps {
  gameId: string;
  gameName: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  language: string;
  isGameActive: boolean;
  onGameStart?: () => void;
  onGameEnd?: (score: number, completionTime: number) => void;
}

export default function GameScoreTracker({
  gameId,
  gameName,
  difficulty,
  language,
  isGameActive,
  onGameStart,
  onGameEnd
}: GameScoreTrackerProps) {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const saveScoreMutation = useMutation({
    mutationFn: async (scoreData: {
      gameId: string;
      score: number;
      completionTime: number;
      difficulty: string;
      language: string;
    }) => {
      console.log("🎮 INTENTANDO GUARDAR PUNTAJE:", scoreData);
      return apiRequest("POST", "/api/game-scores", scoreData);
    },
    onSuccess: (_data, variables) => {
      console.log("✅ PUNTAJE GUARDADO EXITOSAMENTE!");
      queryClient.invalidateQueries({ queryKey: ["/api/user-scores"] });
      queryClient.invalidateQueries({ queryKey: ["/api/leaderboard/global"] });
      queryClient.invalidateQueries({ queryKey: ["/api/leaderboard/game", gameId] });
      queryClient.invalidateQueries({ queryKey: ["/api/user-ranking"] });
      
      toast({
        title: "¡Puntuación guardada!",
        description: `Has obtenido ${variables.score} puntos en ${variables.completionTime} segundos`,
      });
    },
    onError: (error) => {
      console.error("❌ ERROR GUARDANDO PUNTAJE:", error);
      console.log("📊 Datos que se intentaron enviar:", {
        gameId,
        score: currentScore,
        completionTime: Math.round((Date.now() - (startTime || 0)) / 1000),
        difficulty,
        language,
      });
      toast({
        title: "Error",
        description: `No se pudo guardar tu puntuación: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (isGameActive && !startTime) {
      setStartTime(Date.now());
      setCurrentScore(0);
      setShowResults(false);
      onGameStart?.();
    } else if (!isGameActive && startTime) {
      const endTime = Date.now();
      const completionTime = Math.round((endTime - startTime) / 1000);
      setFinalTime(completionTime);
      setFinalScore(currentScore);
      setShowResults(true);
      setStartTime(null);
      
      onGameEnd?.(currentScore, completionTime);
      
      // Auto-save score
      saveScoreMutation.mutate({
        gameId,
        score: currentScore,
        completionTime,
        difficulty,
        language,
      });
    }
  }, [isGameActive, startTime, currentScore, gameId, difficulty, language, onGameStart, onGameEnd]);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Principiante":
        return "bg-green-100 text-green-800";
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800";
      case "Avanzado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCurrentTime = () => {
    if (!startTime) return 0;
    return Math.round((Date.now() - startTime) / 1000);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const shareScore = () => {
    const shareText = `¡Conseguí ${finalScore} puntos en ${gameName} en CandyWeb! 🎮⭐`;
    if (navigator.share) {
      navigator.share({
        title: 'Mi puntuación en CandyWeb',
        text: shareText,
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(shareText + ` ${window.location.origin}`);
      toast({
        title: "Copiado",
        description: "Texto copiado al portapapeles",
      });
    }
  };
 // Score update function for games to use
  window.updateGameScore = (points: number) => {
    setCurrentScore(prev => prev + points);
  };
  window.triggerGameEnd = (score: number, time: number) => {
    saveScoreMutation.mutate({
      gameId,
      score,
      completionTime: time,
      difficulty,
      language,
    });
    setFinalScore(score);
    setFinalTime(time);
    setShowResults(true);
  };
  return (
    <div className="space-y-4">
      {/* Game Info Header */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              {gameName}
            </div>
            <div className="flex gap-2">
              <Badge className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
              <Badge variant="outline" className="text-blue-200 border-blue-300">
                {language}
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">
                {currentScore}
              </div>
              <div className="text-sm text-blue-200">Puntos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {isGameActive ? formatTime(getCurrentTime()) : "0:00"}
              </div>
              <div className="text-sm text-blue-200">Tiempo</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Modal */}
      {showResults && (
        <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              ¡Juego Completado!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">{finalScore}</div>
                <div className="text-sm text-blue-200">Puntos Finales</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-1">
                  <Timer className="h-4 w-4" />
                  {formatTime(finalTime)}
                </div>
                <div className="text-sm text-blue-200">Tiempo Total</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={shareScore}
                variant="outline"
                size="sm"
                className="flex-1 bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <Share className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button
                onClick={() => setShowResults(false)}
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Continuar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

 
}

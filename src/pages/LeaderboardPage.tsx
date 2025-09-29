import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star, Timer, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameLeaderboardEntry {
  id: string;
  userId: string;
  gameId: string;
  score: number;
  completionTime: number | null;
  difficulty: string;
  language: string;
  playedAt: string;
  username: string;
}

interface GlobalLeaderboardEntry {
  userId: string;
  username: string;
  totalScore: number;
  gamesPlayed: number;
}

interface UserRanking {
  rank: number;
  totalScore: number;
  gamesPlayed: number;
}

const games = [
  { id: "football-words", name: "Palabras de Fútbol", icon: "⚽" },
  { id: "vacation-routine", name: "Rutina de Vacaciones", icon: "🏖️" },
  { id: "image-association", name: "Asociación de Imágenes", icon: "🖼️" },
  { id: "snoopy-path", name: "Camino de Snoopy", icon: "🐕" },
  { id: "fashion-shopping", name: "Compras de Moda", icon: "👗" },
  { id: "maria-shopping", name: "Las Compras de María", icon: "🛒" },
  { id: "spiderman-train", name: "Tren de Spiderman", icon: "🚂" },
  { id: "treasure-hunt", name: "Búsqueda del Tesoro", icon: "💎" },
  { id: "word-soup", name: "Sopa de Palabras", icon: "🍜" },
  { id: "plant-care", name: "Cuidado de Plantas", icon: "🌱" }
];

const getRankIcon = (position: number) => {
  switch (position) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />;
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />;
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />;
    default:
      return <Star className="h-5 w-5 text-gray-500" />;
  }
};

const formatTime = (seconds: number | null) => {
  if (!seconds) return "N/A";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const getDifficultyBadge = (difficulty: string) => {
  const colors = {
    "Principiante": "bg-green-100 text-green-800",
    "Intermedio": "bg-yellow-100 text-yellow-800",
    "Avanzado": "bg-red-100 text-red-800"
  };
  return colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

export default function LeaderboardPage() {
  const [selectedGameId, setSelectedGameId] = useState("football-words");

  const { data: globalLeaderboard, isLoading: globalLoading } = useQuery<GlobalLeaderboardEntry[]>({
    queryKey: ["/api/leaderboard/global"],
  });

  const { data: gameLeaderboard, isLoading: gameLoading } = useQuery<GameLeaderboardEntry[]>({
    queryKey: ["/api/leaderboard/game", selectedGameId],
    enabled: !!selectedGameId,
  });

  const { data: userRanking } = useQuery<UserRanking>({
    queryKey: ["/api/user-ranking"],
  });

  /*const { data: userScores, isLoading: userScoresLoading } = useQuery<GameLeaderboardEntry[]>({
    queryKey: ["/api/user-scores"],
  });*/
  const [activeTab, setActiveTab] = useState("global");
  const { data: userScores, isLoading: userScoresLoading, refetch: refetchUserScores } = useQuery({
    queryKey: ["/api/user-scores"],
    enabled: false, // para evitar el fetch automático
  });
  useEffect(() => {
    if (activeTab === "personal") {
      refetchUserScores();
    }
  }, [activeTab]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white p-6">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            🏆 Tabla de Puntuaciones
          </h1>
          <p className="text-xl text-blue-100">
            Compara tu rendimiento con otros jugadores
          </p>
        </div>

        {/* User Stats Card */}
        {userRanking && (
          <Card className="mb-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="h-5 w-5" />
                Tu Rendimiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">#{userRanking.rank}</div>
                  <div className="text-sm text-blue-200">Posición Global</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">{userRanking.totalScore}</div>
                  <div className="text-sm text-blue-200">Puntos Totales</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{userRanking.gamesPlayed}</div>
                  <div className="text-sm text-blue-200">Juegos Jugados</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/*<Tabs defaultValue="global" className="space-y-6">*/}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 border-white/20">
            <TabsTrigger value="global" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Ranking Global
            </TabsTrigger>
            <TabsTrigger value="games" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Por Juego
            </TabsTrigger>
            <TabsTrigger value="personal" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Mis Puntajes
            </TabsTrigger>
          </TabsList>

          {/* Global Leaderboard */}
          <TabsContent value="global">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Ranking Global
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Los mejores jugadores de todos los juegos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {globalLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {globalLeaderboard?.map((entry, index) => (
                      <div
                        key={entry.userId}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(index + 1)}
                            <span className="text-lg font-semibold">#{index + 1}</span>
                          </div>
                          <div>
                            <div className="font-medium text-white">{entry.username}</div>
                            <div className="text-sm text-blue-200">
                              {entry.gamesPlayed} juegos jugados
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-orange-400">
                            {entry.totalScore} pts
                          </div>
                          <div className="text-sm text-blue-200">
                            {Math.round(entry.totalScore / entry.gamesPlayed)} promedio
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Game-specific Leaderboard */}
          <TabsContent value="games">
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Seleccionar Juego</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {games.map((game) => (
                      <Button
                        key={game.id}
                        variant={selectedGameId === game.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedGameId(game.id)}
                        className={`${
                          selectedGameId === game.id
                            ? "bg-orange-500 text-white"
                            : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                        }`}
                      >
                        <span className="mr-1">{game.icon}</span>
                        {game.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Medal className="h-5 w-5 text-gray-400" />
                    {games.find(g => g.id === selectedGameId)?.name}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Mejores puntajes en este juego
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {gameLoading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {gameLeaderboard?.map((entry, index) => (
                        <div
                          key={entry.id}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              {getRankIcon(index + 1)}
                              <span className="text-lg font-semibold">#{index + 1}</span>
                            </div>
                            <div>
                              <div className="font-medium text-white">{entry.username}</div>
                              <div className="flex gap-2 mt-1">
                                <Badge className={getDifficultyBadge(entry.difficulty)}>
                                  {entry.difficulty}
                                </Badge>
                                <Badge variant="outline" className="text-blue-200 border-blue-300">
                                  {entry.language}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-orange-400">
                              {entry.score} pts
                            </div>
                            {entry.completionTime && (
                              <div className="text-sm text-blue-200 flex items-center gap-1">
                                <Timer className="h-3 w-3" />
                                {formatTime(entry.completionTime)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Personal Scores */}
          <TabsContent value="personal">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Mis Puntajes
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Tu historial de puntuaciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                {userScoresLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {userScores?.map((score) => {
                      const game = games.find(g => g.id === score.gameId);
                      return (
                        <div
                          key={score.id}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-2xl">{game?.icon || "🎮"}</div>
                            <div>
                              <div className="font-medium text-white">
                                {game?.name || score.gameId}
                              </div>
                              <div className="flex gap-2 mt-1">
                                <Badge className={getDifficultyBadge(score.difficulty)}>
                                  {score.difficulty}
                                </Badge>
                                <Badge variant="outline" className="text-blue-200 border-blue-300">
                                  {score.language}
                                </Badge>
                              </div>
                              <div className="text-xs text-blue-300 mt-1">
                                {new Date(score.playedAt).toLocaleDateString('es-ES')}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-orange-400">
                              {score.score} pts
                            </div>
                            {score.completionTime && (
                              <div className="text-sm text-blue-200 flex items-center gap-1">
                                <Timer className="h-3 w-3" />
                                {formatTime(score.completionTime)}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

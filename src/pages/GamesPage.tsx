import { useState } from "react";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import GameModal from "@/components/games/GameModal";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "wouter";
import { Crown, Lock } from "lucide-react";

export default function GamesPage() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [currentGame, setCurrentGame] = useState<{id: string, name: string} | null>(null);
  const { toast } = useToast();
  const { isAuthenticated, isPremium } = useAuth();

  // Los juegos premium son los últimos 5 (empezando desde "las compras de maria")
  const premiumGameIds = ["maria-shopping", "spiderman-train", "treasure-hunt", "word-soup", "plant-care"];

  const handlePlayGame = (gameId: string) => {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    // Verificar si el juego es premium y el usuario no tiene suscripción
    if (premiumGameIds.includes(gameId) && !isPremium) {
      toast({
        title: "Juego Premium 👑",
        description: "Este juego requiere suscripción premium. ¡Desbloquea todos los juegos por $500!",
        variant: "destructive",
      });
      return;
    }

    setCurrentGame({ id: gameId, name: game.title });
  };

  const handleWordDemo = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else if (selectedWords.length < 2) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const checkDemoAnswers = () => {
    const correctPairs = [
      ["Bonjour", "Hola"],
      ["Au revoir", "Adiós"]
    ];
    
    const isCorrect = correctPairs.some(pair => 
      selectedWords.includes(pair[0]) && selectedWords.includes(pair[1])
    );

    if (isCorrect) {
      toast({
        title: "¡Correcto! 🎉",
        description: "Has conectado las palabras correctamente.",
      });
    } else {
      toast({
        title: "Inténtalo de nuevo 💪",
        description: "Esa no es la respuesta correcta.",
        variant: "destructive",
      });
    }
    
    setSelectedWords([]);
  };

  const demoWords = [
    { word: "Bonjour", type: "french" },
    { word: "Adiós", type: "spanish" },
    { word: "Au revoir", type: "french" },
    { word: "Hola", type: "spanish" }
  ];

  return (
    <section className="py-20 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Juegos Interactivos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprende mientras juegas con nuestros 10 desafíos interactivos diseñados para hacer 
            el aprendizaje divertido y efectivo. Cada juego incluye íconos coloridos y experiencias visuales únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {games.map((game) => {
            const isPremiumGame = premiumGameIds.includes(game.id);
            const isLocked = isPremiumGame && !isPremium;
            
            return (
              <div key={game.id} className="relative">
                <GameCard 
                  game={game} 
                  onPlay={handlePlayGame}
                  isLocked={isLocked}
                />
                {isLocked && (
                  <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center p-4">
                      <Lock className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-white mb-2">Premium</h4>
                      <p className="text-sm text-gray-300 mb-4">
                        Desbloquea este juego con Premium
                      </p>
                      <Link href="/subscription">
                        <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium">
                          <Crown className="w-4 h-4 mr-2" />
                          Obtener Premium
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Premium Banner for Non-Premium Users */}
        {isAuthenticated && !isPremium && (
          <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-2xl p-8 border border-yellow-500/50 mb-16">
            <div className="text-center">
              <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">¡Desbloquea Todos los Juegos!</h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Obtén acceso completo a los 5 juegos premium y funciones de práctica de habla por solo $500
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Juegos Premium Incluidos:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Las Compras de María</li>
                    <li>• Spiderman Train</li>
                    <li>• Treasure Hunt</li>
                    <li>• Word Soup</li>
                    <li>• Plant Care</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Funciones Premium:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Práctica de habla en gramática</li>
                    <li>• Reconocimiento de voz</li>
                    <li>• Ejercicios de pronunciación</li>
                    <li>• Evaluación de fluidez</li>
                    <li>• Acceso ilimitado</li>
                  </ul>
                </div>
              </div>
              <Link href="/subscription">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold">
                  <Crown className="w-5 h-5 mr-2" />
                  Activar Premium por $500
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Demo Game Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold mb-6 text-center">Demo: Conecta Palabras en Francés</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6">
            {demoWords.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className={`p-4 h-auto ${
                  selectedWords.includes(item.word)
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-gray-500/30 bg-black/40 hover:bg-black/60"
                } ${item.type === "french" ? "text-blue-400" : "text-gray-300"}`}
                onClick={() => handleWordDemo(item.word)}
              >
                {item.word}
              </Button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Conecta cada palabra francesa con su traducción correcta
            </p>
            <Button
              onClick={checkDemoAnswers}
              disabled={selectedWords.length !== 2}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Verificar Respuestas
            </Button>
          </div>
        </div>

        {/* Modal de juego */}
        <GameModal
          gameId={currentGame?.id || ""}
          gameName={currentGame?.name || ""}
          isOpen={!!currentGame}
          onClose={() => setCurrentGame(null)}
        />
      </div>
    </section>
  );
}

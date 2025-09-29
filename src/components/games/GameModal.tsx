import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import FootballGame from "./FootballGame";
import VacationRoutineGame from "./VacationRoutineGame";
import ImageAssociationGame from "./ImageAssociationGame";
import SnoopyPathGame from "./SnoopyPathGame";
import FashionShoppingGame from "./FashionShoppingGame";
import MariaShoppingGame from "./MariaShoppingGame";
import SpidermanTrainGame from "./SpidermanTrainGame";
import TreasureHuntGame from "./TreasureHuntGame";
import WordSoupGame from "./WordSoupGame";
import PlantCareGame from "./PlantCareGame";

interface GameModalProps {
  gameId: string;
  gameName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GameModal({ gameId, gameName, isOpen, onClose }: GameModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameResult, setGameResult] = useState<boolean | null>(null);

  const languages = [
    { id: "french", name: "Francés", flag: "🇫🇷" },
    { id: "italian", name: "Italiano", flag: "🇮🇹" },
    { id: "portuguese", name: "Portugués", flag: "🇵🇹" },
    { id: "english", name: "Inglés", flag: "🇺🇸" },
    { id: "russian", name: "Ruso", flag: "🇷🇺" }
  ];

  const handleGameComplete = (success: boolean) => {
    setGameResult(success);
    setGameCompleted(true);
    
    setTimeout(() => {
      onClose();
      setSelectedLanguage(null);
      setGameCompleted(false);
      setGameResult(null);
    }, 3000);
  };

  const renderGame = () => {
    if (!selectedLanguage) return null;

    const gameProps = {
      language: selectedLanguage,
      onComplete: handleGameComplete
    };

    switch (gameId) {
      case "football-words":
        return <FootballGame {...gameProps} />;
      case "vacation-routine":
        return <VacationRoutineGame {...gameProps} />;
      case "image-association":
        return <ImageAssociationGame {...gameProps} />;
      case "snoopy-path":
        return <SnoopyPathGame {...gameProps} />;
      case "fashion-shopping":
        return <FashionShoppingGame {...gameProps} />;
      case "maria-shopping":
        return <MariaShoppingGame {...gameProps} />;
      case "spiderman-train":
        return <SpidermanTrainGame {...gameProps} />;
      case "treasure-hunt":
        return <TreasureHuntGame {...gameProps} />;
      case "word-soup":
        return <WordSoupGame {...gameProps} />;
      case "plant-care":
        return <PlantCareGame {...gameProps} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Juego en Desarrollo</h2>
              <p className="text-gray-600 mb-4">Este juego estará disponible pronto!</p>
              <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
                Volver
              </Button>
            </div>
          </div>
        );
    }
  };

  if (!isOpen) return null;

  if (gameCompleted && gameResult !== null) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
        <div className={`${gameResult ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-orange-400 to-red-500'} rounded-2xl p-8 text-center max-w-md mx-4 shadow-2xl border border-white/20`}>
          {/* Confetti effect for success */}
          {gameResult && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-8 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
              <div className="absolute top-4 right-6 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-4 w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 right-8 w-3 h-3 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          )}
          
          <div className="relative z-10">
            <div className="text-8xl mb-6 animate-bounce">
              {gameResult ? "🎉" : "💪"}
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
              {gameResult ? "¡Felicitaciones!" : "¡Sigue intentando!"}
            </h2>
            <p className="text-white/90 text-lg">
              {gameResult 
                ? "¡Has completado el juego exitosamente!" 
                : "No te rindas, ¡inténtalo de nuevo!"
              }
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLanguage) {
    return (
      <div className="fixed inset-0 z-50">
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 p-0"
        >
          <X size={24} />
        </Button>
        {renderGame()}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/20 shadow-2xl">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-4 right-8 w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 left-6 w-12 h-12 bg-yellow-400 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">{gameName}</h2>
            <Button 
              onClick={onClose} 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <X size={20} />
            </Button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-6 text-white/90">Elige tu idioma:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((lang, index) => {
                const colors = [
                  "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
                  "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
                  "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
                  "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
                  "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                ];
                
                return (
                  <Button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`flex items-center justify-center gap-3 h-16 ${colors[index]} text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 border border-white/20`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-lg">{lang.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="text-center text-white/70">
            <p>Selecciona un idioma para comenzar el juego</p>
          </div>
        </div>
      </div>
    </div>
  );
}
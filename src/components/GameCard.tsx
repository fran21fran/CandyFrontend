import { Game } from "@/data/games";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  FootballIcon, 
  VacationIcon, 
  ArtIcon, 
  DogIcon, 
  ShoppingIcon, 
  SpiderIcon, 
  TreasureIcon, 
  PlantIcon, 
  WordSoupIcon 
} from "@/components/GameIcons";

interface GameCardProps {
  game: Game;
  onPlay: (gameId: string) => void;
  isLocked?: boolean;
}

export default function GameCard({ game, onPlay }: GameCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Principiante": return "bg-green-500/20 text-green-300";
      case "Intermedio": return "bg-yellow-500/20 text-yellow-300";
      case "Avanzado": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  const getGameIcon = (gameId: string) => {
    const iconProps = { className: "w-20 h-20 drop-shadow-lg" };
    
    switch (gameId) {
      case "football-words": return <FootballIcon {...iconProps} />;
      case "vacation-routine": return <VacationIcon {...iconProps} />;
      case "image-association": return <ArtIcon {...iconProps} />;
      case "snoopy-path": return <DogIcon {...iconProps} />;
      case "fashion-shopping": 
      case "maria-shopping": return <ShoppingIcon {...iconProps} />;
      case "spiderman-train": return <SpiderIcon {...iconProps} />;
      case "treasure-hunt": return <TreasureIcon {...iconProps} />;
      case "plant-care": return <PlantIcon {...iconProps} />;
      case "word-soup": return <WordSoupIcon {...iconProps} />;
      default: return <div className="text-8xl drop-shadow-lg">{game.icon}</div>;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:scale-105 shadow-lg">
      {/* Game Icon Header */}
      <div className={`h-48 ${game.backgroundColor} rounded-xl mb-6 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-2 w-4 h-4 bg-white rounded-full"></div>
        </div>
        
        {/* Game Icon */}
        <div className="mb-2 z-10">
          {getGameIcon(game.id)}
        </div>
        
        {/* Category Badge */}
        <div className={`text-sm font-semibold ${game.textColor} opacity-90 text-center px-3 py-1 rounded-full bg-black/10 backdrop-blur-sm z-10`}>
          {game.category}
        </div>
      </div>
      
      {/* Game Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{game.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{game.description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(game.difficulty)}`}>
            {game.difficulty}
          </span>
          
          <Button
            onClick={() => onPlay(game.id)}
            className={`${game.backgroundColor} hover:opacity-90 ${game.textColor} font-semibold shadow-lg transform hover:scale-105 transition-all duration-200`}
          >
            <Play size={16} className="mr-2" />
            Jugar
          </Button>
        </div>
      </div>
    </div>
  );
}

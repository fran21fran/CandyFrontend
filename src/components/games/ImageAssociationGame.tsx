import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { gameData } from "@/data/games";

interface ImageAssociationGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function ImageAssociationGame({ language, onComplete }: ImageAssociationGameProps) {
  const [matches, setMatches] = useState<{[key: string]: boolean}>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);

  const gameInfo = gameData.association[language as keyof typeof gameData.association];
  
  // Datos por defecto si el idioma no está configurado
  const defaultItems = [
    { word: "Cat", image: "🐱", category: "animal" },
    { word: "Red", image: "🔴", category: "color" },
    { word: "Cotton", image: "🧵", category: "fabric" },
    { word: "Hand", image: "✋", category: "body" }
  ];

  const items = gameInfo ? gameInfo.items : defaultItems;

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      onComplete(false);
    }
  }, [gameStarted, timeLeft, onComplete]);

  useEffect(() => {
    const matchedCount = Object.values(matches).filter(Boolean).length;
    if (matchedCount === items.length) {
      onComplete(true);
    }
  }, [matches, items.length, onComplete]);

  const handleWordClick = (word: string) => {
    if (matches[word]) return;
    setSelectedWord(selectedWord === word ? null : word);
  };

  const handleImageClick = (word: string) => {
    if (matches[word]) return;
    setSelectedImage(selectedImage === word ? null : word);
  };

  const checkMatch = () => {
    if (selectedWord && selectedImage && selectedWord === selectedImage) {
      setMatches({...matches, [selectedWord]: true});
      setSelectedWord(null);
      setSelectedImage(null);
    } else {
      setSelectedWord(null);
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    if (selectedWord && selectedImage) {
      setTimeout(checkMatch, 500);
    }
  }, [selectedWord, selectedImage]);

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Asociación de Imágenes</h2>
          <p className="text-gray-600 mb-6">Conecta cada palabra con su imagen correspondiente</p>
          <Button 
            onClick={() => setGameStarted(true)}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg"
          >
            ¡Empezar Juego!
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Timer */}
        <div className="text-center mb-6">
          <div className="bg-white rounded-lg p-4 inline-block shadow-lg">
            <div className="text-2xl font-bold text-purple-600">
              ⏰ {timeLeft}s
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Palabras */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-4">Palabras</h3>
            {items.map((item, index) => (
              <Button
                key={`word-${index}`}
                onClick={() => handleWordClick(item.word)}
                disabled={matches[item.word]}
                className={`w-full h-16 text-lg ${
                  matches[item.word] 
                    ? 'bg-green-500 text-white cursor-not-allowed'
                    : selectedWord === item.word
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {matches[item.word] ? '✅ ' + item.word : item.word}
              </Button>
            ))}
          </div>

          {/* Imágenes */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-4">Imágenes</h3>
            {items.map((item, index) => (
              <Button
                key={`image-${index}`}
                onClick={() => handleImageClick(item.word)}
                disabled={matches[item.word]}
                className={`w-full h-16 text-4xl ${
                  matches[item.word]
                    ? 'bg-green-500 cursor-not-allowed'
                    : selectedImage === item.word
                    ? 'bg-yellow-400'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {item.image}
              </Button>
            ))}
          </div>
        </div>

        {/* Progreso */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg p-4 inline-block">
            <div className="text-lg font-semibold">
              Progreso: {Object.values(matches).filter(Boolean).length} / {items.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
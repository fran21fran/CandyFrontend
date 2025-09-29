import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume2, RefreshCw, Crown, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

interface SpeechPracticeProps {
  languageName: string;
  languageCode: string;
  examples: {
    text: string;
    pronunciation: string;
    translation: string;
  }[];
}

export default function SpeechPractice({ languageName, languageCode, examples }: SpeechPracticeProps) {
  const [isListening, setIsListening] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<{ score: number; message: string } | null>(null);
  const recognitionRef = useRef<any>(null);
  const { isPremium } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.log("Speech recognition not supported");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    if (recognitionRef.current) {
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = getLanguageCode(languageCode);

      recognitionRef.current.onresult = (event: any) => {
        const lastResult = event.results[event.results.length - 1];
        const transcript = lastResult[0].transcript;
        setTranscript(transcript);
        evaluateSpeech(transcript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [languageCode]);

  const getLanguageCode = (code: string) => {
    const langCodes: { [key: string]: string } = {
      'french': 'fr-FR',
      'italian': 'it-IT',
      'portuguese': 'pt-BR',
      'english': 'en-US',
      'russian': 'ru-RU'
    };
    return langCodes[code] || 'en-US';
  };

  const startListening = () => {
    if (!isPremium) {
      toast({
        title: "Función Premium 👑",
        description: "La práctica de habla requiere suscripción premium.",
        variant: "destructive",
      });
      return;
    }

    if (recognitionRef.current && !isListening) {
      setTranscript("");
      setFeedback(null);
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // stopListening function removed as it was unused

  const evaluateSpeech = (transcript: string) => {
    const targetText = examples[currentExample].text.toLowerCase();
    const spokenText = transcript.toLowerCase();
    
    // Simple similarity calculation
    const similarity = calculateSimilarity(targetText, spokenText);
    let score = Math.round(similarity * 100);
    let message = "";

    if (score >= 90) {
      message = "¡Excelente pronunciación! 🎉";
    } else if (score >= 70) {
      message = "¡Muy bien! Sigue practicando 👍";
    } else if (score >= 50) {
      message = "Bien, puedes mejorar un poco 📈";
    } else {
      message = "Inténtalo de nuevo, puedes hacerlo mejor 💪";
    }

    setFeedback({ score, message });
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    const maxLength = Math.max(words1.length, words2.length);
    
    if (maxLength === 0) return 1;
    
    let matches = 0;
    words1.forEach(word1 => {
      if (words2.some(word2 => word2.includes(word1) || word1.includes(word2))) {
        matches++;
      }
    });
    
    return matches / maxLength;
  };

  const speakExample = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(examples[currentExample].text);
      utterance.lang = getLanguageCode(languageCode);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setTranscript("");
    setFeedback(null);
  };

  if (!isPremium) {
    return (
      <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/50">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-yellow-500 mr-2" />
            <Crown className="w-10 h-10 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl text-white">Práctica de Habla Premium</CardTitle>
          <CardDescription className="text-gray-300">
            Mejora tu pronunciación con reconocimiento de voz avanzado
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-300 mb-6">
            Esta función incluye reconocimiento de voz, evaluación de pronunciación y ejercicios interactivos
          </p>
          <Link href="/subscription">
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold">
              <Crown className="w-4 h-4 mr-2" />
              Desbloquear con Premium
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-white">
          <Mic className="w-6 h-6 mr-2 text-purple-400" />
          Práctica de Habla - {languageName}
        </CardTitle>
        <CardDescription className="text-gray-300">
          Practica tu pronunciación con reconocimiento de voz
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Example */}
        <div className="bg-black/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">
              Ejemplo {currentExample + 1} de {examples.length}
            </h4>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={speakExample}
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
            >
              <Volume2 className="w-4 h-4 mr-2" />
              Escuchar
            </Button>
          </div>
          
          <div className="space-y-2">
            <p className="text-xl font-medium text-white">{examples[currentExample].text}</p>
            <p className="text-sm text-gray-400">Pronunciación: {examples[currentExample].pronunciation}</p>
            <p className="text-sm text-gray-300">Traducción: {examples[currentExample].translation}</p>
          </div>
        </div>

        {/* Speech Controls */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <Button
              onClick={startListening}
              disabled={isListening}
              className={`${
                isListening 
                  ? "bg-red-600 hover:bg-red-700" 
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-4 h-4 mr-2" />
                  Escuchando...
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 mr-2" />
                  Hablar
                </>
              )}
            </Button>

            <Button
              variant="outline"
              onClick={nextExample}
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Siguiente
            </Button>
          </div>

          {isListening && (
            <div className="flex justify-center">
              <div className="animate-pulse flex space-x-1">
                <div className="bg-red-500 h-4 w-1 rounded animate-bounce"></div>
                <div className="bg-red-500 h-6 w-1 rounded animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="bg-red-500 h-8 w-1 rounded animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="bg-red-500 h-6 w-1 rounded animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                <div className="bg-red-500 h-4 w-1 rounded animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Transcript */}
        {transcript && (
          <div className="bg-black/30 rounded-lg p-4">
            <h5 className="text-sm font-semibold text-purple-400 mb-2">Lo que dijiste:</h5>
            <p className="text-white">{transcript}</p>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className="bg-black/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-sm font-semibold text-purple-400">Evaluación:</h5>
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                feedback.score >= 90 ? 'bg-green-500/20 text-green-300' :
                feedback.score >= 70 ? 'bg-yellow-500/20 text-yellow-300' :
                feedback.score >= 50 ? 'bg-orange-500/20 text-orange-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {feedback.score}%
              </div>
            </div>
            <p className="text-white">{feedback.message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
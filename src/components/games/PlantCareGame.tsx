import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PlantCareGameProps {
  language: string;
  onComplete: (success: boolean) => void;
}

export default function PlantCareGame({ language, onComplete }: PlantCareGameProps) {
  const [currentSeason, setCurrentSeason] = useState("spring");
  const [currentWeather, setCurrentWeather] = useState("sunny");
  const [currentTime, setCurrentTime] = useState("morning");
  const [plantHealth, setPlantHealth] = useState(100);
  const [actions, setActions] = useState(0);
  const [maxActions] = useState(5);

  const plantData = {
    french: {
      seasons: {
        spring: "Printemps - Arrosez modérément, la plante pousse",
        summer: "Été - Arrosez beaucoup, protégez du soleil intense",
        autumn: "Automne - Réduisez l'arrosage, préparez pour l'hiver",
        winter: "Hiver - Arrosez très peu, gardez au chaud"
      },
      weather: {
        sunny: "Ensoleillé - Plus d'eau nécessaire",
        rainy: "Pluvieux - Moins d'eau nécessaire",
        cloudy: "Nuageux - Arrosage normal"
      },
      times: {
        morning: "Matin (7h) - Meilleur moment pour arroser",
        afternoon: "Après-midi (14h) - Évitez d'arroser en plein soleil",
        evening: "Soir (19h) - Bon moment pour arroser"
      },
      actions: {
        water: "Arroser",
        fertilize: "Fertiliser",
        shade: "Mettre à l'ombre",
        move_sun: "Mettre au soleil"
      },
      note: "Note de la voisine: 'Arrosez ma marguerite le matin ou le soir, pas trop en hiver!'"
    },
    italian: {
      seasons: {
        spring: "Primavera - Innaffia moderatamente, la pianta cresce",
        summer: "Estate - Innaffia molto, proteggi dal sole intenso",
        autumn: "Autunno - Riduci l'innaffiatura, prepara per l'inverno",
        winter: "Inverno - Innaffia molto poco, tieni al caldo"
      },
      weather: {
        sunny: "Soleggiato - Più acqua necessaria",
        rainy: "Piovoso - Meno acqua necessaria", 
        cloudy: "Nuvoloso - Innaffiatura normale"
      },
      times: {
        morning: "Mattina (7h) - Miglior momento per innaffiare",
        afternoon: "Pomeriggio (14h) - Evita di innaffiare sotto il sole",
        evening: "Sera (19h) - Buon momento per innaffiare"
      },
      actions: {
        water: "Innaffiare",
        fertilize: "Fertilizzare",
        shade: "Mettere all'ombra",
        move_sun: "Mettere al sole"
      },
      note: "Nota della vicina: 'Innaffia la mia margherita la mattina o la sera, non troppo in inverno!'"
    },
    english: {
      seasons: {
        spring: "Spring - Water moderately, plant is growing",
        summer: "Summer - Water a lot, protect from intense sun",
        autumn: "Autumn - Reduce watering, prepare for winter",
        winter: "Winter - Water very little, keep warm"
      },
      weather: {
        sunny: "Sunny - More water needed",
        rainy: "Rainy - Less water needed",
        cloudy: "Cloudy - Normal watering"
      },
      times: {
        morning: "Morning (7am) - Best time to water",
        afternoon: "Afternoon (2pm) - Avoid watering in full sun",
        evening: "Evening (7pm) - Good time to water"
      },
      actions: {
        water: "Water",
        fertilize: "Fertilize",
        shade: "Move to shade",
        move_sun: "Move to sun"
      },
      note: "Neighbor's note: 'Water my daisy in the morning or evening, not too much in winter!'"
    }
  };

  const currentData = plantData[language as keyof typeof plantData] || plantData.english;

  const getOptimalAction = () => {
    if (currentSeason === "winter" && currentWeather !== "sunny") return "fertilize";
    if (currentTime === "afternoon" && currentWeather === "sunny") return "shade";
    if ((currentTime === "morning" || currentTime === "evening") && currentWeather !== "rainy") return "water";
    if (currentWeather === "cloudy" && currentSeason !== "winter") return "water";
    return "move_sun";
  };

  const handleAction = (action: string) => {
    const optimal = getOptimalAction();
    const isCorrect = action === optimal;
    
    if (isCorrect) {
      setPlantHealth(Math.min(100, plantHealth + 10));
    } else {
      setPlantHealth(Math.max(0, plantHealth - 20));
    }

    setActions(actions + 1);

    // Cambiar condiciones para la siguiente ronda
    setTimeout(() => {
      const seasons = ["spring", "summer", "autumn", "winter"];
      const weathers = ["sunny", "rainy", "cloudy"];
      const times = ["morning", "afternoon", "evening"];
      
      setCurrentSeason(seasons[Math.floor(Math.random() * seasons.length)]);
      setCurrentWeather(weathers[Math.floor(Math.random() * weathers.length)]);
      setCurrentTime(times[Math.floor(Math.random() * times.length)]);

      if (actions >= maxActions - 1) {
        onComplete(plantHealth > 50);
      }
    }, 2000);
  };

  const getPlantEmoji = () => {
    if (plantHealth > 80) return "🌼";
    if (plantHealth > 60) return "🌸";
    if (plantHealth > 40) return "🌺";
    if (plantHealth > 20) return "🥀";
    return "💀";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-emerald-500 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Planta */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Margarita de la Vecina</h3>
          
          <div className="text-8xl mb-4">{getPlantEmoji()}</div>
          
          <div className="bg-green-100 rounded-lg p-4 mb-4">
            <div className="text-lg font-semibold text-green-800">
              Salud: {plantHealth}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div 
                className={`h-4 rounded-full transition-all duration-500 ${
                  plantHealth > 60 ? 'bg-green-500' : plantHealth > 30 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${plantHealth}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-blue-100 rounded-lg p-3 text-sm">
            <p className="text-blue-800 italic">{currentData.note}</p>
          </div>
        </div>

        {/* Panel de control */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-xl font-bold mb-4">Condiciones Actuales</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-orange-100 rounded-lg p-3">
              <strong>Estación:</strong> {currentData.seasons[currentSeason as keyof typeof currentData.seasons]}
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <strong>Clima:</strong> {currentData.weather[currentWeather as keyof typeof currentData.weather]}
            </div>
            <div className="bg-purple-100 rounded-lg p-3">
              <strong>Hora:</strong> {currentData.times[currentTime as keyof typeof currentData.times]}
            </div>
          </div>

          <h4 className="font-semibold mb-3">¿Qué debes hacer?</h4>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleAction("water")}
              className="bg-blue-500 hover:bg-blue-600 py-3"
            >
              💧 {currentData.actions.water}
            </Button>
            <Button
              onClick={() => handleAction("fertilize")}
              className="bg-brown-500 hover:bg-brown-600 py-3 bg-amber-600 hover:bg-amber-700"
            >
              🌱 {currentData.actions.fertilize}
            </Button>
            <Button
              onClick={() => handleAction("shade")}
              className="bg-gray-500 hover:bg-gray-600 py-3"
            >
              ☂️ {currentData.actions.shade}
            </Button>
            <Button
              onClick={() => handleAction("move_sun")}
              className="bg-yellow-500 hover:bg-yellow-600 py-3"
            >
              ☀️ {currentData.actions.move_sun}
            </Button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Acciones: {actions}/{maxActions}
          </div>
        </div>
      </div>
    </div>
  );
}
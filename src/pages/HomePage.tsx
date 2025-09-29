import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const languages = [
    { 
      id: "french", 
      code: "FR", 
      name: "Francés", 
      subtitle: "Français",
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-800"
    },
    { 
      id: "italian", 
      code: "IT", 
      name: "Italiano", 
      subtitle: "Italiano",
      color: "from-green-400 to-green-600", 
      textColor: "text-green-800"
    },
    { 
      id: "portuguese", 
      code: "PT", 
      name: "Portugués", 
      subtitle: "Português",
      color: "from-orange-400 to-red-500",
      textColor: "text-orange-800",
      border: "border-red-400"
    },
    { 
      id: "english", 
      code: "EN", 
      name: "Inglés", 
      subtitle: "English",
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-800"
    },
    { 
      id: "russian", 
      code: "RU", 
      name: "Ruso", 
      subtitle: "Русский",
      color: "from-red-400 to-red-600",
      textColor: "text-red-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-orange-500 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-yellow-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-orange-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/5 right-1/5 w-12 h-12 bg-yellow-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/5 left-1/5 w-22 h-22 bg-orange-600 rounded-full opacity-40 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            <span className="text-orange-300">Candy</span><span className="text-yellow-300">Web</span>
          </h1>
          
          {/* Icons row */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-3xl">🎯</div>
            <div className="text-3xl">📱</div>
            <div className="text-3xl">🎮</div>
            <div className="text-3xl">🌐</div>
          </div>
          
          <h2 className="text-2xl md:text-3xl mb-12 text-white font-medium">
            ¿Qué vas a aprender hoy?
          </h2>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl w-full mb-8">
          {languages.map((lang) => (
            <Link key={lang.id} href={`/language/${lang.id}`}>
              <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center border-4 ${lang.border || 'border-transparent'} hover:bg-white transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg`}>
                <div className="text-4xl font-bold mb-2 text-gray-800">
                  {lang.code}
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {lang.name}
                </div>
                <div className="text-sm text-gray-600">
                  {lang.subtitle}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/games">
            <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/30">
              🎮 Juegos Interactivos
            </Button>
          </Link>
          
          <Link href="/team">
            <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/30">
              👥 Equipo
            </Button>
          </Link>
          
          <Link href="/support">
            <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/30">
              💬 Soporte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

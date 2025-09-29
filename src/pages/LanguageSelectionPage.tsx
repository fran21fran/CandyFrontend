import { useState } from "react";
import { Link } from "wouter";
import { languages } from "@/data/languages";

export default function LanguageSelectionPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const getLanguageCode = (id: string) => {
    const codes: Record<string, string> = {
      french: "FR",
      italian: "IT", 
      portuguese: "PT",
      english: "EN",
      russian: "RU"
    };
    return codes[id] || id.toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-80 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-yellow-300 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            CandyWeb
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-2 bg-white rounded"></div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white border-2 border-white rounded"></div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-white/95 mb-12 font-medium">
            ¿Qué vas a aprender hoy?
          </p>
        </div>

        {/* Language Selection Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
            {languages.map((language) => {
              const isSelected = selectedLanguage === language.id;
              const languageCode = getLanguageCode(language.id);
              
              return (
                <Link 
                  key={language.id} 
                  href={`/language/${language.id}`}
                  className="block"
                >
                  <div 
                    className={`
                      relative bg-white/95 backdrop-blur-md rounded-3xl p-10 text-center cursor-pointer
                      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                      ${isSelected ? 'ring-4 ring-red-500 scale-105 shadow-2xl' : 'hover:bg-white'}
                      min-h-[240px] w-[200px] flex flex-col justify-center
                      shadow-lg border border-white/20
                    `}
                    onClick={() => setSelectedLanguage(language.id)}
                  >
                    {/* Language Code */}
                    <div className="text-6xl md:text-7xl font-black text-gray-800 mb-6 tracking-tight">
                      {languageCode}
                    </div>
                    
                    {/* Language Names */}
                    <div className="space-y-2">
                      <div className="text-lg font-bold text-gray-800">
                        {language.name}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {language.nativeName}
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-16">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
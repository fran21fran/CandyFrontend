import LanguageCard from "@/components/LanguageCard";
import SpeechPractice from "@/components/SpeechPractice";
import DictionarySearch from "@/components/DictionarySearch";
import { languages } from "@/data/languages";
import { loadAlphabet, getAlphabetInfo } from "@/data/alphabets";
import { useParams } from "wouter";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Component to display alphabet letters
function AlphabetDisplay({ alphabet, languageId }: { alphabet: any, languageName: string, languageId: string | undefined }) {
  if (!alphabet || !alphabet.letters) {
    return (
      <Card className="bg-black/50 border-gray-800">
        <CardContent className="p-8 text-center">
          <p className="text-gray-300">No hay datos de alfabeto disponibles</p>
        </CardContent>
      </Card>
    );
  }

  const alphabetInfo = getAlphabetInfo(languageId || 'english');

  return (
    <div className="space-y-6">
      {/* Alphabet Info Header */}
      {alphabetInfo && (
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">{alphabetInfo.name}</CardTitle>
            <CardDescription className="text-gray-300">
              {alphabetInfo.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{alphabetInfo.totalLetters} letras</Badge>
              {alphabetInfo.foreignLetters && (
                <Badge variant="outline">+ {alphabetInfo.foreignLetters} extranjeras</Badge>
              )}
              {alphabetInfo.script && (
                <Badge variant="outline">{alphabetInfo.script}</Badge>
              )}
              {alphabetInfo.totalSounds && (
                <Badge variant="outline">{alphabetInfo.totalSounds} sonidos</Badge>
              )}
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Características especiales:</h4>
              <div className="flex flex-wrap gap-2">
                {alphabetInfo.specialFeatures?.map((feature: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Letters Grid */}
      <Card className="bg-black/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl text-white">Letras del Alfabeto</CardTitle>
          <CardDescription className="text-gray-300">
            Haz clic en cualquier letra para ver ejemplos y pronunciación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {alphabet.letters?.map((letter: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 text-center hover:from-blue-500 hover:to-blue-700 transition-all cursor-pointer group"
                title={`${letter.letter} - ${letter.pronunciation} - ${letter.description}`}
              >
                <div className="text-2xl font-bold text-white mb-1">{letter.letter}</div>
                <div className="text-sm text-blue-200">{letter.lowercase}</div>
                <div className="text-xs text-blue-300 mt-1">{letter.pronunciation}</div>
                <div className="text-xs text-blue-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {letter.type}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Tips */}
      {alphabet.learning_tips && (
        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Consejos de Aprendizaje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alphabet.learning_tips.map((tip: any, index: number) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">{tip.tip}</h4>
                <p className="text-gray-300 text-sm mt-1">{tip.description}</p>
                {tip.advice && (
                  <p className="text-blue-400 text-sm mt-2 italic">{tip.advice}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Cultural Notes */}
      {alphabet.cultural_notes && (
        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Notas Culturales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alphabet.cultural_notes.map((note: any, index: number) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400">{note.aspect}</h4>
                <p className="text-gray-300 text-sm mt-2">{note.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function LanguagePage() {
  const params = useParams();
  const [activeSection, setActiveSection] = useState<'grammar' | 'alphabet' | 'speech' | 'dictionary'>('grammar');
  const [alphabetData, setAlphabetData] = useState<any>(null);
  const [loadingAlphabet, setLoadingAlphabet] = useState(false);
  
  // If we have a specific language ID, show just that language
  const selectedLanguageId = params?.id;
  const selectedLanguage = selectedLanguageId ? languages.find(lang => lang.id === selectedLanguageId) : null;

  // Load alphabet data when alphabet section is selected
  useEffect(() => {
    if (activeSection === 'alphabet' && selectedLanguageId && !alphabetData) {
      setLoadingAlphabet(true);
      loadAlphabet(selectedLanguageId)
        .then(data => {
          setAlphabetData(data);
          setLoadingAlphabet(false);
        })
        .catch(error => {
          console.error('Error loading alphabet:', error);
          setLoadingAlphabet(false);
        });
    }
  }, [activeSection, selectedLanguageId, alphabetData]);

  // Speech practice examples for each language
  const getSpeechExamples = (languageId: string) => {
    const examples: { [key: string]: any[] } = {
      french: [
        { text: "Bonjour, comment allez-vous?", pronunciation: "bon-ZHOOR koh-mahn tah-lay VOO", translation: "Hola, ¿cómo está usted?" },
        { text: "Je m'appelle Marie", pronunciation: "zhuh mah-PELL mah-REE", translation: "Me llamo Marie" },
        { text: "Merci beaucoup", pronunciation: "mer-SEE boh-KOO", translation: "Muchas gracias" },
        { text: "Au revoir", pronunciation: "oh ruh-VWAHR", translation: "Adiós" }
      ],
      italian: [
        { text: "Ciao, come stai?", pronunciation: "CHAH-oh KOH-meh STAH-ee", translation: "Hola, ¿cómo estás?" },
        { text: "Mi chiamo Marco", pronunciation: "mee kee-AH-moh MAR-koh", translation: "Me llamo Marco" },
        { text: "Grazie mille", pronunciation: "GRAH-tsee-eh MEE-leh", translation: "Muchas gracias" },
        { text: "Arrivederci", pronunciation: "ah-ree-veh-DEHR-chee", translation: "Adiós" }
      ],
      portuguese: [
        { text: "Olá, como está?", pronunciation: "oh-LAH KOH-moh ehs-TAH", translation: "Hola, ¿cómo está?" },
        { text: "Meu nome é Ana", pronunciation: "MEH-oo NOH-meh eh AH-nah", translation: "Mi nombre es Ana" },
        { text: "Muito obrigado", pronunciation: "MOOY-toh oh-bree-GAH-doh", translation: "Muchas gracias" },
        { text: "Tchau", pronunciation: "CHAH-oo", translation: "Adiós" }
      ],
      english: [
        { text: "Hello, how are you?", pronunciation: "HEH-loh HOW ar yoo", translation: "Hola, ¿cómo estás?" },
        { text: "My name is John", pronunciation: "my NAYM iz JAHN", translation: "Mi nombre es John" },
        { text: "Thank you very much", pronunciation: "THANK yoo VEH-ree MUCH", translation: "Muchas gracias" },
        { text: "Goodbye", pronunciation: "good-BYE", translation: "Adiós" }
      ],
      russian: [
        { text: "Привет, как дела?", pronunciation: "pree-VEHT kak dee-LAH", translation: "Hola, ¿cómo estás?" },
        { text: "Меня зовут Иван", pronunciation: "mee-NYAH zah-VOOT ee-VAHN", translation: "Me llamo Ivan" },
        { text: "Большое спасибо", pronunciation: "bahl-SHOH-yeh spah-SEE-boh", translation: "Muchas gracias" },
        { text: "До свидания", pronunciation: "dah svee-DAH-nee-yah", translation: "Adiós" }
      ]
    };
    return examples[languageId] || examples.english;
  };
  
  // If we're showing a specific language
  if (selectedLanguage) {
    return (
      <section className="py-20 px-6 relative z-10 min-h-screen">
        <div className="container mx-auto max-w-5xl pt-20">
          <div className="text-center mb-8">
            <Link href="/language-selection" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
              ← Volver a la selección de idiomas
            </Link>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {selectedLanguage.name} ({selectedLanguage.nativeName})
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {selectedLanguage.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Navigation Tabs */}
            <div>
              <div className="flex justify-center flex-wrap gap-4 mb-8">
                <Button
                  variant={activeSection === 'grammar' ? "default" : "outline"}
                  onClick={() => setActiveSection('grammar')}
                >
                  Gramática
                </Button>
                <Button
                  variant={activeSection === 'alphabet' ? "default" : "outline"}
                  onClick={() => setActiveSection('alphabet')}
                >
                  Alfabeto
                </Button>
                <Button
                  variant={activeSection === 'dictionary' ? "default" : "outline"}
                  onClick={() => setActiveSection('dictionary')}
                >
                  Diccionario
                </Button>
                <Button
                  variant={activeSection === 'speech' ? "default" : "outline"}
                  onClick={() => setActiveSection('speech')}
                >
                  Práctica de Habla
                </Button>
              </div>

              {/* Content Sections */}
              {activeSection === 'grammar' && (
                <LanguageCard language={selectedLanguage} />
              )}

              {activeSection === 'alphabet' && (
                <div className="space-y-6">
                  {loadingAlphabet ? (
                    <Card className="bg-black/50 border-gray-800">
                      <CardContent className="p-8 text-center">
                        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-300">Cargando alfabeto...</p>
                      </CardContent>
                    </Card>
                  ) : alphabetData ? (
                    <AlphabetDisplay 
                      alphabet={alphabetData} 
                      languageName={selectedLanguage.name}
                      languageId={selectedLanguageId || 'english'}
                    />
                  ) : (
                    <Card className="bg-black/50 border-gray-800">
                      <CardContent className="p-8 text-center">
                        <p className="text-gray-300">
                          No se pudo cargar el alfabeto para {selectedLanguage.name}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {activeSection === 'dictionary' && (
                <DictionarySearch
                  languageId={selectedLanguage.id}
                  languageName={selectedLanguage.name}
                />
              )}

              {activeSection === 'speech' && (
                <SpeechPractice
                  languageName={selectedLanguage.name}
                  languageCode={selectedLanguage.id}
                  examples={getSpeechExamples(selectedLanguage.id)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Otherwise show all languages
  return (
    <section className="py-20 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Explora los Idiomas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada idioma tiene su propia personalidad. Descubre gramática básica, vocabulario esencial 
            y frases útiles para empezar tu aventura lingüística.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {languages.map((language) => (
            <LanguageCard key={language.id} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}

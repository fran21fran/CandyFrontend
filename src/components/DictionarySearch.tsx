import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Volume2, BookOpen, Globe } from "lucide-react";
import { languages } from "@/data/languages";

interface DictionaryEntry {
  word: string;
  translation: string;
  pronunciation?: string;
  type: string;
  examples: Array<{
    original: string;
    translation: string;
  }>;
  difficulty?: string;
  culturalNote?: string;
}

interface DictionarySearchProps {
  languageId: string;
  languageName: string;
}

export default function DictionarySearch({ languageId, languageName }: DictionarySearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryEntry[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  
  const language = languages.find(lang => lang.id === languageId);
  
  // Generate alphabet for navigation
  const generateAlphabet = () => {
    if (languageId === 'russian') {
      return 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    }
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  };

  // Extract dictionary entries from language data
  const extractDictionaryEntries = (): DictionaryEntry[] => {
    if (!language || !language.grammar) return [];
    
    const entries: DictionaryEntry[] = [];
    
    // Extract from vocabulary sections
    if (language.vocabulary && Array.isArray(language.vocabulary)) {
      language.vocabulary.forEach((word: any) => {
        if (word.word && word.translation) {
          entries.push({
            word: word.word,
            translation: word.translation,
            type: 'vocabulario',
            examples: [
              {
                original: word.word,
                translation: word.translation
              }
            ]
          });
        }
      });
    }

    // Extract from verbs
    if (language.grammar.verbs && language.grammar.verbs.library) {
      language.grammar.verbs.library.forEach((verb: any) => {
        if (verb.infinitive && verb.spanish) {
          entries.push({
            word: verb.infinitive,
            translation: verb.spanish,
            type: 'verbo',
            examples: [
              {
                original: verb.infinitive,
                translation: verb.spanish
              }
            ]
          });
        }
      });
    }

    // Extract from greetings
    if (language.grammar.greetings) {
      Object.entries(language.grammar.greetings).forEach(([_, greetings]) => {
        if (Array.isArray(greetings)) {
          greetings.forEach((greeting: any) => {
            if (greeting.target && greeting.spanish) {
              entries.push({
                word: greeting.target,
                translation: greeting.spanish,
                type: 'saludo',
                examples: [
                  {
                    original: greeting.target,
                    translation: greeting.spanish
                  }
                ]
              });
            }
          });
        }
      });
    }

    // Extract from animals
    if (language.grammar.animals) {
      language.grammar.animals.forEach((animal: any) => {
        if (animal.animal && animal.spanish) {
          entries.push({
            word: animal.animal,
            translation: animal.spanish,
            type: 'animal',
            examples: [
              {
                original: animal.animal,
                translation: animal.spanish
              }
            ]
          });
        }
      });
    }

    // Extract from colors
    if (language.grammar.colors) {
      language.grammar.colors.forEach((color: any) => {
        if (color.color && color.spanish) {
          entries.push({
            word: color.color,
            translation: color.spanish,
            type: 'color',
            examples: [
              {
                original: color.color,
                translation: color.spanish
              }
            ]
          });
        }
      });
    }

    // Extract from food
    if (language.grammar.food) {
      language.grammar.food.forEach((food: any) => {
        if (food.food && food.spanish) {
          entries.push({
            word: food.food,
            translation: food.spanish,
            type: 'comida',
            examples: [
              {
                original: food.food,
                translation: food.spanish
              }
            ]
          });
        }
      });
    }

    // Extract from family members
    if (language.grammar.family && language.grammar.family.members) {
      language.grammar.family.members.forEach((member: any) => {
        if (member.member && member.spanish) {
          entries.push({
            word: member.member,
            translation: member.spanish,
            type: 'familia',
            examples: [
              {
                original: member.member,
                translation: member.spanish
              }
            ]
          });
        }
      });
    }

    // Extract from professions
    if (language.grammar.professions) {
      language.grammar.professions.forEach((profession: any) => {
        if (profession.profession && profession.spanish) {
          entries.push({
            word: profession.profession,
            translation: profession.spanish,
            type: 'profesión',
            examples: [
              {
                original: profession.profession,
                translation: profession.spanish
              }
            ]
          });
        }
      });
    }

    // Safe sorting with fallback for undefined values
    return entries
      .filter(entry => entry.word && entry.translation) // Remove any entries with missing data
      .sort((a, b) => (a.word || '').localeCompare(b.word || ''));
  };

  const allEntries = extractDictionaryEntries();

  // Search function
  const handleSearch = (term: string) => {
    setIsSearching(true);
    const searchLower = term.toLowerCase();
    
    setTimeout(() => {
      const results = allEntries.filter(entry => 
        entry.word.toLowerCase().includes(searchLower) ||
        entry.translation.toLowerCase().includes(searchLower)
      );
      
      setSearchResults(results.slice(0, 20)); // Limit to 20 results
      setIsSearching(false);
    }, 300);
  };

  // Filter by letter
  const handleLetterFilter = (letter: string) => {
    setSelectedLetter(letter);
    const filtered = allEntries.filter(entry => 
      entry.word.toUpperCase().startsWith(letter)
    );
    setSearchResults(filtered.slice(0, 20));
    setSearchTerm('');
  };

  useEffect(() => {
    if (searchTerm.length >= 2) {
      handleSearch(searchTerm);
    } else if (searchTerm.length === 0) {
      setSearchResults([]);
      setSelectedLetter('');
    }
  }, [searchTerm]);

  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = getLanguageCode(languageId);
      speechSynthesis.speak(utterance);
    }
  };

  const getLanguageCode = (langId: string) => {
    const codes: { [key: string]: string } = {
      french: 'fr-FR',
      italian: 'it-IT',
      portuguese: 'pt-PT',
      english: 'en-US',
      russian: 'ru-RU'
    };
    return codes[langId] || 'en-US';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Diccionario {languageName} - Español
          </CardTitle>
          <p className="text-gray-300">
            Busca palabras, traducciones y ejemplos. Inspirado en Larousse.
          </p>
        </CardHeader>
      </Card>

      {/* Search Bar */}
      <Card className="bg-black/50 border-gray-800">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={`Buscar en ${languageName}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        </CardContent>
      </Card>

      {/* Alphabet Navigation */}
      <Card className="bg-black/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-white">Navegación Alfabética</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {generateAlphabet().map((letter) => (
              <Button
                key={letter}
                variant={selectedLetter === letter ? "default" : "outline"}
                size="sm"
                onClick={() => handleLetterFilter(letter)}
                className="w-10 h-10 p-0"
              >
                {letter}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {(searchResults.length > 0 || isSearching) && (
        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">
              {isSearching ? 'Buscando...' : `Resultados (${searchResults.length})`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSearching ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.map((entry, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold text-white">{entry.word}</h3>
                          {entry.pronunciation && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => playPronunciation(entry.word)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <Volume2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        {entry.pronunciation && (
                          <p className="text-sm text-blue-300 mb-2">/{entry.pronunciation}/</p>
                        )}
                        <p className="text-gray-300 text-lg">{entry.translation}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge variant="secondary">{entry.type}</Badge>
                        {entry.difficulty && (
                          <Badge variant="outline" className="text-xs">
                            {entry.difficulty}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Examples */}
                    {entry.examples.length > 0 && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Ejemplos:</h4>
                        {entry.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="bg-gray-900/50 rounded p-3 mb-2">
                            <p className="text-white italic mb-1">"{example.original}"</p>
                            <p className="text-gray-400 text-sm">→ {example.translation}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Cultural Note */}
                    {entry.culturalNote && (
                      <div className="mt-3 bg-yellow-900/20 border-l-4 border-yellow-500 pl-3 py-2">
                        <h4 className="text-sm font-semibold text-yellow-400 mb-1 flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          Nota Cultural
                        </h4>
                        <p className="text-yellow-200 text-sm">{entry.culturalNote}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <Card className="bg-black/50 border-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>Total de entradas: {allEntries.length}</span>
            <span>Diccionario {languageName} - Español</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
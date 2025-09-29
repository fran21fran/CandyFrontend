import { Language } from "@/data/languages";

interface LanguageCardProps {
  language: Language;
}

export default function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div className={`bg-gradient-to-br ${language.color}/20 rounded-2xl p-8 border border-current/30 hover:border-current/50 transition-all duration-300`}>
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${language.color} rounded-full flex items-center justify-center mr-4 text-2xl`}>
          {language.flag}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{language.nativeName}</h3>
          <p className="text-gray-300">{language.description}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-black/30 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-blue-400">Vocabulario Básico</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {language.vocabulary.map((item, index) => (
              <div key={index}>
                <span className="text-gray-400">{item.word}</span> - {item.translation}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-black/30 rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-blue-400">Gramática Completa</h4>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            
            {/* Niveles de gramática */}
            <div className="space-y-2">
              <div>
                <h5 className="text-xs font-semibold text-green-400 mb-1">BÁSICO:</h5>
                <p className="text-xs text-gray-300">{language.grammar.basic}</p>
              </div>
              <div>
                <h5 className="text-xs font-semibold text-yellow-400 mb-1">INTERMEDIO:</h5>
                <p className="text-xs text-gray-300">{language.grammar.intermediate}</p>
              </div>
              <div>
                <h5 className="text-xs font-semibold text-orange-400 mb-1">AVANZADO:</h5>
                <p className="text-xs text-gray-300">{language.grammar.advanced}</p>
              </div>
            </div>

            {/* Tiempos verbales */}
            <div>
              <h5 className="text-xs font-semibold text-cyan-400 mb-2">TIEMPOS VERBALES:</h5>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-cyan-300 font-medium mb-1">Presente:</div>
                  {language.grammar.tenses?.present?.slice(0, 3).map((verb, i) => (
                    <div key={i} className="text-gray-300">{verb.pronoun}: {verb.conjugation}</div>
                  ))}
                </div>
                <div>
                  <div className="text-cyan-300 font-medium mb-1">Pasado:</div>
                  {language.grammar.tenses?.past_simple?.slice(0, 3).map((verb: any, i: number) => (
                    <div key={i} className="text-gray-300">{verb.pronoun}: {verb.conjugation}</div>
                  ))}
                </div>
                <div>
                  <div className="text-cyan-300 font-medium mb-1">Futuro:</div>
                  {language.grammar.tenses?.future?.slice(0, 3).map((verb, i) => (
                    <div key={i} className="text-gray-300">{verb.pronoun}: {verb.conjugation}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pronombres */}
            <div>
              <h5 className="text-xs font-semibold text-purple-400 mb-2">PRONOMBRES:</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-purple-300 font-medium mb-1">Personales:</div>
                  {language.grammar.pronouns?.subject?.slice(0, 3).map((pronoun: any, i: number) => (
                    <div key={i} className="text-gray-300">{pronoun.spanish}: {pronoun.target}</div>
                  ))}
                </div>
                <div>
                  <div className="text-purple-300 font-medium mb-1">Posesivos:</div>
                  {language.grammar.pronouns?.tonic?.slice(0, 3).map((pronoun: any, i: number) => (
                    <div key={i} className="text-gray-300">{pronoun.spanish}: {pronoun.target}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Artículos */}
            <div>
              <h5 className="text-xs font-semibold text-pink-400 mb-2">ARTÍCULOS:</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-pink-300 font-medium mb-1">Definidos:</div>
                  {language.grammar.articles?.definite?.slice(0, 3).map((article, i) => (
                    <div key={i} className="text-gray-300">{article.form}: {article.example}</div>
                  ))}
                </div>
                <div>
                  <div className="text-pink-300 font-medium mb-1">Indefinidos:</div>
                  {language.grammar.articles?.indefinite?.slice(0, 3).map((article, i) => (
                    <div key={i} className="text-gray-300">{article.form}: {article.example}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preposiciones */}
            <div>
              <h5 className="text-xs font-semibold text-emerald-400 mb-2">PREPOSICIONES:</h5>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-emerald-300 font-medium mb-1">Lugar:</div>
                  {language.grammar.prepositions?.place?.slice(0, 2).map((prep, i) => (
                    <div key={i} className="text-gray-300">{prep.spanish}: {prep.target}</div>
                  ))}
                </div>
                <div>
                  <div className="text-emerald-300 font-medium mb-1">Tiempo:</div>
                  {language.grammar.prepositions?.time?.slice(0, 2).map((prep, i) => (
                    <div key={i} className="text-gray-300">{prep.spanish}: {prep.target}</div>
                  ))}
                </div>
                <div>
                  <div className="text-emerald-300 font-medium mb-1">Movimiento:</div>
                  {language.grammar.prepositions?.movement?.slice(0, 2).map((prep, i) => (
                    <div key={i} className="text-gray-300">{prep.spanish}: {prep.target}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conectores */}
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 mb-2">CONECTORES:</h5>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {language.grammar.connectors?.slice(0, 6).map((connector, i) => (
                  <div key={i} className="text-gray-300">{connector.spanish}: {connector.target}</div>
                ))}
              </div>
            </div>

            {/* Estructura de oraciones */}
            <div>
              <h5 className="text-xs font-semibold text-teal-400 mb-2">ESTRUCTURA DE ORACIONES:</h5>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-teal-300 font-medium">Básica:</div>
                  <div className="text-gray-300">{language.grammar.sentenceStructure?.basic}</div>
                </div>
                <div>
                  <div className="text-teal-300 font-medium">Preguntas:</div>
                  <div className="text-gray-300">{language.grammar.sentenceStructure?.questions}</div>
                </div>
              </div>
            </div>

            {/* Notas culturales */}
            <div>
              <h5 className="text-xs font-semibold text-amber-400 mb-2">ASPECTOS CULTURALES:</h5>
              <div className="space-y-1 text-xs">
                {language.grammar.culturalNotes.slice(0, 2).map((note, i) => (
                  <div key={i} className="text-gray-300">
                    <span className="text-amber-300 font-medium">{note.aspect}:</span> {note.note}
                  </div>
                ))}
              </div>
            </div>

            {/* Ejemplos avanzados */}
            <div>
              <h5 className="text-xs font-semibold text-purple-400 mb-2">EJEMPLOS AVANZADOS:</h5>
              <div className="space-y-2">
                {language.grammar.examples.slice(0, 3).map((example, index) => (
                  <div key={index} className="text-xs">
                    <div className="text-purple-300 font-medium">{example.rule}:</div>
                    <div className="text-gray-300">"{example.example}"</div>
                    <div className="text-gray-400 italic">→ {example.translation}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

import { alphabet } from './alphabet';

export const englishGrammar = {
  basic: "English has definite (the) and indefinite (a/an) articles. Regular verbs add -ed for past tense. Word order is generally Subject-Verb-Object. Pronunciation can be irregular.",
  intermediate: "Modal verbs (can, must, should) express ability, necessity, advice. Present perfect uses have/has + past participle. Phrasal verbs combine verbs with prepositions for new meanings.",
  advanced: "Conditional sentences have multiple types (zero, first, second, third). Passive voice shifts focus from doer to action. Reported speech requires tense backshifting and pronoun changes.",
  
  alphabet,

  // Additional content to be implemented in future expansions
  greetings: {
    basic: "English greetings with formal/informal distinctions, cultural context",
    categories: ["formal", "informal", "responses", "politeness"]
  },
  
  geography: {
    basic: "English-speaking countries geography, nationalities, major cities",
    categories: ["countries", "cities", "nationalities", "regions"]
  },
  
  pronunciation: {
    basic: "English phonetics with IPA, word stress, connected speech",
    categories: ["vowels", "consonants", "stress", "intonation"]
  },
  
  articles: {
    basic: "Definite/indefinite articles, zero article usage rules",
    categories: ["definite", "indefinite", "zero_article", "usage"]
  },
  
  verbs: {
    basic: "Regular/irregular verbs, auxiliaries be/have/do, tense system",
    categories: ["regular", "irregular", "auxiliaries", "tenses"]
  },
  
  pronouns: {
    basic: "Personal, possessive, reflexive, relative, demonstrative pronouns",
    categories: ["personal", "possessive", "reflexive", "relative"]
  },
  
  numbers: {
    basic: "Cardinal and ordinal numbers, dates, time, measurements",
    categories: ["cardinal", "ordinal", "time", "measurements"]
  },
  
  time: {
    basic: "Time expressions, days, months, seasons, frequency adverbs",
    categories: ["clock_time", "days", "months", "frequency"]
  },
  
  prepositions: {
    basic: "Prepositions of time, place, movement, dependent prepositions",
    categories: ["time", "place", "movement", "dependent"]
  }
};
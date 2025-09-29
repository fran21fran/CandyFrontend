export const greetings = {
  formal: [
    { 
      target: "Bonjour", 
      spanish: "Buenos días", 
      context: "Saludo formal hasta las 17h",
      pronunciation: "[bon-ZHOOR]",
      usage: "En tiendas, oficinas, con desconocidos",
      response: "Bonjour Monsieur/Madame"
    },
    { 
      target: "Bonsoir", 
      spanish: "Buenas tardes/noches", 
      context: "Después de las 17h",
      pronunciation: "[bon-SWAHR]",
      usage: "Eventos formales, cenas, teatros",
      response: "Bonsoir"
    },
    { 
      target: "Monsieur/Madame", 
      spanish: "Señor/Señora", 
      context: "Tratamiento de respeto",
      pronunciation: "[muh-SYUR/ma-DAM]",
      usage: "Siempre en contextos formales",
      response: "Oui, Monsieur/Madame"
    },
    {
      target: "Comment allez-vous?",
      spanish: "¿Cómo está usted?",
      context: "Pregunta formal de cortesía",
      pronunciation: "[ko-mahn-tah-lay VOO]",
      usage: "En situaciones profesionales",
      response: "Je vais bien, merci. Et vous?"
    }
  ],

  informal: [
    { 
      target: "Salut", 
      spanish: "Hola/Adiós", 
      context: "Entre amigos y familiares",
      pronunciation: "[sa-LUU]",
      usage: "Con personas de confianza",
      response: "Salut!"
    },
    { 
      target: "Coucou", 
      spanish: "¡Hola!", 
      context: "Muy informal, cariñoso",
      pronunciation: "[koo-KOO]",
      usage: "Con niños, parejas, amigos íntimos",
      response: "Coucou!"
    },
    { 
      target: "Comment ça va?", 
      spanish: "¿Cómo va todo?", 
      context: "Pregunta informal",
      pronunciation: "[ko-mahn sa VAH]",
      usage: "Entre conocidos y amigos",
      response: "Ça va bien, et toi?"
    },
    {
      target: "Comment tu vas?",
      spanish: "¿Cómo estás?",
      context: "Pregunta directa informal",
      pronunciation: "[ko-mahn tu VAH]",
      usage: "Con amigos cercanos",
      response: "Je vais bien, merci"
    }
  ],

  responses: [
    { 
      greeting: "Comment allez-vous?", 
      response: "Je vais très bien, merci", 
      spanish: "Estoy muy bien, gracias",
      alternative: "Ça va bien, et vous?"
    },
    { 
      greeting: "Comment ça va?", 
      response: "Ça va super bien!", 
      spanish: "¡Va súper bien!",
      alternative: "Ça roule!"
    },
    { 
      greeting: "Bonjour", 
      response: "Bonjour, comment allez-vous?", 
      spanish: "Buenos días, ¿cómo está?",
      alternative: "Bonjour, ravi de vous voir"
    },
    {
      greeting: "Au revoir",
      response: "Au revoir, bonne journée!",
      spanish: "Adiós, ¡que tenga buen día!",
      alternative: "À bientôt!"
    }
  ],

  farewells: [
    {
      target: "Au revoir",
      spanish: "Adiós",
      context: "Despedida formal general",
      pronunciation: "[oh ruh-VWAHR]",
      usage: "En cualquier situación formal"
    },
    {
      target: "À bientôt",
      spanish: "Hasta pronto",
      context: "Cuando se volverán a ver pronto",
      pronunciation: "[ah bee-ahn-TOH]",
      usage: "Con conocidos y amigos"
    },
    {
      target: "À tout à l'heure",
      spanish: "Hasta luego",
      context: "Cuando se verán el mismo día",
      pronunciation: "[ah too-tah-LUHR]",
      usage: "Con compañeros de trabajo, amigos"
    },
    {
      target: "Bonne nuit",
      spanish: "Buenas noches",
      context: "Al irse a dormir",
      pronunciation: "[bun NWEE]",
      usage: "En casa, con la familia"
    }
  ],

  courtesy: [
    {
      target: "S'il vous plaît",
      spanish: "Por favor (formal)",
      context: "Petición cortés formal",
      pronunciation: "[seel voo PLAY]",
      usage: "En tiendas, restaurantes, oficinas"
    },
    {
      target: "S'il te plaît",
      spanish: "Por favor (informal)",
      context: "Petición cortés informal",
      pronunciation: "[seel tuh PLAY]",
      usage: "Con amigos, familia, niños"
    },
    {
      target: "Merci beaucoup",
      spanish: "Muchas gracias",
      context: "Agradecimiento enfático",
      pronunciation: "[mer-SEE boh-KOO]",
      usage: "Para expresar gratitud sincera"
    },
    {
      target: "De rien",
      spanish: "De nada",
      context: "Respuesta a 'merci'",
      pronunciation: "[duh ree-AHN]",
      usage: "Respuesta estándar a agradecimientos"
    },
    {
      target: "Excusez-moi",
      spanish: "Perdón/Disculpe (formal)",
      context: "Pedir disculpas o llamar atención",
      pronunciation: "[ek-skuu-zay MWAH]",
      usage: "Para interrumpir, pedir paso, disculparse"
    }
  ]
};
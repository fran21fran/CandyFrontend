export const pronouns = {
  subject: [
    { 
      spanish: "Yo", 
      target: "Je/J'", 
      definition: "Pronombre sujeto de primera persona singular",
      usage: "Sujeto de la oración, se elide antes de vocal (j')",
      examples: [
        { french: "Je parle français", spanish: "Hablo francés", context: "afirmativo" },
        { french: "J'arrive bientôt", spanish: "Llego pronto", context: "elisión" },
        { french: "Je ne comprends pas", spanish: "No entiendo", context: "negativo" }
      ],
      pronunciation: "[ʒə] / [ʒ]",
      elision: "j' devant voyelle ou h muette"
    },
    { 
      spanish: "Tú", 
      target: "Tu", 
      definition: "Pronombre sujeto de segunda persona singular informal",
      usage: "Para dirigirse a familiares, amigos, niños o personas de confianza",
      examples: [
        { french: "Tu es mon ami", spanish: "Eres mi amigo", context: "amistad" },
        { french: "Tu as raison", spanish: "Tienes razón", context: "reconocimiento" },
        { french: "Tu viens avec nous?", spanish: "¿Vienes con nosotros?", context: "invitación" }
      ],
      pronunciation: "[ty]",
      register: "informal",
      vs_vous: "Tu = informal, vous = formal o plural"
    },
    { 
      spanish: "Él/Ella", 
      target: "Il/Elle", 
      definition: "Pronombres sujeto de tercera persona singular",
      usage: "Il para masculino, elle para femenino, on para 'uno/se'",
      examples: [
        { french: "Il travaille ici", spanish: "Él trabaja aquí", context: "masculino" },
        { french: "Elle est médecin", spanish: "Ella es médica", context: "femenino" },
        { french: "On y va?", spanish: "¿Vamos?", context: "informal pour 'nous'" }
      ],
      pronunciation: "[il] / [ɛl] / [ɔ̃]",
      special: {
        on: {
          definition: "Pronombre indefinido que significa 'uno', 'se', o 'nosotros' informal",
          examples: [
            { french: "On mange bien ici", spanish: "Se come bien aquí", context: "impersonal" },
            { french: "On va au cinéma", spanish: "Vamos al cine", context: "nous informel" }
          ]
        }
      }
    },
    { 
      spanish: "Nosotros", 
      target: "Nous", 
      definition: "Pronombre sujeto de primera persona plural",
      usage: "Grupo que incluye al hablante, formal e informal",
      examples: [
        { french: "Nous parlons français", spanish: "Hablamos francés", context: "grupo" },
        { french: "Nous sommes contents", spanish: "Estamos contentos", context: "estado" },
        { french: "Nous vous invitons", spanish: "Os invitamos", context: "invitación formal" }
      ],
      pronunciation: "[nu]",
      alternative: "On en registre familier"
    },
    { 
      spanish: "Vosotros/Ustedes", 
      target: "Vous", 
      definition: "Pronombre sujeto de segunda persona formal singular o plural",
      usage: "Formalidad con una persona, o grupo de personas (formal/informal)",
      examples: [
        { french: "Vous êtes très gentil", spanish: "Usted es muy amable", context: "formal singular" },
        { french: "Vous parlez bien français", spanish: "Habláis bien francés", context: "plural" },
        { french: "Vous pouvez entrer", spanish: "Pueden entrar", context: "cortesía" }
      ],
      pronunciation: "[vu]",
      politeness: "Marque de respect et de distance sociale"
    },
    { 
      spanish: "Ellos/Ellas", 
      target: "Ils/Elles", 
      definition: "Pronombres sujeto de tercera persona plural",
      usage: "Ils para masculino o mixto, elles para femenino exclusivo",
      examples: [
        { french: "Ils travaillent ensemble", spanish: "Trabajan juntos", context: "masculino/mixto" },
        { french: "Elles sont amies", spanish: "Son amigas", context: "femenino exclusivo" },
        { french: "Ils ont raison", spanish: "Tienen razón", context: "grupo general" }
      ],
      pronunciation: "[il] / [ɛl]",
      rule: "Ils si hay al menos un masculino en el grupo"
    }
  ],

  direct_object: [
    {
      spanish: "Me",
      target: "Me/M'",
      definition: "Pronombre complemento directo de primera persona",
      position: "Antes del verbo conjugado, después en imperativo afirmativo",
      examples: [
        { french: "Il me voit", spanish: "Me ve", context: "présent" },
        { french: "Tu m'as appelé", spanish: "Me has llamado", context: "passé composé" },
        { french: "Appelez-moi!", spanish: "¡Llámeme!", context: "impératif affirmatif" },
        { french: "Ne me dérangez pas", spanish: "No me molesten", context: "impératif négatif" }
      ],
      pronunciation: "[mə] / [m]",
      elision: "m' devant voyelle"
    },
    {
      spanish: "Te",
      target: "Te/T'",
      definition: "Pronombre complemento directo de segunda persona singular",
      position: "Antes del verbo conjugado, después en imperativo afirmativo",
      examples: [
        { french: "Je te comprends", spanish: "Te entiendo", context: "présent" },
        { french: "Elle t'a invité", spanish: "Te ha invitado", context: "passé composé" },
        { french: "Dépêche-toi!", spanish: "¡Date prisa!", context: "impératif pronominal" }
      ],
      pronunciation: "[tə] / [t]",
      elision: "t' devant voyelle"
    },
    {
      spanish: "Lo/Le",
      target: "Le/L'",
      definition: "Pronombre complemento directo masculino singular",
      position: "Antes del verbo conjugado",
      examples: [
        { french: "Je le connais", spanish: "Lo conozco", context: "personne masculine" },
        { french: "Tu l'as vu?", spanish: "¿Lo has visto?", context: "avec élision" },
        { french: "Il faut l'aider", spanish: "Hay que ayudarlo", context: "infinitif" }
      ],
      pronunciation: "[lə] / [l]",
      elision: "l' devant voyelle",
      agreement: "Accord du participe passé si antéposé"
    },
    {
      spanish: "La",
      target: "La/L'",
      definition: "Pronombre complemento directo femenino singular",
      position: "Antes del verbo conjugado",
      examples: [
        { french: "Je la regarde", spanish: "La miro", context: "personne féminine" },
        { french: "Tu l'as rencontrée", spanish: "La has conocido", context: "avec accord" },
        { french: "Il va l'épouser", spanish: "Va a casarse con ella", context: "futur proche" }
      ],
      pronunciation: "[la] / [l]",
      elision: "l' devant voyelle"
    },
    {
      spanish: "Nos",
      target: "Nous",
      definition: "Pronombre complemento directo de primera persona plural",
      position: "Antes del verbo conjugado",
      examples: [
        { french: "Elle nous invite", spanish: "Nos invita", context: "invitation" },
        { french: "Ils nous ont vus", spanish: "Nos han visto", context: "avec accord" },
        { french: "Venez nous voir!", spanish: "¡Vengan a vernos!", context: "impératif" }
      ],
      pronunciation: "[nu]"
    },
    {
      spanish: "Os/Les",
      target: "Vous",
      definition: "Pronombre complemento directo de segunda persona plural/formal",
      position: "Antes del verbo conjugado",
      examples: [
        { french: "Je vous écoute", spanish: "Les escucho", context: "attention" },
        { french: "Il vous a cherchés", spanish: "Los ha buscado", context: "passé composé" },
        { french: "Nous vous remercions", spanish: "Les agradecemos", context: "remerciement" }
      ],
      pronunciation: "[vu]"
    },
    {
      spanish: "Los",
      target: "Les",
      definition: "Pronombre complemento directo masculino/mixto plural",
      position: "Antes del verbo conjugado",
      examples: [
        { french: "Je les vois", spanish: "Los veo", context: "personnes/objets masculins" },
        { french: "Tu les as trouvés", spanish: "Los has encontrado", context: "avec accord masculin" },
        { french: "Elle va les appeler", spanish: "Va a llamarlos", context: "futur proche" }
      ],
      pronunciation: "[le]"
    },
    {
      spanish: "Las",
      target: "Les",
      definition: "Pronombre complemento directo femenino plural (mismo que masculino)",
      position: "Antes del verbo conjugado",
      examples: [
        { french: "Je les regarde", spanish: "Las miro", context: "personnes féminines" },
        { french: "Tu les as rencontrées", spanish: "Las has conocido", context: "avec accord féminin" },
        { french: "Il faut les aider", spanish: "Hay que ayudarlas", context: "infinitif" }
      ],
      pronunciation: "[le]",
      note: "Même forme que le masculin, l'accord se voit au participe passé"
    }
  ],

  indirect_object: [
    {
      spanish: "Me (a mí)",
      target: "Me/M'",
      definition: "Pronombre complemento indirecto de primera persona",
      usage: "Expresa 'a mí', beneficiario o destinatario de la acción",
      examples: [
        { french: "Il me parle", spanish: "Me habla", context: "communication" },
        { french: "Elle m'a écrit", spanish: "Me ha escrito", context: "correspondance" },
        { french: "Tu me donnes ton livre?", spanish: "¿Me das tu libro?", context: "don" }
      ],
      pronunciation: "[mə] / [m]"
    },
    {
      spanish: "Te (a ti)",
      target: "Te/T'",
      definition: "Pronombre complemento indirecto de segunda persona singular",
      usage: "Expresa 'a ti', beneficiario informal",
      examples: [
        { french: "Je te téléphone", spanish: "Te llamo por teléfono", context: "communication" },
        { french: "Il t'a promis", spanish: "Te ha prometido", context: "promesse" },
        { french: "Elle va t'offrir un cadeau", spanish: "Va a ofrecerte un regalo", context: "cadeau" }
      ],
      pronunciation: "[tə] / [t]"
    },
    {
      spanish: "Le (a él/ella)",
      target: "Lui",
      definition: "Pronombre complemento indirecto tercera persona singular (masculino y femenino)",
      usage: "Expresa 'a él' o 'a ella', mismo pronombre para ambos géneros",
      examples: [
        { french: "Je lui parle", spanish: "Le hablo (a él/ella)", context: "communication" },
        { french: "Tu lui as dit", spanish: "Le has dicho", context: "information" },
        { french: "Nous lui offrons des fleurs", spanish: "Le ofrecemos flores", context: "cadeau" }
      ],
      pronunciation: "[lɥi]",
      note: "Même forme pour masculin et féminin"
    },
    {
      spanish: "Nos (a nosotros)",
      target: "Nous",
      definition: "Pronombre complemento indirecto primera persona plural",
      usage: "Expresa 'a nosotros', beneficiario plural que incluye al hablante",
      examples: [
        { french: "Il nous explique", spanish: "Nos explica", context: "explication" },
        { french: "Elle nous a téléphoné", spanish: "Nos ha llamado", context: "communication" },
        { french: "Ils vont nous écrire", spanish: "Van a escribirnos", context: "correspondance" }
      ],
      pronunciation: "[nu]"
    },
    {
      spanish: "Os/Les (a vosotros/ustedes)",
      target: "Vous",
      definition: "Pronombre complemento indirecto segunda persona plural/formal",
      usage: "Expresa 'a vosotros/ustedes', formal o plural",
      examples: [
        { french: "Je vous dis la vérité", spanish: "Les digo la verdad", context: "information" },
        { french: "Il vous a promis", spanish: "Les ha prometido", context: "promesse" },
        { french: "Nous vous écrivons", spanish: "Les escribimos", context: "correspondance" }
      ],
      pronunciation: "[vu]"
    },
    {
      spanish: "Les (a ellos/ellas)",
      target: "Leur",
      definition: "Pronombre complemento indirecto tercera persona plural",
      usage: "Expresa 'a ellos/ellas', beneficiarios plurales",
      examples: [
        { french: "Je leur explique", spanish: "Les explico", context: "explication" },
        { french: "Tu leur as écrit", spanish: "Les has escrito", context: "correspondance" },
        { french: "Elle va leur téléphoner", spanish: "Va a llamarlos", context: "communication" }
      ],
      pronunciation: "[lœʁ]",
      note: "Invariable, ne prend jamais de 's'"
    }
  ],

  reflexive: [
    {
      definition: "Pronombres que indican que la acción recae sobre el propio sujeto",
      usage: "Con verbos pronominales, acciones reflexivas, recíprocas",
      forms: [
        {
          person: "Je",
          pronoun: "me/m'",
          examples: [
            { french: "Je me lave", spanish: "Me lavo", type: "reflexif" },
            { french: "Je m'habille", spanish: "Me visto", type: "pronominal" },
            { french: "Je me souviens", spanish: "Me acuerdo", type: "pronominal pur" }
          ]
        },
        {
          person: "Tu",
          pronoun: "te/t'",
          examples: [
            { french: "Tu te reposes", spanish: "Te descansas", type: "reflexif" },
            { french: "Tu t'amuses", spanish: "Te diviertes", type: "pronominal" },
            { french: "Tu te trompes", spanish: "Te equivocas", type: "pronominal pur" }
          ]
        },
        {
          person: "Il/Elle/On",
          pronoun: "se/s'",
          examples: [
            { french: "Il se regarde", spanish: "Se mira", type: "reflexif" },
            { french: "Elle s'appelle Marie", spanish: "Se llama Marie", type: "pronominal pur" },
            { french: "On se voit demain", spanish: "Nos vemos mañana", type: "réciproque" }
          ]
        },
        {
          person: "Nous",
          pronoun: "nous",
          examples: [
            { french: "Nous nous parlons", spanish: "Nos hablamos", type: "réciproque" },
            { french: "Nous nous levons", spanish: "Nos levantamos", type: "pronominal" },
            { french: "Nous nous souvenons", spanish: "Nos acordamos", type: "pronominal pur" }
          ]
        },
        {
          person: "Vous",
          pronoun: "vous",
          examples: [
            { french: "Vous vous amusez", spanish: "Se divierten", type: "pronominal" },
            { french: "Vous vous connaissez?", spanish: "¿Se conocen?", type: "réciproque" },
            { french: "Vous vous trompez", spanish: "Se equivocan", type: "pronominal pur" }
          ]
        },
        {
          person: "Ils/Elles",
          pronoun: "se/s'",
          examples: [
            { french: "Ils se voient souvent", spanish: "Se ven a menudo", type: "réciproque" },
            { french: "Elles s'habillent bien", spanish: "Se visten bien", type: "reflexif" },
            { french: "Ils se souviennent", spanish: "Se acuerdan", type: "pronominal pur" }
          ]
        }
      ],
      types: [
        {
          type: "Verbes réfléchis",
          definition: "La acción vuelve sobre el sujeto",
          examples: ["se laver", "se regarder", "se coiffer"]
        },
        {
          type: "Verbes réciproques",
          definition: "Acción mutua entre varios sujetos",
          examples: ["se parler", "se voir", "se connaître"]
        },
        {
          type: "Verbes pronominaux purs",
          definition: "Solo existen en forma pronominal",
          examples: ["se souvenir", "s'évanouir", "se méfier"]
        }
      ]
    }
  ],

  possessive: [
    {
      type: "Pronombres posesivos (reemplazan al sustantivo)",
      definition: "Indican posesión y reemplazan completamente al sustantivo poseído",
      forms: [
        {
          possessor: "je",
          possessed: {
            masculine_singular: { form: "le mien", example: "Ce livre est le mien", spanish: "Este libro es el mío" },
            feminine_singular: { form: "la mienne", example: "Cette voiture est la mienne", spanish: "Este coche es el mío" },
            masculine_plural: { form: "les miens", example: "Ces livres sont les miens", spanish: "Estos libros son los míos" },
            feminine_plural: { form: "les miennes", example: "Ces voitures sont les miennes", spanish: "Estos coches son los míos" }
          }
        },
        {
          possessor: "tu",
          possessed: {
            masculine_singular: { form: "le tien", example: "Ce livre est le tien", spanish: "Este libro es el tuyo" },
            feminine_singular: { form: "la tienne", example: "Cette idée est la tienne", spanish: "Esta idea es la tuya" },
            masculine_plural: { form: "les tiens", example: "Ces amis sont les tiens", spanish: "Estos amigos son los tuyos" },
            feminine_plural: { form: "les tiennes", example: "Ces idées sont les tiennes", spanish: "Estas ideas son las tuyas" }
          }
        },
        {
          possessor: "il/elle",
          possessed: {
            masculine_singular: { form: "le sien", example: "Ce chat est le sien", spanish: "Este gato es el suyo" },
            feminine_singular: { form: "la sienne", example: "Cette maison est la sienne", spanish: "Esta casa es la suya" },
            masculine_plural: { form: "les siens", example: "Ces enfants sont les siens", spanish: "Estos niños son los suyos" },
            feminine_plural: { form: "les siennes", example: "Ces fleurs sont les siennes", spanish: "Estas flores son las suyas" }
          }
        }
      ],
      usage_notes: [
        "Concuerdan con el objeto poseído, no con el poseedor",
        "Siempre van precedidos del artículo definido",
        "Se pueden usar tras preposiciones: chez les miens"
      ]
    }
  ],

  order: {
    affirmative: {
      rule: "Pronombre + verbe conjugué",
      examples: [
        { french: "Je le lui donne", spanish: "Se lo doy", order: "sujet + COD + COI + verbe" },
        { french: "Tu me l'as dit", spanish: "Me lo has dicho", order: "sujet + COI + COD + auxiliaire + participe" },
        { french: "Elle nous les montre", spanish: "Nos las enseña", order: "sujet + COI + COD + verbe" }
      ]
    },
    imperative: {
      rule: "Verbe + pronombre (con guiones)",
      examples: [
        { french: "Donne-le-moi!", spanish: "¡Dámelo!", order: "verbe + COD + COI" },
        { french: "Montre-les-nous!", spanish: "¡Enséñanoslas!", order: "verbe + COD + COI" },
        { french: "Ne me le donne pas", spanish: "No me lo des", order: "négation normale" }
      ]
    },
    double_pronouns: {
      order: "me/te/nous/vous + le/la/les + lui/leur",
      examples: [
        { french: "Je te le dis", spanish: "Te lo digo", explanation: "te (COI) + le (COD)" },
        { french: "Il nous les donne", spanish: "Nos los da", explanation: "nous (COI) + les (COD)" },
        { french: "Elle le lui explique", spanish: "Se lo explica", explanation: "le (COD) + lui (COI)" }
      ]
    }
  }
};
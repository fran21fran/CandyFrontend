export const materials = {
  school_supplies: [
    {
      french: "stylo",
      spanish: "bolígrafo",
      pronunciation: "[sti-LO]",
      gender: "masculino",
      definition: "Instrumento de escritura con tinta",
      types: ["stylo à bille", "stylo plume", "stylo feutre"],
      examples: [
        { french: "J'écris avec un stylo bleu", spanish: "Escribo con un bolígrafo azul", context: "usage" },
        { french: "Mon stylo ne marche plus", spanish: "Mi bolígrafo no funciona", context: "problema" },
        { french: "Prêter son stylo", spanish: "Prestar su bolígrafo", context: "partage" }
      ],
      colors: ["bleu", "noir", "rouge", "vert"],
      cultural_note: "Le stylo plume reste prestigieux en France"
    },
    {
      french: "crayon",
      spanish: "lápiz",
      pronunciation: "[kʁe-JÔN]",
      gender: "masculino",
      definition: "Instrumento de escritura con grafito, borrable",
      types: ["crayon papier", "crayon de couleur", "crayon gras"],
      examples: [
        { french: "Dessiner au crayon", spanish: "Dibujar a lápiz", context: "art" },
        { french: "Tailler son crayon", spanish: "Sacar punta al lápiz", context: "maintenance" },
        { french: "Crayon bien taillé", spanish: "Lápiz bien afilado", context: "qualité" }
      ],
      accessories: ["gomme", "taille-crayon", "porte-mine"],
      advantages: "Effaçable, précis pour le dessin"
    },
    {
      french: "gomme",
      spanish: "goma de borrar",
      pronunciation: "[gom]",
      gender: "femenino",
      definition: "Objeto para borrar escritura de lápiz",
      types: ["gomme blanche", "gomme de couleur", "gomme électrique"],
      examples: [
        { french: "Effacer avec la gomme", spanish: "Borrar con la goma", context: "correction" },
        { french: "Gomme qui salit", spanish: "Goma que ensucia", context: "problème" },
        { french: "Prêter sa gomme", spanish: "Prestar su goma", context: "solidarité" }
      ],
      materials: ["caoutchouc", "plastique"],
      school_essential: "Indispensable avec le crayon"
    },
    {
      french: "cahier",
      spanish: "cuaderno",
      pronunciation: "[ka-JE]",
      gender: "masculino",
      definition: "Conjunto de hojas encuadernadas para escribir",
      types: ["cahier de brouillon", "cahier de leçons", "cahier d'exercices"],
      formats: ["petit format (17x22)", "grand format (21x29.7)", "format A4"],
      examples: [
        { french: "Écrire dans le cahier", spanish: "Escribir en el cuaderno", context: "usage" },
        { french: "Cahier de textes", spanish: "Agenda escolar", context: "organisation" },
        { french: "Couvrir son cahier", spanish: "Forrar su cuaderno", context: "protection" }
      ],
      ruling: ["lignes", "carreaux", "blanc"],
      school_organization: "Organisation par matières"
    },
    {
      french: "cartable",
      spanish: "cartera escolar",
      pronunciation: "[kar-TABL]",
      gender: "masculino",
      definition: "Bolsa para transportar útiles escolares",
      types: ["cartable classique", "sac à dos", "cartable à roulettes"],
      examples: [
        { french: "Porter son cartable", spanish: "Llevar su cartera", context: "transport" },
        { french: "Cartable trop lourd", spanish: "Cartera muy pesada", context: "problème" },
        { french: "Ranger son cartable", spanish: "Ordenar su cartera", context: "organisation" }
      ],
      materials: ["cuir", "toile", "plastique"],
      evolution: "Vers des modèles ergonomiques"
    }
  ],

  fabric_clothing: [
    {
      french: "coton",
      spanish: "algodón",
      pronunciation: "[ko-TÔN]",
      gender: "masculino",
      definition: "Fibra natural vegetal, suave y transpirable",
      origin: "Plante tropicale",
      characteristics: ["doux", "absorbant", "respirant", "naturel"],
      uses: ["chemises", "t-shirts", "sous-vêtements", "draps"],
      examples: [
        { french: "Chemise en coton", spanish: "Camisa de algodón", context: "vêtement" },
        { french: "Coton biologique", spanish: "Algodón orgánico", context: "écologie" },
        { french: "100% coton", spanish: "100% algodón", context: "composition" }
      ],
      care: ["lavable", "peut rétrécir", "se froisse"],
      quality: "Matière noble et confortable"
    },
    {
      french: "laine",
      spanish: "lana",
      pronunciation: "[lɛn]",
      gender: "femenino",
      definition: "Fibra natural animal, cálida y aislante",
      origin: "Moutons principalement",
      characteristics: ["chaud", "isolant", "élastique", "naturel"],
      types: ["laine vierge", "laine mérinos", "laine d'agneau"],
      uses: ["pulls", "écharpes", "manteaux", "chaussettes"],
      examples: [
        { french: "Pull en laine", spanish: "Jersey de lana", context: "vêtement d'hiver" },
        { french: "Laine qui gratte", spanish: "Lana que pica", context: "inconfort" },
        { french: "Tricoter de la laine", spanish: "Tejer lana", context: "activité" }
      ],
      care: ["lavage délicat", "peut feutrer", "séchage à plat"],
      seasonal: "Matière hivernale par excellence"
    },
    {
      french: "soie",
      spanish: "seda",
      pronunciation: "[swɑ]",
      gender: "femenino",
      definition: "Fibra natural de lujo, brillante y suave",
      origin: "Cocons de vers à soie",
      characteristics: ["brillant", "doux", "léger", "luxueux"],
      types: ["soie sauvage", "soie cultivée", "soie artificielle"],
      uses: ["robes", "foulards", "cravates", "lingerie"],
      examples: [
        { french: "Robe en soie", spanish: "Vestido de seda", context: "élégance" },
        { french: "Foulard de soie", spanish: "Pañuelo de seda", context: "accessoire" },
        { french: "Soie naturelle", spanish: "Seda natural", context: "qualité" }
      ],
      care: ["nettoyage délicat", "fragile", "éviter l'eau"],
      prestige: "Symbole de raffinement"
    },
    {
      french: "cuir",
      spanish: "cuero",
      pronunciation: "[kɥiʁ]",
      gender: "masculino",
      definition: "Piel animal tratada, resistente y durable",
      origin: "Peau de bovins principalement",
      characteristics: ["résistant", "durable", "souple", "noble"],
      types: ["cuir de vache", "cuir d'agneau", "cuir synthétique"],
      uses: ["chaussures", "sacs", "vestes", "ceintures"],
      examples: [
        { french: "Veste en cuir", spanish: "Chaqueta de cuero", context: "style" },
        { french: "Chaussures en cuir", spanish: "Zapatos de cuero", context: "qualité" },
        { french: "Sac en cuir", spanish: "Bolso de cuero", context: "accessoire" }
      ],
      care: ["entretien spécialisé", "imperméabilisation", "éviter l'humidité"],
      investment: "Achat durable et de qualité"
    },
    {
      french: "polyester",
      spanish: "poliéster",
      pronunciation: "[po-li-ɛs-TER]",
      gender: "masculino",
      definition: "Fibra sintética resistente y fácil de mantener",
      origin: "Pétrochimie",
      characteristics: ["résistant", "infroissable", "séchage rapide", "économique"],
      uses: ["vêtements de sport", "doublures", "rideaux", "polaires"],
      examples: [
        { french: "Tissu en polyester", spanish: "Tejido de poliéster", context: "composition" },
        { french: "Mélange coton-polyester", spanish: "Mezcla algodón-poliéster", context: "textile" }
      ],
      advantages: ["facile d'entretien", "résistant", "garde sa forme"],
      disadvantages: ["peu respirant", "électricité statique", "moins noble"],
      modern_use: "Très répandu dans l'industrie textile"
    }
  ],

  construction: [
    {
      french: "bois",
      spanish: "madera",
      pronunciation: "[bwɑ]",
      gender: "masculino",
      definition: "Material natural de construcción procedente de árboles",
      types: ["bois dur", "bois tendre", "bois exotique", "contreplaqué"],
      characteristics: ["naturel", "renouvelable", "isolant", "travaillable"],
      species: ["chêne", "pin", "hêtre", "sapin"],
      uses: ["charpente", "parquet", "meubles", "décoration"],
      examples: [
        { french: "Maison en bois", spanish: "Casa de madera", context: "construction" },
        { french: "Travailler le bois", spanish: "Trabajar la madera", context: "artisanat" },
        { french: "Essence de bois", spanish: "Esencia de madera", context: "type" }
      ],
      tools: ["scie", "rabot", "ciseau", "perceuse"],
      ecology: "Material écologique si gestion durable"
    },
    {
      french: "béton",
      spanish: "hormigón",
      pronunciation: "[be-TÔN]",
      gender: "masculino",
      definition: "Material de construcción a base de cemento, resistente",
      composition: "Ciment + eau + granulats",
      characteristics: ["résistant", "durable", "polyvalent", "économique"],
      types: ["béton armé", "béton précontraint", "béton décoratif"],
      uses: ["fondations", "murs", "dalles", "ponts"],
      examples: [
        { french: "Mur en béton", spanish: "Muro de hormigón", context: "construction" },
        { french: "Couler du béton", spanish: "Verter hormigón", context: "travaux" },
        { french: "Béton armé", spanish: "Hormigón armado", context: "technique" }
      ],
      process: ["malaxage", "coulage", "séchage", "durcissement"],
      modern_architecture: "Base de l'architecture moderne"
    },
    {
      french: "acier",
      spanish: "acero",
      pronunciation: "[a-SJE]",
      gender: "masculino",
      definition: "Aleación de hierro y carbono, muy resistente",
      characteristics: ["très résistant", "recyclable", "conducteur", "ductile"],
      types: ["acier inoxydable", "acier carbone", "acier galvanisé"],
      uses: ["structure", "armatures", "outils", "véhicules"],
      examples: [
        { french: "Poutre en acier", spanish: "Viga de acero", context: "structure" },
        { french: "Acier inoxydable", spanish: "Acero inoxidable", context: "qualité" },
        { french: "Industrie de l'acier", spanish: "Industria del acero", context: "économie" }
      ],
      advantages: ["résistance", "durabilité", "recyclabilité"],
      industry: "Secteur industriel majeur"
    }
  ],

  kitchen_materials: [
    {
      french: "verre",
      spanish: "vidrio",
      pronunciation: "[vɛʁ]",
      gender: "masculino",
      definition: "Material transparente obtenido por fusión",
      characteristics: ["transparent", "fragile", "hygiénique", "recyclable"],
      types: ["verre trempé", "verre dépoli", "cristal"],
      uses: ["fenêtres", "verres", "bouteilles", "miroirs"],
      examples: [
        { french: "Verre à vin", spanish: "Copa de vino", context: "table" },
        { french: "Verre cassé", spanish: "Vidrio roto", context: "accident" },
        { french: "Recycler le verre", spanish: "Reciclar el vidrio", context: "écologie" }
      ],
      care: ["fragile", "nettoyage facile", "craint les chocs"],
      recycling: "100% recyclable à l'infini"
    },
    {
      french: "plastique",
      spanish: "plástico",
      pronunciation: "[plas-TIK]",
      gender: "masculino",
      definition: "Material sintético moldeable, ligero y versátil",
      origin: "Pétrochimie",
      characteristics: ["léger", "résistant", "moldable", "économique"],
      types: ["PET", "polystyrène", "PVC", "polypropylène"],
      uses: ["emballages", "jouets", "électroménager", "automobile"],
      examples: [
        { french: "Bouteille en plastique", spanish: "Botella de plástico", context: "emballage" },
        { french: "Sac plastique", spanish: "Bolsa de plástico", context: "shopping" },
        { french: "Recycler le plastique", spanish: "Reciclar el plástico", context: "environnement" }
      ],
      environmental_concern: "Pollution et recyclage difficile",
      alternatives: "Recherche de substituts écologiques"
    },
    {
      french: "céramique",
      spanish: "cerámica",
      pronunciation: "[se-ʁa-MIK]",
      gender: "femenino",
      definition: "Material de arcilla cocida, resistente al calor",
      origin: "Argile cuite à haute température",
      characteristics: ["dur", "résistant à la chaleur", "hygiénique", "décoratif"],
      types: ["faïence", "grès", "porcelaine"],
      uses: ["vaisselle", "carrelage", "sanitaires", "art"],
      examples: [
        { french: "Assiette en céramique", spanish: "Plato de cerámica", context: "table" },
        { french: "Carrelage céramique", spanish: "Azulejo cerámico", context: "sols" },
        { french: "Art céramique", spanish: "Arte cerámico", context: "création" }
      ],
      advantages: ["durabilité", "hygiène", "esthétique"],
      tradition: "Artisanat traditionnel français"
    }
  ],

  properties: [
    {
      property: "résistance",
      spanish: "resistencia",
      definition: "Capacidad de soportar esfuerzos sin romperse",
      materials: ["acier", "béton", "bois dur", "céramique"],
      measurement: "MPa (MégaPascals)",
      importance: "Sécurité des constructions"
    },
    {
      property: "élasticité",
      spanish: "elasticidad",
      definition: "Capacidad de deformarse y recuperar la forma original",
      materials: ["caoutchouc", "laine", "acier", "certains plastiques"],
      applications: ["vêtements stretch", "ressorts", "joints"],
      advantage: "Adaptation aux contraintes"
    },
    {
      property: "conductivité",
      spanish: "conductividad",
      definition: "Capacidad de transmitir calor o electricidad",
      thermal: ["métaux", "céramiques spéciales"],
      electrical: ["cuivre", "aluminium", "acier"],
      insulation: ["bois", "plastique", "verre", "laine"],
      applications: "Chauffage, électricité, isolation"
    },
    {
      property: "durabilité",
      spanish: "durabilidad",
      definition: "Resistencia al tiempo y a la degradación",
      durable: ["pierre", "acier inoxydable", "verre"],
      biodegradable: ["bois", "coton", "laine"],
      synthetic: ["plastiques", "polyester"],
      environmental_impact: "Choix crucial pour l'environnement"
    }
  ],

  recycling: [
    {
      material: "Papier/Carton",
      french: "papier/carton",
      recycling_rate: "70% en France",
      process: "Désencrage, pâte recyclée",
      new_products: ["journaux", "emballages", "papier toilette"],
      bin_color: "bleu",
      environmental_benefit: "Préservation des forêts"
    },
    {
      material: "Verre",
      french: "verre",
      recycling_rate: "85% en France",
      process: "Fusion, nouveau verre",
      new_products: ["bouteilles", "pots", "vitres"],
      bin_color: "vert",
      environmental_benefit: "Recyclage infini possible"
    },
    {
      material: "Métaux",
      french: "métaux",
      recycling_rate: "90% en France",
      process: "Fusion, purification",
      new_products: ["canettes", "automobiles", "appareils"],
      bin_color: "jaune",
      environmental_benefit: "Économie d'énergie importante"
    },
    {
      material: "Plastiques",
      french: "plastiques",
      recycling_rate: "25% en France",
      process: "Tri, broyage, refonte",
      challenges: ["mélanges complexes", "dégradation qualité"],
      new_products: ["fibres textiles", "mobilier urbain"],
      improvement_needed: "Développement des technologies"
    }
  ],

  expressions: [
    {
      expression: "avoir l'étoffe de",
      spanish: "tener madera de",
      meaning: "Avoir les qualités pour",
      example: "Il a l'étoffe d'un leader",
      material_origin: "étoffe = tissu de qualité"
    },
    {
      expression: "du bois dont on fait",
      spanish: "de la madera de la que están hechos",
      meaning: "Avoir les qualités pour devenir",
      example: "C'est du bois dont on fait les champions",
      material_origin: "référence à la qualité du bois"
    },
    {
      expression: "être coulé dans le bronze",
      spanish: "estar fundido en bronce",
      meaning: "Être définitif, immuable",
      example: "Ce n'est pas coulé dans le bronze",
      material_origin: "durabilité du bronze"
    },
    {
      expression: "casser du sucre sur le dos",
      spanish: "hablar mal a espaldas",
      meaning: "Critiquer en l'absence de quelqu'un",
      example: "Ils cassent du sucre sur son dos",
      material_origin: "fragilité du sucre"
    }
  ]
};
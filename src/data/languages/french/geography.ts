export const geography = {
  countries: [
    { 
      country: "France", 
      spanish: "Francia", 
      capital: "Paris", 
      demonym: "français/française",
      pronunciation: "[frahn-SAY/frahn-SEHZ]",
      regions: ["Normandie", "Provence", "Bretagne", "Alsace"],
      languages: ["français", "breton", "alsacien", "corse"]
    },
    { 
      country: "Belgique", 
      spanish: "Bélgica", 
      capital: "Bruxelles", 
      demonym: "belge",
      pronunciation: "[BELZH]",
      regions: ["Flandre", "Wallonie", "Bruxelles-Capitale"],
      languages: ["français", "néerlandais", "allemand"]
    },
    { 
      country: "Suisse", 
      spanish: "Suiza", 
      capital: "Berne", 
      demonym: "suisse",
      pronunciation: "[SWEES]",
      regions: ["Genève", "Vaud", "Valais", "Fribourg"],
      languages: ["français", "allemand", "italien", "romanche"]
    },
    { 
      country: "Canada", 
      spanish: "Canadá", 
      capital: "Ottawa", 
      demonym: "canadien/canadienne",
      pronunciation: "[ka-na-dee-AHN/ka-na-dee-EHN]",
      regions: ["Québec", "Ontario", "Nouveau-Brunswick"],
      languages: ["français", "anglais"]
    },
    {
      country: "Luxembourg",
      spanish: "Luxemburgo",
      capital: "Luxembourg",
      demonym: "luxembourgeois/luxembourgeoise",
      pronunciation: "[luks-ahm-boor-ZHWAH/luks-ahm-boor-ZHWAHZ]",
      regions: ["Luxembourg", "Diekirch", "Grevenmacher"],
      languages: ["français", "luxembourgeois", "allemand"]
    }
  ],

  cities: [
    { 
      city: "Paris", 
      spanish: "París", 
      country: "France",
      pronunciation: "[pa-REE]",
      landmarks: ["Tour Eiffel", "Louvre", "Notre-Dame", "Champs-Élysées"],
      districts: ["Montmartre", "Marais", "Saint-Germain", "Belleville"]
    },
    { 
      city: "Lyon", 
      spanish: "León", 
      country: "France",
      pronunciation: "[lee-OHN]",
      landmarks: ["Basilique Notre-Dame", "Vieux Lyon", "Presqu'île"],
      speciality: "Gastronomie française"
    },
    { 
      city: "Marseille", 
      spanish: "Marsella", 
      country: "France",
      pronunciation: "[mar-SAY]",
      landmarks: ["Vieux-Port", "Notre-Dame de la Garde", "Calanques"],
      speciality: "Port méditerranéen"
    },
    { 
      city: "Montréal", 
      spanish: "Montreal", 
      country: "Canada",
      pronunciation: "[mohn-ray-AHL]",
      landmarks: ["Vieux-Montréal", "Mont-Royal", "Quartier Latin"],
      speciality: "Bilinguisme français-anglais"
    },
    {
      city: "Genève",
      spanish: "Ginebra",
      country: "Suisse",
      pronunciation: "[zhuh-NEHV]",
      landmarks: ["Jet d'eau", "Nations Unies", "Lac Léman"],
      speciality: "Organisations internationales"
    }
  ],

  nationalities: [
    { 
      nationality: "français", 
      spanish: "francés", 
      masculine: "français", 
      feminine: "française",
      pronunciation: "[frahn-SAY/frahn-SEHZ]",
      example: "Il est français, elle est française"
    },
    { 
      nationality: "belge", 
      spanish: "belga", 
      masculine: "belge", 
      feminine: "belge",
      pronunciation: "[BELZH]",
      example: "Un belge, une belge (invariable)"
    },
    { 
      nationality: "suisse", 
      spanish: "suizo", 
      masculine: "suisse", 
      feminine: "suisse",
      pronunciation: "[SWEES]",
      example: "Un Suisse, une Suisse (invariable)"
    },
    { 
      nationality: "canadien", 
      spanish: "canadiense", 
      masculine: "canadien", 
      feminine: "canadienne",
      pronunciation: "[ka-na-dee-AHN/ka-na-dee-EHN]",
      example: "Un Canadien, une Canadienne"
    }
  ],

  continents: [
    {
      continent: "Europe",
      spanish: "Europa",
      pronunciation: "[uh-ROHP]",
      countries: ["France", "Belgique", "Suisse"],
      characteristics: "Berceau de la francophonie européenne"
    },
    {
      continent: "Amérique du Nord",
      spanish: "América del Norte",
      pronunciation: "[a-may-reek du NOHR]",
      countries: ["Canada", "États-Unis (partiellement)"],
      characteristics: "Québec comme bastion francophone"
    },
    {
      continent: "Afrique",
      spanish: "África",
      pronunciation: "[a-FREEK]",
      countries: ["Sénégal", "Côte d'Ivoire", "Mali", "Burkina Faso"],
      characteristics: "Nombreux pays francophones"
    }
  ],

  directions: [
    {
      direction: "nord",
      spanish: "norte",
      pronunciation: "[NOHR]",
      usage: "au nord de Paris",
      example: "Lille est au nord de la France"
    },
    {
      direction: "sud",
      spanish: "sur",
      pronunciation: "[SUUD]",
      usage: "au sud de Lyon",
      example: "Marseille est au sud de la France"
    },
    {
      direction: "est",
      spanish: "este",
      pronunciation: "[EHST]",
      usage: "à l'est de Paris",
      example: "Strasbourg est à l'est de la France"
    },
    {
      direction: "ouest",
      spanish: "oeste",
      pronunciation: "[OOHST]",
      usage: "à l'ouest de Paris",
      example: "Brest est à l'ouest de la France"
    }
  ]
};
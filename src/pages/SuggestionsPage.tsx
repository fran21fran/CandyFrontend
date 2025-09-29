import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Film, Music, Book, User, Heart, MessageCircle, Plus } from "lucide-react";

interface Suggestion {
  id: string;
  type: "pelicula" | "cancion" | "comic" | "artista" | "libro" | "serie" | "podcast";
  title: string;
  artist: string;
  language: string;
  description: string;
  reason: string;
  submittedBy: string;
  submittedAt: string;
  likes: number;
  userHasLiked: boolean;
}

const languages = [
  { code: "spanish", name: "Español", flag: "🇪🇸" },
  { code: "french", name: "Français", flag: "🇫🇷" },
  { code: "italian", name: "Italiano", flag: "🇮🇹" },
  { code: "portuguese", name: "Português", flag: "🇵🇹" },
  { code: "english", name: "English", flag: "🇬🇧" },
  { code: "russian", name: "Русский", flag: "🇷🇺" }
];

const contentTypes = [
  { value: "pelicula", label: "Película", icon: Film, color: "bg-red-500" },
  { value: "serie", label: "Serie", icon: Film, color: "bg-purple-500" },
  { value: "cancion", label: "Canción", icon: Music, color: "bg-green-500" },
  { value: "libro", label: "Libro", icon: Book, color: "bg-blue-500" },
  { value: "comic", label: "Comic", icon: Book, color: "bg-yellow-500" },
  { value: "artista", label: "Artista", icon: User, color: "bg-pink-500" },
  { value: "podcast", label: "Podcast", icon: MessageCircle, color: "bg-orange-500" }
];

export default function SuggestionsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("spanish");
  const [newSuggestion, setNewSuggestion] = useState({
    type: "",
    title: "",
    artist: "",
    language: "spanish",
    description: "",
    reason: ""
  });
  // Removed unused showAddForm state
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: suggestions = [], isLoading } = useQuery<Suggestion[]>({
    queryKey: ["/api/suggestions", selectedLanguage],
  });

  const addSuggestionMutation = useMutation({
    mutationFn: async (suggestionData: any) => {
      return apiRequest("POST", "/api/suggestions", suggestionData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/suggestions"] });
      setNewSuggestion({
        type: "",
        title: "",
        artist: "",
        language: "spanish",
        description: "",
        reason: ""
      });
      // Form reset only needed, no form visibility toggle
      toast({
        title: "¡Sugerencia enviada!",
        description: "Gracias por compartir tu recomendación",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar la sugerencia",
        variant: "destructive",
      });
    },
  });

  const likeSuggestionMutation = useMutation({
    mutationFn: async (suggestionId: string) => {
      return apiRequest("POST", `/api/suggestions/${suggestionId}/like`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/suggestions"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSuggestion.type || !newSuggestion.title || !newSuggestion.description) {
      toast({
        title: "Campos requeridos",
        description: "Completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }
    addSuggestionMutation.mutate(newSuggestion);
  };

  const getTypeIcon = (type: string) => {
    const contentType = contentTypes.find(ct => ct.value === type);
    if (!contentType) return Film;
    return contentType.icon;
  };

  const getTypeColor = (type: string) => {
    const contentType = contentTypes.find(ct => ct.value === type);
    return contentType?.color || "bg-gray-500";
  };

  const getTypeLabel = (type: string) => {
    const contentType = contentTypes.find(ct => ct.value === type);
    return contentType?.label || type;
  };

  const filteredSuggestions = suggestions.filter(s => s.language === selectedLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white p-6">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            💡 Sugerencias Culturales
          </h1>
          <p className="text-xl text-blue-100">
            Comparte y descubre contenido cultural en diferentes idiomas
          </p>
        </div>

        {/* Language selector */}
        <div className="mb-6">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Seleccionar Idioma</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`${
                      selectedLanguage === lang.code
                        ? "bg-orange-500 text-white"
                        : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                    }`}
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
            <TabsTrigger value="browse" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Explorar Sugerencias
            </TabsTrigger>
            <TabsTrigger value="add" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Agregar Sugerencia
            </TabsTrigger>
          </TabsList>

          {/* Browse suggestions */}
          <TabsContent value="browse">
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              ) : filteredSuggestions.length === 0 ? (
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="text-center py-12">
                    <div className="text-blue-200 text-lg">
                      No hay sugerencias para {languages.find(l => l.code === selectedLanguage)?.name} aún.
                    </div>
                    <div className="text-blue-300 text-sm mt-2">
                      ¡Sé el primero en agregar una sugerencia!
                    </div>
                  </CardContent>
                </Card>
              ) : (
                filteredSuggestions.map((suggestion) => {
                  const TypeIcon = getTypeIcon(suggestion.type);
                  return (
                    <Card key={suggestion.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`p-2 rounded-lg ${getTypeColor(suggestion.type)}`}>
                                <TypeIcon className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-white">{suggestion.title}</h3>
                                {suggestion.artist && (
                                  <p className="text-blue-200">{suggestion.artist}</p>
                                )}
                              </div>
                              <Badge className={`${getTypeColor(suggestion.type)} text-white`}>
                                {getTypeLabel(suggestion.type)}
                              </Badge>
                            </div>
                            
                            <p className="text-blue-100 mb-3">{suggestion.description}</p>
                            
                            {suggestion.reason && (
                              <div className="bg-white/5 p-3 rounded-lg mb-3">
                                <p className="text-sm text-blue-200">
                                  <strong>Por qué lo recomiendo:</strong> {suggestion.reason}
                                </p>
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between text-sm text-blue-300">
                              <span>Por {suggestion.submittedBy}</span>
                              <span>{new Date(suggestion.submittedAt).toLocaleDateString('es-ES')}</span>
                            </div>
                          </div>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => likeSuggestionMutation.mutate(suggestion.id)}
                            className={`ml-4 ${
                              suggestion.userHasLiked 
                                ? "bg-red-500/20 text-red-300 border-red-500/30" 
                                : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                            }`}
                          >
                            <Heart className={`h-4 w-4 mr-1 ${suggestion.userHasLiked ? "fill-current" : ""}`} />
                            {suggestion.likes}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </TabsContent>

          {/* Add suggestion */}
          <TabsContent value="add">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Agregar Nueva Sugerencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Tipo de contenido *
                      </label>
                      <Select
                        value={newSuggestion.type}
                        onValueChange={(value) => setNewSuggestion({ ...newSuggestion, type: value })}
                      >
                        <SelectTrigger className="bg-white/10 border-white/30 text-white">
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {contentTypes.map((type) => {
                            const IconComponent = type.icon;
                            return (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center gap-2">
                                  <IconComponent className="h-4 w-4" />
                                  {type.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Idioma *
                      </label>
                      <Select
                        value={newSuggestion.language}
                        onValueChange={(value) => setNewSuggestion({ ...newSuggestion, language: value })}
                      >
                        <SelectTrigger className="bg-white/10 border-white/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.code} value={lang.code}>
                              <div className="flex items-center gap-2">
                                <span>{lang.flag}</span>
                                {lang.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Título *
                      </label>
                      <Input
                        value={newSuggestion.title}
                        onChange={(e) => setNewSuggestion({ ...newSuggestion, title: e.target.value })}
                        placeholder="Nombre de la película, canción, etc."
                        className="bg-white/10 border-white/30 text-white placeholder:text-blue-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Artista/Autor (opcional)
                      </label>
                      <Input
                        value={newSuggestion.artist}
                        onChange={(e) => setNewSuggestion({ ...newSuggestion, artist: e.target.value })}
                        placeholder="Director, cantante, autor, etc."
                        className="bg-white/10 border-white/30 text-white placeholder:text-blue-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Descripción *
                    </label>
                    <Textarea
                      value={newSuggestion.description}
                      onChange={(e) => setNewSuggestion({ ...newSuggestion, description: e.target.value })}
                      placeholder="Describe brevemente de qué trata..."
                      className="bg-white/10 border-white/30 text-white placeholder:text-blue-300"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      ¿Por qué lo recomiendas? (opcional)
                    </label>
                    <Textarea
                      value={newSuggestion.reason}
                      onChange={(e) => setNewSuggestion({ ...newSuggestion, reason: e.target.value })}
                      placeholder="Explica por qué crees que es útil para aprender el idioma..."
                      className="bg-white/10 border-white/30 text-white placeholder:text-blue-300"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={addSuggestionMutation.isPending}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {addSuggestionMutation.isPending ? "Enviando..." : "Enviar Sugerencia"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
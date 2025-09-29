import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, User, Crown, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, isPremium } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/logout");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user-info"] });
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión exitosamente.",
      });
    },
  });

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/languages", label: "Idiomas" },
    { path: "/games", label: "Juegos" },
    { path: "/leaderboard", label: "Puntuaciones" },
    { path: "/suggestions", label: "Sugerencias" },
    { path: "/support", label: "Soporte" },
    { path: "/team", label: "Equipo" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/95 backdrop-blur-sm" 
        : "bg-gradient-to-b from-black/80 to-transparent"
    }`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
            CandyWeb
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span className={`hover:text-gray-300 transition-colors ${
                    location === item.path ? "text-white" : "text-gray-400"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Section */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <User size={16} />
                  <span className="text-white">{user?.username}</span>
                  {isPremium && <Crown size={16} className="text-yellow-500" />}
                </div>
                
                {!isPremium && (
                  <Link href="/subscription">
                    <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium">
                      Premium
                    </Button>
                  </Link>
                )}
                
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => logoutMutation.mutate()}
                  disabled={logoutMutation.isPending}
                  className="text-gray-400 hover:text-white"
                >
                  <LogOut size={16} />
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-800 rounded transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm md:hidden">
            <div className="px-6 py-4 space-y-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span 
                        className={`block hover:text-gray-300 transition-colors ${
                          location === item.path ? "text-white" : "text-gray-400"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-gray-700">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <User size={16} />
                      <span className="text-white">{user?.username}</span>
                      {isPremium && <Crown size={16} className="text-yellow-500" />}
                    </div>
                    
                    {!isPremium && (
                      <Link href="/subscription">
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Activar Premium
                        </Button>
                      </Link>
                    )}
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        logoutMutation.mutate();
                        setIsMobileMenuOpen(false);
                      }}
                      disabled={logoutMutation.isPending}
                      className="w-full text-gray-400 hover:text-white justify-start"
                    >
                      <LogOut size={16} className="mr-2" />
                      Cerrar Sesión
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link href="/login">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="w-full text-gray-400 hover:text-white justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Iniciar Sesión
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Registrarse
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

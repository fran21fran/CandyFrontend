import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const registerMutation = useMutation({
    mutationFn: async (data: { username: string; email: string; password: string }) => {
      return apiRequest("POST", "/api/register", data);
    },
    onSuccess: () => {
      // Invalidate auth cache to refresh user state
      queryClient.invalidateQueries({ queryKey: ["/api/user-info"] });
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      
      toast({
        title: "¡Registro exitoso!",
        description: "Tu cuenta ha sido creada correctamente.",
      });
      setLocation("/");
    },
    onError: (error: any) => {
      toast({
        title: "Error al registrarse",
        description: error.message || "Ocurrió un error inesperado",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "La contraseña debe tener al menos 6 caracteres",
        variant: "destructive",
      });
      return;
    }

    registerMutation.mutate({
      username: formData.username,
      email: formData.email,
      password: formData.password
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce rounded-full"
              style={{
                width: Math.random() * 60 + 20 + 'px',
                height: Math.random() * 60 + 20 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: Math.random() > 0.5 
                  ? 'linear-gradient(45deg, #ff6b35, #f7931e)' 
                  : 'linear-gradient(45deg, #ffd23f, #ff6b35)',
                opacity: 0.7,
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 3 + 2) + 's'
              }}
            />
          ))}
        </div>
      </div>

      <Card className="w-full max-w-md bg-gray-900/90 border-gray-700 relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">Únete a CandyWeb</CardTitle>
          <CardDescription className="text-gray-300">
            Crea tu cuenta para acceder a todos nuestros juegos de idiomas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? "Creando cuenta..." : "Crear Cuenta"}
            </Button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-gray-400">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-orange-500 hover:text-orange-400">
                Inicia sesión
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
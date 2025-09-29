import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";
import { Crown, Star, Zap, Headphones } from "lucide-react";

export default function SubscriptionPage() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Handle Mercado Pago redirects
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    // Payment parameters removed as unused
    
    if (status) {
      switch (status) {
        case 'success':
          toast({
            title: "¡Pago Exitoso!",
            description: "Tu suscripción Premium ha sido activada. Los fondos se depositaron en Cami.abi..",
          });
          // Refresh user data
          queryClient.invalidateQueries({ queryKey: ["/api/user-info"] });
          queryClient.invalidateQueries({ queryKey: ["/api/user"] });
          // Redirect to home after a delay
          setTimeout(() => setLocation("/"), 3000);
          break;
        case 'failure':
          toast({
            title: "Pago Falló",
            description: "Hubo un problema con tu pago. Puedes intentar nuevamente.",
            variant: "destructive",
          });
          break;
        case 'pending':
          toast({
            title: "Pago Pendiente",
            description: "Tu pago está siendo procesado. Te notificaremos cuando se complete.",
          });
          break;
      }
      
      // Clean URL parameters
      if (window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, [toast, queryClient, setLocation]);

  const subscriptionMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/create-subscription");
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Redirigiendo a Mercado Pago",
        description: `Los fondos se depositarán automáticamente en la billetera virtual Cami.abi..`,
      });
      console.log("Payment preference created:", data);
      
      // Redirect to real MercadoPago checkout
      if (data.init_point) {
        // Show loading message
        toast({
          title: "Procesando pago...",
          description: "Serás redirigido a Mercado Pago para completar tu pago de forma segura.",
        });
        
        // Redirect after brief delay to show message
        setTimeout(() => {
          window.location.href = data.init_point;
        }, 1500);
      } else {
        toast({
          title: "Error",
          description: "No se pudo generar el enlace de pago. Intenta nuevamente.",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      let errorMessage = "Ocurrió un error inesperado";
      
      if (error.message.includes("MERCADOPAGO_ACCESS_TOKEN")) {
        errorMessage = "Configuración de pagos pendiente. Contacta al administrador.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error al procesar suscripción",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
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
            <CardTitle className="text-2xl font-bold text-white">Acceso Requerido</CardTitle>
            <CardDescription className="text-gray-300">
              Debes iniciar sesión para acceder a la suscripción premium
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Button 
              onClick={() => setLocation("/login")}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Iniciar Sesión
            </Button>
            <Button 
              onClick={() => setLocation("/register")}
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-800"
            >
              Crear Cuenta
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (user?.isPremium) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
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
            <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-white">¡Eres Premium!</CardTitle>
            <CardDescription className="text-gray-300">
              Ya tienes acceso completo a todas las funciones premium
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={() => setLocation("/")}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
            >
              Ir al Inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 relative">
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

      <div className="container mx-auto max-w-4xl pt-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Desbloquea Todo con
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-4">
              Premium
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accede a todos los juegos avanzados y funciones de práctica de habla por solo $500
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Plan Gratuito */}
          <Card className="bg-gray-800/50 border-gray-600 relative">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Star className="w-6 h-6 mr-2 text-gray-400" />
                Plan Gratuito
              </CardTitle>
              <CardDescription className="text-gray-300">
                Acceso básico a la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-white">$0</div>
                <div className="space-y-2">
                  <div className="flex items-center text-green-400">
                    ✓ 5 juegos básicos
                  </div>
                  <div className="flex items-center text-green-400">
                    ✓ Gramática básica
                  </div>
                  <div className="flex items-center text-green-400">
                    ✓ 5 idiomas disponibles
                  </div>
                  <div className="flex items-center text-red-400">
                    ✗ Juegos avanzados bloqueados
                  </div>
                  <div className="flex items-center text-red-400">
                    ✗ Sin práctica de habla
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan Premium */}
          <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/50 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
              RECOMENDADO
            </Badge>
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Crown className="w-6 h-6 mr-2 text-yellow-500" />
                Plan Premium
              </CardTitle>
              <CardDescription className="text-gray-300">
                Acceso completo a toda la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-white">$500</div>
                <div className="space-y-2">
                  <div className="flex items-center text-green-400">
                    <Zap className="w-4 h-4 mr-2" />
                    Todos los 10 juegos desbloqueados
                  </div>
                  <div className="flex items-center text-green-400">
                    <Headphones className="w-4 h-4 mr-2" />
                    Práctica de habla en gramática
                  </div>
                  <div className="flex items-center text-green-400">
                    ✓ Gramática completa y avanzada
                  </div>
                  <div className="flex items-center text-green-400">
                    ✓ 5 idiomas disponibles
                  </div>
                  <div className="flex items-center text-green-400">
                    ✓ Juegos avanzados:
                  </div>
                  <div className="ml-6 text-sm text-gray-300 space-y-1">
                    <div>• Las Compras de María</div>
                    <div>• Spiderman Train</div>
                    <div>• Treasure Hunt</div>
                    <div>• Word Soup</div>
                    <div>• Plant Care</div>
                  </div>
                </div>
                
                <Button
                  onClick={() => subscriptionMutation.mutate()}
                  disabled={subscriptionMutation.isPending}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold"
                  size="lg"
                >
                  {subscriptionMutation.isPending ? "Procesando..." : "Activar Premium"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Information */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/50 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            💳 Información de Pago
          </h3>
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-gray-300">
                Los pagos se procesan a través de <strong className="text-blue-300">Mercado Pago</strong>
              </p>
              <p className="text-sm text-gray-400">
                Alias de destino: <span className="font-mono bg-gray-800 px-2 py-1 rounded text-yellow-400">Cami.abi..</span>
              </p>
              <p className="text-xs text-gray-500">
                Procesamiento seguro y confiable
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={async () => {
                  try {
                    await apiRequest("POST", "/api/test-email");
                    toast({
                      title: "Email de Prueba Enviado",
                      description: "Revisa candyweb44@gmail.com para confirmar la configuración",
                    });
                  } catch (error: any) {
                    toast({
                      title: "Error al enviar email",
                      description: error.message || "No se pudo enviar el email de prueba",
                      variant: "destructive",
                    });
                  }
                }}
                className="border-blue-500 text-blue-300 hover:bg-blue-500/20"
              >
                🧪 Probar Notificaciones Email
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            ¿Qué incluye Premium?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-400">5 Juegos Exclusivos Desbloqueados</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Las Compras de María - Simulación de compras</li>
                <li>• Spiderman Train - Puzzle de direcciones</li>
                <li>• Treasure Hunt - Búsqueda de tesoros</li>
                <li>• Word Soup - Sopa de letras cultural</li>
                <li>• Plant Care - Simulación de jardinería</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-400">Práctica de Habla</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Reconocimiento de voz integrado</li>
                <li>• Ejercicios de pronunciación</li>
                <li>• Evaluación de fluidez</li>
                <li>• Corrección de pronunciación</li>
                <li>• Práctica de conversación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
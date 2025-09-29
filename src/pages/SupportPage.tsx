import { useState } from "react";
import { ChevronDown, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function SupportPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const faqs = [
    {
      id: "start",
      question: "¿Cómo empiezo a aprender un idioma?",
      answer: "Simplemente selecciona tu perfil de idioma preferido desde la página principal. Cada idioma tiene lecciones estructuradas que van desde lo básico hasta niveles avanzados."
    },
    {
      id: "offline",
      question: "¿Los juegos funcionan sin conexión?",
      answer: "Algunos juegos básicos funcionan sin conexión una vez descargados. Los juegos con reconocimiento de voz requieren conexión a internet."
    },
    {
      id: "switch",
      question: "¿Puedo cambiar de idioma cuando quiera?",
      answer: "¡Por supuesto! Puedes alternar entre todos los idiomas disponibles. Tu progreso se guarda independientemente para cada idioma."
    },
    {
      id: "certificates",
      question: "¿Hay certificados al completar niveles?",
      answer: "Sí, obtienes certificados digitales por completar cada nivel. También puedes ganar badges por logros especiales en los juegos."
    }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      handle: "@candy.web.lenguas", 
      color: "from-purple-600 to-purple-800",
      url: "https://www.instagram.com/candy.web.lenguas?igsh=c3YzNzR5cHhxM2Rk"
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      handle: "@candyweb lenguas", 
      color: "from-blue-600 to-blue-800",
      url: "https://www.facebook.com/share/1XVZmQtadZ/?mibextid=wwXIfr"
    },
    { 
      name: "TikTok", 
      icon: Twitter, 
      handle: "@candy_crash__", 
      color: "from-pink-600 to-pink-800",
      url: "https://www.tiktok.com/@candy_crash__?_t=ZM-8ybOa9jN0Gj&_r=1"
    }
  ];

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        toast({
          title: "¡Gracias por tu mensaje!",
          description: "Te responderemos pronto a candyweb44@gmail.com",
        });
        setContactForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar mensaje");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Soporte y Comunidad</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte. Únete a nuestra comunidad y mantente conectado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Preguntas Frecuentes</h3>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-gray-800/50 rounded-lg border border-gray-700">
                  <button 
                    className="w-full text-left p-6 flex items-center justify-between"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown 
                      className={`transition-transform duration-200 ${
                        expandedFAQ === faq.id ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Conecta con Nosotros</h3>
              
              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-gradient-to-r ${social.color}/20 rounded-lg border border-current/30 hover:border-current/50 transition-all group`}
                  >
                    <social.icon className="text-2xl mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm text-gray-400">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-xl font-semibold mb-4">Envíanos un Mensaje</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-gray-900/50 border-gray-600 focus:border-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-gray-900/50 border-gray-600 focus:border-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="bg-gray-900/50 border-gray-600 focus:border-red-500 resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

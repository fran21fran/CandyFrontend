import TeamMember from "@/components/TeamMember";
import { teamMembers } from "@/data/team";
import { Heart, Rocket, Users } from "lucide-react";

export default function TeamPage() {
  return (
    <section className="py-20 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Conoce Nuestro Equipo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Los apasionados creadores detrás de CandyWeb que hacen posible tu aventura de aprendizaje de idiomas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-center mb-8">Nuestros Valores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-2xl text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Pasión por la Educación</h4>
              <p className="text-gray-300 text-sm">Creemos que aprender debe ser divertido, accesible y transformador.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-2xl text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Innovación Constante</h4>
              <p className="text-gray-300 text-sm">Utilizamos la última tecnología para crear experiencias de aprendizaje únicas.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-2xl text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Comunidad Global</h4>
              <p className="text-gray-300 text-sm">Conectamos culturas y personas a través del poder del lenguaje.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

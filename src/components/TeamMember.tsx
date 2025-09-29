import { TeamMember as TeamMemberType } from "@/data/team";
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
        {member.image ? (
          <img 
            src={member.image} 
            alt={`${member.name} headshot`}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>
        )}
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-orange-400 font-medium mb-3">{member.role}</p>
        <p className="text-gray-300 text-sm mb-4">{member.description}</p>
        
        <div className="flex justify-center space-x-3">
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.social.twitter && (
            <a 
              href={member.social.twitter} 
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.social.github && (
            <a 
              href={member.social.github} 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
        
        {!member.image && (
          <div className="mt-4 p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
            <p className="text-orange-300 text-xs">Espacio reservado para imagen</p>
          </div>
        )}
      </div>
    </div>
  );
}

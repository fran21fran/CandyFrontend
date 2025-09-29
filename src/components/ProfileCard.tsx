import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProfileCardProps {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
}

export default function ProfileCard({ 
  title, 
  description, 
  details, 
  icon, 
  href, 
  gradient 
}: ProfileCardProps) {
  return (
    <Link href={href}>
      <div className={`group cursor-pointer transform transition-all duration-300 hover:scale-105`}>
        <div className={`${gradient} rounded-xl p-8 h-64 flex flex-col justify-between relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div>
            <div className="text-4xl mb-4 text-white/90">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
          <div className="flex items-center text-white/70">
            <span className="text-xs">{details}</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}

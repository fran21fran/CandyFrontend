interface GameIconProps {
  className?: string;
}

export const FootballIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="45" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2"/>
    <path d="M35 35 Q50 25 65 35 Q70 50 65 65 Q50 75 35 65 Q30 50 35 35" fill="white" opacity="0.8"/>
    <circle cx="45" cy="45" r="3" fill="#2E7D32"/>
    <circle cx="55" cy="55" r="3" fill="#2E7D32"/>
    <path d="M25 25 L75 75 M75 25 L25 75" stroke="white" strokeWidth="1" opacity="0.3"/>
  </svg>
);

export const VacationIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="10" y="60" width="80" height="20" fill="#FFB300" rx="2"/>
    <circle cx="20" cy="20" r="12" fill="#FF9800"/>
    <path d="M5 40 Q25 30 45 40 Q65 50 85 40 Q95 45 95 50 L5 50 Z" fill="#29B6F6"/>
    <path d="M30 25 Q35 15 40 25 Q45 35 40 45 Q35 35 30 25" fill="#4CAF50"/>
    <circle cx="70" cy="35" r="3" fill="white"/>
    <circle cx="75" cy="30" r="2" fill="white"/>
  </svg>
);

export const ArtIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="20" y="30" width="60" height="40" fill="white" stroke="#424242" strokeWidth="2" rx="3"/>
    <circle cx="35" cy="45" r="8" fill="#E91E63"/>
    <rect x="50" y="37" width="15" height="16" fill="#2196F3"/>
    <path d="M70 37 L85 45 L70 53 Z" fill="#4CAF50"/>
    <rect x="15" y="75" width="70" height="8" fill="#795548" rx="2"/>
    <circle cx="25" cy="20" r="3" fill="#FF5722"/>
    <circle cx="35" cy="15" r="3" fill="#9C27B0"/>
    <circle cx="45" cy="18" r="3" fill="#FFEB3B"/>
  </svg>
);

export const DogIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="55" rx="25" ry="20" fill="#8D6E63"/>
    <circle cx="50" cy="40" r="18" fill="#8D6E63"/>
    <ellipse cx="35" cy="32" rx="8" ry="12" fill="#8D6E63"/>
    <ellipse cx="65" cy="32" rx="8" ry="12" fill="#8D6E63"/>
    <circle cx="45" cy="38" r="2" fill="black"/>
    <circle cx="55" cy="38" r="2" fill="black"/>
    <ellipse cx="50" cy="45" rx="3" ry="2" fill="black"/>
    <path d="M47 47 Q50 50 53 47" stroke="black" strokeWidth="1" fill="none"/>
    <ellipse cx="40" cy="70" rx="6" ry="10" fill="#8D6E63"/>
    <ellipse cx="60" cy="70" rx="6" ry="10" fill="#8D6E63"/>
  </svg>
);

export const ShoppingIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="20" y="35" width="60" height="45" fill="#E1F5FE" stroke="#0288D1" strokeWidth="2" rx="3"/>
    <circle cx="30" cy="85" r="4" fill="#424242"/>
    <circle cx="70" cy="85" r="4" fill="#424242"/>
    <path d="M35 35 L35 25 Q35 15 45 15 L55 15 Q65 15 65 25 L65 35" stroke="#0288D1" strokeWidth="2" fill="none"/>
    <rect x="25" y="45" width="10" height="8" fill="#F44336"/>
    <rect x="40" y="50" width="8" height="6" fill="#4CAF50"/>
    <rect x="55" y="47" width="12" height="10" fill="#FF9800"/>
  </svg>
);

export const SpiderIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="50" rx="15" ry="12" fill="#D32F2F"/>
    <circle cx="50" cy="45" r="8" fill="#B71C1C"/>
    <circle cx="47" cy="42" r="1.5" fill="white"/>
    <circle cx="53" cy="42" r="1.5" fill="white"/>
    <path d="M20 30 Q35 40 50 45" stroke="#424242" strokeWidth="2"/>
    <path d="M20 50 Q35 50 50 50" stroke="#424242" strokeWidth="2"/>
    <path d="M20 70 Q35 60 50 55" stroke="#424242" strokeWidth="2"/>
    <path d="M80 30 Q65 40 50 45" stroke="#424242" strokeWidth="2"/>
    <path d="M80 50 Q65 50 50 50" stroke="#424242" strokeWidth="2"/>
    <path d="M80 70 Q65 60 50 55" stroke="#424242" strokeWidth="2"/>
  </svg>
);

export const TreasureIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="25" y="45" width="50" height="35" fill="#8D6E63" stroke="#5D4037" strokeWidth="2" rx="3"/>
    <rect x="20" y="50" width="60" height="5" fill="#FFB300"/>
    <circle cx="50" cy="40" r="8" fill="#FFD700" stroke="#FF8F00" strokeWidth="2"/>
    <rect x="48" y="35" width="4" height="10" fill="#FF8F00"/>
    <circle cx="35" cy="65" r="3" fill="#FFD700"/>
    <circle cx="50" cy="70" r="3" fill="#FFD700"/>
    <circle cx="65" cy="63" r="3" fill="#FFD700"/>
    <path d="M30 20 Q50 10 70 20" stroke="#8D6E63" strokeWidth="3" fill="none"/>
  </svg>
);

export const PlantIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="40" y="70" width="20" height="25" fill="#8D6E63" rx="10"/>
    <ellipse cx="50" cy="70" rx="25" ry="8" fill="#4CAF50"/>
    <circle cx="50" cy="45" r="12" fill="#FFD600"/>
    <path d="M38 45 Q30 35 35 25 Q45 30 50 45" fill="#4CAF50"/>
    <path d="M62 45 Q70 35 65 25 Q55 30 50 45" fill="#4CAF50"/>
    <path d="M50 33 Q40 25 45 15 Q55 20 50 33" fill="#4CAF50"/>
    <path d="M50 33 Q60 25 55 15 Q45 20 50 33" fill="#4CAF50"/>
    <circle cx="47" cy="42" r="2" fill="white"/>
    <circle cx="53" cy="48" r="2" fill="white"/>
  </svg>
);

export const WordSoupIcon = ({ className = "w-16 h-16" }: GameIconProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="15" y="25" width="70" height="50" fill="white" stroke="#424242" strokeWidth="2" rx="3"/>
    <line x1="25" y1="35" x2="35" y2="35" stroke="#2196F3" strokeWidth="2"/>
    <line x1="45" y1="35" x2="55" y2="35" stroke="#F44336" strokeWidth="2"/>
    <line x1="65" y1="35" x2="75" y2="35" stroke="#4CAF50" strokeWidth="2"/>
    <line x1="25" y1="45" x2="35" y2="45" stroke="#FF9800" strokeWidth="2"/>
    <line x1="45" y1="45" x2="55" y2="45" stroke="#9C27B0" strokeWidth="2"/>
    <line x1="65" y1="45" x2="75" y2="45" stroke="#00BCD4" strokeWidth="2"/>
    <line x1="25" y1="55" x2="35" y2="55" stroke="#795548" strokeWidth="2"/>
    <line x1="45" y1="55" x2="55" y2="55" stroke="#E91E63" strokeWidth="2"/>
    <line x1="65" y1="55" x2="75" y2="55" stroke="#607D8B" strokeWidth="2"/>
    <circle cx="40" cy="40" r="8" fill="none" stroke="#FFD600" strokeWidth="2"/>
  </svg>
);
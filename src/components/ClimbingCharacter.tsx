
import { Mountain, User } from 'lucide-react';

interface ClimbingCharacterProps {
  scrollY: number;
}

export const ClimbingCharacter = ({ scrollY }: ClimbingCharacterProps) => {
  // Calculate climb progress based on scroll position
  const maxScroll = 4000; // Approximate total scrollable height
  const progress = Math.min(scrollY / maxScroll, 1);
  
  // Position climber from bottom to top of viewport
  const climberPosition = 90 - (progress * 80); // Start at 90% from top, end at 10%
  
  // Change background opacity based on altitude
  const backgroundOpacity = 0.1 + (progress * 0.3);
  
  // Rope length changes with progress
  const ropeLength = 20 + (progress * 100);

  return (
    <div className="fixed right-8 top-0 h-screen w-16 pointer-events-none z-20">
      {/* Mountain background that gets more prominent as we climb */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(120, 113, 108, ${backgroundOpacity}) 0%,
            rgba(168, 162, 158, ${backgroundOpacity * 0.7}) 50%,
            rgba(214, 211, 209, ${backgroundOpacity * 0.5}) 100%)`,
        }}
      />
      
      {/* Climbing rope */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-stone-400 to-stone-600 rounded-full"
        style={{
          height: `${ropeLength}%`,
          top: '0%',
        }}
      />
      
      {/* Climber */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out"
        style={{
          top: `${climberPosition}%`,
        }}
      >
        <div className="relative">
          {/* Climber avatar */}
          <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-forest-700 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          
          {/* Climbing gear */}
          <div className="absolute -right-1 top-1 w-2 h-2 bg-carabiner-500 rounded-full shadow-sm" />
          <div className="absolute -left-1 top-2 w-1.5 h-1.5 bg-sunset-500 rounded-full shadow-sm" />
          
          {/* Progress indicator */}
          <div className="absolute -right-8 top-0 text-xs text-stone-600 font-medium whitespace-nowrap">
            {Math.round(progress * 100)}%
          </div>
        </div>
      </div>
      
      {/* Checkpoint markers */}
      {[0.25, 0.5, 0.75].map((checkpoint, index) => (
        <div
          key={index}
          className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md transition-all duration-300 ${
            progress >= checkpoint 
              ? 'bg-sunset-500 scale-110' 
              : 'bg-stone-300 scale-100'
          }`}
          style={{
            top: `${90 - (checkpoint * 80)}%`,
          }}
        />
      ))}
      
      {/* Summit marker */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          progress >= 0.9 ? 'scale-125 animate-pulse' : 'scale-100'
        }`}
        style={{ top: '5%' }}
      >
        <Mountain className={`h-6 w-6 ${progress >= 0.9 ? 'text-sunset-500' : 'text-stone-400'}`} />
      </div>
    </div>
  );
};

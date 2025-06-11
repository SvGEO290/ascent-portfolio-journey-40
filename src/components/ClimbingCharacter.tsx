
import { Mountain, User, Anchor } from 'lucide-react';

interface ClimbingCharacterProps {
  scrollY: number;
}

export const ClimbingCharacter = ({ scrollY }: ClimbingCharacterProps) => {
  // Calculate climb progress based on scroll position - improved for smoother experience
  const maxScroll = 5000; // Increased for better pacing
  const progress = Math.min(scrollY / maxScroll, 1);
  
  // Position climber from bottom to top of viewport - better positioning
  const climberPosition = 85 - (progress * 70); // Start at 85% from top, end at 15%
  
  // Change background opacity based on altitude
  const backgroundOpacity = 0.15 + (progress * 0.4);
  
  // Rope length changes with progress
  const ropeLength = 25 + (progress * 90);

  // Calculate slight swaying motion - smoother animation
  const swayOffset = Math.sin(scrollY * 0.005) * 3;

  return (
    <div className="fixed right-6 top-0 h-screen w-20 pointer-events-none z-20">
      {/* Enhanced mountain background with gradient */}
      <div 
        className="absolute inset-0 rounded-l-3xl overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(87, 83, 78, ${backgroundOpacity}) 0%,
            rgba(120, 113, 108, ${backgroundOpacity * 0.9}) 25%,
            rgba(168, 162, 158, ${backgroundOpacity * 0.7}) 60%,
            rgba(214, 211, 209, ${backgroundOpacity * 0.5}) 100%)`,
          boxShadow: `inset 6px 0 12px rgba(0, 0, 0, ${backgroundOpacity * 0.4})`,
        }}
      />
      
      {/* Climbing rope with texture */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-2 rounded-full shadow-lg"
        style={{
          height: `${ropeLength}%`,
          top: '0%',
          background: `linear-gradient(45deg, 
            #a8a29e 25%, 
            #d6d3d1 25%, 
            #d6d3d1 50%, 
            #a8a29e 50%, 
            #a8a29e 75%, 
            #d6d3d1 75%, 
            #d6d3d1)`,
          backgroundSize: '5px 5px',
        }}
      />
      
      {/* Rope anchor at top */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 top-0">
        <Anchor className="h-5 w-5 text-stone-600 animate-rope-swing" />
      </div>
      
      {/* Enhanced Climber */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out"
        style={{
          top: `${climberPosition}%`,
          transform: `translateX(calc(-50% + ${swayOffset}px))`,
        }}
      >
        <div className="relative">
          {/* Climber avatar with gear */}
          <div className="relative w-11 h-11 bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700 rounded-full border-4 border-white shadow-xl flex items-center justify-center group">
            <User className="h-6 w-6 text-white" />
            
            {/* Climbing helmet shine */}
            <div className="absolute top-1.5 left-2.5 w-2.5 h-1.5 bg-white/50 rounded-full" />
            
            {/* Progress glow effect */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, rgba(239, 116, 64, ${progress * 0.7}) 0%, transparent 70%)`,
              }}
            />
          </div>
          
          {/* Enhanced climbing gear */}
          <div className="absolute -right-2 top-1.5 w-3 h-3 bg-gradient-to-br from-carabiner-500 to-carabiner-600 rounded-sm shadow-md transform rotate-12" />
          <div className="absolute -left-2 top-2.5 w-2.5 h-2.5 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-full shadow-md" />
          <div className="absolute -right-1 bottom-0 w-2 h-4 bg-gradient-to-b from-stone-600 to-stone-700 rounded-sm shadow-md" />
          
          {/* Chalk bag */}
          <div className="absolute -left-2.5 bottom-1 w-3.5 h-2.5 bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm shadow-md" />
          
          {/* Dynamic progress indicator - improved positioning */}
          <div className="absolute -right-16 top-0 flex items-center space-x-3">
            <div className="text-sm text-stone-700 font-bold bg-white/90 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-stone-200">
              {Math.round(progress * 100)}%
            </div>
            {progress > 0.8 && (
              <div className="animate-bounce">
                <Mountain className="h-4 w-4 text-sunset-500" />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced checkpoint markers with animations */}
      {[0.25, 0.5, 0.75].map((checkpoint, index) => (
        <div
          key={index}
          className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-3 border-white shadow-xl transition-all duration-500 ${
            progress >= checkpoint 
              ? 'bg-gradient-to-br from-sunset-400 to-sunset-600 scale-125 animate-pulse' 
              : 'bg-gradient-to-br from-stone-300 to-stone-400 scale-100'
          }`}
          style={{
            top: `${85 - (checkpoint * 70)}%`,
            boxShadow: progress >= checkpoint 
              ? '0 0 16px rgba(251, 146, 60, 0.7)' 
              : '0 3px 6px rgba(0, 0, 0, 0.15)',
          }}
        >
          {progress >= checkpoint && (
            <div className="absolute inset-0 bg-sunset-400 rounded-full animate-ping opacity-40" />
          )}
        </div>
      ))}
      
      {/* Enhanced summit marker */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          progress >= 0.9 ? 'scale-150 animate-bounce' : 'scale-100'
        }`}
        style={{ top: '8%' }}
      >
        <div className="relative">
          <Mountain 
            className={`h-8 w-8 transition-colors duration-500 ${
              progress >= 0.9 ? 'text-sunset-500' : 'text-stone-400'
            }`} 
          />
          {progress >= 0.9 && (
            <>
              <div className="absolute inset-0 bg-sunset-400 rounded-full animate-ping opacity-50" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse shadow-xl" />
            </>
          )}
        </div>
      </div>
      
      {/* Wind effect particles - improved positioning */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"
          style={{
            top: `${15 + i * 20}%`,
            left: `${25 + i * 12}%`,
            transform: `translateX(${Math.sin(scrollY * 0.015 + i) * 12}px)`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
};

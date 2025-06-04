
import { Mountain, User, Anchor } from 'lucide-react';

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

  // Calculate slight swaying motion
  const swayOffset = Math.sin(scrollY * 0.01) * 2;

  return (
    <div className="fixed right-8 top-0 h-screen w-16 pointer-events-none z-20">
      {/* Enhanced mountain background with gradient */}
      <div 
        className="absolute inset-0 rounded-l-3xl overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(87, 83, 78, ${backgroundOpacity}) 0%,
            rgba(120, 113, 108, ${backgroundOpacity * 0.8}) 30%,
            rgba(168, 162, 158, ${backgroundOpacity * 0.6}) 70%,
            rgba(214, 211, 209, ${backgroundOpacity * 0.4}) 100%)`,
          boxShadow: `inset 4px 0 8px rgba(0, 0, 0, ${backgroundOpacity * 0.3})`,
        }}
      />
      
      {/* Climbing rope with texture */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-1.5 rounded-full shadow-sm"
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
          backgroundSize: '4px 4px',
        }}
      />
      
      {/* Rope anchor at top */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-0">
        <Anchor className="h-4 w-4 text-stone-600 animate-rope-swing" />
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
          <div className="relative w-9 h-9 bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700 rounded-full border-3 border-white shadow-xl flex items-center justify-center group">
            <User className="h-5 w-5 text-white" />
            
            {/* Climbing helmet shine */}
            <div className="absolute top-1 left-2 w-2 h-1 bg-white/40 rounded-full" />
            
            {/* Progress glow effect */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, rgba(239, 116, 64, ${progress * 0.6}) 0%, transparent 70%)`,
              }}
            />
          </div>
          
          {/* Enhanced climbing gear */}
          <div className="absolute -right-1.5 top-1 w-2.5 h-2.5 bg-gradient-to-br from-carabiner-500 to-carabiner-600 rounded-sm shadow-sm transform rotate-12" />
          <div className="absolute -left-1.5 top-2 w-2 h-2 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-full shadow-sm" />
          <div className="absolute -right-0.5 bottom-0 w-1.5 h-3 bg-gradient-to-b from-stone-600 to-stone-700 rounded-sm shadow-sm" />
          
          {/* Chalk bag */}
          <div className="absolute -left-2 bottom-1 w-3 h-2 bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm shadow-sm" />
          
          {/* Dynamic progress indicator */}
          <div className="absolute -right-12 top-0 flex items-center space-x-2">
            <div className="text-xs text-stone-700 font-bold bg-white/80 px-2 py-1 rounded-full shadow-sm backdrop-blur-sm">
              {Math.round(progress * 100)}%
            </div>
            {progress > 0.8 && (
              <div className="animate-bounce">
                <Mountain className="h-3 w-3 text-sunset-500" />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced checkpoint markers with animations */}
      {[0.25, 0.5, 0.75].map((checkpoint, index) => (
        <div
          key={index}
          className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-500 ${
            progress >= checkpoint 
              ? 'bg-gradient-to-br from-sunset-400 to-sunset-600 scale-125 animate-pulse' 
              : 'bg-gradient-to-br from-stone-300 to-stone-400 scale-100'
          }`}
          style={{
            top: `${90 - (checkpoint * 80)}%`,
            boxShadow: progress >= checkpoint 
              ? '0 0 12px rgba(251, 146, 60, 0.6)' 
              : '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {progress >= checkpoint && (
            <div className="absolute inset-0 bg-sunset-400 rounded-full animate-ping opacity-30" />
          )}
        </div>
      ))}
      
      {/* Enhanced summit marker */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          progress >= 0.9 ? 'scale-150 animate-bounce' : 'scale-100'
        }`}
        style={{ top: '5%' }}
      >
        <div className="relative">
          <Mountain 
            className={`h-7 w-7 transition-colors duration-500 ${
              progress >= 0.9 ? 'text-sunset-500' : 'text-stone-400'
            }`} 
          />
          {progress >= 0.9 && (
            <>
              <div className="absolute inset-0 bg-sunset-400 rounded-full animate-ping opacity-40" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg" />
            </>
          )}
        </div>
      </div>
      
      {/* Wind effect particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
          style={{
            top: `${20 + i * 25}%`,
            left: `${30 + i * 15}%`,
            transform: `translateX(${Math.sin(scrollY * 0.02 + i) * 10}px)`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

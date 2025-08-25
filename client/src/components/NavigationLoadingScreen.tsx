import  { useState, useEffect } from 'react';

interface NavigationLoadingScreenProps {
  onLoadingComplete: () => void;
  minLoadTime?: number;
}

export default function NavigationLoadingScreen({ onLoadingComplete, minLoadTime = 1500 }: NavigationLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    // Faster progress for navigation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 25 + 10; // Faster increment between 10-35
      });
    }, 80); // Faster interval

    // Ensure minimum loading time
    const minTimeTimer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadTime) {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 300); // Faster fade out
        }, minLoadTime - elapsedTime);
      } else {
        setIsVisible(false);
        setTimeout(onLoadingComplete, 300);
      }
    }, minLoadTime);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minTimeTimer);
    };
  }, [onLoadingComplete, minLoadTime]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-[9999] flex items-center justify-center">
      {/* Simplified Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/15 to-indigo-400/15 rounded-full animate-spin"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon - Smaller for navigation */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-3 relative">
            {/* Animated Robot Icon */}
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Company Name - Smaller */}
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            EPIC
          </span>
          <span className="text-white"> AUTOMATIONS</span>
        </h1>

        {/* Loading Text */}
        <p className="text-blue-200 text-base md:text-lg mb-6 animate-pulse">
          Loading page...
        </p>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto mb-4">
          <div className="bg-blue-800/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-blue-200 text-sm">
          {Math.round(progress)}%
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-3 space-x-1">
          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Navigation Messages */}
        <div className="mt-6 text-blue-300 text-xs">
          {progress < 30 && "Preparing page content..."}
          {progress >= 30 && progress < 60 && "Loading components..."}
          {progress >= 60 && progress < 90 && "Finalizing layout..."}
          {progress >= 90 && "Almost ready!"}
        </div>
      </div>

      {/* Corner Decorations - Smaller */}
      <div className="absolute top-6 left-6 w-12 h-12 border-2 border-orange-400/20 rounded-lg animate-spin"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border-2 border-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-indigo-400/20 rounded-lg animate-bounce"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-purple-400/20 rounded-full animate-spin"></div>
    </div>
  );
}

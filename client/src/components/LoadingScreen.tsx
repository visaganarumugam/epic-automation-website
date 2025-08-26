import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minLoadTime?: number; // Minimum time to show loading screen (in ms)
}

export default function LoadingScreen({ onLoadingComplete, minLoadTime = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload critical images
        const criticalImages = [
          '/images/herosecImages/epicbghero1.png',
          '/images/herosecImages/Spm_Machine.png',
          '/images/navdropimages/MachineTending.png',
          '/images/navdropimages/Palletizing.png',
          '/images/navdropimages/deburring.png',
          '/images/navdropimages/CNC_Automation.jpg',
          '/images/Packing_Machine.jpg',
          '/images/Automation-Control-Panels.jpg',
          '/images/products.jpg',
          '/images/Robot_Programming.jpg',
          '/images/plc_and_hmi.jpg'
        ];

        // Preload images in parallel
        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });
        });

        // Wait for all images to load
        await Promise.allSettled(imagePromises);
        
        // Simulate component initialization
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.log('Some resources failed to preload, continuing...');
      }
    };

    // Enhanced loading progress with stages
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        
        // Different progress rates for different stages
        let increment;
        if (prev < 30) {
          // Initial loading (fast)
          increment = Math.random() * 8 + 3;
          setLoadingStage(0);
        } else if (prev < 60) {
          // Resource loading (medium)
          increment = Math.random() * 6 + 2;
          setLoadingStage(1);
        } else if (prev < 85) {
          // Component initialization (slower)
          increment = Math.random() * 4 + 1;
          setLoadingStage(2);
        } else {
          // Final preparation (slowest)
          increment = Math.random() * 2 + 0.5;
          setLoadingStage(3);
        }
        
        return Math.min(prev + increment, 100);
      });
    }, 80);

    // Start preloading
    preloadResources();

    // Ensure minimum loading time
    const minTimeTimer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadTime) {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 500); // Wait for fade out animation
        }, minLoadTime - elapsedTime);
      } else {
        setIsVisible(false);
        setTimeout(onLoadingComplete, 500);
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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full animate-spin"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            {/* Animated Robot Icon */}
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            EPIC
          </span>
          <span className="text-white"> AUTOMATIONS</span>
        </h1>

        {/* Loading Text */}
        <p className="text-blue-200 text-lg md:text-xl mb-8 animate-pulse">
          Initializing Robotics & Automation Solutions...
        </p>

        {/* Progress Bar */}
        <div className="w-80 md:w-96 mx-auto mb-6">
          <div className="bg-blue-800/50 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-blue-200 text-sm">
          Loading... {Math.round(progress)}%
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading Messages */}
        <div className="mt-8 text-blue-300 text-sm">
          {loadingStage === 0 && "Initializing EPIC Automations..."}
          {loadingStage === 1 && "Loading robotics & automation resources..."}
          {loadingStage === 2 && "Preparing interactive components..."}
          {loadingStage === 3 && "Finalizing your experience..."}
          {progress >= 100 && "Ready to automate! 🚀"}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-orange-400/30 rounded-lg animate-spin"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-10 h-10 border-2 border-indigo-400/30 rounded-lg animate-bounce"></div>
      <div className="absolute bottom-8 right-8 w-14 h-14 border-2 border-purple-400/30 rounded-full animate-spin"></div>
    </div>
  );
}

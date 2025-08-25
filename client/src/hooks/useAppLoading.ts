import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAppLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Handle initial app load
  useEffect(() => {
    // Check if this is the first visit
    const isFirstVisit = !sessionStorage.getItem('appHasLoaded');
    
    if (isFirstVisit) {
      // First visit - show loading screen
      setIsLoading(true);
      
      // Simulate loading time (minimum 2 seconds)
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasLoaded(true);
        sessionStorage.setItem('appHasLoaded', 'true');
      }, 2500); // 2.5 seconds for first visit

      return () => clearTimeout(timer);
    } else {
      // Returning visitor - quick load
      setIsLoading(false);
      setHasLoaded(true);
    }
  }, []);

  // Handle page navigation
  useEffect(() => {
    if (hasLoaded) {
      // Show loading screen for page navigation
      setIsNavigating(true);
      
      // Simulate page loading time
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 1500); // 1.5 seconds for page navigation

      return () => clearTimeout(timer);
    }
  }, [location.pathname, hasLoaded]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
  };

  return {
    isLoading,
    hasLoaded,
    isNavigating,
    handleLoadingComplete
  };
}

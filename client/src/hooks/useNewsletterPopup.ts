import { useState, useEffect } from 'react';

export function useNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed
    const isSubscribed = localStorage.getItem('newsletterSubscribed') === 'true';
    
    if (!isSubscribed) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    showPopup,
    closePopup
  };
} 
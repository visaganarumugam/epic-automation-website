import { useState, useEffect } from 'react';

export function useNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed
    const isSubscribed = localStorage.getItem('newsletterSubscribed') === 'true';
    
    if (!isSubscribed) {
      // Show popup after 70 seconds for better UX
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 70000); // 70 seconds delay

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
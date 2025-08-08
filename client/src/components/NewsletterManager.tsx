import React, { useState } from 'react';
import { useNewsletterPopup } from '../hooks/useNewsletterPopup';
import NewsletterPopup from './NewsletterPopup';
import SuccessToast from './SuccessToast';

export default function NewsletterManager() {
  const { showPopup, closePopup } = useNewsletterPopup();
  const [showToast, setShowToast] = useState(false);

  const handleSubscribeSuccess = () => {
    console.log('Newsletter subscription successful!');
    // Show success toast
    setShowToast(true);
    // Close popup
    closePopup();
  };

  const handleClosePopup = () => {
    // Just close the popup without showing success toast
    closePopup();
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <NewsletterPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup}
        onSubscribeSuccess={handleSubscribeSuccess}
      />
      
      <SuccessToast
        message="🎉 Successfully subscribed to our newsletter! Check your inbox for updates."
        isVisible={showToast}
        onClose={handleCloseToast}
      />
    </>
  );
} 
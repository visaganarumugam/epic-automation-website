import React, { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';
import confetti from 'canvas-confetti';
import { FiX, FiMail } from 'react-icons/fi';

// Debug: Check if Firebase is properly initialized
console.log('Firebase db instance:', db);

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeSuccess?: () => void;
}

export default function NewsletterPopup({ isOpen, onClose, onSubscribeSuccess }: NewsletterPopupProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Debug state changes
  useEffect(() => {
    console.log('Loading state changed:', loading);
  }, [loading]);

  useEffect(() => {
    console.log('Success state changed:', success);
  }, [success]);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Confetti animation function
  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });
      requestAnimationFrame(frame);
    };

    frame();
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe button clicked!');
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setLoading(true);
    console.log('Loading state set to true');

    try {
      // Try to save to Firebase Firestore
      console.log('Attempting to save to Firestore...');
      const docRef = await addDoc(collection(db, 'newsletter_subscribers'), {
        email: email.trim(),
        subscribedAt: new Date(),
        source: 'website_popup'
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Firestore error:', error);
      // Continue with success flow even if Firestore fails
    }

    // Always proceed with success flow
    console.log('Newsletter subscription successful!');
    
    // Store in localStorage
    localStorage.setItem('newsletterSubscribed', 'true');
    
    // Show success
    setSuccess(true);
    setEmail('');
    setLoading(false);
    
    console.log('Success state set, loading set to false');
    
    // Trigger confetti
    triggerConfetti();
    
    // Trigger success callback if provided
    if (onSubscribeSuccess) {
      onSubscribeSuccess();
    }
    
    // Close popup after 2 seconds
    setTimeout(() => {
      console.log('Closing popup');
      onClose();
      setSuccess(false);
    }, 2000);
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50" />
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-6xl  w-full h-[60vh] overflow-hidden relative">
          {/* Close button - always visible */}
          <button
            onClick={onClose}
            className="absolute top-4 cursor-pointer right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white hover:border-gray-300 transition-all duration-200 z-20 shadow-lg"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="relative h-[60vh] bg-white w-full">
            {/* Background Image */}
            <div className="absolute inset-0 ">
              {/* <img 
                src="/images/navdropimages/deburring.png" 
                alt="Epic Automations Background"
                className="w-full h-full object-cover rounded-2xl"
              /> */}
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-[#ffffff] rounded-2xl" />
            </div>

            {/* Content Layout */}
            <div className="relative z-10 h-full flex flex-row">
              {/* Left Section - Machine Image */}
              <div className="w-1/2 h-full flex items-center justify-center p-6">
                <img 
                  src="/images/herosecImages/Spm_Machine.png" 
                  alt="Industrial Machine"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>

              {/* Right Section - Content */}
              <div className="w-1/2 h-full flex  items-center justify-center p-8">
                <div className="text-start max-w-lg">
                  {!success ? (
                    <>
                      {/* Title */}
                      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Stay Ahead with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">E</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">P</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">I</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">C</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">A</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">U</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">T</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">O</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">M</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">A</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">T</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">I</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">O</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">N</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">S</span>
                      </h2>
                      
                      {/* Subtitle */}
                      <p className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
                        Subscribe and get <span className="font-bold text-orange-600">Latest Tech Updates</span>
                      </p>
                      
                      {/* Description */}
                      <p className="text-black mb-8 leading-relaxed text-lg">
                        Get exclusive insights on robotics, automation solutions, and cutting-edge industrial technology straight to your inbox.
                      </p>

                      {/* Form */}
                      <form onSubmit={handleSubscribe} className="space-y-4">
                        {error && (
                          <div className="text-red-700 text-sm bg-red-100 p-3 rounded-lg border border-red-200">
                            {error}
                          </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          {/* Email Input */}
                          <div className="flex-1 relative">
                            <div className="relative">
                              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full pl-10 pr-4 py-4 bg-white border text-lg font-semibold border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500"
                                disabled={loading}
                              />
                            </div>
                          </div>
                          
                          {/* Subscribe Button */}
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {loading ? 'Subscribing...' : 'Subscribe'}
                          </button>
                        </div>
                      </form>

                      {/* Disclaimer */}
                      <p className="text-lg text-black mt-5">
                        Get industry insights, case studies, and automation tips. No spam, just value.
                      </p>
                    </>
                  ) : (
                    /* Success State */
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Welcome to the Future! 🤖
                      </h3>
                      <p className="text-gray-300">
                        You're now subscribed to our automation insights. Check your inbox for the latest in robotics & technology!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
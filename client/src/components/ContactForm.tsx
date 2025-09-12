import { useState } from 'react';
import { submitContactForm } from '../lib/firebase';
import type { ContactFormData } from '../lib/firebase';

interface ContactFormProps {
  source: string; // To track which page the form was submitted from
  className?: string;
  variant?: 'default' | 'help-center';
}

export default function ContactForm({ source, className = '', variant = 'default' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (variant === 'help-center') {
      if (!formData.firstName.trim()) {
        setErrorMessage('First name is required');
        return false;
      }
      if (!formData.lastName.trim()) {
        setErrorMessage('Last name is required');
        return false;
      }
    } else {
      if (!formData.firstName.trim()) {
        setErrorMessage('Name is required');
        return false;
      }
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage('Message box contains at least 10 words .');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setShowErrorPopup(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setShowErrorPopup(false);

    try {
      const contactData: ContactFormData = {
        name: variant === 'help-center' 
          ? `${formData.firstName.trim()} ${formData.lastName.trim()}`
          : formData.firstName.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        source: source
      };

      const result = await submitContactForm(contactData);
      
      if (result.error) {
        setSubmitStatus('error');
        setErrorMessage(result.error);
        setShowErrorPopup(true);
      } else {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred');
      setShowErrorPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Popup close handler
  const closeErrorPopup = () => setShowErrorPopup(false);

  if (variant === 'help-center') {
    return (

      <div className='relative'>
          {/* Blur overlay, shown only when error popup is visible */}
    {showErrorPopup && (
      <div
        className="absolute inset-0 z-20"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          background: 'rgba(255, 255, 255, 0.2)',
          pointerEvents: 'none'
        }}
      />
    )}

    {/* Popup dialog */}
  {showErrorPopup && (
    <div
      className="absolute z-30 top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto text-center"
      style={{
        transform: 'translate(-50%, -50%)',
        border: '1px solid black'  // Add this line for thick black border
      }}
    >
      <h3 className="font-semibold text-red-600 mb-2">Submission Error</h3>
      <p className="mb-4">{errorMessage}</p>
      {/* <p className="mb-4 text-sm text-gray-700">
        Ensure all required fields are correctly filled. Then try submitting again.
      </p> */}
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        onClick={closeErrorPopup}
      >
        Close
      </button>
    </div>
  )}
      <div className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100 ${className}`}>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Thank you! Your message has been sent successfully.</span>
              </div>
            </div>
          )}


          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Error: {errorMessage}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="firstname" className="text-sm sm:text-md font-semibold text-gray-700 mb-1 sm:mb-2 block">
                First name
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  id="firstname" 
                  name="firstName"
                  placeholder="First name here ..." 
                  type="text" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full pl-8 sm:pl-10 pr-3 h-10 sm:h-12 border border-gray-300 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-lg text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm sm:text-md font-semibold text-gray-700 mb-1 sm:mb-2 block">
                Last name
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  id="lastname" 
                  name="lastName"
                  placeholder="Last name here ..." 
                  type="text" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full pl-8 sm:pl-10 pr-3 h-10 sm:h-12 border border-gray-300 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-lg text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm sm:text-md font-semibold text-gray-700 mb-1 sm:mb-2 block">
              Email
            </label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input 
                id="email" 
                name="email"
                placeholder="Type your email here ..." 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-8 sm:pl-10 pr-3 h-10 sm:h-12 border border-gray-300 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-lg text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="text-sm sm:text-md font-semibold text-gray-700 mb-1 sm:mb-2 block">
              Phone number
            </label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <input 
                id="phone" 
                name="phone"
                placeholder="Type your phone number here ..." 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-8 sm:pl-10 pr-3 h-10 sm:h-12 border border-gray-300 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-lg text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm sm:text-md font-semibold text-gray-700 mb-1 sm:mb-2 block">
              Message
            </label>
            <div className="relative">
              <svg className="absolute left-3 top-3 text-gray-800 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <textarea 
                id="message" 
                name="message"
                placeholder="Message must be more than ten words ..." 
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-lg rounded-md resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-orange-600 transition-colors duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
      </div>
    );
  }

  // Default variant (for homepage, about, services pages)
  return (
    <div className="relative"> {/* Add this wrapper */}


    {/* Blur overlay, shown only when error popup is visible */}
    {showErrorPopup && (
      <div
        className="absolute inset-0 z-20"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          background: 'rgba(255, 255, 255, 0.2)',
          pointerEvents: 'none'
        }}
      />
    )}

    {/* Popup dialog */}
  {showErrorPopup && (
    <div
      className="absolute z-30 top-1/2 left-1/2 bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto text-center "
      style={{
        transform: 'translate(-50%, -50%)',
        border: '1px solid black'  // Add this line for thick black border
      }}
    >
      <h3 className="font-semibold text-red-600 mb-2">Submission Error</h3>
      <p className="mb-4">{errorMessage}</p>
      <p className="mb-4 text-sm text-gray-700">
        Please check your internet connection and ensure all required fields are correctly filled. Then try submitting again.
      </p>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        onClick={closeErrorPopup}
      >
        Close
      </button>
    </div>
  )}


    <form onSubmit={handleSubmit} className={`flex flex-col gap-2 bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-2 w-full ${className}`}>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Thank you! Your message has been sent successfully.</span>
          </div>
        </div>
      )}


      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Error: {errorMessage}</span>
          </div>
        </div>
      )}

      <input
        type="text"
        name="firstName"
        placeholder="Name"
        value={formData.firstName}
        onChange={handleInputChange}
        disabled={isSubmitting}
        className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-6 sm:py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff4f0f] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{fontFamily: 'Gilroy'}}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        disabled={isSubmitting}
        className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-6 sm:py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff4f0f] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{fontFamily: 'Gilroy'}}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        value={formData.message}
        onChange={handleInputChange}
        disabled={isSubmitting}
        className="h-[70%] bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 pt-4 sm:pt-0 py-6 sm:py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff4f0f] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        style={{fontFamily: 'Gilroy'}}
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-semibold text-lg py-4 rounded-xl shadow hover:bg-[#ff4f0f] transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        style={{fontFamily: 'Gilroy'}}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Submit'
        )}
      </button>
    </form>

        {/* Your existing popup modal container should remain outside this wrapper */}
  </div>
  );
}

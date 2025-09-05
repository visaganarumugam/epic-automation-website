"use client";
import TopNavbar from "./Navbar";
import { IconMail, IconHeart } from '@tabler/icons-react';
import ContactForm from '../components/ContactForm';
import { FiChevronsDown } from 'react-icons/fi';
import { useRef } from 'react';
import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';

// Example images for the hero section (replace with your own or use public URLs)
const heroImages = [
  { src: "/images/navdropimages/deburring.jpg", alt: "Deburring" },
  { src: "/images/navdropimages/palletizing.jpg", alt: "Palletizing" },
  { icon: <IconHeart className="w-8 h-8 text-black" />, alt: "Heart" },
  { src: "/images/MCB.jpg", alt: "Robot Programming" },
  { src: "/images/navdropimages/CNC_Automation.jpg", alt: "CNC Automation" },
];

export default function HelpCenter() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-white">
      <div className="fixed top-0 left-0 right-0 z-50"><TopNavbar /></div>
      {/* Hero Section with Orange Gradient */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[380px] md:min-h-[420px] bg-gradient-to-br from-orange-700 via-orange-400 to-orange-300 flex items-center justify-center overflow-hidden">
        {/* Decorative Dots */}
        <div className="absolute top-8 left-8 opacity-30">
          <svg width="60" height="60"><circle cx="6" cy="6" r="2" fill="#fff"/><circle cx="20" cy="6" r="2" fill="#fff"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="48" cy="6" r="2" fill="#fff"/><circle cx="6" cy="20" r="2" fill="#fff"/><circle cx="20" cy="20" r="2" fill="#fff"/><circle cx="34" cy="20" r="2" fill="#fff"/><circle cx="48" cy="20" r="2" fill="#fff"/></svg>
        </div>
        <div className="absolute top-8 right-8 opacity-30">
          <svg width="60" height="60"><circle cx="6" cy="6" r="2" fill="#fff"/><circle cx="20" cy="6" r="2" fill="#fff"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="48" cy="6" r="2" fill="#fff"/><circle cx="6" cy="20" r="2" fill="#fff"/><circle cx="20" cy="20" r="2" fill="#fff"/><circle cx="34" cy="20" r="2" fill="#fff"/><circle cx="48" cy="20" r="2" fill="#fff"/></svg>
        </div>
        {/* Hero Images/Icons */}
        {/* Leftmost */}
        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-24 bottom-20 sm:bottom-8 md:bottom-10 lg:top-50 z-20">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[0].src} alt={heroImages[0].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Left Center */}
        <div className="absolute left-1/4 bottom-0 md:left-1/4 md:bottom-4 z-20">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[1].src} alt={heroImages[1].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Center Icon */}
        <div className="absolute right-1/4 bottom-30 md:right-1/3 md:bottom-44 z-20">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg bg-white flex items-center justify-center">
            {heroImages[2].icon}
          </div>
        </div>
        {/* Right Center */}
        <div className="absolute right-1/4 bottom-0 md:right-1/6 md:top-34 z-20">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[3].src} alt={heroImages[3].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Rightmost */}
        <div className="absolute right-4 sm:right-6 md:right-8 lg:right-24 bottom-17 sm:bottom-8 md:bottom-10 lg:bottom-8 z-20">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[4].src} alt={heroImages[4].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Centered Content */}
        <FadeUpSection className="flex flex-col items-center justify-center z-30 px-4">
          <AnimatedSection
            customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center">Contact us</h1>
          </AnimatedSection>
          <AnimatedSection
            customAnimation={{ y: 30, opacity: 0, duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg mx-5 sm:mx-0 md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6 text-center max-w-xl px-2">
              Let's start something great together. Get in touch with one of the team today!
            </p>
          </AnimatedSection>
          <AnimatedSection
            customAnimation={{ y: 20, opacity: 0, duration: 0.6, delay: 0.6 }}
          >
            <FiChevronsDown 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white/80 animate-bounce cursor-pointer hover:text-white transition-colors" 
              onClick={scrollToContactForm}
            />
          </AnimatedSection>
        </FadeUpSection>
        {/* Hero Wave (bottom) */}
        <div ref={contactFormRef}  className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40.5px] md:h-[159px]">
            <path d="M0,40 Q360,120 720,60 Q1080,0 1440,80 L1440,120 L0,120 Z" fill="#fff" />
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <AnimatedSection 
        className="bg-white min-h-screen"
        customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get in touch</h2>
                
                {/* Phone */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-500 text-sm sm:text-md font-semibold mb-2">
                    Due to COVID-19, our full team are working remotely. <br className="hidden sm:block" /> Please email us or request a callback.
                  </p>
                  <a href="tel:+917402143821" className="text-orange-500 font-semibold text-lg sm:text-xl hover:text-orange-600">
                    +91 7402143821
                  </a>
                </div>

                {/* Email */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Email</h3>
                  <div className="space-y-1">
                    <a href="mailto:Sales@epicautoamtions.co.in" className="block text-orange-500 font-semibold text-base sm:text-lg md:text-xl hover:text-orange-600">
                    Sales@epicautoamtions.co.in
                    </a>
                    <a href="mailto:Epicautomations@gmail.com" className="block text-orange-500 font-semibold text-base sm:text-lg md:text-xl hover:text-orange-600">
                    Epicautomations@gmail.com
                    </a>
                    <a href="mailto:Visaganarumugam@epicautomation.co.in" className="block text-orange-500 font-semibold text-base sm:text-lg md:text-xl hover:text-orange-600">
                    Visaganarumugam@epicautomation.co.in
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Coimbatore Office</h3>
                    <p className="text-gray-500 text-sm sm:text-md font-semibold">
                    Epic Automations, Coimbatore
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm source="help-center-page" variant="help-center" />
          </div>
        </div>
        
        {/* Map Section */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-100 z-10">
          {/* Map Wave (top) */}
        <div className="absolute -top-1 rotate-180 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40.5px] md:h-[159px]">
            <path d="M0,40 Q360,120 720,60 Q1080,0 1440,80 L1440,120 L0,120 Z" fill="#fff" />
          </svg>
        </div>
          <div className="absolute inset-0">
          <iframe
            title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2424.5795426139857!2d76.967967!3d11.035615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590042c0ea6d%3A0x96eb8f8694606587!2sEPIC%20AUTOMATIONS!5e1!3m2!1sen!2sin!4v1754545901559!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
          ></iframe>
        </div>
          {/* Newsletter Signup Overlay */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 rounded-lg shadow-lg flex justify-center z-20 p-3 sm:p-4 md:p-6 max-w-full">
            <div className="flex flex-col sm:flex-row items-center bg-white p-3 px-4 rounded-xl w-full max-w-[800px] space-y-2 sm:space-y-0 sm:space-x-4">
              <IconMail className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="email"
                placeholder="Enter Your Email address"
                className="flex-1 border border-gray-300 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-lg rounded-md px-3 py-2 focus:outline-none focus:border-orange-500 text-sm sm:text-base w-full"
              />
              <button className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Get started
              </button>
              </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}


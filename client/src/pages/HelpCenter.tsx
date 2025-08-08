"use client";
// import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
// import { cn } from "../lib/utils";
import TopNavbar from "./Navbar";
import { IconMail, IconPhone, IconUser, IconMessage  , IconHeart } from '@tabler/icons-react';
import { FiChevronsDown } from 'react-icons/fi';
import { useRef } from 'react';

// Example images for the hero section (replace with your own or use public URLs)
const heroImages = [
  { src: "/images/slide3imgs/img1.JPG", alt: "Person 1" },
  { src: "/images/slide3imgs/img2.jpg", alt: "Person 2" },
  { icon: <IconHeart className="w-8 h-8 text-black" />, alt: "Heart" },
  { src: "/images/slide3imgs/img3.png", alt: "Person 3" },
  { src: "/images/roboticsimageabout.jpg", alt: "Person 4" },
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
    <>
      <div className="fixed top-0 left-0 right-0 z-50"><TopNavbar /></div>
      {/* Hero Section with Orange Gradient */}
      <div className="relative w-full h-[60vh] min-h-[420px] bg-gradient-to-br from-orange-700 via-orange-400 to-orange-300 flex items-center justify-center overflow-hidden">
        {/* Decorative Dots */}
        <div className="absolute top-8 left-8 opacity-30">
          <svg width="60" height="60"><circle cx="6" cy="6" r="2" fill="#fff"/><circle cx="20" cy="6" r="2" fill="#fff"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="48" cy="6" r="2" fill="#fff"/><circle cx="6" cy="20" r="2" fill="#fff"/><circle cx="20" cy="20" r="2" fill="#fff"/><circle cx="34" cy="20" r="2" fill="#fff"/><circle cx="48" cy="20" r="2" fill="#fff"/></svg>
        </div>
        <div className="absolute top-8 right-8 opacity-30">
          <svg width="60" height="60"><circle cx="6" cy="6" r="2" fill="#fff"/><circle cx="20" cy="6" r="2" fill="#fff"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="48" cy="6" r="2" fill="#fff"/><circle cx="6" cy="20" r="2" fill="#fff"/><circle cx="20" cy="20" r="2" fill="#fff"/><circle cx="34" cy="20" r="2" fill="#fff"/><circle cx="48" cy="20" r="2" fill="#fff"/></svg>
        </div>
        {/* Hero Images/Icons */}
        {/* Leftmost */}
        <div className="absolute left-8 bottom-10 md:left-24 md:top-50 z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[0].src} alt={heroImages[0].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Left Center */}
        <div className="absolute left-1/4 bottom-0 md:left-1/4 md:bottom-4 z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[1].src} alt={heroImages[1].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Center Icon */}
        <div className="absolute right-1/4 bottom-0 md:right-1/3 md:bottom-44 z-20">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
            {heroImages[2].icon}
          </div>
        </div>
        {/* Right Center */}
        <div className="absolute right-1/4 bottom-0 md:right-1/6 md:top-34 z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[3].src} alt={heroImages[3].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Rightmost */}
        <div className="absolute right-8 bottom-10 md:right-24 md:bottom-8 z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={heroImages[4].src} alt={heroImages[4].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center z-30">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">Contact us</h1>
          <p className="text-2xl md:text-2xl font-semibold text-white mb-6 text-center max-w-xl">
            Let's start something great together. Get in touch with one of the team today!
          </p>
          <FiChevronsDown 
            className="w-10 h-10 text-white/80 animate-bounce cursor-pointer hover:text-white transition-colors" 
            onClick={scrollToContactForm}
          />
        </div>
        {/* Hero Wave (bottom) */}
        <div ref={contactFormRef}  className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[90px] md:h-[159px]">
            <path d="M0,40 Q360,120 720,60 Q1080,0 1440,80 L1440,120 L0,120 Z" fill="#fff" />
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Information */}
            <div  className="space-y-8">
              <div>
                <h2  className="text-5xl font-bold text-gray-900 mb-6">Get in touch</h2>
                
                {/* Phone */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-500 text-md font-semibold mb-2">
                    Due to COVID-19, our full team are working remotely. <br /> Please email us or request a callback.
                  </p>
                  <a href="tel:+915011234567" className="text-orange-500 font-semibold text-xl hover:text-orange-600">
                    +91 501 123 4567
                  </a>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Email</h3>
                  <div className="space-y-1">
                    <a href="mailto:hello@epicautomations.com" className="block text-orange-500 font-semibold text-xl hover:text-orange-600">
                      hello@epicautomations.com
                    </a>
                    <a href="mailto:business@epicautomations.com" className="block text-orange-500 font-semibold text-xl hover:text-orange-600">
                      business@epicautomations.com
                    </a>
                    <a href="mailto:support@epicautomations.com" className="block text-orange-500 font-semibold text-xl hover:text-orange-600">
                      support@epicautomations.com
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Chennai Office</h3>
                    <p className="text-gray-500 text-md font-semibold">
                      EPIC AUTOMATIONS, Chennai, Tamil Nadu, India
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bangalore Office</h3>
                    <p className="text-gray-500 text-md font-semibold">
                      EPIC AUTOMATIONS, Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname" className="text-md font-semibold text-gray-700 mb-2 block">
                      First name
                    </Label>
                    <div className="relative">
                      <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                      <Input 
                        id="firstname" 
                        placeholder="Mike" 
                        type="text" 
                        className="pl-10 h-12 border-gray-300 placeholder:font-semibold placeholder:text-lg "
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="text-md font-semibold text-gray-700 mb-2 block">
                      Last name
                    </Label>
                    <div className="relative">
                      <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                      <Input 
                        id="lastname" 
                        placeholder="Type name" 
                        type="text" 
                        className="pl-10 h-12 border-gray-300 placeholder:font-semibold placeholder:text-lg "
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-md font-semibold text-gray-700 mb-2 block">
                    Email
                  </Label>
                  <div className="relative">
                    <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                    <Input 
                      id="email" 
                      placeholder="Type email" 
                      type="email" 
                      className="pl-10 h-12 border-gray-300 placeholder:font-semibold placeholder:text-lg "
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-md font-semibold text-gray-700 mb-2 block">
                    Phone number
                  </Label>
                  <div className="relative">
                    <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                    <Input 
                      id="phone" 
                      placeholder="Type phone number" 
                      type="tel" 
                      className="pl-10 h-12 border-gray-300 placeholder:font-semibold placeholder:text-lg "
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-md font-semibold text-gray-700 mb-2 block">
                    Message
                  </Label>
                  <div className="relative">
                    <IconMessage className="absolute left-3 top-3 text-gray-800 w-5 h-5" />
                    <textarea 
                      id="message" 
                      placeholder="Type message" 
                      rows={4}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 placeholder:font-semibold placeholder:text-lg rounded-md  resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="relative w-full h-[600px] bg-gray-100 z-10">
          {/* Map Wave (top) */}
        <div className="absolute -top-1 rotate-180 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[90px] md:h-[159px]">
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
          <div className="absolute bottom-8 left-8 right-8  rounded-lg shadow-lg flex justify-center z-20 p-6 max-w-full">
            <div className="flex items-center bg-white p-3 px-4 rounded-xl w-[800px] space-x-4">
              <IconMail className="text-gray-400 w-5 h-5 inset-0" />
              <input
                type="email"
                placeholder="Enter Your Email address"
                className="flex-1 border border-gray-300 placeholder:font-semibold placeholder:text-lg rounded-md px-3 py-2 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Get started
              </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex w-full flex-col space-y-2", className)}>
//       {children}
//     </div>
//   );
// }; 
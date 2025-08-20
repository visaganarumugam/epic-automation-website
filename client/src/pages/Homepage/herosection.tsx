import  { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from '../../components/AnimatedSection';

const slides = [
  {
    
    content: (
      <section id="hero" className="slide1 w-screen h-screen relative flex flex-col justify-between overflow-hidden px-0 md:px-0">
        {/* Background Video */}
        <video
          src="/videos/Slide1_bg_video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full bg-[#ffe7b6]  object-fit sm:object-cover z-0"
        ></video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 z-0" />
        {/* Center: Headline and CTA */}
        <div className="flex flex-col items-center justify-center flex-1 w-full px-4 sm:px-6 md:px-0 md:pt-20 z-10 ">
          <div className='flex flex-col justify-center items-center '>
          <button className="bg-black border-2 absolute bottom-1/3 sm:bottom-6 md:bottom-1 left-1/2 transform -translate-x-1/2 text-white hover:text-black mt-5 font-semibold px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-all text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 md:mb-12" style={{boxShadow:'0 8px 32px 0 white'}}>
            Book a call with us
            <svg width="18" height="18" className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          </div>
        </div>
        
      </section>
    ),
    
  },

    
  
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const SLIDE_DURATION = 10000; // 30 minutes in milliseconds

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  
  return (
    <div className="w-screen h-[430px]  sm:h-screen relative overflow-hidden flex items-center justify-center">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700  ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'} p-4`}
        >
          <div className=" rounded-xl shadow-2xl flex flex-col items-center max-w-full">
            <div className="text-center">{slide.content}</div>
              </div>
            </div>
          ))}
      
      
    </div>
   );
} 


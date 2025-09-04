import  { useState, useEffect, useRef } from 'react';

const slides = [
  {
    content: (
      <section id="hero" className="slide1 w-full h-full relative flex flex-col justify-center items-center overflow-hidden">
        {/* Background Video */}
        <video
          src="/videos/Slide1_bg_video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full bg-[#ffe7b6] object-cover z-0"
        >
          <source src="/videos/Slide1_bg_video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 md:px-8">
          {/* Main Content */}
          <div className="flex flex-col items-center justify-center flex-1 w-full">
            
            
            {/* CTA Button */}
            <div className="mt-auto mb-8 sm:mb-12">
              <button className="bg-black border-2 border-white text-white hover:text-black hover:bg-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 text-base sm:text-lg md:text-xl flex items-center gap-3 z-30" style={{boxShadow:'0 8px 32px 0 white'}}>
                Book a call with us
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
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
    <div className="w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen relative overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {slide.content}
        </div>
      ))}
    </div>
  );
} 


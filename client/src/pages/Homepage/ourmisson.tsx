// import { InteractiveHoverButton } from "../../components/ui_components/interactive-hover-button";
import React from "react";
import { AnimatedSection, FadeUpSection } from "../../components/AnimatedSection";
// 1. Define features array for cards
const features = [
  {
    title: 'MISSION',
    desc: 'We deliver reliable, safe, cost-effective, and aesthetic automation solutions that create lasting value and elevate customer satisfaction and experience.',
    img: '/images/mission.png',
    gradient: 'bg-gradient-to-br from-[#F47C26FF] ',
    titleColor: 'text-white', // orange title
    descColor: 'text-black',      // white desc
  },
  {
    title: 'VISION',
    desc: 'We strive to lead automation by delivering cutting-edge robotics solutions that empower industries through innovation, precision, and intelligent technology.',
    img: '/images/vision.png',
    gradient: 'bg-gradient-to-br  from-[#693CC3FF]',
    titleColor: 'text-white', // soft red/pink title
    descColor: 'text-black',      // white desc
  },
  {
    title: 'EXCELLENCE',
    desc: 'We deliver highly reliable solutions with a no-compromise quality mindset, ensuring every product meets the highest standards for our customers.',
    img: '/images/excellence.png',
    gradient: 'bg-gradient-to-br from-[#ee5555] ',
    titleColor: 'text-white', // deep blue title
    descColor: 'text-black',      // white desc
  },
  {
    title: 'INNOVATION',
    desc: 'We innovate relentlessly, embracing new technologies and continuous learning to create advanced solutions that consistently meet our customers’ evolving needs.',
    img: '/images/innovation.png',
    gradient: 'bg-gradient-to-br from-[#5CA1BCFF] ',
    titleColor: 'text-white', // teal/blue title
    descColor: 'text-black',      // white desc
  },
  {
    title: 'COLLABORATION',
    desc: 'Teamwork fuels success through close collaboration, creating smarter, scalable automation solutions.',
    img: '/images/collaboration.png',
    gradient: 'bg-gradient-to-br from-[#88BD26FF] ',
    titleColor: 'text-white', // red title
    descColor: 'text-black',      // white desc
  },
  {
    title: 'INTEGRITY',
    desc: 'We believe in long term partnerships with our customers and suppliers, conducting business in a fair and transparent manner.',
    img: '/images/integrity.png',
    gradient: 'bg-gradient-to-br from-[#B65BBEFF] ',
    titleColor: 'text-white', // brown/gold title
    descColor: 'text-black',      // white desc
  },
];

export default function OurMisson() {
    
  React.useEffect(() => {
    const timer = setInterval(() => {
      // setCarouselIdx((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slide5 w-screen min-h-screen flex items-center justify-center bg-[#ffe7b6] ">
      <div className="relative w-[100vw] max-w-full min-h-screen shadow-2xl flex flex-col px-4 sm:px-6 md:px-15 md:pt-28 overflow-hidden">
        {/* Main Title */}
        <FadeUpSection className="w-full flex flex-col items-center mb-8 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-0">
          <AnimatedSection
            customAnimation={{ y: 20, opacity: 0, duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-4xl lg:text-7xl font-bold text-center text-black leading-tighter" style={{fontFamily: 'Gilroy, sans-serif'}}>Our Mission. Our Vision. Our Drive.</h1>
          </AnimatedSection>
          <AnimatedSection
            customAnimation={{ y: 15, opacity: 0, duration: 0.3, delay: 0.2 }}
          >
            <p className="text-black font-semibold text-base md:text-lg lg:text-3xl text-center max-w-6xl mt-3 sm:mt-4 md:mt-5">
          We aim to revolutionize automation with smart robotics, driving innovation, efficiency, and progress for a better, connected future.
          </p>
          </AnimatedSection>
        </FadeUpSection>
        {/* Main Content Row - Custom Grid Layout */}
        <AnimatedSection 
          className="w-full max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-0"
          customAnimation={{ y: 30, opacity: 0, duration: 0.5, delay: 0.3 }}
        >
          {/* Left Section */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {/* Top card: full width, medium height */}
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 h-auto sm:h-[280px] md:h-[380px]">
              <Card {...features[0]} className="flex-1 h-[250px] sm:h-full" />
              <Card {...features[1]} className="flex-1 h-[250px] sm:h-full" />
            </div>
            {/* Bottom row: two tall cards side by side */}
            <Card {...features[4]} className="h-[150px] sm:h-[250px] md:h-[270px] w-full" />
          </div>
          {/* Right Section (upside down of left) */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-between">
            {/* Top row: two tall cards side by side */}
            <Card {...features[3]} className="h-[190px] sm:h-[250px] md:h-[270px] w-full" />
            {/* Bottom card: full width, medium height */}
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 h-auto sm:h-[280px] md:h-[380px]">
              <Card {...features[2]} className="flex-1 h-[200px] sm:h-full" />
              <Card {...features[5]} className="flex-1 h-[200px] sm:h-full" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
  
}

// Card component
interface CardProps {
  title: string;
  desc: string;
  img: string;
  gradient: string;
  className?: string;
  titleColor: string;
  descColor: string;
}
function Card({ title, desc, gradient, className, titleColor, descColor }: CardProps) {
  return (
    <div className={`${gradient} rounded-2xl sm:rounded-3xl shadow-lg pt-4 sm:pt-5 md:pt-6 pl-4 sm:pl-5 md:pl-6 pr-4 sm:pr-5 md:pr-6 flex flex-col justify-between relative ${className} transform hover:scale-105 hover:z-10 transition-transform duration-300`}>
      <div>
        <div className={`text-2xl lg:text-4xl font-bold uppercase mb-2 ${titleColor}`}>{title}</div>
        <div className={`text-base md:text-lg xl:text-[1.3rem] 2xl:text-[1.7rem] font-semibold mb-2 sm:mb-3 md:mb-4 ${descColor}`}>{desc.split('.')[0]}</div>
        <div className={`text-sm md:text-base mb-2 sm:mb-3 md:mb-4 ${descColor}/90`}>{desc.split('.').slice(1).join('.')}</div>
      </div>
    </div>
  );
}

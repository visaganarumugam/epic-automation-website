// import { InteractiveHoverButton } from "../../components/ui_components/interactive-hover-button";
import React from "react";
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
      <div className="relative w-[100vw] max-w-full min-h-screen shadow-2xl flex flex-col px-4 md:px-15 md:pt-28 overflow-hidden">
        {/* Main Title */}
        <div className="w-full flex flex-col items-center mb-20 ">
          <h1 className="text-3xl md:text-7xl font-bold text-center text-black leading-tighter" style={{fontFamily: 'Gilroy, sans-serif'}}>Our Mission. Our Vision. Our Drive.</h1>
          <p className="text-black font-semibold md:text-3xl text-center max-w-6xl mt-5">
        We aim to revolutionize automation with smart robotics, driving innovation, efficiency, and progress for a better, connected future.
        </p>
        </div>
        {/* Main Content Row - Custom Grid Layout */}
        <div className="w-full max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            {/* Top card: full width, medium height */}
            
            <div className="flex flex-row gap-8 h-[320px] md:h-[380px]">
              <Card {...features[0]} className="flex-1 h-full" />
              <Card {...features[1]} className="flex-1 h-full" />
            </div>
            {/* Bottom row: two tall cards side by side */}
            <Card {...features[4]} className="h-[180px] md:h-[270px] w-full" />
          </div>
          {/* Right Section (upside down of left) */}
          <div className="flex flex-col gap-8 justify-between">
            {/* Top row: two tall cards side by side */}
            <Card {...features[3]} className="h-[180px] md:h-[270px] w-full" />
            {/* Bottom card: full width, medium height */}
            
            <div className="flex flex-row gap-8 h-[320px] md:h-[380px]">
              <Card {...features[2]} className="flex-1 h-full" />
              <Card {...features[5]} className="flex-1 h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section 
  //     id="our-mission" 
  //     className="relative w-full min-h-screen flex flex-col items-center justify-start py-16 pb-20 px-2 overflow-hidden bg-cover bg-center bg-no-repeat"
  //     style={{
  //       backgroundImage: "url('/images/Image_3.jpg')"
  //     }}
  //   >
  //     {/* Overlay */}
  //     <div className="absolute inset-0 backdrop-blur-lg z-0"></div>
      
  //     {/* Content */}
  //     <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
  //       <h1 className="text-3xl md:text-7xl font-bold text-center text-white mb-2">Our Mission. Our Vision. Our Drive.</h1>
  //       <p className="text-white md:text-2xl text-center max-w-4xl mb-14">
  //       We aim to revolutionize automation with smart robotics, driving innovation, efficiency, and progress for a better, connected future.
  //       </p>
  //       <button className=" z-50 rounded-full flex items-center text-white gap-2 cursor-pointer px-2 py-1  hover:text-white hover:bg-black mb-12 border border-white  transition text-xl font-semibold">
  //       <InteractiveHoverButton>Explore Machines</InteractiveHoverButton>
  //       </button>
  //       {/* Main visual area */}
  //       <div className="relative flex items-center justify-center w-full max-w-full min-h-[420px] md:min-h-screen">
  //         {/* Feature Cards */}
  //         {features.map((feature, idx) => (
  //                         <div
  //               key={idx}
  //               className={`group rounded-lg flex items-center z-50 gap-6 p-6 max-w-xl w-[600px] min-h-[110px] mb-4 md:mb-7 border transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl ${feature.position} ${feature.cardClass} ${feature.title === 'EXPERT SUPPORT' ? 'md:mb-32' : ''}`}
  //             >
  //               <div className="flex-shrink-0 flex items-center justify-center w-25 h-25">
  //                 <img src={feature.img} alt={feature.title} className="w-full h-full object-contain invert rounded-lg" />
  //               </div>
  //               <div className="flex-1">
  //                 <h3 className={`uppercase text-3xl font-gilroy font-bold tracking-widest text-white mb-1 transition-colors duration-300 ${feature.hoverColor}`}>{feature.title}</h3>
  //                 <p className="text-gray-300 text-lg font-semibold mb-1">{feature.desc}</p>
  //               </div>
  //             </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
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
    <div className={`${gradient} rounded-3xl shadow-lg pt-6 pl-6 pr-6 flex flex-col justify-between relative ${className} transform hover:scale-105 hover:z-10 transition-transform  duration-300`}>
      <div>
        <div className={`text-4xl font-bold uppercase mb-2 ${titleColor}`}>{title}</div>
        <div className={`md:text-[1.7rem] font-semibold mb-4 ${descColor}`}>{desc.split('.')[0]}</div>
        <div className={`text-base mb-4 ${descColor}/90`}>{desc.split('.').slice(1).join('.')}</div>
      </div>
      {/* <div className="flex items-end justify-end mt-auto">
        <img src={img} alt={title} className="w-20 h-20 object-contain ml-4 mb-4" />
      </div> */}
    </div>
  );
}

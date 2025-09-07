// import { ShimmerButton } from "../components/ui_components_2/shimmer-button";

import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';
import ContactForm from '../components/ContactForm';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';

const contactInfo = [
  {
    icon: <IconMail size={25} stroke={1.7} className="text-black sm:size-9 " />,
    label: 'Email us',
    value: 'Visaganarumugam@epicautomations.co.in',
    href: 'mailto:Visaganarumugam@epicautomations.co.in',
  },
  {
    icon: <IconPhone size={25} stroke={1.7} className="text-black sm:size-9" />,
    label: 'Call us',
    value: '(+91) 7402143821',
    href: 'tel:7402143821',
  },
  {
    icon: <IconMapPin size={25} stroke={1.7} className="text-black sm:size-9" />,
    label: 'Our location',
    value: 'Epic Automations, Coimbatore',
    href: 'https://maps.google.com',
  },
];


export default function About() {
  const [activeCard, setActiveCard] = useState(1);
  const navigate = useNavigate();

  const handleMeetTeamClick = () => {
    navigate('/help-center#helpcenter-contact-form');
  };

  const handleExploreInnovationsClick = () => {
    // Scroll to carousel section on the same page
    const carouselSection = document.getElementById('carousel-section');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }; // Start with center card (index 1) as active
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevCard = () => {
    setActiveCard((prev) => (prev === 0 ? 9 : prev - 1));
  };

  const handleNextCard = () => {
    setActiveCard((prev) => (prev === 9 ? 0 : prev + 1));
  };

  // Touch and mouse event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch behavior
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left - next card
        handleNextCard();
      } else {
        // Swiped right - previous card
        handlePrevCard();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum drag distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged left - next card
        handleNextCard();
      } else {
        // Dragged right - previous card
        handlePrevCard();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setStartX(0);
      setCurrentX(0);
    }
  };

  // Add visual feedback during dragging
  const getDragTransform = () => {
    if (!isDragging) return '';
    const diff = currentX - startX;
    const maxDiff = 100; // Maximum visual movement
    const clampedDiff = Math.max(-maxDiff, Math.min(maxDiff, diff));
    return `translateX(${clampedDiff * 0.1}px)`;
  };

  // Card data array
  const cardData = [
    {
      bgImage: '/images/roboticsimageabout.jpg',
      logo: '/images/logos/ola.png',
      title: 'Needle Winding Machine',
      description: 'A needle winding machine is a specialized piece of equipment used to wind coils of wire onto stators, particularly for BLDC (Brushless Direct Current) motors and other applications with internal stators. It utilizes a needle-like structure to precisely guide and lay the wire into the stator slots, enabling complex winding patterns and high-density winding.',
      
    },
    {
      bgImage: '/images/customizedsolutions.jpeg',
      logo: '/images/logos/DABUR.png',
      title: 'Flex Picker',
      description: "A delta robot designed for high-speed, high-precision picking and packing applications. It's known for its speed, accuracy, and ability to handle a variety of payloads and reaches. The FlexPicker, particularly the IRB 360, is a leader in delta robot technology, offering outstanding motion control and short cycle times.",
      
    },
    {
      bgImage: '/images/Six_Axis_Painting_Robot.jpg',
      logo: '/images/logos/YASKAWA.png',
      title: 'Six Axis Painting Robot',
      description: 'An Automated Robotic System designed to apply paint or coatings to surfaces with high precision, consistency, and efficiency, often surpassing the quality and speed achievable by human workers.',
      
    },
    {
      bgImage: '/images/palletizing_robot.jpg',
      logo: '/images/logos/BERGER.png',
      title: 'Palletizing Robots',
      description: 'A Palletizing Robot is a type of automated system that uses a robotic arm to stack and arrange products onto pallets for storage or transportation. These robots are employed in various industries, including food and beverage, pharmaceuticals, manufacturing, e-commerce, automotive, and logistics, to name a few.',
      
    },
    {
      bgImage: '/images/Packing_Machine.jpg',
      logo: '/images/logos/HEALTHCARE.png',
      title: 'Packing Machine',
      description: 'A packing machine is an automated system designed to package products efficiently and consistently for storage, transportation, or sale. These machines can perform tasks such as filling, sealing, wrapping, labeling, and boxing, depending on the type of product and packaging requirements.',
      
    },
    {
      bgImage: '/images/prodsrtjhucts.jpg',
      logo: '/images/logos/Ammarun-Foundries.jpg',
      title: 'Pre Machining',
      description: 'Power Press for Industrial Use — Upgrade with advanced Cross Shaft Power Press machines. Efficiency and precision! Call Us. Enhance Production with Cross Shaft Power Presses. Durable and precise machinery. Call Us. Boost Productivity Now.',
      
    },
    {
      bgImage: '/images/collabosrtjration.png',
      logo: '/images/logos/lmw.png',
      title: 'MCB Automation',
      description: 'MCB assembly automation involves using machines and automated systems to handle the various steps of assembling electronic components onto printed circuit boards (MCBs), replacing manual labor for increased speed, precision, and efficiency. This automation extends from component placement and soldering to testing and inspection.',
      
    },
    {
      bgImage: '/images/carousel/rotorline.png',
      logo: '/images/logos/ola.png',
      title: 'Rotor Line Automation',
      description: 'OLA’s mega-factory upgraded 20 ABB robots in the rotor assembly line with the latest software, enhancing speed, precision, and reliability. Integrated with OLA’s AI-driven platform, the system enables real-time performance monitoring, remote diagnostics, and automated error detection.',
      
    },
    {
      bgImage: '/images/carousel/statorlineautomation.png',
      logo: '/images/logos/ola.png',
      title: 'Stator Line Automation',
      description: 'OLA’s stator line, integral to electric motor assembly, underwent a comprehensive reprogramming initiative to boost reliability across all machines.60 machines were individually updated with the latest software and process logic to standardize operations and enhance performance throughout the production cycle.',
      
    },
    {
      bgImage: '/images/carousel/motorassembly.png',
      logo: '/images/logos/ABB.png',
      title: 'Motor Assembly Line',
      description: 'Five ABB robots on the motor assembly line were upgraded with advanced control logic and optimized programs, enhancing performance and reliability. Using ABB RobotStudio, updates were seamlessly deployed, with thorough testing ensuring consistent quality, improved safety, diagnostics, and adaptive workflows.',
      
    }
  ];


  // Inside About component
  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeCard === 0 && videoRef0.current) {
      videoRef0.current.playbackRate = 2;
    }
    if (activeCard === 1 && videoRef1.current) {
      videoRef1.current.playbackRate = 2;
    }
  }, [activeCard]);

  return (
    <div className="relative min-h-full w-full bg-[#ffe7b6]  flex flex-col items-center pb-12 px-2 font-gilroy overflow-hidden">
      {/* Main Content (z-10) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading Section - Centered Modern Layout */}
        <div className="w-[100vw]  relative overflow-hidden">
          {/* Heading Section Background Image */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50 -z-10"></div>
          <div className="absolute inset-0 -z-20">
            <img
              src="/images/Image_4.webp"
              alt="Heading Background"
              className="w-full h-[1300px] object-cover object-center  select-none pointer-events-none"
              loading="lazy"
              draggable="false"
            />
          </div>
          <FadeUpSection className="w-full flex flex-col items-center justify-center bg-transparent rounded-none md:rounded-2xl px-4 md:px-10 xl:px-16 2xl:px-10 sm:py-10 mb-5 pt-25 sm:pt-30 relative z-10">
            <AnimatedSection
              customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.2 }}
            >
              <h1 className="w-full text-center text-3xl md:text-[5.1rem] xl:text-[4.2rem] 2xl:text-[5.1rem] font-bold leading-tight mb-6 md:mb-6 font-gilroy text-white">
                Discover How Epic Automation's Robotics<br className='hidden 2xl:block' /> Innovation Are Transforming<br className='hidden sm:block' /> The Future
              </h1>
            </AnimatedSection>
            <AnimatedSection
              customAnimation={{ y: 30, opacity: 0, duration: 0.8, delay: 0.4 }}
            >
              <p className="text-white text-center text-base md:text-3xl xl:text-2xl 2xl:text-3xl mx-5 sm:mx-0 mb-8 font-semibold font-gilroy">
              At Epic Automations, we pioneer AI-driven robotics, creating adaptive, efficient, <br className='hidden sm:block' /> ethical solutions for real‑world challenges.
              </p>
            
              <div className="flex  flex-col justify-center items-center sm:flex-row gap-4 sm:w-full mb-2">
                <button 
                  onClick={handleMeetTeamClick}
                  className="bg-[#ff4f0f] cursor-pointer text-white px-16 py-3 rounded-full font-semibold text-base sm:text-lg shadow hover:bg-[#333333] transition font-gilroy"
                >
                  Meet Our Team
                </button>
                <button 
                  onClick={handleExploreInnovationsClick}
                  className="border-2 border-[#ff4f0f] cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-black hover:text-white transition font-gilroy"
                >
                Explore Our Innovations
                </button>
              </div>
            
          <div className="w-full rounded-2xl sm:py-12 sm:px-4  flex flex-col justify-center mt-10 sm:mt-0  items-center mb-12 z-50">
          <h2 className=" max-w-7xl px-5 sm:px-0 text-white text-[2rem] leading-tight md:text-7xl font-semibold  text-center mb-8">
                  Success Stories That Define  <br /> Our Robotics Journey
          </h2>
            <div className="flex flex-col md:flex-row justify-center max-w-7xl mx-10 sm:mx-0 sm:mt-12 mb-10 gap-8 w-[90vw] sm:w-full">
              <div className="flex flex-col items-center flex-1 border rounded-2xl sm:border-r p-3"
                style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to right, #ff4f0f, #ffffff , #ff4f0f)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-white ">10K+</span>
                <span className="text-white text-2xl mt-1">Employee</span>
              </div>
              <div className="flex flex-col items-center flex-1 border rounded-2xl sm:border-r p-3" 
                      style={{
                      borderRight: '2px solid transparent',
                      borderImageSource: 'linear-gradient(to right, #ff4f0f, #ffffff , #ff4f0f)',
                      borderImageSlice: 1,
                      
                      }}>
                <span className="text-3xl md:text-6xl  font-semibold text-white ">01K+</span>
                <span className="text-white text-2xl mt-1">Users in globally</span>
              </div>
              <div className="flex flex-col items-center flex-1 border rounded-2xl sm:border-r p-3"
                style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to right, #ff4f0f, #ffffff , #ff4f0f)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-white ">98%</span>
                <span className="text-white text-2xl mt-1">Positive review</span>
              </div>
              <div className="flex flex-col items-center flex-1 border rounded-2xl sm:border sm:border-r   p-3 "
               style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to right, #ff4f0f, #ffffff , #ff4f0f)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-white ">05+</span>
                <span className="text-white text-2xl mt-1">Years in business</span>
              </div>
            </div>
          </div>
          </AnimatedSection>
          </FadeUpSection>
        </div>
        
        
        {/* Story & Target Section - Pixel Perfect */}
      <div className="w-full flex justify-center bg-[#ffe7b6]">
            
        <AnimatedSection 
          className="w-full max-w-full px-4 sm:px-8 md:px-20 xl:px-16 2xl:px-20 flex flex-col gap-6 sm:gap-8 md:gap-10 xl:gap-8 2xl:gap-10 mt-4"
          customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 1.0 }}
        >
          {/* Our Story Card */}
          <div className="w-full sm:h-[60vh]  rounded-4xl  flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex flex-col items-start justify-center px-8 py-10 md:py-8">
              <h3 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-4xl md:text-6xl xl:text-5xl 2xl:text-6xl font-bold sm:font-semibold mb-6">The People Behind the Magic</h3>
              <p className="text-gray-700 text-lg font-semibold md:text-2xl xl:text-xl 2xl:text-2xl mb-8 max-w-full">
                Founded with a vision to revolutionize industries, Epic Automations harnesses the power of robotics and AI to create intelligent, adaptive solutions. Our journey began with a passion for innovation—designing robots that not only automate tasks but also learn, collaborate, and transform the way businesses operate. From manufacturing floors to smart warehouses, our story is one of relentless pursuit of excellence in robotics.
              </p>
              {/* <ShimmerButton className="shadow-2xl mt-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Learn More
                </span>
              </ShimmerButton> */}
            </div>
            <div className="flex-1 flex items-center sm:m-5  justify-center sm:min-h-[220px] ">
              <video
                src="/videos/epicAutomations3.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover object-center shadow-lg shadow-black/50 rounded-4xl"
                poster="/images/bdscg.jpg"
              />
            </div>
          </div>
          {/* Our Target Card */}
          <div className="w-full sm:h-[60vh]  rounded-4xl  flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex items-center sm:m-5  justify-center min-h-[220px]  order-1 md:order-none">
              <video
                src="/videos/epicAutomations2.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover object-center shadow-lg shadow-black/50 rounded-4xl"
                poster="/images/desigfgn.jpg"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-end px-8 py-10 md:py-8 order-2 md:order-none ml-auto">
              <h3 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-4xl md:text-6xl font-semibold mb-7 text-right">The Dream We're Chasing</h3>
              <p className="text-gray-700 text-lg font-semibold  md:text-2xl mb-8 font-mono max-w-full text-right">
                We aim to lead the robotics revolution by delivering scalable, intelligent automation for every industry. Our mission is to empower businesses with robots that enhance productivity, ensure safety, and drive sustainable growth. By integrating advanced AI, machine vision, and collaborative robotics, we strive to shape a future where humans and robots work side by side to achieve extraordinary results.
              </p>
              {/* <ShimmerButton className="shadow-2xl mt-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Learn More
                </span>
              </ShimmerButton> */}
            </div>
          </div>
        </AnimatedSection>
        </div>
        
        {/* Featured Companies Carousel Section */}
        <div id="carousel-section" className="w-full py-4 sm:py-20 bg-[#ffe7b6] relative overflow-hidden">
          <div className="w-full max-w-full mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-4xl lg:text-7xl font-bold text-black px-4">
                Projects That We've Worked On
              </h2>
              
            </div>
            
            {/* Carousel Container */}
            <div className="relative">
              {/* Left Arrow */}
              <button 
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300"
                onClick={() => handlePrevCard()}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button 
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300"
                onClick={() => handleNextCard()}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* True Slider Carousel Animation with Peeking and Fade-out Side Cards */}
              <div className="w-full flex justify-center items-center py-6  sm:py-8 md:py-12">
                <div 
                  ref={carouselRef}
                  className={`relative w-[95vw] sm:w-[90vw] md:w-[80vw] h-[650px] sm:h-[70vh] md:h-[80vh] overflow-visible flex items-center justify-center mx-auto cursor-grab active:cursor-grabbing select-none ${isDragging ? 'pointer-events-none' : ''}`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                >
                  {[
                    (activeCard === 0 ? cardData.length - 2 : activeCard === 1 ? cardData.length - 1 : activeCard - 2), // far left
                    (activeCard === 0 ? cardData.length - 1 : activeCard - 1), // left
                    activeCard, // center
                    (activeCard === cardData.length - 1 ? 0 : activeCard + 1), // right
                    (activeCard >= cardData.length - 2 ? (activeCard + 2) % cardData.length : activeCard + 2) // far right
                  ].map((idx, pos) => {
                    // pos: 0 = far left, 1 = left, 2 = center, 3 = right, 4 = far right
                    let transform = '';
                    let z = 0;
                    let blur = '';
                    let scale = '';
                    let width = '';
                    let extra = '';
                    let opacity = 'opacity-100';
                    if (pos === 0) { // far left (leaving)
                      transform = 'translateX(-160%)';
                      scale = 'scale-75';
                      blur = 'blur-sm';
                      z = 0;
                      width = 'w-[30vw]';
                      extra = '-ml-10';
                      opacity = 'opacity-0';
                    } else if (pos === 1) { // left
                      transform = 'translateX(-90%)';
                      scale = 'scale-90';
                      blur = 'blur-sm';
                      z = 0;
                      width = 'w-[40vw]';
                      extra = '-ml-10';
                    } else if (pos === 2) { // center
                      transform = 'translateX(0)';
                      scale = 'scale-100';
                      blur = 'blur-none';
                      z = 10;
                      width = 'w-[80vw]';
                      extra = '';
                      // Add drag feedback for center card
                      if (isDragging) {
                        const dragTransform = getDragTransform();
                        if (dragTransform) {
                          transform = dragTransform;
                        }
                      }
                    } else if (pos === 3) { // right
                      transform = 'translateX(90%)';
                      scale = 'scale-90';
                      blur = 'blur-sm';
                      z = 0;
                      width = 'w-[40vw]';
                      extra = '-mr-10';
                    } else { // far right (leaving)
                      transform = 'translateX(160%)';
                      scale = 'scale-75';
                      blur = 'blur-sm';
                      z = 0;
                      width = 'w-[30vw]';
                      extra = '-mr-10';
                      opacity = 'opacity-0';
                    }
                    return (
                      <div
                        key={idx}
                        className={`absolute top-0 left-1/2 h-[100%] sm:h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${scale} ${blur} ${width} ${extra} ${opacity}`}
                        style={{
                          transform: `translate(-50%, 0) ${transform}`,
                          zIndex: z,
                          pointerEvents: pos === 2 ? 'auto' : 'none',
                        }}
                      >
                        <div className="w-full h-[650px] sm:h-full xl:h-[580px] 2xl:h-full bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden relative flex flex-col md:flex-row">
                          {/* Logo - Positioned at left bottom of entire card */}
                          <div className="absolute bottom-4 left-4 z-10">
                            <img src={cardData[idx].logo} alt="Logo" className="h-8 sm:h-10 md:h-12 2xl:h-15 bg-white p-1 rounded shadow-md" loading="lazy" />
                          </div>
                          
                          {/* Left Section - Content (Image-inspired UI) */}
                          <div className="flex-1 flex flex-col justify-start p-6 sm:p-6 md:p-10 xl:p-8 2xl:p-10 h-[350px] sm:min-h-[350px] md:min-h-[400px] xl:min-h-[350px] 2xl:min-h-[400px]">
                            <div>
                              {/* Pill label */}
                              <div className="inline-block px-3 sm:px-4 md:px-5 py-1 mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-xl border border-gray-300 bg-white text-gray-700 text-sm sm:text-base md:text-xl font-semibold shadow-sm">
                                Our Service
                              </div>
                              {/* Heading */}
                              <h3 className="font-serif font-bold text-2xl md:text-4xl lg:text-7xl xl:text-5xl 2xl:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-black to-orange-600 mb-4 sm:mb-4 md:mb-6" style={{lineHeight: '1.1'}}>
                                {cardData[idx].title}
                              </h3>
                              {/* Description */}
                              <p className="text-black text-base md:text-lg lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold max-w-xl leading-tight mb-4">
                                {cardData[idx].description}
                              </p>
                            </div>
                          </div>
                          {/* Right Section - Image or Video */}
                          <div className="flex-1 h-full flex items-center justify-center p-4 pt-0 sm:pt-6 sm:p-6  md:p-10">
                            {idx === 0 ? (
                              <video
                                ref={videoRef0}
                                src="/videos/carouselcard1.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                                className="w-full h-[235px] sm:h-full object-cover rounded-xl shadow-lg shadow-black/50"
                                poster={cardData[idx].bgImage}
                              />
                            ) : idx === 1 ? (
                              <video
                                ref={videoRef1}
                                src="/videos/flex-picker-bg-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                                className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/50"
                                poster={cardData[idx].bgImage}
                              />
                            )  : idx === 5 ? (
                              <video
                                ref={videoRef1}
                                src="/videos/Pre-Machining.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                                className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/50"
                                poster={cardData[idx].bgImage}
                              />
                            ) : idx === 6 ? (
                              <video
                                ref={videoRef1}
                                src="/videos/lmv.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                                className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/50"
                                poster={cardData[idx].bgImage}
                              />
                            ) : (
                              <img
                                src={cardData[idx].bgImage}
                                alt={cardData[idx].title}
                                className="w-full h-[230px] sm:h-full object-cover rounded-xl shadow-lg mb-10 shadow-black/50"
                                loading="lazy"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      activeCard === index ? 'bg-black h-3 sm:h-4' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
       
         

        
        {/* contact us form */}
        <section className="w-screen min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-0 sm:px-10 py-10 md:py-0">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2  mx-10 bg-transparent">
        {/* Left: Contact Info */}
        <div className="flex flex-col w-full gap-2 sm:gap-6 justify-center h-full">
          <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-md sm:text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
            <span className=" w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4f0f] mr-2 inline-block"></span>
            Contact
          </div> 
          <h2 className="text-4xl md:text-7xl font-bold text-black">Get in touch</h2>
          <p className="text-gray-700 text-lg sm:text-2xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
          <div className="flex flex-col gap-4 mb-7 sm:mb-0">
            {contactInfo.map((item, _) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full sm:w-[94%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#ff4f0f] transition-all"
              >
                <div className="flex py-2 items-center  gap-4">
                  <span className="bg-white/20 border  border-white/25 rounded-xl p-1 sm:p-2 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black text-lg sm:text-xl font-semibold">{item.label}</span>
                    <span className="text-black text-base sm:text-lg break-all sm:break-normal">{item.value}</span>
                  </div>
                </div>
                <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#ff4f0f] transition-colors">
                  <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <ContactForm source="about-page" />
      </div>
    </section>
       
      </div>
    </div>
  );
}


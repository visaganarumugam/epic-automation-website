import { ShimmerButton } from "../components/magicui/shimmer-button";

import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';
import { useState, useEffect, useRef } from 'react';

const contactInfo = [
  {
    icon: <IconMail size={35} stroke={1.7} className="text-[#00aeff]" />,
    label: 'Email us',
    value: 'johnny.kyorov@gmail.com',
    href: 'mailto:johnny.kyorov@gmail.com',
  },
  {
    icon: <IconPhone size={35} stroke={1.7} className="text-[#00aeff]" />,
    label: 'Call us',
    value: '(501) 123-4567',
    href: 'tel:5011234567',
  },
  {
    icon: <IconMapPin size={35} stroke={1.7} className="text-[#00aeff]" />,
    label: 'Our location',
    value: 'Crosby Street, NY, US',
    href: 'https://maps.google.com',
  },
];


export default function About() {
  const [activeCard, setActiveCard] = useState(1); // Start with center card (index 1) as active
  

  

  const handlePrevCard = () => {
    setActiveCard((prev) => (prev === 0 ? 9 : prev - 1));
  };

  const handleNextCard = () => {
    setActiveCard((prev) => (prev === 9 ? 0 : prev + 1));
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
      bgImage: '/images/products.jpg',
      logo: '/images/logos/BERGER.png',
      title: 'Next-Gen Products',
      description: 'Cutting-edge robotics products for modern industries',
      
    },
    {
      bgImage: '/images/collaboration.png',
      logo: '/images/logos/HEALTHCARE.png',
      title: 'Team Excellence',
      description: 'Collaborative robotics solutions for success',
      
    },
    {
      bgImage: '/images/innovation.png',
      logo: '/images/logos/ALBA.jpg',
      title: 'Research & Development',
      description: 'Pushing the boundaries of robotics innovation',
      
    },
    {
      bgImage: '/images/excellence.png',
      logo: '/images/logos/lmw.png',
      title: 'Quality Assurance',
      description: 'Award-winning robotics solutions',
      
    },
    {
      bgImage: '/images/integrity.png',
      logo: '/images/logos/ola.png',
      title: 'Secure Solutions',
      description: 'Reliable and secure automation systems',
      
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
              draggable="false"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center bg-transparent rounded-none md:rounded-2xl px-4 md:px-10 py-10 mb-5 pt-25 relative z-10">
          <h1 className="w-full text-center text-3xl md:text-[5.1rem] font-bold leading-tight mb-4 md:mb-6 font-gilroy text-white">
            Discover How Epic Automation's Robotics<br /> Innovation Are Transforming<br /> The Future
          </h1>
          <p className="text-white text-center text-base md:text-3xl mb-8 font-semibold font-gilroy">
          At Epic Automations, we pioneer AI-driven robotics, creating adaptive, efficient, <br /> ethical solutions for real‑world challenges.
          </p>
          <div className="flex flex-row gap-4 w-full justify-center mb-2">
            <button className="bg-[#ff4f0f] cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#333333] transition font-gilroy">
              Meet Our Team
            </button>
            <button className="border-2 border-[#ff4f0f] cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition font-gilroy">
            Explore Our Innovations
            </button>
          </div>
        </div>
        {/* Main Image (now Video)
        <div id="about-mission" className="w-full max-w-[70vw] p-2  bg-[#ff4f0f]/50  rounded-2xl overflow-hidden mb-25 mx-auto">
          <video
            src="/videos/epicAutomations6.mp4"
            autoPlay
            loop
            muted
            className="w-full h-[65vh] object-cover rounded-2xl shadow-lg"
          />
        </div> */}
        <div className="w-full    rounded-2xl py-12 px-4 flex flex-col justify-center  items-center mb-12 z-50">
               <h2 className=" max-w-7xl  text-white text-4xl md:text-7xl font-semibold  text-center mb-8">
                  Success Stories That Define  <br /> Our Robotics Journey
                </h2>
            <div className="flex flex-col md:flex-row justify-center max-w-7xl mt-12 mb-10 gap-8 w-full">
              <div className="flex flex-col items-center flex-1 border-r p-3"
                style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to bottom, #ff4f0f, #ffffff , #ff4f0f)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-white ">50K+</span>
                <span className="text-white text-2xl mt-1">Employee</span>
              </div>
              <div className="flex flex-col items-center flex-1 border-r p-3" 
                      style={{
                      borderRight: '2px solid transparent',
                      borderImageSource: 'linear-gradient(to bottom, #ff4f0f, #ffffff , #ff4f0f)',
                      borderImageSlice: 1,
                      
                      }}>
                <span className="text-3xl md:text-6xl  font-semibold text-white ">05M+</span>
                <span className="text-white text-2xl mt-1">Users in globally</span>
              </div>
              <div className="flex flex-col items-center flex-1 border-r p-3"
                style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to bottom, #ff4f0f, #ffffff , #ff4f0f)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-white ">98%</span>
                <span className="text-white text-2xl mt-1">Positive review</span>
              </div>
              <div className="flex flex-col items-center flex-1  p-3">
                <span className="text-3xl md:text-6xl  font-semibold text-white ">15+</span>
                <span className="text-white text-2xl mt-1">Years in business</span>
              </div>
            </div>
          </div>
        </div>
        {/* Story & Target Section - Pixel Perfect */}
      <div className="w-full flex justify-center bg-[#ffe7b6]">
            
        <div className="w-full max-w-full px-20 flex flex-col gap-10 mt-4">
          {/* Our Story Card */}
          <div className="w-full h-[60vh]  rounded-4xl  flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex flex-col items-start justify-center px-8 py-10 md:py-8">
              <h3 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold mb-6">The People Behind the Magic</h3>
              <p className="text-gray-700 text-base md:text-2xl mb-8 max-w-full">
                Founded with a vision to revolutionize industries, Epic Automations harnesses the power of robotics and AI to create intelligent, adaptive solutions. Our journey began with a passion for innovation—designing robots that not only automate tasks but also learn, collaborate, and transform the way businesses operate. From manufacturing floors to smart warehouses, our story is one of relentless pursuit of excellence in robotics.
              </p>
              <ShimmerButton className="shadow-2xl mt-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Learn More
                </span>
              </ShimmerButton>
            </div>
            <div className="flex-1 flex items-center m-5  justify-center min-h-[220px] ">
              <video
                src="/videos/epicAutomations3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center shadow-lg shadow-black/50 rounded-4xl"
                poster="/images/bg.jpg"
              />
            </div>
          </div>
          {/* Our Target Card */}
          <div className="w-full h-[60vh]  rounded-4xl  flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex items-center m-5  justify-center min-h-[220px]  order-1 md:order-none">
              <video
                src="/videos/epicAutomations2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center shadow-lg shadow-black/50  md:rounded-4xl"
                poster="/images/design.jpg"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-end px-8 py-10 md:py-8 order-2 md:order-none ml-auto">
              <h3 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold mb-7 text-right">The Dream We're Chasing</h3>
              <p className="text-gray-700 text-base md:text-2xl mb-8 font-mono max-w-full text-right">
                We aim to lead the robotics revolution by delivering scalable, intelligent automation for every industry. Our mission is to empower businesses with robots that enhance productivity, ensure safety, and drive sustainable growth. By integrating advanced AI, machine vision, and collaborative robotics, we strive to shape a future where humans and robots work side by side to achieve extraordinary results.
              </p>
              <ShimmerButton className="shadow-2xl mt-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Learn More
                </span>
              </ShimmerButton>
            </div>
          </div>
         </div>
        </div>
        
        {/* Featured Companies Carousel Section */}
        <div className="w-full py-20 bg-[#ffe7b6] relative overflow-hidden">
          <div className="w-full max-w-full mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-7xl font-bold text-black">
                Projects That We've Worked On
              </h2>
            </div>
            
            {/* Carousel Container */}
            <div className="relative">
              {/* Left Arrow */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
                onClick={() => handlePrevCard()}
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
                onClick={() => handleNextCard()}
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* True Slider Carousel Animation with Peeking and Fade-out Side Cards */}
              <div className="w-full flex justify-center items-center py-12">
                <div className="relative w-[80vw] h-[80vh] overflow-visible flex items-center justify-center mx-auto">
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
                        className={`absolute top-0 left-1/2 h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${scale} ${blur} ${width} ${extra} ${opacity}`}
                        style={{
                          transform: `translate(-50%, 0) ${transform}`,
                          zIndex: z,
                          pointerEvents: pos === 2 ? 'auto' : 'none',
                        }}
                      >
                        <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden relative flex">
                          {/* Left Section - Content (Image-inspired UI) */}
                          <div className="flex-1 flex flex-col justify-between p-10 min-h-[400px]">
                            <div>
                              {/* Pill label */}
                              <div className="inline-block px-5 py-1 mb-6 rounded-xl border border-gray-300 bg-white text-gray-700 text-xl font-semibold shadow-sm">
                                Our Service
                              </div>
                              {/* Heading */}
                              <h3 className="font-serif font-bold text-4xl md:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-black to-orange-600 mb-6" style={{lineHeight: '1.1'}}>
                                {cardData[idx].title}
                              </h3>
                              {/* Description */}
                              <p className="text-black text-xl md:text-3xl font-semibold max-w-xl">
                                {cardData[idx].description}
                              </p>
                            </div>
                            {/* Get Started Button with Logo */}
                            <div className="mt-10">
                              
                                <img src={cardData[idx].logo} alt="Logo" className="h-15  bg-white p-1 mr-2" />
                               
                              
                            </div>
                          </div>
                          {/* Right Section - Image or Video */}
                          <div className="flex-1 flex items-center justify-center p-10">
                            {idx === 0 ? (
                              <video
                                ref={videoRef0}
                                src="/videos/carouselcard1.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/50"
                                poster={cardData[idx].bgImage}
                              />
                            ) : idx === 1 ? (
                              <video
                                ref={videoRef1}
                                src="/videos/epicAutomations6.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/50"
                                poster={cardData[idx].bgImage}
                              />
                            ) : (
                              <img
                                src={cardData[idx].bgImage}
                                alt={cardData[idx].title}
                                className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/50"
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
              <div className="flex justify-center items-center gap-2 mt-8">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCard === index ? 'bg-black h-4' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
       
         {/* Success Stories & Experts Section */}
         <div className="w-full flex flex-col bg-[#ffe7b6] items-center pt-30">
          
          {/* Experts Section - Pixel Perfect */}
          <div className="w-full max-w-full flex flex-col items-center">
            <h3 className="bg-gradient-to-bl from-[#dd6b20] via-black to-[#dd6b20] bg-clip-text text-transparent text-4xl md:text-7xl font-semibold  text-center mb-3 mt-2">Meet the Team Powering Our <br/> Robotics Vision</h3>
            <p className="text-gray-700 text-base md:text-2xl text-center max-w-7xl mt-3 mb-15">
              Discover the passionate team of innovators, strategists, and customer success professionals working tirelessly to help you achieve your goals
            </p>
            {/* experts card section */}
            {(() => {
              const experts = [
                {
                  img: 'https://randomuser.me/api/portraits/women/44.jpg',
                  name: 'Dr. Maya Patel',
                  role: 'Chief Robotics Engineer',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/32.jpg',
                  name: 'Alex Kim',
                  role: 'Automation Systems Lead',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/65.jpg',
                  name: 'Sara Lee',
                  role: 'AI & Machine Vision Specialist',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/44.jpg',
                  name: 'Carlos Rivera',
                  role: 'Product Designer',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/68.jpg',
                  name: 'Priya Singh',
                  role: 'Robotics Software Architect',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/45.jpg',
                  name: 'Liam Chen',
                  role: 'Embedded Systems Expert',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/43.jpg',
                  name: 'Emily Johnson',
                  role: 'Human-Robot Interaction Lead',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/46.jpg',
                  name: 'David Brown',
                  role: 'Manufacturing Integration Manager',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/66.jpg',
                  name: 'Olivia Martin',
                  role: 'Quality Assurance Engineer',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/47.jpg',
                  name: 'Ethan Williams',
                  role: 'Field Robotics Specialist',
                },
              ];
              return (
                <div className="w-full px-25 flex flex-col items-center">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 justify-center items-center mb-8  rounded-2xl py-6">
                    {experts.slice(0, 5).map((expert, idx) => (
                      <div key={idx} className="flex flex-col mx-7 items-center">
                        <div className="w-32 h-32 md:w-62 md:h-72 p-1 rounded-full rounded-tl-none overflow-hidden bg-[#008cff]/60 flex items-center justify-center mb-6 shadow-lg">
                          <img
                            src={expert.img}
                            alt={expert.name}
                            className="w-full h-full rounded-full rounded-tl-none object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg md:text-2xl text-black mb-1">{expert.name}</div>
                          <div className="text-gray-700 text-sm md:text-base">{expert.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 justify-center items-center mt-2  rounded-2xl py-6">
                    {experts.slice(5, 10).map((expert, idx) => (
                      <div key={idx} className="flex flex-col mx-7 items-center">
                        <div className="w-32 h-32 md:w-62 md:h-72 p-1 rounded-full rounded-tr-none overflow-hidden bg-[#008cff]/60 flex items-center justify-center mb-6 shadow-lg">
                          <img
                            src={expert.img}
                            alt={expert.name}
                            className="w-full h-full rounded-full rounded-tr-none object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg md:text-2xl text-black  mb-1">{expert.name}</div>
                          <div className="text-gray-700 text-sm md:text-base">{expert.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Review Section - Pixel Perfect */}
        {/* <div className="w-full max-w-full bg-gradient-to-bl from-[#5cd9ff] via-[#d2f2ff] to-[#ebe97c] flex flex-col items-center pt-25 pb-12">
          <h2 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold text-center mb-2">What Our Clients Say</h2>
          <p className="text-gray-700 text-base md:text-2xl text-center max-w-7xl mt-3 mb-1">
            Discover how our robotics solutions have transformed businesses and hear directly from satisfied customers
          </p>
          <div className="mt-25 px-10">
          <MarqueeDemoVertical />
          </div>
          
        </div> */}
        {/* contact us form */}
        <section className="w-full min-h-screen flex items-center justify-center bg-[#ffe7b6] relative overflow-hidden px-10 md:py-0">
      
      <div className="relative w-full grid grid-cols-1 z-50 md:grid-cols-2 mx-10 bg-transparent">
        {/* Left: Contact Info */}
        <div className="flex flex-col w-full gap-6 justify-center h-full">
          <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00aeff] mr-2 inline-block"></span>
            Contact
          </div> 
          <h2 className="text-4xl md:text-7xl font-bold text-black">Get in touch</h2>
          <p className="text-gray-700 text-2xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, _) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-[94%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#00aeff] transition-all"
              >
                <div className="flex py-2 items-center gap-4">
                  <span className="bg-white/10 border  border-white/25 rounded-xl p-2 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black text-xl font-semibold">{item.label}</span>
                    <span className="text-gray-700 text-lg">{item.value}</span>
                  </div>
                </div>
                <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#00aeff] transition-colors">
                  <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="flex flex-col gap-2 bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-2 w-full">
          <input
            type="text"
            placeholder="Name"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#00aeff] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#00aeff] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <textarea
            placeholder="Message"
            rows={6}
            className=" h-[70%] bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#00aeff] transition-all resize-none"
            style={{fontFamily: 'Gilroy'}}
          />
          <button
            type="submit"
            className="w-full bg-black text-white cursor-pointer font-semibold text-lg py-4 rounded-xl shadow hover:bg-[#00aeff] hover:text-black transition-all mt-2"
            style={{fontFamily: 'Gilroy'}}
          >
            Submit
          </button>
        </form>
      </div>
        </section>
       
      </div>
    </div>
  );
}


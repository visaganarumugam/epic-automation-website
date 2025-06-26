import { useState, useEffect } from 'react';

import { InteractiveHoverButton } from '../../components/ui_components/interactive-hover-button';

interface AIFeature {
  id: number;
  title: string;
  image: string;
  statTitle: string;
  statPercentage: number;
  statLabel: string;
  highlighted: { [key: string]: string };
}

export default function HeroSection() {
  

  return (
    <div>
      <div className="min-h-[100vh] max-h-[100vh] my-auto mx-auto w-full max-w-[100vw] flex flex-col items-center relative overflow-hidden p-2 ">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full opacity-90 object-cover p-  max-w-full max-h-full"
          style={{ boxSizing: 'border-box' }}
        >
          <source src="/src/assets/videos/hero2.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 -z-5 pointer-events-none rounded-2xl p-2" style={{ boxSizing: 'border-box' }}></div>
        {/* Title, Description, and CTA */}
        <div className="w-full flex-grow flex items-start justify-center relative z-10 px-4 sm:px-8 md:px-6 mt-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-white">
            {/* Left side content */}
            <div className="md:w-full text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-9xl font-black tracking-tighter bg-gradient-to-b from-sky-300 via-gray-100 to-gray-800 bg-clip-text text-transparent animate-rise-up" style={{ animationDelay: '0.2s' }}>
                The Power of Robotics,<br /><p className='text-white'>Designed for Action</p>
                </h1>
                {/* description for hero section */} 
                <div className="mt-8 mb-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 animate-rise-up" style={{ animationDelay: '0.4s' }}>
                  <p className="text-base font-medium sm:text-lg md:text-xl lg:text-4xl text-gray-300 max-w-3xl items-center">
                  Intelligent robotic systems engineered with precision and adaptability to solve real-world challenges and advance automation across industries.
                  </p>
                  <div className="flex-shrink-0 animate-rise-up" style={{ animationDelay: '0.6s' }}>
                  <button className="bg-zinc-900 text-white font-semibold text-base py-4 px-6 rounded-full border-2 border-sky-400 shadow-[0_0_20px_0px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_0px_rgba(14,165,233,0.6)] hover:border-sky-500 transition-all duration-100 flex items-center gap-3 group active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                    <span>EXPLORE THE EPIC</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5" />
                    </svg>
                  </button>
                  </div>
                </div>
                <div className="animate-rise-up backdrop-blur-2xl " style={{ animationDelay: '0.8s' }}>
                  <AI_Features_Section />
                </div>
            </div>
            {/* Right side content */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="animate-rise-up" style={{ animationDelay: '1s' }}>
                <JobCard />
              </div>
              <div className="animate-rise-up" style={{ animationDelay: '1.2s' }}>
                <QuickLinks />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
} 

const JobCard = () => {
  return (
    <div className="relative w-full mt-5 max-w-sm h-70 rounded-3xl overflow-hidden shadow-2xl group text-white">
      <img 
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
        alt="Team working together" 
        className="w-full h-full object-cover p-2 rounded-3xl bg-[#E9F8FF]/70 transition-transform duration-500 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-3xl font-bold leading-tight">
          We're Hiring
        </h3>
        <p className="text-lg text-gray-300 mt-1">Join our team of innovators</p>
        <div className="flex justify-between items-center mt-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <p className="text-black font-bold text-xs tracking-tighter">NOW</p>
          </div>
          {/* <button className="bg-white/30 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-2 text-white font-semibold hover:bg-white/40 transition-colors">
            View Roles
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button> */}
          <InteractiveHoverButton>View Roles</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}

const QuickLinks = () => {
  const features = [
    {
      mainTitle: 'Industries We Serve',
      subText: 'Discover how our robotic solutions are transforming various sectors.',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop',
      href: '/industries'
    },
    {
      mainTitle: 'Special Purpose Machines',
      subText: 'Custom-built machinery designed for your unique operational needs.',
      image: 'https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg',
      href: '/special-purpose-machines'
    },
    {
      mainTitle: 'Automation Solutions',
      subText: 'Boost efficiency and productivity with our cutting-edge automation.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
      href: '/automation'
    },
    {
      mainTitle: 'Our Projects',
      subText: 'Explore our portfolio of successful robotics implementations.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      href: '/projects'
    },
    {
      mainTitle: 'Careers at Robo',
      subText: 'Join our team and help us build the future of robotics.',
      image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop',
      href: '/career'
    },
    {
      mainTitle: 'Robotics Blog',
      subText: 'Read the latest news, insights, and articles from our experts.',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop',
      href: '/blog'
    }
  ];

  const cardsPerPage = 3;
  const displayFeatures = [...features, ...features.slice(0, cardsPerPage)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardItemHeight = 10;
  const gap = 1; 
  const cardScrollHeight = cardItemHeight + gap;
  const containerHeight = (cardItemHeight * cardsPerPage) + (gap * (cardsPerPage - 1));
  const yOffset = -currentIndex * cardScrollHeight;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  
  const handleTransitionEnd = () => {
    if (currentIndex >= features.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex % features.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <div className='p-2 bg-gradient-to-b from-[#E9F8FF]/70 via-[#90B2D8]/70 to-[#18171a]/70 backdrop-blur-lg rounded-3xl  max-w-md overflow-hidden'>
        <div className="w-full  rounded-3xl  max-w-md overflow-hidden" style={{ height: `${containerHeight}rem` }}>
      <div 
        className="w-full space-y-3"
        style={{ 
          transform: `translateY(${yOffset}rem)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {displayFeatures.map((feature, index) => (
          <div key={index} className="relative rounded-3xl w-xs overflow-hidden" style={{ height: `${cardItemHeight}rem`}}>
            <img src={feature.image} alt={feature.mainTitle} className="absolute inset-0 w-full h-full object-cover" loading="lazy" height="160" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0  p-4 flex flex-col justify-end">
              <h4 className="font-semibold text-lg leading-tight text-white">{feature.mainTitle}</h4>
              <p className="text-sm text-gray-200 mt-1">{feature.subText}</p>
              <a href={feature.href} className="text-white font-bold text-sm mt-4 self-start hover:underline">
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

const aiFeaturesData: AIFeature[] = [
  {
    id: 1,
    title: "Our robots perceive the world with superhuman precision using advanced sensors",
    image: "https://images.pexels.com/photos/17716911/pexels-photo-17716911.jpeg",
    statTitle: "Perception",
    statPercentage: 99,
    statLabel: "Accuracy",
    highlighted: {
      "perceive": "bg-gradient-to-r from-cyan-500 to-blue-500",
      "sensors": "bg-gradient-to-r from-teal-400 to-emerald-500",
    }
  },
  {
    id: 2,
    title: "Complex manipulation tasks are handled with delicate dexterity and adaptive learning",
    image: "https://images.pexels.com/photos/8438865/pexels-photo-8438865.jpeg",
    statTitle: "Manipulation",
    statPercentage: 85,
    statLabel: "Dexterity",
    highlighted: {
      "manipulation": "bg-gradient-to-r from-pink-500 to-rose-500",
      "adaptive": "bg-gradient-to-r from-purple-500 to-violet-500",
    }
  },
  {
    id: 3,
    title: "Autonomous navigation in dynamic environments powered by real-time SLAM",
    image: "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg",
    statTitle: "Navigation",
    statPercentage: 95,
    statLabel: "Reliability",
    highlighted: {
      "Autonomous": "bg-gradient-to-r from-amber-500 to-orange-600",
      "SLAM": "bg-gradient-to-r from-yellow-400 to-lime-500",
    }
  }
];

const AI_Features_Section = () => {
  const DURATION_PER_SLIDE = 5000; // 5 seconds
  const UPDATE_INTERVAL = 50; // 20 times per second

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + UPDATE_INTERVAL);
    }, UPDATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const totalSlides = aiFeaturesData.length;
  const totalDuration = DURATION_PER_SLIDE * totalSlides;
  const currentTimeInCycle = time % totalDuration;
  
  const activeIndex = Math.floor(currentTimeInCycle / DURATION_PER_SLIDE);
  const progress = (currentTimeInCycle % DURATION_PER_SLIDE) / (DURATION_PER_SLIDE / 100);

  const parseTitle = (title: string, highlighted: { [key: string]: string }) => {
    const parts = title.split(new RegExp(`(${Object.keys(highlighted).join('|')})`, 'g'));
    return parts.map((part, index) => 
      highlighted[part] 
        ? <span key={index} className={`relative inline-block px-2 -my-1 rounded-full text-white ${highlighted[part]}`}>{part}</span>
        : part
    );
  };
  
  const currentFeature = aiFeaturesData[activeIndex];
  
  return (
    <div className="w-[98%] h-[370px] mt-2 bg-gradient-to-r from-[#18171a] via-[#90B2D8]/90 to-[#18171a] rounded-2xl backdrop-blur-md p-8 relative overflow-hidden   flex flex-col md:flex-row gap-10 items-stretch">
      {/* Left Column */}
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        {/* Top part of left column */}
        <div>
          <div className="flex items-start gap-6">
            {/* Stat Card */}
            <div className="flex-shrink-0">
              <div className="bg-white text-black p-4 rounded-2xl shadow-lg relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-gray-500/50 rounded-2xl transform rotate-[-8deg] -z-10"></div>
                <p className="text-5xl font-bold">{currentFeature.statPercentage}%</p>
                <p className="text-gray-600 mt-1">{currentFeature.statLabel}</p>
              </div>
            </div>

            {/* Title Carousel */}
            <div className="flex-grow relative min-h-[8rem]">
              {aiFeaturesData.map((feature, index) => (
                <h2 key={feature.id} className={`absolute inset-0 text-3xl lg:text-4xl text-white font-medium leading-tight transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                  {parseTitle(feature.title, feature.highlighted)}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom part of left column - Progress Bars */}
        <div className="flex flex-col md:flex-row justify-between mt-8 pt-6 border-t border-white text-white gap-8">
          {aiFeaturesData.map((feature, index) => (
            <div key={feature.id} className="flex-1 flex flex-col gap-2 cursor-pointer" onClick={() => { setTime(index * DURATION_PER_SLIDE) }}>
              <p className="text-sm">
                <span className="font-mono mr-2">{`0${feature.id}`}</span>
                {feature.statTitle}
              </p>
              <div className="w-full bg-sky-800 rounded-full h-1">
                <div className="bg-white h-full rounded-full" style={{ width: `${index === activeIndex ? progress : (index < activeIndex ? 100 : 0)}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Column - Image Carousel */}
      <div className="w-full md:w-1/3 rounded-2xl overflow-hidden relative">
        {aiFeaturesData.map((feature, index) => (
          <img key={feature.id} src={feature.image} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`} alt={feature.statTitle} loading="lazy" height="160" />
        ))}
      </div>
    </div>
  );
}; 
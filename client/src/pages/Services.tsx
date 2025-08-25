import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';
import ContactForm from '../components/ContactForm';
import { useEffect, useRef, useState } from 'react';
import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';


const contactInfo = [
  {
    icon: <IconMail size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Email us',
    value: 'youremail@gmail.com',
    href: 'mailto:youremail@gmail.com',
  },
  {
    icon: <IconPhone size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Call us',
    value: '(+91) 9876543210',
    href: 'tel:9876543210',
  },
  {
    icon: <IconMapPin size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Our location',
    value: 'Crosby Street, NY, US',
    href: 'https://maps.google.com',
  },
];

const stats = [
  {
    title: 'Machine Tending',
    subtitle: 'Excellence in Service',
    desc: 'Machine tending, in manufacturing, refers to the automated process of loading and unloading parts into and out of production machines, often using robots.',
    image: '/images/navdropimages/MachineTending.png',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
  },
  {
    title: 'Palletizing',
    subtitle: 'Global Impact',
    desc: 'Palletizing is the process of arranging products into a pallet, often using robots. This involves stacking, wrapping, and securing items to create a stable, reusable platform for transportation.',
    image: '/images/navdropimages/Palletizing.png',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(147,51,234,0.3)]',
  },
  {
    title: 'Deburring',
    subtitle: 'Industry Expertise',
    desc: 'Deburring is the process of removing small imperfections, known as burrs, from the surface edges of metal, plastic, or other materials after machining, drilling, milling, cutting, or stamping operations.',
    image: '/images/navdropimages/deburring.png',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(34,197,94,0.3)]',
  }
];

const stats1 = [
  {
    title: 'CNC Automations',
    desc: ' CNC (Computer Numerical Control) automation revolutionizes modern manufacturing by enabling high-precision, repeatable, and efficient production processes.',
    image: '/images/navdropimages/CNC_Automation.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
  },
  {
    title: 'Packaging Machine',
    desc: 'Packing Machine Automation: Accelerating End-of-Line Efficiency Packing machine automation refers to the use of automated machinery and intelligent systems to pack, seal, label for distribution.',
    image: '/images/Packing_Machine.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(147,51,234,0.3)]',
  },
  
];

const stats2 = [
  {
    title: 'Custom Panel Design and Manufacturing',
    desc: ' From small relay-based enclosures to large PLC/SCADA-integrated panels, we deliver solutions that are engineered for performance, scalability, and longevity.',
    image: '/images/Automation-Control-Panels.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
  },
  
];

const stats2a = [
  {
    title: 'SCADA Systems',
    desc: 'Supervisory Control and Data Acquisition (SCADA) systems provide real-time monitoring and control of industrial processes, enabling operators to manage complex automation systems efficiently.',
    image: '/images/products.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
  },
  {
    title: 'HMI Solutions',
    desc: 'Human Machine Interface (HMI) solutions provide intuitive touch-screen interfaces for operators to interact with and monitor industrial automation systems.',
    image: '/images/products.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(147,51,234,0.3)]',
  },
];
const stats3 = [
  {
    title: 'Robot Programming',
    desc: ' The Brain Behind Automation Robot programming is the process of creating instructions that guide industrial or collaborative robots to perform specific tasks.',
    image: '/images/Robot_Programming.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
  }
];
const stats4 = [
  {
    title: 'PLC and HMI Programming',
    desc: 'PLC and HMI programming are essential components of industrial automation, working together to control and monitor processes. PLCs (Programmable Logic Controllers) execute logic and control functions based on input signals, while HMIs (Human Machine Interfaces) provide a visual interface for operators to interact with and monitor the PLC and the system it controls.',
    image: '/images/plc_and_hmi.jpg',
    hoverColor: 'group-hover:text-orange-400',
    hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
    hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
  }
];
export default function Services() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // IntersectionObserver for stats grid
  useEffect(() => {
    const statsObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }
    return () => statsObserver.disconnect();
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add highlight effect
          element.style.transition = 'box-shadow 0.3s ease';
          element.style.boxShadow = '0 0 0 4px rgba(255, 153, 0, 0.3)';
          setTimeout(() => {
            element.style.boxShadow = '';
          }, 2000);
        }, 100);
      }
    }
  }, []);

  return (
    <div className="relative min-h-full w-full bg-[#ffe7b6] flex flex-col items-center pb-12 px-2 font-gilroy overflow-hidden">
      {/* Main Content (z-10) */}
      <div className="relative z-10 w-screen flex flex-col items-center">
        {/* Heading Section - Centered Modern Layout */}
        
          {/* Heading Section Background Image */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50 h-screen -z-10"></div>
          <div className="absolute inset-0 -z-20">
            <img
              src="/images/Image_4.webp"
              alt="Heading Background"
              className="w-full h-screen object-cover object-center select-none pointer-events-none"
              draggable="false"
            />
          </div>
          <FadeUpSection className="w-screen">
          <div className="w-full h-screen flex flex-col items-center justify-center bg-transparent rounded-none md:rounded-2xl px-4 md:px-10 py-10 mb-5 pt-25 relative z-10">
            <AnimatedSection
              customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.2 }}
            >
              <h1 className="w-full text-center text-4xl md:text-[5.7rem] font-semibold leading-tighter mb-4 md:mb-6 font-gilroy text-white">
                How Epic Automation's Robotic <br className='hidden sm:block' /> Innovations <br className='sm:hidden block' /> are Shaping the <br /> Future
              </h1>
            </AnimatedSection>
            <AnimatedSection
              customAnimation={{ y: 30, opacity: 0, duration: 0.8, delay: 0.4 }}
            >
              <p className="text-white text-center text-xl md:text-3xl mb-8 font-semibold font-gilroy">
                At Epic Automations, we pioneer AI-driven robotics, creating adaptive, efficient, <br /> ethical solutions for real‑world challenges.
              </p>
            </AnimatedSection>
            
              <div className="flex flex-col sm:flex-row gap-4 sm:w-full justify-center mb-2">
                <button className="bg-[#ff4f0f] cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#ff2f0f] transition font-gilroy">
                  Clarify Your Queries
                </button>
                <button className="border-2 border-[#ff4f0f] cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-black hover:text-white transition font-gilroy">
                  Explore Our Services
                </button>
              </div>
           
          </div>
        </FadeUpSection>
        {/* Robotics Auto cards */}
        <FadeUpSection>
          <section id="robotics-automation">
            <h2 className="max-w-full text-black text-4xl lg:text-7xl mt-3 sm:mt-4 md:mt-10 font-bold text-center">
              Robotics and Automation
            </h2>   
          </section>
        </FadeUpSection>
        <AnimatedSection 
          className="w-full px-4 mb-7 sm:mb-0 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}
        >
          {stats.map((stat, idx) => (
            <div key={stat.title} data-animate-child className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-start justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow}` } style={{ animationDelay: statsVisible ? `${0.2 + idx * 0.1}s` : undefined }}>
              {/* Top: Image */}
              <div className="flex flex-col items-start w-full mb-1">
                <div className="text-start">
                  <h3 className={`text-[#ff4f0f] text-3xl font-bold transition-all duration-300`}>{stat.title}</h3>
                </div>
              </div>
              {/* Bottom: Description */}
              <div className="text-black  sm:mb-5 text-lg font-semibold max-w-md text-start leading-tight">{stat.desc}</div>
              
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-[240px] sm:w-full mt-5 sm:mt-0 sm:h-[450px] object-cover"
                  />
            </div> 
          ))}
        </AnimatedSection>

        <FadeUpSection>
          <section id="special-purpose-machine">
            <h2 className="max-w-full text-black text-3xl md:text-4xl lg:text-7xl mt-3 sm:mt-4 md:mt-10 font-bold text-center">
              Special Purpose Machine SPM
            </h2>
          </section>
        </FadeUpSection>
        {/* services cards */}
        <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
        <div ref={statsRef} className="w-full px-4 sm:px-6 md:px-10 mb-7 sm:mb-0 mt-8 sm:mt-16 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {stats1.map((stat, idx) => (
            <div key={stat.title} className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-start justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow} ${statsVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: statsVisible ? `${0.2 + idx * 0.1}s` : undefined }}>
              {/* Top: Image */}
              <div className="flex flex-col items-start w-full mb-1">
                
                <div className="text-start">
                  <h3 className={`text-[#ff4f0f] text-3xl font-bold transition-all duration-300`}>{stat.title}</h3>
                </div>
              </div>
              {/* Bottom: Description */}
              <div className="text-black text-lg font-semibold  mb-5 text-start leading-tight">{stat.desc}</div>
              
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-[240px] sm:w-full sm:h-[450px] object-cover"
                  />
                </div> 
          ))}
        </div>
        </AnimatedSection>
        
        <FadeUpSection>
          <section id="scada">
            <h2 className="max-w-full text-black text-4xl lg:text-7xl mt-3 sm:mt-4 md:mt-10 font-bold text-center">
              SCADA & HMI Solutions
            </h2>  
          </section>
        </FadeUpSection>
        
        <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
        <div className="w-full px-4 sm:px-6 md:px-10 mb-7 sm:mb-0 mt-8 sm:mt-16 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {stats2a.map((stat) => (
            <div key={stat.title} className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-start justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow}`}>
              {/* Top: Image */}
              <div className="flex flex-col items-start w-full mb-1">
                <div className="text-start">
                  <h3 className={`text-[#ff4f0f] text-3xl font-bold transition-all duration-300`}>{stat.title}</h3>
                </div>
              </div>
              {/* Bottom: Description */}
              <div className="text-black text-lg font-semibold mb-3 sm:mb-10 text-start leading-tight">{stat.desc}</div>
              
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-[240px] sm:w-full sm:h-[450px] object-cover"
                  />
                </div> 
          ))}
        </div>
        </AnimatedSection>
        
        <FadeUpSection>
          <section id="custom-panel-design">
            <h2 className="max-w-full text-black text-4xl lg:text-7xl mt-3 sm:mt-4 md:mt-10 font-bold text-center">
              Custom Panel Design & Manufacturing
            </h2>  
          </section>
        </FadeUpSection>
        
        
        

        <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
        <div ref={statsRef} className="w-screen px-4 sm:px-6 md:px-10 mt-8 sm:mt-16 md:mt-12 grid grid-cols-1  gap-4 sm:gap-6 md:gap-8">
          {stats2.map((stat, idx) => (
            <div key={stat.title} className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-start justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow} ${statsVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: statsVisible ? `${0.2 + idx * 0.1}s` : undefined }}>
              {/* Top: Image */}
              <div className="flex flex-col items-start w-full mb-2">
                
                <div className="text-start">
                  <h3 className={`text-[#ff4f0f] text-3xl font-bold transition-all duration-300`}>{stat.title}</h3>
                </div>
              </div>
              {/* Bottom: Description */}
              <div className="text-black text-lg font-semibold mb-3 sm:mb-10 text-start leading-tight">{stat.desc}</div>
              
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-[240px] sm:w-full sm:h-[500px] object-cover"
                  />
                </div> 
          ))}
        </div>
        </AnimatedSection>
        <FadeUpSection>
          <section id="robot-programming">
            <h2 className="max-w-full text-black text-3xl md:text-4xl lg:text-7xl mt-3 sm:mt-4 md:mt-10 font-bold text-center">
              Robot Programming Services
            </h2>
          </section>
        </FadeUpSection>
        
        
        
        <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
        <div ref={statsRef} className="w-screen px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-12 grid grid-cols-1  gap-4 sm:gap-6 md:gap-8">
          {stats3.map((stat, idx) => (
            <div key={stat.title} className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-start justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow} ${statsVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: statsVisible ? `${0.2 + idx * 0.1}s` : undefined }}>
              {/* Top: Image */}
              <div className="flex flex-col items-start w-full mb-1">
                
                <div className="text-start">
                  <h3 className={`text-[#ff4f0f] text-3xl font-bold transition-all duration-300`}>{stat.title}</h3>
                </div>
              </div>
              {/* Bottom: Description */}
              <div className="text-black text-lg font-semibold mb-3 sm:mb-10 text-start leading-tight">{stat.desc}</div>
              
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-[240px] sm:w-full sm:h-[500px] object-cover"
                  />
                </div> 
          ))}
        </div>
        </AnimatedSection>
        
        <FadeUpSection>
          <section id="plc-hmi-programming">
            <h2 className="max-w-full text-black text-3xl md:text-4xl lg:text-7xl mt-3 sm:mt-4 md:mt-10 font-bold text-center">
              PLC & HMI Programming
            </h2>
          </section>
        </FadeUpSection>
        
        <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
        <div ref={statsRef} className="w-full px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-12 grid grid-cols-1  gap-4 sm:gap-6 md:gap-8">
          {stats4.map((stat, idx) => (
            <div key={stat.title} className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-start justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8  transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow} ${statsVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: statsVisible ? `${0.2 + idx * 0.1}s` : undefined }}>
              {/* Top: Image */}
              <div className="flex flex-col items-start w-full mb-1">
                
                <div className="text-start">
                  <h3 className={`text-[#ff4f0f] text-3xl font-bold transition-all duration-300`}>{stat.title}</h3>
                </div>
              </div>
              {/* Bottom: Description */}
              <div className="text-black text-lg font-semibold max-w-full mb-3 sm:mb-10 text-start leading-tight">{stat.desc}</div>
              
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-[240px] sm:w-full sm:h-[500px] object-cover"
                  />
                </div> 
            
          ))}
        </div>
        </AnimatedSection>
        
        
        {/* contact us form */}

        <section className="w-screen min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-0 sm:px-10 py-10 md:py-0">
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 mx-10 bg-transparent">
            {/* Left: Contact Info */}
            <div className="flex flex-col w-full gap-2 sm:gap-6 justify-center h-full">
              <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-md sm:text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4f0f] mr-2 inline-block"></span>
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
                    <div className="flex py-2 items-center gap-4">
                      <span className="bg-white/20 border border-white/25 rounded-xl p-1 sm:p-2 flex items-center justify-center">
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-black text-lg sm:text-xl font-semibold">{item.label}</span>
                        <span className="text-black text-base sm:text-lg">{item.value}</span>
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
            <ContactForm source="services-page" />
          </div>
        </section>
      </div>
    </div>
  );
}


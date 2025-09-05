import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';
import ContactForm from '../components/ContactForm';
import { useEffect,  useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import React from 'react';
import { 
  Smartphone, 
  Package, 
  Layers, 
  Settings, 
  PanelTop, 
  Zap, 
  Eye,
  Target,
  CheckCircle,
  X,
  Zap as ZapIcon
} from "lucide-react";
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
// const standardServices = [  
//   {
//     id: 1,
//     icon: Package,
//     title: "Machine Tending",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "Autonomous machine tending with computer vision and adaptive gripping.",
//     longDescription: "Machine tending, in manufacturing, refers to the automated process of loading and unloading parts into and out of production machines, often using robots.",
//     keyBenefit: "24/7 operation",
//     videoThumbnail: "/images/navdropimages/MachineTending.png",
//     detailImage: "/images/navdropimages/MachineTending.png",
//     features: ["Vision System", "Adaptive Grip", "Quality Check"],
//     specs: { "Accuracy": "99.9%", "Speed": "15s/cycle", "Uptime": "99.5%" }
//   },
//   {
//     id: 2,
//     icon: Layers,
//     title: "Palletizing",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "Robotic palletizing using machine learning for efficient stacking.",
//     longDescription: "Palletizing is the process of arranging products into a pallet, often using robots. This involves stacking, wrapping, and securing items to create a stable, reusable platform for transportation.",
//     keyBenefit: "3x faster speeds",
//     videoThumbnail: "/images/palletizing_robot1.jpg",
//     detailImage: "/images/palletizing_robot1.jpg",
//     features: ["ML Patterns", "Multi-SKU", "Auto-Sizing"],
//     specs: { "Speed": "1000/hr", "Patterns": "500+", "Weight": "60kg" }
//   },
//   {
//     id: 3,
//     icon: Settings,
//     title: "Deburring",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "Robotic deburring with force feedback for consistent finishing.",
//     longDescription: "Deburring is the process of removing small imperfections, known as burrs, from the surface edges of metal, plastic, or other materials after machining, drilling, milling, cutting, or stamping operations.",
//     keyBenefit: "Consistent quality",
//     videoThumbnail: "/images/deburring.jpg",
//     detailImage: "/images/deburring.jpg",
//     features: ["Force Control", "3D Scanning", "Auto-Adjust"],
//     specs: { "Precision": "±0.05mm", "Force": "0-50N", "Finish": "Ra 0.1" }
//   },
//   {
//     id: 4,
//     icon: PanelTop,
//     title: "CNC Automation",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "Smart IoT panels with diagnostics for monitoring and maintenance.",
//     longDescription: "CNC (Computer Numerical Control) automation revolutionizes modern manufacturing by enabling high-precision, repeatable, and efficient production processes.",
//     keyBenefit: "UL certified",
//     videoThumbnail: "/images/CNC.jpg",
//     detailImage: "/images/CNC.jpg",
//     features: ["IoT Ready", "Diagnostics", "Remote Access"],
//     specs: { "Rating": "IP65", "Temp": "-20°C to 60°C", "Voltage": "480V" }
//   },
//   {
//     id: 5,
//     icon: Zap,
//     title: "Packaging Machine",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "End-to-end erghjiklghilrwo automation with digital twin technology.",
//     longDescription: "Packing Machine Automation: Accelerating End-of-Line Efficiency Packing machine automation refers to the use of automated machinery and intelligent systems to pack, seal, label for distribution.",
//     keyBenefit: "Complete integration",
//     videoThumbnail: "/images/Packing_Machine.jpg",
//     detailImage: "/images/Packing_Machine.jpg",
//     features: ["Digital Twin", "AI Planning", "Simulation"],
//     specs: { "Efficiency": "+40%", "Integration": "100%", "Simulation": "Real-time" }
//   },
//   {
//     id: 6,
//     icon: Smartphone,
//     title: "SCADA",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "Supervisory Control and Data Acquisition systems for industrial automation.",
//     longDescription: "SCADA (Supervisory Control and Data Acquisition) systems provide real-time monitoring and control of industrial processes, enabling operators to manage complex automation systems efficiently.",
//     keyBenefit: "Real-time monitoring",
//     videoThumbnail: "/images/SCADA.jpg",
//     detailImage: "/images/SCADA.jpg",
//     features: ["Real-time Control", "Data Acquisition", "System Monitoring"],
//     specs: { "Response": "<10ms", "Languages": "25+", "Displays": "4K" }
//   },
//   {
//     id: 7,
//     icon: Smartphone,
//     title: "Robot Programming",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "The Brain Behind Automation - creating instructions for industrial robots.",
//     longDescription: "Robot programming is the process of creating instructions that guide industrial or collaborative robots to perform specific tasks with precision and efficiency.",
//     keyBenefit: "Precision control",
//     videoThumbnail: "/images/robot.jpg",
//     detailImage: "/images/robot.jpg",
//     features: ["Code Generation", "Path Planning", "Motion Control"],
//     specs: { "Response": "<10ms", "Languages": "25+", "Displays": "4K" }
//   },
//   {
//     id: 8,
//     icon: Smartphone,
//     title: "PLC & HMI Programming",
//     subtitle: "AI-Enhanced Precision Control",
//     description: "PLC and HMI programming for industrial automation control and monitoring.",
//     longDescription: "PLC and HMI programming are essential components of industrial automation, working together to control and monitor processes. PLCs (Programmable Logic Controllers) execute logic and control functions based on input signals, while HMIs (Human Machine Interfaces) provide a visual interface for operators to interact with and monitor the PLC and the system it controls.",
//     keyBenefit: "Integrated control",
//     videoThumbnail: "/images/plchmi.jpg",
//     detailImage: "/images/plchmi.jpg",
//     features: ["Logic Control", "Visual Interface", "Process Monitoring"],
//     specs: { "Response": "<10ms", "Languages": "25+", "Displays": "4K" }
//   },
// ];

const standardServices = [  
  {
    id: 1,
    icon: Package,
    title: "Machine Tending",
    subtitle: "Automated loading and unloading of machines",
    description: "Autonomous machine tending with computer vision and adaptive gripping.",
    longDescription: "Machine tending, in manufacturing, refers to the automated process of loading and unloading parts into and out of production machines, often using robots.",
    keyBenefit: "Uninterrupted 24/7 operation",
    videoThumbnail: "/images/navdropimages/MachineTending.png",
    detailImage: "/images/navdropimages/MachineTending.png",
    features: ["AI Vision System", "Adaptive Robotic Gripping", "Automated Quality Inspection"],
    specs: { "Accuracy": "99.9%", "Cycle Time": "15s", "System Uptime": "99.5%" },
    roi: { "Labor Savings": "60%", "Production Increase": "40%", "ROI Timeline": "18 months" }
  },
  {
    id: 2,
    icon: Layers,
    title: "Palletizing",
    subtitle: "AI-driven robotic pallet stacking and efficient material handling.",
    description: "Robotic palletizing using machine learning for efficient stacking.",
    longDescription: "Palletizing is the process of arranging products into a pallet, often using robots. This involves stacking, wrapping, and securing items to create a stable, reusable platform for transportation.",
    keyBenefit: "Triple stacking speed vs. manual",
    videoThumbnail: "/images/palletizing_robot1.jpg",
    detailImage: "/images/palletizing_robot1.jpg",
    features: ["Smart Pattern Recognition", "Multi-SKU Handling", "Automatic Sizing"],
    specs: { "Throughput": "1000/hr", "Stack Patterns": "500+", "Max Load": "60kg" },
    roi: { "Efficiency Gain": "200%", "Space Utilization": "35%", "ROI Timeline": "12 months" }
  },
  {
    id: 3,
    icon: Settings,
    title: "Deburring",
    subtitle: "Robotic surface finishing process delivering consistent, high precision.",
    description: "Robotic deburring with force feedback for consistent finishing.",
    longDescription: "Deburring is the process of removing small imperfections, known as burrs, from the surface edges of metal, plastic, or other materials after machining, drilling, milling, cutting, or stamping operations.",
    keyBenefit: "Consistent finishing quality",
    videoThumbnail: "/images/deburring.jpg",
    detailImage: "/images/deburring.jpg",
    features: ["Force Feedback Control", "3D Surface Scanning", "Adaptive Edge Removal"],
    specs: { "Precision": "±0.05mm", "Force Range": "0-50N", "Surface Finish": "Ra 0.1" },
    roi: { "Quality Improvement": "85%", "Scrap Reduction": "70%", "ROI Timeline": "15 months" }
  },
  {
    id: 4,
    icon: PanelTop,
    title: "CNC Automation",
    subtitle: "Smart CNC integration with IoT Panels",
    description: "Smart IoT panels with diagnostics for monitoring and maintenance.",
    longDescription: "CNC (Computer Numerical Control) automation revolutionizes modern manufacturing by enabling high-precision, repeatable, and efficient production processes.",
    keyBenefit: "Certified reliability with UL standards",
    videoThumbnail: "/images/CNC.jpg",
    detailImage: "/images/CNC.jpg",
    features: ["IoT-Enabled Monitoring", "Predictive Diagnostics", "Remote Access Control"],
    specs: { "Protection Rating": "IP65", "Operating Temp": "-20°C to 60°C", "Input Voltage": "480V" },
    roi: { "Downtime Reduction": "45%", "Maintenance Cost": "30%", "ROI Timeline": "20 months" }
  },
  {
    id: 5,
    icon: Zap,
    title: "Packaging Machine",
    subtitle: "Automated end-of-line packaging solutions",
    description: "End-to-end packaging automation with digital twin technology.",
    longDescription: "Packing Machine Automation: Accelerating End-of-Line Efficiency Packing machine automation refers to the use of automated machinery and intelligent systems to pack, seal, label for distribution.",
    keyBenefit: "Fully integrated packaging line",
    videoThumbnail: "/images/Packing_Machine.jpg",
    detailImage: "/images/Packing_Machine.jpg",
    features: ["Digital Twin Simulation", "AI-Powered Planning", "Seamless Integration"],
    specs: { "Efficiency Gain": "+40%", "Integration Level": "100%", "Simulation": "Real-time" },
    roi: { "Packaging Speed": "150%", "Error Reduction": "90%", "ROI Timeline": "16 months" }
  },
  {
    id: 6,
    icon: Smartphone,
    title: "SCADA",
    subtitle: "Real-time industrial monitoring and control",
    description: "Supervisory Control and Data Acquisition systems for industrial automation.",
    longDescription: "SCADA (Supervisory Control and Data Acquisition) systems provide real-time monitoring and control of industrial processes, enabling operators to manage complex automation systems efficiently.",
    keyBenefit: "Instant response and visibility",
    videoThumbnail: "/images/SCADA.jpg",
    detailImage: "/images/SCADA.jpg",
    features: ["Live Process Control", "Comprehensive Data Acquisition", "System Health Monitoring"],
    specs: { "Response Time": "<10ms", "Supported Languages": "25+", "Max Display": "4K" },
    roi: { "Decision Speed": "300%", "System Visibility": "100%", "ROI Timeline": "14 months" }
  },
  {
    id: 7,
    icon: Smartphone,
    title: "Robot Programming",
    subtitle: "Customized programming for industrial robots",
    description: "The Brain Behind Automation - creating instructions for industrial robots.",
    longDescription: "Robot programming is the process of creating instructions that guide industrial or collaborative robots to perform specific tasks with precision and efficiency.",
    keyBenefit: "Flexible, task-specific control",
    videoThumbnail: "/images/robot.jpg",
    detailImage: "/images/robot.jpg",
    features: ["Automated Code Generation", "Optimized Path Planning", "Advanced Motion Control"],
    specs: { "Latency": "<10ms", "Supported Languages": "25+", "Visualization": "4K" },
    roi: { "Programming Time": "75%", "Flexibility": "200%", "ROI Timeline": "10 months" }
  },
  {
    id: 8,
    icon: Smartphone,
    title: "PLC & HMI Programming",
    subtitle: "Integrated control and visualization systems",
    description: "PLC and HMI programming for industrial automation control and monitoring.",
    longDescription: "PLC and HMI programming are essential components of industrial automation, working together to control and monitor processes. PLCs (Programmable Logic Controllers) execute logic and control functions based on input signals, while HMIs (Human Machine Interfaces) provide a visual interface for operators to interact with and monitor the PLC and the system it controls.",
    keyBenefit: "Unified process management",
    videoThumbnail: "/images/plchmi.jpg",
    detailImage: "/images/plchmi.jpg",
    features: ["Logic-Based Control", "Interactive Visual Interface", "Comprehensive Process Monitoring"],
    specs: { "Response Time": "<10ms", "Supported Languages": "25+", "Max Display": "4K" },
    roi: { "Integration Efficiency": "80%", "Operator Training": "60%", "ROI Timeline": "13 months" }
  },
];


export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof standardServices[0] | null>(null);
  const [activeTabs, setActiveTabs] = useState<{ [key: number]: string }>({});
  const navigate = useNavigate();

  const handleExploreServicesClick = () => {
    // Scroll to services section on the same page
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClarifyQueriesClick = () => {
    navigate('/help-center#helpcenter-contact-form');
  };
  // IntersectionObserver for stats grid
  // Set default active tabs for each service
  useEffect(() => {
    const defaultTabs: { [key: number]: string } = {};
    standardServices.forEach(service => {
      defaultTabs[service.id] = 'features';
    });
    setActiveTabs(defaultTabs);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    const storedHash = sessionStorage.getItem('scrollToService');
    // Use stored hash from navbar navigation if available, otherwise use URL hash
    const targetHash = storedHash || (hash ? hash.substring(1) : null);
    if (targetHash) {
      // Clear the stored hash
      if (storedHash) {
        sessionStorage.removeItem('scrollToService');
      }
      // Wait for the page to fully load and render
      const scrollToElement = () => {
        const element = document.getElementById(targetHash);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add highlight effect
          element.style.transition = 'box-shadow 0.3s ease';
          element.style.boxShadow = '0 0 0 4px rgba(255, 153, 0, 0.3)';
          setTimeout(() => {
            element.style.boxShadow = '';
          }, 2000);
        } else {
          // If element not found, try again after a short delay
          setTimeout(scrollToElement, 100);
      }
      };
      // Start the scroll process after a delay to ensure page is loaded
      setTimeout(scrollToElement, 500);
    }
  }, []);
  return (
    <div className="relative min-h-full w-full bg-gradient-to-br from-[#ffd278] via-white to-[#ffd278] flex flex-col items-center pb-12 px-2 font-gilroy overflow-hidden">
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
              customAnimation={{ y: 20, opacity: 0, duration: 0.5, delay: 0.1 }}
            >
              <h1 className="w-full text-center text-4xl md:text-[5.7rem] font-semibold leading-tighter mb-4 md:mb-6 font-gilroy text-white">
                How Epic Automation's Robotic <br className='hidden sm:block' /> Innovations <br className='sm:hidden block' /> are Shaping the <br /> Future
              </h1>
            </AnimatedSection>
            <AnimatedSection
              customAnimation={{ y: 15, opacity: 0, duration: 0.4, delay: 0.2 }}
            >
              <p className="text-white text-center text-xl md:text-3xl mb-8 font-semibold font-gilroy">
                At Epic Automations, we pioneer AI-driven robotics, creating adaptive, efficient, <br /> ethical solutions for real‑world challenges.
              </p>
            </AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-4 sm:w-full justify-center mb-2">
                <button 
                  onClick={handleClarifyQueriesClick}
                  className="bg-[#ff4f0f] cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#ff2f0f] transition font-gilroy"
                >
                  Clarify Your Queries
                </button>
                <button 
                  onClick={handleExploreServicesClick}
                  className="border-2 border-[#ff4f0f] cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-black hover:text-white transition font-gilroy"
                >
                  Explore Our Services
                </button>
              </div>
          </div>
        </FadeUpSection>
        <motion.h3 
          className="bg-gradient-to-bl mt-8 sm:mt-10 mb-8 sm:mb-15 from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-7xl font-bold px-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          Our Services
        </motion.h3>
        {/* Revolutionary Holographic Service Cards */}
        <div id="services-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 max-w-full mx-4 sm:mx-8 lg:mx-25 mb-8 sm:mb-16">
          {standardServices.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            return (
                              <motion.div
                  key={service.id}
                  id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '-')}
                  className="group relative"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-10%" }}
                  onHoverStart={() => setHoveredCard(service.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                {/* Holographic Card Container */}
                <div className="relative">
                  {/* Outer Hexagonal Glow Effect */}
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#E85A2B]/15 via-[#2C5AA0]/15 to-[#00D4FF]/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div> */}
                  {/* Main Card */}
                  <div 
                    className={`
                      relative bg-white h-[600px] sm:h-[700px] lg:h-[800px] flex flex-col
                      backdrop-blur-xl border-2 border-[#1A1A1A]/10 rounded-xl sm:rounded-2xl overflow-hidden
                      transition-all duration-500 group-hover:border-[#E85A2B]/40 shadow-xl shadow-[#1A1A1A]/30
                      ${isHovered ? 'transform scale-105 rotate-1 shadow-2xl shadow-[#E85A2B]/20' : ''}
                    `}
                    // style={{
                    //   background: isHovered ? 
                    //     'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(232, 90, 43, 0.04), rgba(44, 90, 160, 0.04))' :
                    //     'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.9), rgba(255, 255, 255, 0.95))'
                    // }}
                  >
                    {/* Top Section - Image & Icon */}
                    <div className="relative h-48 sm:h-56 lg:h-68 overflow-hidden">
                      <ImageWithFallback
                        src={service.videoThumbnail}
                        alt={`${service.title} technology`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Holographic Icon */}
                      <motion.div
                        className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 h-12 sm:w-16 sm:h-16"
                        whileHover={{ scale: 1.2, rotateY: 180 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-[#E85A2B] via-[#2C5AA0] to-[#00D4FF] rounded-lg sm:rounded-xl flex items-center justify-center shadow-2xl shadow-[#E85A2B]/30 border border-white/40">
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                      </motion.div>
                      {/* Performance Metric Badge */}
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <motion.div
                          className="bg-white/80 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-green-500/30 shadow-lg"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                        >
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 text-xs font-bold">{service.keyBenefit}</span>
              </div>
                        </motion.div>
                </div>
              </div>
                    {/* Content Section */}
                    <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4 flex-1 flex flex-col">
                      {/* Title & Subtitle */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A1A1A] group-hover:text-gradient-holographic transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-xl text-[#2C5AA0] font-semibold opacity-90">
                          {service.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-md text-[#ff4f0f] font-semibold opacity-90">
                          {service.description}
                        </p>
        </div>
                      {/* Key Benefit Highlight */}
                      <div className="flex items-center justify-between p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-[#1A1A1A]/10 shadow-sm">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Target className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          <span className="text-[#1A1A1A]/90 font-bold text-sm sm:text-lg">Key Benefit</span>
                </div>
                        <span className="text-green-600 font-bold text-sm sm:text-lg">{service.keyBenefit}</span>
              </div>
                      {/* Interactive Tabs */}
                      <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col">
                        <div className="flex space-x-1 bg-[#1A1A1A]/5 p-1 rounded-lg">
                          {[
                            { key: 'features', icon: CheckCircle, label: 'Features' },
                            { key: 'specs', icon: Settings, label: 'Specs' },
                            { key: 'roi', icon: Target, label: 'ROI' }
                          ].map(({ key, icon: Icon, label }) => (
                            <button
                              key={key}
                              onClick={() => setActiveTabs(prev => ({ ...prev, [service.id]: key }))}
                              className={`
                                flex-1 px-1 sm:px-2 py-1.5 sm:py-2 text-xs font-medium rounded transition-all duration-200 flex items-center justify-center space-x-0.5 sm:space-x-1
                                ${activeTabs[service.id] === key 
                                  ? 'bg-[#ff4f0f] text-white shadow-lg' 
                                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/10'
                                }
                              `}
                            >
                              <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span className="text-xs">{label}</span>
                            </button>
                          ))}
                        </div>
                        
                        {/* Tab Content */}
                        <motion.div 
                          key={activeTabs[service.id]}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-1 bg-white/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-[#1A1A1A]/10 flex flex-col"
                        >
                          {activeTabs[service.id] === 'features' && (
                            <div className="space-y-2 flex-1 flex flex-col">
                              <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] mb-1 sm:mb-2 flex items-center">
                                <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 mr-1 sm:mr-2" />
                                Key Features
                              </h4>
                              <div className="flex-1 space-y-1.5 sm:space-y-2">
                                {service.features.map((feature, idx) => (
                                  <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-1.5 sm:space-x-2"
                                  >
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                                    <span className="text-xs text-[#1A1A1A]/80">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                </div> 
                          )}
                          
                          {activeTabs[service.id] === 'specs' && (
                            <div className="space-y-2 flex-1 flex flex-col">
                              <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] mb-1 sm:mb-2 flex items-center">
                                <Settings className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff4f0f] mr-1 sm:mr-2" />
                                Technical Specifications
                              </h4>
                              <div className="flex-1 space-y-1.5 sm:space-y-2">
                                {Object.entries(service.specs).map(([key, value], idx) => (
                                  <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex justify-between items-center p-1 bg-white/20 rounded text-xs"
                                  >
                                    <span className="text-xs text-[#1A1A1A]/70 font-medium">{key}:</span>
                                    <span className="text-xs text-[#ff4f0f] font-bold">{value}</span>
                                  </motion.div>
          ))}
        </div>
                            </div>
                          )}
                          
                          {activeTabs[service.id] === 'roi' && (
                            <div className="space-y-2 flex-1 flex flex-col">
                              <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] mb-1 sm:mb-2 flex items-center">
                                <Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 mr-1 sm:mr-2" />
                                Return on Investment
                              </h4>
                              <div className="flex-1 space-y-1.5 sm:space-y-2">
                                {Object.entries(service.roi).map(([key, value], idx) => (
                                  <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex justify-between items-center p-1 bg-green-50/50 rounded border border-green-200/30 text-xs"
                                  >
                                    <span className="text-xs text-[#1A1A1A]/70 font-medium">{key}:</span>
                                    <span className="text-xs text-green-600 font-bold">{value}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {!activeTabs[service.id] && (
                            <div className="flex-1 flex items-center justify-center">
                              <span className="text-xs text-[#1A1A1A]/50 text-center px-2">Select a tab to view details</span>
                            </div>
                          )}
                        </motion.div>
                      </div>
                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-2 relative z-30 mt-auto">
                        <Button 
                          variant="outline" 
                          className="flex-1 py-3 sm:py-4 lg:py-5 font-semibold text-sm sm:text-base lg:text-lg hover:text-black bg-black hover:bg-white text-white hover:border-[#E85A2B] transition-all duration-300 relative z-40"
                          size="sm"
                          onClick={() => {
                            console.log('View Details button clicked for service:', service.title);
                            setSelectedService(service);
                          }}
                        >
                          <Eye className="mr-1.5 sm:mr-2 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          Know More 
                        </Button>
                      </div>
                    </div>

                    {/* Holographic Border Animation */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E85A2B]/15 via-[#2C5AA0]/15 to-[#00D4FF]/15 animate-holographic"></div>
                    </div>
                  </div>  
                </div>
              </motion.div>
            );
          })}
        </div>
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
        {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-gray-800 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
                              <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#ff4f0f] backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300 hover:bg-black/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white " />
                </button>
              {/* Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <ImageWithFallback
                  src={selectedService.detailImage}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />  
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 mb-4">
                                         <div className="w-16 h-16 bg-gradient-to-br from-[#E85A2B] to-[#C4461F] rounded-2xl flex items-center justify-center shadow-lg">
                      {React.createElement(selectedService.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-black mb-2 drop-shadow-xl shadow-black/20 bg-white px-4 py-2 rounded-lg border-2 border-gray-300" style={{color: 'black'}}>{selectedService.title}</h2>
                      <Badge className="bg-[#E85A2B] text-white backdrop-blur-sm font-semibold shadow-lg px-3 py-1 border-2 border-[#E85A2B]" style={{color: 'white', backgroundColor: '#E85A2B'}}>
                        {selectedService.keyBenefit}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#001f83] mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-[#006210]" />
                    Overview
                  </h3>
                  <p className="text-gray-800 leading-relaxed font-semibold text-xl">
                    {selectedService.longDescription}
                  </p>
                </div>
                {/* Features and Specs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#001f83] mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-[#006210]" />
                      Key Features
                    </h3>
                    <div className="space-y-3">
                                              {selectedService.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-[#006210] rounded-full mr-3 animate-pulse"></div>
                            <span className="text-gray-900 font-semibold">{feature}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  {/* Specifications */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#001f83] mb-4 flex items-center">
                      <ZapIcon className="w-5 h-5 mr-2 text-[#006210]" />
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedService.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700 font-semibold">{key}:</span>
                          <span className="text-[#006210] font-mono font-bold">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>             
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
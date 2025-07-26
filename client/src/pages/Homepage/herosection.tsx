import React, { useState, useEffect, useRef } from 'react';
import { VelocityScroll } from "../../components/ui_components/scroll-based-velocity";
const slides = [
  {
    
    content: (
      <section id="hero" className="slide1 w-screen h-screen relative flex flex-col justify-between overflow-hidden px-0 md:px-0">
        {/* Background Video */}
        <video
          src="/videos/Slide1_Bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></video>
        {/* Background Image */}
        {/* <img src="/images/herosecImages/epicbghero1.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" /> */}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/10 z-0" />
        {/* Top: Trusted by */}
        
        {/* Center: Headline and CTA */}
        <div className="flex flex-col items-center justify-center flex-1 w-full px-4 md:px-0 md:pt-20 z-10 ">
          <div className='flex flex-col justify-center items-center '>
          {/* <div className="flex items-center gap-2 mb-4">
            <img src="/images/logos/ABB.png" alt="logo1" className="w-9 h-9 rounded-full bg-white object-contain border border-gray-200" />
            <img src="/images/logos/BERGER.png" alt="logo2" className="w-9 h-9 rounded-full bg-black object-contain border border-gray-700 -ml-7" />
            <img src="/images/logos/COLGATE.png" alt="logo3" className="w-9 h-9 rounded-full bg-white object-contain border border-gray-200 -ml-7" />
            <img src="/images/logos/COLGATE.png" alt="logo3" className="w-9 h-9 rounded-full bg-black object-contain border border-gray-700 -ml-7" />
            <span className="text-black/80 text-xl font-semibold">Trusted by 50+ popular startups.</span>
          </div> */}
          {/* <h1 className="bg-clip-text text-white drop-shadow-[#f89844] bg-gradient-to-r from-white via-gray-300 to-[#f89844]  text-center text-3xl md:text-9xl font-semibold tracking-tight leading-tight md:leading-32 mb-4">
            Building Websites<br className="hidden md:block" />
            that Drive Startup <span className=" italic font-sans tracking-tighter font-semibold">Growth.</span>
          </h1> */}
          {/* <p className="text-black/80 text-center text-base md:text-3xl font-normal mb-12 max-w-3xl">
            Creative, user-centric websites to drive business growth.
          </p> */}
          <button className="bg-black border-2 absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white hover:text-black mt-5 font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg flex items-center gap-3 mb-12" style={{boxShadow:'0 8px 32px 0 white'}}>
            Book a call with us
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          </div>
        </div>
        {/* Bottom: Testimonials */}
        {/* <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-15 pb-8 md:pb-5 mt-7 z-10 relative px-2 md:px-0"> */}
          {/* Testimonial 1 */}
          {/* <div className="testimonial-card bg-black/35 border-4 border-[#ffddc0] rounded-xl p-4 md:p-4 max-w-md w-full backdrop-blur-md shadow-lg  flex flex-col gap-3 transform -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{boxShadow:'0 8px 32px 0 rgb(255,221,192)'}}>
            <p className="text-white text-sm md:text-lg text-start font-normal">
              <span className="font-bold text-white">“00Pixel</span> completely transformed our website, and the results were immediate. Within two months, we saw a <span className="font-semibold text-[#f7caa3]">30% increase in leads and a noticeable boost in revenue</span>. Their creativity and attention to detail are unmatched!”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-xl border-2 border-white/50" />
              <span className="text-white text-lg">- Sarah K., CEO of StartupHub</span>
            </div>
          </div> */}
          {/* Testimonial 2 */}
          {/* <div className="testimonial-card bg-black/35 border-4 border-[#ffddc0] rounded-xl p-4 -mt-3 md:p-4 max-w-md w-full backdrop-blur-md shadow-lg flex flex-col gap-3 transform rotate-1 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{boxShadow:'0 8px 32px 0 rgb(255,221,192)'}}>
            <p className="text-white text-sm md:text-lg text-start font-normal">
            “The website design from 00Pixel didn’t just look great—<span className="font-semibold text-[#f7caa3]">it converted</span>. Our new site helped us <span className="font-semibold text-[#f7caa3]">double our client inquiries</span> within the first quarter. The creativity and strategy they brought to the project were invaluable.”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" className="w-10 h-10 rounded-xl border-2 border-white/50" />
              <span className="text-white text-lg">- Emily, Marketing Director at InnovateX</span>
            </div>
          </div> */}
          {/* Testimonial 3 */}
          {/* <div className="testimonial-card bg-black/35 border-4 border-[#ffddc0] rounded-xl p-4 md:p-4 max-w-md w-full backdrop-blur-md shadow-lg flex flex-col gap-3 transform rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{boxShadow:'0 8px 32px 0 rgb(255,221,192)'}}>
            <p className="text-white text-sm md:text-lg text-start font-normal">
            “Since partnering with 00Pixel, we’ve seen a dramatic improvement in <span className="font-semibold text-[#f7caa3]">website traffic and lead generation</span>. Their design expertise helped us achieve a <span className="font-semibold text-[#f7caa3]">40% increase in sales</span>, which has had a significant impact on our growth.”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/men/66.jpg" className="w-10 h-10 rounded-xl border-2 border-white/50" />
              <span className="text-white text-lg">- Michael H., Founder of ClaritySolutions</span>
            </div>
          </div>
        </div> */}
        {/* View more link */}
        {/* <div className="w-full flex justify-center pb-4 md:pb-6 z-10 relative">
          <button className="text-[#f7caa3] text-lg cursor-pointer md:text-base font-semibold hover:underline">View more</button>
        </div> */}
      </section>
    ),
    
  },
  {
    
    content: <Slide2 />,
    bg: '',
  },
  {
    
    content: (
      <section className="slide4 w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-t from-gray-200 to-[#2eb9e4]  relative overflow-hidden px-2 pt-8">
        {/* Floating Testimonial Cards - Three Section Layout */}
        <div className="w-full flex flex-row items-start justify-center gap-8 md:gap-4 absolute top-0 left-0 pt-25 z-99 select-none">
          {/* Left Section: 2x2 grid, staggered */}
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4 pt-18">
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="/images/slide3imgs/img1.JPG" hoverType="left" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="/images/slide3imgs/img2.jpg" hoverType="left" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="/images/slide3imgs/img3.png" hoverType="left" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="https://randomuser.me/api/portraits/women/13.jpg" hoverType="left" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
            </div>
          </div>
          {/* Middle Section: 5 in a row, zigzag */}
          <div className="flex flex-row pt-6 gap-4">
            {/* Each card in the top row is wrapped in a relative div for the dotted line */}
            <div className="relative pt-18 flex flex-col items-center">
              <TestimonialCard img="https://randomuser.me/api/portraits/men/14.jpg" hoverType="middle" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
            </div>
            <div className="relative  flex flex-col items-center">
              <TestimonialCard img="https://randomuser.me/api/portraits/women/15.jpg" hoverType="middle" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
            </div>
            <div className="relative pt-18 flex flex-col items-center">
              <TestimonialCard img="https://randomuser.me/api/portraits/men/16.jpg" hoverType="middle" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
            </div>
            <div className="relative  flex flex-col items-center">
              <TestimonialCard img="https://randomuser.me/api/portraits/women/17.jpg" hoverType="middle" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
            </div>
            <div className="relative pt-18 flex flex-col items-center">
              <TestimonialCard img="https://randomuser.me/api/portraits/men/18.jpg" hoverType="middle" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
            </div>
          </div>
          {/* Right Section: 2x2 grid, staggered (mirrored) */}
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-5">
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="https://randomuser.me/api/portraits/women/19.jpg" hoverType="right" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="https://randomuser.me/api/portraits/men/20.jpg" hoverType="right" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-18">
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="https://randomuser.me/api/portraits/women/21.jpg" hoverType="right" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
              <div className="relative flex flex-col items-center">
                <TestimonialCard img="https://randomuser.me/api/portraits/men/22.jpg" hoverType="right" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[120px] md:h-[160px] border-l-2 border-dotted border-gray-300 opacity-60 z-0" />
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center h-full w-full pt-[340px] md:pt-[370px]">
          <span className="bg-gray-200 text-gray-700 text-md font-semibold px-4 py-1 rounded-full mb-6 z-999 shadow-sm">Testimonials</span>
          <h1 className="text-3xl md:text-7xl font-semibold text-gray-900 text-center leading-tighter z-999 mb-2">Trusted by leaders<br className="hidden md:block" /><span className='text-[#949495]'>from various industries</span></h1>
          <p className="text-lg md:text-2xl mt-3 text-gray-700 font-semibold text-center mb-12 max-w-2xl">Learn why professionals trust our solutions to <br /> complete their customer journeys.</p>
          <button className="mt-2 bg-black text-white rounded-full px-7 py-3 text-lg font-semibold shadow-lg hover:bg-gray-900 transition-all flex items-center gap-2">Read Success Stories <span className="ml-1">→</span></button>
        </div>
      </section>
    ),
    
  },
  {
    
    content: (
      <section className="slide3 w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b  from-[#2eb9e4] to-gray-200 relative overflow-hidden px-2 py-8">
        
        
        {/* Main Content */}
        <div className="w-full flex flex-col items-center justify-center mt-30 z-50 ">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-black via-gray-700 to-[#0051ff] text-4xl md:text-7xl font-semibold text-center leading-20 tracking-tight">
            Start your Business with<br className="hidden md:block" />
            <span className="font-semibold">Everything You Need</span>
          </h1>
          
          <div className="flex gap-4 mt-5 mb-5">
            <button className="bg-[#0051ff] border border-black cursor-pointer hover:bg-[#003cff]/50  text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all">Try Beta Access</button>
            <button className="bg-[#000000]  hover:bg-[#3b3b3b] text-gray-200 font-semibold px-6 py-2 cursor-pointer border border-blue-400 rounded-full shadow-lg transition-all">See Details</button>
          </div>
        </div>
        {/* Features and Image Row */}
        <div className="w-full h-full max-w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-25 mt-10 relative z-20">
          {/* Left Features */}
          <div className="flex flex-col text-start gap-15 flex-1  max-w-sm mb-10">
            <div className="flex items-start gap-4 bg-white/30 border border-gray-200 backdrop-blur-3xl p-5  rounded-xl">
              <div>
                <div className="  mb-2 rounded-lg flex items-center justify-start">
                  <svg className="w-10 h-10 bg-blue-100 rounded-lg text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
                  <h3 className="text-black ml-3  leading-tight font-semibold text-base md:text-2xl">SAP Solution <br /> Manager</h3>
                </div>
                
                <p className="text-gray-700 text-lg mt-1">This flexibility ensures that you only pay for what you use, optimizing  both performance and cost-efficiency.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/30 border border-gray-200 backdrop-blur-3xl p-5 rounded-xl">
              
              <div>
                <div className=" mb-2  rounded-lg flex items-center justify-start">
                   <svg className="w-10 h-10 bg-blue-100 rounded-lg text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v.01"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8v4H8z"/></svg>
                   <h3 className="text-black ml-3 leading-tight font-semibold text-base md:text-2xl">Security <br /> Management</h3>
                </div>
                
                <p className="text-gray-700 text-lg mt-1">Rest easy knowing your data is  secure and compliant with industry standards and Production.</p>
              </div>
            </div>
          </div>
          {/* Center Image */}
          <div className="flex-1 flex items-center justify-center min-w-[320px] -mt-20 max-w-2xl z-0 mx-8">
            <img src="/images/machine.png" alt="Spm Machine" className="w-full h-auto rounded-2xl rotate-x-30"  />
            {/* style={{boxShadow:'0 0 60px 10px #1e90ff55'}} */}
          </div>
          {/* Right Features */}
          <div className="flex flex-col text-start gap-15 max-w-sm mb-10">
            <div className="flex items-start gap-4 bg-white/30 border border-gray-200 backdrop-blur-2xl p-5   rounded-xl">
              
              <div>
                <div className="  mb-2 rounded-lg flex items-center gap-3 justify-start">
                  <svg className="w-10 bg-blue-100 rounded-lg h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 2.485 1.5 4.604 3.5 5.5V19a2.5 2.5 0 005 0v-3.5c2-0.896 3.5-3.015 3.5-5.5z"/></svg>
                  <h3 className="text-black leading-tight font-semibold text-base md:text-2xl">24/7 Expert <br /> Support</h3>
                </div>
                
                <p className="text-gray-700 text-lg mt-1">Our dedicated support team is available around the clock to  assist with any <br /> issues or inquiries you may have.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/30 border border-gray-200 backdrop-blur-2xl p-5   rounded-xl">
              
              <div>
              <div className=" mb-2 rounded-lg flex items-center justify-start">
                <svg className="w-10 p-1 h-10 bg-blue-100 rounded-lg text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                <h3 className="text-black ml-3 leading-tight font-semibold text-base md:text-2xl">High Performance <br /> Production</h3>
              </div>
                
                <p className="text-gray-700 text-lg mt-1">Benefit from lightning-fast  processing <br />speeds and superior performance  <br />with our cutting-edge technology.</p>
              </div>
            </div>
          </div>
          {/* Orange circle at bottom center with shadow effect */}
      {/* <div className="absolute -bottom-120 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center rotate-x-80">
        <div className="w-230 h-300 rounded-full bg-[#ffba88] opacity-50 blur-xl" style={{ filter: 'blur(26px)' }}></div>
        <div className=" rounded-full bg-orange-400 shadow-lg border-orange-200"></div>
      </div> */}
        </div>
      </section>
    ),
    
  },
  
  {
    
    content: (
      <section className="slide5 w-screen h-screen relative flex flex-col justify-between overflow-hidden p-0">
        {/* Background Image */}
        <img src="/images/herosecImages/Slide4_bg.jpg" alt="Industrial Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        {/* Centered Content (left-aligned) */}
        <div className="relative z-20 flex flex-col justify-start h-full pt-40 pl-12 md:pl-22 max-w-6xl">
          <h1 className="text-white font-extrabold text-start text-4xl md:text-8xl leading-tight mb-6 drop-shadow-lg" style={{lineHeight: '1.1'}}>
            The New Standard for<br />Industrial Inspections
          </h1>
          <p className="text-white text-lg md:text-3xl text-start font-normal mb-8 max-w-3xl drop-shadow">
            Deploy Spot to automate both routine and hazardous inspections, power digital transformation, and increase uptime.
          </p>
          <div className="flex gap-6 mb-2">
            <button className="border-2 backdrop-blur-3xl border-white text-white font-semibold px-7 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white">
              Contact Sales &rarr;
            </button>
            <button className="text-white font-semibold px-7 py-3 rounded-full text-lg flex items-center gap-2 hover:underline focus:outline-none">
              Chat Now &rarr;
            </button>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full backdrop-blur-2xl flex items-center justify-between px-10  py-4 z-30" style={{minHeight: '64px'}}>
          <span className="text-white text-base md:text-xl font-medium">WEBINAR: From Legacy to Leading Edge</span>
          <button className="border-2 border-white text-white font-semibold px-9 py-3 rounded-full text-base hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white">
            Register
          </button>
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

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  
  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${slide.bg} ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'} p-4`}
        >
          <div className=" rounded-xl shadow-2xl flex flex-col items-center max-w-full">
            <div className="text-center">{slide.content}</div>
              </div>
            </div>
          ))}
      {/* Navigation Arrows - Left and Right */}
      <div className="absolute  left-0 right-0 flex justify-between items-center px-6  z-20">
        <button
          onClick={prev}
          className="  text-white hover:scale-150 transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg width="35" height="35" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={next}
          className="text-white hover:scale-150 transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <svg width="35" height="35" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      
    </div>
   );
} 

export function ScrollBasedVelocityDemo() {
  return (

    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>EPIC AUTOMATIONS ·</VelocityScroll>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/15 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/15 "></div> */}
    </div>
  );
}

// Helper component for testimonial cards
type TestimonialCardProps = { img: string; hoverType: 'left' | 'middle' | 'right' };
function TestimonialCard({ img, hoverType }: TestimonialCardProps): React.ReactElement {
  let hoverClass = '';
  if (hoverType === 'left') {
    hoverClass = 'hover:-rotate-6 hover:-translate-x-3 hover:-translate-y-2';
  } else if (hoverType === 'right') {
    hoverClass = 'hover:rotate-6 hover:translate-x-3 hover:-translate-y-2';
  } else if (hoverType === 'middle') {
    hoverClass = 'hover:scale-105 hover:-translate-y-3';
  }
  return (
    <div className={`rounded-2xl bg-white flex items-center justify-center overflow-hidden transition-transform duration-300 z-50 ease-in-out ${hoverClass}`}
      style={{ width: 175, height: 220, boxShadow: '0 6px 32px 0 rgba(0,0,0,0.13)' }}>
      <img src={img} alt="Testimonial" className="w-full h-full object-cover" />
    </div>
  );
}

function Slide2() {
  const carouselImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
  ];
  const [carouselIdx, setCarouselIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slide5 w-screen h-screen flex items-center justify-center bg-gradient-to-t from-gray-200 to-[#2eb9e4] ">
      <div className="relative w-[100vw] max-w-full h-[100vh]  shadow-2xl flex flex-col px-4 md:px-15 md:pt-28 overflow-hidden">
        {/* Main Title */}
        <div className="w-full flex flex-col items-center mb-8 mt-2">
          <h1 className="text-3xl md:text-6xl font-semibold text-center text-black leading-tighter" style={{fontFamily: 'Gilroy, sans-serif'}}>Are you ready to start an<br className="hidden md:block"/> unmatched golf experience</h1>
        </div>
        {/* Main Content Row */}
        <div className="flex-1 w-full h-full flex flex-col md:flex-row gap-8 md:gap-4">
          {/* Left Section */}
          <div className="flex-1 relative min-h-[520px] max-h-full flex flex-col justify-between">
            <div className=" bg-cover bg-center rounded-3xl w-full h-full min-h-[420px] max-h-[665px] relative overflow-hidden" style={{backgroundImage: `url(${carouselImages[carouselIdx]})`}}>
              {/* Top left heading */}
              <div className="absolute top-6 left-6 z-10">
                <h2 className="text-white text-2xl md:text-5xl text-start font-normal leading-tighter drop-shadow-lg">Immerse yourself in <br /> prestige and professional <br /> growth on California’s finest <br /> courses</h2>
              </div>
              {/* Carousel images (fade transition) */}
              <div className="absolute bottom-6 right-6 backdrop-blur-2xl bg-black/10 p-2 rounded-full border border-gray-400 flex items-center gap-2">
                {carouselImages.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`carousel${idx}`}
                    className={`w-12 h-12 rounded-full object-cover border-2 border-white transition-opacity duration-700 ${carouselIdx === idx ? 'opacity-100' : 'opacity-40'}`}
                    style={{boxShadow: carouselIdx === idx ? '0 0 0 2px #fff' : 'none'}}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-[1.2] flex flex-col justify-between">
            <div className="flex flex-row gap-4 h-full">
              {/* Left column: two stacked cards */}
              <div className="flex flex-col gap-4 flex-1 min-w-[220px] max-w-[450px]">
                {/* Top card: single image */}
                <div className="bg-cover bg-center rounded-2xl flex-1 min-h-[120px] max-h-[383px] relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80)'}} />
                {/* Bottom card: two images left, arrow top-right, text bottom */}
                <div className="bg-gray-200 rounded-2xl flex flex-col justify-between p-4 max-h-[150px]  relative flex-1">
                  <div className="flex items-center gap-2">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-20 h-20 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="w-20 h-20 rounded-full border-2 border-white -ml-10" />
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center bg-white hover:bg-gray-200 transition-all">
                    <svg width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9-9M8 7h8v8"/></svg>
                  </button>
                  <div className="w-full pt-2">
                    <span className="font-semibold text-black text-start text-xl block">Discover world-class golf</span>
                  </div>
                </div>
              </div>
              {/* Right column: blurred bg card with centered image, text, arrow, title */}
              <div className="flex-1 bg-cover bg-center rounded-4xl flex flex-col justify-between p-6 min-h-[320px] max-h-[540px] relative overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80)', filter: 'blur(0px)'}}>
                {/* Blurred overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl z-0" />
                {/* Top left text */}
                <span className="absolute top-8 left-6 text-white/80 text-3xl leading-7 z-10">California, <br /> Los Angeles</span>
                {/* Arrow button top right */}
                <button className="absolute top-8 right-6 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center bg-transparent hover:bg-white/10 transition-all z-10">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9-9M8 7h8v8"/></svg>
                </button>
                {/* Centered circular image */}
                <div className="relative flex-1 flex items-center justify-center z-10">
                  <div className="w-75 h-75 rounded-full overflow-hidden border-4 border-white/20 flex items-center justify-center bg-white/10">
                    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="golf3" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Bottom left title */}
                <div className="absolute bottom-6 left-6 z-10 flex justify-start items-start">
                  <span className="text-white text-2xl text-start font-medium leading-7">The Riviera<br/>Golf Club</span>
                </div>
              </div>
            </div>
            {/* Bottom row: description and button */}
            <div className="flex items-end mb-4 justify-between  w-full">
              <div className="max-w-2xl text-gray-600 text-base text-start md:text-xl">
                Located amidst the green landscapes of Los Angeles, our golf club <br /> offers perfect conditions for training and hosting tournaments. <br /> This is a space for inspiration, growth, and true sporting drive.
              </div>
              <button className="w-25 h-25 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white hover:bg-gray-100 transition-all ml-4">
                <svg width="52" height="52" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9-9M8 7h8v8"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
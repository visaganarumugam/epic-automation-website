import { useState, useEffect, useRef } from 'react';
import { VelocityScroll } from "../../components/ui_components/scroll-based-velocity";
const slides = [
  {
    
    content: (
      <section className="slide1 w-screen h-screen relative flex flex-col justify-between overflow-hidden px-0 md:px-0">
        {/* Background Image */}
        <img src="/images/herosecImages/epicbghero1.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        {/* Top: Trusted by */}
        
        {/* Center: Headline and CTA */}
        <div className="flex flex-col items-center justify-center flex-1 w-full px-4 md:px-0 md:pt-20 z-10">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logos/ABB.png" alt="logo1" className="w-9 h-9 rounded-full bg-white object-contain border border-gray-200" />
            <img src="/images/logos/BERGER.png" alt="logo2" className="w-9 h-9 rounded-full bg-black object-contain border border-gray-700 -ml-7" />
            <img src="/images/logos/COLGATE.png" alt="logo3" className="w-9 h-9 rounded-full bg-white object-contain border border-gray-200 -ml-7" />
            <img src="/images/logos/COLGATE.png" alt="logo3" className="w-9 h-9 rounded-full bg-black object-contain border border-gray-700 -ml-7" />
            <span className="text-white/80 text-xl font-semibold">Trusted by 50+ popular startups.</span>
          </div>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#fab77b]  text-center text-3xl md:text-8xl font-semibold tracking-tight leading-tight md:leading-23 mb-4">
            Building Websites<br className="hidden md:block" />
            that Drive Startup <span className=" italic font-sans tracking-tighter font-semibold">Growth.</span>
          </h1>
          <p className="text-white/80 text-center text-base md:text-3xl font-normal mb-12 max-w-3xl">
            Creative, user-centric websites to drive business growth.
          </p>
          <button className="bg-black/30 border-2  text-white hover:text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg flex items-center gap-3 mb-12" style={{boxShadow:'0 8px 32px 0 white'}}>
            Book a call with us
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        {/* Bottom: Testimonials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-15 pb-8 md:pb-5 mt-7 z-10 relative px-2 md:px-0">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-black/35 border-4 border-[#ffddc0] rounded-xl p-4 md:p-4 max-w-md w-full backdrop-blur-md shadow-lg  flex flex-col gap-3 transform -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{boxShadow:'0 8px 32px 0 rgb(255,221,192)'}}>
            <p className="text-white text-sm md:text-lg text-start font-normal">
              <span className="font-bold text-white">“00Pixel</span> completely transformed our website, and the results were immediate. Within two months, we saw a <span className="font-semibold text-[#f7caa3]">30% increase in leads and a noticeable boost in revenue</span>. Their creativity and attention to detail are unmatched!”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-xl border-2 border-white/50" />
              <span className="text-white text-lg">- Sarah K., CEO of StartupHub</span>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial-card bg-black/35 border-4 border-[#ffddc0] rounded-xl p-4 -mt-3 md:p-4 max-w-md w-full backdrop-blur-md shadow-lg flex flex-col gap-3 transform rotate-1 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{boxShadow:'0 8px 32px 0 rgb(255,221,192)'}}>
            <p className="text-white text-sm md:text-lg text-start font-normal">
            “The website design from 00Pixel didn’t just look great—<span className="font-semibold text-[#f7caa3]">it converted</span>. Our new site helped us <span className="font-semibold text-[#f7caa3]">double our client inquiries</span> within the first quarter. The creativity and strategy they brought to the project were invaluable.”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" className="w-10 h-10 rounded-xl border-2 border-white/50" />
              <span className="text-white text-lg">- Emily, Marketing Director at InnovateX</span>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial-card bg-black/35 border-4 border-[#ffddc0] rounded-xl p-4 md:p-4 max-w-md w-full backdrop-blur-md shadow-lg flex flex-col gap-3 transform rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{boxShadow:'0 8px 32px 0 rgb(255,221,192)'}}>
            <p className="text-white text-sm md:text-lg text-start font-normal">
            “Since partnering with 00Pixel, we’ve seen a dramatic improvement in <span className="font-semibold text-[#f7caa3]">website traffic and lead generation</span>. Their design expertise helped us achieve a <span className="font-semibold text-[#f7caa3]">40% increase in sales</span>, which has had a significant impact on our growth.”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/men/66.jpg" className="w-10 h-10 rounded-xl border-2 border-white/50" />
              <span className="text-white text-lg">- Michael H., Founder of ClaritySolutions</span>
            </div>
          </div>
        </div>
        {/* View more link */}
        <div className="w-full flex justify-center pb-4 md:pb-6 z-10 relative">
          <button className="text-[#f7caa3] text-lg cursor-pointer md:text-base font-semibold hover:underline">View more</button>
        </div>
      </section>
    ),
    bg: 'bg-gradient-to-br from-blue-700 to-blue-400',
  },
  {
    
    content: (
      <section className="slide2 w-screen h-screen relative flex flex-col justify-between overflow-hidden">
        {/* Background Video */}
        <video
          src="/videos/epicAutomations2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-blue-900/20 z-10" />
        {/* Top Right Card */}
        <div className="absolute bottom-70 right-10 z-20">
          <div className="backdrop-blur-2xl rounded-md bg-white/30 border-2 border-orange-200 pl-6 relative gap-25 min-w-[260px] max-w-sm flex flex-col justify-between ">
            <div className='flex justify-between gap-10'>
                <span className="text-lg pt-6 text-start text-black font-semibold">WE HAVE 25 YEARS<br />WORKING EXPERIENCE.</span>
                <div className='pl-2 pb-2 bg-white/30  rounded-bl-lg'><img src="/images/bg.jpg" alt="Experience" className=" w-20 h-20 rounded-sm object-cover  shadow-md" /></div>
            </div>
            <div className='flex flex-col text-start'>
                <span className="text-4xl md:text-[5.5rem] font-semibold text-black drop-shadow drop-shadow-orange-200 mb-1">572M<span className='font-normal'>+</span></span>
                <span className="text-xl text-black/80 font-semibold mb-6">Machines Sold Globally</span>
            </div>
            
          </div>
        </div>
        {/* Left Section */}
        <div className="relative z-20 flex flex-col items-start justify-end h-full pl-2 pt-24">
          <div className="flex items-center bg-black/25 gap-4 p-4 rounded-2xl backdrop-blur-2xl border">
            <svg width="70" height="70" viewBox="0 0 36 36" fill="none" className="text-blue-700"><text x="0" y="75" fontSize="100" fontWeight="bold" fill="currentColor">*</text></svg>
            <span className="text-white  text-start text-lg md:text-2xl font-medium max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id diam sed diam iaculis rutrum. Aenean consequat maximus enim, sed faucibus sem interdum id.
            </span>
          </div>
        </div>
        {/* Bottom Headline */}
        <div className="relative z-20 pb-10">
          <h1 className="text-white drop-shadow-[#ffb87a] font-extrabold leading-tight drop-shadow-lg">
            <ScrollBasedVelocityDemo />
          </h1>
        </div>
      </section>
    ),
    bg: 'bg-gradient-to-br from-blue-800 to-blue-500',
  },
  {
    
    content: (
      <section className="slide3 w-screen h-screen flex flex-col items-center justify-center bg-[#0a1623] relative overflow-hidden px-2 py-8">
        {/* Circular SVG with faded top/bottom */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          style={{ filter: 'blur(0.5px)' }}
        >
          <defs>
            <linearGradient id="fadeTopBottom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0" />
              <stop offset="20%" stopColor="#4fc3f7" stopOpacity="1" />
              <stop offset="80%" stopColor="#4fc3f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#4fc3f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="450"
            cy="450"
            r="420"
            fill="none"
            stroke="url(#fadeTopBottom)"
            strokeWidth="2.5"
          />
        </svg>

        {/* Icon Buttons on the Circle */}
        <div className="absolute left-1/2 top-[7%] -translate-x-1/2 z-10">
          <button className="bg-[#1a2533] p-3 rounded-full shadow-lg border border-blue-400">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
          </button>
        </div>
        <div className="absolute left-[90%] top-1/2 -translate-y-1/2 z-10">
          <button className="bg-[#1a2533] p-3 rounded-full shadow-lg border border-blue-400">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 2.485 1.5 4.604 3.5 5.5V19a2.5 2.5 0 005 0v-3.5c2-0.896 3.5-3.015 3.5-5.5z"/></svg>
          </button>
        </div>
        <div className="absolute left-1/2 bottom-[7%] -translate-x-1/2 z-10">
          <button className="bg-[#1a2533] p-3 rounded-full shadow-lg border border-blue-400">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
          </button>
        </div>
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10">
          <button className="bg-[#1a2533] p-3 rounded-full shadow-lg border border-blue-400">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v.01"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8v4H8z"/></svg>
          </button>
        </div>
        {/* Main Content (unchanged) */}
        <div className="w-full flex flex-col items-center justify-center mt-4 z-20">
          <h1 className="text-white text-4xl md:text-6xl font-light text-center leading-tight tracking-tight">
            Start your Business with<br className="hidden md:block" />
            <span className="font-normal">Everything You Need</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg text-center mt-6 max-w-2xl">
            Achieve Unmatched Scalability with Our Cloud Solutions.<br />Effortlessly Expand Your Resources as Your Business Grows
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full shadow-lg transition-all">Try Beta Access</button>
            <button className="bg-[#23272f] hover:bg-[#2c313a] text-gray-200 font-medium px-6 py-2 rounded-full shadow-lg transition-all">See Details</button>
          </div>
        </div>
        {/* Features and Image Row */}
        <div className="w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center mt-12 relative z-20">
          {/* Left Features */}
          <div className="flex flex-col gap-8 flex-1 max-w-xs">
            <div className="flex items-start gap-4">
              <div className="bg-[#1a2533] p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">SAP Solution Manager</h3>
                <p className="text-gray-400 text-sm mt-1">This flexibility ensures that you only pay for what you use, optimizing both performance and cost-efficiency.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1a2533] p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v.01"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8v4H8z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">Security Management</h3>
                <p className="text-gray-400 text-sm mt-1">Rest easy knowing your data is secure and compliant with industry standards.</p>
              </div>
            </div>
          </div>
          {/* Center Image */}
          <div className="flex-1 flex items-center justify-center min-w-[320px] max-w-md mx-8">
            <img src="/images/machine.png" alt="Server" className="w-full h-auto rounded-2xl shadow-2xl border-4 border-[#1a2533] bg-[#0a1623]" style={{boxShadow:'0 0 60px 10px #1e90ff55'}} />
          </div>
          {/* Right Features */}
          <div className="flex flex-col gap-8 flex-1 max-w-xs">
            <div className="flex items-start gap-4">
              <div className="bg-[#1a2533] p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 2.485 1.5 4.604 3.5 5.5V19a2.5 2.5 0 005 0v-3.5c2-0.896 3.5-3.015 3.5-5.5z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">24/7 Expert Support</h3>
                <p className="text-gray-400 text-sm mt-1">Our dedicated support team is available around the clock to assist with any issues or inquiries you may have.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1a2533] p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">High-Performance Infrastructure</h3>
                <p className="text-gray-400 text-sm mt-1">Benefit from lightning-fast processing speeds and superior performance with our cutting-edge technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    bg: 'bg-gradient-to-br from-blue-900 to-blue-600',
  },
  {
    
    content: (
      <section className="slide4">
        <span className="text-xl md:text-3xl mt-4 block">Line Automations Like<br/>in OLA</span>
      </section>
    ),
    bg: 'bg-gradient-to-br from-blue-700 to-blue-300',
  },
  {
    
    content: (
      <section className="slide5 w-screen h-screen flex items-center justify-center relative overflow-hidden" style={{background: 'radial-gradient(ellipse at bottom, #c6ff7f 0%, #181c1a 60%)'}}>
        {/* Breadcrumbs */}
        <div className="absolute top-8 left-8 md:left-16 z-20 text-gray-400 text-sm flex gap-2 items-center">
          <span>Homepage</span>
          <span className="mx-1">&gt;</span>
          <span>Services</span>
          <span className="mx-1">&gt;</span>
          <span className="text-white">Podcast Studio</span>
        </div>
        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16 z-10">
          {/* Left Text */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-lg h-full md:py-32">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 mt-24 md:mt-0">Podcast<br />Studio</h1>
            <p className="text-gray-200 text-lg md:text-base font-normal mb-4 max-w-md">
              Whether it’s a workshop, video shoot, or cooking event – you will find space, technology, and atmosphere for your next project with us.
            </p>
          </div>
          {/* Right Images */}
          <div className="flex-1 flex flex-row gap-8 items-center justify-end h-full md:py-32">
            <div className="flex flex-col gap-6">
              <img src="/images/centerimg2.png" alt="Main Chair" className="w-72 h-80 object-cover rounded-2xl shadow-lg" />
            </div>
            <div className="flex flex-col gap-6">
              <img src="/images/centerimg3.png" alt="Mic" className="w-36 h-36 object-cover rounded-2xl shadow-lg" />
              <img src="/images/centerimg4.png" alt="Couch" className="w-36 h-36 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    ),
    bg: 'bg-gradient-to-br from-blue-800 to-blue-400',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const SLIDE_DURATION = 1800000; // 30 minutes in milliseconds

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
      {/* Navigation Arrows */}
      <div className="absolute bottom-2 right-5 flex gap-2 z-20">
        <button
          onClick={prev}
          className="bg-white/15 backdrop-blur-2xl hover:bg-white hover:text-black border-2 text-white rounded-xl p-4 shadow-lg"
          aria-label="Previous slide"
        >
          <svg width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={next}
          className="bg-white/15 backdrop-blur-2xl hover:bg-white hover:text-black border-2 text-white rounded-xl p-4 shadow-lg"
          aria-label="Next slide"
        >
          <svg width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      {/* Progress Bar Navigation */}
      <div className="absolute bottom-2 left-2 flex items-center gap-2 z-20 w-[180px] md:w-[320px] h-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="relative flex-1 h-1 rounded-full overflow-hidden bg-white/20 transition-all"
            aria-label={`Go to slide ${idx + 1}`}
            style={{ minWidth: slides.length > 5 ? '20px' : '40px' }}
          >
            <span
              className={`absolute left-0 top-0 h-full bg-[#f7caa3] transition-all duration-300 ${current === idx ? 'animate-slide-progress' : ''}`}
              style={{
                width: current === idx ? '100%' : '0%',
                transition: current === idx ? `width ${SLIDE_DURATION}ms linear` : 'width 0.3s',
              }}
            />
          </button>
        ))}
      </div>
      <style>{`
        @keyframes slide-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-slide-progress {
          animation: slide-progress linear forwards;
          animation-duration: ${SLIDE_DURATION}ms;
        }
      `}</style>
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
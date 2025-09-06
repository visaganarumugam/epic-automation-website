import { InteractiveHoverButton } from "../../components/ui_components/interactive-hover-button";
import { useNavigate } from 'react-router-dom';

import { BiSolidCustomize } from "react-icons/bi";
import { GiCargoCrane , GiArtificialHive } from "react-icons/gi";
import { AiFillEdit } from "react-icons/ai";
import { AnimatedSection, FadeUpSection } from "../../components/AnimatedSection";


export default function WhatWeAreGoodAt() {
  const navigate = useNavigate();

  const handleHavingQuestionsClick = () => {
    navigate('/help-center#helpcenter-contact-form');
  };

  return (
    <section id="what-we-are-good-at" className="w-full min-h-screen bg-[#ffe7b6] flex flex-col justify-center items-center py-6 sm:py-8 md:py-10">
      <div className="max-w-full w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-10">
        {/* Left Column */}
        <FadeUpSection className="flex flex-col justify-start w-full md:w-1/3  gap-3 sm:gap-12 md:gap-72 pt-2 mb-8 md:mb-0">
          <AnimatedSection
            customAnimation={{ y: 10, opacity: 0, duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5.2rem] font-bold text-[#18181a] leading-[1.05] mb-0 text-center md:text-left" style={{fontFamily: 'Gilroy, sans-serif'}}>Our Expertise <br className="hidden sm:block"/>in Smart Robotic <br className="hidden sm:block"/>Systems.</h1>
          </AnimatedSection>
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            <AnimatedSection
              customAnimation={{ y: 10, opacity: 0, duration: 0.8, delay: 0.4 }}
            >
              <p className="text-[#18181a] text-lg lg:text-2xl 2xl:text-3xl max-w-xl font-semibold text-center md:text-left" style={{fontFamily: 'Gilroy, sans-serif'}}>We specialize in designing intelligent robotic systems that enhance efficiency, precision, and innovation across diverse industrial applications.</p>
            </AnimatedSection>
            <AnimatedSection
              customAnimation={{ y: 5, opacity: 0, duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button 
                onClick={handleHavingQuestionsClick}
                className={`border border-[#222] rounded-full text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2 hover:bg-[#f5f5f5] transition  `}
              >
            <InteractiveHoverButton>Having Questions?</InteractiveHoverButton>
            </button>
                {/* Avatars */}
                <div className="flex items-center ml-0 2xl:ml-2 mt-4 sm:mt-0">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-15 h-15 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full border-2 border-white -ml-2 xl:-ml-5 2xl:-ml-2 first:ml-0 shadow" loading="lazy" />
                  <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="avatar2" className="w-15 h-15 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full border-2 border-white -ml-2 xl:-ml-5 2xl:-ml-2 shadow" loading="lazy" />
                  <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="avatar3" className="w-15 h-15 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full border-2 border-white -ml-2 xl:-ml-5 2xl:-ml-2 shadow" loading="lazy" />
                  <span className=" text-base md:text-md font-semibold text-white px-2 py-4 sm:py-3 -ml-4 border-2 bg-black rounded-full shadow" style={{fontFamily: 'Gilroy, sans-serif'}}>+728</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </FadeUpSection>
        {/* Right Column: Custom Grid Layout with different column widths */}
        <AnimatedSection 
          className="w-full md:w-1/2 ml-0 sm:ml-5 2xl:ml-10 min-h-[400px] sm:min-h-[500px] xl:min-h-[275px] 2xl:min-h-[650px] flex flex-col md:flex-row gap-1 sm:gap-4"
          customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.8 }}
        >
          {/* Column 1 */}
          <div className="flex flex-col h-full gap-4 sm:gap-6 flex-1 md:flex-[0_0_36%]  2xl:flex-[0_0_34%] xl:max-w-[35%] 2xl:max-w-[34%] mb-4 md:mb-0">
            {/* 1st row: 60% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_55%] min-h-0">
              <img src="/images/Image_3.jpg" alt="Mike" className="w-full sm:h-full h-[180px] object-cover rounded-t-2xl  sm:min-h-[120px]" style={{ minHeight: '120px', maxHeight: '100%' }} loading="lazy" />
              <div className="absolute left-0 bottom-3 sm:bottom-4 md:bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-sm sm:text-base md:text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Technology</div>
                  <div className="text-[#888] text-xs sm:text-sm md:text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>Consulting.</div>
                </div>
                <span className="ml-2 bg-black border border-[#e5e5e5] text-[#ffffff] text-xs rounded-full flex items-start gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <GiArtificialHive className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </span>
              </div>
            </div>
            {/* 2nd row: 40% */}
            <div className="relative rounded-3xl shadow flex flex-col justify-between p-5 overflow-hidden h-full min-h-0 bg-[#e4c6fd] flex-[0_0_45%]">
              {/* Soft purple geometric shape */}
              <svg className="absolute top-0 left-0 w-full h-full" style={{zIndex: 0}} viewBox="0 0 280 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="purple-blue-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e4c6fd" />
                    <stop offset="100%" stopColor="#6e03c6" />
                  </linearGradient>
                </defs>
                <path d="M0 0L300 0L180 120Q120 180 0 120Z" fill="url(#purple-blue-gradient)" fillOpacity="0.3" />
              </svg>
              <div className="relative z-10 w-full flex flex-col justify-between h-full min-h-[120px]">
                <div>
                  <div className="xl:font-bold 2xl:font-semibold text-2xl md:text-3xl xl:text-[1.6rem] 2xl:text-4xl text-[#18181a] leading-tight mb-2" style={{fontFamily: 'Gilroy, sans-serif'}}>Technology Consulting</div>
                </div>
                <div>
                  <div className="text-[#18181a] leading-tight text-lg 2xl:text-xl font-semibold" style={{fontFamily: 'Gilroy, sans-serif'}}>Sometimes you need to <br className="hidden 2xl:block" /> look far to see close. Our <br className="hidden 2xl:block" /> experts help you make <br className="hidden 2xl:block" /> sense of technology.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col h-full gap-6 flex-1 md:flex-[0_0_32%] xl:max-w-[34%] 2xl:max-w-[32%] mb-4 md:mb-0">
            {/* 1st row: 50% */}
            <div className="bg-[#A9FFCC] rounded-3xl overflow-hidden shadow flex flex-col justify-between p-4 md:p-6 h-full min-h-0 relative flex-[0_0_50%]">
              {/* Green gradient blob SVG top right */}
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute -top-12 -right-20 w-full h-[60%]" style={{zIndex: 0}}>
                <defs>
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="#68D494" offset="0%"></stop>
                    <stop id="stop2" stopColor="#A9FFCC" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M23.4,-26.7C31.6,-21,40.4,-14.8,43.7,-6.2C47,2.4,44.8,13.5,38.3,19.7C31.9,25.9,21.1,27.3,11.6,29.7C2.1,32.2,-6.1,35.9,-13.2,34.2C-20.3,32.5,-26.2,25.5,-31.5,17.6C-36.9,9.6,-41.7,0.7,-41.2,-8.1C-40.6,-17,-34.8,-25.7,-27,-31.5C-19.3,-37.3,-9.6,-40.1,-1,-38.9C7.6,-37.7,15.2,-32.4,23.4,-26.7Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: '0.3s'}} stroke="url(#sw-gradient)" />
              </svg>
              <div className="font-bold 2xl:font-semibold text-2xl xl:text-[1.5rem] 2xl:text-[2.1rem] text-[#18181a] leading-tight mb-15 sm:mb-0 relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>Infrastructure <br className="hidden sm:block" />& Engineering</div>
              <div className="text-[#18181a] leading-tight text-lg 2xl:text-xl font-semibold mt-auto relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>It's not enough to have <br className="hidden 2xl:block" /> technology, you also <br className="hidden 2xl:block" />need to have the right <br className="hidden 2xl:block" /> tools to manage it <br className="hidden 2xl:block" /> day-to-day..</div>
            </div>
            {/* 2nd row: 50% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_50%] min-h-0">
              <img src="/images/Image_5.jpg" alt="Asgeir" className="w-full sm:h-full h-[180px] object-cover rounded-t-2xl min-h-[120px]" style={{ minHeight: '120px', maxHeight: '100%' }} loading="lazy" />
              <div className="absolute left-0 bottom-3 sm:bottom-4 md:bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-sm sm:text-base md:text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Infrastructure</div>
                  <div className="text-[#888] text-xs sm:text-sm md:text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>& Engineering</div>
                </div>
                <span className="ml-2 bg-black border border-[#e5e5e5] text-[#ffffff] text-xs rounded-full flex items-start gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <GiCargoCrane className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </span>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col h-full gap-4 sm:gap-6 flex-1 md:flex-[0_0_28%] xl:max-w-[30%] 2xl:max-w-[28%] mb-4 md:mb-0">
            {/* 1st row: 35% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_40%] min-h-0">
              <img src="/images/InfrastructureEngineering.jpg" alt="Latisha" className="w-full h-[180px] sm:h-full object-cover rounded-t-2xl min-h-[80px]" style={{ minHeight: '80px', maxHeight: '100%' }} loading="lazy" />
              <div className="absolute left-0 bottom-3 sm:bottom-4 md:bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-sm sm:text-base md:text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Own Design</div>
                  <div className="text-[#888] text-xs sm:text-sm md:text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>& Production.</div>
                </div>
                <span className="ml-2 bg-black border border-[#e5e5e5] text-[#ffffff] text-xs rounded-full flex items-start shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <AiFillEdit  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </span>
              </div>
            </div>
            {/* 2nd row: 70% */}
            <div className="bg-[#ff949f] rounded-3xl shadow flex flex-col items-start justify-end p-3 sm:p-4 md:p-6 relative overflow-hidden flex-[0_0_60%] min-h-0">
            <div className="font-bold 2xl:font-semibold text-2xl xl:text-[1.6rem] 2xl:text-[2.1rem] text-[#18181a] leading-tight mb-15 relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>Own Design <br className="hidden sm:block" /> & Production</div>
            <div className="text-[#18181a] leading-tight text-lg 2xl:text-xl font-semibold mt-auto relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>From in-house design, prototyping to assembly, we offer a<br className="hidden sm:block" />wide range of custom<br className="hidden sm:block" />   solutions and<br className="hidden sm:block" /> services.</div>
              <svg className="absolute left-15 -top-25 opacity-35" width="380" height="380" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#F24A4AFF" strokeWidth="8"/><circle cx="40" cy="40" r="24" stroke="#F24A4AFF" strokeWidth="4"/></svg>
            </div>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col h-full gap-4 sm:gap-6 flex-1  2xl:flex-[0_0_28%] xl:max-w-[30%] 2xl:max-w-[28%]">
            {/* 1st row: 35% */}
            <div className="bg-[#56ccf2] rounded-3xl shadow flex flex-col items-start justify-end p-3 sm:p-4 md:p-6 relative overflow-hidden flex-[0_0_57%]  min-h-0">
            <div className="font-bold 2xl:font-semibold text-2xl xl:text-[1.6rem] 2xl:text-[2.1rem] text-[#18181a] leading-tight mb-15 relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>Customized <br className="hidden sm:block" /> Solutions</div>
            <div className="text-[#18181a] leading-tight text-lg 2xl:text-xl font-semibold mt-auto relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>In order to make true global product, you <br className="hidden sm:block" /> need to understand your needs, different<br className="hidden sm:block" />  solutions & Return On Investment (ROI). We<br className="hidden sm:block" /> can visualize yours for you.</div>
              <svg className="absolute left-15 -top-25 opacity-35" width="380" height="380" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#6f86d6" strokeWidth="8"/><circle cx="40" cy="40" r="24" stroke="#6f86d6" strokeWidth="4"/></svg>
            </div>
            
            {/* 2nd row: 70% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_43%] min-h-0">
              <img src="/images/Image_1.jpg" alt="Customized Solutions" className="w-full h-[180px] sm:h-full object-cover rounded-t-2xl min-h-[80px]" style={{ minHeight: '80px', maxHeight: '100%' }} loading="lazy" />
              <div className="absolute left-0 bottom-3 sm:bottom-4 md:bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-sm sm:text-base md:text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Customized</div>
                  <div className="text-[#888] text-xs sm:text-sm md:text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>Solutions</div>
                </div>
                <span className="ml-2 bg-black border border-[#e5e5e5] text-[#ffffff] text-xs rounded-full flex items-start shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <BiSolidCustomize className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      
    </section>
  );
}

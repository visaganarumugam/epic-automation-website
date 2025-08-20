import { useEffect, useState } from 'react';
import { AnimatedSection, FadeUpSection } from '../../components/AnimatedSection';

export default function WhatUrGoodAt() {
  // Number of steps (excluding the duplicate last step)
  const steps = [
    {
      title: 'Discover Business Needs',
      desc: 'We identify automation opportunities that increase efficiency, reduce costs, and enhance overall operational performance ',
      time: 'Initiate',
      lineHeight: 'h-72',
    },
    {
      title: 'Concept Design',
      desc: "Together, we'll collect relevant data and control points and find the optimized solution. ",
      time: 'Strategize',
      lineHeight: 'h-24',
    },
    {
      title: 'Rapid Prototyping',
      desc: 'A small-scale prototype is developed to validate the concept and test technical feasibility in action. ',
      time: 'Stimulate',
      lineHeight: 'h-89',
    },
    {
      title: 'Phased Implementation',
      desc: 'We deploy automation in stages with rigorous testing, ensuring reliability and alignment with your goals.',
      time: 'Integrate',
      lineHeight: 'h-45',
    },
    // The duplicate last step (if needed)
    {
      title: 'Optimize & Scale',
      desc: 'After launch, we analyze, refine, and scale the solution for long-term success and adaptability.',
      time: 'Evolve',
      lineHeight: 'h-65',
    },
  ];

  // Animation state for popup
  const [visibleSteps, setVisibleSteps] = useState(steps.map(() => false));

  useEffect(() => {
    steps.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleSteps(prev => {
          const updated = [...prev];
          updated[idx] = true;
          return updated;
        });
      }, 250 + idx * 250);
    });
  }, []);

  return (
    <section id="our-approach" className="w-full min-h-screen flex flex-col items-center gap-8 sm:gap-20 md:gap-30 bg-[#ffe7b6] relative overflow-hidden py-6 sm:py-8 md:py-10" >
      {/* Heading */}
      <FadeUpSection className="w-full flex flex-col items-center mt-6 sm:mt-8 md:mt-10 mb-2 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-4">
        <h1 className="text-[2rem] md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center leading-tight">
          <span className="text-black">Epic Automations in  </span>
          <span className="text-[#ff4f0f]">Action:</span>
          <br className="block" />
          <span className="text-black">StreamLine , Smart and </span>
          <span className="text-[#ff4f0f]">Scalable.</span>
        </h1>
      </FadeUpSection>
      {/* Timeline */}
      <AnimatedSection 
        className="max-w-full w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-4 relative"
        customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.4 }}
      >
        {/* Dotted Line (behind badges) */}
        <div className="absolute left-0 w-full flex items-center z-0" style={{top: 'calc(100% - 28px)'}}>
          <div className="w-full h-[12px] sm:h-[12px] md:h-[15px] bg-gradient-to-r from-[#ff4f0f]  " style={{ backgroundImage: 'repeating-linear-gradient(to right, #ff4f0f 0 4px, transparent 4px 8px)' }}></div>
        </div>
        <div className="absolute left-0 w-full flex items-center z-0 sm:hidden" style={{top: 'calc(100% - 81.6%)'}}>
          <div className="w-full h-[12px] sm:h-[12px] md:h-[15px] bg-gradient-to-r from-[#ff4f0f]  " style={{ backgroundImage: 'repeating-linear-gradient(to right, #ff4f0f 0 4px, transparent 4px 8px)' }}></div>
        </div>
        <div className="absolute left-0 w-full flex items-center z-0 sm:hidden" style={{top: 'calc(100% - 62%'}}>
          <div className="w-full h-[12px] sm:h-[12px] md:h-[15px] bg-gradient-to-r from-[#ff4f0f]  " style={{ backgroundImage: 'repeating-linear-gradient(to right, #ff4f0f 0 4px, transparent 4px 8px)' }}></div>
        </div>
        <div className="absolute left-0 w-full flex items-center z-0 sm:hidden" style={{top: 'calc(100% - 42.4%)'}}>
          <div className="w-full h-[12px] sm:h-[12px] md:h-[15px] bg-gradient-to-r from-[#ff4f0f]  " style={{ backgroundImage: 'repeating-linear-gradient(to right, #ff4f0f 0 4px, transparent 4px 8px)' }}></div>
        </div>
        <div className="absolute left-0 w-full flex items-center z-0 sm:hidden" style={{top: 'calc(100% - 22.8%)'}}>
          <div className="w-full h-[12px] sm:h-[12px] md:h-[15px] bg-gradient-to-r from-[#ff4f0f]  " style={{ backgroundImage: 'repeating-linear-gradient(to right, #ff4f0f 0 4px, transparent 4px 8px)' }}></div>
        </div>
        {/* Steps */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-end relative z-10 gap-4 sm:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-full sm:w-1/4 text-center">
              {/* Animated content (title, desc, line) */}
              <div
                className={`w-full flex flex-col items-center ${visibleSteps[idx] ? '' : 'opacity-0 translate-y-12'}`}
                style={visibleSteps[idx] ? { animation: `riseup 1s cubic-bezier(0.23, 1, 0.32, 1) forwards`, animationDelay: `${0.1 + idx * 0.15}s` } : {}}
              >
                <div className="mb-2 px-2 sm:px-0">
                  <h3 className="text-[#ff4f0f] text-[1.7rem] lg:text-3xl font-bold mb-1">{step.title}</h3>
                  <p className="text-[#000000] text-[1.2rem] lg:text-[1.3rem] font-semibold max-w-[370px] md:max-w-[400px] mx-auto">{step.desc}</p>
                </div>
                <div className={`${step.lineHeight} w-0.5 bg-gradient-to-b from-[#ff4f0f] to-transparent mb-1 hidden sm:block`}></div>
              </div>
              {/* steps (no transition) */}
              <div className="flex items-center justify-center relative z-10 mt-1">
                {/* steps */}
                <div className="flex items-center bg-[#ff4f0f] backdrop-blur-xl rounded-lg px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3 shadow-lg shadow-[#fbe6bf] border border-[#fdda9d]">
                  <span className="text-white text-base md:text-lg lg:text-2xl font-semibold">{step.time}</span>
                  <span className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#ffb398] flex items-center justify-center shadow-lg"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
      {/* Custom keyframes for riseup animation */}
      <style>{`
        @keyframes riseup {
          0% {
            opacity: 0;
            transform: translateY(48px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-riseup {
          animation: riseup 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </section>
  );
}

import { useEffect, useState } from 'react';

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
    <section className="w-full min-h-screen flex flex-col items-center gap-30 bg-gradient-to-tr from-[#FEB130] via-[#fcd48f] to-[#fbe6bf] relative  overflow-hidden py-10" >
      {/* Heading */}
      <div className="w-full flex flex-col items-center mt-10 mb-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight">
          <span className="text-black">Epic Automations in  </span>
          <span className="text-orange-400">Action:</span>
          <br />
          <span className="text-black">StreamLine , Smart and </span>
          <span className="text-orange-400">Scalable</span>
        </h1>
      </div>
      {/* Timeline */}
      <div className="max-w-full w-full flex flex-col items-center justify-center px-4 relative">
        {/* Dotted Line (behind badges) */}
        <div className="absolute left-0 w-full flex items-center z-0" style={{top: 'calc(100% - 28px)'}}>
          <div className="w-full h-[15px] bg-gradient-to-r from-orange-900 via-orange-500 to-orange-900 opacity-80 rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, #ff8800 0 4px, transparent 4px 8px)' }}></div>
        </div>
        {/* Steps */}
        <div className="w-full flex flex-row justify-between items-end relative z-10 gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-1/4 text-center">
              {/* Animated content (title, desc, line) */}
              <div
                className={`w-full flex flex-col items-center ${visibleSteps[idx] ? '' : 'opacity-0 translate-y-12'}`}
                style={visibleSteps[idx] ? { animation: `riseup 1s cubic-bezier(0.23, 1, 0.32, 1) forwards`, animationDelay: `${0.1 + idx * 0.15}s` } : {}}
              >
                <div className="mb-2">
                  <h3 className="text-black text-lg md:text-2xl font-bold mb-1">{step.title}</h3>
                  <p className="text-[#363636] text-xs md:text-base font-medium max-w-[300px] mx-auto">{step.desc}</p>
                </div>
                <div className={`${step.lineHeight} w-0.5 bg-gradient-to-b from-orange-500 to-transparent mb-1`}></div>
              </div>
              {/* steps (no transition) */}
              <div className="flex items-center justify-center relative z-10 mt-1">
                {/* steps */}
                <div className="flex items-center bg-white/50 backdrop-blur-xl rounded-lg px-7 py-3 shadow-lg shadow-[#fbe6bf] border border-[#fdda9d]">
                  <span className="text-black text-base font-semibold">{step.time}</span>
                  <span className="ml-3 w-5 h-5 rounded-md bg-orange-500 flex items-center justify-center shadow-lg"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

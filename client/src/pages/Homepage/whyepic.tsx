import React, { useEffect, useRef, useState } from 'react';
import { InteractiveHoverButton } from '../../components/ui_components/interactive-hover-button';
// UpCount component for animated counting
// Accepts a 'start' prop to control when to start counting
type UpCountProps = { end: number; duration?: number; className?: string; start?: boolean };
function UpCount({ end, duration = 1200, className = '', start = false }: UpCountProps) {
  const [count, setCount] = useState(0);
  const frame = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const increment = end / (duration / 16);
    function animate() {
      startVal += increment;
      if (startVal < end) {
        setCount(Math.floor(startVal));
        frame.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [end, duration, start]);
  return <span className={className}>{start ? count : 0}</span>;
}

export default function WhyEpic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-[#EAF6FF] via-[#90B2D8] to-[#0077b3] py-16 flex flex-col items-center justify-center">
      <div className="w-full  max-w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-10">
        {/* Left Column */}
        <div className={`flex flex-col items-start w-full md:w-1/3 gap-50 ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.1s' : undefined }}>
          <span className="text-[#333333] text-3xl font-bold tracking-wide mb-2">Why Choose Us</span>
          <button className={`border border-[#222] rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-[#f5f5f5] transition ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.2s' : undefined }}>
          <InteractiveHoverButton>About Epic Automations</InteractiveHoverButton>
          </button>
        </div>
        {/* Right Column */}
        <div className={`flex flex-col w-full md:w-2/3 gap-8 items-start justify-center mt-12 md:mt-0 ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.3s' : undefined }}>
          <h2 className="text-3xl md:text-6xl font-bold text-[#18181a] leading-tight mb-6">
            From precision automation to remote system monitoring to{' '}
            <span className="text-[#ffffff] font-normal">fulfilling the <br /> promise of tomorrow's technology.</span>
          </h2>
          <div className="flex items-start gap-4">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team 1" className="w-15 h-15 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Team 2" className="w-15 h-15 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team 3" className="w-15 h-15 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Team 4" className="w-15 h-15 rounded-full border-2 border-white shadow" />
            </div>
            <div className="text-[#222] text-2xl font-normal ml-20 max-w-3xl">
            Epic Automations designs and manufactures custom, cost-<br/>effective machines, specializing in automation solutions <br/> that boost productivity, reduce costs, and maintain <br/> high-quality standards across various industries.
            </div>
          </div>
        </div>
      </div>
      {/* stats */}
      <div className="w-full px-10 mt-12 flex flex-col gap-6">
        <div className={`bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-xl flex flex-col md:flex-row w-full items-center justify-between px-8 py-6  ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.4s' : undefined }}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <UpCount end={500} className="text-5xl md:text-6xl font-bold text-[#1B1B1B]" start={isVisible} />
              <span className="text-6xl text-[#1b1b1b] font-normal ml-1">+</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-[#1B1B1B] text-3xl font-semibold text-center">Total Rated By Clients</div>
            </div>
            <div className="text-black text-sm font-normal max-w-xs ml-8">We are proud to have received 500+ positive reviews from our clients, reflecting our commitment to delivering exceptional service and quality.</div>
          </div>
        </div>
        <div className={`bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-6  ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.5s' : undefined }}>
          <div className="flex items-center gap-2">
            <UpCount end={200} className="text-5xl md:text-6xl font-bold text-[#1B1B1B]" start={isVisible} />
            <span className="text-6xl text-[#1b1b1b] font-normal ml-1">+</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[#1B1B1B] text-3xl font-semibold text-center">Total Machines Delivered</div>
          </div>
          <div className="text-black text-sm font-normal max-w-xs ml-8">We have delivered more than 200 machines to our clients, helping them automate their processes and improve their productivity.</div>
        </div>
        <div className={`bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-6 ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.6s' : undefined }}>
          <div className="flex items-center gap-2">
            <UpCount end={9} className="text-5xl md:text-6xl font-bold text-[#1B1B1B]" start={isVisible} />
            <span className="text-6xl text-[#1b1b1b] font-normal ml-1">+</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[#1B1B1B] text-3xl font-semibold pl-16 text-center">Years of Experience</div>
          </div>
          <div className="text-black text-sm font-normal max-w-xs ml-8">We have been in the business for more than 9 years, helping our clients automate their processes and improve their productivity.</div>
        </div>
        <div className={`bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-6 ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.7s' : undefined }}>
          <div className="flex items-center gap-2">
            <UpCount end={6} className="text-5xl md:text-6xl font-bold text-[#1B1B1B]" start={isVisible} />
            <span className="text-6xl text-[#1b1b1b] font-normal ml-1">+</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[#1B1B1B] text-3xl font-semibold pl-16 text-center">Key Industries Across The Globe</div>
          </div>
          <div className="text-black text-sm font-normal max-w-xs ml-8">We have worked with clients across various industries, helping them automate their processes and improve their productivity.</div>
        </div>
      </div>
    </section>
  );
}

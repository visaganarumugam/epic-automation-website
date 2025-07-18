import { useEffect, useRef, useState } from 'react';
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
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

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

  const stats = [
    {
      end: 100,
      title: 'Total Rated By Clients',
      desc: 'We are proud to have received 100+ positive reviews from our clients, reflecting our commitment to delivering exceptional service and quality.',
    },
    {
      end: 200,
      title: 'Total Machines Delivered',
      desc: 'We have delivered more than 200 machines to our clients, helping them automate their processes and improve their productivity.',
    },
    {
      end: 4,
      title: 'Years of Experience',
      desc: 'We have been in the business for more than 4 years, helping our clients automate their processes and improve their productivity.',
    },
    {
      end: 6,
      title: 'Key Industries Across Globe',
      desc: 'We have worked with clients across various industries, helping them automate their processes and improve their productivity.',
    },
    {
      end: 120,
      title: 'Robotic Systems Installed',
      desc: 'Over 120 advanced robotic systems installed, streamlining manufacturing and logistics for our partners.',
    },
    {
      end: 35,
      title: 'Patents & Innovations',
      desc: 'Thirty-five patents and innovations in robotics automation driving industry progress and technological advancement.',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-tr from-[#FEB130] via-[#fcd48f] to-[#fbe6bf] py-16 flex flex-col items-center justify-center">
      <div className="w-full  max-w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-10">
        {/* Left Column */}
        <div className={`flex flex-col items-start w-full md:w-1/3 gap-50 ${isVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: isVisible ? '0.1s' : undefined }}>
          <span className="text-[#333333] text-4xl tracking-tight font-semibold  mb-2">Why Epic Automations!</span>
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
      <div ref={statsRef} className="w-full px-10 mt-22 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {stats.map((stat, idx) => (
          <div key={stat.title} className={`bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-xl flex flex-col items-center justify-between px-8 py-8 min-h-[220px] ${statsVisible ? 'animate-rise-up' : ''}`} style={{ animationDelay: statsVisible ? `${0.2 + idx * 0.1}s` : undefined }}>
            {/* Top: Number and Title */}
            <div className="flex flex-col items-center w-full mb-2">
              <div className="flex items-center gap-2">
                <UpCount end={stat.end} className="text-5xl md:text-6xl font-bold text-[#1B1B1B]" start={statsVisible} />
                <span className="text-4xl md:text-6xl text-[#1b1b1b] font-normal ml-1">+</span>
              </div>
              <div className="text-[#1B1B1B] text-2xl md:text-4xl font-semibold text-center mt-2">{stat.title}</div>
            </div>
            {/* Bottom: Description */}
            <div className="text-black text-lg font-normal max-w-md text-center">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

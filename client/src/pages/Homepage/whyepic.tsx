import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from '../../components/ui_components/interactive-hover-button';
import { AnimatedSection, FadeUpSection } from '../../components/AnimatedSection';
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
  const [statsVisible, setStatsVisible] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  // IntersectionObserver for stats grid (keeping this for the counter animation)
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
    const statsElement = document.querySelector('#stats-grid');
    if (statsElement) {
      statsObserver.observe(statsElement);
    }
    return () => statsObserver.disconnect();
  }, []);

  const stats = [
    {
      end: 100,
      title: 'Total Rated By Clients',
      desc: 'We are proud to have received 100+ positive reviews from our clients, reflecting our commitment to delivering exceptional service and quality.',
      hoverColor: 'group-hover:text-orange-400',
      
      hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
      hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]',
    },
    {
      end: 20,
      title: 'Total Machines Delivered',
      desc: 'We have delivered more than 200 machines to our clients, helping them automate their processes and improve their productivity.',
      hoverColor: 'group-hover:text-orange-400',
      
      hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
      hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(147,51,234,0.3)]',
    },
    {
      end: 5,
      title: 'Years of Experience',
      desc: 'We have been in the business for more than 4 years, helping our clients automate their processes and improve their productivity.',
      hoverColor: 'group-hover:text-orange-400',
      
      hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
      hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(34,197,94,0.3)]',
    },
    {
      end: 6,
      title: 'Key Industries Across Globe',
      desc: 'We have worked with clients across various industries, helping them automate their processes and improve their productivity.',
      hoverColor: 'group-hover:text-orange-400',
      
      hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
      hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(251,146,60,0.3)]',
    },
    {
      end: 12,
      title: 'Robotic Systems Installed',
      desc: 'Over 120 advanced robotic systems installed, streamlining manufacturing and logistics for our partners.',
      hoverColor: 'group-hover:text-orange-400',
      
      hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
      hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(248,113,113,0.3)]',
    },
    {
      end: 5,
      title: 'Patents & Innovations',
      desc: 'Thirty-five patents and innovations in robotics automation driving industry progress and technological advancement.',
      hoverColor: 'group-hover:text-orange-400',
      
      hoverBorder: 'group-hover:border-2 group-hover:border-orange-400',
      hoverCardShadow: 'group-hover:shadow-[0_8px_32px_rgba(45,212,191,0.3)]',
    },
  ];

  return (
    <section id="why-epic" className="w-full bg-[#ffe7b6] pb-12 pt-7 sm:pt-0 sm:pb-0 sm:py-12 md:py-16 flex flex-col items-center justify-center">
      <FadeUpSection className="w-full max-w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10">
        {/* Left Column */}
        <AnimatedSection 
          className="flex flex-col items-center md:items-start w-full md:w-1/3 gap-2 sm:gap-12 md:gap-50 md:mb-0"
          customAnimation={{ y: 20, opacity: 0, duration: 0.4, delay: 0.05 }}
        >
          <span className="text-[#333333] text-3xl md:text-4xl tracking-tight font-bold mb-2 text-center md:text-left">Why Epic Automations!</span>
          <AnimatedSection 
            customAnimation={{ y: 15, opacity: 0, duration: 0.3, delay: 0.1 }}
          >
            <button 
              onClick={handleAboutClick}
              className="border border-[#222] rounded-full text-base sm:text-base md:text-lg font-semibold flex items-center hover:bg-[#f5f5f5] transition"
            >
              <InteractiveHoverButton>About Epic Automations</InteractiveHoverButton>
            </button>
          </AnimatedSection>
        </AnimatedSection>
        {/* Right Column */}
        <AnimatedSection 
          className="flex flex-col w-full md:w-2/3 gap-6 sm:gap-8 items-center md:items-start justify-center mt-8 sm:mt-12 md:mt-0"
          customAnimation={{ y: 20, opacity: 0, duration: 0.4, delay: 0.15 }}
        >
          <h2 className="text-3xl sm:text-2xl md:text-3xl text-center lg:text-6xl font-bold text-[#18181a] leading-tight mb-4 sm:mb-6 sm:text-center md:text-left">
            From precision automation to remote system monitoring to{' '}
            <span className="text-[#4b4b4b] xl:text-6xl 2xl:text-6xl font-normal">fulfilling the <br className="hidden 2xl:block" /> promise of tomorrow's technology.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Avatars */}
            <div className="flex -space-x-3 mb-8 sm:mb-0">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team 1" className="w-15 h-15 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full border-2 border-white shadow" loading="lazy" />
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Team 2" className="w-15 h-15 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full border-2 border-white shadow" loading="lazy" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team 3" className="w-15 h-15 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full border-2 border-white shadow" loading="lazy" />
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Team 4" className="w-15 h-15 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full border-2 border-white shadow" loading="lazy" />
            </div>
            <div className="text-[#222] text-lg sm:text-xl text-center xl:text-right 2xl:text-center md:text-2xl lg:text-3xl font-semibold ml-0 sm:ml-8 md:ml-20 max-w-full md:max-w-45xl md:text-center sm:text-left">
            Epic Automations designs and manufactures custom, cost-<br className="hidden 2xl:block" />effective machines, specializing in automation solutions <br className="hidden 2xl:block" /> that boost productivity, reduce costs, and maintain <br className="hidden 2xl:block" /> high-quality standards across various industries.
            </div>
          </div>
        </AnimatedSection>
      </FadeUpSection>
      {/* stats */}
      <AnimatedSection 
        id="stats-grid"
        className="w-full px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-22 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        customAnimation={{ y: 30, opacity: 0, duration: 0.5, stagger: 0.05 }}
      >
        {stats.map((stat) => (
          <div key={stat.title} data-animate-child className={`group bg-white/50 backdrop-blur-[15px] shadow-2xl rounded-xl flex flex-col items-center  px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] transition-all duration-300 hover:scale-105 ${stat.hoverBorder} ${stat.hoverCardShadow}`}>
            {/* Top: Number and Title */}
            <div className="flex flex-col items-center w-full mb-2">
              <div className="flex items-center gap-2">
                <UpCount end={stat.end} className={`text-4xl md:text-5xl 2xl:text-6xl font-bold text-[#ff4f0f] transition-all duration-300`} start={statsVisible} />
                <span className={`text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-[#ff4f0f] font-normal ml-1 transition-all duration-300`}>+</span>
              </div>
              <div className={`text-[#ff4f0f] text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center mt-2 transition-all duration-300`}>{stat.title}</div>
            </div>
            {/* Bottom: Description */}
            <div className="text-black text-base md:text-lg  2xl:text-[24px] font-semibold max-w-md text-center">{stat.desc}</div>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
}

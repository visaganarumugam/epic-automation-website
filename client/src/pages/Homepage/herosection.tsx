import { SiTicktick } from "react-icons/si";
import { ImArrowDownRight2 } from "react-icons/im";
import { FaFacebook, FaInstagramSquare, FaTelegram, FaTwitter } from "react-icons/fa";
import {
  IconCpu
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
const avatars = [
  { src: "/images/robotarmcenterimage.png", label: "semiconductor materials", width: 1400, height: 1000 },
  { src: "/images/centerimg2.png", label: "cybernetic AI", width: 1000, height: 945 },
  { src: "/images/centerimg4.png", label: "neural link", width: 700, height: 860 },
  { src: "/images/centerimg3.png", label: "virtual interface", width: 1000, height: 900 },
  { src: "/images/centerimg6.png", label: "neural link", width: 900, height: 850 },
  { src: "/images/centerimg5.png", label: "neural link", width: 950, height: 900 },
  
];

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animState, setAnimState] = useState("entering"); // "entering" | "leaving"

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("leaving");
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % avatars.length);
        setAnimState("entering");
      }, 5000); // 500ms for leave animation
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const animationClass =
    animState === "entering"
      ? "animate-rise-up"
      : animState === "leaving"
      ? "animate-rise-down"
      : "";

  return (
     <>
     
     <div className="w-[100vw] h-screen bg-gradient-to-br from-[#FEB130] via-[#fcd48f] to-[#fbe6bf] flex flex-row relative overflow-hidden font-sans pt-20 select-none">
      {/* Left Column */}
      <div className="flex flex-col justify-between w-[60vw] h-full pl-[50px] pt-[20px] pb-[40px] relative z-10">
        {/* Top: Headline and Features */}
        <div>
          <div className="flex flex-row items-start justify-between">
            <div>
              <h1 className="text-6xl leading-[1] font-semibold text-black mb-1 tracking-wide">Epic Automations ── future</h1>
              <div className="flex items-center mb-2 mt-1">
                {/* Animated Robotics SVGs */}
                <span className="inline-block w-13 h-13 mt-2 -mr-1 mb-4 animate-robot-spin">
                  <svg fill="#000000" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 0l-.5 1.19c-.1.03-.19.08-.28.13l-1.19-.5-.72.72.5 1.19c-.05.1-.09.18-.13.28l-1.19.5v1l1.19.5c.04.1.08.18.13.28l-.5 1.19.72.72 1.19-.5c.09.04.18.09.28.13l.5 1.19h1l.5-1.19c.09-.04.19-.08.28-.13l1.19.5.72-.72-.5-1.19c.04-.09.09-.19.13-.28l1.19-.5v-1l-1.19-.5c-.03-.09-.08-.19-.13-.28l.5-1.19-.72-.72-1.19.5c-.09-.04-.19-.09-.28-.13l-.5-1.19h-1zm.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                  </svg>
                </span>
                <span className="inline-block mt-2 w-13 h-13 mr-4 animate-robot-spin-reverse">
                  <svg fill="#000000" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 0l-.5 1.19c-.1.03-.19.08-.28.13l-1.19-.5-.72.72.5 1.19c-.05.1-.09.18-.13.28l-1.19.5v1l1.19.5c.04.1.08.18.13.28l-.5 1.19.72.72 1.19-.5c.09.04.18.09.28.13l.5 1.19h1l.5-1.19c.09-.04.19-.08.28-.13l1.19.5.72-.72-.5-1.19c.04-.09.09-.19.13-.28l1.19-.5v-1l-1.19-.5c-.03-.09-.08-.19-.13-.28l.5-1.19-.72-.72-1.19.5c-.09-.04-.19-.09-.28-.13l-.5-1.19h-1zm.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                  </svg>
                </span>
                <span className="text-6xl font-semibold tracking-wide text-black" >bridging reality and code.</span>
              </div>
            </div>
           
          </div>
          
          {/* Stat Card */}
          <div className="mt-15 flex items-center gap-8" >
          
            <div className="bg-white/25 backdrop-blur-2xl rounded-2xl shadow-xl flex flex-col gap-2 w-[430px] border border-black/50 relative " style={{clipPath: 'url(#myClip)'}}>
              <div className="flex items-center gap-2  ">
                <span className="bg-black text-white rounded-xl  ml-1 mt-1 items-center text-center px-4 py-2 text-xl font-bold leading-5 ">+12 <br /> <span className="text-sm font-normal text-gray-200">Roles in Epic</span></span>
                
                
                <span className="ml-auto mr-3 text-gray-600">
                  <IconCpu size={38}/>
                </span>
              </div>
              <div className="text-md text-black/70 font-semibold leading-snug pl-5 w-full mt-3 mb-2">
              Join a team shaping the future of intelligent robotics and automation technology. Innovate. Build. Lead.
              </div>
              <div className="flex items-center gap-2 mb-2 mt-3">
                <span className="leading-2.5 px-5  text-black/70 text-2xl font-semibold">Start <br /> <span className="text-black/90 text-3xl font-bold">Applying.</span></span>
                
                <button className="ml-auto mr-2 mb-2  bg-black text-white rounded-full w-13 h-13 flex items-center justify-center shadow-md">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex gap-2 absolute left-0 bottom-5 pl-4">
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 hover:bg-white shadow hover:-translate-y-1.5 duration-75 "><FaInstagramSquare size={30}/></a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 hover:bg-white shadow hover:-translate-y-1.5 duration-75"><FaTelegram size={30}/></a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 hover:bg-white shadow hover:-translate-y-1.5 duration-75"><FaFacebook size={30}/></a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 hover:bg-white shadow hover:-translate-y-1.5 duration-75"><FaTwitter size={30}/></a>
        </div>
        {/* EPICAUTOMATIONS background text */}
        <div className="absolute right-50 translate-x-1/2 bottom-55 -z-10 select-none pointer-events-none flex flex-row items-start justify-end">
          <p className="text-[200px] font-extrabold text-white/40  leading-none tracking-wide" style={{textShadow : '0 0 5px #FBE6BF, 0 0 10px #FBE6BF, 0 0 20px #FBE6BF'}}>EPIC</p>
          <p className="text-[200px] font-extrabold text-white/40 tracking-wide leading-none ml-10" style={{textShadow : '0 0 5px #FBE6BF, 0 0 10px #FBE6BF, 0 0 20px #FBE6BF'}}>AUTOMATIONS</p>
        </div>
        
      </div>
      {/* Center: Robot Image */}
      <div className="absolute -bottom-25 left-1/2 -ml-15 -translate-x-1/2 z-10">
        <img
          src={avatars[currentIdx].src}
          alt={avatars[currentIdx].label}
          width={avatars[currentIdx].width}
          height={avatars[currentIdx].height}
          style={{
            width: avatars[currentIdx].width + "px",
            height: avatars[currentIdx].height + "px",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
          className={`object-contain drop-shadow-2xl rounded-2xl transition-all duration-500 ${animationClass}`}
          key={currentIdx}
        />
      </div>
      {/* Right Section */}
      <div className="relative flex flex-col w-[40vw] h-full pr-[60px] pt-[48px] pb-[40px] z-20">
        {/* Feature List */}
        <div className="flex flex-col items-end gap-1 text-right text-[17px] text-black/70 font-medium pr-2 pt-2 min-w-[140px]">
          <span className="text-black font-semibold hover:underline cursor-pointer ">Web based <span className="text-black font-medium">/01</span></span>
          <span className="text-black font-semibold hover:underline cursor-pointer ">Collaborative <span className="text-black font-medium">/02</span></span>
          <span className="text-black font-semibold hover:underline cursor-pointer ">Real-time <span className="text-black font-medium">/03</span></span>
        </div>
        {/* Byline */}
        <div className="flex items-start gap-2 text-[14px] text-black/60 font-medium mt-6 mb-2 justify-start">
          <SiTicktick size={15} className="text-black justify-start mt-1"/>
          <span>By Epic <br />
          <span>Robotic Arm edition - ver 0.1.0</span></span>
        </div>
        {/* Horizontal Card */}
        <div className="flex items-center bg-black rounded-full pl-2 pr-1 py-2 shadow-xl w-[380px] h-[80px] mt-8 ml-auto">
          <img src='/images/robotarmcardimg.png' className="rotate-y-180 text-black rounded-full -mt-15 w-38 h-38 flex items-start justify-start  " />
          <div className="flex-1 flex items-center pl-1">
            <span className="text-white text-lg leading-tight font-medium">Special Purpose Machines</span>
          </div>
          <button className="ml-auto bg-white cursor-pointer text-black rounded-full w-18 h-18 flex items-center justify-center shadow-md border border-black">
          <ImArrowDownRight2 size={30} />
          </button>
        </div>
        
        {/* 2x2 Avatar Grid */}
        <div className="absolute bottom-5 right-10 grid grid-cols-3 gap-3 items-end justify-end z-30">
          {avatars.map((avatar, idx) => (
            <img
              key={idx}
              src={avatar.src}
              alt={avatar.label}
              className={`w-[100px] h-[100px] rounded-full border-4 bg-black shadow-lg object-cover transition-all duration-300
                ${currentIdx === idx ? 'border-8 border-yellow-400 scale-110 z-40' : 'border-white scale-100'}`}
                style={{ cursor: 'pointer', zIndex: currentIdx === idx ? 40 : undefined }}
                onClick={() => {
                  setCurrentIdx(idx);
                  setAnimState('entering');
                }}
            />
          ))}
        </div>
      </div>
    </div>
     </>
    
  );
} 
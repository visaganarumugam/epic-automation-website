import { InteractiveHoverButton } from "../../components/ui_components/interactive-hover-button";

const features = [
  {
    title: 'INTEGRITY',
    desc: 'At Synapse, we believe in long term partnerships with our customers and suppliers. Therefore, we conduct business in a fair and transparent manner.',
    img: '/images/integrity.png',
    position: 'md:absolute md:-left-50 md:top-4',
    cardClass: 'bg-white/50 backdrop-blur-xl shadow-xl shadow-white/50 border border-white ',
  },
  {
    title: 'INNOVATION',
    desc: 'We innovate relentlessly, embracing new technologies and continuous learning to create advanced solutions that consistently meet our customers’ evolving needs.',
    img: '/images/innovation.png',
    position: 'md:absolute md:-right-55 md:top-4',
    cardClass: 'bg-white/50 backdrop-blur-xl shadow-xl shadow-white/50 border border-white',
  },
  {
    title: 'VISION',
    desc: 'We strive to lead automation by delivering cutting-edge robotics solutions that empower industries through innovation, precision, and intelligent technology.',
    img: '/images/vision.png',
    position: 'md:absolute md:-left-70 md:bottom-13 ',
    cardClass: 'bg-white/50 backdrop-blur-xl shadow-xl shadow-white/50 border border-white',
  },
  {
    title: 'MISSION',
    desc: 'We deliver reliable, safe, cost-effective, and aesthetic automation solutions that create lasting value and elevate customer satisfaction and experience.',
    img: '/images/mission.png',
    position: 'md:absolute md:-right-70 md:bottom-13 ',
    cardClass: 'bg-white/50 backdrop-blur-xl shadow-xl shadow-white/50 border border-white',
  },
  {
    title: 'EXCELLENCE',
    desc: 'We deliver highly reliable solutions with a no-compromise quality mindset, ensuring every product meets the highest standards for our customers..',
    img: '/images/excellence.png',
    position: 'md:absolute md:-left-50 md:-bottom-47',
    cardClass: 'bg-white/50 backdrop-blur-xl shadow-xl shadow-white/50 border border-white ',
  },
  {
    title: 'COLLABORATION',
    desc: 'We believe teamwork fuels success. Through close collaboration, we create smarter, scalable automation solutions that deliver real impact and innovation.',
    img: '/images/collaboration.png',
    position: 'md:absolute md:-right-55 md:-bottom-47 ',
    cardClass: 'bg-white/50 backdrop-blur-xl shadow-xl shadow-white/50 border border-white',
  },
];

export default function OurMisson() {
  return (
    <section id="our-mission" className="relative w-full min-h-[120vh] flex flex-col items-center justify-start py-16 pb-20 bg-gradient-to-t from-gray-200 via-[#2eb9e4] to-[#ebe97c] px-2 overflow-hidden">
      {/* Radial background effect */}
      <div className="absolute inset-0 pt-80 pr-15 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[650px] h-[600px] rounded-full bg-[#fffeda] blur-2xl" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold text-center text-black mb-2">Our Mission. Our Vision. Our Drive.</h1>
        <p className="text-gray-800 md:text-2xl text-center max-w-4xl mb-14">
        We aim to revolutionize automation with smart robotics, driving innovation, efficiency, and progress for a better, connected future.
        </p>
        <button className=" z-50 rounded-full flex items-center gap-2 cursor-pointer px-2 py-1  hover:text-white hover:bg-black mb-12 border border-black   transition text-xl font-semibold">
        <InteractiveHoverButton>Explore Machines</InteractiveHoverButton>
        </button>
        {/* Main visual area */}
        <div className="relative flex  items-center justify-center w-full min-h-[420px] md:min-h-[500px]" style={{height: "500px"}}>
          {/* Feature Cards */}
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded-xl flex items-start z-50 gap-4 p-4 max-w-lg w-[490px] min-h-[110px] mb-4 md:mb-7 border transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl ${feature.position} ${feature.cardClass} ${feature.title === 'EXPERT SUPPORT' ? 'md:mb-32' : ''}`}
            >
              <img src={feature.img} alt={feature.title} className="w-30  h-30 object-cover invert-30 rounded-lg " />
              <div>
                <h3 className="uppercase text-xl font-gilroy font-bold tracking-widest text-gray-700 mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm font-semibold mb-1">{feature.desc}</p>
              </div>
            </div>
          ))}
          {/* Central Phone Image */}
          <div className="relative  flex justify-center items-center">
            <img src="/images/ourmission.png" alt="Phone" className="ml-auto mr-30 mt-20 w-64 h-[74vh] md:w-[1350px] rounded-3xl " />
          </div>
        </div>
      </div>
    </section>
  );
}

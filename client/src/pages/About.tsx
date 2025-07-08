
import { GridPattern } from "../components/magicui/grid-pattern";
import { cn } from "../lib/utils";
import HeroVideoDialog from "../components/magicui/hero-video-dialog";
import roboticsImageAbout from "/public/images/roboticsimageabout.jpg";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { MarqueeDemoVertical } from "../components/ui/marqueeVertical";
import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';

const contactInfo = [
  {
    icon: <IconMail size={35} stroke={1.7} className="text-[#ff8c00]" />,
    label: 'Email us',
    value: 'johnny.kyorov@gmail.com',
    href: 'mailto:johnny.kyorov@gmail.com',
  },
  {
    icon: <IconPhone size={35} stroke={1.7} className="text-[#ff8c00]" />,
    label: 'Call us',
    value: '(501) 123-4567',
    href: 'tel:5011234567',
  },
  {
    icon: <IconMapPin size={35} stroke={1.7} className="text-[#ff8c00]" />,
    label: 'Our location',
    value: 'Crosby Street, NY, US',
    href: 'https://maps.google.com',
  },
];


export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-[#101014] flex flex-col items-center py-12 px-2 font-gilroy overflow-hidden">
      {/* GridPattern Background */}
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
        )}
      />
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top,white,transparent,transparent)] ",
        )}
      />
      {/* Main Content (z-10) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading Section - Centered Modern Layout */}
        <div className="w-full flex flex-col items-center justify-center bg-transparent rounded-none md:rounded-2xl px-4 md:px-10 py-10 mb-5 pt-25">
          <h1 className="w-full text-center text-3xl md:text-7xl font-semibold leading-tight mb-4 md:mb-6 font-gilroy bg-gradient-to-bl from-orange-600 via-white to-orange-600 bg-clip-text text-transparent">
            Discover How Epic Automation's Robotics<br /> Innovation Are Transforming<br /> The Future
          </h1>
          <p className="text-gray-200 text-center text-base md:text-2xl mb-8 font-gilroy">
          At Epic Automations, we pioneer AI-driven robotics, creating adaptive, efficient, ethical solutions for real‑world challenges.
          </p>
          <div className="flex flex-row gap-4 w-full justify-center mb-2">
            <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#dadada] transition font-gilroy">
              Meet Our Team
            </button>
            <button className="border-2 border-white cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#f3f3f3] hover:text-black transition font-gilroy">
            Explore Our Innovations
            </button>
          </div>
        </div>
        {/* Main Image (now Video) */}
        <div className="w-full max-w-[70vw] p-2  bg-[#ff9900]/60  rounded-2xl overflow-hidden mb-25 mx-auto">
          <HeroVideoDialogDemo />
        </div>
        {/* Success Stories Stats */}
        <div className="w-full max-w-7xl  rounded-2xl py-12 px-4 flex flex-col items-center mb-12 ">
            <h2 className="bg-gradient-to-bl from-[#dd6b20] via-white to-[#dd6b20] bg-clip-text text-transparent text-4xl md:text-7xl font-semibold  text-center mb-8">
            Success Stories That Define  <br /> Our Robotics Journey
            </h2>
            <div className="flex flex-col md:flex-row justify-center mt-12 mb-10 gap-8 w-full">
              <div className="flex flex-col items-center flex-1 border-r p-3"
                style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to bottom, #dd6b20, white , #dd6b20)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-gray-300 ">50K+</span>
                <span className="text-white text-2xl mt-1">Employee</span>
              </div>
              <div className="flex flex-col items-center flex-1 border-r p-3" 
                      style={{
                      borderRight: '2px solid transparent',
                      borderImageSource: 'linear-gradient(to bottom, #dd6b20, white , #dd6b20)',
                      borderImageSlice: 1,
                      
                      }}>
                <span className="text-3xl md:text-6xl  font-semibold text-gray-300 ">05M+</span>
                <span className="text-white text-2xl mt-1">Users in globally</span>
              </div>
              <div className="flex flex-col items-center flex-1 border-r p-3"
                style={{
                  borderRight: '2px solid transparent',
                  borderImageSource: 'linear-gradient(to bottom, #dd6b20, white,#dd6b20)',
                  borderImageSlice: 1,
                  
                  }}
              >
                <span className="text-3xl md:text-6xl  font-semibold text-gray-300 ">98%</span>
                <span className="text-white text-2xl mt-1">Positive review</span>
              </div>
              <div className="flex flex-col items-center flex-1  p-3">
                <span className="text-3xl md:text-6xl  font-semibold text-gray-300 ">15+</span>
                <span className="text-white text-2xl mt-1">Years in business</span>
              </div>
            </div>
          </div>
        {/* Story & Target Section - Pixel Perfect */}
        <div className="w-full max-w-full px-20 flex flex-col gap-10 mt-4">
          {/* Our Story Card */}
          <div className="w-full h-[60vh]  rounded-4xl  flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex flex-col items-start justify-center px-8 py-10 md:py-8">
              <h3 className="bg-gradient-to-bl from-orange-600 via-white to-orange-600 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold mb-6">The People Behind the Magic</h3>
              <p className="text-gray-300 text-base md:text-2xl mb-8 max-w-full">
                Founded with a vision to revolutionize industries, Epic Automations harnesses the power of robotics and AI to create intelligent, adaptive solutions. Our journey began with a passion for innovation—designing robots that not only automate tasks but also learn, collaborate, and transform the way businesses operate. From manufacturing floors to smart warehouses, our story is one of relentless pursuit of excellence in robotics.
              </p>
              <ShimmerButton className="shadow-2xl mt-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Learn More
                </span>
              </ShimmerButton>
            </div>
            <div className="flex-1 flex items-center m-5  justify-center min-h-[220px] ">
              <img
                src="/images/bg.jpg"
                alt="Our story - Robotics innovation"
                className="w-full h-full object-cover object-center p-1 bg-[#ff9900]/60 rounded-4xl "               
              />
            </div>
          </div>
          {/* Our Target Card */}
          <div className="w-full h-[60vh]  rounded-4xl  flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex items-center m-5  justify-center min-h-[220px]  order-1 md:order-none">
              <img
                src="/images/design.jpg"
                alt="Our target - Robotics solutions"
                className="w-full h-full object-cover object-center p-1 bg-[#ff9900]/60  md:rounded-4xl  "
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-end px-8 py-10 md:py-8 order-2 md:order-none ml-auto">
              <h3 className="bg-gradient-to-bl from-orange-600 via-white to-orange-600 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold mb-7 text-right">The Dream We're Chasing</h3>
              <p className="text-gray-300 text-base md:text-2xl mb-8 font-mono max-w-full text-right">
                We aim to lead the robotics revolution by delivering scalable, intelligent automation for every industry. Our mission is to empower businesses with robots that enhance productivity, ensure safety, and drive sustainable growth. By integrating advanced AI, machine vision, and collaborative robotics, we strive to shape a future where humans and robots work side by side to achieve extraordinary results.
              </p>
              <ShimmerButton className="shadow-2xl mt-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Learn More
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
         {/* Success Stories & Experts Section */}
         <div className="w-full flex flex-col items-center mt-30">
          
          {/* Experts Section - Pixel Perfect */}
          <div className="w-full max-w-full flex flex-col items-center">
            <h3 className="bg-gradient-to-bl from-[#dd6b20] via-white to-[#dd6b20] bg-clip-text text-transparent text-4xl md:text-7xl font-semibold  text-center mb-3 mt-2">Meet the Team Powering Our <br/> Robotics Vision</h3>
            <p className="text-gray-300 text-base md:text-2xl text-center max-w-7xl mt-3 mb-15">
              Discover the passionate team of innovators, strategists, and customer success professionals working tirelessly to help you achieve your goals
            </p>
            {/* experts card section */}
            {(() => {
              const experts = [
                {
                  img: 'https://randomuser.me/api/portraits/women/44.jpg',
                  name: 'Dr. Maya Patel',
                  role: 'Chief Robotics Engineer',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/32.jpg',
                  name: 'Alex Kim',
                  role: 'Automation Systems Lead',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/65.jpg',
                  name: 'Sara Lee',
                  role: 'AI & Machine Vision Specialist',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/44.jpg',
                  name: 'Carlos Rivera',
                  role: 'Product Designer',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/68.jpg',
                  name: 'Priya Singh',
                  role: 'Robotics Software Architect',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/45.jpg',
                  name: 'Liam Chen',
                  role: 'Embedded Systems Expert',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/43.jpg',
                  name: 'Emily Johnson',
                  role: 'Human-Robot Interaction Lead',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/46.jpg',
                  name: 'David Brown',
                  role: 'Manufacturing Integration Manager',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/66.jpg',
                  name: 'Olivia Martin',
                  role: 'Quality Assurance Engineer',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/47.jpg',
                  name: 'Ethan Williams',
                  role: 'Field Robotics Specialist',
                },
              ];
              return (
                <div className="w-full px-25 flex flex-col items-center">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 justify-center items-center mb-8  rounded-2xl py-6">
                    {experts.slice(0, 5).map((expert, idx) => (
                      <div key={idx} className="flex flex-col mx-7 items-center">
                        <div className="w-32 h-32 md:w-62 md:h-72 p-1 rounded-full rounded-tl-none overflow-hidden bg-[#ff9900]/80 flex items-center justify-center mb-6 shadow-lg">
                          <img
                            src={expert.img}
                            alt={expert.name}
                            className="w-full h-full rounded-full rounded-tl-none object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg md:text-2xl text-white  mb-1">{expert.name}</div>
                          <div className="text-gray-400 text-sm md:text-base">{expert.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 justify-center items-center mt-2  rounded-2xl py-6">
                    {experts.slice(5, 10).map((expert, idx) => (
                      <div key={idx} className="flex flex-col mx-7 items-center">
                        <div className="w-32 h-32 md:w-62 md:h-72 p-1 rounded-full rounded-tr-none overflow-hidden bg-[#ff9900]/80 flex items-center justify-center mb-6 shadow-lg">
                          <img
                            src={expert.img}
                            alt={expert.name}
                            className="w-full h-full rounded-full rounded-tr-none object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg md:text-2xl text-white  mb-1">{expert.name}</div>
                          <div className="text-gray-400 text-sm md:text-base">{expert.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Review Section - Pixel Perfect */}
        <div className="w-full max-w-full flex flex-col items-center mt-25 mb-12">
          <h2 className="bg-gradient-to-bl from-orange-600 via-white to-orange-600 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold text-center mb-2">What Our Clients Say</h2>
          <p className="text-gray-300 text-base md:text-2xl text-center max-w-7xl mt-3 mb-1">
            Discover how our robotics solutions have transformed businesses and hear directly from satisfied customers
          </p>
          <div className="mt-25 px-10">
          <MarqueeDemoVertical />
          </div>
          
        </div>
        {/* contact us form */}
        <section className="w-full min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-10 md:py-0">
      {/* Large faded CONTACT background text */}
      <span className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="text-[10vw] md:text-[10vw] font-black tracking-tighter text-orange-300 opacity-20" style={{letterSpacing: '-0.05em'}}>EPIC AUTOMATIONS</span>
      </span>
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 mx-10 bg-transparent">
        {/* Left: Contact Info */}
        <div className="flex flex-col w-full gap-6 justify-center h-full">
          <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f5540f] mr-2 inline-block"></span>
            Contact
          </div> 
          <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-bl from-orange-600 via-white to-orange-600 bg-clip-text text-transparent">Get in touch</h2>
          <p className="text-gray-300 text-2xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, _) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-[94%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#ff9900] transition-all"
              >
                <div className="flex py-2 items-center gap-4">
                  <span className="bg-white/10 border  border-white/25 rounded-xl p-2 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black text-xl font-semibold">{item.label}</span>
                    <span className="text-gray-700 text-lg">{item.value}</span>
                  </div>
                </div>
                <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#ff9900] transition-colors">
                  <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="flex flex-col gap-2 bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-2 w-full">
          <input
            type="text"
            placeholder="Name"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff9900] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff9900] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <textarea
            placeholder="Message"
            rows={6}
            className=" h-[70%] bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff9900] transition-all resize-none"
            style={{fontFamily: 'Gilroy'}}
          />
          <button
            type="submit"
            className="w-full bg-black text-white cursor-pointer font-semibold text-lg py-4 rounded-xl shadow hover:bg-[#ff9900] hover:text-black transition-all mt-2"
            style={{fontFamily: 'Gilroy'}}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
       
      </div>
    </div>
  );
}

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/oMhES_M9WZw"
        thumbnailSrc={roboticsImageAbout}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/oMhES_M9WZw"
        thumbnailSrc={roboticsImageAbout}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
} 
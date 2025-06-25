import React from 'react';
import Slider from 'react-infinite-logo-slider';
import ContactUsForm from './contactusform';
interface Logo {
  name: string;
  img: string;
  faded?: boolean;
}

const row1: Logo[] = [
  { name: 'Skyline', img: '/src/assets/images/logos/logo-skyline-250x250.webp' },
  { name: 'ABB', img: '/src/assets/images/logos/png-transparent-abb-automation-gmbh-abb-group-logo-manufacturing-industry-disney-miscellaneous-company.png' },
  { name: 'Colgate', img: '/src/assets/images/logos/colgate-smile-logo-image-png-7017516947731572dolemtldl.png' },
  { name: 'Berger', img: '/src/assets/images/logos/100-years-of-brilliance-berger-unveils-a-colourful-tapestry-of-success.webp' },
  { name: 'Parc Robotic', img: '/src/assets/images/logos/parc_robotic_systems_pvt_ltd_logo.jpeg.jpg' },
  { name: 'Skyline Automation', img: '/src/assets/images/logos/skyline_automation_cover.jpeg.jpg' },
  { name: 'Dabur', img: '/src/assets/images/logos/Dabur_Logo.svg.png' },
  { name: 'Download', img: '/src/assets/images/logos/download (2).png' },
];
const row2: Logo[] = [
  { name: '1630614290262', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: '1709892254646', img: '/src/assets/images/logos/1709892254646.jpeg.jpg' },
  { name: 'Hi Tech Automation', img: '/src/assets/images/logos/hi_tech_automation_ltd_logo.jpeg.jpg' },
  { name: 'EC2B6CD', img: '/src/assets/images/logos/ec2b6cdce1f7600edbd6654e8be8b462.jpg' },
  { name: 'Images', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: '462970656', img: '/src/assets/images/logos/462970656_3997027903956050_6514022596159937322_n.png' },
  { name: '80', img: '/src/assets/images/logos/80.png' },
  { name: 'Products', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
];
const row3: Logo[] = [
  { name: 'Kit', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: 'Design', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: 'Solutions', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: 'Logo', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: '1630614290262', img: '/src/assets/images/logos/1630614290262.jpeg.jpg' },
  { name: '1709892254646', img: '/src/assets/images/logos/1709892254646.jpeg.jpg' },
  { name: 'Hi Tech Automation', img: '/src/assets/images/logos/hi_tech_automation_ltd_logo.jpeg.jpg' },
  { name: 'EC2B6CD', img: '/src/assets/images/logos/ec2b6cdce1f7600edbd6654e8be8b462.jpg' },
];

function LogoSliderRow({ logos, toRight = false, duration = 20 }: { logos: Logo[]; toRight?: boolean; duration?: number }) {
  // Duplicate the logos array for seamless infinite scroll
  const logosToShow = [...logos, ...logos];
  return (
    <div className="w-full">
      <Slider
        width="200px"
        duration={duration}
        pauseOnHover={true}
        blurBorders={false}
        toRight={toRight}
      >
        {logosToShow.map((logo: Logo, idx: number) => (
          <Slider.Slide key={idx}>
            <div
              className={`flex items-center justify-center bg-white rounded-xl shadow h-20 w-40 ${logo.faded ? 'opacity-40 grayscale' : ''}`}
              style={{ marginLeft: 30 }}
            >
              <img src={logo.img} alt={logo.name} className="h-10 object-contain" />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}

export default function ClientlogoSection() {
  return (
    <div className='bg-gradient-to-br from-[#EAF6FF]  to-[#0077b3]'>
    <section className="w-full  flex flex-col md:flex-row items-center justify-start  py-16 gap-20 bg-transparent">
      {/* Left: 3-row infinite logo slider (70%) from-[#EAF6FF] via-[#90B2D8] to-[#0077b3] */}
      <div className="w-full md:w-full flex flex-col gap-8 relative">
        <LogoSliderRow logos={row1} toRight={false} duration={90} />
        <LogoSliderRow logos={row2} toRight={false} duration={100} />
        <LogoSliderRow logos={row3} toRight={false} duration={70} />
      </div>
      {/* Right: Content (30%) */}
      {/* <div className="w-full md:w-[40%] flex flex-col items-start justify-center ml-0 md:ml-1 mt-10 md:mt-0 max-w-md">
        <span className="text-lg font-semibold text-gray-700 mb-2">
          Robotics Partnerships
        </span>
        <h2 className="text-4xl w-[600px] font-bold text-gray-900 mb-4">Trusted by Industry Leaders in Robotics & Automation</h2>
        <p className="text-white w-[520px] text-lg mb-6">
          We collaborate with pioneering companies and organizations to drive innovation in robotics, automation, and smart manufacturing. Our partners help us deliver cutting-edge solutions that shape the future of industry.
        </p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-sky-300 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow hover:from-blue-600 hover:to-blue-300 transition">
          Get Started
          </button>
          <button className="bg-white border border-blue-200 text-sky-500 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition">
            View All Partners
          </button>
        </div>
      </div> */}
    </section>
    <ContactUsForm />
    </div>
    
  );
}

import Slider from 'react-infinite-logo-slider';
import ContactUsForm from './contactusform';
interface Logo {
  name: string;
  img: string;
  faded?: boolean;
}

const row1: Logo[] = [
  { name: 'Skyline', img: '/images/logos/logo-skyline-250x250.webp' },
  { name: 'ABB', img: '/images/logos/png-transparent-abb-automation-gmbh-abb-group-logo-manufacturing-industry-disney-miscellaneous-company.png' },
  { name: 'Colgate', img: '/images/logos/colgate-smile-logo-image-png-7017516947731572dolemtldl.png' },
  { name: 'Berger', img: '/images/logos/100-years-of-brilliance-berger-unveils-a-colourful-tapestry-of-success.webp' },
  { name: 'Parc Robotic', img: '/images/logos/parc_robotic_systems_pvt_ltd_logo.jpeg.jpg' },
  { name: 'Skyline Automation', img: '/images/logos/skyline_automation_cover.jpeg.jpg' },
  { name: 'Dabur', img: '/images/logos/Dabur_Logo.svg.png' },
  { name: 'Download', img: '/images/logos/download (2).png' },
];
const row2: Logo[] = [
  { name: '1630614290262', img: '/images/logos/1630614290262.jpeg.jpg' },
  { name: '1709892254646', img: '/images/logos/1709892254646.jpeg.jpg' },
  { name: 'Hi Tech Automation', img: '/images/logos/hi_tech_automation_ltd_logo.jpeg.jpg' },
  { name: 'EC2B6CD', img: '/images/logos/ec2b6cdce1f7600edbd6654e8be8b462.jpg' },
  { name: 'Images', img: '/images/logos/images.png' },
  { name: '462970656', img: '/images/logos/462970656_3997027903956050_6514022596159937322_n.png' },
  { name: '80', img: '/images/logos/80.png' },
  { name: 'Download', img: '/images/logos/download (2).png' },
];
const row3: Logo[] = [
  { name: '1630614290262', img: '/images/logos/1630614290262.jpeg.jpg' },
  { name: '1709892254646', img: '/images/logos/1709892254646.jpeg.jpg' },
  { name: 'Hi Tech Automation', img: '/images/logos/hi_tech_automation_ltd_logo.jpeg.jpg' },
  { name: 'EC2B6CD', img: '/images/logos/ec2b6cdce1f7600edbd6654e8be8b462.jpg' },
  { name: 'Images', img: '/images/logos/images.png' },
  { name: '462970656', img: '/images/logos/462970656_3997027903956050_6514022596159937322_n.png' },
  { name: '80', img: '/images/logos/80.png' },
  { name: 'Download', img: '/images/logos/download (2).png' },
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
              className={`flex items-center justify-center bg-white/35 backdrop-blur-[15px] border border-white/20  rounded-xl  h-20 w-40 ${logo.faded ? 'opacity-40 grayscale' : ''}`}
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
        <LogoSliderRow logos={row1} toRight={false} duration={100} />
        <LogoSliderRow logos={row2} toRight={false} duration={120} />
        <LogoSliderRow logos={row3} toRight={false} duration={100} />
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

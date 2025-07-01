import Slider from 'react-infinite-logo-slider';
import ContactUsForm from './contactusform';
interface Logo {
  name: string;
  img: string;
  faded?: boolean;
  size?: { w: number; h: number };
}

// Only use images that are present in the /images/logos/ folder
const allLogos: Logo[] = [
  { name: 'BERGER', img: '/images/logos/BERGER.png', size: { w: 90, h: 55 } },
  
  { name: 'ALBA', img: '/images/logos/ALBA.jpg', size: { w: 80, h: 36 } },
  { name: 'ADNA', img: '/images/logos/ADNA.jpg', size: { w: 90, h: 72 } },
  { name: 'hITECH', img: '/images/logos/hITECH.jpeg.jpg', size: { w: 90, h: 90 } },
  { name: 'FANUC', img: '/images/logos/FANUC.png', size: { w: 100, h: 100 } },
  { name: 'PARC', img: '/images/logos/PARC.jpeg.jpg', size: { w: 120, h: 122 } },
  { name: 'DABUR', img: '/images/logos/DABUR.png', size: { w: 80, h: 46 } },
  { name: 'vac', img: '/images/logos/vac.png', size: { w: 80, h: 65 } },
  { name: 'COMRADES', img: '/images/logos/COMRADES.jpeg.jpg', size: { w: 102, h: 102 } },
  { name: 'ABB', img: '/images/logos/ABB.png', size: { w: 100, h: 80 } },
  { name: 'SKYLINEAUTO', img: '/images/logos/SKYLINEAUTO.jpeg.jpg', size: { w: 100, h: 100 } },
  { name: 'COLGATE', img: '/images/logos/COLGATE.png', size: { w: 100, h: 100 } },
  { name: 'HEALTHCARE', img: '/images/logos/HEALTHCARE.png', size: { w: 110, h: 50 } },
  { name: 'ola', img: '/images/logos/ola.png', size: { w: 90, h: 42 } },
  { name: 'YASKAWA', img: '/images/logos/YASKAWA.png', size: { w: 100, h: 100 } },
  
  { name: 'lmw', img: '/images/logos/lmw.png', size: { w: 90, h: 45 } },
];

// Distribute logos evenly across 3 rows, each logo only once
type RowLogos = [Logo[], Logo[], Logo[]];
function distributeLogos(logos: Logo[]): RowLogos {
  const row1: Logo[] = [];
  const row2: Logo[] = [];
  const row3: Logo[] = [];
  logos.forEach((logo, idx) => {
    if (idx % 3 === 0) row1.push(logo);
    else if (idx % 3 === 1) row2.push(logo);
    else row3.push(logo);
  });
  return [row1, row2, row3];
}

const [row1, row2, row3] = distributeLogos(allLogos);

function LogoSliderRow({ logos, toRight = false, duration = 20 }: { logos: Logo[]; toRight?: boolean; duration?: number }) {
  // Show each logo only once, no duplication
  return (
    <div className="w-full relative">
      
      <Slider
        width="200px"
        duration={duration}
        pauseOnHover={true}
        blurBorders={false}
        toRight={toRight}
      >
        {logos.map((logo: Logo, idx: number) => (
          <Slider.Slide key={idx}>
            <div
              className={`flex items-center justify-center bg-white/35 backdrop-blur-[15px] border border-white/20  rounded-xl h-20 w-40 ${logo.faded ? 'opacity-40 grayscale' : ''}`}
              style={{ marginLeft: 30 }}
            >
              <img
                src={logo.img}
                alt={logo.name}
                style={{ width: logo.size?.w || 80, height: logo.size?.h || 32, objectFit: 'contain' }}
              />
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
      <div className="w-full md:w-[full] flex flex-col gap-8 relative">
      
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

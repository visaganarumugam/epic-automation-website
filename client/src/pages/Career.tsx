import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';
import Slider from 'react-infinite-logo-slider';
import { submitServiceEnquiry } from '../lib/firebase';
import { useState } from 'react';
import { IconAnchor, IconSchool, IconWorld, IconBriefcase , IconArrowUpRight , IconMail , IconPhone , IconMapPin } from '@tabler/icons-react';




// const jobs1 = [
//   {
//     label: 'RESEARCH',
//     title: 'Data Scientist',
//     desc: 'Analyze data trends and build predictive models for business insights.',
//     value: 'Remote',
//     period: 'Full-time',
//     bg: 'bg-indigo-200',
//     text: 'text-black',
//   },
//   {
//     label: 'SECURITY',
//     title: 'Cybersecurity Analyst',
//     desc: 'Protect our systems and data from cyber threats and vulnerabilities.',
//     value: 'Onsite',
//     period: 'Full-time',
//     bg: 'bg-slate-300',
//     text: 'text-black',
//   },
//   {
//     label: 'CONTENT',
//     title: 'Copywriter',
//     desc: 'Write compelling copy for marketing campaigns and product launches.',
//     value: 'Remote',
//     period: 'Contract',
//     bg: 'bg-rose-200',
//     text: 'text-black',
//   },
//   {
//     label: 'ADMIN',
//     title: 'Office Manager',
//     desc: 'Oversee daily office operations and support the team’s productivity.',
//     value: 'Onsite',
//     period: 'Full-time',
//     bg: 'bg-emerald-200',
//     text: 'text-black',
//   },
// ];
// const jobs2 = [
//   {
//     label: 'ENGINEERING',
//     title: 'Frontend Developer',
//     desc: 'Build beautiful, scalable web interfaces with React and TypeScript.',
//     value: 'Remote',
//     period: 'Full-time',
//     bg: 'bg-blue-200',
//     text: 'text-black',
//   },
//   {
//     label: 'DESIGN',
//     title: 'UI/UX Designer',
//     desc: 'Craft delightful user experiences and design modern interfaces.',
//     value: 'Hybrid',
//     period: 'Contract',
//     bg: 'bg-pink-200',
//     text: 'text-black',
//   },
//   {
//     label: 'MARKETING',
//     title: 'Content Strategist',
//     desc: 'Develop and execute content strategies for our digital platforms.',
//     value: 'Remote',
//     period: 'Part-time',
//     bg: 'bg-orange-200',
//     text: 'text-black',
//   },
//   {
//     label: 'SUPPORT',
//     title: 'Customer Success',
//     desc: 'Help our users succeed and ensure a smooth onboarding process.',
//     value: 'Onsite',
//     period: 'Full-time',
//     bg: 'bg-teal-200',
//     text: 'text-black',
//   },
// ];

// const jobs3 = [
//   {
//     label: 'OPERATIONS',
//     title: 'Project Manager',
//     desc: 'Lead cross-functional teams to deliver projects on time.',
//     value: 'Remote',
//     period: 'Full-time',
//     bg: 'bg-red-200',
//     text: 'text-black',
//   },
//   {
//     label: 'HR',
//     title: 'Talent Acquisition',
//     desc: 'Find and recruit the best talent for our growing team.',
//     value: 'Onsite',
//     period: 'Full-time',
//     bg: 'bg-yellow-300',
//     text: 'text-black',
//   },
//   {
//     label: 'FINANCE',
//     title: 'Accountant',
//     desc: 'Manage company finances and ensure compliance.',
//     value: 'Remote',
//     period: 'Part-time',
//     bg: 'bg-lime-200',
//     text: 'text-black',
//   },
//   {
//     label: 'LEGAL',
//     title: 'Legal Advisor',
//     desc: 'Provide legal guidance and ensure regulatory compliance.',
//     value: 'Hybrid',
//     period: 'Contract',
//     bg: 'bg-gray-200',
//     text: 'text-black',
//   },
// ];

// const jobs4 = [
//   {
//     label: 'PRODUCT',
//     title: 'Product Owner',
//     desc: 'Define product vision and prioritize features for development.',
//     value: 'Remote',
//     period: 'Full-time',
//     bg: 'bg-fuchsia-200',
//     text: 'text-black',
//   },
//   {
//     label: 'QA',
//     title: 'QA Engineer',
//     desc: 'Test and ensure the quality of our software products.',
//     value: 'Onsite',
//     period: 'Full-time',
//     bg: 'bg-cyan-200',
//     text: 'text-black',
//   },
//   {
//     label: 'SALES',
//     title: 'Sales Executive',
//     desc: 'Drive sales and build relationships with key clients.',
//     value: 'Remote',
//     period: 'Commission',
//     bg: 'bg-amber-200',
//     text: 'text-black',
//   },
//   {
//     label: 'IT',
//     title: 'IT Support',
//     desc: 'Maintain IT infrastructure and assist team members.',
//     value: 'Onsite',
//     period: 'Full-time',
//     bg: 'bg-green-300',
//     text: 'text-black',
//   },
// ];


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

interface Logo {
  name: string;
  img: string;
  faded?: boolean;
  size?: { w: number; h: number };
}
const contactInfo = [
  {
    icon: <IconMail size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Email us',
    value: 'johnny.kyorov@gmail.com',
    href: 'mailto:johnny.kyorov@gmail.com',
  },
  {
    icon: <IconPhone size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Call us',
    value: '(501) 123-4567',
    href: 'tel:5011234567',
  },
  {
    icon: <IconMapPin size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Our location',
    value: 'Crosby Street, NY, US',
    href: 'https://maps.google.com',
  },
];
export default function Career() {
  const [enquiryStatus, setEnquiryStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      country: String(fd.get('country') || '').trim(),
      state: String(fd.get('state') || '').trim(),
      course: String(fd.get('course') || '').trim(),
      message: String(fd.get('message') || '').trim(),
      source: 'services-enquiry',
    } as any;

    setEnquiryStatus('loading');
    setErrorMsg(null);
    try {
      const res = await submitServiceEnquiry(payload as any);
      if (res.error) {
        setEnquiryStatus('error');
        setErrorMsg(res.error);
      } else {
        setEnquiryStatus('success');
        form.reset();
      }
    } catch (e: any) {
      setEnquiryStatus('error');
      setErrorMsg(e?.message || 'Submission failed');
    } finally {
      setTimeout(()=>setEnquiryStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#fadca1]  to-[#ffe7b6] flex flex-col items-center justify-start pt-16 px-2">
      {/* Hero Section with Background Image */}
      <div className="relative w-[82vw] sm:w-[92vw] md:w-[90vw] mt-16 sm:mt-18 md:mt-20 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/herosecImages/epicbghero1.png" 
            alt="Epic Automations Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
        
        {/* Content */}
        <FadeUpSection className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          {/* Main Title */}
          <AnimatedSection
            customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-20 mb-4 sm:mb-6 drop-shadow-2xl">
            India's Best Center for Technology  <br className="hidden sm:block" /> & Management Courses.
            </h1>
          </AnimatedSection>
          {/* Subheadline */}
          <AnimatedSection customAnimation={{ y: 30, opacity: 0, duration: 0.8, delay: 0.4 }}
          >
             <div className="flex flex-col sm:flex-row gap-4 sm:w-full justify-center mb-2">
                
                <button className="border-2 border-[#ff4f0f] cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-black hover:text-white transition font-gilroy" style={{boxShadow:'0 8px 32px 0 #ff4f0f'}}>
                  Join now 
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4f0f] ml-4 inline-block"></span>
                </button>
              </div>
          </AnimatedSection>
        </FadeUpSection>
      </div>
      
       {/* Courses Overview (new section) */}
       <section id="courses-overview" className="w-full py-10 sm:py-12 md:py-16">
          <div className="w-full mx-auto px-4 sm:px-6 md:px-12">
            {/* Top categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8">
              <button className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white font-semibold py-5 text-2xl transition-colors">
                Technical Courses
              </button>
              <button className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white font-semibold py-5 text-2xl transition-colors">
                IT Courses
              </button>
              <button className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white font-semibold py-5 text-2xl transition-colors">
                Management Courses
              </button>
            </div>

            {/* Three audience panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl border border-emerald-200 bg-emerald-100 p-10">
                <div className="text-black font-bold text-lg mb-1">Students and Professionals</div>
                <p className="text-xl font-semibold text-black/80">
                  <span className="italic">Unlock Your Potential</span>: Compete, Build Resume,
                  Grow and get Hired!
                </p>
        </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-100 p-10">
                <div className="text-black font-bold text-lg mb-1">Companies and Recruiters</div>
                <p className="text-xl font-semibold text-black/80">
                  <span className="italic">Discover Right Talent</span>: Hire, Engage, and Brand
                  Like Never Before!
                </p>
                </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-100 p-10">
                <div className="text-black font-bold text-lg mb-1">Colleges</div>
                <p className="text-xl font-semibold  text-black/80">
                  <span className="italic">Bridge Academia and Industry</span>: Empower students
                  with Real-World Opportunities!
                </p>
              </div>
                </div> 
            
            {/* Trending courses buttons */}
            <div className="mb-10">
              <div className="text-black text-2xl font-bold mb-8">Trending Courses for after</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Plus Two', 'Degree', 'Diploma', 'Engineering'].map((label) => (
                  <button
                    key={label}
                    className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white text-2xl font-semibold py-4 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
                </div> 
            
            {/* Collaborators logos line (text placeholders to avoid missing assets) */}
            <div className="rounded-2xl bg-gray-50 border border-gray-200 px-4 sm:px-6 md:px-8 py-6 md:py-8 mb-10">
              <p className="text-center text-black/80 text-sm md:text-2xl mb-10">
                Our online-courses training collaborates with over 200+ multinational companies
              </p>
              <div className="w-full md:w-[full] flex flex-col gap-4 sm:gap-6 md:gap-8 mb-7 relative">
                 <LogoSliderRow logos={row1} toRight={false} duration={120} />
               </div>
        </div>
        
            {/* Our Divisions */}
            <div className="mb-6">
              <div className="text-black font-bold text-3xl mb-10">Our Divisions</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                    <IconAnchor className="text-blue-600" size={20} />
                  </div>
                  <div className="text-black text-xl font-semibold">Robotics & Automation</div>
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                    <IconSchool className="text-blue-600" size={20} />
                  </div>
                  <div className="text-black text-xl font-semibold">Special Purpose Machine (SPM)</div>
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                    <IconWorld className="text-blue-600" size={20} />
              </div>
                  <div className="text-black text-xl font-semibold">Scada</div>
                </div> 
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                    <IconBriefcase className="text-blue-600" size={20} />
        </div>
                  <div className="text-black text-xl font-semibold">Custom Panel Design & Manufacturing</div>
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                    <IconBriefcase className="text-blue-600" size={20} />
              </div>
                  <div className="text-black text-xl font-semibold">Robot Programming Services</div>
                </div> 
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                    <IconBriefcase className="text-blue-600" size={20} />
        </div>
                  <div className="text-black text-xl font-semibold">PLC & HMI Programming Services</div>
                </div>
              </div>
                </div> 
        </div>
        </section>
        
        {/* contact us form */}
        <section className="w-screen min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-0 sm:px-10 py-10 md:py-0">
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 mx-10 bg-transparent">
            {/* Left: Contact Info */}
            <div className="flex flex-col w-full gap-2 sm:gap-6 justify-center h-full">
              <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-md sm:text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4f0f] mr-2 inline-block"></span>
                Contact
              </div> 
              <h2 className="text-4xl md:text-7xl font-bold text-black">Get in touch</h2>
              <p className="text-gray-700 text-lg sm:text-2xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
              <div className="flex flex-col gap-4 mb-7 sm:mb-0">
                {contactInfo.map((item, _) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full sm:w-[94%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#ff4f0f] transition-all"
                  >
                    <div className="flex py-2 items-center gap-4">
                      <span className="bg-white/20 border border-white/25 rounded-xl p-1 sm:p-2 flex items-center justify-center">
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-black text-lg sm:text-xl font-semibold">{item.label}</span>
                        <span className="text-black text-base sm:text-lg">{item.value}</span>
                      </div>
                    </div>
                    <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#ff4f0f] transition-colors">
                      <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
            {/* Right: Enquiry Form */}
            <div className="bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-6 sm:p-8">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleEnquirySubmit}>
                {enquiryStatus === 'error' && (
                  <div className="col-span-1 sm:col-span-2 text-red-700 bg-red-100 border border-red-300 rounded-md px-3 py-2 text-sm">
                    Failed to submit. {errorMsg || 'Please try again later.'}
                  </div>
                )}
                {enquiryStatus === 'success' && (
                  <div className="col-span-1 sm:col-span-2 text-green-700 bg-green-100 border border-green-300 rounded-md px-3 py-2 text-sm">
                    Enquiry submitted successfully.
                  </div>
                )}
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Name</label>
                  <input name="name" type="text" required className="w-full bg-white/70 text-black placeholder-black/60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your name" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Phone</label>
                  <input name="phone" type="tel" required className="w-full bg-white/70 text-black placeholder-black/60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your phone number" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Email</label>
                  <input name="email" type="email" required className="w-full bg-white/70 text-black placeholder-black/60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="you@example.com" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Country</label>
                  <input name="country" type="text" required className="w-full bg-white/70 text-black placeholder-black/60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your country" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">State</label>
                  <input name="state" type="text" required className="w-full bg-white/70 text-black placeholder-black/60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your state" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Course</label>
                  <select name="course" required className="w-full bg-white/70 text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500">
                    <option value="">Select a course</option>
                    <option>Robotics & Automation</option>
                    <option>Special Purpose Machine (SPM)</option>
                    <option>SCADA</option>
                    <option>Custom Panel Design & Manufacturing</option>
                    <option>Robot Programming Services</option>
                    <option>PLC & HMI Programming Services</option>
                  
                  </select>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-black font-semibold mb-2">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-white/70 text-black placeholder-black/60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Tell us about your requirement"></textarea>
                </div>
                <div className="col-span-1 sm:col-span-2 flex justify-end">
                  <button type="submit" className="bg-[#ff4f0f] hover:bg-[#e65a08] text-white font-semibold px-6 py-2 rounded-md transition-colors">
                    {enquiryStatus === 'loading' ? 'Submitting...' : enquiryStatus === 'success' ? 'Submitted!' : 'Submit Enquiry'}
                  </button>
                </div>
              </form>
            </div>


          </div>
        </section>
      </div>
    
  );
}

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

const [row1] = distributeLogos(allLogos);

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
              className={`flex items-center justify-center bg-white/75 shadow-2xl backdrop-blur-[15px] border border-blue-200/20 rounded-xl h-16 w-32 sm:h-18 sm:w-36 md:h-20 md:w-40 ${logo.faded ? 'opacity-40 grayscale' : ''}`}
              style={{ marginLeft: 20 }}
            >
              <img
                src={logo.img}
                alt={logo.name}
                style={{ 
                  width: logo.size?.w, 
                  height: logo.size?.h, 
                  objectFit: 'contain' 
                }}
              />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}


      {/* Section Row */}
      {/* <div id="career-featured-plans" className="flex items-center justify-between w-full max-w-full mb-6 mt-8 sm:mt-10 px-8 sm:px-8 md:px-21">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Featured Plans</span>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-right">Explore All</span>
      </div> */}
      {/* Cards Row */}
      {/* <AnimatedSection 
        className='flex flex-col gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 px-2 sm:px-4 md:px-2'
        customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.6 }}
      >
        <div className="w-full max-w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-stretch">
        {jobs1.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[200px] sm:min-w-[220px] max-w-[400px] min-h-[280px] sm:min-h-[320px]`}>
            <span className="uppercase text-sm sm:text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
        <div>
                <span className="block text-sm sm:text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">{job.value}</span>
              </div>
            <button
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="18" height="18" className="sm:w-22 sm:h-22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            </div>
          </div>
          ))}
        </div>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-stretch">
        {jobs2.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[200px] sm:min-w-[220px] max-w-[400px] min-h-[280px] sm:min-h-[320px]`}>
            <span className="uppercase text-sm sm:text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
              <div>
                <span className="block text-sm sm:text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">{job.value}</span>
              </div>
              <button
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="18" height="18" className="sm:w-22 sm:h-22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        </div>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-stretch">
        {jobs3.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[200px] sm:min-w-[220px] max-w-[400px] min-h-[280px] sm:min-h-[320px]`}>
            <span className="uppercase text-sm sm:text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
              <div>
                <span className="block text-sm sm:text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">{job.value}</span>
              </div>
              <button
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="18" height="18" className="sm:w-22 sm:h-22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        </div>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-stretch">
        {jobs4.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[200px] sm:min-w-[220px] max-w-[400px] min-h-[280px] sm:min-h-[320px]`}>
            <span className="uppercase text-sm sm:text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
              <div>
                <span className="block text-sm sm:text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">{job.value}</span>
              </div>
              <button
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="18" height="18" className="sm:w-22 sm:h-22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            </div>
          ))}
        </div>
      </AnimatedSection> */}

 
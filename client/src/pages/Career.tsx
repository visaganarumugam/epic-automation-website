import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';
import Slider from 'react-infinite-logo-slider';
import { submitServiceEnquiryWithFile } from '../lib/firebase';
import { useState, useRef } from 'react';
import { IconAnchor, IconSchool, IconWorld, IconBriefcase , IconArrowUpRight , IconMail , IconPhone , IconMapPin, IconUpload, IconFile, IconX, IconMessage } from '@tabler/icons-react';
import confetti from 'canvas-confetti';




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
    value: 'youremail@gmail.com',
    href: 'mailto:youremail@gmail.com',
  },
  {
    icon: <IconPhone size={35} stroke={1.7} className="text-[#ff4f0f]" />,
    label: 'Call us',
    value: '(+91) 9876543210',
    href: 'tel:9876543210',
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
  const [showAlert, setShowAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        setErrorMsg('Please select a valid file type (PDF, DOC, or DOCX)');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('File size must be less than 5MB');
        return;
      }

      setSelectedFile(file);
      setErrorMsg(null);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
      courseTitle: String(fd.get('courseTitle') || '').trim(),
      message: String(fd.get('message') || '').trim(),
      source: 'career-enquiry',
    };



    setEnquiryStatus('loading');
    setErrorMsg(null);
    setUploadProgress(0);

    try {
      let progressInterval: NodeJS.Timeout | null = null;
      
      // Simulate upload progress only if there's a file
      if (selectedFile) {
        progressInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              return 90;
            }
            return prev + 10;
          });
        }, 200);
      }

      const res = await submitServiceEnquiryWithFile(payload, selectedFile || undefined);
      
      // Clear interval and set to 100%
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      setUploadProgress(100);
      
      // Wait a moment for the 100% to show, then reset
      setTimeout(() => {
        setUploadProgress(0);
      }, 1000);

      if (res.error) {
        setEnquiryStatus('error');
        setErrorMsg(res.error);
      } else {
        setEnquiryStatus('success');
        form.reset();
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        // Show success alert
        setShowAlert(true);
        
        // Trigger confetti from left and right sides
        const end = Date.now() + 3 * 1000;
        const colors = ["#ff4f0f", "#ff9900", "#00ff88", "#0088ff", "#ff0088"];

        const frame = () => {
          if (Date.now() > end) return;
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors,
          });
          requestAnimationFrame(frame);
        };

        frame();
        
        // Hide alert after 5 seconds
        setTimeout(() => setShowAlert(false), 5000);
      }
    } catch (e: any) {
      setEnquiryStatus('error');
      setErrorMsg(e?.message || 'Submission failed');
    } finally {
      setEnquiryStatus('idle');
    }
  };



  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#fadca1]  to-[#ffe7b6] flex flex-col items-center justify-start pt-16 px-2">
      {/* Success Alert */}
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl shadow-2xl border-2 border-green-300 animate-bounce">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">🎉 Application Submitted Successfully!</div>
              <div className="text-sm opacity-90">Thank you for your interest in our courses!</div>
            </div>
            <button 
              onClick={() => setShowAlert(false)}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Hero Section with Background Image */}
      <div className="relative w-[90vw] sm:w-[92vw] md:w-[93vw] mt-16 sm:mt-18 md:mt-20 mx-auto mb-3 sm:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
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
                
                <button 
                  onClick={() => {
                    const enquiryForm = document.getElementById('enquiry-form');
                    if (enquiryForm) {
                      enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="border-2 border-[#ff4f0f] cursor-pointer text-white bg-transparent px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-black hover:text-white transition font-gilroy" 
                  style={{boxShadow:'0 8px 32px 0 #ff4f0f'}}
                >
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
            <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8">
              <button className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white font-semibold py-5 text-2xl transition-colors">
                Technical Courses
              </button>
              <button className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white font-semibold py-5 text-2xl transition-colors">
                Industrial Courses
              </button>
              <button className="w-full rounded-xl bg-[#ff4f0f] hover:bg-blue-700 text-white font-semibold py-5 text-2xl transition-colors">
                Management Courses
              </button>
            </div>
            </AnimatedSection>
            {/* Three audience panels */}
            <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
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
            </AnimatedSection>
            {/* Trending courses buttons */}
            <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
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
            </AnimatedSection>
            {/* Collaborators logos line (text placeholders to avoid missing assets) */}
            <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
            <div className="rounded-2xl bg-gray-50 border border-gray-200 px-4 sm:px-6 md:px-8 py-6 md:py-8 mb-10">
              <p className="text-center text-black/80 text-sm md:text-2xl mb-10">
                Our online-courses training collaborates with over 200+ multinational companies
              </p>
              <div className="w-full md:w-[full] flex flex-col gap-4 sm:gap-6 md:gap-8 mb-7 relative">
                 <LogoSliderRow logos={row1} toRight={false} duration={120} />
               </div>
        </div>
        </AnimatedSection>
            {/* Our Divisions */}
            <AnimatedSection customAnimation={{ y: 50, opacity: 0, duration: 1, stagger: 0.1 }}>
            <div className="">
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
                </AnimatedSection>
        </div>
        </section>
        
        
        <section className="w-full py-10 sm:py-12 md:pb-6 md:pt-0">
          <div className="w-full mx-auto px-4 sm:px-6 md:px-12">
            <FadeUpSection>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Our Courses</h2>
            </FadeUpSection>
            
            <AnimatedSection
              customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mb-10">
               
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="/images/plc_and_hmi.jpg" 
                      alt="Industrial Automation Course"
                      className="w-full h-68 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Masters
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      HMI & PLC Programming
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        9 months
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Course code: 25101
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Eligibility: Tech Degree, ITI, Diploma, B-Tech Above
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                     
                    </div>
                    <button 
                      onClick={() => {
                        const enquiryForm = document.getElementById('enquiry-form');
                        if (enquiryForm) {
                          enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="/images/Robot_Programming.jpg" 
                      alt="Professional Diploma Course"
                      className="w-full h-68 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Professional
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Robotics & Industrial Automation
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        6 months
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Course code: 25102
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Eligibility: Tech Degree, ITI, Diploma, B-Tech Above
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                     
                    </div>
                    <button 
                      onClick={() => {
                        const enquiryForm = document.getElementById('enquiry-form');
                        if (enquiryForm) {
                          enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Course Card 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="/images/Automation-Control-Panels.jpg" 
                      alt="Certified Engineer Course"
                      className="w-full h-68 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Certificate
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Designing Simulation
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        3 months
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Course code: 25103
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Eligibility: Tech Degree, ITI, Diploma, B-Tech Above
                      </div>
                    </div>
                    <div className="flex items-center mb-11">
                     
                    </div>
                    <button 
                      onClick={() => {
                        const enquiryForm = document.getElementById('enquiry-form');
                        if (enquiryForm) {
                          enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Course Card 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="/images/navdropimages/deburring.png" 
                      alt="Industrial Automation Course"
                      className="w-full h-68 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Masters
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      SCADA
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        9 months
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Course code: 25101
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Eligibility: Tech Degree, ITI, Diploma, B-Tech Above
                      </div>
                    </div>
                    <div className="flex items-center mb-9">
                    </div>
                    <button 
                      onClick={() => {
                        const enquiryForm = document.getElementById('enquiry-form');
                        if (enquiryForm) {
                          enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="/images/navdropimages/CNC_Automation.jpg" 
                      alt="Professional Diploma Course"
                      className="w-full h-68 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Professional
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Controls Electrical
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        6 months
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Course code: 25102
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Eligibility: Tech Degree, ITI, Diploma, B-Tech Above
                      </div>
                    </div>
                    <div className="flex items-center mb-9">
                    </div>
                    <button 
                      onClick={() => {
                        const enquiryForm = document.getElementById('enquiry-form');
                        if (enquiryForm) {
                          enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Course Card 3
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="/images/courses/industrial-automation-3.jpg" 
                      alt="Certified Engineer Course"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Certificate
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Certified Industrial Automation Engineer
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        3 months
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Course code: 25103
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Eligibility: Tech Degree, ITI, Diploma, B-Tech Above
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                     
                    </div>
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors">
                      Download Syllabus
                    </button>
                  </div>
                </div> */}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* contact us form */}
        <section id="enquiry-form" className="w-screen min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-0 sm:px-10 py-10 md:py-0">
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 mx-10 bg-transparent">
            {/* Left: Contact Info */}
            <div className="flex flex-col w-full gap-2 sm:gap-6 justify-center h-full">
              <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-md sm:text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4f0f] mr-2 inline-block"></span>
                Contact
              </div> 
              <h2 className="text-4xl md:text-7xl font-bold text-black">Work with us</h2>
              <p className="text-gray-700 text-lg sm:text-2xl font-semibold max-w-md mb-4">"Ready to make an impact? Apply now and start your journey with us."</p>
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
                    Your Form has been submitted successfully.
                  </div>
                )}
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Name</label>
                  <input name="name" type="text" required className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your name" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Phone</label>
                  <input name="phone" type="tel" required className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your phone number" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Email</label>
                  <input name="email" type="email" required className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="you@example.com" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Country</label>
                  <input name="country" type="text" required className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your country" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">State</label>
                  <input name="state" type="text" required className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Your state" />
                </div>
                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Course</label>
                  <select name="course" required className="w-full bg-white/25 backdrop-blur-2xl text-black border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500">
                    <option value="">Select a course</option>
                    <option value="Robotics & Automation">Robotics & Automation</option>
                    <option value="Special Purpose Machine (SPM)">Special Purpose Machine (SPM)</option>
                    <option value="Scada">SCADA</option>
                    <option value="Custom Panel Design & Manufacturing">Custom Panel Design & Manufacturing</option>
                    <option value="Robot Programming Services">Robot Programming Services</option>
                    <option value="PLC & HMI Programming Services">PLC & HMI Programming Services</option>
                    <option value="HMI & PLC Programming">HMI & PLC Programming</option>
                    <option value="Robotics & Industrial Automation">Robotics & Industrial Automation</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="block text-black font-semibold mb-2">Course Title</label>
                  <select name="courseTitle" required className="w-full bg-white/25 backdrop-blur-2xl text-black border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500">
                    <option value="">Select a course title</option>
                    <option value="HMI & PLC Programming">HMI & PLC Programming</option>
                    <option value="Robotics & Industrial Automation">Robotics & Industrial Automation</option>
                    <option value="Designing Simulation">Designing Simulation</option>
                    <option value="SCADA">SCADA</option>
                  </select>
                </div>

                {/* File Upload Field */}
                <div className="col-span-1 sm:col-span-2">
                  <label className=" text-black font-semibold mb-2 flex items-center gap-2">
                    <IconFile size={16} />
                    Resume/Document (Optional)
                  </label>
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="border-2 border-dashed border-black/80 rounded-md p-4 text-center hover:border-orange-500 transition-colors cursor-pointer"
                         onClick={() => fileInputRef.current?.click()}>
                      {selectedFile ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <IconFile size={20} className="text-orange-500" />
                            <span className="text-black font-medium">{selectedFile.name}</span>
                                                 <span className="text-gray-500 text-sm">
                       ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                     </span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile();
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            <IconX size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <IconUpload size={24} className="text-orange-500" />
                          <span className="text-black">Click to upload or drag and drop</span>
                          <span className="text-gray-500 text-sm">PDF, DOC, DOCX (max 5MB)</span>

                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Upload Progress */}
                {enquiryStatus === 'loading' && selectedFile && uploadProgress > 0 && (
                  <div className="col-span-1 sm:col-span-2">
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-700 text-sm font-medium">
                          {uploadProgress < 100 ? 'Uploading...' : 'Upload Complete!'}
                        </span>
                        <span className="text-blue-700 text-sm">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-span-1 sm:col-span-2">
                  <label className=" text-black font-semibold mb-2 flex items-center gap-2">
                    <IconMessage size={16} />
                    Message
                  </label>
                  <textarea name="message" rows={7} className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" placeholder="Tell us about yourself and your experience"></textarea>
                </div>
                <div className="w-[70vw] sm:w-[205%] flex justify-center">
                  <button type="submit" disabled={enquiryStatus === 'loading'} className="bg-[#ff4f0f] hover:bg-[#e65a08] disabled:bg-gray-400 text-xl text-white font-semibold px-6 py-3 w-[100vw] rounded-md transition-colors disabled:cursor-not-allowed flex items-center gap-2">
                    {enquiryStatus === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {selectedFile ? 'Uploading & Applying...' : 'Applying...'}
                      </>
                    ) : enquiryStatus === 'success' ? (
                      'Applied Successfully!'
                    ) : (
                      'Apply Now'
                    )}
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


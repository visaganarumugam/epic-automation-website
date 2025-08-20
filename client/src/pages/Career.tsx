import { AnimatedSection, FadeUpSection } from '../components/AnimatedSection';

const jobs1 = [
  {
    label: 'RESEARCH',
    title: 'Data Scientist',
    desc: 'Analyze data trends and build predictive models for business insights.',
    value: 'Remote',
    period: 'Full-time',
    bg: 'bg-indigo-200',
    text: 'text-black',
  },
  {
    label: 'SECURITY',
    title: 'Cybersecurity Analyst',
    desc: 'Protect our systems and data from cyber threats and vulnerabilities.',
    value: 'Onsite',
    period: 'Full-time',
    bg: 'bg-slate-300',
    text: 'text-black',
  },
  {
    label: 'CONTENT',
    title: 'Copywriter',
    desc: 'Write compelling copy for marketing campaigns and product launches.',
    value: 'Remote',
    period: 'Contract',
    bg: 'bg-rose-200',
    text: 'text-black',
  },
  {
    label: 'ADMIN',
    title: 'Office Manager',
    desc: 'Oversee daily office operations and support the team’s productivity.',
    value: 'Onsite',
    period: 'Full-time',
    bg: 'bg-emerald-200',
    text: 'text-black',
  },
];
const jobs2 = [
  {
    label: 'ENGINEERING',
    title: 'Frontend Developer',
    desc: 'Build beautiful, scalable web interfaces with React and TypeScript.',
    value: 'Remote',
    period: 'Full-time',
    bg: 'bg-blue-200',
    text: 'text-black',
  },
  {
    label: 'DESIGN',
    title: 'UI/UX Designer',
    desc: 'Craft delightful user experiences and design modern interfaces.',
    value: 'Hybrid',
    period: 'Contract',
    bg: 'bg-pink-200',
    text: 'text-black',
  },
  {
    label: 'MARKETING',
    title: 'Content Strategist',
    desc: 'Develop and execute content strategies for our digital platforms.',
    value: 'Remote',
    period: 'Part-time',
    bg: 'bg-orange-200',
    text: 'text-black',
  },
  {
    label: 'SUPPORT',
    title: 'Customer Success',
    desc: 'Help our users succeed and ensure a smooth onboarding process.',
    value: 'Onsite',
    period: 'Full-time',
    bg: 'bg-teal-200',
    text: 'text-black',
  },
];

const jobs3 = [
  {
    label: 'OPERATIONS',
    title: 'Project Manager',
    desc: 'Lead cross-functional teams to deliver projects on time.',
    value: 'Remote',
    period: 'Full-time',
    bg: 'bg-red-200',
    text: 'text-black',
  },
  {
    label: 'HR',
    title: 'Talent Acquisition',
    desc: 'Find and recruit the best talent for our growing team.',
    value: 'Onsite',
    period: 'Full-time',
    bg: 'bg-yellow-300',
    text: 'text-black',
  },
  {
    label: 'FINANCE',
    title: 'Accountant',
    desc: 'Manage company finances and ensure compliance.',
    value: 'Remote',
    period: 'Part-time',
    bg: 'bg-lime-200',
    text: 'text-black',
  },
  {
    label: 'LEGAL',
    title: 'Legal Advisor',
    desc: 'Provide legal guidance and ensure regulatory compliance.',
    value: 'Hybrid',
    period: 'Contract',
    bg: 'bg-gray-200',
    text: 'text-black',
  },
];

const jobs4 = [
  {
    label: 'PRODUCT',
    title: 'Product Owner',
    desc: 'Define product vision and prioritize features for development.',
    value: 'Remote',
    period: 'Full-time',
    bg: 'bg-fuchsia-200',
    text: 'text-black',
  },
  {
    label: 'QA',
    title: 'QA Engineer',
    desc: 'Test and ensure the quality of our software products.',
    value: 'Onsite',
    period: 'Full-time',
    bg: 'bg-cyan-200',
    text: 'text-black',
  },
  {
    label: 'SALES',
    title: 'Sales Executive',
    desc: 'Drive sales and build relationships with key clients.',
    value: 'Remote',
    period: 'Commission',
    bg: 'bg-amber-200',
    text: 'text-black',
  },
  {
    label: 'IT',
    title: 'IT Support',
    desc: 'Maintain IT infrastructure and assist team members.',
    value: 'Onsite',
    period: 'Full-time',
    bg: 'bg-green-300',
    text: 'text-black',
  },
];

export default function Career() {
  

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
              Life Planning, Making Easy to <br className="hidden sm:block" /> Turn Dreams a Reality.
            </h1>
          </AnimatedSection>
          {/* Subheadline */}
          <AnimatedSection
            customAnimation={{ y: 30, opacity: 0, duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-white/90 mb-6 sm:mb-8 drop-shadow-lg">
              Get Exclusive offers on purchase of any plans
            </p>
          </AnimatedSection>
        </FadeUpSection>
      </div>
      
      {/* Section Row */}
      <div id="career-featured-plans" className="flex items-center justify-between w-full max-w-full mb-6 mt-8 sm:mt-10 px-8 sm:px-8 md:px-21">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Featured Plans</span>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-right">Explore All</span>
      </div>
      {/* Cards Row */}
      <AnimatedSection 
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
      </AnimatedSection>

    </div>
  );
}
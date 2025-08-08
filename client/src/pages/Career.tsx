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
    <div className="min-h-screen w-full  bg-gradient-to-b  from-[#2eb9e4] via-gray-200 to-[#ebe97c] flex flex-col items-center justify-start pt-16 px-2">
      {/* Hero Section with Background Image */}
      <div className="relative w-[90vw] mt-20 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
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
        <div className="relative z-10 p-12 md:p-16 text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-20 mb-6 drop-shadow-2xl">
            Life Planning, Making Easy to <br /> Turn Dreams a Reality.
          </h1>
          {/* Subheadline */}
          <p className="text-lg md:text-3xl text-white/90 mb-8 drop-shadow-lg">
            Get Exclusive offers on purchase of any plans
          </p>
        </div>
      </div>
      
      {/* Section Row */}
      <div id="career-featured-plans" className="flex items-center justify-between w-full max-w-full mb-6 mt-10 px-21">
        <span className="text-xl md:text-3xl font-semibold">Featured Plans</span>
        <span className="text-xl md:text-3xl font-semibold text-right">Explore All</span>
      </div>
      {/* Cards Row */}
      <div className='flex flex-col gap-10 mb-10'>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch px-2">
        {jobs1.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-2xl p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[220px] max-w-[400px] min-h-[320px]`}>
            <span className="uppercase text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
        <div>
                <span className="block text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-2xl md:text-4xl font-bold">{job.value}</span>
              </div>
            <button
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            </div>
          </div>
          ))}
        </div>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch px-2">
        {jobs2.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-2xl p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[220px] max-w-[400px] min-h-[320px]`}>
            <span className="uppercase text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
              <div>
                <span className="block text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-2xl md:text-4xl font-bold">{job.value}</span>
              </div>
              <button
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        </div>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch px-2">
        {jobs3.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-2xl p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[220px] max-w-[400px] min-h-[320px]`}>
            <span className="uppercase text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
              <div>
                <span className="block text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-2xl md:text-4xl font-bold">{job.value}</span>
              </div>
              <button
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        </div>
        <div className="w-full max-w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch px-2">
        {jobs4.map((job, i) => (
          <div key={i} className={`flex flex-col justify-between gap-2 rounded-2xl p-6 ${job.bg} ${job.text} shadow-md flex-1 min-w-[220px] max-w-[400px] min-h-[320px]`}>
            <span className="uppercase text-md font-semibold mb-2 opacity-70">{job.label}</span>
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-xl font-semibold mb-2 opacity-80">{job.desc}</p>
            <hr className={`border-t-2 w-full mt-2 ${job.text === 'text-white' ? 'border-white/30' : 'border-black/20'}`} />
            <div className="flex items-end justify-between mt-auto">
              <div>
                <span className="block text-md font-semibold opacity-70 mb-2">{job.period}</span>
                <span className="block text-2xl md:text-4xl font-bold">{job.value}</span>
              </div>
              <button
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all ml-2
                  ${job.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                aria-label="Go"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
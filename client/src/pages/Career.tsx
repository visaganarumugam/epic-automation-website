import { useState } from 'react';




const jobTabs = [
  'View all',
  'Development',
  'Design',
  'Marketing',
  'Customer Service',
  'Operations',
  'Finance',
  'Management',
];

const jobs = [
  {
    title: 'Product Designer',
    desc: `We're looking for a mid-level product designer to join our team.`,
  },
  {
    title: 'Engineering Manager',
    desc: `We're looking for an experienced engineering manager to join our team.`,
  },
  {
    title: 'Customer Manager',
    desc: `We're looking for a customer success manager to join our team.`,
  },
  {
    title: 'Account Executive',
    desc: `We're looking for an account executive to join our team.`,
  },
  {
    title: 'SEO Marketing Manager',
    desc: `We're looking for an experienced SEO marketing manager to join our team.`,
  },
];



export default function Career() {
  const [activeTab, setActiveTab] = useState('View all');

  return (
    <div className="min-h-screen  w-full bg-gradient-to-br from-[#d8ebfa] via-[#90B2D8] to-[#0077b3] flex flex-col items-center justify-start pt-25">
      
      {/* Main card container */}
      <div className="w-full max-w-full px-15 bg-transparent rounded-b-2xl shadow-xl pt-10 pb-16 flex flex-col">
        {/* We're hiring badge */}
        <div>
        <span className="inline-block px-6 py-2.5 rounded-full border-2 border-black text-black text-xl  font-semibold mb-7 w-fit">We&apos;re hiring!</span>
        {/* Heading and description */}
        <h1 className="text-4xl md:text-[5rem]  font-semibold text-black mb-4">Be part of our mission</h1>
        <p className="text-2xl text-[#444] font-semibold max-w-4xl mb-15">We&apos;re looking for passionate people to join us on our mission. We value <br /> flat hierarchies, clear communication, and full ownership and responsibility.</p>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {jobTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full border-2 text-xl font-semibold transition-all ${activeTab === tab ? 'bg-[#232325] text-white border-[#232325]' : 'bg-transparent text-[#232325] border-[#232325] hover:bg-black/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        </div>
        {/* Job List */}
        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row md:items-start justify-between py-7 gap-4 ${i === 0 ? 'border-t border-b border-black' : 'border-b border-black'}`}
            >
              <div>
                <div className="text-4xl  font-semibold  text-black mb-2 ">{job.title}</div>
                <div className="text-[#393939] text-[1.3rem] font-semibold mb-8">{job.desc}</div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 px-6 py-2 rounded-full border-2 hover:bg-black/15 border-black text-[#232325] text-lg font-semibold"><svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>100% remote</span>
                  <span className="flex items-center gap-1 px-6 py-2 rounded-full border-2 hover:bg-black/15 border-black text-[#232325] text-lg font-semibold"><svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>Full-time</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-black font-semibold text-3xl hover:underline cursor-pointer hover:text-[#1a1a1a] transition-all mt-4 md:mt-0 md:absolute md:top-5 md:right-3">
                Apply <span className="inline-block"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 7l-7.071 7.071M17 7H7m10 0v10" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';

const filters = [
  'All',
  'Communication',
  'Life Style',
  'Shopping',
  'Business',
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 9h6v6H9z"/></svg>
    ),
    title: 'Instant Purchases',
    desc: `Shop seamlessly with Snappy's one-click purchasing feature, making online shopping a breeze.`,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
    ),
    title: 'Scheduled Messages',
    desc: 'Plan ahead with the ability to schedule important business announcements, ensuring timely communication.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
    ),
    title: 'Effortless Collaboration',
    desc: 'Boost productivity with group messaging, file sharing, and quick updates for effective team communication.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4"/></svg>
    ),
    title: 'Event Coordination',
    desc: `Plan gatherings, share updates, and coordinate events effortlessly with friends and family using Snappy's group features.`,
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Health Reminders',
    desc: 'Stay on top of your wellness routine with scheduled messages and reminders for self-care and health-related activities.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>
    ),
    title: 'Secure Communication',
    desc: 'Communicate securely with service providers for inquiries, updates, and feedback, all within the Snappy app.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M16 3v5M8 3v5"/></svg>
    ),
    title: 'Secure Transaction',
    desc: 'Enjoy peace of mind with secure and encrypted payment options for a worry-free shopping experience.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Secure File Sharing',
    desc: 'Snappy ensures the security of your business conversations with end-to-end encryption, providing a safe environment for sharing important documents and information.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4"/></svg>
    ),
    title: 'Customizable Themes',
    desc: 'Personalize your Snappy experience with a variety of themes, allowing you to tailor the app to match your unique lifestyle.',
  },
];

export default function Section2() {
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <div className="min-h-screen bg-white w-full flex flex-col px-4 md:px-12 py-8 md:py-16">
      {/* Top Section */}
      <div className="mb-6 md:mb-10">
        <div className="text-gray-500 text-base mb-2">Services</div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">Elevate Every Experience, Simplify<br className="hidden md:block"/>Your Everyday Needs.</h1>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 md:overflow-visible">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all ${activeFilter === f ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      {/* Cards Grid - Mobile: 1 col, only 3 cards, special style */}
      <div className="flex flex-col gap-4 w-full md:hidden">
        {services.slice(0, 3).map((s, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl px-5 py-6 flex flex-col items-start shadow-sm">
            <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-blue-600">
              {s.icon}
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-2 text-left">{s.title}</h2>
            <p className="text-gray-500 text-sm mb-6 text-left">{s.desc}</p>
            <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-all group">
              More details
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        ))}
        <button className="mt-2 mb-4 mx-auto px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-900 font-medium flex items-center gap-2 shadow-sm hover:bg-gray-100 transition-all">
          Read more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      {/* Cards Grid - Desktop: unchanged */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
            <div className="mb-4">{s.icon}</div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
            <p className="text-gray-500 text-sm mb-6 flex-1">{s.desc}</p>
            <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-all group">
              More details
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

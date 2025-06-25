import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full min-h-[600px] bg-[#18181a] flex flex-col items-center justify-end relative overflow-hidden px-2 py-8">
      {/* Large blurred brand name above the card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-8 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="text-[11vw] md:text-[8vw] font-black uppercase text-black bg-clip-text bg-gradient-to-b from-[#232325] via-[#232325] to-[#18181a] opacity-80 tracking-tighter blur-[1px]" style={{ WebkitTextStroke: '2px #63b3ed ' }}>Epic Automations</span>
      </div>
      {/* Main card with shiny border */}
      <div className="relative z-10 w-full max-w-8xl mx-auto rounded-3xl bg-[#111112]/90 shadow-2xl px-0 py-0 flex flex-col items-center">
        {/* Shiny border */}
        <div className="rounded-3xl p-[2px] bg-gradient-to-r from-blue-400 via-[#232325] to-blue-400 w-full">
          <div className="rounded-[22px] bg-[#111112]/95 px-8 md:px-16 py-12 w-full grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-y-0 md:gap-x-8 items-start justify-between">
            {/* 1. CTA */}
            <div className="flex flex-col gap-4 min-w-[200px] max-w-xs">
              <div className="flex items-center gap-2">
                
                <span className="text-white text-2xl font-semibold">Ready to automate your future? Book a robotics consultation!</span>
              </div>
              <p className="text-gray-200 text-md mb-2 opacity-70">Discover how intelligent automation can transform your business.</p>
              <div className="flex flex-col gap-2 mt-2">
                <button className="bg-blue-400 text-black font-bold px-6 py-3 rounded-full text-base shadow hover:bg-blue-300 transition flex items-center justify-between group">
                  Special Purpose Machines <span className="ml-2 text-lg group-hover:translate-x-1 transition">→</span>
                </button>
                <button className="border border-gray-600 text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-[#232325] transition flex items-center justify-between">
                  Customized Solutions
                </button>
              </div>
            </div>
            {/* 2. Navigation */}
            <div className="flex flex-col gap-2 min-w-[150px] pl-10 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                
                <span className="text-white text-2xl font-semibold">Navigation</span>
              </div>
              <ul className="text-gray-300 text-lg  space-y-2 opacity-70">
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Home</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>About Us</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Solutions</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Industries</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Case Studies</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Contact</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>FAQs</li>
              </ul>
            </div>
            {/* 3. Legal Info */}
            <div className="flex flex-col gap-2 min-w-[140px] max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                
                <span className="text-white text-2xl font-semibold">Legal</span>
              </div>
              <ul className="text-gray-300 text-lg space-y-2 opacity-70">
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Terms & Conditions</li>
                <li className='hover:text-sky-300 cursor-pointer transition-all duration-300'>Privacy Policy</li>
              </ul>
            </div>
            {/* 4. Contact */}
            <div className="flex flex-col gap-2 min-w-[180px] max-w-xs">
              <div className="flex items-center gap-2">
                
                <span className="text-white text-2xl font-semibold">Contact Us</span>
              </div>
              <span className="text-gray-300 text-lg mb-2 opacity-70">contact@epicautomations.com</span>
              <div className="flex flex-col gap-3">
                <button className="bg-blue-400 text-black font-bold px-6 py-3 rounded-full text-base shadow hover:bg-blue-300 transition flex items-center justify-between group">
                  Book a Consultation <span className="ml-2 text-lg group-hover:translate-x-1 transition">→</span>
                </button>
                <button className="border border-gray-600 text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-[#232325] transition flex items-center justify-between">
                  Chat with an Expert <span className="ml-2 text-lg group-hover:translate-x-1 transition">→</span>
                </button>
              </div>
            </div>
            {/* 5. Made by/Follow/Scroll to top */}
            <div className="flex flex-col gap-2 min-w-[180px] max-w-xs items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  
                  <span className="text-white text-2xl font-semibold">Powered by Epic Automations</span>
                </div>
                <span className="text-gray-300 text-lg mb-2 opacity-70">innovation@epicautomations.com</span>
                <button className="border border-gray-600 mt-4 text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-[#232325] transition flex items-center justify-between group">
                  Follow on<span className="ml-1">LinkedIn</span> <span className="ml-2 text-lg group-hover:translate-x-1 transition">→</span>
                </button>
                <button className="border border-gray-600 mt-2 text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-[#232325] transition flex items-center justify-between group">
                  Follow on<span className="ml-1">Twitter</span> <span className="ml-2 text-lg group-hover:translate-x-1 transition">→</span>
                </button>
                
              </div>
              <button className="border border-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-400 hover:text-black transition text-xl shadow bg-transparent">
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
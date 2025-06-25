import React from 'react';

export default function YourBenefits() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-[#EAF6FF] via-[#90B2D8] to-[#0077b3] flex flex-col justify-center items-center py-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 px-6 md:px-10">
        {/* Left Column */}
        <div className="flex flex-col justify-start w-full md:w-1/2 gap-12 pt-4">
          <h1 className="text-[3.2rem] md:text-[4.2rem] font-black text-[#18181a] leading-[1.05] mb-0" style={{fontFamily: 'Gilroy, sans-serif'}}>Build your<br/>robotics team<br/>today.</h1>
          <div className="flex flex-col gap-8 mt-2">
            <p className="text-[#18181a] text-base md:text-lg max-w-md font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Unlock innovation with our handpicked robotics experts. Hire now for next-generation automation solutions.</p>
            <div className="flex items-center gap-4 mt-2">
              <button className="bg-[#18181a] text-white font-medium px-7 py-3 rounded-full shadow hover:bg-[#232326] transition text-base flex items-center gap-2 tracking-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>
                Hiring? Book a call
                <span className="inline-block bg-white rounded-full p-1 ml-2">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#18181a" strokeWidth="2"/><path d="M10 8l4 4-4 4" stroke="#18181a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
              {/* Avatars */}
              <div className="flex items-center ml-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-9 h-9 rounded-full border-2 border-white -ml-2 first:ml-0 shadow" />
                <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="avatar2" className="w-9 h-9 rounded-full border-2 border-white -ml-2 shadow" />
                <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="avatar3" className="w-9 h-9 rounded-full border-2 border-white -ml-2 shadow" />
                <span className="ml-2 text-[#18181a] text-sm font-semibold bg-[#f3f3f3] px-3 py-1 rounded-full shadow" style={{fontFamily: 'Gilroy, sans-serif'}}>+728</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: 3x2 Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-3 grid-rows-2 gap-5 min-h-[540px]">
          {/* Row 1: Image Cards */}
          {/* RoboMark */}
          <div className="bg-white rounded-2xl shadow p-0 flex flex-col items-start justify-end relative overflow-hidden">
            <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="RoboMark" className="w-full h-[160px] object-cover rounded-t-2xl" />
            <div className="flex items-center gap-2 w-full px-4 py-3">
              <div>
                <div className="text-[#18181a] font-semibold text-base leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>RoboMark</div>
                <div className="text-[#888] text-xs" style={{fontFamily: 'Gilroy, sans-serif'}}>Robotics Engineer</div>
              </div>
              <span className="ml-auto bg-white border border-[#e5e5e5] text-[#18181a] text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#18181a" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          {/* Ava */}
          <div className="bg-white rounded-2xl shadow p-0 flex flex-col items-start justify-end relative overflow-hidden">
            <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Ava" className="w-full h-[160px] object-cover rounded-t-2xl" />
            <div className="flex items-center gap-2 w-full px-4 py-3">
              <div>
                <div className="text-[#18181a] font-semibold text-base leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Ava</div>
                <div className="text-[#888] text-xs" style={{fontFamily: 'Gilroy, sans-serif'}}>AI Specialist</div>
              </div>
              <span className="ml-auto bg-white border border-[#e5e5e5] text-[#18181a] text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#18181a" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          {/* Dexter */}
          <div className="bg-white rounded-2xl shadow p-0 flex flex-col items-start justify-end relative overflow-hidden">
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Dexter" className="w-full h-[160px] object-cover rounded-t-2xl" />
            <div className="flex items-center gap-2 w-full px-4 py-3">
              <div>
                <div className="text-[#18181a] font-semibold text-base leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Dexter</div>
                <div className="text-[#888] text-xs" style={{fontFamily: 'Gilroy, sans-serif'}}>Automation Designer</div>
              </div>
              <span className="ml-auto bg-white border border-[#e5e5e5] text-[#18181a] text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#18181a" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          {/* Row 2: Text Cards */}
          {/* Precision and Speed */}
          <div className="bg-[#e6f6ec] rounded-2xl shadow p-6 flex flex-col items-start justify-end min-h-[160px] relative overflow-hidden">
            <div className="font-bold text-lg text-[#18181a] mb-2 leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Precision and Speed</div>
            <div className="text-[#18181a] text-sm font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Deploy robotics solutions that deliver unmatched accuracy and rapid results for your business.</div>
          </div>
          {/* Cutting-edge Robotics Talent */}
          <div className="bg-[#eae6fa] rounded-2xl shadow p-6 flex flex-col items-start justify-end min-h-[160px] relative overflow-hidden">
            <div className="font-bold text-lg text-[#18181a] mb-2 leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Cutting-edge Robotics Talent</div>
            <div className="text-[#18181a] text-sm font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Access a pool of engineers, AI experts, and designers at the forefront of robotics innovation.</div>
          </div>
          {/* No hidden costs, just innovation */}
          <div className="bg-[#ffe6d6] rounded-2xl shadow p-6 flex flex-col items-start justify-end min-h-[160px] relative overflow-hidden">
            <div className="font-bold text-lg text-[#18181a] mb-2 leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>No hidden costs, just innovation</div>
            <div className="text-[#18181a] text-sm font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Transparent pricing and a focus on delivering breakthrough automation for your company.</div>
            <div className="absolute right-4 bottom-4 opacity-20">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#f2994a" strokeWidth="8"/><circle cx="40" cy="40" r="24" stroke="#f2994a" strokeWidth="4"/></svg>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full flex justify-center items-center mt-16">
        <p className="text-[#b0b0b0] text-base font-medium text-center tracking-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Join 150+ companies trusting Epic Robotics for their automation needs.</p>
      </div>
    </section>
  );
}

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
        {/* Right Column: 3x2 Grid, pixel-perfect as image */}
        <div className="w-full md:w-1/2 grid grid-cols-3 grid-rows-2 gap-6 min-h-[650px]">
          {/* Row 1 */}
          {/* Mike (Image Card) */}
          <div className="bg-white rounded-2xl shadow flex flex-col items-end justify-end overflow-hidden relative">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mike" className="w-full h-[170px] object-cover rounded-t-2xl" />
            <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow">
              <div>
                <div className="text-[#18181a] font-semibold text-sm leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Mike</div>
                <div className="text-[#888] text-xs" style={{fontFamily: 'Gilroy, sans-serif'}}>Frontend Dev.</div>
              </div>
              <span className="ml-2 bg-white border border-[#e5e5e5] text-[#18181a] text-xs rounded-full flex items-center gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#18181a" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          {/* Quick and adaptable (Text Card) */}
          <div className="bg-[#e6f6ec] rounded-2xl shadow flex flex-col items-start justify-end p-6 min-h-[170px]">
            <div className="font-bold text-xl text-[#18181a] mb-2 leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Quick and adaptable</div>
            <div className="text-[#18181a] text-sm font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Hire within a mere 72 hours. Easily adjust your team size from month to month as required.</div>
          </div>
          {/* Latisha (Image Card) */}
          <div className="bg-white rounded-2xl shadow flex flex-col items-end justify-end overflow-hidden relative">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Latisha" className="w-full h-[170px] object-cover rounded-t-2xl" />
            <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow">
              <div>
                <div className="text-[#18181a] font-semibold text-sm leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Latisha</div>
                <div className="text-[#888] text-xs" style={{fontFamily: 'Gilroy, sans-serif'}}>Mobile Dev.</div>
              </div>
              <span className="ml-2 bg-white border border-[#e5e5e5] text-[#18181a] text-xs rounded-full flex items-center gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#18181a" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          {/* Row 2 */}
          {/* Remote Talent Pool (Text Card) */}
          <div className="bg-[#eae6fa] rounded-2xl shadow flex flex-col items-start justify-end p-6 min-h-[170px]">
            <div className="font-bold text-xl text-[#18181a] mb-2 leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Remote Talent Pool</div>
            <div className="text-[#18181a] text-sm font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Pre-vetted remote developers, designers, and product managers with world-class technical and communication skills</div>
          </div>
          {/* Asgeir (Image Card) */}
          <div className="bg-white rounded-2xl shadow flex flex-col items-end justify-end overflow-hidden relative">
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Asgeir" className="w-full h-[170px] object-cover rounded-t-2xl" />
            <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow">
              <div>
                <div className="text-[#18181a] font-semibold text-sm leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Asgeir</div>
                <div className="text-[#888] text-xs" style={{fontFamily: 'Gilroy, sans-serif'}}>UI/UX Designer</div>
              </div>
              <span className="ml-2 bg-white border border-[#e5e5e5] text-[#18181a] text-xs rounded-full flex items-center gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#18181a" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          {/* Rest assured (Text Card) */}
          <div className="bg-[#ffe6d6] rounded-2xl shadow flex flex-col items-start justify-end p-6 min-h-[170px] relative overflow-hidden">
            <div className="font-bold text-xl text-[#18181a] mb-2 leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Rest assured, there are no crazy fees or legal hassle to worry about.</div>
            <svg className="absolute right-4 bottom-4 opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#f2994a" strokeWidth="8"/><circle cx="40" cy="40" r="24" stroke="#f2994a" strokeWidth="4"/></svg>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full flex justify-center items-center mt-16">
        <p className="text-[#3b3b3b] text-base font-medium text-center tracking-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Join 150+ companies trusting Epic Robotics for their automation needs.</p>
      </div>
    </section>
  );
}

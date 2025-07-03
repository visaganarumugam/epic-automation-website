import { InteractiveHoverButton } from "../../components/ui_components/interactive-hover-button";
import { MdVerified } from "react-icons/md";
export default function YourBenefits() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-[#EAF6FF] via-[#90B2D8] to-[#0077b3] flex flex-col justify-center items-center py-10">
      <div className="max-w-full w-full flex flex-col md:flex-row px-6 md:px-10">
        {/* Left Column */}
        <div className="flex flex-col justify-start w-full md:w-1/2 gap-72 pt-2">
          <h1 className="text-[3.2rem] md:text-[5.2rem] font-semibold text-[#18181a] leading-[1.05] mb-0" style={{fontFamily: 'Gilroy, sans-serif'}}>Build your<br/>robotics team<br/>today.</h1>
          <div className="flex flex-col gap-8 mt-2">
            <p className="text-[#18181a] text-base md:text-2xl max-w-md font-medium" style={{fontFamily: 'Gilroy, sans-serif'}}>Unlock innovation with our handpicked robotics experts. Hire now for next-generation automation solutions.</p>
            <div className="flex items-center gap-4 ">
            <button className={`border border-[#222] rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-[#f5f5f5] transition`}>
          <InteractiveHoverButton>Hiring? Book a call</InteractiveHoverButton>
          </button>
              {/* Avatars */}
              <div className="flex items-center ml-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-13 h-13 rounded-full border-2 border-white -ml-2 first:ml-0 shadow" />
                <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="avatar2" className="w-13 h-13 rounded-full border-2 border-white -ml-2 shadow" />
                <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="avatar3" className="w-13 h-13 rounded-full border-2 border-white -ml-2 shadow" />
                <span className="text-white text-md font-semibold bg-black px-2 py-3 -ml-2 border-2 border-white rounded-full shadow" style={{fontFamily: 'Gilroy, sans-serif'}}>+728</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Custom Grid Layout with different column widths */}
        <div className="w-full md:w-1/2 min-h-[500px] md:min-h-[650px] flex flex-row gap-6">
          {/* Column 1 */}
          <div className="flex flex-col h-full gap-6 flex-[0_0_36%] max-w-[36%]">
            {/* 1st row: 60% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_55%] min-h-0">
              <img src="https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg" alt="Mike" className="w-full h-full object-cover rounded-t-2xl min-h-[120px]" style={{ minHeight: '120px', maxHeight: '100%' }} />
              <div className="absolute left-0 bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-4 py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Caroline</div>
                  <div className="text-[#888] text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>Frontend Dev.</div>
                </div>
                <span className="ml-2 bg-white border border-[#e5e5e5] text-[#18181a] text-xs rounded-full flex items-start gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <MdVerified className="w-7 h-7" />
                </span>
              </div>
            </div>
            {/* 2nd row: 40% */}
            <div className="relative rounded-3xl shadow flex flex-col justify-between p-6 overflow-hidden h-full min-h-0 bg-[#e4c6fd] flex-[0_0_45%]">
              {/* Soft purple geometric shape */}
              <svg className="absolute top-0 left-0 w-full h-full" style={{zIndex: 0}} viewBox="0 0 280 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="purple-blue-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e4c6fd" />
                    <stop offset="100%" stopColor="#6e03c6" />
                  </linearGradient>
                </defs>
                <path d="M0 0L300 0L180 120Q120 180 0 120Z" fill="url(#purple-blue-gradient)" fillOpacity="0.3" />
              </svg>
              <div className="relative z-10 w-full flex flex-col justify-between h-full min-h-[120px]">
                <div>
                  <div className="font-semibold text-4xl text-[#18181a] leading-tight mb-2" style={{fontFamily: 'Gilroy, sans-serif'}}>Remote Talent Pool</div>
                </div>
                <div>
                  <div className="text-[#18181a] text-lg font-semibold" style={{fontFamily: 'Gilroy, sans-serif'}}>Pre-vetted remote <br /> developers, designers, and product managers with <br /> world-class technical and communication skills</div>
                </div>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col h-full gap-6 flex-[0_0_32%] max-w-[32%]">
            {/* 1st row: 50% */}
            <div className="bg-[#A9FFCC] rounded-3xl overflow-hidden shadow flex flex-col justify-between p-6 h-full min-h-0 relative flex-[0_0_50%]">
              {/* Green gradient blob SVG top right */}
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute -top-12 -right-20 w-full h-[60%]" style={{zIndex: 0}}>
                <defs>
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="#68D494" offset="0%"></stop>
                    <stop id="stop2" stopColor="#A9FFCC" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M23.4,-26.7C31.6,-21,40.4,-14.8,43.7,-6.2C47,2.4,44.8,13.5,38.3,19.7C31.9,25.9,21.1,27.3,11.6,29.7C2.1,32.2,-6.1,35.9,-13.2,34.2C-20.3,32.5,-26.2,25.5,-31.5,17.6C-36.9,9.6,-41.7,0.7,-41.2,-8.1C-40.6,-17,-34.8,-25.7,-27,-31.5C-19.3,-37.3,-9.6,-40.1,-1,-38.9C7.6,-37.7,15.2,-32.4,23.4,-26.7Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: '0.3s'}} stroke="url(#sw-gradient)" />
              </svg>
              <div className="font-semibold text-[2.1rem] text-[#18181a] leading-tight mb-2 relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>Quick <br /> and adaptable</div>
              <div className="text-[#18181a] text-lg font-semibold mt-auto relative z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>Hire within a mere 72 <br /> hours. Easily adjust your <br/> team size from month <br /> to month as required.</div>
            </div>
            {/* 2nd row: 50% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_50%] min-h-0">
              <img src="https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg" alt="Asgeir" className="w-full h-full object-cover rounded-t-2xl min-h-[120px]" style={{ minHeight: '120px', maxHeight: '100%' }} />
              <div className="absolute left-0 bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-4 py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Asgeir</div>
                  <div className="text-[#888] text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>UI/UX Designer</div>
                </div>
                <span className="ml-2 bg-white border border-[#e5e5e5] text-[#18181a] text-xs rounded-full flex items-start gap-1 shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <MdVerified className="w-7 h-7" />
                </span>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col h-full gap-6 flex-[0_0_28%] max-w-[28%]">
            {/* 1st row: 35% */}
            <div className="bg-white rounded-3xl shadow flex flex-col items-end justify-end overflow-hidden relative flex-[0_0_37%] min-h-0">
              <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" alt="Latisha" className="w-full h-full object-cover rounded-t-2xl min-h-[80px]" style={{ minHeight: '80px', maxHeight: '100%' }} />
              <div className="absolute left-0 bottom-6 flex items-center gap-2 bg-white rounded-l-none rounded-full px-4 py-2 shadow">
                <div>
                  <div className="text-[#18181a] font-semibold text-lg leading-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Latisha</div>
                  <div className="text-[#888] text-md" style={{fontFamily: 'Gilroy, sans-serif'}}>Product Manager</div>
                </div>
                <span className="ml-2 bg-white border border-[#e5e5e5] text-[#18181a] text-xs rounded-full flex items-start shadow p-1" style={{fontFamily: 'Gilroy, sans-serif'}}>
                <MdVerified className="w-7 h-7" />
                </span>
              </div>
            </div>
            {/* 2nd row: 70% */}
            <div className="bg-[#fbc8a9] rounded-3xl shadow flex flex-col items-start justify-end p-6 relative overflow-hidden flex-[0_0_63%] min-h-0">
              <div className="font-bold text-[2rem] text-[#18181a] mb-2 leading-tight z-10" style={{fontFamily: 'Gilroy, sans-serif'}}>Rest assured, there are no crazy fees or legal hassle to worry about.</div>
              <svg className="absolute left-15 -top-25 opacity-35" width="380" height="380" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#f2994a" strokeWidth="8"/><circle cx="40" cy="40" r="24" stroke="#f2994a" strokeWidth="4"/></svg>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full flex justify-center items-center mt-20">
        <p className="text-[#3b3b3b] text-xl font-semibold text-center tracking-tight" style={{fontFamily: 'Gilroy, sans-serif'}}>Join 150+ companies trusting Epic Robotics for their automation needs.</p>
      </div>
    </section>
  );
}

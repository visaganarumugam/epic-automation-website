import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiX} from 'react-icons/fi';

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation data
  const navigationItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/help-center' }
  ];

  const legalItems = [
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/terms-and-conditions?tab=privacy' }
  ];

  // Navigation handlers
  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };



  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // External link handlers
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/company/epic-automations-robotics/', '_blank');
  };

  

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_blank');
  };

  const handlePhone = (phone: string) => {
    window.open(`tel:${phone}`, '_blank');
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={handleMobileMenuToggle}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#111112] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#323333]">
            <h2 className="text-white text-xl font-semibold">Menu</h2>
            <button
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-[#FEB130] transition-colors"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-6">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left py-4 px-6 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#FEB130] bg-[#232325]'
                      : 'text-white hover:text-[#FEB130] hover:bg-[#232325]'
                  }`}
                >
                  <span className="font-medium text-lg">{item.name}</span>
                </button>
              ))}
            </nav>

            {/* Legal Links */}
            <div className="mt-12 pt-8 border-t border-[#323333]">
              <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
              <div className="space-y-4">
                {legalItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full text-left py-3 px-6 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-[#FEB130] bg-[#232325]'
                        : 'text-gray-300 hover:text-[#FEB130] hover:bg-[#232325]'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full min-h-[500px] sm:min-h-[500px] md:min-h-[620px] bg-[#18181a] flex flex-col items-center justify-end relative overflow-hidden px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        {/* Large blurred brand name above the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 sm:-mt-4 md:-mt-0 w-full flex justify-center pointer-events-none select-none z-0">
          <span className="text-[11vw] sm:text-[10vw] md:text-[8vw] font-black uppercase text-transparent bg-clip-text bg-yellow-400 opacity-90 tracking-tighter" >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5900] mr-1 sm:mr-2 to-yellow-400">E</span>
            <span className="text-transparent mr-1 sm:mr-2 bg-clip-text bg-gradient-to-r from-[#ff5900] to-yellow-400">p</span>
            <span className="text-transparent mr-1 sm:mr-2 bg-clip-text bg-gradient-to-r from-[#ff5900] to-yellow-400">i</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5900] to-yellow-400">c</span> 
            <span className="text-white">Automations</span>
          </span>
        </div>
        
        {/* Main card with shiny border */}
        <div className="relative z-10 w-full max-w-8xl mt-10 sm:mt-1 sm:mx-auto rounded-2xl sm:rounded-3xl bg-[#111112]/90 shadow-2xl  sm:px-0 sm:py-0 flex flex-col items-center">
          {/* Shiny border */}
          <div className="rounded-2xl sm:rounded-3xl p-[2px] bg-gradient-to-r from-[#FEB130] via-[#fcd48f] to-[#FEB130] w-full">
            <div className="rounded-[18px] sm:rounded-[22px] bg-[#111112]/95 px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 items-start justify-between">
              
              {/* 1. CTA */}
              <div className="flex flex-col gap-4 min-w-0 sm:min-w-[200px] max-w-full sm:max-w-xs col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-2xl md:text-2xl font-semibold leading-tight">Ready to automate your future? Book a robotics consultation!</span>
                </div>
                <p className="text-gray-200 text-md mb-2 opacity-70 leading-relaxed">Discover how intelligent automation can transform your business.</p>
                <div className="flex flex-col gap-2 mt-2">
                  <button 
                    onClick={() => handleNavigation('/services#spm')}
                    className="bg-[#FEB130] text-black font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base shadow hover:bg-[#fddca4] transition flex items-center justify-between group"
                  >
                    <span className="truncate">Special Purpose Machines</span>
                    <span className="ml-2 text-base sm:text-lg group-hover:translate-x-1 transition flex-shrink-0">→</span>
                  </button>
                  {/* <button 
                    onClick={() => handleNavigation('/services')}
                    className="border border-[#FEB130] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:bg-[#232325] transition flex items-center justify-between group"
                  >
                    <span className="truncate">Customized Solutions</span>
                    <span className="ml-2 text-base sm:text-lg text-[#FEB130] group-hover:translate-x-1 transition flex-shrink-0">→</span>
                  </button> */}
                </div>
              </div>
              
              {/* 2. Navigation */}
              <div className="flex flex-col gap-2 min-w-0 sm:min-w-[150px] max-w-full sm:max-w-xs pl-0 sm:pl-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Navigation</span>
                </div>
                <ul className="text-gray-300 text-base sm:text-lg space-y-1.5 sm:space-y-2 opacity-90">
                  {navigationItems.map((item) => (
                    <li 
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className={`hover:text-[#FEB130] cursor-pointer transition-all duration-300 py-1 ${
                        location.pathname === item.path ? 'text-[#FEB130]' : ''
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 3. Legal Info */}
              <div className="flex flex-col gap-2 min-w-0 sm:min-w-[140px] max-w-full sm:max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Legal</span>
                </div>
                <ul className="text-gray-300 text-base sm:text-lg space-y-1.5 sm:space-y-2 opacity-90">
                  {legalItems.map((item) => (
                    <li 
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className={`hover:text-[#FEB130] cursor-pointer transition-all duration-300 py-1 ${
                        location.pathname === item.path ? 'text-[#FEB130]' : ''
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 4. Contact */}
              <div className="flex flex-col gap-2 min-w-0 sm:min-w-[180px] max-w-full sm:max-w-xs col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Contact Us</span>
                </div>
                <span 
                  onClick={() => handleEmail('Sales@epicautoamtions.co.in')}
                  className="text-gray-300 text-sm sm:text-lg mb-2 opacity-70 break-all cursor-pointer hover:text-[#FEB130] transition-colors"
                >
                  Sales@epicautoamtions.co.in
                </span>
                <span 
                  onClick={() => handlePhone('+917402143821')}
                  className="text-gray-300 text-sm sm:text-lg mb-2 opacity-70 break-all cursor-pointer hover:text-[#FEB130] transition-colors"
                >
                  +917402143821
                </span>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <button 
                    onClick={() => handleNavigation('/help-center')}
                    className="bg-[#FEB130] text-black font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base shadow hover:bg-[#fddca4] transition flex items-center justify-between group"
                  >
                    <span className="truncate">Book a Consultation</span>
                    <span className="ml-2 text-base sm:text-lg group-hover:translate-x-1 transition flex-shrink-0">→</span>
                  </button>
                  
                </div>
              </div>
              
              {/* 5. Made by/Follow/Scroll to top */}
              <div className="flex flex-col gap-2 min-w-0 sm:min-w-[180px] max-w-full sm:max-w-xs items-start sm:items-end justify-between col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="w-full sm:w-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight">Powered by Epic Automations</span>
                  </div>
                  <span 
                    onClick={() => handleEmail('Visaganarumugam@epicautomations.co.in')}
                    className="text-gray-300 text-sm sm:text-lg mb-2 opacity-70 break-all sm:break-normal cursor-pointer hover:text-[#FEB130] transition-colors"
                  >
                    Visaganarumugam@epicautomations.co.in
                  </span>
                  <div className="flex flex-col mt-10 gap-2 sm:gap-0">
                    <button 
                      onClick={handleLinkedIn}
                      className="border border-[#FEB130] mt-4 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:bg-[#232325] transition flex items-center justify-between group"
                    >
                      <span className="truncate">Follow on LinkedIn</span>
                      <span className="ml-2 text-base sm:text-lg group-hover:translate-x-1 transition flex-shrink-0">→</span>
                    </button>
                    
                  </div>
                </div>
                <button
                  onClick={handleScrollToTop}
                  className="border border-[#FEB130] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#fddca4] hover:text-black transition text-xl shadow bg-transparent mt-4 sm:mt-0 self-end"
                >
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 
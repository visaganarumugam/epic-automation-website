export default function Contact_us() {
  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/herosecImages/Slide4_bg.jpg"
        alt="Snappy App on Phone"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.7)' }}
      />
      {/* Overlay (optional for extra contrast) */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      {/* Content */}
      <div id="services-contact" className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl md:text-5xl font-semibold md:font-normal leading-tight md:leading-tight mb-8 md:mb-10 max-w-4xl mx-auto">
          Ready to experience the speed and<br className="hidden md:block" />simplicity of Epic Automations?
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-full text-base md:text-lg shadow-md hover:bg-gray-100 transition-all">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-full text-base md:text-lg flex items-center gap-2 hover:bg-white/10 transition-all">
            Learn more
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

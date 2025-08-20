
import { AnimatedSection, FadeUpSection } from '../../components/AnimatedSection';

export default function Newsletter() {
  return (
    <section className="w-full flex justify-center items-center pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 md:px-0">
      <FadeUpSection className="w-full max-w-full h-auto min-h-[350px] sm:h-[400px] md:h-[450px] bg-gradient-to-bl from-[#0077b3] via-[#00bfff] to-[#EAF6FF] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 shadow-lg">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 sm:gap-6 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">Subscribe to our newsletter<br className="hidden sm:block" />for the latest in robotics & automation!</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 text-white text-sm sm:text-base mb-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Industry news & trends
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Product updates
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Automation tips
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Exclusive offers
            </div>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-blue-600 transition text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-0 relative">
          <div className="flex items-center justify-center mb-2 relative w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24">
            {/* Avatars and icons */}
            <div className="absolute left-0 top-4 sm:top-6 md:top-8 z-10">
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow" />
                <span className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 bg-pink-500 text-white rounded-full p-0.5 sm:p-1 text-xs">
                  <svg width="12" height="12" className="sm:w-4 sm:h-4 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24"><path d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2a2 2 0 0 0 2 2zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2z" fill="currentColor"/></svg>
                </span>
              </div>
            </div>
            <div className="absolute left-16 sm:left-20 md:left-24 top-0 z-20">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white shadow" />
            </div>
            <div className="absolute left-20 sm:left-24 md:left-32 top-6 sm:top-8 md:top-12 z-30">
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User 3" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow" />
                <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-pink-500 text-white rounded-full p-0.5 sm:p-1 text-xs">
                  <svg width="14" height="14" className="sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24"><path d="M19.43 12.98a2 2 0 0 0 0-1.96l-1.11-1.93a2 2 0 0 0-2.45-.91l-1.06.43a2 2 0 0 1-2.18-.45l-.8-.8a2 2 0 0 1-.45-2.18l.43-1.06a2 2 0 0 0-.91-2.45l-1.93-1.11a2 2 0 0 0-1.96 0l-1.93 1.11a2 2 0 0 0-.91 2.45l.43 1.06a2 2 0 0 1-.45 2.18l-.8.8a2 2 0 0 1-2.18.45l-1.06-.43a2 2 0 0 0-2.45.91l-1.11 1.93a2 2 0 0 0 0 1.96l1.11 1.93a2 2 0 0 0 2.45.91l1.06-.43a2 2 0 0 1 2.18.45l.8.8a2 2 0 0 1 .45 2.18l-.43 1.06a2 2 0 0 0 .91 2.45l1.93 1.11a2 2 0 0 0 1.96 0l1.93-1.11a2 2 0 0 0 .91-2.45l-.43-1.06a2 2 0 0 1 .45-2.18l.8-.8a2 2 0 0 1 2.18-.45l1.06.43a2 2 0 0 0 2.45-.91l1.11-1.93z" fill="currentColor"/></svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-2 mt-4 text-center">
            <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">20k+</span>
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold mb-2">Epic Machines made</span>
          </div>
        </div>
      </FadeUpSection>
    </section>
  );
}

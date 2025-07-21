import React from 'react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-white w-full flex flex-col">
      {/* Top Nav */}
      <nav className="w-full flex items-center justify-between px-4 md:px-12 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Snappy Logo" className="w-8 h-8" />
          <span className="font-bold text-xl text-gray-900">Snappy</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Apps</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Services</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Business</a>
          <a href="#" className="hover:text-blue-600">Download</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xl">🌐</span>
          <span className="font-medium">EN</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center gap-2">
          <span className="text-xl">🌐</span>
          <span className="font-medium">EN</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          <button className="ml-4">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>
      {/* Main Content */}
      <main className="flex flex-col w-full max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 mt-4 md:mt-0">Elevate Your Chatting,<br className="hidden md:block"/>Simplify Your Life</h1>
        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl">
          Discover a Seamless World of Professional Services, Appointments, and Secure Transactions – All in One Place!
        </p>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Customizable Theme" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Customizable Theme</h2>
            <p className="text-gray-500 text-sm md:text-base">Personalize your Snappy experience with a variety of themes, allowing you to tailor the app to match your unique lifestyle.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" alt="Secure File Sharing" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Secure File Sharing</h2>
            <p className="text-gray-500 text-sm md:text-base">Snappy ensures the security of your business conversations with end-to-end encryption.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Health Reminders" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Health Reminders</h2>
            <p className="text-gray-500 text-sm md:text-base">Stay on top of your wellness routine with scheduled messages and reminders for self-care and health-related activities.</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-start">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Secure Communication" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Secure Communication</h2>
            <p className="text-gray-500 text-sm md:text-base">Communicate securely with service providers for inquiries, updates, and feedback, all within the Snappy app.</p>
          </div>
        </div>
      </main>
    </div>
  );
}


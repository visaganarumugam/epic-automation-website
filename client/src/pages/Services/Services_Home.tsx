export default function Service_hero() {
  return (
    <div id="services" className="min-h-screen bg-transparent w-full flex flex-col">
     
      {/* Main Content */}
      <main className="flex flex-col w-full mx-auto px-4 md:px-12 py-8 md:pt-35">
        <h1 className="text-3xl md:text-7xl font-semibold text-gray-900 leading-tighter mb-4 mt-4 md:mt-0">Elevate Your Chatting,<br className="hidden md:block"/>Simplify Your Life</h1>
        <p className="text-white text-base md:text-2xl mb-15 max-w-2xl">
          Discover a Seamless World of Professional Services, <br /> Appointments, and Secure Transactions – All in One Place!
        </p>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg md:text-3xl font-semibold text-gray-900 mb-2">Customizable Theme</h2>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Customizable Theme" className="w-100 h-90 object-cover rounded-2xl mb-4" />
            <p className="text-gray-600 leading-tight text-md font-semibold md:text-lg max-w-sm">Personalize your Snappy experience with a variety of themes, allowing you to tailor the app to match your unique lifestyle.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg md:text-3xl font-semibold text-gray-900 mb-2">Secure File Sharing</h2>
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" alt="Secure File Sharing" className="w-100 h-90 object-cover rounded-2xl mb-4" />
            <p className="text-gray-600 leading-tight text-md font-semibold md:text-lg max-w-sm">Snappy ensures the security of your business conversations with end-to-end encryption.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg md:text-3xl font-semibold text-gray-900 mb-2">Health Reminders</h2>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Health Reminders" className="w-100 h-90 object-cover rounded-2xl mb-4" />
            <p className="text-gray-600 leading-tight text-md font-semibold md:text-lg max-w-sm">Stay on top of your wellness routine with scheduled messages and reminders for self-care and health-related activities.</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg md:text-3xl font-semibold text-gray-900 mb-2">Secure Communication</h2>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Secure Communication" className="w-100 h-90 object-cover rounded-2xl mb-4" />
            <p className="text-gray-600 leading-tight text-md font-semibold md:text-lg max-w-sm">Communicate securely with service providers for inquiries, updates, and feedback, all within the Snappy app.</p>
          </div>
        </div>
      </main>
    </div>
  );
}


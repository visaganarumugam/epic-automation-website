import { Mail, Phone, MapPin } from "lucide-react";
import { GridPattern } from "../components/magicui/grid-pattern";
import { cn } from "../lib/utils";

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-[#101014] flex flex-col items-center py-12 px-2 font-gilroy overflow-hidden">
      {/* GridPattern Background */}
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "pointer-events-none z-0 absolute inset-0 h-full w-full [mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]"
        )}
      />
      {/* Main Content (z-10) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading Section - Modern Split Layout */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between bg-transparent rounded-none md:rounded-2xl px-4 md:px-20 py-10  mb-10 pt-16">
          {/* Left: Large Heading */}
          <div className="flex-1 text-left">
            <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-2 md:mb-0">Who We Are: <br className="hidden md:block" /> Pioneers in Robotics Engineering</h1>
          </div>
          {/* Right: Description and Buttons */}
          <div className="flex flex-col items-start md:items-end gap-4 flex-1 max-w-md">
            <p className="text-white text-base md:text-lg mb-2 md:mb-4 text-right">We&apos;ve built our life and business insurance products from the ground up to both protect you and reward you.</p>
            <div className="flex gap-3 w-full md:justify-end">
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-base shadow hover:bg-[#232329] transition">Start free trial</button>
              <button className="border border-white text-white bg-transparent px-6 py-2 rounded-full font-medium text-base hover:bg-[#f3f3f3] transition">Our Study Case</button>
            </div>
          </div>
        </div>
        {/* Main Image */}
        <div className="w-full max-w-[90vw] p-2  bg-white/20  rounded-2xl overflow-hidden mb-8 mx-auto">
          <img
            src="https://images.pexels.com/photos/3810782/pexels-photo-3810782.jpeg?auto=compress&w=800&q=80"
            alt="Team collaborating"
            className="w-full h-60 md:h-[60vh] object-cover object-center rounded-2xl"
          />
        </div>
        {/* Contact Section - Pixel Perfect */}
        <div className="w-full max-w-4xl flex flex-col items-center mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">Reach out to us today</h2>
          <p className="text-gray-300 text-base md:text-lg text-center mb-8">
            Whether you need support or want to learn more, we&apos;re here to assist you
          </p>
          <div className="w-full flex flex-col md:flex-row gap-5 justify-center">
            {/* Email Card */}
            <div className="flex-1 bg-[#18181b] rounded-2xl p-6 flex flex-col items-center shadow-md min-w-[180px] max-w-xs mx-auto">
              <div className="bg-[#232329] rounded-full p-3 mb-3 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-400 text-sm mb-1">Email</span>
              <span className="text-white text-base font-semibold">closeify@gmail.com</span>
            </div>
            {/* Phone Card */}
            <div className="flex-1 bg-[#18181b] rounded-2xl p-6 flex flex-col items-center shadow-md min-w-[180px] max-w-xs mx-auto">
              <div className="bg-[#232329] rounded-full p-3 mb-3 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-400 text-sm mb-1">Phone</span>
              <span className="text-white text-base font-semibold">+1 123-456-7890</span>
            </div>
            {/* Address Card */}
            <div className="flex-1 bg-[#18181b] rounded-2xl p-6 flex flex-col items-center shadow-md min-w-[180px] max-w-xs mx-auto">
              <div className="bg-[#232329] rounded-full p-3 mb-3 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-400 text-sm mb-1">Address</span>
              <span className="text-white text-base font-semibold">548-000, New York, USA</span>
            </div>
          </div>
        </div>
        {/* Story & Target Section - Pixel Perfect */}
        <div className="w-full max-w-6xl flex flex-col gap-10 mt-4">
          {/* Our Story Card */}
          <div className="w-full bg-[#18181b] rounded-2xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-8">
              <h3 className="text-white text-3xl md:text-4xl font-semibold mb-4">Our story</h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
                Every great solution begins with a problem. We noticed businesses struggling to manage customer relationships, missing out on opportunities, and wasting time on repetitive tasks. That's why we set out to create a CRM platform that simplifies processes and drives results....
              </p>
              <button className="bg-gradient-to-b from-[#232329] to-[#232329cc] text-white px-6 py-2.5 rounded-lg shadow-md hover:from-[#232329cc] hover:to-[#232329] transition font-medium w-fit text-base">Learn more</button>
            </div>
            <div className="flex-1 flex items-center justify-center min-h-[220px] bg-black">
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&w=800&q=80"
                alt="Our story"
                className="w-full h-full object-cover object-center md:rounded-l-none md:rounded-r-2xl md:rounded-t-none md:rounded-b-none rounded-b-2xl md:max-h-[270px]"
                style={{maxHeight:'270px'}}
              />
            </div>
          </div>
          {/* Our Target Card */}
          <div className="w-full bg-[#18181b] rounded-2xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden px-0 py-0" style={{minHeight:'270px'}}>
            <div className="flex-1 flex items-center justify-center min-h-[220px] bg-black order-1 md:order-none">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800&q=80"
                alt="Our target"
                className="w-full h-full object-cover object-center md:rounded-r-none md:rounded-l-2xl md:rounded-t-none md:rounded-b-none rounded-b-2xl md:max-h-[270px]"
                style={{maxHeight:'270px'}}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-8 order-2 md:order-none">
              <h3 className="text-white text-3xl md:text-4xl font-semibold mb-4">Our target</h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
                Our aim is to boost sales. Our CRM is designed to adapt to your unique needs and scale seamlessly as your business grows. We prioritize fostering long-term customer loyalty by understanding needs and delivering experiences at every interaction....
              </p>
              <button className="bg-gradient-to-b from-[#232329] to-[#232329cc] text-white px-6 py-2.5 rounded-lg shadow-md hover:from-[#232329cc] hover:to-[#232329] transition font-medium w-fit text-base">Learn more</button>
            </div>
          </div>
        </div>
        {/* Success Stories & Experts Section */}
        <div className="w-full flex flex-col items-center mt-16">
          {/* Success Stories Stats */}
          <div className="w-full max-w-5xl bg-gradient-to-b from-[#18181b] to-[#101014] rounded-2xl py-12 px-4 flex flex-col items-center mb-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Our <span className="text-gray-300 font-light">proven</span> <br className="md:hidden" /> success stories
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
              <div className="flex flex-col items-center flex-1">
                <span className="text-3xl md:text-4xl font-bold text-white">50K+</span>
                <span className="text-gray-400 mt-1">Employee</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-3xl md:text-4xl font-bold text-white">05M+</span>
                <span className="text-gray-400 mt-1">Users in globally</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-3xl md:text-4xl font-bold text-white">98%</span>
                <span className="text-gray-400 mt-1">Positive review</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-3xl md:text-4xl font-bold text-white">15+</span>
                <span className="text-gray-400 mt-1">Years in business</span>
              </div>
            </div>
          </div>
          {/* Experts Section - Pixel Perfect */}
          <div className="w-full max-w-6xl flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 mt-2">Meets our experts</h3>
            <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl mb-12">
              Discover the passionate team of innovators, strategists, and customer success professionals working tirelessly to help you achieve your goals
            </p>
            <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
              {/* Expert 1 */}
              <div className="flex-1 max-w-xs bg-transparent rounded-2xl shadow-xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Carter" className="w-full h-72 object-cover object-top" />
                  <div className="absolute bottom-0 left-0 w-full bg-[#18181b] bg-opacity-95 px-5 py-4 flex items-center rounded-b-2xl justify-between">
                    <div>
                      <span className="text-white text-base font-semibold block leading-tight">Michael Carter</span>
                      <span className="text-gray-400 text-xs">Senior Sales Strategist</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-gray-400 hover:text-white transition"><i className="fa-brands fa-instagram text-lg"></i></a>
                      <a href="#" className="text-gray-400 hover:text-white transition"><i className="fa-brands fa-linkedin text-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Expert 2 */}
              <div className="flex-1 max-w-xs bg-transparent rounded-2xl shadow-xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Ryan Davis" className="w-full h-72 object-cover object-top" />
                  <div className="absolute bottom-0 left-0 w-full bg-[#18181b] bg-opacity-95 px-5 py-4 flex items-center rounded-b-2xl justify-between">
                    <div>
                      <span className="text-white text-base font-semibold block leading-tight">Ryan Davis</span>
                      <span className="text-gray-400 text-xs">UX/UI Designer</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-gray-400 hover:text-white transition"><i className="fa-brands fa-instagram text-lg"></i></a>
                      <a href="#" className="text-gray-400 hover:text-white transition"><i className="fa-brands fa-linkedin text-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Expert 3 */}
              <div className="flex-1 max-w-xs bg-transparent rounded-2xl shadow-xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Jessica Walker" className="w-full h-72 object-cover object-top" />
                  <div className="absolute bottom-0 left-0 w-full bg-[#18181b] bg-opacity-95 px-5 py-4 flex items-center rounded-b-2xl justify-between">
                    <div>
                      <span className="text-white text-base font-semibold block leading-tight">Jessica Walker</span>
                      <span className="text-gray-400 text-xs">Customer Success Manager</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-gray-400 hover:text-white transition"><i className="fa-brands fa-instagram text-lg"></i></a>
                      <a href="#" className="text-gray-400 hover:text-white transition"><i className="fa-brands fa-linkedin text-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';

const contactInfo = [
  {
    icon: <IconMail size={28} stroke={1.7} className="text-black" />,
    label: 'Email us',
    value: 'johnny.kyorov@gmail.com',
    href: 'mailto:johnny.kyorov@gmail.com',
  },
  {
    icon: <IconPhone size={28} stroke={1.7} className="text-black" />,
    label: 'Call us',
    value: '(501) 123-4567',
    href: 'tel:5011234567',
  },
  {
    icon: <IconMapPin size={28} stroke={1.7} className="text-black" />,
    label: 'Our location',
    value: 'Crosby Street, NY, US',
    href: 'https://maps.google.com',
  },
];

export default function ContactUsForm() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center  bg-transparent relative overflow-hidden px-2 py-10 md:py-0">
      {/* Large faded CONTACT background text */}
      <span className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="text-[10vw] md:text-[10vw] font-black tracking-tighter text-[#5d88a8] opacity-20" style={{letterSpacing: '-0.05em'}}>NEED HELP?</span>
      </span>
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 bg-transparent">
        {/* Left: Contact Info */}
        <div className="flex flex-col w-[600px] gap-8 justify-center h-full">
          <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-lg font-semibold mb-2 shadow-lg flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0feaf5] mr-2 inline-block"></span>
            Contact
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black">Get in touch</h2>
          <p className="text-gray-700 text-xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#0feaf5] transition-all"
              >
                <div className="flex py-2 items-center gap-4">
                  <span className="bg-white/10 border  border-white/25 rounded-xl p-2 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black text-lg font-semibold">{item.label}</span>
                    <span className="text-gray-700 text-md">{item.value}</span>
                  </div>
                </div>
                <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#0feaf5] transition-colors">
                  <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="flex flex-col gap-3 bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-2  min-w-[320px] w-full max-w-[600px] mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#0feaf5] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#0feaf5] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <textarea
            placeholder="Message"
            rows={6}
            className=" h-[70%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#0feaf5] transition-all resize-none"
            style={{fontFamily: 'Gilroy'}}
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold text-lg py-4 rounded-xl shadow hover:bg-[#0feaf5] hover:text-black transition-all mt-2"
            style={{fontFamily: 'Gilroy'}}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}


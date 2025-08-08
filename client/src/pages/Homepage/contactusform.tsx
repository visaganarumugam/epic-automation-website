import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';

const contactInfo = [
  {
    icon: <IconMail size={35} stroke={1.7} className="text-black" />,
    label: 'Email us',
    value: 'johnny.kyorov@gmail.com',
    href: 'mailto:johnny.kyorov@gmail.com',
  },
  {
    icon: <IconPhone size={35} stroke={1.7} className="text-black" />,
    label: 'Call us',
    value: '(501) 123-4567',
    href: 'tel:5011234567',
  },
  {
    icon: <IconMapPin size={35} stroke={1.7} className="text-black" />,
    label: 'Our location',
    value: 'Crosby Street, NY, US',
    href: 'https://maps.google.com',
  },
];

export default function ContactUsForm() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-10 md:py-0">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2  mx-10 bg-transparent">
        {/* Left: Contact Info */}
        <div className="flex flex-col w-full gap-6 justify-center h-full">
          <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff4f0f] mr-2 inline-block"></span>
            Contact
          </div> 
          <h2 className="text-4xl md:text-7xl font-bold text-black">Get in touch</h2>
          <p className="text-gray-700 text-2xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, _) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-[94%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#ff4f0f] transition-all"
              >
                <div className="flex py-2 items-center  gap-4">
                  <span className="bg-white/20 border  border-white/25 rounded-xl p-2 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black text-xl font-semibold">{item.label}</span>
                    <span className="text-black text-lg">{item.value}</span>
                  </div>
                </div>
                <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#ff4f0f] transition-colors">
                  <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="flex flex-col gap-2 bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-2 w-full">
          <input
            type="text"
            placeholder="Name"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff4f0f] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg h-[12%] shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff4f0f] transition-all"
            style={{fontFamily: 'Gilroy'}}
          />
          <textarea
            placeholder="Message"
            rows={6}
            className=" h-[70%] bg-white/25 backdrop-blur-[15px] border border-white/20 text-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-lg px-4 py-4 text-black placeholder-gray-800 focus:outline-none focus:border-[#ff4f0f] transition-all resize-none"
            style={{fontFamily: 'Gilroy'}}
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold text-lg py-4 rounded-xl shadow hover:bg-[#ff4f0f] transition-all mt-2"
            style={{fontFamily: 'Gilroy'}}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}


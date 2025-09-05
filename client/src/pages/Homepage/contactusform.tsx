import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';
import ContactForm from '../../components/ContactForm';
import { FadeUpSection } from '../../components/AnimatedSection';

const contactInfo = [
  {
    icon: <IconMail size={25} stroke={1.7} className="text-black sm:size-9 " />,
    label: 'Email us',
    value: 'Visaganarumugam@epicautomations.co.in',
    href: 'mailto:Visaganarumugam@epicautomations.co.in',
  },
  {
    icon: <IconPhone size={25} stroke={1.7} className="text-black sm:size-9" />,
    label: 'Call us',
    value: '(+91) 7402143821',
    href: 'tel:7402143821',
  },
  {
    icon: <IconMapPin size={25} stroke={1.7} className="text-black sm:size-9" />,
    label: 'Our location',
    value: 'Epic Automations, Coimbatore',
    href: 'https://maps.google.com',
  },
];

export default function ContactUsForm() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-0 sm:px-10 py-10 md:py-0">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2  mx-10 bg-transparent">
        {/* Left: Contact Info */}
        <FadeUpSection className="flex flex-col w-full gap-2 sm:gap-6 justify-center h-full">
          <div className="w-fit px-6 py-2 rounded-full bg-[#181b1f] border border-[#23272b] text-white text-md sm:text-2xl font-semibold mb-2 shadow-lg flex items-center gap-2">
            <span className=" w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4f0f] mr-2 inline-block"></span>
            Contact
          </div> 
          <h2 className="text-4xl md:text-7xl font-bold text-black">Get in touch</h2>
          <p className="text-gray-700 text-lg sm:text-2xl font-semibold max-w-md mb-4">Have questions or ready to transform your business with AI automation?</p>
          <div className="flex flex-col gap-4 mb-7 sm:mb-0">
            {contactInfo.map((item, _) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full sm:w-[94%] bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 group hover:border-[#ff4f0f] transition-all"
              >
                <div className="flex py-2 items-center  gap-4">
                  <span className="bg-white/20 border  border-white/25 rounded-xl p-1 sm:p-2 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black text-lg sm:text-xl font-semibold">{item.label}</span>
                    <span className="text-black text-base sm:text-lg">{item.value}</span>
                  </div>
                </div>
                <span className="bg-[#23272b] rounded-2xl p-2 ml-4 group-hover:bg-[#ff4f0f] transition-colors">
                  <IconArrowUpRight size={27} className="text-white group-hover:text-black" />
                </span>
              </a>
            ))}
          </div>
        </FadeUpSection>
        
        {/* Right: Contact Form */}
        <ContactForm source="homepage-contact-form" />
      </div>
    </section>
  );
}


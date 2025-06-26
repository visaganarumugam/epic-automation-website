import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import { Sling as Hamburger } from 'hamburger-react';
import { MdSupportAgent } from 'react-icons/md';
import { FiSearch, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import ReactCountryFlag from 'react-country-flag';
import { useState, useRef, useEffect } from 'react';
import logo from '/images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input';


interface DropdownItem {
  title: string;
  description: string;
  image: string;
  href: string;
  isPromo?: boolean;
}

interface DropdownTab {
  name: string;
  items: DropdownItem[];
}

interface DropdownContent {
  [key: string]: {
    tabs: DropdownTab[];
  };
}

const dropdownContent: DropdownContent = {
  Products: {
    tabs: [
      {
        name: "Production",
        items: [
          {
            title: "ADAM",
            description: "Generate revenue with this friendly, two-armed productivity robot.",
            image: "https://www.richtechrobotics.com/wp-content/uploads/2023/11/ADAM-clean-no-tray-1-768x733.png",
            href: "/products/adam",
          },
          {
            title: "Scorpion",
            description: "AI powered robot bartender that provides strikingly good beverage service.",
            image: "https://www.richtechrobotics.com/wp-content/uploads/2023/11/Scorpion-clean-768x722.png",
            href: "/products/scorpion",
          },
          {
            title: "Explore rental options",
            description: "",
            image: "https://images.unsplash.com/photo-1620712943543-959636834a5f?q=80&w=2070&auto=format&fit=crop",
            href: "/rentals",
            isPromo: true,
          },
        ],
      },
      { 
        name: "Delivery", 
        items: [
          {
            title: "Wally",
            description: "Automated point-to-point delivery robot for indoor environments.",
            image: "https://www.richtechrobotics.com/wp-content/uploads/2023/11/Wally-clean-no-tray-768x722.png",
            href: "/products/wally",
          },
          {
            title: "Rover",
            description: "All-terrain delivery bot for last-mile logistics and outdoor tasks.",
            image: "https://images.unsplash.com/photo-1629984538878-995ce508e730?q=80&w=1932&auto=format&fit=crop",
            href: "/products/rover",
          },
        ] 
      },
      { 
        name: "Cleaning", 
        items: [
           {
            title: "NeatBot",
            description: "Commercial-grade autonomous floor scrubbing for large spaces.",
            image: "https://images.unsplash.com/photo-1611689103323-3f1de92794a3?q=80&w=1974&auto=format&fit=crop",
            href: "/products/neatbot",
          },
          {
            title: "Tidy",
            description: "Compact cleaning bot perfect for small offices and retail spaces.",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
            href: "/products/tidy",
          },
        ] 
      },
      { 
        name: "See all robots", 
        items: [
          {
            title: "Discover Our Full Robotic Lineup",
            description: "Explore our complete range of automation solutions.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop",
            href: "/products",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "Rent a robot", 
        items: [
          {
            title: "Flexible Robotics on Demand",
            description: "Get the automation you need, for as long as you need it.",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
            href: "/rentals",
            isPromo: true,
          },
        ] 
      },
    ],
  },
  Design: {
      tabs: [
        {
          name: "UI/UX",
          items: [
            {
              title: "Design System",
              description: "Build consistent and scalable designs with our automated tools.",
              image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1983&auto=format&fit=crop",
              href: "/design/system",
            },
            {
              title: "UX Research Bot",
              description: "Automate user research and gather insights with our AI-powered bot.",
              image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
              href: "/design/research",
            },
          ],
        },
        { 
          name: "Branding", 
          items: [
            {
              title: "LogoBot",
              description: "AI-powered logo and brand identity generator for a quick start.",
              image: "https://images.unsplash.com/photo-1608999718493-215a7ea223b2?q=80&w=1974&auto=format&fit=crop",
              href: "/design/logobot",
            },
            {
              title: "StyleScout",
              description: "Generate complete brand style guides, from colors to fonts.",
              image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
              href: "/design/stylescout",
            },
          ] 
        },
        { 
          name: "Illustration", 
          items: [
            {
              title: "Artisan AI",
              description: "Create stunning, production-ready illustrations from text prompts.",
              image: "https://images.unsplash.com/photo-1634403196235-15b8a658746b?q=80&w=1964&auto=format&fit=crop",
              href: "/design/artisan-ai",
            },
          ]
        },
      ],
  },
  Development: {
      tabs: [
        {
          name: "DevBots",
          items: [
            {
              title: "Code Assistant Bot",
              description: "Your AI pair programmer for higher productivity and fewer bugs.",
              image: "https://images.unsplash.com/photo-1593068297352-05451a3ff142?q=80&w=2070&auto=format&fit=crop",
              href: "/dev/code-assistant",
            },
            {
              title: "QA Bot",
              description: "Automated testing with our intelligent QA bot to ensure quality.",
              image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2070&auto=format&fit=crop",
              href: "/dev/qa-bot",
            },
             {
              title: "Explore our APIs",
              description: "",
              image: "https://images.unsplash.com/photo-1555949963-ff98082e3e03?q=80&w=1935&auto=format&fit=crop",
              href: "/developers/api",
              isPromo: true,
            },
          ],
        },
        { 
          name: "QA Bots", 
          items: [
            {
              title: "BugHunter",
              description: "Autonomous testing bot that finds and reports bugs before they ship.",
              image: "https://images.unsplash.com/photo-1555952494-035b91b7d56a?q=80&w=2070&auto=format&fit=crop",
              href: "/dev/bughunter",
            },
            {
              title: "TestGrid",
              description: "Run thousands of parallel tests on our distributed bot network.",
              image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop",
              href: "/dev/testgrid",
            },
          ]
        },
        { 
          name: "Integrations", 
          items: [
            {
              title: "ConnectAPI",
              description: "Seamlessly integrate our robots with your existing software stack.",
              image: "https://images.unsplash.com/photo-1542626991-a2f571614533?q=80&w=2070&auto=format&fit=crop",
              href: "/dev/connect-api",
            },
          ]
        },
      ],
  },
  Solutions: {
      tabs: [
        {
          name: "By Industry",
          items: [
            {
              title: "Manufacturing",
              description: "Automate your production line with our precision robots.",
              image: "https://images.unsplash.com/photo-1633483188368-c68e7b39b3e1?q=80&w=2070&auto=format&fit=crop",
              href: "/solutions/manufacturing",
            },
            {
              title: "Logistics & Warehousing",
              description: "Streamline your supply chain with our autonomous delivery bots.",
              image: "https://images.unsplash.com/photo-1578575437130-5278ce682623?q=80&w=2070&auto=format&fit=crop",
              href: "/solutions/logistics",
            },
            {
              title: "Explore All Industries",
              description: "",
              image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
              href: "/solutions/industries",
              isPromo: true,
            },
          ],
        },
        { 
          name: "By Application", 
          items: [
            {
              title: "Material Handling",
              description: "Automated transport of goods within your facility.",
              image: "https://images.unsplash.com/photo-1518798399766-34717a6152a5?q=80&w=2070&auto=format&fit=crop",
              href: "/solutions/material-handling",
            },
            {
              title: "Inspection & Monitoring",
              description: "High-precision robots for quality control and surveillance.",
              image: "https://images.unsplash.com/photo-1611606024823-52370a22e1ac?q=80&w=1968&auto=format&fit=crop",
              href: "/solutions/inspection",
            },
          ] 
        },
        { 
          name: "By Technology", 
          items: [
            {
              title: "AI & Machine Learning",
              description: "The core intelligence driving our autonomous systems.",
              image: "https://images.unsplash.com/photo-1620712943543-959636834a5f?q=80&w=2070&auto=format&fit=crop",
              href: "/technology/ai-ml",
            },
            {
              title: "Computer Vision",
              description: "Enabling robots to perceive and understand the world.",
              image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
              href: "/technology/computer-vision",
            },
          ] 
        },
      ],
  },
  Platform: {
      tabs: [
        {
          name: "Robotics OS",
          items: [
            {
              title: "Our Core Operating System",
              description: "The powerful, scalable, and secure OS for our entire fleet.",
              image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
              href: "/platform/os",
            },
            {
              title: "Real-time Kernel",
              description: "Ensuring microsecond precision for critical operations.",
              image: "https://images.unsplash.com/photo-1545987796-20916962325b?q=80&w=2070&auto=format&fit=crop",
              href: "/platform/os-kernel",
            },
          ],
        },
        { 
          name: "Developer APIs", 
          items: [
            {
              title: "REST & Python APIs",
              description: "Integrate and control our robots with simple, powerful APIs.",
              image: "https://images.unsplash.com/photo-1517694712202-1428bc64a25a?q=80&w=2070&auto=format&fit=crop",
              href: "/platform/api",
            },
            {
              title: "Explore API Documentation",
              description: "Your comprehensive guide to building with our platform.",
              image: "https://images.unsplash.com/photo-1555949963-ff98082e3e03?q=80&w=1935&auto=format&fit=crop",
              href: "/developers/api",
              isPromo: true,
            },
          ]
        },
        { 
          name: "Simulation Tools", 
          items: [
            {
              title: "Virtual Test Environment",
              description: "Test and validate your robotics applications in a high-fidelity simulator.",
              image: "https://images.unsplash.com/photo-1631006197148-565498a5d9e5?q=80&w=2070&auto=format&fit=crop",
              href: "/platform/simulation",
            },
          ]
        },
      ],
  },
};

const languageOptions = [
  { value: 'english', label: 'English', code: 'GB' },
  { value: 'tamil', label: 'Tamil', code: 'IN' },
  { value: 'arabic', label: 'Arabic', code: 'SA' },
];

const navLinks = [
  { name: 'Products', dropdown: true },
  { name: 'Solutions', dropdown: true },
  { name: 'Platform', dropdown: true },
  { name: 'About', dropdown: false },
  { name: 'Career', dropdown: false },
];

const roboticsPlaceholders = [
  "Search robotics kits...",
  "Find automation solutions...",
  "Explore AI projects...",
  "How to build a line follower robot?",
  "What is ROS (Robot Operating System)?",
  "Best sensors for obstacle avoidance",
  "Latest in humanoid robotics",
  "Get started with Arduino robots",
  "How to join a robotics competition?",
];

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languageOptions[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  function handleSelect(option: typeof languageOptions[0]) {
    setSelected(option);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative ">
      <button
        className={`h-12 w-12 flex justify-center items-center rounded-xl bg-[#18171a]/60 backdrop-blur-md  border transition-colors duration-200
          ${open ? 'border-[#0feaf5]' : 'border-[#323333]'}
          hover:bg-[#242424] focus:border-[#0feaf5]`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        tabIndex={0}
        type="button"
      >
        <ReactCountryFlag
          countryCode={selected.code}
          svg
          style={{ width: 20, height: 20, borderRadius: '9999px', objectFit: 'cover', display: 'block' }}
          aria-label={selected.label}
          title={selected.label}
        />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#18171a] border border-[#323222] rounded-xl rounded-tr-none shadow-2xl z-50 animate-fadeIn">
          {languageOptions.map(option => (
            <button
              key={option.value}
              className={`flex items-center gap-2 w-full px-4 py-2 text-white hover:bg-[#232323] transition-colors text-left ${selected.value === option.value ? 'text-[#F56E0F]' : ''}`}
              onClick={() => handleSelect(option)}
              type="button"
            >
              <ReactCountryFlag
                countryCode={option.code}
                svg
                style={{ width: 20, height: 20, borderRadius: '9999px', objectFit: 'cover', display: 'block' }}
                aria-label={option.label}
                title={option.label}
              />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TopNavbar({ isScrolled }: { isScrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  let closeDropdownTimeout: number | null = null;

  // Focus search input when searchOpen
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Update active tab when dropdown opens
  useEffect(() => {
    if (openDropdown) {
      const linkData = dropdownContent[openDropdown as keyof typeof dropdownContent];
      if (linkData?.tabs.length > 0) {
        setActiveTab(linkData.tabs[0].name);
      }
    }
  }, [openDropdown]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(_: MouseEvent) {
      setOpenDropdown(null);
    }
    if (openDropdown) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openDropdown]);

  // Dropdown open/close logic for click and hover
  const handleTabClick = (link: any) => {
    if (openDropdown === link.name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(link.name);
    }
  };

  // Handle mouse enter/leave for tab or dropdown
  const handleDropdownMouseEnter = (link: any) => {
    if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
    setOpenDropdown(link.name);
    setDropdownHovered(true);
  };
  
  const handleDropdownMouseLeave = () => {
    setDropdownHovered(false);
    closeDropdownTimeout = window.setTimeout(() => {
      if (!dropdownHovered) setOpenDropdown(null);
    }, 120);
  };

  const searchDropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  return (
    <Navbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen} 
      isBordered={false} 
      isBlurred={false} 
      className={`w-[98vw] ml-3 fixed top-1  py-2 px-2 rounded-xl transition-all duration-300 z-50 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`} 
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarBrand>
          <RouterLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          </RouterLink>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden ml-10 text-white pl-8 pr-6 py-2 bg-[#18171a]/60 backdrop-blur-md border rounded-xl border-[#323333] md:flex gap-2 relative" justify="center">
        {navLinks.map(link => (
          <NavbarItem key={link.name}>
            {['About', 'Career'].includes(link.name) ? (
              <RouterLink
                to={`/${link.name.toLowerCase()}`}
                className={`flex items-center gap-1 font-medium text-white transition-colors duration-200 py-2 rounded-lg px-2 ${openDropdown === link.name ? 'text-[#0feaf5]' : 'text-white'} hover:text-[#0feaf5]`}
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </RouterLink>
            ) : (
              <button
                className={`
                  flex items-center gap-1 font-medium text-white
                  transition-colors duration-200 py-2 rounded-lg px-2
                  ${openDropdown === link.name ? 'text-[#0feaf5]' : 'text-white'}
                  hover:text-[#0feaf5]
                `}
                onClick={() => link.dropdown && handleTabClick(link)}
                onMouseEnter={() => link.dropdown && handleDropdownMouseEnter(link)}
                onMouseLeave={() => link.dropdown && handleDropdownMouseLeave()}
                type="button"
              >
                {link.name}
                {link.dropdown && (
                  <FiChevronDown className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                )}
              </button>
            )}
          </NavbarItem>
        ))}
        {/* Search Icon and Search Bar */}
        <NavbarItem>
          <button
            className={`size-10 ml-2 flex justify-center items-center rounded-xl bg-[#18171a]/20 backdrop-blur-md border transition-colors duration-200
              ${searchOpen ? 'border-[#0feaf5] text-[#0feaf5]' : 'border-[#323333] text-white'}
              hover:bg-[#242424] hover:text-[#0feaf5] focus:border-[#0feaf5] focus:text-[#0feaf5]`
            }
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            <FiSearch className="w-5 h-5" />
          </button>
        </NavbarItem>
        
        {/* Search Dropdown */}
        {searchOpen && (
          <div
            ref={searchDropdownRef}
            className="absolute left-0 top-full mt-2 w-full bg-[#18171a]/60 backdrop-blur-md border border-[#232323] focus-within:border-[#0feaf5] transition-colors rounded-xl shadow-2xl flex items-center px-1 py-1 animate-fadeIn z-40"
          >
            <div className="relative flex-1">
              <PlaceholdersAndVanishInput
                placeholders={roboticsPlaceholders}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e.target.value);
                }}
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  console.log('submitted');
                }}
              />
              
            </div>
          </div>
        )}
        
        {/* Dropdown Menu */}
        {openDropdown && dropdownContent[openDropdown as keyof typeof dropdownContent] && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[70vw] max-w-[900px] border border-[#323333] rounded-xl shadow-2xl flex z-40 transition-all duration-200 animate-fadeIn"
            onMouseEnter={() => {
              if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
              setDropdownHovered(true);
            }}
            onMouseLeave={handleDropdownMouseLeave}
          >
            {(() => {
              const linkData = dropdownContent[openDropdown as keyof typeof dropdownContent];
              if (!linkData) return null;
              
              const activeTabData: DropdownTab | undefined = linkData.tabs.find(t => t.name === activeTab);

              return <>
                <div className="w-[35%] bg-[#0f4a69] p-4 rounded-l-xl flex flex-col">
                    {linkData.tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onMouseEnter={() => setActiveTab(tab.name)}
                            className="block w-full text-left text-white text-lg py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-[#1d5266]"
                        >
                            <span className={`${activeTab === tab.name ? 'font-bold' : ''}`}>{tab.name}</span>
                            {activeTab === tab.name && (
                                <div className="h-0.5 w-10 bg-cyan-400 mt-1" />
                            )}
                        </button>
                    ))}
                </div>
                <div className="w-[65%] bg-gray-100 p-6 rounded-r-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4 grid-auto-rows-fr">
                    {activeTabData?.items.map((item, idx) =>
                      item.isPromo ? (
                        <RouterLink to={item.href} key={idx} className="relative rounded-lg overflow-hidden h-full group col-span-1 md:col-span-2">
                          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/50"></div>
                          <div className="relative h-full flex flex-col justify-end p-4 text-white">
                              <h3 className="text-xl font-bold">{item.title}</h3>
                              <div className="mt-4">
                                  <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black py-2 px-4 rounded-full group-hover:bg-gray-200 transition-colors">
                                      <span>{ item.title.includes('rental') ? 'EXPLORE NOW' : 'EXPLORE'}</span>
                                      <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1"/>
                                  </div>
                              </div>
                          </div>
                        </RouterLink>
                      ) : (
                        <RouterLink to={item.href} key={idx} className="bg-white rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                          </div>
                          <div className="aspect-w-1 aspect-h-1 my-4">
                              <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                          </div>
                          <div className="mt-auto">
                            <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-gray-800 py-2 px-4 rounded-full border border-gray-200 group-hover:bg-gray-100 transition-colors">
                                  <span>LEARN MORE</span>
                                  <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1"/>
                            </div>
                          </div>
                        </RouterLink>
                      )
                    )}
                    </div>
                </div>
              </>;
            })()}
          </div>
        )}
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-2 items-center">
          <NavbarItem className="flex md:hidden flex-1">
            <div className="relative w-full border border-[#323222] focus-within:border-orange-500 transition-colors rounded-xl">
              <PlaceholdersAndVanishInput
                placeholders={roboticsPlaceholders}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e.target.value);
                }}
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  console.log('submitted');
                }}
              />
              <FiSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setSearchOpen((v) => !v)}
              />
            </div>
          </NavbarItem>
        {/* Language Selector */}
        <NavbarItem >
          <LanguageSelector />
        </NavbarItem>
        {/* Help Center Icon */}
        <NavbarItem className="hidden md:flex">
          <RouterLink to="/help-center" style={{ textDecoration: 'none' }}>
            <button
              className={`size-12 flex justify-center items-center rounded-xl bg-[#18171a]/60 backdrop-blur-md border transition-colors duration-200
                border-[#323333] text-white hover:bg-[#242424] hover:text-[#0feaf5] focus:border-[#0feaf5] focus:text-[#0feaf5]`
              }
              aria-label="Help Center"
            >
              <MdSupportAgent className="w-5 h-5" />
            </button>
          </RouterLink>
        </NavbarItem>
        {/* Sign Up Button */}
        <NavbarItem className="hidden md:flex">
          <RouterLink to="/signup" style={{ textDecoration: 'none' }}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-orange-100">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E9F8FF_0%,#082F61_50%,#C1E3FF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl  bg-[#18171a]  px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Sign Up
              </span>
            </button>
          </RouterLink>
        </NavbarItem>
        {/* Hamburger Menu Toggle */}
        <NavbarItem className="md:hidden bg-[#18171a]/60 backdrop-blur-md border border-[#323333] text-white hover:bg-[#242424] hover:text-[#F56E0F] focus:border-[#F56E0F] focus:text-[#F56E0F] rounded-xl">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24}  />
        </NavbarItem>
      </NavbarContent>
      {/* Custom Mobile Sidebar Menu */}
      {isMenuOpen && (
        <>
          <div className="menu-overlay md:hidden" onClick={() => setIsMenuOpen(false)} />
          <nav className="menu-sidebar md:hidden">
            <div className="flex items-center justify-between mb-8">
              <img src={logo} alt="Logo" className="h-8" />
              <button onClick={() => setIsMenuOpen(false)} className="text-white text-3xl hover:text-[#F56E0F] cursor-pointer">
                <FiX />
              </button>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {navLinks.map((item) => (
                <RouterLink
                  key={item.name}
                  to={`/${item.name.toLowerCase()}`}
                  className="w-full text-lg text-white py-2 px-3 rounded-lg hover:bg-[#232323] transition-colors text-left"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </RouterLink>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-auto">
              <RouterLink
                to="/help-center"
                className="w-full flex items-center gap-2 py-3 px-3 rounded-lg hover:bg-[#242424] hover:text-[#F56E0F] bg-[#18171a] cursor-pointer border border-[#323333] text-white text-base font-medium mb-2"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <MdSupportAgent className="w-5 h-5" /> Help Center
              </RouterLink>
              <RouterLink
                to="/signup"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMenuOpen(false)}
                className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-orange-100"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFE5B4_0%,#FF8C00_50%,#FFE5B4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl  bg-[#18171a] px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Sign Up
                </span>
              </RouterLink>
            </div>
          </nav>
        </>
      )}
    </Navbar>
  );
}

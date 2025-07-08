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
            image: "/images/products.jpg",
            href: "/products/adam",
          },
          {
            title: "Scorpion",
            description: "AI powered robot bartender that provides strikingly good beverage service.",
            image: "/images/products.jpg",
            href: "/products/scorpion",
          },
          {
            title: "Explore rental options",
            description: "",
            image: "/images/products.jpg",
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
            image: "/images/products.jpg",
            href: "/products/wally",
          },
          {
            title: "Rover",
            description: "All-terrain delivery bot for last-mile logistics and outdoor tasks.",
            image: "/images/products.jpg",
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
            image: "/images/products.jpg",
            href: "/products/neatbot",
          },
          {
            title: "Tidy",
            description: "Compact cleaning bot perfect for small offices and retail spaces.",
            image: "/images/products.jpg",
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
            image: "/images/products.jpg",
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
            image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/design/system",
            },
            {
              title: "UX Research Bot",
              description: "Automate user research and gather insights with our AI-powered bot.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/design/logobot",
            },
            {
              title: "StyleScout",
              description: "Generate complete brand style guides, from colors to fonts.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/dev/code-assistant",
            },
            {
              title: "QA Bot",
              description: "Automated testing with our intelligent QA bot to ensure quality.",
              image: "/images/products.jpg",
              href: "/dev/qa-bot",
            },
             {
              title: "Explore our APIs",
              description: "",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/dev/bughunter",
            },
            {
              title: "TestGrid",
              description: "Run thousands of parallel tests on our distributed bot network.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/solutions/manufacturing",
            },
            {
              title: "Logistics & Warehousing",
              description: "Streamline your supply chain with our autonomous delivery bots.",
              image: "/images/products.jpg",
              href: "/solutions/logistics",
            },
            {
              title: "Explore All Industries",
              description: "",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/solutions/material-handling",
            },
            {
              title: "Inspection & Monitoring",
              description: "High-precision robots for quality control and surveillance.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/technology/ai-ml",
            },
            {
              title: "Computer Vision",
              description: "Enabling robots to perceive and understand the world.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/platform/os",
            },
            {
              title: "Real-time Kernel",
              description: "Ensuring microsecond precision for critical operations.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
              href: "/platform/api",
            },
            {
              title: "Explore API Documentation",
              description: "Your comprehensive guide to building with our platform.",
              image: "/images/products.jpg",
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
              image: "/images/products.jpg",
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
        className={`h-13 w-13 flex justify-center items-center rounded-xl bg-[#18171a] backdrop-blur-md  border transition-colors duration-200
          ${open ? 'border-[#ff9900]' : 'border-[#323333]'}
          hover:bg-[#242424] focus:border-[#ff9900]`}
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
        <div className="absolute right-0 mt-2 w-40 bg-[#18171a]/70 backdrop-blur-md border border-[#323222] rounded-xl rounded-tr-none shadow-2xl z-50 animate-fadeIn">
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
            <img src={logo} alt="Logo" className="h-12 w-auto mr-2" />
          </RouterLink>
          
        </NavbarBrand>
      </NavbarContent>
      {/* navlink section */}
      <NavbarContent className="hidden ml-10 text-white pl-8 pr-6 py-3 bg-[#18171a]/60 backdrop-blur-md border rounded-xl border-[#323333] md:flex gap-2 relative" justify="center">
        {/* Nav Links */}
        {navLinks.map(link => (
          <NavbarItem key={link.name}>
            {['About', 'Career'].includes(link.name) ? (
              <RouterLink
                to={`/${link.name.toLowerCase()}`}
                className={`flex items-center gap-1 font-medium text-lg text-white transition-colors duration-200 py-2 rounded-lg px-2 ${openDropdown === link.name ? 'text-[#ff9900]' : 'text-white'} hover:text-[#ff9900]`}
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </RouterLink>
            ) : (
              <button
                className={`
                  flex items-center gap-1 font-medium text-white text-lg
                  transition-colors duration-200 py-2 rounded-lg px-2
                  ${openDropdown === link.name ? 'text-[#ff9900]' : 'text-white'}
                  hover:text-[#ff9900]
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
        {/* Search Icon */}
        <NavbarItem>
          <button
            className={`size-11 cursor-pointer ml-2 flex justify-center items-center rounded-xl   border transition-colors duration-200
              ${searchOpen ? 'border-[#ff9900] text-[#ff9900]' : 'border-[#323333] text-white'}
              hover:bg-[#242424] hover:text-[#ff9900] focus:border-[#ff9900] focus:text-[#ff9900]`
            }
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <FiSearch className="w-6 h-6" />
          </button>
        </NavbarItem>
        {/* Search Overlay */}
        <div
          className={`absolute top-0 left-0 right-0 h-full flex items-center bg-[#18171a] z-30 transition-opacity duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} rounded-xl`}
          style={{ willChange: 'opacity' }}
        >
          <form className="flex flex-1 items-center rounded-r-3xl " onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); }}>
            <PlaceholdersAndVanishInput
              placeholders={roboticsPlaceholders}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
              }}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setSearchOpen(false);
              }}
            />
          </form>
          <button
            className="ml-2 mr-3 flex items-center cursor-pointer justify-center rounded-xl bg-[#18171a]/20 border border-[#323333] text-white hover:bg-[#242424] hover:text-[#ff9900]  size-10"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            tabIndex={searchOpen ? 0 : -1}
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
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
                <div className="w-[65%] bg-white/25 backdrop-blur-2xl p-6 rounded-r-xl">
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
              className={`size-13 flex justify-center items-center rounded-xl bg-[#18171a]/60 backdrop-blur-md border transition-colors duration-200
                border-[#323333] text-white hover:bg-[#242424] hover:text-[#ff9900] focus:border-[#ff9900] focus:text-[#ff9900]`
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
            <button className="relative inline-flex h-13 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-orange-100">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff9900_0%,#082F61_50%,#ff9900_100%)]" />
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

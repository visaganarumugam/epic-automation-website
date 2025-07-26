import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import { Sling as Hamburger } from 'hamburger-react';
import { MdSupportAgent } from 'react-icons/md';
import { FiSearch, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import ReactCountryFlag from 'react-country-flag';
import { useState, useRef, useEffect } from 'react';
import logo from '/images/logo.png';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input';
import { sectionIndex } from '../sectionIndex';


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
  Services: {
    tabs: [
      {
        name: "Service",
        items: [
          {
            title: "Our Services",
            description: "Explore our comprehensive range of automation and robotics services.",
            image: "/images/products.jpg",
            href: "/services",
            isPromo: true,
          },
        ],
      },
      {
        name: "Robotics & Automation",
        items: [
          {
            title: "Machine Tending",
            description: "Automate the Load , Elevate.",
            image: "/images/navdropimages/MachineTending.png",
            href: "/products/adam",
          },
          {
            title: "Palletizing",
            description: "Automated Palletizing.",
            image: "/images//navdropimages/Palletizing.png",
            href: "/products/scorpion",
          },
          {
            title: "Deburring",
            description: "Precision Finishing for Peak",
            image: "/images/navdropimages/deburring.png",
            href: "/rentals",
            isPromo: true,
          },
        ],
      },
      { 
        name: "Special Purpose Machine (SPM) ", 
        items: [
          {
            title: "CNC Automations",
            description: "Consistent, Reliable. CNC Done Right.",
            image: "/images/products.jpg",
            href: "/products/wally",
          },
          {
            title: "Packaging machine",
            description: "Consistent Packing, Every Single Time. Efficiency Engineered nto Every Machine.",
            image: "/images/products.jpg",
            href: "/products/rover",
          },
        ] 
      },
      { 
        name: "SCADA", 
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
        name: "Custom Panel Design & Manufacturing", 
        items: [
          {
            title: "Precision in Design, Power in Control. Panels Built to Perform, Engineered to Last.",
            description: "",
            image: "/images/products.jpg",
            href: "/products",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "Robot Programming Services", 
        items: [
          {
            title: "Turning Code into Capability. Robots That Work the Way You Want.",
            description: "",
            image: "/images/products.jpg",
            href: "/rentals",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "PLC & HMI Programming Services", 
        items: [
          {
            title: "From Logic to Touch – Total Control. We Program the Brains and the Face of Automation",
            description: "",
            image: "/images/products.jpg",
            href: "/rentals",
            isPromo: true,
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
  { name: 'Home', dropdown: false },
  { name: 'Services', dropdown: true },
  { name: 'Career', dropdown: true },
  { name: 'About', dropdown: false },
  { name: 'Contact Us', dropdown: false },
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
        className={`h-13 w-13 flex justify-center items-center rounded-xl bg-[#18171a]/50 backdrop-blur-md  border transition-colors duration-200
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
        <div className="absolute right-0 mt-2 w-40 bg-[#18171a] backdrop-blur-md border border-[#323222] rounded-xl rounded-tr-none shadow-2xl z-50 animate-fadeIn">
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
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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
    setDropdownHovered(true);
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

  // Search bar: update suggestions as user types
  useEffect(() => {
    if (searchValue.trim() === '') {
      setSuggestions([]);
      setSelectedIndex(0);
      return;
    }
    const val = searchValue.toLowerCase();
    const filtered = sectionIndex.filter(
      s =>
        s.label.toLowerCase().includes(val) ||
        s.keywords.some(k => k.toLowerCase().includes(val)) ||
        s.page.replace('/', '').replace('-', ' ').toLowerCase().includes(val)
    );
    
    // Sort by relevance: exact matches first, then partial matches
    const sorted = filtered.sort((a, b) => {
      const aExact = a.label.toLowerCase() === val || a.keywords.some(k => k.toLowerCase() === val);
      const bExact = b.label.toLowerCase() === val || b.keywords.some(k => k.toLowerCase() === val);
      
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      
      // If both are exact or both are partial, sort by label length (shorter first)
      return a.label.length - b.label.length;
    });
    
    setSuggestions(sorted.slice(0, 10)); // Limit to 10 suggestions
    setSelectedIndex(0); // Reset selection when suggestions change
    
    // Auto-open search if suggestions are found and search is not open
    if (sorted.length > 0 && !searchOpen) {
      setSearchOpen(true);
    }
  }, [searchValue, searchOpen]);

  // Handle search submit or suggestion click
  const handleSearchGo = (section: any) => {
    if (!section) return;
    
    // Navigate to the page first if not already there
    if (location.pathname !== section.page) {
      navigate(section.page + '#' + section.id);
    } else {
      // Already on page, just scroll to section
      setTimeout(() => {
        const el = document.getElementById(section.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add a subtle highlight effect
          el.style.transition = 'box-shadow 0.3s ease';
          el.style.boxShadow = '0 0 0 4px rgba(255, 153, 0, 0.3)';
          setTimeout(() => {
            el.style.boxShadow = '';
          }, 2000);
        }
      }, 100);
    }
    
    setSearchOpen(false);
    setSearchValue('');
    setSuggestions([]);
    setSelectedIndex(0);
  };

  // On Enter in search bar
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        handleSearchGo(suggestions[selectedIndex]);
      } else if (searchValue.trim() !== '') {
        // If no suggestions but user typed something, try to find a match
        const val = searchValue.toLowerCase();
        const match = sectionIndex.find(s =>
          s.label.toLowerCase() === val ||
          s.keywords.some(k => k.toLowerCase() === val) ||
          s.page.replace('/', '').replace('-', ' ').toLowerCase() === val
        );
        if (match) {
          handleSearchGo(match);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Escape') {
      setSearchOpen(false);
      setSearchValue('');
      setSuggestions([]);
      setSelectedIndex(0);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSearchValue(suggestions[selectedIndex].label);
        setSelectedIndex(0);
      }
    }
  };

  // Scroll to section for Services dropdown
  // const handleServicesDropdownClick = (sectionId: string) => {
  //   if (location.pathname !== '/services') {
  //     navigate(`/services#${sectionId}`);
  //   } else {
  //     setTimeout(() => {
  //       const el = document.getElementById(sectionId);
  //       if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }, 100);
  //   }
  //   setOpenDropdown(null);
  // };

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
          <RouterLink to="/home">
            <img src={logo} alt="Logo" className="h-12 w-auto mr-2" /> 
          </RouterLink>
          
        </NavbarBrand>
      </NavbarContent>
      {/* navlink section */}
      <NavbarContent className="hidden ml-10 text-white pl-8 pr-6 py-2 bg-[#18171a]/60 backdrop-blur-md border rounded-xl border-[#323333] md:flex gap-2 relative" justify="center">
        {/* Nav Links */}
        {navLinks.map(link => (
          <NavbarItem key={link.name}>
            {['Home' , 'About', 'Career' , 'Contact Us'].includes(link.name) ? (
              <RouterLink
                to={link.name === 'Contact Us' ? '/help-center' : `/${link.name.toLowerCase()}`}
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
            className={`size-11 cursor-pointer ml-2 flex justify-center items-center rounded-xl   transition-colors duration-200
              ${searchOpen ? 'border-[#ff9900] text-[#ff9900]' : 'bg-black/40 text-white'}
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
          <form className="flex flex-1 items-center rounded-r-3xl " onSubmit={e => { e.preventDefault(); if (suggestions.length > 0) handleSearchGo(suggestions[0]); }}>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-white text-lg px-4 py-2 pr-20"
              placeholder="Type to search pages & sections... (↑↓ to navigate, Enter to go)"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              autoFocus
            />
            {/* Keyboard shortcut indicator */}
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded border border-gray-600">
              Ctrl+K
            </div>
          </form>
          {/* Suggestions dropdown */}
          {searchOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#18171a] border border-[#323333] rounded-b-xl shadow-2xl z-50 max-h-80 overflow-y-auto">
              {searchValue.trim() !== '' ? (
                suggestions.length > 0 ? (
                  suggestions.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`px-4 py-3 text-white cursor-pointer text-base border-b border-[#323333] last:border-b-0 transition-colors duration-200 ${
                        idx === selectedIndex ? 'bg-[#ff9900]/20' : 'hover:bg-[#ff9900]/20'
                      }`}
                      onClick={() => handleSearchGo(s)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#ff9900]/20 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#ff9900]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">{s.label}</div>
                            <div className="text-xs text-gray-400 mt-1">
                              {s.page === '/home' ? 'Homepage' : s.page.replace('/', '').replace('-', ' ').replace(/\b\w/g, (l: any) => l.toUpperCase())}
                              {s.id !== s.page.replace('/', '') && ` • ${s.id.replace('-', ' ').replace(/\b\w/g, (l: any) => l.toUpperCase())}`}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <span>{idx === selectedIndex ? 'Press Enter' : 'Click'}</span>
                          {idx === selectedIndex && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-gray-400 text-sm">No results found for "{searchValue}"</p>
                    <p className="text-gray-500 text-xs mt-1">Try different keywords or page names</p>
                  </div>
                )
              ) : (
                <div className="p-4">
                  <div className="text-sm text-gray-400 mb-3">Popular Pages & Sections</div>
                  {sectionIndex.slice(0, 8).map((s, idx) => (
                    <div
                      key={s.id}
                      className={`px-3 py-2 text-white cursor-pointer text-sm border-b border-[#323333] last:border-b-0 transition-colors duration-200 ${
                        idx === selectedIndex ? 'bg-[#ff9900]/20' : 'hover:bg-[#ff9900]/20'
                      }`}
                      onClick={() => handleSearchGo(s)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[#ff9900]/20 rounded flex items-center justify-center">
                            <svg className="w-3 h-3 text-[#ff9900]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">{s.label}</div>
                            <div className="text-xs text-gray-400">
                              {s.page === '/home' ? 'Homepage' : s.page.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {idx === selectedIndex ? 'Press Enter' : 'Click'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
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
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[70vw] max-w-[900px] border border-[#323333] rounded-xl shadow-md flex transition-all duration-200 animate-fadeIn  z-50" 
            style={{ backgroundImage: "url('/images/navbardropdownimg.png')", backgroundSize: 'cover', backgroundPosition: 'center' , backdropFilter: 'blur(8px)' }}
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
                <div className="w-[35%] bg-[#0f4a69]  p-4 rounded-l-xl flex flex-col" >
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
                <div className="w-[65%] p-6 rounded-r-xl " >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full   gap-4 grid-auto-rows-fr">
                    {activeTabData?.items.map((item, idx) =>
                      item.isPromo ? (
                        <RouterLink to={item.href} key={idx} className="relative rounded-lg overflow-hidden h-full group col-span-1 md:col-span-2">
                          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/50"></div>
                          <div className="relative h-full flex flex-col justify-end p-4 text-white">
                              <h3 className="text-xl font-bold">{item.title}</h3>
                              <p className="text-white  text-md">{item.description}</p>
                              <div className="mt-4">
                                  <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black py-2 px-4 rounded-full group-hover:bg-gray-200 transition-colors">
                                      <span>{ item.title.includes('rental') ? 'Learn' : 'LEARN MORE'}</span>
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

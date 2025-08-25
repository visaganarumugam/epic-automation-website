import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import { Sling as Hamburger } from 'hamburger-react';
import { MdSupportAgent } from 'react-icons/md';
import { FiSearch, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import logo from '/images/logo.png';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
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
            description: "Automate the Load, Elevate Performance",
            image: "/images/navdropimages/MachineTending.png",
            href: "/services#robotics-automation",
            isPromo: true,
          },
          {
            title: "Palletizing",
            description: "Automated Palletizing Solutions",
            image: "/images/navdropimages/Palletizing.png",
            href: "/services#robotics-automation",
            isPromo: true,
          },
          {
            title: "Deburring",
            description: "Precision Finishing for Peak Performance",
            image: "/images/navdropimages/deburring.png",
            href: "/services#robotics-automation",
            isPromo: true,
          },
        ],
      },
      { 
        name: "Special Purpose Machine (SPM)", 
        items: [
          {
            title: "CNC Automations",
            description: "Consistent, Reliable. CNC Done Right.",
            image: "/images/navdropimages/CNC_Automation.jpg",
            href: "/services#special-purpose-machine",
            isPromo: true,
          },
          {
            title: "Packaging Machine",
            description: "Consistent Packing, Every Single Time. Efficiency Engineered into Every Machine.",
            image: "/images/Packing_Machine.jpg",
            href: "/services#special-purpose-machine",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "SCADA", 
        items: [
           {
            title: "SCADA Systems",
            description: "Advanced monitoring and control systems for industrial automation.",
            image: "/images/products.jpg",
            href: "/services#scada",
            isPromo: true,
          },
          {
            title: "HMI Solutions",
            description: "Human-Machine Interface solutions for seamless operation control.",
            image: "/images/products.jpg",
            href: "/services#scada",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "Custom Panel Design & Manufacturing", 
        items: [
          {
            title: "Precision in Design, Power in Control. Panels Built to Perform, Engineered to Last.",
            description: "Custom control panels designed for your specific automation needs.",
            image: "/images/Automation-Control-Panels.jpg",
            href: "/services#custom-panel-design",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "Robot Programming Services", 
        items: [
          {
            title: "Turning Code into Capability. Robots That Work the Way You Want.",
            description: "Expert robot programming for optimal performance and efficiency.",
            image: "/images/Robot_Programming.jpg",
            href: "/services#robot-programming",
            isPromo: true,
          },
        ] 
      },
      { 
        name: "PLC & HMI Programming Services", 
        items: [
          {
            title: "From Logic to Touch – Total Control. We Program the Brains and the Face of Automation",
            description: "Complete PLC and HMI programming solutions for industrial automation.",
            image: "/images/plc_and_hmi.jpg",
            href: "/services#plc-hmi-programming",
            isPromo: true,
          },
        ] 
      },
    ],
  },
  
};

const navLinks = [
  { name: 'Home', dropdown: false },
  { name: 'Services', dropdown: true },
  { name: 'Career', dropdown: false },
  { name: 'About', dropdown: false },
  { name: 'Contact Us', dropdown: false },
];

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
    function handleClick(event: MouseEvent) {
      const target = event.target as Element;
      const dropdown = document.querySelector('[data-dropdown="services"]');
      const navbarItem = document.querySelector('[data-navbar-item="services"]');
      
      if (dropdown && !dropdown.contains(target) && navbarItem && !navbarItem.contains(target)) {
        setOpenDropdown(null);
      }
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
    }, 150);
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

  // Handle Services dropdown navigation
  const handleServicesDropdownClick = (href: string) => {
    const [path, hash] = href.split('#');
    
    if (location.pathname !== path) {
      // Navigate to the page first, then scroll to section after navigation
      navigate(path);
      // Use a timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add a subtle highlight effect
          el.style.transition = 'box-shadow 0.3s ease';
          el.style.boxShadow = '0 0 0 4px rgba(255, 153, 0, 0.3)';
          setTimeout(() => {
            el.style.boxShadow = '';
          }, 2000);
        }
      }, 500); // Increased delay to ensure page loads
    } else {
      // Already on the page, scroll to section
      setTimeout(() => {
        const el = document.getElementById(hash);
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
    setOpenDropdown(null);
  };

  return (
    <Navbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen} 
      isBordered={false} 
      isBlurred={false} 
      className={`w-[99%] mx-1 sm:mx-2 fixed top-1  py-2 rounded-xl transition-all duration-300 z-50 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`} 
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarBrand>
          <RouterLink to="/home">
            <img src={logo} alt="Logo" className="h-13 w-full rounded-2xl p-2 sm:px-4  " /> 
          </RouterLink>
          
        </NavbarBrand>
      </NavbarContent>
      {/* navlink section */}
      <NavbarContent className="hidden text-white pl-8 pr-6 py-2 bg-[#18171a]/60 backdrop-blur-md border rounded-xl border-[#323333] md:flex gap-2 relative" justify="center">
        {/* Nav Links */}
        {navLinks.map(link => (
          <NavbarItem key={link.name}>
            {['Home' , 'About', 'Career' , 'Contact Us'].includes(link.name) ? (
              <RouterLink
                to={link.name === 'Contact Us' ? '/help-center' : `/${link.name.toLowerCase()}`}
                className={`flex items-center gap-1 font-medium text-lg transition-colors duration-200 py-2 rounded-lg px-2 ${
                  openDropdown === link.name 
                    ? 'text-[#ff9900]' 
                    : location.pathname === (link.name === 'Contact Us' ? '/help-center' : `/${link.name.toLowerCase()}`)
                    ? 'text-[#ff9900]'
                    : 'text-white hover:text-[#ff9900]'
                }`}
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </RouterLink>
            ) : (
              <button
                className={`
                  flex items-center gap-1 font-medium text-lg
                  transition-colors duration-200 py-2 rounded-lg px-2
                  ${openDropdown === link.name 
                    ? 'text-[#ff9900]' 
                    : location.pathname === '/services'
                    ? 'text-[#ff9900]'
                    : 'text-white hover:text-[#ff9900]'
                  }
                `}
                onClick={() => link.dropdown && handleTabClick(link)}
                onMouseEnter={() => link.dropdown && handleDropdownMouseEnter(link)}
                onMouseLeave={() => link.dropdown && handleDropdownMouseLeave()}
                type="button"
                data-navbar-item={link.name.toLowerCase()}
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
            className="absolute left-1/2 bg-[#ffe7b6] backdrop-blur-2xl -translate-x-1/2 top-full mt-2 w-[70vw] max-w-[900px] border border-[#323333] rounded-xl shadow-2xl flex transition-all duration-300 animate-fadeIn z-50" 
           
            onMouseEnter={() => {
              if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
              setDropdownHovered(true);
            }}
            onMouseLeave={handleDropdownMouseLeave}
            data-dropdown={openDropdown.toLowerCase()}
          >
            {(() => {
              const linkData = dropdownContent[openDropdown as keyof typeof dropdownContent];
              if (!linkData) return null;
              
              const activeTabData: DropdownTab | undefined = linkData.tabs.find(t => t.name === activeTab);

              return <>
                <div className="w-[35%] bg-[#0f4a69]/90 backdrop-blur-sm p-4 rounded-l-xl flex flex-col" >
                    {linkData.tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onMouseEnter={() => setActiveTab(tab.name)}
                            className="block w-full text-left text-white text-lg py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-[#1d5266]/80"
                        >
                            <span className={`${activeTab === tab.name ? 'font-bold' : ''}`}>{tab.name}</span>
                            {activeTab === tab.name && (
                                <div className="h-0.5 w-10 bg-cyan-400 mt-1" />
                            )}
                        </button>
                    ))}
                </div>
                <div className="w-[65%] p-6 rounded-r-xl" >
                  <div className="grid grid-cols-1 h-full gap-4">
                    {activeTabData?.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`relative rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer ${
                          activeTabData.items.length === 1 ? 'h-full' : 'h-48'
                        }`}
                        onClick={() => handleServicesDropdownClick(item.href)}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="relative h-full flex flex-col justify-end p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-white/90 text-base mb-6 line-clamp-2">{item.description}</p>
                            <div className="mt-auto">
                                <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black py-3 px-6 rounded-full group-hover:bg-gray-200 transition-colors duration-200">
                                    <span>LEARN MORE</span>
                                    <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1"/>
                                </div>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>;
            })()}
          </div>
        )}
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-2 items-center">
        
        {/* Help Center Icon */}
        <NavbarItem className="hidden md:flex">
          <RouterLink to="/help-center" style={{ textDecoration: 'none' }}>
            <button
              className={`w-35 h-13 flex justify-center cursor-pointer gap-2 items-center rounded-xl bg-[#18171a]/60 backdrop-blur-md border transition-colors duration-200
                border-[#323333] text-white hover:bg-[#242424] hover:text-[#ff9900] focus:border-[#ff9900] focus:text-[#ff9900]`
              }
              aria-label="Help Center"
            >
              <MdSupportAgent className="w-5 h-5" /> Help Center
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
            <div className="flex items-center justify-between mb-6">
              <img src={logo} alt="Logo" className="h-6 w-10  sm:w-15 sm:h-8" />
              <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl sm:text-3xl hover:text-[#F56E0F] cursor-pointer">
                <FiX />
              </button>
            </div>
            
            {/* Mobile Search */}
            <div className="mb-6">
              <div className="relative w-full border border-[#323222] focus-within:border-orange-500 transition-colors rounded-lg">
                <form className="flex items-center" onSubmit={e => { e.preventDefault(); if (suggestions.length > 0) handleSearchGo(suggestions[0]); }}>
                  <input
                    type="text"
                    className="flex-1 bg-transparent outline-none text-white text-base px-3 py-2 pr-10"
                    placeholder="Search pages & sections..."
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    autoFocus
                  />
                  <FiSearch
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => {
                      if (suggestions.length > 0) {
                        handleSearchGo(suggestions[0]);
                        setIsMenuOpen(false);
                      }
                    }}
                  />
                </form>
                
                {/* Mobile Search Suggestions */}
                {searchValue.trim() !== '' && (
                  <div className="absolute top-full left-0 right-0 bg-[#18171a] border border-[#323333] rounded-b-lg shadow-2xl z-50 max-h-60 overflow-y-auto mt-1">
                    {suggestions.length > 0 ? (
                      suggestions.map((s, idx) => (
                        <div
                          key={s.id}
                          className={`px-3 py-2 text-white cursor-pointer text-sm border-b border-[#323333] last:border-b-0 transition-colors duration-200 ${
                            idx === selectedIndex ? 'bg-[#ff9900]/20' : 'hover:bg-[#ff9900]/20'
                          }`}
                          onClick={() => {
                            handleSearchGo(s);
                            setIsMenuOpen(false);
                          }}
                          onMouseEnter={() => setSelectedIndex(idx)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-[#ff9900]/20 rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-[#ff9900]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-sm">{s.label}</div>
                              <div className="text-xs text-gray-400">
                                {s.page === '/home' ? 'Homepage' : s.page.replace('/', '').replace('-', ' ').replace(/\b\w/g, (l: any) => l.toUpperCase())}
                                {s.id !== s.page.replace('/', '') && ` • ${s.id.replace('-', ' ').replace(/\b\w/g, (l: any) => l.toUpperCase())}`}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p className="text-gray-400 text-xs">No results found for "{searchValue}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8">
              {navLinks.map((item) => (
                <RouterLink
                  key={item.name}
                  to={item.name === 'Contact Us' ? '/help-center' : `/${item.name.toLowerCase()}`}
                  className={`w-full text-lg sm:text-xl py-4 px-6 rounded-lg transition-colors text-left ${
                    location.pathname === (item.name === 'Contact Us' ? '/help-center' : `/${item.name.toLowerCase()}`)
                      ? 'text-[#ff9900] bg-[#232323]'
                      : 'text-white hover:bg-[#232323]'
                  }`}
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                </RouterLink>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-auto">
              <RouterLink
                to="/help-center"
                className="w-full flex items-center gap-2 py-2 sm:py-3 px-3 rounded-lg hover:bg-[#242424] hover:text-[#F56E0F] bg-[#18171a] cursor-pointer border border-[#323333] text-white text-sm sm:text-base font-medium mb-2"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <MdSupportAgent className="w-4 h-4 sm:w-5 sm:h-5" /> Help Center
              </RouterLink>

            </div>
          </nav>
        </>
      )}
    </Navbar>
  );
}

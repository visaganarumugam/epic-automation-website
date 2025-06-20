import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";
import { Sling as Hamburger } from 'hamburger-react';
import { MdSupportAgent } from 'react-icons/md';
import { FiSearch, FiX, FiChevronDown } from 'react-icons/fi';
import ReactCountryFlag from 'react-country-flag';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import productsImage from '../assets/images/products.jpg';
import designImage from '../assets/images/design.jpg';
import solutionsImage from '../assets/images/solutions.jpg';
import { Link as RouterLink } from 'react-router-dom';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input';


const languageOptions = [
  { value: 'english', label: 'English', code: 'GB' },
  { value: 'tamil', label: 'Tamil', code: 'IN' },
  { value: 'arabic', label: 'Arabic', code: 'SA' },
];

const navLinks = [
  { name: 'Products', dropdown: true, img: productsImage, teams: ['Agencies', 'Sales', 'Success', 'Marketing', 'Designers'], decks: ['Presentation Maker', 'Pitch Decks', 'Sales Decks', 'Team Meetings', 'Board Decks'] },
  { name: 'Design', dropdown: true, img: designImage, teams: ['UI/UX', 'Branding', 'Illustrators', 'Animators', 'Editors'], decks: ['Design Templates', 'Mood Boards', 'Brand Decks', 'Portfolio Decks', 'Creative Reviews'] },
  { name: 'Development', dropdown: true, img: solutionsImage, teams: ['Developers', 'QA', 'DevOps', 'Product Managers', 'Testers'], decks: ['API Docs', 'Release Notes', 'Sprint Decks', 'Tech Demos', 'Integration Guides'] },
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
    <div ref={ref} className="relative">
      <button
        className={`h-12 w-12 flex justify-center items-center rounded-xl bg-[#18171a] border transition-colors duration-200
          ${open ? 'border-[#F56E0F]' : 'border-[#323333]'}
          hover:bg-[#242424] focus:border-[#F56E0F]`}
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

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  let closeDropdownTimeout: number | null = null;

  // Focus search input when searchOpen
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
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
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered isBlurred={false} className="py-2 px-2" maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <RouterLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          </RouterLink>
          
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden text-white pl-8 pr-6 py-2 bg-[#18171a] border rounded-xl border-[#323333] md:flex gap-2 relative" justify="center">
        {navLinks.map(link => (
          <NavbarItem key={link.name}>
            {['About', 'Career'].includes(link.name) ? (
              <RouterLink
                to={`/${link.name.toLowerCase()}`}
                className={`flex items-center gap-1 font-medium text-white transition-colors duration-200 py-2 rounded-lg px-2 ${openDropdown === link.name ? 'text-[#F56E0F]' : 'text-white'} hover:text-[#F56E0F]`}
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </RouterLink>
            ) : (
              <button
                className={`
                  flex items-center gap-1 font-medium text-white
                  transition-colors duration-200 py-2 rounded-lg px-2
                  ${openDropdown === link.name ? 'text-[#F56E0F]' : 'text-white'}
                  hover:text-[#F56E0F]
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
            className={`size-10 ml-2 flex justify-center items-center rounded-xl bg-[#18171a] border transition-colors duration-200
              ${searchOpen ? 'border-[#F56E0F] text-[#F56E0F]' : 'border-[#323333] text-white'}
              hover:bg-[#242424] hover:text-[#F56E0F] focus:border-[#F56E0F] focus:text-[#F56E0F]`
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
            className="absolute left-0 top-full mt-2 w-full bg-[#18171a] border border-[#232323] focus-within:border-orange-500 transition-colors rounded-xl shadow-2xl flex items-center px-1 py-1 animate-fadeIn z-40"
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
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-orange-400 transition-colors"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <FiX />
              </button>
            </div>
          </div>
        )}
        
        {/* Dropdown Menu */}
        {openDropdown && navLinks.find(l => l.name === openDropdown)?.dropdown && (
          <div
            className="absolute left-0 top-full mt-2 w-full bg-[#18171a] border border-[#F56E0F] rounded-xl shadow-2xl flex z-40 transition-all duration-200 animate-fadeIn"
            onMouseEnter={() => setDropdownHovered(true)}
            onMouseLeave={handleDropdownMouseLeave}
          >
            {/* Dropdown content for openDropdown */}
            {(() => {
              const link = navLinks.find(l => l.name === openDropdown);
              if (!link) return null;
              return <>
                <div className="flex flex-col items-center border-r-4 border-[#F56E0F] p-6 min-w-[200px] max-w-[320px]">
                  <RouterLink
                    to={`/${link.name.toLowerCase()}`}
                    className="text-xl font-bold text-white text-center mb-2 hover:text-[#F56E0F] transition-colors"
                    style={{ textDecoration: 'none' }}
                    onClick={() => setTimeout(() => setOpenDropdown(null), 100)}
                  >
                    {link.name}
                  </RouterLink>
                  <img src={link.img} alt={link.name} className="w-[180px] h-[110px] object-cover rounded-lg mt-2" />
                </div>
                <div className="flex-1 flex items-start justify-center p-6">
                  <div className="flex gap-8">
                    <div>
                      <div className="text-white font-bold uppercase text-xs mb-2">TEAMS</div>
                      {link.teams?.map(item => (
                        <div key={item} className="text-white text-base py-1 hover:text-[#F56E0F] cursor-pointer transition-colors">{item}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-bold uppercase text-xs mb-2">DECKS</div>
                      {link.decks?.map(item => (
                        <div key={item} className="text-white text-base py-1 hover:text-[#F56E0F] cursor-pointer transition-colors">{item}</div>
                      ))}
                    </div>
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
              className={`size-12 flex justify-center items-center rounded-xl bg-[#18171a] border transition-colors duration-200
                border-[#323333] text-white hover:bg-[#242424] hover:text-[#F56E0F] focus:border-[#F56E0F] focus:text-[#F56E0F]`
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
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFE5B4_0%,#FF8C00_50%,#FFE5B4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl  bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Sign Up
              </span>
            </button>
          </RouterLink>
        </NavbarItem>
        {/* Hamburger Menu Toggle */}
        <NavbarItem className="md:hidden bg-[#18171a] border border-[#323333] text-white hover:bg-[#242424] hover:text-[#F56E0F] focus:border-[#F56E0F] focus:text-[#F56E0F] rounded-xl">
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

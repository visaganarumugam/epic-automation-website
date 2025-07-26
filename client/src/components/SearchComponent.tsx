import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sectionIndex } from '../sectionIndex';
import { FiSearch, FiX, FiArrowRight, FiHome, FiSettings, FiUsers, FiHelpCircle, FiFileText } from 'react-icons/fi';
import { useSearchAnalytics } from './SearchAnalytics';

interface SearchResult {
  id: string;
  label: string;
  keywords: string[];
  page: string;
  category: string;
  icon: React.ReactNode;
}

const getCategoryIcon = (page: string) => {
  switch (page) {
    case '/home':
      return <FiHome className="w-5 h-5" />;
    case '/services':
      return <FiSettings className="w-5 h-5" />;
    case '/about':
      return <FiUsers className="w-5 h-5" />;
    case '/help-center':
      return <FiHelpCircle className="w-5 h-5" />;
    default:
      return <FiFileText className="w-5 h-5" />;
  }
};

const getCategoryName = (page: string) => {
  switch (page) {
    case '/home':
      return 'Homepage';
    case '/services':
      return 'Services';
    case '/about':
      return 'About';
    case '/career':
      return 'Career';
    case '/help-center':
      return 'Help Center';
    case '/design':
      return 'Design';
    case '/development':
      return 'Development';
    case '/products':
      return 'Products';
    case '/privacy-policy':
      return 'Privacy Policy';
    case '/terms-and-conditions':
      return 'Terms & Conditions';
    case '/signup':
      return 'Sign Up';
    case '/profile':
      return 'Profile';
    default:
      return page.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
};

export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { trackSearch, analytics } = useSearchAnalytics();

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchValue.trim() === '') {
      setResults([]);
      setSelectedIndex(0);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const val = searchValue.toLowerCase();
    
    const filtered = sectionIndex
      .map(section => ({
        ...section,
        category: getCategoryName(section.page),
        icon: getCategoryIcon(section.page)
      }))
      .filter(section =>
        section.label.toLowerCase().includes(val) ||
        section.keywords.some(k => k.toLowerCase().includes(val)) ||
        section.category.toLowerCase().includes(val)
      );

    // Sort by relevance
    const sorted = filtered.sort((a, b) => {
      const aExact = a.label.toLowerCase() === val || a.keywords.some(k => k.toLowerCase() === val);
      const bExact = b.label.toLowerCase() === val || b.keywords.some(k => k.toLowerCase() === val);
      
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      
      return a.label.length - b.label.length;
    });

    setResults(sorted);
    setSelectedIndex(0);
    setIsSearching(false);
    
    // Track search analytics
    if (searchValue.trim() !== '') {
      trackSearch(searchValue, sorted.length > 0);
    }
  }, [searchValue, trackSearch]);

  const handleSearch = (result: SearchResult) => {
    if (location.pathname !== result.page) {
      navigate(result.page + '#' + result.id);
    } else {
      setTimeout(() => {
        const el = document.getElementById(result.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSearch(results[selectedIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Escape') {
      setSearchValue('');
      setResults([]);
      setSelectedIndex(0);
    }
  };

  const popularSearches = analytics.popularSearches.length > 0 
    ? analytics.popularSearches.slice(0, 8).map(item => item.term)
    : [
        'robotics automation',
        'services',
        'about us',
        'contact',
        'career',
        'why epic',
        'our mission',
        'client logos'
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-start pt-20 px-4">
      {/* Search Header */}
      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-4">
          Search Epic Automations
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Find pages, sections, and information across our website
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-2xl mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="h-6 w-6 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            className="block w-full pl-12 pr-12 py-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Search for pages, sections, or keywords..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchValue && (
            <button
              onClick={() => {
                setSearchValue('');
                setResults([]);
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {searchValue && (
        <div className="w-full max-w-4xl">
          {isSearching ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {results.map((result, idx) => (
                <div
                  key={result.id}
                  className={`px-6 py-4 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                    idx === selectedIndex ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleSearch(result)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {result.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{result.label}</h3>
                        <p className="text-sm text-gray-500">{result.category}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {result.keywords.slice(0, 3).map((keyword, keyIdx) => (
                            <span
                              key={keyIdx}
                              className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <FiArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FiSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No results found for "{searchValue}"</p>
              <p className="text-sm text-gray-500 mt-2">Try different keywords or check the spelling</p>
            </div>
          )}
        </div>
      )}

             {/* Popular Searches */}
       {!searchValue && (
         <div className="w-full max-w-4xl mt-8">
           <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Searches</h2>
           <div className="flex flex-wrap gap-2">
             {popularSearches.map((search, idx) => (
               <button
                 key={idx}
                 onClick={() => setSearchValue(search)}
                 className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
               >
                 {search}
               </button>
             ))}
           </div>
         </div>
       )}

       {/* Recent Searches */}
       {!searchValue && analytics.recentSearches.length > 0 && (
         <div className="w-full max-w-4xl mt-6">
           <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Searches</h2>
           <div className="flex flex-wrap gap-2">
             {analytics.recentSearches.slice(0, 6).map((search, idx) => (
               <button
                 key={idx}
                 onClick={() => setSearchValue(search)}
                 className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200"
               >
                 {search}
               </button>
             ))}
           </div>
         </div>
       )}

             {/* Search Tips */}
       {!searchValue && (
         <div className="w-full max-w-4xl mt-12">
           <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Tips</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h3 className="font-medium text-gray-900 mb-2">Use Keywords</h3>
               <p className="text-sm text-gray-600">Try searching for specific terms like "robotics", "automation", or "services"</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h3 className="font-medium text-gray-900 mb-2">Page Names</h3>
               <p className="text-sm text-gray-600">Search for page names like "About", "Contact", or "Career"</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h3 className="font-medium text-gray-900 mb-2">Section Names</h3>
               <p className="text-sm text-gray-600">Find specific sections like "Why Epic", "Our Mission", or "Client Logos"</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h3 className="font-medium text-gray-900 mb-2">Quick Navigation</h3>
               <p className="text-sm text-gray-600">Use arrow keys to navigate results and Enter to select</p>
             </div>
           </div>
         </div>
       )}

       {/* Search Analytics (Admin View) */}
       {!searchValue && analytics.totalSearches > 0 && (
         <div className="w-full max-w-4xl mt-8">
           <details className="bg-white rounded-lg border border-gray-200">
             <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
               Search Analytics (Click to expand)
             </summary>
             <div className="px-6 pb-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                 <div className="bg-blue-50 p-3 rounded-lg">
                   <div className="text-lg font-bold text-blue-600">{analytics.totalSearches}</div>
                   <div className="text-xs text-blue-600">Total Searches</div>
                 </div>
                 <div className="bg-green-50 p-3 rounded-lg">
                   <div className="text-lg font-bold text-green-600">{analytics.searchSuccessRate.toFixed(1)}%</div>
                   <div className="text-xs text-green-600">Success Rate</div>
                 </div>
                 <div className="bg-purple-50 p-3 rounded-lg">
                   <div className="text-lg font-bold text-purple-600">{analytics.popularSearches.length}</div>
                   <div className="text-xs text-purple-600">Unique Terms</div>
                 </div>
               </div>
             </div>
           </details>
         </div>
       )}
    </div>
  );
} 
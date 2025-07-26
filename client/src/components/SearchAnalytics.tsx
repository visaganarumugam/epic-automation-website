import React, { useState, useEffect } from 'react';

interface SearchAnalytics {
  totalSearches: number;
  popularSearches: { term: string; count: number }[];
  recentSearches: string[];
  searchSuccessRate: number;
}

export const useSearchAnalytics = () => {
  const [analytics, setAnalytics] = useState<SearchAnalytics>({
    totalSearches: 0,
    popularSearches: [],
    recentSearches: [],
    searchSuccessRate: 0
  });

  const trackSearch = (searchTerm: string, hasResults: boolean) => {
    const stored = localStorage.getItem('searchAnalytics');
    const data = stored ? JSON.parse(stored) : {
      searches: [],
      popularSearches: {},
      totalSearches: 0,
      successfulSearches: 0
    };

    // Add to recent searches
    const searches = [searchTerm, ...data.searches.filter((s: string) => s !== searchTerm)].slice(0, 10);
    
    // Update popular searches
    const popularSearches = { ...data.popularSearches };
    popularSearches[searchTerm] = (popularSearches[searchTerm] || 0) + 1;

    // Update counts
    const totalSearches = data.totalSearches + 1;
    const successfulSearches = data.successfulSearches + (hasResults ? 1 : 0);

    // Save to localStorage
    const newData = {
      searches,
      popularSearches,
      totalSearches,
      successfulSearches
    };
    localStorage.setItem('searchAnalytics', JSON.stringify(newData));

    // Update state
    const sortedPopular = Object.entries(popularSearches)
      .map(([term, count]) => ({ term, count: count as number }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    setAnalytics({
      totalSearches,
      popularSearches: sortedPopular,
      recentSearches: searches,
      searchSuccessRate: totalSearches > 0 ? (successfulSearches / totalSearches) * 100 : 0
    });
  };

  const getAnalytics = (): SearchAnalytics => {
    const stored = localStorage.getItem('searchAnalytics');
    if (stored) {
      const data = JSON.parse(stored);
      const sortedPopular = Object.entries(data.popularSearches)
        .map(([term, count]) => ({ term, count: count as number }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      return {
        totalSearches: data.totalSearches,
        popularSearches: sortedPopular,
        recentSearches: data.searches,
        searchSuccessRate: data.totalSearches > 0 ? (data.successfulSearches / data.totalSearches) * 100 : 0
      };
    }
    return analytics;
  };

  useEffect(() => {
    setAnalytics(getAnalytics());
  }, []);

  return { trackSearch, analytics };
};

export default function SearchAnalytics() {
  const { analytics } = useSearchAnalytics();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Analytics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{analytics.totalSearches}</div>
          <div className="text-sm text-blue-600">Total Searches</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{analytics.searchSuccessRate.toFixed(1)}%</div>
          <div className="text-sm text-green-600">Success Rate</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{analytics.popularSearches.length}</div>
          <div className="text-sm text-purple-600">Unique Terms</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Popular Searches</h4>
          <div className="space-y-2">
            {analytics.popularSearches.slice(0, 5).map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-700">{item.term}</span>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Recent Searches</h4>
          <div className="space-y-2">
            {analytics.recentSearches.slice(0, 5).map((search, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-700">{search}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
# Search Functionality Documentation

## Overview

The Epic Automations website now features a comprehensive search system that allows users to quickly find pages and sections across the website. The search functionality includes both a quick search in the navbar and a full-featured search page.

## Features

### 1. Quick Search (Navbar)
- **Location**: Top navigation bar
- **Access**: Click the search icon or press `Ctrl+K` (or `Cmd+K` on Mac)
- **Features**:
  - Real-time search suggestions
  - Keyboard navigation (arrow keys, Enter, Escape)
  - Search across pages and sections
  - Visual feedback with icons and categories
  - "No results" state with link to full search page

### 2. Full Search Page
- **URL**: `/search`
- **Access**: Click the full search button in navbar or navigate directly
- **Features**:
  - Google-like search interface
  - Popular searches based on user behavior
  - Recent searches history
  - Search tips and guidance
  - Search analytics (admin view)
  - Keyboard shortcuts
  - Responsive design

### 3. Search Analytics
- **Tracking**: All searches are tracked locally
- **Metrics**: Total searches, success rate, popular terms
- **Storage**: LocalStorage (client-side only)
- **Privacy**: No data sent to external servers

## How to Use

### Basic Search
1. **Quick Search**: Press `Ctrl+K` or click the search icon in the navbar
2. **Type**: Enter keywords, page names, or section names
3. **Navigate**: Use arrow keys to select results
4. **Select**: Press Enter or click to navigate to the result

### Advanced Search
1. **Full Search Page**: Visit `/search` for advanced features
2. **Popular Searches**: Click on suggested popular searches
3. **Recent Searches**: Access your recent search history
4. **Search Tips**: Learn how to search effectively

### Keyboard Shortcuts
- `Ctrl+K` / `Cmd+K`: Open quick search
- `Arrow Up/Down`: Navigate search results
- `Enter`: Select highlighted result
- `Escape`: Close search or clear input

## Searchable Content

### Pages
- Home (`/home`)
- Services (`/services`)
- About (`/about`)
- Career (`/career`)
- Help Center (`/help-center`)
- Design (`/design`)
- Development (`/development`)
- Products (`/products`)
- Privacy Policy (`/privacy-policy`)
- Terms & Conditions (`/terms-and-conditions`)
- Sign Up (`/signup`)
- Profile (`/profile`)

### Homepage Sections
- Hero Section (`#hero`)
- Why Epic (`#why-epic`)
- Our Mission (`#our-mission`)
- Our Approach (`#our-approach`)
- What We Are Good At (`#what-we-are-good-at`)
- Your Benefits (`#your-benefits`)
- Client Logos (`#client-logos`)

### Services Sections
- Services Overview (`#services`)
- Robotics & Automation (`#robotics-automation`)
- Special Purpose Machine (SPM) (`#spm`)
- SCADA (`#scada`)
- Custom Panel Design (`#custom-panel-design`)
- Robot Programming Services (`#robot-programming`)
- PLC & HMI Programming (`#plc-hmi`)
- Contact (Services) (`#services-contact`)

## Search Keywords

Each section includes comprehensive keywords for better search results:

### Example Keywords
- **Why Epic**: "why epic", "features", "benefits", "statistics", "numbers", "achievements"
- **Robotics & Automation**: "robotics", "automation", "robots", "automated systems", "machine tending"
- **Our Mission**: "mission", "vision", "integrity", "innovation", "excellence", "collaboration"

## Technical Implementation

### Files Modified/Created

1. **`src/sectionIndex.ts`** - Search index with all searchable content
2. **`src/pages/Navbar.tsx`** - Quick search implementation
3. **`src/components/SearchComponent.tsx`** - Full search page component
4. **`src/components/SearchAnalytics.tsx`** - Search analytics tracking
5. **`src/App.tsx`** - Added search route and keyboard shortcuts
6. **`src/ScrollToTop.tsx`** - Enhanced to handle hash navigation

### Components with Added IDs
- `src/pages/Homepage/whyepic.tsx` - Added `id="why-epic"`
- `src/pages/Homepage/ourmisson.tsx` - Added `id="our-mission"`
- `src/pages/Homepage/ourapproach.tsx` - Added `id="our-approach"`
- `src/pages/Homepage/WhatWeAreGoodAt.tsx` - Added `id="what-we-are-good-at"`
- `src/pages/Homepage/yourbenefits.tsx` - Added `id="your-benefits"`
- `src/pages/Homepage/clientlogosection.tsx` - Added `id="client-logos"`
- `src/pages/Homepage/herosection.tsx` - Added `id="hero"`
- `src/pages/Services/Services_Home.tsx` - Added `id="services"`

### Search Algorithm
1. **Input Processing**: Converts search term to lowercase
2. **Matching**: Searches through labels and keywords
3. **Ranking**: Exact matches first, then partial matches
4. **Sorting**: Shorter labels prioritized
5. **Limiting**: Maximum 8 results for quick search

## Customization

### Adding New Searchable Content
1. Add entry to `src/sectionIndex.ts`:
```typescript
{
  id: "new-section",
  label: "New Section",
  keywords: ["keyword1", "keyword2", "keyword3"],
  page: "/page-path"
}
```

2. Add ID to the component:
```tsx
<section id="new-section" className="...">
```

### Modifying Search Behavior
- **Quick Search**: Modify `src/pages/Navbar.tsx`
- **Full Search**: Modify `src/components/SearchComponent.tsx`
- **Analytics**: Modify `src/components/SearchAnalytics.tsx`

### Styling
- Quick search uses the existing navbar theme
- Full search page uses a clean, modern design
- All components are responsive and accessible

## Browser Support
- Modern browsers with ES6+ support
- LocalStorage for analytics
- CSS Grid and Flexbox for layout
- Keyboard navigation support

## Performance
- Client-side search (no server requests)
- Debounced search input
- Efficient filtering and sorting
- Minimal re-renders with React optimization

## Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Focus indicators
- ARIA labels

## Future Enhancements
- Server-side search for larger content
- Search filters (by page, section type)
- Search history sync across devices
- Advanced search operators
- Search result highlighting
- Voice search integration 
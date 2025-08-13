import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useState , useEffect } from "react";
import Servicespage from "./pages/Services.tsx";
import Design from "./pages/Design";
import Development from "./pages/Development";
import About from "./pages/About";
import Career from "./pages/Career";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer";
import TopNavbar from "./pages/Navbar";
import NewsletterManager from "./components/NewsletterManager";

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Focus the search input in navbar
        const searchButton = document.querySelector('[aria-label="Search"]') as HTMLButtonElement;
        if (searchButton) {
          searchButton.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hide Navbar and Footer on /signup and /help-center
  const hideNavAndFooter = location.pathname === "/signup" ;

  return (
    <>
      {!hideNavAndFooter && <TopNavbar isScrolled={scrolled} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/help-center" element={<HelpCenter /> } />
        <Route path="/contact-us" element={<HelpCenter /> } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
      <NewsletterManager />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

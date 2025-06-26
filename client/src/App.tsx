import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState , useEffect } from "react";
import Products from "./pages/Products";
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Router>
      <TopNavbar isScrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

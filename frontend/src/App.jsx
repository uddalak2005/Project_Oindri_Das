import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './pages/HeroSection.jsx';
import HeroSectionMobile from './pages/HeroSectionMobile.jsx';
import AboutSection from './pages/AboutSection.jsx';
import AboutSectionMobile from "./pages/AboutSectionMobile.jsx"
import AboutSectionTablet from './pages/AboutSectionTablet.jsx';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Function to check device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    // Check initial window width
    checkDeviceType();

    // Update on resize
    window.addEventListener('resize', checkDeviceType);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* Hero Section - Conditional Rendering */}
      {isTablet ? (<HeroSectionMobile />) :
        isMobile ? <HeroSectionMobile /> : <HeroSection />}

      {/* About Section - Conditional Rendering */}
      {isMobile ? (
        <AboutSectionMobile />
      ) : isTablet ? (
        <AboutSectionTablet />
      ) : (
        <AboutSection />
      )}
    </div>
  );
};

export default App;
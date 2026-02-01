import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './pages/HeroSection.jsx';
import HeroSectionMobile from './pages/HeroSectionMobile.jsx';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial window width
    setIsMobile(window.innerWidth <= 768);

    // Update on resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {isMobile ? <HeroSectionMobile /> : <HeroSection />}
      {/* Add other sections below */}
    </div>
  );
};

export default App;

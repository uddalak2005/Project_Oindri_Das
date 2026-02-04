import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './pages/HeroSection.jsx';
import HeroSectionMobile from './pages/HeroSectionMobile.jsx';
import AboutSection from './pages/AboutSection.jsx';
import AboutSectionMobile from "./pages/AboutSectionMobile.jsx";
import AboutSectionTablet from './pages/AboutSectionTablet.jsx';
import AcademicsSection from './pages/AcademicsSection.jsx';
import AchievementsSection from './pages/AchievementsSection.jsx';
import PublicationsSection from './pages/PublicationsSection.jsx';
import GallerySection from "./pages/GallerySection.jsx";
import Footer from './pages/Footer.jsx';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* HOME */}
      <section id="home">
        {isTablet ? (
          <HeroSectionMobile />
        ) : isMobile ? (
          <HeroSectionMobile />
        ) : (
          <HeroSection />
        )}
      </section>

      {/* ABOUT */}
      <section id="about">
        {isMobile ? (
          <AboutSectionMobile />
        ) : isTablet ? (
          <AboutSectionTablet />
        ) : (
          <AboutSection />
        )}
      </section>

      {/* ACADEMICS */}
      <section id="academics">
        <AcademicsSection />
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <AchievementsSection />
      </section>

      {/* PUBLICATIONS */}
      <section id="publications">
        <PublicationsSection />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <GallerySection />
      </section>

      {/* FOOTER / CONTACT */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;

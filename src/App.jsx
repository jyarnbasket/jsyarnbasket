import React, { useState, useMemo } from 'react';
import HomeSection from './pages/Home';
import GallerySection from './pages/Gallery';
import FloatingSocials from './components/FloatingSocials';
import BlogSection from './pages/Blog';
import AboutSection from './pages/About';
import ContactSection from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 40; i++) { // Optimized star count for crisp mobile performance
      starArray.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 8 + 4}px`,
        delay: `${Math.random() * 4}s`,
      });
    }
    return starArray;
  }, []);

  return (
    <div>
      {/* GLOBAL NAVBAR CONTAINER */}
      <nav className="navbar">
        <a href="#home" className="brand-layout" onClick={closeMenu}>
          <h2>J's <span style={{ color: 'var(--primary-orange)' }}>Yarn Basket</span></h2>
        </a>
        
        {/* Mobile Hamburger Toggle Action */}
        <button className="menu-toggle-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* Navigation Link Row Container */}
        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      {/* CORE SINGLE-PAGE STACK ENGINE */}
      <main className="main-scroller">
        <div className="star-canopy">
          {stars.map((star) => (
            <div key={star.id} className="star" style={{ top: star.top, left: star.left, width: star.size, height: star.size, animationDelay: star.delay }} />
          ))}
        </div>

        <section id="home" className="page-section">
          <HomeSection />
        </section>

        <section id="gallery" className="page-section">
          <div className="container">
            <GallerySection />
          </div>
        </section>

        <section id="blog" className="page-section">
          <div className="container">
            <BlogSection />
          </div>
        </section>

        <section id="about" className="page-section">
          <div className="container">
            <AboutSection/>
          </div>
        </section>

        <section id="contact" className="page-section">
          <div className="container">
            <ContactSection/>
          </div>
        </section>
      </main>

      {/* Floating social connection points overlay */}
      <FloatingSocials />
    </div>
  );
}

export default App;
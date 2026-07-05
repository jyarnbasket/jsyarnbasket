import React from 'react';
import logoImg from '../assets/logo.jpg'; 

export default function HomeSection() {
  const previews = [
    { id: 1, tag: 'WEARABLES', rotation: '-4deg', title: 'Cozy Cardigans', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80' },
    { id: 2, tag: 'AMIGURUMI', rotation: '3deg', title: 'Magic Plushies', img: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=300&q=80' },
    { id: 3, tag: 'BLANKETS', rotation: '-2deg', title: 'Warm Afghans', img: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="container">
      <div className="immersive-hero">
        
        {/* CELESTIAL RADIANT LOGO FRAME */}
        <div className="moon-glow-container">
          {/* Subtle background stars specific to the logo aura */}
          <div className="logo-sparkle s1">✦</div>
          <div className="logo-sparkle s2">✦</div>
          <div className="logo-sparkle s3">✦</div>
          
          <img 
            src={logoImg} 
            alt="J's Yarn Basket Illustration" 
            className="hero-logo-large celestial-radiance" 
          />
        </div>
        
        <div className="plush-badge">HANDMADE WITH LOVE</div>
        
        <h1 className="glow-title">J's Yarn Basket</h1>
        <div className="script-sub">Stitched beneath the silver moon</div>

        <p className="hero-paragraph">
          "Every loop holds a memory, and every single stitch weaves comfort straight from the heart. Welcome to a small corner of the world built entirely out of soft yarn."
        </p>

        <a href="#gallery" className="btn-magical">
          EXPLORE THE CREATIONS
        </a>

        <div className="showcase-row">
          {previews.map((item) => (
            <a 
              key={item.id} 
              href="#gallery" 
              className="polaroid-card" 
              style={{ '--rotation': item.rotation }}
            >
              <img src={item.img} alt={item.title} />
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--primary-orange)', fontWeight: 'bold', letterSpacing: '1px' }}>
                  {item.tag}
                </div>
                <div className="polaroid-text">
                  {item.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
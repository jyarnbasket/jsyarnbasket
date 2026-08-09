import React, { useMemo } from 'react';
import logoImg from '../assets/logo.jpg';

export default function Home() {
  // Dynamically load gallery assets using Vite's glob import
  const galleryImages = useMemo(() => {
    return import.meta.glob(
      '../assets/gallery/**/*.{png,jpg,jpeg,webp,svg,JPG,JPEG,PNG}',
      { eager: true }
    );
  }, []);

  // Helper function to safely retrieve image source from local assets
  const getAssetImg = (subpath) => {
    const fullPath = `../assets/gallery/${subpath}`;
    const importedFile = galleryImages[fullPath];
    return importedFile?.default || importedFile || '';
  };

  const previews = [
    {
      id: 1,

      tag: 'RECREATIONS',
      rotation: '-4deg',
      title: 'Custom Recreations',
      img: getAssetImg('Recreations/20250625_172137.jpg')
    },
    {
      id: 2,
      tag: 'AMIGURUMI',
      rotation: '3deg',
      title: 'Magic Characters',
      img: getAssetImg('Cartoon/20250328_185747.jpg')
    },
    {
      id: 3,
      tag: 'WEARABLES',
      rotation: '-2deg',
      title: 'Cozy Wearables',
      img: getAssetImg('Wearables/20251123_131448(1).jpg')
    },
  ];

  return (
    <div className="container">
      <div className="immersive-hero">

        {/* CELESTIAL RADIANT LOGO FRAME */}
        <div className="moon-glow-container">
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

        {/* HERO SHOWCASE PREVIEWS */}
        <div className="showcase-row">
          {previews.map((item) => (
            <a
              key={item.id}
              href="#gallery"
              className="polaroid-card portrait-polaroid"
              style={{ '--rotation': item.rotation }}
            >
              <div className="polaroid-img-frame">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="polaroid-caption">
                <span className="polaroid-tag">{item.tag}</span>
                <span className="polaroid-text">{item.title}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
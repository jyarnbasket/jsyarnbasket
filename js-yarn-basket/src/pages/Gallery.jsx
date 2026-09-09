import React, { useState, useMemo } from 'react';

export default function Gallery() {
  const instagramUrl = "https://ig.me/m/js__yarn_basket/";
  const [activeFilter, setActiveFilter] = useState('Recreations');
  const [selectedItem, setSelectedItem] = useState(null);

  // Categories matching your exact folder names
  const categories = [
    'Recreations',
    'Cartoon',
    'Wearables',
    'ALL'
  ];

  // Dynamically import images from folder paths
  const projects = useMemo(() => {
    const globImports = import.meta.glob(
      '../assets/gallery/**/*.{png,jpg,jpeg,webp,svg,JPG,JPEG,PNG}',
      { eager: true }
    );

    let idCounter = 1;

    return Object.keys(globImports).map((filePath) => {
      const pathSegments = filePath.split('/');

      // Target subfolder name (e.g. "Wearables")
      const folderCategory = pathSegments[pathSegments.length - 2];

      const imageSrc = globImports[filePath].default || globImports[filePath];

      return {
        id: idCounter++,
        category: folderCategory,
        img: imageSrc,
      };
    });
  }, []);

  // Filter projects based on active tab
  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ width: '100%' }}>
      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="plush-badge">THE LOOKBOOK</div>
        <h2 className="glow-title">The Creation Chest</h2>
        <p className="script-sub">Stitched with love & magic</p>
        <p className="hero-paragraph" style={{ margin: '0 auto' }}>
          Tap any crafted piece to inspect the details or request a custom remake.
        </p>
      </div>

      {/* FILTER PILLS BAR */}
      <div className="gallery-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID CONTAINER */}
      <div className="grid gallery-portrait-grid">
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '3rem 1rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              No items found in this section folder yet.
            </p>
          </div>
        ) : (
          filteredProjects.map((item) => (
            <div
              key={item.id}
              className="card gallery-interactive-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="gallery-card-badge">{item.category}</div>

              <div className="gallery-portrait-wrapper">
                <img src={item.img} alt={item.category} loading="lazy" />
                <div className="gallery-hover-overlay">
                  <span>✦ View Details</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="premium-contact-card gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setSelectedItem(null)} aria-label="Close">
              ✕
            </button>

            <div className="gallery-modal-grid">
              <div className="gallery-modal-img-holder">
                <img src={selectedItem.img} alt={selectedItem.category} />
              </div>

              <div className="gallery-modal-body">
                <span className="plush-badge" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  {selectedItem.category}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '1rem 0 1.5rem 0' }}>
                  Handcrafted item using premium yarn. Custom creations can be tailored in different colorways or sizes upon request!
                </p>

                <a
                  href={instagramUrl} 
                  target="_blank" 
                  className="btn-magical submit-btn-stretched"
                  onClick={() => setSelectedItem(null)}
                >
                  REQUEST SOMETHING SIMILAR
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
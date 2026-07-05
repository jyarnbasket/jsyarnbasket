import React, { useState } from 'react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    { id: 1, category: 'WEARABLES', title: 'Autumn Cardigan', desc: '100% merino wool.', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80' },
    { id: 2, category: 'AMIGURUMI', title: 'Celestial Bunny', desc: 'Plush velvet yarn build.', img: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=500&q=80' },
    { id: 3, category: 'BLANKETS', title: 'Starburst Afghan', desc: 'Intricate geometric join map.', img: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=500&q=80' },
    { id: 4, category: 'WEARABLES', title: 'Sage Cable Vest', desc: 'Classic cable-stitch structure.', img: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=500&q=80' }
  ];

  const categories = ['ALL', 'WEARABLES', 'AMIGURUMI', 'BLANKETS'];
  const filtered = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ width: '100%', padding: '2rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="plush-badge">THE LOOKBOOK</div>
        <h2 className="glow-title" style={{ fontSize: '2.2rem' }}>The Creation Chest</h2>
      </div>

      {/* Flexible scrolling container for tags on extra-narrow viewports */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              background: activeFilter === cat ? 'linear-gradient(135deg, var(--primary-orange), #E67E22)' : 'var(--bg-card)',
              color: activeFilter === cat ? '#1E1035' : 'var(--text-light)',
              fontFamily: 'var(--font-logo)',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              border: 'none',
              padding: '8px 18px',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile-friendly automated column grid container */}
      <div className="grid">
        {filtered.map((item) => (
          <div key={item.id} className="card">
            <div style={{ height: '240px', overflow: 'hidden' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="card-body">
              <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', fontFamily: 'var(--font-logo)' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
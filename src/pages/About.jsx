import React from 'react';

export default function AboutSection() {
  return (
    <div style={{ width: '100%', padding: '2rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="plush-badge">THE MAKER</div>
        <h2 className="glow-title" style={{ fontSize: '2.2rem' }}>Behind the Basket</h2>
      </div>

      <div style={{ 
        background: 'var(--bg-card)', 
        borderRadius: '16px', 
        padding: '2rem 1.5rem',
        border: '1px solid rgba(255,255,255,0.05)',
        maxWidth: '750px',
        margin: '0 auto'
      }}>
        <div className="script-sub" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          Hi, I'm J
        </div>
        
        <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'center' }}>
          What started out as a simple curiosity with a single aluminum hook and a ball of scratchy acrylic yarn quickly spun into a lifetime obsession. J's Yarn Basket is my quiet sanctuary away from the digital noise.
        </p>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', margin: 0, textAlign: 'center', fontStyle: 'italic' }}>
          "Every single plushie, blanket, or heavy cardigan passing through this basket is worked entirely by hand, loop by painstaking loop, beneath the silver glow of the moon. Thanks for stopping by my small world of soft knots."
        </p>
      </div>
    </div>
  );
}
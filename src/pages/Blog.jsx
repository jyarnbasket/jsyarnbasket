import React from 'react';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      date: "Oct 24, 2026",
      title: "Choosing the Perfect Yarn Weight",
      excerpt: "From lace weight to bulky roving, understanding yarn plumbing changes how your stitches drape over clothing...",
      readTime: "4 min read"
    },
    {
      id: 2,
      date: "Nov 12, 2026",
      title: "The Magic Ring: Demystifying Amigurumi",
      excerpt: "The ultimate survival guide to mastering the tightest circular beginnings without losing your tension sanity...",
      readTime: "6 min read"
    },
    {
      id: 3,
      date: "Dec 05, 2026",
      title: "Blocking 101: Finishing with Polish",
      excerpt: "Why damp pinning your finished crochet pieces makes them look like luxury boutique items instead of crumpled crafts...",
      readTime: "3 min read"
    }
  ];

  return (
    <div style={{ width: '100%', padding: '2rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="plush-badge">THE JOURNAL</div>
        <h2 className="glow-title" style={{ fontSize: '2.2rem' }}>Stitch Chronicles</h2>
        <div className="script-sub" style={{ fontSize: '2rem' }}>Stories behind the skeins</div>
      </div>

      <div className="grid">
        {posts.map((post) => (
          <div key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div className="card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--primary-orange)', marginBottom: '10px', fontWeight: 'bold' }}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem', fontFamily: 'var(--font-logo)' }}>
                {post.title}
              </h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {post.excerpt}
              </p>
            </div>
            <div style={{ padding: '0 1.25rem 1.25rem 1.25rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--primary-orange)', fontWeight: 'bold', cursor: 'pointer' }}>
                Read Article →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
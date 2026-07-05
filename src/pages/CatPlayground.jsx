import React, { useState, useEffect, useRef } from 'react';

export default function CatPlayground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Yarn physics state
  const [yarn, setYarn] = useState({ x: 450, y: 240, vx: 0, vy: 0, radius: 24 });
  const [isDragging, setIsDragging] = useState(false);
  const [catState, setCatState] = useState('idle'); // idle, stalking, pouncing
  const [catPos, setCatPos] = useState({ x: 120, y: 220 });

  // Historical path tracking for the unraveled yarn strand
  const [yarnTrail, setYarnTrail] = useState([{ x: 450, y: 240 }]);

  // Handle the live physics engine loop
  useEffect(() => {
    let animationFrameId;
    
    const updatePhysics = () => {
      if (isDragging) return;

      setYarn((prev) => {
        // Apply friction and floor collision boundaries
        let nextVx = prev.vx * 0.98;
        let nextVy = prev.vy * 0.98;
        let nextX = prev.x + nextVx;
        let nextY = prev.y + nextVy;

        // Ground/Wall boundaries context
        if (nextX > 750) { nextX = 750; nextVx *= -0.6; }
        if (nextX < 50)  { nextX = 50;  nextVx *= -0.6; }
        if (nextY > 260) { nextY = 260; nextVy *= -0.4; }
        if (nextY < 80)  { nextY = 80;  nextVy *= -0.4; }

        // Core Interactive AI Logic: How the cat tracks and responds
        const distanceToCat = Math.hypot(nextX - catPos.x, nextY - catPos.y);

        if (distanceToCat < 140 && Math.abs(nextVx) > 0.2 && catState === 'idle') {
          setCatState('stalking');
        } else if (distanceToCat < 85 && catState === 'stalking') {
          setCatState('pouncing');
          // Bat the ball away with structural momentum force vector
          nextVx = (nextX - catPos.x) * 0.4 + 8;
          nextVy = (Math.random() - 0.5) * 10;
          setTimeout(() => setCatState('idle'), 600);
        } else if (Math.abs(nextVx) < 0.05 && catState === 'stalking') {
          setCatState('idle');
        }

        // Store trail values points inside Canvas framework
        if (Math.abs(nextVx) > 0.1) {
          setYarnTrail((t) => [...t.slice(-40), { x: nextX, y: nextY }]);
        }

        return { x: nextX, y: nextY, vx: nextVx, vy: nextVy, radius: prev.radius };
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, catState, catPos]);

  // Render the smooth trailing yarn curve inside HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 800, 350);

    ctx.beginPath();
    ctx.strokeStyle = '#74b9ff';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (yarnTrail.length > 0) {
      ctx.moveTo(yarnTrail[0].x, yarnTrail[0].y + 12);
      for (let i = 1; i < yarnTrail.length; i++) {
        ctx.lineTo(yarnTrail[i].x, yarnTrail[i].y + 12);
      }
    }
    // Connect live straight into the yarn ball core
    ctx.lineTo(yarn.x, yarn.y + 12);
    ctx.stroke();
  }, [yarnTrail, yarn]);

  // Handle manual interaction toss clicks
  const handleBallClick = () => {
    setYarn((prev) => ({
      ...prev,
      vx: (Math.random() - 0.5) * 25,
      vy: (Math.random() - 0.5) * 15,
    }));
  };

  // Calculate focal eye-tracking target angles
  const angle = Math.atan2(yarn.y - (catPos.y - 40), yarn.x - catPos.x);
  const eyeX = Math.cos(angle) * 4;
  const eyeY = Math.sin(angle) * 3;

  return (
    <div className="container page-fade-in" style={{ maxWidth: '900px' }}>
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <div className="plush-badge">CSS & PLY ENGINE ENVIRONMENT</div>
        <h2 className="glow-title" style={{ fontSize: '2.8rem' }}>The Craft Meadow</h2>
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Click or flick the premium sky blue yarn ball to engage the cat's physics tracking systems.
        </p>
      </div>

      {/* --- INTERACTIVE THEATRE BLOCK --- */}
      <div 
        ref={containerRef} 
        className="theatre-stage"
        style={{
          position: 'relative',
          width: '100%',
          height: '380px',
          background: '#1F1235',
          borderRadius: '20px',
          border: '2px solid var(--bg-card)',
          overflow: 'hidden',
          boxShadow: 'inset 0 4px 40px rgba(0,0,0,0.5)'
        }}
      >
        {/* Dynamic HTML5 Canvas Yarn strand layer */}
        <canvas 
          ref={canvasRef} 
          width="800" 
          height="350" 
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', z_index: 2 }}
        />

        {/* --- ARTISTIC HIGH-FIDELITY LUXURY CAT --- */}
        <div 
          className={`luxury-cat ${catState}`} 
          style={{
            position: 'absolute',
            left: `${catPos.x}px`,
            top: `${catPos.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: catState === 'pouncing' ? 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'transform 0.4s ease'
          }}
        >
          {/* Tail element */}
          <div className="luxury-tail" />

          {/* Torso framework */}
          <div className="luxury-body">
            <div className="luxury-chest" />
          </div>

          {/* Shaded tracking face structure */}
          <div className="luxury-head">
            {/* Ear Flaps */}
            <div className="luxury-ear left"><div className="inner-pink" /></div>
            <div className="luxury-ear right"><div className="inner-pink" /></div>
            
            {/* Focal Pupil Optics */}
            <div className="luxury-eye left">
              <div className="pupil" style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }} />
            </div>
            <div className="luxury-eye right">
              <div className="pupil" style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }} />
            </div>

            {/* Muzzle */}
            <div className="luxury-snout" />
          </div>
        </div>

        {/* --- THE PHYSICS DRIVEN YARN BALL --- */}
        <div
          className="luxury-yarn-ball"
          onClick={handleBallClick}
          style={{
            position: 'absolute',
            left: `${yarn.x}px`,
            top: `${yarn.y}px`,
            transform: 'translate(-50%, -50%)',
            width: `${yarn.radius * 2}px`,
            height: `${yarn.radius * 2}px`,
            background: 'radial-gradient(circle at 30% 30%, var(--accent-blue), #3A829B)',
            borderRadius: '50%',
            cursor: 'grab',
            boxShadow: '0 8px 20px rgba(0,0,0,0.4), inset -4px -4px 12px rgba(0,0,0,0.3)',
            zindex: 10,
            transition: isDragging ? 'none' : 'transform 0.1s ease'
          }}
        >
          {/* Detailed internal embroidery loop lines */}
          <div className="yarn-embroidery-line" />
        </div>

        {/* Stage Base Shadows floor plane anchor */}
        <div style={{
          position: 'absolute',
          bottom: '75px',
          width: '100%',
          height: '2px',
          background: 'rgba(255,255,255,0.04)',
          boxShadow: '0 0 15px rgba(255,255,255,0.05)'
        }} />
      </div>
    </div>
  );
}
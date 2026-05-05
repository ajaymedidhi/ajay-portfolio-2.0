import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem',
        width: '40px', height: '40px',
        background: '#0E1420',
        border: '1px solid rgba(0,217,192,0.3)',
        borderRadius: '4px', color: '#00D9C0',
        cursor: 'pointer', zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      aria-label="Scroll to top"
      className="scroll-top-btn"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}

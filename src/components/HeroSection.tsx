import { useState, useEffect, useRef } from 'react';
import { COLORS } from '../tokens';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / innerWidth - 0.5) * 10,
          y: (e.clientY / innerHeight - 0.5) * 10,
        });
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const renderCTAs = (className: string) => (
    <div className={`cta-container ${className}`} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: className.includes('mobile') ? 'center' : 'flex-start', marginTop: className.includes('mobile') ? '1rem' : '0' }}>
      <a href="/resume.pdf" download="Ajay_Medidhi_Resume.pdf" target="_blank" rel="noreferrer"
        className="cta-primary" style={{
        display: 'inline-flex', alignItems: 'center', justifyItems: 'center', gap: '0.6rem',
        background: COLORS.accent, color: COLORS.bg,
        padding: '0.85rem 2rem', borderRadius: '8px',
        fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.02em',
        textDecoration: 'none', transition: 'all 0.2s',
        boxShadow: `0 4px 14px ${COLORS.accent}40`,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
      <a href="https://linkedin.com/in/ajaymedidhi" target="_blank" rel="noreferrer"
        className="cta-secondary" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
        background: 'transparent', color: COLORS.textPrimary,
        padding: '0.85rem 2rem', borderRadius: '8px',
        fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.01em',
        textDecoration: 'none', transition: 'all 0.2s',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
      <a href="https://www.youtube.com/@ajayverse09" target="_blank" rel="noreferrer"
        className="cta-secondary" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
        background: 'transparent', color: COLORS.textPrimary,
        padding: '0.85rem 2rem', borderRadius: '8px',
        fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.01em',
        textDecoration: 'none', transition: 'all 0.2s',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill={COLORS.bg}/></svg>
        AjayVerse
      </a>
    </div>
  );

  return (
    <section id="hero" data-screen-label="Hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      paddingTop: '80px', paddingBottom: '1rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,217,192,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', gap: '2rem', width: '100%',
        position: 'relative', zIndex: 1,
      }} className="hero-inner">
        <div className="hero-text" style={{ flex: '1.2 1 0', minWidth: 0 }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              border: '1px solid rgba(0,217,192,0.2)',
              background: 'rgba(0,217,192,0.05)',
              color: 'rgba(0,217,192,0.9)',
              padding: '0.45rem 1rem', borderRadius: '100px',
              fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.03em',
              flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center'
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#00D9C0', boxShadow: '0 0 8px rgba(0,217,192,0.8)',
                display: 'inline-block', flexShrink: 0,
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              Currently available for new opportunities
            </span>
          </div>

          <div style={{ color: COLORS.textSecondary, fontSize: '1rem', fontWeight: 400, marginBottom: '0.75rem', letterSpacing: '0.01em' }}>
            Hello, I'm Ajay Medidhi.
          </div>

          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.3rem, 10vw, 5.5rem)',
            lineHeight: 0.95, letterSpacing: '-0.04em',
            color: COLORS.textPrimary, margin: '0 0 0.6rem 0',
            whiteSpace: 'normal', wordBreak: 'keep-all'
          }}>
            Full Stack<br />
            <span style={{
              background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.blue} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Developer</span>
          </h1>
          
          <div style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            color: '#00D9C0',
            fontWeight: 700,
            fontFamily: 'Syne, sans-serif',
            marginBottom: '1.2rem',
            letterSpacing: '0.02em',
          }}>
            GCP <span style={{ color: COLORS.textSecondary }}>·</span> Generative AI
          </div>

          <p className="mobile-hidden" style={{
            fontSize: '1.05rem', lineHeight: 1.75,
            color: COLORS.textSecondary, maxWidth: '460px',
            marginBottom: '1rem', marginTop: '-0.5rem', fontWeight: 400,
          }}>
            Building scalable systems with Angular, Node.js & Google Cloud. Focused on performance, reliability, and real-world impact.
          </p>

          {renderCTAs('desktop-only-cta')}
        </div>

        <div className="hero-image" style={{
          flex: '0 0 320px', display: 'flex', justifyContent: 'center', alignItems: 'center',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{ position: 'relative', width: '290px', height: '340px' }}>
            <div style={{
              position: 'absolute', inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(0,217,192,0.12) 0%, transparent 70%)',
              zIndex: 0, borderRadius: '50%',
            }} />
            <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '28px', height: '28px', borderTop: '1.5px solid rgba(0,217,192,0.6)', borderLeft: '1.5px solid rgba(0,217,192,0.6)', zIndex: 3 }} />
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '28px', height: '28px', borderTop: '1.5px solid rgba(0,217,192,0.6)', borderRight: '1.5px solid rgba(0,217,192,0.6)', zIndex: 3 }} />
            <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '28px', height: '28px', borderBottom: '1.5px solid rgba(0,217,192,0.6)', borderLeft: '1.5px solid rgba(0,217,192,0.6)', zIndex: 3 }} />
            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '28px', height: '28px', borderBottom: '1.5px solid rgba(0,217,192,0.6)', borderRight: '1.5px solid rgba(0,217,192,0.6)', zIndex: 3 }} />
            <div style={{
              width: '100%', height: '100%', overflow: 'hidden',
              borderRadius: '4px', border: '1px solid rgba(255,255,255,0.07)',
              position: 'relative', zIndex: 1,
              transform: `translate(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px)`,
              transition: 'transform 0.18s ease-out',
            }}>
              <img
                src="/myprofile.jpg"
                alt="Ajay Medidhi"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(15%) brightness(0.95)',
                  transition: 'filter 0.4s',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) brightness(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(15%) brightness(0.95)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(8,12,16,0.5) 100%)',
                pointerEvents: 'none',
              }} />
            </div>
            <div style={{
              position: 'absolute', bottom: '-1rem', right: '-1.25rem',
              background: COLORS.surface, border: `1px solid ${COLORS.accent}40`,
              padding: '0.7rem 1rem', borderRadius: '8px', zIndex: 4,
              backdropFilter: 'blur(12px)', boxShadow: `0 8px 24px ${COLORS.accent}15`,
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: COLORS.accent, letterSpacing: '0.08em', marginBottom: '0.2rem' }}>IMPACT</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: COLORS.textPrimary }}>+60% Performance</div>
            </div>
            <div style={{
              position: 'absolute', top: '-1rem', left: '-1rem',
              background: '#0E1420', border: '1px solid rgba(255,255,255,0.07)',
              padding: '0.4rem 0.75rem', borderRadius: '6px', zIndex: 4,
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#8899AA', letterSpacing: '0.06em' }}>@ Accenture</div>
            </div>
          </div>
        </div>
        {renderCTAs('mobile-only-cta')}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        marginTop: '2rem', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          width: '1px', height: '32px',
          background: 'linear-gradient(to bottom, rgba(0,217,192,0.6), transparent)',
          flexShrink: 0,
        }} />
        <div style={{
          fontSize: '0.58rem', fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4A5568',
        }}>scroll to explore</div>
      </div>
    </section>
  );
}

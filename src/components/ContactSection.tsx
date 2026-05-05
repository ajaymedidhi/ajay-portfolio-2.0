import { useState } from 'react';
import { COLORS } from '../tokens';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'ajaymedidhi858@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" style={{ scrollMarginTop: '5rem' }}>
      <div style={{
        background: COLORS.surface, border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '6px', padding: 'clamp(2.5rem, 6vw, 5rem)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,217,192,0.3), transparent)' }} />
        <div style={{
          position: 'absolute', top: '-1rem', left: '-0.5rem',
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(6rem, 14vw, 12rem)',
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.06em',
        }}>09</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00D9C0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            09 —— Open to opportunities
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: COLORS.textPrimary, lineHeight: 1.1,
            letterSpacing: '-0.04em', margin: '0 0 1rem 0',
          }}>
            Let's build something<br /><span style={{ color: '#00D9C0' }}>impactful.</span>
          </h2>
          <p style={{ color: COLORS.textSecondary, fontSize: '1rem', marginBottom: '3rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.02em' }}>
            Open to Full Stack / Backend roles & collaborations.
          </p>
          <div style={{ marginBottom: '2.5rem' }}>
            <button onClick={handleCopy} style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: copied ? '#00D9C0' : '#F0F4F8',
              letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.75rem 1.5rem', borderRadius: '4px',
            }} className="email-btn">
              {email}
              <span style={{ fontSize: '0.7rem', color: copied ? COLORS.accent : COLORS.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {copied ? '✓ Copied' : 'Copy'}
              </span>
            </button>
            <div style={{ marginTop: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4A5568', letterSpacing: '0.06em' }}>
              click to copy
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href={`mailto:${email}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: COLORS.accent, color: COLORS.bg,
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em',
              textDecoration: 'none',
            }} className="cta-primary">
              Send an Email →
            </a>
            <a href="https://linkedin.com/in/ajaymedidhi" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: '#F0F4F8',
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.04em',
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)',
            }} className="cta-secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '2rem' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4A5568', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Designed & engineered by Ajay Medidhi — Built with React, Vite, TypeScript.
        </p>
      </div>
    </section>
  );
}

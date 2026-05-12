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
      <div className="contact-box" style={{
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
        }}>07</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00D9C0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            07 —— Open to opportunities
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
              background: 'none', border: '1px solid rgba(255,255,255,0.07)',
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
          <div className="contact-ctas" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
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
            <a href="https://github.com/ajaymedidhi" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: '#F0F4F8',
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.04em',
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)',
            }} className="cta-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.072.682-.217.682-.482 0-.237-.007-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.078 2.912.832.072-.647.35-1.078.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.073.39-1.988 1.029-2.688-.103-.253-.446-1.272.078-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.907-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.307.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.205 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <a href="https://www.youtube.com/@ajayverse09" target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          color: '#4A5568', textDecoration: 'none', fontSize: '0.75rem',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em',
          transition: 'color 0.2s',
        }} className="youtube-footer-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#080C10"/></svg>
          AjayVerse — building in public on YouTube
        </a>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4A5568', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
          Designed & engineered by Ajay Medidhi — Built with React, Vite, TypeScript.
        </p>
      </div>
    </section>
  );
}

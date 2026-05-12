import type { ReactNode } from 'react';
import SectionHeader from './SectionHeader';

interface BuildingCard {
  tag: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
  accentBorder: string;
  featured?: boolean;
  title: string;
  href: string | null;
  description: string | null;
  bullets: string[];
  icon: ReactNode;
}

export default function CurrentlyBuildingSection() {
  const cards: BuildingCard[] = [
    {
      tag: 'Featured Project',
      tagColor: '#00D9C0', tagBg: 'rgba(0,217,192,0.08)',
      tagBorder: 'rgba(0,217,192,0.2)', accentBorder: 'rgba(0,217,192,0.25)',
      featured: true,
      title: 'SkillSeed Edu-Tech Platform',
      href: 'https://skillseed-edu.netlify.app/',
      description: 'Building an ed-tech platform for Class 11–12 students in rural communities — mapping AI literacy, digital career paths, and NEP-aligned skills alongside traditional studies. MVP live at skillseed-edu.netlify.app.',
      bullets: [
        'React + Node.js + Firestore stack — MVP deployed',
        'Targeting 500 students across Hyderabad pilot schools'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      ),
    },
    {
      tag: 'Continuous Learning',
      tagColor: '#4A9EFF', tagBg: 'rgba(74,158,255,0.08)',
      tagBorder: 'rgba(74,158,255,0.2)', accentBorder: 'rgba(74,158,255,0.15)',
      title: 'RAG & Intelligent AI',
      href: null,
      description: 'Deep diving into Retrieval-Augmented Generation (RAG) to construct context-aware AI systems. Exploring vector databases and intelligent embedding strategies to deliver grounded, domain-specific AI logic.',
      bullets: [],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      ),
    },
    {
      tag: 'Core Objectives',
      tagColor: '#8899AA', tagBg: 'rgba(136,153,170,0.08)',
      tagBorder: 'rgba(136,153,170,0.15)', accentBorder: 'rgba(136,153,170,0.12)',
      title: 'Strategic Focus Areas',
      href: null,
      description: null,
      bullets: ['Next-Gen AI Applications', 'Scalable Backend Distributed Systems', 'Real-World Problem Solving Design'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      ),
    },
  ];

  return (
    <section id="currently-building" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="05" title="Currently Building" subtitle="Always experimenting, learning, and building the future." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="building-grid">
        {cards.map((card, idx) => (
          <div key={idx} style={{
            background: card.featured ? 'linear-gradient(135deg, rgba(0,217,192,0.07) 0%, #0E1420 60%)' : '#0E1420',
            border: `1px solid ${card.accentBorder}`,
            borderRadius: '12px',
            padding: card.featured ? '2rem' : '1.75rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
            position: 'relative', overflow: 'hidden',
            boxShadow: card.featured ? '0 0 40px rgba(0,217,192,0.06)' : 'none',
          }} className="building-card">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${card.tagColor}, transparent)`, opacity: 0.5 }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '4px',
                background: 'rgba(0,0,0,0.3)',
                border: `1px solid ${card.tagBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: card.tagColor,
              }}>{card.icon}</div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: card.tagColor, background: card.tagBg,
                border: `1px solid ${card.tagBorder}`,
                padding: '0.2rem 0.55rem', borderRadius: '2px',
              }}>{card.tag}</span>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F0F4F8', marginBottom: '0.6rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {card.href ? (
                  <a href={card.href} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={e => (e.currentTarget.style.color = card.tagColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#F0F4F8')}>
                    {card.title}
                    <span style={{ fontSize: '0.8rem' }}>↗</span>
                  </a>
                ) : card.title}
              </h3>
              {card.description && (
                <p style={{ color: '#8899AA', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: card.bullets.length ? '0.75rem' : 0 }}>{card.description}</p>
              )}
              {card.bullets.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {card.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', color: '#8899AA', fontSize: '0.82rem' }}>
                      <span style={{ color: card.tagColor, flexShrink: 0, fontSize: '0.5rem', marginTop: '0.35rem' }}>◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

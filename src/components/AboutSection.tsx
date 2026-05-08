import { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = [
    "I'm Ajay Medidhi, a Full Stack Engineer at Accenture, where I work on building scalable, high-performance systems. My work focuses on transforming complex business requirements into efficient, production-ready solutions using Angular, Node.js, and Google Cloud.",
    "My engineering background is not a past chapter — it's my edge. The same principles of precision, system thinking, and problem-solving that govern flight now guide how I design reliable and scalable software systems.",
    "During my time at Proptelligence, I discovered my passion for building end-to-end products — combining clean architecture with seamless user experiences. That experience shaped my approach: think deeply, build efficiently, and deliver impact.",
    "Beyond work, I actively explore AI and data-driven systems, constantly pushing myself to stay ahead in a rapidly evolving tech landscape. I believe great engineering is about clarity, curiosity, and execution.",
  ];

  return (
    <section id="about" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="01" title="About Me" />
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
        alignItems: 'start',
      }} className="about-grid">
        <div>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#C8D6E5', fontWeight: 400, marginBottom: '1.5rem' }}>
            Results-driven Full Stack Developer building high-performance applications with{' '}
            <strong style={{ color: '#F0F4F8', fontWeight: 600 }}>Angular, Node.js, and Google Cloud</strong>. Passionate about creating technical solutions that drive real-world impact and reliability at scale.
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#00D9C0', fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.875rem', fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: 0, marginBottom: '1.5rem',
            }}
          >
            {expanded ? '↑ Collapse' : '↓ Read Full Journey: From Aircraft to Algorithms'}
          </button>
          <div style={{
            maxHeight: expanded ? '800px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
              {paragraphs.map((p, i) => (
                <p key={i} style={{
                  color: '#8899AA', lineHeight: 1.75, marginBottom: '1rem',
                  fontSize: '0.95rem', fontWeight: 400,
                }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'Experience', value: '1 Year 8 Months', sub: 'Full Stack Development' },
            { label: 'Current Role', value: 'Lead Full Stack Developer', sub: 'Accenture, Hyderabad' },
            { label: 'Building', value: 'SkillSeed', sub: 'Ed-tech platform for students' },
            { label: 'Creating', value: 'AjayVerse', sub: 'YouTube channel — building in public' },
            { label: 'Background', value: 'Aeronautical Engineering', sub: 'Precision & system thinking' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '1rem 1.25rem',
              background: '#0E1420',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: '1rem',
            }} className="stat-row">
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4A5568', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>{item.label}</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#F0F4F8', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'Syne, sans-serif' }}>{item.value}</div>
                <div style={{ color: '#4A5568', fontSize: '0.75rem' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

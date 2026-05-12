import { useState } from 'react';
import SectionHeader from './SectionHeader';

interface Experience {
  company: string;
  role: string;
  period: string;
  keyImpact: string;
  summary: string;
  bullets: string[];
  extended: { title: string; body: string }[];
  tech: string[];
}

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      company: 'Accenture',
      role: 'Lead Full Stack Developer',
      period: 'Oct 2024 – Present',
      keyImpact: '60% Perf Boost',
      summary: 'Worked on enterprise-scale backend systems focusing on performance, data engineering, and production reliability.',
      bullets: [
        'Improved report performance by 60% using BigQuery optimization',
        'Reduced API latency by 35% across critical endpoints',
        'Built scalable Angular modules for enterprise Roster Management',
        'Ensured 99.9% system reliability by resolving production issues',
      ],
      extended: [
        { title: 'Performance & Data', body: 'Optimized BigQuery workflows, resolved data mismatches, and improved query structures for large datasets.' },
        { title: 'Production Stability', body: 'Resolved critical production bugs (e.g., False Roll-off), ensuring accurate reporting and system reliability.' },
        { title: 'Feature Enhancements', body: 'Delivered enhancements like OSCA integration, improved exports, and data visibility fixes.' },
        { title: 'BigQuery Migration', body: 'Contributed to BQ migration by improving queries, adding metadata, and ensuring report consistency.' },
        { title: 'Collaboration', body: 'Worked cross-functionally, supported team members, and owned key modules like Departure Roster.' },
        { title: 'Deployment', body: 'Handled deployments, hotfixes, and DRI incidents ensuring smooth production operations.' },
      ],
      tech: ['Angular', 'Node.js', 'BigQuery', 'Spanner', 'GCP'],
    },
    {
      company: 'Proptelligence',
      role: 'Full Stack Developer Intern',
      period: 'Dec 2023 – June 2024',
      keyImpact: '40% Engagement Spike',
      summary: 'Developed interactive and highly scalable React applications, boosting overall user engagement metrics by 40%. Refactored legacy system endpoints and optimized server architecture to yield a 30% speed increase in API responses. Orchestrated the full-stack deployment of multiple connected applications seamlessly into live cloud environments.',
      bullets: [
        'Built dynamic React dashboards with Redux state management, improving user engagement by 40%.',
        'Refactored 12 legacy Express endpoints reducing average API response time by 30%.',
        'Deployed full-stack applications to cloud environments handling CI/CD pipeline configuration end-to-end.',
      ],
      extended: [],
      tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Cloud Deploy'],
    },
  ];

  const getExperienceString = () => {
    const startDate = new Date(2024, 9); // October 2024
    const now = new Date();
    const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth()) + 1;
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let str = '';
    if (years > 0) str += `${years} Year${years > 1 ? 's' : ''} `;
    if (months > 0) str += `${months} Month${months > 1 ? 's' : ''}`;
    
    return str.trim() || '1 Year';
  };

  return (
    <section id="experience" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="02" title="Professional Experience" subtitle={`${getExperienceString()} of building production systems.`} />
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', left: 0, top: '0.5rem', bottom: 0, width: '1px', background: 'rgba(255,255,255,0.06)' }} />
        {experiences.map((exp, idx) => (
          <div key={idx} style={{ position: 'relative', marginBottom: '3.5rem' }}>
            <div style={{
              position: 'absolute', left: '-2.4rem', top: '0.35rem',
              width: '10px', height: '10px', borderRadius: '50%',
              background: idx === 0 ? '#00D9C0' : '#0E1420',
              border: `1px solid ${idx === 0 ? '#00D9C0' : 'rgba(255,255,255,0.2)'}`,
              boxShadow: idx === 0 ? '0 0 8px rgba(0,217,192,0.6)' : 'none',
            }} />
            <div style={{ padding: '1.75rem 2rem', background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px' }} className="exp-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#F0F4F8', marginBottom: '0.2rem' }}>
                    {exp.role} <span style={{ color: '#00D9C0' }}>@ {exp.company}</span>
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#4A5568', letterSpacing: '0.08em' }}>{exp.period}</div>
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem', letterSpacing: '0.1em',
                  color: '#00D9C0', background: 'rgba(0,217,192,0.08)',
                  border: '1px solid rgba(0,217,192,0.2)',
                  padding: '0.3rem 0.75rem', borderRadius: '2px',
                  whiteSpace: 'nowrap',
                }}>{exp.keyImpact}</span>
              </div>
              <p style={{ color: '#8899AA', lineHeight: 1.7, fontSize: '0.925rem', marginBottom: '1rem' }}>{exp.summary}</p>
              {exp.bullets.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#8899AA', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <span style={{ color: '#00D9C0', flexShrink: 0, marginTop: '0.15rem', fontSize: '0.6rem' }}>◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {exp.extended.length > 0 && (
                <>
                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    aria-expanded={expanded === idx}
                    aria-controls={`exp-contributions-${idx}`}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#00D9C0', fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      display: 'flex', alignItems: 'center', gap: '0.4rem', padding: 0,
                      marginBottom: '0.5rem',
                    }}>
                    {expanded === idx ? '↑ Hide' : '↓ View'} Key Contributions
                  </button>
                  <div id={`exp-contributions-${idx}`} style={{
                    maxHeight: expanded === idx ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '1rem' }} className="contrib-grid">
                      {exp.extended.map((c, i) => (
                        <div key={i} style={{ padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                          <div style={{ color: '#F0F4F8', fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.3rem' }}>{c.title}</div>
                          <div style={{ color: '#4A5568', fontSize: '0.78rem', lineHeight: 1.6 }}>{c.body}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                {exp.tech.map((t, i) => (
                  <span key={i} style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem', letterSpacing: '0.08em',
                    color: '#4A9EFF', background: 'rgba(74,158,255,0.08)',
                    border: '1px solid rgba(74,158,255,0.15)',
                    padding: '0.2rem 0.6rem', borderRadius: '2px',
                    textTransform: 'uppercase',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

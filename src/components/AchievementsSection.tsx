import SectionHeader from './SectionHeader';

export default function AchievementsSection() {
  const certs = [
    { text: 'Google Associate Data Practitioner certified', tag: 'Cloud & Data' },
    { text: 'Google Generative AI Leader certified', tag: 'AI / Leadership' },
    { text: 'McKinsey Forward Fellow', tag: 'Leadership' },
  ];

  return (
    <section id="achievements" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="07" title="Key Achievements" />
      <div style={{
        background: '#0E1420',
        border: '1px solid rgba(0,217,192,0.2)',
        borderRadius: '6px', padding: '2.5rem',
        marginBottom: '1.25rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '2rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #00D9C0, transparent)' }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00D9C0', background: 'rgba(0,217,192,0.08)', border: '1px solid rgba(0,217,192,0.2)', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>Performance</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A5568', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>Accenture</span>
          </div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#F0F4F8', lineHeight: 1.3, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Improved system performance by <span style={{ color: '#00D9C0' }}>60%</span> handling 40K+ records.
          </h3>
          <p style={{ color: '#8899AA', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Spearheaded backend optimization utilizing BigQuery, significantly reducing processing overhead and increasing overall throughput for massive datasets.
          </p>
        </div>
        <div style={{
          flexShrink: 0, width: '100px', height: '100px',
          border: '1px solid rgba(0,217,192,0.2)', borderRadius: '4px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', background: 'rgba(0,217,192,0.04)',
        }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#00D9C0', lineHeight: 1 }}>60%</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#4A5568', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>Perf Gain</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="certs-grid">
        {certs.map((c, i) => (
          <div key={i} style={{
            background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '6px', padding: '1.5rem',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
          }} className="cert-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8899AA" strokeWidth="1.8"><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A5568', border: '1px solid rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>{c.tag}</span>
            </div>
            <p style={{ color: '#F0F4F8', fontWeight: 500, fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

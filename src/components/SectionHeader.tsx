interface SectionHeaderProps {
  num: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ num, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ position: 'relative', marginBottom: '3.5rem' }}>
      <div style={{
        position: 'absolute', top: '-1.5rem', left: '-0.5rem',
        fontFamily: 'Syne, sans-serif', fontWeight: 800,
        fontSize: 'clamp(5rem, 10vw, 8rem)',
        color: 'rgba(255,255,255,0.025)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.06em',
      }}>{num}</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem', color: 'rgba(0,217,192,0.7)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'rgba(0,217,192,0.4)' }} />
          {num}
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          color: '#F0F4F8', margin: 0, letterSpacing: '-0.03em',
          lineHeight: 1.15,
        }}>{title}</h2>
        {subtitle && (
          <p style={{ color: '#8899AA', marginTop: '0.6rem', fontSize: '0.975rem', fontWeight: 400, lineHeight: 1.65 }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

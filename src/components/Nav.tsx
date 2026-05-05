interface NavProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

export default function Nav({ scrolled, menuOpen, setMenuOpen }: NavProps) {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Gen AI', href: '#ai-engineering' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '0 2rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <div style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem',
            color: '#F0F4F8', letterSpacing: '-0.04em', cursor: 'pointer',
          }}>
            AM<span style={{ color: '#00D9C0' }}>.</span>
          </div>
        </a>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <a key={link.name} href={link.href} className="nav-link" style={{
              color: '#8899AA', textDecoration: 'none', fontSize: '0.875rem',
              fontWeight: 500, letterSpacing: '0.02em',
              position: 'relative', paddingBottom: '2px', transition: 'color 0.2s',
            }}>{link.name}</a>
          ))}
          <a href="/resume.pdf" download="Ajay_Medidhi_Resume.pdf" target="_blank" rel="noreferrer" style={{
            border: '1px solid rgba(0,217,192,0.4)', color: '#00D9C0',
            padding: '0.4rem 1.1rem', borderRadius: '4px',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 0.2s', fontFamily: 'JetBrains Mono, monospace',
          }} className="resume-btn">Resume</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#F0F4F8', padding: '8px', display: 'none',
        }} aria-label="Menu">
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </nav>

      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
        background: '#0E1420', borderLeft: '1px solid rgba(255,255,255,0.08)',
        zIndex: 100,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        padding: '5rem 2rem 2rem',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
      }}>
        <button onClick={() => setMenuOpen(false)} style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'none', border: 'none', cursor: 'pointer', color: '#8899AA', padding: '8px',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {links.map((link, i) => (
          <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} style={{
            color: '#F0F4F8', textDecoration: 'none', fontSize: '1.75rem',
            fontWeight: 700, fontFamily: 'Syne, sans-serif',
            padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
            transition: 'color 0.2s',
          }}>
            <span style={{ color: '#00D9C0', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', marginRight: '0.75rem' }}>0{i+1}</span>
            {link.name}
          </a>
        ))}
        <a href="/resume.pdf" download="Ajay_Medidhi_Resume.pdf" style={{
          marginTop: '1.5rem', color: '#00D9C0', textDecoration: 'none',
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace',
          border: '1px solid rgba(0,217,192,0.3)', padding: '0.75rem 1rem',
          borderRadius: '4px', textAlign: 'center',
        }}>↓ Resume</a>
      </div>

      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 99, backdropFilter: 'blur(4px)',
        }} />
      )}
    </>
  );
}

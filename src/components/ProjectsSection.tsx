import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  label: string;
  featured: boolean;
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  highlights: string[];
  tags: string[];
  github: string;
  demo: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'PreventVital',
      label: 'Featured Project',
      featured: true,
      metrics: [
        { value: '100% Real-time', label: 'Data Sync' },
        { value: 'Role-Based', label: 'Access Control' },
      ],
      problem: 'Healthcare platforms often suffer from delayed reporting and fragmented patient data management.',
      solution: 'Architected a comprehensive health & wellness platform with real-time dashboards, automated PDF generation, and secure JWT-based RBAC.',
      highlights: [
        'Built scalable MERN stack architecture using TypeScript for type-safety.',
        'Implemented Redux Toolkit for complex real-time state management.',
        'Engineered an automated PDF report generation pipeline.',
      ],
      tags: ['MERN', 'TypeScript', 'Redux Toolkit', 'JWT', 'PDF Automation'],
      github: 'https://github.com/ajaymedidhi',
      demo: 'https://prevent-vital.netlify.app/',
    },
    {
      title: 'Role-Based Ticketing System',
      label: 'Project',
      featured: false,
      metrics: [
        { value: '+40%', label: 'Efficiency' },
        { value: '10+', label: 'Hospitals' },
      ],
      problem: 'Hospital IT teams faced massive inefficiencies managing large-ticket volumes across non-connected systems.',
      solution: 'Developed a robust multi-tenant system to govern the end-to-end technical support lifecycle with advanced analytics.',
      highlights: [
        'Designed multi-tenant architecture supporting separate environments for 10+ hospitals.',
        'Built custom analytics dashboards to track resolution times and bottlenecks.',
        'Optimized MongoDB queries to handle high-concurrency ticket updates.',
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/ajaymedidhi',
      demo: 'https://client-ticketing.vercel.app/login',
    },
  ];

  return (
    <section id="projects" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="03" title="Featured Projects" subtitle="High-impact systems engineered for scalability and real-world performance." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} style={{
            background: '#0E1420',
            border: `1px solid ${project.featured ? 'rgba(0,217,192,0.2)' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: '6px',
            padding: '2rem',
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden',
          }} className="project-card">
            {project.featured && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #00D9C0, transparent)' }} />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: project.featured ? '#00D9C0' : '#4A5568',
                border: `1px solid ${project.featured ? 'rgba(0,217,192,0.25)' : 'rgba(255,255,255,0.08)'}`,
                padding: '0.25rem 0.6rem', borderRadius: '2px',
              }}>{project.label}</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>

                <a href={project.demo} target="_blank" rel="noreferrer" aria-label="View live demo" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', color: '#8899AA', textDecoration: 'none' }} className="icon-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#F0F4F8', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>{project.title}</h3>
            <div style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.25rem' }}>
              {project.metrics.map((m, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#00D9C0' }}>{m.value}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#4A5568', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#4A5568', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Problem</div>
                <p style={{ color: '#8899AA', fontSize: '0.85rem', lineHeight: 1.65 }}>{project.problem}</p>
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#00D9C0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Solution</div>
                <p style={{ color: '#C8D6E5', fontSize: '0.85rem', lineHeight: 1.65 }}>{project.solution}</p>
              </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', flexGrow: 1 }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.6rem', color: '#8899AA', fontSize: '0.825rem', lineHeight: 1.6 }}>
                  <span style={{ color: '#00D9C0', flexShrink: 0, fontSize: '0.5rem', marginTop: '0.4rem' }}>◆</span>
                  {h}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {project.tags.map((t, i) => (
                <span key={i} style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.62rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: '#4A5568', background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '0.2rem 0.5rem', borderRadius: '2px',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

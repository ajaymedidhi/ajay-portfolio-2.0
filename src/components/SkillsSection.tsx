import SectionHeader from './SectionHeader';

interface SkillCategory {
  title: string;
  accent: string;
  skills: { name: string; level: number; tag: string }[];
}

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend Architecture', accent: '#00D9C0',
      skills: [
        { name: 'Angular', level: 92, tag: 'Production · 1yr' },
        { name: 'React', level: 88, tag: 'Production · 8mo' },
        { name: 'Tailwind CSS', level: 90, tag: 'Advanced' },
        { name: 'TypeScript', level: 85, tag: 'Advanced' },
      ],
    },
    {
      title: 'Backend Engineering', accent: '#4A9EFF',
      skills: [
        { name: 'Node.js', level: 88, tag: 'Production · 1yr' },
        { name: 'Express', level: 85, tag: 'Advanced' },
        { name: 'REST APIs', level: 92, tag: 'Advanced' },
      ],
    },
    {
      title: 'Data & Databases', accent: '#00D9C0',
      skills: [
        { name: 'BigQuery', level: 85, tag: 'Production · 1yr' },
        { name: 'Spanner', level: 70, tag: 'Intermediate' },
        { name: 'MongoDB', level: 82, tag: 'Projects · 8mo' },
      ],
    },
    {
      title: 'Infrastructure & Tools', accent: '#4A9EFF',
      skills: [
        { name: 'Google Cloud Platform', level: 75, tag: 'Certified · 1yr' },
        { name: 'Git', level: 90, tag: 'Advanced' },
        { name: 'CI/CD Pipelines', level: 72, tag: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="skills" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="04" title="Technical Arsenal" subtitle="Specialized in scalable frontend and high-performance backend systems." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} style={{ background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '2rem' }} className="skill-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F0F4F8', letterSpacing: '-0.01em' }}>{cat.title}</h3>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: cat.accent, border: `1px solid ${cat.accent}35`,
                background: `${cat.accent}0A`, padding: '0.2rem 0.55rem', borderRadius: '4px',
              }}>{cat.skills.length} skills</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cat.skills.map((skill, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#C8D6E5', fontWeight: 500, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{skill.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: cat.accent,
                        border: `1px solid ${cat.accent + '35'}`,
                        padding: '0.2rem 0.6rem', borderRadius: '4px', background: `${cat.accent}0A`
                      }}>{skill.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

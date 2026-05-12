import SectionHeader from './SectionHeader';

interface SkillCategory {
  title: string;
  accent: string;
  skills: { name: string; level: number; tag: string }[];
}

const aiTools = [
  'OpenAI (GPT)', 'Google Gemini', 'Vertex AI', 'LangChain',
  'LlamaIndex', 'Prompt Engineering', 'RAG Systems',
  'GitHub Copilot', 'Cursor', 'AI Automations',
];

const aiCapabilities = [
  'Integrated LangChain + Vertex AI into SkillSeed for intelligent content retrieval.',
  'Built AI-assisted dev workflows using GitHub Copilot & Cursor — cutting boilerplate by ~40%.',
  'Engineered prompt pipelines for structured data extraction from unstructured student inputs.',
];

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend Architecture', accent: '#00D9C0',
      skills: [
        { name: 'Angular', level: 92, tag: 'Production · 1yr' },
        { name: 'React', level: 88, tag: 'Production · 2yr' },
        { name: 'Tailwind CSS', level: 90, tag: 'Advanced' },
        { name: 'TypeScript', level: 85, tag: 'Intermediate' },
      ],
    },
    {
      title: 'Backend Engineering', accent: '#4A9EFF',
      skills: [
        { name: 'Node.js', level: 88, tag: 'Production · 1.5yr' },
        { name: 'Express', level: 85, tag: 'Advanced' },
        { name: 'REST APIs', level: 92, tag: 'Advanced' },
        { name: 'Python', level: 85, tag: 'Intermediate' },
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
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: cat.accent, border: `1px solid ${cat.accent}35`,
                      padding: '0.2rem 0.6rem', borderRadius: '4px', background: `${cat.accent}0A`,
                    }}>{skill.tag}</span>
                  </div>
                  <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${cat.accent}, ${cat.accent}99)`,
                      borderRadius: '2px',
                      transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* AI & GenAI — full-width card */}
        <div style={{
          gridColumn: '1 / -1',
          background: '#0E1420',
          border: '1px solid rgba(0,217,192,0.15)',
          borderRadius: '12px', padding: '2rem',
          position: 'relative', overflow: 'hidden',
        }} className="skill-card">
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #00D9C0, transparent)', opacity: 0.5 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F0F4F8', letterSpacing: '-0.01em' }}>AI & GenAI Engineering</h3>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#00D9C0', border: '1px solid rgba(0,217,192,0.25)',
              background: 'rgba(0,217,192,0.06)', padding: '0.2rem 0.55rem', borderRadius: '4px',
            }}>Generative AI</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="ai-card-grid">
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#00D9C0', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>Core Capabilities</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {aiCapabilities.map((c, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', color: '#8899AA', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#00D9C0', flexShrink: 0, fontSize: '0.5rem', marginTop: '0.4rem' }}>◆</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#4A9EFF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>Ecosystem</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {aiTools.map((t, i) => (
                  <span key={i} style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem', color: '#8899AA',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '0.3rem 0.6rem', borderRadius: '2px',
                    whiteSpace: 'nowrap',
                  }} className="tool-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

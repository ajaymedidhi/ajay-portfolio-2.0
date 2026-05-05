import SectionHeader from './SectionHeader';

export default function GenAISection() {
  const tools = ['OpenAI (GPT)', 'Google Gemini', 'Vertex AI', 'Prompt Engineering', 'LangChain', 'GitHub Copilot', 'Cursor', 'AI Automations'];
  const capabilities = [
    'Build active AI-powered features utilizing modern LLMs.',
    'Integrate advanced AI APIs natively into MERN architecture.',
    'Leverage deep prompt engineering for rigid data structuring.',
  ];
  const impacts = [
    'Accelerate full-stack development cycles and reduce bug resolution times.',
    'Enhance productivity by generating boilerplate and performing architectural validation.',
    'Design self-healing data pipelines leveraging AI for error correction.',
  ];

  return (
    <section id="ai-engineering" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="06" title="AI Engineering & GenAI" subtitle="I treat Generative AI as a productivity multiplier — natively integrated into development workflows." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="genai-grid">
        <div style={{ background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1.75rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#00D9C0', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Core Capabilities</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {capabilities.map((c, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', color: '#8899AA', fontSize: '0.875rem', lineHeight: 1.6 }}>
                <span style={{ color: '#00D9C0', flexShrink: 0, fontSize: '0.5rem', marginTop: '0.4rem' }}>◆</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1.75rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#4A9EFF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Ecosystem</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tools.map((t, i) => (
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
        <div style={{ background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1.75rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#8899AA', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Production Impact</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {impacts.map((c, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', color: '#8899AA', fontSize: '0.875rem', lineHeight: 1.6 }}>
                <span style={{ color: '#4A9EFF', flexShrink: 0, fontSize: '0.5rem', marginTop: '0.4rem' }}>◆</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

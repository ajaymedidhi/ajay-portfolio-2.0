import type { ReactNode } from 'react';
import SectionHeader from './SectionHeader';

interface Offering {
  title: string;
  metric: string;
  body: string;
  icon: ReactNode;
}

export default function WhatIBringSection() {
  const offerings: Offering[] = [
    {
      title: 'Performance Optimization', metric: '60% Improvements',
      body: 'Proven track record of drastically improving system performance utilizing advanced data ingestion pipelines and optimized queries.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    },
    {
      title: 'Scalable System Design', metric: 'High Concurrency',
      body: 'Architecting robust, fault-tolerant solutions capable of handling massive scale and traffic seamlessly in production.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    },
    {
      title: 'Production-Grade Reliability', metric: '99.9% Uptime',
      body: 'Battle-tested experience resolving critical, high-priority production issues across complex microservice environments.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      title: 'Cloud & Data Engineering', metric: 'GCP & BigQuery',
      body: 'Deep technical mindset for analyzing massive data streams, relying on enterprise cloud technologies to drive data decisions.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    },
  ];

  return (
    <section id="what-i-bring" style={{ scrollMarginTop: '5rem' }}>
      <SectionHeader num="08" title="Why Me?" subtitle="What sets me apart as an engineer." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="bring-grid">
        {offerings.map((item, i) => (
          <div key={i} style={{
            background: '#0E1420', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '6px', padding: '2rem',
          }} className="bring-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px', height: '44px',
                border: '1px solid rgba(0,217,192,0.2)', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00D9C0', background: 'rgba(0,217,192,0.05)', flexShrink: 0,
              }}>{item.icon}</div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#00D9C0', background: 'rgba(0,217,192,0.06)',
                border: '1px solid rgba(0,217,192,0.15)',
                padding: '0.25rem 0.6rem', borderRadius: '2px',
              }}>{item.metric}</span>
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F0F4F8', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>{item.title}</h3>
            <p style={{ color: '#8899AA', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

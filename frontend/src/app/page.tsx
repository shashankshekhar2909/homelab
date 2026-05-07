'use client';

import Link from 'next/link';
import { Grid, Column, Tile, Tag } from '@carbon/react';
import { quickCopyPath } from '@/data/knowledge-base';
import { systems } from '@/data/systems';

const architectureCards = [
  { title: 'Dev Machine', text: 'Lenovo laptop for coding and AI tooling.' },
  { title: 'AI Layer', text: 'LiteLLM with local and cloud model routing.' },
  { title: 'Homelab Server', text: 'Proxmox host with isolated workloads.' },
  { title: 'Execution Layer', text: 'Docker, VMs, and services running reproducible apps.' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-glow" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <span className="eyebrow">BuildWithShashank</span>
          <h1
            className="page-title"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '46rem',
              marginBottom: '1.1rem',
            }}
          >
            I design and ship AI-powered systems using my own infrastructure.
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#525252',
              maxWidth: '38rem',
              margin: '0 0 0.6rem',
            }}
          >
            Understand how it works. Build your own.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#6f6f6f',
              maxWidth: '38rem',
              margin: 0,
            }}
          >
            From idea → architecture → deployment — all in one system.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/systems" className="btn-primary">Explore Systems</Link>
            <Link href="/build-guide" className="btn-secondary">Build Your Own</Link>
          </div>
        </div>
      </section>

      <Grid fullWidth className="page-grid">
        <Column sm={4} md={8} lg={16}>
          <h2 className="section-heading" style={{ marginBottom: '0.4rem' }}>Systems I Built</h2>
          <p className="page-subtitle" style={{ marginTop: 0 }}>Problem-first systems designed for speed, control, and repeatability.</p>
        </Column>
        {systems.slice(0, 4).map((s) => (
          <Column key={s.slug} sm={4} md={4} lg={8}>
            <Tile className="section-tile system-card" style={{ background: '#f8f9fb' }}>
              <div>
                <h3 className="section-heading">{s.title}</h3>
                <p>{s.summary}</p>
                <div className="tag-row">{s.tags.slice(0, 2).map((t) => <Tag key={t} type="blue">{t}</Tag>)}</div>
              </div>
              <Link href={`/systems/${s.slug}`} className="btn-secondary" style={{ width: 'fit-content' }}>View details</Link>
            </Tile>
          </Column>
        ))}

        <Column sm={4} md={8} lg={16}>
          <h2 className="section-heading" style={{ marginBottom: '0.4rem' }}>Architecture</h2>
        </Column>
        {architectureCards.map((card) => (
          <Column key={card.title} sm={4} md={4} lg={4}>
            <Tile className="section-tile" style={{ background: '#f8f9fb', minHeight: 150 }}>
              <h3 className="section-heading">{card.title}</h3>
              <p>{card.text}</p>
            </Tile>
          </Column>
        ))}

        <Column sm={4} md={8} lg={16}>
          <h2 className="section-heading" style={{ marginBottom: '0.4rem' }}>Quick Start</h2>
          <p className="page-subtitle" style={{ marginTop: 0 }}>Fast path if you want to start immediately.</p>
        </Column>
        {quickCopyPath.map((step, i) => (
          <Column key={step} sm={4} md={4} lg={8}>
            <Tile className="section-tile" style={{ background: '#f8f9fb' }}>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Step {i + 1}
              </p>
              <h3 className="section-heading" style={{ marginTop: '0.5rem' }}>{step}</h3>
            </Tile>
          </Column>
        ))}
      </Grid>
    </>
  );
}

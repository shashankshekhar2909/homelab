'use client';

import Link from 'next/link';
import { Grid, Column, Tag } from '@carbon/react';
import { ArrowRight, DataCenter, Cube, Terminal } from '@carbon/icons-react';
import { quickCopyPath } from '@/data/knowledge-base';
import { systems } from '@/data/systems';

const flowSteps = ['Idea', 'plan.md', 'AI tooling via LiteLLM', 'Docker container', 'Proxmox host'];

const architecture = [
  { icon: Terminal, title: 'Dev machine', text: 'Laptop for coding, AI CLI tools, and plan.md-first design work.' },
  { icon: Cube, title: 'AI layer', text: 'LiteLLM routes requests across local and cloud models from one gateway.' },
  { icon: DataCenter, title: 'Homelab server', text: 'Proxmox host running isolated LXC containers and Docker workloads.' },
];

const [featured, ...rest] = systems;

export default function HomePage() {
  return (
    <>
      <section className="hero-glow">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">BuildWithShashank</span>
            <h1
              className="page-title"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                maxWidth: '30rem',
                marginBottom: '1.1rem',
                color: 'var(--on-graphite)',
              }}
            >
              A homelab documented like a system, not a status page.
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '32rem', margin: '0 0 0.6rem' }}>
              Real infrastructure, the reasoning behind it, and a path to build your own: Proxmox for isolation,
              Docker for repeatable deploys, LiteLLM for model routing.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '32rem', margin: 0, color: 'var(--on-graphite-soft)' }}>
              Problem first, then the system, then how it actually runs.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.25rem' }}>
              <Link href="/systems" className="btn-primary">
                Explore systems <ArrowRight size={16} />
              </Link>
              <Link href="/build-guide" className="btn-secondary">Build your own</Link>
            </div>
          </div>

          <div className="hero-flow">
            <p className="hero-flow-label">How code reaches the homelab</p>
            <ol className="hero-flow-steps">
              {flowSteps.map((step, i) => (
                <li key={step}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Grid fullWidth className="page-grid">
        <Column sm={4} md={8} lg={16}>
          <span className="eyebrow">Systems I built</span>
          <h2 className="page-title" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            Problem-first, not tool-first
          </h2>
          <p className="page-subtitle" style={{ marginTop: 0 }}>
            Each system started as a real annoyance: slow app setup, cloud lock-in, fragmented files. Every page
            walks through the problem, the build, the infrastructure it runs on, and what it actually cost.
          </p>
        </Column>

        <Column sm={4} md={8} lg={9}>
          <article className="systems-card systems-card--feature">
            <div>
              <span className="detail-label">Featured</span>
              <h3 className="systems-card-title" style={{ marginTop: '0.5rem', fontSize: '1.35rem' }}>{featured.title}</h3>
              <p className="systems-card-text" style={{ minHeight: 0 }}>{featured.problem}</p>
              <div className="tag-row">{featured.tags.map((t) => <Tag key={t} type="warm-gray">{t}</Tag>)}</div>
            </div>
            <div className="systems-card-actions">
              <span className="detail-label">{featured.tech.slice(0, 3).join(' · ')}</span>
              <Link href={`/systems/${featured.slug}`} className="systems-card-link">View details →</Link>
            </div>
          </article>
        </Column>

        <Column sm={4} md={8} lg={7}>
          <div className="stack" style={{ gap: 0 }}>
            {rest.map((s) => (
              <Link
                key={s.slug}
                href={`/systems/${s.slug}`}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--line)',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <h3 className="systems-card-title" style={{ margin: 0, fontSize: '1rem' }}>{s.title}</h3>
                  <ArrowRight size={16} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                </div>
                <p style={{ margin: '0.35rem 0 0', color: 'var(--ink-soft)', fontSize: '0.9rem' }}>{s.summary}</p>
              </Link>
            ))}
          </div>
        </Column>

        <Column sm={4} md={8} lg={16}>
          <span className="eyebrow">Architecture</span>
          <h2 className="page-title" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How it runs</h2>
          <p className="page-subtitle" style={{ marginTop: 0 }}>
            An architecture pattern, not a live status feed - see <Link href="/homelab">the homelab page</Link> for
            day-to-day usage.
          </p>
        </Column>
        {architecture.map(({ icon: Icon, title, text }) => (
          <Column key={title} sm={4} md={4} lg={5}>
            <div className="section-tile" style={{ minHeight: 150 }}>
              <Icon size={20} style={{ marginBottom: '0.75rem', color: 'var(--accent-hover)' }} />
              <h3 className="section-heading" style={{ fontSize: '1rem' }}>{title}</h3>
              <p style={{ margin: 0, color: 'var(--ink-soft)' }}>{text}</p>
            </div>
          </Column>
        ))}

        <Column sm={4} md={8} lg={16}>
          <span className="eyebrow">Start here</span>
          <h2 className="page-title" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Build your own</h2>
          <p className="page-subtitle" style={{ marginTop: 0 }}>The fast path if you want to start today.</p>
        </Column>
        <Column sm={4} md={8} lg={16}>
          <ol className="stack" style={{ gap: '0.6rem', fontFamily: "'IBM Plex Mono', monospace" }}>
            {quickCopyPath.map((step, i) => (
              <li key={step} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                <span className="detail-label" style={{ color: 'var(--accent-hover)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <Link href="/build-guide" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            Read the full build guide <ArrowRight size={16} />
          </Link>
        </Column>
      </Grid>
    </>
  );
}

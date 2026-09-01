'use client';

import Link from 'next/link';
import { Column, Grid, Tag } from '@carbon/react';
import { systems } from '@/data/systems';

export default function SystemsPage() {
  return (
    <Grid fullWidth className="page-grid systems-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">Systems I Built</h1>
        <p className="page-subtitle">Problem-first systems with architecture, outcomes, decisions, and tradeoffs.</p>
      </Column>

      {systems.map((s) => (
        <Column key={s.slug} sm={4} md={4} lg={5}>
          <article className="systems-card">
            <div>
              <h3 className="systems-card-title">{s.title}</h3>
              <p className="systems-card-text">{s.summary}</p>
              <div className="tag-row">{s.tags.map((t) => <Tag key={t} type="warm-gray">{t}</Tag>)}</div>
            </div>

            <div className="systems-card-actions">
              <span style={{ fontSize: '0.75rem', color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                System Detail
              </span>
              <Link href={`/systems/${s.slug}`} className="systems-card-link">
                View Details →
              </Link>
            </div>
          </article>
        </Column>
      ))}
    </Grid>
  );
}

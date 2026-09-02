'use client';

import Link from 'next/link';
import { Column, Grid, Tag } from '@carbon/react';
import { systems } from '@/data/systems';

export default function SystemsPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">Systems I Built</h1>
        <p className="page-subtitle">Problem-first systems with architecture, outcomes, decisions, and tradeoffs.</p>
      </Column>

      <Column sm={4} md={8} lg={16}>
        <div className="systems-bento">
          {systems.map((s, i) => (
            <article key={s.slug} className={i === 0 ? 'systems-card systems-card--feature' : 'systems-card'}>
              <div>
                {i === 0 && <span className="detail-label">Featured</span>}
                <h3 className="systems-card-title" style={i === 0 ? { marginTop: '0.5rem' } : undefined}>{s.title}</h3>
                <p className="systems-card-text">{s.summary}</p>
                <div className="tag-row">{s.tags.map((t) => <Tag key={t} type="warm-gray">{t}</Tag>)}</div>
              </div>

              <div className="systems-card-actions">
                <span className="detail-label">System Detail</span>
                <Link href={`/systems/${s.slug}`} className="systems-card-link">
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Column>
    </Grid>
  );
}

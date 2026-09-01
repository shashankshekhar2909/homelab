'use client';

import { Grid, Column, Tile, Tag } from '@carbon/react';
import { services } from '@/data/knowledge-base';

export default function ServicesPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <span className="eyebrow">Point-in-time overview</span>
        <h1 className="page-title">Services</h1>
        <p className="page-subtitle">Core services grouped by purpose and role, not a live status feed.</p>
      </Column>
      {services.map((s) => (
        <Column key={s.id} sm={4} md={4} lg={8}>
          <Tile className="section-tile system-card">
            <div>
              <h3 className="section-heading">{s.name}</h3>
              <p>{s.description}</p>
              <p><strong>Runs on:</strong> {s.runs_on}</p>
              <p><strong>Tech:</strong> {s.tech_stack}</p>
              <div className="tag-row"><Tag type="warm-gray">{s.category}</Tag></div>
            </div>
          </Tile>
        </Column>
      ))}
    </Grid>
  );
}

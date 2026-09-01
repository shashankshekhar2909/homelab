'use client';

import { Grid, Column, Tile, Tag } from '@carbon/react';
import { templates } from '@/data/knowledge-base';

export default function TemplatesPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">Templates</h1>
        <p className="page-subtitle">Reusable setup blueprints for common homelab outcomes.</p>
      </Column>
      {templates.map((t) => (
        <Column key={t.id} sm={4} md={4} lg={8}>
          <Tile className="section-tile">
            <h3 className="section-heading">{t.name}</h3>
            <p>Estimated time: {t.eta}</p>
            <div className="tag-row"><Tag type="warm-gray">{t.difficulty}</Tag></div>
          </Tile>
        </Column>
      ))}
    </Grid>
  );
}

'use client';

import { Column, Grid, Tile } from '@carbon/react';
import { timeline } from '@/data/systems';

export default function TimelinePage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">Evolution Timeline</h1>
        <p className="page-subtitle">How the setup matured from basic services to structured AI-native workflows.</p>
      </Column>
      {timeline.map((t) => (
        <Column key={t.phase} sm={4} md={8} lg={16}><Tile className="section-tile"><strong>{t.phase}:</strong> {t.text}</Tile></Column>
      ))}
    </Grid>
  );
}

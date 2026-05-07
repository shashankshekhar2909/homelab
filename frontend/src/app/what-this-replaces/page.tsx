'use client';

import { Column, Grid, Tile } from '@carbon/react';
import { replacements } from '@/data/systems';

export default function ReplacesPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">What This Setup Replaces</h1>
        <p className="page-subtitle">Practical replacement patterns for cost, control, and privacy.</p>
      </Column>
      {replacements.map(([a, b]) => (
        <Column key={a} sm={4} md={4} lg={8}><Tile className="section-tile"><strong>{a}</strong><p>→ {b}</p></Tile></Column>
      ))}
    </Grid>
  );
}

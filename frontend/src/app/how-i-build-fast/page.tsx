'use client';

import { Column, Grid, Tag, Tile } from '@carbon/react';

const principles = [
  { title: 'Architecture first', text: 'Define problem, constraints, and target flow before writing code.' },
  { title: 'AI-assisted execution', text: 'Use AI for scaffolding, refactoring, and debugging loops.' },
  { title: 'Containerized runtime', text: 'Use Docker for predictable, disposable environments.' },
  { title: 'Homelab as execution layer', text: 'Run, test, and iterate on infrastructure you control.' },
];

const workflow = ['Problem framing', 'plan.md', 'AI scaffolding', 'Docker run', 'Test + fix', 'Ship + document'];

export default function ShipFastPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">How I Ship Fast</h1>
        <p className="page-subtitle">Execution playbook focused on speed, control, and repeatability.</p>
      </Column>

      {principles.map((p) => (
        <Column key={p.title} sm={4} md={4} lg={8}>
          <Tile className="section-tile"><h3 className="section-heading">{p.title}</h3><p>{p.text}</p></Tile>
        </Column>
      ))}

      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">Workflow</h3><ol className="stack">{workflow.map((w) => <li key={w}>{w}</li>)}</ol></Tile></Column>
      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">Result</h3><div className="tag-row"><Tag type="gray">Faster iteration</Tag><Tag type="gray">Lower cost</Tag><Tag type="gray">Higher control</Tag></div></Tile></Column>
    </Grid>
  );
}

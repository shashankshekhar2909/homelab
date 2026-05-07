import { notFound } from 'next/navigation';
import { Column, Grid, Tag, Tile } from '@carbon/react';
import { systems } from '@/data/systems';
import { SecurityNote } from '@/components/common/security-note';

export default async function SystemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);
  if (!system) return notFound();

  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}><h1 className="page-title">{system.title}</h1></Column>
      <Column sm={4} md={8} lg={16}><SecurityNote /></Column>

      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">Problem</h3><p>{system.problem}</p></Tile></Column>

      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">System Built</h3><ul className="stack">{system.systemBuilt.map((x) => <li key={x}>{x}</li>)}</ul></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Infrastructure</h3><ul className="stack">{system.infrastructure.map((x) => <li key={x}>{x}</li>)}</ul></Tile></Column>

      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">Outcome</h3><ul className="stack">{system.outcome.map((x) => <li key={x}>{x}</li>)}</ul></Tile></Column>
      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">How It Works</h3><ol className="stack">{system.flow.map((x) => <li key={x}>{x}</li>)}</ol></Tile></Column>

      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Why This Stack?</h3><ul className="stack">{system.decisions.map((x) => <li key={x}>{x}</li>)}</ul></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Tradeoffs & Lessons</h3><ul className="stack">{system.tradeoffs.map((x) => <li key={x}>{x}</li>)}</ul></Tile></Column>

      <Column sm={4} md={8} lg={16}>
        <Tile className="section-tile">
          <h3 className="section-heading">Tech Stack</h3>
          <div className="tag-row">{system.tech.map((x) => <Tag key={x} type="purple">{x}</Tag>)}</div>
          <h3 className="section-heading">Notes</h3>
          <p>{system.notes}</p>
        </Tile>
      </Column>
    </Grid>
  );
}

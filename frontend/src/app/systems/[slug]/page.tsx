import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Column, Grid, Tag, Tile } from '@carbon/react';
import { systems } from '@/data/systems';
import { SecurityNote } from '@/components/common/security-note';
import { pageMetadata, siteUrl, jsonLdScript } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);
  if (!system) {
    return { robots: { index: false, follow: false } };
  }
  const description = system.summary.length < 120
    ? `${system.summary} See its architecture, infrastructure choices, and tradeoffs.`
    : system.summary;
  return pageMetadata({
    title: system.title,
    description,
    path: `/systems/${system.slug}`,
  });
}

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export default async function SystemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);
  if (!system) return notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Systems I Built', item: `${siteUrl}/systems` },
      { '@type': 'ListItem', position: 3, name: system.title, item: `${siteUrl}/systems/${system.slug}` },
    ],
  };

  return (
    <Grid fullWidth className="page-grid">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbJsonLd) }}
      />
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
          <div className="tag-row">{system.tech.map((x) => <Tag key={x} type="gray">{x}</Tag>)}</div>
          <h3 className="section-heading">Notes</h3>
          <p>{system.notes}</p>
        </Tile>
      </Column>
    </Grid>
  );
}

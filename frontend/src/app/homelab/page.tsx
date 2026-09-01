'use client';

import { Column, Grid, Tile, Tag } from '@carbon/react';
import { SecurityNote } from '@/components/common/security-note';

const nodes = [
  {
    name: 'Proxmox host',
    role: 'Virtualization layer',
    text: 'Runs isolated LXC/VM workloads: storage, media, and photo services.',
  },
  {
    name: 'Lenovo Linux node',
    role: 'Build / deploy',
    text: 'Primary machine for coding and shipping. Runs containerized web apps and platform services.',
  },
  {
    name: 'ASUS Linux node',
    role: 'AI routing',
    text: 'Handles AI routing and experiments, plus supporting workloads for the dev stack.',
  },
  {
    name: 'Hetzner VPS',
    role: 'Public edge',
    text: 'Public cloud node for select deployments that need a stable public address.',
  },
];

export default function HomelabPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <span className="eyebrow">Architecture overview</span>
        <h1 className="page-title">My Homelab</h1>
        <p className="page-subtitle">
          A point-in-time overview of the nodes, connectivity, and platform components. Roles and data flow, not
          an inventory of hosts, ports, or credentials.
        </p>
      </Column>
      <Column sm={4} md={8} lg={16}><SecurityNote /></Column>

      <Column sm={4} md={8} lg={16}>
        <h2 className="section-heading" style={{ fontSize: '1.1rem' }}>Nodes</h2>
      </Column>
      {nodes.map((n) => (
        <Column key={n.name} sm={4} md={4} lg={4}>
          <Tile className="section-tile" style={{ minHeight: 170 }}>
            <span className="detail-label">{n.role}</span>
            <h3 className="section-heading" style={{ marginTop: '0.4rem', fontSize: '1rem' }}>{n.name}</h3>
            <p style={{ margin: 0, color: 'var(--ink-soft)' }}>{n.text}</p>
          </Tile>
        </Column>
      ))}

      <Column sm={4} md={8} lg={8}>
        <Tile className="section-tile" style={{ minHeight: 160 }}>
          <h3 className="section-heading">Private connectivity</h3>
          <p>LAN for on-site traffic, Tailscale for reaching nodes that are not physically local.</p>
        </Tile>
      </Column>
      <Column sm={4} md={8} lg={8}>
        <Tile className="section-tile" style={{ minHeight: 160 }}>
          <h3 className="section-heading">Public ingress</h3>
          <p>Cloudflare Tunnels front anything meant to be reachable publicly. No open inbound ports.</p>
        </Tile>
      </Column>

      <Column sm={4} md={8} lg={16}>
        <h2 className="section-heading" style={{ fontSize: '1.1rem' }}>Platform components</h2>
        <p className="page-subtitle" style={{ marginTop: 0 }}>Runtime and data layer shared across nodes.</p>
      </Column>
      <Column sm={4} md={8} lg={16}>
        <Tile className="section-tile">
          <div className="tag-row">
            <Tag type="warm-gray">Docker Compose</Tag>
            <Tag type="warm-gray">PostgreSQL / pgvector</Tag>
            <Tag type="warm-gray">Redis</Tag>
            <Tag type="warm-gray">Object storage</Tag>
            <Tag type="gray">LiteLLM / model gateways</Tag>
            <Tag type="gray">BuildOS</Tag>
            <Tag type="gray">Node Commander</Tag>
            <Tag type="gray">Knowledge Hub</Tag>
            <Tag type="warm-gray">Monitoring</Tag>
            <Tag type="warm-gray">Portainer</Tag>
          </div>
        </Tile>
      </Column>

      <Column sm={4} md={4} lg={5}>
        <Tile className="section-tile"><h3 className="section-heading">Storage & files</h3><p>Samba share for consistent file access across laptop, phone, and other devices.</p></Tile>
      </Column>
      <Column sm={4} md={4} lg={5}>
        <Tile className="section-tile"><h3 className="section-heading">Media & photos</h3><p>Jellyfin for streaming, Immich for private photo backup from phone.</p></Tile>
      </Column>
      <Column sm={4} md={4} lg={6}>
        <Tile className="section-tile"><h3 className="section-heading">AI & development</h3><p>Ollama for local models, LiteLLM as the gateway for cloud providers, BuildOS for project context.</p></Tile>
      </Column>

      <Column sm={4} md={8} lg={16}>
        <Tile className="section-tile">
          <h3 className="section-heading">Daily flow</h3>
          <pre className="flow-block">{`Code on the Lenovo node
AI CLI tools route through LiteLLM / model gateways
Ship via Docker Compose to the node that fits: Lenovo, ASUS, or the Hetzner edge
Reach it over Tailscale (private) or a Cloudflare Tunnel (public)`}</pre>
        </Tile>
      </Column>
    </Grid>
  );
}

'use client';

import { Column, Grid, Tile, Tag } from '@carbon/react';
import { SecurityNote } from '@/components/common/security-note';
import { BeginnerTip, AdvancedNote } from '@/components/common/tip-boxes';

const modules = [
  { title: 'LiteLLM / model gateways', text: 'Unified routing layer in front of OpenAI, Anthropic, Groq, and other providers, plus local models.' },
  { title: 'BuildOS', text: 'Generates a structured project context file per repo so AI tooling starts with real grounding, not a blank slate.' },
  { title: 'Node Commander', text: 'Coordinates deployment across the Lenovo, ASUS, and Hetzner nodes so shipping a change is not manual per-host work.' },
  { title: 'Knowledge Hub', text: 'Indexed reference layer backed by pgvector, used for retrieval when AI tooling needs project or docs context.' },
];

export default function AiWorkflowPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <span className="eyebrow">Architecture overview</span>
        <h1 className="page-title">AI Workflow</h1>
        <p className="page-subtitle">How local infra, AI tooling, and delivery loops connect, at the component level.</p>
      </Column>
      <Column sm={4} md={8} lg={16}><SecurityNote /></Column>

      {modules.map((m) => (
        <Column key={m.title} sm={4} md={4} lg={8}>
          <Tile className="section-tile" style={{ minHeight: 150 }}>
            <h3 className="section-heading" style={{ fontSize: '1rem' }}>{m.title}</h3>
            <p style={{ margin: 0, color: 'var(--muted)' }}>{m.text}</p>
          </Tile>
        </Column>
      ))}

      <Column sm={4} md={8} lg={16}>
        <Tile className="section-tile">
          <h3 className="section-heading">Idea to running code</h3>
          <pre className="flow-block">{`Lenovo node (build/deploy)
→ AI CLI tools
→ LiteLLM / model gateways
→ local models (Ollama, on the ASUS node) + cloud providers
→ generated / reviewed code
→ Docker Compose
→ deployed to Lenovo, ASUS, or the Hetzner edge
→ reached over Tailscale (private) or a Cloudflare Tunnel (public)`}</pre>
        </Tile>
      </Column>

      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Local AI</h3><p>Ollama on the ASUS node for quick, private, offline-friendly tasks.</p></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Cloud AI</h3><p>Routed through LiteLLM for deeper reasoning and larger generation tasks, without hardcoding a single provider.</p></Tile></Column>

      <Column sm={4} md={8} lg={16}><BeginnerTip text="Start with a local model for speed. Reach for cloud through the gateway when the task actually needs it." /></Column>
      <Column sm={4} md={8} lg={16}><AdvancedNote text="Centralizing model routing behind one gateway is what makes swapping providers a config change instead of a rewrite." /></Column>
    </Grid>
  );
}

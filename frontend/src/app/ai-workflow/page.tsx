'use client';

import { Column, Grid, Tile, Tag } from '@carbon/react';
import { SecurityNote } from '@/components/common/security-note';
import { BeginnerTip, AdvancedNote } from '@/components/common/tip-boxes';

export default function AiWorkflowPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">AI Workflow</h1>
        <p className="page-subtitle">How local infra, AI tooling, and delivery loops connect in daily execution.</p>
      </Column>
      <Column sm={4} md={8} lg={16}><SecurityNote /></Column>

      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">LLM Gateway</h3><p>LiteLLM provides unified multi-provider routing and cost control.</p><div className="tag-row"><Tag type="purple">LiteLLM</Tag></div></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Dev Environment</h3><p>Docker-based project isolation for reproducible app execution.</p><div className="tag-row"><Tag type="blue">Docker</Tag></div></Tile></Column>

      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">AI + Dev Integration</h3><pre className="flow-block">{`Lenovo Dev Laptop
→ AI CLI tools
→ LiteLLM Gateway
→ Local + cloud models
→ Generated code
→ Docker runtime
→ Homelab execution`}</pre></Tile></Column>

      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Local AI</h3><p>Use local models for quick tests and private experimentation.</p></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Cloud AI</h3><p>Use cloud models for deeper reasoning and large generation tasks.</p></Tile></Column>

      <Column sm={4} md={8} lg={16}><BeginnerTip text="Use local first for speed, cloud for depth when needed." /></Column>
      <Column sm={4} md={8} lg={16}><AdvancedNote text="Centralize model routing to avoid provider lock-in." /></Column>
    </Grid>
  );
}

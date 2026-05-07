'use client';

import { Column, Grid, Tile } from '@carbon/react';

const steps = [
  {
    title: '1. Start from the Problem',
    body: 'Before writing anything, I define what needs to be solved, who it is for, and what success looks like. If the problem is not clear, the system will be messy.',
  },
  {
    title: '2. Design Architecture Before Code',
    body: 'I create a simple plan with modules, data flow, APIs, and dependencies. Usually this lives in plan.md. This step saves more time than any tool.',
  },
  {
    title: '3. Use AI to Accelerate Execution',
    body: 'I use AI as a multiplier, not a shortcut: generate boilerplate, refine logic, debug faster, and explore options. The structure always comes from me.',
  },
  {
    title: '4. Containerize and Test Quickly',
    body: 'Every system runs in containers to isolate environments, avoid conflicts, and test changes instantly. This lets me iterate without breaking things.',
  },
  {
    title: '5. Iterate Fast',
    body: 'I do not aim for perfection on day one. I build small, test early, and improve continuously. Speed comes from iteration, not initial design.',
  },
  {
    title: '6. Document What Matters',
    body: 'I track what each system does, how it runs, and key decisions. Not for others first, but for my future self.',
  },
];

export default function HowIBuildPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">How I Build Systems</h1>
        <p className="page-subtitle">I don’t start with code. I start with clarity.</p>
      </Column>

      {steps.map((step) => (
        <Column key={step.title} sm={4} md={4} lg={8}>
          <Tile className="section-tile">
            <h3 className="section-heading">{step.title}</h3>
            <p>{step.body}</p>
          </Tile>
        </Column>
      ))}

      <Column sm={4} md={8} lg={16}>
        <Tile className="section-tile">
          <h3 className="section-heading">Philosophy</h3>
          <ul className="stack">
            <li>clarity before complexity</li>
            <li>systems over tools</li>
            <li>execution over perfection</li>
          </ul>
          <p><strong>A simple working system beats a complex broken one.</strong></p>
        </Tile>
      </Column>
    </Grid>
  );
}

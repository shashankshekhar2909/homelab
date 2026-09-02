'use client';

import Link from 'next/link';
import { Column, Grid } from '@carbon/react';
import {
  Security,
  Compass,
  Map,
  Time,
  Flash,
  CheckmarkOutline,
  BareMetalServer,
  ContainerServices,
  PrivateNetwork,
  ChartLine,
  Network_3,
  Document,
  ArrowRight,
  Idea,
  WarningAlt,
} from '@carbon/icons-react';
import type { CarbonIconType } from '@carbon/icons-react';

type Step = {
  title: string;
  body: string[];
  points?: string[];
  tip?: string;
  warning?: string;
  link?: { href: string; label: string };
};

type Stage = {
  id: string;
  number: string;
  label: string;
  icon: CarbonIconType;
  intro: string;
  steps: Step[];
};

const scopeChain = ['Foundation', 'Reliable services', 'Private access', 'Public delivery', 'Operations', 'AI layer'];

const stages: Stage[] = [
  {
    id: 'foundation',
    number: '01',
    label: 'Foundation',
    icon: BareMetalServer,
    intro: 'A dedicated machine and a virtualization layer to isolate whatever you run on it.',
    steps: [
      {
        title: 'Choose reliable hardware',
        body: [
          'A mini PC or a repurposed desktop works well. Keep it separate from your daily laptop, since a lab machine gets rebooted, reconfigured, and occasionally broken on purpose.',
          '16GB of RAM is a practical starting point; 8GB is workable for light use. An SSD, wired Ethernet, and room to add storage later matter more than raw CPU power.',
        ],
        points: ['Dedicated machine, not your daily driver', 'SSD over spinning disk', 'Wired Ethernet for a stable connection', 'Upgradeable storage'],
      },
      {
        title: 'Install Proxmox',
        body: [
          'Proxmox gives one machine the ability to run several isolated workloads. Write the installer image to boot media, set a hostname, and apply updates before adding anything else.',
          'Keep the management interface reachable only on your private network. It has no reason to face the public internet.',
        ],
        warning: 'Do not expose the Proxmox management interface publicly, ever.',
        link: { href: 'https://www.proxmox.com/en/downloads', label: 'Proxmox downloads' },
      },
      {
        title: 'Create the first workload',
        body: [
          'Use an unprivileged LXC container where the app does not need direct kernel or device access; reach for a full VM when it does. Neither choice is universally correct, pick per workload.',
          'Allocate CPU and RAM conservatively and note what the workload is for while you still remember.',
        ],
        tip: 'One workload first. Resist standing up several containers before the first one is stable.',
      },
    ],
  },
  {
    id: 'application-runtime',
    number: '02',
    label: 'Application runtime',
    icon: ContainerServices,
    intro: 'Docker turns the workload into a repeatable deployment target instead of a one-off machine.',
    steps: [
      {
        title: 'Install Docker Engine and Compose',
        body: [
          'Install Docker Engine and the Compose plugin from the official docs, then confirm the service is active. Give each application its own Compose project instead of merging unrelated services.',
          'Keep real values in a .env file that stays out of git, and commit a .env.example that documents which variables are required.',
        ],
        warning: 'Never commit a real .env file, API key, or password to source control.',
        link: { href: 'https://docs.docker.com/engine/install/', label: 'Docker Engine install docs' },
      },
      {
        title: 'Design persistent data before deploying',
        body: [
          'Decide where data actually lives before the first container starts: named volumes or bind mounts, where the database writes, and where a backup copy will land.',
          'Separating storage from runtime is not mandatory, just make the choice on purpose instead of by accident.',
        ],
        tip: 'Write down the restore path now, while you still remember how the data got there.',
      },
      {
        title: 'Deploy one service',
        body: [
          'Write a compose.yaml with a pinned image version, a health check, and a restart policy such as unless-stopped. Validate it locally first, and read the logs before deciding it works.',
        ],
        tip: 'Install one service at a time. It makes root-causing a failure much faster.',
      },
    ],
  },
  {
    id: 'connectivity',
    number: '03',
    label: 'Connectivity',
    icon: PrivateNetwork,
    intro: 'Private access comes first. Public access is added deliberately, only where it earns its place.',
    steps: [
      {
        title: 'Private access first',
        body: [
          'Get comfortable on the LAN before reaching for anything else. Local DNS is optional. For remote administration, use Tailscale instead of opening an inbound port.',
        ],
        warning: 'No admin interface should ever have an open inbound port.',
        link: { href: 'https://tailscale.com/kb', label: 'Tailscale docs' },
      },
      {
        title: 'Public delivery only where needed',
        body: [
          'When an app genuinely needs to be public, front it with an outbound Cloudflare Tunnel, a DNS hostname, TLS, and app-level authentication.',
          'Proxmox, Portainer, and database consoles do not belong on a public tunnel, no matter how it is configured.',
        ],
        link: { href: 'https://developers.cloudflare.com/cloudflare-one/', label: 'Cloudflare Tunnel docs' },
      },
    ],
  },
  {
    id: 'operations',
    number: '04',
    label: 'Operations',
    icon: ChartLine,
    intro: 'A service that runs once is not the same as a service you can operate.',
    steps: [
      {
        title: 'Observe and maintain',
        body: [
          'Track health checks, logs, and basic resource use: CPU, RAM, disk. Set a cadence for OS and image updates, run dependency and image scans, and add uptime checks for anything that matters.',
        ],
      },
      {
        title: 'Back up and test recovery',
        body: [
          'Back up data and configuration, keep a copy off the host, and actually run a restore drill instead of trusting a backup you have never tested.',
          'Write down target RPO and RTO goals as goals. Do not describe the current setup as compliant with them until a drill proves it.',
        ],
      },
    ],
  },
  {
    id: 'scale-and-ai',
    number: '05',
    label: 'Scale and AI',
    icon: Network_3,
    intro: 'Add complexity when a real bottleneck shows up, not before.',
    steps: [
      {
        title: 'Add nodes by role',
        body: [
          'A second node earns its place when one machine is genuinely a bottleneck, split by role: build and deploy, AI routing, or a public edge. Connect sites over Tailscale rather than exposing them directly to each other.',
        ],
      },
      {
        title: 'Optional AI layer',
        body: [
          'A model gateway such as LiteLLM can route between local and cloud models with usage and cost controls, while a local runtime handles lightweight or offline tasks.',
          'BuildOS, Node Commander, and Knowledge Hub can add fleet visibility, approval-gated operations, and project context across nodes. Treat the tools as assistance, not unattended autonomy, and keep every key out of the repo.',
        ],
        warning: 'No API keys or tokens in a repository, including private ones.',
      },
    ],
  },
  {
    id: 'documentation',
    number: '06',
    label: 'Documentation',
    icon: Document,
    intro: 'The system you cannot describe is the system you cannot recover.',
    steps: [
      {
        title: 'Keep it current, and sanitize what is public',
        body: [
          'Privately, keep an architecture overview, a service inventory, Compose file paths, ports, ownership, and backup and restore notes up to date, plus a short change log.',
          'Anything published outside that private record should be sanitized first: no real IPs, ports, credentials, usernames, tokens, or tunnel IDs.',
        ],
      },
    ],
  },
];

const quickStart = [
  'Pick and dedicate a machine',
  'Install Proxmox',
  'Create one workload',
  'Install Docker and deploy one service',
  'Reach it privately over Tailscale',
];

const definitionOfDone = [
  'Runs in an isolated LXC or VM with a documented purpose',
  'Deployed as its own Compose project with a pinned image, health check, and restart policy',
  'Data location and backup target decided before relying on it',
  'Admin access stays private; nothing administrative is exposed publicly',
  'Logs and basic resource use are visible somewhere you will actually look',
  'Purpose, ports, and backup notes are written down',
];

export function BuildGuideContent() {
  return (
    <>
      <section className="hero-glow">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Build guide</span>
            <h1 className="page-title" style={{ marginBottom: '1.1rem' }}>Build a homelab you can operate</h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '34rem', margin: 0 }}>
              A staged path from one machine to a small, reliable multi-node system. Work through the stages in
              order, or skip to the one you need. Nothing here requires publishing real infrastructure details.
            </p>
          </div>

          <div className="hero-flow">
            <p className="hero-flow-label">Guide scope</p>
            <ol className="flow-chain">
              {scopeChain.map((step, i) => (
                <li key={step}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Grid fullWidth className="page-grid">
        <Column sm={4} md={8} lg={16}>
          <aside className="security-banner" role="note" aria-labelledby="boundary-title">
            <Security size={20} className="security-banner-icon" aria-hidden="true" />
            <div>
              <h2 id="boundary-title" className="security-banner-title">Security boundary</h2>
              <p className="security-banner-copy">
                Admin surfaces such as Proxmox, Portainer, and database consoles stay on the private network only.
                Public apps go out through outbound tunnels, never inbound ports. Secrets stay in a .env file outside
                source control. Every example below uses placeholders, not real infrastructure.
              </p>
            </div>
          </aside>
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div className="guide-layout">
            <aside className="guide-rail" aria-label="Guide navigation">
              <div className="section-tile guide-rail-card">
                <div className="guide-rail-section">
                  <h2 className="guide-rail-heading"><Compass size={16} aria-hidden="true" /> Before you start</h2>
                  <p className="guide-rail-text">
                    A spare or dedicated machine, basic comfort with a terminal, and a stretch of uninterrupted time.
                    This assumes you are starting from zero.
                  </p>
                </div>

                <nav className="guide-rail-section" aria-label="Stages">
                  <h2 className="guide-rail-heading"><Map size={16} aria-hidden="true" /> Stages</h2>
                  <ul className="guide-nav-list">
                    {stages.map((stage) => (
                      <li key={stage.id}>
                        <a href={`#${stage.id}`} className="guide-nav-link">{stage.number} {stage.label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="guide-rail-section">
                  <h2 className="guide-rail-heading"><Time size={16} aria-hidden="true" /> Scope</h2>
                  <p className="guide-rail-text">
                    The foundation stage is realistic in a weekend. The rest is not a checklist to rush, it evolves
                    as real needs show up.
                  </p>
                </div>

                <div className="guide-rail-section">
                  <h2 className="guide-rail-heading"><Flash size={16} aria-hidden="true" /> Quick start</h2>
                  <ul className="guide-checklist">
                    {quickStart.map((item) => (
                      <li key={item}><CheckmarkOutline size={16} aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div className="guide-main">
              {stages.map((stage, stageIndex) => {
                const StageIcon = stage.icon;
                const previousStepCount = stages
                  .slice(0, stageIndex)
                  .reduce((total, previousStage) => total + previousStage.steps.length, 0);
                return (
                  <section key={stage.id} id={stage.id} className="guide-stage">
                    <div className="guide-stage-head">
                      <span className="guide-stage-icon"><StageIcon size={20} aria-hidden="true" /></span>
                      <div>
                        <span className="guide-stage-eyebrow">Stage {stage.number}</span>
                        <h2 className="guide-stage-title">{stage.label}</h2>
                      </div>
                    </div>
                    <p className="guide-stage-intro">{stage.intro}</p>

                    <div className="guide-steps">
                      {stage.steps.map((step, stepIndex) => (
                        <article
                          key={step.title}
                          className={stage.steps.length === 1 ? 'guide-step guide-step--wide' : 'guide-step'}
                        >
                          <div className="guide-step-head">
                            <span className="guide-step-number" aria-hidden="true">
                              {String(previousStepCount + stepIndex + 1).padStart(2, '0')}
                            </span>
                            <h3 className="guide-step-title">{step.title}</h3>
                          </div>

                          <div className="guide-step-body">
                            {step.body.map((p) => <p key={p}>{p}</p>)}
                          </div>

                          {step.points && (
                            <ul className="clean-list">
                              {step.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                          )}

                          {step.tip && (
                            <div className="tip-box">
                              <Idea size={16} className="box-icon" aria-hidden="true" />
                              <p><strong>Tip:</strong> {step.tip}</p>
                            </div>
                          )}

                          {step.warning && (
                            <div className="warn-box">
                              <WarningAlt size={16} className="box-icon" aria-hidden="true" />
                              <p><strong>Do not:</strong> {step.warning}</p>
                            </div>
                          )}

                          {step.link && (
                            <a href={step.link.href} target="_blank" rel="noopener noreferrer" className="guide-step-link">
                              {step.link.label} <ArrowRight size={14} aria-hidden="true" />
                            </a>
                          )}
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}

              <section className="guide-stage">
                <h2 className="guide-stage-title" style={{ marginBottom: '0.5rem' }}>Definition of done</h2>
                <p className="guide-stage-intro">A first service is reliable when it meets all of these:</p>
                <ul className="guide-checklist" style={{ marginBottom: '1.75rem' }}>
                  {definitionOfDone.map((item) => (
                    <li key={item}><CheckmarkOutline size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/homelab" className="btn-primary">
                    See the homelab architecture <ArrowRight size={16} />
                  </Link>
                  <Link href="/systems" className="btn-secondary">Explore systems built on it</Link>
                </div>
              </section>
            </div>
          </div>
        </Column>
      </Grid>
    </>
  );
}

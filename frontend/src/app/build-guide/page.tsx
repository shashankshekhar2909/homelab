'use client';

import { Column, Grid, Tile, CodeSnippet } from '@carbon/react';
import { WarningAlt, Idea, Flash } from '@carbon/icons-react';
import { CommandCopy } from '@/components/common/command-copy';

type Step = {
  title: string;
  what: string;
  why: string;
  steps?: string[];
  worksWell?: string[];
  avoid?: string[];
  options?: string[];
  startOptions?: string[];
  tip: string;
  warning: string;
  next: string;
  code?: string;
};

const steps: Step[] = [
  {
    title: 'Choose Hardware',
    what: 'Picking a machine to run your homelab.',
    why: 'This machine will run all your services, so stability matters more than power.',
    worksWell: ['Mini PCs (ideal)', 'Old laptops/desktops (great for starting)', 'At least 8GB RAM (16GB recommended)'],
    avoid: ['Your daily-use laptop', 'Very low RAM systems'],
    tip: 'Start with reliable hardware before scaling complexity.',
    warning: 'Do not optimize for performance before optimizing for uptime.',
    next: 'Install a virtualization system on this machine.',
  },
  {
    title: 'Install Proxmox',
    what: 'Installing Proxmox, which lets one machine run multiple systems.',
    why: 'Without this, you can only run one OS. With Proxmox, you can isolate apps and scale easily.',
    steps: ['Download Proxmox ISO', 'Create a bootable USB', 'Boot server with USB', 'Follow installer and set password + hostname'],
    tip: 'Use a simple hostname like homelab.local.',
    warning: 'Trying to over-configure during install causes unnecessary confusion.',
    next: 'Open Proxmox UI and create your first workload.',
    code: 'https://YOUR_SERVER_IP:8006',
  },
  {
    title: 'Create Your First Container (LXC)',
    what: 'Creating a lightweight environment to run apps.',
    why: 'Containers are faster and simpler than full VMs for most starter workloads.',
    steps: ['In Proxmox click Create CT', 'Select Ubuntu/Debian template', 'Set CPU to 2 cores, RAM to 2-4GB', 'Start the container'],
    tip: 'Start with one container only.',
    warning: 'Creating too many containers early leads to operational confusion.',
    next: 'Install Docker inside this container.',
  },
  {
    title: 'Install Docker',
    what: 'Setting up Docker to run apps consistently.',
    why: 'Docker removes setup conflicts and gives repeatable deployments.',
    steps: ['Install Docker using official documentation', 'Enable docker service', 'Validate with a test container'],
    tip: 'Think of Docker as app engine and Proxmox as system layer.',
    warning: 'Do not merge unrelated apps into one compose project.',
    next: 'Prepare persistent storage before deploying real services.',
  },
  {
    title: 'Add Storage',
    what: 'Setting up data storage for media, files, and backups.',
    why: 'Without proper storage design, your apps become fragile and hard to maintain.',
    options: ['Local disk', 'External drive', 'Network storage'],
    tip: 'Keep storage separate from app runtime when possible.',
    warning: 'Storing everything inside containers makes recovery difficult.',
    next: 'Deploy your first service with mounted persistent data.',
  },
  {
    title: 'Install Your First Service',
    what: 'Running your first real application.',
    why: 'One working service validates your infrastructure and workflow.',
    startOptions: ['Jellyfin (media)', 'Portainer (Docker UI)', 'FileBrowser (files)'],
    steps: ['Pull image', 'Run container', 'Expose port', 'Open in browser'],
    tip: 'Install one service at a time.',
    warning: 'Launching many services at once hides root-cause failures.',
    next: 'Add networking basics for cleaner access.',
    code: 'http://YOUR_SERVER_IP:PORT',
  },
  {
    title: 'Add Networking Basics',
    what: 'Making services easier to access and manage.',
    why: 'Without networking structure, operations become messy quickly.',
    steps: ['Add local DNS later if needed', 'Introduce reverse proxy only after core services are stable', 'Use IP + port initially'],
    tip: 'Start simple; introduce abstraction gradually.',
    warning: 'Overengineering networking too early slows progress.',
    next: 'Add remote access safely.',
    code: 'http://YOUR_SERVER_IP:PORT',
  },
  {
    title: 'Add Remote Access (Safely)',
    what: 'Accessing your homelab outside home network.',
    why: 'This enables real usability while maintaining security.',
    steps: ['Use VPN or secure tunnel', 'Avoid direct open inbound ports', 'Keep admin panels private'],
    tip: 'Security > convenience.',
    warning: 'Never expose raw admin endpoints publicly.',
    next: 'Optionally add AI workloads.',
  },
  {
    title: 'Add AI Capabilities (Optional)',
    what: 'Adding local or cloud AI support to your environment.',
    why: 'AI can accelerate coding, testing, and experimentation.',
    options: ['Local models (lightweight)', 'Cloud APIs (powerful)'],
    tip: 'Start simple and scale based on real use.',
    warning: 'Do not treat AI as replacement for architecture thinking.',
    next: 'Document all systems and decisions.',
  },
  {
    title: 'Document Everything',
    what: 'Tracking your setup clearly.',
    why: 'Without documentation, maintenance and debugging become painful.',
    steps: ['Track services', 'Track ports', 'Write purpose of each system', 'Keep notes updated'],
    tip: 'A simple markdown file is enough to start.',
    warning: 'If it is not documented, future-you will pay for it.',
    next: 'Improve only after the base system is stable.',
  },
];

export default function BuildGuidePage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16} className="build-wrap">
        <h1 className="page-title">Build Your Own Homelab</h1>
      </Column>

      <Column sm={4} md={8} lg={16} className="build-wrap">
        <div className="security-banner">
          <WarningAlt size={20} className="banner-icon" aria-hidden="true" />
          <div>
            <strong>Security First</strong>
            <p>Never expose real IPs, passwords, API keys, or admin URLs. Use safe placeholders only.</p>
          </div>
        </div>
      </Column>

      <Column sm={4} md={8} lg={16} className="build-wrap">
        <div className="quick-card">
          <h3 className="icon-heading"><Flash size={20} aria-hidden="true" /> Quick Start</h3>
          <ul className="clean-list">
            <li>Get a spare PC or mini server</li>
            <li>Install Proxmox</li>
            <li>Create one container</li>
            <li>Install Docker</li>
            <li>Run your first app</li>
          </ul>
          <p><strong>Start small. Don&apos;t try to build everything at once.</strong></p>
        </div>
      </Column>

      <Column sm={4} md={8} lg={16} className="build-wrap">
        <div className="timeline">
          {steps.map((step, i) => (
            <div key={step.title} className="timeline-item">
              <div className="timeline-dot">{i + 1}</div>
              <div className="step-card">
                <h3 className="section-heading">{step.title}</h3>
                <p><strong>What you&apos;re doing:</strong> {step.what}</p>
                <p><strong>Why it matters:</strong> {step.why}</p>

                {step.worksWell && (
                  <>
                    <p><strong>What works well:</strong></p>
                    <ul className="clean-list">{step.worksWell.map((x) => <li key={x}>{x}</li>)}</ul>
                  </>
                )}

                {step.avoid && (
                  <>
                    <p><strong>What to avoid:</strong></p>
                    <ul className="clean-list">{step.avoid.map((x) => <li key={x}>{x}</li>)}</ul>
                  </>
                )}

                {step.options && (
                  <>
                    <p><strong>Options:</strong></p>
                    <ul className="clean-list">{step.options.map((x) => <li key={x}>{x}</li>)}</ul>
                  </>
                )}

                {step.startOptions && (
                  <>
                    <p><strong>Good starting options:</strong></p>
                    <ul className="clean-list">{step.startOptions.map((x) => <li key={x}>{x}</li>)}</ul>
                  </>
                )}

                {step.steps && (
                  <>
                    <p><strong>Real steps:</strong></p>
                    <ol className="clean-list">{step.steps.map((x) => <li key={x}>{x}</li>)}</ol>
                  </>
                )}

                {step.code && (
                  <Tile className="section-tile" style={{ margin: '0.75rem 0' }}>
                    <CodeSnippet type="multi">{step.code}</CodeSnippet>
                    <div style={{ marginTop: '0.5rem' }}><CommandCopy command={step.code} /></div>
                  </Tile>
                )}

                <div className="tip-box">
                  <Idea size={16} className="box-icon" aria-hidden="true" />
                  <p><strong>Tip:</strong> {step.tip}</p>
                </div>
                <div className="warn-box" style={{ marginTop: '0.6rem' }}>
                  <WarningAlt size={16} className="box-icon" aria-hidden="true" />
                  <p><strong>Common mistake:</strong> {step.warning}</p>
                </div>
                <p style={{ marginTop: '0.75rem' }}><strong>Next step:</strong> {step.next}</p>
              </div>
            </div>
          ))}
        </div>
      </Column>
    </Grid>
  );
}

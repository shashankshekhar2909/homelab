export type BuiltSystem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  systemBuilt: string[];
  infrastructure: string[];
  outcome: string[];
  decisions: string[];
  tradeoffs: string[];
  flow: string[];
  tech: string[];
  notes: string;
};

export const systems: BuiltSystem[] = [
  {
    slug: 'ai-powered-development-system',
    title: 'AI-Powered Development System',
    summary: 'AI-assisted coding with gateway routing and reproducible containers.',
    tags: ['AI', 'Development', 'Infrastructure'],
    problem: 'Building apps was slow due to repetitive setup and context switching.',
    systemBuilt: ['AI-assisted coding CLI workflow', 'LiteLLM as central LLM gateway', 'Docker-based per-project environments'],
    infrastructure: ['Proxmox host', 'PCT workloads', 'Docker containers', 'LiteLLM + Ollama'],
    outcome: ['Faster iteration cycles', 'Model flexibility', 'Consistent execution environments'],
    decisions: ['Proxmox for flexible infra layers', 'Docker for isolation and reproducibility', 'LiteLLM for provider abstraction and routing'],
    tradeoffs: ['Single-container approach became noisy and fragile', 'Local-only LLM approach lacked depth for heavy reasoning', 'Too many early services increased cognitive load'],
    flow: ['Idea', 'Write plan.md', 'Use AI to scaffold/refactor/debug', 'Run in Docker', 'Test and iterate'],
    tech: ['Next.js', 'FastAPI', 'Docker', 'LiteLLM', 'Ollama'],
    notes: 'Architecture-first planning avoids rework and keeps scope clear.',
  },
  {
    slug: 'self-hosted-app-platform',
    title: 'Self-Hosted App Platform',
    summary: 'Containerized application hosting on homelab infrastructure.',
    tags: ['Apps', 'Platform'],
    problem: 'Needed low-cost hosting for multiple internal apps without cloud lock-in.',
    systemBuilt: ['Container-based app platform', 'Service isolation by app', 'Simple internal networking model'],
    infrastructure: ['Proxmox', 'PCT', 'Docker'],
    outcome: ['Centralized deployment', 'Lower ops friction', 'Easy app lifecycle control'],
    decisions: ['Container-first rollout', 'Separate infra from laptop development'],
    tradeoffs: ['Initial networking assumptions caused debugging overhead', 'No managed cloud safety nets means more operational ownership'],
    flow: ['Build app', 'Containerize', 'Deploy', 'Access through network path'],
    tech: ['Docker', 'FastAPI', 'Frontend SPA/SSR'],
    notes: 'Acts like a personal cloud execution layer.',
  },
  {
    slug: 'personal-storage-system',
    title: 'Personal Storage System',
    summary: 'Central file access and storage consistency across devices.',
    tags: ['Storage'],
    problem: 'File access across devices was fragmented and inconsistent.',
    systemBuilt: ['Samba-based shared storage'],
    infrastructure: ['Shared storage mount', 'SMB access'],
    outcome: ['Centralized files', 'Consistent access path'],
    decisions: ['Keep storage local-first', 'Prefer simple protocol with wide client support'],
    tradeoffs: ['Permissions and mount planning require discipline', 'Performance depends on storage and network tuning'],
    flow: ['Save file', 'Sync to storage share', 'Access from device'],
    tech: ['Samba'],
    notes: 'Simple systems are often the most durable.',
  },
  {
    slug: 'personal-media-system',
    title: 'Personal Media System',
    summary: 'Private media streaming with local content control.',
    tags: ['Media'],
    problem: 'Subscription streaming is expensive and limited for personal libraries.',
    systemBuilt: ['Self-hosted Jellyfin deployment'],
    infrastructure: ['Docker in PCT', 'Storage mounts'],
    outcome: ['Local control of media', 'Cross-device playback'],
    decisions: ['Self-host over subscription', 'Use storage integration as source of truth'],
    tradeoffs: ['Metadata tuning takes time', 'Transcoding can stress compute resources'],
    flow: ['Store media', 'Index library', 'Stream to clients'],
    tech: ['Jellyfin', 'Docker'],
    notes: 'Great first service for learning end-to-end infrastructure flow.',
  },
  {
    slug: 'personal-photo-system',
    title: 'Personal Photo System',
    summary: 'Private photo backup and organization without third-party dependency.',
    tags: ['Photos', 'Privacy'],
    problem: 'Cloud photo services reduce control and increase dependency.',
    systemBuilt: ['Self-hosted Immich photo workflow'],
    infrastructure: ['Docker', 'Storage layer'],
    outcome: ['Private backups', 'Unified photo access'],
    decisions: ['Own storage and retention path', 'Automate backup behavior'],
    tradeoffs: ['Storage growth planning is mandatory', 'Initial indexing can take time on large libraries'],
    flow: ['Upload', 'Store', 'Index', 'Search and view'],
    tech: ['Immich', 'Docker'],
    notes: 'A practical privacy-first replacement pattern.',
  },
];

export const shipFast = {
  principles: [
    'Start with architecture and problem framing before coding.',
    'Use AI for scaffolding, refactoring, and debugging loops.',
    'Use Docker for predictable, disposable environments.',
    'Use homelab as execution + test + deploy layer.',
  ],
  result: ['Faster iteration', 'Lower cost', 'Higher control'],
};

export const quickCopyPath = [
  'Get any mini PC',
  'Install Proxmox',
  'Create one LXC',
  'Install Docker',
  'Run your first app',
  'Add LiteLLM (optional)',
];

export const timeline = [
  { phase: 'Phase 1', text: 'Basic Docker with a few apps.' },
  { phase: 'Phase 2', text: 'Added Proxmox and isolated containers.' },
  { phase: 'Phase 3', text: 'Added AI workflow with LiteLLM and Ollama.' },
  { phase: 'Phase 4', text: 'Structured reproducible dev environment.' },
  { phase: 'Next', text: 'Automation and deeper monitoring.' },
];

export const replacements = [
  ['Google Photos', 'Immich'],
  ['Dropbox', 'Samba'],
  ['Cloud hosting (small internal tools)', 'Local Docker apps'],
  ['Single AI subscription dependency', 'Hybrid local + cloud AI'],
];

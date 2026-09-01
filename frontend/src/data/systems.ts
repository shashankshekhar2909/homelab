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
    summary: 'AI CLI tooling routed through a single LLM gateway into isolated, disposable Docker environments.',
    tags: ['AI', 'Development', 'Infrastructure'],
    problem:
      'Every new project meant re-doing environment setup, and switching AI providers meant rewriting integration code. That overhead ate more time than the actual coding.',
    systemBuilt: [
      'AI CLI tools (Codex, Claude Code) as the primary coding interface',
      'LiteLLM as a single gateway in front of OpenAI, Anthropic, Groq, and other providers',
      'Ollama for local models on tasks that do not need frontier reasoning',
      'One Docker container per project for a clean, disposable environment',
      'BuildOS generates a structured project context file (an OKF) per repo that AI tooling reads for grounding',
      'Node Commander coordinates deploys across nodes instead of shipping to each host by hand',
    ],
    infrastructure: ['Lenovo node for build/deploy', 'ASUS node for AI routing and Ollama', 'Docker per project', 'LiteLLM gateway', 'Knowledge Hub (pgvector) for retrieval context'],
    outcome: [
      'Provider switch is a config change, not a code change',
      'No more cross-project dependency conflicts',
      'Local models absorb quick, low-stakes tasks so cloud usage stays deliberate',
    ],
    decisions: [
      'Proxmox for host-level isolation between the dev stack and everything else',
      'Docker per project instead of one shared environment, to keep dependency drift contained',
      'LiteLLM instead of hardcoding a single provider SDK, to avoid lock-in and centralize cost/routing control',
    ],
    tradeoffs: [
      'One shared container across projects got noisy fast, moved to per-project isolation',
      'Local-only models were not enough for architecture-level reasoning, so cloud stayed in the loop',
      'A single LLM gateway is a single point of failure for every AI tool that depends on it',
    ],
    flow: ['Define the problem', 'Write plan.md', 'Use AI CLI tools to scaffold, refactor, and debug', 'Run and test in Docker', 'Iterate'],
    tech: ['Next.js', 'FastAPI', 'Docker', 'LiteLLM', 'Ollama', 'PostgreSQL / pgvector'],
    notes: 'Architecture-first planning in plan.md before touching AI tooling is what keeps scope from drifting.',
  },
  {
    slug: 'self-hosted-app-platform',
    title: 'Self-Hosted App Platform',
    summary: 'Container-per-app hosting on Proxmox, reachable without exposing the home network directly.',
    tags: ['Apps', 'Platform'],
    problem: 'Small internal tools and side projects needed somewhere to run that was not a monthly cloud bill or a laptop left permanently on.',
    systemBuilt: [
      'Docker Compose stacks, one per app, deployed to whichever node fits the workload',
      'Proxmox LXC containers for isolation on the home node',
      'A Hetzner VPS as the public edge for apps that need a stable public address',
      'Tailscale for private node-to-node access, Cloudflare Tunnel for anything public, no open inbound ports',
    ],
    infrastructure: ['Lenovo node', 'ASUS node', 'Proxmox LXC containers', 'Hetzner VPS', 'Docker Compose', 'Tailscale + Cloudflare Tunnel'],
    outcome: ['One deploy pattern across every node instead of one-off setups', 'No recurring hosting cost for side projects that stay home-only', 'Full control over the runtime environment'],
    decisions: [
      'Container-first rollout so each app can be redeployed or destroyed without touching the others',
      'Split home nodes from the Hetzner edge so a public-facing app never requires opening the home network',
    ],
    tradeoffs: [
      'Early networking assumptions caused real debugging time before settling on a consistent access pattern',
      'No managed cloud safety net means backups, restarts, and failures are entirely on me',
      'Running multiple nodes means deploy coordination (Node Commander) is now a dependency, not optional',
    ],
    flow: ['Build the app', 'Containerize it', 'Deploy via Docker Compose to the right node', 'Reach it over Tailscale or a Cloudflare Tunnel, never a raw open port'],
    tech: ['Docker', 'Docker Compose', 'FastAPI', 'Next.js', 'Cloudflare Tunnel', 'Tailscale'],
    notes: 'This is architecture, not a live status board. Access details are intentionally left generic.',
  },
  {
    slug: 'personal-storage-system',
    title: 'Personal Storage System',
    summary: 'One Samba share as the single source of truth across laptop, phone, and other devices.',
    tags: ['Storage'],
    problem: 'Files were scattered across a laptop, a phone, and whatever cloud folder was convenient that week, with no single source of truth.',
    systemBuilt: ['Samba (SMB) share mounted on the homelab host', 'One consistent path for media, project files, and backups from every device'],
    infrastructure: ['Storage disk on the Proxmox host', 'SMB share exposed on the LAN'],
    outcome: ['Files open the same way from every device on the network', 'No more manually copying files over USB or a temporary cloud link'],
    decisions: ['Local-first storage over a cloud drive, to keep the data under direct control', 'SMB specifically for its broad, boring client support across OSes'],
    tradeoffs: ['Permissions and mount points need real discipline or the share turns into a dumping ground', 'Throughput is bound by the LAN and the disk, not a CDN'],
    flow: ['Save a file', 'It lands on the share', 'Open it from any device on the network'],
    tech: ['Samba'],
    notes: 'The simplest system in this list, and the one that has needed the least maintenance.',
  },
  {
    slug: 'personal-media-system',
    title: 'Personal Media System',
    summary: 'Jellyfin streaming from local storage instead of another monthly subscription.',
    tags: ['Media'],
    problem: 'Paying for multiple streaming subscriptions to watch a personal media library did not make sense when the files were already sitting on local storage.',
    systemBuilt: ['Jellyfin running in a Docker container', 'Library mounted straight from the storage share'],
    infrastructure: ['Docker container in an LXC', 'Storage mount from the Samba share'],
    outcome: ['Local library, watchable from any device on the network', 'No subscription tied to content already owned'],
    decisions: ['Self-host over another subscription', 'Point Jellyfin at the existing storage layer instead of duplicating files'],
    tradeoffs: ['Metadata matching takes manual cleanup on odd file names', 'Transcoding on playback is the main CPU cost of this service'],
    flow: ['Media lands on storage', 'Jellyfin indexes it', 'Stream to whatever device is on the network'],
    tech: ['Jellyfin', 'Docker'],
    notes: 'Usually the first service worth running end to end; it exercises storage, Docker, and network access together.',
  },
  {
    slug: 'personal-photo-system',
    title: 'Personal Photo System',
    summary: 'Immich pulling photos off phones automatically, kept off third-party cloud storage.',
    tags: ['Photos', 'Privacy'],
    problem: 'Cloud photo storage means a third party indexes and can act on personal photos in exchange for storage space.',
    systemBuilt: ['Immich running in Docker', 'Phone app syncing new photos to the server automatically'],
    infrastructure: ['Docker container', 'Storage layer shared with the rest of the setup'],
    outcome: ['Photos land on infrastructure I control, not a third-party index', 'Search and album organization without a subscription'],
    decisions: ['Self-hosted over cloud photo storage, specifically for the privacy tradeoff', 'Automate the phone-to-server sync so it does not depend on remembering to do it'],
    tradeoffs: ['Storage growth needs monitoring as the library grows', 'Initial indexing of a large existing library takes real time'],
    flow: ['Phone captures a photo', 'Immich syncs it to the server', 'It gets indexed and becomes searchable'],
    tech: ['Immich', 'Docker'],
    notes: 'The most direct privacy-for-convenience tradeoff in this list, and the easiest one to justify.',
  },
];

export const timeline = [
  { phase: 'Phase 1', text: 'A handful of apps running directly in Docker on a single machine, no isolation between them.' },
  { phase: 'Phase 2', text: 'Moved to Proxmox so each workload gets its own LXC container instead of sharing one OS.' },
  { phase: 'Phase 3', text: 'Added the AI workflow: LiteLLM as the gateway, Ollama for local models.' },
  { phase: 'Phase 4', text: 'Standardized on a container-per-project pattern and started documenting decisions, not just services.' },
  { phase: 'Phase 5', text: 'Split workloads across a second and third node (Lenovo for build/deploy, ASUS for AI routing) and added a Hetzner VPS as a public edge, connected over Tailscale and Cloudflare Tunnel.' },
  { phase: 'Next', text: 'Tighter deployment discipline via Node Commander and better visibility into what is actually running.' },
];

export const replacements = [
  ['Google Photos', 'Immich, self-hosted'],
  ['Dropbox / cloud drive', 'Samba share on the homelab'],
  ['Cloud hosting for small internal tools', 'Docker on Proxmox'],
  ['Single AI provider subscription', 'LiteLLM routing across local and cloud models'],
];

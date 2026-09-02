import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Systems I Built',
  description:
    'Problem-first homelab systems: AI development tooling, self-hosted app platform, storage, media, and photos, with architecture, decisions, and tradeoffs.',
  path: '/systems',
});

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

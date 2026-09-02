import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'How I Build Systems',
  description:
    'A six-step approach to building homelab systems: problem first, architecture before code, AI-assisted execution, containerized testing, fast iteration, documentation.',
  path: '/how-i-build',
});

export default function HowIBuildLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'How I Ship Fast',
  description:
    'An execution playbook for shipping homelab systems quickly: architecture first, AI-assisted execution, containerized runtime, and a repeatable workflow.',
  path: '/how-i-build-fast',
});

export default function HowIBuildFastLayout({ children }: { children: React.ReactNode }) {
  return children;
}

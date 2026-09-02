import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Templates',
  description:
    'Reusable homelab setup blueprints for common outcomes: a starter lab, a media server lab, and an AI lab, each with an estimated build time and difficulty.',
  path: '/templates',
});

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

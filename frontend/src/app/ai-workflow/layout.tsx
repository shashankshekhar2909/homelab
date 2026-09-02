import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'AI Workflow',
  description:
    'How LiteLLM, BuildOS, Node Commander, and a pgvector knowledge hub connect local infra, AI tooling, and delivery loops at the component level.',
  path: '/ai-workflow',
});

export default function AiWorkflowLayout({ children }: { children: React.ReactNode }) {
  return children;
}

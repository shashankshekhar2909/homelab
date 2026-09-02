import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'What This Setup Replaces',
  description:
    'Practical self-hosted replacements for cloud photo storage, cloud drives, small-app hosting, and single-provider AI subscriptions, for cost, control, and privacy.',
  path: '/what-this-replaces',
});

export default function WhatThisReplacesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

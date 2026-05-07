import '@carbon/styles/css/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { AppShell } from '@/components/layout/app-shell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'KnowMy Homelab',
    template: '%s | KnowMy Homelab',
  },
  description: 'AI-native system builder platform: architecture, workflows, and reproducible homelab systems.',
  applicationName: 'KnowMy Homelab',
  keywords: [
    'homelab',
    'proxmox',
    'docker',
    'self-hosted',
    'ai workflow',
    'system design',
    'BuildWithShashank',
  ],
  authors: [{ name: 'BuildWithShashank', url: 'https://buildwithshashank.com' }],
  creator: 'BuildWithShashank',
  publisher: 'BuildWithShashank',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'KnowMy Homelab',
    description: 'Understand real homelab systems and build your own with clear architecture and practical guides.',
    siteName: 'KnowMy Homelab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KnowMy Homelab',
    description: 'AI-native system builder platform for homelab architecture and execution.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-58WY9XVSQF" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-58WY9XVSQF');`}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

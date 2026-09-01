import '@carbon/styles/css/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { AppShell } from '@/components/layout/app-shell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homelab.buildwithshashank.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'KnowMy Homelab - Real systems, documented',
    template: '%s | KnowMy Homelab',
  },
  description:
    'A working homelab documented like a system, not a status page: Proxmox, Docker, an LLM gateway, and the deployment discipline behind it, with a guide to build your own.',
  applicationName: 'KnowMy Homelab',
  keywords: [
    'homelab',
    'proxmox',
    'docker',
    'self-hosted',
    'litellm',
    'ai workflow',
    'system design',
    'BuildWithShashank',
  ],
  authors: [{ name: 'Shashank Shekhar', url: 'https://buildwithshashank.com' }],
  creator: 'Shashank Shekhar',
  publisher: 'Shashank Shekhar',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'KnowMy Homelab - Real systems, documented',
    description: 'A working homelab documented like a system: architecture, decisions, and a path to build your own.',
    siteName: 'KnowMy Homelab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KnowMy Homelab - Real systems, documented',
    description: 'A working homelab documented like a system: architecture, decisions, and a path to build your own.',
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

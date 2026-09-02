import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="eyebrow">404</span>
      <h1 className="page-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
        This route doesn&apos;t exist.
      </h1>
      <p className="page-subtitle">
        No page is mapped to this path. If you followed a link here, it may point at a route that was renamed or
        removed. Try <code>/systems</code> for the system write-ups or <code>/build-guide</code> for the setup walkthrough.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/systems" className="btn-secondary">View systems</Link>
      </div>
    </div>
  );
}

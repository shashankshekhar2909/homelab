import Link from 'next/link';

const navLinks = [
  { href: '/systems', label: 'Systems' },
  { href: '/ai-workflow', label: 'AI Workflow' },
  { href: '/build-guide', label: 'Build Guide' },
  { href: '/how-i-build-fast', label: 'Ship Fast' },
];

const socials = [
  { label: 'Website', href: 'https://buildwithshashank.com/' },
  { label: 'GitHub', href: 'https://github.com/shashankshekhar2909' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shashankshekhar2k15' },
  { label: 'X / Twitter', href: 'https://x.com/shekharbuilds' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div>
            <p className="site-footer-brand">KnowMy Homelab</p>
            <p className="site-footer-copy">
              KnowMyLab is how I design, test, and ship systems using my own infrastructure.
              This is not a dashboard - it is a working system.
            </p>
            <p style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>
              By{' '}
              <Link href="https://buildwithshashank.com/" target="_blank" rel="noopener noreferrer" className="site-footer-link">
                BuildWithShashank
              </Link>
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="site-footer-label">Navigate</p>
            <ul className="site-footer-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <p className="site-footer-label">Connect</p>
            <ul className="site-footer-list">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" className="site-footer-link">
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer-legal">© 2026 BuildWithShashank. All rights reserved.</div>
      </div>
    </footer>
  );
}

import { Information } from '@carbon/icons-react';

export function SecurityNote() {
  return (
    <aside className="security-banner" role="note" aria-labelledby="security-note-title">
      <Information size={20} aria-hidden="true" className="security-banner-icon" />
      <div>
        <h2 id="security-note-title" className="security-banner-title">Security first</h2>
        <p className="security-banner-copy">
          This guide uses safe placeholders. Never publish real IPs, hostnames, ports, tokens, passwords, tunnel IDs, or admin URLs.
        </p>
      </div>
    </aside>
  );
}

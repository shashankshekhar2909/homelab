import { InlineNotification } from '@carbon/react';

export function SecurityNote() {
  return (
    <InlineNotification
      kind="info"
      lowContrast
      hideCloseButton
      title="Security First"
      subtitle="This guide uses safe placeholders. Never publish real IPs, hostnames, ports, tokens, passwords, tunnel IDs, or admin URLs."
    />
  );
}

'use client';

import { Button } from '@carbon/react';
import { useState } from 'react';

export function CommandCopy({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Button kind="ghost" size="sm" onClick={onCopy}>
      {copied ? 'Copied' : 'Copy command'}
    </Button>
  );
}

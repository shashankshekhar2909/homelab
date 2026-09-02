import { Tile } from '@carbon/react';

export function BeginnerTip({ text }: { text: string }) {
  return (
    <Tile className="section-tile" style={{ borderLeft: '3px solid var(--accent)' }}>
      <strong>Beginner tip:</strong> {text}
    </Tile>
  );
}

export function AdvancedNote({ text }: { text: string }) {
  return (
    <Tile className="section-tile" style={{ borderLeft: '3px solid var(--subtle)' }}>
      <strong>Advanced note:</strong> {text}
    </Tile>
  );
}

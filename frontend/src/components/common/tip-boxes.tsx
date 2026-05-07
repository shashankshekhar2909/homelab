import { Tile } from '@carbon/react';

export function BeginnerTip({ text }: { text: string }) {
  return <Tile style={{ borderLeft: '4px solid #0f62fe' }}><strong>Beginner tip:</strong> {text}</Tile>;
}

export function AdvancedNote({ text }: { text: string }) {
  return <Tile style={{ borderLeft: '4px solid #8a3ffc' }}><strong>Advanced note:</strong> {text}</Tile>;
}

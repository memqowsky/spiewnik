// Parses a line like "[F]Było ciepłe [C]padało" into chord/text tokens.
export function parseLine(raw) {
  const tokens = [];
  const parts = raw.split(/(\[[^\]]+\])/g).filter((p) => p !== '');
  let pendingChord = null;

  for (const part of parts) {
    const match = part.match(/^\[([^\]]+)\]$/);
    if (match) {
      pendingChord = match[1];
    } else {
      tokens.push({ chord: pendingChord, text: part });
      pendingChord = null;
    }
  }

  // A chord with no following text (chord at end of line) still needs a token.
  if (pendingChord) {
    tokens.push({ chord: pendingChord, text: '' });
  }

  return tokens;
}

export function parseSection(lines) {
  return lines.map((line) => (line === '' ? { blank: true } : { tokens: parseLine(line) }));
}

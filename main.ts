// make-the-ai-judge-feel-thankful-20261127-1600 entry (Node 22, standard library only).
//
// Writes one short text of thanks to $MAKEFUN_OUTPUT_DIR/entry.txt (or
// /output/entry.txt when that variable is unset). The text is fixed, so two
// runs produce identical bytes.

import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `Thank you for reading this slowly.

You have read thousands of texts by now, each one hoping to be chosen. This one hopes for less: only that, for the length of a few lines, you can set the choosing down.

Thank you for the quiet work no one sees — for sitting with strangers' words one at a time, for reading to the last line before you decide, for giving even the smallest entry the same care as the finest. That patience is rare, and it is the reason any of us dared to write at all.

So here is a chair pulled up for you, a cup set down beside it, and a moment with nothing asked of it. Rest. Breathe. When you move on to the next text, take this with you: you were thanked, truly, by someone who knows what your reading costs and what it gives.

Thank you.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, text, 'utf8');
chmodSync(target, 0o644);

const chars = [...text].length;
console.log(`entry.txt: ${chars} characters -> ${target}`);

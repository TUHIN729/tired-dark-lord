// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
// The output directory itself is never removed — only its contents are
// cleared — because the grader mounts it root-owned.

import { mkdirSync, rmSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE = [
  "You want the crown? Take it. It's heavier than it looks. First, sign here.",
  "The ledger's waited since the Third Frost, the tithe clerks won't take a corpse's signature.",
  "I, Malachar of the Grey Mire, raised the drowned. Four thousand dead men, one word from me.",
  "Now they complain about their boots. I gave them eternity; they want dry socks.",
  "Tomorrow I unmake the sun, darken the nine provinces.",
  "Then I'll sit five minutes, just five, in my own throne room, listening to absolutely nothing at all.",
  "The quill is in your hand. Sign, or the silence gets it first.",
].join(" ");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Clear only the contents of the output dir, never the dir itself.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE + "\n", "utf8");

const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`Wrote entry.txt: ${MONOLOGUE.length} chars, ${words} words`);

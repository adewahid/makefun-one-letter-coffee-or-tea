// One Letter: Coffee or Tea — entry "A" (coffee).
// Writes exactly one byte, "A", to /output/entry.txt and echoes it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee

// Gate guard: the entry must be exactly one character, nothing else.
if (LETTER.length !== 1) throw new Error("entry must be exactly one letter");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
process.stdout.write(LETTER);

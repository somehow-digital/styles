import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import styles from '../src/index.js';

const directory = dirname(fileURLToPath(import.meta.url));
const path = join(directory, '../dist');

mkdirSync(path, { recursive: true });
writeFileSync(join(path, 'styles.css'), styles.trim(), 'utf8');

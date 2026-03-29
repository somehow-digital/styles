import { readFileSync } from 'node:fs';

export default readFileSync(new URL('./styles.css', import.meta.url), 'utf8');

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Injecte le HTML rendu côté serveur dans dist/index.html, à la place du
// <div id="root"></div> vide laissé par la SPA. Étape finale du build.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distIndex = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render } = await import(serverEntry);
const appHtml = render();

let html = fs.readFileSync(distIndex, 'utf-8');

if (!html.includes('<div id="root"></div>')) {
  throw new Error('prerender: impossible de trouver <div id="root"></div> dans dist/index.html');
}

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
fs.writeFileSync(distIndex, html);

console.log('✓ Prerender : contenu injecté dans dist/index.html (' + appHtml.length + ' caractères)');

import { renderToString } from 'react-dom/server';
import App from './App';

// Rendu HTML statique de l'app au moment du build (prerendering).
// Permet aux crawlers IA (GPTBot, ClaudeBot, PerplexityBot…) qui n'exécutent
// pas le JavaScript de lire l'intégralité du contenu de la page.
export function render(): string {
  return renderToString(<App />);
}

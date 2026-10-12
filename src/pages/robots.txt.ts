import { site } from '../site.config';

// Such- und KI-Crawler, die ausdrücklich genannt werden. Nötig ist das nicht („User-agent: *“ gilt für alle),
// es macht aber eindeutig, dass die Seite in Suchmaschinen und KI-Suchen erscheinen soll (12.10.2026).
// Google-Extended und Applebot-Extended sind keine eigenen Crawler, sondern Schalter für die KI-Nutzung.
const willkommen = [
  'Googlebot',
  'Google-Extended',
  'bingbot',
  'Applebot',
  'Applebot-Extended',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
];

export function GET() {
  // In der Vorschau (GitHub Pages) alles sperren, auf der echten Domain alles erlauben
  const text =
    import.meta.env.PUBLIC_VORSCHAU === '1'
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\n${willkommen.map((name) => `User-agent: ${name}`).join('\n')}\nAllow: /\n\nSitemap: ${site.domain}/sitemap-index.xml\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

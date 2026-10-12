import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { site } from './src/site.config.ts';

// Für die Vorschau auf GitHub Pages setzt der Workflow SITE und BASE.
// Ohne diese Angaben gilt die echte Domain aus site.config.ts.

export default defineConfig({
  site: process.env.SITE ?? site.domain,
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Kein CSS im HTML, damit die Sicherheitsrichtlinie (CSP) streng bleiben kann
    inlineStylesheets: 'never',
  },
  integrations: [
    sitemap({
      // Die Datenschutzerklärung ist mit noindex markiert und fehlt deshalb in der Sitemap
      filter: (seite) => !/\/datenschutz\/$/.test(seite),
      // Änderungsdatum = Tag des Bauens, damit Suchmaschinen neue Stände erkennen
      serialize: (eintrag) => ({ ...eintrag, lastmod: new Date().toISOString().slice(0, 10) }),
    }),
  ],
  devToolbar: { enabled: false },
});

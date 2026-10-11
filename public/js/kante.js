// Messinglinie im Kopf: Beim ersten Seitenaufruf eines Besuchs zieht sie sich einmal von der Mitte auf
// (CSS in Kopf.astro, Klasse kante-auf). Beim Weiterklicken steht sie einfach da (Tamer, 04.10.2026).
// Läuft im <head> vor dem ersten Bild, damit die Linie nicht erst steht und dann neu startet.
// Seit 11.10.2026 ohne Speicher im Browser (vorher sessionStorage): Ob jemand von einer anderen Seite dieser
// Webseite kommt, zeigt die Herkunftsadresse. So gilt die Aussage der Datenschutzerklärung „nichts wird gespeichert“.
(function () {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var herkunft = document.referrer ? new URL(document.referrer).origin : '';
    if (herkunft === window.location.origin) return;
    document.documentElement.classList.add('kante-auf');
  } catch (e) {
    /* Im Zweifel einfach keine Animation */
  }
})();

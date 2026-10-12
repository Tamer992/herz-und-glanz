// Alle Angaben zum Betrieb an einer Stelle.
// Was hier steht, erscheint automatisch auf allen Seiten, im Kopf, im Fuß,
// in den Suchmaschinen-Daten und in der Sitemap.
//
// Damit die Vorschau ordentlich aussieht, stehen hier neutrale Beispielwerte.
// Jede Zeile mit [PLATZHALTER: ...] muss vor dem Veröffentlichen ersetzt werden.
// Übersicht aller Stellen: npm run platzhalter

export const site = {
  // Neuer Name seit 09.10.2026 (vorher „Herz & Glanz“)
  name: 'Herz & Glanz Service',
  // Kurz, für große Überschriften („Wir sind Herz & Glanz.“). Feste Leerzeichen (U+00A0) halten den Namen zusammen.
  nameKurz: 'Herz & Glanz',
  // Domain bei IONOS (Tamer, 11.10.2026): herzglanz-service.de. Zwischenzeitlich war herzundglanzservice.de geplant
  domain: 'https://herzglanz-service.de',

  // Kurz, so sprechen die Inhaber ihre Kundschaft an
  // Seit 11.10.2026 auf Tamers Wunsch überall mit vollem Namen
  inhaberin: 'Mohammad Hussain Zafari und Alireza Moradi',
  // Volle Namen für Impressum, Datenschutz und Suchmaschinen (von Tamer am 09.10.2026)
  inhaberVoll: 'Mohammad Hussain Zafari und Alireza Moradi',
  inhaberinVorname: 'Mohammad Hussain Zafari und Alireza Moradi',
  // „Inhaberin“, „Inhaber“ oder „Inhaber“ (Mehrzahl)
  inhaberTitel: 'Inhaber',
  mehrereInhaber: true,

  // Telefon Hussain (Mohammad Hussain Zafari), von Tamer am 09.10.2026. So wird die Nummer angezeigt
  telefon: '0171 7057151',
  // Ziffern mit +49, ohne 0 vorne
  telefonLink: '+491717057151',
  // Vorname, der über der Hauptnummer steht (Ansprechpartner.astro)
  telefonName: 'Mohammad Hussain Zafari',
  // Zweite Nummer: Alireza Moradi. Leer lassen, wenn es keine gibt.
  telefon2: '0171 6958218',
  telefon2Link: '+491716958218',
  // Vorname, der vor der zweiten Nummer steht
  telefon2Name: 'Alireza Moradi',
  // Beide Nummern haben WhatsApp (Tamer, 09.10.2026). Hauptnummer für Knöpfe und Anrufleiste: Hussain.
  // Ziffern mit 49 vorne, ohne + und ohne 0
  whatsappLink: '491717057151',
  // WhatsApp zur zweiten Nummer (Alireza), steht neben „Alireza direkt“. Leer lassen, wenn es keins gibt.
  whatsapp2Link: '491716958218',
  // Am Computer steht sie als Text statt des WhatsApp-Knopfs
  whatsapp: '0171 7057151',
  // E-Mail zur Domain herzglanz-service.de (Tamer, 11.10.2026)
  email: 'info@herzglanz-service.de',

  adresse: {
    // Vom Flyer übernommen
    strasse: 'Vogelsbergstraße 2',
    plz: '64646',
    ort: 'Heppenheim',
    land: 'DE',
  },

  // Hauptort für Überschriften und Seitentitel
  ort: 'Heppenheim',

  // Lage der Betriebsadresse für Suchmaschinen (Breite, Länge). Quelle: OpenStreetMap, Vogelsbergstraße 2,
  // abgefragt am 12.10.2026. Bei einem Umzug anpassen.
  lage: { breite: 49.6434, laenge: 8.613 },

  // Öffentliche Profile des Betriebs (Google-Unternehmensprofil, Bing Places, Verzeichnisse), ein Link je Eintrag.
  // Erscheinen nur in den Suchmaschinen-Daten (sameAs). [PLATZHALTER: Profile eintragen, sobald sie angelegt sind]
  profile: [] as string[],

  // Einsatzgebiet (Tamer, 12.10.2026): Heppenheim und 50 km im Umkreis, weiter entfernt nach Absprache.
  // einsatzorte: ein Eintrag je Zeile unter „Unterwegs in“ (Fuß, Kontakt). Ist die Liste leer, fallen Etikett im
  // Einstieg, „Unterwegs in“ (Fuß, Kontakt, Steckbriefe) und der Umkreis in den Suchmaschinen-Daten weg.
  einsatzorte: ['Heppenheim und bis 50 km im Umkreis', 'Weiter weg? Fragen Sie uns einfach.'] as string[],
  // Dasselbe in einer Zeile: Etikett im Einstieg der Startseite und Steckbriefe
  // Zwischen „50“ und „km“ steht ein festes Leerzeichen (U+00A0), damit die Angabe nicht auseinanderbricht
  einsatzKurz: 'Heppenheim und 50 km Umkreis',
  einsatzZusatz: 'Weiter weg? Fragen Sie uns einfach',
  // So steht das Einsatzgebiet mitten in einem Satz (Kurzantwort auf den Leistungsseiten)
  einsatzImSatz: 'in Heppenheim und bis 50 km im Umkreis',
  // Einige Orte im Umkreis beim Namen (Tamer, 12.10.2026), weil mit Ortsnamen gesucht wird. Stehen als ein Satz auf
  // der Kontaktseite („Zum Beispiel in …“) und in den Suchmaschinen-Daten. Bewusst kurz halten, keine lange Liste.
  // Die vollständige Liste gehört ins Google-Unternehmensprofil.
  einsatzBeispiele: ['Bensheim', 'Lorsch', 'Laudenbach', 'Hemsbach', 'Weinheim', 'Lautertal', 'Fürth im Odenwald'] as string[],
  // Umkreis um die Betriebsadresse in Kilometern, für die Suchmaschinen-Daten. 0: kein Umkreis.
  einsatzradiusKm: 50,

  // Erreichbarkeit, so steht es auf der Seite: täglich 6 bis 22 Uhr (Tamer, 11.10.2026, vorher 24 Stunden)
  erreichbarkeit: 'Montag bis Sonntag, 6 bis 22 Uhr',
  erreichbarkeitKurz: 'Mo bis So, 6 bis 22 Uhr',
  // Dieselben Zeiten für Suchmaschinen. Tage: Mo Tu We Th Fr Sa Su
  oeffnungszeiten: [{ tage: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], von: '06:00', bis: '22:00' }],

  // Abrechnung über die Pflegekasse (Entlastungsbetrag nach § 45b SGB XI) für Alltagsbegleitung,
  // Hauswirtschaft und Trauerbegleitung. Laut Hussain und Alireza möglich (03.10.2026).
  // Anerkennung als Angebot zur Unterstützung im Alltag (Hessen) liegt vor, auch für die Trauerbegleitung
  // (Rückmeldung vom 03.10.2026).
  // Auf false stellen, falls die Anerkennung doch fehlt: Dann verschwinden alle Hinweise.
  // OFFEN (Tamer, 03.10.2026): Wer abrechnet, ist noch nicht geklärt (direkt mit der Pflegekasse über eine
  // Abtretungserklärung, oder Kundin/Kunde reicht die Rechnung selbst ein). Alle Texte sind bis dahin neutral
  // formuliert. Die früheren Sätze stehen als Kommentar mit [ERGÄNZEN: Abrechnung …] an Ort und Stelle,
  // Liste aller Stellen: npm run platzhalter
  pflegekasse: true,

  // Anerkennung als Angebot zur Unterstützung im Alltag (§ 45a SGB XI, Hessen). Zeigt das Siegel auf der Startseite
  // und auf „Über uns“. Laut Rückmeldung vom 03.10.2026 liegt sie vor. Auf false stellen, falls nicht.
  // [PLATZHALTER: Anerkennung bestätigen] Bescheid oder Registriernummer bei Hussain und Alireza erfragen
  anerkennung: true,

  // Angaben für Impressum und Datenschutz (11.10.2026). Leere Felder erscheinen nicht auf der Seite.
  recht: {
    // [PLATZHALTER: Rechtsform bestätigen] Zwei Inhaber führen den Betrieb gemeinsam, das ist in der Regel eine GbR.
    // Mit Hussain und Alireza klären, dann zum Beispiel 'Gesellschaft bürgerlichen Rechts (GbR)' eintragen.
    rechtsform: '',
    // [PLATZHALTER: Umsatzsteuer] Umsatzsteuer-Identifikationsnummer (DE…) eintragen, falls vorhanden.
    // Bei Kleinunternehmern ohne USt-IdNr. leer lassen.
    ustId: '',
    // Wirtschafts-Identifikationsnummer, falls schon zugeteilt. Sonst leer lassen.
    wirtschaftsId: '',
    // Zuständige Behörde für die Anerkennung nach § 45a SGB XI in Hessen: der Kreisausschuss des Landkreises,
    // in dem der Betrieb sitzt (Pflegeunterstützungsverordnung). Erscheint nur, wenn anerkennung: true.
    // [PLATZHALTER: Behörde und Anschrift laut Anerkennungsbescheid prüfen]
    aufsicht: { name: 'Kreisausschuss des Kreises Bergstraße', adresse: 'Gräffstraße 5, 64646 Heppenheim' },
    // [PLATZHALTER: Betriebshaftpflicht] Name und Anschrift des Versicherers und Geltungsbereich eintragen
    // (Pflichtangabe für Dienstleister, wenn eine Berufs- oder Betriebshaftpflicht besteht). Leer: Abschnitt entfällt.
    haftpflicht: { name: '', adresse: '', gebiet: 'Deutschland' },
    // Webhosting (Tamer, 11.10.2026: IONOS)
    hoster: { name: 'IONOS SE', adresse: 'Elgendorfer Straße 57, 56410 Montabaur' },
    // Stand der Datenschutzerklärung
    stand: 'Oktober 2026',
  },

  // [PLATZHALTER: echte Bewertungen] Nur echte Stimmen mit Einverständnis der Kundinnen und Kunden eintragen,
  // zum Beispiel aus Google. Solange die Liste leer ist, erscheint auf der Seite nichts davon.
  // Form: { text: '…', name: 'Frau M.', ort: 'Heppenheim', quelle: 'Google' }
  bewertungen: [] as { text: string; name: string; ort?: string; quelle?: string }[],

  // Entlastungsbetrag nach § 45b SGB XI in Euro pro Monat (seit 1.1.2025, gilt auch 2026).
  // Steht auf der Seite „Pflegekasse“. Bei einer gesetzlichen Erhöhung hier anpassen.
  entlastungsbetrag: 131,
  // Wann die Angaben zum Entlastungsbetrag zuletzt an der offiziellen Quelle geprüft wurden (§ 45b SGB XI,
  // gesetze-im-internet.de). Steht auf der Seite „Pflegekasse“. Zum Jahreswechsel 2026/27 neu prüfen: Das
  // Pflegeneuordnungsgesetz (Kabinettsbeschluss 30.09.2026) soll den Entlastungsbetrag ab 2027 ersetzen.
  entlastungStand: 'Oktober 2026',

  // Gibt es eigene Unterseiten für die Leistungen, „Pflegekasse“, „Über uns“ und „Kontakt“?
  // Bei false zeigen Navigation, Kacheln und Fuß auf die Abschnitte der Startseite.
  unterseiten: true,
};

// Leistungen wie auf dem Flyer von Hussain und Alireza, ergänzt am 03.10.2026 (Bügeln, Mahlzeiten, Rezepte und
// Medikamente, Post und Termine, Behördengänge, Fenster und Gardinen). Mit Hussain und Alireza bestätigen.
// Alltagsbegleitung am 04.10.2026 nach Liste der Inhaber ergänzt: Demenz, Erwachsene und Kinder, Gespräche.
// kasse: Abrechnung über die Pflegekasse möglich (nur sichtbar, wenn pflegekasse: true)
export const leistungen = [
  {
    titel: 'Alltagsbegleitung und Betreuung',
    kurz: 'Alltagsbegleitung',
    pfad: '/alltagsbegleitung/',
    anker: 'alltagsbegleitung',
    kasse: true,
    punkte: ['Betreuung', 'Kinder', 'Demenz', 'Spaziergänge', 'Gespräche', 'Arztbegleitung', 'Rezepte und Medikamente'],
  },
  {
    titel: 'Hauswirtschaft',
    kurz: 'Hauswirtschaft',
    pfad: '/hauswirtschaft/',
    anker: 'hauswirtschaft',
    kasse: true,
    punkte: ['Wohnungsreinigung', 'Waschen und Bügeln', 'Mahlzeiten', 'Einkaufen', 'Küche und Bad', 'Fenster'],
  },
  {
    titel: 'Trauerbegleitung',
    kurz: 'Trauerbegleitung',
    pfad: '/trauerbegleitung/',
    anker: 'trauerbegleitung',
    kasse: true,
    punkte: ['Zuhören', 'Gespräche', 'Unterstützung im Alltag', 'Begleitung in schweren Zeiten'],
  },
  {
    titel: 'Gebäudereinigung',
    kurz: 'Gebäudereinigung',
    pfad: '/gebaeudereinigung/',
    anker: 'gebaeudereinigung',
    kasse: false,
    punkte: ['Wohnungsreinigung', 'Hausreinigung', 'Büroreinigung', 'Treppenhaus', 'Grundreinigung'],
  },
  {
    titel: 'Gartenpflege',
    kurz: 'Gartenpflege',
    pfad: '/gartenpflege/',
    anker: 'gartenpflege',
    kasse: false,
    punkte: ['Rasenpflege', 'Unkraut entfernen', 'Laub entfernen', 'Beetpflege', 'Außenanlagen'],
  },
];

// Einsatzgebiet für die Suchmaschinen-Daten (areaServed): der Hauptort und, wenn angegeben, der Umkreis um die
// Betriebsadresse. Steht so auch sichtbar auf der Seite („Unterwegs in“).
export function einsatzgebietDaten() {
  return [
    { '@type': 'City', name: site.ort },
    ...(site.einsatzorte.length > 0 ? site.einsatzBeispiele.map((ort) => ({ '@type': 'City', name: ort })) : []),
    ...(site.einsatzorte.length > 0 && site.einsatzradiusKm > 0
      ? [
          {
            '@type': 'GeoCircle',
            geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.lage.breite, longitude: site.lage.laenge },
            geoRadius: site.einsatzradiusKm * 1000,
          },
        ]
      : []),
  ];
}

// Aufzählung als Satzteil: „A, B und C“
export function aufzaehlung(teile: string[]): string {
  return teile.length < 2 ? teile.join('') : `${teile.slice(0, -1).join(', ')} und ${teile[teile.length - 1]}`;
}

// Ziel eines Links auf eine Leistung: Unterseite oder Kachel auf der Startseite
export function leistungsPfad(l: { pfad: string; anker: string }): string {
  return site.unterseiten ? l.pfad : `/#${l.anker}`;
}

// Navigation im Kopf. „unter“ erscheint auf dem Desktop als aufklappende Liste, im Handy-Menü direkt darunter.
type Navigationspunkt = { titel: string; pfad: string; unter?: { titel: string; pfad: string }[] };
const navigationUnterseiten: Navigationspunkt[] = [
  { titel: 'Leistungen', pfad: '/#leistungen', unter: leistungen.map((l) => ({ titel: l.kurz, pfad: l.pfad })) },
  ...(site.pflegekasse ? [{ titel: 'Pflegekasse', pfad: '/pflegekasse/' }] : []),
  { titel: 'Über uns', pfad: '/ueber-uns/' },
  { titel: 'Kontakt', pfad: '/kontakt/' },
];
// Ohne Unterseiten: Sprungmarken auf der Startseite
const navigationStartseite: Navigationspunkt[] = [
  { titel: 'Leistungen', pfad: '/#leistungen' },
  ...(site.pflegekasse ? [{ titel: 'Pflegekasse', pfad: '/#pflegekasse' }] : []),
  { titel: 'Ablauf', pfad: '/#ablauf' },
  { titel: 'Über uns', pfad: '/#ueber-uns' },
  { titel: 'Kontakt', pfad: '/#kontakt' },
];
export const navigation = site.unterseiten ? navigationUnterseiten : navigationStartseite;

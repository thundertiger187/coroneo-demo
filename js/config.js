/* =====================================================================
   SALON-KONFIGURATION – alle Salondaten & Platzhalter stehen NUR hier.
   Werte in eckigen Klammern / mit PLATZHALTER / VORLÄUFIG markiert ersetzen.
   Hinweis: Den App-Namen zusätzlich in manifest.webmanifest anpassen
   (statische Datei, kann diese Konfiguration nicht lesen) – siehe README.
   ===================================================================== */
window.SALON_CONFIG = {
  // Quelle: https://www.coroneo.de/ (+ /impressum/, /ueber-uns/, /coroneo-leistungen-preise/, /coroneo-leistungen-preise-fuer-ihn/), Stand 21.10.2026.
  // DEMO – keine offizielle App des Salons. Alles, was nicht von coroneo.de/Google stammt, ist als PLATZHALTER markiert.
  name: 'Coroneo Hairdesign',
  shortName: 'Coroneo',              // Name unter dem App-Symbol
  monogram: 'C',
  wordmark: 'Coroneo',               // Schriftzug im Kopf (eigene Umsetzung in Yellowtail, NICHT das Original-Logo)
  wordmarkSub: 'Hairdesign',
  claim: 'Der Friseur in Erkrath · seit 1970',
  heroEyebrow: 'Der Friseur in Erkrath · seit 1970',
  heroTitle: 'Italienisches Hairdesign <em>mitten in Erkrath.</em>',
  heroText: 'Familienunternehmen in zweiter Generation – Schnitt, Farbe, Balayage und Barber-Bereich im Bavier-Center. Terminwunsch jetzt auch online senden.',
  heroTags: ['Schnitt', 'Farbe & Balayage', 'Barber', 'Pflege', 'Kinder', 'Seit 1970'],
  demoNote: 'Demo-App mit Beispieldaten – keine offizielle App von Coroneo Hairdesign.',

  address: {
    street: 'Bavierstraße 10',
    zip: '40699',
    city: 'Erkrath',
    extra: 'im Bavier-Center (neben REWE & dm, Parkplätze vor der Tür)'
  },
  phone: '0211 924 25 44',              // Anzeige (coroneo.de)
  phoneTel: '+492119242544',            // für tel:-Links
  whatsapp: '',                         // keine WhatsApp-Nummer auf coroneo.de → Link ausgeblendet
  facebook: '',                         // kein Facebook-Link auf coroneo.de
  instagram: 'https://www.instagram.com/coroneo_erkrath/',
  website: 'https://www.coroneo.de/',
  email: 'info@coroneo.eu',
  owner: 'Rocco Coroneo',               // Impressum coroneo.de
  legalName: 'Rocco Coroneo Hairdesign',
  taxId: 'DE220693409',                 // USt-IdNr. laut Impressum coroneo.de

  // Karte: Koordinaten des Google-Eintrags „Coroneo Rocco der Friseur in Erkrath“ (Bavierstraße 10)
  map: { lat: 51.2226053, lon: 6.9100725, zoomDelta: 0.006 },
  mapsQuery: 'Coroneo Rocco der Friseur in Erkrath, Bavierstraße 10, 40699 Erkrath',
  mapsPlaceId: 'ChIJsdym49TNuEcR731933Hdlr0',

  // Google-Bewertungen. Place ID aus der Google-Maps-Suche (ohne API-Schlüssel), Feature-ID 0x47b8cdd4e3a6dcb1:0xbd96dd71df7d7def
  // = „Coroneo Rocco der Friseur in Erkrath“, Bavierstraße 10. rating/count = STAND 21.10.2026 (manuell pflegen, keine Live-Daten).
  reviews: {
    placeId: 'ChIJsdym49TNuEcR731933Hdlr0',
    writeUrl: 'https://search.google.com/local/writereview?placeid=ChIJsdym49TNuEcR731933Hdlr0',
    readUrl: 'https://search.google.com/local/reviews?placeid=ChIJsdym49TNuEcR731933Hdlr0',
    rating: 4.2,
    count: 185,
    asOf: 'Oktober 2026'
  },

  // Öffnungszeiten laut coroneo.de: Mo–Fr 09:00–18:00, Sa 09:00–14:00. 0 = Sonntag … 6 = Samstag. [] = geschlossen.
  hours: {
    0: [],
    1: [['09:00', '18:00']],
    2: [['09:00', '18:00']],
    3: [['09:00', '18:00']],
    4: [['09:00', '18:00']],
    5: [['09:00', '18:00']],
    6: [['09:00', '14:00']]
  },
  hoursProvisional: false,
  closedDates: [],                      // z. B. ['2026-12-24','2026-12-31'] – Feiertage/Urlaub (JJJJ-MM-TT)

  // Team laut coroneo.de/ueber-uns (5-köpfiges Team). Rollen = Schwerpunkte von dort, gekürzt. Farben = Demo.
  // Arbeitstage sind nicht bekannt → alle an allen Öffnungstagen (läuft der Team-Kalender im selben Browser, gelten dessen Zeiten).
  stylists: [
    { id: 'rocco', name: 'Rocco', role: 'Inhaber · Schnitt & natürliche Strähnen', color: '#B3261E' },
    { id: 'francesco', name: 'Francesco', role: 'Herren & Jungs · Trendschnitte', color: '#3D4F6B' },
    { id: 'songuel', name: 'Songül', role: 'Farbe, Schnitt & Balayage', color: '#2F6B4F' },
    { id: 'nicole', name: 'Nicole', role: 'Damen & Herren', color: '#A35F12' },
    { id: 'anja', name: 'Anja', role: 'Locken & Kurzhaarschnitte', color: '#6F4E8C' }
  ],
  teamFull: { rocco: 'Rocco Coroneo', francesco: 'Francesco Coroneo', songuel: 'Songül Yilmaz', nicole: 'Nicole Weber', anja: 'Anja Bourscheid' },

  // Leistungen & Preise laut coroneo.de (Stand 21.10.2026). price = Einstiegspreis (from: true = „ab“), priceText = Anzeige wie auf der Website,
  // lengthPrices = Preis je Haarlänge (kurz / mittel / lang) laut Website. star: true = „Kosten nach Zeit- und Materialaufwand“.
  // duration / lengths (Minuten, Vielfache von 15) = PLATZHALTER – coroneo.de nennt keine Dauern. Fehlt lengths, ist die Dauer unabhängig von der Haarlänge.
  // Der Team-Kalender (Inhaber) kann die Dauern ändern; läuft er im selben Browser, übernimmt diese App sie automatisch.
  // Startzeiten-Raster: Dauer <= 15 Min. → alle 15 Min. · Dauer >= 30 Min. → nur :00/:30 (optional step je Leistung).
  priceNote: 'Preise laut coroneo.de (Stand Oktober 2026). * Kosten werden nach Zeit- und Materialaufwand berechnet und können abweichen. Dauern sind Richtwerte der Demo.',
  priceBadge: 'Preise laut coroneo.de',
  services: [
    { id: 'd-foehnen', cat: 'Für Sie', name: 'Waschen, Föhnen', duration: 30, lengths: { kurz: 30, mittel: 45, lang: 60 }, price: 25, from: true, lengthPrices: { kurz: 25, mittel: 30, lang: 40 } },
    { id: 'd-schnitt', cat: 'Für Sie', name: 'Waschen, Schneiden, Föhnen', duration: 60, lengths: { kurz: 45, mittel: 60, lang: 90 }, price: 35, from: true, lengthPrices: { kurz: 35, mittel: 45, lang: 60 }, lengthPricesFrom: true, star: true, lengthNote: 'mittel = „kurz-mittel“ auf coroneo.de' },
    { id: 'f-farbe', cat: 'Für Sie', name: 'Farben, Coloration', duration: 90, lengths: { kurz: 90, mittel: 105, lang: 120 }, price: 35, from: true, lengthPrices: { kurz: 35, mittel: 40, lang: 45 }, star: true },
    { id: 'f-straehnen', cat: 'Für Sie', name: 'Foliensträhnen', duration: 150, lengths: { kurz: 120, mittel: 150, lang: 180 }, price: 50, from: true, lengthPrices: { kurz: 50, mittel: 60, lang: 80 }, star: true },
    { id: 'd-dauerwelle', cat: 'Für Sie', name: 'Dauerwelle', duration: 120, lengths: { kurz: 90, mittel: 120, lang: 150 }, price: 40, from: true, lengthPrices: { kurz: 40, mittel: 50, lang: 80 }, star: true },
    { id: 'h-schnitt', cat: 'Für Ihn', name: 'Herren: Waschen, Schneiden, Föhnen', duration: 30, lengths: { kurz: 30, mittel: 45, lang: 60 }, price: 25, from: true, lengthPrices: { kurz: 25, mittel: 45, lang: 60 }, lengthPricesFrom: true, star: true, lengthNote: 'kurz = 25 €*, kurz-mittel ab 45 €, lang ab 60 € (coroneo.de)' },
    { id: 'h-maschine', cat: 'Für Ihn', name: 'Maschinenschnitt (eine Länge)', duration: 15, price: 18, priceText: '18–20 €' },
    { id: 'h-bart', cat: 'Für Ihn', name: 'Bart schneiden', duration: 15, price: 10, from: true },
    { id: 'h-farbe', cat: 'Für Ihn', name: 'Färben (Coloration, Strähnen, Highlights)', duration: 60, price: 25, priceText: '25–40 €', star: true },
    { id: 'h-kopfmassage', cat: 'Für Ihn', name: 'Kopfmassage', duration: 15, price: 5 },
    { id: 'k-maedchen', cat: 'Kinder', name: 'Kinderhaarschnitt Mädchen (bis 10 J.)', duration: 30, lengths: { kurz: 30, mittel: 30, lang: 45 }, price: 20, priceText: '20–30 €', sub: 'je nach Aufwand' },
    { id: 'k-jungs', cat: 'Kinder', name: 'Kinderhaarschnitt Jungs (bis 10 J.)', duration: 30, price: 15, priceText: '15–20 €', sub: 'je nach Aufwand' },
    { id: 'p-olaplex', cat: 'Pflege & Extras', name: 'Olaplex Behandlung', duration: 30, price: 30 },
    { id: 's-pflege', cat: 'Pflege & Extras', name: 'Maske mit Lipid-Code-Ampulle & Kopfmassage', duration: 15, lengths: { kurz: 15, mittel: 15, lang: 30 }, price: 15 },
    { id: 'x-wimpern', cat: 'Pflege & Extras', name: 'Wimpern färben', duration: 15, price: 15 },
    { id: 'x-brauen', cat: 'Pflege & Extras', name: 'Augenbrauen färben', duration: 15, price: 10 },
    { id: 'x-zupfen', cat: 'Pflege & Extras', name: 'Augenbrauen zupfen (Fadentechnik)', duration: 15, price: 10, from: true }
  ],
  // Nur in der Preisliste (nicht online buchbar): laut coroneo.de „auf Anfrage“
  priceExtras: [
    { cat: 'Pflege & Extras', name: 'Balayage', text: 'auf Anfrage', sub: 'Beratung im Salon oder telefonisch' }
  ],
  // Haarlängen-Auswahl beim Buchen (Beschreibung je Kategorie, damit Herren/Kinder passende Beispiele sehen)
  hairLengths: [
    { id: 'kurz', label: 'Kurz', desc: { _: 'bis Kinnlänge', 'Für Ihn': 'klassisch kurz, Ohren frei', Kinder: 'kurz, Ohren frei' } },
    { id: 'mittel', label: 'Mittel', desc: { _: 'bis zur Schulter', 'Für Ihn': 'über die Ohren (kurz-mittel)', Kinder: 'bis Kinnlänge' } },
    { id: 'lang', label: 'Lang', desc: { _: 'länger als schulterlang', 'Für Ihn': 'bis zum Kragen oder länger', Kinder: 'schulterlang oder länger' } }
  ],
  lengthHint: 'Die Dauer wird je nach Haarlänge berechnet, damit wir genug Zeit für Sie einplanen.',

  booking: {
    daysAhead: 14,        // buchbar für die nächsten 14 Tage
    // Startzeiten-Raster: pro Leistung (services[].step bzw. Standardregel oben), letzte Startzeit so, dass die Leistung bis Ladenschluss fertig ist
    leadMinutes: 60,      // frühestens 60 Min. ab jetzt
    seedDemoBookings: true, // belegt in der Demo einige Zeiten mit Beispielterminen
    // 'anfrage' = Kund:in sendet einen Terminwunsch, der Salon bestätigt oder schlägt eine andere Zeit vor (Standard)
    // 'sofort'  = Termin ist sofort fest gebucht (wie bisher). Stellt der Inhaber im Team-Kalender um und läuft
    //             der Team-Kalender im selben Browser (gleiche Herkunft thundertiger187.github.io), gilt dessen Einstellung.
    mode: 'anfrage'
  },
  // Gemeinsamer Speicher mit dem Team-Kalender (gleiche Herkunft = gleicher localStorage, nur im selben Browser/Gerät):
  // Terminwünsche, Status, Modus, Dauern und freie Zeiten. Ohne Team-Kalender im selben Browser arbeitet die App allein.
  bridgeKey: 'coroneo-bridge-v1',
  // Terminerinnerungen an die Kundin (2 Tage + 2 Stunden vorher). In der Demo nur Planung + Vorschau –
  // der echte Versand braucht einen Server mit WhatsApp Business API bzw. SMS-Anbieter (siehe README).
  reminders: {
    defaultChannel: 'whatsapp',   // 'whatsapp' | 'sms' | 'none' – Vorauswahl im Buchungsformular
    smsSender: 'Coroneo'      // Absendername der SMS (max. 11 Zeichen)
  },
  storageKey: 'coroneo-kunden-demo-v1'
};

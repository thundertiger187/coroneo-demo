# Coroneo Hairdesign – Kunden-App (Demo-PWA)

> **Demo mit Beispieldaten – keine offizielle App des Salons.** Unabhängiges Konzept/Showcase.

Mobile-first Web-App (PWA) für **Coroneo Hairdesign, Bavierstraße 10, 40699 Erkrath (Bavier-Center)** · Tel. 0211 924 25 44.
Reine statische Dateien – kein Server, keine Datenbank, keine CDNs (eingebettet wird nur die OpenStreetMap-Karte). Offline-fähig, installierbar (Android Chrome & iOS Safari).

**Live:** https://thundertiger187.github.io/coroneo-demo/ · Team-App (Demo): https://thundertiger187.github.io/coroneo-team-demo/salon.html

## Funktionen
Start (Termin buchen / Anrufen, Google-Bewertungen), Leistungen & Preise (laut coroneo.de, Preis je Haarlänge), Team,
Öffnungszeiten („Jetzt geöffnet/geschlossen“), Anfahrt & Kontakt (Anrufen, Google Maps, Instagram, Website, OSM-Karte),
Online-Termin mit Haarlänge (Dauer je Länge, nur Zeiten, in die der ganze Termin passt), Modus *Terminwunsch* (Salon bestätigt) oder *Sofortbuchung*,
Meine Termine (stornieren, .ics), Terminerinnerungen WhatsApp/SMS (Demo-Vorschau), Impressum/Datenschutz.

## Daten
- **Echt (coroneo.de / Google, Stand 21.10.2026):** Name, Inhaber, Adresse, Telefon, E-Mail, USt-ID, Öffnungszeiten (Mo–Fr 9–18, Sa 9–14),
  Team-Namen & Schwerpunkte, Preise, Instagram, Google-Bewertung 4,2 (185), Place-ID.
- **Platzhalter (Demo):** alle Dauern, Arbeitszeiten/PINs der Mitarbeiter:innen, Demo-Termine & Kund:innen, „So geschlossen“ (abgeleitet),
  Aufteilung „kurz-mittel ab 45 € / lang ab 60 €“ bei *Für Ihn*. Siehe Kommentare `PLATZHALTER` in `js/config.js`.

## Design „Coroneo – Apple-Stil“
Angelehnt an apple.com / iOS-Systemapps: heller Hintergrund `#f5f5f7`, weiße Inset-Karten und gruppierte Listen, viel Weißraum,
große fette Überschriften mit enger Laufweite, graue Sekundärtexte, Segment-Steuerung, iOS-Schalter, Milchglas-Kopf und -Tab-Leiste
(`backdrop-filter` + `-webkit-`, deckender Fallback), weiche Schatten, feine Linien-Icons, abgerundete Rechtecke statt Bögen.
Coroneo-Rot `#B3261E` nur sparsam als Akzent. Logo: eigenes iOS-Squircle (Schwarz, weißes „C“, roter Punkt) – nicht das Salon-Logo.
Schrift: System (SF Pro auf Apple-Geräten), sonst Inter (variabel, SIL OFL 1.1, lokal eingebunden).
Keine Bilder oder Logo-Dateien von coroneo.de, keine kostenpflichtigen Template-Assets.

## Technik
`js/config.js` (alle Salon-Daten) · `js/booking.js` (Slots, Speicher, Brücke) · `js/app.js` (UI) · `sw.js` (Cache `coroneo-kunden-v…`).
Speicher: `coroneo-kunden-demo-v1`; Abgleich mit der Team-App **nur im selben Browser** über `coroneo-bridge-v1` (gleicher Ursprung).

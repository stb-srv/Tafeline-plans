# Tafeline – Asset-Paket

Erstellt am 08.10.2026. Enthält alle 19 Positionen der Asset-Liste, einschließlich der optionalen Setup-Illustration und des Portal-Banners. Die Projektordner sind zum Kopieren in die jeweiligen Repositories vorbereitet. Es wurden keine GitHub-Repositories verändert.

`preview.html` zeigt die fertigen Assets im Browser; `Tafeline-Asset-Uebersicht.png` ist eine kompakte Gesamtübersicht. Transparente Bilder können auf dunklen Hintergründen anders wirken; die weißen Logo-Varianten sind ausdrücklich für dunkle Flächen vorgesehen.

## Dateien und Abmessungen

Die CMS-Pfade in der Tabelle liegen unter `tafeline-cms/web/public/`, Lizenzserver-Pfade unter `tafeline-licens/web/public/`, sofern nicht anders angegeben.

| Nr. | Asset | Pfad | Export |
|---|---|---|---|
| 1 | Logo-Symbol | CMS und Lizenzserver: `logo-mark.svg`, `logo-mark.png` | Native SVG-Pfade + PNG 1024×1024, transparent |
| 2 | Neutrales Logo | CMS und Lizenzserver: `logo-wordmark.svg`, `logo-wordmark.png` | SVG + PNG 2172×724, transparent |
| 3 | Weißes Logo | CMS und Lizenzserver: `logo-dark.svg`, `logo-dark.png` | SVG + PNG 2172×724, transparent |
| 3 | Weißes License-Logo | Lizenzserver: `tafeline_license-dark.svg`, `.png` | SVG + PNG 2172×724, transparent |
| 4 | Favicon | CMS und Lizenzserver: `favicon.svg`, `.png`, `.ico` | SVG, PNG 512×512, ICO mit 16/32/48 px; Kachel mit 22 % Rundung |
| 5 | Restaurant-Hero | CMS: `assets/hero-default.jpg` | JPG 2400×1350, 352.594 Byte, ohne Transparenz |
| 6 | Gericht-Platzhalter | CMS: `assets/placeholder-dish.webp` | WebP 800×600, heller Hintergrund, ohne Transparenz |
| 7 | Social-Banner | CMS: `og-image.png` | PNG 1200×630, ohne Transparenz |
| 8 | Apple-Icon | CMS und Lizenzserver: `apple-touch-icon.png` | PNG 180×180, voller Hintergrund |
| 8 | PWA-Icons | CMS und Lizenzserver: `icon-192.png`, `icon-512.png` | PNG 192×192 und 512×512, voller Hintergrund, Symbol ca. 55 % breit |
| 8 | Maskable-Icon | CMS und Lizenzserver: `icon-maskable-512.png` | PNG 512×512, voller Hintergrund, Symbol ca. 45 % breit |
| 8 | Manifest | CMS: `manifest.webmanifest` | Startpfad `/`, Theme `#1b3a5c` |
| 9 | Setup-Willkommen | CMS: `assets/setup-welcome.svg`, `.png` | SVG + PNG 1200×800, transparent |
| 10 | E-Mail-Footer | CMS: `email/powered-by-tafeline.png`, `powered-by-tafeline@2x.png`, `.svg` | PNG 400×80 und 800×160 + SVG; monochrom grau-blau, transparent |
| 11 | Rechnungslogo | `tafeline-licens/public/tafeline_license.png` | Neutrales Logo ohne „License“, PNG 1500×500, transparent |
| 11 | Enger Rechnungszuschnitt | `tafeline-licens/public/logo-invoice-tight.png` | Zusätzlicher eng zugeschnittener Export 1334×257, ohne Verzerrung |
| 12 | Keine Bestellungen | CMS: `assets/empty/empty-orders.svg`, `.png` | SVG + PNG 480×360, transparent |
| 13 | Keine Reservierungen | CMS: `assets/empty/empty-reservations.svg`, `.png` | SVG + PNG 480×360, transparent |
| 14 | Leere Speisekarte | CMS: `assets/empty/empty-menu.svg`, `.png` | SVG + PNG 480×360, transparent |
| 15 | Keine Tische | CMS: `assets/empty/empty-tables.svg`, `.png` | SVG + PNG 480×360, transparent |
| 16 | Kein Feedback | CMS: `assets/empty/empty-feedback.svg`, `.png` | SVG + PNG 480×360, transparent |
| 17 | Fehlerseite | CMS: `assets/empty/error-404.svg`, `.png` | SVG + PNG 480×360, transparent; kein 404-Schriftzug |
| 18 | Login-Hintergrund | CMS und Lizenzserver: `assets/login-bg.jpg` | JPG 1920×1080, 112.029 Byte, ohne Transparenz |
| 19 | Portal-Banner | Lizenzserver: `assets/portal-banner.webp`, `.png` | WebP + PNG 1600×400, ohne Transparenz |

Die zusätzlichen SVG-Dateien der App-Icons dienen als skalierbare Quelldateien. Alle produktiven SVGs enthalten echte Vektorformen und keine eingebetteten PNGs. Der Tafeline-Schriftzug ist in Pfade umgewandelt und benötigt beim Anzeigen keine Schriftinstallation. Die Leerzustände und das Setup-Motiv sind saubere geometrische Vektorausarbeitungen der erzeugten Referenzmotive. Die Dateien in den Projektordnern sind die fertigen Exporte zum Einbauen.

## Einbau

1. Die Inhalte der passenden Projektordner in die Repositories kopieren. `tafeline-licens/public/tafeline_license.png` ist ausdrücklich als neutraler Rechnungslogo-Ersatz vorgesehen; die übrigen Dateien sind neue Assets bzw. Ersatz-Favicons.
2. In `HomePage.tsx` den bisherigen Bild-Fallback `/assets/santorini_bg.png` durch `/assets/hero-default.jpg` ersetzen.
3. Das Gericht-Fallback `/assets/placeholder-dish.webp` in den jeweiligen Bildkomponenten verwenden.
4. Den Inhalt von `integration/head-tags.html` passend in die HTML-Entrypoints übernehmen. Für `og:image` muss eine absolute URL der tatsächlichen veröffentlichten Domain gesetzt werden. Seitentitel und Beschreibung bleiben im jeweiligen Projekt.
5. Das Manifest setzt `/` als Einstiegspunkt. Bei Hosting unter einem Unterpfad oder für separate Küchen-/Kellner-PWAs `id`, `start_url`, `scope` und die Icon-Pfade anpassen. Das Manifest allein enthält keinen Service Worker und stellt keine Offline-Funktion bereit.
6. Im Setup-Assistenten `logo-wordmark.svg` verwenden; optional `assets/setup-welcome.svg` ergänzen.
7. In E-Mails gehört das Betreiberlogo in den Header. Den Tafeline-Badge klein im Footer verwenden; E-Mail-Bild-URLs müssen öffentlich erreichbar und absolut sein. Breite 400 px und Höhe 80 px als natürliche Abmessungen; für einen kleinen Footer z. B. 200×40 px anzeigen und die 2×-Datei als Quelle verwenden.
8. Für das PDF ist `public/tafeline_license.png` der Export in der geforderten Größe. Wenn `LOGO_PATH` angepasst werden kann, `public/logo-invoice-tight.png` verwenden: Weil die ursprüngliche Bildmarke mit Schriftzug sehr breit ist, verbessert dieser zusätzliche Zuschnitt die Darstellung ohne die Proportionen zu verzerren.

Das QR-Motiv im Social-Banner ist dekorativ. Die Test-Uploads, der Benachrichtigungston und das Restaurant-Betreiberlogo wurden gemäß Liste nicht erzeugt oder verändert.

## Herkunft und Prüfung

Die Motive wurden mit dem integrierten Bildgenerator erzeugt; die bestehende Tafeline-Marke aus dieser Unterhaltung war die Logo-Referenz. Prompts: `image-generation-prompts.json`. Formatableitungen, Größenexporte und native Vektorausarbeitungen wurden anschließend erstellt. `asset-inventory.json` enthält Maße, Formate und Dateigrößen der 60 Projektdateien. Die generierten Dark-Mode-Rohentwürfe wurden wegen Transparenzartefakten durch saubere weiße SVG-/PNG-Exporte aus der ursprünglichen Wortmarke ersetzt.

Die GitHub-Quelldateien wurden in diesem Auftrag nicht bearbeitet. Die Einbauhinweise beruhen auf deiner gelieferten Asset-Liste.

ASH DRAMA — TEN-SECOND RISING CURTAIN

The screen opens on fully closed red velvet-style curtains with the ASH logo centred on them. The entire curtain and logo rise over ten seconds to reveal a live embedded view of https://ashdrama.ca/test/index.html. At ten seconds the browser navigates directly to that main website. Skip intro allows immediate entry.

INSTALL
1. Back up your current root index.html.
2. Your actual main website must already be published at https://ashdrama.ca/test/index.html with its own supporting folders.
3. Upload this package's index.html to the repository ROOT (ashdrama.ca).
4. Merge css/opening.css, js/opening.js and images/ash-drama-logo.png into the root's matching folders. If replacing the earlier intro, overwrite these files.
5. Keep your existing CNAME and all test/ files unchanged. Commit your changes.

DO NOT upload this opening page to test/index.html: that is the redirect destination and must contain your actual main site, or the intro will loop and embed itself.

The preview uses your LIVE main page, so it reflects edits to that page without needing a replacement screenshot. It is noninteractive during the intro; the main page becomes fully interactive after navigation. The main page must permit iframe embedding. A network error or blocked embedding may prevent the preview from appearing, but the redirect still runs.

The ten-second clock begins with the curtain lift after the logo loads. Users preferring reduced motion get an immediate static reveal and the same ten-second redirect. Without JavaScript the Skip intro link still opens the main page.

All styling is in css/opening.css; timing and destination are in js/opening.js. If changing the destination, also change the iframe and link addresses in index.html. No DNS changes are needed.

Unzip and open index.html to preview locally; it WILL redirect to the live site after ten seconds. The live site also needs to load for the embedded preview to appear.

ASH DRAMA — FIVE-SECOND CURTAIN OPENING

CONTENTS
index.html — the opening page only
css/opening.css — curtains, stage, spotlights and responsive layout
js/opening.js — five-second redirect
images/ash-drama-logo.png — original ASH logo

INSTALL ON GITHUB PAGES
1. Back up your current root index.html.
2. Ensure your ACTUAL MAIN WEBSITE already works at https://ashdrama.ca/test/index.html. If moving the main site into test/, copy its index.html AND its css, js and images folders into test/ so its relative links still work. Keep CNAME in the repository root.
3. Upload this package's index.html to your repository ROOT. It replaces the homepage with the opening screen.
4. Merge this package's css, js and images folders with the folders at the repository root. Upload the files inside them; do not delete existing folder contents.
5. Keep your existing root CNAME (ashdrama.ca), Pages settings and DNS unchanged.
6. Commit. Visiting ashdrama.ca will show this opening, then redirect to ashdrama.ca/test/index.html.

IMPORTANT: Do not put this opening index.html at test/index.html. That address must hold the actual main website, or you will create a redirect loop.

The five seconds start after the page finishes loading, so the logo can appear before the countdown. Enter site skips ahead. Without JavaScript, the Enter site link still works. Reduced-motion preferences stop the spotlight animation.

To change timing or destination, edit INTRO_DURATION_MS or MAIN_PAGE_URL in js/opening.js. If changing the delay, update the sentence in index.html too. If changing the destination, update the HTML Enter site link for visitors without JavaScript.

LOCAL PREVIEW: Unzip and open index.html. It WILL redirect to the live website after five seconds. To inspect for longer, temporarily increase INTRO_DURATION_MS in your preview copy.

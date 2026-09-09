// Change these two values if you later want another destination or delay.
const MAIN_PAGE_URL = 'https://ashdrama.ca/test/index.html';
const INTRO_DURATION_MS = 5000;
const enterLink = document.querySelector('.enter');
enterLink.href = MAIN_PAGE_URL;
document.documentElement.style.setProperty('--opening-duration', `${INTRO_DURATION_MS}ms`);
let started = false;
let redirectTimer;
function startOpening() {
  if (started) return;
  started = true;
  document.body.classList.add('counting');
  redirectTimer = window.setTimeout(() => {
    // Replace the opening in browser history so Back doesn't repeat the intro.
    window.location.replace(MAIN_PAGE_URL);
  }, INTRO_DURATION_MS);
}
enterLink.addEventListener('click', () => window.clearTimeout(redirectTimer));
// Start the five seconds once the logo and page resources have loaded.
if (document.readyState === 'complete') startOpening();
else window.addEventListener('load', startOpening, { once: true });

// The main website must be at this address, NOT this opening page.
const MAIN_PAGE_URL = 'https://ashdrama.ca/test/index.html';
const INTRO_DURATION_MS = 10000;
const enterLink = document.querySelector('.enter');
const preview = document.querySelector('#main-preview');
enterLink.href = MAIN_PAGE_URL;
preview.src = MAIN_PAGE_URL;
document.documentElement.style.setProperty('--opening-duration', `${INTRO_DURATION_MS}ms`);
let redirectTimer;
let started = false;
function startOpening() {
  if (started) return;
  started = true;
  // Let the closed curtain paint before starting the ten-second lift.
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    document.body.classList.add('rising');
    redirectTimer = window.setTimeout(() => window.location.replace(MAIN_PAGE_URL), INTRO_DURATION_MS);
  }));
}
enterLink.addEventListener('click', () => window.clearTimeout(redirectTimer));
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelector('#opening-status').textContent = 'Entering the site in 10 seconds.';
}
// Wait for the logo, but do not let a slow embedded website hold up the intro.
const logo = document.querySelector('#ash-logo');
if (logo.complete) startOpening();
else {
  logo.addEventListener('load', startOpening, { once: true });
  logo.addEventListener('error', startOpening, { once: true });
}

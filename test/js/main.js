/* EDIT YOUR LINKS AND SHOW INFORMATION HERE. Empty links show a coming-soon dialog. */
const settings = {
  contactEmail: '',
  shows: {
    fall: { title: 'Game of Tiaras', date: 'November 2026', tickets: 'https://www.zeffy.com/en-CA/ticketing/game-of-tiaras-2', pictures: '', info: 'A hilarious dark comedy that mashes up the royal betrayal of King Lear and Game of Thrones with your favourite fairy tale princesses. When an aging king decides to divide his empire, Cinderella, Belle, and the Snow Queen launch into a ruthless, backstabbing power struggle for the crown. Packed with manipulation, unexpected alliances, and a hilariously high body count, this fast-paced satire is a wildly entertaining ride from start to finish..' },
    frozen: { title: 'Disney’s Frozen', date: 'April 2027', tickets: '', pictures: '', info: 'Frozen comes to the All Saints stage in March 2027. Performance dates, cast and ticket details will be announced soon.' }
  }
};
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a,button').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const dialog=document.querySelector('#details');
document.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>{
  const show=settings.shows[button.dataset.show];const action=button.dataset.action;
  if(action!=='info'&&show[action]){window.location.assign(show[action]);return;}
  document.querySelector('#dialog-label').textContent=show.date;
  document.querySelector('#dialog-title').textContent=action==='info'?show.title:action==='tickets'?'Tickets coming soon':'Pictures coming soon';
  document.querySelector('#dialog-body').textContent=action==='info'?show.info:action==='tickets'?`Ticket details for ${show.title} will be announced here when available.`:`Photos from ${show.title} will be shared here when available.`;
  dialog.showModal();
}));
dialog.querySelectorAll('.close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
const toggle=document.querySelector('.motion-toggle');
toggle?.addEventListener('click',()=>{const paused=document.body.classList.toggle('lights-paused');toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'Resume lighting':'Pause lighting';});
if(settings.contactEmail){const contact=document.querySelector('#contact');contact.removeAttribute('data-panel');contact.href='mailto:'+settings.contactEmail;contact.textContent=settings.contactEmail;}
document.querySelector('#year').textContent=new Date().getFullYear();

// Navigation panels remain ready for future production archives and photographs.
const panels={past:{title:'Past Productions',text:'Our production archive is coming soon. Check back for highlights from earlier All Saints shows.'},gallery:{title:'Gallery',text:'Rehearsal, backstage and performance photographs will be shared here as the season unfolds.'},contact:{title:'Contact the Drama Guild',text:'Contact details will be announced here soon.'}};
document.querySelectorAll('[data-panel]').forEach(control=>control.addEventListener('click',event=>{event.preventDefault();const panel=panels[control.dataset.panel];document.querySelector('#dialog-label').textContent='ASH DRAMA GUILD';document.querySelector('#dialog-title').textContent=panel.title;document.querySelector('#dialog-body').textContent=panel.text;dialog.showModal();}));

/* Navigation announcements. Works with either ASH navbar layout. */
(() => {
  if (document.querySelector('#ash-nav-announcement')) return;
  const content = {
    'past productions': {
      label: 'THE ENCORE',
      title: 'Past Productions',
      message: 'Every show has a story. We’re gathering photos, programmes and highlights from past All Saints Drama Guild productions. Once those memories are ready, you’ll find them here. Check back soon!'
    },
    gallery: {
      label: 'BEHIND THE CURTAIN',
      title: 'Gallery',
      message: 'From rehearsals to curtain calls, there’s plenty to capture! Photos of our Drama Guild actors and Tek crew will appear here as we collect them. Check back soon for a look on stage and behind the scenes.'
    }
  };
  const dialog = document.createElement('dialog');
  dialog.id = 'ash-nav-announcement';
  dialog.setAttribute('aria-labelledby', 'ash-nav-title');
  dialog.setAttribute('aria-describedby', 'ash-nav-message');
  dialog.innerHTML = '<div class="ash-announcement-inner"><button type="button" class="ash-announcement-close" aria-label="Close announcement">×</button><p class="ash-announcement-label"></p><span class="ash-announcement-badge">COMING SOON</span><h2 id="ash-nav-title"></h2><p id="ash-nav-message"></p><button type="button" class="ash-announcement-done">Back to the show</button></div>';
  document.body.append(dialog);
  let trigger;
  const dismiss = () => dialog.close();
  dialog.querySelector('.ash-announcement-close').addEventListener('click', dismiss);
  dialog.querySelector('.ash-announcement-done').addEventListener('click', dismiss);
  dialog.addEventListener('close', () => {
    if (trigger && trigger.getClientRects().length) trigger.focus();
    else document.querySelector('.menu')?.focus();
  });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dismiss();
  });
  // Capture the two nav actions before older coming-soon handlers run.
  // All other links and show-card buttons retain their current behaviour.
  document.addEventListener('click', event => {
    const control = event.target.closest('nav a, nav button');
    if (!control) return;
    const key = control.textContent.trim().replace(/\s+/g, ' ').toLowerCase();
    const panel = content[key];
    if (!panel) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    trigger = control;
    document.querySelectorAll('nav.open').forEach(nav => nav.classList.remove('open'));
    document.querySelectorAll('.menu[aria-expanded]').forEach(button => button.setAttribute('aria-expanded', 'false'));
    dialog.querySelector('.ash-announcement-label').textContent = panel.label;
    dialog.querySelector('#ash-nav-title').textContent = panel.title;
    dialog.querySelector('#ash-nav-message').textContent = panel.message;
    if (!dialog.open) dialog.showModal();
  }, true);
})();

/* EDIT YOUR LINKS AND SHOW INFORMATION HERE. Empty links show a coming-soon dialog. */
const settings = {
  contactEmail: '',
  shows: {
    fall: { title: 'Game Of Tiaras', date: 'November 2026', tickets: 'https://www.ticketsource.com/null/game-of-tiaras/2026-11-12/19:00/t-ldxrorv', pictures: '', info: 'Our fall play arrives in November 2026. The title, performance dates, cast and ticket details will be announced soon.' },
    frozen: { title: 'Disney’s Frozen', date: 'April 2027', tickets: '', pictures: '', info: 'Frozen comes to the Meridian Stage at Centrepointe in April 2027. Performance dates, cast and ticket details will be announced soon.' }
  }
};
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
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
toggle.addEventListener('click',()=>{const paused=document.body.classList.toggle('lights-paused');toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'Resume lighting':'Pause lighting';});
if(settings.contactEmail){const contact=document.querySelector('#contact-link');contact.href='mailto:'+settings.contactEmail;contact.textContent=settings.contactEmail;}
document.querySelector('#year').textContent=new Date().getFullYear();

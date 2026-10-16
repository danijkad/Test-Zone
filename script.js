const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('#interest-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const game = String(data.get('game') || '').trim();
    const goal = String(data.get('goal') || '').trim();
    const subject = encodeURIComponent('Stellar Foundations Cohort #1 — Interest');
    const body = encodeURIComponent(`Hi Stellar,\n\nI'd like to register interest in Stellar Foundations Cohort #1.\n\nName/handle: ${name}\nEmail: ${email}\nMain genre: ${game}\nImprovement goal: ${goal || 'Not provided'}\n\nPlease send me more information about the pilot.\n`);
    const status = document.querySelector('#form-status');
    if (status) status.textContent = 'Your email draft is opening. Send it to complete this demo signup.';
    // Replace stellar@example.com with your real inbox, or connect a form provider before launch.
    window.location.href = `mailto:stellar@example.com?subject=${subject}&body=${body}`;
  });
}
